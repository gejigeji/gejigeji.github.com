// ==UserScript==
// @name         mathjax for douban
// @namespace    jiangzuoyan@gmail.com
// @author       Changsheng Jiang<jiangzuoyan@gmail.com>
// @include http://*.douban.com/*
// @description texify formula using mathjax
// @date 2011-07-12
// @version 20110712
// ==/UserScript==

(function() {
   function check_init_mathjax() {
     if (typeof MathJax == "undefined") {
       //var math_jax_src = "http://img3.douban.com/static/book/math/MathJax.js?config=TeX-AMS-MML_HTMLorMML&delayStartupUntil=configured";
        var math_jax_src = "http://cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-AMS-MML_HTMLorMML&delayStartupUntil=configured";
       var script = document.createElement("script");
       script.src = math_jax_src;
       script.type = "text/javascript";
       script.addEventListener(
         "load", 
         function() {
           MathJax.Hub.Config(
             {
               jax: ["input/TeX", "output/HTML-CSS"],
               extensions: ["tex2jax.js","TeX/AMSmath.js","TeX/AMSsymbols.js", "TeX/noUndefined.js"],
               tex2jax: {
                 inlineMath: [ ['$','$'], ["\\(","\\)"], ["[;", ";]"] ],
                 displayMath: [ ['$$','$$'], ["\\[","\\]"] ],
                 skipTags: ["script","noscript","style","textarea", "pre"],
                 ignoreClass: "tex2jax_ignore",
                 processEscapes: true,
                 processEnvironments: true,
                 preview: "TeX"
               },
               showProcessingMessages: true
             });
           MathJax.Hub.Configured();
         }, false);
       document.body.appendChild(script);
     }
   }
   var script = document.createElement("script");
   script.textContent = "(" + check_init_mathjax.toString() + ")();";
   document.body.appendChild(script);
 })();

