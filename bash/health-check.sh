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

. "/usr/sleeptalk/bash/health-check/led.sh"
echo "..."

. "/usr/sleeptalk/bash/health-check/disk-space.sh"
echo "..."

. "/usr/sleeptalk/bash/health-check/recording-hours.sh"
echo "..."

. "/usr/sleeptalk/bash/health-check/button.sh"
echo "..."

. "/usr/sleeptalk/bash/health-check/last-fm.sh"
echo "..."

. "/usr/sleeptalk/bash/health-check/swarm.sh"
echo "..."

. "/usr/sleeptalk/bash/health-check/force-button.sh"
echo "..."

recording_led_on=true

if [ "$start_allowed" = true ]; then
	if [ "$led_enabled" = true ]; then
		if [ "$led_switch_enabled" = true ]; then
			recording_led_on=true
		fi
	else
		recording_led_on=false
	fi

	runningProcesses=`ps aux | grep "arecord -D" | wc -l`

	echo "... found services matching our request: ${runningProcesses}"

	if [ ${runningProcesses} -lt 2 ]; then
		echo "... starting new recording service"

	    sh /usr/sleeptalk/bash/start-recording-chunks.sh
	else
		echo "... we are already recording, don't start again"
	fi
else
	if [ ! -f "/usr/sleeptalk/temp/stop_queued" ]; then
    	echo "... no stop queued, queuing"

    	touch /usr/sleeptalk/temp/stop_queued
    else
    	rm /usr/sleeptalk/temp/stop_queued

    	echo "... stop queued, stopping"

		sh /usr/sleeptalk/bash/stop-recording-chunks.sh

		recording_led_on=false
	fi
fi

if [ "$recording_led_on" = true ]; then
	gpio write 2 1

	echo "... turned recording led on"
else
	gpio write 2 0

	echo "... turned recording led off"
fi

echo "Done"