---
layout: post
title:  "How to install and use Nvidia driver in Ubuntu OS on Lenovo Legion Y545"
date:   2020-04-10 00:00:00 -0500
categories: ubuntu nvidia lenovo 
---
Howdy partner! <br>
Today my article will be more about 'how to' style then just an advice.
Let's get started!

![ubuntu-nvidia-lenovo](/assets/ubuntu-nvidia-lenovo.png "How to install and use Nvidia driver in Ubuntu OS on Lenovo Legion Y545")

TODO Add a reason / story
	Laptop, reason, research, pain and fear. Etc.

TODO Add detailed instructions
	Check BIOS config
		Discret vs selective for Graphic # Extra make sure secure boot is off
	Grub config?
		yes/no
	Check System config
		ubuntu-drivers devices
		sudo apt-get install nvidia-prime # make sure
		prime-select query
		sudo prime-select intel
		prime-select query
		reboot
		sudo add-apt-repository ppa:graphics-drivers/ppa
		sudo apt-get update
	Installation via Additional drivers
	Reboot
	Profit

TODO Add Conclusion
	Bla-bla-bla

TODO Add resources
	https://forums.lenovo.com/t5/Gaming-Laptops/Legion-Y545-only-uses-Nvidia-1660ti-no-Intel-graphics-option/m-p/4461235
	https://askubuntu.com/questions/1090919/prime-select-nvidia-not-reflected-in-about-ubuntu-18-04
	https://askubuntu.com/questions/1033785/external-monitor-not-detected-on-ubuntu-18-04
	https://linuxconfig.org/how-to-install-the-nvidia-drivers-on-ubuntu-18-04-bionic-beaver-linux
	https://forums.developer.nvidia.com/t/unable-to-load-the-nvidia-drm-kernel-module-error/71469
	https://launchpad.net/~graphics-drivers/+archive/ubuntu/ppa
