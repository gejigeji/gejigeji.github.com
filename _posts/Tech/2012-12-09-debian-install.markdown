---
layout: post
category : debian
tags : [debian, install]
---
{%include JB/setup %}
##usb安装

我是用u盘安装的，制作u盘安装盘：

    cp debian.iso /dev/sd*

再从u盘启动就可以了。然而我开始是将系统安装在u盘中，grub也在u盘中，这样开机就必须u盘，比较麻烦。后来重装，格掉一个盘。

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
    

