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

echo "Processing record volumes"
echo ""

script_name=`basename "$0"`
lock_file_name="/var/lock/.${script_name}.${lock_file_format}"

if [ ! -d "${lock_file_name}" ]; then
	mkdir "$lock_file_name"

	file_count=0
	file_decrease_count=0
	file_increase_count=0

	dir_list=$(ls ${audio_file_path_decrease_volume}/*.${default_audio_format} 2>/dev/null)
	for audio_file_path in $dir_list
	do
		if [ -f $audio_file_path ]; then
		 	echo "... decreasing volume of file: ${audio_file_path}"

		 	audio_file_name=$(basename $audio_file_path)
		 	final_audio_path="${temp_file_path}/VD-${audio_file_name}"

		 	sox -v 0.5 $audio_file_path $final_audio_path
		 	rm $audio_file_path

		 	create_record_to_render $final_audio_path
		 	
		 	file_count=$((file_count + 1))
		 	file_decrease_count=$((file_decrease_count + 1))

		 	echo ""
		fi
	done

	dir_list=$(ls ${audio_file_path_increase_volume}/*.${default_audio_format} 2>/dev/null)
	for audio_file_path in $dir_list
	do
		if [ -f $audio_file_path ]; then
		 	echo "... increasing volume of file: ${audio_file_path}"

		 	audio_file_name=$(basename $audio_file_path)
		 	final_audio_path="${temp_file_path}/VI-${audio_file_name}"

		 	sox -v 1.5 $audio_file_path $final_audio_path
		 	rm $audio_file_path

		 	create_record_to_render $final_audio_path

		 	file_count=$((file_count + 1))
		 	file_increase_count=$((file_increase_count + 1))

		 	echo ""
		fi
	done

	if [ -n "$file_count" ]; then
	    echo "Done processing volume, processed files:"
	    echo "... processed files: ${file_count}"
		echo "... volume decreased: ${file_decrease_count}"
	   	echo "... volume increased: ${file_increase_count}"
	else
		echo "Done processing volume, no files found";
	fi
  	
  	if [ -d "${lock_file_name}" ]; then
  		rmdir "${lock_file_name}"
	fi
else
	echo "... done - existing lock file found"
fi