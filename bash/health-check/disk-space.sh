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

echo "..> disk-space.sh"

if [ "$1" = "test" ]; then
	echo "... test mode enabled"

	start_allowed=true
fi

if [ "$start_allowed" = true ]; then
	usedSpaceInPercent=$(df -k | head -2 | tail -1 | awk '{print $5}' | sed "s/\(\%\)//")

	echo "... used space in percent: ${usedSpaceInPercent}%"

	if [ $usedSpaceInPercent -gt 90 ]; then
		echo "... too much space is in use, stopping recording audio" 

		start_allowed=false   
	else
		echo "... enough free disk space available, validating recording service"
	fi
else
	echo "... skipping, start already forbidden"
fi