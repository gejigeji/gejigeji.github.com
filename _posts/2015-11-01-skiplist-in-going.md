---
title: skiplist in go
permalink: blog/skiplist-in-go.html
layout: post
fuzzydate: January 2015
credit: gejigeji
---

```c++
package skiplist

import (
	"fmt"
	"math/rand"
	"time"
)

const MAXLEVEL int = 32

type SkiplistLevel struct {
	forward *SkiplistNode
	span    int
}

type SkiplistNode struct {
	obj      string
	score    float64
	backward *SkiplistNode
	level    []SkiplistLevel
}

type Skiplist struct {
	header *SkiplistNode
	tail   *SkiplistNode
	length int
	level  int
}

func CreateNode(level int, score float64, obj string) *SkiplistNode {
	var zl = make([]SkiplistLevel, level)
	var zn = new(SkiplistNode)
	zn.level = zl
	zn.score = score
	zn.obj = obj
	return zn
}

func Create() *Skiplist {
	var zsl *Skiplist
	zsl = new(Skiplist)
	zsl.level = 1
	zsl.length = 0
	zsl.header = CreateNode(MAXLEVEL, 0, "")
	for j := 0; j < MAXLEVEL; j++ {
		zsl.header.level[j].forward = nil
		zsl.header.level[j].span = 0
	}
	zsl.header.backward = nil
	zsl.tail = nil
	return zsl
}

func (zsl *Skiplist) Insert(score float64, obj string) *SkiplistNode {
	if obj == "" {
		return nil
	}
	var update = make([](*SkiplistNode), MAXLEVEL)
	var rank = make([]int, MAXLEVEL)
	var x = zsl.header
	for i := zsl.level - 1; i >= 0; i-- {
		if i == zsl.level-1 {
			rank[i] = 0
		} else {
			rank[i] = rank[i+1]
		}
		for x.level[i].forward != nil && (x.level[i].forward.score < score \
			|| (x.level[i].forward.score == score && x.level[i].forward.obj < obj)) {
			rank[i] += x.level[i].span + 1
			x = x.level[i].forward
		}
		update[i] = x
	}
	var level = randomLevel()
	if level > zsl.level {
		for i := zsl.level; i < level; i++ {
			rank[i] = 0
			update[i] = zsl.header
			update[i].level[i].span = zsl.length
		}
		zsl.level = level
	}
	x = CreateNode(level, score, obj)
	for i := 0; i < level; i++ {
		x.level[i].forward = update[i].level[i].forward
		update[i].level[i].forward = x
		x.level[i].span = update[i].level[i].span - rank[0] + rank[i]
		update[i].level[i].span = (rank[0] - rank[i])
	}
	for i := level; i < zsl.level; i++ {
		update[i].level[i].span++
	}
	if update[0] == zsl.header {
		x.backward = nil
	} else {
		x.backward = update[0]
	}
	if x.level[0].forward != nil {
		x.level[0].forward.backward = x
	} else {
		zsl.tail = x
	}
	zsl.length++
	return x
}

func (zsl *Skiplist) Search(score float64) string {
	var x = zsl.header
	for i := zsl.level - 1; i >= 0; i-- {
		for x.level[i].forward != nil && x.level[i].forward.score < score {
			x = x.level[i].forward
		}
	}
	x = x.level[0].forward
	if x != nil && score == x.score {
		return x.obj
	} else {
		return ""
	}
}

func (zsl *Skiplist) Delete(score float64, obj string) int {
	var update = make([](*SkiplistNode), MAXLEVEL)
	var rank = make([]int, MAXLEVEL)
	var x = zsl.header
	for i := zsl.level - 1; i >= 0; i-- {
		if i == zsl.level-1 {
			rank[i] = 0
		} else {
			rank[i] = rank[i+1]
		}
		for x.level[i].forward != nil && (x.level[i].forward.score < score \
			|| (x.level[i].forward.score == score && x.level[i].forward.obj < obj)) {
			rank[i] += x.level[i].span + 1
			x = x.level[i].forward
		}
		update[i] = x
	}
	x = x.level[0].forward
	if x != nil && score == x.score {
		zsl.deleteNode(x, update)
		return 0
	} else {
		return 1
	}
}

func (zsl *Skiplist) deleteNode(x *SkiplistNode, update [](*SkiplistNode)) int {
	for i := 0; i < zsl.level; i++ {
		if update[i].level[i].forward == x {
			update[i].level[i].forward = x.level[i].forward
			update[i].level[i].span += x.level[i].span + 1
		}
		update[i].level[i].span--
	}
	if x.level[0].forward != nil {
		x.level[0].forward.backward = x.backward
	} else {
		zsl.tail = x.backward
	}
	for zsl.level > 0 && zsl.header.level[zsl.level-1].forward == nil {
		zsl.level--
	}
	zsl.length--
	return 0
}

func randomLevel() int {
	var level int = 1
	r := rand.New(rand.NewSource(time.Now().UnixNano()))
	for r.Float64() < 0.5 {
		level += 1
	}
	if level < MAXLEVEL {
		return level
	} else {
		return MAXLEVEL
	}
}

func (zn *SkiplistNode) PrintNode() {
	fmt.Println("[Node]:")
	fmt.Println("	obj: ", zn.obj)
	fmt.Println("	score: ", zn.score)
	fmt.Println("	level: ", len(zn.level))
}

func (zl *Skiplist) PrintList() {
	var x *SkiplistNode
	for j := 0; j < zl.level; j++ {
		fmt.Printf("[LEVEL %d]: ", j)
		for x = zl.header; x != nil; x = x.level[j].forward {
			fmt.Printf("%.1f %s %d -> ", x.score, x.obj, x.level[j].span)
			for k := 0; k < x.level[j].span; k++ {
				fmt.Printf("%s %s %s-> ", "  ", "  ", "  ")
			}
		}
		fmt.Printf("nil\n")
	}
	fmt.Println("")
}
```
