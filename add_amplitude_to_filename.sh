#!/bin/bash

AUDIO_FILE_PATHS=/usr/sleeptalk/records_timestamp/*

echo "Adding amplitude to filename"
echo ""

set file_counter=0

for audio_file_path in $AUDIO_FILE_PATHS
do
	if [ -f $audio_file_path ]; then
	 	echo "... processing file: $audio_file_path"

	 	audio_file_name=$(basename $audio_file_path)
	 	audio_timestamp=$(echo $audio_file_name | sed "s/\(\.wav\)//")

	 	# todo: combine those two sox calls to one since both required amplitudes are retured with each call

	 	maximum_amplitude=$(sox e_laut.wav -n stat 2>&1 | sed -n 's#^Maximum amplitude:[^0-9]*\([0-9.]*\)$#\1#p')
	    midline_amplitude=$(sox e_laut.wav -n stat 2>&1 | sed -n 's#^Midline amplitude:[^0-9]*\([0-9.]*\)$#\1#p')

	 	echo "... maximum amplitude: $maximum_amplitude"
	 	echo "... midline amplitude: $midline_amplitude"


		if [ -n "$maximum_amplitude" ] && [ -n "$midline_amplitude" ]; then

		 	new_audio_file_path="/usr/sleeptalk/records_amplitude/${audio_timestamp}_max_${maximum_amplitude}_mid_${midline_amplitude}.wav"

		 	echo "... new file path: $new_audio_file_path"

		 	exit

		 	mv $audio_file_path $new_audio_file_path

		else

			echo "... not able to get maximum and midline amplitude from file, file may be no audio file"
			echo "... deleting $audio_file_path"

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

