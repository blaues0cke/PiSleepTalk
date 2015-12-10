#!/bin/bash

# todo: sercurity question/explicit user confirmation

echo "Installing test data"
echo "... we will wait 1s for each file to get a realistic file time"

sh /usr/sleeptalk/scripts/clean-up.sh

DEMO_FILE_PATHS=/usr/sleeptalk/test-data/*

set file_counter=0

for demo_file_path in $DEMO_FILE_PATHS
do
	cp "$demo_file_path" /usr/sleeptalk/records_raw

	echo "... copied $demo_file_path"

	# todo: fake the creation time to save time while creating the test data
	sleep 1s
done

echo "... done!"