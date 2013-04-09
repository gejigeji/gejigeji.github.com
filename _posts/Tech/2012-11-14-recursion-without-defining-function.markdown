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


<pre class="prettyprint linenums">

clear all

M = 8;
rate = 0.5;
% w=[1 exp(j*2*pi)]
theta = [-pi./2:0.01:pi./2];
sum1 = zeros(1,length(theta));
sum2 = zeros(1,length(theta));
for p = 1:length(theta)
    for q = 1:M
        sum1(p) = sum1(p) +  ((exp(-j*(q-1)*2*rate*pi*sin(20./180*pi)))+(exp(-j*(q-1)*2*rate*pi*sin(5./180*pi))))*(exp(-j*(q-1)*2*rate*pi*sin(theta(p))));
%         sum2(p) = sum2(p) + (1-i)*(exp(-j*(q-1)*2*rate*pi*sin(20./180*pi)))*(exp(-j*(q-1)*2*rate*pi*sin(theta(p))));
    end
end
% plot(theta(2:length(theta)),(abs(sum(2:length(theta)))./max(abs(sum(2:length(theta))))))
% polar(theta,(abs(sum1))./8)
polar(theta,(abs(sum1))./8)
hold on
grid on
% polar(theta,(abs(sum2))./8)
%这是一个测试

</pre>


<pre class="prettyprint linenums">
&lt;plugin&gt;
    &lt;groupId&gt;org.apache.tomcat.maven&lt;/groupId&gt;
    &lt;artifactId&gt;tomcat6-maven-plugin&lt;/artifactId&gt;
    &lt;version&gt;2.0&lt;/version&gt;
    &lt;configuration&gt;
        &lt;path&gt;/&lt;/path&gt;
        &lt;port&gt;8080&lt;/port&gt;
        &lt;uriEncoding&gt;UTF-8&lt;/uriEncoding&gt;
    &lt;/configuration&gt;
&lt;/plugin&gt;
</pre>

### Tomcat 7

<pre class="prettyprint linenums">
&lt;plugin&gt;
    &lt;groupId&gt;org.apache.tomcat.maven&lt;/groupId&gt;
    &lt;artifactId&gt;tomcat7-maven-plugin&lt;/artifactId&gt;
    &lt;version&gt;2.0&lt;/version&gt;
    &lt;configuration&gt;
        &lt;path&gt;/&lt;/path&gt;
        &lt;port&gt;8080&lt;/port&gt;
        &lt;uriEncoding&gt;UTF-8&lt;/uriEncoding&gt;
    &lt;/configuration&gt;
&lt;/plugin&gt;
</pre>

### jetty 老的配置

<pre class="prettyprint linenums">
&lt;plugin&gt;
    &lt;groupId&gt;org.mortbay.jetty&lt;/groupId&gt;
    &lt;artifactId&gt;maven-jetty-plugin&lt;/artifactId&gt;
    &lt;version&gt;6.1.26&lt;/version&gt;
    &lt;configuration&gt;
        &lt;connectors&gt;
            &lt;connector implementation="org.mortbay.jetty.nio.SelectChannelConnector"&gt;
                &lt;port&gt;8080&lt;/port&gt;
            &lt;/connector&gt;
        &lt;/connectors&gt;
        &lt;contextPath&gt;/&lt;/contextPath&gt;
        &lt;scanIntervalSeconds&gt;10&lt;/scanIntervalSeconds&gt;
    &lt;/configuration&gt;
&lt;/plugin&gt;
</pre>

### jetty 新的配置

<pre class="prettyprint linenums">
&lt;plugin&gt;
    &lt;groupId&gt;org.mortbay.jetty&lt;/groupId&gt;
    &lt;artifactId&gt;jetty-maven-plugin&lt;/artifactId&gt;
    &lt;version&gt;8.1.8.v20121106&lt;/version&gt;
    &lt;configuration&gt;
        &lt;connectors&gt;
            &lt;connector implementation="org.eclipse.jetty.server.nio.SelectChannelConnector"&gt;
                &lt;port&gt;8080&lt;/port&gt;
            &lt;/connector&gt;
        &lt;/connectors&gt;
        &lt;systemProperties&gt;
            &lt;systemProperty&gt;
                &lt;name&gt;org.eclipse.jetty.util.URI.charset&lt;/name&gt;
                &lt;value&gt;UTF-8&lt;/value&gt;
            &lt;/systemProperty&gt;
        &lt;/systemProperties&gt;
    &lt;/configuration&gt;
&lt;/plugin&gt;
</pre>


[original article](http://scturtle.is-programmer.com/posts/34225.html)
