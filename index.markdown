---
layout: page
title: gejigeji
tagline: World is big. Life is short.
---
{% include JB/setup %}


## Articles


<ul class="posts">
  {% for post in site.posts %}
    <li><span>{{ post.date | date_to_string }}</span> &raquo; <a href="{{ BASE_PATH }}{{ post.url }}">{{ post.title }}</a></li>
  {% endfor %}
</ul>

## Elsewhere
 [My sister Ying](https://farm9.staticflickr.com/8117/8626984877_58151bb6bc_b.jpg){: .pull-right

 * [weibo](http://weibo.com/twinsgejigeji)
 * [github](https://github.com/gejigeji)
 {: .span3}

 * [renren](http:www.renren.com/twinsgejigeji)
 *  [diandian](http://www.diandian.com/dianlog/twinsgejigeji)
 {: .span3}
