# 
# This file is part of PiSleepTalk.
# Learn more at: https://github.com/blaues0cke/PiSleepTalk
# 
# Author:  Thomas Kekeisen <pisleeptalk@tk.ca.kekeisen.it>
# License: This work is licensed under the Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License.
#          To view a copy of this license, visit http://creativecommons.org/licenses/by-nc-sa/4.0/.
#

dir_path="$1"
dir_list_zip=$(ls ${audio_file_path_import}/*.zip 2>/dev/null)
for zip_file_path in $dir_list_zip
do
	echo "... found zip file, extracting ${zip_file_path}"

	# Thanks to
	# * http://stackoverflow.com/questions/4301786/unzip-zip-file-and-extract-unknown-folder-names-content
	unzip -o -d "${audio_file_path_import}" "${zip_file_path}"

	rm ${zip_file_path}
done