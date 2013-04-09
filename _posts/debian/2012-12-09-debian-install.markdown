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
<pre>
cp debian.iso /dev/sd*
</pre>
从u盘启动。

##iNode
下载iNode for linux,tips:

    ./install.sh
    #ifconfig eth0 down
    #ifconfig eth0 hw ether **:**:**:**:**:**
    #ifconfig eth0 up
    ./AuthMngService
    ./iNodeClient
    dhclient eth0

##fonts 
查看字体
    
    fc-list

可以从windows下拷贝truetype字体到/usr/share/fonts/ * ,然后**更新？**

    cp *.ttf /usr/share/fonts/truetype
    fc-cache -fv

##sudo

    apt-get install sudo

再根据提示添加用户

##系统字体
通过locale设置

##输入法
scim

##播放器
mplayer

##浏览器
chrome

##tranmission
对ipv6支持不好
可通过修改源文件改善
    

