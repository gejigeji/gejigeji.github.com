---
title: Dir Tree Using Go
permalink: blog/dir-tree-using-go.html
layout: post
fuzzydate: December 2013
credit: gejigeji
---

Tree of dir using golang.

By using gox to build it, it can be used in Windows and so on.

{% highlight ruby %}
package main
import (
	"fmt"
	"os"
	"path/filepath"
	"io/ioutil"
	"strings"
)

func main(){
	if len(os.Args) > 1{
		Tree(os.Args[1], 1, map[int]bool{1:true})
	}
}

func Tree(dirname string, curHier int, hierMap map[int]bool) error {
	dirAbs, err:= filepath.Abs(dirname)
	if err != nil {
		return err
	}
	fileInfos, err := ioutil.ReadDir(dirAbs)
	if err != nil{
		return err
	}
	
	fileNum := len(fileInfos)
	for  i, fileInfo := range fileInfos {
		for j := 1; j < curHier; j++ {
			if hierMap[j] {
				fmt.Print("|")
			}else {
				fmt.Print(" ")
			}
			fmt.Print(strings.Repeat(" ", 3))
		}

		tmpMap := map[int]bool{}
		for k, v := range hierMap{
			tmpMap[k] = v
		}
		if i+1 == fileNum{
			fmt.Print("`")
			delete(tmpMap, curHier)
		} else{
			fmt.Print("|")
			tmpMap[curHier] = true
		}
		fmt.Print("-- ")
		fmt.Println(fileInfo.Name())
		if fileInfo.IsDir() {
			Tree(filepath.Join(dirAbs, fileInfo.Name()), curHier+1, tmpMap)
		}
	}
	return nil
}
{% endhighlight %}
