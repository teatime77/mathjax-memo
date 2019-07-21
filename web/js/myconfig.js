MathJax.Hub.Config({
    extensions: ["tex2jax.js"],
    TeX: {
      Macros: {
        bm: ["\\boldsymbol{#1}", 1],
        argmax: ["\\mathop{\\rm arg\\,max}\\limits"],
        argmin: ["\\mathop{\\rm arg\\,min}\\limits"],
        T  : [ "^\\mathrm{T}" ],
        Tr : [ "\\mathrm{Tr}" ],
        N  : ["\\mathcal{N}"],
        v  : ["\\boldsymbol{#1}", 1],
        m  : ["\\boldsymbol{#1}", 1],
        vv : ["\\mathsf{#1}", 1],
        E  : ["\\mathbb{E}"],
      },
      extensions: ["AMSmath.js","AMSsymbols.js"],
      equationNumbers: { autoNumber: "AMS" } },
    jax: ["input/TeX","output/HTML-CSS"],
    tex2jax: {inlineMath: [["$","$"],["\\(","\\)"]]}
});

var config_url = document.currentScript.src;
var k = config_url.lastIndexOf('?');
if(k != -1){
  config_url = config_url.substring(0, k);
}
MathJax.Ajax.loadComplete(config_url);
