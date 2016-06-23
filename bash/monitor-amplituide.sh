#!/bin/bash

filename="/tmp/tmp_rec.wav"

while true; do
    arecord -D plughw:1 --max-file-time=1 -d 1 $filename -q
    maximum_amplitude=$(sox $filename -n stat 2>&1 | sed -n 's#^Maximum amplitude:[^0-9]*\([0-9.]*\)$#\1#p')
    midline_amplitude=$(sox $filename -n stat 2>&1 | sed -n 's#^Midline amplitude:[^0-9]*\([0-9.]*\)$#\1#p')

    echo -ne "Mid: ${midline_amplitude} Max: ${maximum_amplitude}\033[0K\r"
done