---
title: Genetic Programming in Go
permalink: blog/generic-programming-in-go.html
layout: post
fuzzydate: December 2013
credit: gejigeji
---

We can use `interface` to do "generic" programming in go.

{% highlight ruby %}
package main

import(
	"fmt"
)

type Sortable interface{
	Len() int
	Less(int, int) bool
	Swap(int, int)
}

func BubbleSortable(arr Sortable){
	length := arr.Len()
	for i := 0; i <length; i++{
		for j := 0; j < length-i-1; j++{
			if arr.Less(j, j+1){
				arr.Swap(j, j+1)
			}
		}
	}
}

//int array
type IntArr []int

func (arr IntArr) Len() int{
	return len(arr)
}

func (arr IntArr) Less(i int, j int) bool{
	return arr[i] < arr[j]
}

func (arr IntArr) Swap(i int, j int){
	arr[i], arr[j] = arr[j], arr[i]
}

//float array
type FloArr []float64
func (arr FloArr) Len() int{
	return len(arr)
}
func (arr FloArr) Less(i int, j int) bool{
	return arr[i] < arr[j]
}
func (arr FloArr) Swap(i int, j int){
	arr[i], arr[j] = arr[j], arr[i]
}

//string array
type StrArr []string
func (arr StrArr) Len() int{
	return len(arr)
}
func (arr StrArr) Less(i int, j int) bool{
	return arr[i] < arr[j]
}
func (arr StrArr) Swap(i int, j int){
	arr[i], arr[j] = arr[j], arr[i]
}

func main(){
	intarr := IntArr{2,1,3,-9,0}
	BubbleSortable(intarr)
	fmt.Printf("sorted int arr is: %v\n", intarr)

	strarr := StrArr{"def","abc","hij","klm"}
	BubbleSortable(strarr)
	fmt.Printf("sorted str arr is: %v\n", strarr)

	floarr := FloArr{3.5,7.2,2.7,34.9,456.234,0.2}
	BubbleSortable(floarr)
	fmt.Printf("sorted str arr is: %v\n", floarr)

}

{% endhighlight %}

A more common and nice [realization](https://github.com/Dwarfartisan/algorithms4/blob/master/src/algorithms/types/atoms.go) is:

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

type Float float64 
func (f Float)Numeric() float64{
	return float64(f)
}
func (f Float)Less(other interface{}) bool{
	switch o := other.(type) {
	case int:
		return f.Numeric()<float64(o)
	case float64:
		return f.Numeric()<o
	default:
		if d, ok :=o.(Numeric); ok{
			return f.Numeric()<d.Numeric()
		} else {
			var message = fmt.Sprintf("%v can't compare with %v", f, o)
			panic(message)
		}
	}
}

type Stringer interface {
	String() string
}

type String string
func (s String)String() string{
	return string(s)
}
func (s String)Less(other interface{}) bool{
	switch o := other.(type) {
	case string:
		return s.String()<o
	case String:
		return s<o
	default:
		if d, ok := o.(Stringer); ok{
			return s.String()<d.String()
		}else{
			var message = fmt.Sprintf("%v can't compare with %v", s, o)
			panic(message)
		}
	}
}

type Sortable []Less

func (s Sortable)Len() int {
	return len(s)
}

func (s Sortable)Less(i, j int) bool {
	return s[i].Less(s[j])
}

func (s Sortable)Swap(i, j int){
	s[i], s[j] = s[j], s[i]
}

{% endhighlight %}
