# 
# This file is part of PiSleepTalk.
# Learn more at: https://github.com/blaues0cke/PiSleepTalk
# 
# Author:  Thomas Kekeisen <pisleeptalk@tk.ca.kekeisen.it>
# License: This work is licensed under the Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License.
#          To view a copy of this license, visit http://creativecommons.org/licenses/by-nc-sa/4.0/.
#

# Thanks to
# * http://stackoverflow.com/questions/3534280/how-can-i-pass-a-file-argument-to-my-bash-script-using-a-terminal-command-in-lin
file="$1"
info=$(sox $file -n stat 2>&1)
full_length=$(echo "$info" | sed -n 's#^Length (seconds):[^0-9]*\([0-9.]*\).*$#\1#p')
# Thanks to
# * http://stackoverflow.com/questions/10520623/how-to-split-one-string-into-multiple-variables-in-bash-shell
seconds=$(echo $full_length | cut -f1 -d.)

if [ -n "$seconds" ]; then
	# Thanks to
	# * http://stackoverflow.com/questions/971879/what-is-a-unix-command-for-deleting-the-first-n-characters-of-a-line
	milliseconds=$(echo $full_length | cut -f2 -d. | cut -c -3)
	# Thanks to
	# * http://stackoverflow.com/questions/11039876/multiplication-on-command-line-terminal-unix
	result=$(($seconds * 1000))
	result=$(($result + $milliseconds))

	echo "$result"
	exit
fi

echo "0"
exit