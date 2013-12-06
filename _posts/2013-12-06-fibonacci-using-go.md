---
title: git aliae to make you more awesome (part 1)
permalink: blog/git-aliae-1.html
layout: post
fuzzydate: May 2012
credit: Martin Kleppmann, Ryan Fitzgerald and John Mair
---

I am learning golang this time.
The channel in go is very important and useful.
Here is a solution of fibonacci using go.

{% highlight go %}
package main

import (
"fmt"
)

func fib(n int) chan int{
	x,y := 1,1
	c := make(chan int)
	go func(){
		for i := 0; i < n; i++{
			c <- x
			x, y = y, x + y
		}
		close(c)
	}()
	return c
}

func main(){
	n := 10
	for i:= range fib(n){
		fmt.Println(i)
	}
}
{% endhighlight %}
