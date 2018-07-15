!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("react")):"function"==typeof define&&define.amd?define("react-json-editor-ajrm",["React"],t):"object"==typeof exports?exports["react-json-editor-ajrm"]=t(require("react")):e["react-json-editor-ajrm"]=t(e.React)}("undefined"!=typeof self?self:this,function(e){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/dist/",n(n.s=0)}([function(e,t,n){e.exports=n(1)},function(e,t,n){var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=n(2),a=c(s),l=c(n(3));function c(e){return e&&e.__esModule?e:{default:e}}var p=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));if(!("id"in n.props))throw"An 'id' property must be specified. Must be unique";return n.updateInternalProps=n.updateInternalProps.bind(n),n.randomString=n.randomString.bind(n),n.createMarkup=n.createMarkup.bind(n),n.onClick=n.onClick.bind(n),n.onBlur=n.onBlur.bind(n),n.update=n.update.bind(n),n.getCursorPosition=n.getCursorPosition.bind(n),n.setCursorPosition=n.setCursorPosition.bind(n),n.scheduledUpdate=n.scheduledUpdate.bind(n),n.setUpdateTime=n.setUpdateTime.bind(n),n.renderLabels=n.renderLabels.bind(n),n.newSpan=n.newSpan.bind(n),n.renderErrorMessage=n.renderErrorMessage.bind(n),n.onScroll=n.onScroll.bind(n),n.showPlaceholder=n.showPlaceholder.bind(n),n.tokenize=n.tokenize.bind(n),n.onKeyPress=n.onKeyPress.bind(n),n.onKeyDown=n.onKeyDown.bind(n),n.onPaste=n.onPaste.bind(n),n.stopEvent=n.stopEvent.bind(n),n.uniqueID="AJRM-JSON-EDITOR-"+n.randomString(10)+"-"+n.props.id,n.contentID=n.uniqueID+"-content-box",n.updateInternalProps(),n.renderCount=1,n.state={preText:"",markupText:"",plainText:"",json:"",jsObject:void 0,lines:!1,error:!1},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,s.Component),o(t,[{key:"updateInternalProps",value:function(){var e={},t={},n=l.default.dark_vscode_tribute;"theme"in this.props&&"string"==typeof this.props.theme&&this.props.theme in l.default&&(n=l.default[this.props.theme]),e=n,"colors"in this.props&&(e={default:"default"in this.props.colors?this.props.colors.default:e.default,string:"string"in this.props.colors?this.props.colors.string:e.string,number:"number"in this.props.colors?this.props.colors.number:e.number,colon:"colon"in this.props.colors?this.props.colors.colon:e.colon,keys:"keys"in this.props.colors?this.props.colors.keys:e.keys,keys_whiteSpace:"keys_whiteSpace"in this.props.colors?this.props.colors.keys_whiteSpace:e.keys_whiteSpace,primitive:"primitive"in this.props.colors?this.props.colors.primitive:e.primitive,error:"error"in this.props.colors?this.props.colors.error:e.error,background:"background"in this.props.colors?this.props.colors.background:e.background,background_warning:"background_warning"in this.props.colors?this.props.colors.background_warning:e.background_warning}),this.colors=e,t="style"in this.props?{outerBox:"outerBox"in this.props.style?this.props.style.outerBox:{},container:"container"in this.props.style?this.props.style.container:{},warningBox:"warningBox"in this.props.style?this.props.style.warningBox:{},errorMessage:"errorMessage"in this.props.style?this.props.style.errorMessage:{},body:"body"in this.props.style?this.props.style.body:{},labelColumn:"labelColumn"in this.props.style?this.props.style.labelColumn:{},labels:"labels"in this.props.style?this.props.style.labels:{},contentBox:"contentBox"in this.props.style?this.props.style.contentBox:{}}:{outerBox:{},container:{},warningBox:{},errorMessage:{},body:{},labelColumn:{},labels:{},contentBox:{}},this.style=t,this.confirmGood=!("confirmGood"in this.props)||this.props.confirmGood;var r="height"in this.props?parseInt(this.props.height.replace(/px/,""))+60+"px":"610px",i="width"in this.props?parseInt(this.props.width.replace(/px/,""))+"px":"479px",o=parseInt(r.replace(/px/,""))-60+"px",s=parseInt(i.replace(/px/,""))-44+"px",a=parseInt(i.replace(/px/,""))-60+"px";this.totalHeight=r,this.totalWidth=i,this.bodyHeight=o,this.bodyWidth=s,this.messageWidth=a,"onKeyPressUpdate"in this.props&&!this.props.onKeyPressUpdate?this.timer&&(clearInterval(this.timer),this.timer=!1):this.timer||(this.timer=setInterval(this.scheduledUpdate,100)),this.updateTime=!1,this.waitAfterKeyPress="waitAfterKeyPress"in this.props?this.props.waitAfterKeyPress:1e3}},{key:"render",value:function(){var e=this.state.markupText,t=this.state.error,n=this.uniqueID,r=this.contentID,o=this.colors,s=this.style,l=this.confirmGood,c=this.totalHeight,p=this.totalWidth,u=this.bodyHeight,h=this.bodyWidth,d=this.messageWidth,f=!!t&&"token"in t;return this.renderCount++,a.default.createElement("div",{name:"outer-box",id:n+"-outer-box",style:i({display:"block",overflow:"none",height:c,width:p,margin:0,boxSizing:"border-box",position:"relative"},s.outerBox)},l?a.default.createElement("div",{style:{opacity:f?0:1,height:"30px",width:"30px",position:"absolute",top:0,right:0,transform:"translate(-25%,25%)",pointerEvents:"none",transitionDuration:"0.2s",transitionTimingFunction:"cubic-bezier(0, 1, 0.5, 1)"}},a.default.createElement("svg",{height:"30px",width:"30px",viewBox:"0 0 100 100"},a.default.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",fill:"green",opacity:"0.85",d:"M39.363,79L16,55.49l11.347-11.419L39.694,56.49L72.983,23L84,34.085L39.363,79z"}))):void 0,a.default.createElement("div",{name:"container",id:n+"-container",style:i({display:"block",height:c,width:p,margin:0,boxSizing:"border-box",overflow:"hidden",fontFamily:"Roboto, sans-serif"},s.container),onClick:this.onClick},a.default.createElement("div",{name:"warning-box",id:n+"-warning-box",style:i({display:"block",overflow:"hidden",height:f?"60px":"0px",width:p,margin:0,backgroundColor:o.background_warning,transitionDuration:"0.2s",transitionTimingFunction:"cubic-bezier(0, 1, 0.5, 1)"},s.warningBox),onClick:this.onClick},a.default.createElement("span",{style:{display:"inline-block",height:"60px",width:"60px",margin:0,boxSizing:"border-box",overflow:"hidden",verticalAlign:"top",pointerEvents:"none"},onClick:this.onClick},a.default.createElement("div",{style:{position:"relative",top:0,left:0,height:"60px",width:"60px",margin:0,pointerEvents:"none"},onClick:this.onClick},a.default.createElement("div",{style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",pointerEvents:"none"},onClick:this.onClick},a.default.createElement("svg",{height:"25px",width:"25px",viewBox:"0 0 100 100"},a.default.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",fill:"red",d:"M73.9,5.75c0.467-0.467,1.067-0.7,1.8-0.7c0.7,0,1.283,0.233,1.75,0.7l16.8,16.8  c0.467,0.5,0.7,1.084,0.7,1.75c0,0.733-0.233,1.334-0.7,1.801L70.35,50l23.9,23.95c0.5,0.467,0.75,1.066,0.75,1.8  c0,0.667-0.25,1.25-0.75,1.75l-16.8,16.75c-0.534,0.467-1.117,0.7-1.75,0.7s-1.233-0.233-1.8-0.7L50,70.351L26.1,94.25  c-0.567,0.467-1.167,0.7-1.8,0.7c-0.667,0-1.283-0.233-1.85-0.7L5.75,77.5C5.25,77,5,76.417,5,75.75c0-0.733,0.25-1.333,0.75-1.8  L29.65,50L5.75,26.101C5.25,25.667,5,25.066,5,24.3c0-0.666,0.25-1.25,0.75-1.75l16.8-16.8c0.467-0.467,1.05-0.7,1.75-0.7  c0.733,0,1.333,0.233,1.8,0.7L50,29.65L73.9,5.75z"}))))),a.default.createElement("span",{style:{display:"inline-block",height:"60px",width:d,margin:0,overflow:"hidden",verticalAlign:"top",position:"absolute",pointerEvents:"none"},onClick:this.onClick},this.renderErrorMessage())),a.default.createElement("div",{name:"body",id:n+"-body",style:i({display:"block",overflow:"none",height:f?u:c,width:p,margin:0,resize:"none",fontFamily:"Roboto Mono, Monaco, monospace",fontSize:"11px",backgroundColor:o.background,transitionDuration:"0.2s",transitionTimingFunction:"cubic-bezier(0, 1, 0.5, 1)"},s.body),onClick:this.onClick},a.default.createElement("div",{name:"labels",id:n+"-labels",style:i({display:"inline-block",boxSizing:"border-box",height:"100%",width:"44px",margin:0,padding:"5px 0px 5px 10px",overflow:"hidden",color:"#D4D4D4"},s.labelColumn),onClick:this.onClick},this.renderLabels()),a.default.createElement("div",{id:r,contentEditable:!0,style:i({display:"inline-block",boxSizing:"border-box",height:"100%",width:h,margin:0,padding:"5px",overflowX:"hidden",overflowY:"auto",wordWrap:"break-word",whiteSpace:"pre-line",color:"#D4D4D4",outline:"none"},s.contentBox),dangerouslySetInnerHTML:this.createMarkup(e),onKeyPress:this.onKeyPress,onKeyDown:this.onKeyDown,onClick:this.onClick,onBlur:this.onBlur,onScroll:this.onScroll,onPaste:this.onPaste,autoComplete:"off",autoCorrect:"off",autoCapitalize:"off",spellCheck:!1}))))}},{key:"renderErrorMessage",value:function(){var e=this.messageWidth,t=this.state.error,n=this.style;if(t)return a.default.createElement("p",{style:i({color:"red",fontSize:"12px",position:"absolute",width:e,height:"60px",boxSizing:"border-box",margin:0,padding:0,paddingRight:"10px",overflowWrap:"break-word",display:"flex",flexDirection:"column",justifyContent:"center"},n.errorMessage)},t.reason+" at line "+t.line)}},{key:"renderLabels",value:function(){for(var e=this.uniqueID+"-line-",t=this.colors,n=this.style,r=this.state.error?this.state.error.line:-1,o=this.state.lines?this.state.lines:1,s=new Array(o),l=0;l<o-1;l++)s[l]=l+1;return s.map(function(o){var s=o!==r?t.default:"red";return a.default.createElement("div",{key:e+o,id:e+o,style:i({},n.labels,{color:s})},o)})}},{key:"createMarkup",value:function(e){return void 0===e?{__html:""}:{__html:""+e}}},{key:"newSpan",value:function(e,t,n){var r=this.uniqueID+"-token-"+e+"-rc-"+this.renderCount,i=this.colors,o=t.type,s=t.string,a="";switch(o){case"string":case"number":case"primitive":case"error":a=i[t.type];break;case"key":a=" "===s?i.keys_whiteSpace:i.keys;break;case"symbol":a=":"===s?i.colon:i.default;break;default:a=i.default}return s.length!==s.replace(/</g,"").replace(/>/g,"").length&&(s="<xmp style=display:inline;>"+s+"</xmp>"),'<span id="'+r+'" key="'+r+'" type="'+o+'" value="'+s+'" depth="'+n+'" style="color:'+a+'">'+s+"</span>"}},{key:"randomString",value:function(e){if("number"!=typeof e)throw"@randomString: Expected 'length' to be a number";for(var t="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",n="",r=e;r>0;--r)n+=t[Math.floor(Math.random()*t.length)];return n}},{key:"getCursorPosition",value:function(){var e=this.contentID;var t=window.getSelection(),n=-1,r=void 0;if(t.focusNode&&function(t){for(;null!==t;){if(t.id===e)return!0;t=t.parentNode}return!1}(t.focusNode))for(r=t.focusNode,n=t.focusOffset;r&&r.id!==e;)if(r.previousSibling)n+=(r=r.previousSibling).textContent.length;else if(null===(r=r.parentNode))break;return n}},{key:"setCursorPosition",value:function(e){if(!([!1,null,void 0].indexOf(e)>-1)){var t=this.contentID;e>0?function(e){if(!(e<0)){var n=window.getSelection(),r=function e(t,n,r){if(r||((r=document.createRange()).selectNode(t),r.setStart(t,0)),0===n.count)r.setEnd(t,n.count);else if(t&&n.count>0)if(t.nodeType===Node.TEXT_NODE)t.textContent.length<n.count?n.count-=t.textContent.length:(r.setEnd(t,n.count),n.count=0);else for(var i=0;i<t.childNodes.length&&(r=e(t.childNodes[i],n,r),0!==n.count);i++);return r}(document.getElementById(t),{count:e});r&&(r.collapse(!1),n.removeAllRanges(),n.addRange(r))}}(e):document.getElementById(t).focus()}}},{key:"update",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=this.getCursorPosition()+e,r=this.contentID,i=document.getElementById(r),o=this.tokenize(i);"onChange"in this.props&&this.props.onChange({plainText:o.indented,markupText:o.markup,json:o.json,jsObject:o.jsObject,lines:o.lines,error:o.error}),this.setState({plainText:o.indented,markupText:o.markup,json:o.json,jsObject:o.jsObject,lines:o.lines,error:o.error}),this.updateTime=!1,t&&this.setCursorPosition(n)}},{key:"scheduledUpdate",value:function(){if(!("onKeyPressUpdate"in this.props&&!1===this.props.onKeyPressUpdate)){var e=this.updateTime;!1!==e&&(e>(new Date).getTime()||this.update())}}},{key:"setUpdateTime",value:function(){"onKeyPressUpdate"in this.props&&!1===this.props.onKeyPressUpdate||(this.updateTime=(new Date).getTime()+this.waitAfterKeyPress)}},{key:"stopEvent",value:function(e){e&&(e.preventDefault(),e.stopPropagation())}},{key:"onKeyPress",value:function(e){"viewOnly"in this.props&&this.props.viewOnly&&this.stopEvent(e),this.setUpdateTime()}},{key:"onKeyDown",value:function(e){switch("viewOnly"in this.props&&this.props.viewOnly&&this.stopEvent(e),e.key){case"Backspace":case"Delete":case"ArrowLeft":case"ArrowRight":case"ArrowUp":case"ArrowDown":return void this.setUpdateTime()}}},{key:"onPaste",value:function(e){"viewOnly"in this.props&&this.props.viewOnly&&this.stopEvent(e),this.update()}},{key:"onClick",value:function(){"viewOnly"in this.props&&this.props.viewOnly}},{key:"onBlur",value:function(){"viewOnly"in this.props&&this.props.viewOnly||this.update(0,!1)}},{key:"onScroll",value:function(e){var t=this.uniqueID;document.getElementById(t+"-labels").scrollTop=e.target.scrollTop}},{key:"componentDidUpdate",value:function(){this.updateInternalProps(),this.showPlaceholder()}},{key:"componentDidMount",value:function(){var e=this.contentID;document.getElementById(e).addEventListener("paste",function(e){e.preventDefault();var t=e.clipboardData.getData("text/plain");document.execCommand("insertHTML",!1,t)}),this.showPlaceholder()}},{key:"componentWillUnmount",value:function(){this.timer&&clearInterval(this.timer)}},{key:"showPlaceholder",value:function(){var e=this.state.preText;if("placeholder"in this.props){var t=this.props.placeholder;if(!([e,void 0,null].indexOf(t)>-1)&&"object"===(void 0===t?"undefined":r(t))){var n=this.tokenize(t);this.setState({preText:t,plainText:n.indentation,markupText:n.markup,lines:n.lines,error:n.error})}}}},{key:"tokenize",value:function(e){if("object"!==(void 0===e?"undefined":r(e)))return console.error("tokenize() expects object type properties only. Got '"+(void 0===e?"undefined":r(e))+"' type instead.");var t,n=this.newSpan;if("nodeType"in e){var i=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n={active:!1,string:"",number:"",symbol:"",space:"",delimiter:"",quarks:[]};function r(e,r){switch(r){case"symbol":case"delimiter":n.active&&n.quarks.push({string:n[n.active],type:t+"-"+n.active}),n[n.active]="",n.active=r,n[n.active]=e;break;default:r!==n.active||[n.string,e].indexOf("\n")>-1?(n.active&&n.quarks.push({string:n[n.active],type:t+"-"+n.active}),n[n.active]="",n.active=r,n[n.active]=e):n[r]+=e}}for(var i=0;i<e.length;i++){var o=e.charAt(i);switch(o){case'"':case"'":r(o,"delimiter");break;case" ":case" ":r(o,"space");break;case"{":case"}":case"[":case"]":case":":case",":r(o,"symbol");break;case"0":case"1":case"2":case"3":case"4":case"5":case"6":case"7":case"8":case"9":"string"===n.active?r(o,"string"):r(o,"number");break;case"-":if(i<e.length-1&&"0123456789".indexOf(e.charAt(i+1))>-1){r(o,"number");break}case".":if(i<e.length-1&&i>0&&"0123456789".indexOf(e.charAt(i+1))>-1&&"0123456789".indexOf(e.charAt(i-1))>-1){r(o,"number");break}default:r(o,"string")}}return n.active&&(n.quarks.push({string:n[n.active],type:t+"-"+n.active}),n[n.active]="",n.active=!1),n.quarks},o=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;v={token:e,line:x,reason:t},u.tokens_merge[e+n].type="error"},s=function(e,t){if(void 0===e&&console.error("tokenID argument must be an integer."),void 0===t&&console.error("options argument must be an array."),e===u.tokens_merge.length-1)return!1;for(var n=e+1;n<u.tokens_merge.length;n++){var r=u.tokens_merge[n];switch(r.type){case"space":case"linebreak":break;case"symbol":case"colon":return t.indexOf(r.string)>-1&&n;default:return!1}}return!1},a=function(e,t){if(void 0===e&&console.error("tokenID argument must be an integer."),void 0===t&&console.error("options argument must be an array."),0===e)return!1;for(var n=e-1;n>=0;n--){var r=u.tokens_merge[n];switch(r.type){case"space":case"linebreak":break;case"symbol":case"colon":return t.indexOf(r.string)>-1;default:return!1}}return!1},l=function(e){if(void 0===e&&console.error("tokenID argument must be an integer."),0===e)return!1;for(var t=e-1;t>=0;t--){var n=u.tokens_merge[t];switch(n.type){case"space":case"linebreak":break;default:return n.type}}return!1},c=function(){return function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return Q++,Z>0||e?"<br>":""}(arguments.length>0&&void 0!==arguments[0]&&arguments[0])+function(){for(var e=[],t=0;t<2*Z;t++)e.push("&nbsp;");return e.join("")}()},p=e.cloneNode(!0);if(!p.hasChildNodes())return"";var u={tokens_unknown:[],tokens_proto:[],tokens_split:[],tokens_fallback:[],tokens_normalize:[],tokens_merge:[],tokens_plainText:"",indented:"",json:"",jsObject:void 0,markup:""};p.childNodes.forEach(function(e,t){var n={};switch(e.nodeName){case"SPAN":n={string:e.textContent,type:e.attributes.type.textContent},u.tokens_unknown.push(n);case"BR":""===e.textContent&&u.tokens_unknown.push({string:"\n",type:"unknown"});break;case"#text":u.tokens_unknown.push({string:e.wholeText,type:"unknown"});break;case"FONT":u.tokens_unknown.push({string:e.textContent,type:"unknown"})}}),u.tokens_unknown.forEach(function(e,t){u.tokens_proto=u.tokens_proto.concat(i(e.string,"proto"))}),u.tokens_proto.forEach(function(e,t){-1===e.type.indexOf("proto")&&!function(e,t){var n="",r="",i=!1;switch(t){case"primitive":if(-1===["true","false","null","undefined"].indexOf(e))return!1;break;case"string":if(e.length<2)return!1;if(n=e.charAt(0),r=e.charAt(e.length-1),-1===(i="'\"".indexOf(n)))return!1;if(n!==r)return!1;for(var o=0;o<e.length;o++)if(o>0&&o<e.length-1&&e.charAt(o)==="'\""[i]&&"\\"!==e.charAt(o-1))return!1;break;case"key":if(0===e.length)return!1;if(n=e.charAt(0),r=e.charAt(e.length-1),(i="'\"".indexOf(n))>-1){if(1===e.length)return!1;if(n!==r)return!1;for(o=0;o<e.length;o++)if(o>0&&o<e.length-1&&e.charAt(o)==="'\""[i]&&"\\"!==e.charAt(o-1))return!1}else for(o=0;o<"'\"`.,:;{}[]&<>=~*%\\|/-+!?@^  ".length;o++){var s="'\"`.,:;{}[]&<>=~*%\\|/-+!?@^  ".charAt(o);if(e.indexOf(s)>-1)return!1}break;case"number":for(o=0;o<e.length;o++)if(-1==="0123456789".indexOf(e.charAt(o)))if(0===o){if("-"!==e.charAt(0))return!1}else if("."!==e.charAt(o))return!1;break;case"symbol":if(e.length>1)return!1;if(-1==="{[:]},".indexOf(e))return!1;break;case"colon":if(e.length>1)return!1;if(":"!==e)return!1;break;default:return!0}return!0}(e.string,e.type)?u.tokens_split=u.tokens_split.concat(i(e.string,"split")):u.tokens_split.push(e)}),u.tokens_split.forEach(function(e){var t=e.type,n=e.string,r=n.length,i=[];t.indexOf("-")>-1&&("string"!==(t=t.slice(t.indexOf("-")+1))&&i.push("string"),i.push("key"),i.push("error"));var o={string:n,length:r,type:t,fallback:i};u.tokens_fallback.push(o)});var h={brackets:[],stringOpen:!1,isValue:!1};u.tokens_fallback.forEach(function(e,t){var n=e.type,r=e.string,i={type:n,string:r};switch(n){case"symbol":case"colon":if(h.stringOpen){h.isValue?i.type="string":i.type="key";break}switch(r){case"[":case"{":h.brackets.push(r),h.isValue="["===h.brackets[h.brackets.length-1];break;case"]":case"}":h.brackets.pop(),h.isValue="["===h.brackets[h.brackets.length-1];break;case",":if("colon"===function(){var e=u.tokens_normalize.length-1;if(e<1)return!1;for(var t=e;t>=0;t--){var n=u.tokens_normalize[t];switch(n.type){case"space":case"linebreak":break;default:return n}}return!1}().type)break;h.isValue="["===h.brackets[h.brackets.length-1];break;case":":i.type="colon",h.isValue=!0}break;case"delimiter":if(h.isValue?i.type="string":i.type="key",!h.stringOpen){h.stringOpen=r;break}if(t>0){var o=u.tokens_fallback[t-1],s=o.string,a=o.type,l=s.charAt(s.length-1);if("string"===a&&"\\"===l)break}if(h.stringOpen===r){h.stringOpen=!1;break}break;case"primitive":case"string":if(["false","true","null","undefined"].indexOf(r)>-1){var c=u.tokens_normalize.length-1;if(c>=0){if("string"!==u.tokens_normalize[c].type){i.type="primitive";break}i.type="string";break}i.type="primitive";break}if("\n"===r&&!h.stringOpen){i.type="linebreak";break}h.isValue?i.type="string":i.type="key";break;case"space":case"number":h.stringOpen&&(h.isValue?i.type="string":i.type="key")}u.tokens_normalize.push(i)});for(var d=0;d<u.tokens_normalize.length;d++){var f=u.tokens_normalize[d],k={string:f.string,type:f.type,tokens:[d]};if(-1===["symbol","colon"].indexOf(f.type)&&d+1<u.tokens_normalize.length){for(var b=0,g=d+1;g<u.tokens_normalize.length;g++){var y=u.tokens_normalize[g];if(f.type!==y.type)break;k.string+=y.string,k.tokens.push(g),b++}d+=b}u.tokens_merge.push(k)}var m="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789_$",v=!1,x=u.tokens_merge.length>0?1:0;h={brackets:[],stringOpen:!1,isValue:!1};var w=[];for(d=0;d<u.tokens_merge.length&&!v;d++){var O=u.tokens_merge[d],_=O.string,C=O.type,E=!1;switch(C){case"space":break;case"linebreak":x++;break;case"symbol":switch(_){case"{":case"[":if(E=a(d,["}","]"])){o(d,"'"+u.tokens_merge[E].string+"' token cannot be followed by '"+_+"' token");break}if("["===_&&d>0&&!a(d,[":","[",","])){o(d,"'[' token can only follow ':', '[', and ',' tokens");break}if("{"===_&&a(d,["{"])){o(d,"'{' token cannot follow another '{' token");break}h.brackets.push(_),h.isValue="["===h.brackets[h.brackets.length-1],w.push({i:d,line:x,string:_});break;case"}":case"]":if("}"===_&&"{"!==h.brackets[h.brackets.length-1]){o(d,"Missing '{' open curly brace");break}if("}"===_&&a(d,[","])){o(d,"'}' token cannot follow a comma");break}if("]"===_&&"["!==h.brackets[h.brackets.length-1]){o(d,"Missing '[' open brace");break}if("]"===_&&a(d,[":"])){o(d,"']' token cannot follow a colon");break}h.brackets.pop(),h.isValue="["===h.brackets[h.brackets.length-1],w.push({i:d,line:x,string:_});break;case",":if(E=a(d,["{"])){if(s(d,["}"])){o(d,"Comma can only be wrapped by brackets");break}o(d,"Comma cannot follow '{' token");break}if(s(d,["}",",","]"])){o(d,"Values are always specified. Comma cannot be followed by '}', ']' tokens or another comma");break}switch(E=l(d)){case"key":case"colon":o(d,"Comma cannot follow "+E);break;case"symbol":if(a(d,["{"])){o(d,"Comma cannot follow '{' token");break}}h.isValue="["===h.brackets[h.brackets.length-1]}u.json+=_;break;case"colon":if((E=a(d,["["]))&&s(d,["]"])){o(d,"Colon can only be wrapped by curly brackets");break}if(E){o(d,"Colon cannot follow '[' token");break}if("key"!==l(d)){o(d,"Colon can only follow key");break}h.isValue=!0,u.json+=_;break;case"key":case"string":var j=_.charAt(0),S=_.charAt(_.length-1);"'\"".indexOf(j);if(-1==="'\"".indexOf(j)&&-1!=="'\"".indexOf(S)){o(d,"Missing opening "+S+" quote on "+C);break}if(-1==="'\"".indexOf(S)&&-1!=="'\"".indexOf(j)){o(d,"Missing closing "+j+" quote on "+C);break}if("'\"".indexOf(j)>-1&&j!==S){o(d,"Missing closing "+j+" quote on "+C);break}if("string"===C&&-1==="'\"".indexOf(j)&&-1==="'\"".indexOf(S)){o(d,"String must be wrapped by quotes");break}if("key"===C&&"'\"".indexOf(j)>-1&&_.length<=2){o(d,"Key cannot be an empty string");break}if("key"===C&&-1==="'\"".indexOf(j)&&-1==="'\"".indexOf(S))for(var D=0;D<_.length&&!v;D++){var A=_.charAt(D);if(-1===m.indexOf(A)){o(d,"Non-alphanemeric token '"+A+"' is not allowed outside string notation");break}}if("'"===j?_='"'+_.slice(1,-1)+'"':'"'!==j&&(_='"'+_+'"'),"key"===C&&"key"===l(d)){if(d>0&&!isNaN(u.tokens_merge[d-1])){u.tokens_merge[d-1]+=u.tokens_merge[d],o(d,"Key beginning with number and containing letters must be wrapped by quotes");break}o(d,"Key containing space must be wrapped by quotes");break}if("key"===C&&!a(d,["{",","])){o(d,"Key can only follow '{' or ',' tokens");break}if("string"===C&&!a(d,["[",":",","])){o(d,C+" can only follow '[' ':' ',' tokens");break}if("key"===C&&h.isValue){o(d,"Unexpected key found at value position");break}if("string"===C&&!h.isValue){o(d,"Unexpected string found at key position");break}u.json+=_;break;case"number":case"primitive":if(a(d,["{"]))u.tokens_merge[d].type="key",C=u.tokens_merge[d].type,_='"'+_+'"';else if("key"===l(d))u.tokens_merge[d].type="key",C=u.tokens_merge[d].type;else if(!a(d,["[",":",","])){o(d,C+" can only follow '[' ':' ',' tokens");break}if("key"!==C&&!h.isValue){o(d,"Unexpected "+C+" found at key position");break}"primitive"===C&&"undefined"===_&&o(d,"'undefined' token is not accepted. Use 'null' token instead"),u.json+=_}}var P="";for(d=0;d<u.json.length;d++){var T=u.json.charAt(d),I="";d+1<u.json.length&&(I=u.json.charAt(d+1),"\\"===T&&"'"===I)?(P+=I,d++):P+=T}if(u.json=P,!v){for(var B=Math.ceil(w.length/2),M=0,z=!1;w.length>0;){z=!1;for(var N=0;N<w.length-1;N++){var V=w[N].string+w[N+1].string;["[]","{}"].indexOf(V)>-1&&(t=N,w.splice(t+1,1),w.splice(t,1),z||(z=!0))}if(M++,!z)break;if(M>=B)break}if(w.length>0){var K=w[0].string,U=w[0].i,L="["===K?"]":"}";x=w[0].line,o(U,"'"+K+"' token is missing closing '"+L+"' token")}}if(!v&&-1===[void 0,""].indexOf(u.json))try{u.jsObject=JSON.parse(u.json)}catch(e){var q=e.message,F=q.indexOf("position");if(-1===F)throw new Error("Error parsing failed");for(var R=q.substring(F+9,q.length),W=parseInt(R),H=0,G=0,J=!1,X=1,Y=!1;H<W&&!Y&&("linebreak"===(J=u.tokens_merge[G]).type&&X++,-1===["space","linebreak"].indexOf(J.type)&&(H+=J.string.length),!(H>=W));)G++,u.tokens_merge[G+1]||(Y=!0);x=X,o(G,"Unexpected token '"+J.string+"' found")}var Q=1,Z=0;if(!v)for(d=0;d<u.tokens_merge.length;d++){var $=u.tokens_merge[d],ee=$.string;switch($.type){case"space":case"linebreak":break;case"string":case"number":case"primitive":case"error":u.markup+=(a(d,[",","["])?c():"")+n(d,$,Z);break;case"key":u.markup+=c()+n(d,$,Z);break;case"colon":u.markup+=n(d,$,Z)+"&nbsp;";break;case"symbol":switch(ee){case"[":case"{":u.markup+=(a(d,[":"])?"":c())+n(d,$,Z),Z++;break;case"]":case"}":Z--;var te=d===u.tokens_merge.length-1,ne=d>0?["[","{"].indexOf(u.tokens_merge[d-1].string)>-1?"":c(te):"";u.markup+=ne+n(d,$,Z);break;case",":u.markup+=n(d,$,Z)}}}if(v){var re=function(e){for(var t=0,n=0;n<e.length;n++)["\n","\r"].indexOf(e[n])>-1&&t++;return t},ie=1;Q=1;for(d=0;d<u.tokens_merge.length;d++){var oe=u.tokens_merge[d],se=oe.type,ae=oe.string;"linebreak"===se&&Q++,u.markup+=n(d,oe,Z),ie+=re(ae)}++Q<++ie&&(Q=ie)}return u.tokens_merge.forEach(function(e){u.indented+=e.string}),{tokens:u.tokens_merge,noSpaces:u.tokens_plainText,indented:u.indented,json:u.json,jsObject:u.jsObject,markup:u.markup,lines:Q,error:v}}if(!("nodeType"in e)){var le=function(e,t){return e.slice(0,t)+e.slice(t+1)},ce=function(){if(-1==="'\"".indexOf(ke.currentChar))return!1;if(!ke.stringOpen)return ue(),ke.stringStart=ke.position,ke.stringOpen=ke.currentChar,!0;if(ke.stringOpen===ke.currentChar){ue();var e=ke.inputText.substring(ke.stringStart,ke.position+1);return he(e),ke.stringOpen=!1,!0}return!1},pe=function(){if(-1===":,{}[]".indexOf(ke.currentChar))return!1;if(ke.stringOpen)return!1;switch(ue(),he(ke.currentChar),ke.currentChar){case":":return ke.isValue=!0,!0;case"{":case"[":ke.brackets.push(ke.currentChar);break;case"}":case"]":ke.brackets.pop()}return":"!==ke.currentChar&&(ke.isValue="["===ke.brackets[ke.brackets.length-1]),!0},ue=function(){return 0!==ke.tokenSecondary.length&&(ke.tokens.push(ke.tokenSecondary),ke.tokenSecondary="",!0)},he=function(e){return 0!==e.length&&(ke.tokens.push(e),!0)},de=function(e){for(var t=[],n=0;n<2*e;n++)t.push(" ");return(e>0?"\n":"")+t.join("")},fe=function(e){var t=[];e>0&&we++;for(var n=0;n<2*e;n++)t.push("&nbsp;");return(e>0?"<br>":"")+t.join("")},ke={inputText:JSON.stringify(e),position:0,currentChar:"",tokenPrimary:"",tokenSecondary:"",brackets:[],isValue:!1,stringOpen:!1,stringStart:0,tokens:[]};for(d=0;d<ke.inputText.length;d++){ke.position=d,ke.currentChar=ke.inputText.charAt(ke.position);var be=pe(),ge=ce(),ye="\\"===ke.currentChar&&(ke.inputText=le(ke.inputText,ke.position),!0);be||ge||ye||ke.stringOpen||(ke.tokenSecondary+=ke.currentChar)}var me={brackets:[],isValue:!1,tokens:[]};me.tokens=ke.tokens.map(function(e){var t="",n="",r="";switch(e){case",":t="symbol",n=e,r=e,me.isValue="["===me.brackets[me.brackets.length-1];break;case":":t="symbol",n=e,r=e,me.isValue=!0;break;case"{":case"[":t="symbol",n=e,r=e,me.brackets.push(e),me.isValue="["===me.brackets[me.brackets.length-1];break;case"}":case"]":t="symbol",n=e,r=e,me.brackets.pop(),me.isValue="["===me.brackets[me.brackets.length-1];break;case"undefined":t="primitive",n=e,r=void 0;break;case"null":t="primitive",n=e,r=null;break;case"false":t="primitive",n=e,r=!1;break;case"true":t="primitive",n=e,r=!0;break;default:var i=e.charAt(0);if("'\"".indexOf(i)>-1){t=me.isValue?"string":"key",n=e.slice(1,-1),"key"===t&&(n=function(e){if(0===e.length)return e;for(var t=!1,n=0;n<2;n++)if([e.charAt(0),e.charAt(e.length-1)].indexOf(['"',"'"][n])>-1){t=!0;break}t&&(e=e.slice(1,-1));var r=e.replace(/\w/g,""),i=(e.replace(/\W+/g,""),function(e,t){for(var n=!1,r=0;r<t.length&&(0!==r||!isNaN(t.charAt(r)));r++)if(isNaN(t.charAt(r))){n=!0;break}return!(e.length>0||n)}(r,e));if(function(e){for(var t=0;t<e.length;t++)if(["'",'"'].indexOf(e.charAt(t))>-1)return!0;return!1}(r)){var o="";e.split("").forEach(function(e){["'",'"'].indexOf(e)>-1&&(e="\\"+e),o+=e}),e=o}return i?e:"'"+e+"'"}(n)),"string"===t&&(n=n.indexOf("'")>-1?'"'+n+'"':"'"+n+"'"),r=n;break}if("0123456789".indexOf(i)>-1){t="number",n=e,r=Number(e);break}if(e.length>0&&!me.isValue){t="key",(n=e).indexOf(" ")>-1&&(n="'"+n+"'"),r=n;break}}return{type:t,string:n,value:r,depth:me.brackets.length}});var ve="";me.tokens.forEach(function(e){ve+=e.string});var xe="";me.tokens.forEach(function(e,t){switch(e.string){case"[":case"{":var n=t<me.tokens.length-1-1?me.tokens[t+1]:"";-1==="}]".indexOf(n.string)?xe+=e.string+de(e.depth):xe+=e.string;break;case"]":case"}":var r=t>0?me.tokens[t-1]:"";-1==="[{".indexOf(r.string)?xe+=de(e.depth)+e.string:xe+=e.string;break;case":":xe+=e.string+" ";break;case",":xe+=e.string+de(e.depth);break;default:xe+=e.string}});var we=1,Oe="",_e=me.tokens.length-1;return me.tokens.forEach(function(e,t){var r=n(t,e,e.depth);switch(e.string){case"{":case"[":var i=t<me.tokens.length-1-1?me.tokens[t+1]:"";-1==="}]".indexOf(i.string)?Oe+=r+fe(e.depth):Oe+=r;break;case"}":case"]":var o=t>0?me.tokens[t-1]:"";-1==="[{".indexOf(o.string)?Oe+=fe(e.depth)+(_e===t?"<br>":"")+r:Oe+=r;break;case":":Oe+=r+" ";break;case",":Oe+=r+fe(e.depth);break;default:Oe+=r}}),we+=2,{tokens:me.tokens,noSpaces:ve,indented:xe,json:JSON.stringify(e),jsObject:e,markup:Oe,lines:we}}}}]),t}();e.exports=p},function(t,n){t.exports=e},function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var n={dark_vscode_tribute:{default:"#D4D4D4",background:"#1E1E1E",background_warning:"#1E1E1E",string:"#CE8453",number:"#B5CE9F",colon:"#49B8F7",keys:"#9CDCFE",keys_whiteSpace:"#AF74A5",primitive:"#6392C6"},light_mitsuketa_tribute:{default:"#D4D4D4",background:"#FCFDFD",background_warning:"#FEECEB",string:"#FA7921",number:"#70CE35",colon:"#49B8F7",keys:"#59A5D8",keys_whiteSpace:"#835FB6",primitive:"#386FA4"}};t.default=n}])});