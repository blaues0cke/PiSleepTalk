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

if [ "$start_allowed" = true ]; then
	if [ "$recording_hours_check_enabled" = true ]; then
		# Thanks to
		# * http://www.cyberciti.biz/faq/unix-linux-bash-get-time/
		current_hour=$(date +"%H")
		time_check_result=$(echo "${recording_hours}" | grep -F -q -w "${current_hour}" && echo "1" || echo "0")

		echo "... allowed hours: ${recording_hours}, current hour: ${current_hour}"

		# Thanks to
		# * http://stackoverflow.com/questions/8063228/how-do-i-check-if-a-variable-exists-in-a-list-in-bash
		if [ "${time_check_result}" -gt "0" ]; then
			echo "... time inside the allowed hours, start still allowed"
		else
			echo "... time outside the allowed hours, start forbidden"

			start_allowed=false
		fi
	else
		echo "... recording hours check disabled, skipping check"
	fi
fi