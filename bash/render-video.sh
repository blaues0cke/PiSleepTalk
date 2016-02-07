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

debug=false
file_counter=0

dir_list=$(ls -d ${audio_file_path_rendered}/*/ 2>/dev/null)
for movie_directory_path in $dir_list
do
	echo "... processing directory: ${movie_directory_path}"

	video_list_path="${movie_directory_path}/videos.txt"
    blank_movie_path="${movie_directory_path}/blank.${default_video_format}"
    title_file_path="${movie_directory_path}/movie.${default_sleeptalk_movie_format}"
    title_movie_path="${movie_directory_path}/00000.${default_video_format}"

    truncate -s0 $video_list_path

	echo "... iterate files to create concat list"

	if [ -f $title_file_path ]; then
		echo "file ${title_movie_path}" >> $video_list_path
		echo "file ${blank_movie_path}" >> $video_list_path
	fi

	video_dir_list=$(ls ${movie_directory_path}/*.${default_video_format} 2>/dev/null)
	for video_file_path in $video_dir_list
	do
		file_counter=$((file_counter + 1))

		echo "... processing file: ${video_file_path}"

		# Thanks to
		# * https://trac.ffmpeg.org/wiki/Concatenate#samecodec

		echo "file ${video_file_path}" >> $video_list_path
		echo "file ${blank_movie_path}" >> $video_list_path
	done

	tail -n 1 "${video_list_path}" | wc -c | xargs -I {} truncate "${video_list_path}" -s -{}

	echo "... done generating video list"

	exit;

	blank_frame_path="${movie_directory_path}/title.${default_image_format}"

	# Thanks to
	# * http://www.imagemagick.org/discourse-server/viewtopic.php?t=13527
	# Todo: Make "xc:black" dynamic
	convert -size 1920x1080 xc:black $blank_frame_path

	gap_frame_count=$(($frames_per_second * $video_gap_length_in_seconds))

	echo "... creating ${gap_frame_count} frame images"

	# Thanks to
	# * http://tldp.org/HOWTO/Bash-Prog-Intro-HOWTO-7.html
    i=0
    until [ $i -eq $gap_frame_count ]; do
    	# Thanks to
    	# * http://stackoverflow.com/questions/3672301/linux-shell-script-to-add-leading-zeros-to-file-names
    	target_frame_position_long=$(printf %04d ${i})
    	new_image_file_path="${movie_directory_path}/blank-${target_frame_position_long}.${default_image_format}"

    	echo "... copying ${blank_frame_path} to ${new_image_file_path}"
        
    	cp $blank_frame_path $new_image_file_path

        i=$((i + 1))
    done

    rm $blank_frame_path

    images_file_path="${movie_directory_path}/blank-%04d.${default_image_format}"

	# Thanks to
	# * https://trac.ffmpeg.org/wiki/Create%20a%20video%20slideshow%20from%20images
	ffmpeg -y -framerate $frames_per_second -i "${images_file_path}" -c:v libx264 -r 30 -pix_fmt yuv420p "${blank_movie_path}" >>"${error_log_path}" 2>&1

	echo "... done rendering movie: ${blank_movie_path}"

	rm ${movie_directory_path}/blank-*.${default_image_format}

	echo "... deleted blank images"







	# todo rename all files

	# todo add blank parts



	title_file_path="${movie_directory_path}/movie.${default_sleeptalk_movie_format}"

	if [ -f $title_file_path ]; then
		# Thanks to
		# * http://stackoverflow.com/questions/2439579/how-to-get-the-first-line-of-a-file-in-a-bash-script
		movie_title=$(head -n 1 ${title_file_path})

		echo "... movie has a title, will be: ${movie_title}"

		title_frame_path="${movie_directory_path}/title.${default_image_format}"

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

		# Thanks to
		# * https://trac.ffmpeg.org/wiki/Create%20a%20video%20slideshow%20from%20images
		ffmpeg -y -framerate $frames_per_second -i "${images_file_path}" -c:v libx264 -r 30 -pix_fmt yuv420p "${title_movie_path}" >>"${error_log_path}" 2>&1
	
		echo "... done rendering movie: ${title_movie_path}"

		rm ${movie_directory_path}/title-*.${default_image_format}

		echo "... deleted title images"
	fi

	echo ""
done

if [ -n "$file_counter" ]; then
    echo "Done rendering full videos, processed files: ${file_counter}"
else
	echo "Done rendering full videos, no files found";
fi