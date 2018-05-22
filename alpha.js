// EAGL Online

// Full Compiled EAGL Compiler
// EAGL Alpha
// Some functions are still in progress.
// If used for purposes other than EAGL programs, give credit
// Liscenced under the MIT liscence
// Author: amazinigmech2418/AmazingMech2418

var html = "";
var js = `var c = document.getElementsByTagName("canvas")[0];
var ctx = c.getContext("2d");
var canvasJS = {
rectangle: function(x,y,h,w){ctx.fillRect(x,y,h,w);},
text: {
stroke:function(font,text,x,y){ctx.font = font;
ctx.strokeText(text,x,y);},
fill: function(font,text,x,y){ctx.font = font;
ctx.fillText(text,x,y);}
},
gradientLinear: function(gx,gy,gx2,gy2,clr1,clr2,x,y,w,h){
var grd = ctx.createLinearGradient(gx,gy,gx2,gy2);
grd.addColorStop(0,clr1);
grd.addColorStop(1,clr2);
// Fill with gradient
ctx.fillStyle = grd;
ctx.fillRect(x,y,w,h);
},
gradientRadial: function(x1,y1,r1,x2,y2,r2,clr1,clr2,x,y,w,h){
var grd = ctx.createRadialGradient(x1,y1,r1,x2,y2,r2);
grd.addColorStop(0,clr1);
grd.addColorStop(1,clr2);
// Fill with gradient
ctx.fillStyle = grd;
ctx.fillRect(x,y,w,h);
},
image: function(source,x,y,w,h){
imaged=new Image();
imaged.src=source;
ctx.drawImage(imaged,x,y,w,h);
}
};`;
function compileCanvas() {
html = "<canvas></canvas><script>"+js+"</script>"+html;
}
function addjavascript(code) {
js+=code;
}
function runjavascript(code) {
eval(code);
}
function addTag(tag) {
html+=tag;
}

function cd(dir) {
process.chdir(dir);
}
function getDir() {
return process.cwd;
}




// from ObjectifyJS strings
var functionslol = {};
String.prototype.splitBrackets=function(open,close) {
var a = [""];
var brackets = 0;
for(var i=0; i<this.length; i++) {
  if (this[i]===open) {
  brackets += 1;
    if(brackets === 1){
    a.push("");
    } else {a[a.length-1] += this[i];}
  } else if (this[i]===close) {
  brackets -= 1;if(brackets!==0){a[a.length-1] += this[i];}
  } else {
  a[a.length-1] += this[i];
  }
}
  return a;
}
// From Failed Language EasyCode
function splitCode(code,splitter,nodata,keep) {
  var a = [""];
  var nodataB = 0;
  for (var i=0; i<code.length; i++) {
    
    if (nodata.indexOf(code[i])!==-1) {
      if (nodataB===0) {
          nodataB=1;
          } else {
          nodataB=0;
          }
      // if(keep) {a[a.length-1]+=code[i];}
    }
    if (code[i]===splitter && nodataB===0) {
        a.push("");
        } else {
          if((keep) || (code[i]!==nodata)){
        a[a.length-1]+=code[i];
          }
        }
  }
  return a;
}
function splitCodeTwo(code,splitter,nodata,nodataend,keep) {
  var a = [""];
  var nodataB = 0;
  for (var i=0; i<code.length; i++) {
    
    if (nodata.indexOf(code[i])!==-1) {
      nodataB++;
      // if(keep) {a[a.length-1]+=code[i];}
    }
    if (nodataend.indexOf(code[i])!==-1) {
      nodataB--;
      // if(keep) {a[a.length-1]+=code[i];}
    }
    if (code[i]===splitter && nodataB===0) {
        a.push("");
        } else {
          if((keep) || (code[i]!==nodata)){
        a[a.length-1]+=code[i];
          }
        }
  }
  return a;
}
function compileLine(cmd) {
  var params = [];
  var cmdlol = "";
//params = splitCode(cmd,"|","$",true);
  params = splitCodeTwo(cmd,"|","(",")",true);
cmdlol = params[0];
   // params = splitCode(params[1],' ','"',false);
params = filter(params);
  return run(cmdlol,params);

}
function compile (code) {
var c = code.split(";");

  for (var i=0; i<c.length; i++) {
    console.log(compileLine(c[i]));
}
}
function filter(params) {
  params.shift();
    for (var z=0; z<params.length; z++) {
    if (params[z].indexOf("(")!==-1) {
    params[z] = compileLine(params[z].slice(1,params[z].length-1));
    }
    }
  return params;
}
function run(cmdlol,params) {
  var lol = functionslol[cmdlol];
return lol(params);
  
}

function module(name,content) {
functionslol[name]=content;
}
// module("add html",function(args){addTag(args[0]);});
// module("add javascript",function(args){addjavascript(args[0]);});
module("run javascript",function(args){return runjavascript(args[0]);});
// module("compile canvas for graphics interface",function(args){compileCanvas();});
// module("run batch or bash",function(args){exec(args[0]);});
// module("open a file",function(args){open(args[0]);});
// module("change directory",function(args){cd(args[0]);});
// module("get directory",function(args){return getDir()();});
// module("write to a file",function(args){write(args[0],args[1]);});
// module("read a file",function(args){return read(args[0]);});
// module("start a server",function(args){server(args[0],args[1]);});
// module("start a server and open it",function(args){server(args[0],args[1]);open("http://localhost:"+args[1]);});
module("JSON parse",function(args){return JSON.parse(args[0]);});
module("search for text in string",function(args){return args[0].indexOf(args[1]);});
module("search for text in string version 2",function(args){return args[0].search(args[1]);});
module("change title",function(args){document.title = args[0];});
module("change content of an element",function(args){document.querySelectorAll(args[1])[args[2]].innerHTML = args[0];});
function variable(name,content) {
  if (!console[name]) {
console[name]=content;
  }
}
module("make a variable",function(args){variable(args[0],args[1]);});
module("get variable",function(args){return console[args[0]];});

// XPL language code
var xplcodes = {
popup: function(params,htm) {alert(params[0]);},
ask: function(params,htm) {return prompt(params[0]);},
value: function(params,htm) {return htm;}
};
function readread(code,params) {
return xplcodes[code.tagName](params,code.innerHTML);
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
      var scripts = xpl.getElementsByTagName("EAGL");
  for (var i = 0; i<scripts.length; i++) {
  compile(scripts[i].innerHTML);
    
  }
}
