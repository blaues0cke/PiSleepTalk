#!/bin/bash

# 
# This file is part of PiSleepTalk.
# Learn more at: https://github.com/blaues0cke/PiSleepTalk
# 
# Author:  Thomas Kekeisen <pisleeptalk@tk.ca.kekeisen.it>
# License: This work is licensed under the Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License.
#          To view a copy of this license, visit http://creativecommons.org/licenses/by-nc-sa/4.0/.
#

AUDIO_FILE_PATHS_DECREASE=/usr/sleeptalk/records-decrease-volume/*.wav
AUDIO_FILE_PATHS_INCREASE=/usr/sleeptalk/records-increase-volume/*.wav

echo "Processing record volumes"
echo ""

file_count=0
file_decrease_count=0
file_increase_count=0

for audio_file_path in $AUDIO_FILE_PATHS_DECREASE
do
	if [ -f $audio_file_path ]; then
	 	echo "... decreasing volume of file: $audio_file_path"

	 	audio_file_name=$(basename $audio_file_path)
	 	final_audio_path="/usr/sleeptalk/records-to-render/VD-${audio_file_name}"

	 	sox -v 0.5 $audio_file_path $final_audio_path
	 	rm $audio_file_path

	 	file_count=$((file_count + 1))
	 	file_decrease_count=$((file_decrease_count + 1))

	 	echo ""
	fi
done

for audio_file_path in $AUDIO_FILE_PATHS_INCREASE
do
	if [ -f $audio_file_path ]; then
	 	echo "... increasing volume of file: $audio_file_path"

	 	audio_file_name=$(basename $audio_file_path)
	 	final_audio_path="/usr/sleeptalk/records-to-render/VI-${audio_file_name}"

	 	sox -v 1.5 $audio_file_path $final_audio_path
	 	rm $audio_file_path

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