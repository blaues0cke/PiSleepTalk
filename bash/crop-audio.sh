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

echo "Processing records to crop"
echo ""

script_name=`basename "$0"`
lock_file_name="/var/lock/.${script_name}.${lock_file_format}"

if [ ! -d "${lock_file_name}" ]; then
	mkdir "$lock_file_name"

	file_count=0

	dir_list=$(ls ${audio_file_path_crop}/*.${default_audio_format} 2>/dev/null)
	for audio_file_path in $dir_list
	do
		if [ -f $audio_file_path ]; then
		 	echo "... cropping file: ${audio_file_path}"





		 	file_count=$((file_count + 1))

		 	echo ""
		fi
	done

	if [ -n "$file_count" ]; then
	    echo "Done processing volume, processed files:"
	    echo "... processed files: ${file_count}"
	else
		echo "Done processing volume, no files found";
	fi
  	
  	rmdir "$lock_file_name"
else
	echo "... done - existing lock file found"
fi