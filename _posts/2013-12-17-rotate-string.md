---
title: Rotate String
permalink: blog/rotate-string.html
layout: post
fuzzydate: December 2013
credit: gejigeji
---

Rotate the string with small time and space using clang.

{% highlight c %}
#include<stdio.h>

int gcd(int n, int k){
	int tmp;
	if(n < k){
		tmp = n; n = k; k = tmp;
	}
	while(n % k != 0){
		tmp = k;
		k = n % k;
		n = tmp;
	}
	return k;
}

void rotate(char *begin, char *mid, char *end){
	int n = end - begin + 1;
	int k = mid - begin + 1;
	int d = gcd(n, k);
	int i, j;
	int tmp, last;
	for (i = 0; i < d; i ++){
		tmp = begin[i];
		last = i;
		for (j = (i + k)%n; j!= i; j = (j + k) % n){
			begin[last] = begin[j];
			last = j;
		}
		begin[last] = tmp;
	}
}

void main(){
	char a[20] = "gejigeji1234567890";
	puts(a);
	rotate(&(a[0]),&(a[7]),&(a[17]));
	puts(a);
}
{% endhighlight %}
