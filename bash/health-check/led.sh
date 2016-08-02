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

if [ "$led_enabled" = true ]; then
	if [ "$led_switch_enabled" = true ]; then
		echo "... gpio button support enabled, checking button"

		button_state=$(gpio read 4)

		echo "... button state: ${button_state}"

		if [ "${button_state}" -eq "1" ]; then
			echo "... button on, leds on"

			gpio write 3 1
		else
			echo "... button off, leds off"

			led_enabled=false
			gpio write 3 0
		fi
	else
		gpio write 3 1
	fi
else
	gpio write 3 0
fi