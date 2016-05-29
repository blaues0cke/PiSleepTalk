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

echo "Starting led test, press ctl+c to quit"

while true
do
	echo "... turning leds on"

	gpio write 2 1
	gpio write 3 1

	echo "... leds should be on now, turning led off in 2 seconds"

	sleep 2s

	echo "... turning leds off"

	gpio write 2 0
	gpio write 3 0

	echo "... leds should be off now, turning led on in 2 seconds"

	sleep 2s
done