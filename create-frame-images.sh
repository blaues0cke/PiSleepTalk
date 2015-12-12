#!/bin/bash

AUDIO_FILE_PATHS=/usr/sleeptalk/records_timestamp/*

echo "Rendering subtitled sounds to filename"
echo ""

set file_counter=0

for audio_file_path in $AUDIO_FILE_PATHS
do


	echo "ges"


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