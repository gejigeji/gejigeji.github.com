---
title: Download Using Python Multi-threads
permalink: blog/download-using-python-multi-threads.html
layout: post
fuzzydate: December 2013
credit: gejigeji
---

I need to download something like [3GPP doc](http://www.3gpp.org/ftp/tsg_ran/WG1_RL1/TSGR1_75/Docs/).
But I am not familiar with multi-threads with bash using wget, so I use python instead.

{% highlight python %}
from urllib.request import urlopen
import re,queue
from threading import Thread
class download(Thread):
    def __init__(self,q):
        Thread.__init__(self)
        self.q = q
    def run(self):
        while True:
            if not self.q.empty():
                print('----------%s----------'%(self.name))
                zip_file = self.q.get()
                print(zip_file)
                f = urlopen("http://www.3gpp.org/"+zip_file).read()
                with open(zip_file.split('/')[-1],'ab') as zipfile:
                    zipfile.write(f)
                    zipfile.close()
            else:
                break

def startDown(url,httppat,thread_num,decoding='utf-8'):
    doc = urlopen(url).read().decode(decoding)
    zips = httppat.findall(doc)
    q = queue.Queue()
    for i in range(0,len(zips)):
        q.put(zips[i])
    for i in range(thread_num):
        d=download(q)
        d.start()

if __name__=='__main__':
    url = 'http://www.3gpp.org/ftp/tsg_ran/WG1_RL1/TSGR1_75/Docs/'
    httppat = re.compile(r'(ftp/[^\t\n"]*\.zip)')
    thread_num = 10
    startDown(url,httppat,thread_num)
{% endhighlight %}
