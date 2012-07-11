function loadJS(name) {
    var head = document.getElementsByTagName("head")[0], script;
    script = document.createElement("script");
    script.type = "text/javascript";
    script.src  = name;
    head.appendChild(script);
}

function loadMathJax() {
  setTimeout(function () {
    var head = document.getElementsByTagName("head")[0], script;

    script = document.createElement("script");
    script.type = "text/x-mathjax-config";
    script[(window.opera ? "innerHTML" : "text")] =
      "MathJax.Hub.Config({\n" +
      "  tex2jax: {inlineMath: [['//$','//$']], skipTags: ['script', 'noscript', 'style', 'textarea']}, " +
      "  jax: ['input/TeX','output/HTML-CSS'], " +
      "  showMathMenu: false, " +
      "  showMathMenuMSIE: false, " +
      "  extensions: ['tex2jax.js'], " +
      "  TeX: { " +
      "    extensions: ['AMSmath.js','AMSsymbols.js','noErrors.js','noUndefined.js'] " +
      "  }, " +
      "  'HTML-CSS': { " +
      "    imageFont: null, " +
      "    availableFonts: [], " +
      "    EqnChunk: 3, " +
      "    EqnChunkFactor: 1.1, " +
      "    EqnChunkDelay: 200, " +
      "  } " +
      "});" +
      "MathJax.Hub.Register.StartupHook('End Config',function () {MathJax.Hub.config.menuSettings.renderer = 'HTML-CSS'});"
    head.appendChild(script);
    
    loadJS("MathJax.js?config=default");
  },20)
}

function toggleMenu() {
	var m = document.getElementById('menu');
	if(m.style.display != 'block')
		{m.style.display='block';}
	scroll(0,0);
}

window.onload = function() {
   loadMathJax();
}
