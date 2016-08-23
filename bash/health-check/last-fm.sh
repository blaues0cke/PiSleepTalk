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

echo "..> last-fm.sh"

if [ "$start_allowed" = true ]; then
	if [ "$last_fm_enabled" = true ]; then
		echo "... last.fm support enabled, checking last track date"

		last_last_fm_time=$(curl -s 'http://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user='"${last_fm_username}"'&api_key='"${last_fm_api_key}"'&format=json' | python /usr/sleeptalk/bash/parse-lastfm.py)
		current_time=$(date +%s)
		difference=$(($current_time - $last_last_fm_time))

		echo "... last fm time: ${last_last_fm_time}"
		echo "... current time: ${current_time}"
		echo "... difference: ${difference}"

		if [ "${difference}" -ge "${last_fm_timeout_in_seconds}" ]; then
			echo "... last listened song is more that ${last_fm_timeout_in_seconds}s ago, start still allowed"
		else
			echo "... last listened song is less than ${last_fm_timeout_in_seconds}s ago, start forbidden"

			start_allowed=false
		fi
	else
		echo "... last.fm support disabled, skipping check"
	fi
else
	echo "... skipping, start already forbidden"
fi