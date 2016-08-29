#!/bin/bash

# 
# This file is part of PiSleepTalk.
# Learn more at: https://github.com/blaues0cke/PiSleepTalk
# 
# Author:  Thomas Kekeisen <pisleeptalk@tk.ca.kekeisen.it>
# License: This work is licensed under the Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License.
#          To view a copy of this license, visit http://creativecommons.org/licenses/by-nc-sa/4.0/.
#
#

. /usr/sleeptalk/config/config.cfg

. /usr/sleeptalk/bash/tool/change-file-extension.sh

echo "... looking for images with missing recording"

file_count=0

dir_list=$(ls ${audio_file_path_to_render}/*.${default_image_format} 2>/dev/null)
for image_file_path in $dir_list
do
	if [ -f $audio_file_path ]; then
		image_file_name=$(basename $image_file_path)

		echo "... processing ${image_file_name}"

		change_file_extension $image_file_name $default_audio_format
		audio_file_name="${__FUNCTION_RETURN}"
		audio_file_path="${audio_file_path_to_render}/${audio_file_name}"

		echo "... checking file: ${audio_file_path}"

		if [ -f $audio_file_path ]; then
			echo "... file exists, doing nothing"
		else
			echo "... audio file not found, removing image"

			rm $image_file_path

			file_count=$((file_count + 1))
		fi
	fi
done

echo "... done, deleted images: ${file_count}"