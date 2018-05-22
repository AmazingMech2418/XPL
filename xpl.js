var parse = new DOMParser();
var xml = function(code) {return parse.parseFromString(code,"text/xml");};
function read(code) {
var xpl = xml(code);
  document.documentElement.innerHTML = xpl.getElementsByTagName("html")[0].innerHTML;
  var scripts = xpl.getElementsByTagName("javascript");
  for (var i = 0; i<scripts.length; i++) {
  eval(scripts[i].innerHTML);
  }
}
