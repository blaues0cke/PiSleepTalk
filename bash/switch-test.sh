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

echo "Starting switch test, press ctl+c to quit"

while true
do
	echo "... turning leds on"

	force_button_state=$(gpio read 1)
	on_button_state=$(gpio read 0)
	led_button_state=$(gpio read 4)

	echo "... force button state: ${force_button_state}"
	echo "... on button state: ${on_button_state}"
	echo "... led button state: ${led_button_state}"

	sleep 2s
done