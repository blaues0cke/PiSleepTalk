#
# Will check the free disk space and the service persistance every 60s
#
* * * * * root           sh /usr/sleeptalk/scripts/health-check.sh

#
# Will add the timestamp to the filename every 15 seconds
#
* * * * * root           sh add_timestamp_to_filename.sh
* * * * * root sleep 15; sh add_timestamp_to_filename.sh
* * * * * root sleep 30; sh add_timestamp_to_filename.sh
* * * * * root sleep 45; sh add_timestamp_to_filename.sh

#
# Will add the amplitude to the filename every 15 seconds
#
* * * * * root sleep 10; sh add_timestamp_to_filename.sh
* * * * * root sleep 25; sh add_timestamp_to_filename.sh
* * * * * root sleep 40; sh add_timestamp_to_filename.sh
* * * * * root sleep 55; sh add_timestamp_to_filename.sh

