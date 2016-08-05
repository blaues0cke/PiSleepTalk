#!/bin/bash

# 
# This file is part of PiSleepTalk.
# Learn more at: https://github.com/blaues0cke/PiSleepTalk
# 
# Author:  Thomas Kekeisen <pisleeptalk@tk.ca.kekeisen.it>
# License: This work is licensed under the Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License.
#          To view a copy of this license, visit http://creativecommons.org/licenses/by-nc-sa/4.0/.
#

lowercase_all_files_in_directory () {

	. /usr/sleeptalk/config/config.cfg

	directory="$1"

	find $directory -depth -exec rename 's/(.*)\/([^\/]*)/$1\/\L$2/' {} \; >>"${error_log_path}" 2>&1
}