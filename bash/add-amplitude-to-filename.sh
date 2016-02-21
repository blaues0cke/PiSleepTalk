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

echo "Adding amplitude to filename"
echo ""

script_name=`basename "$0"`
lock_file_name="/var/lock/.${script_name}.${lock_file_format}"

if [ ! -d "${lock_file_name}" ]; then
	mkdir "$lock_file_name"

	set file_counter=0

	dir_list=$(ls ${audio_file_path_timestamp}/*.${default_audio_format} 2>/dev/null)
	for audio_file_path in $dir_list
	do
		if [ -f $audio_file_path ]; then
		 	echo "... processing file: $audio_file_path"

		 	audio_file_name=$(basename $audio_file_path)

		 	# todo move to function
		 	audio_timestamp=$(echo $audio_file_name | sed "s/\(\.${default_audio_format}\)//")

		 	# todo: combine those two sox calls to one since both required amplitudes are retured with each call

		 	maximum_amplitude=$(sox $audio_file_path -n stat 2>&1 | sed -n 's#^Maximum amplitude:[^0-9]*\([0-9.]*\)$#\1#p')
		    midline_amplitude=$(sox $audio_file_path -n stat 2>&1 | sed -n 's#^Midline amplitude:[^0-9]*\([0-9.]*\)$#\1#p')

		 	echo "... maximum amplitude: $maximum_amplitude"
		 	echo "... midline amplitude: $midline_amplitude"

			if [ -n "$maximum_amplitude" ] && [ -n "$midline_amplitude" ]; then

			 	new_audio_file_path="${audio_file_path_amplitude}/${audio_timestamp}-max-${maximum_amplitude}-mid-${midline_amplitude}.${default_audio_format}"

			 	echo "... new file path: ${new_audio_file_path}"

			 	mv $audio_file_path $new_audio_file_path

			else

				echo "... not able to get maximum and midline amplitude from file, file may be no audio file"
				echo "... deleting ${audio_file_path}"

				rm $audio_file_path
			fi

			echo "... done"
			echo ""

			file_counter=$((file_counter + 1))
		fi
	done

	if [ -n "$file_counter" ]; then
	    echo "Done adding amplitude to filename, processed files: ${file_counter}"
	else
		echo "Done adding amplitude to filename, no files found";
	fi
  	
  	if [ -d "${lock_file_name}" ]; then
  		rmdir "${lock_file_name}"
	fi
else
	echo "... done - existing lock file found"
fi