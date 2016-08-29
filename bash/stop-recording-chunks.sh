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

if [ "$push_over_start_stop_message_enabled" = true ]; then
	send_push_message "Stopped recording"
fi

pkill arecord