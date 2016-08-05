#!/bin/bash

# 
# This file is part of PiSleepTalk.
# Learn more at: https://github.com/blaues0cke/PiSleepTalk
# 
# Author:  Thomas Kekeisen <pisleeptalk@tk.ca.kekeisen.it>
# License: This work is licensed under the Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License.
#          To view a copy of this license, visit http://creativecommons.org/licenses/by-nc-sa/4.0/.
#

change_file_extension () {

	. /usr/sleeptalk/config/config.cfg

	file="$1"
	format="$2"

	echo "... change_file_extension: changing extension of ${file} to ${format}"

	# Thanks to
	# * http://stackoverflow.com/questions/6121091/get-file-directory-path-from-filepath
	file_dir_base="$(dirname $file)"
	file_name_base="$(basename $file | cut -d. -f1)"
	new_filename="${file_dir_base}/${file_name_base}.${format}"

	echo "... change_file_extension: done, new file name: ${new_filename}"

	__FUNCTION_RETURN="${new_filename}"
}