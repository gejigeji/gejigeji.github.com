---
layout: post
category : python
tags : [python, algorithm]
---
{% include JB/setup %}

##code:
<pre class="prettyprint linenums">
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


[original article](http://scturtle.is-programmer.com/posts/34225.html)
<pre>
<code>
$$\mathrm{H'} v_1^0 = \mathrm{o}$$
</code>
</pre>