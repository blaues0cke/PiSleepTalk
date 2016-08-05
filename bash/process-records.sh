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

. /usr/sleeptalk/bash/tool/create-record-to-render.sh
. /usr/sleeptalk/bash/tool/length-of-audio-file-in-ms.sh

echo "Processing records"
echo ""

script_name=`basename "$0"`
lock_file_name="/var/lock/.${script_name}.${lock_file_format}"

if [ ! -d "${lock_file_name}" ]; then
	mkdir "$lock_file_name"

	concat_file_queue=""
	concat_file_queue_count=0
	concat_end_timestamp=""
	concat_start_timestamp=""

	# When true, no files are touched
	debug=false

	file_counter_base=0
	file_counter_concated=0
	file_counter_deleted=0
	file_counter_final=0 # todo

	last_audio_file_path="" # add "should be deleted flag"

	# Known "problem": We are not able to detect complete audio files on the end of this loop
	#                  but this is not neccssary since we will get it in the next iteration
	dir_list=$(ls ${audio_file_path_amplitude}/*.${default_audio_format} 2>/dev/null)
	for audio_file_path in $dir_list
	do
		if [ -f $audio_file_path ]; then
		 	echo "... processing file: ${audio_file_path}"

		 	audio_file_name=$(basename $audio_file_path)

		 	timestamp=$(echo $audio_file_name | sed -r -n 's#^([0-9]+)-max-([0-9.]+)-mid-([0-9.]+)\.'"${default_audio_format}"'$#\1#p')
		 	max_amplitude=$(echo $audio_file_name | sed -r -n 's#^([0-9]+)-max-([0-9.]+)-mid-([0-9.]+)\.'"${default_audio_format}"'$#\2#p')
		 	mid_amplitude=$(echo $audio_file_name | sed -r -n 's#^([0-9]+)-max-([0-9.]+)-mid-([0-9.]+)\.'"${default_audio_format}"'$#\3#p')

		 	if [ -z "$timestamp" ]; then
		 		echo "... invalid file found, deleting"

		 		rm $audio_file_path

		 		file_counter_deleted=$((file_counter_deleted + 1))
			else
				echo "... timestamp: ${timestamp}"
				echo "... maximum amplitude: ${max_amplitude}"
				echo "... mid amplitude: ${mid_amplitude}"

				max_amplitude_compare=$(awk 'BEGIN { print ($max_amplitude >= $max_amplitude_threshold) ? "YES" : "NO" }')
				mid_amplitude_compare=$(awk 'BEGIN { print ($mid_amplitude >= $mid_amplitude_threshold) ? "YES" : "NO" }')

				# Thanks to
				# * http://stackoverflow.com/questions/8654051/how-to-compare-two-floating-point-numbers-in-a-bash-script
				# * http://stackoverflow.com/questions/24896433/assigning-the-result-of-test-to-a-variable
				# 
				# Todo: Function?
				[ ${max_amplitude%.*} -eq ${max_amplitude_threshold%.*} ] && [ ${max_amplitude#*.} \> ${max_amplitude_threshold#*.} ] || [ ${max_amplitude%.*} -gt ${max_amplitude_threshold%.*} ];
				max_amplitude_compare=$?
				if [ "$max_amplitude_compare" -eq 0 ]; then max_amplitude_compare=1; else max_amplitude_compare=0; fi

				[ ${mid_amplitude%.*} -eq ${mid_amplitude_threshold%.*} ] && [ ${mid_amplitude#*.} \> ${mid_amplitude_threshold#*.} ] || [ ${mid_amplitude%.*} -gt ${mid_amplitude_threshold%.*} ];
				mid_amplitude_compare=$?
				if [ "${mid_amplitude_compare}" -eq 0 ]; then mid_amplitude_compare=1; else mid_amplitude_compare=0; fi

				echo "... maximum amplitude compare: ${max_amplitude_compare} (${max_amplitude} >= ${max_amplitude_threshold})"
				echo "... mid amplitude compare: ${mid_amplitude_compare} (${mid_amplitude} >= ${mid_amplitude_threshold})"

				if [ "${mid_amplitude_compare}" -eq 0 ] && [ "${max_amplitude_compare}" -eq 0 ]; then

					if [ "${concat_file_queue_count}" -gt 0 ]; then

						if [ "${concat_file_queue_count}" -gt "${max_chunks}" ]; then

							echo "... queue too long, deleting all files"

						else
							# todo move to function
				 			concat_end_timestamp=$(echo $audio_file_name | sed "s/\(\.${default_audio_format}\)//")

				 			echo "... saved end timestamp, it is: ${concat_end_timestamp}"

				 			final_filename="${concat_start_timestamp}-${concat_end_timestamp}.${default_audio_format}"
				 			final_filepath="${temp_file_path}/${final_filename}"

				 			echo "... final filename will be: ${final_filename}, saving file to: ${final_filepath}"
						    echo "... files to concat: ${concat_file_queue}"

						    # Thanks to
						    # * http://superuser.com/questions/571463/how-do-i-append-a-bunch-of-wav-files-while-retaining-not-zero-padded-numeric
				 			sox $concat_file_queue $final_filepath

						 	if [ "$auto_normalize" = true ]; then
								final_filepath_tmp="${temp_file_path}/tmp_${final_filename}"

						 		echo "... normalizing audio"

						 		# Thanks to
						 		# * http://superuser.com/questions/588793/need-to-clean-up-audio-noise-using-sox
						 		sudo sox $final_filepath $final_filepath_tmp remix - highpass 100 norm compand 0.05,0.2 6:-54,-90,-36,-36,-24,-24,0,-12 0 -90 0.1 vad -T 0.6 -p 0.2 -t 5 fade 0.1 reverse vad -T 0.6 -p 0.2 -t 5 fade 0.1 reverse norm -0.5  >>"${error_log_path}" 2>&1

						 		echo "... done normalizing audio"

						 		if [ -f $final_filepath_tmp ]; then
							 		rm $final_filepath
							 		mv $final_filepath_tmp $final_filepath
						 		else
						 			echo "..! normalizing audio failed, falling back to original"
						 		fi
						 	fi	 

						 	if [ "$highpass_filter_enabled" = true ]; then

								final_filepath_tmp="${temp_file_path}/tmp_${final_filename}"

						 		echo "... applying highpass filter"

						 		# Thanks to
						 		# * http://superuser.com/questions/588793/need-to-clean-up-audio-noise-using-sox
						 		sudo sox $final_filepath $final_filepath_tmp highpass "${highpass_filter_threshold}.0" >>"${error_log_path}" 2>&1

						 		echo "... done applying highpass filter"

						 		if [ -f $final_filepath_tmp ]; then
							 		rm $final_filepath
							 		mv $final_filepath_tmp $final_filepath
						 		else
						 			echo "..! applying highpass filter failed, falling back to original"
						 		fi
						 	fi

							file_size_kb=`du -k "${final_filepath}" | cut -f1`

							if [ "${min_file_size_in_kb}" -gt "${file_size_kb}" ]; then
							    echo "..! file is too small, deleting it"

						 		rm $final_filepath

						 		file_counter_deleted=$((file_counter_deleted + 1))
							fi
				 		fi

						if [ "${debug}" = false ]; then
							echo "... deleting ${concat_file_queue}"

							$(rm $concat_file_queue)
						fi

						if [ "${noise_filter_enabled}" = true ]; then
							echo "... appending noise filter"

				 			final_filepath_sox="${temp_file_path}/sox_${final_filename}"

							dir_list_2=$(ls ${audio_file_path_noise}/*.${default_noise_format} 2>/dev/null)
							for sox_profile_path in $dir_list_2
							do
								echo "... appending ${sox_profile_path} to ${final_filepath_sox}"

								sox "${final_filepath}" "${final_filepath_sox}" noisered "${sox_profile_path}" "${noise_filter_sensitivity}" >>"${error_log_path}" 2>&1

								echo "... done, replacing old file"

								mv "${final_filepath_sox}" "${final_filepath}"
							done		
						fi

						length_of_audio_file_in_ms $final_filepath
						audio_length_in_ms="${__FUNCTION_RETURN}"

						if [ "${min_audio_length_in_ms}" -gt "${audio_length_in_ms}" ]; then
						    echo "..! file is too short (shorter than ${min_audio_length_in_ms}ms), deleting it"

					 		rm $final_filepath

					 		file_counter_deleted=$((file_counter_deleted + 1))
						fi

						# todo: delete check fix

						create_record_to_render $final_filepath

						concat_file_queue=""
						concat_file_queue_count=0
						concat_end_timestamp=""
						concat_start_timestamp=""

			 			file_counter_concated=$((file_counter_concated + 1))
					fi

					if [ -n "${last_audio_file_path}" ] && [ -f $last_audio_file_path ]; then
						echo "... deleting last file: ${last_audio_file_path}"

						file_counter_deleted=$((file_counter_deleted + 1))

						if [ "${debug}" = false ]; then
							echo "... deleting ${last_audio_file_path}"

							$(rm $last_audio_file_path)
						fi
					fi

					last_audio_file_path="${audio_file_path}"

					echo "... file too quiet, storing file name: ${audio_file_path}"

				else

					# todo add last (silent) file to queue 

					if [ -n "${concat_file_queue}" ]; then
						concat_file_queue="${concat_file_queue} "
					fi

					if [ -z "${concat_start_timestamp}" ]; then
						# todo move to function
			 			concat_start_timestamp=$(echo $audio_file_name | sed "s/\(\.${default_audio_format}\)//")

			 			echo "... saved start timestamp, it is: ${audio_timestamp}"
					fi

					concat_file_queue="${concat_file_queue}${audio_file_path}"
					concat_file_queue_count=$((concat_file_queue_count + 1))
					file_counter_concated=$((file_counter_concated + 1))

					echo "... adding file to queue: ${audio_file_path}"
					# todo: output when flag is set
					# echo "... queue now: $concat_file_queue"
					echo "... queue size now: ${concat_file_queue_count}"
				fi
		 	fi

		 	echo ""

			file_counter_base=$((file_counter_base + 1))
		fi
	done

	if [ -n "$file_counter_base" ]; then
	    echo "Done processing records, processed files:"
	    echo "... processed files: ${file_counter_base}"
		echo "... chunks merged: ${file_counter_concated}"
	   	echo "... files deleted: ${file_counter_deleted}"
	   	echo "... files generated: ${file_counter_final}"
	else
		echo "Done processing records, no files found";
	fi
  	
  	if [ -d "${lock_file_name}" ]; then
  		rmdir "${lock_file_name}"
	fi
else
	echo "... done - existing lock file found"
fi