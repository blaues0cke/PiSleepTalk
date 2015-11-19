# PiSleepTalk

---

TODO: Project description


## Short description (for professionals)

* Download Raspbian or another operating system you like
* Install the image on your sd card (See [https://www.raspberrypi.org/documentation/installation/installing-images/](https://www.raspberrypi.org/documentation/installation/installing-images/))

## Long descriptions (step by step)

TODO: explain the explaination

## Download the image

Go to [http://www.raspberrypi.org/downloads/](http://www.raspberrypi.org/downloads/) and download the latest version of **Raspbian**. You should download a file called `2015-09-24-raspbian-jessie.zip`. Unzip this file to get a `img` file. In the most cases this file is also called `2015-09-24-raspbian-jessie.img`.

## Make the sd card ready

To install the image on your sd card you can follow the description [here](https://www.raspberrypi.org/documentation/installation/installing-images/). This readme will it explain, too.

### OSX

* Open your terminal
* Type `diskutil list` to get a list of all disks available on your mac
  ![Screenshot diskutil list](README/diskutil_list.png)
* Remember the number of the disk that matches your sd card, in my case this is `/dev/disk5`
* Type `diskutil unmountDisk <disk path>` to unmount your disk, so in my case it would be: `diskutil unmountDisk /dev/disk5`
* Go to the folder that contains your `img` file
  ![Screenshot cd downloads folder](README/cd_downloads.png)
* Type the following command, but make sure you replace `n` with your disk number, also you have to replace the path to the image: `sudo dd bs=1m if=path_of_your_image.img of=/dev/rdiskn`, so im my case that would be: `sudo dd bs=1m if=2015-09-24-raspbian-jessie.img of=/dev/rdisk5`
* Grab a coffee (9:04)