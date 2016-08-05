# 
# This file is part of PiSleepTalk.
# Learn more at: https://github.com/blaues0cke/PiSleepTalk
# 
# Author:  Thomas Kekeisen <pisleeptalk@tk.ca.kekeisen.it>
# License: This work is licensed under the Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License.
#          To view a copy of this license, visit http://creativecommons.org/licenses/by-nc-sa/4.0/.
#

remove_whitespaces_from_path () {

	. /usr/sleeptalk/config/config.cfg

	dir_path="$1"

	echo "... removing whitespaces from path: ${dir_path}"

	# Thanks to
	# * http://stackoverflow.com/questions/2709458/bash-script-to-replace-spaces-in-file-names
	find $dir_path -name "* *" -type d | rename 's/ /_/g' >>"${error_log_path}" 2>&1
	find $dir_path -name "* *" -type f | rename 's/ /_/g' >>"${error_log_path}" 2>&1

	echo "... done removing whitespaces from path: ${dir_path}"
}