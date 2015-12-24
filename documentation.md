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

## .sleeptalk format

I needed to implement a simple format to transmit the text data from node.js to the bash part of PiSleepTalk.
For this reason the following format exists. It just contains the frame count and the corresponding text, like this:

	0000|First text at second 0
	0015|Follows after 1 second
	0060|Appears after 4 seconds from start

## Videos

Videos are rendered with `15` FPS. So one second is equivalent to 1 second.

## Samba

The configuration for the samba server is stored here: `/etc/samba/smb.conf`. Type `sudo nano /etc/samba/smb.conf` to edit the file.
By default all folders documented in the "File system" area are a separate share. You may not touch them, but they are there for debug reasons.

To restart the samba server, type: `sudo /etc/init.d/samba restart`

## Thanks to

* Michael Malura (https://github.com/maluramichael) for the node.js support

## References

### Bootstrap

* http://v4-alpha.getbootstrap.com/

### Colourlovers

* http://www.colourlovers.com/palette/580974/Adrift_in_Dreams
* From light to dark:
  * #CFF09E
  * #A8DBA8
  * #79BD9A
  * #3B8686
  * #0B486B

### node.js

* https://github.com/isaacs/node-glob
* https://github.com/remy/nodemon

### Wavesurfer

* http://wavesurfer-js.org/