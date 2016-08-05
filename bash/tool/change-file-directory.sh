#!/bin/bash

# 
# This file is part of PiSleepTalk.
# Learn more at: https://github.com/blaues0cke/PiSleepTalk
# 
# Author:  Thomas Kekeisen <pisleeptalk@tk.ca.kekeisen.it>
# License: This work is licensed under the Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License.
#          To view a copy of this license, visit http://creativecommons.org/licenses/by-nc-sa/4.0/.
#

change_file_directory () {

	. /usr/sleeptalk/config/config.cfg

	file="$1"
	folder="$2"

	echo "... change_file_directory: changing directory of ${file} to ${folder}"

	# Thanks to
	# * http://stackoverflow.com/questions/6121091/get-file-directory-path-from-filepath
	file_name_base="$(basename $file)"
	new_filename="${folder}/${file_name_base}"

	echo "... change_file_directory: done, new path: ${new_filename}"

	__FUNCTION_RETURN="${new_filename}"
}