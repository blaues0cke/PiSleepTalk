# 
# This file is part of PiSleepTalk.
# Learn more at: https://github.com/blaues0cke/PiSleepTalk
# 
# Author:  Thomas Kekeisen <pisleeptalk@tk.ca.kekeisen.it>
# License: This work is licensed under the Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License.
#          To view a copy of this license, visit http://creativecommons.org/licenses/by-nc-sa/4.0/.
#

dir_path="$1"

# Thanks to
# * http://stackoverflow.com/questions/27621/unix-shell-file-copy-flattening-folder-structure
find ${dir_path}/*/* -exec mv \{\} "${dir_path}" \; 2>/dev/null

# Thanks to
# * https://unix.stackexchange.com/questions/68846/how-do-i-remove-all-sub-directories-from-within-a-directory/68847#68847
rm -R -- ${dir_path}/*/ 2>/dev/null