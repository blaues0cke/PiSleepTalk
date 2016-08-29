# 
# This file is part of PiSleepTalk.
# Learn more at: https://github.com/blaues0cke/PiSleepTalk
# 
# Author:  Thomas Kekeisen <pisleeptalk@tk.ca.kekeisen.it>
# License: This work is licensed under the Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License.
#          To view a copy of this license, visit http://creativecommons.org/licenses/by-nc-sa/4.0/.
#

send_push_message () {

	. /usr/sleeptalk/config/config.cfg

	text="$1"

	echo "... sending push message: ${text}"

	final_push_payload="token=${push_over_token}&user=${push_over_user}&message=${text}"

	echo "... final push payload: ${final_push_payload}"

	curl -s --data "${final_push_payload}" http://api.pushover.net/1/messages.json > /dev/null
}