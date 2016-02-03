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

start_allowed=true

echo "Running health check"

usedSpaceInPercent=$(df -k | head -2 | tail -1 | awk '{print $5}' | sed "s/\(\%\)//")

echo "... used space in percent: ${usedSpaceInPercent}%"

if [ $usedSpaceInPercent -gt 90 ]; then
	echo "... too much space is in use, stopping recording audio" 

	start_allowed=false   
else
	echo "... enough free disk space available, validating recording service"
fi

if [ "$button_enabled" = true ]; then
	echo "... gpio button support enabled, checking button"

	button_state=$(gpio read 0)

	echo "... button state: ${button_state}"

	if [ "${button_state}" -eq "1" ]; then
		echo "... button on, start still allowed"
	else
		echo "... button off, start forbidden"

		start_allowed=false
	fi
else
	echo "... gpio button support disabled, skipping check"
fi

if [ "$start_allowed" = true ]; then
	if [ "$led_enabled" = true ]; then
		gpio write 2 1
	else
		gpio write 2 0
	fi

	runningProcesses=`ps aux | grep "arecord -D" | wc -l`

	echo "... found services matching our request: ${runningProcesses}"

	if [ ${runningProcesses} -lt 2 ]; then
		echo "... starting new recording service"

	    sh /usr/sleeptalk/bash/start.sh
	fi
else
	sh /usr/sleeptalk/bash/stop.sh

	gpio write 2 0
fi

echo "Done"