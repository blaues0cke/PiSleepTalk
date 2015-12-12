# Documentation

The idea behind this project was to provide a "should work out of the box" solution to make a Raspberry Pi record what you are talking while sleeping.

## Installation




## File system

* /usr/sleeptalk/debug
* /usr/sleeptalk/scripts
* /usr/sleeptalk/records_amplitude
* /usr/sleeptalk/records_final
* /usr/sleeptalk/records_raw
* /usr/sleeptalk/records_rendered
* /usr/sleeptalk/records_timestamp
* /usr/sleeptalk/records_to_render
* /usr/sleeptalk/records_to_subtitle
* /usr/sleeptalk/test-data

## Workflow

Files are processed in the following folders:
 
1) `/usr/sleeptalk/records_raw` contains all raw audio chunks recorded by `record_chunks.sh`




## Samba

The configuration for the samba server is stored here: `/etc/samba/smb.conf`. Type `sudo nano /etc/samba/smb.conf` to edit the file.
By default all folders documented in the "File system" area are a separate share. You may not touch them, but they are there for debug reasons.

To restart the samba server, type: `sudo /etc/init.d/samba restart`