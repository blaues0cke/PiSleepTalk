#!/bin/bash

# todo: sercurity question/explicit user confirmation

echo "Installing test data"

sh /usr/sleeptalk/scripts/clean-up.sh

cp /usr/sleeptalk/test-data/* /usr/sleeptalk/records_raw

echo "... done!"