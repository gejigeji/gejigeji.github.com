---
layout: post
title: debian 系统 安装
category : debian
tags : [debian, install]
keywords: debian, system, install
description: 安装debian系统的简单步骤
---

##usb安装盘

制作u盘安装盘：

	cp debian.iso /dev/sd*

从u盘启动。

##iNode
下载iNode for linux,tips:

    ./install.sh
    #ifconfig eth0 down
    #ifconfig eth0 hw ether **:**:**:**:**:**
    #ifconfig eth0 up
    ./AuthMngService
    ./iNodeClient & dhclient eth0

##fonts 
查看字体
    
    fc-list

简单的，可以从windows下拷贝truetype字体到/usr/share/fonts/ * ,然后更新字体

    cp *.ttf /usr/share/fonts/truetype
    fc-cache -fv

##sudoers
安装sudo

    apt-get install sudo

再根据提示添加sudoers

##系统字体
通过locale设置

##输入法

    apt-get install ibus ibus-pinyin
    

