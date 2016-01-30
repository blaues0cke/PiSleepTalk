# 
# This file is part of PiSleepTalk.
# Learn more at: https://github.com/blaues0cke/PiSleepTalk
# 
# Author:  Thomas Kekeisen <pisleeptalk@tk.ca.kekeisen.it>
# License: This work is licensed under the Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License.
#          To view a copy of this license, visit http://creativecommons.org/licenses/by-nc-sa/4.0/.
#

echo "Running singleton check for $1"

# Thanks to
# * http://stackoverflow.com/questions/2903354/bash-script-to-check-running-process
running_processes=`ps aux | grep -v grep | grep -v run-singleton.sh | grep "$1" | wc -l`

echo "... running processes matching the request: ${running_processes}"

if [ ${running_processes} -lt 1 ]; then

	echo "... calling $1"

    sh "$1"
fi