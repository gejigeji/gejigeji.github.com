---
layout: post
title: 不定义 函数 完成 递归
category : python
tags : [python, algorithm]
keywords: python, function, recursion
description: 不定义函数也能完成递归
---

##code:
<pre>
A = r'''
B = "A = r\'''" + A + "\'''\n" + A
n = 10
if n == 1:
    ans = 1
else:
    B = B.replace('n = '+str(n),'n = '+str(n-1),2)
    env = {}
    exec(B,env)
    ans = n * env['ans']
print ans
'''
B = "A = r\'''" + A + "\'''\n" + A
exec(B)
</pre>

[Original Article](http://scturtle.is-programmer.com/posts/34225.html)
