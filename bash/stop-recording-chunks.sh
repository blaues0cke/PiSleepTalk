#!/bin/bash

# 
# This file is part of PiSleepTalk.
# Learn more at: https://github.com/blaues0cke/PiSleepTalk
# 
# Author:  Thomas Kekeisen <pisleeptalk@tk.ca.kekeisen.it>
# License: This work is licensed under the Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License.
#          To view a copy of this license, visit http://creativecommons.org/licenses/by-nc-sa/4.0/.
#
# Don't call this script directly, its managed by the "sleeptalkrec" service
#

. /usr/sleeptalk/config/config.cfg

. /usr/sleeptalk/bash/tool/send-push-message.sh

running_processes=`ps aux | grep -v grep  | grep "arecord" | wc -l`
echo "... running processes matching the request: ${running_processes}"

if [ ${running_processes} -gt 0 ]; then
	if [ "$push_over_start_stop_message_enabled" = true ]; then

		stop_reason="Stopped recording"
		stop_reason_from_file=$(cat /usr/sleeptalk/temp/stop_reason)

		echo "... stop reason from file: ${stop_reason_from_file}"

		if [ ! -z "${stop_reason_from_file}" ]; then
			echo "... stop reason from file not empty"

			stop_reason="${stop_reason} (${stop_reason_from_file})"
		fi

		echo "... final stop reason: ${stop_reason}"

		send_push_message "${stop_reason}"
	fi

	if [ -f "/usr/sleeptalk/temp/recording" ]; then
		rm /usr/sleeptalk/temp/recording
	fi
fi

pkill arecord