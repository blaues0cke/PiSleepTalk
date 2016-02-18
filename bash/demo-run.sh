#!/bin/bash

# 
# This file is part of PiSleepTalk.
# Learn more at: https://github.com/blaues0cke/PiSleepTalk
# 
# Author:  Thomas Kekeisen <pisleeptalk@tk.ca.kekeisen.it>
# License: This work is licensed under the Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License.
#          To view a copy of this license, visit http://creativecommons.org/licenses/by-nc-sa/4.0/.
#

echo "Starting demo run..."

echo "... /usr/sleeptalk/bash/add-timestamp-to-filename.sh"
sh /usr/sleeptalk/bash/add-timestamp-to-filename.sh

echo "... /usr/sleeptalk/bash/add-amplitude-to-filename.sh"
sh /usr/sleeptalk/bash/add-amplitude-to-filename.sh

echo "... /usr/sleeptalk/bash/process-volume.sh"
sh /usr/sleeptalk/bash/process-volume.sh

echo "... /usr/sleeptalk/bash/crop-audio.sh"
sh /usr/sleeptalk/bash/crop-audio.sh

echo "... /usr/sleeptalk/bash/process-records.sh"
sh /usr/sleeptalk/bash/process-records.sh

echo "... /usr/sleeptalk/bash/create-frame-images.sh"
sh /usr/sleeptalk/bash/create-frame-images.sh

echo "... /usr/sleeptalk/bash/generate-video.sh"
sh /usr/sleeptalk/bash/generate-video.sh