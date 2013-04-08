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


<pre>
public class HelloWorld {
    public static void main(String args[]) {
      System.out.println("Hello World!");
    }
}
</pre>

{% highlight java %}
public class HelloWorld {
    public static void main(String args[]) {
      System.out.println("Hello World!");
    }
}
{% endhighlight %}

[original article](http://scturtle.is-programmer.com/posts/34225.html)

#How can I use Chinese?Fuck

$$ 
e^x = \sum\_{n=0}^\infty \frac{x^n}{n!} = \lim\_{n\rightarrow\infty} (1+x/n)^n 
$$

    $$ 
    e^x = \sum\_{n=0}^\infty \frac{x^n}{n!} = \lim\_{n\rightarrow\infty} (1+x/n)^n 
    $$
can not fuck vedio and highlight code
#Can not

gist 834610

gist:834610

when I insert the code from gist,the comments blocks can not display.

    <script src="https://gist.github.com/834610.js?file=Jekyll nd Octopress Liquid tag for MathJax.rb"></script>
