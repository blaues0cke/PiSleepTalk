#!/bin/bash

AUDIO_FILE_PATHS=/usr/sleeptalk/records_to_render/*.wav

echo "Rendering subtitled sounds to filename"
echo ""

debug=false
file_counter=0

for audio_file_path in $AUDIO_FILE_PATHS
do
	if [ -f $audio_file_path ]; then

		audio_file_name=$(basename $audio_file_path)

	 	# todo move to function
		filename=$(echo $audio_file_name | sed "s/\(\.wav\)//")
		sleeptalk_file_path="/usr/sleeptalk/records_to_render/$filename.sleeptalk"

		if [ -f $sleeptalk_file_path ]; then

			last_image_path="/usr/sleeptalk/records_to_render/${filename}_base.png"
							
			if [ "$debug" = true ]; then
				last_image_path="/usr/sleeptalk/debug/${filename}_base.png"
			fi

			base_image_path="$last_image_path"

			line_counter=0

			# Thanks to
			# * http://www.imagemagick.org/discourse-server/viewtopic.php?t=13527
			# Todo: Make "xc:black" dynamic
			convert -size 1920x1080 xc:black $last_image_path

			# Thanks to
			# * http://forum.linuxcareer.com/threads/84-Use-BASH-script-to-parse-a-line-from-log-file
			while read line
			do
				echo "... processing line: $line, counter: $line_counter" 

				# Thanks to
				# * http://unix.stackexchange.com/questions/160180/bash-if-statement-missing-error
				if [ $line_counter -gt 4 ]; then

					echo "... clearing screen"

					line_counter=0

					last_image_path="/usr/sleeptalk/records_to_render/${filename}_base.png"
									
					if [ "$debug" = true ]; then
						last_image_path="/usr/sleeptalk/debug/${filename}_base.png"
					fi
				fi

				# Thanks to
				# * http://stackoverflow.com/questions/428109/extract-substring-in-bash
				frame_position=$(echo $line | cut -d'|' -f 1)
				spoken_text=$(echo $line | cut -d'|' -f 2)

				echo "... found text \"$spoken_text\" at position: $frame_position"

				current_image_path="/usr/sleeptalk/records_to_render/${filename}_${frame_position}.png"
				
				if [ "$debug" != false ]; then
					current_image_path="/usr/sleeptalk/debug/${filename}_${frame_position}.png"
				fi

				# Thanks to
				# * https://www.shell-tips.com/2010/06/14/performing-math-calculation-in-bash/
				top_position=$((80 + (line_counter * 200)))

				# Thanks to
				# * http://www.imagemagick.org/Usage/fonts/
				# * http://stackoverflow.com/questions/23236898/add-text-on-image-at-specific-point-using-imagemagick
				# Todo: Make "white" dynamic
				convert "$last_image_path" -gravity North -pointsize 100 -fill white -annotate "+0+${top_position}" "$spoken_text" "$current_image_path" >/dev/null 2>&1

				echo "... created image: $current_image_path"

				last_image_path="$current_image_path"

				echo ""

				line_counter=$((line_counter + 1))

			done < $sleeptalk_file_path

			echo "... removing $base_image_path"

			rm $base_image_path

			sleeptalk_file_path="/usr/sleeptalk/records_to_render/$filename.images_generated"

			touch $sleeptalk_file_path

			echo "... done"

		else

			echo "... no \".sleeptalk\" file found for \"$filename\""

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






