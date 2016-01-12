#!/bin/bash

# 
# This file is part of PiSleepTalk.
# Learn more at: https://github.com/blaues0cke/PiSleepTalk
# 
# Author:  Thomas Kekeisen <pisleeptalk@tk.ca.kekeisen.it>
# License: This work is licensed under the Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License.
#          To view a copy of this license, visit http://creativecommons.org/licenses/by-nc-sa/4.0/.
#

AUDIO_FILE_PATHS=/usr/sleeptalk/records-raw/*.wav

echo "Adding timestamp to filename"

set file_counter=0

for audio_file_path in $AUDIO_FILE_PATHS
do
	if [ -f $audio_file_path ]; then

	 	echo "... processing file: $audio_file_path"

	 	audio_file_name=$(basename $audio_file_path)

	 	modify_date=$(stat -c %Y $audio_file_path)

	 	new_audio_file_path="/usr/sleeptalk/records-timestamp/${modify_date}.wav"

	 	echo "... new file path: ${new_audio_file_path}"

	 	mv $audio_file_path $new_audio_file_path

		echo "... done"
		echo ""

		file_counter=$((file_counter + 1))

	fi
done

if [ -n "$file_counter" ]; then
    echo "Done adding timestamp to filename, processed files: ${file_counter}"
else
	echo "Done adding timestamp to filename, no files found";
fi