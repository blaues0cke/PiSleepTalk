#!/bin/bash

AUDIO_FILE_PATHS=/usr/sleeptalk/records/*

echo "Adding amplitude to filename"

set file_counter=0

for audio_file_path in $AUDIO_FILE_PATHS
do
 	echo "... processing file: $audio_file_path"

 	audio_file_name=$(basename $audio_file_path)

 	# todo: combine those two sox calls to one since both required amplitudes are retured with each call

 	maximum_amplitude=$(sox e_laut.wav -n stat 2>&1 | sed -n 's#^Maximum amplitude:[^0-9]*\([0-9.]*\)$#\1#p')
    midline_amplitude=$(sox e_laut.wav -n stat 2>&1 | sed -n 's#^Midline amplitude:[^0-9]*\([0-9.]*\)$#\1#p')

 	echo "... maximum amplitude: $maximum_amplitude"
 	echo "... midline amplitude: $midline_amplitude"

 	new_audio_file_path="/usr/sleeptalk/records_amplitude/max_${maximum_amplitude}_mid_${midline_amplitude}_${audio_file_name}"

 	echo "... new file path: $new_audio_file_path"

 	mv $audio_file_path $new_audio_file_path

	echo "... done"
	echo ""
done

echo "Done adding amplitude to filename, processed files: ${file_counter}"