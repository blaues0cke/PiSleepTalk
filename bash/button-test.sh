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

echo "Starting button test, press ctl+c to quit"

while true
do
	button_state_1=$(gpio read 0)
	button_state_2=$(gpio read 1)

	echo "... button state right now: button1: ${button_state_1}, button2: ${button_state_2}, next check in 1s"

	sleep 1s
done