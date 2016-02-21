#!/bin/bash

# 
# This file is part of PiSleepTalk.
# Learn more at: https://github.com/blaues0cke/PiSleepTalk
# 
# Author:  Thomas Kekeisen <pisleeptalk@tk.ca.kekeisen.it>
# License: This work is licensed under the Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License.
#          To view a copy of this license, visit http://creativecommons.org/licenses/by-nc-sa/4.0/.
#

# todo: sercurity question/explicit user confirmation

. /usr/sleeptalk/config/config.cfg

echo "Installing test data"
echo "... test case: 3 (image-generation and video-rendering)"

sh /usr/sleeptalk/bash/clean-up.sh
sh /usr/sleeptalk/bash/clean-lock-files.sh

set file_counter=0

file_path="${test_file_path}/test-case-3/*"

echo "... copying files from: ${file_path}"

dir_list=$(ls ${file_path} 2>/dev/null)
for demo_file_path in $dir_list
do
	cp "${demo_file_path}" "${audio_file_path_to_render}"

	echo "... copied ${demo_file_path}"
done

echo "... done!"

sh /usr/sleeptalk/bash/demo-run.sh