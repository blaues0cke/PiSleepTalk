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

echo "..> force-button.sh"

if [ "$1" = "test" ]; then
	echo "... test mode enabled"

	start_allowed=true
fi

if [ "$force_button_enabled" = true ]; then
	echo "... gpio force button support enabled, checking button"

	button_state=$(gpio read 1)

	echo "... button state: ${button_state}"

	if [ "${button_state}" -eq "1" ]; then
		echo "... button on, forcing start"

		start_allowed=true
	fi
else
	echo "... gpio force button support disabled, skipping check"
fi