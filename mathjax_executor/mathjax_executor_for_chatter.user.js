// ==UserScript==
// @name mathjax executor for chatter
// @include http://ap.salesforce.com/*
// @include https://ap.salesforce.com/*
// ==/UserScript==

(function(){
  var style = document.createElement("style");
  style.type = "text/css";
  style.textContent = ".MathJax{margin:0.5em;padding:1em;border:solid #666666 1px;display:inline-block;}";
  document.body.appendChild(style);
  var script = document.createElement("script");
  script.type="text/javascript";
  script.src="//youkinjoh.github.io/MathJax/MathJax.js?config=AM_HTMLorMML-full";
  document.body.appendChild(script);
})();
