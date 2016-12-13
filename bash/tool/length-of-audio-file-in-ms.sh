# 
# This file is part of PiSleepTalk.
# Learn more at: https://github.com/blaues0cke/PiSleepTalk
# 
# Author:  Thomas Kekeisen <pisleeptalk@tk.ca.kekeisen.it>
# License: This work is licensed under the Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License.
#          To view a copy of this license, visit http://creativecommons.org/licenses/by-nc-sa/4.0/.
#

. /usr/sleeptalk/bash/tool/trim-zero.sh

length_of_audio_file_in_ms () {

	. /usr/sleeptalk/config/config.cfg
	
	# Thanks to
	# * http://stackoverflow.com/questions/3534280/how-can-i-pass-a-file-argument-to-my-bash-script-using-a-terminal-command-in-lin
	file="$1"

	echo "... getting length of audio file: ${file}"

	info=$(sox $file -n stat 2>&1)

	echo "... sox result: ${info}"

	full_seconds=$(echo "$info" | sed -n 's#^Length (seconds):[^0-9]*\([0-9.]*\)$#\1#p')
	
	echo "... full seconds: ${full_seconds}"

	if [ "${full_seconds}" = "0.000000" ]; then
		__FUNCTION_RETURN="0"
	else
		full_length=$(echo "$info" | sed -n 's#^Length (seconds):[^0-9]*\([0-9.]*\).*$#\1#p')
		# Thanks to
		# * http://stackoverflow.com/questions/10520623/how-to-split-one-string-into-multiple-variables-in-bash-shell
		seconds=$(echo $full_length | cut -f1 -d.)

		echo "... seconds: ${seconds}"

		if [ -n "$seconds" ]; then
			# Thanks to
			# * http://stackoverflow.com/questions/971879/what-is-a-unix-command-for-deleting-the-first-n-characters-of-a-line
			milliseconds=$(echo $full_length | cut -f2 -d. | cut -c -3)

			trim_zero "${milliseconds}"
			milliseconds="${__FUNCTION_RETURN}"

			if [ -z "$milliseconds" ]; then
				milliseconds="0"
			fi

			echo "... milliseconds: ${milliseconds}"

			# Thanks to
			# * http://stackoverflow.com/questions/11039876/multiplication-on-command-line-terminal-unix
			result=$(($seconds * 1000))
			result=$(($result + $milliseconds))

			__FUNCTION_RETURN="$result"
		else
			__FUNCTION_RETURN="0"
		fi
	fi

	echo "... length of audio file is: ${__FUNCTION_RETURN}"
}