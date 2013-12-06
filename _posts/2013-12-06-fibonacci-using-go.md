---
title: fibonacci using go
permalink: blog/fibonacci-using-go.html
layout: post
fuzzydate: December 2013
credit: gejigeji
---

I am learning golang this time.
The channel in go is very important and useful.
Here is a solution of fibonacci using go.

`range` can read from `chan`

{% highlight golang %}
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
