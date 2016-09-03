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

echo "..> button.sh"

if [ "$1" = "test" ]; then
	echo "... test mode enabled"

	start_allowed=true
fi

if [ "$start_allowed" = true ]; then
	if [ "$button_enabled" = true ]; then
		echo "... gpio button support enabled, checking button"

		button_state=$(gpio read 0)

		echo "... button state: ${button_state}"

		if [ "${button_state}" -eq "1" ]; then
			echo "... button on, start still allowed"
		else
			echo "... button off, start forbidden"

			echo "Recording switch was off" > /usr/sleeptalk/temp/stop_reason

			start_allowed=false
		fi
	else
		echo "... gpio button support disabled, skipping check"
	fi
else
	echo "... skipping, start already forbidden"
fi