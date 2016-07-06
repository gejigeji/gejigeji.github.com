---
title: halo word source code learn
permalink: blog/halo-word-source-code-learn.html
layout: post
fuzzydate: June 2014
credit: gejigeji
---

### 阅读了chrome扩展[halo word](https://chrome.google.com/webstore/detail/halo-word-dictionary/bhkcehpnnlgncpnefpanachijmhikocj?utm_source=chrome-ntp-icon)的部分源码，以下为学习笔记

*  **manifest.json** ：
  * 字段`app`用来指定应用类型和main.html文件，与之互斥的应用类型字段是`browser_action`类型，会在地址栏右侧显现小图标
  * 字段`background`会自动载入,一直运行，保持整个应用逻辑
  * 字段`content_script`可以影响别的页面，在匹配的页面加载时可以运行`content_script`中指定的js文件(`lookup.js`)
  * 字段`omnibox`指定关键词，在地址栏中输入指定关键词，可以快速触发该应用，具体的操作在`background.html`中的`omnibox.js`定义
*  **background.html** :
    * `context_menu.js`在网页右击菜单选项中添加halo word查询选项
    * `omnibox.js`omnibix具体处理逻辑
    * `db.js`数据库操作
    * `proxy.js`单词操作message监听(lookup.js有发送）
* **main.html** :
    * app主体框架
    * `app.js`充实各个块，查找，添加等功能
    * `desktop.js`在`node-webkit`中运行时的附加处理
* **content_script** :
    * `lookup.js`监听click和mouseup操作，单词框的显现和消失，完成页面选词翻译功能
