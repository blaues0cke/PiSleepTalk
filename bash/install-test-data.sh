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

echo "Installing test data"
echo "... we will wait 1s for each file to get a realistic file time"

sh /usr/sleeptalk/bash/clean-up.sh

DEMO_FILE_PATHS=/usr/sleeptalk/test-data/*

set file_counter=0

for demo_file_path in $DEMO_FILE_PATHS
do
	cp "$demo_file_path" /usr/sleeptalk/records_raw

	echo "... copied $demo_file_path"

	# todo: fake the creation time to save time while creating the test data
	sleep 1s
done

echo "... done!"