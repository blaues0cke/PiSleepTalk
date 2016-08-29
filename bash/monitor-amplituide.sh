#!/bin/bash

# 
# This file is part of PiSleepTalk.
# Learn more at: https://github.com/blaues0cke/PiSleepTalk
# 
# Author:  Thomas Kekeisen <pisleeptalk@tk.ca.kekeisen.it>
# License: This work is licensed under the Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License.
#          To view a copy of this license, visit http://creativecommons.org/licenses/by-nc-sa/4.0/.
#

. /usr/sleeptalk/config/config.cfg

filename="/tmp/tmp_rec.wav"

while true; do
    arecord -D "${device_identifier}" --max-file-time=1 -d 1 $filename -q
    maximum_amplitude=$(sox $filename -n stat 2>&1 | sed -n 's#^Maximum amplitude:[^0-9]*\([0-9.]*\)$#\1#p')
    midline_amplitude=$(sox $filename -n stat 2>&1 | sed -n 's#^Midline amplitude:[^0-9]*\([0-9.]*\)$#\1#p')

    echo -ne "Mid: ${midline_amplitude} Max: ${maximum_amplitude}\033[0K\r"
done