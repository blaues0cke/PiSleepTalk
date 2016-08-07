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

echo "Rendering images"
echo ""

script_name=`basename "$0"`
lock_file_name="/var/lock/.${script_name}.${lock_file_format}"

if [ ! -d "${lock_file_name}" ]; then
	mkdir "$lock_file_name"

	debug=false
	file_counter=0

	dir_list=$(ls ${audio_file_path_to_render}/*.${default_audio_format} 2>/dev/null)
	for audio_file_path in $dir_list
	do
		if [ -f $audio_file_path ]; then

			length_in_seconds=$(sox $audio_file_path -n stat 2>&1 | sed -n 's#^Length (seconds):[^0-9]*\([0-9.]*\)$#\1#p')
			# Thanks to
			# * http://www.unix.com/shell-programming-and-scripting/160300-ceiling-floor-functions.html
			length_in_seconds_rounded=$(( `echo ${length_in_seconds}|cut -f1 -d"."` + 1 ))
			total_frames=$(($length_in_seconds_rounded * $frames_per_second))

			echo "... audio length: ${length_in_seconds} (${length_in_seconds_rounded}, frames: ${total_frames})"

			audio_file_name=$(basename $audio_file_path)
			filename=$(echo $audio_file_name | sed "s/\(\.${default_audio_format}\)//")
			sleeptalk_file_path="${audio_file_path_to_render}/${filename}.${default_sleeptalk_format}"
			lock_image_file_path="${audio_file_path_to_render}/${filename}.${default_image_lock_file_format}"

			if [ ! -f $lock_image_file_path ]; then
				if [ -f $sleeptalk_file_path ]; then

					echo "... starting to create images, sleeptalk file path: ${sleeptalk_file_path}"

					last_image_path="${audio_file_path_to_render}/${filename}-base.${default_image_format}"
					base_image_path="${last_image_path}"

					last_frame_position=-1

					line_counter=0

					# Thanks to
					# * http://www.imagemagick.org/discourse-server/viewtopic.php?t=13527
					convert -size 1920x1080 xc:black $last_image_path

					echo "... creating image: ${last_image_path}"

					# Thanks to
					# * http://forum.linuxcareer.com/threads/84-Use-BASH-script-to-parse-a-line-from-log-file
					while read line
					do
						echo "... processing line: ${line}, counter: ${line_counter}" 

						# Thanks to
						# * http://stackoverflow.com/questions/428109/extract-substring-in-bash
						frame_position=$(echo $line | cut -d'|' -f 1)
						spoken_text=$(echo $line | cut -d'|' -f 2)

						# Thanks to
						# * http://stackoverflow.com/questions/11123717/removing-leading-zeros-before-passing-the-variable-to-iptables
						frame_position_clean=$(echo $frame_position | sed "s/^0*\([1-9]\)/\1/;s/^0*$/0/")
						last_frame_position_clean=$(echo $last_frame_position | sed "s/^0*\([1-9]\)/\1/;s/^0*$/0/")

						if [ -n "${line}" ] && [ -n "${spoken_text}" ]; then

							echo "... frame position clean: ${frame_position_clean}"
							echo "... last frame position clean: ${last_frame_position_clean}"
							echo "... line counter: ${line_counter}"

							if [ "${line_counter}" -eq 0 ] && [ "${frame_position_clean}" -gt 0 ]; then

								echo "... not starting from frame 0000 with text, filling up with blank images"

								# Thanks to
								# * http://tldp.org/HOWTO/Bash-Prog-Intro-HOWTO-7.html
						        i=0
						        until [ $i -eq $frame_position_clean ]; do
						        	# Thanks to
						        	# * http://stackoverflow.com/questions/3672301/linux-shell-script-to-add-leading-zeros-to-file-names
						        	target_frame_position_long=$(printf %04d ${i})
						        	new_image_file_path="${audio_file_path_to_render}/${filename}-${target_frame_position_long}.${default_image_format}"

						        	echo "... copying ${last_image_path} to ${new_image_file_path}"
						            
						        	cp $last_image_path $new_image_file_path

						            i=$((i + 1))
						        done
							fi
							
							if [ $last_frame_position -gt -1 ]; then

								difference=$(($frame_position_clean - $last_frame_position_clean))

								echo "... gap to last image: ${difference} (${frame_position_clean} - ${last_frame_position_clean})"

								if [ $difference -gt -1 ]; then

									echo "... copying images to fit the frame requirements"

									# Thanks to
									# * http://tldp.org/HOWTO/Bash-Prog-Intro-HOWTO-7.html
							        i=1
							        until [ $i -eq $difference ]; do

							        	target_frame_position=$((last_frame_position_clean + i))
							        	# Thanks to
							        	# * http://stackoverflow.com/questions/3672301/linux-shell-script-to-add-leading-zeros-to-file-names
							        	target_frame_position_long=$(printf %04d ${target_frame_position})
							        	new_image_file_path="${audio_file_path_to_render}/${filename}-${target_frame_position_long}.${default_image_format}"

							        	echo "... copying ${last_image_path} to ${new_image_file_path}"
							            
							        	cp $last_image_path $new_image_file_path

							            i=$((i + 1))
							        done
								fi
							fi

							# Thanks to
							# * http://unix.stackexchange.com/questions/160180/bash-if-statement-missing-error
							if [ $line_counter -gt 4 ]; then

								echo "... clearing screen"

								line_counter=0

								last_image_path="${audio_file_path_to_render}/${filename}-base.${default_image_format}"
												
								if [ "$debug" = true ]; then
									last_image_path="${audio_file_path_debug}/${filename}-base.${default_image_format}"
								fi
							fi

							echo "... found text \"${spoken_text}\" at position: ${frame_position}"

							current_image_path="${audio_file_path_to_render}/${filename}-${frame_position}.${default_image_format}"
							
							# Thanks to
							# * https://www.shell-tips.com/2010/06/14/performing-math-calculation-in-bash/
							top_position=$((80 + (line_counter * 200)))

							# Thanks to
							# * http://www.imagemagick.org/Usage/fonts/
							# * http://stackoverflow.com/questions/23236898/add-text-on-image-at-specific-point-using-imagemagick
							# * http://stackoverflow.com/questions/18062778/how-to-hide-command-output-in-bash
							convert "${last_image_path}" -gravity North -pointsize 100 -fill white -annotate "+0+${top_position}" "${spoken_text}" "${current_image_path}" >>"${error_log_path}" 2>&1

							echo "... created image: ${current_image_path}"

							last_image_path="${current_image_path}"
							last_frame_position="${frame_position}"

							line_counter=$((line_counter + 1))
						else
							echo "... skipping empty line"
						fi

						echo ""

					done < $sleeptalk_file_path

					if [ $last_frame_position -gt -1 ]; then

						# Thanks to
						# * http://stackoverflow.com/questions/11123717/removing-leading-zeros-before-passing-the-variable-to-iptables
						frame_position_clean=$(echo ${frame_position} | sed "s/^0*\([1-9]\)/\1/;s/^0*$/0/")
						last_frame_position_clean=$(echo ${last_frame_position} | sed "s/^0*\([1-9]\)/\1/;s/^0*$/0/")

						difference=$(($total_frames - $last_frame_position_clean))

						echo "... gap to last image: ${difference} (${total_frames} - ${last_frame_position_clean})"

						if [ $difference -gt -1 ]; then

							echo "... copying images to fit the frame requirements"

							# Thanks to
							# * http://tldp.org/HOWTO/Bash-Prog-Intro-HOWTO-7.html
					        i=1
					        until [ $i -gt $difference ]; do

					        	target_frame_position=$((last_frame_position_clean + i))
					        	# Thanks to
					        	# * http://stackoverflow.com/questions/3672301/linux-shell-script-to-add-leading-zeros-to-file-names
					        	target_frame_position_long=$(printf %04d ${target_frame_position})
					        	new_image_file_path="${audio_file_path_to_render}/${filename}-${target_frame_position_long}.${default_image_format}"

					        	echo "... copying ${last_image_path} to ${new_image_file_path}"
					            
					        	cp $last_image_path $new_image_file_path

					            i=$((i + 1))
					        done
						fi
					fi

					echo "... removing ${base_image_path}"

					rm $base_image_path

					touch $lock_image_file_path

					echo "... done"

				else
					echo "... no \".${default_sleeptalk_format}\" file found for \"${filename}\""
				fi
			else
				echo "... skipping \".${default_image_lock_file_format}\" file found for \"${filename}\""
			fi

			echo ""

			file_counter=$((file_counter + 1))
		fi
	done

	if [ -n "${file_counter}" ]; then
	    echo "Done rendering images, processed files: ${file_counter}"
	else
		echo "Done rendering images, no files found";
	fi
  	
  	if [ -d "${lock_file_name}" ]; then
  		rmdir "${lock_file_name}"
	fi
else
	echo "... done - existing lock file found"
fi