!function(t,e){for(var s in e)t[s]=e[s]}(window,function(t){var e={};function s(i){if(e[i])return e[i].exports;var r=e[i]={i:i,l:!1,exports:{}};return t[i].call(r.exports,r,r.exports,s),r.l=!0,r.exports}return s.m=t,s.c=e,s.d=function(t,e,i){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},s.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(s.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)s.d(i,r,function(e){return t[e]}.bind(null,r));return i},s.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="",s(s.s=3)}([function(t,e,s){var i,r,n;r=[],void 0===(n="function"==typeof(i=function(){return function t(e,s,i){var r,n,o=window,a="application/octet-stream",l=i||a,h=e,c=!s&&!i&&h,d=document.createElement("a"),u=function(t){return String(t)},p=o.Blob||o.MozBlob||o.WebKitBlob||u,f=s||"download";if(p=p.call?p.bind(o):Blob,"true"===String(this)&&(l=(h=[h,l])[0],h=h[1]),c&&c.length<2048&&(f=c.split("/").pop().split("?")[0],d.href=c,-1!==d.href.indexOf(c))){var b=new XMLHttpRequest;return b.open("GET",c,!0),b.responseType="blob",b.onload=function(e){t(e.target.response,f,a)},setTimeout(function(){b.send()},0),b}if(/^data:([\w+-]+\/[\w+.-]+)?[,;]/.test(h)){if(!(h.length>2096103.424&&p!==u))return navigator.msSaveBlob?navigator.msSaveBlob(_(h),f):x(h);h=_(h),l=h.type||a}else if(/([\x80-\xff])/.test(h)){for(var g=0,m=new Uint8Array(h.length),v=m.length;g<v;++g)m[g]=h.charCodeAt(g);h=new p([m],{type:l})}function _(t){for(var e=t.split(/[:;,]/),s=e[1],i="base64"==e[2]?atob:decodeURIComponent,r=i(e.pop()),n=r.length,o=0,a=new Uint8Array(n);o<n;++o)a[o]=r.charCodeAt(o);return new p([a],{type:s})}function x(t,e){if("download"in d)return d.href=t,d.setAttribute("download",f),d.className="download-js-link",d.innerHTML="downloading...",d.style.display="none",document.body.appendChild(d),setTimeout(function(){d.click(),document.body.removeChild(d),!0===e&&setTimeout(function(){o.URL.revokeObjectURL(d.href)},250)},66),!0;if(/(Version)\/(\d+)\.(\d+)(?:\.(\d+))?.*Safari\//.test(navigator.userAgent))return/^data:/.test(t)&&(t="data:"+t.replace(/^data:([\w\/\-\+]+)/,a)),window.open(t)||confirm("Displaying New Document\n\nUse Save As... to download, then click back to return to this page.")&&(location.href=t),!0;var s=document.createElement("iframe");document.body.appendChild(s),!e&&/^data:/.test(t)&&(t="data:"+t.replace(/^data:([\w\/\-\+]+)/,a)),s.src=t,setTimeout(function(){document.body.removeChild(s)},333)}if(r=h instanceof p?h:new p([h],{type:l}),navigator.msSaveBlob)return navigator.msSaveBlob(r,f);if(o.URL)x(o.URL.createObjectURL(r),!0);else{if("string"==typeof r||r.constructor===u)try{return x("data:"+l+";base64,"+o.btoa(r))}catch(t){return x("data:"+l+","+encodeURIComponent(r))}(n=new FileReader).onload=function(t){x(this.result)},n.readAsDataURL(r)}return!0}})?i.apply(e,r):i)||(t.exports=n)},function(t,e,s){var i;!function(){"use strict";var r=function(){var t,e,s=[],i=-1,r=0,n=!1;return e=function(t,e){return t&&"function"==typeof t[e]?(n=!0,t[e](),n=!1,this):this},{add:function(e){return n?this:(s.splice(i+1,s.length-i),s.push(e),r&&s.length>r&&function(t,e,s){t.splice(e,!s||1+s-e+(!(s<0^e>=0)&&(s<0||-1)*t.length)),t.length}(s,0,-(r+1)),i=s.length-1,t&&t(),this)},setCallback:function(e){t=e},undo:function(){var r=s[i];return r?(e(r,"undo"),i-=1,t&&t(),this):this},redo:function(){var r=s[i+1];return r?(e(r,"redo"),i+=1,t&&t(),this):this},clear:function(){var e=s.length;s=[],i=-1,t&&e>0&&t()},hasUndo:function(){return-1!==i},hasRedo:function(){return i<s.length-1},getCommands:function(){return s},getIndex:function(){return i},setLimit:function(t){r=t}}};void 0===(i=function(){return r}.call(e,s,e,t))||(t.exports=i)}()},function(t,e,s){!function(){function e(t,e){var s=i("div",null,"qs_label",e);return s.innerHTML=t,s}function s(t,e,s,r){var n=i("input",e,s,r);return n.type=t,n}function i(t,e,s,i){var r=document.createElement(t);if(r)return r.id=e,s&&(r.className=s),i&&i.appendChild(r),r}function r(){return-1!=navigator.userAgent.indexOf("rv:11")||-1!=navigator.userAgent.indexOf("MSIE")}var n=!1,o=".qs_main{background-color:#dddddd;text-align:left;position:absolute;width:200px;font:12px sans-serif;box-shadow:5px 5px 8px rgba(0,0,0,0.35);user-select:none;-webkit-user-select:none;color:#000000;border:none}.qs_content{background-color:#cccccc;overflow-y:auto}.qs_title_bar{background-color:#eeeeee;user-select:none;-webkit-user-select:none;cursor:pointer;padding:5px;font-weight:bold;border:none;color:#000000}.qs_container{margin:5px;padding:5px;background-color:#eeeeee;border:none;position:relative}.qs_container_selected{border:none;background-color:#ffffff}.qs_range{-webkit-appearance:none;-moz-appearance:none;width:100%;height:17px;padding:0;margin:0;background-color:transparent;border:none;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}.qs_range:focus{outline:none;border:none}.qs_range::-webkit-slider-runnable-track{width:100%;height:15px;cursor:pointer;background:#cccccc;-webkit-border-radius:0;-moz-border-radius:0;border-radius:0}.qs_range:focus::-webkit-slider-runnable-track{background:#cccccc}.qs_range::-webkit-slider-thumb{-webkit-appearance:none;height:15px;width:15px;-webkit-border-radius:0;-moz-border-radius:0;border-radius:0;background:#999999;cursor:pointer;margin-top:0}.qs_range::-moz-range-track{width:100%;height:15px;cursor:pointer;background:#cccccc;-webkit-border-radius:0;-moz-border-radius:0;border-radius:0}.qs_range::-moz-range-thumb{height:15px;width:15px;border:none;-webkit-border-radius:0;-moz-border-radius:0;border-radius:0;background:#999999;cursor:pointer}.qs_range::-ms-track{width:100%;height:15px;cursor:pointer;visibility:hidden;background:transparent}.qs_range::-ms-thumb{height:15px;width:15px;-webkit-border-radius:0;-moz-border-radius:0;border-radius:0;background:#999999;cursor:pointer;border:none}.qs_range::-ms-fill-lower{background:#cccccc;-webkit-border-radius:0;-moz-border-radius:0;border-radius:0}.qs_range:focus::-ms-fill-lower{background:#cccccc}.qs_range::-ms-fill-upper{background:#cccccc;-webkit-border-radius:0;-moz-border-radius:0;border-radius:0}.qs_range:focus::-ms-fill-upper{background:#cccccc}.qs_button{background-color:#f6f6f6;color:#000000;height:30px;border:1px solid #aaaaaa;font:12px sans-serif}.qs_button:active{background-color:#ffffff;border:1px solid #aaaaaa}.qs_button:focus{border:1px solid #aaaaaa;outline:none}.qs_checkbox{cursor:pointer}.qs_checkbox input{position:absolute;left:-99999px}.qs_checkbox span{height:16px;width:100%;display:block;text-indent:20px;background:url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAALklEQVQ4T2OcOXPmfwYKACPIgLS0NLKMmDVrFsOoAaNhMJoOGBioFwZkZUWoJgApdFaxjUM1YwAAAABJRU5ErkJggg==') no-repeat}.qs_checkbox input:checked+span{background:url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAvElEQVQ4T63Tyw2EIBAA0OFKBxBL40wDRovAUACcKc1IB1zZDAkG18GYZTmSmafzgTnnMgwchoDWGlJKheGcP3JtnPceCqCUAmttSZznuYtgchsXQrgC+77DNE0kUpPbmBOoJaBOIVQylnqWgAAeKhDve/AN+EaklJBzhhgjWRoJVGTbNjiOowAIret6a+4jYIwpX8aDwLIs74C2D0IIYIyVP6Gm898m9kbVm85ljHUTf16k4VUefkwDrxk+zoUEwCt0GbUAAAAASUVORK5CYII=') no-repeat}.qs_checkbox_label{position:absolute;top:7px;left:30px}.qs_label{margin-bottom:3px;user-select:none;-webkit-user-select:none;cursor:default;font:12px sans-serif}.qs_text_input{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;width:100%;padding:0 0 0 5px;height:24px;border:1px inset #ffffff;background-color:#ffffff;color:#000000;font-size:12px}.qs_text_input:focus{outline:none;background:#ffffff;border:1px inset #ffffff}.qs_select{background:url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAp0lEQVRIS+2SsQ3FIAwF7RVYhA5mgQFhFuhYhJKWL0eKxI8SGylKZ0p4+OBsHGNM+HChAiS7qkgyBKrovaLeOxhjbgtxZ+cFtgelFMg5QwgBvPd/EO5sDbKAlBLUWo/8CjmL075zDmKMj6rEKbpCqBL9aqc4ZUQAhVbInBMQUXz5Vg/WfxOktXZsWWtZLds9uIqlqaH1NFV3jdhSJA47E1CAaE8ViYp+wGiWMZ/T+cgAAAAASUVORK5CYII=') no-repeat right #f6f6f6;-webkit-appearance:none;-moz-appearance:none;appearance:none;color:#000000;width:100%;height:24px;border:1px solid #aaaaaa;-webkit-border-radius:0;-moz-border-radius:0;border-radius:0;padding:0 5px;-moz-outline:none;font-size:14px}.qs_select option{font-size:14px}.qs_select::-ms-expand{display:none}.qs_select:focus{outline:none}.qs_number{height:24px}.qs_image{width:100%}.qs_progress{width:100%;height:15px;background-color:#cccccc;border:none;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}.qs_progress_value{height:100%;background-color:#999999}.qs_textarea{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;resize:vertical;width:100%;padding:3px 5px;border:1px inset #ffffff;background-color:#ffffff;color:#000000;font-size:12px}.qs_textarea:focus{outline:none;background:#ffffff;border:1px inset #ffffff}.qs_color{position:absolute;left:-999999px}.qs_color_label{width:100%;height:20px;display:block;border:1px solid #aaaaaa;cursor:pointer;padding:0 0 0 5px;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}.qs_file_chooser{position:absolute;left:-999999px}.qs_file_chooser_label{background-color:#f6f6f6;color:#000000;height:30px;border:1px solid #aaaaaa;font:12px sans-serif;width:100%;display:block;cursor:pointer;padding:7px;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}",a={_version:"2.1",_topZ:1,_panel:null,_titleBar:null,_content:null,_startX:0,_startY:0,_hidden:!1,_collapsed:!1,_controls:null,_keyCode:-1,_draggable:!0,_collapsible:!0,_globalChangeHandler:null,useExtStyleSheet:function(){n=!0},create:function(t,e,s,i){var r=Object.create(this);return r._init(t,e,s,i),r},destroy:function(){for(var t in this._panel.parentElement&&this._panel.parentElement.removeChild(this._panel),this)this[t]=null},_init:function(t,e,s,i){n||function(){var t=document.createElement("style");t.innerText=o,document.head.appendChild(t),n=!0}(),this._bindHandlers(),this._createPanel(t,e,i),this._createTitleBar(s||"QuickSettings"),this._createContent()},_bindHandlers:function(){this._startDrag=this._startDrag.bind(this),this._drag=this._drag.bind(this),this._endDrag=this._endDrag.bind(this),this._doubleClickTitle=this._doubleClickTitle.bind(this),this._onKeyUp=this._onKeyUp.bind(this)},getValuesAsJSON:function(t){var e={};for(var s in this._controls)this._controls[s].getValue&&(e[s]=this._controls[s].getValue());return t&&(e=JSON.stringify(e)),e},setValuesFromJSON:function(t){for(var e in"string"==typeof t&&(t=JSON.parse(t)),t)this._controls[e].setValue&&this._controls[e].setValue(t[e]);return this},saveInLocalStorage:function(t){return this._localStorageName=t,this._readFromLocalStorage(t),this},clearLocalStorage:function(t){return localStorage.removeItem(t),this},_saveInLocalStorage:function(t){localStorage.setItem(t,this.getValuesAsJSON(!0))},_readFromLocalStorage:function(t){var e=localStorage.getItem(t);e&&this.setValuesFromJSON(e)},_createPanel:function(t,e,s){this._panel=i("div",null,"qs_main",s||document.body),this._panel.style.zIndex=++a._topZ,this.setPosition(t||0,e||0),this._controls={}},_createTitleBar:function(t){this._titleBar=i("div",null,"qs_title_bar",this._panel),this._titleBar.textContent=t,this._titleBar.addEventListener("mousedown",this._startDrag),this._titleBar.addEventListener("dblclick",this._doubleClickTitle)},_createContent:function(){this._content=i("div",null,"qs_content",this._panel)},_createContainer:function(){var t=i("div",null,"qs_container");return t.addEventListener("focus",function(){this.className+=" qs_container_selected"},!0),t.addEventListener("blur",function(){var t=this.className.indexOf(" qs_container_selected");t>-1&&(this.className=this.className.substr(0,t))},!0),this._content.appendChild(t),t},setPosition:function(t,e){return this._panel.style.left=t+"px",this._panel.style.top=Math.max(e,0)+"px",this},setSize:function(t,e){return this._panel.style.width=t+"px",this._content.style.width=t+"px",this._content.style.height=e-this._titleBar.offsetHeight+"px",this},setWidth:function(t){return this._panel.style.width=t+"px",this._content.style.width=t+"px",this},setHeight:function(t){return this._content.style.height=t-this._titleBar.offsetHeight+"px",this},setDraggable:function(t){return this._draggable=t,this._draggable||this._collapsible?this._titleBar.style.cursor="pointer":this._titleBar.style.cursor="default",this},_startDrag:function(t){this._draggable&&(this._panel.style.zIndex=++a._topZ,document.addEventListener("mousemove",this._drag),document.addEventListener("mouseup",this._endDrag),this._startX=t.clientX,this._startY=t.clientY),t.preventDefault()},_drag:function(t){var e=parseInt(this._panel.style.left),s=parseInt(this._panel.style.top),i=t.clientX,r=t.clientY;this.setPosition(e+i-this._startX,s+r-this._startY),this._startX=i,this._startY=r,t.preventDefault()},_endDrag:function(t){document.removeEventListener("mousemove",this._drag),document.removeEventListener("mouseup",this._endDrag),t.preventDefault()},setGlobalChangeHandler:function(t){return this._globalChangeHandler=t,this},_callGCH:function(){this._localStorageName&&this._saveInLocalStorage(this._localStorageName),this._globalChangeHandler&&this._globalChangeHandler()},hide:function(){return this._panel.style.visibility="hidden",this._hidden=!0,this},show:function(){return this._panel.style.visibility="visible",this._panel.style.zIndex=++a._topZ,this._hidden=!1,this},toggleVisibility:function(){return this._hidden?this.show():this.hide(),this},setCollapsible:function(t){return this._collapsible=t,this._draggable||this._collapsible?this._titleBar.style.cursor="pointer":this._titleBar.style.cursor="default",this},collapse:function(){return this._panel.removeChild(this._content),this._collapsed=!0,this},expand:function(){return this._panel.appendChild(this._content),this._collapsed=!1,this},toggleCollapsed:function(){return this._collapsed?this.expand():this.collapse(),this},setKey:function(t){return this._keyCode=t.toUpperCase().charCodeAt(0),document.body.addEventListener("keyup",this.onKeyUp),this},_onKeyUp:function(t){t.keyCode===this._keyCode&&this.toggleVisibility()},_doubleClickTitle:function(){this._collapsible&&this.toggleCollapsed()},removeControl:function(t){if(this._controls[t])var e=this._controls[t].container;return e&&e.parentElement&&e.parentElement.removeChild(e),this._controls[t]=null,this},enableControl:function(t){return this._controls[t]&&(this._controls[t].control.disabled=!1),this},disableControl:function(t){return this._controls[t]&&(this._controls[t].control.disabled=!0),this},hideControl:function(t){return this._controls[t]&&(this._controls[t].container.style.display="none"),this},showControl:function(t){return this._controls[t]&&(this._controls[t].container.style.display="block"),this},overrideStyle:function(t,e,s){return this._controls[t]&&(this._controls[t].control.style[e]=s),this},hideTitle:function(t){var e=this._controls[t].label;return e&&(e.style.display="none"),this},showTitle:function(t){var e=this._controls[t].label;return e&&(e.style.display="block"),this},hideAllTitles:function(){for(var t in this._controls){var e=this._controls[t].label;e&&(e.style.display="none")}return this},showAllTitles:function(){for(var t in this._controls){var e=this._controls[t].label;e&&(e.style.display="block")}return this},getValue:function(t){return this._controls[t].getValue()},setValue:function(t,e){return this._controls[t].setValue(e),this._callGCH(),this},addBoolean:function(t,e,r){var n=this._createContainer(),o=i("label",null,"qs_checkbox_label",n);o.textContent=t,o.setAttribute("for",t);var a=i("label",null,"qs_checkbox",n);a.setAttribute("for",t);var l=s("checkbox",t,null,a);l.checked=e,i("span",null,null,a),this._controls[t]={container:n,control:l,getValue:function(){return this.control.checked},setValue:function(t){this.control.checked=t,r&&r(t)}};var h=this;return l.addEventListener("change",function(){r&&r(l.checked),h._callGCH()}),this},bindBoolean:function(t,e,s){return this.addBoolean(t,e,function(e){s[t]=e})},addButton:function(t,e){var i=this._createContainer(),r=s("button",t,"qs_button",i);r.value=t,this._controls[t]={container:i,control:r};var n=this;return r.addEventListener("click",function(){e&&e(r),n._callGCH()}),this},addColor:function(t,n,o){if(function(){var t=navigator.userAgent.toLowerCase();return!(t.indexOf("chrome")>-1||t.indexOf("firefox")>-1||t.indexOf("epiphany")>-1)&&t.indexOf("safari/")>-1}()||navigator.userAgent.toLowerCase().indexOf("edge")>-1||r())return this.addText(t,n,o);var a=this._createContainer(),l=e("<b>"+t+":</b> "+n,a),h=s("color",t,"qs_color",a);h.value=n||"#ff0000";var c=i("label",null,"qs_color_label",a);c.setAttribute("for",t),c.style.backgroundColor=h.value,this._controls[t]={container:a,control:h,colorLabel:c,label:l,title:t,getValue:function(){return this.control.value},setValue:function(t){this.control.value=t,this.colorLabel.style.backgroundColor=h.value,this.label.innerHTML="<b>"+this.title+":</b> "+this.control.value,o&&o(t)}};var d=this;return h.addEventListener("input",function(){l.innerHTML="<b>"+t+":</b> "+h.value,c.style.backgroundColor=h.value,o&&o(h.value),d._callGCH()}),this},bindColor:function(t,e,s){return this.addColor(t,e,function(e){s[t]=e})},addDate:function(t,i,n){var o;if(i instanceof Date){var a=i.getFullYear(),l=i.getMonth()+1;l<10&&(l="0"+l),o=a+"-"+l+"-"+i.getDate()}else o=i;if(r())return this.addText(t,o,n);var h=this._createContainer(),c=e("<b>"+t+"</b>",h),d=s("date",t,"qs_text_input",h);d.value=o||"",this._controls[t]={container:h,control:d,label:c,getValue:function(){return this.control.value},setValue:function(t){var e;if(t instanceof Date){var s=t.getFullYear(),i=t.getMonth()+1;i<10&&(i="0"+i);var r=t.getDate();r<10&&(r="0"+r),e=s+"-"+i+"-"+r}else e=t;this.control.value=e||"",n&&n(e)}};var u=this;return d.addEventListener("input",function(){n&&n(d.value),u._callGCH()}),this},bindDate:function(t,e,s){return this.addDate(t,e,function(e){s[t]=e})},addDropDown:function(t,s,r){for(var n=this._createContainer(),o=e("<b>"+t+"</b>",n),a=i("select",null,"qs_select",n),l=0;l<s.length;l++){var h=i("option");h.label=s[l],h.innerText=s[l],a.add(h)}var c=this;return a.addEventListener("change",function(){var t=a.selectedIndex,e=a.options;r&&r({index:t,value:e[t].label}),c._callGCH()}),this._controls[t]={container:n,control:a,label:o,getValue:function(){var t=this.control.selectedIndex;return{index:t,value:this.control.options[t].label}},setValue:function(t){var e;e=null!=t.index?t.index:t;var s=this.control.options;this.control.selectedIndex=e,r&&r({index:e,value:s[e].label})}},this},bindDropDown:function(t,e,s){return this.addDropDown(t,e,function(e){s[t]=e.value})},addElement:function(t,s){var i=this._createContainer(),r=e("<b>"+t+"</b>",i);return i.appendChild(s),this._controls[t]={container:i,label:r},this},addFileChooser:function(t,r,n,o){var a=this._createContainer(),l=e("<b>"+t+"</b>",a),h=s("file",t,"qs_file_chooser",a);n&&(h.accept=n);var c=i("label",null,"qs_file_chooser_label",a);c.setAttribute("for",t),c.textContent=r||"Choose a file...",this._controls[t]={container:a,control:h,label:l,getValue:function(){return this.control.files[0]}};var d=this;return h.addEventListener("change",function(){h.files&&h.files.length&&(c.textContent=h.files[0].name,o&&o(h.files[0]),d._callGCH())}),this},addHTML:function(t,s){var r=this._createContainer(),n=e("<b>"+t+":</b> ",r),o=i("div",null,null,r);return o.innerHTML=s,this._controls[t]={label:n,control:o,getValue:function(){return this.control.innerHTML},setValue:function(t){this.control.innerHTML=t}},this},addImage:function(t,s){var r=this._createContainer(),n=e("<b>"+t+"</b>",r);return img=i("img",null,"qs_image",r),img.src=s,this._controls[t]={container:r,control:img,label:n,getValue:function(){return this.control.src},setValue:function(t){this.control.src=t}},this},addRange:function(t,e,s,i,r,n){return this._addNumber("range",t,e,s,i,r,n)},addNumber:function(t,e,s,i,r,n){return this._addNumber("number",t,e,s,i,r,n)},_addNumber:function(t,i,n,o,a,l,h){var c=this._createContainer(),d=e("",c),u=s(t,i,"range"===t?"qs_range":"qs_text_input qs_number",c);u.min=n||0,u.max=o||100,u.step=l||1,u.value=a||0,d.innerHTML="<b>"+i+":</b> "+u.value,this._controls[i]={container:c,control:u,label:d,title:i,callback:h,getValue:function(){return parseFloat(this.control.value)},setValue:function(t){this.control.value=t,this.label.innerHTML="<b>"+this.title+":</b> "+this.control.value,h&&h(parseFloat(t))}};var p="input";"range"===t&&r()&&(p="change");var f=this;return u.addEventListener(p,function(){d.innerHTML="<b>"+i+":</b> "+u.value,h&&h(parseFloat(u.value)),f._callGCH()}),this},bindRange:function(t,e,s,i,r,n){return this.addRange(t,e,s,i,r,function(e){n[t]=e})},bindNumber:function(t,e,s,i,r,n){return this.addNumber(t,e,s,i,r,function(e){n[t]=e})},setRangeParameters:function(t,e,s,i){return this.setNumberParameters(t,e,s,i)},setNumberParameters:function(t,e,s,i){var r=this._controls[t],n=r.control.value;return r.control.min=e,r.control.max=s,r.control.step=i,r.control.value!==n&&r.callback&&r.callback(r.control.value),this},addPassword:function(t,e,s){return this._addText("password",t,e,s)},bindPassword:function(t,e,s){return this.addPassword(t,e,function(e){s[t]=e})},addProgressBar:function(t,s,r,n){var o=this._createContainer(),a=e("",o),l=i("div",null,"qs_progress",o),h=i("div",null,"qs_progress_value",l);return h.style.width=r/s*100+"%",a.innerHTML="numbers"===n?"<b>"+t+":</b> "+r+" / "+s:"percent"===n?"<b>"+t+":</b> "+Math.round(r/s*100)+"%":"<b>"+t+"</b>",this._controls[t]={container:o,control:l,valueDiv:h,valueDisplay:n,label:a,value:r,max:s,title:t,getValue:function(){return this.value},setValue:function(t){this.value=Math.max(0,Math.min(t,this.max)),this.valueDiv.style.width=this.value/this.max*100+"%","numbers"===this.valueDisplay?this.label.innerHTML="<b>"+this.title+":</b> "+this.value+" / "+this.max:"percent"===this.valueDisplay&&(this.label.innerHTML="<b>"+this.title+":</b> "+Math.round(this.value/this.max*100)+"%")}},this},setProgressMax:function(t,e){var s=this._controls[t];return s.max=e,s.value=Math.min(s.value,s.max),s.valueDiv.style.width=s.value/s.max*100+"%","numbers"===s.valueDisplay?s.label.innerHTML="<b>"+s.title+":</b> "+s.value+" / "+s.max:"percent"===s.valueDisplay?s.label.innerHTML="<b>"+s.title+":</b> "+Math.round(s.value/s.max*100)+"%":s.label.innerHTML="<b>"+s.title+"</b>",this},addText:function(t,e,s){return this._addText("text",t,e,s)},_addText:function(t,r,n,o){var a,l=this._createContainer(),h=e("<b>"+r+"</b>",l);"textarea"===t?(a=i("textarea",r,"qs_textarea",l)).rows=5:a=s(t,r,"qs_text_input",l),a.value=n||"",this._controls[r]={container:l,control:a,label:h,getValue:function(){return this.control.value},setValue:function(t){this.control.value=t,o&&o(t)}};var c=this;return a.addEventListener("input",function(){o&&o(a.value),c._callGCH()}),this},bindText:function(t,e,s){return this.addText(t,e,function(e){s[t]=e})},addTextArea:function(t,e,s){return this._addText("textarea",t,e,s)},setTextAreaRows:function(t,e){return this._controls[t].control.rows=e,this},bindTextArea:function(t,e,s){return this.addTextArea(t,e,function(e){s[t]=e})},addTime:function(t,i,n){var o;if(i instanceof Date){var a=i.getHours();a<10&&(a="0"+a);var l=i.getMinutes();l<10&&(l="0"+l);var h=i.getSeconds();h<10&&(h="0"+h),o=a+":"+l+":"+h}else o=i;if(r())return this.addText(t,o,n);var c=this._createContainer(),d=e("<b>"+t+"</b>",c),u=s("time",t,"qs_text_input",c);u.value=o||"",this._controls[t]={container:c,control:u,label:d,getValue:function(){return this.control.value},setValue:function(t){var e;if(t instanceof Date){var s=t.getHours();s<10&&(s="0"+s);var i=t.getMinutes();i<10&&(i="0"+i);var r=t.getSeconds();r<10&&(r="0"+r),e=s+":"+i+":"+r}else e=t;this.control.value=e||"",n&&n(e)}};var p=this;return u.addEventListener("input",function(){n&&n(u.value),p._callGCH()}),this},bindTime:function(t,e,s){return this.addTime(t,e,function(e){s[t]=e})}};t.exports=a}()},function(t,e,s){"use strict";function i(t,e,s,i=!0){if(e>s){let t=e;e=s,s=t}return i?t>=e&&t<=s:t>e&&t<s}function r(t,e){return parseFloat(t.toFixed(e))}s.r(e);class n{constructor(t,e){this.set(t,e)}set(t,e){this.x=t,this.y=e}static fromObject(t){return new n(t.x,t.y)}static dist(t,e){return Math.sqrt(Math.pow(t.x-e.x,2)+Math.pow(t.y-e.y,2))}static swap(t,e,s){let i=t[s];t[s]=e[s],e[s]=i}isEmpty(){return!this.x&&!this.y}oneIsEmpty(){return!this.x||!this.y}sum(t){return new n(this.x+t.x,this.y+t.y)}diff(t){return new n(this.x-t.x,this.y-t.y)}invert(){return new n(-this.x,-this.y)}toString(t,e){return r(this[e],t)}toHtml(t){return this.toString(t,"x")+","+this.toString(t,"y")}}class o{constructor(t,e=[],s,i=0){this.setShape(t),this.setCoords(e),this.setHref(s),this.setId(i)}static fromObject(t){switch(t.shape){case"rect":return new a(t.coords.map(n.fromObject),t.href,t.id);case"circle":return new l(t.coords.map(n.fromObject),t.radius,t.href,t.id);case"poly":return new h(t.coords.map(n.fromObject),t.href,t.id);case"default":return new c(t.href);default:throw"Not an area"}}setShape(t){this.shape=t}addCoord(t,e){return this.coords.push(new n(t,e))}setCoords(t){this.coords=t}getCoords(t="default"){switch(t){case"default":default:return this.coords}}empty(){return 0==this.coords.length}copyCoords(){let t=[];return this.coords.forEach((e,s)=>{t[s]=new n(e.x,e.y)}),t}updateLastCoord(t,e){this.coords[this.coords.length-1]=new n(t,e)}move(t){let e=this.firstCoord();void 0!=e&&(this.coords[0]=e.sum(t))}isDrawable(){return this.coords.length>=1}isValidShape(){return this.isDrawable()}setHref(t){this.href=t}setId(t){this.id=t}firstCoord(){return this.coords[0]}distToFirstCoord(t,e){let s=new n(t,e);return n.dist(s,this.firstCoord())}htmlCoords(t){return this.getCoords("html").map(e=>e.toHtml(t)).join(",")}toHtml(){let t=this.htmlCoords(0);return""!=t&&(t='coords="'+t+'" '),'<area shape="'+this.shape+'" '+t+'href="'+this.href+'" alt="'+this.href+'"/>'}svgArea(){}toSvg(){return'<a xlink:href="'+this.href+'">'+this.svgArea()+"</a>"}}class a extends o{constructor(t=[],e,s){super("rect",t,e,s)}setCoords(t){super.setCoords(t.slice(0,2))}updateLastCoord(t,e){if(2==this.coords.length){let s=this.firstCoord();this.coords[1]=new n(t-s.x,e-s.y)}}isDrawable(){return 2==this.coords.length&&!this.coords[1].oneIsEmpty()}isHover(t,e){let s=this.firstCoord(),r=this.coords[1].sum(s);return i(t,s.x,r.x)&&i(e,s.y,r.y)}display(t){t.rect(this.coords[0].x,this.coords[0].y,this.coords[1].x,this.coords[1].y)}getCoords(t="default"){switch(t){case"html":let e=this.copyCoords();return e[1]=e[1].sum(e[0]),e[0].x>e[1].x&&n.swap(e[0],e[1],"x"),e[0].y>e[1].y&&n.swap(e[0],e[1],"y"),e;default:return super.getCoords(t)}}svgArea(){return'<rect x="'+this.coords[0].toString(0,"x")+'" y="'+this.coords[0].toString(0,"y")+'" width="'+this.coords[1].toString(0,"x")+'" height="'+this.coords[1].toString(0,"y")+'" />'}}class l extends o{constructor(t=[],e=0,s,i){super("circle",t,s,i),this.radius=e}getCenter(){return this.firstCoord()}isValidShape(){return super.isValidShape()&&this.radius>0}isHover(t,e){let s=this.getCenter();return n.dist(new n(t,e),s)<this.radius}updateLastCoord(t,e){let s=this.getCenter();this.radius=n.dist(s,new n(t,e))}display(t){t.ellipse(this.getCenter().x,this.getCenter().y,2*this.radius)}htmlCoords(t){return this.getCenter().toHtml(t)+","+r(this.radius,t)}svgArea(){return'<circle cx="'+this.coords[0].toString(0,"x")+'" cy="'+this.coords[0].toString(0,"y")+'" r="'+r(this.radius,0)+'" />'}}class h extends o{constructor(t=[],e,s){super("poly",t,e,s)}isValidShape(){return this.coords.length>=4}isHover(t,e){let s,i=this.coords.map(t=>t.x),r=this.coords.map(t=>t.y),n=i.length-1,o=!1,a=i,l=r;for(s=0;s<i.length;s++)(l[s]<e&&l[n]>=e||l[n]<e&&l[s]>=e)&&(a[s]<=t||a[n]<=t)&&(o^=a[s]+(e-l[s])/(l[n]-l[s])*(a[n]-a[s])<t),n=s;return o}isClosable(t,e,s=5){return this.isValidShape()&&this.distToFirstCoord(t,e)<s}close(){this.coords[this.coords.length-1]=this.firstCoord()}move(t){this.coords=this.coords.map(e=>e.sum(t))}display(t){t.beginShape(),this.coords.forEach(e=>t.vertex(e.x,e.y)),t.endShape()}svgArea(){return'<polygon points="'+this.coords.map(t=>t.toString(0,"x")+","+t.toString(0,"y")).join(" ")+'" />'}}class c extends o{constructor(t){super("default",[],t),this.isDefault=!0}isDrawable(){return!0}isHover(){return!0}display(t){t.rect(0,0,t.getMap().width-1,t.getMap().height-1)}svgArea(){return'<rect x="0" y="0" width="100%" height="100%" />'}}class d{constructor(t,e,s=[],i,r=!1){this.name=i,this.width=t,this.height=e,this.areas=s,this.dArea=new c,this.hasDefaultArea=r,this.lastId=0}setFromJson(t){t=JSON.parse(t);for(const e in t)if(t.hasOwnProperty(e)){let s=t[e];"areas"==e?this.areas=s.map(o.fromObject):"dArea"==e?this.dArea=o.fromObject(s):Object.keys(this).includes(e)&&(this[e]=s)}}setName(t){this.name=t.replace(/\s+/g,"")}setSize(t,e){this.width=t,this.height=e}setDefaultArea(t){this.hasDefaultArea=t}getAreas(t=!0){let e=this.areas.slice();return t&&this.hasDefaultArea&&e.unshift(this.dArea),e}addArea(t,e=!0){return e&&t.setId(this.getNewId()),this.areas.push(t),t.id}rmletea(t){let e=this.areaIndex(t);return this.areas.splice(e,1),e}moveArea(t,e){let s=this.areaIndex(t),i=this.areas[s],r=s+e;return!(r<0||r>=this.areas.length)&&(this.rmletea(t),this.insertArea(i,r),r)}popArea(){return this.areas.pop()}insertArea(t,e){this.areas.splice(e,0,t)}areaIndex(t){return this.areas.findIndex(e=>e.id==t)}isFirstArea(t){return 0==this.areaIndex(t)}isLastArea(t){return this.areaIndex(t)==this.areas.length-1}getNewId(){return this.lastId++,this.lastId}toHtml(){let t=[];return this.getAreas().forEach(e=>{e.isValidShape()&&t.push("\t"+e.toHtml())}),'<map name="'+this.name+'" id="'+this.name+'">\n'+t.reverse().join("\n")+"\n</map>"}toSvg(){let t=[];this.getAreas(!1).forEach(e=>{e.isValidShape()&&t.push("\t"+e.toSvg())});let e='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="'+this.width+'" height="'+this.height+'">\n';return e+=t.reverse().join("\n"),e+="\n</svg>"}toJson(){return JSON.stringify(this)}clearAreas(){this.areas=[]}setAreas(t){this.areas=t}}class u{constructor(t,e=15){this.speed=e,this.alpha=0,this.over=!1,this.p5=t.p5}appear(){this.over=!0}disappear(){this.over=!1}display(){this.over?this.alpha<100&&(this.alpha+=this.speed):this.alpha>0&&(this.alpha-=this.speed),this.p5.noStroke(),this.p5.fill(255,255,255,this.alpha),this.p5.rect(iMap.trueX(0),iMap.trueY(0),this.p5.width/iMap.view.scale,this.p5.height/iMap.view.scale)}}var p=s(0),f=s.n(p),b=s(1),g=s.n(b),m=s(2),v=s.n(m);s.d(e,"imageMapCreator",function(){return _});class _{constructor(t=600,e=450){this.width=t,this.height=450,this.tool="rectangle",this.drawingTools=["rectangle","circle","polygon"],this.settings,this.menu={SetUrl:{onSelect:(t,e,s,i)=>{this.setAreaUrl(i)},label:"Set url"},Delete:(t,e,s,i)=>{this.deleteArea(i)},MoveFront:{onSelect:(t,e,s,i)=>{this.moveArea(i,1)},enabled:!0,label:"Move Forward"},MoveBack:{onSelect:(t,e,s,i)=>{this.moveArea(i,-1)},enabled:!0,label:"Move Backward"}},this.tempArea=new o,this.tempCoord=new n,this.selected=!1,this.hovered=!1,this.map=new d(t,e),this.undoManager=new g.a,this.img,this.view={scale:1,transX:0,transY:0},this.zoomParams={min:.03,max:3,sensativity:.001}}sketch(t){this.p5=t,this.bgLayer=new u(this),t.setup=(()=>{t.createCanvas(this.width,this.height).drop(this.handeFile.bind(this)).dragLeave(this.onLeave.bind(this)).dragOver(this.onOver.bind(this)),this.settings=v.a.create(t.width+5,0,"Image-map Creator",t.canvas.parentElement).setDraggable(!1).addText("Map Name","",t=>{this.map.setName(t)}).addDropDown("Tool",["rectangle","circle","polygon","inspect","move","delete","test"],t=>{this.setTool(t.value)}).addBoolean("Default Area",this.map.hasDefaultArea,t=>{this.setDefaultArea(t)}).addButton("Undo",this.undoManager.undo).addButton("Redo",this.undoManager.redo).addButton("Clear",this.clearAreas.bind(this)).addButton("Generate Html",()=>{this.settings.setValue("Output",this.map.toHtml())}).addButton("Generate Svg",()=>{this.settings.setValue("Output",this.map.toSvg())}).addTextArea("Output").addButton("Save",this.exportMap.bind(this)),t.canvas.addEventListener("contextmenu",t=>{t.preventDefault()}),document.getElementById("Output").setAttribute("onFocus","this.select();")}),t.draw=(()=>{this.updateTempArea(),this.hovered=this.mouseIsHoverArea(),this.setCursor(),this.setOutput(),this.setBackground(),t.translate(this.view.transX,this.view.transY),t.scale(this.view.scale),this.drawImage(),this.bgLayer.display(),this.drawAreas()}),t.mousePressed=(()=>{if(this.mouseIsHover()&&t.mouseButton==t.LEFT&&!ContextMenu.isOpen())switch(this.tool){case"circle":case"rectangle":this.setTempArea(this.mX(),this.mY());break;case"polygon":this.tempArea.empty()?this.setTempArea(this.mX(),this.mY()):this.tempArea.isClosable(this.mX(),this.mY(),5/this.view.scale)?(this.tempArea.close(),this.tempArea.isValidShape()&&this.createArea(this.tempArea),this.tempArea=new o):this.tempArea.addCoord(this.mX(),this.mY());break;case"move":this.hovered&&(this.selected="default"!=this.hovered.shape&&this.hovered,this.tempCoord=this.selected.firstCoord())}}),t.mouseDragged=(()=>{if(this.mouseIsHover()&&!ContextMenu.isOpen())if(t.mouseButton==t.LEFT)switch(this.tool){case"move":if(this.selected){let e=new n(this.mX()-this.trueX(t.pmouseX),this.mY()-this.trueY(t.pmouseY));this.selected.move(e)}}else t.mouseButton==t.CENTER&&(this.view.transX+=t.mouseX-t.pmouseX,this.view.transY+=t.mouseY-t.pmouseY)}),t.mouseReleased=(t=>{switch(this.tool){case"rectangle":case"circle":this.tempArea.isValidShape()&&this.createArea(this.tempArea),this.tempArea=new o;break;case"move":if(this.selected){let t=this.selected,e=t.firstCoord().diff(this.tempCoord);this.undoManager.add({undo:()=>{t.move(e.invert())},redo:()=>{t.move(e)}})}}this.onClick(t),this.bgLayer.disappear()}),t.mouseWheel=(t=>{if(this.mouseIsHover()){let e=this.view.scale*this.zoomParams.sensativity*-t.delta;this.zoom(e)}})}mX(){return this.trueX(this.p5.mouseX)}mY(){return this.trueY(this.p5.mouseY)}trueX(t){return(t-this.view.transX)/this.view.scale}trueY(t){return(t-this.view.transY)/this.view.scale}mouseIsHover(){return this.p5.mouseX<=this.p5.width&&this.p5.mouseX>=0&&this.p5.mouseY<=this.p5.height&&this.p5.mouseY>=0}mouseIsHoverArea(){let t=this.map.getAreas().reverse().find(t=>t.isHover(this.mX(),this.mY()));return void 0!=t&&t}onClick(t){if(this.mouseIsHover()&&this.hovered){if(this.p5.mouseButton==this.p5.RIGHT)return this.selected=this.hovered,this.menu.MoveFront.enabled=!(this.map.isLastArea(this.hovered.id)||"default"==this.hovered.shape),this.menu.MoveBack.enabled=!(this.map.isFirstArea(this.hovered.id)||"default"==this.hovered.shape),ContextMenu.display(t,this.menu,{position:"click",data:this.hovered}),!1;if(this.p5.mouseButton==this.p5.LEFT)switch(this.tool){case"test":!function(t,e=400,s=300){window.open(t,"_blank",`width=${e},height=${s}`)}(this.hovered.href);break;case"delete":this.deleteArea(this.hovered)}}this.selected=!1}onOver(t){this.bgLayer.appear(),t.preventDefault()}onLeave(){this.bgLayer.disappear()}handeFile(t){"image"==t.type?(this.img=this.p5.loadImage(t.data,t=>this.resetView(t)),this.map.name||(this.map.setName(t.name),this.settings.setValue("Map Name",this.map.name))):"json"==t.subtype&&fetch(t.data).then(t=>t.blob()).then(t=>{console.log(t);let e=new FileReader;e.onload=(()=>{let t=e.result;console.log(t),this.map.setFromJson(t)}),e.readAsText(t)}),this.bgLayer.disappear()}resetView(t){this.view.scale=1,this.view.transX=0,this.view.transY=0;let e=this.p5.width/t.width,s=this.p5.height/t.height;e<this.view.scale&&(this.view.scale=e),s<this.view.scale&&(this.view.scale=s),this.map.setSize(t.width,t.height)}zoom(t){let e=this.view.scale+t;if(e>this.zoomParams.min&&e<this.zoomParams.max){let s=this.mX()*t,i=this.mY()*t;this.view.scale=e,this.view.transX-=s,this.view.transY-=i}}drawImage(){this.img&&this.p5.image(this.img,0,0,this.img.width,this.img.height)}drawAreas(){this.map.getAreas().concat([this.tempArea]).forEach(t=>{this.setAreaStyle(t),t.isDrawable()&&t.display(this.p5)})}setTool(t){this.tool=t,this.tempArea=new o}setCursor(){if(this.drawingTools.includes(this.tool))switch(this.tool){case"polygon":if(!this.tempArea.empty()&&this.tempArea.isClosable(this.mX(),this.mY(),5/this.view.scale)){this.p5.cursor(this.p5.HAND);break}default:this.p5.cursor(this.p5.CROSS)}else if(this.p5.cursor(this.p5.ARROW),this.hovered)switch(this.tool){case"inspect":case"test":case"delete":this.p5.cursor(this.p5.HAND);break;case"move":this.p5.cursor(this.p5.MOVE)}}setOutput(){switch(this.tool){case"inspect":if(this.mouseIsHover()){let t=this.hovered?this.hovered.href:"none";this.settings.setValue("Output",t)}}}setBackground(){if(this.p5.background(200),!this.img){this.p5.noStroke(),this.p5.fill(0),this.p5.textSize(15);let t="Drag and drop an image and/or a .map.json save file here";this.p5.text(t,this.p5.width/6,this.p5.height/2)}}setAreaStyle(t){let e=this.p5.color(255,255,255,178);"inspect"!=this.tool&&"test"!=this.tool||(e=this.p5.color(255,0)),(this.mouseIsHover()&&t==this.hovered&&0==this.selected&&("inspect"==this.tool||"delete"==this.tool||"move"==this.tool)||this.selected==t)&&(e=this.p5.color(255,200,200,178)),this.p5.fill(e),this.p5.strokeWeight(1/this.view.scale),"inspect"==this.tool||"test"==this.tool?this.p5.noStroke():this.p5.stroke(0)}setTempArea(t,e){let s=[new n(t,e)];switch(this.tool){case"rectangle":this.tempArea=new a(s),this.tempArea.addCoord(0,0);break;case"circle":this.tempArea=new l(s);break;case"polygon":this.tempArea=new h(s),this.tempArea.addCoord(t,e)}}updateTempArea(){this.tempArea.empty()||this.tempArea.updateLastCoord(this.mX(),this.mY())}exportMap(){f()(this.map.toJson(),`${this.map.name}.map.json`,"application/json")}createArea(t){this.map.addArea(t),this.undoManager.add({undo:()=>{t=this.map.popArea()},redo:()=>{this.map.addArea(t,!1)}})}deleteArea(t){let e=t.id;if(0===e)this.settings.setValue("Default Area",!1);else{let s=this.map.rmletea(e);this.undoManager.add({undo:()=>{this.map.insertArea(t,s)},redo:()=>{this.map.rmletea(e)}})}}moveArea(t,e){!1!==this.map.moveArea(t.id,e)&&this.undoManager.add({undo:()=>{this.map.moveArea(t.id,-e)},redo:()=>{this.map.moveArea(t.id,e)}})}setAreaUrl(t){let e=t.href,s=prompt("Entrez l'url vers laquelle devrait pointer cette zone",e||"http://");null!=s&&(t.setHref(s),this.undoManager.add({undo:()=>{t.setHref(e)},redo:()=>{t.setHref(s)}}))}setDefaultArea(t){this.map.setDefaultArea(t),this.undoManager.add({undo:()=>{this.map.setDefaultArea(!t),this.settings.setValue("Default Area",!t)},redo:()=>{this.map.setDefaultArea(t),this.settings.setValue("Default Area",t)}})}clearAreas(){let t=this.map.getAreas(!1);this.map.clearAreas(),this.undoManager.add({undo:()=>{this.map.setAreas(t)},redo:()=>{this.map.clearAreas()}})}}}]));