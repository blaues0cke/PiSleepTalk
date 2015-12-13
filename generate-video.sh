#!/bin/bash

AUDIO_FILE_PATHS=/usr/sleeptalk/records_to_render/*.wav

echo "Rendering video"
echo ""

debug=false
file_counter=0

for audio_file_path in $AUDIO_FILE_PATHS
do
	if [ -f $audio_file_path ]; then

		audio_file_name=$(basename $audio_file_path)

	 	# todo move to function
		filename=$(echo $audio_file_name | sed "s/\(\.wav\)//")
		sleeptalk_file_path="/usr/sleeptalk/records_to_render/$filename.images_generated"

		if [ -f $sleeptalk_file_path ]; then

			




			echo "... done"

		else

			echo "... no \".images_generated\" file found for \"$filename\""

		fi

		echo ""

		file_counter=$((file_counter + 1))
	fi
done

if [ -n "$file_counter" ]; then
    echo "Done rendering videos, processed files: ${file_counter}"
else
	echo "Done rendering videos, no files found";
fi