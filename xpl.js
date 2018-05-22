var xplcodes = {
popup: function(code) {alert(params[0]);},
ask: function(code) {return prompt(params[0]);},

};
function readread(code,params) {
return xplcodes[code.tagName](params);
}
function readline(code) {
if (code.children.length > 0) {
  var params = new Array();
for(var z = 0; z<code.children.length;z++) {
  params[z] = readline(code.children[z]);
  
}
  return readread(code,params);
} else {
  var params = new Array();
return readread(code,params);
}
}
function xplscript(code) {
readline(code.children[0]);
}

var parse = new DOMParser();
var xml = function(code) {return parse.parseFromString(code,"text/xml");};
function read(code) {
var xpl = xml(code);
  document.documentElement.innerHTML = xpl.getElementsByTagName("webpage")[0].innerHTML;
  var scripts = xpl.getElementsByTagName("javascript");
  for (var i = 0; i<scripts.length; i++) {
  eval(scripts[i].innerHTML);
    
  }
    var scripts = xpl.getElementsByTagName("xplscript");
  for (var i = 0; i<scripts.length; i++) {
  xplscript(scripts[i]);
    
  }
}
