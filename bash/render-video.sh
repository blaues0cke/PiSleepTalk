#!/bin/bash

# 
# This file is part of PiSleepTalk.
# Learn more at: https://github.com/blaues0cke/PiSleepTalk
# 
# Author:  Thomas Kekeisen <pisleeptalk@tk.ca.kekeisen.it>
# License: This work is licensed under the Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License.
#          To view a copy of this license, visit http://creativecommons.org/licenses/by-nc-sa/4.0/.
#

. /usr/sleeptalk/config/config.cfg

echo "Rendering full videos"
echo ""

script_name=`basename "$0"`
lock_file_name="/var/lock/.${script_name}.${lock_file_format}"

if [ ! -d "${lock_file_name}" ]; then
	mkdir "$lock_file_name"

	debug=false
	file_counter=0

	dir_list=$(ls -d ${audio_file_path_rendered}/*/ 2>/dev/null)
	for movie_directory_path in $dir_list
	do
		echo "... processing directory: ${movie_directory_path}"

		# Thanks to
		# * http://unix.stackexchange.com/questions/144298/delete-the-last-character-of-a-string-using-string-manipulation-in-shell-script
		full_video_path=$(echo -n ${movie_directory_path} | head -c -2)
		full_video_path="${full_video_path}.${default_video_format}"

		video_list_path="${movie_directory_path}videos.txt"
		video_string=""
		filter_string=""
		input_file_counter=0
	    blank_movie_path="${movie_directory_path}blank.${default_video_format}"
	    title_file_path="${movie_directory_path}movie.${default_sleeptalk_movie_format}"
	    title_movie_path="${movie_directory_path}00000.${default_video_format}"

	    # Thank s to
	    * http://superuser.com/questions/90008/how-to-clear-the-contents-of-a-file-from-the-command-line
	    truncate -s0 $video_list_path

		echo "... iterate files to create concat list"

		if [ -f $title_file_path ]; then
			echo "file '${title_movie_path}'" >> $video_list_path
			
			video_string="${video_string}|${title_movie_path}"

			filter_string="${filter_string} [${input_file_counter}:v:0]"
			input_file_counter=$((input_file_counter + 1))

			echo "file '${blank_movie_path}'" >> $video_list_path

			video_string="${video_string}|${blank_movie_path}"

			filter_string="${filter_string} [${input_file_counter}:v:0]"
			input_file_counter=$((input_file_counter + 1))
		fi

		video_dir_list=$(ls ${movie_directory_path}*.${default_video_format} 2>/dev/null)
		for video_file_path in $video_dir_list
		do
			file_counter=$((file_counter + 1))

			echo "... processing file: ${video_file_path}"

			# Thanks to
			# * https://trac.ffmpeg.org/wiki/Concatenate#samecodec

			echo "file '${video_file_path}'" >> $video_list_path

			video_string="${video_string}|${video_file_path}"

			filter_string="${filter_string} [${input_file_counter}:v:0] [${input_file_counter}:a:0]"
			input_file_counter=$((input_file_counter + 1))

			echo "file '${blank_movie_path}'" >> $video_list_path

			video_string="${video_string}|${blank_movie_path}"

			filter_string="${filter_string} [${input_file_counter}:v:0]"
			input_file_counter=$((input_file_counter + 1))
		done

		# Thanks to
		# * http://stackoverflow.com/questions/4881930/bash-remove-the-last-line-from-a-file
		tail -n 1 "${video_list_path}" | wc -c | xargs -I {} truncate "${video_list_path}" -s -{}

		echo "... done generating video list"

		blank_frame_path="${movie_directory_path}blank.${default_image_format}"

		gap_frame_count=$(($frames_per_second * $video_gap_length_in_seconds))

		blank_movie_cache_path="${cache_path}/blank_${gap_frame_count}.${default_video_format}"

		if [ "$cache_enabled" = true ] && [ -f "${blank_movie_cache_path}" ]; then
			echo "... copying cached black frame from ${blank_movie_cache_path} to ${blank_movie_path}"

			cp "${blank_movie_cache_path}" "${blank_movie_path}"
		else
			# Thanks to
			# * http://www.imagemagick.org/discourse-server/viewtopic.php?t=13527
			# Todo: Make "xc:black" dynamic
			convert -size 1920x1080 xc:black $blank_frame_path

			echo "... creating ${gap_frame_count} frame images"

			# Thanks to
			# * http://tldp.org/HOWTO/Bash-Prog-Intro-HOWTO-7.html
		    i=0
		    until [ $i -eq $gap_frame_count ]; do
		    	# Thanks to
		    	# * http://stackoverflow.com/questions/3672301/linux-shell-script-to-add-leading-zeros-to-file-names
		    	target_frame_position_long=$(printf %04d ${i})
		    	new_image_file_path="${movie_directory_path}blank-${target_frame_position_long}.${default_image_format}"

		    	echo "... copying ${blank_frame_path} to ${new_image_file_path}"
		        
		    	cp $blank_frame_path $new_image_file_path

		        i=$((i + 1))
		    done

		    rm $blank_frame_path

		    images_file_path="${movie_directory_path}blank-%04d.${default_image_format}"

			# Thanks to
			# * https://trac.ffmpeg.org/wiki/Create%20a%20video%20slideshow%20from%20images
			ffmpeg -y -framerate $frames_per_second -i "${images_file_path}" -c:v libx264 -r 30 -pix_fmt yuv420p "${blank_movie_path}" >>"${error_log_path}" 2>&1


ffmpeg -y -f lavfi -i anullsrc -i "${blank_movie_path}" -t ${video_gap_length_in_seconds} -c:v copy -c:a aac -strict experimental "${blank_movie_path}"





			echo "... done rendering movie: ${blank_movie_path}"

			rm ${movie_directory_path}blank-*.${default_image_format}

			echo "... deleted blank images"

			if [ "$cache_enabled" = true ]; then
				cp "${blank_movie_path}" "${blank_movie_cache_path}"
			fi
		fi

		if [ -f $title_file_path ]; then
			# Thanks to
			# * http://stackoverflow.com/questions/2439579/how-to-get-the-first-line-of-a-file-in-a-bash-script
			movie_title=$(head -n 1 ${title_file_path})
			movie_title_hash=$(echo "${movie_title}" | md5sum | cut -f1 -d" ")
			title_frame_path="${movie_directory_path}/title.${default_image_format}"

			echo "... movie has a title, will be: ${movie_title} (${movie_title_hash})"

			# Thanks to
			# * http://stackoverflow.com/questions/1602378/how-to-calculate-a-hash-for-a-string-url-in-bash-for-wget-caching
			title_movie_cache_path="${cache_path}/title_${title_time_in_seconds}_${movie_title_hash}.${default_video_format}"

			if [ "$cache_enabled" = true ] && [ -f "${title_movie_cache_path}" ]; then
				echo "... copying cached title movie from ${title_movie_cache_path} to ${title_movie_path}"

				cp "${title_movie_cache_path}" "${title_movie_path}"
			else
				# Thanks to
				# * http://www.imagemagick.org/discourse-server/viewtopic.php?t=13527
				# Todo: Make "xc:black" dynamic
				convert -size 1920x1080 xc:black $title_frame_path

				# Thanks to
				# * http://www.imagemagick.org/Usage/fonts/
				# * http://stackoverflow.com/questions/23236898/add-text-on-image-at-specific-point-using-imagemagick
				# * http://stackoverflow.com/questions/18062778/how-to-hide-command-output-in-bash
				# Todo: Make "white" dynamic
				convert "${title_frame_path}" -gravity North -pointsize 100 -fill white -annotate "+0+460" "${movie_title}" "${title_frame_path}" >>"${error_log_path}" 2>&1

				echo "... creating image: ${title_frame_name}"

				title_frame_count=$(($frames_per_second * $title_time_in_seconds))

				echo "... creating ${title_frame_count} frame images"

				# Thanks to
				# * http://tldp.org/HOWTO/Bash-Prog-Intro-HOWTO-7.html
		        i=0
		        until [ $i -eq $title_frame_count ]; do
		        	# Thanks to
		        	# * http://stackoverflow.com/questions/3672301/linux-shell-script-to-add-leading-zeros-to-file-names
		        	target_frame_position_long=$(printf %04d ${i})
		        	new_image_file_path="${movie_directory_path}/title-${target_frame_position_long}.${default_image_format}"

		        	echo "... copying ${title_frame_path} to ${new_image_file_path}"
		            
		        	cp $title_frame_path $new_image_file_path

		            i=$((i + 1))
		        done

		        rm $title_frame_path

		        images_file_path="${movie_directory_path}/title-%04d.${default_image_format}"

		        echo "... rendering title video"

				# Thanks to
				# * https://trac.ffmpeg.org/wiki/Create%20a%20video%20slideshow%20from%20images
				ffmpeg -y -framerate $frames_per_second -i "${images_file_path}" -c:v libx264 -r 30 -pix_fmt yuv420p "${title_movie_path}" #>>"${error_log_path}" 2>&1
			


				ffmpeg -y -f lavfi -i anullsrc -i "${title_movie_path}" -t ${title_time_in_seconds} -c:v copy -c:a aac -strict experimental "${title_movie_path}"


				echo "... done rendering movie: ${title_movie_path}"

				rm ${movie_directory_path}/title-*.${default_image_format}

				echo "... deleted title images"

				if [ "$cache_enabled" = true ]; then
					cp "${title_movie_path}" "${title_movie_cache_path}"

					echo "... cached title movie"
				fi
			fi
		fi

		echo "... will render final movie to: ${full_video_path}"

		# ORIGINAL: ffmpeg -f concat -i "${video_list_path}" -c copy "${full_video_path}" #>>"${error_log_path}" 2>&1







		#ffmpeg -f concat -i "${video_list_path}" -c copy "${full_video_path}" >>"${error_log_path}" 2>&1
		# Thanks to
		# * http://stackoverflow.com/questions/11469989/how-can-i-strip-first-x-characters-from-string-in-shellscript-using-sed
		video_string=$(echo "${video_string}" | cut -c 2-)
		filter_string=$(echo "${filter_string}" | cut -c 2-)


		echo "... video string: ${video_string}"
 
		
		#ffmpeg -i concat:"${video_string}" -filter_complex "${filter_string} concat=n=${input_file_counter}:v=1:a=1 [v] [a]" -map "[v]" -map "[a]" "${full_video_path}"
		ffmpeg -f concat -i "${video_list_path}" -filter_complex "${filter_string} concat=n=${input_file_counter}:v=1:a=1 [v] [a]" -map "[v]" -map "[a]" "${full_video_path}"





		# Does not work
		##ffmpeg -i concat:"${video_string}" -acodec copy -vcodec copy "${full_video_path}"

		# Does not work
		#ffmpeg -f concat -i "${video_list_path}" -acodec copy -vcodec copy "${full_video_path}" >>"${error_log_path}" 2>&1







		if [ -f $full_video_path ]; then
			echo "... done, deleting resources folder for video"

			rm -rf ${movie_directory_path}

			echo "... done"
			echo ""
		else
			echo "... error while merging video, aborting"
		fi
	done

	if [ -n "$file_counter" ]; then
	    echo "Done rendering full videos, processed files: ${file_counter}"
	else
		echo "Done rendering full videos, no files found";
	fi
  	
  	if [ -d "${lock_file_name}" ]; then
  		rmdir "${lock_file_name}"
	fi
else
	echo "... done - existing lock file found"
fi