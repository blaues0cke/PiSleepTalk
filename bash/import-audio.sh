#!/bin/bash

# 
# This file is part of PiSleepTalk.
# Learn more at: https://github.com/blaues0cke/PiSleepTalk
# 
# Author:  Thomas Kekeisen <pisleeptalk@tk.ca.kekeisen.it>
# License: This work is licensed under the Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License.
#          To view a copy of this license, visit http://creativecommons.org/licenses/by-nc-sa/4.0/.
#

AUDIO_FILE_PATHS=/usr/sleeptalk/records-import/*

echo "Importing audio files"

set file_counter=0

for audio_file_path in $AUDIO_FILE_PATHS
do
	if [ -f $audio_file_path ]; then

		# Thanks to
		# * http://stackoverflow.com/questions/965053/extract-filename-and-extension-in-bash
	 	extension="${audio_file_path##*.}"
	 	file_name="$(basename $audio_file_path | cut -d. -f1)"

		# Thanks to
		# * http://stackoverflow.com/questions/2264428/converting-string-to-lower-case-in-bash-shell-scripting
		extension=$(echo "$extension" | tr '[:upper:]' '[:lower:]')

	 	echo "... processing file: ${audio_file_path}, extension: ${extension}, filename: ${file_name}"

	 	random_string=$(cat /dev/urandom | tr -cd 'a-f0-9' | head -c 32)
	 	final_file_name="${file_name}_${random_string}.wav"
	 	final_file_path="/usr/sleeptalk/records-raw/${final_file_name}"

	 	echo "... final file name will be: ${final_file_name}"

	 	if [ "$extension" != "wav" ]; then
	 		echo "... transcoding file (${extension}) to wav"

			# Thanks to
			# * http://spielwiese.la-evento.com/hokuspokus/seite2.html
			ffmpeg -y -i "$audio_file_path" "$final_file_path" >>/usr/sleeptalk/error.log 2>&1

			rm $audio_file_path
	 	else
	 		echo "... file is already in wav format, we don't have to transcode"

	 		mv $audio_file_path $final_file_path
	 	fi  
	 	
		echo "... done"
		echo ""

		file_counter=$((file_counter + 1))
	fi
done

if [ -n "$file_counter" ]; then
    echo "Done importing audio, added files: ${file_counter}"
else
	echo "Done importing audio, no files found";
fi