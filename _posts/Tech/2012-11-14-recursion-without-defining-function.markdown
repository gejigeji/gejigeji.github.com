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

<span class="math">
<span class="MathJax_Preview"></span>
<span class="MathJax" id="MathJax-Element-1-Frame" role="textbox" aria-readonly="true" style=""><nobr><span class="math" id="MathJax-Span-1"><span style="display: inline-block; position: relative; width: 108px; height: 0px; font-size: 122%; "><span style="position: absolute; clip: rect(29px 17080px 58.9px -8.1px); top: -48px; left: 0px; "><span class="mrow" id="MathJax-Span-2"><span class="mi" id="MathJax-Span-3" style="font-family: MathJax_Math; font-style: italic; ">f<span style="display: inline-block; overflow: hidden; height: 1px; width: 1px; "></span></span><span class="mo" id="MathJax-Span-4" style="font-family: MathJax_Main; ">(</span><span class="mi" id="MathJax-Span-5" style="font-family: MathJax_Math; font-style: italic; ">x</span><span class="mo" id="MathJax-Span-6" style="font-family: MathJax_Main; ">,</span><span class="mi" id="MathJax-Span-7" style="font-family: MathJax_Math; font-style: italic; padding-left: 2.8px; ">h</span><span class="mo" id="MathJax-Span-8" style="font-family: MathJax_Main; ">)</span><span class="mo" id="MathJax-Span-9" style="font-family: MathJax_Main; padding-left: 4.7px; ">=</span><span class="mfrac" id="MathJax-Span-10" style="padding-left: 6.8px; padding-right: 2px; "><span style="display: inline-block; position: relative; width: 33px; height: 0px; "><span style="position: absolute; clip: rect(27.4px 17080px 42.1px -8.6px); top: -46.3px; left: 50%; margin-left: -8px; "><span class="mrow" id="MathJax-Span-11">
<span class="mi" id="MathJax-Span-12" style="font-size: 70.7%; font-family: MathJax_Math; font-style: italic; ">A</span><span class="mi" id="MathJax-Span-13" style="font-size: 70.7%; font-family: MathJax_Math; font-style: italic; ">x</span></span><span style="display: inline-block; width: 0px; height: 39px; "></span></span><span style="position: absolute; clip: rect(28.8px 17080px 44px -8px); top: -33.1px; left: 50%; margin-left: -15.5px; "><span class="mrow" id="MathJax-Span-14"><span class="mn" id="MathJax-Span-15" style="font-size: 70.7%; font-family: MathJax_Main; ">1</span><span class="mo" id="MathJax-Span-16" style="font-size: 70.7%; font-family: MathJax_Main; ">+</span><span class="mi" id="MathJax-Span-17" style="font-size: 70.7%; font-family: MathJax_Math; font-style: italic; ">B</span><span class="mi" id="MathJax-Span-18" style="font-size: 70.7%; font-family: MathJax_Math; font-style: italic; ">x</span></span><span style="display: inline-block; width: 0px; height: 40px; "></span></span><span style="position: absolute; clip: rect(13.7px 17080px 21px -9px); top: -21.8px; left: 0px; "><span style="border-left-width: 33px; border-left-style: solid; display: inline-block; overflow: hidden; width: 0px; height: 1.25px; vertical-align: 0px; "></span><span style="display: inline-block; width: 0px; height: 18px; "></span></span></span></span></span><span style="display: inline-block; width: 0px; height: 48px; "></span></span></span><span style="border-left-width: 0px; border-left-style: solid; display: inline-block; overflow: hidden; width: 0px; height: 25.8px; vertical-align: -8.9px; "></span></span></nobr></span><script type="math/tex" id="MathJax-Element-1">f(x,h) = \frac{A x}{1 + B x}</script></span>