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

echo "..> swarm.sh"

if [ "$1" = "test" ]; then
	echo "... test mode enabled"

	start_allowed=true
fi

if [ "$start_allowed" = true ]; then
	if [ "$swarm_enabled" = true ]; then
		echo "... swarm support enabled, checking last check in"

		request_url="https://api.foursquare.com/v2/users/self/checkins?oauth_token=${swarm_oauth_token}&v=20160207"
		last_venue_id=$(curl -s ''"${request_url}"'' | python /usr/sleeptalk/bash/parse-swarm.py)

		echo "... last venue id: ${last_venue_id}"
		echo "... home venue id: ${swarm_home_venue_id}"

		if [ "${last_venue_id}" = "${swarm_home_venue_id}" ]; then
			echo "... last check in was at home, start still allowed"
		else
			echo "... last check in was not at home, start forbidden"

			start_allowed=false
		fi
	else
		echo "... swarm support disabled, skipping check"
	fi
else
	echo "... skipping, start already forbidden"
fi