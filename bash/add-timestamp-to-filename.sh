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

echo "Adding timestamp to filename"

script_name=`basename "$0"`
lock_file_name="/var/lock/.${script_name}.exclusivelock"

if [ ! -d "${lock_file_name}" ]; then
	mkdir "$lock_file_name"

	set file_counter=0

	dir_list=$(ls ${audio_file_path_raw}/*.${default_audio_format} 2>/dev/null)
	for audio_file_path in $dir_list
	do
		if [ -f $audio_file_path ]; then

		 	echo "... processing file: ${audio_file_path}"

		 	audio_file_name=$(basename $audio_file_path)

		 	modify_date=$(stat -c %Y $audio_file_path)

		 	new_audio_file_path="${audio_file_path_timestamp}/${modify_date}.${default_audio_format}"

		 	echo "... new file path: ${new_audio_file_path}"

		 	mv $audio_file_path $new_audio_file_path

			echo "... done"
			echo ""

			file_counter=$((file_counter + 1))

		fi
	done

	if [ -n "${file_counter}" ]; then
	    echo "Done adding timestamp to filename, processed files: ${file_counter}"
	else
		echo "Done adding timestamp to filename, no files found";
	fi
  	
  	rmdir "$lock_file_name"
else
	echo "... done - existing lock file found"
fi