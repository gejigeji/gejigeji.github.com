---
title: Type of Interface in Go
permalink: blog/type-of-interface-in-go.html
layout: post
fuzzydate: December 2013
credit: gejigeji
---

*	Comma-ok 断言

	Go里可以直接判断是否是该类型的对象： `value, ok = element.(T)` ，这里value就是变量的值，ok
是一个bool类型， element是interface的变量, T是断言的类型/接口。

	如果element里面确实存储了T类型的对象，那么ok返回true，否则返回false。

*	switch

	同时，下面这段代码还用到了特有的element.(type)语法，这个语法只能在switch中使用。

{% highlight ruby %}
package types

import "fmt"

type Less interface {
	Less(other interface{}) bool
}

type Numeric interface {
	Numeric() float64
}

type Integer int
func (i Integer)Numeric() float64{
	return float64(int(i))
}

func (i Integer)Less(other interface{}) bool{
	switch o := other.(type) {
	case int:
		return int(i)<o
	case float64:
		return i.Numeric()<o
	default:
		if d, ok :=o.(Numeric); ok{
			return i.Numeric()<d.Numeric()
		} else {
			var message = fmt.Sprintf("%v can't compare with %v", i, o)
			panic(message)
		}
	}
}
{% endhighlight %}
