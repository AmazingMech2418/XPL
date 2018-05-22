var parse = new DOMParser();
var xml = function(code) {return parse.parseFromString(code,"text/xml");};
function read(code) {
var xpl = xml(code);
  document.documentElement.innerHTML = xpl.document.getElementsByTagName("html")[0];
}
