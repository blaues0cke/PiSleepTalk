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

echo "Rendering video"
echo ""

debug=false
file_counter=0

dir_list=$(ls ${audio_file_path_to_render}/*.${default_audio_format} 2>/dev/null)
for audio_file_path in $dir_list
do
	if [ -f $audio_file_path ]; then

		audio_file_name=$(basename $audio_file_path)

		length_in_seconds=$(sox $audio_file_path -n stat 2>&1 | sed -n 's#^Length (seconds):[^0-9]*\([0-9.]*\)$#\1#p')
		# Thanks to
		# * http://www.unix.com/shell-programming-and-scripting/160300-ceiling-floor-functions.html
		length_in_seconds_rounded=$(( `echo ${length_in_seconds}|cut -f1 -d"."` + 1 ))
		total_frames=$(($length_in_seconds_rounded * $frames_per_second))

		echo "... length in seconds: ${length_in_seconds}"
		echo "... length in seconds rounded: ${length_in_seconds_rounded}"
		echo "... total frames: ${total_frames}"

	 	# todo move to function
		filename=$(echo $audio_file_name | sed "s/\(\.${default_audio_format}\)//")
		sleeptalk_file_path="${audio_file_path_to_render}/${filename}.${default_image_lock_file_format}"

		echo "... filename: ${filename}"

		if [ -f $sleeptalk_file_path ]; then

			mp3_file_path="${audio_file_path_to_render}/${filename}.${default_video_audio_format}"

			echo "... transcoding ${default_audio_format} to ${default_video_audio_format} (${audio_file_path} to ${mp3_file_path})"
			start_time=$(date +%s.%N)

			# Thanks to
			# * http://spielwiese.la-evento.com/hokuspokus/seite2.html
			ffmpeg -y -i "$audio_file_path" "$mp3_file_path" >>/usr/sleeptalk/error.log 2>&1

			# Thanks to
			# * http://unix.stackexchange.com/questions/12068/how-to-measure-time-of-program-execution-and-store-that-inside-a-variable
			end_time=$(date +%s.%N)
			time_difference=$(echo "${end_time} - ${start_time}" | bc)
			echo "... done transcoding ${default_audio_format} to ${default_video_audio_format} (${time_difference}s)"

			images_file_path="${audio_file_path_to_render}/${filename}-%04d.${default_image_format}"

			echo "... images file path: ${images_file_path}"

			video_file_path="${audio_file_path_to_render}/${filename}-no-sound.${default_video_format}"

			echo "... video file path: ${video_file_path}"
			echo "... rendering images to video (${images_file_path} to ${video_file_path})"
			start_time=$(date +%s.%N)

			# Thanks to
			# * https://trac.ffmpeg.org/wiki/Create%20a%20video%20slideshow%20from%20images
			ffmpeg -y -framerate $frames_per_second -i "${images_file_path}" -c:v libx264 -r 30 -pix_fmt yuv420p "${video_file_path}" >>/usr/sleeptalk/error.log 2>&1

			end_time=$(date +%s.%N)
			time_difference=$(echo "${end_time} - ${start_time}" | bc)
			echo "... done rendering images to video (${time_difference}s)"

			final_video_file_path="${audio_file_path_final}/${length_in_seconds_rounded}-${filename}.${default_video_format}"

			echo "... concating audio and video (${mp3_file_path} + ${video_file_path} to ${final_video_file_path})"
			start_time=$(date +%s.%N)

			# Thanks to
			# * http://stackoverflow.com/questions/9049970/how-to-combine-a-mp4-video-with-a-wav-audio-with-an-offset-in-ffmpeg-from-comm
			# * http://stackoverflow.com/questions/11779490/ffmpeg-how-to-add-new-audio-not-mixing-in-video
			ffmpeg -y -i "${video_file_path}" -i "${mp3_file_path}" -map 0:v -map 1:a -vcodec copy -acodec copy -shortest "${final_video_file_path}" >>/usr/sleeptalk/error.log 2>&1

			end_time=$(date +%s.%N)
			time_difference=$(echo "${end_time} - ${start_time}" | bc)
			echo "... done concating audio and video (${time_difference}s)"

			echo "... deleting ${default_video_audio_format} file and no-sound video (${mp3_file_path} + ${video_file_path})"

			if [ "$debug" = false ]; then
				if [ -f $video_file_path ]; then
					rm $video_file_path
				fi

				if [ -f $mp3_file_path ]; then
					rm $mp3_file_path
				fi
		
				# Thanks to
				# * http://stackoverflow.com/questions/4325216/rm-all-files-except-some
				find ${audio_file_path_to_render}/${filename}.* | xargs rm
				find ${audio_file_path_to_render}/${filename}-*.* | xargs rm
			fi

			echo "... done"

		else

			echo "... no \".${default_image_lock_file_format}\" file found for \"${filename}\" (${sleeptalk_file_path})"

		fi

		echo ""

		file_counter=$((file_counter + 1))
	fi
done

if [ -n "$file_counter" ]; then
    echo "Done rendering videos, processed files: ${file_counter}"
else
	echo "Done rendering videos, no files found";
fi