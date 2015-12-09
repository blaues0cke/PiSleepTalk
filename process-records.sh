#!/bin/bash

AUDIO_FILE_PATHS=/usr/sleeptalk/records_amplitude/*

echo "Processing records"
echo ""

set concat_command=""
set concat_command_file_count=0

# When true, no files are touched
set debug=true

set file_counter_base=0
set file_counter_concated=0
set file_counter_deleted=0
set file_counter_final=0

set last_audio_file_path=""

for audio_file_path in $AUDIO_FILE_PATHS
do
	if [ -f $audio_file_path ]; then
	 	echo "... processing file: $audio_file_path"

	 	audio_file_name=$(basename $audio_file_path)

	 	timestamp=$(echo $audio_file_name | sed -r -n 's#^([0-9]+)_max_([0-9.]+)_mid_([0-9.]+)\.wav$#\1#p')
	 	max_amplitude=$(echo $audio_file_name | sed -r -n 's#^([0-9]+)_max_([0-9.]+)_mid_([0-9.]+)\.wav$#\2#p')
	 	mid_amplitude=$(echo $audio_file_name | sed -r -n 's#^([0-9]+)_max_([0-9.]+)_mid_([0-9.]+)\.wav$#\3#p')

		echo "... timestamp: $timestamp"
		echo "... maximum amplitude: $max_amplitude"
		echo "... mid amplitude: $mid_amplitude"

		max_amplitude_compare=$(awk 'BEGIN { print ($max_amplitude >= 0.020000) ? "YES" : "NO" }')
		mid_amplitude_compare=$(awk 'BEGIN { print ($mid_amplitude >= 0.005000) ? "YES" : "NO" }')

		echo "... maximum amplitude compare: $max_amplitude_compare"

		if [ "NO" = "$mid_amplitude_compare" ] && [ "NO" = "$max_amplitude_compare" ]; then

			if [ -n "${last_audio_file_path}" ] && [ -f $last_audio_file_path ]; then
				echo "... deleting last file: $last_audio_file_path"

				if [ "$debug" = false ]; then
					rm $last_audio_file_path
				fi
			fi

			last_audio_file_path="$audio_file_path"

			echo "... file too quiet, storing file name: $audio_file_path"

		else

			echo "test"


		fi








	 	
	 	echo ""

		file_counter_base=$((file_counter_base + 1))
	fi
done

if [ -n "$file_counter_base" ]; then
    echo "Done processing records, processed files:"
    echo "... processed files: ${file_counter_base}"
    echo "... chunks merged: $(file_counter_concated)"
    echo "... files deleted: $(file_counter_deleted)"
    echo "... files generated: $(file_counter_final)"

else
	echo "Done processing records, no files found";
fi

