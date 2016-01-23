#!/bin/bash

# 
# This file is part of PiSleepTalk.
# Learn more at: https://github.com/blaues0cke/PiSleepTalk
# 
# Author:  Thomas Kekeisen <pisleeptalk@tk.ca.kekeisen.it>
# License: This work is licensed under the Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License.
#          To view a copy of this license, visit http://creativecommons.org/licenses/by-nc-sa/4.0/.
#

AUDIO_FILE_PATHS=/usr/sleeptalk/records-to-render/*.wav

echo "Rendering video"
echo ""

debug=false
file_counter=0

for audio_file_path in $AUDIO_FILE_PATHS
do
	if [ -f $audio_file_path ]; then

		audio_file_name=$(basename $audio_file_path)

		length_in_seconds=$(sox $audio_file_path -n stat 2>&1 | sed -n 's#^Length (seconds):[^0-9]*\([0-9.]*\)$#\1#p')
		# Thanks to
		# * http://www.unix.com/shell-programming-and-scripting/160300-ceiling-floor-functions.html
		length_in_seconds_rounded=$(( `echo ${length_in_seconds}|cut -f1 -d"."` + 1 ))
		total_frames=$(($length_in_seconds_rounded * 15))

		echo "... length in seconds: ${length_in_seconds}"
		echo "... length in seconds rounded: ${length_in_seconds_rounded}"
		echo "... total frames: ${total_frames}"

	 	# todo move to function
		filename=$(echo $audio_file_name | sed "s/\(\.wav\)//")
		sleeptalk_file_path="/usr/sleeptalk/records-to-render/${filename}.images-generated"

		echo "... filename: ${filename}"

		if [ -f $sleeptalk_file_path ]; then

			mp3_file_path="/usr/sleeptalk/records-to-render/${filename}.mp3"

			echo "... transcoding wav to mp3 (${audio_file_path} to ${mp3_file_path})"
			start_time=$(date +%s.%N)

			# Thanks to
			# * http://spielwiese.la-evento.com/hokuspokus/seite2.html
			ffmpeg -y -i "$audio_file_path" "$mp3_file_path" >>/usr/sleeptalk/error.log 2>&1

			# Thanks to
			# * http://unix.stackexchange.com/questions/12068/how-to-measure-time-of-program-execution-and-store-that-inside-a-variable
			end_time=$(date +%s.%N)
			time_difference=$(echo "$end_time - $start_time" | bc)
			echo "... done transcoding wav to mp3 (${time_difference}s)"

			images_file_path="/usr/sleeptalk/records-to-render/${filename}-%04d.png"

			echo "... images file path: ${images_file_path}"

			video_file_path="/usr/sleeptalk/records-to-render/${filename}-no-sound.mp4"

			echo "... video file path: ${video_file_path}"
			echo "... rendering images to video (${images_file_path} to ${video_file_path})"
			start_time=$(date +%s.%N)

			# Thanks to
			# * https://trac.ffmpeg.org/wiki/Create%20a%20video%20slideshow%20from%20images
			ffmpeg -y -framerate 15 -i "$images_file_path" -c:v libx264 -r 30 -pix_fmt yuv420p "$video_file_path" >>/usr/sleeptalk/error.log 2>&1

			end_time=$(date +%s.%N)
			time_difference=$(echo "$end_time - $start_time" | bc)
			echo "... done rendering images to video (${time_difference}s)"

			final_video_file_path="/usr/sleeptalk/records-final/${length_in_seconds_rounded}-${filename}.mp4"

			echo "... concating audio and video (${mp3_file_path} + ${video_file_path} to ${final_video_file_path})"
			start_time=$(date +%s.%N)

			# Thanks to
			# * http://stackoverflow.com/questions/9049970/how-to-combine-a-mp4-video-with-a-wav-audio-with-an-offset-in-ffmpeg-from-comm
			# * http://stackoverflow.com/questions/11779490/ffmpeg-how-to-add-new-audio-not-mixing-in-video
			ffmpeg -y -i "$video_file_path" -i "$mp3_file_path" -map 0:v -map 1:a -vcodec copy -acodec copy -shortest "$final_video_file_path" >>/usr/sleeptalk/error.log 2>&1

			end_time=$(date +%s.%N)
			time_difference=$(echo "$end_time - $start_time" | bc)
			echo "... done concating audio and video (${time_difference}s)"

			echo "... deleting mp3 file and no-sound video (${mp3_file_path} + ${video_file_path})"

			if [ "$debug" = false ]; then
				if [ -f $video_file_path ]; then
					rm $video_file_path
				fi

				if [ -f $mp3_file_path ]; then
					rm $mp3_file_path
				fi
		
				# Thanks to
				# * http://stackoverflow.com/questions/4325216/rm-all-files-except-some
				find /usr/sleeptalk/records-to-render/${filename}.* | xargs rm
				find /usr/sleeptalk/records-to-render/${filename}-*.* | xargs rm
			fi

			echo "... done"

		else

			echo "... no \".images-generated\" file found for \"${filename}\""

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