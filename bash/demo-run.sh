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

sh /usr/sleeptalk/bash/add-timestamp-to-filename.sh
sh /usr/sleeptalk/bash/add-amplitude-to-filename.sh
sh /usr/sleeptalk/bash/process-volume.sh
sh /usr/sleeptalk/bash/process-records.sh
sh /usr/sleeptalk/bash/create-frame-images.sh
sh /usr/sleeptalk/bash/generate-video.sh