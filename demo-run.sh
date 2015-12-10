#!/bin/bash

echo "Starting demo run..."

sh /usr/sleeptalk/scripts/add_timestamp_to_filename.sh
sh /usr/sleeptalk/scripts/add_amplitude_to_filename.sh
sh /usr/sleeptalk/scripts/process-records.sh