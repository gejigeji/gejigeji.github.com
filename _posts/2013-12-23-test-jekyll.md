---
title: test jekyll
permalink: blog/test-jekyll.html
layout: post
fuzzydate: December 2013
credit: gejigeji
---

We can use `interface` to do "genetic" programming in go.

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
}

{% endhighlight %}
