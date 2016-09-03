# 
# This file is part of PiSleepTalk.
# Learn more at: https://github.com/blaues0cke/PiSleepTalk
# 
# Author:  Thomas Kekeisen <pisleeptalk@tk.ca.kekeisen.it>
# License: This work is licensed under the Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License.
#          To view a copy of this license, visit http://creativecommons.org/licenses/by-nc-sa/4.0/.
#

trim_zero () {

	. /usr/sleeptalk/config/config.cfg
	
	# Thanks to
	# * http://stackoverflow.com/questions/3534280/how-can-i-pass-a-file-argument-to-my-bash-script-using-a-terminal-command-in-lin
	input="$1"

	echo "... removing trailing zeros from: ${input}"

	# Thanks to
	# * http://stackoverflow.com/questions/18714645/how-can-i-remove-leading-and-trailing-zeroes-from-numbers-with-sed-awk-perl
	trimmed_input=$(echo "${input}" | sed -e 's/^[0]*//')

	__FUNCTION_RETURN="${trimmed_input}"

	echo "... string now: ${__FUNCTION_RETURN}"
}