#!/bin/bash

AUDIO_FILE_PATHS=/usr/sleeptalk/records_to_render/*.wav

echo "Rendering subtitled sounds to filename"
echo ""

set file_counter=0

for audio_file_path in $AUDIO_FILE_PATHS
do

	audio_file_name=$(basename $audio_file_path)

 	# todo move to function
	filename=$(echo $audio_file_name | sed "s/\(\.wav\)//")


	# check .sleeptalk file exists



	sleeptalk_file_name="/usr/sleeptalk/records_to_render/$filename.sleeptalk"


	# Thanks to
	# * http://forum.linuxcareer.com/threads/84-Use-BASH-script-to-parse-a-line-from-log-file
	if [ -f $sleeptalk_file_name ]
	then

	  #read through the file looking for the word Temperature =

	  while read line
	  do
	    echo $line 

	    frame_position=$(echo $line | cut -d'_' -f 1)
	    spoken_text=$(echo $line | cut -d'_' -f 2)

	    echo "$frame_position"
	    echo "$spoken_text"

	    # Thanks to
	    # * http://stackoverflow.com/questions/428109/extract-substring-in-bash

	    
	  done < $sleeptalk_file_name
	fi





	echo "$filename"


done

if [ -n "$file_counter" ]; then
    echo "Done rendering videos, processed files: ${file_counter}"
else
	echo "Done rendering videos, no files found";
fi



# Thanks to
# * http://www.imagemagick.org/discourse-server/viewtopic.php?t=13527
# convert -size 1920x1080 xc:black blackimage.png 


# Thanks to
# * http://www.imagemagick.org/Usage/fonts/
# * http://stackoverflow.com/questions/23236898/add-text-on-image-at-specific-point-using-imagemagick
# convert blackimage.png -gravity North -pointsize 30 -fill white -annotate +0+100 'Love you mom' temp1.png 