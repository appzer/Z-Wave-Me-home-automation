function modulePostRender(A){function w(a,b,c){var f=null!=window.mozInnerScreenX;c=document.createElement("div");c.id="input-textarea-caret-position-mirror-div";document.body.appendChild(c);var e=c.style,h=window.getComputedStyle?window.getComputedStyle(a):a.currentStyle;e.whiteSpace="pre-wrap";e.wordWrap="break-word";e.position="absolute";e.visibility="hidden";"direction boxSizing width height overflowX overflowY borderTopWidth borderRightWidth borderBottomWidth borderLeftWidth borderStyle paddingTop paddingRight paddingBottom paddingLeft fontStyle fontVariant fontWeight fontStretch fontSize fontSizeAdjust lineHeight fontFamily textAlign textTransform textIndent textDecoration letterSpacing wordSpacing tabSize MozTabSize".split(" ").forEach(function(a){e[a]=
h[a]});f?a.scrollHeight>parseInt(h.height)&&(e.overflowY="scroll"):e.overflow="hidden";c.textContent=a.value.substring(0,b);f=document.createElement("span");f.textContent=a.value.substring(b)||".";c.appendChild(f);a={top:f.offsetTop+parseInt(h.borderTopWidth),left:f.offsetLeft+parseInt(h.borderLeftWidth),height:parseInt(h.lineHeight)};document.body.removeChild(c);return a}function x(a){return $("<div></div>").attr("id",a+"-modal").attr("role","menu-modal").addClass("dropdown-menu-modal").click(function(a){$(this).css({display:"none"});
a=$(this).attr("id");a=a.substr(0,a.length-6);$("#"+a).css({display:"none"})})}function y(a){return $("<ul></ul>").attr("id",a).attr("role","menu").addClass("dropdown-menu")}function m(a){$("body").append(x(a+"-menu")).append(y(a+"-menu"))}function q(a,b){$("#"+a+"-menu").css({position:"fixed",display:"block",left:b.left+"px",top:b.top+"px"});$("#"+a+"-menu-modal").css({display:"block"})}function r(a,b,c){return a.attr("id",b).attr("context",b+"-menu").attr("openon",c).bind(c,function(a){a.preventDefault();
var e=this.getBoundingClientRect();q(b,{left:"mouseover"===c?e.right:a.clientX,top:"mouseover"===c?e.top:a.clientY})})}function t(a,b,c,f){$("#"+a+"-menu").append($("<li></li>").append($("<a></a>").text(c).click(function(){n(this);f(this)})).attr("id",a+"-menu-item-"+b))}function n(a){var b=a+"-menu";"string"!==typeof a&&(b=$(a).closest('[role="menu"]').attr("id"));$("#"+b).css({display:"none"});$("#"+b+"-modal").css({display:"none"})}function d(a,b,c,f){$("#"+a+"-menu").append($("<li></li>").append($("<a></a>").text(b).click(function(){n(this);
k(c,f)})))}function p(a){$("#"+a+"-menu").append($("<li></li>").addClass("divider"))}function u(a,b){$(".highlight-editor-holder .toolbar").append(r($("<li></li>").append($("<a></a>").append($("<i></i>").addClass("fa "+b))),a,"click"));m(a)}function z(){var a=g.get(0),b=a.selectionStart,c=a.value.substr(0,b).lastIndexOf("\n")+1;a=a.value.substr(c,b-c);b="";for(c=0;" "===(ch=a.substr(c,1))||"\t"===ch;)c++,b+=ch;"{"===a.substr(a.length-1,1)&&(b+="  ");return b}function k(a){var b=g.get(0),c=b.selectionStart;
a=a.split("\n").map(function(a,b){if(0===b)var c="";else{var e=g.get(0).selectionStart;e=g.val().substr(0,e);for(var d="",f=1;" "===(c=e.substr(-f,1))||"\t"===c;)f++,d=c+d;c=d}return c+a}).join("\n");g.setRangeText?g.setRangeText(a):(g.focus(),document.execCommand("insertText",!1,a));a=function(a){for(var b=0;b<l.length;b++){var c=a.indexOf(l[b]);if(-1!==c)return c}return-1}(a);-1!==a&&(b.selectionStart=a+c,b.selectionEnd=b.selectionStart+1);g.blur();g.focus()}function v(a){g.val(a+g.val().trimEnd());
k("\n")}$("#alpaca2").addClass("editor allow-tabs").wrap($("<div></div>").addClass("scroller")).parent().append($("<pre></pre>").append($("<code></code>").addClass("syntax-highight javascript"))).wrap($("<div></div>").addClass("highlight-editor-holder")).parent().prepend($("<ul></ul>").addClass("toolbar"));u("easy-scripting-devices-events","fa-play");u("easy-scripting-devices-objects","fa-lightbulb-o");$(".highlight-editor-holder .toolbar").append(r($("<li></li>").append($("<a></a>").append($("<i></i>").addClass("fa fa-code"))),
"easy-scripting-syntax","click"));m("easy-scripting-syntax");$.ajax("/ZAutomation/api/v1/devices").done(function(a){a.data.devices.forEach(function(a){t("easy-scripting-devices-events",a.id,a.metrics.title,function(){v("### "+a.id+" // "+a.metrics.title+"\n")});t("easy-scripting-devices-objects",a.id,a.metrics.title,function(){k('vdev("'+a.id+'")')})})}).fail(function(){alert("no devices")});var l=["\u229c","\u2299","\u2026"],g=$("#alpaca2.editor");d("easy-scripting-syntax","if","if (\u229c) {\n  \u2026\n}");
d("easy-scripting-syntax","for loop","for (var i = 0; i < \u2299; i++) {\n  \u2026\n}");d("easy-scripting-syntax","while loop","while (\u229c) {\n  \u2026\n}");p("easy-scripting-syntax");d("easy-scripting-syntax","or","\u2299 || \u2299");d("easy-scripting-syntax","and","\u2299 && \u2299");p("easy-scripting-syntax");d("easy-scripting-syntax","HTTP request",'http.request({method: "GET", async: true, url: \u2299});');m("easy-scripting-device-methods");d("easy-scripting-device-methods","on","on()");d("easy-scripting-device-methods",
"off","off()");d("easy-scripting-device-methods","set","set(\u2299)");p("easy-scripting-device-methods");d("easy-scripting-device-methods","value","value()");d("easy-scripting-device-methods","= on",'value() === "on"');d("easy-scripting-device-methods","= off",'value() === "off"');d("easy-scripting-device-methods","= ?","value() === \u2299");$(g).click(function(){this.selectionStart===this.selectionEnd&&-1!==l.indexOf(this.value.substr(this.selectionStart,1))?this.selectionEnd=this.selectionStart+
1:this.selectionStart===this.selectionEnd&&-1!==l.indexOf(this.value.substr(this.selectionStart-1,1))&&(this.selectionEnd=this.selectionStart,this.selectionStart--)});$(g).keypress(function(a){if("."===a.key){if(this.value.substr(0,this.selectionStart).match(/.*vdev\("\w+"\)$/)){a=w(this,this.selectionEnd);var b=this.getBoundingClientRect();a.top+=b.top+10;a.left+=b.left+10;q("easy-scripting-device-methods",a)}}else if("Enter"===a.key){var c=z();setTimeout(function(){k(c)},0)}else n("easy-scripting-device-methods")});
document.querySelectorAll("pre code").forEach(function(a){hljs.highlightBlock(a)});v("")};