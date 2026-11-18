(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const s of a.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function t(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(r){if(r.ep)return;r.ep=!0;const a=t(r);fetch(r.href,a)}})();const jd="modulepreload",Kd=function(n){return"/aerolab-flight-explorer/"+n},fc={},wl=function(e,t,i){let r=Promise.resolve();if(t&&t.length>0){let l=function(c){return Promise.all(c.map(u=>Promise.resolve(u).then(d=>({status:"fulfilled",value:d}),d=>({status:"rejected",reason:d}))))};document.getElementsByTagName("link");const s=document.querySelector("meta[property=csp-nonce]"),o=s?.nonce||s?.getAttribute("nonce");r=l(t.map(c=>{if(c=Kd(c),c in fc)return;fc[c]=!0;const u=c.endsWith(".css"),d=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${d}`))return;const f=document.createElement("link");if(f.rel=u?"stylesheet":jd,u||(f.as="script"),f.crossOrigin="",f.href=c,o&&f.setAttribute("nonce",o),document.head.appendChild(f),u)return new Promise((m,v)=>{f.addEventListener("load",m),f.addEventListener("error",()=>v(new Error(`Unable to preload CSS for ${c}`)))})}))}function a(s){const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=s,window.dispatchEvent(o),!o.defaultPrevented)throw s}return r.then(s=>{for(const o of s||[])o.status==="rejected"&&a(o.reason);return e().catch(a)})};class oe extends Error{constructor(e,t){var i="KaTeX parse error: "+e,r,a,s=t&&t.loc;if(s&&s.start<=s.end){var o=s.lexer.input;r=s.start,a=s.end,r===o.length?i+=" at end of input: ":i+=" at position "+(r+1)+": ";var l=o.slice(r,a).replace(/[^]/g,"$&̲"),c;r>15?c="…"+o.slice(r-15,r):c=o.slice(0,r);var u;a+15<o.length?u=o.slice(a,a+15)+"…":u=o.slice(a),i+=c+l+u}super(i),this.name="ParseError",this.position=void 0,this.length=void 0,this.rawMessage=void 0,Object.setPrototypeOf(this,oe.prototype),this.position=r,r!=null&&a!=null&&(this.length=a-r),this.rawMessage=e}}var Zd=/([A-Z])/g,Jd=n=>n.replace(Zd,"-$1").toLowerCase(),Qd={"&":"&amp;",">":"&gt;","<":"&lt;",'"':"&quot;","'":"&#x27;"},ef=/[&><"']/g,on=n=>String(n).replace(ef,e=>Qd[e]),Es=n=>n.type==="ordgroup"||n.type==="color"?n.body.length===1?Es(n.body[0]):n:n.type==="font"?Es(n.body):n,tf=new Set(["mathord","textord","atom"]),Ri=n=>tf.has(Es(n).type),nf=n=>{var e=/^[\x00-\x20]*([^\\/#?]*?)(:|&#0*58|&#x0*3a|&colon)/i.exec(n);return e?e[2]!==":"||!/^[a-zA-Z][a-zA-Z0-9+\-.]*$/.test(e[1])?null:e[1].toLowerCase():"_relative"},p0={displayMode:{type:"boolean",description:"Render math in display mode, which puts the math in display style (so \\int and \\sum are large, for example), and centers the math on the page on its own line.",cli:"-d, --display-mode"},output:{type:{enum:["htmlAndMathml","html","mathml"]},description:"Determines the markup language of the output.",cli:"-F, --format <type>"},leqno:{type:"boolean",description:"Render display math in leqno style (left-justified tags)."},fleqn:{type:"boolean",description:"Render display math flush left."},throwOnError:{type:"boolean",default:!0,cli:"-t, --no-throw-on-error",cliDescription:"Render errors (in the color given by --error-color) instead of throwing a ParseError exception when encountering an error."},errorColor:{type:"string",default:"#cc0000",cli:"-c, --error-color <color>",cliDescription:"A color string given in the format 'rgb' or 'rrggbb' (no #). This option determines the color of errors rendered by the -t option.",cliProcessor:n=>"#"+n},macros:{type:"object",cli:"-m, --macro <def>",cliDescription:"Define custom macro of the form '\\foo:expansion' (use multiple -m arguments for multiple macros).",cliDefault:[],cliProcessor:(n,e)=>(e.push(n),e)},minRuleThickness:{type:"number",description:"Specifies a minimum thickness, in ems, for fraction lines, `\\sqrt` top lines, `{array}` vertical lines, `\\hline`, `\\hdashline`, `\\underline`, `\\overline`, and the borders of `\\fbox`, `\\boxed`, and `\\fcolorbox`.",processor:n=>Math.max(0,n),cli:"--min-rule-thickness <size>",cliProcessor:parseFloat},colorIsTextColor:{type:"boolean",description:"Makes \\color behave like LaTeX's 2-argument \\textcolor, instead of LaTeX's one-argument \\color mode change.",cli:"-b, --color-is-text-color"},strict:{type:[{enum:["warn","ignore","error"]},"boolean","function"],description:"Turn on strict / LaTeX faithfulness mode, which throws an error if the input uses features that are not supported by LaTeX.",cli:"-S, --strict",cliDefault:!1},trust:{type:["boolean","function"],description:"Trust the input, enabling all HTML features such as \\url.",cli:"-T, --trust"},maxSize:{type:"number",default:1/0,description:"If non-zero, all user-specified sizes, e.g. in \\rule{500em}{500em}, will be capped to maxSize ems. Otherwise, elements and spaces can be arbitrarily large",processor:n=>Math.max(0,n),cli:"-s, --max-size <n>",cliProcessor:parseInt},maxExpand:{type:"number",default:1e3,description:"Limit the number of macro expansions to the specified number, to prevent e.g. infinite macro loops. If set to Infinity, the macro expander will try to fully expand as in LaTeX.",processor:n=>Math.max(0,n),cli:"-e, --max-expand <n>",cliProcessor:n=>n==="Infinity"?1/0:parseInt(n)},globalGroup:{type:"boolean",cli:!1}};function rf(n){if(typeof n!="string")return n.enum[0];switch(n){case"boolean":return!1;case"string":return"";case"number":return 0;case"object":return{};default:throw new Error("Unexpected schema type; settings must declare an explicit default.")}}function af(n){if(n.default!==void 0)return n.default;var e=Array.isArray(n.type)?n.type[0]:n.type;return rf(e)}function sf(n,e,t,i){var r=t[e];n[e]=r!==void 0?i.processor?i.processor(r):r:af(i)}class El{constructor(e){e===void 0&&(e={}),this.displayMode=void 0,this.output=void 0,this.leqno=void 0,this.fleqn=void 0,this.throwOnError=void 0,this.errorColor=void 0,this.macros=void 0,this.minRuleThickness=void 0,this.colorIsTextColor=void 0,this.strict=void 0,this.trust=void 0,this.maxSize=void 0,this.maxExpand=void 0,this.globalGroup=void 0,e=e||{};for(var t of Object.keys(p0)){var i=p0[t];i&&sf(this,t,e,i)}}reportNonstrict(e,t,i){var r=this.strict;if(typeof r=="function"&&(r=r(e,t,i)),!(!r||r==="ignore")){if(r===!0||r==="error")throw new oe("LaTeX-incompatible input and strict mode is set to 'error': "+(t+" ["+e+"]"),i);r==="warn"?typeof console<"u"&&console.warn("LaTeX-incompatible input and strict mode is set to 'warn': "+(t+" ["+e+"]")):typeof console<"u"&&console.warn("LaTeX-incompatible input and strict mode is set to "+("unrecognized '"+r+"': "+t+" ["+e+"]"))}}useStrictBehavior(e,t,i){var r=this.strict;if(typeof r=="function")try{r=r(e,t,i)}catch{r="error"}return!r||r==="ignore"?!1:r===!0||r==="error"?!0:r==="warn"?(typeof console<"u"&&console.warn("LaTeX-incompatible input and strict mode is set to 'warn': "+(t+" ["+e+"]")),!1):(typeof console<"u"&&console.warn("LaTeX-incompatible input and strict mode is set to "+("unrecognized '"+r+"': "+t+" ["+e+"]")),!1)}isTrusted(e){if("url"in e&&e.url&&!e.protocol){var t=nf(e.url);if(t==null)return!1;e.protocol=t}var i=typeof this.trust=="function"?this.trust(e):this.trust;return!!i}}class Li{constructor(e,t,i){this.id=void 0,this.size=void 0,this.cramped=void 0,this.id=e,this.size=t,this.cramped=i}sup(){return ti[of[this.id]]}sub(){return ti[lf[this.id]]}fracNum(){return ti[cf[this.id]]}fracDen(){return ti[uf[this.id]]}cramp(){return ti[hf[this.id]]}text(){return ti[df[this.id]]}isTight(){return this.size>=2}}var Tl=0,Is=1,Hr=2,Si=3,Aa=4,kn=5,Yr=6,fn=7,ti=[new Li(Tl,0,!1),new Li(Is,0,!0),new Li(Hr,1,!1),new Li(Si,1,!0),new Li(Aa,2,!1),new Li(kn,2,!0),new Li(Yr,3,!1),new Li(fn,3,!0)],of=[Aa,kn,Aa,kn,Yr,fn,Yr,fn],lf=[kn,kn,kn,kn,fn,fn,fn,fn],cf=[Hr,Si,Aa,kn,Yr,fn,Yr,fn],uf=[Si,Si,kn,kn,fn,fn,fn,fn],hf=[Is,Is,Si,Si,kn,kn,fn,fn],df=[Tl,Is,Hr,Si,Hr,Si,Hr,Si],Ke={DISPLAY:ti[Tl],TEXT:ti[Hr],SCRIPT:ti[Aa],SCRIPTSCRIPT:ti[Yr]},m0=[{name:"latin",blocks:[[256,591],[768,879]]},{name:"cyrillic",blocks:[[1024,1279]]},{name:"armenian",blocks:[[1328,1423]]},{name:"brahmic",blocks:[[2304,4255]]},{name:"georgian",blocks:[[4256,4351]]},{name:"cjk",blocks:[[12288,12543],[19968,40879],[65280,65376]]},{name:"hangul",blocks:[[44032,55215]]}];function ff(n){for(var e=0;e<m0.length;e++)for(var t=m0[e],i=0;i<t.blocks.length;i++){var r=t.blocks[i];if(n>=r[0]&&n<=r[1])return t.name}return null}var Ts=[];m0.forEach(n=>n.blocks.forEach(e=>Ts.push(...e)));function uh(n){for(var e=0;e<Ts.length;e+=2)if(n>=Ts[e]&&n<=Ts[e+1])return!0;return!1}var $t=n=>n+" "+n,Sr=80,pf=function(e,t){return"M95,"+(622+e+t)+`
c-2.7,0,-7.17,-2.7,-13.5,-8c-5.8,-5.3,-9.5,-10,-9.5,-14
c0,-2,0.3,-3.3,1,-4c1.3,-2.7,23.83,-20.7,67.5,-54
c44.2,-33.3,65.8,-50.3,66.5,-51c1.3,-1.3,3,-2,5,-2c4.7,0,8.7,3.3,12,10
s173,378,173,378c0.7,0,35.3,-71,104,-213c68.7,-142,137.5,-285,206.5,-429
c69,-144,104.5,-217.7,106.5,-221
l`+e/2.075+" -"+e+`
c5.3,-9.3,12,-14,20,-14
H400000v`+(40+e)+`H845.2724
s-225.272,467,-225.272,467s-235,486,-235,486c-2.7,4.7,-9,7,-19,7
c-6,0,-10,-1,-12,-3s-194,-422,-194,-422s-65,47,-65,47z
M`+(834+e)+" "+t+"h400000v"+(40+e)+"h-400000z"},mf=function(e,t){return"M263,"+(601+e+t)+`c0.7,0,18,39.7,52,119
c34,79.3,68.167,158.7,102.5,238c34.3,79.3,51.8,119.3,52.5,120
c340,-704.7,510.7,-1060.3,512,-1067
l`+e/2.084+" -"+e+`
c4.7,-7.3,11,-11,19,-11
H40000v`+(40+e)+`H1012.3
s-271.3,567,-271.3,567c-38.7,80.7,-84,175,-136,283c-52,108,-89.167,185.3,-111.5,232
c-22.3,46.7,-33.8,70.3,-34.5,71c-4.7,4.7,-12.3,7,-23,7s-12,-1,-12,-1
s-109,-253,-109,-253c-72.7,-168,-109.3,-252,-110,-252c-10.7,8,-22,16.7,-34,26
c-22,17.3,-33.3,26,-34,26s-26,-26,-26,-26s76,-59,76,-59s76,-60,76,-60z
M`+(1001+e)+" "+t+"h400000v"+(40+e)+"h-400000z"},xf=function(e,t){return"M983 "+(10+e+t)+`
l`+e/3.13+" -"+e+`
c4,-6.7,10,-10,18,-10 H400000v`+(40+e)+`
H1013.1s-83.4,268,-264.1,840c-180.7,572,-277,876.3,-289,913c-4.7,4.7,-12.7,7,-24,7
s-12,0,-12,0c-1.3,-3.3,-3.7,-11.7,-7,-25c-35.3,-125.3,-106.7,-373.3,-214,-744
c-10,12,-21,25,-33,39s-32,39,-32,39c-6,-5.3,-15,-14,-27,-26s25,-30,25,-30
c26.7,-32.7,52,-63,76,-91s52,-60,52,-60s208,722,208,722
c56,-175.3,126.3,-397.3,211,-666c84.7,-268.7,153.8,-488.2,207.5,-658.5
c53.7,-170.3,84.5,-266.8,92.5,-289.5z
M`+(1001+e)+" "+t+"h400000v"+(40+e)+"h-400000z"},gf=function(e,t){return"M424,"+(2398+e+t)+`
c-1.3,-0.7,-38.5,-172,-111.5,-514c-73,-342,-109.8,-513.3,-110.5,-514
c0,-2,-10.7,14.3,-32,49c-4.7,7.3,-9.8,15.7,-15.5,25c-5.7,9.3,-9.8,16,-12.5,20
s-5,7,-5,7c-4,-3.3,-8.3,-7.7,-13,-13s-13,-13,-13,-13s76,-122,76,-122s77,-121,77,-121
s209,968,209,968c0,-2,84.7,-361.7,254,-1079c169.3,-717.3,254.7,-1077.7,256,-1081
l`+e/4.223+" -"+e+`c4,-6.7,10,-10,18,-10 H400000
v`+(40+e)+`H1014.6
s-87.3,378.7,-272.6,1166c-185.3,787.3,-279.3,1182.3,-282,1185
c-2,6,-10,9,-24,9
c-8,0,-12,-0.7,-12,-2z M`+(1001+e)+" "+t+`
h400000v`+(40+e)+"h-400000z"},vf=function(e,t){return"M473,"+(2713+e+t)+`
c339.3,-1799.3,509.3,-2700,510,-2702 l`+e/5.298+" -"+e+`
c3.3,-7.3,9.3,-11,18,-11 H400000v`+(40+e)+`H1017.7
s-90.5,478,-276.2,1466c-185.7,988,-279.5,1483,-281.5,1485c-2,6,-10,9,-24,9
c-8,0,-12,-0.7,-12,-2c0,-1.3,-5.3,-32,-16,-92c-50.7,-293.3,-119.7,-693.3,-207,-1200
c0,-1.3,-5.3,8.7,-16,30c-10.7,21.3,-21.3,42.7,-32,64s-16,33,-16,33s-26,-26,-26,-26
s76,-153,76,-153s77,-151,77,-151c0.7,0.7,35.7,202,105,604c67.3,400.7,102,602.7,104,
606zM`+(1001+e)+" "+t+"h400000v"+(40+e)+"H1017.7z"},bf=function(e){var t=e/2;return"M400000 "+e+" H0 L"+t+" 0 l65 45 L145 "+(e-80)+" H400000z"},_f=function(e,t,i){var r=i-54-t-e;return"M702 "+(e+t)+"H400000"+(40+e)+`
H742v`+r+`l-4 4-4 4c-.667.7 -2 1.5-4 2.5s-4.167 1.833-6.5 2.5-5.5 1-9.5 1
h-12l-28-84c-16.667-52-96.667 -294.333-240-727l-212 -643 -85 170
c-4-3.333-8.333-7.667-13 -13l-13-13l77-155 77-156c66 199.333 139 419.667
219 661 l218 661zM702 `+t+"H400000v"+(40+e)+"H742z"},yf=function(e,t,i){t=1e3*t;var r="";switch(e){case"sqrtMain":r=pf(t,Sr);break;case"sqrtSize1":r=mf(t,Sr);break;case"sqrtSize2":r=xf(t,Sr);break;case"sqrtSize3":r=gf(t,Sr);break;case"sqrtSize4":r=vf(t,Sr);break;case"sqrtTall":r=_f(t,Sr,i)}return r},Mf=function(e,t){switch(e){case"⎜":return $t("M291 0 H417 V"+t+" H291z");case"∣":return $t("M145 0 H188 V"+t+" H145z");case"∥":return $t("M145 0 H188 V"+t+" H145z")+$t("M367 0 H410 V"+t+" H367z");case"⎟":return $t("M457 0 H583 V"+t+" H457z");case"⎢":return $t("M319 0 H403 V"+t+" H319z");case"⎥":return $t("M263 0 H347 V"+t+" H263z");case"⎪":return $t("M384 0 H504 V"+t+" H384z");case"⏐":return $t("M312 0 H355 V"+t+" H312z");case"‖":return $t("M257 0 H300 V"+t+" H257z")+$t("M478 0 H521 V"+t+" H478z");default:return""}},pc={doubleleftarrow:`M262 157
l10-10c34-36 62.7-77 86-123 3.3-8 5-13.3 5-16 0-5.3-6.7-8-20-8-7.3
 0-12.2.5-14.5 1.5-2.3 1-4.8 4.5-7.5 10.5-49.3 97.3-121.7 169.3-217 216-28
 14-57.3 25-88 33-6.7 2-11 3.8-13 5.5-2 1.7-3 4.2-3 7.5s1 5.8 3 7.5
c2 1.7 6.3 3.5 13 5.5 68 17.3 128.2 47.8 180.5 91.5 52.3 43.7 93.8 96.2 124.5
 157.5 9.3 8 15.3 12.3 18 13h6c12-.7 18-4 18-10 0-2-1.7-7-5-15-23.3-46-52-87
-86-123l-10-10h399738v-40H218c328 0 0 0 0 0l-10-8c-26.7-20-65.7-43-117-69 2.7
-2 6-3.7 10-5 36.7-16 72.3-37.3 107-64l10-8h399782v-40z
m8 0v40h399730v-40zm0 194v40h399730v-40z`,doublerightarrow:`M399738 392l
-10 10c-34 36-62.7 77-86 123-3.3 8-5 13.3-5 16 0 5.3 6.7 8 20 8 7.3 0 12.2-.5
 14.5-1.5 2.3-1 4.8-4.5 7.5-10.5 49.3-97.3 121.7-169.3 217-216 28-14 57.3-25 88
-33 6.7-2 11-3.8 13-5.5 2-1.7 3-4.2 3-7.5s-1-5.8-3-7.5c-2-1.7-6.3-3.5-13-5.5-68
-17.3-128.2-47.8-180.5-91.5-52.3-43.7-93.8-96.2-124.5-157.5-9.3-8-15.3-12.3-18
-13h-6c-12 .7-18 4-18 10 0 2 1.7 7 5 15 23.3 46 52 87 86 123l10 10H0v40h399782
c-328 0 0 0 0 0l10 8c26.7 20 65.7 43 117 69-2.7 2-6 3.7-10 5-36.7 16-72.3 37.3
-107 64l-10 8H0v40zM0 157v40h399730v-40zm0 194v40h399730v-40z`,leftarrow:`M400000 241H110l3-3c68.7-52.7 113.7-120
 135-202 4-14.7 6-23 6-25 0-7.3-7-11-21-11-8 0-13.2.8-15.5 2.5-2.3 1.7-4.2 5.8
-5.5 12.5-1.3 4.7-2.7 10.3-4 17-12 48.7-34.8 92-68.5 130S65.3 228.3 18 247
c-10 4-16 7.7-18 11 0 8.7 6 14.3 18 17 47.3 18.7 87.8 47 121.5 85S196 441.3 208
 490c.7 2 1.3 5 2 9s1.2 6.7 1.5 8c.3 1.3 1 3.3 2 6s2.2 4.5 3.5 5.5c1.3 1 3.3
 1.8 6 2.5s6 1 10 1c14 0 21-3.7 21-11 0-2-2-10.3-6-25-20-79.3-65-146.7-135-202
 l-3-3h399890zM100 241v40h399900v-40z`,leftbrace:`M6 548l-6-6v-35l6-11c56-104 135.3-181.3 238-232 57.3-28.7 117
-45 179-50h399577v120H403c-43.3 7-81 15-113 26-100.7 33-179.7 91-237 174-2.7
 5-6 9-10 13-.7 1-7.3 1-20 1H6z`,leftbraceunder:`M0 6l6-6h17c12.688 0 19.313.3 20 1 4 4 7.313 8.3 10 13
 35.313 51.3 80.813 93.8 136.5 127.5 55.688 33.7 117.188 55.8 184.5 66.5.688
 0 2 .3 4 1 18.688 2.7 76 4.3 172 5h399450v120H429l-6-1c-124.688-8-235-61.7
-331-161C60.687 138.7 32.312 99.3 7 54L0 41V6z`,leftgroup:`M400000 80
H435C64 80 168.3 229.4 21 260c-5.9 1.2-18 0-18 0-2 0-3-1-3-3v-38C76 61 257 0
 435 0h399565z`,leftgroupunder:`M400000 262
H435C64 262 168.3 112.6 21 82c-5.9-1.2-18 0-18 0-2 0-3 1-3 3v38c76 158 257 219
 435 219h399565z`,leftharpoon:`M0 267c.7 5.3 3 10 7 14h399993v-40H93c3.3
-3.3 10.2-9.5 20.5-18.5s17.8-15.8 22.5-20.5c50.7-52 88-110.3 112-175 4-11.3 5
-18.3 3-21-1.3-4-7.3-6-18-6-8 0-13 .7-15 2s-4.7 6.7-8 16c-42 98.7-107.3 174.7
-196 228-6.7 4.7-10.7 8-12 10-1.3 2-2 5.7-2 11zm100-26v40h399900v-40z`,leftharpoonplus:`M0 267c.7 5.3 3 10 7 14h399993v-40H93c3.3-3.3 10.2-9.5
 20.5-18.5s17.8-15.8 22.5-20.5c50.7-52 88-110.3 112-175 4-11.3 5-18.3 3-21-1.3
-4-7.3-6-18-6-8 0-13 .7-15 2s-4.7 6.7-8 16c-42 98.7-107.3 174.7-196 228-6.7 4.7
-10.7 8-12 10-1.3 2-2 5.7-2 11zm100-26v40h399900v-40zM0 435v40h400000v-40z
m0 0v40h400000v-40z`,leftharpoondown:`M7 241c-4 4-6.333 8.667-7 14 0 5.333.667 9 2 11s5.333
 5.333 12 10c90.667 54 156 130 196 228 3.333 10.667 6.333 16.333 9 17 2 .667 5
 1 9 1h5c10.667 0 16.667-2 18-6 2-2.667 1-9.667-3-21-32-87.333-82.667-157.667
-152-211l-3-3h399907v-40zM93 281 H400000 v-40L7 241z`,leftharpoondownplus:`M7 435c-4 4-6.3 8.7-7 14 0 5.3.7 9 2 11s5.3 5.3 12
 10c90.7 54 156 130 196 228 3.3 10.7 6.3 16.3 9 17 2 .7 5 1 9 1h5c10.7 0 16.7
-2 18-6 2-2.7 1-9.7-3-21-32-87.3-82.7-157.7-152-211l-3-3h399907v-40H7zm93 0
v40h399900v-40zM0 241v40h399900v-40zm0 0v40h399900v-40z`,lefthook:`M400000 281 H103s-33-11.2-61-33.5S0 197.3 0 164s14.2-61.2 42.5
-83.5C70.8 58.2 104 47 142 47 c16.7 0 25 6.7 25 20 0 12-8.7 18.7-26 20-40 3.3
-68.7 15.7-86 37-10 12-15 25.3-15 40 0 22.7 9.8 40.7 29.5 54 19.7 13.3 43.5 21
 71.5 23h399859zM103 281v-40h399897v40z`,leftlinesegment:$t("M40 281 V428 H0 V94 H40 V241 H400000 v40z"),leftbracketunder:$t("M0 0 h120 V290 H399995 v120 H0z"),leftbracketover:$t("M0 440 h120 V150 H399995 v-120 H0z"),leftmapsto:$t("M40 281 V448H0V74H40V241H400000v40z"),leftToFrom:`M0 147h400000v40H0zm0 214c68 40 115.7 95.7 143 167h22c15.3 0 23
-.3 23-1 0-1.3-5.3-13.7-16-37-18-35.3-41.3-69-70-101l-7-8h399905v-40H95l7-8
c28.7-32 52-65.7 70-101 10.7-23.3 16-35.7 16-37 0-.7-7.7-1-23-1h-22C115.7 265.3
 68 321 0 361zm0-174v-40h399900v40zm100 154v40h399900v-40z`,longequal:$t("M0 50 h400000 v40H0z m0 194h40000v40H0z"),midbrace:`M200428 334
c-100.7-8.3-195.3-44-280-108-55.3-42-101.7-93-139-153l-9-14c-2.7 4-5.7 8.7-9 14
-53.3 86.7-123.7 153-211 199-66.7 36-137.3 56.3-212 62H0V214h199568c178.3-11.7
 311.7-78.3 403-201 6-8 9.7-12 11-12 .7-.7 6.7-1 18-1s17.3.3 18 1c1.3 0 5 4 11
 12 44.7 59.3 101.3 106.3 170 141s145.3 54.3 229 60h199572v120z`,midbraceunder:`M199572 214
c100.7 8.3 195.3 44 280 108 55.3 42 101.7 93 139 153l9 14c2.7-4 5.7-8.7 9-14
 53.3-86.7 123.7-153 211-199 66.7-36 137.3-56.3 212-62h199568v120H200432c-178.3
 11.7-311.7 78.3-403 201-6 8-9.7 12-11 12-.7.7-6.7 1-18 1s-17.3-.3-18-1c-1.3 0
-5-4-11-12-44.7-59.3-101.3-106.3-170-141s-145.3-54.3-229-60H0V214z`,oiintSize1:`M512.6 71.6c272.6 0 320.3 106.8 320.3 178.2 0 70.8-47.7 177.6
-320.3 177.6S193.1 320.6 193.1 249.8c0-71.4 46.9-178.2 319.5-178.2z
m368.1 178.2c0-86.4-60.9-215.4-368.1-215.4-306.4 0-367.3 129-367.3 215.4 0 85.8
60.9 214.8 367.3 214.8 307.2 0 368.1-129 368.1-214.8z`,oiintSize2:`M757.8 100.1c384.7 0 451.1 137.6 451.1 230 0 91.3-66.4 228.8
-451.1 228.8-386.3 0-452.7-137.5-452.7-228.8 0-92.4 66.4-230 452.7-230z
m502.4 230c0-111.2-82.4-277.2-502.4-277.2s-504 166-504 277.2
c0 110 84 276 504 276s502.4-166 502.4-276z`,oiiintSize1:`M681.4 71.6c408.9 0 480.5 106.8 480.5 178.2 0 70.8-71.6 177.6
-480.5 177.6S202.1 320.6 202.1 249.8c0-71.4 70.5-178.2 479.3-178.2z
m525.8 178.2c0-86.4-86.8-215.4-525.7-215.4-437.9 0-524.7 129-524.7 215.4 0
85.8 86.8 214.8 524.7 214.8 438.9 0 525.7-129 525.7-214.8z`,oiiintSize2:`M1021.2 53c603.6 0 707.8 165.8 707.8 277.2 0 110-104.2 275.8
-707.8 275.8-606 0-710.2-165.8-710.2-275.8C311 218.8 415.2 53 1021.2 53z
m770.4 277.1c0-131.2-126.4-327.6-770.5-327.6S248.4 198.9 248.4 330.1
c0 130 128.8 326.4 772.7 326.4s770.5-196.4 770.5-326.4z`,rightarrow:`M0 241v40h399891c-47.3 35.3-84 78-110 128
-16.7 32-27.7 63.7-33 95 0 1.3-.2 2.7-.5 4-.3 1.3-.5 2.3-.5 3 0 7.3 6.7 11 20
 11 8 0 13.2-.8 15.5-2.5 2.3-1.7 4.2-5.5 5.5-11.5 2-13.3 5.7-27 11-41 14.7-44.7
 39-84.5 73-119.5s73.7-60.2 119-75.5c6-2 9-5.7 9-11s-3-9-9-11c-45.3-15.3-85
-40.5-119-75.5s-58.3-74.8-73-119.5c-4.7-14-8.3-27.3-11-40-1.3-6.7-3.2-10.8-5.5
-12.5-2.3-1.7-7.5-2.5-15.5-2.5-14 0-21 3.7-21 11 0 2 2 10.3 6 25 20.7 83.3 67
 151.7 139 205zm0 0v40h399900v-40z`,rightbrace:`M400000 542l
-6 6h-17c-12.7 0-19.3-.3-20-1-4-4-7.3-8.3-10-13-35.3-51.3-80.8-93.8-136.5-127.5
s-117.2-55.8-184.5-66.5c-.7 0-2-.3-4-1-18.7-2.7-76-4.3-172-5H0V214h399571l6 1
c124.7 8 235 61.7 331 161 31.3 33.3 59.7 72.7 85 118l7 13v35z`,rightbraceunder:`M399994 0l6 6v35l-6 11c-56 104-135.3 181.3-238 232-57.3
 28.7-117 45-179 50H-300V214h399897c43.3-7 81-15 113-26 100.7-33 179.7-91 237
-174 2.7-5 6-9 10-13 .7-1 7.3-1 20-1h17z`,rightgroup:`M0 80h399565c371 0 266.7 149.4 414 180 5.9 1.2 18 0 18 0 2 0
 3-1 3-3v-38c-76-158-257-219-435-219H0z`,rightgroupunder:`M0 262h399565c371 0 266.7-149.4 414-180 5.9-1.2 18 0 18
 0 2 0 3 1 3 3v38c-76 158-257 219-435 219H0z`,rightharpoon:`M0 241v40h399993c4.7-4.7 7-9.3 7-14 0-9.3
-3.7-15.3-11-18-92.7-56.7-159-133.7-199-231-3.3-9.3-6-14.7-8-16-2-1.3-7-2-15-2
-10.7 0-16.7 2-18 6-2 2.7-1 9.7 3 21 15.3 42 36.7 81.8 64 119.5 27.3 37.7 58
 69.2 92 94.5zm0 0v40h399900v-40z`,rightharpoonplus:`M0 241v40h399993c4.7-4.7 7-9.3 7-14 0-9.3-3.7-15.3-11
-18-92.7-56.7-159-133.7-199-231-3.3-9.3-6-14.7-8-16-2-1.3-7-2-15-2-10.7 0-16.7
 2-18 6-2 2.7-1 9.7 3 21 15.3 42 36.7 81.8 64 119.5 27.3 37.7 58 69.2 92 94.5z
m0 0v40h399900v-40z m100 194v40h399900v-40zm0 0v40h399900v-40z`,rightharpoondown:`M399747 511c0 7.3 6.7 11 20 11 8 0 13-.8 15-2.5s4.7-6.8
 8-15.5c40-94 99.3-166.3 178-217 13.3-8 20.3-12.3 21-13 5.3-3.3 8.5-5.8 9.5
-7.5 1-1.7 1.5-5.2 1.5-10.5s-2.3-10.3-7-15H0v40h399908c-34 25.3-64.7 57-92 95
-27.3 38-48.7 77.7-64 119-3.3 8.7-5 14-5 16zM0 241v40h399900v-40z`,rightharpoondownplus:`M399747 705c0 7.3 6.7 11 20 11 8 0 13-.8
 15-2.5s4.7-6.8 8-15.5c40-94 99.3-166.3 178-217 13.3-8 20.3-12.3 21-13 5.3-3.3
 8.5-5.8 9.5-7.5 1-1.7 1.5-5.2 1.5-10.5s-2.3-10.3-7-15H0v40h399908c-34 25.3
-64.7 57-92 95-27.3 38-48.7 77.7-64 119-3.3 8.7-5 14-5 16zM0 435v40h399900v-40z
m0-194v40h400000v-40zm0 0v40h400000v-40z`,righthook:`M399859 241c-764 0 0 0 0 0 40-3.3 68.7-15.7 86-37 10-12 15-25.3
 15-40 0-22.7-9.8-40.7-29.5-54-19.7-13.3-43.5-21-71.5-23-17.3-1.3-26-8-26-20 0
-13.3 8.7-20 26-20 38 0 71 11.2 99 33.5 0 0 7 5.6 21 16.7 14 11.2 21 33.5 21
 66.8s-14 61.2-42 83.5c-28 22.3-61 33.5-99 33.5L0 241z M0 281v-40h399859v40z`,rightlinesegment:$t("M399960 241 V94 h40 V428 h-40 V281 H0 v-40z"),rightbracketunder:$t("M399995 0 h-120 V290 H0 v120 H400000z"),rightbracketover:$t("M399995 440 h-120 V150 H0 v-120 H399995z"),rightToFrom:`M400000 167c-70.7-42-118-97.7-142-167h-23c-15.3 0-23 .3-23
 1 0 1.3 5.3 13.7 16 37 18 35.3 41.3 69 70 101l7 8H0v40h399905l-7 8c-28.7 32
-52 65.7-70 101-10.7 23.3-16 35.7-16 37 0 .7 7.7 1 23 1h23c24-69.3 71.3-125 142
-167z M100 147v40h399900v-40zM0 341v40h399900v-40z`,twoheadleftarrow:`M0 167c68 40
 115.7 95.7 143 167h22c15.3 0 23-.3 23-1 0-1.3-5.3-13.7-16-37-18-35.3-41.3-69
-70-101l-7-8h125l9 7c50.7 39.3 85 86 103 140h46c0-4.7-6.3-18.7-19-42-18-35.3
-40-67.3-66-96l-9-9h399716v-40H284l9-9c26-28.7 48-60.7 66-96 12.7-23.333 19
-37.333 19-42h-46c-18 54-52.3 100.7-103 140l-9 7H95l7-8c28.7-32 52-65.7 70-101
 10.7-23.333 16-35.7 16-37 0-.7-7.7-1-23-1h-22C115.7 71.3 68 127 0 167z`,twoheadrightarrow:`M400000 167
c-68-40-115.7-95.7-143-167h-22c-15.3 0-23 .3-23 1 0 1.3 5.3 13.7 16 37 18 35.3
 41.3 69 70 101l7 8h-125l-9-7c-50.7-39.3-85-86-103-140h-46c0 4.7 6.3 18.7 19 42
 18 35.3 40 67.3 66 96l9 9H0v40h399716l-9 9c-26 28.7-48 60.7-66 96-12.7 23.333
-19 37.333-19 42h46c18-54 52.3-100.7 103-140l9-7h125l-7 8c-28.7 32-52 65.7-70
 101-10.7 23.333-16 35.7-16 37 0 .7 7.7 1 23 1h22c27.3-71.3 75-127 143-167z`,tilde1:`M200 55.538c-77 0-168 73.953-177 73.953-3 0-7
-2.175-9-5.437L2 97c-1-2-2-4-2-6 0-4 2-7 5-9l20-12C116 12 171 0 207 0c86 0
 114 68 191 68 78 0 168-68 177-68 4 0 7 2 9 5l12 19c1 2.175 2 4.35 2 6.525 0
 4.35-2 7.613-5 9.788l-19 13.05c-92 63.077-116.937 75.308-183 76.128
-68.267.847-113-73.952-191-73.952z`,tilde2:`M344 55.266c-142 0-300.638 81.316-311.5 86.418
-8.01 3.762-22.5 10.91-23.5 5.562L1 120c-1-2-1-3-1-4 0-5 3-9 8-10l18.4-9C160.9
 31.9 283 0 358 0c148 0 188 122 331 122s314-97 326-97c4 0 8 2 10 7l7 21.114
c1 2.14 1 3.21 1 4.28 0 5.347-3 9.626-7 10.696l-22.3 12.622C852.6 158.372 751
 181.476 676 181.476c-149 0-189-126.21-332-126.21z`,tilde3:`M786 59C457 59 32 175.242 13 175.242c-6 0-10-3.457
-11-10.37L.15 138c-1-7 3-12 10-13l19.2-6.4C378.4 40.7 634.3 0 804.3 0c337 0
 411.8 157 746.8 157 328 0 754-112 773-112 5 0 10 3 11 9l1 14.075c1 8.066-.697
 16.595-6.697 17.492l-21.052 7.31c-367.9 98.146-609.15 122.696-778.15 122.696
 -338 0-409-156.573-744-156.573z`,tilde4:`M786 58C457 58 32 177.487 13 177.487c-6 0-10-3.345
-11-10.035L.15 143c-1-7 3-12 10-13l22-6.7C381.2 35 637.15 0 807.15 0c337 0 409
 177 744 177 328 0 754-127 773-127 5 0 10 3 11 9l1 14.794c1 7.805-3 13.38-9
 14.495l-20.7 5.574c-366.85 99.79-607.3 139.372-776.3 139.372-338 0-409
 -175.236-744-175.236z`,vec:`M377 20c0-5.333 1.833-10 5.5-14S391 0 397 0c4.667 0 8.667 1.667 12 5
3.333 2.667 6.667 9 10 19 6.667 24.667 20.333 43.667 41 57 7.333 4.667 11
10.667 11 18 0 6-1 10-3 12s-6.667 5-14 9c-28.667 14.667-53.667 35.667-75 63
-1.333 1.333-3.167 3.5-5.5 6.5s-4 4.833-5 5.5c-1 .667-2.5 1.333-4.5 2s-4.333 1
-7 1c-4.667 0-9.167-1.833-13.5-5.5S337 184 337 178c0-12.667 15.667-32.333 47-59
H213l-171-1c-8.667-6-13-12.333-13-19 0-4.667 4.333-11.333 13-20h359
c-16-25.333-24-45-24-59z`,widehat1:`M529 0h5l519 115c5 1 9 5 9 10 0 1-1 2-1 3l-4 22
c-1 5-5 9-11 9h-2L532 67 19 159h-2c-5 0-9-4-11-9l-5-22c-1-6 2-12 8-13z`,widehat2:`M1181 0h2l1171 176c6 0 10 5 10 11l-2 23c-1 6-5 10
-11 10h-1L1182 67 15 220h-1c-6 0-10-4-11-10l-2-23c-1-6 4-11 10-11z`,widehat3:`M1181 0h2l1171 236c6 0 10 5 10 11l-2 23c-1 6-5 10
-11 10h-1L1182 67 15 280h-1c-6 0-10-4-11-10l-2-23c-1-6 4-11 10-11z`,widehat4:`M1181 0h2l1171 296c6 0 10 5 10 11l-2 23c-1 6-5 10
-11 10h-1L1182 67 15 340h-1c-6 0-10-4-11-10l-2-23c-1-6 4-11 10-11z`,widecheck1:`M529,159h5l519,-115c5,-1,9,-5,9,-10c0,-1,-1,-2,-1,-3l-4,-22c-1,
-5,-5,-9,-11,-9h-2l-512,92l-513,-92h-2c-5,0,-9,4,-11,9l-5,22c-1,6,2,12,8,13z`,widecheck2:`M1181,220h2l1171,-176c6,0,10,-5,10,-11l-2,-23c-1,-6,-5,-10,
-11,-10h-1l-1168,153l-1167,-153h-1c-6,0,-10,4,-11,10l-2,23c-1,6,4,11,10,11z`,widecheck3:`M1181,280h2l1171,-236c6,0,10,-5,10,-11l-2,-23c-1,-6,-5,-10,
-11,-10h-1l-1168,213l-1167,-213h-1c-6,0,-10,4,-11,10l-2,23c-1,6,4,11,10,11z`,widecheck4:`M1181,340h2l1171,-296c6,0,10,-5,10,-11l-2,-23c-1,-6,-5,-10,
-11,-10h-1l-1168,273l-1167,-273h-1c-6,0,-10,4,-11,10l-2,23c-1,6,4,11,10,11z`,baraboveleftarrow:`M400000 620h-399890l3 -3c68.7 -52.7 113.7 -120 135 -202
c4 -14.7 6 -23 6 -25c0 -7.3 -7 -11 -21 -11c-8 0 -13.2 0.8 -15.5 2.5
c-2.3 1.7 -4.2 5.8 -5.5 12.5c-1.3 4.7 -2.7 10.3 -4 17c-12 48.7 -34.8 92 -68.5 130
s-74.2 66.3 -121.5 85c-10 4 -16 7.7 -18 11c0 8.7 6 14.3 18 17c47.3 18.7 87.8 47
121.5 85s56.5 81.3 68.5 130c0.7 2 1.3 5 2 9s1.2 6.7 1.5 8c0.3 1.3 1 3.3 2 6
s2.2 4.5 3.5 5.5c1.3 1 3.3 1.8 6 2.5s6 1 10 1c14 0 21 -3.7 21 -11
c0 -2 -2 -10.3 -6 -25c-20 -79.3 -65 -146.7 -135 -202l-3 -3h399890z
M100 620v40h399900v-40z M0 241v40h399900v-40zM0 241v40h399900v-40z`,rightarrowabovebar:`M0 241v40h399891c-47.3 35.3-84 78-110 128-16.7 32
-27.7 63.7-33 95 0 1.3-.2 2.7-.5 4-.3 1.3-.5 2.3-.5 3 0 7.3 6.7 11 20 11 8 0
13.2-.8 15.5-2.5 2.3-1.7 4.2-5.5 5.5-11.5 2-13.3 5.7-27 11-41 14.7-44.7 39
-84.5 73-119.5s73.7-60.2 119-75.5c6-2 9-5.7 9-11s-3-9-9-11c-45.3-15.3-85-40.5
-119-75.5s-58.3-74.8-73-119.5c-4.7-14-8.3-27.3-11-40-1.3-6.7-3.2-10.8-5.5
-12.5-2.3-1.7-7.5-2.5-15.5-2.5-14 0-21 3.7-21 11 0 2 2 10.3 6 25 20.7 83.3 67
151.7 139 205zm96 379h399894v40H0zm0 0h399904v40H0z`,baraboveshortleftharpoon:`M507,435c-4,4,-6.3,8.7,-7,14c0,5.3,0.7,9,2,11
c1.3,2,5.3,5.3,12,10c90.7,54,156,130,196,228c3.3,10.7,6.3,16.3,9,17
c2,0.7,5,1,9,1c0,0,5,0,5,0c10.7,0,16.7,-2,18,-6c2,-2.7,1,-9.7,-3,-21
c-32,-87.3,-82.7,-157.7,-152,-211c0,0,-3,-3,-3,-3l399351,0l0,-40
c-398570,0,-399437,0,-399437,0z M593 435 v40 H399500 v-40z
M0 281 v-40 H399908 v40z M0 281 v-40 H399908 v40z`,rightharpoonaboveshortbar:`M0,241 l0,40c399126,0,399993,0,399993,0
c4.7,-4.7,7,-9.3,7,-14c0,-9.3,-3.7,-15.3,-11,-18c-92.7,-56.7,-159,-133.7,-199,
-231c-3.3,-9.3,-6,-14.7,-8,-16c-2,-1.3,-7,-2,-15,-2c-10.7,0,-16.7,2,-18,6
c-2,2.7,-1,9.7,3,21c15.3,42,36.7,81.8,64,119.5c27.3,37.7,58,69.2,92,94.5z
M0 241 v40 H399908 v-40z M0 475 v-40 H399500 v40z M0 475 v-40 H399500 v40z`,shortbaraboveleftharpoon:`M7,435c-4,4,-6.3,8.7,-7,14c0,5.3,0.7,9,2,11
c1.3,2,5.3,5.3,12,10c90.7,54,156,130,196,228c3.3,10.7,6.3,16.3,9,17c2,0.7,5,1,9,
1c0,0,5,0,5,0c10.7,0,16.7,-2,18,-6c2,-2.7,1,-9.7,-3,-21c-32,-87.3,-82.7,-157.7,
-152,-211c0,0,-3,-3,-3,-3l399907,0l0,-40c-399126,0,-399993,0,-399993,0z
M93 435 v40 H400000 v-40z M500 241 v40 H400000 v-40z M500 241 v40 H400000 v-40z`,shortrightharpoonabovebar:`M53,241l0,40c398570,0,399437,0,399437,0
c4.7,-4.7,7,-9.3,7,-14c0,-9.3,-3.7,-15.3,-11,-18c-92.7,-56.7,-159,-133.7,-199,
-231c-3.3,-9.3,-6,-14.7,-8,-16c-2,-1.3,-7,-2,-15,-2c-10.7,0,-16.7,2,-18,6
c-2,2.7,-1,9.7,3,21c15.3,42,36.7,81.8,64,119.5c27.3,37.7,58,69.2,92,94.5z
M500 241 v40 H399408 v-40z M500 435 v40 H400000 v-40z`},Sf=function(e,t){switch(e){case"lbrack":return"M403 1759 V84 H666 V0 H319 V1759 v"+t+` v1759 v84 h347 v-84
H403z M403 1759 V0 H319 V1759 v`+t+" v1759 v84 h84z";case"rbrack":return"M347 1759 V0 H0 V84 H263 V1759 v"+t+` v1759 H0 v84 H347z
M347 1759 V0 H263 V1759 v`+t+" v1759 h84z";case"vert":return"M145 15 v585 v"+t+` v585 c2.667,10,9.667,15,21,15
c10,0,16.667,-5,20,-15 v-585 v`+-t+` v-585 c-2.667,-10,-9.667,-15,-21,-15
c-10,0,-16.667,5,-20,15z M188 15 H145 v585 v`+t+" v585 h43z";case"doublevert":return"M145 15 v585 v"+t+` v585 c2.667,10,9.667,15,21,15
c10,0,16.667,-5,20,-15 v-585 v`+-t+` v-585 c-2.667,-10,-9.667,-15,-21,-15
c-10,0,-16.667,5,-20,15z M188 15 H145 v585 v`+t+` v585 h43z
M367 15 v585 v`+t+` v585 c2.667,10,9.667,15,21,15
c10,0,16.667,-5,20,-15 v-585 v`+-t+` v-585 c-2.667,-10,-9.667,-15,-21,-15
c-10,0,-16.667,5,-20,15z M410 15 H367 v585 v`+t+" v585 h43z";case"lfloor":return"M319 602 V0 H403 V602 v"+t+` v1715 h263 v84 H319z
MM319 602 V0 H403 V602 v`+t+" v1715 H319z";case"rfloor":return"M319 602 V0 H403 V602 v"+t+` v1799 H0 v-84 H319z
MM319 602 V0 H403 V602 v`+t+" v1715 H319z";case"lceil":return"M403 1759 V84 H666 V0 H319 V1759 v"+t+` v602 h84z
M403 1759 V0 H319 V1759 v`+t+" v602 h84z";case"rceil":return"M347 1759 V0 H0 V84 H263 V1759 v"+t+` v602 h84z
M347 1759 V0 h-84 V1759 v`+t+" v602 h84z";case"lparen":return`M863,9c0,-2,-2,-5,-6,-9c0,0,-17,0,-17,0c-12.7,0,-19.3,0.3,-20,1
c-5.3,5.3,-10.3,11,-15,17c-242.7,294.7,-395.3,682,-458,1162c-21.3,163.3,-33.3,349,
-36,557 l0,`+(t+84)+`c0.2,6,0,26,0,60c2,159.3,10,310.7,24,454c53.3,528,210,
949.7,470,1265c4.7,6,9.7,11.7,15,17c0.7,0.7,7,1,19,1c0,0,18,0,18,0c4,-4,6,-7,6,-9
c0,-2.7,-3.3,-8.7,-10,-18c-135.3,-192.7,-235.5,-414.3,-300.5,-665c-65,-250.7,-102.5,
-544.7,-112.5,-882c-2,-104,-3,-167,-3,-189
l0,-`+(t+92)+`c0,-162.7,5.7,-314,17,-454c20.7,-272,63.7,-513,129,-723c65.3,
-210,155.3,-396.3,270,-559c6.7,-9.3,10,-15.3,10,-18z`;case"rparen":return`M76,0c-16.7,0,-25,3,-25,9c0,2,2,6.3,6,13c21.3,28.7,42.3,60.3,
63,95c96.7,156.7,172.8,332.5,228.5,527.5c55.7,195,92.8,416.5,111.5,664.5
c11.3,139.3,17,290.7,17,454c0,28,1.7,43,3.3,45l0,`+(t+9)+`
c-3,4,-3.3,16.7,-3.3,38c0,162,-5.7,313.7,-17,455c-18.7,248,-55.8,469.3,-111.5,664
c-55.7,194.7,-131.8,370.3,-228.5,527c-20.7,34.7,-41.7,66.3,-63,95c-2,3.3,-4,7,-6,11
c0,7.3,5.7,11,17,11c0,0,11,0,11,0c9.3,0,14.3,-0.3,15,-1c5.3,-5.3,10.3,-11,15,-17
c242.7,-294.7,395.3,-681.7,458,-1161c21.3,-164.7,33.3,-350.7,36,-558
l0,-`+(t+144)+`c-2,-159.3,-10,-310.7,-24,-454c-53.3,-528,-210,-949.7,
-470,-1265c-4.7,-6,-9.7,-11.7,-15,-17c-0.7,-0.7,-6.7,-1,-18,-1z`;default:throw new Error("Unknown stretchy delimiter.")}};function wf(n){return"toText"in n}class sa{constructor(e){this.children=void 0,this.classes=void 0,this.height=void 0,this.depth=void 0,this.maxFontSize=void 0,this.style=void 0,this.children=e,this.classes=[],this.height=0,this.depth=0,this.maxFontSize=0,this.style={}}hasClass(e){return this.classes.includes(e)}toNode(){for(var e=document.createDocumentFragment(),t=0;t<this.children.length;t++)e.appendChild(this.children[t].toNode());return e}toMarkup(){for(var e="",t=0;t<this.children.length;t++)e+=this.children[t].toMarkup();return e}toText(){return this.children.map(e=>{if(wf(e))return e.toText();throw new Error("Expected MathDomNode with toText, got "+e.constructor.name)}).join("")}}var x0={pt:1,mm:7227/2540,cm:7227/254,in:72.27,bp:803/800,pc:12,dd:1238/1157,cc:14856/1157,nd:685/642,nc:1370/107,sp:1/65536,px:803/800},Ef={ex:!0,em:!0,mu:!0},hh=function(e){return typeof e!="string"&&(e=e.unit),e in x0||e in Ef||e==="ex"},It=function(e,t){var i;if(e.unit in x0)i=x0[e.unit]/t.fontMetrics().ptPerEm/t.sizeMultiplier;else if(e.unit==="mu")i=t.fontMetrics().cssEmPerMu;else{var r;if(t.style.isTight()?r=t.havingStyle(t.style.text()):r=t,e.unit==="ex")i=r.fontMetrics().xHeight;else if(e.unit==="em")i=r.fontMetrics().quad;else throw new oe("Invalid unit: '"+e.unit+"'");r!==t&&(i*=r.sizeMultiplier/t.sizeMultiplier)}return Math.min(e.number*i,t.maxSize)},ue=function(e){return+e.toFixed(4)+"em"},Xi=function(e){return e.filter(t=>t).join(" ")},Al=function(e){var t="";for(var i of Object.keys(e)){var r=e[i];r!==void 0&&(t+=Jd(i)+":"+r+";")}return t},dh=function(e,t,i){if(this.classes=e||[],this.attributes={},this.height=0,this.depth=0,this.maxFontSize=0,this.style=i||{},t){t.style.isTight()&&this.classes.push("mtight");var r=t.getColor();r&&(this.style.color=r)}},fh=function(e){var t=document.createElement(e);t.className=Xi(this.classes),Object.assign(t.style,this.style);for(var i of Object.keys(this.attributes))t.setAttribute(i,this.attributes[i]);for(var r=0;r<this.children.length;r++)t.appendChild(this.children[r].toNode());return t},Tf=/[\s"'>/=\x00-\x1f]/,ph=function(e){var t="<"+e;this.classes.length&&(t+=' class="'+on(Xi(this.classes))+'"');var i=Al(this.style);i&&(t+=' style="'+on(i)+'"');for(var r of Object.keys(this.attributes)){if(Tf.test(r))throw new oe("Invalid attribute name '"+r+"'");t+=" "+r+'="'+on(this.attributes[r])+'"'}t+=">";for(var a=0;a<this.children.length;a++)t+=this.children[a].toMarkup();return t+="</"+e+">",t};class oa{constructor(e,t,i,r){this.children=void 0,this.attributes=void 0,this.classes=void 0,this.height=void 0,this.depth=void 0,this.width=void 0,this.maxFontSize=void 0,this.style=void 0,this.italic=void 0,dh.call(this,e,i,r),this.children=t||[]}setAttribute(e,t){this.attributes[e]=t}hasClass(e){return this.classes.includes(e)}toNode(){return fh.call(this,"span")}toMarkup(){return ph.call(this,"span")}}class qs{constructor(e,t,i,r){this.children=void 0,this.attributes=void 0,this.classes=void 0,this.height=void 0,this.depth=void 0,this.maxFontSize=void 0,this.style=void 0,dh.call(this,t,r),this.children=i||[],this.setAttribute("href",e)}setAttribute(e,t){this.attributes[e]=t}hasClass(e){return this.classes.includes(e)}toNode(){return fh.call(this,"a")}toMarkup(){return ph.call(this,"a")}}class Af{constructor(e,t,i){this.src=void 0,this.alt=void 0,this.classes=void 0,this.height=void 0,this.depth=void 0,this.maxFontSize=void 0,this.style=void 0,this.alt=t,this.src=e,this.classes=["mord"],this.height=0,this.depth=0,this.maxFontSize=0,this.style=i}hasClass(e){return this.classes.includes(e)}toNode(){var e=document.createElement("img");return e.src=this.src,e.alt=this.alt,e.className="mord",Object.assign(e.style,this.style),e}toMarkup(){var e='<img src="'+on(this.src)+'"'+(' alt="'+on(this.alt)+'"'),t=Al(this.style);return t&&(e+=' style="'+on(t)+'"'),e+="'/>",e}}var Cf={î:"ı̂",ï:"ı̈",í:"ı́",ì:"ı̀"};class Un{constructor(e,t,i,r,a,s,o,l){this.text=void 0,this.height=void 0,this.depth=void 0,this.italic=void 0,this.skew=void 0,this.width=void 0,this.maxFontSize=void 0,this.classes=void 0,this.style=void 0,this.text=e,this.height=t||0,this.depth=i||0,this.italic=r||0,this.skew=a||0,this.width=s||0,this.classes=o||[],this.style=l||{},this.maxFontSize=0;var c=ff(this.text.charCodeAt(0));c&&this.classes.push(c+"_fallback"),/[îïíì]/.test(this.text)&&(this.text=Cf[this.text])}hasClass(e){return this.classes.includes(e)}toNode(){var e=document.createTextNode(this.text),t=null;return this.italic>0&&(t=document.createElement("span"),t.style.marginRight=ue(this.italic)),this.classes.length>0&&(t=t||document.createElement("span"),t.className=Xi(this.classes)),Object.keys(this.style).length>0&&(t=t||document.createElement("span"),Object.assign(t.style,this.style)),t?(t.appendChild(e),t):e}toMarkup(){var e=!1,t="<span";this.classes.length&&(e=!0,t+=' class="',t+=on(Xi(this.classes)),t+='"');var i="";this.italic>0&&(i+="margin-right:"+ue(this.italic)+";"),i+=Al(this.style),i&&(e=!0,t+=' style="'+on(i)+'"');var r=on(this.text);return e?(t+=">",t+=r,t+="</span>",t):r}}class Ai{constructor(e,t){this.children=void 0,this.attributes=void 0,this.children=e||[],this.attributes=t||{}}toNode(){var e="http://www.w3.org/2000/svg",t=document.createElementNS(e,"svg");for(var i of Object.keys(this.attributes))t.setAttribute(i,this.attributes[i]);for(var r=0;r<this.children.length;r++)t.appendChild(this.children[r].toNode());return t}toMarkup(){var e='<svg xmlns="http://www.w3.org/2000/svg"';for(var t of Object.keys(this.attributes))e+=" "+t+'="'+on(this.attributes[t])+'"';e+=">";for(var i=0;i<this.children.length;i++)e+=this.children[i].toMarkup();return e+="</svg>",e}}class Yi{constructor(e,t){this.pathName=void 0,this.alternate=void 0,this.pathName=e,this.alternate=t}toNode(){var e="http://www.w3.org/2000/svg",t=document.createElementNS(e,"path");return this.alternate?t.setAttribute("d",this.alternate):t.setAttribute("d",pc[this.pathName]),t}toMarkup(){return this.alternate?'<path d="'+on(this.alternate)+'"/>':'<path d="'+on(pc[this.pathName])+'"/>'}}class g0{constructor(e){this.attributes=void 0,this.attributes=e||{}}toNode(){var e="http://www.w3.org/2000/svg",t=document.createElementNS(e,"line");for(var i of Object.keys(this.attributes))t.setAttribute(i,this.attributes[i]);return t}toMarkup(){var e="<line";for(var t of Object.keys(this.attributes))e+=" "+t+'="'+on(this.attributes[t])+'"';return e+="/>",e}}function Rf(n){if(n instanceof Un)return n;throw new Error("Expected symbolNode but got "+String(n)+".")}function Df(n){if(n instanceof oa)return n;throw new Error("Expected span<HtmlDomNode> but got "+String(n)+".")}var Pf=n=>n instanceof oa||n instanceof qs||n instanceof sa,ii={"AMS-Regular":{32:[0,0,0,0,.25],65:[0,.68889,0,0,.72222],66:[0,.68889,0,0,.66667],67:[0,.68889,0,0,.72222],68:[0,.68889,0,0,.72222],69:[0,.68889,0,0,.66667],70:[0,.68889,0,0,.61111],71:[0,.68889,0,0,.77778],72:[0,.68889,0,0,.77778],73:[0,.68889,0,0,.38889],74:[.16667,.68889,0,0,.5],75:[0,.68889,0,0,.77778],76:[0,.68889,0,0,.66667],77:[0,.68889,0,0,.94445],78:[0,.68889,0,0,.72222],79:[.16667,.68889,0,0,.77778],80:[0,.68889,0,0,.61111],81:[.16667,.68889,0,0,.77778],82:[0,.68889,0,0,.72222],83:[0,.68889,0,0,.55556],84:[0,.68889,0,0,.66667],85:[0,.68889,0,0,.72222],86:[0,.68889,0,0,.72222],87:[0,.68889,0,0,1],88:[0,.68889,0,0,.72222],89:[0,.68889,0,0,.72222],90:[0,.68889,0,0,.66667],107:[0,.68889,0,0,.55556],160:[0,0,0,0,.25],165:[0,.675,.025,0,.75],174:[.15559,.69224,0,0,.94666],240:[0,.68889,0,0,.55556],295:[0,.68889,0,0,.54028],710:[0,.825,0,0,2.33334],732:[0,.9,0,0,2.33334],770:[0,.825,0,0,2.33334],771:[0,.9,0,0,2.33334],989:[.08167,.58167,0,0,.77778],1008:[0,.43056,.04028,0,.66667],8245:[0,.54986,0,0,.275],8463:[0,.68889,0,0,.54028],8487:[0,.68889,0,0,.72222],8498:[0,.68889,0,0,.55556],8502:[0,.68889,0,0,.66667],8503:[0,.68889,0,0,.44445],8504:[0,.68889,0,0,.66667],8513:[0,.68889,0,0,.63889],8592:[-.03598,.46402,0,0,.5],8594:[-.03598,.46402,0,0,.5],8602:[-.13313,.36687,0,0,1],8603:[-.13313,.36687,0,0,1],8606:[.01354,.52239,0,0,1],8608:[.01354,.52239,0,0,1],8610:[.01354,.52239,0,0,1.11111],8611:[.01354,.52239,0,0,1.11111],8619:[0,.54986,0,0,1],8620:[0,.54986,0,0,1],8621:[-.13313,.37788,0,0,1.38889],8622:[-.13313,.36687,0,0,1],8624:[0,.69224,0,0,.5],8625:[0,.69224,0,0,.5],8630:[0,.43056,0,0,1],8631:[0,.43056,0,0,1],8634:[.08198,.58198,0,0,.77778],8635:[.08198,.58198,0,0,.77778],8638:[.19444,.69224,0,0,.41667],8639:[.19444,.69224,0,0,.41667],8642:[.19444,.69224,0,0,.41667],8643:[.19444,.69224,0,0,.41667],8644:[.1808,.675,0,0,1],8646:[.1808,.675,0,0,1],8647:[.1808,.675,0,0,1],8648:[.19444,.69224,0,0,.83334],8649:[.1808,.675,0,0,1],8650:[.19444,.69224,0,0,.83334],8651:[.01354,.52239,0,0,1],8652:[.01354,.52239,0,0,1],8653:[-.13313,.36687,0,0,1],8654:[-.13313,.36687,0,0,1],8655:[-.13313,.36687,0,0,1],8666:[.13667,.63667,0,0,1],8667:[.13667,.63667,0,0,1],8669:[-.13313,.37788,0,0,1],8672:[-.064,.437,0,0,1.334],8674:[-.064,.437,0,0,1.334],8705:[0,.825,0,0,.5],8708:[0,.68889,0,0,.55556],8709:[.08167,.58167,0,0,.77778],8717:[0,.43056,0,0,.42917],8722:[-.03598,.46402,0,0,.5],8724:[.08198,.69224,0,0,.77778],8726:[.08167,.58167,0,0,.77778],8733:[0,.69224,0,0,.77778],8736:[0,.69224,0,0,.72222],8737:[0,.69224,0,0,.72222],8738:[.03517,.52239,0,0,.72222],8739:[.08167,.58167,0,0,.22222],8740:[.25142,.74111,0,0,.27778],8741:[.08167,.58167,0,0,.38889],8742:[.25142,.74111,0,0,.5],8756:[0,.69224,0,0,.66667],8757:[0,.69224,0,0,.66667],8764:[-.13313,.36687,0,0,.77778],8765:[-.13313,.37788,0,0,.77778],8769:[-.13313,.36687,0,0,.77778],8770:[-.03625,.46375,0,0,.77778],8774:[.30274,.79383,0,0,.77778],8776:[-.01688,.48312,0,0,.77778],8778:[.08167,.58167,0,0,.77778],8782:[.06062,.54986,0,0,.77778],8783:[.06062,.54986,0,0,.77778],8785:[.08198,.58198,0,0,.77778],8786:[.08198,.58198,0,0,.77778],8787:[.08198,.58198,0,0,.77778],8790:[0,.69224,0,0,.77778],8791:[.22958,.72958,0,0,.77778],8796:[.08198,.91667,0,0,.77778],8806:[.25583,.75583,0,0,.77778],8807:[.25583,.75583,0,0,.77778],8808:[.25142,.75726,0,0,.77778],8809:[.25142,.75726,0,0,.77778],8812:[.25583,.75583,0,0,.5],8814:[.20576,.70576,0,0,.77778],8815:[.20576,.70576,0,0,.77778],8816:[.30274,.79383,0,0,.77778],8817:[.30274,.79383,0,0,.77778],8818:[.22958,.72958,0,0,.77778],8819:[.22958,.72958,0,0,.77778],8822:[.1808,.675,0,0,.77778],8823:[.1808,.675,0,0,.77778],8828:[.13667,.63667,0,0,.77778],8829:[.13667,.63667,0,0,.77778],8830:[.22958,.72958,0,0,.77778],8831:[.22958,.72958,0,0,.77778],8832:[.20576,.70576,0,0,.77778],8833:[.20576,.70576,0,0,.77778],8840:[.30274,.79383,0,0,.77778],8841:[.30274,.79383,0,0,.77778],8842:[.13597,.63597,0,0,.77778],8843:[.13597,.63597,0,0,.77778],8847:[.03517,.54986,0,0,.77778],8848:[.03517,.54986,0,0,.77778],8858:[.08198,.58198,0,0,.77778],8859:[.08198,.58198,0,0,.77778],8861:[.08198,.58198,0,0,.77778],8862:[0,.675,0,0,.77778],8863:[0,.675,0,0,.77778],8864:[0,.675,0,0,.77778],8865:[0,.675,0,0,.77778],8872:[0,.69224,0,0,.61111],8873:[0,.69224,0,0,.72222],8874:[0,.69224,0,0,.88889],8876:[0,.68889,0,0,.61111],8877:[0,.68889,0,0,.61111],8878:[0,.68889,0,0,.72222],8879:[0,.68889,0,0,.72222],8882:[.03517,.54986,0,0,.77778],8883:[.03517,.54986,0,0,.77778],8884:[.13667,.63667,0,0,.77778],8885:[.13667,.63667,0,0,.77778],8888:[0,.54986,0,0,1.11111],8890:[.19444,.43056,0,0,.55556],8891:[.19444,.69224,0,0,.61111],8892:[.19444,.69224,0,0,.61111],8901:[0,.54986,0,0,.27778],8903:[.08167,.58167,0,0,.77778],8905:[.08167,.58167,0,0,.77778],8906:[.08167,.58167,0,0,.77778],8907:[0,.69224,0,0,.77778],8908:[0,.69224,0,0,.77778],8909:[-.03598,.46402,0,0,.77778],8910:[0,.54986,0,0,.76042],8911:[0,.54986,0,0,.76042],8912:[.03517,.54986,0,0,.77778],8913:[.03517,.54986,0,0,.77778],8914:[0,.54986,0,0,.66667],8915:[0,.54986,0,0,.66667],8916:[0,.69224,0,0,.66667],8918:[.0391,.5391,0,0,.77778],8919:[.0391,.5391,0,0,.77778],8920:[.03517,.54986,0,0,1.33334],8921:[.03517,.54986,0,0,1.33334],8922:[.38569,.88569,0,0,.77778],8923:[.38569,.88569,0,0,.77778],8926:[.13667,.63667,0,0,.77778],8927:[.13667,.63667,0,0,.77778],8928:[.30274,.79383,0,0,.77778],8929:[.30274,.79383,0,0,.77778],8934:[.23222,.74111,0,0,.77778],8935:[.23222,.74111,0,0,.77778],8936:[.23222,.74111,0,0,.77778],8937:[.23222,.74111,0,0,.77778],8938:[.20576,.70576,0,0,.77778],8939:[.20576,.70576,0,0,.77778],8940:[.30274,.79383,0,0,.77778],8941:[.30274,.79383,0,0,.77778],8994:[.19444,.69224,0,0,.77778],8995:[.19444,.69224,0,0,.77778],9416:[.15559,.69224,0,0,.90222],9484:[0,.69224,0,0,.5],9488:[0,.69224,0,0,.5],9492:[0,.37788,0,0,.5],9496:[0,.37788,0,0,.5],9585:[.19444,.68889,0,0,.88889],9586:[.19444,.74111,0,0,.88889],9632:[0,.675,0,0,.77778],9633:[0,.675,0,0,.77778],9650:[0,.54986,0,0,.72222],9651:[0,.54986,0,0,.72222],9654:[.03517,.54986,0,0,.77778],9660:[0,.54986,0,0,.72222],9661:[0,.54986,0,0,.72222],9664:[.03517,.54986,0,0,.77778],9674:[.11111,.69224,0,0,.66667],9733:[.19444,.69224,0,0,.94445],10003:[0,.69224,0,0,.83334],10016:[0,.69224,0,0,.83334],10731:[.11111,.69224,0,0,.66667],10846:[.19444,.75583,0,0,.61111],10877:[.13667,.63667,0,0,.77778],10878:[.13667,.63667,0,0,.77778],10885:[.25583,.75583,0,0,.77778],10886:[.25583,.75583,0,0,.77778],10887:[.13597,.63597,0,0,.77778],10888:[.13597,.63597,0,0,.77778],10889:[.26167,.75726,0,0,.77778],10890:[.26167,.75726,0,0,.77778],10891:[.48256,.98256,0,0,.77778],10892:[.48256,.98256,0,0,.77778],10901:[.13667,.63667,0,0,.77778],10902:[.13667,.63667,0,0,.77778],10933:[.25142,.75726,0,0,.77778],10934:[.25142,.75726,0,0,.77778],10935:[.26167,.75726,0,0,.77778],10936:[.26167,.75726,0,0,.77778],10937:[.26167,.75726,0,0,.77778],10938:[.26167,.75726,0,0,.77778],10949:[.25583,.75583,0,0,.77778],10950:[.25583,.75583,0,0,.77778],10955:[.28481,.79383,0,0,.77778],10956:[.28481,.79383,0,0,.77778],57350:[.08167,.58167,0,0,.22222],57351:[.08167,.58167,0,0,.38889],57352:[.08167,.58167,0,0,.77778],57353:[0,.43056,.04028,0,.66667],57356:[.25142,.75726,0,0,.77778],57357:[.25142,.75726,0,0,.77778],57358:[.41951,.91951,0,0,.77778],57359:[.30274,.79383,0,0,.77778],57360:[.30274,.79383,0,0,.77778],57361:[.41951,.91951,0,0,.77778],57366:[.25142,.75726,0,0,.77778],57367:[.25142,.75726,0,0,.77778],57368:[.25142,.75726,0,0,.77778],57369:[.25142,.75726,0,0,.77778],57370:[.13597,.63597,0,0,.77778],57371:[.13597,.63597,0,0,.77778]},"Caligraphic-Regular":{32:[0,0,0,0,.25],65:[0,.68333,0,.19445,.79847],66:[0,.68333,.03041,.13889,.65681],67:[0,.68333,.05834,.13889,.52653],68:[0,.68333,.02778,.08334,.77139],69:[0,.68333,.08944,.11111,.52778],70:[0,.68333,.09931,.11111,.71875],71:[.09722,.68333,.0593,.11111,.59487],72:[0,.68333,.00965,.11111,.84452],73:[0,.68333,.07382,0,.54452],74:[.09722,.68333,.18472,.16667,.67778],75:[0,.68333,.01445,.05556,.76195],76:[0,.68333,0,.13889,.68972],77:[0,.68333,0,.13889,1.2009],78:[0,.68333,.14736,.08334,.82049],79:[0,.68333,.02778,.11111,.79611],80:[0,.68333,.08222,.08334,.69556],81:[.09722,.68333,0,.11111,.81667],82:[0,.68333,0,.08334,.8475],83:[0,.68333,.075,.13889,.60556],84:[0,.68333,.25417,0,.54464],85:[0,.68333,.09931,.08334,.62583],86:[0,.68333,.08222,0,.61278],87:[0,.68333,.08222,.08334,.98778],88:[0,.68333,.14643,.13889,.7133],89:[.09722,.68333,.08222,.08334,.66834],90:[0,.68333,.07944,.13889,.72473],160:[0,0,0,0,.25]},"Fraktur-Regular":{32:[0,0,0,0,.25],33:[0,.69141,0,0,.29574],34:[0,.69141,0,0,.21471],38:[0,.69141,0,0,.73786],39:[0,.69141,0,0,.21201],40:[.24982,.74947,0,0,.38865],41:[.24982,.74947,0,0,.38865],42:[0,.62119,0,0,.27764],43:[.08319,.58283,0,0,.75623],44:[0,.10803,0,0,.27764],45:[.08319,.58283,0,0,.75623],46:[0,.10803,0,0,.27764],47:[.24982,.74947,0,0,.50181],48:[0,.47534,0,0,.50181],49:[0,.47534,0,0,.50181],50:[0,.47534,0,0,.50181],51:[.18906,.47534,0,0,.50181],52:[.18906,.47534,0,0,.50181],53:[.18906,.47534,0,0,.50181],54:[0,.69141,0,0,.50181],55:[.18906,.47534,0,0,.50181],56:[0,.69141,0,0,.50181],57:[.18906,.47534,0,0,.50181],58:[0,.47534,0,0,.21606],59:[.12604,.47534,0,0,.21606],61:[-.13099,.36866,0,0,.75623],63:[0,.69141,0,0,.36245],65:[0,.69141,0,0,.7176],66:[0,.69141,0,0,.88397],67:[0,.69141,0,0,.61254],68:[0,.69141,0,0,.83158],69:[0,.69141,0,0,.66278],70:[.12604,.69141,0,0,.61119],71:[0,.69141,0,0,.78539],72:[.06302,.69141,0,0,.7203],73:[0,.69141,0,0,.55448],74:[.12604,.69141,0,0,.55231],75:[0,.69141,0,0,.66845],76:[0,.69141,0,0,.66602],77:[0,.69141,0,0,1.04953],78:[0,.69141,0,0,.83212],79:[0,.69141,0,0,.82699],80:[.18906,.69141,0,0,.82753],81:[.03781,.69141,0,0,.82699],82:[0,.69141,0,0,.82807],83:[0,.69141,0,0,.82861],84:[0,.69141,0,0,.66899],85:[0,.69141,0,0,.64576],86:[0,.69141,0,0,.83131],87:[0,.69141,0,0,1.04602],88:[0,.69141,0,0,.71922],89:[.18906,.69141,0,0,.83293],90:[.12604,.69141,0,0,.60201],91:[.24982,.74947,0,0,.27764],93:[.24982,.74947,0,0,.27764],94:[0,.69141,0,0,.49965],97:[0,.47534,0,0,.50046],98:[0,.69141,0,0,.51315],99:[0,.47534,0,0,.38946],100:[0,.62119,0,0,.49857],101:[0,.47534,0,0,.40053],102:[.18906,.69141,0,0,.32626],103:[.18906,.47534,0,0,.5037],104:[.18906,.69141,0,0,.52126],105:[0,.69141,0,0,.27899],106:[0,.69141,0,0,.28088],107:[0,.69141,0,0,.38946],108:[0,.69141,0,0,.27953],109:[0,.47534,0,0,.76676],110:[0,.47534,0,0,.52666],111:[0,.47534,0,0,.48885],112:[.18906,.52396,0,0,.50046],113:[.18906,.47534,0,0,.48912],114:[0,.47534,0,0,.38919],115:[0,.47534,0,0,.44266],116:[0,.62119,0,0,.33301],117:[0,.47534,0,0,.5172],118:[0,.52396,0,0,.5118],119:[0,.52396,0,0,.77351],120:[.18906,.47534,0,0,.38865],121:[.18906,.47534,0,0,.49884],122:[.18906,.47534,0,0,.39054],160:[0,0,0,0,.25],8216:[0,.69141,0,0,.21471],8217:[0,.69141,0,0,.21471],58112:[0,.62119,0,0,.49749],58113:[0,.62119,0,0,.4983],58114:[.18906,.69141,0,0,.33328],58115:[.18906,.69141,0,0,.32923],58116:[.18906,.47534,0,0,.50343],58117:[0,.69141,0,0,.33301],58118:[0,.62119,0,0,.33409],58119:[0,.47534,0,0,.50073]},"Main-Bold":{32:[0,0,0,0,.25],33:[0,.69444,0,0,.35],34:[0,.69444,0,0,.60278],35:[.19444,.69444,0,0,.95833],36:[.05556,.75,0,0,.575],37:[.05556,.75,0,0,.95833],38:[0,.69444,0,0,.89444],39:[0,.69444,0,0,.31944],40:[.25,.75,0,0,.44722],41:[.25,.75,0,0,.44722],42:[0,.75,0,0,.575],43:[.13333,.63333,0,0,.89444],44:[.19444,.15556,0,0,.31944],45:[0,.44444,0,0,.38333],46:[0,.15556,0,0,.31944],47:[.25,.75,0,0,.575],48:[0,.64444,0,0,.575],49:[0,.64444,0,0,.575],50:[0,.64444,0,0,.575],51:[0,.64444,0,0,.575],52:[0,.64444,0,0,.575],53:[0,.64444,0,0,.575],54:[0,.64444,0,0,.575],55:[0,.64444,0,0,.575],56:[0,.64444,0,0,.575],57:[0,.64444,0,0,.575],58:[0,.44444,0,0,.31944],59:[.19444,.44444,0,0,.31944],60:[.08556,.58556,0,0,.89444],61:[-.10889,.39111,0,0,.89444],62:[.08556,.58556,0,0,.89444],63:[0,.69444,0,0,.54305],64:[0,.69444,0,0,.89444],65:[0,.68611,0,0,.86944],66:[0,.68611,0,0,.81805],67:[0,.68611,0,0,.83055],68:[0,.68611,0,0,.88194],69:[0,.68611,0,0,.75555],70:[0,.68611,0,0,.72361],71:[0,.68611,0,0,.90416],72:[0,.68611,0,0,.9],73:[0,.68611,0,0,.43611],74:[0,.68611,0,0,.59444],75:[0,.68611,0,0,.90138],76:[0,.68611,0,0,.69166],77:[0,.68611,0,0,1.09166],78:[0,.68611,0,0,.9],79:[0,.68611,0,0,.86388],80:[0,.68611,0,0,.78611],81:[.19444,.68611,0,0,.86388],82:[0,.68611,0,0,.8625],83:[0,.68611,0,0,.63889],84:[0,.68611,0,0,.8],85:[0,.68611,0,0,.88472],86:[0,.68611,.01597,0,.86944],87:[0,.68611,.01597,0,1.18888],88:[0,.68611,0,0,.86944],89:[0,.68611,.02875,0,.86944],90:[0,.68611,0,0,.70277],91:[.25,.75,0,0,.31944],92:[.25,.75,0,0,.575],93:[.25,.75,0,0,.31944],94:[0,.69444,0,0,.575],95:[.31,.13444,.03194,0,.575],97:[0,.44444,0,0,.55902],98:[0,.69444,0,0,.63889],99:[0,.44444,0,0,.51111],100:[0,.69444,0,0,.63889],101:[0,.44444,0,0,.52708],102:[0,.69444,.10903,0,.35139],103:[.19444,.44444,.01597,0,.575],104:[0,.69444,0,0,.63889],105:[0,.69444,0,0,.31944],106:[.19444,.69444,0,0,.35139],107:[0,.69444,0,0,.60694],108:[0,.69444,0,0,.31944],109:[0,.44444,0,0,.95833],110:[0,.44444,0,0,.63889],111:[0,.44444,0,0,.575],112:[.19444,.44444,0,0,.63889],113:[.19444,.44444,0,0,.60694],114:[0,.44444,0,0,.47361],115:[0,.44444,0,0,.45361],116:[0,.63492,0,0,.44722],117:[0,.44444,0,0,.63889],118:[0,.44444,.01597,0,.60694],119:[0,.44444,.01597,0,.83055],120:[0,.44444,0,0,.60694],121:[.19444,.44444,.01597,0,.60694],122:[0,.44444,0,0,.51111],123:[.25,.75,0,0,.575],124:[.25,.75,0,0,.31944],125:[.25,.75,0,0,.575],126:[.35,.34444,0,0,.575],160:[0,0,0,0,.25],163:[0,.69444,0,0,.86853],168:[0,.69444,0,0,.575],172:[0,.44444,0,0,.76666],176:[0,.69444,0,0,.86944],177:[.13333,.63333,0,0,.89444],184:[.17014,0,0,0,.51111],198:[0,.68611,0,0,1.04166],215:[.13333,.63333,0,0,.89444],216:[.04861,.73472,0,0,.89444],223:[0,.69444,0,0,.59722],230:[0,.44444,0,0,.83055],247:[.13333,.63333,0,0,.89444],248:[.09722,.54167,0,0,.575],305:[0,.44444,0,0,.31944],338:[0,.68611,0,0,1.16944],339:[0,.44444,0,0,.89444],567:[.19444,.44444,0,0,.35139],710:[0,.69444,0,0,.575],711:[0,.63194,0,0,.575],713:[0,.59611,0,0,.575],714:[0,.69444,0,0,.575],715:[0,.69444,0,0,.575],728:[0,.69444,0,0,.575],729:[0,.69444,0,0,.31944],730:[0,.69444,0,0,.86944],732:[0,.69444,0,0,.575],733:[0,.69444,0,0,.575],915:[0,.68611,0,0,.69166],916:[0,.68611,0,0,.95833],920:[0,.68611,0,0,.89444],923:[0,.68611,0,0,.80555],926:[0,.68611,0,0,.76666],928:[0,.68611,0,0,.9],931:[0,.68611,0,0,.83055],933:[0,.68611,0,0,.89444],934:[0,.68611,0,0,.83055],936:[0,.68611,0,0,.89444],937:[0,.68611,0,0,.83055],8211:[0,.44444,.03194,0,.575],8212:[0,.44444,.03194,0,1.14999],8216:[0,.69444,0,0,.31944],8217:[0,.69444,0,0,.31944],8220:[0,.69444,0,0,.60278],8221:[0,.69444,0,0,.60278],8224:[.19444,.69444,0,0,.51111],8225:[.19444,.69444,0,0,.51111],8242:[0,.55556,0,0,.34444],8407:[0,.72444,.15486,0,.575],8463:[0,.69444,0,0,.66759],8465:[0,.69444,0,0,.83055],8467:[0,.69444,0,0,.47361],8472:[.19444,.44444,0,0,.74027],8476:[0,.69444,0,0,.83055],8501:[0,.69444,0,0,.70277],8592:[-.10889,.39111,0,0,1.14999],8593:[.19444,.69444,0,0,.575],8594:[-.10889,.39111,0,0,1.14999],8595:[.19444,.69444,0,0,.575],8596:[-.10889,.39111,0,0,1.14999],8597:[.25,.75,0,0,.575],8598:[.19444,.69444,0,0,1.14999],8599:[.19444,.69444,0,0,1.14999],8600:[.19444,.69444,0,0,1.14999],8601:[.19444,.69444,0,0,1.14999],8636:[-.10889,.39111,0,0,1.14999],8637:[-.10889,.39111,0,0,1.14999],8640:[-.10889,.39111,0,0,1.14999],8641:[-.10889,.39111,0,0,1.14999],8656:[-.10889,.39111,0,0,1.14999],8657:[.19444,.69444,0,0,.70277],8658:[-.10889,.39111,0,0,1.14999],8659:[.19444,.69444,0,0,.70277],8660:[-.10889,.39111,0,0,1.14999],8661:[.25,.75,0,0,.70277],8704:[0,.69444,0,0,.63889],8706:[0,.69444,.06389,0,.62847],8707:[0,.69444,0,0,.63889],8709:[.05556,.75,0,0,.575],8711:[0,.68611,0,0,.95833],8712:[.08556,.58556,0,0,.76666],8715:[.08556,.58556,0,0,.76666],8722:[.13333,.63333,0,0,.89444],8723:[.13333,.63333,0,0,.89444],8725:[.25,.75,0,0,.575],8726:[.25,.75,0,0,.575],8727:[-.02778,.47222,0,0,.575],8728:[-.02639,.47361,0,0,.575],8729:[-.02639,.47361,0,0,.575],8730:[.18,.82,0,0,.95833],8733:[0,.44444,0,0,.89444],8734:[0,.44444,0,0,1.14999],8736:[0,.69224,0,0,.72222],8739:[.25,.75,0,0,.31944],8741:[.25,.75,0,0,.575],8743:[0,.55556,0,0,.76666],8744:[0,.55556,0,0,.76666],8745:[0,.55556,0,0,.76666],8746:[0,.55556,0,0,.76666],8747:[.19444,.69444,.12778,0,.56875],8764:[-.10889,.39111,0,0,.89444],8768:[.19444,.69444,0,0,.31944],8771:[.00222,.50222,0,0,.89444],8773:[.027,.638,0,0,.894],8776:[.02444,.52444,0,0,.89444],8781:[.00222,.50222,0,0,.89444],8801:[.00222,.50222,0,0,.89444],8804:[.19667,.69667,0,0,.89444],8805:[.19667,.69667,0,0,.89444],8810:[.08556,.58556,0,0,1.14999],8811:[.08556,.58556,0,0,1.14999],8826:[.08556,.58556,0,0,.89444],8827:[.08556,.58556,0,0,.89444],8834:[.08556,.58556,0,0,.89444],8835:[.08556,.58556,0,0,.89444],8838:[.19667,.69667,0,0,.89444],8839:[.19667,.69667,0,0,.89444],8846:[0,.55556,0,0,.76666],8849:[.19667,.69667,0,0,.89444],8850:[.19667,.69667,0,0,.89444],8851:[0,.55556,0,0,.76666],8852:[0,.55556,0,0,.76666],8853:[.13333,.63333,0,0,.89444],8854:[.13333,.63333,0,0,.89444],8855:[.13333,.63333,0,0,.89444],8856:[.13333,.63333,0,0,.89444],8857:[.13333,.63333,0,0,.89444],8866:[0,.69444,0,0,.70277],8867:[0,.69444,0,0,.70277],8868:[0,.69444,0,0,.89444],8869:[0,.69444,0,0,.89444],8900:[-.02639,.47361,0,0,.575],8901:[-.02639,.47361,0,0,.31944],8902:[-.02778,.47222,0,0,.575],8968:[.25,.75,0,0,.51111],8969:[.25,.75,0,0,.51111],8970:[.25,.75,0,0,.51111],8971:[.25,.75,0,0,.51111],8994:[-.13889,.36111,0,0,1.14999],8995:[-.13889,.36111,0,0,1.14999],9651:[.19444,.69444,0,0,1.02222],9657:[-.02778,.47222,0,0,.575],9661:[.19444,.69444,0,0,1.02222],9667:[-.02778,.47222,0,0,.575],9711:[.19444,.69444,0,0,1.14999],9824:[.12963,.69444,0,0,.89444],9825:[.12963,.69444,0,0,.89444],9826:[.12963,.69444,0,0,.89444],9827:[.12963,.69444,0,0,.89444],9837:[0,.75,0,0,.44722],9838:[.19444,.69444,0,0,.44722],9839:[.19444,.69444,0,0,.44722],10216:[.25,.75,0,0,.44722],10217:[.25,.75,0,0,.44722],10815:[0,.68611,0,0,.9],10927:[.19667,.69667,0,0,.89444],10928:[.19667,.69667,0,0,.89444],57376:[.19444,.69444,0,0,0]},"Main-BoldItalic":{32:[0,0,0,0,.25],33:[0,.69444,.11417,0,.38611],34:[0,.69444,.07939,0,.62055],35:[.19444,.69444,.06833,0,.94444],37:[.05556,.75,.12861,0,.94444],38:[0,.69444,.08528,0,.88555],39:[0,.69444,.12945,0,.35555],40:[.25,.75,.15806,0,.47333],41:[.25,.75,.03306,0,.47333],42:[0,.75,.14333,0,.59111],43:[.10333,.60333,.03306,0,.88555],44:[.19444,.14722,0,0,.35555],45:[0,.44444,.02611,0,.41444],46:[0,.14722,0,0,.35555],47:[.25,.75,.15806,0,.59111],48:[0,.64444,.13167,0,.59111],49:[0,.64444,.13167,0,.59111],50:[0,.64444,.13167,0,.59111],51:[0,.64444,.13167,0,.59111],52:[.19444,.64444,.13167,0,.59111],53:[0,.64444,.13167,0,.59111],54:[0,.64444,.13167,0,.59111],55:[.19444,.64444,.13167,0,.59111],56:[0,.64444,.13167,0,.59111],57:[0,.64444,.13167,0,.59111],58:[0,.44444,.06695,0,.35555],59:[.19444,.44444,.06695,0,.35555],61:[-.10889,.39111,.06833,0,.88555],63:[0,.69444,.11472,0,.59111],64:[0,.69444,.09208,0,.88555],65:[0,.68611,0,0,.86555],66:[0,.68611,.0992,0,.81666],67:[0,.68611,.14208,0,.82666],68:[0,.68611,.09062,0,.87555],69:[0,.68611,.11431,0,.75666],70:[0,.68611,.12903,0,.72722],71:[0,.68611,.07347,0,.89527],72:[0,.68611,.17208,0,.8961],73:[0,.68611,.15681,0,.47166],74:[0,.68611,.145,0,.61055],75:[0,.68611,.14208,0,.89499],76:[0,.68611,0,0,.69777],77:[0,.68611,.17208,0,1.07277],78:[0,.68611,.17208,0,.8961],79:[0,.68611,.09062,0,.85499],80:[0,.68611,.0992,0,.78721],81:[.19444,.68611,.09062,0,.85499],82:[0,.68611,.02559,0,.85944],83:[0,.68611,.11264,0,.64999],84:[0,.68611,.12903,0,.7961],85:[0,.68611,.17208,0,.88083],86:[0,.68611,.18625,0,.86555],87:[0,.68611,.18625,0,1.15999],88:[0,.68611,.15681,0,.86555],89:[0,.68611,.19803,0,.86555],90:[0,.68611,.14208,0,.70888],91:[.25,.75,.1875,0,.35611],93:[.25,.75,.09972,0,.35611],94:[0,.69444,.06709,0,.59111],95:[.31,.13444,.09811,0,.59111],97:[0,.44444,.09426,0,.59111],98:[0,.69444,.07861,0,.53222],99:[0,.44444,.05222,0,.53222],100:[0,.69444,.10861,0,.59111],101:[0,.44444,.085,0,.53222],102:[.19444,.69444,.21778,0,.4],103:[.19444,.44444,.105,0,.53222],104:[0,.69444,.09426,0,.59111],105:[0,.69326,.11387,0,.35555],106:[.19444,.69326,.1672,0,.35555],107:[0,.69444,.11111,0,.53222],108:[0,.69444,.10861,0,.29666],109:[0,.44444,.09426,0,.94444],110:[0,.44444,.09426,0,.64999],111:[0,.44444,.07861,0,.59111],112:[.19444,.44444,.07861,0,.59111],113:[.19444,.44444,.105,0,.53222],114:[0,.44444,.11111,0,.50167],115:[0,.44444,.08167,0,.48694],116:[0,.63492,.09639,0,.385],117:[0,.44444,.09426,0,.62055],118:[0,.44444,.11111,0,.53222],119:[0,.44444,.11111,0,.76777],120:[0,.44444,.12583,0,.56055],121:[.19444,.44444,.105,0,.56166],122:[0,.44444,.13889,0,.49055],126:[.35,.34444,.11472,0,.59111],160:[0,0,0,0,.25],168:[0,.69444,.11473,0,.59111],176:[0,.69444,0,0,.94888],184:[.17014,0,0,0,.53222],198:[0,.68611,.11431,0,1.02277],216:[.04861,.73472,.09062,0,.88555],223:[.19444,.69444,.09736,0,.665],230:[0,.44444,.085,0,.82666],248:[.09722,.54167,.09458,0,.59111],305:[0,.44444,.09426,0,.35555],338:[0,.68611,.11431,0,1.14054],339:[0,.44444,.085,0,.82666],567:[.19444,.44444,.04611,0,.385],710:[0,.69444,.06709,0,.59111],711:[0,.63194,.08271,0,.59111],713:[0,.59444,.10444,0,.59111],714:[0,.69444,.08528,0,.59111],715:[0,.69444,0,0,.59111],728:[0,.69444,.10333,0,.59111],729:[0,.69444,.12945,0,.35555],730:[0,.69444,0,0,.94888],732:[0,.69444,.11472,0,.59111],733:[0,.69444,.11472,0,.59111],915:[0,.68611,.12903,0,.69777],916:[0,.68611,0,0,.94444],920:[0,.68611,.09062,0,.88555],923:[0,.68611,0,0,.80666],926:[0,.68611,.15092,0,.76777],928:[0,.68611,.17208,0,.8961],931:[0,.68611,.11431,0,.82666],933:[0,.68611,.10778,0,.88555],934:[0,.68611,.05632,0,.82666],936:[0,.68611,.10778,0,.88555],937:[0,.68611,.0992,0,.82666],8211:[0,.44444,.09811,0,.59111],8212:[0,.44444,.09811,0,1.18221],8216:[0,.69444,.12945,0,.35555],8217:[0,.69444,.12945,0,.35555],8220:[0,.69444,.16772,0,.62055],8221:[0,.69444,.07939,0,.62055]},"Main-Italic":{32:[0,0,0,0,.25],33:[0,.69444,.12417,0,.30667],34:[0,.69444,.06961,0,.51444],35:[.19444,.69444,.06616,0,.81777],37:[.05556,.75,.13639,0,.81777],38:[0,.69444,.09694,0,.76666],39:[0,.69444,.12417,0,.30667],40:[.25,.75,.16194,0,.40889],41:[.25,.75,.03694,0,.40889],42:[0,.75,.14917,0,.51111],43:[.05667,.56167,.03694,0,.76666],44:[.19444,.10556,0,0,.30667],45:[0,.43056,.02826,0,.35778],46:[0,.10556,0,0,.30667],47:[.25,.75,.16194,0,.51111],48:[0,.64444,.13556,0,.51111],49:[0,.64444,.13556,0,.51111],50:[0,.64444,.13556,0,.51111],51:[0,.64444,.13556,0,.51111],52:[.19444,.64444,.13556,0,.51111],53:[0,.64444,.13556,0,.51111],54:[0,.64444,.13556,0,.51111],55:[.19444,.64444,.13556,0,.51111],56:[0,.64444,.13556,0,.51111],57:[0,.64444,.13556,0,.51111],58:[0,.43056,.0582,0,.30667],59:[.19444,.43056,.0582,0,.30667],61:[-.13313,.36687,.06616,0,.76666],63:[0,.69444,.1225,0,.51111],64:[0,.69444,.09597,0,.76666],65:[0,.68333,0,0,.74333],66:[0,.68333,.10257,0,.70389],67:[0,.68333,.14528,0,.71555],68:[0,.68333,.09403,0,.755],69:[0,.68333,.12028,0,.67833],70:[0,.68333,.13305,0,.65277],71:[0,.68333,.08722,0,.77361],72:[0,.68333,.16389,0,.74333],73:[0,.68333,.15806,0,.38555],74:[0,.68333,.14028,0,.525],75:[0,.68333,.14528,0,.76888],76:[0,.68333,0,0,.62722],77:[0,.68333,.16389,0,.89666],78:[0,.68333,.16389,0,.74333],79:[0,.68333,.09403,0,.76666],80:[0,.68333,.10257,0,.67833],81:[.19444,.68333,.09403,0,.76666],82:[0,.68333,.03868,0,.72944],83:[0,.68333,.11972,0,.56222],84:[0,.68333,.13305,0,.71555],85:[0,.68333,.16389,0,.74333],86:[0,.68333,.18361,0,.74333],87:[0,.68333,.18361,0,.99888],88:[0,.68333,.15806,0,.74333],89:[0,.68333,.19383,0,.74333],90:[0,.68333,.14528,0,.61333],91:[.25,.75,.1875,0,.30667],93:[.25,.75,.10528,0,.30667],94:[0,.69444,.06646,0,.51111],95:[.31,.12056,.09208,0,.51111],97:[0,.43056,.07671,0,.51111],98:[0,.69444,.06312,0,.46],99:[0,.43056,.05653,0,.46],100:[0,.69444,.10333,0,.51111],101:[0,.43056,.07514,0,.46],102:[.19444,.69444,.21194,0,.30667],103:[.19444,.43056,.08847,0,.46],104:[0,.69444,.07671,0,.51111],105:[0,.65536,.1019,0,.30667],106:[.19444,.65536,.14467,0,.30667],107:[0,.69444,.10764,0,.46],108:[0,.69444,.10333,0,.25555],109:[0,.43056,.07671,0,.81777],110:[0,.43056,.07671,0,.56222],111:[0,.43056,.06312,0,.51111],112:[.19444,.43056,.06312,0,.51111],113:[.19444,.43056,.08847,0,.46],114:[0,.43056,.10764,0,.42166],115:[0,.43056,.08208,0,.40889],116:[0,.61508,.09486,0,.33222],117:[0,.43056,.07671,0,.53666],118:[0,.43056,.10764,0,.46],119:[0,.43056,.10764,0,.66444],120:[0,.43056,.12042,0,.46389],121:[.19444,.43056,.08847,0,.48555],122:[0,.43056,.12292,0,.40889],126:[.35,.31786,.11585,0,.51111],160:[0,0,0,0,.25],168:[0,.66786,.10474,0,.51111],176:[0,.69444,0,0,.83129],184:[.17014,0,0,0,.46],198:[0,.68333,.12028,0,.88277],216:[.04861,.73194,.09403,0,.76666],223:[.19444,.69444,.10514,0,.53666],230:[0,.43056,.07514,0,.71555],248:[.09722,.52778,.09194,0,.51111],338:[0,.68333,.12028,0,.98499],339:[0,.43056,.07514,0,.71555],710:[0,.69444,.06646,0,.51111],711:[0,.62847,.08295,0,.51111],713:[0,.56167,.10333,0,.51111],714:[0,.69444,.09694,0,.51111],715:[0,.69444,0,0,.51111],728:[0,.69444,.10806,0,.51111],729:[0,.66786,.11752,0,.30667],730:[0,.69444,0,0,.83129],732:[0,.66786,.11585,0,.51111],733:[0,.69444,.1225,0,.51111],915:[0,.68333,.13305,0,.62722],916:[0,.68333,0,0,.81777],920:[0,.68333,.09403,0,.76666],923:[0,.68333,0,0,.69222],926:[0,.68333,.15294,0,.66444],928:[0,.68333,.16389,0,.74333],931:[0,.68333,.12028,0,.71555],933:[0,.68333,.11111,0,.76666],934:[0,.68333,.05986,0,.71555],936:[0,.68333,.11111,0,.76666],937:[0,.68333,.10257,0,.71555],8211:[0,.43056,.09208,0,.51111],8212:[0,.43056,.09208,0,1.02222],8216:[0,.69444,.12417,0,.30667],8217:[0,.69444,.12417,0,.30667],8220:[0,.69444,.1685,0,.51444],8221:[0,.69444,.06961,0,.51444],8463:[0,.68889,0,0,.54028]},"Main-Regular":{32:[0,0,0,0,.25],33:[0,.69444,0,0,.27778],34:[0,.69444,0,0,.5],35:[.19444,.69444,0,0,.83334],36:[.05556,.75,0,0,.5],37:[.05556,.75,0,0,.83334],38:[0,.69444,0,0,.77778],39:[0,.69444,0,0,.27778],40:[.25,.75,0,0,.38889],41:[.25,.75,0,0,.38889],42:[0,.75,0,0,.5],43:[.08333,.58333,0,0,.77778],44:[.19444,.10556,0,0,.27778],45:[0,.43056,0,0,.33333],46:[0,.10556,0,0,.27778],47:[.25,.75,0,0,.5],48:[0,.64444,0,0,.5],49:[0,.64444,0,0,.5],50:[0,.64444,0,0,.5],51:[0,.64444,0,0,.5],52:[0,.64444,0,0,.5],53:[0,.64444,0,0,.5],54:[0,.64444,0,0,.5],55:[0,.64444,0,0,.5],56:[0,.64444,0,0,.5],57:[0,.64444,0,0,.5],58:[0,.43056,0,0,.27778],59:[.19444,.43056,0,0,.27778],60:[.0391,.5391,0,0,.77778],61:[-.13313,.36687,0,0,.77778],62:[.0391,.5391,0,0,.77778],63:[0,.69444,0,0,.47222],64:[0,.69444,0,0,.77778],65:[0,.68333,0,0,.75],66:[0,.68333,0,0,.70834],67:[0,.68333,0,0,.72222],68:[0,.68333,0,0,.76389],69:[0,.68333,0,0,.68056],70:[0,.68333,0,0,.65278],71:[0,.68333,0,0,.78472],72:[0,.68333,0,0,.75],73:[0,.68333,0,0,.36111],74:[0,.68333,0,0,.51389],75:[0,.68333,0,0,.77778],76:[0,.68333,0,0,.625],77:[0,.68333,0,0,.91667],78:[0,.68333,0,0,.75],79:[0,.68333,0,0,.77778],80:[0,.68333,0,0,.68056],81:[.19444,.68333,0,0,.77778],82:[0,.68333,0,0,.73611],83:[0,.68333,0,0,.55556],84:[0,.68333,0,0,.72222],85:[0,.68333,0,0,.75],86:[0,.68333,.01389,0,.75],87:[0,.68333,.01389,0,1.02778],88:[0,.68333,0,0,.75],89:[0,.68333,.025,0,.75],90:[0,.68333,0,0,.61111],91:[.25,.75,0,0,.27778],92:[.25,.75,0,0,.5],93:[.25,.75,0,0,.27778],94:[0,.69444,0,0,.5],95:[.31,.12056,.02778,0,.5],97:[0,.43056,0,0,.5],98:[0,.69444,0,0,.55556],99:[0,.43056,0,0,.44445],100:[0,.69444,0,0,.55556],101:[0,.43056,0,0,.44445],102:[0,.69444,.07778,0,.30556],103:[.19444,.43056,.01389,0,.5],104:[0,.69444,0,0,.55556],105:[0,.66786,0,0,.27778],106:[.19444,.66786,0,0,.30556],107:[0,.69444,0,0,.52778],108:[0,.69444,0,0,.27778],109:[0,.43056,0,0,.83334],110:[0,.43056,0,0,.55556],111:[0,.43056,0,0,.5],112:[.19444,.43056,0,0,.55556],113:[.19444,.43056,0,0,.52778],114:[0,.43056,0,0,.39167],115:[0,.43056,0,0,.39445],116:[0,.61508,0,0,.38889],117:[0,.43056,0,0,.55556],118:[0,.43056,.01389,0,.52778],119:[0,.43056,.01389,0,.72222],120:[0,.43056,0,0,.52778],121:[.19444,.43056,.01389,0,.52778],122:[0,.43056,0,0,.44445],123:[.25,.75,0,0,.5],124:[.25,.75,0,0,.27778],125:[.25,.75,0,0,.5],126:[.35,.31786,0,0,.5],160:[0,0,0,0,.25],163:[0,.69444,0,0,.76909],167:[.19444,.69444,0,0,.44445],168:[0,.66786,0,0,.5],172:[0,.43056,0,0,.66667],176:[0,.69444,0,0,.75],177:[.08333,.58333,0,0,.77778],182:[.19444,.69444,0,0,.61111],184:[.17014,0,0,0,.44445],198:[0,.68333,0,0,.90278],215:[.08333,.58333,0,0,.77778],216:[.04861,.73194,0,0,.77778],223:[0,.69444,0,0,.5],230:[0,.43056,0,0,.72222],247:[.08333,.58333,0,0,.77778],248:[.09722,.52778,0,0,.5],305:[0,.43056,0,0,.27778],338:[0,.68333,0,0,1.01389],339:[0,.43056,0,0,.77778],567:[.19444,.43056,0,0,.30556],710:[0,.69444,0,0,.5],711:[0,.62847,0,0,.5],713:[0,.56778,0,0,.5],714:[0,.69444,0,0,.5],715:[0,.69444,0,0,.5],728:[0,.69444,0,0,.5],729:[0,.66786,0,0,.27778],730:[0,.69444,0,0,.75],732:[0,.66786,0,0,.5],733:[0,.69444,0,0,.5],915:[0,.68333,0,0,.625],916:[0,.68333,0,0,.83334],920:[0,.68333,0,0,.77778],923:[0,.68333,0,0,.69445],926:[0,.68333,0,0,.66667],928:[0,.68333,0,0,.75],931:[0,.68333,0,0,.72222],933:[0,.68333,0,0,.77778],934:[0,.68333,0,0,.72222],936:[0,.68333,0,0,.77778],937:[0,.68333,0,0,.72222],8211:[0,.43056,.02778,0,.5],8212:[0,.43056,.02778,0,1],8216:[0,.69444,0,0,.27778],8217:[0,.69444,0,0,.27778],8220:[0,.69444,0,0,.5],8221:[0,.69444,0,0,.5],8224:[.19444,.69444,0,0,.44445],8225:[.19444,.69444,0,0,.44445],8230:[0,.123,0,0,1.172],8242:[0,.55556,0,0,.275],8407:[0,.71444,.15382,0,.5],8463:[0,.68889,0,0,.54028],8465:[0,.69444,0,0,.72222],8467:[0,.69444,0,.11111,.41667],8472:[.19444,.43056,0,.11111,.63646],8476:[0,.69444,0,0,.72222],8501:[0,.69444,0,0,.61111],8592:[-.13313,.36687,0,0,1],8593:[.19444,.69444,0,0,.5],8594:[-.13313,.36687,0,0,1],8595:[.19444,.69444,0,0,.5],8596:[-.13313,.36687,0,0,1],8597:[.25,.75,0,0,.5],8598:[.19444,.69444,0,0,1],8599:[.19444,.69444,0,0,1],8600:[.19444,.69444,0,0,1],8601:[.19444,.69444,0,0,1],8614:[.011,.511,0,0,1],8617:[.011,.511,0,0,1.126],8618:[.011,.511,0,0,1.126],8636:[-.13313,.36687,0,0,1],8637:[-.13313,.36687,0,0,1],8640:[-.13313,.36687,0,0,1],8641:[-.13313,.36687,0,0,1],8652:[.011,.671,0,0,1],8656:[-.13313,.36687,0,0,1],8657:[.19444,.69444,0,0,.61111],8658:[-.13313,.36687,0,0,1],8659:[.19444,.69444,0,0,.61111],8660:[-.13313,.36687,0,0,1],8661:[.25,.75,0,0,.61111],8704:[0,.69444,0,0,.55556],8706:[0,.69444,.05556,.08334,.5309],8707:[0,.69444,0,0,.55556],8709:[.05556,.75,0,0,.5],8711:[0,.68333,0,0,.83334],8712:[.0391,.5391,0,0,.66667],8715:[.0391,.5391,0,0,.66667],8722:[.08333,.58333,0,0,.77778],8723:[.08333,.58333,0,0,.77778],8725:[.25,.75,0,0,.5],8726:[.25,.75,0,0,.5],8727:[-.03472,.46528,0,0,.5],8728:[-.05555,.44445,0,0,.5],8729:[-.05555,.44445,0,0,.5],8730:[.2,.8,0,0,.83334],8733:[0,.43056,0,0,.77778],8734:[0,.43056,0,0,1],8736:[0,.69224,0,0,.72222],8739:[.25,.75,0,0,.27778],8741:[.25,.75,0,0,.5],8743:[0,.55556,0,0,.66667],8744:[0,.55556,0,0,.66667],8745:[0,.55556,0,0,.66667],8746:[0,.55556,0,0,.66667],8747:[.19444,.69444,.11111,0,.41667],8764:[-.13313,.36687,0,0,.77778],8768:[.19444,.69444,0,0,.27778],8771:[-.03625,.46375,0,0,.77778],8773:[-.022,.589,0,0,.778],8776:[-.01688,.48312,0,0,.77778],8781:[-.03625,.46375,0,0,.77778],8784:[-.133,.673,0,0,.778],8801:[-.03625,.46375,0,0,.77778],8804:[.13597,.63597,0,0,.77778],8805:[.13597,.63597,0,0,.77778],8810:[.0391,.5391,0,0,1],8811:[.0391,.5391,0,0,1],8826:[.0391,.5391,0,0,.77778],8827:[.0391,.5391,0,0,.77778],8834:[.0391,.5391,0,0,.77778],8835:[.0391,.5391,0,0,.77778],8838:[.13597,.63597,0,0,.77778],8839:[.13597,.63597,0,0,.77778],8846:[0,.55556,0,0,.66667],8849:[.13597,.63597,0,0,.77778],8850:[.13597,.63597,0,0,.77778],8851:[0,.55556,0,0,.66667],8852:[0,.55556,0,0,.66667],8853:[.08333,.58333,0,0,.77778],8854:[.08333,.58333,0,0,.77778],8855:[.08333,.58333,0,0,.77778],8856:[.08333,.58333,0,0,.77778],8857:[.08333,.58333,0,0,.77778],8866:[0,.69444,0,0,.61111],8867:[0,.69444,0,0,.61111],8868:[0,.69444,0,0,.77778],8869:[0,.69444,0,0,.77778],8872:[.249,.75,0,0,.867],8900:[-.05555,.44445,0,0,.5],8901:[-.05555,.44445,0,0,.27778],8902:[-.03472,.46528,0,0,.5],8904:[.005,.505,0,0,.9],8942:[.03,.903,0,0,.278],8943:[-.19,.313,0,0,1.172],8945:[-.1,.823,0,0,1.282],8968:[.25,.75,0,0,.44445],8969:[.25,.75,0,0,.44445],8970:[.25,.75,0,0,.44445],8971:[.25,.75,0,0,.44445],8994:[-.14236,.35764,0,0,1],8995:[-.14236,.35764,0,0,1],9136:[.244,.744,0,0,.412],9137:[.244,.745,0,0,.412],9651:[.19444,.69444,0,0,.88889],9657:[-.03472,.46528,0,0,.5],9661:[.19444,.69444,0,0,.88889],9667:[-.03472,.46528,0,0,.5],9711:[.19444,.69444,0,0,1],9824:[.12963,.69444,0,0,.77778],9825:[.12963,.69444,0,0,.77778],9826:[.12963,.69444,0,0,.77778],9827:[.12963,.69444,0,0,.77778],9837:[0,.75,0,0,.38889],9838:[.19444,.69444,0,0,.38889],9839:[.19444,.69444,0,0,.38889],10216:[.25,.75,0,0,.38889],10217:[.25,.75,0,0,.38889],10222:[.244,.744,0,0,.412],10223:[.244,.745,0,0,.412],10229:[.011,.511,0,0,1.609],10230:[.011,.511,0,0,1.638],10231:[.011,.511,0,0,1.859],10232:[.024,.525,0,0,1.609],10233:[.024,.525,0,0,1.638],10234:[.024,.525,0,0,1.858],10236:[.011,.511,0,0,1.638],10815:[0,.68333,0,0,.75],10927:[.13597,.63597,0,0,.77778],10928:[.13597,.63597,0,0,.77778],57376:[.19444,.69444,0,0,0]},"Math-BoldItalic":{32:[0,0,0,0,.25],48:[0,.44444,0,0,.575],49:[0,.44444,0,0,.575],50:[0,.44444,0,0,.575],51:[.19444,.44444,0,0,.575],52:[.19444,.44444,0,0,.575],53:[.19444,.44444,0,0,.575],54:[0,.64444,0,0,.575],55:[.19444,.44444,0,0,.575],56:[0,.64444,0,0,.575],57:[.19444,.44444,0,0,.575],65:[0,.68611,0,0,.86944],66:[0,.68611,.04835,0,.8664],67:[0,.68611,.06979,0,.81694],68:[0,.68611,.03194,0,.93812],69:[0,.68611,.05451,0,.81007],70:[0,.68611,.15972,0,.68889],71:[0,.68611,0,0,.88673],72:[0,.68611,.08229,0,.98229],73:[0,.68611,.07778,0,.51111],74:[0,.68611,.10069,0,.63125],75:[0,.68611,.06979,0,.97118],76:[0,.68611,0,0,.75555],77:[0,.68611,.11424,0,1.14201],78:[0,.68611,.11424,0,.95034],79:[0,.68611,.03194,0,.83666],80:[0,.68611,.15972,0,.72309],81:[.19444,.68611,0,0,.86861],82:[0,.68611,.00421,0,.87235],83:[0,.68611,.05382,0,.69271],84:[0,.68611,.15972,0,.63663],85:[0,.68611,.11424,0,.80027],86:[0,.68611,.25555,0,.67778],87:[0,.68611,.15972,0,1.09305],88:[0,.68611,.07778,0,.94722],89:[0,.68611,.25555,0,.67458],90:[0,.68611,.06979,0,.77257],97:[0,.44444,0,0,.63287],98:[0,.69444,0,0,.52083],99:[0,.44444,0,0,.51342],100:[0,.69444,0,0,.60972],101:[0,.44444,0,0,.55361],102:[.19444,.69444,.11042,0,.56806],103:[.19444,.44444,.03704,0,.5449],104:[0,.69444,0,0,.66759],105:[0,.69326,0,0,.4048],106:[.19444,.69326,.0622,0,.47083],107:[0,.69444,.01852,0,.6037],108:[0,.69444,.0088,0,.34815],109:[0,.44444,0,0,1.0324],110:[0,.44444,0,0,.71296],111:[0,.44444,0,0,.58472],112:[.19444,.44444,0,0,.60092],113:[.19444,.44444,.03704,0,.54213],114:[0,.44444,.03194,0,.5287],115:[0,.44444,0,0,.53125],116:[0,.63492,0,0,.41528],117:[0,.44444,0,0,.68102],118:[0,.44444,.03704,0,.56666],119:[0,.44444,.02778,0,.83148],120:[0,.44444,0,0,.65903],121:[.19444,.44444,.03704,0,.59028],122:[0,.44444,.04213,0,.55509],160:[0,0,0,0,.25],915:[0,.68611,.15972,0,.65694],916:[0,.68611,0,0,.95833],920:[0,.68611,.03194,0,.86722],923:[0,.68611,0,0,.80555],926:[0,.68611,.07458,0,.84125],928:[0,.68611,.08229,0,.98229],931:[0,.68611,.05451,0,.88507],933:[0,.68611,.15972,0,.67083],934:[0,.68611,0,0,.76666],936:[0,.68611,.11653,0,.71402],937:[0,.68611,.04835,0,.8789],945:[0,.44444,0,0,.76064],946:[.19444,.69444,.03403,0,.65972],947:[.19444,.44444,.06389,0,.59003],948:[0,.69444,.03819,0,.52222],949:[0,.44444,0,0,.52882],950:[.19444,.69444,.06215,0,.50833],951:[.19444,.44444,.03704,0,.6],952:[0,.69444,.03194,0,.5618],953:[0,.44444,0,0,.41204],954:[0,.44444,0,0,.66759],955:[0,.69444,0,0,.67083],956:[.19444,.44444,0,0,.70787],957:[0,.44444,.06898,0,.57685],958:[.19444,.69444,.03021,0,.50833],959:[0,.44444,0,0,.58472],960:[0,.44444,.03704,0,.68241],961:[.19444,.44444,0,0,.6118],962:[.09722,.44444,.07917,0,.42361],963:[0,.44444,.03704,0,.68588],964:[0,.44444,.13472,0,.52083],965:[0,.44444,.03704,0,.63055],966:[.19444,.44444,0,0,.74722],967:[.19444,.44444,0,0,.71805],968:[.19444,.69444,.03704,0,.75833],969:[0,.44444,.03704,0,.71782],977:[0,.69444,0,0,.69155],981:[.19444,.69444,0,0,.7125],982:[0,.44444,.03194,0,.975],1009:[.19444,.44444,0,0,.6118],1013:[0,.44444,0,0,.48333],57649:[0,.44444,0,0,.39352],57911:[.19444,.44444,0,0,.43889]},"Math-Italic":{32:[0,0,0,0,.25],48:[0,.43056,0,0,.5],49:[0,.43056,0,0,.5],50:[0,.43056,0,0,.5],51:[.19444,.43056,0,0,.5],52:[.19444,.43056,0,0,.5],53:[.19444,.43056,0,0,.5],54:[0,.64444,0,0,.5],55:[.19444,.43056,0,0,.5],56:[0,.64444,0,0,.5],57:[.19444,.43056,0,0,.5],65:[0,.68333,0,.13889,.75],66:[0,.68333,.05017,.08334,.75851],67:[0,.68333,.07153,.08334,.71472],68:[0,.68333,.02778,.05556,.82792],69:[0,.68333,.05764,.08334,.7382],70:[0,.68333,.13889,.08334,.64306],71:[0,.68333,0,.08334,.78625],72:[0,.68333,.08125,.05556,.83125],73:[0,.68333,.07847,.11111,.43958],74:[0,.68333,.09618,.16667,.55451],75:[0,.68333,.07153,.05556,.84931],76:[0,.68333,0,.02778,.68056],77:[0,.68333,.10903,.08334,.97014],78:[0,.68333,.10903,.08334,.80347],79:[0,.68333,.02778,.08334,.76278],80:[0,.68333,.13889,.08334,.64201],81:[.19444,.68333,0,.08334,.79056],82:[0,.68333,.00773,.08334,.75929],83:[0,.68333,.05764,.08334,.6132],84:[0,.68333,.13889,.08334,.58438],85:[0,.68333,.10903,.02778,.68278],86:[0,.68333,.22222,0,.58333],87:[0,.68333,.13889,0,.94445],88:[0,.68333,.07847,.08334,.82847],89:[0,.68333,.22222,0,.58056],90:[0,.68333,.07153,.08334,.68264],97:[0,.43056,0,0,.52859],98:[0,.69444,0,0,.42917],99:[0,.43056,0,.05556,.43276],100:[0,.69444,0,.16667,.52049],101:[0,.43056,0,.05556,.46563],102:[.19444,.69444,.10764,.16667,.48959],103:[.19444,.43056,.03588,.02778,.47697],104:[0,.69444,0,0,.57616],105:[0,.65952,0,0,.34451],106:[.19444,.65952,.05724,0,.41181],107:[0,.69444,.03148,0,.5206],108:[0,.69444,.01968,.08334,.29838],109:[0,.43056,0,0,.87801],110:[0,.43056,0,0,.60023],111:[0,.43056,0,.05556,.48472],112:[.19444,.43056,0,.08334,.50313],113:[.19444,.43056,.03588,.08334,.44641],114:[0,.43056,.02778,.05556,.45116],115:[0,.43056,0,.05556,.46875],116:[0,.61508,0,.08334,.36111],117:[0,.43056,0,.02778,.57246],118:[0,.43056,.03588,.02778,.48472],119:[0,.43056,.02691,.08334,.71592],120:[0,.43056,0,.02778,.57153],121:[.19444,.43056,.03588,.05556,.49028],122:[0,.43056,.04398,.05556,.46505],160:[0,0,0,0,.25],915:[0,.68333,.13889,.08334,.61528],916:[0,.68333,0,.16667,.83334],920:[0,.68333,.02778,.08334,.76278],923:[0,.68333,0,.16667,.69445],926:[0,.68333,.07569,.08334,.74236],928:[0,.68333,.08125,.05556,.83125],931:[0,.68333,.05764,.08334,.77986],933:[0,.68333,.13889,.05556,.58333],934:[0,.68333,0,.08334,.66667],936:[0,.68333,.11,.05556,.61222],937:[0,.68333,.05017,.08334,.7724],945:[0,.43056,.0037,.02778,.6397],946:[.19444,.69444,.05278,.08334,.56563],947:[.19444,.43056,.05556,0,.51773],948:[0,.69444,.03785,.05556,.44444],949:[0,.43056,0,.08334,.46632],950:[.19444,.69444,.07378,.08334,.4375],951:[.19444,.43056,.03588,.05556,.49653],952:[0,.69444,.02778,.08334,.46944],953:[0,.43056,0,.05556,.35394],954:[0,.43056,0,0,.57616],955:[0,.69444,0,0,.58334],956:[.19444,.43056,0,.02778,.60255],957:[0,.43056,.06366,.02778,.49398],958:[.19444,.69444,.04601,.11111,.4375],959:[0,.43056,0,.05556,.48472],960:[0,.43056,.03588,0,.57003],961:[.19444,.43056,0,.08334,.51702],962:[.09722,.43056,.07986,.08334,.36285],963:[0,.43056,.03588,0,.57141],964:[0,.43056,.1132,.02778,.43715],965:[0,.43056,.03588,.02778,.54028],966:[.19444,.43056,0,.08334,.65417],967:[.19444,.43056,0,.05556,.62569],968:[.19444,.69444,.03588,.11111,.65139],969:[0,.43056,.03588,0,.62245],977:[0,.69444,0,.08334,.59144],981:[.19444,.69444,0,.08334,.59583],982:[0,.43056,.02778,0,.82813],1009:[.19444,.43056,0,.08334,.51702],1013:[0,.43056,0,.05556,.4059],57649:[0,.43056,0,.02778,.32246],57911:[.19444,.43056,0,.08334,.38403]},"SansSerif-Bold":{32:[0,0,0,0,.25],33:[0,.69444,0,0,.36667],34:[0,.69444,0,0,.55834],35:[.19444,.69444,0,0,.91667],36:[.05556,.75,0,0,.55],37:[.05556,.75,0,0,1.02912],38:[0,.69444,0,0,.83056],39:[0,.69444,0,0,.30556],40:[.25,.75,0,0,.42778],41:[.25,.75,0,0,.42778],42:[0,.75,0,0,.55],43:[.11667,.61667,0,0,.85556],44:[.10556,.13056,0,0,.30556],45:[0,.45833,0,0,.36667],46:[0,.13056,0,0,.30556],47:[.25,.75,0,0,.55],48:[0,.69444,0,0,.55],49:[0,.69444,0,0,.55],50:[0,.69444,0,0,.55],51:[0,.69444,0,0,.55],52:[0,.69444,0,0,.55],53:[0,.69444,0,0,.55],54:[0,.69444,0,0,.55],55:[0,.69444,0,0,.55],56:[0,.69444,0,0,.55],57:[0,.69444,0,0,.55],58:[0,.45833,0,0,.30556],59:[.10556,.45833,0,0,.30556],61:[-.09375,.40625,0,0,.85556],63:[0,.69444,0,0,.51945],64:[0,.69444,0,0,.73334],65:[0,.69444,0,0,.73334],66:[0,.69444,0,0,.73334],67:[0,.69444,0,0,.70278],68:[0,.69444,0,0,.79445],69:[0,.69444,0,0,.64167],70:[0,.69444,0,0,.61111],71:[0,.69444,0,0,.73334],72:[0,.69444,0,0,.79445],73:[0,.69444,0,0,.33056],74:[0,.69444,0,0,.51945],75:[0,.69444,0,0,.76389],76:[0,.69444,0,0,.58056],77:[0,.69444,0,0,.97778],78:[0,.69444,0,0,.79445],79:[0,.69444,0,0,.79445],80:[0,.69444,0,0,.70278],81:[.10556,.69444,0,0,.79445],82:[0,.69444,0,0,.70278],83:[0,.69444,0,0,.61111],84:[0,.69444,0,0,.73334],85:[0,.69444,0,0,.76389],86:[0,.69444,.01528,0,.73334],87:[0,.69444,.01528,0,1.03889],88:[0,.69444,0,0,.73334],89:[0,.69444,.0275,0,.73334],90:[0,.69444,0,0,.67223],91:[.25,.75,0,0,.34306],93:[.25,.75,0,0,.34306],94:[0,.69444,0,0,.55],95:[.35,.10833,.03056,0,.55],97:[0,.45833,0,0,.525],98:[0,.69444,0,0,.56111],99:[0,.45833,0,0,.48889],100:[0,.69444,0,0,.56111],101:[0,.45833,0,0,.51111],102:[0,.69444,.07639,0,.33611],103:[.19444,.45833,.01528,0,.55],104:[0,.69444,0,0,.56111],105:[0,.69444,0,0,.25556],106:[.19444,.69444,0,0,.28611],107:[0,.69444,0,0,.53056],108:[0,.69444,0,0,.25556],109:[0,.45833,0,0,.86667],110:[0,.45833,0,0,.56111],111:[0,.45833,0,0,.55],112:[.19444,.45833,0,0,.56111],113:[.19444,.45833,0,0,.56111],114:[0,.45833,.01528,0,.37222],115:[0,.45833,0,0,.42167],116:[0,.58929,0,0,.40417],117:[0,.45833,0,0,.56111],118:[0,.45833,.01528,0,.5],119:[0,.45833,.01528,0,.74445],120:[0,.45833,0,0,.5],121:[.19444,.45833,.01528,0,.5],122:[0,.45833,0,0,.47639],126:[.35,.34444,0,0,.55],160:[0,0,0,0,.25],168:[0,.69444,0,0,.55],176:[0,.69444,0,0,.73334],180:[0,.69444,0,0,.55],184:[.17014,0,0,0,.48889],305:[0,.45833,0,0,.25556],567:[.19444,.45833,0,0,.28611],710:[0,.69444,0,0,.55],711:[0,.63542,0,0,.55],713:[0,.63778,0,0,.55],728:[0,.69444,0,0,.55],729:[0,.69444,0,0,.30556],730:[0,.69444,0,0,.73334],732:[0,.69444,0,0,.55],733:[0,.69444,0,0,.55],915:[0,.69444,0,0,.58056],916:[0,.69444,0,0,.91667],920:[0,.69444,0,0,.85556],923:[0,.69444,0,0,.67223],926:[0,.69444,0,0,.73334],928:[0,.69444,0,0,.79445],931:[0,.69444,0,0,.79445],933:[0,.69444,0,0,.85556],934:[0,.69444,0,0,.79445],936:[0,.69444,0,0,.85556],937:[0,.69444,0,0,.79445],8211:[0,.45833,.03056,0,.55],8212:[0,.45833,.03056,0,1.10001],8216:[0,.69444,0,0,.30556],8217:[0,.69444,0,0,.30556],8220:[0,.69444,0,0,.55834],8221:[0,.69444,0,0,.55834]},"SansSerif-Italic":{32:[0,0,0,0,.25],33:[0,.69444,.05733,0,.31945],34:[0,.69444,.00316,0,.5],35:[.19444,.69444,.05087,0,.83334],36:[.05556,.75,.11156,0,.5],37:[.05556,.75,.03126,0,.83334],38:[0,.69444,.03058,0,.75834],39:[0,.69444,.07816,0,.27778],40:[.25,.75,.13164,0,.38889],41:[.25,.75,.02536,0,.38889],42:[0,.75,.11775,0,.5],43:[.08333,.58333,.02536,0,.77778],44:[.125,.08333,0,0,.27778],45:[0,.44444,.01946,0,.33333],46:[0,.08333,0,0,.27778],47:[.25,.75,.13164,0,.5],48:[0,.65556,.11156,0,.5],49:[0,.65556,.11156,0,.5],50:[0,.65556,.11156,0,.5],51:[0,.65556,.11156,0,.5],52:[0,.65556,.11156,0,.5],53:[0,.65556,.11156,0,.5],54:[0,.65556,.11156,0,.5],55:[0,.65556,.11156,0,.5],56:[0,.65556,.11156,0,.5],57:[0,.65556,.11156,0,.5],58:[0,.44444,.02502,0,.27778],59:[.125,.44444,.02502,0,.27778],61:[-.13,.37,.05087,0,.77778],63:[0,.69444,.11809,0,.47222],64:[0,.69444,.07555,0,.66667],65:[0,.69444,0,0,.66667],66:[0,.69444,.08293,0,.66667],67:[0,.69444,.11983,0,.63889],68:[0,.69444,.07555,0,.72223],69:[0,.69444,.11983,0,.59722],70:[0,.69444,.13372,0,.56945],71:[0,.69444,.11983,0,.66667],72:[0,.69444,.08094,0,.70834],73:[0,.69444,.13372,0,.27778],74:[0,.69444,.08094,0,.47222],75:[0,.69444,.11983,0,.69445],76:[0,.69444,0,0,.54167],77:[0,.69444,.08094,0,.875],78:[0,.69444,.08094,0,.70834],79:[0,.69444,.07555,0,.73611],80:[0,.69444,.08293,0,.63889],81:[.125,.69444,.07555,0,.73611],82:[0,.69444,.08293,0,.64584],83:[0,.69444,.09205,0,.55556],84:[0,.69444,.13372,0,.68056],85:[0,.69444,.08094,0,.6875],86:[0,.69444,.1615,0,.66667],87:[0,.69444,.1615,0,.94445],88:[0,.69444,.13372,0,.66667],89:[0,.69444,.17261,0,.66667],90:[0,.69444,.11983,0,.61111],91:[.25,.75,.15942,0,.28889],93:[.25,.75,.08719,0,.28889],94:[0,.69444,.0799,0,.5],95:[.35,.09444,.08616,0,.5],97:[0,.44444,.00981,0,.48056],98:[0,.69444,.03057,0,.51667],99:[0,.44444,.08336,0,.44445],100:[0,.69444,.09483,0,.51667],101:[0,.44444,.06778,0,.44445],102:[0,.69444,.21705,0,.30556],103:[.19444,.44444,.10836,0,.5],104:[0,.69444,.01778,0,.51667],105:[0,.67937,.09718,0,.23889],106:[.19444,.67937,.09162,0,.26667],107:[0,.69444,.08336,0,.48889],108:[0,.69444,.09483,0,.23889],109:[0,.44444,.01778,0,.79445],110:[0,.44444,.01778,0,.51667],111:[0,.44444,.06613,0,.5],112:[.19444,.44444,.0389,0,.51667],113:[.19444,.44444,.04169,0,.51667],114:[0,.44444,.10836,0,.34167],115:[0,.44444,.0778,0,.38333],116:[0,.57143,.07225,0,.36111],117:[0,.44444,.04169,0,.51667],118:[0,.44444,.10836,0,.46111],119:[0,.44444,.10836,0,.68334],120:[0,.44444,.09169,0,.46111],121:[.19444,.44444,.10836,0,.46111],122:[0,.44444,.08752,0,.43472],126:[.35,.32659,.08826,0,.5],160:[0,0,0,0,.25],168:[0,.67937,.06385,0,.5],176:[0,.69444,0,0,.73752],184:[.17014,0,0,0,.44445],305:[0,.44444,.04169,0,.23889],567:[.19444,.44444,.04169,0,.26667],710:[0,.69444,.0799,0,.5],711:[0,.63194,.08432,0,.5],713:[0,.60889,.08776,0,.5],714:[0,.69444,.09205,0,.5],715:[0,.69444,0,0,.5],728:[0,.69444,.09483,0,.5],729:[0,.67937,.07774,0,.27778],730:[0,.69444,0,0,.73752],732:[0,.67659,.08826,0,.5],733:[0,.69444,.09205,0,.5],915:[0,.69444,.13372,0,.54167],916:[0,.69444,0,0,.83334],920:[0,.69444,.07555,0,.77778],923:[0,.69444,0,0,.61111],926:[0,.69444,.12816,0,.66667],928:[0,.69444,.08094,0,.70834],931:[0,.69444,.11983,0,.72222],933:[0,.69444,.09031,0,.77778],934:[0,.69444,.04603,0,.72222],936:[0,.69444,.09031,0,.77778],937:[0,.69444,.08293,0,.72222],8211:[0,.44444,.08616,0,.5],8212:[0,.44444,.08616,0,1],8216:[0,.69444,.07816,0,.27778],8217:[0,.69444,.07816,0,.27778],8220:[0,.69444,.14205,0,.5],8221:[0,.69444,.00316,0,.5]},"SansSerif-Regular":{32:[0,0,0,0,.25],33:[0,.69444,0,0,.31945],34:[0,.69444,0,0,.5],35:[.19444,.69444,0,0,.83334],36:[.05556,.75,0,0,.5],37:[.05556,.75,0,0,.83334],38:[0,.69444,0,0,.75834],39:[0,.69444,0,0,.27778],40:[.25,.75,0,0,.38889],41:[.25,.75,0,0,.38889],42:[0,.75,0,0,.5],43:[.08333,.58333,0,0,.77778],44:[.125,.08333,0,0,.27778],45:[0,.44444,0,0,.33333],46:[0,.08333,0,0,.27778],47:[.25,.75,0,0,.5],48:[0,.65556,0,0,.5],49:[0,.65556,0,0,.5],50:[0,.65556,0,0,.5],51:[0,.65556,0,0,.5],52:[0,.65556,0,0,.5],53:[0,.65556,0,0,.5],54:[0,.65556,0,0,.5],55:[0,.65556,0,0,.5],56:[0,.65556,0,0,.5],57:[0,.65556,0,0,.5],58:[0,.44444,0,0,.27778],59:[.125,.44444,0,0,.27778],61:[-.13,.37,0,0,.77778],63:[0,.69444,0,0,.47222],64:[0,.69444,0,0,.66667],65:[0,.69444,0,0,.66667],66:[0,.69444,0,0,.66667],67:[0,.69444,0,0,.63889],68:[0,.69444,0,0,.72223],69:[0,.69444,0,0,.59722],70:[0,.69444,0,0,.56945],71:[0,.69444,0,0,.66667],72:[0,.69444,0,0,.70834],73:[0,.69444,0,0,.27778],74:[0,.69444,0,0,.47222],75:[0,.69444,0,0,.69445],76:[0,.69444,0,0,.54167],77:[0,.69444,0,0,.875],78:[0,.69444,0,0,.70834],79:[0,.69444,0,0,.73611],80:[0,.69444,0,0,.63889],81:[.125,.69444,0,0,.73611],82:[0,.69444,0,0,.64584],83:[0,.69444,0,0,.55556],84:[0,.69444,0,0,.68056],85:[0,.69444,0,0,.6875],86:[0,.69444,.01389,0,.66667],87:[0,.69444,.01389,0,.94445],88:[0,.69444,0,0,.66667],89:[0,.69444,.025,0,.66667],90:[0,.69444,0,0,.61111],91:[.25,.75,0,0,.28889],93:[.25,.75,0,0,.28889],94:[0,.69444,0,0,.5],95:[.35,.09444,.02778,0,.5],97:[0,.44444,0,0,.48056],98:[0,.69444,0,0,.51667],99:[0,.44444,0,0,.44445],100:[0,.69444,0,0,.51667],101:[0,.44444,0,0,.44445],102:[0,.69444,.06944,0,.30556],103:[.19444,.44444,.01389,0,.5],104:[0,.69444,0,0,.51667],105:[0,.67937,0,0,.23889],106:[.19444,.67937,0,0,.26667],107:[0,.69444,0,0,.48889],108:[0,.69444,0,0,.23889],109:[0,.44444,0,0,.79445],110:[0,.44444,0,0,.51667],111:[0,.44444,0,0,.5],112:[.19444,.44444,0,0,.51667],113:[.19444,.44444,0,0,.51667],114:[0,.44444,.01389,0,.34167],115:[0,.44444,0,0,.38333],116:[0,.57143,0,0,.36111],117:[0,.44444,0,0,.51667],118:[0,.44444,.01389,0,.46111],119:[0,.44444,.01389,0,.68334],120:[0,.44444,0,0,.46111],121:[.19444,.44444,.01389,0,.46111],122:[0,.44444,0,0,.43472],126:[.35,.32659,0,0,.5],160:[0,0,0,0,.25],168:[0,.67937,0,0,.5],176:[0,.69444,0,0,.66667],184:[.17014,0,0,0,.44445],305:[0,.44444,0,0,.23889],567:[.19444,.44444,0,0,.26667],710:[0,.69444,0,0,.5],711:[0,.63194,0,0,.5],713:[0,.60889,0,0,.5],714:[0,.69444,0,0,.5],715:[0,.69444,0,0,.5],728:[0,.69444,0,0,.5],729:[0,.67937,0,0,.27778],730:[0,.69444,0,0,.66667],732:[0,.67659,0,0,.5],733:[0,.69444,0,0,.5],915:[0,.69444,0,0,.54167],916:[0,.69444,0,0,.83334],920:[0,.69444,0,0,.77778],923:[0,.69444,0,0,.61111],926:[0,.69444,0,0,.66667],928:[0,.69444,0,0,.70834],931:[0,.69444,0,0,.72222],933:[0,.69444,0,0,.77778],934:[0,.69444,0,0,.72222],936:[0,.69444,0,0,.77778],937:[0,.69444,0,0,.72222],8211:[0,.44444,.02778,0,.5],8212:[0,.44444,.02778,0,1],8216:[0,.69444,0,0,.27778],8217:[0,.69444,0,0,.27778],8220:[0,.69444,0,0,.5],8221:[0,.69444,0,0,.5]},"Script-Regular":{32:[0,0,0,0,.25],65:[0,.7,.22925,0,.80253],66:[0,.7,.04087,0,.90757],67:[0,.7,.1689,0,.66619],68:[0,.7,.09371,0,.77443],69:[0,.7,.18583,0,.56162],70:[0,.7,.13634,0,.89544],71:[0,.7,.17322,0,.60961],72:[0,.7,.29694,0,.96919],73:[0,.7,.19189,0,.80907],74:[.27778,.7,.19189,0,1.05159],75:[0,.7,.31259,0,.91364],76:[0,.7,.19189,0,.87373],77:[0,.7,.15981,0,1.08031],78:[0,.7,.3525,0,.9015],79:[0,.7,.08078,0,.73787],80:[0,.7,.08078,0,1.01262],81:[0,.7,.03305,0,.88282],82:[0,.7,.06259,0,.85],83:[0,.7,.19189,0,.86767],84:[0,.7,.29087,0,.74697],85:[0,.7,.25815,0,.79996],86:[0,.7,.27523,0,.62204],87:[0,.7,.27523,0,.80532],88:[0,.7,.26006,0,.94445],89:[0,.7,.2939,0,.70961],90:[0,.7,.24037,0,.8212],160:[0,0,0,0,.25]},"Size1-Regular":{32:[0,0,0,0,.25],40:[.35001,.85,0,0,.45834],41:[.35001,.85,0,0,.45834],47:[.35001,.85,0,0,.57778],91:[.35001,.85,0,0,.41667],92:[.35001,.85,0,0,.57778],93:[.35001,.85,0,0,.41667],123:[.35001,.85,0,0,.58334],125:[.35001,.85,0,0,.58334],160:[0,0,0,0,.25],710:[0,.72222,0,0,.55556],732:[0,.72222,0,0,.55556],770:[0,.72222,0,0,.55556],771:[0,.72222,0,0,.55556],8214:[-99e-5,.601,0,0,.77778],8593:[1e-5,.6,0,0,.66667],8595:[1e-5,.6,0,0,.66667],8657:[1e-5,.6,0,0,.77778],8659:[1e-5,.6,0,0,.77778],8719:[.25001,.75,0,0,.94445],8720:[.25001,.75,0,0,.94445],8721:[.25001,.75,0,0,1.05556],8730:[.35001,.85,0,0,1],8739:[-.00599,.606,0,0,.33333],8741:[-.00599,.606,0,0,.55556],8747:[.30612,.805,.19445,0,.47222],8748:[.306,.805,.19445,0,.47222],8749:[.306,.805,.19445,0,.47222],8750:[.30612,.805,.19445,0,.47222],8896:[.25001,.75,0,0,.83334],8897:[.25001,.75,0,0,.83334],8898:[.25001,.75,0,0,.83334],8899:[.25001,.75,0,0,.83334],8968:[.35001,.85,0,0,.47222],8969:[.35001,.85,0,0,.47222],8970:[.35001,.85,0,0,.47222],8971:[.35001,.85,0,0,.47222],9168:[-99e-5,.601,0,0,.66667],10216:[.35001,.85,0,0,.47222],10217:[.35001,.85,0,0,.47222],10752:[.25001,.75,0,0,1.11111],10753:[.25001,.75,0,0,1.11111],10754:[.25001,.75,0,0,1.11111],10756:[.25001,.75,0,0,.83334],10758:[.25001,.75,0,0,.83334]},"Size2-Regular":{32:[0,0,0,0,.25],40:[.65002,1.15,0,0,.59722],41:[.65002,1.15,0,0,.59722],47:[.65002,1.15,0,0,.81111],91:[.65002,1.15,0,0,.47222],92:[.65002,1.15,0,0,.81111],93:[.65002,1.15,0,0,.47222],123:[.65002,1.15,0,0,.66667],125:[.65002,1.15,0,0,.66667],160:[0,0,0,0,.25],710:[0,.75,0,0,1],732:[0,.75,0,0,1],770:[0,.75,0,0,1],771:[0,.75,0,0,1],8719:[.55001,1.05,0,0,1.27778],8720:[.55001,1.05,0,0,1.27778],8721:[.55001,1.05,0,0,1.44445],8730:[.65002,1.15,0,0,1],8747:[.86225,1.36,.44445,0,.55556],8748:[.862,1.36,.44445,0,.55556],8749:[.862,1.36,.44445,0,.55556],8750:[.86225,1.36,.44445,0,.55556],8896:[.55001,1.05,0,0,1.11111],8897:[.55001,1.05,0,0,1.11111],8898:[.55001,1.05,0,0,1.11111],8899:[.55001,1.05,0,0,1.11111],8968:[.65002,1.15,0,0,.52778],8969:[.65002,1.15,0,0,.52778],8970:[.65002,1.15,0,0,.52778],8971:[.65002,1.15,0,0,.52778],10216:[.65002,1.15,0,0,.61111],10217:[.65002,1.15,0,0,.61111],10752:[.55001,1.05,0,0,1.51112],10753:[.55001,1.05,0,0,1.51112],10754:[.55001,1.05,0,0,1.51112],10756:[.55001,1.05,0,0,1.11111],10758:[.55001,1.05,0,0,1.11111]},"Size3-Regular":{32:[0,0,0,0,.25],40:[.95003,1.45,0,0,.73611],41:[.95003,1.45,0,0,.73611],47:[.95003,1.45,0,0,1.04445],91:[.95003,1.45,0,0,.52778],92:[.95003,1.45,0,0,1.04445],93:[.95003,1.45,0,0,.52778],123:[.95003,1.45,0,0,.75],125:[.95003,1.45,0,0,.75],160:[0,0,0,0,.25],710:[0,.75,0,0,1.44445],732:[0,.75,0,0,1.44445],770:[0,.75,0,0,1.44445],771:[0,.75,0,0,1.44445],8730:[.95003,1.45,0,0,1],8968:[.95003,1.45,0,0,.58334],8969:[.95003,1.45,0,0,.58334],8970:[.95003,1.45,0,0,.58334],8971:[.95003,1.45,0,0,.58334],10216:[.95003,1.45,0,0,.75],10217:[.95003,1.45,0,0,.75]},"Size4-Regular":{32:[0,0,0,0,.25],40:[1.25003,1.75,0,0,.79167],41:[1.25003,1.75,0,0,.79167],47:[1.25003,1.75,0,0,1.27778],91:[1.25003,1.75,0,0,.58334],92:[1.25003,1.75,0,0,1.27778],93:[1.25003,1.75,0,0,.58334],123:[1.25003,1.75,0,0,.80556],125:[1.25003,1.75,0,0,.80556],160:[0,0,0,0,.25],710:[0,.825,0,0,1.8889],732:[0,.825,0,0,1.8889],770:[0,.825,0,0,1.8889],771:[0,.825,0,0,1.8889],8730:[1.25003,1.75,0,0,1],8968:[1.25003,1.75,0,0,.63889],8969:[1.25003,1.75,0,0,.63889],8970:[1.25003,1.75,0,0,.63889],8971:[1.25003,1.75,0,0,.63889],9115:[.64502,1.155,0,0,.875],9116:[1e-5,.6,0,0,.875],9117:[.64502,1.155,0,0,.875],9118:[.64502,1.155,0,0,.875],9119:[1e-5,.6,0,0,.875],9120:[.64502,1.155,0,0,.875],9121:[.64502,1.155,0,0,.66667],9122:[-99e-5,.601,0,0,.66667],9123:[.64502,1.155,0,0,.66667],9124:[.64502,1.155,0,0,.66667],9125:[-99e-5,.601,0,0,.66667],9126:[.64502,1.155,0,0,.66667],9127:[1e-5,.9,0,0,.88889],9128:[.65002,1.15,0,0,.88889],9129:[.90001,0,0,0,.88889],9130:[0,.3,0,0,.88889],9131:[1e-5,.9,0,0,.88889],9132:[.65002,1.15,0,0,.88889],9133:[.90001,0,0,0,.88889],9143:[.88502,.915,0,0,1.05556],10216:[1.25003,1.75,0,0,.80556],10217:[1.25003,1.75,0,0,.80556],57344:[-.00499,.605,0,0,1.05556],57345:[-.00499,.605,0,0,1.05556],57680:[0,.12,0,0,.45],57681:[0,.12,0,0,.45],57682:[0,.12,0,0,.45],57683:[0,.12,0,0,.45]},"Typewriter-Regular":{32:[0,0,0,0,.525],33:[0,.61111,0,0,.525],34:[0,.61111,0,0,.525],35:[0,.61111,0,0,.525],36:[.08333,.69444,0,0,.525],37:[.08333,.69444,0,0,.525],38:[0,.61111,0,0,.525],39:[0,.61111,0,0,.525],40:[.08333,.69444,0,0,.525],41:[.08333,.69444,0,0,.525],42:[0,.52083,0,0,.525],43:[-.08056,.53055,0,0,.525],44:[.13889,.125,0,0,.525],45:[-.08056,.53055,0,0,.525],46:[0,.125,0,0,.525],47:[.08333,.69444,0,0,.525],48:[0,.61111,0,0,.525],49:[0,.61111,0,0,.525],50:[0,.61111,0,0,.525],51:[0,.61111,0,0,.525],52:[0,.61111,0,0,.525],53:[0,.61111,0,0,.525],54:[0,.61111,0,0,.525],55:[0,.61111,0,0,.525],56:[0,.61111,0,0,.525],57:[0,.61111,0,0,.525],58:[0,.43056,0,0,.525],59:[.13889,.43056,0,0,.525],60:[-.05556,.55556,0,0,.525],61:[-.19549,.41562,0,0,.525],62:[-.05556,.55556,0,0,.525],63:[0,.61111,0,0,.525],64:[0,.61111,0,0,.525],65:[0,.61111,0,0,.525],66:[0,.61111,0,0,.525],67:[0,.61111,0,0,.525],68:[0,.61111,0,0,.525],69:[0,.61111,0,0,.525],70:[0,.61111,0,0,.525],71:[0,.61111,0,0,.525],72:[0,.61111,0,0,.525],73:[0,.61111,0,0,.525],74:[0,.61111,0,0,.525],75:[0,.61111,0,0,.525],76:[0,.61111,0,0,.525],77:[0,.61111,0,0,.525],78:[0,.61111,0,0,.525],79:[0,.61111,0,0,.525],80:[0,.61111,0,0,.525],81:[.13889,.61111,0,0,.525],82:[0,.61111,0,0,.525],83:[0,.61111,0,0,.525],84:[0,.61111,0,0,.525],85:[0,.61111,0,0,.525],86:[0,.61111,0,0,.525],87:[0,.61111,0,0,.525],88:[0,.61111,0,0,.525],89:[0,.61111,0,0,.525],90:[0,.61111,0,0,.525],91:[.08333,.69444,0,0,.525],92:[.08333,.69444,0,0,.525],93:[.08333,.69444,0,0,.525],94:[0,.61111,0,0,.525],95:[.09514,0,0,0,.525],96:[0,.61111,0,0,.525],97:[0,.43056,0,0,.525],98:[0,.61111,0,0,.525],99:[0,.43056,0,0,.525],100:[0,.61111,0,0,.525],101:[0,.43056,0,0,.525],102:[0,.61111,0,0,.525],103:[.22222,.43056,0,0,.525],104:[0,.61111,0,0,.525],105:[0,.61111,0,0,.525],106:[.22222,.61111,0,0,.525],107:[0,.61111,0,0,.525],108:[0,.61111,0,0,.525],109:[0,.43056,0,0,.525],110:[0,.43056,0,0,.525],111:[0,.43056,0,0,.525],112:[.22222,.43056,0,0,.525],113:[.22222,.43056,0,0,.525],114:[0,.43056,0,0,.525],115:[0,.43056,0,0,.525],116:[0,.55358,0,0,.525],117:[0,.43056,0,0,.525],118:[0,.43056,0,0,.525],119:[0,.43056,0,0,.525],120:[0,.43056,0,0,.525],121:[.22222,.43056,0,0,.525],122:[0,.43056,0,0,.525],123:[.08333,.69444,0,0,.525],124:[.08333,.69444,0,0,.525],125:[.08333,.69444,0,0,.525],126:[0,.61111,0,0,.525],127:[0,.61111,0,0,.525],160:[0,0,0,0,.525],176:[0,.61111,0,0,.525],184:[.19445,0,0,0,.525],305:[0,.43056,0,0,.525],567:[.22222,.43056,0,0,.525],711:[0,.56597,0,0,.525],713:[0,.56555,0,0,.525],714:[0,.61111,0,0,.525],715:[0,.61111,0,0,.525],728:[0,.61111,0,0,.525],730:[0,.61111,0,0,.525],770:[0,.61111,0,0,.525],771:[0,.61111,0,0,.525],776:[0,.61111,0,0,.525],915:[0,.61111,0,0,.525],916:[0,.61111,0,0,.525],920:[0,.61111,0,0,.525],923:[0,.61111,0,0,.525],926:[0,.61111,0,0,.525],928:[0,.61111,0,0,.525],931:[0,.61111,0,0,.525],933:[0,.61111,0,0,.525],934:[0,.61111,0,0,.525],936:[0,.61111,0,0,.525],937:[0,.61111,0,0,.525],8216:[0,.61111,0,0,.525],8217:[0,.61111,0,0,.525],8242:[0,.61111,0,0,.525],9251:[.11111,.21944,0,0,.525]}},qa={slant:[.25,.25,.25],space:[0,0,0],stretch:[0,0,0],shrink:[0,0,0],xHeight:[.431,.431,.431],quad:[1,1.171,1.472],extraSpace:[0,0,0],num1:[.677,.732,.925],num2:[.394,.384,.387],num3:[.444,.471,.504],denom1:[.686,.752,1.025],denom2:[.345,.344,.532],sup1:[.413,.503,.504],sup2:[.363,.431,.404],sup3:[.289,.286,.294],sub1:[.15,.143,.2],sub2:[.247,.286,.4],supDrop:[.386,.353,.494],subDrop:[.05,.071,.1],delim1:[2.39,1.7,1.98],delim2:[1.01,1.157,1.42],axisHeight:[.25,.25,.25],defaultRuleThickness:[.04,.049,.049],bigOpSpacing1:[.111,.111,.111],bigOpSpacing2:[.166,.166,.166],bigOpSpacing3:[.2,.2,.2],bigOpSpacing4:[.6,.611,.611],bigOpSpacing5:[.1,.143,.143],sqrtRuleThickness:[.04,.04,.04],ptPerEm:[10,10,10],doubleRuleSep:[.2,.2,.2],arrayRuleWidth:[.04,.04,.04],fboxsep:[.3,.3,.3],fboxrule:[.04,.04,.04]},mc={Å:"A",Ð:"D",Þ:"o",å:"a",ð:"d",þ:"o",А:"A",Б:"B",В:"B",Г:"F",Д:"A",Е:"E",Ж:"K",З:"3",И:"N",Й:"N",К:"K",Л:"N",М:"M",Н:"H",О:"O",П:"N",Р:"P",С:"C",Т:"T",У:"y",Ф:"O",Х:"X",Ц:"U",Ч:"h",Ш:"W",Щ:"W",Ъ:"B",Ы:"X",Ь:"B",Э:"3",Ю:"X",Я:"R",а:"a",б:"b",в:"a",г:"r",д:"y",е:"e",ж:"m",з:"e",и:"n",й:"n",к:"n",л:"n",м:"m",н:"n",о:"o",п:"n",р:"p",с:"c",т:"o",у:"y",ф:"b",х:"x",ц:"n",ч:"n",ш:"w",щ:"w",ъ:"a",ы:"m",ь:"a",э:"e",ю:"m",я:"r"};function Lf(n,e){ii[n]=e}function Cl(n,e,t){if(!ii[e])throw new Error("Font metrics not found for font: "+e+".");var i=n.charCodeAt(0),r=ii[e][i];if(!r&&n[0]in mc&&(i=mc[n[0]].charCodeAt(0),r=ii[e][i]),!r&&t==="text"&&uh(i)&&(r=ii[e][77]),r)return{depth:r[0],height:r[1],italic:r[2],skew:r[3],width:r[4]}}var po={};function If(n){var e;if(n>=5?e=0:n>=3?e=1:e=2,!po[e]){var t=po[e]={cssEmPerMu:qa.quad[e]/18};for(var i in qa)qa.hasOwnProperty(i)&&(t[i]=qa[i][e])}return po[e]}var Ct={math:{},text:{}};function h(n,e,t,i,r,a){Ct[n][r]={font:e,group:t,replace:i},a&&i&&(Ct[n][i]=Ct[n][r])}var x="math",ie="text",_="main",P="ams",Rt="accent-token",we="bin",mn="close",la="inner",Oe="mathord",Xt="op-token",Nn="open",Oa="punct",L="rel",Di="spacing",z="textord";h(x,_,L,"≡","\\equiv",!0);h(x,_,L,"≺","\\prec",!0);h(x,_,L,"≻","\\succ",!0);h(x,_,L,"∼","\\sim",!0);h(x,_,L,"⊥","\\perp");h(x,_,L,"⪯","\\preceq",!0);h(x,_,L,"⪰","\\succeq",!0);h(x,_,L,"≃","\\simeq",!0);h(x,_,L,"∣","\\mid",!0);h(x,_,L,"≪","\\ll",!0);h(x,_,L,"≫","\\gg",!0);h(x,_,L,"≍","\\asymp",!0);h(x,_,L,"∥","\\parallel");h(x,_,L,"⋈","\\bowtie",!0);h(x,_,L,"⌣","\\smile",!0);h(x,_,L,"⊑","\\sqsubseteq",!0);h(x,_,L,"⊒","\\sqsupseteq",!0);h(x,_,L,"≐","\\doteq",!0);h(x,_,L,"⌢","\\frown",!0);h(x,_,L,"∋","\\ni",!0);h(x,_,L,"∝","\\propto",!0);h(x,_,L,"⊢","\\vdash",!0);h(x,_,L,"⊣","\\dashv",!0);h(x,_,L,"∋","\\owns");h(x,_,Oa,".","\\ldotp");h(x,_,Oa,"⋅","\\cdotp");h(x,_,Oa,"⋅","·");h(ie,_,z,"⋅","·");h(x,_,z,"#","\\#");h(ie,_,z,"#","\\#");h(x,_,z,"&","\\&");h(ie,_,z,"&","\\&");h(x,_,z,"ℵ","\\aleph",!0);h(x,_,z,"∀","\\forall",!0);h(x,_,z,"ℏ","\\hbar",!0);h(x,_,z,"∃","\\exists",!0);h(x,_,z,"∇","\\nabla",!0);h(x,_,z,"♭","\\flat",!0);h(x,_,z,"ℓ","\\ell",!0);h(x,_,z,"♮","\\natural",!0);h(x,_,z,"♣","\\clubsuit",!0);h(x,_,z,"℘","\\wp",!0);h(x,_,z,"♯","\\sharp",!0);h(x,_,z,"♢","\\diamondsuit",!0);h(x,_,z,"ℜ","\\Re",!0);h(x,_,z,"♡","\\heartsuit",!0);h(x,_,z,"ℑ","\\Im",!0);h(x,_,z,"♠","\\spadesuit",!0);h(x,_,z,"§","\\S",!0);h(ie,_,z,"§","\\S");h(x,_,z,"¶","\\P",!0);h(ie,_,z,"¶","\\P");h(x,_,z,"†","\\dag");h(ie,_,z,"†","\\dag");h(ie,_,z,"†","\\textdagger");h(x,_,z,"‡","\\ddag");h(ie,_,z,"‡","\\ddag");h(ie,_,z,"‡","\\textdaggerdbl");h(x,_,mn,"⎱","\\rmoustache",!0);h(x,_,Nn,"⎰","\\lmoustache",!0);h(x,_,mn,"⟯","\\rgroup",!0);h(x,_,Nn,"⟮","\\lgroup",!0);h(x,_,we,"∓","\\mp",!0);h(x,_,we,"⊖","\\ominus",!0);h(x,_,we,"⊎","\\uplus",!0);h(x,_,we,"⊓","\\sqcap",!0);h(x,_,we,"∗","\\ast");h(x,_,we,"⊔","\\sqcup",!0);h(x,_,we,"◯","\\bigcirc",!0);h(x,_,we,"∙","\\bullet",!0);h(x,_,we,"‡","\\ddagger");h(x,_,we,"≀","\\wr",!0);h(x,_,we,"⨿","\\amalg");h(x,_,we,"&","\\And");h(x,_,L,"⟵","\\longleftarrow",!0);h(x,_,L,"⇐","\\Leftarrow",!0);h(x,_,L,"⟸","\\Longleftarrow",!0);h(x,_,L,"⟶","\\longrightarrow",!0);h(x,_,L,"⇒","\\Rightarrow",!0);h(x,_,L,"⟹","\\Longrightarrow",!0);h(x,_,L,"↔","\\leftrightarrow",!0);h(x,_,L,"⟷","\\longleftrightarrow",!0);h(x,_,L,"⇔","\\Leftrightarrow",!0);h(x,_,L,"⟺","\\Longleftrightarrow",!0);h(x,_,L,"↦","\\mapsto",!0);h(x,_,L,"⟼","\\longmapsto",!0);h(x,_,L,"↗","\\nearrow",!0);h(x,_,L,"↩","\\hookleftarrow",!0);h(x,_,L,"↪","\\hookrightarrow",!0);h(x,_,L,"↘","\\searrow",!0);h(x,_,L,"↼","\\leftharpoonup",!0);h(x,_,L,"⇀","\\rightharpoonup",!0);h(x,_,L,"↙","\\swarrow",!0);h(x,_,L,"↽","\\leftharpoondown",!0);h(x,_,L,"⇁","\\rightharpoondown",!0);h(x,_,L,"↖","\\nwarrow",!0);h(x,_,L,"⇌","\\rightleftharpoons",!0);h(x,P,L,"≮","\\nless",!0);h(x,P,L,"","\\@nleqslant");h(x,P,L,"","\\@nleqq");h(x,P,L,"⪇","\\lneq",!0);h(x,P,L,"≨","\\lneqq",!0);h(x,P,L,"","\\@lvertneqq");h(x,P,L,"⋦","\\lnsim",!0);h(x,P,L,"⪉","\\lnapprox",!0);h(x,P,L,"⊀","\\nprec",!0);h(x,P,L,"⋠","\\npreceq",!0);h(x,P,L,"⋨","\\precnsim",!0);h(x,P,L,"⪹","\\precnapprox",!0);h(x,P,L,"≁","\\nsim",!0);h(x,P,L,"","\\@nshortmid");h(x,P,L,"∤","\\nmid",!0);h(x,P,L,"⊬","\\nvdash",!0);h(x,P,L,"⊭","\\nvDash",!0);h(x,P,L,"⋪","\\ntriangleleft");h(x,P,L,"⋬","\\ntrianglelefteq",!0);h(x,P,L,"⊊","\\subsetneq",!0);h(x,P,L,"","\\@varsubsetneq");h(x,P,L,"⫋","\\subsetneqq",!0);h(x,P,L,"","\\@varsubsetneqq");h(x,P,L,"≯","\\ngtr",!0);h(x,P,L,"","\\@ngeqslant");h(x,P,L,"","\\@ngeqq");h(x,P,L,"⪈","\\gneq",!0);h(x,P,L,"≩","\\gneqq",!0);h(x,P,L,"","\\@gvertneqq");h(x,P,L,"⋧","\\gnsim",!0);h(x,P,L,"⪊","\\gnapprox",!0);h(x,P,L,"⊁","\\nsucc",!0);h(x,P,L,"⋡","\\nsucceq",!0);h(x,P,L,"⋩","\\succnsim",!0);h(x,P,L,"⪺","\\succnapprox",!0);h(x,P,L,"≆","\\ncong",!0);h(x,P,L,"","\\@nshortparallel");h(x,P,L,"∦","\\nparallel",!0);h(x,P,L,"⊯","\\nVDash",!0);h(x,P,L,"⋫","\\ntriangleright");h(x,P,L,"⋭","\\ntrianglerighteq",!0);h(x,P,L,"","\\@nsupseteqq");h(x,P,L,"⊋","\\supsetneq",!0);h(x,P,L,"","\\@varsupsetneq");h(x,P,L,"⫌","\\supsetneqq",!0);h(x,P,L,"","\\@varsupsetneqq");h(x,P,L,"⊮","\\nVdash",!0);h(x,P,L,"⪵","\\precneqq",!0);h(x,P,L,"⪶","\\succneqq",!0);h(x,P,L,"","\\@nsubseteqq");h(x,P,we,"⊴","\\unlhd");h(x,P,we,"⊵","\\unrhd");h(x,P,L,"↚","\\nleftarrow",!0);h(x,P,L,"↛","\\nrightarrow",!0);h(x,P,L,"⇍","\\nLeftarrow",!0);h(x,P,L,"⇏","\\nRightarrow",!0);h(x,P,L,"↮","\\nleftrightarrow",!0);h(x,P,L,"⇎","\\nLeftrightarrow",!0);h(x,P,L,"△","\\vartriangle");h(x,P,z,"ℏ","\\hslash");h(x,P,z,"▽","\\triangledown");h(x,P,z,"◊","\\lozenge");h(x,P,z,"Ⓢ","\\circledS");h(x,P,z,"®","\\circledR");h(ie,P,z,"®","\\circledR");h(x,P,z,"∡","\\measuredangle",!0);h(x,P,z,"∄","\\nexists");h(x,P,z,"℧","\\mho");h(x,P,z,"Ⅎ","\\Finv",!0);h(x,P,z,"⅁","\\Game",!0);h(x,P,z,"‵","\\backprime");h(x,P,z,"▲","\\blacktriangle");h(x,P,z,"▼","\\blacktriangledown");h(x,P,z,"■","\\blacksquare");h(x,P,z,"⧫","\\blacklozenge");h(x,P,z,"★","\\bigstar");h(x,P,z,"∢","\\sphericalangle",!0);h(x,P,z,"∁","\\complement",!0);h(x,P,z,"ð","\\eth",!0);h(ie,_,z,"ð","ð");h(x,P,z,"╱","\\diagup");h(x,P,z,"╲","\\diagdown");h(x,P,z,"□","\\square");h(x,P,z,"□","\\Box");h(x,P,z,"◊","\\Diamond");h(x,P,z,"¥","\\yen",!0);h(ie,P,z,"¥","\\yen",!0);h(x,P,z,"✓","\\checkmark",!0);h(ie,P,z,"✓","\\checkmark");h(x,P,z,"ℶ","\\beth",!0);h(x,P,z,"ℸ","\\daleth",!0);h(x,P,z,"ℷ","\\gimel",!0);h(x,P,z,"ϝ","\\digamma",!0);h(x,P,z,"ϰ","\\varkappa");h(x,P,Nn,"┌","\\@ulcorner",!0);h(x,P,mn,"┐","\\@urcorner",!0);h(x,P,Nn,"└","\\@llcorner",!0);h(x,P,mn,"┘","\\@lrcorner",!0);h(x,P,L,"≦","\\leqq",!0);h(x,P,L,"⩽","\\leqslant",!0);h(x,P,L,"⪕","\\eqslantless",!0);h(x,P,L,"≲","\\lesssim",!0);h(x,P,L,"⪅","\\lessapprox",!0);h(x,P,L,"≊","\\approxeq",!0);h(x,P,we,"⋖","\\lessdot");h(x,P,L,"⋘","\\lll",!0);h(x,P,L,"≶","\\lessgtr",!0);h(x,P,L,"⋚","\\lesseqgtr",!0);h(x,P,L,"⪋","\\lesseqqgtr",!0);h(x,P,L,"≑","\\doteqdot");h(x,P,L,"≓","\\risingdotseq",!0);h(x,P,L,"≒","\\fallingdotseq",!0);h(x,P,L,"∽","\\backsim",!0);h(x,P,L,"⋍","\\backsimeq",!0);h(x,P,L,"⫅","\\subseteqq",!0);h(x,P,L,"⋐","\\Subset",!0);h(x,P,L,"⊏","\\sqsubset",!0);h(x,P,L,"≼","\\preccurlyeq",!0);h(x,P,L,"⋞","\\curlyeqprec",!0);h(x,P,L,"≾","\\precsim",!0);h(x,P,L,"⪷","\\precapprox",!0);h(x,P,L,"⊲","\\vartriangleleft");h(x,P,L,"⊴","\\trianglelefteq");h(x,P,L,"⊨","\\vDash",!0);h(x,P,L,"⊪","\\Vvdash",!0);h(x,P,L,"⌣","\\smallsmile");h(x,P,L,"⌢","\\smallfrown");h(x,P,L,"≏","\\bumpeq",!0);h(x,P,L,"≎","\\Bumpeq",!0);h(x,P,L,"≧","\\geqq",!0);h(x,P,L,"⩾","\\geqslant",!0);h(x,P,L,"⪖","\\eqslantgtr",!0);h(x,P,L,"≳","\\gtrsim",!0);h(x,P,L,"⪆","\\gtrapprox",!0);h(x,P,we,"⋗","\\gtrdot");h(x,P,L,"⋙","\\ggg",!0);h(x,P,L,"≷","\\gtrless",!0);h(x,P,L,"⋛","\\gtreqless",!0);h(x,P,L,"⪌","\\gtreqqless",!0);h(x,P,L,"≖","\\eqcirc",!0);h(x,P,L,"≗","\\circeq",!0);h(x,P,L,"≜","\\triangleq",!0);h(x,P,L,"∼","\\thicksim");h(x,P,L,"≈","\\thickapprox");h(x,P,L,"⫆","\\supseteqq",!0);h(x,P,L,"⋑","\\Supset",!0);h(x,P,L,"⊐","\\sqsupset",!0);h(x,P,L,"≽","\\succcurlyeq",!0);h(x,P,L,"⋟","\\curlyeqsucc",!0);h(x,P,L,"≿","\\succsim",!0);h(x,P,L,"⪸","\\succapprox",!0);h(x,P,L,"⊳","\\vartriangleright");h(x,P,L,"⊵","\\trianglerighteq");h(x,P,L,"⊩","\\Vdash",!0);h(x,P,L,"∣","\\shortmid");h(x,P,L,"∥","\\shortparallel");h(x,P,L,"≬","\\between",!0);h(x,P,L,"⋔","\\pitchfork",!0);h(x,P,L,"∝","\\varpropto");h(x,P,L,"◀","\\blacktriangleleft");h(x,P,L,"∴","\\therefore",!0);h(x,P,L,"∍","\\backepsilon");h(x,P,L,"▶","\\blacktriangleright");h(x,P,L,"∵","\\because",!0);h(x,P,L,"⋘","\\llless");h(x,P,L,"⋙","\\gggtr");h(x,P,we,"⊲","\\lhd");h(x,P,we,"⊳","\\rhd");h(x,P,L,"≂","\\eqsim",!0);h(x,_,L,"⋈","\\Join");h(x,P,L,"≑","\\Doteq",!0);h(x,P,we,"∔","\\dotplus",!0);h(x,P,we,"∖","\\smallsetminus");h(x,P,we,"⋒","\\Cap",!0);h(x,P,we,"⋓","\\Cup",!0);h(x,P,we,"⩞","\\doublebarwedge",!0);h(x,P,we,"⊟","\\boxminus",!0);h(x,P,we,"⊞","\\boxplus",!0);h(x,P,we,"⋇","\\divideontimes",!0);h(x,P,we,"⋉","\\ltimes",!0);h(x,P,we,"⋊","\\rtimes",!0);h(x,P,we,"⋋","\\leftthreetimes",!0);h(x,P,we,"⋌","\\rightthreetimes",!0);h(x,P,we,"⋏","\\curlywedge",!0);h(x,P,we,"⋎","\\curlyvee",!0);h(x,P,we,"⊝","\\circleddash",!0);h(x,P,we,"⊛","\\circledast",!0);h(x,P,we,"⋅","\\centerdot");h(x,P,we,"⊺","\\intercal",!0);h(x,P,we,"⋒","\\doublecap");h(x,P,we,"⋓","\\doublecup");h(x,P,we,"⊠","\\boxtimes",!0);h(x,P,L,"⇢","\\dashrightarrow",!0);h(x,P,L,"⇠","\\dashleftarrow",!0);h(x,P,L,"⇇","\\leftleftarrows",!0);h(x,P,L,"⇆","\\leftrightarrows",!0);h(x,P,L,"⇚","\\Lleftarrow",!0);h(x,P,L,"↞","\\twoheadleftarrow",!0);h(x,P,L,"↢","\\leftarrowtail",!0);h(x,P,L,"↫","\\looparrowleft",!0);h(x,P,L,"⇋","\\leftrightharpoons",!0);h(x,P,L,"↶","\\curvearrowleft",!0);h(x,P,L,"↺","\\circlearrowleft",!0);h(x,P,L,"↰","\\Lsh",!0);h(x,P,L,"⇈","\\upuparrows",!0);h(x,P,L,"↿","\\upharpoonleft",!0);h(x,P,L,"⇃","\\downharpoonleft",!0);h(x,_,L,"⊶","\\origof",!0);h(x,_,L,"⊷","\\imageof",!0);h(x,P,L,"⊸","\\multimap",!0);h(x,P,L,"↭","\\leftrightsquigarrow",!0);h(x,P,L,"⇉","\\rightrightarrows",!0);h(x,P,L,"⇄","\\rightleftarrows",!0);h(x,P,L,"↠","\\twoheadrightarrow",!0);h(x,P,L,"↣","\\rightarrowtail",!0);h(x,P,L,"↬","\\looparrowright",!0);h(x,P,L,"↷","\\curvearrowright",!0);h(x,P,L,"↻","\\circlearrowright",!0);h(x,P,L,"↱","\\Rsh",!0);h(x,P,L,"⇊","\\downdownarrows",!0);h(x,P,L,"↾","\\upharpoonright",!0);h(x,P,L,"⇂","\\downharpoonright",!0);h(x,P,L,"⇝","\\rightsquigarrow",!0);h(x,P,L,"⇝","\\leadsto");h(x,P,L,"⇛","\\Rrightarrow",!0);h(x,P,L,"↾","\\restriction");h(x,_,z,"‘","`");h(x,_,z,"$","\\$");h(ie,_,z,"$","\\$");h(ie,_,z,"$","\\textdollar");h(x,_,z,"%","\\%");h(ie,_,z,"%","\\%");h(x,_,z,"_","\\_");h(ie,_,z,"_","\\_");h(ie,_,z,"_","\\textunderscore");h(x,_,z,"∠","\\angle",!0);h(x,_,z,"∞","\\infty",!0);h(x,_,z,"′","\\prime");h(x,_,z,"△","\\triangle");h(x,_,z,"Γ","\\Gamma",!0);h(x,_,z,"Δ","\\Delta",!0);h(x,_,z,"Θ","\\Theta",!0);h(x,_,z,"Λ","\\Lambda",!0);h(x,_,z,"Ξ","\\Xi",!0);h(x,_,z,"Π","\\Pi",!0);h(x,_,z,"Σ","\\Sigma",!0);h(x,_,z,"Υ","\\Upsilon",!0);h(x,_,z,"Φ","\\Phi",!0);h(x,_,z,"Ψ","\\Psi",!0);h(x,_,z,"Ω","\\Omega",!0);h(x,_,z,"A","Α");h(x,_,z,"B","Β");h(x,_,z,"E","Ε");h(x,_,z,"Z","Ζ");h(x,_,z,"H","Η");h(x,_,z,"I","Ι");h(x,_,z,"K","Κ");h(x,_,z,"M","Μ");h(x,_,z,"N","Ν");h(x,_,z,"O","Ο");h(x,_,z,"P","Ρ");h(x,_,z,"T","Τ");h(x,_,z,"X","Χ");h(x,_,z,"¬","\\neg",!0);h(x,_,z,"¬","\\lnot");h(x,_,z,"⊤","\\top");h(x,_,z,"⊥","\\bot");h(x,_,z,"∅","\\emptyset");h(x,P,z,"∅","\\varnothing");h(x,_,Oe,"α","\\alpha",!0);h(x,_,Oe,"β","\\beta",!0);h(x,_,Oe,"γ","\\gamma",!0);h(x,_,Oe,"δ","\\delta",!0);h(x,_,Oe,"ϵ","\\epsilon",!0);h(x,_,Oe,"ζ","\\zeta",!0);h(x,_,Oe,"η","\\eta",!0);h(x,_,Oe,"θ","\\theta",!0);h(x,_,Oe,"ι","\\iota",!0);h(x,_,Oe,"κ","\\kappa",!0);h(x,_,Oe,"λ","\\lambda",!0);h(x,_,Oe,"μ","\\mu",!0);h(x,_,Oe,"ν","\\nu",!0);h(x,_,Oe,"ξ","\\xi",!0);h(x,_,Oe,"ο","\\omicron",!0);h(x,_,Oe,"π","\\pi",!0);h(x,_,Oe,"ρ","\\rho",!0);h(x,_,Oe,"σ","\\sigma",!0);h(x,_,Oe,"τ","\\tau",!0);h(x,_,Oe,"υ","\\upsilon",!0);h(x,_,Oe,"ϕ","\\phi",!0);h(x,_,Oe,"χ","\\chi",!0);h(x,_,Oe,"ψ","\\psi",!0);h(x,_,Oe,"ω","\\omega",!0);h(x,_,Oe,"ε","\\varepsilon",!0);h(x,_,Oe,"ϑ","\\vartheta",!0);h(x,_,Oe,"ϖ","\\varpi",!0);h(x,_,Oe,"ϱ","\\varrho",!0);h(x,_,Oe,"ς","\\varsigma",!0);h(x,_,Oe,"φ","\\varphi",!0);h(x,_,we,"∗","*",!0);h(x,_,we,"+","+");h(x,_,we,"−","-",!0);h(x,_,we,"⋅","\\cdot",!0);h(x,_,we,"∘","\\circ",!0);h(x,_,we,"÷","\\div",!0);h(x,_,we,"±","\\pm",!0);h(x,_,we,"×","\\times",!0);h(x,_,we,"∩","\\cap",!0);h(x,_,we,"∪","\\cup",!0);h(x,_,we,"∖","\\setminus",!0);h(x,_,we,"∧","\\land");h(x,_,we,"∨","\\lor");h(x,_,we,"∧","\\wedge",!0);h(x,_,we,"∨","\\vee",!0);h(x,_,z,"√","\\surd");h(x,_,Nn,"⟨","\\langle",!0);h(x,_,Nn,"∣","\\lvert");h(x,_,Nn,"∥","\\lVert");h(x,_,mn,"?","?");h(x,_,mn,"!","!");h(x,_,mn,"⟩","\\rangle",!0);h(x,_,mn,"∣","\\rvert");h(x,_,mn,"∥","\\rVert");h(x,_,L,"=","=");h(x,_,L,":",":");h(x,_,L,"≈","\\approx",!0);h(x,_,L,"≅","\\cong",!0);h(x,_,L,"≥","\\ge");h(x,_,L,"≥","\\geq",!0);h(x,_,L,"←","\\gets");h(x,_,L,">","\\gt",!0);h(x,_,L,"∈","\\in",!0);h(x,_,L,"","\\@not");h(x,_,L,"⊂","\\subset",!0);h(x,_,L,"⊃","\\supset",!0);h(x,_,L,"⊆","\\subseteq",!0);h(x,_,L,"⊇","\\supseteq",!0);h(x,P,L,"⊈","\\nsubseteq",!0);h(x,P,L,"⊉","\\nsupseteq",!0);h(x,_,L,"⊨","\\models");h(x,_,L,"←","\\leftarrow",!0);h(x,_,L,"≤","\\le");h(x,_,L,"≤","\\leq",!0);h(x,_,L,"<","\\lt",!0);h(x,_,L,"→","\\rightarrow",!0);h(x,_,L,"→","\\to");h(x,P,L,"≱","\\ngeq",!0);h(x,P,L,"≰","\\nleq",!0);h(x,_,Di," ","\\ ");h(x,_,Di," ","\\space");h(x,_,Di," ","\\nobreakspace");h(ie,_,Di," ","\\ ");h(ie,_,Di," "," ");h(ie,_,Di," ","\\space");h(ie,_,Di," ","\\nobreakspace");h(x,_,Di,"","\\nobreak");h(x,_,Di,"","\\allowbreak");h(x,_,Oa,",",",");h(x,_,Oa,";",";");h(x,P,we,"⊼","\\barwedge",!0);h(x,P,we,"⊻","\\veebar",!0);h(x,_,we,"⊙","\\odot",!0);h(x,_,we,"⊕","\\oplus",!0);h(x,_,we,"⊗","\\otimes",!0);h(x,_,z,"∂","\\partial",!0);h(x,_,we,"⊘","\\oslash",!0);h(x,P,we,"⊚","\\circledcirc",!0);h(x,P,we,"⊡","\\boxdot",!0);h(x,_,we,"△","\\bigtriangleup");h(x,_,we,"▽","\\bigtriangledown");h(x,_,we,"†","\\dagger");h(x,_,we,"⋄","\\diamond");h(x,_,we,"⋆","\\star");h(x,_,we,"◃","\\triangleleft");h(x,_,we,"▹","\\triangleright");h(x,_,Nn,"{","\\{");h(ie,_,z,"{","\\{");h(ie,_,z,"{","\\textbraceleft");h(x,_,mn,"}","\\}");h(ie,_,z,"}","\\}");h(ie,_,z,"}","\\textbraceright");h(x,_,Nn,"{","\\lbrace");h(x,_,mn,"}","\\rbrace");h(x,_,Nn,"[","\\lbrack",!0);h(ie,_,z,"[","\\lbrack",!0);h(x,_,mn,"]","\\rbrack",!0);h(ie,_,z,"]","\\rbrack",!0);h(x,_,Nn,"(","\\lparen",!0);h(x,_,mn,")","\\rparen",!0);h(ie,_,z,"<","\\textless",!0);h(ie,_,z,">","\\textgreater",!0);h(x,_,Nn,"⌊","\\lfloor",!0);h(x,_,mn,"⌋","\\rfloor",!0);h(x,_,Nn,"⌈","\\lceil",!0);h(x,_,mn,"⌉","\\rceil",!0);h(x,_,z,"\\","\\backslash");h(x,_,z,"∣","|");h(x,_,z,"∣","\\vert");h(ie,_,z,"|","\\textbar",!0);h(x,_,z,"∥","\\|");h(x,_,z,"∥","\\Vert");h(ie,_,z,"∥","\\textbardbl");h(ie,_,z,"~","\\textasciitilde");h(ie,_,z,"\\","\\textbackslash");h(ie,_,z,"^","\\textasciicircum");h(x,_,L,"↑","\\uparrow",!0);h(x,_,L,"⇑","\\Uparrow",!0);h(x,_,L,"↓","\\downarrow",!0);h(x,_,L,"⇓","\\Downarrow",!0);h(x,_,L,"↕","\\updownarrow",!0);h(x,_,L,"⇕","\\Updownarrow",!0);h(x,_,Xt,"∐","\\coprod");h(x,_,Xt,"⋁","\\bigvee");h(x,_,Xt,"⋀","\\bigwedge");h(x,_,Xt,"⨄","\\biguplus");h(x,_,Xt,"⋂","\\bigcap");h(x,_,Xt,"⋃","\\bigcup");h(x,_,Xt,"∫","\\int");h(x,_,Xt,"∫","\\intop");h(x,_,Xt,"∬","\\iint");h(x,_,Xt,"∭","\\iiint");h(x,_,Xt,"∏","\\prod");h(x,_,Xt,"∑","\\sum");h(x,_,Xt,"⨂","\\bigotimes");h(x,_,Xt,"⨁","\\bigoplus");h(x,_,Xt,"⨀","\\bigodot");h(x,_,Xt,"∮","\\oint");h(x,_,Xt,"∯","\\oiint");h(x,_,Xt,"∰","\\oiiint");h(x,_,Xt,"⨆","\\bigsqcup");h(x,_,Xt,"∫","\\smallint");h(ie,_,la,"…","\\textellipsis");h(x,_,la,"…","\\mathellipsis");h(ie,_,la,"…","\\ldots",!0);h(x,_,la,"…","\\ldots",!0);h(x,_,la,"⋯","\\@cdots",!0);h(x,_,la,"⋱","\\ddots",!0);h(x,_,z,"⋮","\\varvdots");h(ie,_,z,"⋮","\\varvdots");h(x,_,Rt,"ˊ","\\acute");h(x,_,Rt,"ˋ","\\grave");h(x,_,Rt,"¨","\\ddot");h(x,_,Rt,"~","\\tilde");h(x,_,Rt,"ˉ","\\bar");h(x,_,Rt,"˘","\\breve");h(x,_,Rt,"ˇ","\\check");h(x,_,Rt,"^","\\hat");h(x,_,Rt,"⃗","\\vec");h(x,_,Rt,"˙","\\dot");h(x,_,Rt,"˚","\\mathring");h(x,_,Oe,"","\\@imath");h(x,_,Oe,"","\\@jmath");h(x,_,z,"ı","ı");h(x,_,z,"ȷ","ȷ");h(ie,_,z,"ı","\\i",!0);h(ie,_,z,"ȷ","\\j",!0);h(ie,_,z,"ß","\\ss",!0);h(ie,_,z,"æ","\\ae",!0);h(ie,_,z,"œ","\\oe",!0);h(ie,_,z,"ø","\\o",!0);h(ie,_,z,"Æ","\\AE",!0);h(ie,_,z,"Œ","\\OE",!0);h(ie,_,z,"Ø","\\O",!0);h(ie,_,Rt,"ˊ","\\'");h(ie,_,Rt,"ˋ","\\`");h(ie,_,Rt,"ˆ","\\^");h(ie,_,Rt,"˜","\\~");h(ie,_,Rt,"ˉ","\\=");h(ie,_,Rt,"˘","\\u");h(ie,_,Rt,"˙","\\.");h(ie,_,Rt,"¸","\\c");h(ie,_,Rt,"˚","\\r");h(ie,_,Rt,"ˇ","\\v");h(ie,_,Rt,"¨",'\\"');h(ie,_,Rt,"˝","\\H");h(ie,_,Rt,"◯","\\textcircled");var mh={"--":!0,"---":!0,"``":!0,"''":!0};h(ie,_,z,"–","--",!0);h(ie,_,z,"–","\\textendash");h(ie,_,z,"—","---",!0);h(ie,_,z,"—","\\textemdash");h(ie,_,z,"‘","`",!0);h(ie,_,z,"‘","\\textquoteleft");h(ie,_,z,"’","'",!0);h(ie,_,z,"’","\\textquoteright");h(ie,_,z,"“","``",!0);h(ie,_,z,"“","\\textquotedblleft");h(ie,_,z,"”","''",!0);h(ie,_,z,"”","\\textquotedblright");h(x,_,z,"°","\\degree",!0);h(ie,_,z,"°","\\degree");h(ie,_,z,"°","\\textdegree",!0);h(x,_,z,"£","\\pounds");h(x,_,z,"£","\\mathsterling",!0);h(ie,_,z,"£","\\pounds");h(ie,_,z,"£","\\textsterling",!0);h(x,P,z,"✠","\\maltese");h(ie,P,z,"✠","\\maltese");var xc='0123456789/@."';for(var mo=0;mo<xc.length;mo++){var gc=xc.charAt(mo);h(x,_,z,gc,gc)}var vc='0123456789!@*()-=+";:?/.,';for(var xo=0;xo<vc.length;xo++){var bc=vc.charAt(xo);h(ie,_,z,bc,bc)}var Us="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";for(var go=0;go<Us.length;go++){var Xa=Us.charAt(go);h(x,_,Oe,Xa,Xa),h(ie,_,z,Xa,Xa)}h(x,P,z,"C","ℂ");h(ie,P,z,"C","ℂ");h(x,P,z,"H","ℍ");h(ie,P,z,"H","ℍ");h(x,P,z,"N","ℕ");h(ie,P,z,"N","ℕ");h(x,P,z,"P","ℙ");h(ie,P,z,"P","ℙ");h(x,P,z,"Q","ℚ");h(ie,P,z,"Q","ℚ");h(x,P,z,"R","ℝ");h(ie,P,z,"R","ℝ");h(x,P,z,"Z","ℤ");h(ie,P,z,"Z","ℤ");h(x,_,Oe,"h","ℎ");h(ie,_,Oe,"h","ℎ");var We;for(var cn=0;cn<Us.length;cn++){var Ot=Us.charAt(cn);We=String.fromCharCode(55349,56320+cn),h(x,_,Oe,Ot,We),h(ie,_,z,Ot,We),We=String.fromCharCode(55349,56372+cn),h(x,_,Oe,Ot,We),h(ie,_,z,Ot,We),We=String.fromCharCode(55349,56424+cn),h(x,_,Oe,Ot,We),h(ie,_,z,Ot,We),We=String.fromCharCode(55349,56580+cn),h(x,_,Oe,Ot,We),h(ie,_,z,Ot,We),We=String.fromCharCode(55349,56684+cn),h(x,_,Oe,Ot,We),h(ie,_,z,Ot,We),We=String.fromCharCode(55349,56736+cn),h(x,_,Oe,Ot,We),h(ie,_,z,Ot,We),We=String.fromCharCode(55349,56788+cn),h(x,_,Oe,Ot,We),h(ie,_,z,Ot,We),We=String.fromCharCode(55349,56840+cn),h(x,_,Oe,Ot,We),h(ie,_,z,Ot,We),We=String.fromCharCode(55349,56944+cn),h(x,_,Oe,Ot,We),h(ie,_,z,Ot,We),cn<26&&(We=String.fromCharCode(55349,56632+cn),h(x,_,Oe,Ot,We),h(ie,_,z,Ot,We),We=String.fromCharCode(55349,56476+cn),h(x,_,Oe,Ot,We),h(ie,_,z,Ot,We))}We="𝕜";h(x,_,Oe,"k",We);h(ie,_,z,"k",We);for(var nr=0;nr<10;nr++){var Ii=nr.toString();We=String.fromCharCode(55349,57294+nr),h(x,_,Oe,Ii,We),h(ie,_,z,Ii,We),We=String.fromCharCode(55349,57314+nr),h(x,_,Oe,Ii,We),h(ie,_,z,Ii,We),We=String.fromCharCode(55349,57324+nr),h(x,_,Oe,Ii,We),h(ie,_,z,Ii,We),We=String.fromCharCode(55349,57334+nr),h(x,_,Oe,Ii,We),h(ie,_,z,Ii,We)}var v0="ÐÞþ";for(var vo=0;vo<v0.length;vo++){var Ya=v0.charAt(vo);h(x,_,Oe,Ya,Ya),h(ie,_,z,Ya,Ya)}var b0={mathClass:"mathbf",textClass:"textbf",font:"Main-Bold"},_c={mathClass:"mathnormal",textClass:"textit",font:"Math-Italic"},yc={mathClass:"boldsymbol",textClass:"boldsymbol",font:"Main-BoldItalic"},Uf={mathClass:"mathscr",textClass:"textscr",font:"Script-Regular"},ur={mathClass:"",textClass:"",font:""},Mc={mathClass:"mathfrak",textClass:"textfrak",font:"Fraktur-Regular"},Sc={mathClass:"mathbb",textClass:"textbb",font:"AMS-Regular"},wc={mathClass:"mathboldfrak",textClass:"textboldfrak",font:"Fraktur-Regular"},_0={mathClass:"mathsf",textClass:"textsf",font:"SansSerif-Regular"},y0={mathClass:"mathboldsf",textClass:"textboldsf",font:"SansSerif-Bold"},Ec={mathClass:"mathitsf",textClass:"textitsf",font:"SansSerif-Italic"},M0={mathClass:"mathtt",textClass:"texttt",font:"Typewriter-Regular"},Tc=[b0,b0,_c,_c,yc,yc,Uf,ur,ur,ur,Mc,Mc,Sc,Sc,wc,wc,_0,_0,y0,y0,Ec,Ec,ur,ur,M0,M0],Nf=[b0,ur,_0,y0,M0],Ff=n=>{var e=n.charCodeAt(0),t=n.charCodeAt(1),i=(e-55296)*1024+(t-56320)+65536;if(119808<=i&&i<120484){var r=Math.floor((i-119808)/26);return Tc[r]}else if(120782<=i&&i<=120831){var a=Math.floor((i-120782)/10);return Nf[a]}else{if(i===120485||i===120486)return Tc[0];if(120486<i&&i<120782)return ur;throw new oe("Unsupported character: "+n)}},Xs=function(e,t,i){if(Ct[i][e]){var r=Ct[i][e].replace;r&&(e=r)}return{value:e,metrics:Cl(e,t,i)}},dn=function(e,t,i,r,a){var s=Xs(e,t,i),o=s.metrics;e=s.value;var l;if(o){var c=o.italic;(i==="text"||r&&r.font==="mathit")&&(c=0),l=new Un(e,o.height,o.depth,c,o.skew,o.width,a)}else typeof console<"u"&&console.warn("No character metrics "+("for '"+e+"' in style '"+t+"' and mode '"+i+"'")),l=new Un(e,0,0,0,0,0,a);if(r){l.maxFontSize=r.sizeMultiplier,r.style.isTight()&&l.classes.push("mtight");var u=r.getColor();u&&(l.style.color=u)}return l},Rl=function(e,t,i,r){return r===void 0&&(r=[]),i.font==="boldsymbol"&&Xs(e,"Main-Bold",t).metrics?dn(e,"Main-Bold",t,i,r.concat(["mathbf"])):e==="\\"||Ct[t][e].font==="main"?dn(e,"Main-Regular",t,i,r):dn(e,"AMS-Regular",t,i,r.concat(["amsrm"]))},Of=function(e,t,i){return i!=="textord"&&Xs(e,"Math-BoldItalic",t).metrics?{fontName:"Math-BoldItalic",fontClass:"boldsymbol"}:{fontName:"Main-Bold",fontClass:"mathbf"}},Ys=function(e,t,i){var r=e.mode,a=e.text,s=["mord"],{font:o,fontFamily:l,fontWeight:c,fontShape:u}=t,d=r==="math"||r==="text"&&!!o,f=d?o:l,m="",v="";if(a.charCodeAt(0)===55349){var b=Ff(a);m=b.font,v=b[r+"Class"]}if(m)return dn(a,m,r,t,s.concat(v));if(f){var g,p;if(f==="boldsymbol"){var T=Of(a,r,i);g=T.fontName,p=[T.fontClass]}else d?(g=S0[o].fontName,p=[o]):(g=$a(l,c,u),p=[l,c,u]);if(Xs(a,g,r).metrics)return dn(a,g,r,t,s.concat(p));if(mh.hasOwnProperty(a)&&g.slice(0,10)==="Typewriter"){for(var A=[],D=0;D<a.length;D++)A.push(dn(a[D],g,r,t,s.concat(p)));return Pi(A)}}if(i==="mathord")return dn(a,"Math-Italic",r,t,s.concat(["mathnormal"]));if(i==="textord"){var I=Ct[r][a]&&Ct[r][a].font;if(I==="ams"){var C=$a("amsrm",c,u);return dn(a,C,r,t,s.concat("amsrm",c,u))}else if(I==="main"||!I){var U=$a("textrm",c,u);return dn(a,U,r,t,s.concat(c,u))}else{var B=$a(I,c,u);return dn(a,B,r,t,s.concat(B,c,u))}}else throw new Error("unexpected type: "+i+" in makeOrd")},zf=(n,e)=>{if(Xi(n.classes)!==Xi(e.classes)||n.skew!==e.skew||n.maxFontSize!==e.maxFontSize||n.italic!==0&&n.hasClass("mathnormal"))return!1;if(n.classes.length===1){var t=n.classes[0];if(t==="mbin"||t==="mord")return!1}for(var i of Object.keys(n.style))if(n.style[i]!==e.style[i])return!1;for(var r of Object.keys(e.style))if(n.style[r]!==e.style[r])return!1;return!0},xh=n=>{for(var e=0;e<n.length-1;e++){var t=n[e],i=n[e+1];t instanceof Un&&i instanceof Un&&zf(t,i)&&(t.text+=i.text,t.height=Math.max(t.height,i.height),t.depth=Math.max(t.depth,i.depth),t.italic=i.italic,n.splice(e+1,1),e--)}return n},Dl=function(e){for(var t=0,i=0,r=0,a=0;a<e.children.length;a++){var s=e.children[a];s.height>t&&(t=s.height),s.depth>i&&(i=s.depth),s.maxFontSize>r&&(r=s.maxFontSize)}e.height=t,e.depth=i,e.maxFontSize=r},ae=function(e,t,i,r){var a=new oa(e,t,i,r);return Dl(a),a},$i=(n,e,t,i)=>new oa(n,e,t,i),$r=function(e,t,i){var r=ae([e],[],t);return r.height=Math.max(i||t.fontMetrics().defaultRuleThickness,t.minRuleThickness),r.style.borderBottomWidth=ue(r.height),r.maxFontSize=1,r},Bf=function(e,t,i,r){var a=new qs(e,t,i,r);return Dl(a),a},Pi=function(e){var t=new sa(e);return Dl(t),t},jr=function(e,t){return e instanceof sa?ae([],[e],t):e},kf=function(e){if(e.positionType==="individualShift"){for(var t=e.children,i=[t[0]],r=-t[0].shift-t[0].elem.depth,a=r,s=1;s<t.length;s++){var o=-t[s].shift-a-t[s].elem.depth,l=o-(t[s-1].elem.height+t[s-1].elem.depth);a=a+o,i.push({type:"kern",size:l}),i.push(t[s])}return{children:i,depth:r}}var c;if(e.positionType==="top"){for(var u=e.positionData,d=0;d<e.children.length;d++){var f=e.children[d];u-=f.type==="kern"?f.size:f.elem.height+f.elem.depth}c=u}else if(e.positionType==="bottom")c=-e.positionData;else{var m=e.children[0];if(m.type!=="elem")throw new Error('First child must have type "elem".');if(e.positionType==="shift")c=-m.elem.depth-e.positionData;else if(e.positionType==="firstBaseline")c=-m.elem.depth;else throw new Error("Invalid positionType "+e.positionType+".")}return{children:e.children,depth:c}},pt=function(e,t){for(var{children:i,depth:r}=kf(e),a=0,s=0;s<i.length;s++){var o=i[s];if(o.type==="elem"){var l=o.elem;a=Math.max(a,l.maxFontSize,l.height)}}a+=2;var c=ae(["pstrut"],[]);c.style.height=ue(a);for(var u=[],d=r,f=r,m=r,v=0;v<i.length;v++){var b=i[v];if(b.type==="kern")m+=b.size;else{var g=b.elem,p=b.wrapperClasses||[],T=b.wrapperStyle||{},A=ae(p,[c,g],void 0,T);A.style.top=ue(-a-m-g.depth),b.marginLeft&&(A.style.marginLeft=b.marginLeft),b.marginRight&&(A.style.marginRight=b.marginRight),u.push(A),m+=g.height+g.depth}d=Math.min(d,m),f=Math.max(f,m)}var D=ae(["vlist"],u);D.style.height=ue(f);var I;if(d<0){var C=ae([],[]),U=ae(["vlist"],[C]);U.style.height=ue(-d);var B=ae(["vlist-s"],[new Un("​")]);I=[ae(["vlist-r"],[D,B]),ae(["vlist-r"],[U])]}else I=[ae(["vlist-r"],[D])];var E=ae(["vlist-t"],I);return I.length===2&&E.classes.push("vlist-t2"),E.height=f,E.depth=-d,E},gh=(n,e)=>{var t=ae(["mspace"],[],e),i=It(n,e);return t.style.marginRight=ue(i),t},$a=(n,e,t)=>{var i,r;switch(n){case"amsrm":i="AMS";break;case"textrm":i="Main";break;case"textsf":i="SansSerif";break;case"texttt":i="Typewriter";break;default:i=n}return e==="textbf"&&t==="textit"?r="BoldItalic":e==="textbf"?r="Bold":t==="textit"?r="Italic":r="Regular",i+"-"+r},S0={mathbf:{variant:"bold",fontName:"Main-Bold"},mathrm:{variant:"normal",fontName:"Main-Regular"},textit:{variant:"italic",fontName:"Main-Italic"},mathit:{variant:"italic",fontName:"Main-Italic"},mathnormal:{variant:"italic",fontName:"Math-Italic"},mathsfit:{variant:"sans-serif-italic",fontName:"SansSerif-Italic"},mathbb:{variant:"double-struck",fontName:"AMS-Regular"},mathcal:{variant:"script",fontName:"Caligraphic-Regular"},mathfrak:{variant:"fraktur",fontName:"Fraktur-Regular"},mathscr:{variant:"script",fontName:"Script-Regular"},mathsf:{variant:"sans-serif",fontName:"SansSerif-Regular"},mathtt:{variant:"monospace",fontName:"Typewriter-Regular"}},vh={vec:["vec",.471,.714],oiintSize1:["oiintSize1",.957,.499],oiintSize2:["oiintSize2",1.472,.659],oiiintSize1:["oiiintSize1",1.304,.499],oiiintSize2:["oiiintSize2",1.98,.659]},bh=function(e,t){var[i,r,a]=vh[e],s=new Yi(i),o=new Ai([s],{width:ue(r),height:ue(a),style:"width:"+ue(r),viewBox:"0 0 "+1e3*r+" "+1e3*a,preserveAspectRatio:"xMinYMin"}),l=$i(["overlay"],[o],t);return l.height=a,l.style.height=ue(a),l.style.width=ue(r),l},Lt={number:3,unit:"mu"},ir={number:4,unit:"mu"},di={number:5,unit:"mu"},Hf={mord:{mop:Lt,mbin:ir,mrel:di,minner:Lt},mop:{mord:Lt,mop:Lt,mrel:di,minner:Lt},mbin:{mord:ir,mop:ir,mopen:ir,minner:ir},mrel:{mord:di,mop:di,mopen:di,minner:di},mopen:{},mclose:{mop:Lt,mbin:ir,mrel:di,minner:Lt},mpunct:{mord:Lt,mop:Lt,mrel:di,mopen:Lt,mclose:Lt,mpunct:Lt,minner:Lt},minner:{mord:Lt,mop:Lt,mbin:ir,mrel:di,mopen:Lt,mpunct:Lt,minner:Lt}},Vf={mord:{mop:Lt},mop:{mord:Lt,mop:Lt},mbin:{},mrel:{},mopen:{},mclose:{mop:Lt},mpunct:{},minner:{mop:Lt}},_h={},Ns={},Fs={};function Me(n){for(var{type:e,names:t,props:i,handler:r,htmlBuilder:a,mathmlBuilder:s}=n,o={type:e,numArgs:i.numArgs,argTypes:i.argTypes,allowedInArgument:!!i.allowedInArgument,allowedInText:!!i.allowedInText,allowedInMath:i.allowedInMath===void 0?!0:i.allowedInMath,numOptionalArgs:i.numOptionalArgs||0,infix:!!i.infix,primitive:!!i.primitive,handler:r},l=0;l<t.length;++l)_h[t[l]]=o;e&&(a&&(Ns[e]=a),s&&(Fs[e]=s))}function _r(n){var{type:e,htmlBuilder:t,mathmlBuilder:i}=n;Me({type:e,names:[],props:{numArgs:0},handler(){throw new Error("Should never be called.")},htmlBuilder:t,mathmlBuilder:i})}var Os=function(e){return e.type==="ordgroup"&&e.body.length===1?e.body[0]:e},Gt=function(e){return e.type==="ordgroup"?e.body:[e]},Gf=new Set(["leftmost","mbin","mopen","mrel","mop","mpunct"]),Wf=new Set(["rightmost","mrel","mclose","mpunct"]),qf={display:Ke.DISPLAY,text:Ke.TEXT,script:Ke.SCRIPT,scriptscript:Ke.SCRIPTSCRIPT},Xf={mord:"mord",mop:"mop",mbin:"mbin",mrel:"mrel",mopen:"mopen",mclose:"mclose",mpunct:"mpunct",minner:"minner"},jt=function(e,t,i,r){r===void 0&&(r=[null,null]);for(var a=[],s=0;s<e.length;s++){var o=mt(e[s],t);if(o instanceof sa){var l=o.children;a.push(...l)}else a.push(o)}if(xh(a),!i)return a;var c=t;if(e.length===1){var u=e[0];u.type==="sizing"?c=t.havingSize(u.size):u.type==="styling"&&(c=t.havingStyle(qf[u.style]))}var d=ae([r[0]||"leftmost"],[],t),f=ae([r[1]||"rightmost"],[],t),m=i==="root";return w0(a,(v,b)=>{var g=b.classes[0],p=v.classes[0];g==="mbin"&&Wf.has(p)?b.classes[0]="mord":p==="mbin"&&Gf.has(g)&&(v.classes[0]="mord")},{node:d},f,m),w0(a,(v,b)=>{var g,p,T=T0(b),A=T0(v),D=T&&A?v.hasClass("mtight")?(g=Vf[T])==null?void 0:g[A]:(p=Hf[T])==null?void 0:p[A]:null;if(D)return gh(D,c)},{node:d},f,m),a},w0=function(e,t,i,r,a){r&&e.push(r);for(var s=0;s<e.length;s++){var o=e[s],l=yh(o);if(l){w0(l.children,t,i,null,a);continue}var c=!o.hasClass("mspace");if(c){var u=t(o,i.node);u&&(i.insertAfter?i.insertAfter(u):(e.unshift(u),s++))}c?i.node=o:a&&o.hasClass("newline")&&(i.node=ae(["leftmost"])),i.insertAfter=(d=>f=>{e.splice(d+1,0,f),s++})(s)}r&&e.pop()},yh=function(e){return e instanceof sa||e instanceof qs||e instanceof oa&&e.hasClass("enclosing")?e:null},E0=function(e,t){var i=yh(e);if(i){var r=i.children;if(r.length){if(t==="right")return E0(r[r.length-1],"right");if(t==="left")return E0(r[0],"left")}}return e},T0=function(e,t){if(!e)return null;t&&(e=E0(e,t));var i=e.classes[0];return Xf[i]||null},Ca=function(e,t){var i=["nulldelimiter"].concat(e.baseSizingClasses());return ae(t.concat(i))},mt=function(e,t,i){if(!e)return ae();if(Ns[e.type]){var r=Ns[e.type](e,t);if(i&&t.size!==i.size){r=ae(t.sizingClasses(i),[r],t);var a=t.sizeMultiplier/i.sizeMultiplier;r.height*=a,r.depth*=a}return r}else throw new oe("Got group of unknown type: '"+e.type+"'")};function ja(n,e){var t=ae(["base"],n,e),i=ae(["strut"]);return i.style.height=ue(t.height+t.depth),t.depth&&(i.style.verticalAlign=ue(-t.depth)),t.children.unshift(i),t}function A0(n,e){var t=null;n.length===1&&n[0].type==="tag"&&(t=n[0].tag,n=n[0].body);var i=jt(n,e,"root"),r;i.length===2&&i[1].hasClass("tag")&&(r=i.pop());for(var a=[],s=[],o=0;o<i.length;o++)if(s.push(i[o]),i[o].hasClass("mbin")||i[o].hasClass("mrel")||i[o].hasClass("allowbreak")){for(var l=!1;o<i.length-1&&i[o+1].hasClass("mspace")&&!i[o+1].hasClass("newline");)o++,s.push(i[o]),i[o].hasClass("nobreak")&&(l=!0);l||(a.push(ja(s,e)),s=[])}else i[o].hasClass("newline")&&(s.pop(),s.length>0&&(a.push(ja(s,e)),s=[]),a.push(i[o]));s.length>0&&a.push(ja(s,e));var c;t?(c=ja(jt(t,e,!0),e),c.classes=["tag"],a.push(c)):r&&a.push(r);var u=ae(["katex-html"],a);if(u.setAttribute("aria-hidden","true"),c){var d=c.children[0];d.style.height=ue(u.height+u.depth),u.depth&&(d.style.verticalAlign=ue(-u.depth))}return u}function Mh(n){return new sa(n)}class le{constructor(e,t,i){this.type=void 0,this.attributes=void 0,this.children=void 0,this.classes=void 0,this.type=e,this.attributes={},this.children=t||[],this.classes=i||[]}setAttribute(e,t){this.attributes[e]=t}getAttribute(e){return this.attributes[e]}toNode(){var e=document.createElementNS("http://www.w3.org/1998/Math/MathML",this.type);for(var t in this.attributes)Object.prototype.hasOwnProperty.call(this.attributes,t)&&e.setAttribute(t,this.attributes[t]);this.classes.length>0&&(e.className=Xi(this.classes));for(var i=0;i<this.children.length;i++)if(this.children[i]instanceof Wt&&this.children[i+1]instanceof Wt){for(var r=this.children[i].toText()+this.children[++i].toText();this.children[i+1]instanceof Wt;)r+=this.children[++i].toText();e.appendChild(new Wt(r).toNode())}else e.appendChild(this.children[i].toNode());return e}toMarkup(){var e="<"+this.type;for(var t in this.attributes)Object.prototype.hasOwnProperty.call(this.attributes,t)&&(e+=" "+t+'="',e+=on(this.attributes[t]),e+='"');this.classes.length>0&&(e+=' class ="'+on(Xi(this.classes))+'"'),e+=">";for(var i=0;i<this.children.length;i++)e+=this.children[i].toMarkup();return e+="</"+this.type+">",e}toText(){return this.children.map(e=>e.toText()).join("")}}class Wt{constructor(e){this.text=void 0,this.text=e}toNode(){return document.createTextNode(this.text)}toMarkup(){return on(this.toText())}toText(){return this.text}}class Sh{constructor(e){this.width=void 0,this.character=void 0,this.width=e,e>=.05555&&e<=.05556?this.character=" ":e>=.1666&&e<=.1667?this.character=" ":e>=.2222&&e<=.2223?this.character=" ":e>=.2777&&e<=.2778?this.character="  ":e>=-.05556&&e<=-.05555?this.character=" ⁣":e>=-.1667&&e<=-.1666?this.character=" ⁣":e>=-.2223&&e<=-.2222?this.character=" ⁣":e>=-.2778&&e<=-.2777?this.character=" ⁣":this.character=null}toNode(){if(this.character)return document.createTextNode(this.character);var e=document.createElementNS("http://www.w3.org/1998/Math/MathML","mspace");return e.setAttribute("width",ue(this.width)),e}toMarkup(){return this.character?"<mtext>"+this.character+"</mtext>":'<mspace width="'+ue(this.width)+'"/>'}toText(){return this.character?this.character:" "}}var Yf=new Set(["\\imath","\\jmath"]),$f=new Set(["mrow","mtable"]),Gn=function(e,t,i){return Ct[t][e]&&Ct[t][e].replace&&e.charCodeAt(0)!==55349&&!(mh.hasOwnProperty(e)&&i&&(i.fontFamily&&i.fontFamily.slice(4,6)==="tt"||i.font&&i.font.slice(4,6)==="tt"))&&(e=Ct[t][e].replace),new Wt(e)},Pl=function(e){return e.length===1?e[0]:new le("mrow",e)},jf={mathit:"italic",boldsymbol:n=>n.type==="textord"?"bold":"bold-italic",mathbf:"bold",mathbb:"double-struck",mathsfit:"sans-serif-italic",mathfrak:"fraktur",mathscr:"script",mathcal:"script",mathsf:"sans-serif",mathtt:"monospace"},Ll=(n,e)=>{if(n.mode==="text"){if(e.fontFamily==="texttt")return"monospace";if(e.fontFamily==="textsf")return e.fontShape==="textit"&&e.fontWeight==="textbf"?"sans-serif-bold-italic":e.fontShape==="textit"?"sans-serif-italic":e.fontWeight==="textbf"?"bold-sans-serif":"sans-serif";if(e.fontShape==="textit"&&e.fontWeight==="textbf")return"bold-italic";if(e.fontShape==="textit")return"italic";if(e.fontWeight==="textbf")return"bold"}var t=e.font;if(!t||t==="mathnormal")return null;var i=n.mode,r=jf[t];if(r)return typeof r=="function"?r(n):r;var a=n.text;if(Yf.has(a))return null;if(Ct[i][a]){var s=Ct[i][a].replace;s&&(a=s)}var o=S0[t].fontName;return Cl(a,o,i)?S0[t].variant:null};function bo(n){if(!n)return!1;if(n.type==="mi"&&n.children.length===1){var e=n.children[0];return e instanceof Wt&&e.text==="."}else if(n.type==="mo"&&n.children.length===1&&n.getAttribute("separator")==="true"&&n.getAttribute("lspace")==="0em"&&n.getAttribute("rspace")==="0em"){var t=n.children[0];return t instanceof Wt&&t.text===","}else return!1}var Fn=function(e,t,i){if(e.length===1){var r=Et(e[0],t);return i&&r instanceof le&&r.type==="mo"&&(r.setAttribute("lspace","0em"),r.setAttribute("rspace","0em")),[r]}for(var a=[],s,o=0;o<e.length;o++){var l=Et(e[o],t);if(l instanceof le&&s instanceof le){if(l.type==="mtext"&&s.type==="mtext"&&l.getAttribute("mathvariant")===s.getAttribute("mathvariant")){s.children.push(...l.children);continue}else if(l.type==="mn"&&s.type==="mn"){s.children.push(...l.children);continue}else if(bo(l)&&s.type==="mn"){s.children.push(...l.children);continue}else if(l.type==="mn"&&bo(s))l.children=[...s.children,...l.children],a.pop();else if((l.type==="msup"||l.type==="msub")&&l.children.length>=1&&(s.type==="mn"||bo(s))){var c=l.children[0];c instanceof le&&c.type==="mn"&&(c.children=[...s.children,...c.children],a.pop())}else if(s.type==="mi"&&s.children.length===1){var u=s.children[0];if(u instanceof Wt&&u.text==="̸"&&(l.type==="mo"||l.type==="mi"||l.type==="mn")){var d=l.children[0];d instanceof Wt&&d.text.length>0&&(d.text=d.text.slice(0,1)+"̸"+d.text.slice(1),a.pop())}}}a.push(l),s=l}return a},ji=function(e,t,i){return Pl(Fn(e,t,i))},Et=function(e,t){if(!e)return new le("mrow");if(Fs[e.type])return Fs[e.type](e,t);throw new oe("Got group of unknown type: '"+e.type+"'")};function Ac(n,e,t,i,r){var a=Fn(n,t),s;a.length===1&&a[0]instanceof le&&$f.has(a[0].type)?s=a[0]:s=new le("mrow",a);var o=new le("annotation",[new Wt(e)]);o.setAttribute("encoding","application/x-tex");var l=new le("semantics",[s,o]),c=new le("math",[l]);c.setAttribute("xmlns","http://www.w3.org/1998/Math/MathML"),i&&c.setAttribute("display","block");var u=r?"katex":"katex-mathml";return ae([u],[c])}var Kf=[[1,1,1],[2,1,1],[3,1,1],[4,2,1],[5,2,1],[6,3,1],[7,4,2],[8,6,3],[9,7,6],[10,8,7],[11,10,9]],Cc=[.5,.6,.7,.8,.9,1,1.2,1.44,1.728,2.074,2.488],Rc=function(e,t){return t.size<2?e:Kf[e-1][t.size-1]};class _i{constructor(e){this.style=void 0,this.color=void 0,this.size=void 0,this.textSize=void 0,this.phantom=void 0,this.font=void 0,this.fontFamily=void 0,this.fontWeight=void 0,this.fontShape=void 0,this.sizeMultiplier=void 0,this.maxSize=void 0,this.minRuleThickness=void 0,this._fontMetrics=void 0,this.style=e.style,this.color=e.color,this.size=e.size||_i.BASESIZE,this.textSize=e.textSize||this.size,this.phantom=!!e.phantom,this.font=e.font||"",this.fontFamily=e.fontFamily||"",this.fontWeight=e.fontWeight||"",this.fontShape=e.fontShape||"",this.sizeMultiplier=Cc[this.size-1],this.maxSize=e.maxSize,this.minRuleThickness=e.minRuleThickness,this._fontMetrics=void 0}extend(e){var t={style:this.style,size:this.size,textSize:this.textSize,color:this.color,phantom:this.phantom,font:this.font,fontFamily:this.fontFamily,fontWeight:this.fontWeight,fontShape:this.fontShape,maxSize:this.maxSize,minRuleThickness:this.minRuleThickness};return Object.assign(t,e),new _i(t)}havingStyle(e){return this.style===e?this:this.extend({style:e,size:Rc(this.textSize,e)})}havingCrampedStyle(){return this.havingStyle(this.style.cramp())}havingSize(e){return this.size===e&&this.textSize===e?this:this.extend({style:this.style.text(),size:e,textSize:e,sizeMultiplier:Cc[e-1]})}havingBaseStyle(e){e=e||this.style.text();var t=Rc(_i.BASESIZE,e);return this.size===t&&this.textSize===_i.BASESIZE&&this.style===e?this:this.extend({style:e,size:t})}havingBaseSizing(){var e;switch(this.style.id){case 4:case 5:e=3;break;case 6:case 7:e=1;break;default:e=6}return this.extend({style:this.style.text(),size:e})}withColor(e){return this.extend({color:e})}withPhantom(){return this.extend({phantom:!0})}withFont(e){return this.extend({font:e})}withTextFontFamily(e){return this.extend({fontFamily:e,font:""})}withTextFontWeight(e){return this.extend({fontWeight:e,font:""})}withTextFontShape(e){return this.extend({fontShape:e,font:""})}sizingClasses(e){return e.size!==this.size?["sizing","reset-size"+e.size,"size"+this.size]:[]}baseSizingClasses(){return this.size!==_i.BASESIZE?["sizing","reset-size"+this.size,"size"+_i.BASESIZE]:[]}fontMetrics(){return this._fontMetrics||(this._fontMetrics=If(this.size)),this._fontMetrics}getColor(){return this.phantom?"transparent":this.color}}_i.BASESIZE=6;var wh=function(e){return new _i({style:e.displayMode?Ke.DISPLAY:Ke.TEXT,maxSize:e.maxSize,minRuleThickness:e.minRuleThickness})},Eh=function(e,t){if(t.displayMode){var i=["katex-display"];t.leqno&&i.push("leqno"),t.fleqn&&i.push("fleqn"),e=ae(i,[e])}return e},Zf=function(e,t,i){var r=wh(i),a;if(i.output==="mathml")return Ac(e,t,r,i.displayMode,!0);if(i.output==="html"){var s=A0(e,r);a=ae(["katex"],[s])}else{var o=Ac(e,t,r,i.displayMode,!1),l=A0(e,r);a=ae(["katex"],[o,l])}return Eh(a,i)},Jf=function(e,t,i){var r=wh(i),a=A0(e,r),s=ae(["katex"],[a]);return Eh(s,i)},Qf={widehat:"^",widecheck:"ˇ",widetilde:"~",utilde:"~",overleftarrow:"←",underleftarrow:"←",xleftarrow:"←",overrightarrow:"→",underrightarrow:"→",xrightarrow:"→",underbrace:"⏟",overbrace:"⏞",underbracket:"⎵",overbracket:"⎴",overgroup:"⏠",undergroup:"⏡",overleftrightarrow:"↔",underleftrightarrow:"↔",xleftrightarrow:"↔",Overrightarrow:"⇒",xRightarrow:"⇒",overleftharpoon:"↼",xleftharpoonup:"↼",overrightharpoon:"⇀",xrightharpoonup:"⇀",xLeftarrow:"⇐",xLeftrightarrow:"⇔",xhookleftarrow:"↩",xhookrightarrow:"↪",xmapsto:"↦",xrightharpoondown:"⇁",xleftharpoondown:"↽",xrightleftharpoons:"⇌",xleftrightharpoons:"⇋",xtwoheadleftarrow:"↞",xtwoheadrightarrow:"↠",xlongequal:"=",xtofrom:"⇄",xrightleftarrows:"⇄",xrightequilibrium:"⇌",xleftequilibrium:"⇋","\\cdrightarrow":"→","\\cdleftarrow":"←","\\cdlongequal":"="},$s=function(e){var t=new le("mo",[new Wt(Qf[e.replace(/^\\/,"")])]);return t.setAttribute("stretchy","true"),t},ep={overrightarrow:[["rightarrow"],.888,522,"xMaxYMin"],overleftarrow:[["leftarrow"],.888,522,"xMinYMin"],underrightarrow:[["rightarrow"],.888,522,"xMaxYMin"],underleftarrow:[["leftarrow"],.888,522,"xMinYMin"],xrightarrow:[["rightarrow"],1.469,522,"xMaxYMin"],"\\cdrightarrow":[["rightarrow"],3,522,"xMaxYMin"],xleftarrow:[["leftarrow"],1.469,522,"xMinYMin"],"\\cdleftarrow":[["leftarrow"],3,522,"xMinYMin"],Overrightarrow:[["doublerightarrow"],.888,560,"xMaxYMin"],xRightarrow:[["doublerightarrow"],1.526,560,"xMaxYMin"],xLeftarrow:[["doubleleftarrow"],1.526,560,"xMinYMin"],overleftharpoon:[["leftharpoon"],.888,522,"xMinYMin"],xleftharpoonup:[["leftharpoon"],.888,522,"xMinYMin"],xleftharpoondown:[["leftharpoondown"],.888,522,"xMinYMin"],overrightharpoon:[["rightharpoon"],.888,522,"xMaxYMin"],xrightharpoonup:[["rightharpoon"],.888,522,"xMaxYMin"],xrightharpoondown:[["rightharpoondown"],.888,522,"xMaxYMin"],xlongequal:[["longequal"],.888,334,"xMinYMin"],"\\cdlongequal":[["longequal"],3,334,"xMinYMin"],xtwoheadleftarrow:[["twoheadleftarrow"],.888,334,"xMinYMin"],xtwoheadrightarrow:[["twoheadrightarrow"],.888,334,"xMaxYMin"],overleftrightarrow:[["leftarrow","rightarrow"],.888,522],overbrace:[["leftbrace","midbrace","rightbrace"],1.6,548],underbrace:[["leftbraceunder","midbraceunder","rightbraceunder"],1.6,548],underleftrightarrow:[["leftarrow","rightarrow"],.888,522],xleftrightarrow:[["leftarrow","rightarrow"],1.75,522],xLeftrightarrow:[["doubleleftarrow","doublerightarrow"],1.75,560],xrightleftharpoons:[["leftharpoondownplus","rightharpoonplus"],1.75,716],xleftrightharpoons:[["leftharpoonplus","rightharpoondownplus"],1.75,716],xhookleftarrow:[["leftarrow","righthook"],1.08,522],xhookrightarrow:[["lefthook","rightarrow"],1.08,522],overlinesegment:[["leftlinesegment","rightlinesegment"],.888,522],underlinesegment:[["leftlinesegment","rightlinesegment"],.888,522],overbracket:[["leftbracketover","rightbracketover"],1.6,440],underbracket:[["leftbracketunder","rightbracketunder"],1.6,410],overgroup:[["leftgroup","rightgroup"],.888,342],undergroup:[["leftgroupunder","rightgroupunder"],.888,342],xmapsto:[["leftmapsto","rightarrow"],1.5,522],xtofrom:[["leftToFrom","rightToFrom"],1.75,528],xrightleftarrows:[["baraboveleftarrow","rightarrowabovebar"],1.75,901],xrightequilibrium:[["baraboveshortleftharpoon","rightharpoonaboveshortbar"],1.75,716],xleftequilibrium:[["shortbaraboveleftharpoon","shortrightharpoonabovebar"],1.75,716]},tp=new Set(["widehat","widecheck","widetilde","utilde"]),js=function(e,t){function i(){var o=4e5,l=e.label.slice(1);if(tp.has(l)&&"base"in e){var c=e.base.type==="ordgroup"?e.base.body.length:1,u,d,f;if(c>5)l==="widehat"||l==="widecheck"?(u=420,o=2364,f=.42,d=l+"4"):(u=312,o=2340,f=.34,d="tilde4");else{var m=[1,1,2,2,3,3][c];l==="widehat"||l==="widecheck"?(o=[0,1062,2364,2364,2364][m],u=[0,239,300,360,420][m],f=[0,.24,.3,.3,.36,.42][m],d=l+m):(o=[0,600,1033,2339,2340][m],u=[0,260,286,306,312][m],f=[0,.26,.286,.3,.306,.34][m],d="tilde"+m)}var v=new Yi(d),b=new Ai([v],{width:"100%",height:ue(f),viewBox:"0 0 "+o+" "+u,preserveAspectRatio:"none"});return{span:$i([],[b],t),minWidth:0,height:f}}else{var g=[],p=ep[l];if(!p)throw new Error('No SVG data for "'+l+'".');var[T,A,D]=p,I=D/1e3,C=T.length,U,B;if(C===1){if(p.length!==4)throw new Error('Expected 4-tuple for single-path SVG data "'+l+'".');U=["hide-tail"],B=[p[3]]}else if(C===2)U=["halfarrow-left","halfarrow-right"],B=["xMinYMin","xMaxYMin"];else if(C===3)U=["brace-left","brace-center","brace-right"],B=["xMinYMin","xMidYMin","xMaxYMin"];else throw new Error(`Correct katexImagesData or update code here to support
                    `+C+" children.");for(var E=0;E<C;E++){var w=new Yi(T[E]),O=new Ai([w],{width:"400em",height:ue(I),viewBox:"0 0 "+o+" "+D,preserveAspectRatio:B[E]+" slice"}),k=$i([U[E]],[O],t);if(C===1)return{span:k,minWidth:A,height:I};k.style.height=ue(I),g.push(k)}return{span:ae(["stretchy"],g,t),minWidth:A,height:I}}}var{span:r,minWidth:a,height:s}=i();return r.height=s,r.style.height=ue(s),a>0&&(r.style.minWidth=ue(a)),r},np=function(e,t,i,r,a){var s,o=e.height+e.depth+i+r;if(/fbox|color|angl/.test(t)){if(s=ae(["stretchy",t],[],a),t==="fbox"){var l=a.color&&a.getColor();l&&(s.style.borderColor=l)}}else{var c=[];/^[bx]cancel$/.test(t)&&c.push(new g0({x1:"0",y1:"0",x2:"100%",y2:"100%","stroke-width":"0.046em"})),/^x?cancel$/.test(t)&&c.push(new g0({x1:"0",y1:"100%",x2:"100%",y2:"0","stroke-width":"0.046em"}));var u=new Ai(c,{width:"100%",height:ue(o)});s=$i([],[u],a)}return s.height=o,s.style.height=ue(o),s},ip={bin:1,close:1,inner:1,open:1,punct:1,rel:1},rp={"accent-token":1,mathord:1,"op-token":1,spacing:1,textord:1};function ap(n){return n in ip}function et(n,e){if(!n||n.type!==e)throw new Error("Expected node of type "+e+", but got "+(n?"node of type "+n.type:String(n)));return n}function Ks(n){var e=Zs(n);if(!e)throw new Error("Expected node of symbol group type, but got "+(n?"node of type "+n.type:String(n)));return e}function Zs(n){return n&&(n.type==="atom"||rp.hasOwnProperty(n.type))?n:null}var Th=n=>{if(n instanceof Un)return n;if(Pf(n)&&n.children.length===1)return Th(n.children[0])},Il=(n,e)=>{var t,i,r;n&&n.type==="supsub"?(i=et(n.base,"accent"),t=i.base,n.base=t,r=Df(mt(n,e)),n.base=i):(i=et(n,"accent"),t=i.base);var a=mt(t,e.havingCrampedStyle()),s=i.isShifty&&Ri(t),o=0;if(s){var l,c;o=(l=(c=Th(a))==null?void 0:c.skew)!=null?l:0}var u=i.label==="\\c",d=u?a.height+a.depth:Math.min(a.height,e.fontMetrics().xHeight),f;if(i.isStretchy)f=js(i,e),f=pt({positionType:"firstBaseline",children:[{type:"elem",elem:a},{type:"elem",elem:f,wrapperClasses:["svg-align"],wrapperStyle:o>0?{width:"calc(100% - "+ue(2*o)+")",marginLeft:ue(2*o)}:void 0}]});else{var m,v;i.label==="\\vec"?(m=bh("vec",e),v=vh.vec[1]):(m=Ys({mode:i.mode,text:i.label},e,"textord"),m=Rf(m),m.italic=0,v=m.width,u&&(d+=m.depth)),f=ae(["accent-body"],[m]);var b=i.label==="\\textcircled";b&&(f.classes.push("accent-full"),d=a.height);var g=o;b||(g-=v/2),f.style.left=ue(g),i.label==="\\textcircled"&&(f.style.top=".2em"),f=pt({positionType:"firstBaseline",children:[{type:"elem",elem:a},{type:"kern",size:-d},{type:"elem",elem:f}]})}var p=ae(["mord","accent"],[f],e);return r?(r.children[0]=p,r.height=Math.max(p.height,r.height),r.classes[0]="mord",r):p},Ah=(n,e)=>{var t=n.isStretchy?$s(n.label):new le("mo",[Gn(n.label,n.mode)]),i=new le("mover",[Et(n.base,e),t]);return i.setAttribute("accent","true"),i},sp=new RegExp(["\\acute","\\grave","\\ddot","\\tilde","\\bar","\\breve","\\check","\\hat","\\vec","\\dot","\\mathring"].map(n=>"\\"+n).join("|"));Me({type:"accent",names:["\\acute","\\grave","\\ddot","\\tilde","\\bar","\\breve","\\check","\\hat","\\vec","\\dot","\\mathring","\\widecheck","\\widehat","\\widetilde","\\overrightarrow","\\overleftarrow","\\Overrightarrow","\\overleftrightarrow","\\overgroup","\\overlinesegment","\\overleftharpoon","\\overrightharpoon"],props:{numArgs:1},handler:(n,e)=>{var t=Os(e[0]),i=!sp.test(n.funcName),r=!i||n.funcName==="\\widehat"||n.funcName==="\\widetilde"||n.funcName==="\\widecheck";return{type:"accent",mode:n.parser.mode,label:n.funcName,isStretchy:i,isShifty:r,base:t}},htmlBuilder:Il,mathmlBuilder:Ah});Me({type:"accent",names:["\\'","\\`","\\^","\\~","\\=","\\u","\\.",'\\"',"\\c","\\r","\\H","\\v","\\textcircled"],props:{numArgs:1,allowedInText:!0,allowedInMath:!0,argTypes:["primitive"]},handler:(n,e)=>{var t=e[0],i=n.parser.mode;return i==="math"&&(n.parser.settings.reportNonstrict("mathVsTextAccents","LaTeX's accent "+n.funcName+" works only in text mode"),i="text"),{type:"accent",mode:i,label:n.funcName,isStretchy:!1,isShifty:!0,base:t}},htmlBuilder:Il,mathmlBuilder:Ah});Me({type:"accentUnder",names:["\\underleftarrow","\\underrightarrow","\\underleftrightarrow","\\undergroup","\\underlinesegment","\\utilde"],props:{numArgs:1},handler:(n,e)=>{var{parser:t,funcName:i}=n,r=e[0];return{type:"accentUnder",mode:t.mode,label:i,base:r}},htmlBuilder:(n,e)=>{var t=mt(n.base,e),i=js(n,e),r=n.label==="\\utilde"?.12:0,a=pt({positionType:"top",positionData:t.height,children:[{type:"elem",elem:i,wrapperClasses:["svg-align"]},{type:"kern",size:r},{type:"elem",elem:t}]});return ae(["mord","accentunder"],[a],e)},mathmlBuilder:(n,e)=>{var t=$s(n.label),i=new le("munder",[Et(n.base,e),t]);return i.setAttribute("accentunder","true"),i}});var Ka=n=>{var e=new le("mpadded",n?[n]:[]);return e.setAttribute("width","+0.6em"),e.setAttribute("lspace","0.3em"),e};Me({type:"xArrow",names:["\\xleftarrow","\\xrightarrow","\\xLeftarrow","\\xRightarrow","\\xleftrightarrow","\\xLeftrightarrow","\\xhookleftarrow","\\xhookrightarrow","\\xmapsto","\\xrightharpoondown","\\xrightharpoonup","\\xleftharpoondown","\\xleftharpoonup","\\xrightleftharpoons","\\xleftrightharpoons","\\xlongequal","\\xtwoheadrightarrow","\\xtwoheadleftarrow","\\xtofrom","\\xrightleftarrows","\\xrightequilibrium","\\xleftequilibrium","\\\\cdrightarrow","\\\\cdleftarrow","\\\\cdlongequal"],props:{numArgs:1,numOptionalArgs:1},handler(n,e,t){var{parser:i,funcName:r}=n;return{type:"xArrow",mode:i.mode,label:r,body:e[0],below:t[0]}},htmlBuilder(n,e){var t=e.style,i=e.havingStyle(t.sup()),r=jr(mt(n.body,i,e),e),a=n.label.slice(0,2)==="\\x"?"x":"cd";r.classes.push(a+"-arrow-pad");var s;n.below&&(i=e.havingStyle(t.sub()),s=jr(mt(n.below,i,e),e),s.classes.push(a+"-arrow-pad"));var o=js(n,e),l=-e.fontMetrics().axisHeight+.5*o.height,c=-e.fontMetrics().axisHeight-.5*o.height-.111;(r.depth>.25||n.label==="\\xleftequilibrium")&&(c-=r.depth);var u;if(s){var d=-e.fontMetrics().axisHeight+s.height+.5*o.height+.111;u=pt({positionType:"individualShift",children:[{type:"elem",elem:r,shift:c},{type:"elem",elem:o,shift:l,wrapperClasses:["svg-align"]},{type:"elem",elem:s,shift:d}]})}else u=pt({positionType:"individualShift",children:[{type:"elem",elem:r,shift:c},{type:"elem",elem:o,shift:l,wrapperClasses:["svg-align"]}]});return ae(["mrel","x-arrow"],[u],e)},mathmlBuilder(n,e){var t=$s(n.label);t.setAttribute("minsize",n.label.charAt(0)==="x"?"1.75em":"3.0em");var i;if(n.body){var r=Ka(Et(n.body,e));if(n.below){var a=Ka(Et(n.below,e));i=new le("munderover",[t,a,r])}else i=new le("mover",[t,r])}else if(n.below){var s=Ka(Et(n.below,e));i=new le("munder",[t,s])}else i=Ka(),i=new le("mover",[t,i]);return i}});function Ch(n,e){var t=jt(n.body,e,!0);return ae([n.mclass],t,e)}function Rh(n,e){var t,i=Fn(n.body,e);return n.mclass==="minner"?t=new le("mpadded",i):n.mclass==="mord"?n.isCharacterBox?(t=i[0],t.type="mi"):t=new le("mi",i):(n.isCharacterBox?(t=i[0],t.type="mo"):t=new le("mo",i),n.mclass==="mbin"?(t.attributes.lspace="0.22em",t.attributes.rspace="0.22em"):n.mclass==="mpunct"?(t.attributes.lspace="0em",t.attributes.rspace="0.17em"):n.mclass==="mopen"||n.mclass==="mclose"?(t.attributes.lspace="0em",t.attributes.rspace="0em"):n.mclass==="minner"&&(t.attributes.lspace="0.0556em",t.attributes.width="+0.1111em")),t}Me({type:"mclass",names:["\\mathord","\\mathbin","\\mathrel","\\mathopen","\\mathclose","\\mathpunct","\\mathinner"],props:{numArgs:1,primitive:!0},handler(n,e){var{parser:t,funcName:i}=n,r=e[0];return{type:"mclass",mode:t.mode,mclass:"m"+i.slice(5),body:Gt(r),isCharacterBox:Ri(r)}},htmlBuilder:Ch,mathmlBuilder:Rh});var Js=n=>{var e=n.type==="ordgroup"&&n.body.length?n.body[0]:n;return e.type==="atom"&&(e.family==="bin"||e.family==="rel")?"m"+e.family:"mord"};Me({type:"mclass",names:["\\@binrel"],props:{numArgs:2},handler(n,e){var{parser:t}=n;return{type:"mclass",mode:t.mode,mclass:Js(e[0]),body:Gt(e[1]),isCharacterBox:Ri(e[1])}}});Me({type:"mclass",names:["\\stackrel","\\overset","\\underset"],props:{numArgs:2},handler(n,e){var{parser:t,funcName:i}=n,r=e[1],a=e[0],s;i!=="\\stackrel"?s=Js(r):s="mrel";var o={type:"op",mode:r.mode,limits:!0,alwaysHandleSupSub:!0,parentIsSupSub:!1,symbol:!1,suppressBaseShift:i!=="\\stackrel",body:Gt(r)},l={type:"supsub",mode:a.mode,base:o,sup:i==="\\underset"?null:a,sub:i==="\\underset"?a:null};return{type:"mclass",mode:t.mode,mclass:s,body:[l],isCharacterBox:Ri(l)}},htmlBuilder:Ch,mathmlBuilder:Rh});Me({type:"pmb",names:["\\pmb"],props:{numArgs:1,allowedInText:!0},handler(n,e){var{parser:t}=n;return{type:"pmb",mode:t.mode,mclass:Js(e[0]),body:Gt(e[0])}},htmlBuilder(n,e){var t=jt(n.body,e,!0),i=ae([n.mclass],t,e);return i.style.textShadow="0.02em 0.01em 0.04px",i},mathmlBuilder(n,e){var t=Fn(n.body,e),i=new le("mstyle",t);return i.setAttribute("style","text-shadow: 0.02em 0.01em 0.04px"),i}});var op={">":"\\\\cdrightarrow","<":"\\\\cdleftarrow","=":"\\\\cdlongequal",A:"\\uparrow",V:"\\downarrow","|":"\\Vert",".":"no arrow"},Dc=()=>({type:"styling",body:[],mode:"math",style:"display",resetFont:!0}),Pc=n=>n.type==="textord"&&n.text==="@",lp=(n,e)=>(n.type==="mathord"||n.type==="atom")&&n.text===e;function cp(n,e,t){var i=op[n];switch(i){case"\\\\cdrightarrow":case"\\\\cdleftarrow":return t.callFunction(i,[e[0]],[e[1]]);case"\\uparrow":case"\\downarrow":{var r=t.callFunction("\\\\cdleft",[e[0]],[]),a={type:"atom",text:i,mode:"math",family:"rel"},s=t.callFunction("\\Big",[a],[]),o=t.callFunction("\\\\cdright",[e[1]],[]),l={type:"ordgroup",mode:"math",body:[r,s,o]};return t.callFunction("\\\\cdparent",[l],[])}case"\\\\cdlongequal":return t.callFunction("\\\\cdlongequal",[],[]);case"\\Vert":{var c={type:"textord",text:"\\Vert",mode:"math"};return t.callFunction("\\Big",[c],[])}default:return{type:"textord",text:" ",mode:"math"}}}function up(n){var e=[];for(n.gullet.beginGroup(),n.gullet.macros.set("\\cr","\\\\\\relax"),n.gullet.beginGroup();;){e.push(n.parseExpression(!1,"\\\\")),n.gullet.endGroup(),n.gullet.beginGroup();var t=n.fetch().text;if(t==="&"||t==="\\\\")n.consume();else if(t==="\\end"){e[e.length-1].length===0&&e.pop();break}else throw new oe("Expected \\\\ or \\cr or \\end",n.nextToken)}for(var i=[],r=[i],a=0;a<e.length;a++){for(var s=e[a],o=Dc(),l=0;l<s.length;l++)if(!Pc(s[l]))o.body.push(s[l]);else{i.push(o),l+=1;var c=Ks(s[l]).text,u=new Array(2);if(u[0]={type:"ordgroup",mode:"math",body:[]},u[1]={type:"ordgroup",mode:"math",body:[]},!"=|.".includes(c))if("<>AV".includes(c))for(var d=0;d<2;d++){for(var f=!0,m=l+1;m<s.length;m++){if(lp(s[m],c)){f=!1,l=m;break}if(Pc(s[m]))throw new oe("Missing a "+c+" character to complete a CD arrow.",s[m]);u[d].body.push(s[m])}if(f)throw new oe("Missing a "+c+" character to complete a CD arrow.",s[l])}else throw new oe('Expected one of "<>AV=|." after @',s[l]);var v=cp(c,u,n),b={type:"styling",body:[v],mode:"math",style:"display",resetFont:!0};i.push(b),o=Dc()}a%2===0?i.push(o):i.shift(),i=[],r.push(i)}n.gullet.endGroup(),n.gullet.endGroup();var g=new Array(r[0].length).fill({type:"align",align:"c",pregap:.25,postgap:.25});return{type:"array",mode:"math",body:r,arraystretch:1,addJot:!0,rowGaps:[null],cols:g,colSeparationType:"CD",hLinesBeforeRow:new Array(r.length+1).fill([])}}Me({type:"cdlabel",names:["\\\\cdleft","\\\\cdright"],props:{numArgs:1},handler(n,e){var{parser:t,funcName:i}=n;return{type:"cdlabel",mode:t.mode,side:i.slice(4),label:e[0]}},htmlBuilder(n,e){var t=e.havingStyle(e.style.sup()),i=jr(mt(n.label,t,e),e);return i.classes.push("cd-label-"+n.side),i.style.bottom=ue(.8-i.depth),i.height=0,i.depth=0,i},mathmlBuilder(n,e){var t=new le("mrow",[Et(n.label,e)]);return t=new le("mpadded",[t]),t.setAttribute("width","0"),n.side==="left"&&t.setAttribute("lspace","-1width"),t.setAttribute("voffset","0.7em"),t=new le("mstyle",[t]),t.setAttribute("displaystyle","false"),t.setAttribute("scriptlevel","1"),t}});Me({type:"cdlabelparent",names:["\\\\cdparent"],props:{numArgs:1},handler(n,e){var{parser:t}=n;return{type:"cdlabelparent",mode:t.mode,fragment:e[0]}},htmlBuilder(n,e){var t=jr(mt(n.fragment,e),e);return t.classes.push("cd-vert-arrow"),t},mathmlBuilder(n,e){return new le("mrow",[Et(n.fragment,e)])}});Me({type:"textord",names:["\\@char"],props:{numArgs:1,allowedInText:!0},handler(n,e){for(var{parser:t}=n,i=et(e[0],"ordgroup"),r=i.body,a="",s=0;s<r.length;s++){var o=et(r[s],"textord");a+=o.text}var l=parseInt(a),c;if(isNaN(l))throw new oe("\\@char has non-numeric argument "+a);if(l<0||l>=1114111)throw new oe("\\@char with invalid code point "+a);return l<=65535?c=String.fromCharCode(l):(l-=65536,c=String.fromCharCode((l>>10)+55296,(l&1023)+56320)),{type:"textord",mode:t.mode,text:c}}});var Dh=(n,e)=>{var t=jt(n.body,e.withColor(n.color),!1);return Pi(t)},Ph=(n,e)=>{var t=Fn(n.body,e.withColor(n.color)),i=new le("mstyle",t);return i.setAttribute("mathcolor",n.color),i};Me({type:"color",names:["\\textcolor"],props:{numArgs:2,allowedInText:!0,argTypes:["color","original"]},handler(n,e){var{parser:t}=n,i=et(e[0],"color-token").color,r=e[1];return{type:"color",mode:t.mode,color:i,body:Gt(r)}},htmlBuilder:Dh,mathmlBuilder:Ph});Me({type:"color",names:["\\color"],props:{numArgs:1,allowedInText:!0,argTypes:["color"]},handler(n,e){var{parser:t,breakOnTokenText:i}=n,r=et(e[0],"color-token").color;t.gullet.macros.set("\\current@color",r);var a=t.parseExpression(!0,i);return{type:"color",mode:t.mode,color:r,body:a}},htmlBuilder:Dh,mathmlBuilder:Ph});Me({type:"cr",names:["\\\\"],props:{numArgs:0,numOptionalArgs:0,allowedInText:!0},handler(n,e,t){var{parser:i}=n,r=i.gullet.future().text==="["?i.parseSizeGroup(!0):null,a=!i.settings.displayMode||!i.settings.useStrictBehavior("newLineInDisplayMode","In LaTeX, \\\\ or \\newline does nothing in display mode");return{type:"cr",mode:i.mode,newLine:a,size:r&&et(r,"size").value}},htmlBuilder(n,e){var t=ae(["mspace"],[],e);return n.newLine&&(t.classes.push("newline"),n.size&&(t.style.marginTop=ue(It(n.size,e)))),t},mathmlBuilder(n,e){var t=new le("mspace");return n.newLine&&(t.setAttribute("linebreak","newline"),n.size&&t.setAttribute("height",ue(It(n.size,e)))),t}});var C0={"\\global":"\\global","\\long":"\\\\globallong","\\\\globallong":"\\\\globallong","\\def":"\\gdef","\\gdef":"\\gdef","\\edef":"\\xdef","\\xdef":"\\xdef","\\let":"\\\\globallet","\\futurelet":"\\\\globalfuture"},Lh=n=>{var e=n.text;if(/^(?:[\\{}$&#^_]|EOF)$/.test(e))throw new oe("Expected a control sequence",n);return e},hp=n=>{var e=n.gullet.popToken();return e.text==="="&&(e=n.gullet.popToken(),e.text===" "&&(e=n.gullet.popToken())),e},Ih=(n,e,t,i)=>{var r=n.gullet.macros.get(t.text);r==null&&(t.noexpand=!0,r={tokens:[t],numArgs:0,unexpandable:!n.gullet.isExpandable(t.text)}),n.gullet.macros.set(e,r,i)};Me({type:"internal",names:["\\global","\\long","\\\\globallong"],props:{numArgs:0,allowedInText:!0},handler(n){var{parser:e,funcName:t}=n;e.consumeSpaces();var i=e.fetch();if(C0[i.text])return(t==="\\global"||t==="\\\\globallong")&&(i.text=C0[i.text]),et(e.parseFunction(),"internal");throw new oe("Invalid token after macro prefix",i)}});Me({type:"internal",names:["\\def","\\gdef","\\edef","\\xdef"],props:{numArgs:0,allowedInText:!0,primitive:!0},handler(n){var{parser:e,funcName:t}=n,i=e.gullet.popToken(),r=i.text;if(/^(?:[\\{}$&#^_]|EOF)$/.test(r))throw new oe("Expected a control sequence",i);for(var a=0,s,o=[[]];e.gullet.future().text!=="{";)if(i=e.gullet.popToken(),i.text==="#"){if(e.gullet.future().text==="{"){s=e.gullet.future(),o[a].push("{");break}if(i=e.gullet.popToken(),!/^[1-9]$/.test(i.text))throw new oe('Invalid argument number "'+i.text+'"');if(parseInt(i.text)!==a+1)throw new oe('Argument number "'+i.text+'" out of order');a++,o.push([])}else{if(i.text==="EOF")throw new oe("Expected a macro definition");o[a].push(i.text)}var{tokens:l}=e.gullet.consumeArg();return s&&l.unshift(s),(t==="\\edef"||t==="\\xdef")&&(l=e.gullet.expandTokens(l),l.reverse()),e.gullet.macros.set(r,{tokens:l,numArgs:a,delimiters:o},t===C0[t]),{type:"internal",mode:e.mode}}});Me({type:"internal",names:["\\let","\\\\globallet"],props:{numArgs:0,allowedInText:!0,primitive:!0},handler(n){var{parser:e,funcName:t}=n,i=Lh(e.gullet.popToken());e.gullet.consumeSpaces();var r=hp(e);return Ih(e,i,r,t==="\\\\globallet"),{type:"internal",mode:e.mode}}});Me({type:"internal",names:["\\futurelet","\\\\globalfuture"],props:{numArgs:0,allowedInText:!0,primitive:!0},handler(n){var{parser:e,funcName:t}=n,i=Lh(e.gullet.popToken()),r=e.gullet.popToken(),a=e.gullet.popToken();return Ih(e,i,a,t==="\\\\globalfuture"),e.gullet.pushToken(a),e.gullet.pushToken(r),{type:"internal",mode:e.mode}}});var ya=function(e,t,i){var r=Ct.math[e]&&Ct.math[e].replace,a=Cl(r||e,t,i);if(!a)throw new Error("Unsupported symbol "+e+" and font size "+t+".");return a},Ul=function(e,t,i,r){var a=i.havingBaseStyle(t),s=ae(r.concat(a.sizingClasses(i)),[e],i),o=a.sizeMultiplier/i.sizeMultiplier;return s.height*=o,s.depth*=o,s.maxFontSize=a.sizeMultiplier,s},Uh=function(e,t,i){var r=t.havingBaseStyle(i),a=(1-t.sizeMultiplier/r.sizeMultiplier)*t.fontMetrics().axisHeight;e.classes.push("delimcenter"),e.style.top=ue(a),e.height-=a,e.depth+=a},dp=function(e,t,i,r,a,s){var o=dn(e,"Main-Regular",a,r),l=Ul(o,t,r,s);return Uh(l,r,t),l},fp=function(e,t,i,r){return dn(e,"Size"+t+"-Regular",i,r)},Nh=function(e,t,i,r,a,s){var o=fp(e,t,a,r),l=Ul(ae(["delimsizing","size"+t],[o],r),Ke.TEXT,r,s);return i&&Uh(l,r,Ke.TEXT),l},_o=function(e,t,i){var r;t==="Size1-Regular"?r="delim-size1":r="delim-size4";var a=ae(["delimsizinginner",r],[ae([],[dn(e,t,i)])]);return{type:"elem",elem:a}},yo=function(e,t,i){var r=ii["Size4-Regular"][e.charCodeAt(0)]?ii["Size4-Regular"][e.charCodeAt(0)][4]:ii["Size1-Regular"][e.charCodeAt(0)][4],a=new Yi("inner",Mf(e,Math.round(1e3*t))),s=new Ai([a],{width:ue(r),height:ue(t),style:"width:"+ue(r),viewBox:"0 0 "+1e3*r+" "+Math.round(1e3*t),preserveAspectRatio:"xMinYMin"}),o=$i([],[s],i);return o.height=t,o.style.height=ue(t),o.style.width=ue(r),{type:"elem",elem:o}},R0=.008,Za={type:"kern",size:-1*R0},pp=new Set(["|","\\lvert","\\rvert","\\vert"]),mp=new Set(["\\|","\\lVert","\\rVert","\\Vert"]),Fh=function(e,t,i,r,a,s){var o,l,c,u,d="",f=0;o=c=u=e,l=null;var m="Size1-Regular";e==="\\uparrow"?c=u="⏐":e==="\\Uparrow"?c=u="‖":e==="\\downarrow"?o=c="⏐":e==="\\Downarrow"?o=c="‖":e==="\\updownarrow"?(o="\\uparrow",c="⏐",u="\\downarrow"):e==="\\Updownarrow"?(o="\\Uparrow",c="‖",u="\\Downarrow"):pp.has(e)?(c="∣",d="vert",f=333):mp.has(e)?(c="∥",d="doublevert",f=556):e==="["||e==="\\lbrack"?(o="⎡",c="⎢",u="⎣",m="Size4-Regular",d="lbrack",f=667):e==="]"||e==="\\rbrack"?(o="⎤",c="⎥",u="⎦",m="Size4-Regular",d="rbrack",f=667):e==="\\lfloor"||e==="⌊"?(c=o="⎢",u="⎣",m="Size4-Regular",d="lfloor",f=667):e==="\\lceil"||e==="⌈"?(o="⎡",c=u="⎢",m="Size4-Regular",d="lceil",f=667):e==="\\rfloor"||e==="⌋"?(c=o="⎥",u="⎦",m="Size4-Regular",d="rfloor",f=667):e==="\\rceil"||e==="⌉"?(o="⎤",c=u="⎥",m="Size4-Regular",d="rceil",f=667):e==="("||e==="\\lparen"?(o="⎛",c="⎜",u="⎝",m="Size4-Regular",d="lparen",f=875):e===")"||e==="\\rparen"?(o="⎞",c="⎟",u="⎠",m="Size4-Regular",d="rparen",f=875):e==="\\{"||e==="\\lbrace"?(o="⎧",l="⎨",u="⎩",c="⎪",m="Size4-Regular"):e==="\\}"||e==="\\rbrace"?(o="⎫",l="⎬",u="⎭",c="⎪",m="Size4-Regular"):e==="\\lgroup"||e==="⟮"?(o="⎧",u="⎩",c="⎪",m="Size4-Regular"):e==="\\rgroup"||e==="⟯"?(o="⎫",u="⎭",c="⎪",m="Size4-Regular"):e==="\\lmoustache"||e==="⎰"?(o="⎧",u="⎭",c="⎪",m="Size4-Regular"):(e==="\\rmoustache"||e==="⎱")&&(o="⎫",u="⎩",c="⎪",m="Size4-Regular");var v=ya(o,m,a),b=v.height+v.depth,g=ya(c,m,a),p=g.height+g.depth,T=ya(u,m,a),A=T.height+T.depth,D=0,I=1;if(l!==null){var C=ya(l,m,a);D=C.height+C.depth,I=2}var U=b+A+D,B=Math.max(0,Math.ceil((t-U)/(I*p))),E=U+B*I*p,w=r.fontMetrics().axisHeight;i&&(w*=r.sizeMultiplier);var O=E/2-w,k=[];if(d.length>0){var q=E-b-A,$=Math.round(E*1e3),J=Sf(d,Math.round(q*1e3)),Z=new Yi(d,J),he=ue(f/1e3),K=ue($/1e3),fe=new Ai([Z],{width:he,height:K,viewBox:"0 0 "+f+" "+$}),de=$i([],[fe],r);de.height=$/1e3,de.style.width=he,de.style.height=K,k.push({type:"elem",elem:de})}else{if(k.push(_o(u,m,a)),k.push(Za),l===null){var Pe=E-b-A+2*R0;k.push(yo(c,Pe,r))}else{var tt=(E-b-A-D)/2+2*R0;k.push(yo(c,tt,r)),k.push(Za),k.push(_o(l,m,a)),k.push(Za),k.push(yo(c,tt,r))}k.push(Za),k.push(_o(o,m,a))}var nt=r.havingBaseStyle(Ke.TEXT),ft=pt({positionType:"bottom",positionData:O,children:k});return Ul(ae(["delimsizing","mult"],[ft],nt),Ke.TEXT,r,s)},Mo=80,So=.08,wo=function(e,t,i,r,a){var s=yf(e,r,i),o=new Yi(e,s),l=new Ai([o],{width:"400em",height:ue(t),viewBox:"0 0 400000 "+i,preserveAspectRatio:"xMinYMin slice"});return $i(["hide-tail"],[l],a)},xp=function(e,t){var i=t.havingBaseSizing(),r=Hh("\\surd",e*i.sizeMultiplier,kh,i),a=i.sizeMultiplier,s=Math.max(0,t.minRuleThickness-t.fontMetrics().sqrtRuleThickness),o,l,c,u,d;return r.type==="small"?(u=1e3+1e3*s+Mo,e<1?a=1:e<1.4&&(a=.7),l=(1+s+So)/a,c=(1+s)/a,o=wo("sqrtMain",l,u,s,t),o.style.minWidth="0.853em",d=.833/a):r.type==="large"?(u=(1e3+Mo)*wa[r.size],c=(wa[r.size]+s)/a,l=(wa[r.size]+s+So)/a,o=wo("sqrtSize"+r.size,l,u,s,t),o.style.minWidth="1.02em",d=1/a):(l=e+s+So,c=e+s,u=Math.floor(1e3*e+s)+Mo,o=wo("sqrtTall",l,u,s,t),o.style.minWidth="0.742em",d=1.056),o.height=c,o.style.height=ue(l),{span:o,advanceWidth:d,ruleWidth:(t.fontMetrics().sqrtRuleThickness+s)*a}},Oh=new Set(["(","\\lparen",")","\\rparen","[","\\lbrack","]","\\rbrack","\\{","\\lbrace","\\}","\\rbrace","\\lfloor","\\rfloor","⌊","⌋","\\lceil","\\rceil","⌈","⌉","\\surd"]),gp=new Set(["\\uparrow","\\downarrow","\\updownarrow","\\Uparrow","\\Downarrow","\\Updownarrow","|","\\|","\\vert","\\Vert","\\lvert","\\rvert","\\lVert","\\rVert","\\lgroup","\\rgroup","⟮","⟯","\\lmoustache","\\rmoustache","⎰","⎱"]),zh=new Set(["<",">","\\langle","\\rangle","/","\\backslash","\\lt","\\gt"]),wa=[0,1.2,1.8,2.4,3],Bh=function(e,t,i,r,a){if(e==="<"||e==="\\lt"||e==="⟨"?e="\\langle":(e===">"||e==="\\gt"||e==="⟩")&&(e="\\rangle"),Oh.has(e)||zh.has(e))return Nh(e,t,!1,i,r,a);if(gp.has(e))return Fh(e,wa[t],!1,i,r,a);throw new oe("Illegal delimiter: '"+e+"'")},vp=[{type:"small",style:Ke.SCRIPTSCRIPT},{type:"small",style:Ke.SCRIPT},{type:"small",style:Ke.TEXT},{type:"large",size:1},{type:"large",size:2},{type:"large",size:3},{type:"large",size:4}],bp=[{type:"small",style:Ke.SCRIPTSCRIPT},{type:"small",style:Ke.SCRIPT},{type:"small",style:Ke.TEXT},{type:"stack"}],kh=[{type:"small",style:Ke.SCRIPTSCRIPT},{type:"small",style:Ke.SCRIPT},{type:"small",style:Ke.TEXT},{type:"large",size:1},{type:"large",size:2},{type:"large",size:3},{type:"large",size:4},{type:"stack"}],_p=function(e){if(e.type==="small")return"Main-Regular";if(e.type==="large")return"Size"+e.size+"-Regular";if(e.type==="stack")return"Size4-Regular";var t=e.type;throw new Error("Add support for delim type '"+t+"' here.")},Hh=function(e,t,i,r){for(var a=Math.min(2,3-r.style.size),s=a;s<i.length;s++){var o=i[s];if(o.type==="stack")break;var l=ya(e,_p(o),"math"),c=l.height+l.depth;if(o.type==="small"){var u=r.havingBaseStyle(o.style);c*=u.sizeMultiplier}if(c>t)return o}return i[i.length-1]},D0=function(e,t,i,r,a,s){e==="<"||e==="\\lt"||e==="⟨"?e="\\langle":(e===">"||e==="\\gt"||e==="⟩")&&(e="\\rangle");var o;zh.has(e)?o=vp:Oh.has(e)?o=kh:o=bp;var l=Hh(e,t,o,r);return l.type==="small"?dp(e,l.style,i,r,a,s):l.type==="large"?Nh(e,l.size,i,r,a,s):Fh(e,t,i,r,a,s)},Eo=function(e,t,i,r,a,s){var o=r.fontMetrics().axisHeight*r.sizeMultiplier,l=901,c=5/r.fontMetrics().ptPerEm,u=Math.max(t-o,i+o),d=Math.max(u/500*l,2*u-c);return D0(e,d,!0,r,a,s)},Lc={"\\bigl":{mclass:"mopen",size:1},"\\Bigl":{mclass:"mopen",size:2},"\\biggl":{mclass:"mopen",size:3},"\\Biggl":{mclass:"mopen",size:4},"\\bigr":{mclass:"mclose",size:1},"\\Bigr":{mclass:"mclose",size:2},"\\biggr":{mclass:"mclose",size:3},"\\Biggr":{mclass:"mclose",size:4},"\\bigm":{mclass:"mrel",size:1},"\\Bigm":{mclass:"mrel",size:2},"\\biggm":{mclass:"mrel",size:3},"\\Biggm":{mclass:"mrel",size:4},"\\big":{mclass:"mord",size:1},"\\Big":{mclass:"mord",size:2},"\\bigg":{mclass:"mord",size:3},"\\Bigg":{mclass:"mord",size:4}},yp=new Set(["(","\\lparen",")","\\rparen","[","\\lbrack","]","\\rbrack","\\{","\\lbrace","\\}","\\rbrace","\\lfloor","\\rfloor","⌊","⌋","\\lceil","\\rceil","⌈","⌉","<",">","\\langle","⟨","\\rangle","⟩","\\lt","\\gt","\\lvert","\\rvert","\\lVert","\\rVert","\\lgroup","\\rgroup","⟮","⟯","\\lmoustache","\\rmoustache","⎰","⎱","/","\\backslash","|","\\vert","\\|","\\Vert","\\uparrow","\\Uparrow","\\downarrow","\\Downarrow","\\updownarrow","\\Updownarrow","."]);function Ic(n){return"isMiddle"in n}function Qs(n,e){var t=Zs(n);if(t&&yp.has(t.text))return t;throw t?new oe("Invalid delimiter '"+t.text+"' after '"+e.funcName+"'",n):new oe("Invalid delimiter type '"+n.type+"'",n)}Me({type:"delimsizing",names:["\\bigl","\\Bigl","\\biggl","\\Biggl","\\bigr","\\Bigr","\\biggr","\\Biggr","\\bigm","\\Bigm","\\biggm","\\Biggm","\\big","\\Big","\\bigg","\\Bigg"],props:{numArgs:1,argTypes:["primitive"]},handler:(n,e)=>{var t=Qs(e[0],n);return{type:"delimsizing",mode:n.parser.mode,size:Lc[n.funcName].size,mclass:Lc[n.funcName].mclass,delim:t.text}},htmlBuilder:(n,e)=>n.delim==="."?ae([n.mclass]):Bh(n.delim,n.size,e,n.mode,[n.mclass]),mathmlBuilder:n=>{var e=[];n.delim!=="."&&e.push(Gn(n.delim,n.mode));var t=new le("mo",e);n.mclass==="mopen"||n.mclass==="mclose"?t.setAttribute("fence","true"):t.setAttribute("fence","false"),t.setAttribute("stretchy","true");var i=ue(wa[n.size]);return t.setAttribute("minsize",i),t.setAttribute("maxsize",i),t}});function Uc(n){if(!n.body)throw new Error("Bug: The leftright ParseNode wasn't fully parsed.")}Me({type:"leftright-right",names:["\\right"],props:{numArgs:1,primitive:!0},handler:(n,e)=>{var t=n.parser.gullet.macros.get("\\current@color");if(t&&typeof t!="string")throw new oe("\\current@color set to non-string in \\right");return{type:"leftright-right",mode:n.parser.mode,delim:Qs(e[0],n).text,color:t}}});Me({type:"leftright",names:["\\left"],props:{numArgs:1,primitive:!0},handler:(n,e)=>{var t=Qs(e[0],n),i=n.parser;++i.leftrightDepth;var r=i.parseExpression(!1);--i.leftrightDepth,i.expect("\\right",!1);var a=et(i.parseFunction(),"leftright-right");return{type:"leftright",mode:i.mode,body:r,left:t.text,right:a.delim,rightColor:a.color}},htmlBuilder:(n,e)=>{Uc(n);for(var t=jt(n.body,e,!0,["mopen","mclose"]),i=0,r=0,a=!1,s=0;s<t.length;s++){var o=t[s];Ic(o)?a=!0:(i=Math.max(t[s].height,i),r=Math.max(t[s].depth,r))}i*=e.sizeMultiplier,r*=e.sizeMultiplier;var l;if(n.left==="."?l=Ca(e,["mopen"]):l=Eo(n.left,i,r,e,n.mode,["mopen"]),t.unshift(l),a)for(var c=1;c<t.length;c++){var u=t[c];if(Ic(u)){var d=u.isMiddle;t[c]=Eo(d.delim,i,r,d.options,n.mode,[])}}var f;if(n.right===".")f=Ca(e,["mclose"]);else{var m=n.rightColor?e.withColor(n.rightColor):e;f=Eo(n.right,i,r,m,n.mode,["mclose"])}return t.push(f),ae(["minner"],t,e)},mathmlBuilder:(n,e)=>{Uc(n);var t=Fn(n.body,e);if(n.left!=="."){var i=new le("mo",[Gn(n.left,n.mode)]);i.setAttribute("fence","true"),t.unshift(i)}if(n.right!=="."){var r=new le("mo",[Gn(n.right,n.mode)]);r.setAttribute("fence","true"),n.rightColor&&r.setAttribute("mathcolor",n.rightColor),t.push(r)}return Pl(t)}});Me({type:"middle",names:["\\middle"],props:{numArgs:1,primitive:!0},handler:(n,e)=>{var t=Qs(e[0],n);if(!n.parser.leftrightDepth)throw new oe("\\middle without preceding \\left",t);return{type:"middle",mode:n.parser.mode,delim:t.text}},htmlBuilder:(n,e)=>{var t;return n.delim==="."?t=Ca(e,[]):(t=Bh(n.delim,1,e,n.mode,[]),t.isMiddle={delim:n.delim,options:e}),t},mathmlBuilder:(n,e)=>{var t=n.delim==="\\vert"||n.delim==="|"?Gn("|","text"):Gn(n.delim,n.mode),i=new le("mo",[t]);return i.setAttribute("fence","true"),i.setAttribute("lspace","0.05em"),i.setAttribute("rspace","0.05em"),i}});var eo=(n,e)=>{var t=jr(mt(n.body,e),e),i=n.label.slice(1),r=e.sizeMultiplier,a,s,o=Ri(n.body);if(i==="sout")a=ae(["stretchy","sout"]),a.height=e.fontMetrics().defaultRuleThickness/r,s=-.5*e.fontMetrics().xHeight;else if(i==="phase"){var l=It({number:.6,unit:"pt"},e),c=It({number:.35,unit:"ex"},e),u=e.havingBaseSizing();r=r/u.sizeMultiplier;var d=t.height+t.depth+l+c;t.style.paddingLeft=ue(d/2+l);var f=Math.floor(1e3*d*r),m=bf(f),v=new Ai([new Yi("phase",m)],{width:"400em",height:ue(f/1e3),viewBox:"0 0 400000 "+f,preserveAspectRatio:"xMinYMin slice"});a=$i(["hide-tail"],[v],e),a.style.height=ue(d),s=t.depth+l+c}else{/cancel/.test(i)?o||t.classes.push("cancel-pad"):i==="angl"?t.classes.push("anglpad"):t.classes.push("boxpad");var b,g,p=0;/box/.test(i)?(p=Math.max(e.fontMetrics().fboxrule,e.minRuleThickness),b=e.fontMetrics().fboxsep+(i==="colorbox"?0:p),g=b):i==="angl"?(p=Math.max(e.fontMetrics().defaultRuleThickness,e.minRuleThickness),b=4*p,g=Math.max(0,.25-t.depth)):(b=o?.2:0,g=b),a=np(t,i,b,g,e),/fbox|boxed|fcolorbox/.test(i)?(a.style.borderStyle="solid",a.style.borderWidth=ue(p)):i==="angl"&&p!==.049&&(a.style.borderTopWidth=ue(p),a.style.borderRightWidth=ue(p)),s=t.depth+g,n.backgroundColor&&(a.style.backgroundColor=n.backgroundColor,n.borderColor&&(a.style.borderColor=n.borderColor))}var T;if(n.backgroundColor)T=pt({positionType:"individualShift",children:[{type:"elem",elem:a,shift:s},{type:"elem",elem:t,shift:0}]});else{var A=/cancel|phase/.test(i)?["svg-align"]:[];T=pt({positionType:"individualShift",children:[{type:"elem",elem:t,shift:0},{type:"elem",elem:a,shift:s,wrapperClasses:A}]})}return/cancel/.test(i)&&(T.height=t.height,T.depth=t.depth),/cancel/.test(i)&&!o?ae(["mord","cancel-lap"],[T],e):ae(["mord"],[T],e)},to=(n,e)=>{var t,i=new le(n.label.includes("colorbox")?"mpadded":"menclose",[Et(n.body,e)]);switch(n.label){case"\\cancel":i.setAttribute("notation","updiagonalstrike");break;case"\\bcancel":i.setAttribute("notation","downdiagonalstrike");break;case"\\phase":i.setAttribute("notation","phasorangle");break;case"\\sout":i.setAttribute("notation","horizontalstrike");break;case"\\fbox":i.setAttribute("notation","box");break;case"\\angl":i.setAttribute("notation","actuarial");break;case"\\fcolorbox":case"\\colorbox":if(t=e.fontMetrics().fboxsep*e.fontMetrics().ptPerEm,i.setAttribute("width","+"+2*t+"pt"),i.setAttribute("height","+"+2*t+"pt"),i.setAttribute("lspace",t+"pt"),i.setAttribute("voffset",t+"pt"),n.label==="\\fcolorbox"){var r=Math.max(e.fontMetrics().fboxrule,e.minRuleThickness);i.setAttribute("style","border: "+ue(r)+" solid "+n.borderColor)}break;case"\\xcancel":i.setAttribute("notation","updiagonalstrike downdiagonalstrike");break}return n.backgroundColor&&i.setAttribute("mathbackground",n.backgroundColor),i};Me({type:"enclose",names:["\\colorbox"],props:{numArgs:2,allowedInText:!0,argTypes:["color","hbox"]},handler(n,e,t){var{parser:i,funcName:r}=n,a=et(e[0],"color-token").color,s=e[1];return{type:"enclose",mode:i.mode,label:r,backgroundColor:a,body:s}},htmlBuilder:eo,mathmlBuilder:to});Me({type:"enclose",names:["\\fcolorbox"],props:{numArgs:3,allowedInText:!0,argTypes:["color","color","hbox"]},handler(n,e,t){var{parser:i,funcName:r}=n,a=et(e[0],"color-token").color,s=et(e[1],"color-token").color,o=e[2];return{type:"enclose",mode:i.mode,label:r,backgroundColor:s,borderColor:a,body:o}},htmlBuilder:eo,mathmlBuilder:to});Me({type:"enclose",names:["\\fbox"],props:{numArgs:1,argTypes:["hbox"],allowedInText:!0},handler(n,e){var{parser:t}=n;return{type:"enclose",mode:t.mode,label:"\\fbox",body:e[0]}}});Me({type:"enclose",names:["\\cancel","\\bcancel","\\xcancel","\\phase"],props:{numArgs:1},handler(n,e){var{parser:t,funcName:i}=n,r=e[0];return{type:"enclose",mode:t.mode,label:i,body:r}},htmlBuilder:eo,mathmlBuilder:to});Me({type:"enclose",names:["\\sout"],props:{numArgs:1,allowedInText:!0},handler(n,e){var{parser:t,funcName:i}=n;t.mode==="math"&&t.settings.reportNonstrict("mathVsSout","LaTeX's \\sout works only in text mode");var r=e[0];return{type:"enclose",mode:t.mode,label:i,body:r}},htmlBuilder:eo,mathmlBuilder:to});Me({type:"enclose",names:["\\angl"],props:{numArgs:1,argTypes:["hbox"],allowedInText:!1},handler(n,e){var{parser:t}=n;return{type:"enclose",mode:t.mode,label:"\\angl",body:e[0]}}});var Vh={};function ci(n){for(var{type:e,names:t,props:i,handler:r,htmlBuilder:a,mathmlBuilder:s}=n,o={type:e,numArgs:i.numArgs||0,allowedInText:!1,numOptionalArgs:0,handler:r},l=0;l<t.length;++l)Vh[t[l]]=o;a&&(Ns[e]=a),s&&(Fs[e]=s)}var Gh={};function M(n,e){Gh[n]=e}class _n{constructor(e,t,i){this.lexer=void 0,this.start=void 0,this.end=void 0,this.lexer=e,this.start=t,this.end=i}static range(e,t){return t?!e||!e.loc||!t.loc||e.loc.lexer!==t.loc.lexer?null:new _n(e.loc.lexer,e.loc.start,t.loc.end):e&&e.loc}}class Ln{constructor(e,t){this.text=void 0,this.loc=void 0,this.noexpand=void 0,this.treatAsRelax=void 0,this.text=e,this.loc=t}range(e,t){return new Ln(t,_n.range(this,e))}}function Nc(n){var e=[];n.consumeSpaces();var t=n.fetch().text;for(t==="\\relax"&&(n.consume(),n.consumeSpaces(),t=n.fetch().text);t==="\\hline"||t==="\\hdashline";)n.consume(),e.push(t==="\\hdashline"),n.consumeSpaces(),t=n.fetch().text;return e}var no=n=>{var e=n.parser.settings;if(!e.displayMode)throw new oe("{"+n.envName+"} can be used only in display mode.")},Mp=new Set(["gather","gather*"]);function Nl(n){if(!n.includes("ed"))return!n.includes("*")}function Ji(n,e,t){var{hskipBeforeAndAfter:i,addJot:r,cols:a,arraystretch:s,colSeparationType:o,autoTag:l,singleRow:c,emptySingleRow:u,maxNumCols:d,leqno:f}=e;if(n.gullet.beginGroup(),c||n.gullet.macros.set("\\cr","\\\\\\relax"),!s){var m=n.gullet.expandMacroAsText("\\arraystretch");if(m==null)s=1;else if(s=parseFloat(m),!s||s<0)throw new oe("Invalid \\arraystretch: "+m)}n.gullet.beginGroup();var v=[],b=[v],g=[],p=[],T=l!=null?[]:void 0;function A(){l&&n.gullet.macros.set("\\@eqnsw","1",!0)}function D(){T&&(n.gullet.macros.get("\\df@tag")?(T.push(n.subparse([new Ln("\\df@tag")])),n.gullet.macros.set("\\df@tag",void 0,!0)):T.push(!!l&&n.gullet.macros.get("\\@eqnsw")==="1"))}for(A(),p.push(Nc(n));;){var I=n.parseExpression(!1,c?"\\end":"\\\\");n.gullet.endGroup(),n.gullet.beginGroup();var C={type:"ordgroup",mode:n.mode,body:I};t&&(C={type:"styling",mode:n.mode,style:t,resetFont:!0,body:[C]}),v.push(C);var U=n.fetch().text;if(U==="&"){if(d&&v.length===d){if(c||o)throw new oe("Too many tab characters: &",n.nextToken);n.settings.reportNonstrict("textEnv","Too few columns specified in the {array} column argument.")}n.consume()}else if(U==="\\end"){D(),v.length===1&&C.type==="styling"&&C.body.length===1&&C.body[0].type==="ordgroup"&&C.body[0].body.length===0&&(b.length>1||!u)&&b.pop(),p.length<b.length+1&&p.push([]);break}else if(U==="\\\\"){n.consume();var B=void 0;n.gullet.future().text!==" "&&(B=n.parseSizeGroup(!0)),g.push(B?B.value:null),D(),p.push(Nc(n)),v=[],b.push(v),A()}else throw new oe("Expected & or \\\\ or \\cr or \\end",n.nextToken)}return n.gullet.endGroup(),n.gullet.endGroup(),{type:"array",mode:n.mode,addJot:r,arraystretch:s,body:b,cols:a,rowGaps:g,hskipBeforeAndAfter:i,hLinesBeforeRow:p,colSeparationType:o,tags:T,leqno:f}}function Fl(n){return n.slice(0,1)==="d"?"display":"text"}var ui=function(e,t){var i,r,a=e.body.length,s=e.hLinesBeforeRow,o=0,l=new Array(a),c=[],u=Math.max(t.fontMetrics().arrayRuleWidth,t.minRuleThickness),d=1/t.fontMetrics().ptPerEm,f=5*d;if(e.colSeparationType&&e.colSeparationType==="small"){var m=t.havingStyle(Ke.SCRIPT).sizeMultiplier;f=.2778*(m/t.sizeMultiplier)}var v=e.colSeparationType==="CD"?It({number:3,unit:"ex"},t):12*d,b=3*d,g=e.arraystretch*v,p=.7*g,T=.3*g,A=0;function D(j){for(var Le=0;Le<j.length;++Le)Le>0&&(A+=.25),c.push({pos:A,isDashed:j[Le]})}for(D(s[0]),i=0;i<e.body.length;++i){var I=e.body[i],C=p,U=T;o<I.length&&(o=I.length);var B={cells:new Array(I.length),height:0,depth:0,pos:0};for(r=0;r<I.length;++r){var E=mt(I[r],t);U<E.depth&&(U=E.depth),C<E.height&&(C=E.height),B.cells[r]=E}var w=e.rowGaps[i],O=0;w&&(O=It(w,t),O>0&&(O+=T,U<O&&(U=O),O=0)),e.addJot&&i<e.body.length-1&&(U+=b),B.height=C,B.depth=U,A+=C,B.pos=A,A+=U+O,l[i]=B,D(s[i+1])}var k=A/2+t.fontMetrics().axisHeight,q=e.cols||[],$=[],J,Z,he=[];if(e.tags&&e.tags.some(j=>j))for(i=0;i<a;++i){var K=l[i],fe=K.pos-k,de=e.tags[i],Pe=void 0;de===!0?Pe=ae(["eqn-num"],[],t):de===!1?Pe=ae([],[],t):Pe=ae([],jt(de,t,!0),t),Pe.depth=K.depth,Pe.height=K.height,he.push({type:"elem",elem:Pe,shift:fe})}for(r=0,Z=0;r<o||Z<q.length;++r,++Z){for(var tt,nt=q[Z],ft=!0;((xt=nt)==null?void 0:xt.type)==="separator";){var xt;if(ft||(J=ae(["arraycolsep"],[]),J.style.width=ue(t.fontMetrics().doubleRuleSep),$.push(J)),nt.separator==="|"||nt.separator===":"){var ee=nt.separator==="|"?"solid":"dashed",ne=ae(["vertical-separator"],[],t);ne.style.height=ue(A),ne.style.borderRightWidth=ue(u),ne.style.borderRightStyle=ee,ne.style.margin="0 "+ue(-u/2);var Te=A-k;Te&&(ne.style.verticalAlign=ue(-Te)),$.push(ne)}else throw new oe("Invalid separator type: "+nt.separator);Z++,nt=q[Z],ft=!1}if(!(r>=o)){var He=void 0;if(r>0||e.hskipBeforeAndAfter){var Ue,rt;He=(Ue=(rt=nt)==null?void 0:rt.pregap)!=null?Ue:f,He!==0&&(J=ae(["arraycolsep"],[]),J.style.width=ue(He),$.push(J))}var Ht=[];for(i=0;i<a;++i){var Je=l[i],gt=Je.cells[r];if(gt){var N=Je.pos-k;gt.depth=Je.depth,gt.height=Je.height,Ht.push({type:"elem",elem:gt,shift:N})}}var at=pt({positionType:"individualShift",children:Ht}),st=ae(["col-align-"+(((tt=nt)==null?void 0:tt.align)||"c")],[at]);if($.push(st),r<o-1||e.hskipBeforeAndAfter){var vt,Ce;He=(vt=(Ce=nt)==null?void 0:Ce.postgap)!=null?vt:f,He!==0&&(J=ae(["arraycolsep"],[]),J.style.width=ue(He),$.push(J))}}}var bt=ae(["mtable"],$);if(c.length>0){for(var Ne=$r("hline",t,u),Ye=$r("hdashline",t,u),R=[{type:"elem",elem:bt,shift:0}];c.length>0;){var y=c.pop(),W=y.pos-k;y.isDashed?R.push({type:"elem",elem:Ye,shift:W}):R.push({type:"elem",elem:Ne,shift:W})}bt=pt({positionType:"individualShift",children:R})}if(he.length===0)return ae(["mord"],[bt],t);var Q=pt({positionType:"individualShift",children:he}),re=ae(["tag"],[Q],t);return Pi([bt,re])},Sp={c:"center ",l:"left ",r:"right "},hi=function(e,t){for(var i=[],r=new le("mtd",[],["mtr-glue"]),a=new le("mtd",[],["mml-eqn-num"]),s=0;s<e.body.length;s++){for(var o=e.body[s],l=[],c=0;c<o.length;c++)l.push(new le("mtd",[Et(o[c],t)]));e.tags&&e.tags[s]&&(l.unshift(r),l.push(r),e.leqno?l.unshift(a):l.push(a)),i.push(new le("mtr",l))}var u=new le("mtable",i),d=e.arraystretch===.5?.1:.16+e.arraystretch-1+(e.addJot?.09:0);u.setAttribute("rowspacing",ue(d));var f="",m="";if(e.cols&&e.cols.length>0){var v=e.cols,b="",g=!1,p=0,T=v.length;v[0].type==="separator"&&(f+="top ",p=1),v[v.length-1].type==="separator"&&(f+="bottom ",T-=1);for(var A=p;A<T;A++){var D=v[A];D.type==="align"?(m+=Sp[D.align],g&&(b+="none "),g=!0):D.type==="separator"&&g&&(b+=D.separator==="|"?"solid ":"dashed ",g=!1)}u.setAttribute("columnalign",m.trim()),/[sd]/.test(b)&&u.setAttribute("columnlines",b.trim())}if(e.colSeparationType==="align"){for(var I=e.cols||[],C="",U=1;U<I.length;U++)C+=U%2?"0em ":"1em ";u.setAttribute("columnspacing",C.trim())}else e.colSeparationType==="alignat"||e.colSeparationType==="gather"?u.setAttribute("columnspacing","0em"):e.colSeparationType==="small"?u.setAttribute("columnspacing","0.2778em"):e.colSeparationType==="CD"?u.setAttribute("columnspacing","0.5em"):u.setAttribute("columnspacing","1em");var B="",E=e.hLinesBeforeRow;f+=E[0].length>0?"left ":"",f+=E[E.length-1].length>0?"right ":"";for(var w=1;w<E.length-1;w++)B+=E[w].length===0?"none ":E[w][0]?"dashed ":"solid ";return/[sd]/.test(B)&&u.setAttribute("rowlines",B.trim()),f!==""&&(u=new le("menclose",[u]),u.setAttribute("notation",f.trim())),e.arraystretch&&e.arraystretch<1&&(u=new le("mstyle",[u]),u.setAttribute("scriptlevel","1")),u},Wh=function(e,t){e.envName.includes("ed")||no(e);var i=[],r=e.envName.includes("at")?"alignat":"align",a=e.envName==="split",s=Ji(e.parser,{cols:i,addJot:!0,autoTag:a?void 0:Nl(e.envName),emptySingleRow:!0,colSeparationType:r,maxNumCols:a?2:void 0,leqno:e.parser.settings.leqno},"display"),o=0,l=0,c={type:"ordgroup",mode:e.mode,body:[]};if(t[0]&&t[0].type==="ordgroup"){for(var u="",d=0;d<t[0].body.length;d++){var f=et(t[0].body[d],"textord");u+=f.text}o=Number(u),l=o*2}var m=!l;s.body.forEach(function(p){for(var T=1;T<p.length;T+=2){var A=et(p[T],"styling"),D=et(A.body[0],"ordgroup");D.body.unshift(c)}if(m)l<p.length&&(l=p.length);else{var I=p.length/2;if(o<I)throw new oe("Too many math in a row: "+("expected "+o+", but got "+I),p[0])}});for(var v=0;v<l;++v){var b="r",g=0;v%2===1?b="l":v>0&&m&&(g=1),i[v]={type:"align",align:b,pregap:g,postgap:0}}return s.colSeparationType=m?"align":"alignat",s};ci({type:"array",names:["array","darray"],props:{numArgs:1},handler(n,e){var t=Zs(e[0]),i=t?[e[0]]:et(e[0],"ordgroup").body,r=i.map(function(s){var o=Ks(s),l=o.text;if("lcr".includes(l))return{type:"align",align:l};if(l==="|")return{type:"separator",separator:"|"};if(l===":")return{type:"separator",separator:":"};throw new oe("Unknown column alignment: "+l,s)}),a={cols:r,hskipBeforeAndAfter:!0,maxNumCols:r.length};return Ji(n.parser,a,Fl(n.envName))},htmlBuilder:ui,mathmlBuilder:hi});ci({type:"array",names:["matrix","pmatrix","bmatrix","Bmatrix","vmatrix","Vmatrix","matrix*","pmatrix*","bmatrix*","Bmatrix*","vmatrix*","Vmatrix*"],props:{numArgs:0},handler(n){var e={matrix:null,pmatrix:["(",")"],bmatrix:["[","]"],Bmatrix:["\\{","\\}"],vmatrix:["|","|"],Vmatrix:["\\Vert","\\Vert"]}[n.envName.replace("*","")],t="c",i={hskipBeforeAndAfter:!1,cols:[{type:"align",align:t}]};if(n.envName.charAt(n.envName.length-1)==="*"){var r=n.parser;if(r.consumeSpaces(),r.fetch().text==="["){if(r.consume(),r.consumeSpaces(),t=r.fetch().text,!"lcr".includes(t))throw new oe("Expected l or c or r",r.nextToken);r.consume(),r.consumeSpaces(),r.expect("]"),r.consume(),i.cols=[{type:"align",align:t}]}}var a=Ji(n.parser,i,Fl(n.envName)),s=Math.max(0,...a.body.map(o=>o.length));return a.cols=new Array(s).fill({type:"align",align:t}),e?{type:"leftright",mode:n.mode,body:[a],left:e[0],right:e[1],rightColor:void 0}:a},htmlBuilder:ui,mathmlBuilder:hi});ci({type:"array",names:["smallmatrix"],props:{numArgs:0},handler(n){var e={arraystretch:.5},t=Ji(n.parser,e,"script");return t.colSeparationType="small",t},htmlBuilder:ui,mathmlBuilder:hi});ci({type:"array",names:["subarray"],props:{numArgs:1},handler(n,e){var t=Zs(e[0]),i=t?[e[0]]:et(e[0],"ordgroup").body,r=i.map(function(o){var l=Ks(o),c=l.text;if("lc".includes(c))return{type:"align",align:c};throw new oe("Unknown column alignment: "+c,o)});if(r.length>1)throw new oe("{subarray} can contain only one column");var a={cols:r,hskipBeforeAndAfter:!1,arraystretch:.5},s=Ji(n.parser,a,"script");if(s.body.length>0&&s.body[0].length>1)throw new oe("{subarray} can contain only one column");return s},htmlBuilder:ui,mathmlBuilder:hi});ci({type:"array",names:["cases","dcases","rcases","drcases"],props:{numArgs:0},handler(n){var e={arraystretch:1.2,cols:[{type:"align",align:"l",pregap:0,postgap:1},{type:"align",align:"l",pregap:0,postgap:0}]},t=Ji(n.parser,e,Fl(n.envName));return{type:"leftright",mode:n.mode,body:[t],left:n.envName.includes("r")?".":"\\{",right:n.envName.includes("r")?"\\}":".",rightColor:void 0}},htmlBuilder:ui,mathmlBuilder:hi});ci({type:"array",names:["align","align*","aligned","split"],props:{numArgs:0},handler:Wh,htmlBuilder:ui,mathmlBuilder:hi});ci({type:"array",names:["gathered","gather","gather*"],props:{numArgs:0},handler(n){Mp.has(n.envName)&&no(n);var e={cols:[{type:"align",align:"c"}],addJot:!0,colSeparationType:"gather",autoTag:Nl(n.envName),emptySingleRow:!0,leqno:n.parser.settings.leqno};return Ji(n.parser,e,"display")},htmlBuilder:ui,mathmlBuilder:hi});ci({type:"array",names:["alignat","alignat*","alignedat"],props:{numArgs:1},handler:Wh,htmlBuilder:ui,mathmlBuilder:hi});ci({type:"array",names:["equation","equation*"],props:{numArgs:0},handler(n){no(n);var e={autoTag:Nl(n.envName),emptySingleRow:!0,singleRow:!0,maxNumCols:1,leqno:n.parser.settings.leqno};return Ji(n.parser,e,"display")},htmlBuilder:ui,mathmlBuilder:hi});ci({type:"array",names:["CD"],props:{numArgs:0},handler(n){return no(n),up(n.parser)},htmlBuilder:ui,mathmlBuilder:hi});M("\\nonumber","\\gdef\\@eqnsw{0}");M("\\notag","\\nonumber");Me({type:"text",names:["\\hline","\\hdashline"],props:{numArgs:0,allowedInText:!0,allowedInMath:!0},handler(n,e){throw new oe(n.funcName+" valid only within array environment")}});var Fc=Vh;Me({type:"environment",names:["\\begin","\\end"],props:{numArgs:1,argTypes:["text"]},handler(n,e){var{parser:t,funcName:i}=n,r=e[0];if(r.type!=="ordgroup")throw new oe("Invalid environment name",r);for(var a="",s=0;s<r.body.length;++s)a+=et(r.body[s],"textord").text;if(i==="\\begin"){if(!Fc.hasOwnProperty(a))throw new oe("No such environment: "+a,r);var o=Fc[a],{args:l,optArgs:c}=t.parseArguments("\\begin{"+a+"}",o),u={mode:t.mode,envName:a,parser:t},d=o.handler(u,l,c);t.expect("\\end",!1);var f=t.nextToken,m=et(t.parseFunction(),"environment");if(m.name!==a)throw new oe("Mismatch: \\begin{"+a+"} matched by \\end{"+m.name+"}",f);return d}return{type:"environment",mode:t.mode,name:a,nameGroup:r}}});var qh=(n,e)=>{var t=n.font,i=e.withFont(t);return mt(n.body,i)},Xh=(n,e)=>{var t=n.font,i=e.withFont(t);return Et(n.body,i)},Oc={"\\Bbb":"\\mathbb","\\bold":"\\mathbf","\\frak":"\\mathfrak"};Me({type:"font",names:["\\mathrm","\\mathit","\\mathbf","\\mathnormal","\\mathsfit","\\mathbb","\\mathcal","\\mathfrak","\\mathscr","\\mathsf","\\mathtt","\\Bbb","\\bold","\\frak"],props:{numArgs:1,allowedInArgument:!0},handler:(n,e)=>{var{parser:t,funcName:i}=n,r=Os(e[0]),a=i;return a in Oc&&(a=Oc[a]),{type:"font",mode:t.mode,font:a.slice(1),body:r}},htmlBuilder:qh,mathmlBuilder:Xh});Me({type:"mclass",names:["\\boldsymbol","\\bm"],props:{numArgs:1},handler:(n,e)=>{var{parser:t}=n,i=e[0];return{type:"mclass",mode:t.mode,mclass:Js(i),body:[{type:"font",mode:t.mode,font:"boldsymbol",body:i}],isCharacterBox:Ri(i)}}});Me({type:"font",names:["\\rm","\\sf","\\tt","\\bf","\\it","\\cal"],props:{numArgs:0,allowedInText:!0},handler:(n,e)=>{var{parser:t,funcName:i,breakOnTokenText:r}=n,{mode:a}=t,s=t.parseExpression(!0,r);return{type:"font",mode:a,font:"math"+i.slice(1),body:{type:"ordgroup",mode:t.mode,body:s}}},htmlBuilder:qh,mathmlBuilder:Xh});var wp=(n,e)=>{var t=e.style,i=t.fracNum(),r=t.fracDen(),a;a=e.havingStyle(i);var s=mt(n.numer,a,e);if(n.continued){var o=8.5/e.fontMetrics().ptPerEm,l=3.5/e.fontMetrics().ptPerEm;s.height=s.height<o?o:s.height,s.depth=s.depth<l?l:s.depth}a=e.havingStyle(r);var c=mt(n.denom,a,e),u,d,f;n.hasBarLine?(n.barSize?(d=It(n.barSize,e),u=$r("frac-line",e,d)):u=$r("frac-line",e),d=u.height,f=u.height):(u=null,d=0,f=e.fontMetrics().defaultRuleThickness);var m,v,b;t.size===Ke.DISPLAY.size?(m=e.fontMetrics().num1,d>0?v=3*f:v=7*f,b=e.fontMetrics().denom1):(d>0?(m=e.fontMetrics().num2,v=f):(m=e.fontMetrics().num3,v=3*f),b=e.fontMetrics().denom2);var g;if(u){var T=e.fontMetrics().axisHeight;m-s.depth-(T+.5*d)<v&&(m+=v-(m-s.depth-(T+.5*d))),T-.5*d-(c.height-b)<v&&(b+=v-(T-.5*d-(c.height-b)));var A=-(T-.5*d);g=pt({positionType:"individualShift",children:[{type:"elem",elem:c,shift:b},{type:"elem",elem:u,shift:A},{type:"elem",elem:s,shift:-m}]})}else{var p=m-s.depth-(c.height-b);p<v&&(m+=.5*(v-p),b+=.5*(v-p)),g=pt({positionType:"individualShift",children:[{type:"elem",elem:c,shift:b},{type:"elem",elem:s,shift:-m}]})}a=e.havingStyle(t),g.height*=a.sizeMultiplier/e.sizeMultiplier,g.depth*=a.sizeMultiplier/e.sizeMultiplier;var D;t.size===Ke.DISPLAY.size?D=e.fontMetrics().delim1:t.size===Ke.SCRIPTSCRIPT.size?D=e.havingStyle(Ke.SCRIPT).fontMetrics().delim2:D=e.fontMetrics().delim2;var I,C;return n.leftDelim==null?I=Ca(e,["mopen"]):I=D0(n.leftDelim,D,!0,e.havingStyle(t),n.mode,["mopen"]),n.continued?C=ae([]):n.rightDelim==null?C=Ca(e,["mclose"]):C=D0(n.rightDelim,D,!0,e.havingStyle(t),n.mode,["mclose"]),ae(["mord"].concat(a.sizingClasses(e)),[I,ae(["mfrac"],[g]),C],e)},Ep=(n,e)=>{var t=new le("mfrac",[Et(n.numer,e),Et(n.denom,e)]);if(!n.hasBarLine)t.setAttribute("linethickness","0px");else if(n.barSize){var i=It(n.barSize,e);t.setAttribute("linethickness",ue(i))}if(n.leftDelim!=null||n.rightDelim!=null){var r=[];if(n.leftDelim!=null){var a=new le("mo",[new Wt(n.leftDelim.replace("\\",""))]);a.setAttribute("fence","true"),r.push(a)}if(r.push(t),n.rightDelim!=null){var s=new le("mo",[new Wt(n.rightDelim.replace("\\",""))]);s.setAttribute("fence","true"),r.push(s)}return Pl(r)}return t},Yh=(n,e)=>{if(!e)return n;var t={type:"styling",mode:n.mode,style:e,body:[n]};return t};Me({type:"genfrac",names:["\\cfrac","\\dfrac","\\frac","\\tfrac","\\dbinom","\\binom","\\tbinom","\\\\atopfrac","\\\\bracefrac","\\\\brackfrac"],props:{numArgs:2,allowedInArgument:!0},handler:(n,e)=>{var{parser:t,funcName:i}=n,r=e[0],a=e[1],s,o=null,l=null;switch(i){case"\\cfrac":case"\\dfrac":case"\\frac":case"\\tfrac":s=!0;break;case"\\\\atopfrac":s=!1;break;case"\\dbinom":case"\\binom":case"\\tbinom":s=!1,o="(",l=")";break;case"\\\\bracefrac":s=!1,o="\\{",l="\\}";break;case"\\\\brackfrac":s=!1,o="[",l="]";break;default:throw new Error("Unrecognized genfrac command")}var c=i==="\\cfrac",u=null;return c||i.startsWith("\\d")?u="display":i.startsWith("\\t")&&(u="text"),Yh({type:"genfrac",mode:t.mode,numer:r,denom:a,continued:c,hasBarLine:s,leftDelim:o,rightDelim:l,barSize:null},u)},htmlBuilder:wp,mathmlBuilder:Ep});Me({type:"infix",names:["\\over","\\choose","\\atop","\\brace","\\brack"],props:{numArgs:0,infix:!0},handler(n){var{parser:e,funcName:t,token:i}=n,r;switch(t){case"\\over":r="\\frac";break;case"\\choose":r="\\binom";break;case"\\atop":r="\\\\atopfrac";break;case"\\brace":r="\\\\bracefrac";break;case"\\brack":r="\\\\brackfrac";break;default:throw new Error("Unrecognized infix genfrac command")}return{type:"infix",mode:e.mode,replaceWith:r,token:i}}});var zc=["display","text","script","scriptscript"],Bc=function(e){var t=null;return e.length>0&&(t=e,t=t==="."?null:t),t};Me({type:"genfrac",names:["\\genfrac"],props:{numArgs:6,allowedInArgument:!0,argTypes:["math","math","size","text","math","math"]},handler(n,e){var{parser:t}=n,i=e[4],r=e[5],a=Os(e[0]),s=a.type==="atom"&&a.family==="open"?Bc(a.text):null,o=Os(e[1]),l=o.type==="atom"&&o.family==="close"?Bc(o.text):null,c=et(e[2],"size"),u,d=null;c.isBlank?u=!0:(d=c.value,u=d.number>0);var f=null,m=e[3];if(m.type==="ordgroup"){if(m.body.length>0){var v=et(m.body[0],"textord");f=zc[Number(v.text)]}}else m=et(m,"textord"),f=zc[Number(m.text)];return Yh({type:"genfrac",mode:t.mode,numer:i,denom:r,continued:!1,hasBarLine:u,barSize:d,leftDelim:s,rightDelim:l},f)}});Me({type:"infix",names:["\\above"],props:{numArgs:1,argTypes:["size"],infix:!0},handler(n,e){var{parser:t,funcName:i,token:r}=n;return{type:"infix",mode:t.mode,replaceWith:"\\\\abovefrac",size:et(e[0],"size").value,token:r}}});Me({type:"genfrac",names:["\\\\abovefrac"],props:{numArgs:3,argTypes:["math","size","math"]},handler:(n,e)=>{var{parser:t,funcName:i}=n,r=e[0],a=et(e[1],"infix").size;if(!a)throw new Error("\\\\abovefrac expected size, but got "+String(a));var s=e[2],o=a.number>0;return{type:"genfrac",mode:t.mode,numer:r,denom:s,continued:!1,hasBarLine:o,barSize:a,leftDelim:null,rightDelim:null}}});var $h=(n,e)=>{var t=e.style,i,r;n.type==="supsub"?(i=n.sup?mt(n.sup,e.havingStyle(t.sup()),e):mt(n.sub,e.havingStyle(t.sub()),e),r=et(n.base,"horizBrace")):r=et(n,"horizBrace");var a=mt(r.base,e.havingBaseStyle(Ke.DISPLAY)),s=js(r,e),o;if(r.isOver?o=pt({positionType:"firstBaseline",children:[{type:"elem",elem:a},{type:"kern",size:.1},{type:"elem",elem:s,wrapperClasses:["svg-align"]}]}):o=pt({positionType:"bottom",positionData:a.depth+.1+s.height,children:[{type:"elem",elem:s,wrapperClasses:["svg-align"]},{type:"kern",size:.1},{type:"elem",elem:a}]}),i){var l=ae(["minner",r.isOver?"mover":"munder"],[o],e);r.isOver?o=pt({positionType:"firstBaseline",children:[{type:"elem",elem:l},{type:"kern",size:.2},{type:"elem",elem:i}]}):o=pt({positionType:"bottom",positionData:l.depth+.2+i.height+i.depth,children:[{type:"elem",elem:i},{type:"kern",size:.2},{type:"elem",elem:l}]})}return ae(["minner",r.isOver?"mover":"munder"],[o],e)},Tp=(n,e)=>{var t=$s(n.label);return new le(n.isOver?"mover":"munder",[Et(n.base,e),t])};Me({type:"horizBrace",names:["\\overbrace","\\underbrace","\\overbracket","\\underbracket"],props:{numArgs:1},handler(n,e){var{parser:t,funcName:i}=n;return{type:"horizBrace",mode:t.mode,label:i,isOver:i.includes("\\over"),base:e[0]}},htmlBuilder:$h,mathmlBuilder:Tp});Me({type:"href",names:["\\href"],props:{numArgs:2,argTypes:["url","original"],allowedInText:!0},handler:(n,e)=>{var{parser:t}=n,i=e[1],r=et(e[0],"url").url;return t.settings.isTrusted({command:"\\href",url:r})?{type:"href",mode:t.mode,href:r,body:Gt(i)}:t.formatUnsupportedCmd("\\href")},htmlBuilder:(n,e)=>{var t=jt(n.body,e,!1);return Bf(n.href,[],t,e)},mathmlBuilder:(n,e)=>{var t=ji(n.body,e);return t instanceof le||(t=new le("mrow",[t])),t.setAttribute("href",n.href),t}});Me({type:"href",names:["\\url"],props:{numArgs:1,argTypes:["url"],allowedInText:!0},handler:(n,e)=>{var{parser:t}=n,i=et(e[0],"url").url;if(!t.settings.isTrusted({command:"\\url",url:i}))return t.formatUnsupportedCmd("\\url");for(var r=[],a=0;a<i.length;a++){var s=i[a];s==="~"&&(s="\\textasciitilde"),r.push({type:"textord",mode:"text",text:s})}var o={type:"text",mode:t.mode,font:"\\texttt",body:r};return{type:"href",mode:t.mode,href:i,body:Gt(o)}}});Me({type:"hbox",names:["\\hbox"],props:{numArgs:1,argTypes:["text"],allowedInText:!0,primitive:!0},handler(n,e){var{parser:t}=n;return{type:"hbox",mode:t.mode,body:Gt(e[0])}},htmlBuilder(n,e){var t=jt(n.body,e.withFont(""),!1);return Pi(t)},mathmlBuilder(n,e){return new le("mrow",Fn(n.body,e.withFont("")))}});Me({type:"html",names:["\\htmlClass","\\htmlId","\\htmlStyle","\\htmlData"],props:{numArgs:2,argTypes:["raw","original"],allowedInText:!0},handler:(n,e)=>{var{parser:t,funcName:i,token:r}=n,a=et(e[0],"raw").string,s=e[1];t.settings.strict&&t.settings.reportNonstrict("htmlExtension","HTML extension is disabled on strict mode");var o,l={};switch(i){case"\\htmlClass":l.class=a,o={command:"\\htmlClass",class:a};break;case"\\htmlId":l.id=a,o={command:"\\htmlId",id:a};break;case"\\htmlStyle":l.style=a,o={command:"\\htmlStyle",style:a};break;case"\\htmlData":{for(var c=a.split(","),u=0;u<c.length;u++){var d=c[u],f=d.indexOf("=");if(f<0)throw new oe("\\htmlData key/value '"+d+"' missing equals sign");var m=d.slice(0,f),v=d.slice(f+1);l["data-"+m.trim()]=v}o={command:"\\htmlData",attributes:l};break}default:throw new Error("Unrecognized html command")}return t.settings.isTrusted(o)?{type:"html",mode:t.mode,attributes:l,body:Gt(s)}:t.formatUnsupportedCmd(i)},htmlBuilder:(n,e)=>{var t=jt(n.body,e,!1),i=["enclosing"];n.attributes.class&&i.push(...n.attributes.class.trim().split(/\s+/));var r=ae(i,t,e);for(var a in n.attributes)a!=="class"&&n.attributes.hasOwnProperty(a)&&r.setAttribute(a,n.attributes[a]);return r},mathmlBuilder:(n,e)=>ji(n.body,e)});Me({type:"htmlmathml",names:["\\html@mathml"],props:{numArgs:2,allowedInArgument:!0,allowedInText:!0},handler:(n,e)=>{var{parser:t}=n;return{type:"htmlmathml",mode:t.mode,html:Gt(e[0]),mathml:Gt(e[1])}},htmlBuilder:(n,e)=>{var t=jt(n.html,e,!1);return Pi(t)},mathmlBuilder:(n,e)=>ji(n.mathml,e)});var To=function(e){if(/^[-+]? *(\d+(\.\d*)?|\.\d+)$/.test(e))return{number:+e,unit:"bp"};var t=/([-+]?) *(\d+(?:\.\d*)?|\.\d+) *([a-z]{2})/.exec(e);if(!t)throw new oe("Invalid size: '"+e+"' in \\includegraphics");var i={number:+(t[1]+t[2]),unit:t[3]};if(!hh(i))throw new oe("Invalid unit: '"+i.unit+"' in \\includegraphics.");return i};Me({type:"includegraphics",names:["\\includegraphics"],props:{numArgs:1,numOptionalArgs:1,argTypes:["raw","url"],allowedInText:!1},handler:(n,e,t)=>{var{parser:i}=n,r={number:0,unit:"em"},a={number:.9,unit:"em"},s={number:0,unit:"em"},o="";if(t[0])for(var l=et(t[0],"raw").string,c=l.split(","),u=0;u<c.length;u++){var d=c[u].split("=");if(d.length===2){var f=d[1].trim();switch(d[0].trim()){case"alt":o=f;break;case"width":r=To(f);break;case"height":a=To(f);break;case"totalheight":s=To(f);break;default:throw new oe("Invalid key: '"+d[0]+"' in \\includegraphics.")}}}var m=et(e[0],"url").url;return o===""&&(o=m,o=o.replace(/^.*[\\/]/,""),o=o.substring(0,o.lastIndexOf("."))),i.settings.isTrusted({command:"\\includegraphics",url:m})?{type:"includegraphics",mode:i.mode,alt:o,width:r,height:a,totalheight:s,src:m}:i.formatUnsupportedCmd("\\includegraphics")},htmlBuilder:(n,e)=>{var t=It(n.height,e),i=0;n.totalheight.number>0&&(i=It(n.totalheight,e)-t);var r=0;n.width.number>0&&(r=It(n.width,e));var a={height:ue(t+i)};r>0&&(a.width=ue(r)),i>0&&(a.verticalAlign=ue(-i));var s=new Af(n.src,n.alt,a);return s.height=t,s.depth=i,s},mathmlBuilder:(n,e)=>{var t=new le("mglyph",[]);t.setAttribute("alt",n.alt);var i=It(n.height,e),r=0;if(n.totalheight.number>0&&(r=It(n.totalheight,e)-i,t.setAttribute("valign",ue(-r))),t.setAttribute("height",ue(i+r)),n.width.number>0){var a=It(n.width,e);t.setAttribute("width",ue(a))}return t.setAttribute("src",n.src),t}});Me({type:"kern",names:["\\kern","\\mkern","\\hskip","\\mskip"],props:{numArgs:1,argTypes:["size"],primitive:!0,allowedInText:!0},handler(n,e){var{parser:t,funcName:i}=n,r=et(e[0],"size");if(t.settings.strict){var a=i[1]==="m",s=r.value.unit==="mu";a?(s||t.settings.reportNonstrict("mathVsTextUnits","LaTeX's "+i+" supports only mu units, "+("not "+r.value.unit+" units")),t.mode!=="math"&&t.settings.reportNonstrict("mathVsTextUnits","LaTeX's "+i+" works only in math mode")):s&&t.settings.reportNonstrict("mathVsTextUnits","LaTeX's "+i+" doesn't support mu units")}return{type:"kern",mode:t.mode,dimension:r.value}},htmlBuilder(n,e){return gh(n.dimension,e)},mathmlBuilder(n,e){var t=It(n.dimension,e);return new Sh(t)}});Me({type:"lap",names:["\\mathllap","\\mathrlap","\\mathclap"],props:{numArgs:1,allowedInText:!0},handler:(n,e)=>{var{parser:t,funcName:i}=n,r=e[0];return{type:"lap",mode:t.mode,alignment:i.slice(5),body:r}},htmlBuilder:(n,e)=>{var t;n.alignment==="clap"?(t=ae([],[mt(n.body,e)]),t=ae(["inner"],[t],e)):t=ae(["inner"],[mt(n.body,e)]);var i=ae(["fix"],[]),r=ae([n.alignment],[t,i],e),a=ae(["strut"]);return a.style.height=ue(r.height+r.depth),r.depth&&(a.style.verticalAlign=ue(-r.depth)),r.children.unshift(a),r=ae(["thinbox"],[r],e),ae(["mord","vbox"],[r],e)},mathmlBuilder:(n,e)=>{var t=new le("mpadded",[Et(n.body,e)]);if(n.alignment!=="rlap"){var i=n.alignment==="llap"?"-1":"-0.5";t.setAttribute("lspace",i+"width")}return t.setAttribute("width","0px"),t}});Me({type:"styling",names:["\\(","$"],props:{numArgs:0,allowedInText:!0,allowedInMath:!1},handler(n,e){var{funcName:t,parser:i}=n,r=i.mode;i.switchMode("math");var a=t==="\\("?"\\)":"$",s=i.parseExpression(!1,a);return i.expect(a),i.switchMode(r),{type:"styling",mode:i.mode,style:"text",resetFont:!0,body:s}}});Me({type:"text",names:["\\)","\\]"],props:{numArgs:0,allowedInText:!0,allowedInMath:!1},handler(n,e){throw new oe("Mismatched "+n.funcName)}});var kc=(n,e)=>{switch(e.style.size){case Ke.DISPLAY.size:return n.display;case Ke.TEXT.size:return n.text;case Ke.SCRIPT.size:return n.script;case Ke.SCRIPTSCRIPT.size:return n.scriptscript;default:return n.text}};Me({type:"mathchoice",names:["\\mathchoice"],props:{numArgs:4,primitive:!0},handler:(n,e)=>{var{parser:t}=n;return{type:"mathchoice",mode:t.mode,display:Gt(e[0]),text:Gt(e[1]),script:Gt(e[2]),scriptscript:Gt(e[3])}},htmlBuilder:(n,e)=>{var t=kc(n,e),i=jt(t,e,!1);return Pi(i)},mathmlBuilder:(n,e)=>{var t=kc(n,e);return ji(t,e)}});var jh=(n,e,t,i,r,a,s)=>{n=ae([],[n]);var o=t&&Ri(t),l,c;if(e){var u=mt(e,i.havingStyle(r.sup()),i);c={elem:u,kern:Math.max(i.fontMetrics().bigOpSpacing1,i.fontMetrics().bigOpSpacing3-u.depth)}}if(t){var d=mt(t,i.havingStyle(r.sub()),i);l={elem:d,kern:Math.max(i.fontMetrics().bigOpSpacing2,i.fontMetrics().bigOpSpacing4-d.height)}}var f;if(c&&l){var m=i.fontMetrics().bigOpSpacing5+l.elem.height+l.elem.depth+l.kern+n.depth+s;f=pt({positionType:"bottom",positionData:m,children:[{type:"kern",size:i.fontMetrics().bigOpSpacing5},{type:"elem",elem:l.elem,marginLeft:ue(-a)},{type:"kern",size:l.kern},{type:"elem",elem:n},{type:"kern",size:c.kern},{type:"elem",elem:c.elem,marginLeft:ue(a)},{type:"kern",size:i.fontMetrics().bigOpSpacing5}]})}else if(l){var v=n.height-s;f=pt({positionType:"top",positionData:v,children:[{type:"kern",size:i.fontMetrics().bigOpSpacing5},{type:"elem",elem:l.elem,marginLeft:ue(-a)},{type:"kern",size:l.kern},{type:"elem",elem:n}]})}else if(c){var b=n.depth+s;f=pt({positionType:"bottom",positionData:b,children:[{type:"elem",elem:n},{type:"kern",size:c.kern},{type:"elem",elem:c.elem,marginLeft:ue(a)},{type:"kern",size:i.fontMetrics().bigOpSpacing5}]})}else return n;var g=[f];if(l&&a!==0&&!o){var p=ae(["mspace"],[],i);p.style.marginRight=ue(a),g.unshift(p)}return ae(["mop","op-limits"],g,i)},Kh=new Set(["\\smallint"]),ca=(n,e)=>{var t,i,r=!1,a;n.type==="supsub"?(t=n.sup,i=n.sub,a=et(n.base,"op"),r=!0):a=et(n,"op");var s=e.style,o=!1;s.size===Ke.DISPLAY.size&&a.symbol&&!Kh.has(a.name)&&(o=!0);var l,c;if(a.symbol){var u=o?"Size2-Regular":"Size1-Regular",d="";if((a.name==="\\oiint"||a.name==="\\oiiint")&&(d=a.name.slice(1),a.name=d==="oiint"?"\\iint":"\\iiint"),l=dn(a.name,u,"math",e,["mop","op-symbol",o?"large-op":"small-op"]),c=l.italic,d.length>0){var f=bh(d+"Size"+(o?"2":"1"),e);l=pt({positionType:"individualShift",children:[{type:"elem",elem:l,shift:0},{type:"elem",elem:f,shift:o?.08:0}]}),a.name="\\"+d,l.classes.unshift("mop"),l.italic=c}}else if(a.body){var m=jt(a.body,e,!0);m.length===1&&m[0]instanceof Un?(l=m[0],l.classes[0]="mop"):l=ae(["mop"],m,e)}else{for(var v=[],b=1;b<a.name.length;b++)v.push(Rl(a.name[b],a.mode,e));l=ae(["mop"],v,e)}var g=0,p=0;if((l instanceof Un||a.name==="\\oiint"||a.name==="\\oiiint")&&!a.suppressBaseShift){var T;g=(l.height-l.depth)/2-e.fontMetrics().axisHeight,p=(T=l.italic)!=null?T:0}return r?jh(l,t,i,e,s,p,g):(g&&(l.style.position="relative",l.style.top=ue(g)),l)},za=(n,e)=>{var t;if(n.symbol)t=new le("mo",[Gn(n.name,n.mode)]),Kh.has(n.name)&&t.setAttribute("largeop","false");else if(n.body)t=new le("mo",Fn(n.body,e));else{t=new le("mi",[new Wt(n.name.slice(1))]);var i=new le("mo",[Gn("⁡","text")]);n.parentIsSupSub?t=new le("mrow",[t,i]):t=Mh([t,i])}return t},Ap={"∏":"\\prod","∐":"\\coprod","∑":"\\sum","⋀":"\\bigwedge","⋁":"\\bigvee","⋂":"\\bigcap","⋃":"\\bigcup","⨀":"\\bigodot","⨁":"\\bigoplus","⨂":"\\bigotimes","⨄":"\\biguplus","⨆":"\\bigsqcup"};Me({type:"op",names:["\\coprod","\\bigvee","\\bigwedge","\\biguplus","\\bigcap","\\bigcup","\\intop","\\prod","\\sum","\\bigotimes","\\bigoplus","\\bigodot","\\bigsqcup","\\smallint","∏","∐","∑","⋀","⋁","⋂","⋃","⨀","⨁","⨂","⨄","⨆"],props:{numArgs:0},handler:(n,e)=>{var{parser:t,funcName:i}=n,r=i;return r.length===1&&(r=Ap[r]),{type:"op",mode:t.mode,limits:!0,parentIsSupSub:!1,symbol:!0,name:r}},htmlBuilder:ca,mathmlBuilder:za});Me({type:"op",names:["\\mathop"],props:{numArgs:1,primitive:!0},handler:(n,e)=>{var{parser:t}=n,i=e[0];return{type:"op",mode:t.mode,limits:!1,parentIsSupSub:!1,symbol:!1,body:Gt(i)}},htmlBuilder:ca,mathmlBuilder:za});var Cp={"∫":"\\int","∬":"\\iint","∭":"\\iiint","∮":"\\oint","∯":"\\oiint","∰":"\\oiiint"};Me({type:"op",names:["\\arcsin","\\arccos","\\arctan","\\arctg","\\arcctg","\\arg","\\ch","\\cos","\\cosec","\\cosh","\\cot","\\cotg","\\coth","\\csc","\\ctg","\\cth","\\deg","\\dim","\\exp","\\hom","\\ker","\\lg","\\ln","\\log","\\sec","\\sin","\\sinh","\\sh","\\tan","\\tanh","\\tg","\\th"],props:{numArgs:0},handler(n){var{parser:e,funcName:t}=n;return{type:"op",mode:e.mode,limits:!1,parentIsSupSub:!1,symbol:!1,name:t}},htmlBuilder:ca,mathmlBuilder:za});Me({type:"op",names:["\\det","\\gcd","\\inf","\\lim","\\max","\\min","\\Pr","\\sup"],props:{numArgs:0},handler(n){var{parser:e,funcName:t}=n;return{type:"op",mode:e.mode,limits:!0,parentIsSupSub:!1,symbol:!1,name:t}},htmlBuilder:ca,mathmlBuilder:za});Me({type:"op",names:["\\int","\\iint","\\iiint","\\oint","\\oiint","\\oiiint","∫","∬","∭","∮","∯","∰"],props:{numArgs:0,allowedInArgument:!0},handler(n){var{parser:e,funcName:t}=n,i=t;return i.length===1&&(i=Cp[i]),{type:"op",mode:e.mode,limits:!1,parentIsSupSub:!1,symbol:!0,name:i}},htmlBuilder:ca,mathmlBuilder:za});var Zh=(n,e)=>{var t,i,r=!1,a;n.type==="supsub"?(t=n.sup,i=n.sub,a=et(n.base,"operatorname"),r=!0):a=et(n,"operatorname");var s;if(a.body.length>0){for(var o=a.body.map(d=>{var f="text"in d?d.text:void 0;return typeof f=="string"?{type:"textord",mode:d.mode,text:f}:d}),l=jt(o,e.withFont("mathrm"),!0),c=0;c<l.length;c++){var u=l[c];u instanceof Un&&(u.text=u.text.replace(/\u2212/,"-").replace(/\u2217/,"*"))}s=ae(["mop"],l,e)}else s=ae(["mop"],[],e);return r?jh(s,t,i,e,e.style,0,0):s},Rp=(n,e)=>{for(var t=Fn(n.body,e.withFont("mathrm")),i=!0,r=0;r<t.length;r++){var a=t[r];if(!(a instanceof Sh))if(a instanceof le)switch(a.type){case"mi":case"mn":case"mspace":case"mtext":break;case"mo":{var s=a.children[0];a.children.length===1&&s instanceof Wt?s.text=s.text.replace(/\u2212/,"-").replace(/\u2217/,"*"):i=!1;break}default:i=!1}else i=!1}if(i){var o=t.map(u=>u.toText()).join("");t=[new Wt(o)]}var l=new le("mi",t);l.setAttribute("mathvariant","normal");var c=new le("mo",[Gn("⁡","text")]);return n.parentIsSupSub?new le("mrow",[l,c]):Mh([l,c])};Me({type:"operatorname",names:["\\operatorname@","\\operatornamewithlimits"],props:{numArgs:1},handler:(n,e)=>{var{parser:t,funcName:i}=n,r=e[0];return{type:"operatorname",mode:t.mode,body:Gt(r),alwaysHandleSupSub:i==="\\operatornamewithlimits",limits:!1,parentIsSupSub:!1}},htmlBuilder:Zh,mathmlBuilder:Rp});M("\\operatorname","\\@ifstar\\operatornamewithlimits\\operatorname@");_r({type:"ordgroup",htmlBuilder(n,e){return n.semisimple?Pi(jt(n.body,e,!1)):ae(["mord"],jt(n.body,e,!0),e)},mathmlBuilder(n,e){return ji(n.body,e,!0)}});Me({type:"overline",names:["\\overline"],props:{numArgs:1},handler(n,e){var{parser:t}=n,i=e[0];return{type:"overline",mode:t.mode,body:i}},htmlBuilder(n,e){var t=mt(n.body,e.havingCrampedStyle()),i=$r("overline-line",e),r=e.fontMetrics().defaultRuleThickness,a=pt({positionType:"firstBaseline",children:[{type:"elem",elem:t},{type:"kern",size:3*r},{type:"elem",elem:i},{type:"kern",size:r}]});return ae(["mord","overline"],[a],e)},mathmlBuilder(n,e){var t=new le("mo",[new Wt("‾")]);t.setAttribute("stretchy","true");var i=new le("mover",[Et(n.body,e),t]);return i.setAttribute("accent","true"),i}});Me({type:"phantom",names:["\\phantom"],props:{numArgs:1,allowedInText:!0},handler:(n,e)=>{var{parser:t}=n,i=e[0];return{type:"phantom",mode:t.mode,body:Gt(i)}},htmlBuilder:(n,e)=>{var t=jt(n.body,e.withPhantom(),!1);return Pi(t)},mathmlBuilder:(n,e)=>{var t=Fn(n.body,e);return new le("mphantom",t)}});M("\\hphantom","\\smash{\\phantom{#1}}");Me({type:"vphantom",names:["\\vphantom"],props:{numArgs:1,allowedInText:!0},handler:(n,e)=>{var{parser:t}=n,i=e[0];return{type:"vphantom",mode:t.mode,body:i}},htmlBuilder:(n,e)=>{var t=ae(["inner"],[mt(n.body,e.withPhantom())]),i=ae(["fix"],[]);return ae(["mord","rlap"],[t,i],e)},mathmlBuilder:(n,e)=>{var t=Fn(Gt(n.body),e),i=new le("mphantom",t),r=new le("mpadded",[i]);return r.setAttribute("width","0px"),r}});Me({type:"raisebox",names:["\\raisebox"],props:{numArgs:2,argTypes:["size","hbox"],allowedInText:!0},handler(n,e){var{parser:t}=n,i=et(e[0],"size").value,r=e[1];return{type:"raisebox",mode:t.mode,dy:i,body:r}},htmlBuilder(n,e){var t=mt(n.body,e),i=It(n.dy,e);return pt({positionType:"shift",positionData:-i,children:[{type:"elem",elem:t}]})},mathmlBuilder(n,e){var t=new le("mpadded",[Et(n.body,e)]),i=n.dy.number+n.dy.unit;return t.setAttribute("voffset",i),t}});Me({type:"internal",names:["\\relax"],props:{numArgs:0,allowedInText:!0,allowedInArgument:!0},handler(n){var{parser:e}=n;return{type:"internal",mode:e.mode}}});Me({type:"rule",names:["\\rule"],props:{numArgs:2,numOptionalArgs:1,allowedInText:!0,allowedInMath:!0,argTypes:["size","size","size"]},handler(n,e,t){var{parser:i}=n,r=t[0],a=et(e[0],"size"),s=et(e[1],"size");return{type:"rule",mode:i.mode,shift:r&&et(r,"size").value,width:a.value,height:s.value}},htmlBuilder(n,e){var t=ae(["mord","rule"],[],e),i=It(n.width,e),r=It(n.height,e),a=n.shift?It(n.shift,e):0;return t.style.borderRightWidth=ue(i),t.style.borderTopWidth=ue(r),t.style.bottom=ue(a),t.width=i,t.height=r+a,t.depth=-a,t.maxFontSize=r*1.125*e.sizeMultiplier,t},mathmlBuilder(n,e){var t=It(n.width,e),i=It(n.height,e),r=n.shift?It(n.shift,e):0,a=e.color&&e.getColor()||"black",s=new le("mspace");s.setAttribute("mathbackground",a),s.setAttribute("width",ue(t)),s.setAttribute("height",ue(i));var o=new le("mpadded",[s]);return r>=0?o.setAttribute("height",ue(r)):(o.setAttribute("height",ue(r)),o.setAttribute("depth",ue(-r))),o.setAttribute("voffset",ue(r)),o}});function Jh(n,e,t){for(var i=jt(n,e,!1),r=e.sizeMultiplier/t.sizeMultiplier,a=0;a<i.length;a++){var s=i[a].classes.indexOf("sizing");s<0?Array.prototype.push.apply(i[a].classes,e.sizingClasses(t)):i[a].classes[s+1]==="reset-size"+e.size&&(i[a].classes[s+1]="reset-size"+t.size),i[a].height*=r,i[a].depth*=r}return Pi(i)}var Hc=["\\tiny","\\sixptsize","\\scriptsize","\\footnotesize","\\small","\\normalsize","\\large","\\Large","\\LARGE","\\huge","\\Huge"],Dp=(n,e)=>{var t=e.havingSize(n.size);return Jh(n.body,t,e)};Me({type:"sizing",names:Hc,props:{numArgs:0,allowedInText:!0},handler:(n,e)=>{var{breakOnTokenText:t,funcName:i,parser:r}=n,a=r.parseExpression(!1,t);return{type:"sizing",mode:r.mode,size:Hc.indexOf(i)+1,body:a}},htmlBuilder:Dp,mathmlBuilder:(n,e)=>{var t=e.havingSize(n.size),i=Fn(n.body,t),r=new le("mstyle",i);return r.setAttribute("mathsize",ue(t.sizeMultiplier)),r}});Me({type:"smash",names:["\\smash"],props:{numArgs:1,numOptionalArgs:1,allowedInText:!0},handler:(n,e,t)=>{var{parser:i}=n,r=!1,a=!1,s=t[0]&&et(t[0],"ordgroup");if(s)for(var o,l=0;l<s.body.length;++l){var c=s.body[l];if(o=Ks(c).text,o==="t")r=!0;else if(o==="b")a=!0;else{r=!1,a=!1;break}}else r=!0,a=!0;var u=e[0];return{type:"smash",mode:i.mode,body:u,smashHeight:r,smashDepth:a}},htmlBuilder:(n,e)=>{var t=ae([],[mt(n.body,e)]);if(!n.smashHeight&&!n.smashDepth)return t;if(n.smashHeight&&(t.height=0),n.smashDepth&&(t.depth=0),n.smashHeight&&n.smashDepth)return ae(["mord","smash"],[t],e);if(t.children)for(var i=0;i<t.children.length;i++)n.smashHeight&&(t.children[i].height=0),n.smashDepth&&(t.children[i].depth=0);var r=pt({positionType:"firstBaseline",children:[{type:"elem",elem:t}]});return ae(["mord"],[r],e)},mathmlBuilder:(n,e)=>{var t=new le("mpadded",[Et(n.body,e)]);return n.smashHeight&&t.setAttribute("height","0px"),n.smashDepth&&t.setAttribute("depth","0px"),t}});Me({type:"sqrt",names:["\\sqrt"],props:{numArgs:1,numOptionalArgs:1},handler(n,e,t){var{parser:i}=n,r=t[0],a=e[0];return{type:"sqrt",mode:i.mode,body:a,index:r}},htmlBuilder(n,e){var t=mt(n.body,e.havingCrampedStyle());t.height===0&&(t.height=e.fontMetrics().xHeight),t=jr(t,e);var i=e.fontMetrics(),r=i.defaultRuleThickness,a=r;e.style.id<Ke.TEXT.id&&(a=e.fontMetrics().xHeight);var s=r+a/4,o=t.height+t.depth+s+r,{span:l,ruleWidth:c,advanceWidth:u}=xp(o,e),d=l.height-c;d>t.height+t.depth+s&&(s=(s+d-t.height-t.depth)/2);var f=l.height-t.height-s-c;t.style.paddingLeft=ue(u);var m=pt({positionType:"firstBaseline",children:[{type:"elem",elem:t,wrapperClasses:["svg-align"]},{type:"kern",size:-(t.height+f)},{type:"elem",elem:l},{type:"kern",size:c}]});if(n.index){var v=e.havingStyle(Ke.SCRIPTSCRIPT),b=mt(n.index,v,e),g=.6*(m.height-m.depth),p=pt({positionType:"shift",positionData:-g,children:[{type:"elem",elem:b}]}),T=ae(["root"],[p]);return ae(["mord","sqrt"],[T,m],e)}else return ae(["mord","sqrt"],[m],e)},mathmlBuilder(n,e){var{body:t,index:i}=n;return i?new le("mroot",[Et(t,e),Et(i,e)]):new le("msqrt",[Et(t,e)])}});var P0={display:Ke.DISPLAY,text:Ke.TEXT,script:Ke.SCRIPT,scriptscript:Ke.SCRIPTSCRIPT};function Pp(n){return n in P0}Me({type:"styling",names:["\\displaystyle","\\textstyle","\\scriptstyle","\\scriptscriptstyle"],props:{numArgs:0,allowedInText:!0,primitive:!0},handler(n,e){var{breakOnTokenText:t,funcName:i,parser:r}=n,a=r.parseExpression(!0,t),s=i.slice(1,i.length-5);if(!Pp(s))throw new Error("Unknown style: "+s);return{type:"styling",mode:r.mode,style:s,body:a}},htmlBuilder(n,e){var t=P0[n.style],i=e.havingStyle(t);return n.resetFont&&(i=i.withFont("")),Jh(n.body,i,e)},mathmlBuilder(n,e){var t=P0[n.style],i=e.havingStyle(t);n.resetFont&&(i=i.withFont(""));var r=Fn(n.body,i),a=new le("mstyle",r),s={display:["0","true"],text:["0","false"],script:["1","false"],scriptscript:["2","false"]},o=s[n.style];return a.setAttribute("scriptlevel",o[0]),a.setAttribute("displaystyle",o[1]),a}});var Lp=function(e,t){var i=e.base;if(i)if(i.type==="op"){var r=i.limits&&(t.style.size===Ke.DISPLAY.size||i.alwaysHandleSupSub);return r?ca:null}else if(i.type==="operatorname"){var a=i.alwaysHandleSupSub&&(t.style.size===Ke.DISPLAY.size||i.limits);return a?Zh:null}else{if(i.type==="accent")return Ri(i.base)?Il:null;if(i.type==="horizBrace"){var s=!e.sub;return s===i.isOver?$h:null}else return null}else return null};_r({type:"supsub",htmlBuilder(n,e){var t=Lp(n,e);if(t)return t(n,e);var{base:i,sup:r,sub:a}=n,s=mt(i,e),o,l,c=e.fontMetrics(),u=0,d=0,f=i&&Ri(i);if(r){var m=e.havingStyle(e.style.sup());o=mt(r,m,e),f||(u=s.height-m.fontMetrics().supDrop*m.sizeMultiplier/e.sizeMultiplier)}if(a){var v=e.havingStyle(e.style.sub());l=mt(a,v,e),f||(d=s.depth+v.fontMetrics().subDrop*v.sizeMultiplier/e.sizeMultiplier)}var b;e.style===Ke.DISPLAY?b=c.sup1:e.style.cramped?b=c.sup3:b=c.sup2;var g=e.sizeMultiplier,p=ue(.5/c.ptPerEm/g),T=null;if(l){var A=n.base&&n.base.type==="op"&&n.base.name&&(n.base.name==="\\oiint"||n.base.name==="\\oiiint");if(s instanceof Un||A){var D;T=ue(-((D=s.italic)!=null?D:0))}}var I;if(o&&l){u=Math.max(u,b,o.depth+.25*c.xHeight),d=Math.max(d,c.sub2);var C=c.defaultRuleThickness,U=4*C;if(u-o.depth-(l.height-d)<U){d=U-(u-o.depth)+l.height;var B=.8*c.xHeight-(u-o.depth);B>0&&(u+=B,d-=B)}var E=[{type:"elem",elem:l,shift:d,marginRight:p,marginLeft:T},{type:"elem",elem:o,shift:-u,marginRight:p}];I=pt({positionType:"individualShift",children:E})}else if(l){d=Math.max(d,c.sub1,l.height-.8*c.xHeight);var w=[{type:"elem",elem:l,marginLeft:T,marginRight:p}];I=pt({positionType:"shift",positionData:d,children:w})}else if(o)u=Math.max(u,b,o.depth+.25*c.xHeight),I=pt({positionType:"shift",positionData:-u,children:[{type:"elem",elem:o,marginRight:p}]});else throw new Error("supsub must have either sup or sub.");var O=T0(s,"right")||"mord";return ae([O],[s,ae(["msupsub"],[I])],e)},mathmlBuilder(n,e){var t=!1,i,r;n.base&&n.base.type==="horizBrace"&&(r=!!n.sup,r===n.base.isOver&&(t=!0,i=n.base.isOver)),n.base&&(n.base.type==="op"||n.base.type==="operatorname")&&(n.base.parentIsSupSub=!0);var a=[Et(n.base,e)];n.sub&&a.push(Et(n.sub,e)),n.sup&&a.push(Et(n.sup,e));var s;if(t)s=i?"mover":"munder";else if(n.sub)if(n.sup){var c=n.base;c&&c.type==="op"&&c.limits&&e.style===Ke.DISPLAY||c&&c.type==="operatorname"&&c.alwaysHandleSupSub&&(e.style===Ke.DISPLAY||c.limits)?s="munderover":s="msubsup"}else{var l=n.base;l&&l.type==="op"&&l.limits&&(e.style===Ke.DISPLAY||l.alwaysHandleSupSub)||l&&l.type==="operatorname"&&l.alwaysHandleSupSub&&(l.limits||e.style===Ke.DISPLAY)?s="munder":s="msub"}else{var o=n.base;o&&o.type==="op"&&o.limits&&(e.style===Ke.DISPLAY||o.alwaysHandleSupSub)||o&&o.type==="operatorname"&&o.alwaysHandleSupSub&&(o.limits||e.style===Ke.DISPLAY)?s="mover":s="msup"}return new le(s,a)}});_r({type:"atom",htmlBuilder(n,e){return Rl(n.text,n.mode,e,["m"+n.family])},mathmlBuilder(n,e){var t=new le("mo",[Gn(n.text,n.mode)]);if(n.family==="bin"){var i=Ll(n,e);i==="bold-italic"&&t.setAttribute("mathvariant",i)}else n.family==="punct"?t.setAttribute("separator","true"):(n.family==="open"||n.family==="close")&&t.setAttribute("stretchy","false");return t}});var Qh={mi:"italic",mn:"normal",mtext:"normal"};_r({type:"mathord",htmlBuilder(n,e){return Ys(n,e,"mathord")},mathmlBuilder(n,e){var t=new le("mi",[Gn(n.text,n.mode,e)]),i=Ll(n,e)||"italic";return i!==Qh[t.type]&&t.setAttribute("mathvariant",i),t}});_r({type:"textord",htmlBuilder(n,e){return Ys(n,e,"textord")},mathmlBuilder(n,e){var t=Gn(n.text,n.mode,e),i=Ll(n,e)||"normal",r;return n.mode==="text"?r=new le("mtext",[t]):/[0-9]/.test(n.text)?r=new le("mn",[t]):n.text==="\\prime"?r=new le("mo",[t]):r=new le("mi",[t]),i!==Qh[r.type]&&r.setAttribute("mathvariant",i),r}});var Ao={"\\nobreak":"nobreak","\\allowbreak":"allowbreak"},Co={" ":{},"\\ ":{},"~":{className:"nobreak"},"\\space":{},"\\nobreakspace":{className:"nobreak"}};_r({type:"spacing",htmlBuilder(n,e){if(Co.hasOwnProperty(n.text)){var t=Co[n.text].className||"";if(n.mode==="text"){var i=Ys(n,e,"textord");return i.classes.push(t),i}else return ae(["mspace",t],[Rl(n.text,n.mode,e)],e)}else{if(Ao.hasOwnProperty(n.text))return ae(["mspace",Ao[n.text]],[],e);throw new oe('Unknown type of space "'+n.text+'"')}},mathmlBuilder(n,e){var t;if(Co.hasOwnProperty(n.text))t=new le("mtext",[new Wt(" ")]);else{if(Ao.hasOwnProperty(n.text))return new le("mspace");throw new oe('Unknown type of space "'+n.text+'"')}return t}});var Vc=()=>{var n=new le("mtd",[]);return n.setAttribute("width","50%"),n};_r({type:"tag",mathmlBuilder(n,e){var t=new le("mtable",[new le("mtr",[Vc(),new le("mtd",[ji(n.body,e)]),Vc(),new le("mtd",[ji(n.tag,e)])])]);return t.setAttribute("width","100%"),t}});var Gc={"\\text":void 0,"\\textrm":"textrm","\\textsf":"textsf","\\texttt":"texttt","\\textnormal":"textrm"},Wc={"\\textbf":"textbf","\\textmd":"textmd"},Ip={"\\textit":"textit","\\textup":"textup"},qc=(n,e)=>{var t=n.font;if(t){if(Gc[t])return e.withTextFontFamily(Gc[t]);if(Wc[t])return e.withTextFontWeight(Wc[t]);if(t==="\\emph")return e.fontShape==="textit"?e.withTextFontShape("textup"):e.withTextFontShape("textit")}else return e;return e.withTextFontShape(Ip[t])};Me({type:"text",names:["\\text","\\textrm","\\textsf","\\texttt","\\textnormal","\\textbf","\\textmd","\\textit","\\textup","\\emph"],props:{numArgs:1,argTypes:["text"],allowedInArgument:!0,allowedInText:!0},handler(n,e){var{parser:t,funcName:i}=n,r=e[0];return{type:"text",mode:t.mode,body:Gt(r),font:i}},htmlBuilder(n,e){var t=qc(n,e),i=jt(n.body,t,!0);return ae(["mord","text"],i,t)},mathmlBuilder(n,e){var t=qc(n,e);return ji(n.body,t)}});Me({type:"underline",names:["\\underline"],props:{numArgs:1,allowedInText:!0},handler(n,e){var{parser:t}=n;return{type:"underline",mode:t.mode,body:e[0]}},htmlBuilder(n,e){var t=mt(n.body,e),i=$r("underline-line",e),r=e.fontMetrics().defaultRuleThickness,a=pt({positionType:"top",positionData:t.height,children:[{type:"kern",size:r},{type:"elem",elem:i},{type:"kern",size:3*r},{type:"elem",elem:t}]});return ae(["mord","underline"],[a],e)},mathmlBuilder(n,e){var t=new le("mo",[new Wt("‾")]);t.setAttribute("stretchy","true");var i=new le("munder",[Et(n.body,e),t]);return i.setAttribute("accentunder","true"),i}});Me({type:"vcenter",names:["\\vcenter"],props:{numArgs:1,argTypes:["original"],allowedInText:!1},handler(n,e){var{parser:t}=n;return{type:"vcenter",mode:t.mode,body:e[0]}},htmlBuilder(n,e){var t=mt(n.body,e),i=e.fontMetrics().axisHeight,r=.5*(t.height-i-(t.depth+i));return pt({positionType:"shift",positionData:r,children:[{type:"elem",elem:t}]})},mathmlBuilder(n,e){var t=new le("mpadded",[Et(n.body,e)],["vcenter"]);return new le("mrow",[t])}});Me({type:"verb",names:["\\verb"],props:{numArgs:0,allowedInText:!0},handler(n,e,t){throw new oe("\\verb ended by end of line instead of matching delimiter")},htmlBuilder(n,e){for(var t=Xc(n),i=[],r=e.havingStyle(e.style.text()),a=0;a<t.length;a++){var s=t[a];s==="~"&&(s="\\textasciitilde"),i.push(dn(s,"Typewriter-Regular",n.mode,r,["mord","texttt"]))}return ae(["mord","text"].concat(r.sizingClasses(e)),xh(i),r)},mathmlBuilder(n,e){var t=new Wt(Xc(n)),i=new le("mtext",[t]);return i.setAttribute("mathvariant","monospace"),i}});var Xc=n=>n.body.replace(/ /g,n.star?"␣":" "),Vi=_h,ed=`[ \r
	]`,Up="\\\\[a-zA-Z@]+",Np="\\\\[^\uD800-\uDFFF]",Fp="("+Up+")"+ed+"*",Op=`\\\\(
|[ \r	]+
?)[ \r	]*`,L0="[̀-ͯ]",zp=new RegExp(L0+"+$"),Bp="("+ed+"+)|"+(Op+"|")+"([!-\\[\\]-‧‪-퟿豈-￿]"+(L0+"*")+"|[\uD800-\uDBFF][\uDC00-\uDFFF]"+(L0+"*")+"|\\\\verb\\*([^]).*?\\4|\\\\verb([^*a-zA-Z]).*?\\5"+("|"+Fp)+("|"+Np+")");class Yc{constructor(e,t){this.input=void 0,this.settings=void 0,this.tokenRegex=void 0,this.catcodes=void 0,this.input=e,this.settings=t,this.tokenRegex=new RegExp(Bp,"g"),this.catcodes={"%":14,"~":13}}setCatcode(e,t){this.catcodes[e]=t}lex(){var e=this.input,t=this.tokenRegex.lastIndex;if(t===e.length)return new Ln("EOF",new _n(this,t,t));var i=this.tokenRegex.exec(e);if(i===null||i.index!==t)throw new oe("Unexpected character: '"+e[t]+"'",new Ln(e[t],new _n(this,t,t+1)));var r=i[6]||i[3]||(i[2]?"\\ ":" ");if(this.catcodes[r]===14){var a=e.indexOf(`
`,this.tokenRegex.lastIndex);return a===-1?(this.tokenRegex.lastIndex=e.length,this.settings.reportNonstrict("commentAtEnd","% comment has no terminating newline; LaTeX would fail because of commenting the end of math mode (e.g. $)")):this.tokenRegex.lastIndex=a+1,this.lex()}return new Ln(r,new _n(this,t,this.tokenRegex.lastIndex))}}class kp{constructor(e,t){e===void 0&&(e={}),t===void 0&&(t={}),this.current=void 0,this.builtins=void 0,this.undefStack=void 0,this.current=t,this.builtins=e,this.undefStack=[]}beginGroup(){this.undefStack.push({})}endGroup(){if(this.undefStack.length===0)throw new oe("Unbalanced namespace destruction: attempt to pop global namespace; please report this as a bug");var e=this.undefStack.pop();for(var t in e)e.hasOwnProperty(t)&&(e[t]==null?delete this.current[t]:this.current[t]=e[t])}endGroups(){for(;this.undefStack.length>0;)this.endGroup()}has(e){return this.current.hasOwnProperty(e)||this.builtins.hasOwnProperty(e)}get(e){return this.current.hasOwnProperty(e)?this.current[e]:this.builtins[e]}set(e,t,i){if(i===void 0&&(i=!1),i){for(var r=0;r<this.undefStack.length;r++)delete this.undefStack[r][e];this.undefStack.length>0&&(this.undefStack[this.undefStack.length-1][e]=t)}else{var a=this.undefStack[this.undefStack.length-1];a&&!a.hasOwnProperty(e)&&(a[e]=this.current[e])}t==null?delete this.current[e]:this.current[e]=t}}var Hp=Gh;M("\\noexpand",function(n){var e=n.popToken();return n.isExpandable(e.text)&&(e.noexpand=!0,e.treatAsRelax=!0),{tokens:[e],numArgs:0}});M("\\expandafter",function(n){var e=n.popToken();return n.expandOnce(!0),{tokens:[e],numArgs:0}});M("\\@firstoftwo",function(n){var e=n.consumeArgs(2);return{tokens:e[0],numArgs:0}});M("\\@secondoftwo",function(n){var e=n.consumeArgs(2);return{tokens:e[1],numArgs:0}});M("\\@ifnextchar",function(n){var e=n.consumeArgs(3);n.consumeSpaces();var t=n.future();return e[0].length===1&&e[0][0].text===t.text?{tokens:e[1],numArgs:0}:{tokens:e[2],numArgs:0}});M("\\@ifstar","\\@ifnextchar *{\\@firstoftwo{#1}}");M("\\TextOrMath",function(n){var e=n.consumeArgs(2);return n.mode==="text"?{tokens:e[0],numArgs:0}:{tokens:e[1],numArgs:0}});var $c={0:0,1:1,2:2,3:3,4:4,5:5,6:6,7:7,8:8,9:9,a:10,A:10,b:11,B:11,c:12,C:12,d:13,D:13,e:14,E:14,f:15,F:15};M("\\char",function(n){var e=n.popToken(),t,i=0;if(e.text==="'")t=8,e=n.popToken();else if(e.text==='"')t=16,e=n.popToken();else if(e.text==="`")if(e=n.popToken(),e.text[0]==="\\")i=e.text.charCodeAt(1);else{if(e.text==="EOF")throw new oe("\\char` missing argument");i=e.text.charCodeAt(0)}else t=10;if(t){if(i=$c[e.text],i==null||i>=t)throw new oe("Invalid base-"+t+" digit "+e.text);for(var r;(r=$c[n.future().text])!=null&&r<t;)i*=t,i+=r,n.popToken()}return"\\@char{"+i+"}"});var Ol=(n,e,t,i)=>{var r=n.consumeArg().tokens;if(r.length!==1)throw new oe("\\newcommand's first argument must be a macro name");var a=r[0].text,s=n.isDefined(a);if(s&&!e)throw new oe("\\newcommand{"+a+"} attempting to redefine "+(a+"; use \\renewcommand"));if(!s&&!t)throw new oe("\\renewcommand{"+a+"} when command "+a+" does not yet exist; use \\newcommand");var o=0;if(r=n.consumeArg().tokens,r.length===1&&r[0].text==="["){for(var l="",c=n.expandNextToken();c.text!=="]"&&c.text!=="EOF";)l+=c.text,c=n.expandNextToken();if(!l.match(/^\s*[0-9]+\s*$/))throw new oe("Invalid number of arguments: "+l);o=parseInt(l),r=n.consumeArg().tokens}return s&&i||n.macros.set(a,{tokens:r,numArgs:o}),""};M("\\newcommand",n=>Ol(n,!1,!0,!1));M("\\renewcommand",n=>Ol(n,!0,!1,!1));M("\\providecommand",n=>Ol(n,!0,!0,!0));M("\\message",n=>{var e=n.consumeArgs(1)[0];return console.log(e.reverse().map(t=>t.text).join("")),""});M("\\errmessage",n=>{var e=n.consumeArgs(1)[0];return console.error(e.reverse().map(t=>t.text).join("")),""});M("\\show",n=>{var e=n.popToken(),t=e.text;return console.log(e,n.macros.get(t),Vi[t],Ct.math[t],Ct.text[t]),""});M("\\bgroup","{");M("\\egroup","}");M("~","\\nobreakspace");M("\\lq","`");M("\\rq","'");M("\\aa","\\r a");M("\\AA","\\r A");M("\\textcopyright","\\html@mathml{\\textcircled{c}}{\\char`©}");M("\\copyright","\\TextOrMath{\\textcopyright}{\\text{\\textcopyright}}");M("\\textregistered","\\html@mathml{\\textcircled{\\scriptsize R}}{\\char`®}");M("ℬ","\\mathscr{B}");M("ℰ","\\mathscr{E}");M("ℱ","\\mathscr{F}");M("ℋ","\\mathscr{H}");M("ℐ","\\mathscr{I}");M("ℒ","\\mathscr{L}");M("ℳ","\\mathscr{M}");M("ℛ","\\mathscr{R}");M("ℭ","\\mathfrak{C}");M("ℌ","\\mathfrak{H}");M("ℨ","\\mathfrak{Z}");M("\\Bbbk","\\Bbb{k}");M("\\llap","\\mathllap{\\textrm{#1}}");M("\\rlap","\\mathrlap{\\textrm{#1}}");M("\\clap","\\mathclap{\\textrm{#1}}");M("\\mathstrut","\\vphantom{(}");M("\\underbar","\\underline{\\text{#1}}");M("\\not",'\\html@mathml{\\mathrel{\\mathrlap\\@not}\\nobreak}{\\char"338}');M("\\neq","\\html@mathml{\\mathrel{\\not=}}{\\mathrel{\\char`≠}}");M("\\ne","\\neq");M("≠","\\neq");M("\\notin","\\html@mathml{\\mathrel{{\\in}\\mathllap{/\\mskip1mu}}}{\\mathrel{\\char`∉}}");M("∉","\\notin");M("≘","\\html@mathml{\\mathrel{=\\kern{-1em}\\raisebox{0.4em}{$\\scriptsize\\frown$}}}{\\mathrel{\\char`≘}}");M("≙","\\html@mathml{\\stackrel{\\tiny\\wedge}{=}}{\\mathrel{\\char`≘}}");M("≚","\\html@mathml{\\stackrel{\\tiny\\vee}{=}}{\\mathrel{\\char`≚}}");M("≛","\\html@mathml{\\stackrel{\\scriptsize\\star}{=}}{\\mathrel{\\char`≛}}");M("≝","\\html@mathml{\\stackrel{\\tiny\\mathrm{def}}{=}}{\\mathrel{\\char`≝}}");M("≞","\\html@mathml{\\stackrel{\\tiny\\mathrm{m}}{=}}{\\mathrel{\\char`≞}}");M("≟","\\html@mathml{\\stackrel{\\tiny?}{=}}{\\mathrel{\\char`≟}}");M("⟂","\\perp");M("‼","\\mathclose{!\\mkern-0.8mu!}");M("∌","\\notni");M("⌜","\\ulcorner");M("⌝","\\urcorner");M("⌞","\\llcorner");M("⌟","\\lrcorner");M("©","\\copyright");M("®","\\textregistered");M("\\ulcorner",'\\html@mathml{\\@ulcorner}{\\mathop{\\char"231c}}');M("\\urcorner",'\\html@mathml{\\@urcorner}{\\mathop{\\char"231d}}');M("\\llcorner",'\\html@mathml{\\@llcorner}{\\mathop{\\char"231e}}');M("\\lrcorner",'\\html@mathml{\\@lrcorner}{\\mathop{\\char"231f}}');M("\\vdots","{\\varvdots\\rule{0pt}{15pt}}");M("⋮","\\vdots");M("\\varGamma","\\mathit{\\Gamma}");M("\\varDelta","\\mathit{\\Delta}");M("\\varTheta","\\mathit{\\Theta}");M("\\varLambda","\\mathit{\\Lambda}");M("\\varXi","\\mathit{\\Xi}");M("\\varPi","\\mathit{\\Pi}");M("\\varSigma","\\mathit{\\Sigma}");M("\\varUpsilon","\\mathit{\\Upsilon}");M("\\varPhi","\\mathit{\\Phi}");M("\\varPsi","\\mathit{\\Psi}");M("\\varOmega","\\mathit{\\Omega}");M("\\substack","\\begin{subarray}{c}#1\\end{subarray}");M("\\colon","\\nobreak\\mskip2mu\\mathpunct{}\\mathchoice{\\mkern-3mu}{\\mkern-3mu}{}{}{:}\\mskip6mu\\relax");M("\\boxed","\\fbox{$\\displaystyle{#1}$}");M("\\iff","\\DOTSB\\;\\Longleftrightarrow\\;");M("\\implies","\\DOTSB\\;\\Longrightarrow\\;");M("\\impliedby","\\DOTSB\\;\\Longleftarrow\\;");M("\\dddot","{\\overset{\\raisebox{-0.1ex}{\\normalsize ...}}{#1}}");M("\\ddddot","{\\overset{\\raisebox{-0.1ex}{\\normalsize ....}}{#1}}");var jc={",":"\\dotsc","\\not":"\\dotsb","+":"\\dotsb","=":"\\dotsb","<":"\\dotsb",">":"\\dotsb","-":"\\dotsb","*":"\\dotsb",":":"\\dotsb","\\DOTSB":"\\dotsb","\\coprod":"\\dotsb","\\bigvee":"\\dotsb","\\bigwedge":"\\dotsb","\\biguplus":"\\dotsb","\\bigcap":"\\dotsb","\\bigcup":"\\dotsb","\\prod":"\\dotsb","\\sum":"\\dotsb","\\bigotimes":"\\dotsb","\\bigoplus":"\\dotsb","\\bigodot":"\\dotsb","\\bigsqcup":"\\dotsb","\\And":"\\dotsb","\\longrightarrow":"\\dotsb","\\Longrightarrow":"\\dotsb","\\longleftarrow":"\\dotsb","\\Longleftarrow":"\\dotsb","\\longleftrightarrow":"\\dotsb","\\Longleftrightarrow":"\\dotsb","\\mapsto":"\\dotsb","\\longmapsto":"\\dotsb","\\hookrightarrow":"\\dotsb","\\doteq":"\\dotsb","\\mathbin":"\\dotsb","\\mathrel":"\\dotsb","\\relbar":"\\dotsb","\\Relbar":"\\dotsb","\\xrightarrow":"\\dotsb","\\xleftarrow":"\\dotsb","\\DOTSI":"\\dotsi","\\int":"\\dotsi","\\oint":"\\dotsi","\\iint":"\\dotsi","\\iiint":"\\dotsi","\\iiiint":"\\dotsi","\\idotsint":"\\dotsi","\\DOTSX":"\\dotsx"},Vp=new Set(["bin","rel"]);M("\\dots",function(n){var e="\\dotso",t=n.expandAfterFuture().text;return t in jc?e=jc[t]:(t.slice(0,4)==="\\not"||t in Ct.math&&Vp.has(Ct.math[t].group))&&(e="\\dotsb"),e});var zl={")":!0,"]":!0,"\\rbrack":!0,"\\}":!0,"\\rbrace":!0,"\\rangle":!0,"\\rceil":!0,"\\rfloor":!0,"\\rgroup":!0,"\\rmoustache":!0,"\\right":!0,"\\bigr":!0,"\\biggr":!0,"\\Bigr":!0,"\\Biggr":!0,$:!0,";":!0,".":!0,",":!0};M("\\dotso",function(n){var e=n.future().text;return e in zl?"\\ldots\\,":"\\ldots"});M("\\dotsc",function(n){var e=n.future().text;return e in zl&&e!==","?"\\ldots\\,":"\\ldots"});M("\\cdots",function(n){var e=n.future().text;return e in zl?"\\@cdots\\,":"\\@cdots"});M("\\dotsb","\\cdots");M("\\dotsm","\\cdots");M("\\dotsi","\\!\\cdots");M("\\dotsx","\\ldots\\,");M("\\DOTSI","\\relax");M("\\DOTSB","\\relax");M("\\DOTSX","\\relax");M("\\tmspace","\\TextOrMath{\\kern#1#3}{\\mskip#1#2}\\relax");M("\\,","\\tmspace+{3mu}{.1667em}");M("\\thinspace","\\,");M("\\>","\\mskip{4mu}");M("\\:","\\tmspace+{4mu}{.2222em}");M("\\medspace","\\:");M("\\;","\\tmspace+{5mu}{.2777em}");M("\\thickspace","\\;");M("\\!","\\tmspace-{3mu}{.1667em}");M("\\negthinspace","\\!");M("\\negmedspace","\\tmspace-{4mu}{.2222em}");M("\\negthickspace","\\tmspace-{5mu}{.277em}");M("\\enspace","\\kern.5em ");M("\\enskip","\\hskip.5em\\relax");M("\\quad","\\hskip1em\\relax");M("\\qquad","\\hskip2em\\relax");M("\\tag","\\@ifstar\\tag@literal\\tag@paren");M("\\tag@paren","\\tag@literal{({#1})}");M("\\tag@literal",n=>{if(n.macros.get("\\df@tag"))throw new oe("Multiple \\tag");return"\\gdef\\df@tag{\\text{#1}}"});M("\\bmod","\\mathchoice{\\mskip1mu}{\\mskip1mu}{\\mskip5mu}{\\mskip5mu}\\mathbin{\\rm mod}\\mathchoice{\\mskip1mu}{\\mskip1mu}{\\mskip5mu}{\\mskip5mu}");M("\\pod","\\allowbreak\\mathchoice{\\mkern18mu}{\\mkern8mu}{\\mkern8mu}{\\mkern8mu}(#1)");M("\\pmod","\\pod{{\\rm mod}\\mkern6mu#1}");M("\\mod","\\allowbreak\\mathchoice{\\mkern18mu}{\\mkern12mu}{\\mkern12mu}{\\mkern12mu}{\\rm mod}\\,\\,#1");M("\\newline","\\\\\\relax");M("\\TeX","\\textrm{\\html@mathml{T\\kern-.1667em\\raisebox{-.5ex}{E}\\kern-.125emX}{TeX}}");var td=ue(ii["Main-Regular"][84][1]-.7*ii["Main-Regular"][65][1]);M("\\LaTeX","\\textrm{\\html@mathml{"+("L\\kern-.36em\\raisebox{"+td+"}{\\scriptstyle A}")+"\\kern-.15em\\TeX}{LaTeX}}");M("\\KaTeX","\\textrm{\\html@mathml{"+("K\\kern-.17em\\raisebox{"+td+"}{\\scriptstyle A}")+"\\kern-.15em\\TeX}{KaTeX}}");M("\\hspace","\\@ifstar\\@hspacer\\@hspace");M("\\@hspace","\\hskip #1\\relax");M("\\@hspacer","\\rule{0pt}{0pt}\\hskip #1\\relax");M("\\ordinarycolon",":");M("\\vcentcolon","\\mathrel{\\mathop\\ordinarycolon}");M("\\dblcolon",'\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-.9mu}\\vcentcolon}}{\\mathop{\\char"2237}}');M("\\coloneqq",'\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}=}}{\\mathop{\\char"2254}}');M("\\Coloneqq",'\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}=}}{\\mathop{\\char"2237\\char"3d}}');M("\\coloneq",'\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}\\mathrel{-}}}{\\mathop{\\char"3a\\char"2212}}');M("\\Coloneq",'\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}\\mathrel{-}}}{\\mathop{\\char"2237\\char"2212}}');M("\\eqqcolon",'\\html@mathml{\\mathrel{=\\mathrel{\\mkern-1.2mu}\\vcentcolon}}{\\mathop{\\char"2255}}');M("\\Eqqcolon",'\\html@mathml{\\mathrel{=\\mathrel{\\mkern-1.2mu}\\dblcolon}}{\\mathop{\\char"3d\\char"2237}}');M("\\eqcolon",'\\html@mathml{\\mathrel{\\mathrel{-}\\mathrel{\\mkern-1.2mu}\\vcentcolon}}{\\mathop{\\char"2239}}');M("\\Eqcolon",'\\html@mathml{\\mathrel{\\mathrel{-}\\mathrel{\\mkern-1.2mu}\\dblcolon}}{\\mathop{\\char"2212\\char"2237}}');M("\\colonapprox",'\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}\\approx}}{\\mathop{\\char"3a\\char"2248}}');M("\\Colonapprox",'\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}\\approx}}{\\mathop{\\char"2237\\char"2248}}');M("\\colonsim",'\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}\\sim}}{\\mathop{\\char"3a\\char"223c}}');M("\\Colonsim",'\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}\\sim}}{\\mathop{\\char"2237\\char"223c}}');M("∷","\\dblcolon");M("∹","\\eqcolon");M("≔","\\coloneqq");M("≕","\\eqqcolon");M("⩴","\\Coloneqq");M("\\ratio","\\vcentcolon");M("\\coloncolon","\\dblcolon");M("\\colonequals","\\coloneqq");M("\\coloncolonequals","\\Coloneqq");M("\\equalscolon","\\eqqcolon");M("\\equalscoloncolon","\\Eqqcolon");M("\\colonminus","\\coloneq");M("\\coloncolonminus","\\Coloneq");M("\\minuscolon","\\eqcolon");M("\\minuscoloncolon","\\Eqcolon");M("\\coloncolonapprox","\\Colonapprox");M("\\coloncolonsim","\\Colonsim");M("\\simcolon","\\mathrel{\\sim\\mathrel{\\mkern-1.2mu}\\vcentcolon}");M("\\simcoloncolon","\\mathrel{\\sim\\mathrel{\\mkern-1.2mu}\\dblcolon}");M("\\approxcolon","\\mathrel{\\approx\\mathrel{\\mkern-1.2mu}\\vcentcolon}");M("\\approxcoloncolon","\\mathrel{\\approx\\mathrel{\\mkern-1.2mu}\\dblcolon}");M("\\notni","\\html@mathml{\\not\\ni}{\\mathrel{\\char`∌}}");M("\\limsup","\\DOTSB\\operatorname*{lim\\,sup}");M("\\liminf","\\DOTSB\\operatorname*{lim\\,inf}");M("\\injlim","\\DOTSB\\operatorname*{inj\\,lim}");M("\\projlim","\\DOTSB\\operatorname*{proj\\,lim}");M("\\varlimsup","\\DOTSB\\operatorname*{\\overline{lim}}");M("\\varliminf","\\DOTSB\\operatorname*{\\underline{lim}}");M("\\varinjlim","\\DOTSB\\operatorname*{\\underrightarrow{lim}}");M("\\varprojlim","\\DOTSB\\operatorname*{\\underleftarrow{lim}}");M("\\gvertneqq","\\html@mathml{\\@gvertneqq}{≩}");M("\\lvertneqq","\\html@mathml{\\@lvertneqq}{≨}");M("\\ngeqq","\\html@mathml{\\@ngeqq}{≱}");M("\\ngeqslant","\\html@mathml{\\@ngeqslant}{≱}");M("\\nleqq","\\html@mathml{\\@nleqq}{≰}");M("\\nleqslant","\\html@mathml{\\@nleqslant}{≰}");M("\\nshortmid","\\html@mathml{\\@nshortmid}{∤}");M("\\nshortparallel","\\html@mathml{\\@nshortparallel}{∦}");M("\\nsubseteqq","\\html@mathml{\\@nsubseteqq}{⊈}");M("\\nsupseteqq","\\html@mathml{\\@nsupseteqq}{⊉}");M("\\varsubsetneq","\\html@mathml{\\@varsubsetneq}{⊊}");M("\\varsubsetneqq","\\html@mathml{\\@varsubsetneqq}{⫋}");M("\\varsupsetneq","\\html@mathml{\\@varsupsetneq}{⊋}");M("\\varsupsetneqq","\\html@mathml{\\@varsupsetneqq}{⫌}");M("\\imath","\\html@mathml{\\@imath}{ı}");M("\\jmath","\\html@mathml{\\@jmath}{ȷ}");M("\\llbracket","\\html@mathml{\\mathopen{[\\mkern-3.2mu[}}{\\mathopen{\\char`⟦}}");M("\\rrbracket","\\html@mathml{\\mathclose{]\\mkern-3.2mu]}}{\\mathclose{\\char`⟧}}");M("⟦","\\llbracket");M("⟧","\\rrbracket");M("\\lBrace","\\html@mathml{\\mathopen{\\{\\mkern-3.2mu[}}{\\mathopen{\\char`⦃}}");M("\\rBrace","\\html@mathml{\\mathclose{]\\mkern-3.2mu\\}}}{\\mathclose{\\char`⦄}}");M("⦃","\\lBrace");M("⦄","\\rBrace");M("\\minuso","\\mathbin{\\html@mathml{{\\mathrlap{\\mathchoice{\\kern{0.145em}}{\\kern{0.145em}}{\\kern{0.1015em}}{\\kern{0.0725em}}\\circ}{-}}}{\\char`⦵}}");M("⦵","\\minuso");M("\\darr","\\downarrow");M("\\dArr","\\Downarrow");M("\\Darr","\\Downarrow");M("\\lang","\\langle");M("\\rang","\\rangle");M("\\uarr","\\uparrow");M("\\uArr","\\Uparrow");M("\\Uarr","\\Uparrow");M("\\N","\\mathbb{N}");M("\\R","\\mathbb{R}");M("\\Z","\\mathbb{Z}");M("\\alef","\\aleph");M("\\alefsym","\\aleph");M("\\Alpha","\\mathrm{A}");M("\\Beta","\\mathrm{B}");M("\\bull","\\bullet");M("\\Chi","\\mathrm{X}");M("\\clubs","\\clubsuit");M("\\cnums","\\mathbb{C}");M("\\Complex","\\mathbb{C}");M("\\Dagger","\\ddagger");M("\\diamonds","\\diamondsuit");M("\\empty","\\emptyset");M("\\Epsilon","\\mathrm{E}");M("\\Eta","\\mathrm{H}");M("\\exist","\\exists");M("\\harr","\\leftrightarrow");M("\\hArr","\\Leftrightarrow");M("\\Harr","\\Leftrightarrow");M("\\hearts","\\heartsuit");M("\\image","\\Im");M("\\infin","\\infty");M("\\Iota","\\mathrm{I}");M("\\isin","\\in");M("\\Kappa","\\mathrm{K}");M("\\larr","\\leftarrow");M("\\lArr","\\Leftarrow");M("\\Larr","\\Leftarrow");M("\\lrarr","\\leftrightarrow");M("\\lrArr","\\Leftrightarrow");M("\\Lrarr","\\Leftrightarrow");M("\\Mu","\\mathrm{M}");M("\\natnums","\\mathbb{N}");M("\\Nu","\\mathrm{N}");M("\\Omicron","\\mathrm{O}");M("\\plusmn","\\pm");M("\\rarr","\\rightarrow");M("\\rArr","\\Rightarrow");M("\\Rarr","\\Rightarrow");M("\\real","\\Re");M("\\reals","\\mathbb{R}");M("\\Reals","\\mathbb{R}");M("\\Rho","\\mathrm{P}");M("\\sdot","\\cdot");M("\\sect","\\S");M("\\spades","\\spadesuit");M("\\sub","\\subset");M("\\sube","\\subseteq");M("\\supe","\\supseteq");M("\\Tau","\\mathrm{T}");M("\\thetasym","\\vartheta");M("\\weierp","\\wp");M("\\Zeta","\\mathrm{Z}");M("\\argmin","\\DOTSB\\operatorname*{arg\\,min}");M("\\argmax","\\DOTSB\\operatorname*{arg\\,max}");M("\\plim","\\DOTSB\\mathop{\\operatorname{plim}}\\limits");M("\\bra","\\mathinner{\\langle{#1}|}");M("\\ket","\\mathinner{|{#1}\\rangle}");M("\\braket","\\mathinner{\\langle{#1}\\rangle}");M("\\Bra","\\left\\langle#1\\right|");M("\\Ket","\\left|#1\\right\\rangle");var nd=n=>e=>{var t=e.consumeArg().tokens,i=e.consumeArg().tokens,r=e.consumeArg().tokens,a=e.consumeArg().tokens,s=e.macros.get("|"),o=e.macros.get("\\|");e.macros.beginGroup();var l=d=>f=>{n&&(f.macros.set("|",s),r.length&&f.macros.set("\\|",o));var m=d;if(!d&&r.length){var v=f.future();v.text==="|"&&(f.popToken(),m=!0)}return{tokens:m?r:i,numArgs:0}};e.macros.set("|",l(!1)),r.length&&e.macros.set("\\|",l(!0));var c=e.consumeArg().tokens,u=e.expandTokens([...a,...c,...t]);return e.macros.endGroup(),{tokens:u.reverse(),numArgs:0}};M("\\bra@ket",nd(!1));M("\\bra@set",nd(!0));M("\\Braket","\\bra@ket{\\left\\langle}{\\,\\middle\\vert\\,}{\\,\\middle\\vert\\,}{\\right\\rangle}");M("\\Set","\\bra@set{\\left\\{\\:}{\\;\\middle\\vert\\;}{\\;\\middle\\Vert\\;}{\\:\\right\\}}");M("\\set","\\bra@set{\\{\\,}{\\mid}{}{\\,\\}}");M("\\angln","{\\angl n}");M("\\blue","\\textcolor{##6495ed}{#1}");M("\\orange","\\textcolor{##ffa500}{#1}");M("\\pink","\\textcolor{##ff00af}{#1}");M("\\red","\\textcolor{##df0030}{#1}");M("\\green","\\textcolor{##28ae7b}{#1}");M("\\gray","\\textcolor{gray}{#1}");M("\\purple","\\textcolor{##9d38bd}{#1}");M("\\blueA","\\textcolor{##ccfaff}{#1}");M("\\blueB","\\textcolor{##80f6ff}{#1}");M("\\blueC","\\textcolor{##63d9ea}{#1}");M("\\blueD","\\textcolor{##11accd}{#1}");M("\\blueE","\\textcolor{##0c7f99}{#1}");M("\\tealA","\\textcolor{##94fff5}{#1}");M("\\tealB","\\textcolor{##26edd5}{#1}");M("\\tealC","\\textcolor{##01d1c1}{#1}");M("\\tealD","\\textcolor{##01a995}{#1}");M("\\tealE","\\textcolor{##208170}{#1}");M("\\greenA","\\textcolor{##b6ffb0}{#1}");M("\\greenB","\\textcolor{##8af281}{#1}");M("\\greenC","\\textcolor{##74cf70}{#1}");M("\\greenD","\\textcolor{##1fab54}{#1}");M("\\greenE","\\textcolor{##0d923f}{#1}");M("\\goldA","\\textcolor{##ffd0a9}{#1}");M("\\goldB","\\textcolor{##ffbb71}{#1}");M("\\goldC","\\textcolor{##ff9c39}{#1}");M("\\goldD","\\textcolor{##e07d10}{#1}");M("\\goldE","\\textcolor{##a75a05}{#1}");M("\\redA","\\textcolor{##fca9a9}{#1}");M("\\redB","\\textcolor{##ff8482}{#1}");M("\\redC","\\textcolor{##f9685d}{#1}");M("\\redD","\\textcolor{##e84d39}{#1}");M("\\redE","\\textcolor{##bc2612}{#1}");M("\\maroonA","\\textcolor{##ffbde0}{#1}");M("\\maroonB","\\textcolor{##ff92c6}{#1}");M("\\maroonC","\\textcolor{##ed5fa6}{#1}");M("\\maroonD","\\textcolor{##ca337c}{#1}");M("\\maroonE","\\textcolor{##9e034e}{#1}");M("\\purpleA","\\textcolor{##ddd7ff}{#1}");M("\\purpleB","\\textcolor{##c6b9fc}{#1}");M("\\purpleC","\\textcolor{##aa87ff}{#1}");M("\\purpleD","\\textcolor{##7854ab}{#1}");M("\\purpleE","\\textcolor{##543b78}{#1}");M("\\mintA","\\textcolor{##f5f9e8}{#1}");M("\\mintB","\\textcolor{##edf2df}{#1}");M("\\mintC","\\textcolor{##e0e5cc}{#1}");M("\\grayA","\\textcolor{##f6f7f7}{#1}");M("\\grayB","\\textcolor{##f0f1f2}{#1}");M("\\grayC","\\textcolor{##e3e5e6}{#1}");M("\\grayD","\\textcolor{##d6d8da}{#1}");M("\\grayE","\\textcolor{##babec2}{#1}");M("\\grayF","\\textcolor{##888d93}{#1}");M("\\grayG","\\textcolor{##626569}{#1}");M("\\grayH","\\textcolor{##3b3e40}{#1}");M("\\grayI","\\textcolor{##21242c}{#1}");M("\\kaBlue","\\textcolor{##314453}{#1}");M("\\kaGreen","\\textcolor{##71B307}{#1}");var id={"^":!0,_:!0,"\\limits":!0,"\\nolimits":!0};class Gp{constructor(e,t,i){this.settings=void 0,this.expansionCount=void 0,this.lexer=void 0,this.macros=void 0,this.stack=void 0,this.mode=void 0,this.settings=t,this.expansionCount=0,this.feed(e),this.macros=new kp(Hp,t.macros),this.mode=i,this.stack=[]}feed(e){this.lexer=new Yc(e,this.settings)}switchMode(e){this.mode=e}beginGroup(){this.macros.beginGroup()}endGroup(){this.macros.endGroup()}endGroups(){this.macros.endGroups()}future(){return this.stack.length===0&&this.pushToken(this.lexer.lex()),this.stack[this.stack.length-1]}popToken(){return this.future(),this.stack.pop()}pushToken(e){this.stack.push(e)}pushTokens(e){this.stack.push(...e)}scanArgument(e){var t,i,r;if(e){if(this.consumeSpaces(),this.future().text!=="[")return null;t=this.popToken(),{tokens:r,end:i}=this.consumeArg(["]"])}else({tokens:r,start:t,end:i}=this.consumeArg());return this.pushToken(new Ln("EOF",i.loc)),this.pushTokens(r),new Ln("",_n.range(t,i))}consumeSpaces(){for(;;){var e=this.future();if(e.text===" ")this.stack.pop();else break}}consumeArg(e){var t=[],i=e&&e.length>0;i||this.consumeSpaces();var r=this.future(),a,s=0,o=0;do{if(a=this.popToken(),t.push(a),a.text==="{")++s;else if(a.text==="}"){if(--s,s===-1)throw new oe("Extra }",a)}else if(a.text==="EOF")throw new oe("Unexpected end of input in a macro argument, expected '"+(e&&i?e[o]:"}")+"'",a);if(e&&i)if((s===0||s===1&&e[o]==="{")&&a.text===e[o]){if(++o,o===e.length){t.splice(-o,o);break}}else o=0}while(s!==0||i);return r.text==="{"&&t[t.length-1].text==="}"&&(t.pop(),t.shift()),t.reverse(),{tokens:t,start:r,end:a}}consumeArgs(e,t){if(t){if(t.length!==e+1)throw new oe("The length of delimiters doesn't match the number of args!");for(var i=t[0],r=0;r<i.length;r++){var a=this.popToken();if(i[r]!==a.text)throw new oe("Use of the macro doesn't match its definition",a)}}for(var s=[],o=0;o<e;o++)s.push(this.consumeArg(t&&t[o+1]).tokens);return s}countExpansion(e){if(this.expansionCount+=e,this.expansionCount>this.settings.maxExpand)throw new oe("Too many expansions: infinite loop or need to increase maxExpand setting")}expandOnce(e){var t=this.popToken(),i=t.text,r=t.noexpand?null:this._getExpansion(i);if(r==null||e&&r.unexpandable){if(e&&r==null&&i[0]==="\\"&&!this.isDefined(i))throw new oe("Undefined control sequence: "+i);return this.pushToken(t),!1}this.countExpansion(1);var a=r.tokens,s=this.consumeArgs(r.numArgs,r.delimiters);if(r.numArgs){a=a.slice();for(var o=a.length-1;o>=0;--o){var l=a[o];if(l.text==="#"){if(o===0)throw new oe("Incomplete placeholder at end of macro body",l);if(l=a[--o],l.text==="#")a.splice(o+1,1);else if(/^[1-9]$/.test(l.text))a.splice(o,2,...s[+l.text-1]);else throw new oe("Not a valid argument number",l)}}}return this.pushTokens(a),a.length}expandAfterFuture(){return this.expandOnce(),this.future()}expandNextToken(){for(;;)if(this.expandOnce()===!1){var e=this.stack.pop();return e.treatAsRelax&&(e.text="\\relax"),e}}expandMacro(e){return this.macros.has(e)?this.expandTokens([new Ln(e)]):void 0}expandTokens(e){var t=[],i=this.stack.length;for(this.pushTokens(e);this.stack.length>i;)if(this.expandOnce(!0)===!1){var r=this.stack.pop();r.treatAsRelax&&(r.noexpand=!1,r.treatAsRelax=!1),t.push(r)}return this.countExpansion(t.length),t}expandMacroAsText(e){var t=this.expandMacro(e);return t&&t.map(i=>i.text).join("")}_getExpansion(e){var t=this.macros.get(e);if(t==null)return t;if(e.length===1){var i=this.lexer.catcodes[e];if(i!=null&&i!==13)return}var r=typeof t=="function"?t(this):t;if(typeof r=="string"){var a=0;if(r.includes("#"))for(var s=r.replace(/##/g,"");s.includes("#"+(a+1));)++a;for(var o=new Yc(r,this.settings),l=[],c=o.lex();c.text!=="EOF";)l.push(c),c=o.lex();l.reverse();var u={tokens:l,numArgs:a};return u}return r}isDefined(e){return this.macros.has(e)||Vi.hasOwnProperty(e)||Ct.math.hasOwnProperty(e)||Ct.text.hasOwnProperty(e)||id.hasOwnProperty(e)}isExpandable(e){var t=this.macros.get(e);return t!=null?typeof t=="string"||typeof t=="function"||!t.unexpandable:Vi.hasOwnProperty(e)&&!Vi[e].primitive}}var Kc=/^[₊₋₌₍₎₀₁₂₃₄₅₆₇₈₉ₐₑₕᵢⱼₖₗₘₙₒₚᵣₛₜᵤᵥₓᵦᵧᵨᵩᵪ]/,Ja=Object.freeze({"₊":"+","₋":"-","₌":"=","₍":"(","₎":")","₀":"0","₁":"1","₂":"2","₃":"3","₄":"4","₅":"5","₆":"6","₇":"7","₈":"8","₉":"9","ₐ":"a","ₑ":"e","ₕ":"h","ᵢ":"i","ⱼ":"j","ₖ":"k","ₗ":"l","ₘ":"m","ₙ":"n","ₒ":"o","ₚ":"p","ᵣ":"r","ₛ":"s","ₜ":"t","ᵤ":"u","ᵥ":"v","ₓ":"x","ᵦ":"β","ᵧ":"γ","ᵨ":"ρ","ᵩ":"ϕ","ᵪ":"χ","⁺":"+","⁻":"-","⁼":"=","⁽":"(","⁾":")","⁰":"0","¹":"1","²":"2","³":"3","⁴":"4","⁵":"5","⁶":"6","⁷":"7","⁸":"8","⁹":"9","ᴬ":"A","ᴮ":"B","ᴰ":"D","ᴱ":"E","ᴳ":"G","ᴴ":"H","ᴵ":"I","ᴶ":"J","ᴷ":"K","ᴸ":"L","ᴹ":"M","ᴺ":"N","ᴼ":"O","ᴾ":"P","ᴿ":"R","ᵀ":"T","ᵁ":"U","ⱽ":"V","ᵂ":"W","ᵃ":"a","ᵇ":"b","ᶜ":"c","ᵈ":"d","ᵉ":"e","ᶠ":"f","ᵍ":"g",ʰ:"h","ⁱ":"i",ʲ:"j","ᵏ":"k",ˡ:"l","ᵐ":"m",ⁿ:"n","ᵒ":"o","ᵖ":"p",ʳ:"r",ˢ:"s","ᵗ":"t","ᵘ":"u","ᵛ":"v",ʷ:"w",ˣ:"x",ʸ:"y","ᶻ":"z","ᵝ":"β","ᵞ":"γ","ᵟ":"δ","ᵠ":"ϕ","ᵡ":"χ","ᶿ":"θ"}),Ro={"́":{text:"\\'",math:"\\acute"},"̀":{text:"\\`",math:"\\grave"},"̈":{text:'\\"',math:"\\ddot"},"̃":{text:"\\~",math:"\\tilde"},"̄":{text:"\\=",math:"\\bar"},"̆":{text:"\\u",math:"\\breve"},"̌":{text:"\\v",math:"\\check"},"̂":{text:"\\^",math:"\\hat"},"̇":{text:"\\.",math:"\\dot"},"̊":{text:"\\r",math:"\\mathring"},"̋":{text:"\\H"},"̧":{text:"\\c"}},Zc={á:"á",à:"à",ä:"ä",ǟ:"ǟ",ã:"ã",ā:"ā",ă:"ă",ắ:"ắ",ằ:"ằ",ẵ:"ẵ",ǎ:"ǎ",â:"â",ấ:"ấ",ầ:"ầ",ẫ:"ẫ",ȧ:"ȧ",ǡ:"ǡ",å:"å",ǻ:"ǻ",ḃ:"ḃ",ć:"ć",ḉ:"ḉ",č:"č",ĉ:"ĉ",ċ:"ċ",ç:"ç",ď:"ď",ḋ:"ḋ",ḑ:"ḑ",é:"é",è:"è",ë:"ë",ẽ:"ẽ",ē:"ē",ḗ:"ḗ",ḕ:"ḕ",ĕ:"ĕ",ḝ:"ḝ",ě:"ě",ê:"ê",ế:"ế",ề:"ề",ễ:"ễ",ė:"ė",ȩ:"ȩ",ḟ:"ḟ",ǵ:"ǵ",ḡ:"ḡ",ğ:"ğ",ǧ:"ǧ",ĝ:"ĝ",ġ:"ġ",ģ:"ģ",ḧ:"ḧ",ȟ:"ȟ",ĥ:"ĥ",ḣ:"ḣ",ḩ:"ḩ",í:"í",ì:"ì",ï:"ï",ḯ:"ḯ",ĩ:"ĩ",ī:"ī",ĭ:"ĭ",ǐ:"ǐ",î:"î",ǰ:"ǰ",ĵ:"ĵ",ḱ:"ḱ",ǩ:"ǩ",ķ:"ķ",ĺ:"ĺ",ľ:"ľ",ļ:"ļ",ḿ:"ḿ",ṁ:"ṁ",ń:"ń",ǹ:"ǹ",ñ:"ñ",ň:"ň",ṅ:"ṅ",ņ:"ņ",ó:"ó",ò:"ò",ö:"ö",ȫ:"ȫ",õ:"õ",ṍ:"ṍ",ṏ:"ṏ",ȭ:"ȭ",ō:"ō",ṓ:"ṓ",ṑ:"ṑ",ŏ:"ŏ",ǒ:"ǒ",ô:"ô",ố:"ố",ồ:"ồ",ỗ:"ỗ",ȯ:"ȯ",ȱ:"ȱ",ő:"ő",ṕ:"ṕ",ṗ:"ṗ",ŕ:"ŕ",ř:"ř",ṙ:"ṙ",ŗ:"ŗ",ś:"ś",ṥ:"ṥ",š:"š",ṧ:"ṧ",ŝ:"ŝ",ṡ:"ṡ",ş:"ş",ẗ:"ẗ",ť:"ť",ṫ:"ṫ",ţ:"ţ",ú:"ú",ù:"ù",ü:"ü",ǘ:"ǘ",ǜ:"ǜ",ǖ:"ǖ",ǚ:"ǚ",ũ:"ũ",ṹ:"ṹ",ū:"ū",ṻ:"ṻ",ŭ:"ŭ",ǔ:"ǔ",û:"û",ů:"ů",ű:"ű",ṽ:"ṽ",ẃ:"ẃ",ẁ:"ẁ",ẅ:"ẅ",ŵ:"ŵ",ẇ:"ẇ",ẘ:"ẘ",ẍ:"ẍ",ẋ:"ẋ",ý:"ý",ỳ:"ỳ",ÿ:"ÿ",ỹ:"ỹ",ȳ:"ȳ",ŷ:"ŷ",ẏ:"ẏ",ẙ:"ẙ",ź:"ź",ž:"ž",ẑ:"ẑ",ż:"ż",Á:"Á",À:"À",Ä:"Ä",Ǟ:"Ǟ",Ã:"Ã",Ā:"Ā",Ă:"Ă",Ắ:"Ắ",Ằ:"Ằ",Ẵ:"Ẵ",Ǎ:"Ǎ",Â:"Â",Ấ:"Ấ",Ầ:"Ầ",Ẫ:"Ẫ",Ȧ:"Ȧ",Ǡ:"Ǡ",Å:"Å",Ǻ:"Ǻ",Ḃ:"Ḃ",Ć:"Ć",Ḉ:"Ḉ",Č:"Č",Ĉ:"Ĉ",Ċ:"Ċ",Ç:"Ç",Ď:"Ď",Ḋ:"Ḋ",Ḑ:"Ḑ",É:"É",È:"È",Ë:"Ë",Ẽ:"Ẽ",Ē:"Ē",Ḗ:"Ḗ",Ḕ:"Ḕ",Ĕ:"Ĕ",Ḝ:"Ḝ",Ě:"Ě",Ê:"Ê",Ế:"Ế",Ề:"Ề",Ễ:"Ễ",Ė:"Ė",Ȩ:"Ȩ",Ḟ:"Ḟ",Ǵ:"Ǵ",Ḡ:"Ḡ",Ğ:"Ğ",Ǧ:"Ǧ",Ĝ:"Ĝ",Ġ:"Ġ",Ģ:"Ģ",Ḧ:"Ḧ",Ȟ:"Ȟ",Ĥ:"Ĥ",Ḣ:"Ḣ",Ḩ:"Ḩ",Í:"Í",Ì:"Ì",Ï:"Ï",Ḯ:"Ḯ",Ĩ:"Ĩ",Ī:"Ī",Ĭ:"Ĭ",Ǐ:"Ǐ",Î:"Î",İ:"İ",Ĵ:"Ĵ",Ḱ:"Ḱ",Ǩ:"Ǩ",Ķ:"Ķ",Ĺ:"Ĺ",Ľ:"Ľ",Ļ:"Ļ",Ḿ:"Ḿ",Ṁ:"Ṁ",Ń:"Ń",Ǹ:"Ǹ",Ñ:"Ñ",Ň:"Ň",Ṅ:"Ṅ",Ņ:"Ņ",Ó:"Ó",Ò:"Ò",Ö:"Ö",Ȫ:"Ȫ",Õ:"Õ",Ṍ:"Ṍ",Ṏ:"Ṏ",Ȭ:"Ȭ",Ō:"Ō",Ṓ:"Ṓ",Ṑ:"Ṑ",Ŏ:"Ŏ",Ǒ:"Ǒ",Ô:"Ô",Ố:"Ố",Ồ:"Ồ",Ỗ:"Ỗ",Ȯ:"Ȯ",Ȱ:"Ȱ",Ő:"Ő",Ṕ:"Ṕ",Ṗ:"Ṗ",Ŕ:"Ŕ",Ř:"Ř",Ṙ:"Ṙ",Ŗ:"Ŗ",Ś:"Ś",Ṥ:"Ṥ",Š:"Š",Ṧ:"Ṧ",Ŝ:"Ŝ",Ṡ:"Ṡ",Ş:"Ş",Ť:"Ť",Ṫ:"Ṫ",Ţ:"Ţ",Ú:"Ú",Ù:"Ù",Ü:"Ü",Ǘ:"Ǘ",Ǜ:"Ǜ",Ǖ:"Ǖ",Ǚ:"Ǚ",Ũ:"Ũ",Ṹ:"Ṹ",Ū:"Ū",Ṻ:"Ṻ",Ŭ:"Ŭ",Ǔ:"Ǔ",Û:"Û",Ů:"Ů",Ű:"Ű",Ṽ:"Ṽ",Ẃ:"Ẃ",Ẁ:"Ẁ",Ẅ:"Ẅ",Ŵ:"Ŵ",Ẇ:"Ẇ",Ẍ:"Ẍ",Ẋ:"Ẋ",Ý:"Ý",Ỳ:"Ỳ",Ÿ:"Ÿ",Ỹ:"Ỹ",Ȳ:"Ȳ",Ŷ:"Ŷ",Ẏ:"Ẏ",Ź:"Ź",Ž:"Ž",Ẑ:"Ẑ",Ż:"Ż",ά:"ά",ὰ:"ὰ",ᾱ:"ᾱ",ᾰ:"ᾰ",έ:"έ",ὲ:"ὲ",ή:"ή",ὴ:"ὴ",ί:"ί",ὶ:"ὶ",ϊ:"ϊ",ΐ:"ΐ",ῒ:"ῒ",ῑ:"ῑ",ῐ:"ῐ",ό:"ό",ὸ:"ὸ",ύ:"ύ",ὺ:"ὺ",ϋ:"ϋ",ΰ:"ΰ",ῢ:"ῢ",ῡ:"ῡ",ῠ:"ῠ",ώ:"ώ",ὼ:"ὼ",Ύ:"Ύ",Ὺ:"Ὺ",Ϋ:"Ϋ",Ῡ:"Ῡ",Ῠ:"Ῠ",Ώ:"Ώ",Ὼ:"Ὼ"};class io{constructor(e,t){this.mode=void 0,this.gullet=void 0,this.settings=void 0,this.leftrightDepth=void 0,this.nextToken=void 0,this.mode="math",this.gullet=new Gp(e,t,this.mode),this.settings=t,this.leftrightDepth=0,this.nextToken=null}expect(e,t){if(t===void 0&&(t=!0),this.fetch().text!==e)throw new oe("Expected '"+e+"', got '"+this.fetch().text+"'",this.fetch());t&&this.consume()}consume(){this.nextToken=null}fetch(){return this.nextToken==null&&(this.nextToken=this.gullet.expandNextToken()),this.nextToken}switchMode(e){this.mode=e,this.gullet.switchMode(e)}parse(){this.settings.globalGroup||this.gullet.beginGroup(),this.settings.colorIsTextColor&&this.gullet.macros.set("\\color","\\textcolor");try{var e=this.parseExpression(!1);return this.expect("EOF"),this.settings.globalGroup||this.gullet.endGroup(),e}finally{this.gullet.endGroups()}}subparse(e){var t=this.nextToken;this.consume(),this.gullet.pushToken(new Ln("}")),this.gullet.pushTokens(e);var i=this.parseExpression(!1);return this.expect("}"),this.nextToken=t,i}parseExpression(e,t){for(var i=[];;){this.mode==="math"&&this.consumeSpaces();var r=this.fetch();if(io.endOfExpression.has(r.text)||t&&r.text===t||e&&Vi[r.text]&&Vi[r.text].infix)break;var a=this.parseAtom(t);if(a){if(a.type==="internal")continue}else break;i.push(a)}return this.mode==="text"&&this.formLigatures(i),this.handleInfixNodes(i)}handleInfixNodes(e){for(var t=-1,i,r=0;r<e.length;r++){var a=e[r];if(a.type==="infix"){if(t!==-1)throw new oe("only one infix operator per group",a.token);t=r,i=a.replaceWith}}if(t!==-1&&i){var s,o,l=e.slice(0,t),c=e.slice(t+1);l.length===1&&l[0].type==="ordgroup"?s=l[0]:s={type:"ordgroup",mode:this.mode,body:l},c.length===1&&c[0].type==="ordgroup"?o=c[0]:o={type:"ordgroup",mode:this.mode,body:c};var u;return i==="\\\\abovefrac"?u=this.callFunction(i,[s,e[t],o],[]):u=this.callFunction(i,[s,o],[]),[u]}else return e}handleSupSubscript(e){var t=this.fetch(),i=t.text;this.consume(),this.consumeSpaces();var r;do{var a;r=this.parseGroup(e)}while(((a=r)==null?void 0:a.type)==="internal");if(!r)throw new oe("Expected group after '"+i+"'",t);return r}formatUnsupportedCmd(e){for(var t=[],i=0;i<e.length;i++)t.push({type:"textord",mode:"text",text:e[i]});var r={type:"text",mode:this.mode,body:t},a={type:"color",mode:this.mode,color:this.settings.errorColor,body:[r]};return a}parseAtom(e){var t=this.parseGroup("atom",e);if(t?.type==="internal"||this.mode==="text")return t;for(var i,r;;){this.consumeSpaces();var a=this.fetch();if(a.text==="\\limits"||a.text==="\\nolimits"){if(t&&t.type==="op"){var s=a.text==="\\limits";t.limits=s,t.alwaysHandleSupSub=!0}else if(t&&t.type==="operatorname")t.alwaysHandleSupSub&&(t.limits=a.text==="\\limits");else throw new oe("Limit controls must follow a math operator",a);this.consume()}else if(a.text==="^"){if(i)throw new oe("Double superscript",a);i=this.handleSupSubscript("superscript")}else if(a.text==="_"){if(r)throw new oe("Double subscript",a);r=this.handleSupSubscript("subscript")}else if(a.text==="'"){if(i)throw new oe("Double superscript",a);var o={type:"textord",mode:this.mode,text:"\\prime"},l=[o];for(this.consume();this.fetch().text==="'";)l.push(o),this.consume();this.fetch().text==="^"&&l.push(this.handleSupSubscript("superscript")),i={type:"ordgroup",mode:this.mode,body:l}}else if(Ja[a.text]){var c=Kc.test(a.text),u=[];for(u.push(new Ln(Ja[a.text])),this.consume();;){var d=this.fetch().text;if(!Ja[d]||Kc.test(d)!==c)break;u.unshift(new Ln(Ja[d])),this.consume()}var f=this.subparse(u);c?r={type:"ordgroup",mode:"math",body:f}:i={type:"ordgroup",mode:"math",body:f}}else break}return i||r?{type:"supsub",mode:this.mode,base:t,sup:i,sub:r}:t}parseFunction(e,t){var i=this.fetch(),r=i.text,a=Vi[r];if(!a)return null;if(this.consume(),t&&t!=="atom"&&!a.allowedInArgument)throw new oe("Got function '"+r+"' with no arguments"+(t?" as "+t:""),i);if(this.mode==="text"&&!a.allowedInText)throw new oe("Can't use function '"+r+"' in text mode",i);if(this.mode==="math"&&a.allowedInMath===!1)throw new oe("Can't use function '"+r+"' in math mode",i);var{args:s,optArgs:o}=this.parseArguments(r,a);return this.callFunction(r,s,o,i,e)}callFunction(e,t,i,r,a){var s={funcName:e,parser:this,token:r,breakOnTokenText:a},o=Vi[e];if(o&&o.handler)return o.handler(s,t,i);throw new oe("No function handler for "+e)}parseArguments(e,t){var i=t.numArgs+t.numOptionalArgs;if(i===0)return{args:[],optArgs:[]};for(var r=[],a=[],s=0;s<i;s++){var o=t.argTypes&&t.argTypes[s],l=s<t.numOptionalArgs;("primitive"in t&&t.primitive&&o==null||t.type==="sqrt"&&s===1&&a[0]==null)&&(o="primitive");var c=this.parseGroupOfType("argument to '"+e+"'",o,l);if(l)a.push(c);else if(c!=null)r.push(c);else throw new oe("Null argument, please report this as a bug")}return{args:r,optArgs:a}}parseGroupOfType(e,t,i){switch(t){case"color":return this.parseColorGroup(i);case"size":return this.parseSizeGroup(i);case"url":return this.parseUrlGroup(i);case"math":case"text":return this.parseArgumentGroup(i,t);case"hbox":{var r=this.parseArgumentGroup(i,"text");return r!=null?{type:"styling",mode:r.mode,body:[r],style:"text",resetFont:!0}:null}case"raw":{var a=this.parseStringGroup("raw",i);return a!=null?{type:"raw",mode:"text",string:a.text}:null}case"primitive":{if(i)throw new oe("A primitive argument cannot be optional");var s=this.parseGroup(e);if(s==null)throw new oe("Expected group as "+e,this.fetch());return s}case"original":case null:case void 0:return this.parseArgumentGroup(i);default:throw new oe("Unknown group type as "+e,this.fetch())}}consumeSpaces(){for(;this.fetch().text===" ";)this.consume()}parseStringGroup(e,t){var i=this.gullet.scanArgument(t);if(i==null)return null;for(var r="",a;(a=this.fetch()).text!=="EOF";)r+=a.text,this.consume();return this.consume(),i.text=r,i}parseRegexGroup(e,t){for(var i=this.fetch(),r=i,a="",s;(s=this.fetch()).text!=="EOF"&&e.test(a+s.text);)r=s,a+=r.text,this.consume();if(a==="")throw new oe("Invalid "+t+": '"+i.text+"'",i);return i.range(r,a)}parseColorGroup(e){var t=this.parseStringGroup("color",e);if(t==null)return null;var i=/^(#[a-f0-9]{3,4}|#[a-f0-9]{6}|#[a-f0-9]{8}|[a-f0-9]{6}|[a-z]+)$/i.exec(t.text);if(!i)throw new oe("Invalid color: '"+t.text+"'",t);var r=i[0];return/^[0-9a-f]{6}$/i.test(r)&&(r="#"+r),{type:"color-token",mode:this.mode,color:r}}parseSizeGroup(e){var t,i=!1;if(this.gullet.consumeSpaces(),!e&&this.gullet.future().text!=="{"?t=this.parseRegexGroup(/^[-+]? *(?:$|\d+|\d+\.\d*|\.\d*) *[a-z]{0,2} *$/,"size"):t=this.parseStringGroup("size",e),!t)return null;!e&&t.text.length===0&&(t.text="0pt",i=!0);var r=/([-+]?) *(\d+(?:\.\d*)?|\.\d+) *([a-z]{2})/.exec(t.text);if(!r)throw new oe("Invalid size: '"+t.text+"'",t);var a={number:+(r[1]+r[2]),unit:r[3]};if(!hh(a))throw new oe("Invalid unit: '"+a.unit+"'",t);return{type:"size",mode:this.mode,value:a,isBlank:i}}parseUrlGroup(e){this.gullet.lexer.setCatcode("%",13),this.gullet.lexer.setCatcode("~",12);var t=this.parseStringGroup("url",e);if(this.gullet.lexer.setCatcode("%",14),this.gullet.lexer.setCatcode("~",13),t==null)return null;var i=t.text.replace(/\\([#$%&~_^{}])/g,"$1");return{type:"url",mode:this.mode,url:i}}parseArgumentGroup(e,t){var i=this.gullet.scanArgument(e);if(i==null)return null;var r=this.mode;t&&this.switchMode(t),this.gullet.beginGroup();var a=this.parseExpression(!1,"EOF");this.expect("EOF"),this.gullet.endGroup();var s={type:"ordgroup",mode:this.mode,loc:i.loc,body:a};return t&&this.switchMode(r),s}parseGroup(e,t){var i=this.fetch(),r=i.text,a;if(r==="{"||r==="\\begingroup"){this.consume();var s=r==="{"?"}":"\\endgroup";this.gullet.beginGroup();var o=this.parseExpression(!1,s),l=this.fetch();this.expect(s),this.gullet.endGroup(),a={type:"ordgroup",mode:this.mode,loc:_n.range(i,l),body:o,semisimple:r==="\\begingroup"||void 0}}else if(a=this.parseFunction(t,e)||this.parseSymbol(),a==null&&r[0]==="\\"&&!id.hasOwnProperty(r)){if(this.settings.throwOnError)throw new oe("Undefined control sequence: "+r,i);a=this.formatUnsupportedCmd(r),this.consume()}return a}formLigatures(e){for(var t=e.length-1,i=0;i<t;++i){var r=e[i];if(r.type==="textord"){var a=r.text,s=e[i+1];if(!(!s||s.type!=="textord")){if(a==="-"&&s.text==="-"){var o=e[i+2];i+1<t&&o&&o.type==="textord"&&o.text==="-"?(e.splice(i,3,{type:"textord",mode:"text",loc:_n.range(r,o),text:"---"}),t-=2):(e.splice(i,2,{type:"textord",mode:"text",loc:_n.range(r,s),text:"--"}),t-=1)}(a==="'"||a==="`")&&s.text===a&&(e.splice(i,2,{type:"textord",mode:"text",loc:_n.range(r,s),text:a+a}),t-=1)}}}}parseSymbol(){var e=this.fetch(),t=e.text;if(/^\\verb[^a-zA-Z]/.test(t)){this.consume();var i=t.slice(5),r=i.charAt(0)==="*";if(r&&(i=i.slice(1)),i.length<2||i.charAt(0)!==i.slice(-1))throw new oe(`\\verb assertion failed --
                    please report what input caused this bug`);return i=i.slice(1,-1),{type:"verb",mode:"text",body:i,star:r}}Zc.hasOwnProperty(t[0])&&!Ct[this.mode][t[0]]&&(this.settings.strict&&this.mode==="math"&&this.settings.reportNonstrict("unicodeTextInMathMode",'Accented Unicode text character "'+t[0]+'" used in math mode',e),t=Zc[t[0]]+t.slice(1));var a=zp.exec(t);a&&(t=t.substring(0,a.index),t==="i"?t="ı":t==="j"&&(t="ȷ"));var s;if(Ct[this.mode][t]){this.settings.strict&&this.mode==="math"&&v0.includes(t)&&this.settings.reportNonstrict("unicodeTextInMathMode",'Latin-1/Unicode text character "'+t[0]+'" used in math mode',e);var o=Ct[this.mode][t].group,l=_n.range(e),c;ap(o)?c={type:"atom",mode:this.mode,family:o,loc:l,text:t}:c={type:o,mode:this.mode,loc:l,text:t},s=c}else if(t.charCodeAt(0)>=128)this.settings.strict&&(uh(t.charCodeAt(0))?this.mode==="math"&&this.settings.reportNonstrict("unicodeTextInMathMode",'Unicode text character "'+t[0]+'" used in math mode',e):this.settings.reportNonstrict("unknownSymbol",'Unrecognized Unicode character "'+t[0]+'"'+(" ("+t.charCodeAt(0)+")"),e)),s={type:"textord",mode:"text",loc:_n.range(e),text:t};else return null;if(this.consume(),a)for(var u=0;u<a[0].length;u++){var d=a[0][u];if(!Ro[d])throw new oe("Unknown accent ' "+d+"'",e);var f=Ro[d][this.mode]||Ro[d].text;if(!f)throw new oe("Accent "+d+" unsupported in "+this.mode+" mode",e);s={type:"accent",mode:this.mode,loc:_n.range(e),label:f,isStretchy:!1,isShifty:!0,base:s}}return s}}io.endOfExpression=new Set(["}","\\endgroup","\\end","\\right","&"]);var Bl=function(e,t){if(!(typeof e=="string"||e instanceof String))throw new TypeError("KaTeX can only parse string typed expression");var i=new io(e,t);delete i.gullet.macros.current["\\df@tag"];var r=i.parse();if(delete i.gullet.macros.current["\\current@color"],delete i.gullet.macros.current["\\color"],i.gullet.macros.get("\\df@tag")){if(!t.displayMode)throw new oe("\\tag works only in display equations");r=[{type:"tag",mode:"text",body:r,tag:i.subparse([new Ln("\\df@tag")])}]}return r},rd=function(e,t,i){t.textContent="";var r=kl(e,i).toNode();t.appendChild(r)};typeof document<"u"&&document.compatMode!=="CSS1Compat"&&(typeof console<"u"&&console.warn("Warning: KaTeX doesn't work in quirks mode. Make sure your website has a suitable doctype."),rd=function(){throw new oe("KaTeX doesn't work in quirks mode.")});var Wp=function(e,t){var i=kl(e,t).toMarkup();return i},qp=function(e,t){var i=new El(t);return Bl(e,i)},ad=function(e,t,i){if(i.throwOnError||!(e instanceof oe))throw e;var r=ae(["katex-error"],[new Un(t)]);return r.setAttribute("title",e.toString()),r.setAttribute("style","color:"+i.errorColor),r},kl=function(e,t){var i=new El(t);try{var r=Bl(e,i);return Zf(r,e,i)}catch(a){return ad(a,e,i)}},Xp=function(e,t){var i=new El(t);try{var r=Bl(e,i);return Jf(r,e,i)}catch(a){return ad(a,e,i)}},Yp="0.16.47",$p={Span:oa,Anchor:qs,SymbolNode:Un,SvgNode:Ai,PathNode:Yi,LineNode:g0},jp={version:Yp,render:rd,renderToString:Wp,ParseError:oe,SETTINGS_SCHEMA:p0,__parse:qp,__renderToDomTree:kl,__renderToHTMLTree:Xp,__setFontMetrics:Lf,__defineSymbol:h,__defineFunction:Me,__defineMacro:M,__domTree:$p};const Hl="181",Vr={ROTATE:0,DOLLY:1,PAN:2},Br={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Kp=0,Jc=1,Zp=2,sd=1,Jp=2,bi=3,Ki=0,Mn=1,yn=2,wi=0,Gr=1,Qc=2,eu=3,tu=4,Qp=5,hr=100,em=101,tm=102,nm=103,im=104,rm=200,am=201,sm=202,om=203,I0=204,U0=205,lm=206,cm=207,um=208,hm=209,dm=210,fm=211,pm=212,mm=213,xm=214,N0=0,F0=1,O0=2,Kr=3,z0=4,B0=5,k0=6,H0=7,od=0,gm=1,vm=2,Wi=0,bm=1,_m=2,ym=3,Mm=4,Sm=5,wm=6,Em=7,ld=300,Zr=301,Jr=302,V0=303,G0=304,ro=306,W0=1e3,yi=1001,q0=1002,In=1003,Tm=1004,Qa=1005,Hn=1006,Do=1007,pr=1008,si=1009,cd=1010,ud=1011,Ra=1012,Vl=1013,xr=1014,Mi=1015,ua=1016,Gl=1017,Wl=1018,Da=1020,hd=35902,dd=35899,fd=1021,pd=1022,Zn=1023,Pa=1026,La=1027,md=1028,ql=1029,Xl=1030,Yl=1031,$l=1033,As=33776,Cs=33777,Rs=33778,Ds=33779,X0=35840,Y0=35841,$0=35842,j0=35843,K0=36196,Z0=37492,J0=37496,Q0=37808,el=37809,tl=37810,nl=37811,il=37812,rl=37813,al=37814,sl=37815,ol=37816,ll=37817,cl=37818,ul=37819,hl=37820,dl=37821,fl=36492,pl=36494,ml=36495,xl=36283,gl=36284,vl=36285,bl=36286,Am=3200,Cm=3201,xd=0,Rm=1,Hi="",Dn="srgb",Qr="srgb-linear",zs="linear",Mt="srgb",wr=7680,nu=519,Dm=512,Pm=513,Lm=514,gd=515,Im=516,Um=517,Nm=518,Fm=519,iu=35044,ru="300 es",ri=2e3,Bs=2001;function vd(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function ks(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Om(){const n=ks("canvas");return n.style.display="block",n}const au={};function su(...n){const e="THREE."+n.shift();console.log(e,...n)}function $e(...n){const e="THREE."+n.shift();console.warn(e,...n)}function kt(...n){const e="THREE."+n.shift();console.error(e,...n)}function Ia(...n){const e=n.join(" ");e in au||(au[e]=!0,$e(...n))}function zm(n,e,t){return new Promise(function(i,r){function a(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(a,t);break;default:i()}}setTimeout(a,t)})}class yr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const a=r.indexOf(t);a!==-1&&r.splice(a,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let a=0,s=r.length;a<s;a++)r[a].call(this,e);e.target=null}}}const nn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ps=Math.PI/180,_l=180/Math.PI;function Ba(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(nn[n&255]+nn[n>>8&255]+nn[n>>16&255]+nn[n>>24&255]+"-"+nn[e&255]+nn[e>>8&255]+"-"+nn[e>>16&15|64]+nn[e>>24&255]+"-"+nn[t&63|128]+nn[t>>8&255]+"-"+nn[t>>16&255]+nn[t>>24&255]+nn[i&255]+nn[i>>8&255]+nn[i>>16&255]+nn[i>>24&255]).toLowerCase()}function lt(n,e,t){return Math.max(e,Math.min(t,n))}function Bm(n,e){return(n%e+e)%e}function Po(n,e,t){return(1-t)*n+t*e}function pa(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function vn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const km={DEG2RAD:Ps};class je{constructor(e=0,t=0){je.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=lt(this.x,e.x,t.x),this.y=lt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=lt(this.x,e,t),this.y=lt(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(lt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(lt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),a=this.x-e.x,s=this.y-e.y;return this.x=a*i-s*r+e.x,this.y=a*r+s*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class gr{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,a,s,o){let l=i[r+0],c=i[r+1],u=i[r+2],d=i[r+3],f=a[s+0],m=a[s+1],v=a[s+2],b=a[s+3];if(o<=0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d;return}if(o>=1){e[t+0]=f,e[t+1]=m,e[t+2]=v,e[t+3]=b;return}if(d!==b||l!==f||c!==m||u!==v){let g=l*f+c*m+u*v+d*b;g<0&&(f=-f,m=-m,v=-v,b=-b,g=-g);let p=1-o;if(g<.9995){const T=Math.acos(g),A=Math.sin(T);p=Math.sin(p*T)/A,o=Math.sin(o*T)/A,l=l*p+f*o,c=c*p+m*o,u=u*p+v*o,d=d*p+b*o}else{l=l*p+f*o,c=c*p+m*o,u=u*p+v*o,d=d*p+b*o;const T=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=T,c*=T,u*=T,d*=T}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,r,a,s){const o=i[r],l=i[r+1],c=i[r+2],u=i[r+3],d=a[s],f=a[s+1],m=a[s+2],v=a[s+3];return e[t]=o*v+u*d+l*m-c*f,e[t+1]=l*v+u*f+c*d-o*m,e[t+2]=c*v+u*m+o*f-l*d,e[t+3]=u*v-o*d-l*f-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,a=e._z,s=e._order,o=Math.cos,l=Math.sin,c=o(i/2),u=o(r/2),d=o(a/2),f=l(i/2),m=l(r/2),v=l(a/2);switch(s){case"XYZ":this._x=f*u*d+c*m*v,this._y=c*m*d-f*u*v,this._z=c*u*v+f*m*d,this._w=c*u*d-f*m*v;break;case"YXZ":this._x=f*u*d+c*m*v,this._y=c*m*d-f*u*v,this._z=c*u*v-f*m*d,this._w=c*u*d+f*m*v;break;case"ZXY":this._x=f*u*d-c*m*v,this._y=c*m*d+f*u*v,this._z=c*u*v+f*m*d,this._w=c*u*d-f*m*v;break;case"ZYX":this._x=f*u*d-c*m*v,this._y=c*m*d+f*u*v,this._z=c*u*v-f*m*d,this._w=c*u*d+f*m*v;break;case"YZX":this._x=f*u*d+c*m*v,this._y=c*m*d+f*u*v,this._z=c*u*v-f*m*d,this._w=c*u*d-f*m*v;break;case"XZY":this._x=f*u*d-c*m*v,this._y=c*m*d-f*u*v,this._z=c*u*v+f*m*d,this._w=c*u*d+f*m*v;break;default:$e("Quaternion: .setFromEuler() encountered an unknown order: "+s)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],a=t[8],s=t[1],o=t[5],l=t[9],c=t[2],u=t[6],d=t[10],f=i+o+d;if(f>0){const m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(u-l)*m,this._y=(a-c)*m,this._z=(s-r)*m}else if(i>o&&i>d){const m=2*Math.sqrt(1+i-o-d);this._w=(u-l)/m,this._x=.25*m,this._y=(r+s)/m,this._z=(a+c)/m}else if(o>d){const m=2*Math.sqrt(1+o-i-d);this._w=(a-c)/m,this._x=(r+s)/m,this._y=.25*m,this._z=(l+u)/m}else{const m=2*Math.sqrt(1+d-i-o);this._w=(s-r)/m,this._x=(a+c)/m,this._y=(l+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(lt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,a=e._z,s=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+s*o+r*c-a*l,this._y=r*u+s*l+a*o-i*c,this._z=a*u+s*c+i*l-r*o,this._w=s*u-i*o-r*l-a*c,this._onChangeCallback(),this}slerp(e,t){if(t<=0)return this;if(t>=1)return this.copy(e);let i=e._x,r=e._y,a=e._z,s=e._w,o=this.dot(e);o<0&&(i=-i,r=-r,a=-a,s=-s,o=-o);let l=1-t;if(o<.9995){const c=Math.acos(o),u=Math.sin(c);l=Math.sin(l*c)/u,t=Math.sin(t*c)/u,this._x=this._x*l+i*t,this._y=this._y*l+r*t,this._z=this._z*l+a*t,this._w=this._w*l+s*t,this._onChangeCallback()}else this._x=this._x*l+i*t,this._y=this._y*l+r*t,this._z=this._z*l+a*t,this._w=this._w*l+s*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),a=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),a*Math.sin(t),a*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class G{constructor(e=0,t=0,i=0){G.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(ou.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ou.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,a=e.elements;return this.x=a[0]*t+a[3]*i+a[6]*r,this.y=a[1]*t+a[4]*i+a[7]*r,this.z=a[2]*t+a[5]*i+a[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,a=e.elements,s=1/(a[3]*t+a[7]*i+a[11]*r+a[15]);return this.x=(a[0]*t+a[4]*i+a[8]*r+a[12])*s,this.y=(a[1]*t+a[5]*i+a[9]*r+a[13])*s,this.z=(a[2]*t+a[6]*i+a[10]*r+a[14])*s,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,a=e.x,s=e.y,o=e.z,l=e.w,c=2*(s*r-o*i),u=2*(o*t-a*r),d=2*(a*i-s*t);return this.x=t+l*c+s*d-o*u,this.y=i+l*u+o*c-a*d,this.z=r+l*d+a*u-s*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*r,this.y=a[1]*t+a[5]*i+a[9]*r,this.z=a[2]*t+a[6]*i+a[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=lt(this.x,e.x,t.x),this.y=lt(this.y,e.y,t.y),this.z=lt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=lt(this.x,e,t),this.y=lt(this.y,e,t),this.z=lt(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(lt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,a=e.z,s=t.x,o=t.y,l=t.z;return this.x=r*l-a*o,this.y=a*s-i*l,this.z=i*o-r*s,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Lo.copy(this).projectOnVector(e),this.sub(Lo)}reflect(e){return this.sub(Lo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(lt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Lo=new G,ou=new gr;class Qe{constructor(e,t,i,r,a,s,o,l,c){Qe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,a,s,o,l,c)}set(e,t,i,r,a,s,o,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=o,u[3]=t,u[4]=a,u[5]=l,u[6]=i,u[7]=s,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,a=this.elements,s=i[0],o=i[3],l=i[6],c=i[1],u=i[4],d=i[7],f=i[2],m=i[5],v=i[8],b=r[0],g=r[3],p=r[6],T=r[1],A=r[4],D=r[7],I=r[2],C=r[5],U=r[8];return a[0]=s*b+o*T+l*I,a[3]=s*g+o*A+l*C,a[6]=s*p+o*D+l*U,a[1]=c*b+u*T+d*I,a[4]=c*g+u*A+d*C,a[7]=c*p+u*D+d*U,a[2]=f*b+m*T+v*I,a[5]=f*g+m*A+v*C,a[8]=f*p+m*D+v*U,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],a=e[3],s=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*s*u-t*o*c-i*a*u+i*o*l+r*a*c-r*s*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],a=e[3],s=e[4],o=e[5],l=e[6],c=e[7],u=e[8],d=u*s-o*c,f=o*l-u*a,m=c*a-s*l,v=t*d+i*f+r*m;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const b=1/v;return e[0]=d*b,e[1]=(r*c-u*i)*b,e[2]=(o*i-r*s)*b,e[3]=f*b,e[4]=(u*t-r*l)*b,e[5]=(r*a-o*t)*b,e[6]=m*b,e[7]=(i*l-c*t)*b,e[8]=(s*t-i*a)*b,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,a,s,o){const l=Math.cos(a),c=Math.sin(a);return this.set(i*l,i*c,-i*(l*s+c*o)+s+e,-r*c,r*l,-r*(-c*s+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Io.makeScale(e,t)),this}rotate(e){return this.premultiply(Io.makeRotation(-e)),this}translate(e,t){return this.premultiply(Io.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Io=new Qe,lu=new Qe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),cu=new Qe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Hm(){const n={enabled:!0,workingColorSpace:Qr,spaces:{},convert:function(r,a,s){return this.enabled===!1||a===s||!a||!s||(this.spaces[a].transfer===Mt&&(r.r=Ei(r.r),r.g=Ei(r.g),r.b=Ei(r.b)),this.spaces[a].primaries!==this.spaces[s].primaries&&(r.applyMatrix3(this.spaces[a].toXYZ),r.applyMatrix3(this.spaces[s].fromXYZ)),this.spaces[s].transfer===Mt&&(r.r=Wr(r.r),r.g=Wr(r.g),r.b=Wr(r.b))),r},workingToColorSpace:function(r,a){return this.convert(r,this.workingColorSpace,a)},colorSpaceToWorking:function(r,a){return this.convert(r,a,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Hi?zs:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,a=this.workingColorSpace){return r.fromArray(this.spaces[a].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,a,s){return r.copy(this.spaces[a].toXYZ).multiply(this.spaces[s].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,a){return Ia("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(r,a)},toWorkingColorSpace:function(r,a){return Ia("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(r,a)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Qr]:{primaries:e,whitePoint:i,transfer:zs,toXYZ:lu,fromXYZ:cu,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Dn},outputColorSpaceConfig:{drawingBufferColorSpace:Dn}},[Dn]:{primaries:e,whitePoint:i,transfer:Mt,toXYZ:lu,fromXYZ:cu,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Dn}}}),n}const dt=Hm();function Ei(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Wr(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Er;class Vm{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Er===void 0&&(Er=ks("canvas")),Er.width=e.width,Er.height=e.height;const r=Er.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=Er}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ks("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),a=r.data;for(let s=0;s<a.length;s++)a[s]=Ei(a[s]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Ei(t[i]/255)*255):t[i]=Ei(t[i]);return{data:t,width:e.width,height:e.height}}else return $e("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Gm=0;class jl{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Gm++}),this.uuid=Ba(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let a;if(Array.isArray(r)){a=[];for(let s=0,o=r.length;s<o;s++)r[s].isDataTexture?a.push(Uo(r[s].image)):a.push(Uo(r[s]))}else a=Uo(r);i.url=a}return t||(e.images[this.uuid]=i),i}}function Uo(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Vm.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:($e("Texture: Unable to serialize Texture."),{})}let Wm=0;const No=new G;class pn extends yr{constructor(e=pn.DEFAULT_IMAGE,t=pn.DEFAULT_MAPPING,i=yi,r=yi,a=Hn,s=pr,o=Zn,l=si,c=pn.DEFAULT_ANISOTROPY,u=Hi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Wm++}),this.uuid=Ba(),this.name="",this.source=new jl(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=a,this.minFilter=s,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new je(0,0),this.repeat=new je(1,1),this.center=new je(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Qe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(No).x}get height(){return this.source.getSize(No).y}get depth(){return this.source.getSize(No).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){$e(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){$e(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ld)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case W0:e.x=e.x-Math.floor(e.x);break;case yi:e.x=e.x<0?0:1;break;case q0:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case W0:e.y=e.y-Math.floor(e.y);break;case yi:e.y=e.y<0?0:1;break;case q0:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}pn.DEFAULT_IMAGE=null;pn.DEFAULT_MAPPING=ld;pn.DEFAULT_ANISOTROPY=1;class zt{constructor(e=0,t=0,i=0,r=1){zt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,a=this.w,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r+s[12]*a,this.y=s[1]*t+s[5]*i+s[9]*r+s[13]*a,this.z=s[2]*t+s[6]*i+s[10]*r+s[14]*a,this.w=s[3]*t+s[7]*i+s[11]*r+s[15]*a,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,a;const l=e.elements,c=l[0],u=l[4],d=l[8],f=l[1],m=l[5],v=l[9],b=l[2],g=l[6],p=l[10];if(Math.abs(u-f)<.01&&Math.abs(d-b)<.01&&Math.abs(v-g)<.01){if(Math.abs(u+f)<.1&&Math.abs(d+b)<.1&&Math.abs(v+g)<.1&&Math.abs(c+m+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const A=(c+1)/2,D=(m+1)/2,I=(p+1)/2,C=(u+f)/4,U=(d+b)/4,B=(v+g)/4;return A>D&&A>I?A<.01?(i=0,r=.707106781,a=.707106781):(i=Math.sqrt(A),r=C/i,a=U/i):D>I?D<.01?(i=.707106781,r=0,a=.707106781):(r=Math.sqrt(D),i=C/r,a=B/r):I<.01?(i=.707106781,r=.707106781,a=0):(a=Math.sqrt(I),i=U/a,r=B/a),this.set(i,r,a,t),this}let T=Math.sqrt((g-v)*(g-v)+(d-b)*(d-b)+(f-u)*(f-u));return Math.abs(T)<.001&&(T=1),this.x=(g-v)/T,this.y=(d-b)/T,this.z=(f-u)/T,this.w=Math.acos((c+m+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=lt(this.x,e.x,t.x),this.y=lt(this.y,e.y,t.y),this.z=lt(this.z,e.z,t.z),this.w=lt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=lt(this.x,e,t),this.y=lt(this.y,e,t),this.z=lt(this.z,e,t),this.w=lt(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(lt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class qm extends yr{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Hn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new zt(0,0,e,t),this.scissorTest=!1,this.viewport=new zt(0,0,e,t);const r={width:e,height:t,depth:i.depth},a=new pn(r);this.textures=[];const s=i.count;for(let o=0;o<s;o++)this.textures[o]=a.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const t={minFilter:Hn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,a=this.textures.length;r<a;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new jl(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class vr extends qm{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class bd extends pn{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=In,this.minFilter=In,this.wrapR=yi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Xm extends pn{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=In,this.minFilter=In,this.wrapR=yi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ka{constructor(e=new G(1/0,1/0,1/0),t=new G(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Xn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Xn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Xn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const a=i.getAttribute("position");if(t===!0&&a!==void 0&&e.isInstancedMesh!==!0)for(let s=0,o=a.count;s<o;s++)e.isMesh===!0?e.getVertexPosition(s,Xn):Xn.fromBufferAttribute(a,s),Xn.applyMatrix4(e.matrixWorld),this.expandByPoint(Xn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),es.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),es.copy(i.boundingBox)),es.applyMatrix4(e.matrixWorld),this.union(es)}const r=e.children;for(let a=0,s=r.length;a<s;a++)this.expandByObject(r[a],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Xn),Xn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ma),ts.subVectors(this.max,ma),Tr.subVectors(e.a,ma),Ar.subVectors(e.b,ma),Cr.subVectors(e.c,ma),Ui.subVectors(Ar,Tr),Ni.subVectors(Cr,Ar),rr.subVectors(Tr,Cr);let t=[0,-Ui.z,Ui.y,0,-Ni.z,Ni.y,0,-rr.z,rr.y,Ui.z,0,-Ui.x,Ni.z,0,-Ni.x,rr.z,0,-rr.x,-Ui.y,Ui.x,0,-Ni.y,Ni.x,0,-rr.y,rr.x,0];return!Fo(t,Tr,Ar,Cr,ts)||(t=[1,0,0,0,1,0,0,0,1],!Fo(t,Tr,Ar,Cr,ts))?!1:(ns.crossVectors(Ui,Ni),t=[ns.x,ns.y,ns.z],Fo(t,Tr,Ar,Cr,ts))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Xn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Xn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(fi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),fi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),fi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),fi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),fi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),fi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),fi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),fi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(fi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const fi=[new G,new G,new G,new G,new G,new G,new G,new G],Xn=new G,es=new ka,Tr=new G,Ar=new G,Cr=new G,Ui=new G,Ni=new G,rr=new G,ma=new G,ts=new G,ns=new G,ar=new G;function Fo(n,e,t,i,r){for(let a=0,s=n.length-3;a<=s;a+=3){ar.fromArray(n,a);const o=r.x*Math.abs(ar.x)+r.y*Math.abs(ar.y)+r.z*Math.abs(ar.z),l=e.dot(ar),c=t.dot(ar),u=i.dot(ar);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const Ym=new ka,xa=new G,Oo=new G;class ao{constructor(e=new G,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Ym.setFromPoints(e).getCenter(i);let r=0;for(let a=0,s=e.length;a<s;a++)r=Math.max(r,i.distanceToSquared(e[a]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;xa.subVectors(e,this.center);const t=xa.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(xa,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Oo.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(xa.copy(e.center).add(Oo)),this.expandByPoint(xa.copy(e.center).sub(Oo))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const pi=new G,zo=new G,is=new G,Fi=new G,Bo=new G,rs=new G,ko=new G;class Kl{constructor(e=new G,t=new G(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,pi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=pi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(pi.copy(this.origin).addScaledVector(this.direction,t),pi.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){zo.copy(e).add(t).multiplyScalar(.5),is.copy(t).sub(e).normalize(),Fi.copy(this.origin).sub(zo);const a=e.distanceTo(t)*.5,s=-this.direction.dot(is),o=Fi.dot(this.direction),l=-Fi.dot(is),c=Fi.lengthSq(),u=Math.abs(1-s*s);let d,f,m,v;if(u>0)if(d=s*l-o,f=s*o-l,v=a*u,d>=0)if(f>=-v)if(f<=v){const b=1/u;d*=b,f*=b,m=d*(d+s*f+2*o)+f*(s*d+f+2*l)+c}else f=a,d=Math.max(0,-(s*f+o)),m=-d*d+f*(f+2*l)+c;else f=-a,d=Math.max(0,-(s*f+o)),m=-d*d+f*(f+2*l)+c;else f<=-v?(d=Math.max(0,-(-s*a+o)),f=d>0?-a:Math.min(Math.max(-a,-l),a),m=-d*d+f*(f+2*l)+c):f<=v?(d=0,f=Math.min(Math.max(-a,-l),a),m=f*(f+2*l)+c):(d=Math.max(0,-(s*a+o)),f=d>0?a:Math.min(Math.max(-a,-l),a),m=-d*d+f*(f+2*l)+c);else f=s>0?-a:a,d=Math.max(0,-(s*f+o)),m=-d*d+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(zo).addScaledVector(is,f),m}intersectSphere(e,t){pi.subVectors(e.center,this.origin);const i=pi.dot(this.direction),r=pi.dot(pi)-i*i,a=e.radius*e.radius;if(r>a)return null;const s=Math.sqrt(a-r),o=i-s,l=i+s;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,a,s,o,l;const c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,r=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,r=(e.min.x-f.x)*c),u>=0?(a=(e.min.y-f.y)*u,s=(e.max.y-f.y)*u):(a=(e.max.y-f.y)*u,s=(e.min.y-f.y)*u),i>s||a>r||((a>i||isNaN(i))&&(i=a),(s<r||isNaN(r))&&(r=s),d>=0?(o=(e.min.z-f.z)*d,l=(e.max.z-f.z)*d):(o=(e.max.z-f.z)*d,l=(e.min.z-f.z)*d),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,pi)!==null}intersectTriangle(e,t,i,r,a){Bo.subVectors(t,e),rs.subVectors(i,e),ko.crossVectors(Bo,rs);let s=this.direction.dot(ko),o;if(s>0){if(r)return null;o=1}else if(s<0)o=-1,s=-s;else return null;Fi.subVectors(this.origin,e);const l=o*this.direction.dot(rs.crossVectors(Fi,rs));if(l<0)return null;const c=o*this.direction.dot(Bo.cross(Fi));if(c<0||l+c>s)return null;const u=-o*Fi.dot(ko);return u<0?null:this.at(u/s,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Tt{constructor(e,t,i,r,a,s,o,l,c,u,d,f,m,v,b,g){Tt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,a,s,o,l,c,u,d,f,m,v,b,g)}set(e,t,i,r,a,s,o,l,c,u,d,f,m,v,b,g){const p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=r,p[1]=a,p[5]=s,p[9]=o,p[13]=l,p[2]=c,p[6]=u,p[10]=d,p[14]=f,p[3]=m,p[7]=v,p[11]=b,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Tt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/Rr.setFromMatrixColumn(e,0).length(),a=1/Rr.setFromMatrixColumn(e,1).length(),s=1/Rr.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*a,t[5]=i[5]*a,t[6]=i[6]*a,t[7]=0,t[8]=i[8]*s,t[9]=i[9]*s,t[10]=i[10]*s,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,a=e.z,s=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(a),d=Math.sin(a);if(e.order==="XYZ"){const f=s*u,m=s*d,v=o*u,b=o*d;t[0]=l*u,t[4]=-l*d,t[8]=c,t[1]=m+v*c,t[5]=f-b*c,t[9]=-o*l,t[2]=b-f*c,t[6]=v+m*c,t[10]=s*l}else if(e.order==="YXZ"){const f=l*u,m=l*d,v=c*u,b=c*d;t[0]=f+b*o,t[4]=v*o-m,t[8]=s*c,t[1]=s*d,t[5]=s*u,t[9]=-o,t[2]=m*o-v,t[6]=b+f*o,t[10]=s*l}else if(e.order==="ZXY"){const f=l*u,m=l*d,v=c*u,b=c*d;t[0]=f-b*o,t[4]=-s*d,t[8]=v+m*o,t[1]=m+v*o,t[5]=s*u,t[9]=b-f*o,t[2]=-s*c,t[6]=o,t[10]=s*l}else if(e.order==="ZYX"){const f=s*u,m=s*d,v=o*u,b=o*d;t[0]=l*u,t[4]=v*c-m,t[8]=f*c+b,t[1]=l*d,t[5]=b*c+f,t[9]=m*c-v,t[2]=-c,t[6]=o*l,t[10]=s*l}else if(e.order==="YZX"){const f=s*l,m=s*c,v=o*l,b=o*c;t[0]=l*u,t[4]=b-f*d,t[8]=v*d+m,t[1]=d,t[5]=s*u,t[9]=-o*u,t[2]=-c*u,t[6]=m*d+v,t[10]=f-b*d}else if(e.order==="XZY"){const f=s*l,m=s*c,v=o*l,b=o*c;t[0]=l*u,t[4]=-d,t[8]=c*u,t[1]=f*d+b,t[5]=s*u,t[9]=m*d-v,t[2]=v*d-m,t[6]=o*u,t[10]=b*d+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose($m,e,jm)}lookAt(e,t,i){const r=this.elements;return Tn.subVectors(e,t),Tn.lengthSq()===0&&(Tn.z=1),Tn.normalize(),Oi.crossVectors(i,Tn),Oi.lengthSq()===0&&(Math.abs(i.z)===1?Tn.x+=1e-4:Tn.z+=1e-4,Tn.normalize(),Oi.crossVectors(i,Tn)),Oi.normalize(),as.crossVectors(Tn,Oi),r[0]=Oi.x,r[4]=as.x,r[8]=Tn.x,r[1]=Oi.y,r[5]=as.y,r[9]=Tn.y,r[2]=Oi.z,r[6]=as.z,r[10]=Tn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,a=this.elements,s=i[0],o=i[4],l=i[8],c=i[12],u=i[1],d=i[5],f=i[9],m=i[13],v=i[2],b=i[6],g=i[10],p=i[14],T=i[3],A=i[7],D=i[11],I=i[15],C=r[0],U=r[4],B=r[8],E=r[12],w=r[1],O=r[5],k=r[9],q=r[13],$=r[2],J=r[6],Z=r[10],he=r[14],K=r[3],fe=r[7],de=r[11],Pe=r[15];return a[0]=s*C+o*w+l*$+c*K,a[4]=s*U+o*O+l*J+c*fe,a[8]=s*B+o*k+l*Z+c*de,a[12]=s*E+o*q+l*he+c*Pe,a[1]=u*C+d*w+f*$+m*K,a[5]=u*U+d*O+f*J+m*fe,a[9]=u*B+d*k+f*Z+m*de,a[13]=u*E+d*q+f*he+m*Pe,a[2]=v*C+b*w+g*$+p*K,a[6]=v*U+b*O+g*J+p*fe,a[10]=v*B+b*k+g*Z+p*de,a[14]=v*E+b*q+g*he+p*Pe,a[3]=T*C+A*w+D*$+I*K,a[7]=T*U+A*O+D*J+I*fe,a[11]=T*B+A*k+D*Z+I*de,a[15]=T*E+A*q+D*he+I*Pe,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],a=e[12],s=e[1],o=e[5],l=e[9],c=e[13],u=e[2],d=e[6],f=e[10],m=e[14],v=e[3],b=e[7],g=e[11],p=e[15];return v*(+a*l*d-r*c*d-a*o*f+i*c*f+r*o*m-i*l*m)+b*(+t*l*m-t*c*f+a*s*f-r*s*m+r*c*u-a*l*u)+g*(+t*c*d-t*o*m-a*s*d+i*s*m+a*o*u-i*c*u)+p*(-r*o*u-t*l*d+t*o*f+r*s*d-i*s*f+i*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],a=e[3],s=e[4],o=e[5],l=e[6],c=e[7],u=e[8],d=e[9],f=e[10],m=e[11],v=e[12],b=e[13],g=e[14],p=e[15],T=d*g*c-b*f*c+b*l*m-o*g*m-d*l*p+o*f*p,A=v*f*c-u*g*c-v*l*m+s*g*m+u*l*p-s*f*p,D=u*b*c-v*d*c+v*o*m-s*b*m-u*o*p+s*d*p,I=v*d*l-u*b*l-v*o*f+s*b*f+u*o*g-s*d*g,C=t*T+i*A+r*D+a*I;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const U=1/C;return e[0]=T*U,e[1]=(b*f*a-d*g*a-b*r*m+i*g*m+d*r*p-i*f*p)*U,e[2]=(o*g*a-b*l*a+b*r*c-i*g*c-o*r*p+i*l*p)*U,e[3]=(d*l*a-o*f*a-d*r*c+i*f*c+o*r*m-i*l*m)*U,e[4]=A*U,e[5]=(u*g*a-v*f*a+v*r*m-t*g*m-u*r*p+t*f*p)*U,e[6]=(v*l*a-s*g*a-v*r*c+t*g*c+s*r*p-t*l*p)*U,e[7]=(s*f*a-u*l*a+u*r*c-t*f*c-s*r*m+t*l*m)*U,e[8]=D*U,e[9]=(v*d*a-u*b*a-v*i*m+t*b*m+u*i*p-t*d*p)*U,e[10]=(s*b*a-v*o*a+v*i*c-t*b*c-s*i*p+t*o*p)*U,e[11]=(u*o*a-s*d*a-u*i*c+t*d*c+s*i*m-t*o*m)*U,e[12]=I*U,e[13]=(u*b*r-v*d*r+v*i*f-t*b*f-u*i*g+t*d*g)*U,e[14]=(v*o*r-s*b*r-v*i*l+t*b*l+s*i*g-t*o*g)*U,e[15]=(s*d*r-u*o*r+u*i*l-t*d*l-s*i*f+t*o*f)*U,this}scale(e){const t=this.elements,i=e.x,r=e.y,a=e.z;return t[0]*=i,t[4]*=r,t[8]*=a,t[1]*=i,t[5]*=r,t[9]*=a,t[2]*=i,t[6]*=r,t[10]*=a,t[3]*=i,t[7]*=r,t[11]*=a,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),a=1-i,s=e.x,o=e.y,l=e.z,c=a*s,u=a*o;return this.set(c*s+i,c*o-r*l,c*l+r*o,0,c*o+r*l,u*o+i,u*l-r*s,0,c*l-r*o,u*l+r*s,a*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,a,s){return this.set(1,i,a,0,e,1,s,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,a=t._x,s=t._y,o=t._z,l=t._w,c=a+a,u=s+s,d=o+o,f=a*c,m=a*u,v=a*d,b=s*u,g=s*d,p=o*d,T=l*c,A=l*u,D=l*d,I=i.x,C=i.y,U=i.z;return r[0]=(1-(b+p))*I,r[1]=(m+D)*I,r[2]=(v-A)*I,r[3]=0,r[4]=(m-D)*C,r[5]=(1-(f+p))*C,r[6]=(g+T)*C,r[7]=0,r[8]=(v+A)*U,r[9]=(g-T)*U,r[10]=(1-(f+b))*U,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let a=Rr.set(r[0],r[1],r[2]).length();const s=Rr.set(r[4],r[5],r[6]).length(),o=Rr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(a=-a),e.x=r[12],e.y=r[13],e.z=r[14],Yn.copy(this);const c=1/a,u=1/s,d=1/o;return Yn.elements[0]*=c,Yn.elements[1]*=c,Yn.elements[2]*=c,Yn.elements[4]*=u,Yn.elements[5]*=u,Yn.elements[6]*=u,Yn.elements[8]*=d,Yn.elements[9]*=d,Yn.elements[10]*=d,t.setFromRotationMatrix(Yn),i.x=a,i.y=s,i.z=o,this}makePerspective(e,t,i,r,a,s,o=ri,l=!1){const c=this.elements,u=2*a/(t-e),d=2*a/(i-r),f=(t+e)/(t-e),m=(i+r)/(i-r);let v,b;if(l)v=a/(s-a),b=s*a/(s-a);else if(o===ri)v=-(s+a)/(s-a),b=-2*s*a/(s-a);else if(o===Bs)v=-s/(s-a),b=-s*a/(s-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=d,c[9]=m,c[13]=0,c[2]=0,c[6]=0,c[10]=v,c[14]=b,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,r,a,s,o=ri,l=!1){const c=this.elements,u=2/(t-e),d=2/(i-r),f=-(t+e)/(t-e),m=-(i+r)/(i-r);let v,b;if(l)v=1/(s-a),b=s/(s-a);else if(o===ri)v=-2/(s-a),b=-(s+a)/(s-a);else if(o===Bs)v=-1/(s-a),b=-a/(s-a);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=d,c[9]=0,c[13]=m,c[2]=0,c[6]=0,c[10]=v,c[14]=b,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Rr=new G,Yn=new Tt,$m=new G(0,0,0),jm=new G(1,1,1),Oi=new G,as=new G,Tn=new G,uu=new Tt,hu=new gr;class oi{constructor(e=0,t=0,i=0,r=oi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,a=r[0],s=r[4],o=r[8],l=r[1],c=r[5],u=r[9],d=r[2],f=r[6],m=r[10];switch(t){case"XYZ":this._y=Math.asin(lt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-s,a)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-lt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,a),this._z=0);break;case"ZXY":this._x=Math.asin(lt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,m),this._z=Math.atan2(-s,c)):(this._y=0,this._z=Math.atan2(l,a));break;case"ZYX":this._y=Math.asin(-lt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(l,a)):(this._x=0,this._z=Math.atan2(-s,c));break;case"YZX":this._z=Math.asin(lt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,a)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-lt(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,a)):(this._x=Math.atan2(-u,m),this._y=0);break;default:$e("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return uu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(uu,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return hu.setFromEuler(this),this.setFromQuaternion(hu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}oi.DEFAULT_ORDER="XYZ";class _d{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Km=0;const du=new G,Dr=new gr,mi=new Tt,ss=new G,ga=new G,Zm=new G,Jm=new gr,fu=new G(1,0,0),pu=new G(0,1,0),mu=new G(0,0,1),xu={type:"added"},Qm={type:"removed"},Pr={type:"childadded",child:null},Ho={type:"childremoved",child:null};class qt extends yr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Km++}),this.uuid=Ba(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=qt.DEFAULT_UP.clone();const e=new G,t=new oi,i=new gr,r=new G(1,1,1);function a(){i.setFromEuler(t,!1)}function s(){t.setFromQuaternion(i,void 0,!1)}t._onChange(a),i._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Tt},normalMatrix:{value:new Qe}}),this.matrix=new Tt,this.matrixWorld=new Tt,this.matrixAutoUpdate=qt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=qt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new _d,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Dr.setFromAxisAngle(e,t),this.quaternion.multiply(Dr),this}rotateOnWorldAxis(e,t){return Dr.setFromAxisAngle(e,t),this.quaternion.premultiply(Dr),this}rotateX(e){return this.rotateOnAxis(fu,e)}rotateY(e){return this.rotateOnAxis(pu,e)}rotateZ(e){return this.rotateOnAxis(mu,e)}translateOnAxis(e,t){return du.copy(e).applyQuaternion(this.quaternion),this.position.add(du.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(fu,e)}translateY(e){return this.translateOnAxis(pu,e)}translateZ(e){return this.translateOnAxis(mu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(mi.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?ss.copy(e):ss.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),ga.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?mi.lookAt(ga,ss,this.up):mi.lookAt(ss,ga,this.up),this.quaternion.setFromRotationMatrix(mi),r&&(mi.extractRotation(r.matrixWorld),Dr.setFromRotationMatrix(mi),this.quaternion.premultiply(Dr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(kt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(xu),Pr.child=e,this.dispatchEvent(Pr),Pr.child=null):kt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Qm),Ho.child=e,this.dispatchEvent(Ho),Ho.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),mi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),mi.multiply(e.parent.matrixWorld)),e.applyMatrix4(mi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(xu),Pr.child=e,this.dispatchEvent(Pr),Pr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const s=this.children[i].getObjectByProperty(e,t);if(s!==void 0)return s}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let a=0,s=r.length;a<s;a++)r[a].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ga,e,Zm),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ga,Jm,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let a=0,s=r.length;a<s;a++)r[a].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function a(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=a(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const d=l[c];a(e.shapes,d)}else a(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(a(e.materials,this.material[l]));r.material=o}else r.material=a(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(a(e.animations,l))}}if(t){const o=s(e.geometries),l=s(e.materials),c=s(e.textures),u=s(e.images),d=s(e.shapes),f=s(e.skeletons),m=s(e.animations),v=s(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),d.length>0&&(i.shapes=d),f.length>0&&(i.skeletons=f),m.length>0&&(i.animations=m),v.length>0&&(i.nodes=v)}return i.object=r,i;function s(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}qt.DEFAULT_UP=new G(0,1,0);qt.DEFAULT_MATRIX_AUTO_UPDATE=!0;qt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const $n=new G,xi=new G,Vo=new G,gi=new G,Lr=new G,Ir=new G,gu=new G,Go=new G,Wo=new G,qo=new G,Xo=new zt,Yo=new zt,$o=new zt;class jn{constructor(e=new G,t=new G,i=new G){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),$n.subVectors(e,t),r.cross($n);const a=r.lengthSq();return a>0?r.multiplyScalar(1/Math.sqrt(a)):r.set(0,0,0)}static getBarycoord(e,t,i,r,a){$n.subVectors(r,t),xi.subVectors(i,t),Vo.subVectors(e,t);const s=$n.dot($n),o=$n.dot(xi),l=$n.dot(Vo),c=xi.dot(xi),u=xi.dot(Vo),d=s*c-o*o;if(d===0)return a.set(0,0,0),null;const f=1/d,m=(c*l-o*u)*f,v=(s*u-o*l)*f;return a.set(1-m-v,v,m)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,gi)===null?!1:gi.x>=0&&gi.y>=0&&gi.x+gi.y<=1}static getInterpolation(e,t,i,r,a,s,o,l){return this.getBarycoord(e,t,i,r,gi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(a,gi.x),l.addScaledVector(s,gi.y),l.addScaledVector(o,gi.z),l)}static getInterpolatedAttribute(e,t,i,r,a,s){return Xo.setScalar(0),Yo.setScalar(0),$o.setScalar(0),Xo.fromBufferAttribute(e,t),Yo.fromBufferAttribute(e,i),$o.fromBufferAttribute(e,r),s.setScalar(0),s.addScaledVector(Xo,a.x),s.addScaledVector(Yo,a.y),s.addScaledVector($o,a.z),s}static isFrontFacing(e,t,i,r){return $n.subVectors(i,t),xi.subVectors(e,t),$n.cross(xi).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return $n.subVectors(this.c,this.b),xi.subVectors(this.a,this.b),$n.cross(xi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return jn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return jn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,a){return jn.getInterpolation(e,this.a,this.b,this.c,t,i,r,a)}containsPoint(e){return jn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return jn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,a=this.c;let s,o;Lr.subVectors(r,i),Ir.subVectors(a,i),Go.subVectors(e,i);const l=Lr.dot(Go),c=Ir.dot(Go);if(l<=0&&c<=0)return t.copy(i);Wo.subVectors(e,r);const u=Lr.dot(Wo),d=Ir.dot(Wo);if(u>=0&&d<=u)return t.copy(r);const f=l*d-u*c;if(f<=0&&l>=0&&u<=0)return s=l/(l-u),t.copy(i).addScaledVector(Lr,s);qo.subVectors(e,a);const m=Lr.dot(qo),v=Ir.dot(qo);if(v>=0&&m<=v)return t.copy(a);const b=m*c-l*v;if(b<=0&&c>=0&&v<=0)return o=c/(c-v),t.copy(i).addScaledVector(Ir,o);const g=u*v-m*d;if(g<=0&&d-u>=0&&m-v>=0)return gu.subVectors(a,r),o=(d-u)/(d-u+(m-v)),t.copy(r).addScaledVector(gu,o);const p=1/(g+b+f);return s=b*p,o=f*p,t.copy(i).addScaledVector(Lr,s).addScaledVector(Ir,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const yd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},zi={h:0,s:0,l:0},os={h:0,s:0,l:0};function jo(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class ut{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Dn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,dt.colorSpaceToWorking(this,t),this}setRGB(e,t,i,r=dt.workingColorSpace){return this.r=e,this.g=t,this.b=i,dt.colorSpaceToWorking(this,r),this}setHSL(e,t,i,r=dt.workingColorSpace){if(e=Bm(e,1),t=lt(t,0,1),i=lt(i,0,1),t===0)this.r=this.g=this.b=i;else{const a=i<=.5?i*(1+t):i+t-i*t,s=2*i-a;this.r=jo(s,a,e+1/3),this.g=jo(s,a,e),this.b=jo(s,a,e-1/3)}return dt.colorSpaceToWorking(this,r),this}setStyle(e,t=Dn){function i(a){a!==void 0&&parseFloat(a)<1&&$e("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let a;const s=r[1],o=r[2];switch(s){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,t);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:$e("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const a=r[1],s=a.length;if(s===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(s===6)return this.setHex(parseInt(a,16),t);$e("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Dn){const i=yd[e.toLowerCase()];return i!==void 0?this.setHex(i,t):$e("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ei(e.r),this.g=Ei(e.g),this.b=Ei(e.b),this}copyLinearToSRGB(e){return this.r=Wr(e.r),this.g=Wr(e.g),this.b=Wr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Dn){return dt.workingToColorSpace(rn.copy(this),e),Math.round(lt(rn.r*255,0,255))*65536+Math.round(lt(rn.g*255,0,255))*256+Math.round(lt(rn.b*255,0,255))}getHexString(e=Dn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=dt.workingColorSpace){dt.workingToColorSpace(rn.copy(this),t);const i=rn.r,r=rn.g,a=rn.b,s=Math.max(i,r,a),o=Math.min(i,r,a);let l,c;const u=(o+s)/2;if(o===s)l=0,c=0;else{const d=s-o;switch(c=u<=.5?d/(s+o):d/(2-s-o),s){case i:l=(r-a)/d+(r<a?6:0);break;case r:l=(a-i)/d+2;break;case a:l=(i-r)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=dt.workingColorSpace){return dt.workingToColorSpace(rn.copy(this),t),e.r=rn.r,e.g=rn.g,e.b=rn.b,e}getStyle(e=Dn){dt.workingToColorSpace(rn.copy(this),e);const t=rn.r,i=rn.g,r=rn.b;return e!==Dn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(zi),this.setHSL(zi.h+e,zi.s+t,zi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(zi),e.getHSL(os);const i=Po(zi.h,os.h,t),r=Po(zi.s,os.s,t),a=Po(zi.l,os.l,t);return this.setHSL(i,r,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,a=e.elements;return this.r=a[0]*t+a[3]*i+a[6]*r,this.g=a[1]*t+a[4]*i+a[7]*r,this.b=a[2]*t+a[5]*i+a[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const rn=new ut;ut.NAMES=yd;let e1=0;class ha extends yr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:e1++}),this.uuid=Ba(),this.name="",this.type="Material",this.blending=Gr,this.side=Ki,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=I0,this.blendDst=U0,this.blendEquation=hr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ut(0,0,0),this.blendAlpha=0,this.depthFunc=Kr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=nu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=wr,this.stencilZFail=wr,this.stencilZPass=wr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){$e(`Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){$e(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Gr&&(i.blending=this.blending),this.side!==Ki&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==I0&&(i.blendSrc=this.blendSrc),this.blendDst!==U0&&(i.blendDst=this.blendDst),this.blendEquation!==hr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Kr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==nu&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==wr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==wr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==wr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(a){const s=[];for(const o in a){const l=a[o];delete l.metadata,s.push(l)}return s}if(t){const a=r(e.textures),s=r(e.images);a.length>0&&(i.textures=a),s.length>0&&(i.images=s)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let a=0;a!==r;++a)i[a]=t[a].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class qr extends ha{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ut(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new oi,this.combine=od,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Vt=new G,ls=new je;let t1=0;class ai{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:t1++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=iu,this.updateRanges=[],this.gpuType=Mi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,a=this.itemSize;r<a;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)ls.fromBufferAttribute(this,t),ls.applyMatrix3(e),this.setXY(t,ls.x,ls.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Vt.fromBufferAttribute(this,t),Vt.applyMatrix3(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Vt.fromBufferAttribute(this,t),Vt.applyMatrix4(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Vt.fromBufferAttribute(this,t),Vt.applyNormalMatrix(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Vt.fromBufferAttribute(this,t),Vt.transformDirection(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=pa(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=vn(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=pa(t,this.array)),t}setX(e,t){return this.normalized&&(t=vn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=pa(t,this.array)),t}setY(e,t){return this.normalized&&(t=vn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=pa(t,this.array)),t}setZ(e,t){return this.normalized&&(t=vn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=pa(t,this.array)),t}setW(e,t){return this.normalized&&(t=vn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=vn(t,this.array),i=vn(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=vn(t,this.array),i=vn(i,this.array),r=vn(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,a){return e*=this.itemSize,this.normalized&&(t=vn(t,this.array),i=vn(i,this.array),r=vn(r,this.array),a=vn(a,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==iu&&(e.usage=this.usage),e}}class Md extends ai{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Sd extends ai{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Ut extends ai{constructor(e,t,i){super(new Float32Array(e),t,i)}}let n1=0;const zn=new Tt,Ko=new qt,Ur=new G,An=new ka,va=new ka,Jt=new G;class en extends yr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:n1++}),this.uuid=Ba(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(vd(e)?Sd:Md)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const a=new Qe().getNormalMatrix(e);i.applyNormalMatrix(a),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return zn.makeRotationFromQuaternion(e),this.applyMatrix4(zn),this}rotateX(e){return zn.makeRotationX(e),this.applyMatrix4(zn),this}rotateY(e){return zn.makeRotationY(e),this.applyMatrix4(zn),this}rotateZ(e){return zn.makeRotationZ(e),this.applyMatrix4(zn),this}translate(e,t,i){return zn.makeTranslation(e,t,i),this.applyMatrix4(zn),this}scale(e,t,i){return zn.makeScale(e,t,i),this.applyMatrix4(zn),this}lookAt(e){return Ko.lookAt(e),Ko.updateMatrix(),this.applyMatrix4(Ko.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ur).negate(),this.translate(Ur.x,Ur.y,Ur.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let r=0,a=e.length;r<a;r++){const s=e[r];i.push(s.x,s.y,s.z||0)}this.setAttribute("position",new Ut(i,3))}else{const i=Math.min(e.length,t.count);for(let r=0;r<i;r++){const a=e[r];t.setXYZ(r,a.x,a.y,a.z||0)}e.length>t.count&&$e("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ka);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){kt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new G(-1/0,-1/0,-1/0),new G(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const a=t[i];An.setFromBufferAttribute(a),this.morphTargetsRelative?(Jt.addVectors(this.boundingBox.min,An.min),this.boundingBox.expandByPoint(Jt),Jt.addVectors(this.boundingBox.max,An.max),this.boundingBox.expandByPoint(Jt)):(this.boundingBox.expandByPoint(An.min),this.boundingBox.expandByPoint(An.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&kt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ao);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){kt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new G,1/0);return}if(e){const i=this.boundingSphere.center;if(An.setFromBufferAttribute(e),t)for(let a=0,s=t.length;a<s;a++){const o=t[a];va.setFromBufferAttribute(o),this.morphTargetsRelative?(Jt.addVectors(An.min,va.min),An.expandByPoint(Jt),Jt.addVectors(An.max,va.max),An.expandByPoint(Jt)):(An.expandByPoint(va.min),An.expandByPoint(va.max))}An.getCenter(i);let r=0;for(let a=0,s=e.count;a<s;a++)Jt.fromBufferAttribute(e,a),r=Math.max(r,i.distanceToSquared(Jt));if(t)for(let a=0,s=t.length;a<s;a++){const o=t[a],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)Jt.fromBufferAttribute(o,c),l&&(Ur.fromBufferAttribute(e,c),Jt.add(Ur)),r=Math.max(r,i.distanceToSquared(Jt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&kt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){kt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,a=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ai(new Float32Array(4*i.count),4));const s=this.getAttribute("tangent"),o=[],l=[];for(let B=0;B<i.count;B++)o[B]=new G,l[B]=new G;const c=new G,u=new G,d=new G,f=new je,m=new je,v=new je,b=new G,g=new G;function p(B,E,w){c.fromBufferAttribute(i,B),u.fromBufferAttribute(i,E),d.fromBufferAttribute(i,w),f.fromBufferAttribute(a,B),m.fromBufferAttribute(a,E),v.fromBufferAttribute(a,w),u.sub(c),d.sub(c),m.sub(f),v.sub(f);const O=1/(m.x*v.y-v.x*m.y);isFinite(O)&&(b.copy(u).multiplyScalar(v.y).addScaledVector(d,-m.y).multiplyScalar(O),g.copy(d).multiplyScalar(m.x).addScaledVector(u,-v.x).multiplyScalar(O),o[B].add(b),o[E].add(b),o[w].add(b),l[B].add(g),l[E].add(g),l[w].add(g))}let T=this.groups;T.length===0&&(T=[{start:0,count:e.count}]);for(let B=0,E=T.length;B<E;++B){const w=T[B],O=w.start,k=w.count;for(let q=O,$=O+k;q<$;q+=3)p(e.getX(q+0),e.getX(q+1),e.getX(q+2))}const A=new G,D=new G,I=new G,C=new G;function U(B){I.fromBufferAttribute(r,B),C.copy(I);const E=o[B];A.copy(E),A.sub(I.multiplyScalar(I.dot(E))).normalize(),D.crossVectors(C,E);const O=D.dot(l[B])<0?-1:1;s.setXYZW(B,A.x,A.y,A.z,O)}for(let B=0,E=T.length;B<E;++B){const w=T[B],O=w.start,k=w.count;for(let q=O,$=O+k;q<$;q+=3)U(e.getX(q+0)),U(e.getX(q+1)),U(e.getX(q+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new ai(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,m=i.count;f<m;f++)i.setXYZ(f,0,0,0);const r=new G,a=new G,s=new G,o=new G,l=new G,c=new G,u=new G,d=new G;if(e)for(let f=0,m=e.count;f<m;f+=3){const v=e.getX(f+0),b=e.getX(f+1),g=e.getX(f+2);r.fromBufferAttribute(t,v),a.fromBufferAttribute(t,b),s.fromBufferAttribute(t,g),u.subVectors(s,a),d.subVectors(r,a),u.cross(d),o.fromBufferAttribute(i,v),l.fromBufferAttribute(i,b),c.fromBufferAttribute(i,g),o.add(u),l.add(u),c.add(u),i.setXYZ(v,o.x,o.y,o.z),i.setXYZ(b,l.x,l.y,l.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let f=0,m=t.count;f<m;f+=3)r.fromBufferAttribute(t,f+0),a.fromBufferAttribute(t,f+1),s.fromBufferAttribute(t,f+2),u.subVectors(s,a),d.subVectors(r,a),u.cross(d),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Jt.fromBufferAttribute(e,t),Jt.normalize(),e.setXYZ(t,Jt.x,Jt.y,Jt.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,d=o.normalized,f=new c.constructor(l.length*u);let m=0,v=0;for(let b=0,g=l.length;b<g;b++){o.isInterleavedBufferAttribute?m=l[b]*o.data.stride+o.offset:m=l[b]*u;for(let p=0;p<u;p++)f[v++]=c[m++]}return new ai(f,u,d)}if(this.index===null)return $e("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new en,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,i);t.setAttribute(o,c)}const a=this.morphAttributes;for(const o in a){const l=[],c=a[o];for(let u=0,d=c.length;u<d;u++){const f=c[u],m=e(f,i);l.push(m)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const s=this.groups;for(let o=0,l=s.length;o<l;o++){const c=s[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let a=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let d=0,f=c.length;d<f;d++){const m=c[d];u.push(m.toJSON(e.data))}u.length>0&&(r[l]=u,a=!0)}a&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const s=this.groups;s.length>0&&(e.data.groups=JSON.parse(JSON.stringify(s)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const a=e.morphAttributes;for(const c in a){const u=[],d=a[c];for(let f=0,m=d.length;f<m;f++)u.push(d[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const s=e.groups;for(let c=0,u=s.length;c<u;c++){const d=s[c];this.addGroup(d.start,d.count,d.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const vu=new Tt,sr=new Kl,cs=new ao,bu=new G,us=new G,hs=new G,ds=new G,Zo=new G,fs=new G,_u=new G,ps=new G;class Qt extends qt{constructor(e=new en,t=new qr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,s=r.length;a<s;a++){const o=r[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,a=i.morphAttributes.position,s=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(a&&o){fs.set(0,0,0);for(let l=0,c=a.length;l<c;l++){const u=o[l],d=a[l];u!==0&&(Zo.fromBufferAttribute(d,e),s?fs.addScaledVector(Zo,u):fs.addScaledVector(Zo.sub(t),u))}t.add(fs)}return t}raycast(e,t){const i=this.geometry,r=this.material,a=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),cs.copy(i.boundingSphere),cs.applyMatrix4(a),sr.copy(e.ray).recast(e.near),!(cs.containsPoint(sr.origin)===!1&&(sr.intersectSphere(cs,bu)===null||sr.origin.distanceToSquared(bu)>(e.far-e.near)**2))&&(vu.copy(a).invert(),sr.copy(e.ray).applyMatrix4(vu),!(i.boundingBox!==null&&sr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,sr)))}_computeIntersections(e,t,i){let r;const a=this.geometry,s=this.material,o=a.index,l=a.attributes.position,c=a.attributes.uv,u=a.attributes.uv1,d=a.attributes.normal,f=a.groups,m=a.drawRange;if(o!==null)if(Array.isArray(s))for(let v=0,b=f.length;v<b;v++){const g=f[v],p=s[g.materialIndex],T=Math.max(g.start,m.start),A=Math.min(o.count,Math.min(g.start+g.count,m.start+m.count));for(let D=T,I=A;D<I;D+=3){const C=o.getX(D),U=o.getX(D+1),B=o.getX(D+2);r=ms(this,p,e,i,c,u,d,C,U,B),r&&(r.faceIndex=Math.floor(D/3),r.face.materialIndex=g.materialIndex,t.push(r))}}else{const v=Math.max(0,m.start),b=Math.min(o.count,m.start+m.count);for(let g=v,p=b;g<p;g+=3){const T=o.getX(g),A=o.getX(g+1),D=o.getX(g+2);r=ms(this,s,e,i,c,u,d,T,A,D),r&&(r.faceIndex=Math.floor(g/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(s))for(let v=0,b=f.length;v<b;v++){const g=f[v],p=s[g.materialIndex],T=Math.max(g.start,m.start),A=Math.min(l.count,Math.min(g.start+g.count,m.start+m.count));for(let D=T,I=A;D<I;D+=3){const C=D,U=D+1,B=D+2;r=ms(this,p,e,i,c,u,d,C,U,B),r&&(r.faceIndex=Math.floor(D/3),r.face.materialIndex=g.materialIndex,t.push(r))}}else{const v=Math.max(0,m.start),b=Math.min(l.count,m.start+m.count);for(let g=v,p=b;g<p;g+=3){const T=g,A=g+1,D=g+2;r=ms(this,s,e,i,c,u,d,T,A,D),r&&(r.faceIndex=Math.floor(g/3),t.push(r))}}}}function i1(n,e,t,i,r,a,s,o){let l;if(e.side===Mn?l=i.intersectTriangle(s,a,r,!0,o):l=i.intersectTriangle(r,a,s,e.side===Ki,o),l===null)return null;ps.copy(o),ps.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(ps);return c<t.near||c>t.far?null:{distance:c,point:ps.clone(),object:n}}function ms(n,e,t,i,r,a,s,o,l,c){n.getVertexPosition(o,us),n.getVertexPosition(l,hs),n.getVertexPosition(c,ds);const u=i1(n,e,t,i,us,hs,ds,_u);if(u){const d=new G;jn.getBarycoord(_u,us,hs,ds,d),r&&(u.uv=jn.getInterpolatedAttribute(r,o,l,c,d,new je)),a&&(u.uv1=jn.getInterpolatedAttribute(a,o,l,c,d,new je)),s&&(u.normal=jn.getInterpolatedAttribute(s,o,l,c,d,new G),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const f={a:o,b:l,c,normal:new G,materialIndex:0};jn.getNormal(us,hs,ds,f.normal),u.face=f,u.barycoord=d}return u}class Ha extends en{constructor(e=1,t=1,i=1,r=1,a=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:a,depthSegments:s};const o=this;r=Math.floor(r),a=Math.floor(a),s=Math.floor(s);const l=[],c=[],u=[],d=[];let f=0,m=0;v("z","y","x",-1,-1,i,t,e,s,a,0),v("z","y","x",1,-1,i,t,-e,s,a,1),v("x","z","y",1,1,e,i,t,r,s,2),v("x","z","y",1,-1,e,i,-t,r,s,3),v("x","y","z",1,-1,e,t,i,r,a,4),v("x","y","z",-1,-1,e,t,-i,r,a,5),this.setIndex(l),this.setAttribute("position",new Ut(c,3)),this.setAttribute("normal",new Ut(u,3)),this.setAttribute("uv",new Ut(d,2));function v(b,g,p,T,A,D,I,C,U,B,E){const w=D/U,O=I/B,k=D/2,q=I/2,$=C/2,J=U+1,Z=B+1;let he=0,K=0;const fe=new G;for(let de=0;de<Z;de++){const Pe=de*O-q;for(let tt=0;tt<J;tt++){const nt=tt*w-k;fe[b]=nt*T,fe[g]=Pe*A,fe[p]=$,c.push(fe.x,fe.y,fe.z),fe[b]=0,fe[g]=0,fe[p]=C>0?1:-1,u.push(fe.x,fe.y,fe.z),d.push(tt/U),d.push(1-de/B),he+=1}}for(let de=0;de<B;de++)for(let Pe=0;Pe<U;Pe++){const tt=f+Pe+J*de,nt=f+Pe+J*(de+1),ft=f+(Pe+1)+J*(de+1),xt=f+(Pe+1)+J*de;l.push(tt,nt,xt),l.push(nt,ft,xt),K+=6}o.addGroup(m,K,E),m+=K,f+=he}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ha(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ea(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?($e("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function un(n){const e={};for(let t=0;t<n.length;t++){const i=ea(n[t]);for(const r in i)e[r]=i[r]}return e}function r1(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function wd(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:dt.workingColorSpace}const a1={clone:ea,merge:un};var s1=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,o1=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ci extends ha{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=s1,this.fragmentShader=o1,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ea(e.uniforms),this.uniformsGroups=r1(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const s=this.uniforms[r].value;s&&s.isTexture?t.uniforms[r]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?t.uniforms[r]={type:"c",value:s.getHex()}:s&&s.isVector2?t.uniforms[r]={type:"v2",value:s.toArray()}:s&&s.isVector3?t.uniforms[r]={type:"v3",value:s.toArray()}:s&&s.isVector4?t.uniforms[r]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?t.uniforms[r]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?t.uniforms[r]={type:"m4",value:s.toArray()}:t.uniforms[r]={value:s}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Ed extends qt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Tt,this.projectionMatrix=new Tt,this.projectionMatrixInverse=new Tt,this.coordinateSystem=ri,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Bi=new G,yu=new je,Mu=new je;class Bn extends Ed{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=_l*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ps*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return _l*2*Math.atan(Math.tan(Ps*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Bi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Bi.x,Bi.y).multiplyScalar(-e/Bi.z),Bi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Bi.x,Bi.y).multiplyScalar(-e/Bi.z)}getViewSize(e,t){return this.getViewBounds(e,yu,Mu),t.subVectors(Mu,yu)}setViewOffset(e,t,i,r,a,s){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=a,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ps*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,a=-.5*r;const s=this.view;if(this.view!==null&&this.view.enabled){const l=s.fullWidth,c=s.fullHeight;a+=s.offsetX*r/l,t-=s.offsetY*i/c,r*=s.width/l,i*=s.height/c}const o=this.filmOffset;o!==0&&(a+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+r,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Nr=-90,Fr=1;class l1 extends qt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Bn(Nr,Fr,e,t);r.layers=this.layers,this.add(r);const a=new Bn(Nr,Fr,e,t);a.layers=this.layers,this.add(a);const s=new Bn(Nr,Fr,e,t);s.layers=this.layers,this.add(s);const o=new Bn(Nr,Fr,e,t);o.layers=this.layers,this.add(o);const l=new Bn(Nr,Fr,e,t);l.layers=this.layers,this.add(l);const c=new Bn(Nr,Fr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,a,s,o,l]=t;for(const c of t)this.remove(c);if(e===ri)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Bs)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[a,s,o,l,c,u]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const b=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,a),e.setRenderTarget(i,1,r),e.render(t,s),e.setRenderTarget(i,2,r),e.render(t,o),e.setRenderTarget(i,3,r),e.render(t,l),e.setRenderTarget(i,4,r),e.render(t,c),i.texture.generateMipmaps=b,e.setRenderTarget(i,5,r),e.render(t,u),e.setRenderTarget(d,f,m),e.xr.enabled=v,i.texture.needsPMREMUpdate=!0}}class Td extends pn{constructor(e=[],t=Zr,i,r,a,s,o,l,c,u){super(e,t,i,r,a,s,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class c1 extends vr{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Td(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Ha(5,5,5),a=new Ci({name:"CubemapFromEquirect",uniforms:ea(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Mn,blending:wi});a.uniforms.tEquirect.value=t;const s=new Qt(r,a),o=t.minFilter;return t.minFilter===pr&&(t.minFilter=Hn),new l1(1,10,this).update(e,s),t.minFilter=o,s.geometry.dispose(),s.material.dispose(),this}clear(e,t=!0,i=!0,r=!0){const a=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(t,i,r);e.setRenderTarget(a)}}class mr extends qt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const u1={type:"move"};class Jo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new mr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new mr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new G,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new G),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new mr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new G,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new G),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,a=null,s=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){s=!0;for(const b of e.hand.values()){const g=t.getJointPose(b,i),p=this._getHandJoint(c,b);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}const u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=u.position.distanceTo(d.position),m=.02,v=.005;c.inputState.pinching&&f>m+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=m-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,i),a!==null&&(l.matrix.fromArray(a.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,a.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(a.linearVelocity)):l.hasLinearVelocity=!1,a.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(a.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&a!==null&&(r=a),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(u1)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=a!==null),c!==null&&(c.visible=s!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new mr;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class h1 extends qt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new oi,this.environmentIntensity=1,this.environmentRotation=new oi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class d1 extends pn{constructor(e=null,t=1,i=1,r,a,s,o,l,c=In,u=In,d,f){super(null,s,o,l,c,u,r,a,d,f),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Qo=new G,f1=new G,p1=new Qe;class ki{constructor(e=new G(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=Qo.subVectors(i,t).cross(f1.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Qo),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/r;return a<0||a>1?null:t.copy(e.start).addScaledVector(i,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||p1.getNormalMatrix(e),r=this.coplanarPoint(Qo).applyMatrix4(e),a=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const or=new ao,m1=new je(.5,.5),xs=new G;class Zl{constructor(e=new ki,t=new ki,i=new ki,r=new ki,a=new ki,s=new ki){this.planes=[e,t,i,r,a,s]}set(e,t,i,r,a,s){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(r),o[4].copy(a),o[5].copy(s),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=ri,i=!1){const r=this.planes,a=e.elements,s=a[0],o=a[1],l=a[2],c=a[3],u=a[4],d=a[5],f=a[6],m=a[7],v=a[8],b=a[9],g=a[10],p=a[11],T=a[12],A=a[13],D=a[14],I=a[15];if(r[0].setComponents(c-s,m-u,p-v,I-T).normalize(),r[1].setComponents(c+s,m+u,p+v,I+T).normalize(),r[2].setComponents(c+o,m+d,p+b,I+A).normalize(),r[3].setComponents(c-o,m-d,p-b,I-A).normalize(),i)r[4].setComponents(l,f,g,D).normalize(),r[5].setComponents(c-l,m-f,p-g,I-D).normalize();else if(r[4].setComponents(c-l,m-f,p-g,I-D).normalize(),t===ri)r[5].setComponents(c+l,m+f,p+g,I+D).normalize();else if(t===Bs)r[5].setComponents(l,f,g,D).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),or.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),or.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(or)}intersectsSprite(e){or.center.set(0,0,0);const t=m1.distanceTo(e.center);return or.radius=.7071067811865476+t,or.applyMatrix4(e.matrixWorld),this.intersectsSphere(or)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(xs.x=r.normal.x>0?e.max.x:e.min.x,xs.y=r.normal.y>0?e.max.y:e.min.y,xs.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(xs)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class ta extends ha{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ut(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Hs=new G,Vs=new G,Su=new Tt,ba=new Kl,gs=new ao,e0=new G,wu=new G;class Ua extends qt{constructor(e=new en,t=new ta){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let r=1,a=t.count;r<a;r++)Hs.fromBufferAttribute(t,r-1),Vs.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=Hs.distanceTo(Vs);e.setAttribute("lineDistance",new Ut(i,1))}else $e("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,a=e.params.Line.threshold,s=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),gs.copy(i.boundingSphere),gs.applyMatrix4(r),gs.radius+=a,e.ray.intersectsSphere(gs)===!1)return;Su.copy(r).invert(),ba.copy(e.ray).applyMatrix4(Su);const o=a/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,u=i.index,f=i.attributes.position;if(u!==null){const m=Math.max(0,s.start),v=Math.min(u.count,s.start+s.count);for(let b=m,g=v-1;b<g;b+=c){const p=u.getX(b),T=u.getX(b+1),A=vs(this,e,ba,l,p,T,b);A&&t.push(A)}if(this.isLineLoop){const b=u.getX(v-1),g=u.getX(m),p=vs(this,e,ba,l,b,g,v-1);p&&t.push(p)}}else{const m=Math.max(0,s.start),v=Math.min(f.count,s.start+s.count);for(let b=m,g=v-1;b<g;b+=c){const p=vs(this,e,ba,l,b,b+1,b);p&&t.push(p)}if(this.isLineLoop){const b=vs(this,e,ba,l,v-1,m,v-1);b&&t.push(b)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,s=r.length;a<s;a++){const o=r[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}}function vs(n,e,t,i,r,a,s){const o=n.geometry.attributes.position;if(Hs.fromBufferAttribute(o,r),Vs.fromBufferAttribute(o,a),t.distanceSqToSegment(Hs,Vs,e0,wu)>i)return;e0.applyMatrix4(n.matrixWorld);const c=e.ray.origin.distanceTo(e0);if(!(c<e.near||c>e.far))return{distance:c,point:wu.clone().applyMatrix4(n.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:n}}const Eu=new G,Tu=new G;class x1 extends Ua{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let r=0,a=t.count;r<a;r+=2)Eu.fromBufferAttribute(t,r),Tu.fromBufferAttribute(t,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+Eu.distanceTo(Tu);e.setAttribute("lineDistance",new Ut(i,1))}else $e("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Ad extends pn{constructor(e,t,i=xr,r,a,s,o=In,l=In,c,u=Pa,d=1){if(u!==Pa&&u!==La)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:e,height:t,depth:d};super(f,r,a,s,o,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new jl(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Cd extends pn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Jl extends en{constructor(e=1,t=32,i=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:r},t=Math.max(3,t);const a=[],s=[],o=[],l=[],c=new G,u=new je;s.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let d=0,f=3;d<=t;d++,f+=3){const m=i+d/t*r;c.x=e*Math.cos(m),c.y=e*Math.sin(m),s.push(c.x,c.y,c.z),o.push(0,0,1),u.x=(s[f]/e+1)/2,u.y=(s[f+1]/e+1)/2,l.push(u.x,u.y)}for(let d=1;d<=t;d++)a.push(d,d+1,0);this.setIndex(a),this.setAttribute("position",new Ut(s,3)),this.setAttribute("normal",new Ut(o,3)),this.setAttribute("uv",new Ut(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Jl(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class so extends en{constructor(e=1,t=1,i=1,r=32,a=1,s=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:r,heightSegments:a,openEnded:s,thetaStart:o,thetaLength:l};const c=this;r=Math.floor(r),a=Math.floor(a);const u=[],d=[],f=[],m=[];let v=0;const b=[],g=i/2;let p=0;T(),s===!1&&(e>0&&A(!0),t>0&&A(!1)),this.setIndex(u),this.setAttribute("position",new Ut(d,3)),this.setAttribute("normal",new Ut(f,3)),this.setAttribute("uv",new Ut(m,2));function T(){const D=new G,I=new G;let C=0;const U=(t-e)/i;for(let B=0;B<=a;B++){const E=[],w=B/a,O=w*(t-e)+e;for(let k=0;k<=r;k++){const q=k/r,$=q*l+o,J=Math.sin($),Z=Math.cos($);I.x=O*J,I.y=-w*i+g,I.z=O*Z,d.push(I.x,I.y,I.z),D.set(J,U,Z).normalize(),f.push(D.x,D.y,D.z),m.push(q,1-w),E.push(v++)}b.push(E)}for(let B=0;B<r;B++)for(let E=0;E<a;E++){const w=b[E][B],O=b[E+1][B],k=b[E+1][B+1],q=b[E][B+1];(e>0||E!==0)&&(u.push(w,O,q),C+=3),(t>0||E!==a-1)&&(u.push(O,k,q),C+=3)}c.addGroup(p,C,0),p+=C}function A(D){const I=v,C=new je,U=new G;let B=0;const E=D===!0?e:t,w=D===!0?1:-1;for(let k=1;k<=r;k++)d.push(0,g*w,0),f.push(0,w,0),m.push(.5,.5),v++;const O=v;for(let k=0;k<=r;k++){const $=k/r*l+o,J=Math.cos($),Z=Math.sin($);U.x=E*Z,U.y=g*w,U.z=E*J,d.push(U.x,U.y,U.z),f.push(0,w,0),C.x=J*.5+.5,C.y=Z*.5*w+.5,m.push(C.x,C.y),v++}for(let k=0;k<r;k++){const q=I+k,$=O+k;D===!0?u.push($,$+1,q):u.push($+1,$,q),B+=3}c.addGroup(p,B,D===!0?1:2),p+=B}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new so(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Ql extends so{constructor(e=1,t=1,i=32,r=1,a=!1,s=0,o=Math.PI*2){super(0,e,t,i,r,a,s,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:r,openEnded:a,thetaStart:s,thetaLength:o}}static fromJSON(e){return new Ql(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class na extends en{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const a=e/2,s=t/2,o=Math.floor(i),l=Math.floor(r),c=o+1,u=l+1,d=e/o,f=t/l,m=[],v=[],b=[],g=[];for(let p=0;p<u;p++){const T=p*f-s;for(let A=0;A<c;A++){const D=A*d-a;v.push(D,-T,0),b.push(0,0,1),g.push(A/o),g.push(1-p/l)}}for(let p=0;p<l;p++)for(let T=0;T<o;T++){const A=T+c*p,D=T+c*(p+1),I=T+1+c*(p+1),C=T+1+c*p;m.push(A,D,C),m.push(D,I,C)}this.setIndex(m),this.setAttribute("position",new Ut(v,3)),this.setAttribute("normal",new Ut(b,3)),this.setAttribute("uv",new Ut(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new na(e.width,e.height,e.widthSegments,e.heightSegments)}}class Gs extends en{constructor(e=1,t=32,i=16,r=0,a=Math.PI*2,s=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:a,thetaStart:s,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(s+o,Math.PI);let c=0;const u=[],d=new G,f=new G,m=[],v=[],b=[],g=[];for(let p=0;p<=i;p++){const T=[],A=p/i;let D=0;p===0&&s===0?D=.5/t:p===i&&l===Math.PI&&(D=-.5/t);for(let I=0;I<=t;I++){const C=I/t;d.x=-e*Math.cos(r+C*a)*Math.sin(s+A*o),d.y=e*Math.cos(s+A*o),d.z=e*Math.sin(r+C*a)*Math.sin(s+A*o),v.push(d.x,d.y,d.z),f.copy(d).normalize(),b.push(f.x,f.y,f.z),g.push(C+D,1-A),T.push(c++)}u.push(T)}for(let p=0;p<i;p++)for(let T=0;T<t;T++){const A=u[p][T+1],D=u[p][T],I=u[p+1][T],C=u[p+1][T+1];(p!==0||s>0)&&m.push(A,D,C),(p!==i-1||l<Math.PI)&&m.push(D,I,C)}this.setIndex(m),this.setAttribute("position",new Ut(v,3)),this.setAttribute("normal",new Ut(b,3)),this.setAttribute("uv",new Ut(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Gs(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class t0 extends ha{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ut(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ut(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=xd,this.normalScale=new je(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new oi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class g1 extends ha{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Am,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class v1 extends ha{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class b1 extends ta{constructor(e){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}}class Rd extends qt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ut(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class _1 extends Rd{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(qt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ut(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const n0=new Tt,Au=new G,Cu=new G;class y1{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new je(512,512),this.mapType=si,this.map=null,this.mapPass=null,this.matrix=new Tt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Zl,this._frameExtents=new je(1,1),this._viewportCount=1,this._viewports=[new zt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;Au.setFromMatrixPosition(e.matrixWorld),t.position.copy(Au),Cu.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Cu),t.updateMatrixWorld(),n0.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(n0,t.coordinateSystem,t.reversedDepth),t.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(n0)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Dd extends Ed{constructor(e=-1,t=1,i=1,r=-1,a=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=a,this.far=s,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,a,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=a,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let a=i-e,s=i+e,o=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=c*this.view.offsetX,s=a+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(a,s,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class M1 extends y1{constructor(){super(new Dd(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Ru extends Rd{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(qt.DEFAULT_UP),this.updateMatrix(),this.target=new qt,this.shadow=new M1}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class S1 extends Bn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class Du{constructor(e=1,t=0,i=0){this.radius=e,this.phi=t,this.theta=i}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=lt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(lt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class w1 extends x1{constructor(e=10,t=10,i=4473924,r=8947848){i=new ut(i),r=new ut(r);const a=t/2,s=e/t,o=e/2,l=[],c=[];for(let f=0,m=0,v=-o;f<=t;f++,v+=s){l.push(-o,0,v,o,0,v),l.push(v,0,-o,v,0,o);const b=f===a?i:r;b.toArray(c,m),m+=3,b.toArray(c,m),m+=3,b.toArray(c,m),m+=3,b.toArray(c,m),m+=3}const u=new en;u.setAttribute("position",new Ut(l,3)),u.setAttribute("color",new Ut(c,3));const d=new ta({vertexColors:!0,toneMapped:!1});super(u,d),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}const Pu=new G;let bs,i0;class E1 extends qt{constructor(e=new G(0,0,1),t=new G(0,0,0),i=1,r=16776960,a=i*.2,s=a*.2){super(),this.type="ArrowHelper",bs===void 0&&(bs=new en,bs.setAttribute("position",new Ut([0,0,0,0,1,0],3)),i0=new Ql(.5,1,5,1),i0.translate(0,-.5,0)),this.position.copy(t),this.line=new Ua(bs,new ta({color:r,toneMapped:!1})),this.line.matrixAutoUpdate=!1,this.add(this.line),this.cone=new Qt(i0,new qr({color:r,toneMapped:!1})),this.cone.matrixAutoUpdate=!1,this.add(this.cone),this.setDirection(e),this.setLength(i,a,s)}setDirection(e){if(e.y>.99999)this.quaternion.set(0,0,0,1);else if(e.y<-.99999)this.quaternion.set(1,0,0,0);else{Pu.set(e.z,0,-e.x).normalize();const t=Math.acos(e.y);this.quaternion.setFromAxisAngle(Pu,t)}}setLength(e,t=e*.2,i=t*.2){this.line.scale.set(1,Math.max(1e-4,e-t),1),this.line.updateMatrix(),this.cone.scale.set(i,t,i),this.cone.position.y=e,this.cone.updateMatrix()}setColor(e){this.line.material.color.set(e),this.cone.material.color.set(e)}copy(e){return super.copy(e,!1),this.line.copy(e.line),this.cone.copy(e.cone),this}dispose(){this.line.geometry.dispose(),this.line.material.dispose(),this.cone.geometry.dispose(),this.cone.material.dispose()}}class T1 extends yr{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){$e("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function Lu(n,e,t,i){const r=A1(i);switch(t){case fd:return n*e;case md:return n*e/r.components*r.byteLength;case ql:return n*e/r.components*r.byteLength;case Xl:return n*e*2/r.components*r.byteLength;case Yl:return n*e*2/r.components*r.byteLength;case pd:return n*e*3/r.components*r.byteLength;case Zn:return n*e*4/r.components*r.byteLength;case $l:return n*e*4/r.components*r.byteLength;case As:case Cs:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Rs:case Ds:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Y0:case j0:return Math.max(n,16)*Math.max(e,8)/4;case X0:case $0:return Math.max(n,8)*Math.max(e,8)/2;case K0:case Z0:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case J0:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Q0:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case el:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case tl:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case nl:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case il:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case rl:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case al:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case sl:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case ol:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case ll:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case cl:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case ul:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case hl:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case dl:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case fl:case pl:case ml:return Math.ceil(n/4)*Math.ceil(e/4)*16;case xl:case gl:return Math.ceil(n/4)*Math.ceil(e/4)*8;case vl:case bl:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function A1(n){switch(n){case si:case cd:return{byteLength:1,components:1};case Ra:case ud:case ua:return{byteLength:2,components:1};case Gl:case Wl:return{byteLength:2,components:4};case xr:case Vl:case Mi:return{byteLength:4,components:1};case hd:case dd:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Hl}}));typeof window<"u"&&(window.__THREE__?$e("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Hl);function Pd(){let n=null,e=!1,t=null,i=null;function r(a,s){t(a,s),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(a){t=a},setContext:function(a){n=a}}}function C1(n){const e=new WeakMap;function t(o,l){const c=o.array,u=o.usage,d=c.byteLength,f=n.createBuffer();n.bindBuffer(l,f),n.bufferData(l,c,u),o.onUploadCallback();let m;if(c instanceof Float32Array)m=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)m=n.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?m=n.HALF_FLOAT:m=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=n.SHORT;else if(c instanceof Uint32Array)m=n.UNSIGNED_INT;else if(c instanceof Int32Array)m=n.INT;else if(c instanceof Int8Array)m=n.BYTE;else if(c instanceof Uint8Array)m=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function i(o,l,c){const u=l.array,d=l.updateRanges;if(n.bindBuffer(c,o),d.length===0)n.bufferSubData(c,0,u);else{d.sort((m,v)=>m.start-v.start);let f=0;for(let m=1;m<d.length;m++){const v=d[f],b=d[m];b.start<=v.start+v.count+1?v.count=Math.max(v.count,b.start+b.count-v.start):(++f,d[f]=b)}d.length=f+1;for(let m=0,v=d.length;m<v;m++){const b=d[m];n.bufferSubData(c,b.start*u.BYTES_PER_ELEMENT,u,b.start,b.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function a(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(n.deleteBuffer(l.buffer),e.delete(o))}function s(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:r,remove:a,update:s}}var R1=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,D1=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,P1=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,L1=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,I1=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,U1=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,N1=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,F1=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,O1=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,z1=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,B1=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,k1=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,H1=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,V1=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,G1=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,W1=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,q1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,X1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Y1=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,$1=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,j1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,K1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Z1=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,J1=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Q1=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,e3=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,t3=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,n3=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,i3=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,r3=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,a3="gl_FragColor = linearToOutputTexel( gl_FragColor );",s3=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,o3=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,l3=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,c3=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,u3=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,h3=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,d3=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,f3=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,p3=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,m3=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,x3=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,g3=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,v3=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,b3=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,_3=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,y3=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,M3=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,S3=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,w3=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,E3=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,T3=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,A3=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 uv = vec2( roughness, dotNV );
	return texture2D( dfgLUT, uv ).rg;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = DFGApprox( vec3(0.0, 0.0, 1.0), vec3(sqrt(1.0 - dotNV * dotNV), 0.0, dotNV), material.roughness );
	vec2 dfgL = DFGApprox( vec3(0.0, 0.0, 1.0), vec3(sqrt(1.0 - dotNL * dotNL), 0.0, dotNL), material.roughness );
	vec3 FssEss_V = material.specularColor * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColor * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColor + ( 1.0 - material.specularColor ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,C3=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,R3=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,D3=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,P3=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,L3=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,I3=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,U3=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,N3=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,F3=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,O3=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,z3=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,B3=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,k3=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,H3=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,V3=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,G3=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,W3=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,q3=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,X3=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Y3=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,$3=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,j3=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,K3=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Z3=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,J3=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Q3=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,e2=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,t2=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,n2=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,i2=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,r2=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,a2=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,s2=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,o2=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,l2=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,c2=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,u2=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,h2=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,d2=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,f2=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,p2=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,m2=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,x2=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,g2=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,v2=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,b2=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,_2=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,y2=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,M2=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,S2=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,w2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,E2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,T2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,A2=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const C2=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,R2=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,D2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,P2=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,L2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,I2=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,U2=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,N2=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,F2=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,O2=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,z2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,B2=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,k2=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,H2=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,V2=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,G2=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,W2=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,q2=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,X2=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Y2=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$2=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,j2=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,K2=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Z2=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,J2=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Q2=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ex=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,tx=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,nx=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,ix=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,rx=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ax=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,sx=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,ox=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,it={alphahash_fragment:R1,alphahash_pars_fragment:D1,alphamap_fragment:P1,alphamap_pars_fragment:L1,alphatest_fragment:I1,alphatest_pars_fragment:U1,aomap_fragment:N1,aomap_pars_fragment:F1,batching_pars_vertex:O1,batching_vertex:z1,begin_vertex:B1,beginnormal_vertex:k1,bsdfs:H1,iridescence_fragment:V1,bumpmap_pars_fragment:G1,clipping_planes_fragment:W1,clipping_planes_pars_fragment:q1,clipping_planes_pars_vertex:X1,clipping_planes_vertex:Y1,color_fragment:$1,color_pars_fragment:j1,color_pars_vertex:K1,color_vertex:Z1,common:J1,cube_uv_reflection_fragment:Q1,defaultnormal_vertex:e3,displacementmap_pars_vertex:t3,displacementmap_vertex:n3,emissivemap_fragment:i3,emissivemap_pars_fragment:r3,colorspace_fragment:a3,colorspace_pars_fragment:s3,envmap_fragment:o3,envmap_common_pars_fragment:l3,envmap_pars_fragment:c3,envmap_pars_vertex:u3,envmap_physical_pars_fragment:y3,envmap_vertex:h3,fog_vertex:d3,fog_pars_vertex:f3,fog_fragment:p3,fog_pars_fragment:m3,gradientmap_pars_fragment:x3,lightmap_pars_fragment:g3,lights_lambert_fragment:v3,lights_lambert_pars_fragment:b3,lights_pars_begin:_3,lights_toon_fragment:M3,lights_toon_pars_fragment:S3,lights_phong_fragment:w3,lights_phong_pars_fragment:E3,lights_physical_fragment:T3,lights_physical_pars_fragment:A3,lights_fragment_begin:C3,lights_fragment_maps:R3,lights_fragment_end:D3,logdepthbuf_fragment:P3,logdepthbuf_pars_fragment:L3,logdepthbuf_pars_vertex:I3,logdepthbuf_vertex:U3,map_fragment:N3,map_pars_fragment:F3,map_particle_fragment:O3,map_particle_pars_fragment:z3,metalnessmap_fragment:B3,metalnessmap_pars_fragment:k3,morphinstance_vertex:H3,morphcolor_vertex:V3,morphnormal_vertex:G3,morphtarget_pars_vertex:W3,morphtarget_vertex:q3,normal_fragment_begin:X3,normal_fragment_maps:Y3,normal_pars_fragment:$3,normal_pars_vertex:j3,normal_vertex:K3,normalmap_pars_fragment:Z3,clearcoat_normal_fragment_begin:J3,clearcoat_normal_fragment_maps:Q3,clearcoat_pars_fragment:e2,iridescence_pars_fragment:t2,opaque_fragment:n2,packing:i2,premultiplied_alpha_fragment:r2,project_vertex:a2,dithering_fragment:s2,dithering_pars_fragment:o2,roughnessmap_fragment:l2,roughnessmap_pars_fragment:c2,shadowmap_pars_fragment:u2,shadowmap_pars_vertex:h2,shadowmap_vertex:d2,shadowmask_pars_fragment:f2,skinbase_vertex:p2,skinning_pars_vertex:m2,skinning_vertex:x2,skinnormal_vertex:g2,specularmap_fragment:v2,specularmap_pars_fragment:b2,tonemapping_fragment:_2,tonemapping_pars_fragment:y2,transmission_fragment:M2,transmission_pars_fragment:S2,uv_pars_fragment:w2,uv_pars_vertex:E2,uv_vertex:T2,worldpos_vertex:A2,background_vert:C2,background_frag:R2,backgroundCube_vert:D2,backgroundCube_frag:P2,cube_vert:L2,cube_frag:I2,depth_vert:U2,depth_frag:N2,distanceRGBA_vert:F2,distanceRGBA_frag:O2,equirect_vert:z2,equirect_frag:B2,linedashed_vert:k2,linedashed_frag:H2,meshbasic_vert:V2,meshbasic_frag:G2,meshlambert_vert:W2,meshlambert_frag:q2,meshmatcap_vert:X2,meshmatcap_frag:Y2,meshnormal_vert:$2,meshnormal_frag:j2,meshphong_vert:K2,meshphong_frag:Z2,meshphysical_vert:J2,meshphysical_frag:Q2,meshtoon_vert:ex,meshtoon_frag:tx,points_vert:nx,points_frag:ix,shadow_vert:rx,shadow_frag:ax,sprite_vert:sx,sprite_frag:ox},be={common:{diffuse:{value:new ut(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Qe},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Qe}},envmap:{envMap:{value:null},envMapRotation:{value:new Qe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Qe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Qe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Qe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Qe},normalScale:{value:new je(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Qe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Qe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Qe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Qe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ut(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ut(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0},uvTransform:{value:new Qe}},sprite:{diffuse:{value:new ut(16777215)},opacity:{value:1},center:{value:new je(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Qe},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0}}},ni={basic:{uniforms:un([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.fog]),vertexShader:it.meshbasic_vert,fragmentShader:it.meshbasic_frag},lambert:{uniforms:un([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.fog,be.lights,{emissive:{value:new ut(0)}}]),vertexShader:it.meshlambert_vert,fragmentShader:it.meshlambert_frag},phong:{uniforms:un([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.fog,be.lights,{emissive:{value:new ut(0)},specular:{value:new ut(1118481)},shininess:{value:30}}]),vertexShader:it.meshphong_vert,fragmentShader:it.meshphong_frag},standard:{uniforms:un([be.common,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.roughnessmap,be.metalnessmap,be.fog,be.lights,{emissive:{value:new ut(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:it.meshphysical_vert,fragmentShader:it.meshphysical_frag},toon:{uniforms:un([be.common,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.gradientmap,be.fog,be.lights,{emissive:{value:new ut(0)}}]),vertexShader:it.meshtoon_vert,fragmentShader:it.meshtoon_frag},matcap:{uniforms:un([be.common,be.bumpmap,be.normalmap,be.displacementmap,be.fog,{matcap:{value:null}}]),vertexShader:it.meshmatcap_vert,fragmentShader:it.meshmatcap_frag},points:{uniforms:un([be.points,be.fog]),vertexShader:it.points_vert,fragmentShader:it.points_frag},dashed:{uniforms:un([be.common,be.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:it.linedashed_vert,fragmentShader:it.linedashed_frag},depth:{uniforms:un([be.common,be.displacementmap]),vertexShader:it.depth_vert,fragmentShader:it.depth_frag},normal:{uniforms:un([be.common,be.bumpmap,be.normalmap,be.displacementmap,{opacity:{value:1}}]),vertexShader:it.meshnormal_vert,fragmentShader:it.meshnormal_frag},sprite:{uniforms:un([be.sprite,be.fog]),vertexShader:it.sprite_vert,fragmentShader:it.sprite_frag},background:{uniforms:{uvTransform:{value:new Qe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:it.background_vert,fragmentShader:it.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Qe}},vertexShader:it.backgroundCube_vert,fragmentShader:it.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:it.cube_vert,fragmentShader:it.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:it.equirect_vert,fragmentShader:it.equirect_frag},distanceRGBA:{uniforms:un([be.common,be.displacementmap,{referencePosition:{value:new G},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:it.distanceRGBA_vert,fragmentShader:it.distanceRGBA_frag},shadow:{uniforms:un([be.lights,be.fog,{color:{value:new ut(0)},opacity:{value:1}}]),vertexShader:it.shadow_vert,fragmentShader:it.shadow_frag}};ni.physical={uniforms:un([ni.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Qe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Qe},clearcoatNormalScale:{value:new je(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Qe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Qe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Qe},sheen:{value:0},sheenColor:{value:new ut(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Qe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Qe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Qe},transmissionSamplerSize:{value:new je},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Qe},attenuationDistance:{value:0},attenuationColor:{value:new ut(0)},specularColor:{value:new ut(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Qe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Qe},anisotropyVector:{value:new je},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Qe}}]),vertexShader:it.meshphysical_vert,fragmentShader:it.meshphysical_frag};const _s={r:0,b:0,g:0},lr=new oi,lx=new Tt;function cx(n,e,t,i,r,a,s){const o=new ut(0);let l=a===!0?0:1,c,u,d=null,f=0,m=null;function v(A){let D=A.isScene===!0?A.background:null;return D&&D.isTexture&&(D=(A.backgroundBlurriness>0?t:e).get(D)),D}function b(A){let D=!1;const I=v(A);I===null?p(o,l):I&&I.isColor&&(p(I,1),D=!0);const C=n.xr.getEnvironmentBlendMode();C==="additive"?i.buffers.color.setClear(0,0,0,1,s):C==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,s),(n.autoClear||D)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function g(A,D){const I=v(D);I&&(I.isCubeTexture||I.mapping===ro)?(u===void 0&&(u=new Qt(new Ha(1,1,1),new Ci({name:"BackgroundCubeMaterial",uniforms:ea(ni.backgroundCube.uniforms),vertexShader:ni.backgroundCube.vertexShader,fragmentShader:ni.backgroundCube.fragmentShader,side:Mn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(C,U,B){this.matrixWorld.copyPosition(B.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),lr.copy(D.backgroundRotation),lr.x*=-1,lr.y*=-1,lr.z*=-1,I.isCubeTexture&&I.isRenderTargetTexture===!1&&(lr.y*=-1,lr.z*=-1),u.material.uniforms.envMap.value=I,u.material.uniforms.flipEnvMap.value=I.isCubeTexture&&I.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=D.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(lx.makeRotationFromEuler(lr)),u.material.toneMapped=dt.getTransfer(I.colorSpace)!==Mt,(d!==I||f!==I.version||m!==n.toneMapping)&&(u.material.needsUpdate=!0,d=I,f=I.version,m=n.toneMapping),u.layers.enableAll(),A.unshift(u,u.geometry,u.material,0,0,null)):I&&I.isTexture&&(c===void 0&&(c=new Qt(new na(2,2),new Ci({name:"BackgroundMaterial",uniforms:ea(ni.background.uniforms),vertexShader:ni.background.vertexShader,fragmentShader:ni.background.fragmentShader,side:Ki,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=I,c.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,c.material.toneMapped=dt.getTransfer(I.colorSpace)!==Mt,I.matrixAutoUpdate===!0&&I.updateMatrix(),c.material.uniforms.uvTransform.value.copy(I.matrix),(d!==I||f!==I.version||m!==n.toneMapping)&&(c.material.needsUpdate=!0,d=I,f=I.version,m=n.toneMapping),c.layers.enableAll(),A.unshift(c,c.geometry,c.material,0,0,null))}function p(A,D){A.getRGB(_s,wd(n)),i.buffers.color.setClear(_s.r,_s.g,_s.b,D,s)}function T(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(A,D=1){o.set(A),l=D,p(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(A){l=A,p(o,l)},render:b,addToRenderList:g,dispose:T}}function ux(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=f(null);let a=r,s=!1;function o(w,O,k,q,$){let J=!1;const Z=d(q,k,O);a!==Z&&(a=Z,c(a.object)),J=m(w,q,k,$),J&&v(w,q,k,$),$!==null&&e.update($,n.ELEMENT_ARRAY_BUFFER),(J||s)&&(s=!1,D(w,O,k,q),$!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get($).buffer))}function l(){return n.createVertexArray()}function c(w){return n.bindVertexArray(w)}function u(w){return n.deleteVertexArray(w)}function d(w,O,k){const q=k.wireframe===!0;let $=i[w.id];$===void 0&&($={},i[w.id]=$);let J=$[O.id];J===void 0&&(J={},$[O.id]=J);let Z=J[q];return Z===void 0&&(Z=f(l()),J[q]=Z),Z}function f(w){const O=[],k=[],q=[];for(let $=0;$<t;$++)O[$]=0,k[$]=0,q[$]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:k,attributeDivisors:q,object:w,attributes:{},index:null}}function m(w,O,k,q){const $=a.attributes,J=O.attributes;let Z=0;const he=k.getAttributes();for(const K in he)if(he[K].location>=0){const de=$[K];let Pe=J[K];if(Pe===void 0&&(K==="instanceMatrix"&&w.instanceMatrix&&(Pe=w.instanceMatrix),K==="instanceColor"&&w.instanceColor&&(Pe=w.instanceColor)),de===void 0||de.attribute!==Pe||Pe&&de.data!==Pe.data)return!0;Z++}return a.attributesNum!==Z||a.index!==q}function v(w,O,k,q){const $={},J=O.attributes;let Z=0;const he=k.getAttributes();for(const K in he)if(he[K].location>=0){let de=J[K];de===void 0&&(K==="instanceMatrix"&&w.instanceMatrix&&(de=w.instanceMatrix),K==="instanceColor"&&w.instanceColor&&(de=w.instanceColor));const Pe={};Pe.attribute=de,de&&de.data&&(Pe.data=de.data),$[K]=Pe,Z++}a.attributes=$,a.attributesNum=Z,a.index=q}function b(){const w=a.newAttributes;for(let O=0,k=w.length;O<k;O++)w[O]=0}function g(w){p(w,0)}function p(w,O){const k=a.newAttributes,q=a.enabledAttributes,$=a.attributeDivisors;k[w]=1,q[w]===0&&(n.enableVertexAttribArray(w),q[w]=1),$[w]!==O&&(n.vertexAttribDivisor(w,O),$[w]=O)}function T(){const w=a.newAttributes,O=a.enabledAttributes;for(let k=0,q=O.length;k<q;k++)O[k]!==w[k]&&(n.disableVertexAttribArray(k),O[k]=0)}function A(w,O,k,q,$,J,Z){Z===!0?n.vertexAttribIPointer(w,O,k,$,J):n.vertexAttribPointer(w,O,k,q,$,J)}function D(w,O,k,q){b();const $=q.attributes,J=k.getAttributes(),Z=O.defaultAttributeValues;for(const he in J){const K=J[he];if(K.location>=0){let fe=$[he];if(fe===void 0&&(he==="instanceMatrix"&&w.instanceMatrix&&(fe=w.instanceMatrix),he==="instanceColor"&&w.instanceColor&&(fe=w.instanceColor)),fe!==void 0){const de=fe.normalized,Pe=fe.itemSize,tt=e.get(fe);if(tt===void 0)continue;const nt=tt.buffer,ft=tt.type,xt=tt.bytesPerElement,ee=ft===n.INT||ft===n.UNSIGNED_INT||fe.gpuType===Vl;if(fe.isInterleavedBufferAttribute){const ne=fe.data,Te=ne.stride,He=fe.offset;if(ne.isInstancedInterleavedBuffer){for(let Ue=0;Ue<K.locationSize;Ue++)p(K.location+Ue,ne.meshPerAttribute);w.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=ne.meshPerAttribute*ne.count)}else for(let Ue=0;Ue<K.locationSize;Ue++)g(K.location+Ue);n.bindBuffer(n.ARRAY_BUFFER,nt);for(let Ue=0;Ue<K.locationSize;Ue++)A(K.location+Ue,Pe/K.locationSize,ft,de,Te*xt,(He+Pe/K.locationSize*Ue)*xt,ee)}else{if(fe.isInstancedBufferAttribute){for(let ne=0;ne<K.locationSize;ne++)p(K.location+ne,fe.meshPerAttribute);w.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=fe.meshPerAttribute*fe.count)}else for(let ne=0;ne<K.locationSize;ne++)g(K.location+ne);n.bindBuffer(n.ARRAY_BUFFER,nt);for(let ne=0;ne<K.locationSize;ne++)A(K.location+ne,Pe/K.locationSize,ft,de,Pe*xt,Pe/K.locationSize*ne*xt,ee)}}else if(Z!==void 0){const de=Z[he];if(de!==void 0)switch(de.length){case 2:n.vertexAttrib2fv(K.location,de);break;case 3:n.vertexAttrib3fv(K.location,de);break;case 4:n.vertexAttrib4fv(K.location,de);break;default:n.vertexAttrib1fv(K.location,de)}}}}T()}function I(){B();for(const w in i){const O=i[w];for(const k in O){const q=O[k];for(const $ in q)u(q[$].object),delete q[$];delete O[k]}delete i[w]}}function C(w){if(i[w.id]===void 0)return;const O=i[w.id];for(const k in O){const q=O[k];for(const $ in q)u(q[$].object),delete q[$];delete O[k]}delete i[w.id]}function U(w){for(const O in i){const k=i[O];if(k[w.id]===void 0)continue;const q=k[w.id];for(const $ in q)u(q[$].object),delete q[$];delete k[w.id]}}function B(){E(),s=!0,a!==r&&(a=r,c(a.object))}function E(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:B,resetDefaultState:E,dispose:I,releaseStatesOfGeometry:C,releaseStatesOfProgram:U,initAttributes:b,enableAttribute:g,disableUnusedAttributes:T}}function hx(n,e,t){let i;function r(c){i=c}function a(c,u){n.drawArrays(i,c,u),t.update(u,i,1)}function s(c,u,d){d!==0&&(n.drawArraysInstanced(i,c,u,d),t.update(u,i,d))}function o(c,u,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,d);let m=0;for(let v=0;v<d;v++)m+=u[v];t.update(m,i,1)}function l(c,u,d,f){if(d===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let v=0;v<c.length;v++)s(c[v],u[v],f[v]);else{m.multiDrawArraysInstancedWEBGL(i,c,0,u,0,f,0,d);let v=0;for(let b=0;b<d;b++)v+=u[b]*f[b];t.update(v,i,1)}}this.setMode=r,this.render=a,this.renderInstances=s,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function dx(n,e,t,i){let r;function a(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const U=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(U.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function s(U){return!(U!==Zn&&i.convert(U)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(U){const B=U===ua&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(U!==si&&i.convert(U)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&U!==Mi&&!B)}function l(U){if(U==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";U="mediump"}return U==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&($e("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const d=t.logarithmicDepthBuffer===!0,f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),m=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),b=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),T=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),A=n.getParameter(n.MAX_VARYING_VECTORS),D=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),I=v>0,C=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:l,textureFormatReadable:s,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:m,maxVertexTextures:v,maxTextureSize:b,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:T,maxVaryings:A,maxFragmentUniforms:D,vertexTextures:I,maxSamples:C}}function fx(n){const e=this;let t=null,i=0,r=!1,a=!1;const s=new ki,o=new Qe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const m=d.length!==0||f||i!==0||r;return r=f,i=d.length,m},this.beginShadows=function(){a=!0,u(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(d,f){t=u(d,f,0)},this.setState=function(d,f,m){const v=d.clippingPlanes,b=d.clipIntersection,g=d.clipShadows,p=n.get(d);if(!r||v===null||v.length===0||a&&!g)a?u(null):c();else{const T=a?0:i,A=T*4;let D=p.clippingState||null;l.value=D,D=u(v,f,A,m);for(let I=0;I!==A;++I)D[I]=t[I];p.clippingState=D,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=T}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(d,f,m,v){const b=d!==null?d.length:0;let g=null;if(b!==0){if(g=l.value,v!==!0||g===null){const p=m+b*4,T=f.matrixWorldInverse;o.getNormalMatrix(T),(g===null||g.length<p)&&(g=new Float32Array(p));for(let A=0,D=m;A!==b;++A,D+=4)s.copy(d[A]).applyMatrix4(T,o),s.normal.toArray(g,D),g[D+3]=s.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=b,e.numIntersection=0,g}}function px(n){let e=new WeakMap;function t(s,o){return o===V0?s.mapping=Zr:o===G0&&(s.mapping=Jr),s}function i(s){if(s&&s.isTexture){const o=s.mapping;if(o===V0||o===G0)if(e.has(s)){const l=e.get(s).texture;return t(l,s.mapping)}else{const l=s.image;if(l&&l.height>0){const c=new c1(l.height);return c.fromEquirectangularTexture(n,s),e.set(s,c),s.addEventListener("dispose",r),t(c.texture,s.mapping)}else return null}}return s}function r(s){const o=s.target;o.removeEventListener("dispose",r);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function a(){e=new WeakMap}return{get:i,dispose:a}}const Gi=4,Iu=[.125,.215,.35,.446,.526,.582],dr=20,mx=256,_a=new Dd,Uu=new ut;let r0=null,a0=0,s0=0,o0=!1;const xx=new G;class Nu{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,r=100,a={}){const{size:s=256,position:o=xx}=a;r0=this._renderer.getRenderTarget(),a0=this._renderer.getActiveCubeFace(),s0=this._renderer.getActiveMipmapLevel(),o0=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(s);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=zu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ou(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(r0,a0,s0),this._renderer.xr.enabled=o0,e.scissorTest=!1,Or(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Zr||e.mapping===Jr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),r0=this._renderer.getRenderTarget(),a0=this._renderer.getActiveCubeFace(),s0=this._renderer.getActiveMipmapLevel(),o0=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Hn,minFilter:Hn,generateMipmaps:!1,type:ua,format:Zn,colorSpace:Qr,depthBuffer:!1},r=Fu(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Fu(e,t,i);const{_lodMax:a}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=gx(a)),this._blurMaterial=bx(a,e,t),this._ggxMaterial=vx(a,e,t)}return r}_compileMaterial(e){const t=new Qt(new en,e);this._renderer.compile(t,_a)}_sceneToCubeUV(e,t,i,r,a){const l=new Bn(90,1,t,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,f=d.autoClear,m=d.toneMapping;d.getClearColor(Uu),d.toneMapping=Wi,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(r),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Qt(new Ha,new qr({name:"PMREM.Background",side:Mn,depthWrite:!1,depthTest:!1})));const b=this._backgroundBox,g=b.material;let p=!1;const T=e.background;T?T.isColor&&(g.color.copy(T),e.background=null,p=!0):(g.color.copy(Uu),p=!0);for(let A=0;A<6;A++){const D=A%3;D===0?(l.up.set(0,c[A],0),l.position.set(a.x,a.y,a.z),l.lookAt(a.x+u[A],a.y,a.z)):D===1?(l.up.set(0,0,c[A]),l.position.set(a.x,a.y,a.z),l.lookAt(a.x,a.y+u[A],a.z)):(l.up.set(0,c[A],0),l.position.set(a.x,a.y,a.z),l.lookAt(a.x,a.y,a.z+u[A]));const I=this._cubeSize;Or(r,D*I,A>2?I:0,I,I),d.setRenderTarget(r),p&&d.render(b,l),d.render(e,l)}d.toneMapping=m,d.autoClear=f,e.background=T}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===Zr||e.mapping===Jr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=zu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ou());const a=r?this._cubemapMaterial:this._equirectMaterial,s=this._lodMeshes[0];s.material=a;const o=a.uniforms;o.envMap.value=e;const l=this._cubeSize;Or(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(s,_a)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodMeshes.length;for(let a=1;a<r;a++)this._applyGGXFilter(e,a-1,a);t.autoClear=i}_applyGGXFilter(e,t,i){const r=this._renderer,a=this._pingPongRenderTarget,s=this._ggxMaterial,o=this._lodMeshes[i];o.material=s;const l=s.uniforms,c=i/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),d=Math.sqrt(c*c-u*u),f=.05+c*.95,m=d*f,{_lodMax:v}=this,b=this._sizeLods[i],g=3*b*(i>v-Gi?i-v+Gi:0),p=4*(this._cubeSize-b);l.envMap.value=e.texture,l.roughness.value=m,l.mipInt.value=v-t,Or(a,g,p,3*b,2*b),r.setRenderTarget(a),r.render(o,_a),l.envMap.value=a.texture,l.roughness.value=0,l.mipInt.value=v-i,Or(e,g,p,3*b,2*b),r.setRenderTarget(e),r.render(o,_a)}_blur(e,t,i,r,a){const s=this._pingPongRenderTarget;this._halfBlur(e,s,t,i,r,"latitudinal",a),this._halfBlur(s,e,i,i,r,"longitudinal",a)}_halfBlur(e,t,i,r,a,s,o){const l=this._renderer,c=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&kt("blur direction must be either latitudinal or longitudinal!");const u=3,d=this._lodMeshes[r];d.material=c;const f=c.uniforms,m=this._sizeLods[i]-1,v=isFinite(a)?Math.PI/(2*m):2*Math.PI/(2*dr-1),b=a/v,g=isFinite(a)?1+Math.floor(u*b):dr;g>dr&&$e(`sigmaRadians, ${a}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${dr}`);const p=[];let T=0;for(let U=0;U<dr;++U){const B=U/b,E=Math.exp(-B*B/2);p.push(E),U===0?T+=E:U<g&&(T+=2*E)}for(let U=0;U<p.length;U++)p[U]=p[U]/T;f.envMap.value=e.texture,f.samples.value=g,f.weights.value=p,f.latitudinal.value=s==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:A}=this;f.dTheta.value=v,f.mipInt.value=A-i;const D=this._sizeLods[r],I=3*D*(r>A-Gi?r-A+Gi:0),C=4*(this._cubeSize-D);Or(t,I,C,3*D,2*D),l.setRenderTarget(t),l.render(d,_a)}}function gx(n){const e=[],t=[],i=[];let r=n;const a=n-Gi+1+Iu.length;for(let s=0;s<a;s++){const o=Math.pow(2,r);e.push(o);let l=1/o;s>n-Gi?l=Iu[s-n+Gi-1]:s===0&&(l=0),t.push(l);const c=1/(o-2),u=-c,d=1+c,f=[u,u,d,u,d,d,u,u,d,d,u,d],m=6,v=6,b=3,g=2,p=1,T=new Float32Array(b*v*m),A=new Float32Array(g*v*m),D=new Float32Array(p*v*m);for(let C=0;C<m;C++){const U=C%3*2/3-1,B=C>2?0:-1,E=[U,B,0,U+2/3,B,0,U+2/3,B+1,0,U,B,0,U+2/3,B+1,0,U,B+1,0];T.set(E,b*v*C),A.set(f,g*v*C);const w=[C,C,C,C,C,C];D.set(w,p*v*C)}const I=new en;I.setAttribute("position",new ai(T,b)),I.setAttribute("uv",new ai(A,g)),I.setAttribute("faceIndex",new ai(D,p)),i.push(new Qt(I,null)),r>Gi&&r--}return{lodMeshes:i,sizeLods:e,sigmas:t}}function Fu(n,e,t){const i=new vr(n,e,t);return i.texture.mapping=ro,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Or(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function vx(n,e,t){return new Ci({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:mx,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:oo(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 3.2: Transform view direction to hemisphere configuration
				vec3 Vh = normalize(vec3(alpha * V.x, alpha * V.y, V.z));

				// Section 4.1: Orthonormal basis
				float lensq = Vh.x * Vh.x + Vh.y * Vh.y;
				vec3 T1 = lensq > 0.0 ? vec3(-Vh.y, Vh.x, 0.0) / sqrt(lensq) : vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(Vh, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + Vh.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:wi,depthTest:!1,depthWrite:!1})}function bx(n,e,t){const i=new Float32Array(dr),r=new G(0,1,0);return new Ci({name:"SphericalGaussianBlur",defines:{n:dr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:oo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:wi,depthTest:!1,depthWrite:!1})}function Ou(){return new Ci({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:oo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:wi,depthTest:!1,depthWrite:!1})}function zu(){return new Ci({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:oo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:wi,depthTest:!1,depthWrite:!1})}function oo(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function _x(n){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===V0||l===G0,u=l===Zr||l===Jr;if(c||u){let d=e.get(o);const f=d!==void 0?d.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return t===null&&(t=new Nu(n)),d=c?t.fromEquirectangular(o,d):t.fromCubemap(o,d),d.texture.pmremVersion=o.pmremVersion,e.set(o,d),d.texture;if(d!==void 0)return d.texture;{const m=o.image;return c&&m&&m.height>0||u&&m&&r(m)?(t===null&&(t=new Nu(n)),d=c?t.fromEquirectangular(o):t.fromCubemap(o),d.texture.pmremVersion=o.pmremVersion,e.set(o,d),o.addEventListener("dispose",a),d.texture):null}}}return o}function r(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function a(o){const l=o.target;l.removeEventListener("dispose",a);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function s(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:s}}function yx(n){const e={};function t(i){if(e[i]!==void 0)return e[i];const r=n.getExtension(i);return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&Ia("WebGLRenderer: "+i+" extension not supported."),r}}}function Mx(n,e,t,i){const r={},a=new WeakMap;function s(d){const f=d.target;f.index!==null&&e.remove(f.index);for(const v in f.attributes)e.remove(f.attributes[v]);f.removeEventListener("dispose",s),delete r[f.id];const m=a.get(f);m&&(e.remove(m),a.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(d,f){return r[f.id]===!0||(f.addEventListener("dispose",s),r[f.id]=!0,t.memory.geometries++),f}function l(d){const f=d.attributes;for(const m in f)e.update(f[m],n.ARRAY_BUFFER)}function c(d){const f=[],m=d.index,v=d.attributes.position;let b=0;if(m!==null){const T=m.array;b=m.version;for(let A=0,D=T.length;A<D;A+=3){const I=T[A+0],C=T[A+1],U=T[A+2];f.push(I,C,C,U,U,I)}}else if(v!==void 0){const T=v.array;b=v.version;for(let A=0,D=T.length/3-1;A<D;A+=3){const I=A+0,C=A+1,U=A+2;f.push(I,C,C,U,U,I)}}else return;const g=new(vd(f)?Sd:Md)(f,1);g.version=b;const p=a.get(d);p&&e.remove(p),a.set(d,g)}function u(d){const f=a.get(d);if(f){const m=d.index;m!==null&&f.version<m.version&&c(d)}else c(d);return a.get(d)}return{get:o,update:l,getWireframeAttribute:u}}function Sx(n,e,t){let i;function r(f){i=f}let a,s;function o(f){a=f.type,s=f.bytesPerElement}function l(f,m){n.drawElements(i,m,a,f*s),t.update(m,i,1)}function c(f,m,v){v!==0&&(n.drawElementsInstanced(i,m,a,f*s,v),t.update(m,i,v))}function u(f,m,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,m,0,a,f,0,v);let g=0;for(let p=0;p<v;p++)g+=m[p];t.update(g,i,1)}function d(f,m,v,b){if(v===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let p=0;p<f.length;p++)c(f[p]/s,m[p],b[p]);else{g.multiDrawElementsInstancedWEBGL(i,m,0,a,f,0,b,0,v);let p=0;for(let T=0;T<v;T++)p+=m[T]*b[T];t.update(p,i,1)}}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function wx(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(a,s,o){switch(t.calls++,s){case n.TRIANGLES:t.triangles+=o*(a/3);break;case n.LINES:t.lines+=o*(a/2);break;case n.LINE_STRIP:t.lines+=o*(a-1);break;case n.LINE_LOOP:t.lines+=o*a;break;case n.POINTS:t.points+=o*a;break;default:kt("WebGLInfo: Unknown draw mode:",s);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function Ex(n,e,t){const i=new WeakMap,r=new zt;function a(s,o,l){const c=s.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=u!==void 0?u.length:0;let f=i.get(o);if(f===void 0||f.count!==d){let E=function(){U.dispose(),i.delete(o),o.removeEventListener("dispose",E)};f!==void 0&&f.texture.dispose();const m=o.morphAttributes.position!==void 0,v=o.morphAttributes.normal!==void 0,b=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],T=o.morphAttributes.color||[];let A=0;m===!0&&(A=1),v===!0&&(A=2),b===!0&&(A=3);let D=o.attributes.position.count*A,I=1;D>e.maxTextureSize&&(I=Math.ceil(D/e.maxTextureSize),D=e.maxTextureSize);const C=new Float32Array(D*I*4*d),U=new bd(C,D,I,d);U.type=Mi,U.needsUpdate=!0;const B=A*4;for(let w=0;w<d;w++){const O=g[w],k=p[w],q=T[w],$=D*I*4*w;for(let J=0;J<O.count;J++){const Z=J*B;m===!0&&(r.fromBufferAttribute(O,J),C[$+Z+0]=r.x,C[$+Z+1]=r.y,C[$+Z+2]=r.z,C[$+Z+3]=0),v===!0&&(r.fromBufferAttribute(k,J),C[$+Z+4]=r.x,C[$+Z+5]=r.y,C[$+Z+6]=r.z,C[$+Z+7]=0),b===!0&&(r.fromBufferAttribute(q,J),C[$+Z+8]=r.x,C[$+Z+9]=r.y,C[$+Z+10]=r.z,C[$+Z+11]=q.itemSize===4?r.w:1)}}f={count:d,texture:U,size:new je(D,I)},i.set(o,f),o.addEventListener("dispose",E)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",s.morphTexture,t);else{let m=0;for(let b=0;b<c.length;b++)m+=c[b];const v=o.morphTargetsRelative?1:1-m;l.getUniforms().setValue(n,"morphTargetBaseInfluence",v),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:a}}function Tx(n,e,t,i){let r=new WeakMap;function a(l){const c=i.render.frame,u=l.geometry,d=e.get(l,u);if(r.get(d)!==c&&(e.update(d),r.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;r.get(f)!==c&&(f.update(),r.set(f,c))}return d}function s(){r=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:a,dispose:s}}const Ld=new pn,Bu=new Ad(1,1),Id=new bd,Ud=new Xm,Nd=new Td,ku=[],Hu=[],Vu=new Float32Array(16),Gu=new Float32Array(9),Wu=new Float32Array(4);function da(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let a=ku[r];if(a===void 0&&(a=new Float32Array(r),ku[r]=a),e!==0){i.toArray(a,0);for(let s=1,o=0;s!==e;++s)o+=t,n[s].toArray(a,o)}return a}function Kt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Zt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function lo(n,e){let t=Hu[e];t===void 0&&(t=new Int32Array(e),Hu[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function Ax(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function Cx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Kt(t,e))return;n.uniform2fv(this.addr,e),Zt(t,e)}}function Rx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Kt(t,e))return;n.uniform3fv(this.addr,e),Zt(t,e)}}function Dx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Kt(t,e))return;n.uniform4fv(this.addr,e),Zt(t,e)}}function Px(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Kt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Zt(t,e)}else{if(Kt(t,i))return;Wu.set(i),n.uniformMatrix2fv(this.addr,!1,Wu),Zt(t,i)}}function Lx(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Kt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Zt(t,e)}else{if(Kt(t,i))return;Gu.set(i),n.uniformMatrix3fv(this.addr,!1,Gu),Zt(t,i)}}function Ix(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Kt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Zt(t,e)}else{if(Kt(t,i))return;Vu.set(i),n.uniformMatrix4fv(this.addr,!1,Vu),Zt(t,i)}}function Ux(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function Nx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Kt(t,e))return;n.uniform2iv(this.addr,e),Zt(t,e)}}function Fx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Kt(t,e))return;n.uniform3iv(this.addr,e),Zt(t,e)}}function Ox(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Kt(t,e))return;n.uniform4iv(this.addr,e),Zt(t,e)}}function zx(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function Bx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Kt(t,e))return;n.uniform2uiv(this.addr,e),Zt(t,e)}}function kx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Kt(t,e))return;n.uniform3uiv(this.addr,e),Zt(t,e)}}function Hx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Kt(t,e))return;n.uniform4uiv(this.addr,e),Zt(t,e)}}function Vx(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let a;this.type===n.SAMPLER_2D_SHADOW?(Bu.compareFunction=gd,a=Bu):a=Ld,t.setTexture2D(e||a,r)}function Gx(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||Ud,r)}function Wx(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||Nd,r)}function qx(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||Id,r)}function Xx(n){switch(n){case 5126:return Ax;case 35664:return Cx;case 35665:return Rx;case 35666:return Dx;case 35674:return Px;case 35675:return Lx;case 35676:return Ix;case 5124:case 35670:return Ux;case 35667:case 35671:return Nx;case 35668:case 35672:return Fx;case 35669:case 35673:return Ox;case 5125:return zx;case 36294:return Bx;case 36295:return kx;case 36296:return Hx;case 35678:case 36198:case 36298:case 36306:case 35682:return Vx;case 35679:case 36299:case 36307:return Gx;case 35680:case 36300:case 36308:case 36293:return Wx;case 36289:case 36303:case 36311:case 36292:return qx}}function Yx(n,e){n.uniform1fv(this.addr,e)}function $x(n,e){const t=da(e,this.size,2);n.uniform2fv(this.addr,t)}function jx(n,e){const t=da(e,this.size,3);n.uniform3fv(this.addr,t)}function Kx(n,e){const t=da(e,this.size,4);n.uniform4fv(this.addr,t)}function Zx(n,e){const t=da(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function Jx(n,e){const t=da(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function Qx(n,e){const t=da(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function e4(n,e){n.uniform1iv(this.addr,e)}function t4(n,e){n.uniform2iv(this.addr,e)}function n4(n,e){n.uniform3iv(this.addr,e)}function i4(n,e){n.uniform4iv(this.addr,e)}function r4(n,e){n.uniform1uiv(this.addr,e)}function a4(n,e){n.uniform2uiv(this.addr,e)}function s4(n,e){n.uniform3uiv(this.addr,e)}function o4(n,e){n.uniform4uiv(this.addr,e)}function l4(n,e,t){const i=this.cache,r=e.length,a=lo(t,r);Kt(i,a)||(n.uniform1iv(this.addr,a),Zt(i,a));for(let s=0;s!==r;++s)t.setTexture2D(e[s]||Ld,a[s])}function c4(n,e,t){const i=this.cache,r=e.length,a=lo(t,r);Kt(i,a)||(n.uniform1iv(this.addr,a),Zt(i,a));for(let s=0;s!==r;++s)t.setTexture3D(e[s]||Ud,a[s])}function u4(n,e,t){const i=this.cache,r=e.length,a=lo(t,r);Kt(i,a)||(n.uniform1iv(this.addr,a),Zt(i,a));for(let s=0;s!==r;++s)t.setTextureCube(e[s]||Nd,a[s])}function h4(n,e,t){const i=this.cache,r=e.length,a=lo(t,r);Kt(i,a)||(n.uniform1iv(this.addr,a),Zt(i,a));for(let s=0;s!==r;++s)t.setTexture2DArray(e[s]||Id,a[s])}function d4(n){switch(n){case 5126:return Yx;case 35664:return $x;case 35665:return jx;case 35666:return Kx;case 35674:return Zx;case 35675:return Jx;case 35676:return Qx;case 5124:case 35670:return e4;case 35667:case 35671:return t4;case 35668:case 35672:return n4;case 35669:case 35673:return i4;case 5125:return r4;case 36294:return a4;case 36295:return s4;case 36296:return o4;case 35678:case 36198:case 36298:case 36306:case 35682:return l4;case 35679:case 36299:case 36307:return c4;case 35680:case 36300:case 36308:case 36293:return u4;case 36289:case 36303:case 36311:case 36292:return h4}}class f4{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Xx(t.type)}}class p4{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=d4(t.type)}}class m4{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let a=0,s=r.length;a!==s;++a){const o=r[a];o.setValue(e,t[o.id],i)}}}const l0=/(\w+)(\])?(\[|\.)?/g;function qu(n,e){n.seq.push(e),n.map[e.id]=e}function x4(n,e,t){const i=n.name,r=i.length;for(l0.lastIndex=0;;){const a=l0.exec(i),s=l0.lastIndex;let o=a[1];const l=a[2]==="]",c=a[3];if(l&&(o=o|0),c===void 0||c==="["&&s+2===r){qu(t,c===void 0?new f4(o,n,e):new p4(o,n,e));break}else{let d=t.map[o];d===void 0&&(d=new m4(o),qu(t,d)),t=d}}}class Ls{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const a=e.getActiveUniform(t,r),s=e.getUniformLocation(t,a.name);x4(a,s,this)}}setValue(e,t,i,r){const a=this.map[t];a!==void 0&&a.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let a=0,s=t.length;a!==s;++a){const o=t[a],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,a=e.length;r!==a;++r){const s=e[r];s.id in t&&i.push(s)}return i}}function Xu(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const g4=37297;let v4=0;function b4(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),a=Math.min(e+6,t.length);for(let s=r;s<a;s++){const o=s+1;i.push(`${o===e?">":" "} ${o}: ${t[s]}`)}return i.join(`
`)}const Yu=new Qe;function _4(n){dt._getMatrix(Yu,dt.workingColorSpace,n);const e=`mat3( ${Yu.elements.map(t=>t.toFixed(4))} )`;switch(dt.getTransfer(n)){case zs:return[e,"LinearTransferOETF"];case Mt:return[e,"sRGBTransferOETF"];default:return $e("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function $u(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),a=(n.getShaderInfoLog(e)||"").trim();if(i&&a==="")return"";const s=/ERROR: 0:(\d+)/.exec(a);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+a+`

`+b4(n.getShaderSource(e),o)}else return a}function y4(n,e){const t=_4(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function M4(n,e){let t;switch(e){case bm:t="Linear";break;case _m:t="Reinhard";break;case ym:t="Cineon";break;case Mm:t="ACESFilmic";break;case wm:t="AgX";break;case Em:t="Neutral";break;case Sm:t="Custom";break;default:$e("WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const ys=new G;function S4(){dt.getLuminanceCoefficients(ys);const n=ys.x.toFixed(4),e=ys.y.toFixed(4),t=ys.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function w4(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ma).join(`
`)}function E4(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function T4(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const a=n.getActiveAttrib(e,r),s=a.name;let o=1;a.type===n.FLOAT_MAT2&&(o=2),a.type===n.FLOAT_MAT3&&(o=3),a.type===n.FLOAT_MAT4&&(o=4),t[s]={type:a.type,location:n.getAttribLocation(e,s),locationSize:o}}return t}function Ma(n){return n!==""}function ju(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Ku(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const A4=/^[ \t]*#include +<([\w\d./]+)>/gm;function yl(n){return n.replace(A4,R4)}const C4=new Map;function R4(n,e){let t=it[e];if(t===void 0){const i=C4.get(e);if(i!==void 0)t=it[i],$e('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return yl(t)}const D4=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Zu(n){return n.replace(D4,P4)}function P4(n,e,t,i){let r="";for(let a=parseInt(e);a<parseInt(t);a++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return r}function Ju(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function L4(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===sd?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Jp?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===bi&&(e="SHADOWMAP_TYPE_VSM"),e}function I4(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Zr:case Jr:e="ENVMAP_TYPE_CUBE";break;case ro:e="ENVMAP_TYPE_CUBE_UV";break}return e}function U4(n){let e="ENVMAP_MODE_REFLECTION";return n.envMap&&n.envMapMode===Jr&&(e="ENVMAP_MODE_REFRACTION"),e}function N4(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case od:e="ENVMAP_BLENDING_MULTIPLY";break;case gm:e="ENVMAP_BLENDING_MIX";break;case vm:e="ENVMAP_BLENDING_ADD";break}return e}function F4(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function O4(n,e,t,i){const r=n.getContext(),a=t.defines;let s=t.vertexShader,o=t.fragmentShader;const l=L4(t),c=I4(t),u=U4(t),d=N4(t),f=F4(t),m=w4(t),v=E4(a),b=r.createProgram();let g,p,T=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(Ma).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(Ma).join(`
`),p.length>0&&(p+=`
`)):(g=[Ju(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ma).join(`
`),p=[Ju(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Wi?"#define TONE_MAPPING":"",t.toneMapping!==Wi?it.tonemapping_pars_fragment:"",t.toneMapping!==Wi?M4("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",it.colorspace_pars_fragment,y4("linearToOutputTexel",t.outputColorSpace),S4(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ma).join(`
`)),s=yl(s),s=ju(s,t),s=Ku(s,t),o=yl(o),o=ju(o,t),o=Ku(o,t),s=Zu(s),o=Zu(o),t.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,g=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",t.glslVersion===ru?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ru?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const A=T+g+s,D=T+p+o,I=Xu(r,r.VERTEX_SHADER,A),C=Xu(r,r.FRAGMENT_SHADER,D);r.attachShader(b,I),r.attachShader(b,C),t.index0AttributeName!==void 0?r.bindAttribLocation(b,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(b,0,"position"),r.linkProgram(b);function U(O){if(n.debug.checkShaderErrors){const k=r.getProgramInfoLog(b)||"",q=r.getShaderInfoLog(I)||"",$=r.getShaderInfoLog(C)||"",J=k.trim(),Z=q.trim(),he=$.trim();let K=!0,fe=!0;if(r.getProgramParameter(b,r.LINK_STATUS)===!1)if(K=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,b,I,C);else{const de=$u(r,I,"vertex"),Pe=$u(r,C,"fragment");kt("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(b,r.VALIDATE_STATUS)+`

Material Name: `+O.name+`
Material Type: `+O.type+`

Program Info Log: `+J+`
`+de+`
`+Pe)}else J!==""?$e("WebGLProgram: Program Info Log:",J):(Z===""||he==="")&&(fe=!1);fe&&(O.diagnostics={runnable:K,programLog:J,vertexShader:{log:Z,prefix:g},fragmentShader:{log:he,prefix:p}})}r.deleteShader(I),r.deleteShader(C),B=new Ls(r,b),E=T4(r,b)}let B;this.getUniforms=function(){return B===void 0&&U(this),B};let E;this.getAttributes=function(){return E===void 0&&U(this),E};let w=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=r.getProgramParameter(b,g4)),w},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(b),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=v4++,this.cacheKey=e,this.usedTimes=1,this.program=b,this.vertexShader=I,this.fragmentShader=C,this}let z4=0;class B4{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),a=this._getShaderStage(i),s=this._getShaderCacheForMaterial(e);return s.has(r)===!1&&(s.add(r),r.usedTimes++),s.has(a)===!1&&(s.add(a),a.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new k4(e),t.set(e,i)),i}}class k4{constructor(e){this.id=z4++,this.code=e,this.usedTimes=0}}function H4(n,e,t,i,r,a,s){const o=new _d,l=new B4,c=new Set,u=[],d=r.logarithmicDepthBuffer,f=r.vertexTextures;let m=r.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function b(E){return c.add(E),E===0?"uv":`uv${E}`}function g(E,w,O,k,q){const $=k.fog,J=q.geometry,Z=E.isMeshStandardMaterial?k.environment:null,he=(E.isMeshStandardMaterial?t:e).get(E.envMap||Z),K=he&&he.mapping===ro?he.image.height:null,fe=v[E.type];E.precision!==null&&(m=r.getMaxPrecision(E.precision),m!==E.precision&&$e("WebGLProgram.getParameters:",E.precision,"not supported, using",m,"instead."));const de=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,Pe=de!==void 0?de.length:0;let tt=0;J.morphAttributes.position!==void 0&&(tt=1),J.morphAttributes.normal!==void 0&&(tt=2),J.morphAttributes.color!==void 0&&(tt=3);let nt,ft,xt,ee;if(fe){const _t=ni[fe];nt=_t.vertexShader,ft=_t.fragmentShader}else nt=E.vertexShader,ft=E.fragmentShader,l.update(E),xt=l.getVertexShaderID(E),ee=l.getFragmentShaderID(E);const ne=n.getRenderTarget(),Te=n.state.buffers.depth.getReversed(),He=q.isInstancedMesh===!0,Ue=q.isBatchedMesh===!0,rt=!!E.map,Ht=!!E.matcap,Je=!!he,gt=!!E.aoMap,N=!!E.lightMap,at=!!E.bumpMap,st=!!E.normalMap,vt=!!E.displacementMap,Ce=!!E.emissiveMap,bt=!!E.metalnessMap,Ne=!!E.roughnessMap,Ye=E.anisotropy>0,R=E.clearcoat>0,y=E.dispersion>0,W=E.iridescence>0,Q=E.sheen>0,re=E.transmission>0,j=Ye&&!!E.anisotropyMap,Le=R&&!!E.clearcoatMap,_e=R&&!!E.clearcoatNormalMap,ze=R&&!!E.clearcoatRoughnessMap,Ie=W&&!!E.iridescenceMap,se=W&&!!E.iridescenceThicknessMap,me=Q&&!!E.sheenColorMap,Ge=Q&&!!E.sheenRoughnessMap,ke=!!E.specularMap,Ee=!!E.specularColorMap,Xe=!!E.specularIntensityMap,F=re&&!!E.transmissionMap,ye=re&&!!E.thicknessMap,ge=!!E.gradientMap,ve=!!E.alphaMap,ce=E.alphaTest>0,te=!!E.alphaHash,Re=!!E.extensions;let Ze=Wi;E.toneMapped&&(ne===null||ne.isXRRenderTarget===!0)&&(Ze=n.toneMapping);const At={shaderID:fe,shaderType:E.type,shaderName:E.name,vertexShader:nt,fragmentShader:ft,defines:E.defines,customVertexShaderID:xt,customFragmentShaderID:ee,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:m,batching:Ue,batchingColor:Ue&&q._colorsTexture!==null,instancing:He,instancingColor:He&&q.instanceColor!==null,instancingMorph:He&&q.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:ne===null?n.outputColorSpace:ne.isXRRenderTarget===!0?ne.texture.colorSpace:Qr,alphaToCoverage:!!E.alphaToCoverage,map:rt,matcap:Ht,envMap:Je,envMapMode:Je&&he.mapping,envMapCubeUVHeight:K,aoMap:gt,lightMap:N,bumpMap:at,normalMap:st,displacementMap:f&&vt,emissiveMap:Ce,normalMapObjectSpace:st&&E.normalMapType===Rm,normalMapTangentSpace:st&&E.normalMapType===xd,metalnessMap:bt,roughnessMap:Ne,anisotropy:Ye,anisotropyMap:j,clearcoat:R,clearcoatMap:Le,clearcoatNormalMap:_e,clearcoatRoughnessMap:ze,dispersion:y,iridescence:W,iridescenceMap:Ie,iridescenceThicknessMap:se,sheen:Q,sheenColorMap:me,sheenRoughnessMap:Ge,specularMap:ke,specularColorMap:Ee,specularIntensityMap:Xe,transmission:re,transmissionMap:F,thicknessMap:ye,gradientMap:ge,opaque:E.transparent===!1&&E.blending===Gr&&E.alphaToCoverage===!1,alphaMap:ve,alphaTest:ce,alphaHash:te,combine:E.combine,mapUv:rt&&b(E.map.channel),aoMapUv:gt&&b(E.aoMap.channel),lightMapUv:N&&b(E.lightMap.channel),bumpMapUv:at&&b(E.bumpMap.channel),normalMapUv:st&&b(E.normalMap.channel),displacementMapUv:vt&&b(E.displacementMap.channel),emissiveMapUv:Ce&&b(E.emissiveMap.channel),metalnessMapUv:bt&&b(E.metalnessMap.channel),roughnessMapUv:Ne&&b(E.roughnessMap.channel),anisotropyMapUv:j&&b(E.anisotropyMap.channel),clearcoatMapUv:Le&&b(E.clearcoatMap.channel),clearcoatNormalMapUv:_e&&b(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ze&&b(E.clearcoatRoughnessMap.channel),iridescenceMapUv:Ie&&b(E.iridescenceMap.channel),iridescenceThicknessMapUv:se&&b(E.iridescenceThicknessMap.channel),sheenColorMapUv:me&&b(E.sheenColorMap.channel),sheenRoughnessMapUv:Ge&&b(E.sheenRoughnessMap.channel),specularMapUv:ke&&b(E.specularMap.channel),specularColorMapUv:Ee&&b(E.specularColorMap.channel),specularIntensityMapUv:Xe&&b(E.specularIntensityMap.channel),transmissionMapUv:F&&b(E.transmissionMap.channel),thicknessMapUv:ye&&b(E.thicknessMap.channel),alphaMapUv:ve&&b(E.alphaMap.channel),vertexTangents:!!J.attributes.tangent&&(st||Ye),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,pointsUvs:q.isPoints===!0&&!!J.attributes.uv&&(rt||ve),fog:!!$,useFog:E.fog===!0,fogExp2:!!$&&$.isFogExp2,flatShading:E.flatShading===!0&&E.wireframe===!1,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:Te,skinning:q.isSkinnedMesh===!0,morphTargets:J.morphAttributes.position!==void 0,morphNormals:J.morphAttributes.normal!==void 0,morphColors:J.morphAttributes.color!==void 0,morphTargetsCount:Pe,morphTextureStride:tt,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:E.dithering,shadowMapEnabled:n.shadowMap.enabled&&O.length>0,shadowMapType:n.shadowMap.type,toneMapping:Ze,decodeVideoTexture:rt&&E.map.isVideoTexture===!0&&dt.getTransfer(E.map.colorSpace)===Mt,decodeVideoTextureEmissive:Ce&&E.emissiveMap.isVideoTexture===!0&&dt.getTransfer(E.emissiveMap.colorSpace)===Mt,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===yn,flipSided:E.side===Mn,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:Re&&E.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Re&&E.extensions.multiDraw===!0||Ue)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return At.vertexUv1s=c.has(1),At.vertexUv2s=c.has(2),At.vertexUv3s=c.has(3),c.clear(),At}function p(E){const w=[];if(E.shaderID?w.push(E.shaderID):(w.push(E.customVertexShaderID),w.push(E.customFragmentShaderID)),E.defines!==void 0)for(const O in E.defines)w.push(O),w.push(E.defines[O]);return E.isRawShaderMaterial===!1&&(T(w,E),A(w,E),w.push(n.outputColorSpace)),w.push(E.customProgramCacheKey),w.join()}function T(E,w){E.push(w.precision),E.push(w.outputColorSpace),E.push(w.envMapMode),E.push(w.envMapCubeUVHeight),E.push(w.mapUv),E.push(w.alphaMapUv),E.push(w.lightMapUv),E.push(w.aoMapUv),E.push(w.bumpMapUv),E.push(w.normalMapUv),E.push(w.displacementMapUv),E.push(w.emissiveMapUv),E.push(w.metalnessMapUv),E.push(w.roughnessMapUv),E.push(w.anisotropyMapUv),E.push(w.clearcoatMapUv),E.push(w.clearcoatNormalMapUv),E.push(w.clearcoatRoughnessMapUv),E.push(w.iridescenceMapUv),E.push(w.iridescenceThicknessMapUv),E.push(w.sheenColorMapUv),E.push(w.sheenRoughnessMapUv),E.push(w.specularMapUv),E.push(w.specularColorMapUv),E.push(w.specularIntensityMapUv),E.push(w.transmissionMapUv),E.push(w.thicknessMapUv),E.push(w.combine),E.push(w.fogExp2),E.push(w.sizeAttenuation),E.push(w.morphTargetsCount),E.push(w.morphAttributeCount),E.push(w.numDirLights),E.push(w.numPointLights),E.push(w.numSpotLights),E.push(w.numSpotLightMaps),E.push(w.numHemiLights),E.push(w.numRectAreaLights),E.push(w.numDirLightShadows),E.push(w.numPointLightShadows),E.push(w.numSpotLightShadows),E.push(w.numSpotLightShadowsWithMaps),E.push(w.numLightProbes),E.push(w.shadowMapType),E.push(w.toneMapping),E.push(w.numClippingPlanes),E.push(w.numClipIntersection),E.push(w.depthPacking)}function A(E,w){o.disableAll(),w.supportsVertexTextures&&o.enable(0),w.instancing&&o.enable(1),w.instancingColor&&o.enable(2),w.instancingMorph&&o.enable(3),w.matcap&&o.enable(4),w.envMap&&o.enable(5),w.normalMapObjectSpace&&o.enable(6),w.normalMapTangentSpace&&o.enable(7),w.clearcoat&&o.enable(8),w.iridescence&&o.enable(9),w.alphaTest&&o.enable(10),w.vertexColors&&o.enable(11),w.vertexAlphas&&o.enable(12),w.vertexUv1s&&o.enable(13),w.vertexUv2s&&o.enable(14),w.vertexUv3s&&o.enable(15),w.vertexTangents&&o.enable(16),w.anisotropy&&o.enable(17),w.alphaHash&&o.enable(18),w.batching&&o.enable(19),w.dispersion&&o.enable(20),w.batchingColor&&o.enable(21),w.gradientMap&&o.enable(22),E.push(o.mask),o.disableAll(),w.fog&&o.enable(0),w.useFog&&o.enable(1),w.flatShading&&o.enable(2),w.logarithmicDepthBuffer&&o.enable(3),w.reversedDepthBuffer&&o.enable(4),w.skinning&&o.enable(5),w.morphTargets&&o.enable(6),w.morphNormals&&o.enable(7),w.morphColors&&o.enable(8),w.premultipliedAlpha&&o.enable(9),w.shadowMapEnabled&&o.enable(10),w.doubleSided&&o.enable(11),w.flipSided&&o.enable(12),w.useDepthPacking&&o.enable(13),w.dithering&&o.enable(14),w.transmission&&o.enable(15),w.sheen&&o.enable(16),w.opaque&&o.enable(17),w.pointsUvs&&o.enable(18),w.decodeVideoTexture&&o.enable(19),w.decodeVideoTextureEmissive&&o.enable(20),w.alphaToCoverage&&o.enable(21),E.push(o.mask)}function D(E){const w=v[E.type];let O;if(w){const k=ni[w];O=a1.clone(k.uniforms)}else O=E.uniforms;return O}function I(E,w){let O;for(let k=0,q=u.length;k<q;k++){const $=u[k];if($.cacheKey===w){O=$,++O.usedTimes;break}}return O===void 0&&(O=new O4(n,w,E,a),u.push(O)),O}function C(E){if(--E.usedTimes===0){const w=u.indexOf(E);u[w]=u[u.length-1],u.pop(),E.destroy()}}function U(E){l.remove(E)}function B(){l.dispose()}return{getParameters:g,getProgramCacheKey:p,getUniforms:D,acquireProgram:I,releaseProgram:C,releaseShaderCache:U,programs:u,dispose:B}}function V4(){let n=new WeakMap;function e(s){return n.has(s)}function t(s){let o=n.get(s);return o===void 0&&(o={},n.set(s,o)),o}function i(s){n.delete(s)}function r(s,o,l){n.get(s)[o]=l}function a(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:a}}function G4(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Qu(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function eh(){const n=[];let e=0;const t=[],i=[],r=[];function a(){e=0,t.length=0,i.length=0,r.length=0}function s(d,f,m,v,b,g){let p=n[e];return p===void 0?(p={id:d.id,object:d,geometry:f,material:m,groupOrder:v,renderOrder:d.renderOrder,z:b,group:g},n[e]=p):(p.id=d.id,p.object=d,p.geometry=f,p.material=m,p.groupOrder=v,p.renderOrder=d.renderOrder,p.z=b,p.group=g),e++,p}function o(d,f,m,v,b,g){const p=s(d,f,m,v,b,g);m.transmission>0?i.push(p):m.transparent===!0?r.push(p):t.push(p)}function l(d,f,m,v,b,g){const p=s(d,f,m,v,b,g);m.transmission>0?i.unshift(p):m.transparent===!0?r.unshift(p):t.unshift(p)}function c(d,f){t.length>1&&t.sort(d||G4),i.length>1&&i.sort(f||Qu),r.length>1&&r.sort(f||Qu)}function u(){for(let d=e,f=n.length;d<f;d++){const m=n[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:i,transparent:r,init:a,push:o,unshift:l,finish:u,sort:c}}function W4(){let n=new WeakMap;function e(i,r){const a=n.get(i);let s;return a===void 0?(s=new eh,n.set(i,[s])):r>=a.length?(s=new eh,a.push(s)):s=a[r],s}function t(){n=new WeakMap}return{get:e,dispose:t}}function q4(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new G,color:new ut};break;case"SpotLight":t={position:new G,direction:new G,color:new ut,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new G,color:new ut,distance:0,decay:0};break;case"HemisphereLight":t={direction:new G,skyColor:new ut,groundColor:new ut};break;case"RectAreaLight":t={color:new ut,position:new G,halfWidth:new G,halfHeight:new G};break}return n[e.id]=t,t}}}function X4(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new je};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new je};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new je,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let Y4=0;function $4(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function j4(n){const e=new q4,t=X4(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new G);const r=new G,a=new Tt,s=new Tt;function o(c){let u=0,d=0,f=0;for(let E=0;E<9;E++)i.probe[E].set(0,0,0);let m=0,v=0,b=0,g=0,p=0,T=0,A=0,D=0,I=0,C=0,U=0;c.sort($4);for(let E=0,w=c.length;E<w;E++){const O=c[E],k=O.color,q=O.intensity,$=O.distance,J=O.shadow&&O.shadow.map?O.shadow.map.texture:null;if(O.isAmbientLight)u+=k.r*q,d+=k.g*q,f+=k.b*q;else if(O.isLightProbe){for(let Z=0;Z<9;Z++)i.probe[Z].addScaledVector(O.sh.coefficients[Z],q);U++}else if(O.isDirectionalLight){const Z=e.get(O);if(Z.color.copy(O.color).multiplyScalar(O.intensity),O.castShadow){const he=O.shadow,K=t.get(O);K.shadowIntensity=he.intensity,K.shadowBias=he.bias,K.shadowNormalBias=he.normalBias,K.shadowRadius=he.radius,K.shadowMapSize=he.mapSize,i.directionalShadow[m]=K,i.directionalShadowMap[m]=J,i.directionalShadowMatrix[m]=O.shadow.matrix,T++}i.directional[m]=Z,m++}else if(O.isSpotLight){const Z=e.get(O);Z.position.setFromMatrixPosition(O.matrixWorld),Z.color.copy(k).multiplyScalar(q),Z.distance=$,Z.coneCos=Math.cos(O.angle),Z.penumbraCos=Math.cos(O.angle*(1-O.penumbra)),Z.decay=O.decay,i.spot[b]=Z;const he=O.shadow;if(O.map&&(i.spotLightMap[I]=O.map,I++,he.updateMatrices(O),O.castShadow&&C++),i.spotLightMatrix[b]=he.matrix,O.castShadow){const K=t.get(O);K.shadowIntensity=he.intensity,K.shadowBias=he.bias,K.shadowNormalBias=he.normalBias,K.shadowRadius=he.radius,K.shadowMapSize=he.mapSize,i.spotShadow[b]=K,i.spotShadowMap[b]=J,D++}b++}else if(O.isRectAreaLight){const Z=e.get(O);Z.color.copy(k).multiplyScalar(q),Z.halfWidth.set(O.width*.5,0,0),Z.halfHeight.set(0,O.height*.5,0),i.rectArea[g]=Z,g++}else if(O.isPointLight){const Z=e.get(O);if(Z.color.copy(O.color).multiplyScalar(O.intensity),Z.distance=O.distance,Z.decay=O.decay,O.castShadow){const he=O.shadow,K=t.get(O);K.shadowIntensity=he.intensity,K.shadowBias=he.bias,K.shadowNormalBias=he.normalBias,K.shadowRadius=he.radius,K.shadowMapSize=he.mapSize,K.shadowCameraNear=he.camera.near,K.shadowCameraFar=he.camera.far,i.pointShadow[v]=K,i.pointShadowMap[v]=J,i.pointShadowMatrix[v]=O.shadow.matrix,A++}i.point[v]=Z,v++}else if(O.isHemisphereLight){const Z=e.get(O);Z.skyColor.copy(O.color).multiplyScalar(q),Z.groundColor.copy(O.groundColor).multiplyScalar(q),i.hemi[p]=Z,p++}}g>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=be.LTC_FLOAT_1,i.rectAreaLTC2=be.LTC_FLOAT_2):(i.rectAreaLTC1=be.LTC_HALF_1,i.rectAreaLTC2=be.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=d,i.ambient[2]=f;const B=i.hash;(B.directionalLength!==m||B.pointLength!==v||B.spotLength!==b||B.rectAreaLength!==g||B.hemiLength!==p||B.numDirectionalShadows!==T||B.numPointShadows!==A||B.numSpotShadows!==D||B.numSpotMaps!==I||B.numLightProbes!==U)&&(i.directional.length=m,i.spot.length=b,i.rectArea.length=g,i.point.length=v,i.hemi.length=p,i.directionalShadow.length=T,i.directionalShadowMap.length=T,i.pointShadow.length=A,i.pointShadowMap.length=A,i.spotShadow.length=D,i.spotShadowMap.length=D,i.directionalShadowMatrix.length=T,i.pointShadowMatrix.length=A,i.spotLightMatrix.length=D+I-C,i.spotLightMap.length=I,i.numSpotLightShadowsWithMaps=C,i.numLightProbes=U,B.directionalLength=m,B.pointLength=v,B.spotLength=b,B.rectAreaLength=g,B.hemiLength=p,B.numDirectionalShadows=T,B.numPointShadows=A,B.numSpotShadows=D,B.numSpotMaps=I,B.numLightProbes=U,i.version=Y4++)}function l(c,u){let d=0,f=0,m=0,v=0,b=0;const g=u.matrixWorldInverse;for(let p=0,T=c.length;p<T;p++){const A=c[p];if(A.isDirectionalLight){const D=i.directional[d];D.direction.setFromMatrixPosition(A.matrixWorld),r.setFromMatrixPosition(A.target.matrixWorld),D.direction.sub(r),D.direction.transformDirection(g),d++}else if(A.isSpotLight){const D=i.spot[m];D.position.setFromMatrixPosition(A.matrixWorld),D.position.applyMatrix4(g),D.direction.setFromMatrixPosition(A.matrixWorld),r.setFromMatrixPosition(A.target.matrixWorld),D.direction.sub(r),D.direction.transformDirection(g),m++}else if(A.isRectAreaLight){const D=i.rectArea[v];D.position.setFromMatrixPosition(A.matrixWorld),D.position.applyMatrix4(g),s.identity(),a.copy(A.matrixWorld),a.premultiply(g),s.extractRotation(a),D.halfWidth.set(A.width*.5,0,0),D.halfHeight.set(0,A.height*.5,0),D.halfWidth.applyMatrix4(s),D.halfHeight.applyMatrix4(s),v++}else if(A.isPointLight){const D=i.point[f];D.position.setFromMatrixPosition(A.matrixWorld),D.position.applyMatrix4(g),f++}else if(A.isHemisphereLight){const D=i.hemi[b];D.direction.setFromMatrixPosition(A.matrixWorld),D.direction.transformDirection(g),b++}}}return{setup:o,setupView:l,state:i}}function th(n){const e=new j4(n),t=[],i=[];function r(u){c.camera=u,t.length=0,i.length=0}function a(u){t.push(u)}function s(u){i.push(u)}function o(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:o,setupLightsView:l,pushLight:a,pushShadow:s}}function K4(n){let e=new WeakMap;function t(r,a=0){const s=e.get(r);let o;return s===void 0?(o=new th(n),e.set(r,[o])):a>=s.length?(o=new th(n),s.push(o)):o=s[a],o}function i(){e=new WeakMap}return{get:t,dispose:i}}const Z4=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,J4=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Q4(n,e,t){let i=new Zl;const r=new je,a=new je,s=new zt,o=new g1({depthPacking:Cm}),l=new v1,c={},u=t.maxTextureSize,d={[Ki]:Mn,[Mn]:Ki,[yn]:yn},f=new Ci({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new je},radius:{value:4}},vertexShader:Z4,fragmentShader:J4}),m=f.clone();m.defines.HORIZONTAL_PASS=1;const v=new en;v.setAttribute("position",new ai(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const b=new Qt(v,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=sd;let p=this.type;this.render=function(C,U,B){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||C.length===0)return;const E=n.getRenderTarget(),w=n.getActiveCubeFace(),O=n.getActiveMipmapLevel(),k=n.state;k.setBlending(wi),k.buffers.depth.getReversed()===!0?k.buffers.color.setClear(0,0,0,0):k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);const q=p!==bi&&this.type===bi,$=p===bi&&this.type!==bi;for(let J=0,Z=C.length;J<Z;J++){const he=C[J],K=he.shadow;if(K===void 0){$e("WebGLShadowMap:",he,"has no shadow.");continue}if(K.autoUpdate===!1&&K.needsUpdate===!1)continue;r.copy(K.mapSize);const fe=K.getFrameExtents();if(r.multiply(fe),a.copy(K.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(a.x=Math.floor(u/fe.x),r.x=a.x*fe.x,K.mapSize.x=a.x),r.y>u&&(a.y=Math.floor(u/fe.y),r.y=a.y*fe.y,K.mapSize.y=a.y)),K.map===null||q===!0||$===!0){const Pe=this.type!==bi?{minFilter:In,magFilter:In}:{};K.map!==null&&K.map.dispose(),K.map=new vr(r.x,r.y,Pe),K.map.texture.name=he.name+".shadowMap",K.camera.updateProjectionMatrix()}n.setRenderTarget(K.map),n.clear();const de=K.getViewportCount();for(let Pe=0;Pe<de;Pe++){const tt=K.getViewport(Pe);s.set(a.x*tt.x,a.y*tt.y,a.x*tt.z,a.y*tt.w),k.viewport(s),K.updateMatrices(he,Pe),i=K.getFrustum(),D(U,B,K.camera,he,this.type)}K.isPointLightShadow!==!0&&this.type===bi&&T(K,B),K.needsUpdate=!1}p=this.type,g.needsUpdate=!1,n.setRenderTarget(E,w,O)};function T(C,U){const B=e.update(b);f.defines.VSM_SAMPLES!==C.blurSamples&&(f.defines.VSM_SAMPLES=C.blurSamples,m.defines.VSM_SAMPLES=C.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new vr(r.x,r.y)),f.uniforms.shadow_pass.value=C.map.texture,f.uniforms.resolution.value=C.mapSize,f.uniforms.radius.value=C.radius,n.setRenderTarget(C.mapPass),n.clear(),n.renderBufferDirect(U,null,B,f,b,null),m.uniforms.shadow_pass.value=C.mapPass.texture,m.uniforms.resolution.value=C.mapSize,m.uniforms.radius.value=C.radius,n.setRenderTarget(C.map),n.clear(),n.renderBufferDirect(U,null,B,m,b,null)}function A(C,U,B,E){let w=null;const O=B.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(O!==void 0)w=O;else if(w=B.isPointLight===!0?l:o,n.localClippingEnabled&&U.clipShadows===!0&&Array.isArray(U.clippingPlanes)&&U.clippingPlanes.length!==0||U.displacementMap&&U.displacementScale!==0||U.alphaMap&&U.alphaTest>0||U.map&&U.alphaTest>0||U.alphaToCoverage===!0){const k=w.uuid,q=U.uuid;let $=c[k];$===void 0&&($={},c[k]=$);let J=$[q];J===void 0&&(J=w.clone(),$[q]=J,U.addEventListener("dispose",I)),w=J}if(w.visible=U.visible,w.wireframe=U.wireframe,E===bi?w.side=U.shadowSide!==null?U.shadowSide:U.side:w.side=U.shadowSide!==null?U.shadowSide:d[U.side],w.alphaMap=U.alphaMap,w.alphaTest=U.alphaToCoverage===!0?.5:U.alphaTest,w.map=U.map,w.clipShadows=U.clipShadows,w.clippingPlanes=U.clippingPlanes,w.clipIntersection=U.clipIntersection,w.displacementMap=U.displacementMap,w.displacementScale=U.displacementScale,w.displacementBias=U.displacementBias,w.wireframeLinewidth=U.wireframeLinewidth,w.linewidth=U.linewidth,B.isPointLight===!0&&w.isMeshDistanceMaterial===!0){const k=n.properties.get(w);k.light=B}return w}function D(C,U,B,E,w){if(C.visible===!1)return;if(C.layers.test(U.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&w===bi)&&(!C.frustumCulled||i.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,C.matrixWorld);const q=e.update(C),$=C.material;if(Array.isArray($)){const J=q.groups;for(let Z=0,he=J.length;Z<he;Z++){const K=J[Z],fe=$[K.materialIndex];if(fe&&fe.visible){const de=A(C,fe,E,w);C.onBeforeShadow(n,C,U,B,q,de,K),n.renderBufferDirect(B,null,q,de,C,K),C.onAfterShadow(n,C,U,B,q,de,K)}}}else if($.visible){const J=A(C,$,E,w);C.onBeforeShadow(n,C,U,B,q,J,null),n.renderBufferDirect(B,null,q,J,C,null),C.onAfterShadow(n,C,U,B,q,J,null)}}const k=C.children;for(let q=0,$=k.length;q<$;q++)D(k[q],U,B,E,w)}function I(C){C.target.removeEventListener("dispose",I);for(const B in c){const E=c[B],w=C.target.uuid;w in E&&(E[w].dispose(),delete E[w])}}}const eg={[N0]:F0,[O0]:k0,[z0]:H0,[Kr]:B0,[F0]:N0,[k0]:O0,[H0]:z0,[B0]:Kr};function tg(n,e){function t(){let F=!1;const ye=new zt;let ge=null;const ve=new zt(0,0,0,0);return{setMask:function(ce){ge!==ce&&!F&&(n.colorMask(ce,ce,ce,ce),ge=ce)},setLocked:function(ce){F=ce},setClear:function(ce,te,Re,Ze,At){At===!0&&(ce*=Ze,te*=Ze,Re*=Ze),ye.set(ce,te,Re,Ze),ve.equals(ye)===!1&&(n.clearColor(ce,te,Re,Ze),ve.copy(ye))},reset:function(){F=!1,ge=null,ve.set(-1,0,0,0)}}}function i(){let F=!1,ye=!1,ge=null,ve=null,ce=null;return{setReversed:function(te){if(ye!==te){const Re=e.get("EXT_clip_control");te?Re.clipControlEXT(Re.LOWER_LEFT_EXT,Re.ZERO_TO_ONE_EXT):Re.clipControlEXT(Re.LOWER_LEFT_EXT,Re.NEGATIVE_ONE_TO_ONE_EXT),ye=te;const Ze=ce;ce=null,this.setClear(Ze)}},getReversed:function(){return ye},setTest:function(te){te?ne(n.DEPTH_TEST):Te(n.DEPTH_TEST)},setMask:function(te){ge!==te&&!F&&(n.depthMask(te),ge=te)},setFunc:function(te){if(ye&&(te=eg[te]),ve!==te){switch(te){case N0:n.depthFunc(n.NEVER);break;case F0:n.depthFunc(n.ALWAYS);break;case O0:n.depthFunc(n.LESS);break;case Kr:n.depthFunc(n.LEQUAL);break;case z0:n.depthFunc(n.EQUAL);break;case B0:n.depthFunc(n.GEQUAL);break;case k0:n.depthFunc(n.GREATER);break;case H0:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ve=te}},setLocked:function(te){F=te},setClear:function(te){ce!==te&&(ye&&(te=1-te),n.clearDepth(te),ce=te)},reset:function(){F=!1,ge=null,ve=null,ce=null,ye=!1}}}function r(){let F=!1,ye=null,ge=null,ve=null,ce=null,te=null,Re=null,Ze=null,At=null;return{setTest:function(_t){F||(_t?ne(n.STENCIL_TEST):Te(n.STENCIL_TEST))},setMask:function(_t){ye!==_t&&!F&&(n.stencilMask(_t),ye=_t)},setFunc:function(_t,Qn,qn){(ge!==_t||ve!==Qn||ce!==qn)&&(n.stencilFunc(_t,Qn,qn),ge=_t,ve=Qn,ce=qn)},setOp:function(_t,Qn,qn){(te!==_t||Re!==Qn||Ze!==qn)&&(n.stencilOp(_t,Qn,qn),te=_t,Re=Qn,Ze=qn)},setLocked:function(_t){F=_t},setClear:function(_t){At!==_t&&(n.clearStencil(_t),At=_t)},reset:function(){F=!1,ye=null,ge=null,ve=null,ce=null,te=null,Re=null,Ze=null,At=null}}}const a=new t,s=new i,o=new r,l=new WeakMap,c=new WeakMap;let u={},d={},f=new WeakMap,m=[],v=null,b=!1,g=null,p=null,T=null,A=null,D=null,I=null,C=null,U=new ut(0,0,0),B=0,E=!1,w=null,O=null,k=null,q=null,$=null;const J=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Z=!1,he=0;const K=n.getParameter(n.VERSION);K.indexOf("WebGL")!==-1?(he=parseFloat(/^WebGL (\d)/.exec(K)[1]),Z=he>=1):K.indexOf("OpenGL ES")!==-1&&(he=parseFloat(/^OpenGL ES (\d)/.exec(K)[1]),Z=he>=2);let fe=null,de={};const Pe=n.getParameter(n.SCISSOR_BOX),tt=n.getParameter(n.VIEWPORT),nt=new zt().fromArray(Pe),ft=new zt().fromArray(tt);function xt(F,ye,ge,ve){const ce=new Uint8Array(4),te=n.createTexture();n.bindTexture(F,te),n.texParameteri(F,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(F,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Re=0;Re<ge;Re++)F===n.TEXTURE_3D||F===n.TEXTURE_2D_ARRAY?n.texImage3D(ye,0,n.RGBA,1,1,ve,0,n.RGBA,n.UNSIGNED_BYTE,ce):n.texImage2D(ye+Re,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ce);return te}const ee={};ee[n.TEXTURE_2D]=xt(n.TEXTURE_2D,n.TEXTURE_2D,1),ee[n.TEXTURE_CUBE_MAP]=xt(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),ee[n.TEXTURE_2D_ARRAY]=xt(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),ee[n.TEXTURE_3D]=xt(n.TEXTURE_3D,n.TEXTURE_3D,1,1),a.setClear(0,0,0,1),s.setClear(1),o.setClear(0),ne(n.DEPTH_TEST),s.setFunc(Kr),at(!1),st(Jc),ne(n.CULL_FACE),gt(wi);function ne(F){u[F]!==!0&&(n.enable(F),u[F]=!0)}function Te(F){u[F]!==!1&&(n.disable(F),u[F]=!1)}function He(F,ye){return d[F]!==ye?(n.bindFramebuffer(F,ye),d[F]=ye,F===n.DRAW_FRAMEBUFFER&&(d[n.FRAMEBUFFER]=ye),F===n.FRAMEBUFFER&&(d[n.DRAW_FRAMEBUFFER]=ye),!0):!1}function Ue(F,ye){let ge=m,ve=!1;if(F){ge=f.get(ye),ge===void 0&&(ge=[],f.set(ye,ge));const ce=F.textures;if(ge.length!==ce.length||ge[0]!==n.COLOR_ATTACHMENT0){for(let te=0,Re=ce.length;te<Re;te++)ge[te]=n.COLOR_ATTACHMENT0+te;ge.length=ce.length,ve=!0}}else ge[0]!==n.BACK&&(ge[0]=n.BACK,ve=!0);ve&&n.drawBuffers(ge)}function rt(F){return v!==F?(n.useProgram(F),v=F,!0):!1}const Ht={[hr]:n.FUNC_ADD,[em]:n.FUNC_SUBTRACT,[tm]:n.FUNC_REVERSE_SUBTRACT};Ht[nm]=n.MIN,Ht[im]=n.MAX;const Je={[rm]:n.ZERO,[am]:n.ONE,[sm]:n.SRC_COLOR,[I0]:n.SRC_ALPHA,[dm]:n.SRC_ALPHA_SATURATE,[um]:n.DST_COLOR,[lm]:n.DST_ALPHA,[om]:n.ONE_MINUS_SRC_COLOR,[U0]:n.ONE_MINUS_SRC_ALPHA,[hm]:n.ONE_MINUS_DST_COLOR,[cm]:n.ONE_MINUS_DST_ALPHA,[fm]:n.CONSTANT_COLOR,[pm]:n.ONE_MINUS_CONSTANT_COLOR,[mm]:n.CONSTANT_ALPHA,[xm]:n.ONE_MINUS_CONSTANT_ALPHA};function gt(F,ye,ge,ve,ce,te,Re,Ze,At,_t){if(F===wi){b===!0&&(Te(n.BLEND),b=!1);return}if(b===!1&&(ne(n.BLEND),b=!0),F!==Qp){if(F!==g||_t!==E){if((p!==hr||D!==hr)&&(n.blendEquation(n.FUNC_ADD),p=hr,D=hr),_t)switch(F){case Gr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Qc:n.blendFunc(n.ONE,n.ONE);break;case eu:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case tu:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:kt("WebGLState: Invalid blending: ",F);break}else switch(F){case Gr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Qc:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case eu:kt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case tu:kt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:kt("WebGLState: Invalid blending: ",F);break}T=null,A=null,I=null,C=null,U.set(0,0,0),B=0,g=F,E=_t}return}ce=ce||ye,te=te||ge,Re=Re||ve,(ye!==p||ce!==D)&&(n.blendEquationSeparate(Ht[ye],Ht[ce]),p=ye,D=ce),(ge!==T||ve!==A||te!==I||Re!==C)&&(n.blendFuncSeparate(Je[ge],Je[ve],Je[te],Je[Re]),T=ge,A=ve,I=te,C=Re),(Ze.equals(U)===!1||At!==B)&&(n.blendColor(Ze.r,Ze.g,Ze.b,At),U.copy(Ze),B=At),g=F,E=!1}function N(F,ye){F.side===yn?Te(n.CULL_FACE):ne(n.CULL_FACE);let ge=F.side===Mn;ye&&(ge=!ge),at(ge),F.blending===Gr&&F.transparent===!1?gt(wi):gt(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),s.setFunc(F.depthFunc),s.setTest(F.depthTest),s.setMask(F.depthWrite),a.setMask(F.colorWrite);const ve=F.stencilWrite;o.setTest(ve),ve&&(o.setMask(F.stencilWriteMask),o.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),o.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),Ce(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?ne(n.SAMPLE_ALPHA_TO_COVERAGE):Te(n.SAMPLE_ALPHA_TO_COVERAGE)}function at(F){w!==F&&(F?n.frontFace(n.CW):n.frontFace(n.CCW),w=F)}function st(F){F!==Kp?(ne(n.CULL_FACE),F!==O&&(F===Jc?n.cullFace(n.BACK):F===Zp?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Te(n.CULL_FACE),O=F}function vt(F){F!==k&&(Z&&n.lineWidth(F),k=F)}function Ce(F,ye,ge){F?(ne(n.POLYGON_OFFSET_FILL),(q!==ye||$!==ge)&&(n.polygonOffset(ye,ge),q=ye,$=ge)):Te(n.POLYGON_OFFSET_FILL)}function bt(F){F?ne(n.SCISSOR_TEST):Te(n.SCISSOR_TEST)}function Ne(F){F===void 0&&(F=n.TEXTURE0+J-1),fe!==F&&(n.activeTexture(F),fe=F)}function Ye(F,ye,ge){ge===void 0&&(fe===null?ge=n.TEXTURE0+J-1:ge=fe);let ve=de[ge];ve===void 0&&(ve={type:void 0,texture:void 0},de[ge]=ve),(ve.type!==F||ve.texture!==ye)&&(fe!==ge&&(n.activeTexture(ge),fe=ge),n.bindTexture(F,ye||ee[F]),ve.type=F,ve.texture=ye)}function R(){const F=de[fe];F!==void 0&&F.type!==void 0&&(n.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function y(){try{n.compressedTexImage2D(...arguments)}catch(F){F("WebGLState:",F)}}function W(){try{n.compressedTexImage3D(...arguments)}catch(F){F("WebGLState:",F)}}function Q(){try{n.texSubImage2D(...arguments)}catch(F){F("WebGLState:",F)}}function re(){try{n.texSubImage3D(...arguments)}catch(F){F("WebGLState:",F)}}function j(){try{n.compressedTexSubImage2D(...arguments)}catch(F){F("WebGLState:",F)}}function Le(){try{n.compressedTexSubImage3D(...arguments)}catch(F){F("WebGLState:",F)}}function _e(){try{n.texStorage2D(...arguments)}catch(F){F("WebGLState:",F)}}function ze(){try{n.texStorage3D(...arguments)}catch(F){F("WebGLState:",F)}}function Ie(){try{n.texImage2D(...arguments)}catch(F){F("WebGLState:",F)}}function se(){try{n.texImage3D(...arguments)}catch(F){F("WebGLState:",F)}}function me(F){nt.equals(F)===!1&&(n.scissor(F.x,F.y,F.z,F.w),nt.copy(F))}function Ge(F){ft.equals(F)===!1&&(n.viewport(F.x,F.y,F.z,F.w),ft.copy(F))}function ke(F,ye){let ge=c.get(ye);ge===void 0&&(ge=new WeakMap,c.set(ye,ge));let ve=ge.get(F);ve===void 0&&(ve=n.getUniformBlockIndex(ye,F.name),ge.set(F,ve))}function Ee(F,ye){const ve=c.get(ye).get(F);l.get(ye)!==ve&&(n.uniformBlockBinding(ye,ve,F.__bindingPointIndex),l.set(ye,ve))}function Xe(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),s.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},fe=null,de={},d={},f=new WeakMap,m=[],v=null,b=!1,g=null,p=null,T=null,A=null,D=null,I=null,C=null,U=new ut(0,0,0),B=0,E=!1,w=null,O=null,k=null,q=null,$=null,nt.set(0,0,n.canvas.width,n.canvas.height),ft.set(0,0,n.canvas.width,n.canvas.height),a.reset(),s.reset(),o.reset()}return{buffers:{color:a,depth:s,stencil:o},enable:ne,disable:Te,bindFramebuffer:He,drawBuffers:Ue,useProgram:rt,setBlending:gt,setMaterial:N,setFlipSided:at,setCullFace:st,setLineWidth:vt,setPolygonOffset:Ce,setScissorTest:bt,activeTexture:Ne,bindTexture:Ye,unbindTexture:R,compressedTexImage2D:y,compressedTexImage3D:W,texImage2D:Ie,texImage3D:se,updateUBOMapping:ke,uniformBlockBinding:Ee,texStorage2D:_e,texStorage3D:ze,texSubImage2D:Q,texSubImage3D:re,compressedTexSubImage2D:j,compressedTexSubImage3D:Le,scissor:me,viewport:Ge,reset:Xe}}function ng(n,e,t,i,r,a,s){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new je,u=new WeakMap;let d;const f=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(R,y){return m?new OffscreenCanvas(R,y):ks("canvas")}function b(R,y,W){let Q=1;const re=Ye(R);if((re.width>W||re.height>W)&&(Q=W/Math.max(re.width,re.height)),Q<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const j=Math.floor(Q*re.width),Le=Math.floor(Q*re.height);d===void 0&&(d=v(j,Le));const _e=y?v(j,Le):d;return _e.width=j,_e.height=Le,_e.getContext("2d").drawImage(R,0,0,j,Le),$e("WebGLRenderer: Texture has been resized from ("+re.width+"x"+re.height+") to ("+j+"x"+Le+")."),_e}else return"data"in R&&$e("WebGLRenderer: Image in DataTexture is too big ("+re.width+"x"+re.height+")."),R;return R}function g(R){return R.generateMipmaps}function p(R){n.generateMipmap(R)}function T(R){return R.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?n.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function A(R,y,W,Q,re=!1){if(R!==null){if(n[R]!==void 0)return n[R];$e("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let j=y;if(y===n.RED&&(W===n.FLOAT&&(j=n.R32F),W===n.HALF_FLOAT&&(j=n.R16F),W===n.UNSIGNED_BYTE&&(j=n.R8)),y===n.RED_INTEGER&&(W===n.UNSIGNED_BYTE&&(j=n.R8UI),W===n.UNSIGNED_SHORT&&(j=n.R16UI),W===n.UNSIGNED_INT&&(j=n.R32UI),W===n.BYTE&&(j=n.R8I),W===n.SHORT&&(j=n.R16I),W===n.INT&&(j=n.R32I)),y===n.RG&&(W===n.FLOAT&&(j=n.RG32F),W===n.HALF_FLOAT&&(j=n.RG16F),W===n.UNSIGNED_BYTE&&(j=n.RG8)),y===n.RG_INTEGER&&(W===n.UNSIGNED_BYTE&&(j=n.RG8UI),W===n.UNSIGNED_SHORT&&(j=n.RG16UI),W===n.UNSIGNED_INT&&(j=n.RG32UI),W===n.BYTE&&(j=n.RG8I),W===n.SHORT&&(j=n.RG16I),W===n.INT&&(j=n.RG32I)),y===n.RGB_INTEGER&&(W===n.UNSIGNED_BYTE&&(j=n.RGB8UI),W===n.UNSIGNED_SHORT&&(j=n.RGB16UI),W===n.UNSIGNED_INT&&(j=n.RGB32UI),W===n.BYTE&&(j=n.RGB8I),W===n.SHORT&&(j=n.RGB16I),W===n.INT&&(j=n.RGB32I)),y===n.RGBA_INTEGER&&(W===n.UNSIGNED_BYTE&&(j=n.RGBA8UI),W===n.UNSIGNED_SHORT&&(j=n.RGBA16UI),W===n.UNSIGNED_INT&&(j=n.RGBA32UI),W===n.BYTE&&(j=n.RGBA8I),W===n.SHORT&&(j=n.RGBA16I),W===n.INT&&(j=n.RGBA32I)),y===n.RGB&&(W===n.UNSIGNED_INT_5_9_9_9_REV&&(j=n.RGB9_E5),W===n.UNSIGNED_INT_10F_11F_11F_REV&&(j=n.R11F_G11F_B10F)),y===n.RGBA){const Le=re?zs:dt.getTransfer(Q);W===n.FLOAT&&(j=n.RGBA32F),W===n.HALF_FLOAT&&(j=n.RGBA16F),W===n.UNSIGNED_BYTE&&(j=Le===Mt?n.SRGB8_ALPHA8:n.RGBA8),W===n.UNSIGNED_SHORT_4_4_4_4&&(j=n.RGBA4),W===n.UNSIGNED_SHORT_5_5_5_1&&(j=n.RGB5_A1)}return(j===n.R16F||j===n.R32F||j===n.RG16F||j===n.RG32F||j===n.RGBA16F||j===n.RGBA32F)&&e.get("EXT_color_buffer_float"),j}function D(R,y){let W;return R?y===null||y===xr||y===Da?W=n.DEPTH24_STENCIL8:y===Mi?W=n.DEPTH32F_STENCIL8:y===Ra&&(W=n.DEPTH24_STENCIL8,$e("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===xr||y===Da?W=n.DEPTH_COMPONENT24:y===Mi?W=n.DEPTH_COMPONENT32F:y===Ra&&(W=n.DEPTH_COMPONENT16),W}function I(R,y){return g(R)===!0||R.isFramebufferTexture&&R.minFilter!==In&&R.minFilter!==Hn?Math.log2(Math.max(y.width,y.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?y.mipmaps.length:1}function C(R){const y=R.target;y.removeEventListener("dispose",C),B(y),y.isVideoTexture&&u.delete(y)}function U(R){const y=R.target;y.removeEventListener("dispose",U),w(y)}function B(R){const y=i.get(R);if(y.__webglInit===void 0)return;const W=R.source,Q=f.get(W);if(Q){const re=Q[y.__cacheKey];re.usedTimes--,re.usedTimes===0&&E(R),Object.keys(Q).length===0&&f.delete(W)}i.remove(R)}function E(R){const y=i.get(R);n.deleteTexture(y.__webglTexture);const W=R.source,Q=f.get(W);delete Q[y.__cacheKey],s.memory.textures--}function w(R){const y=i.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),i.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(y.__webglFramebuffer[Q]))for(let re=0;re<y.__webglFramebuffer[Q].length;re++)n.deleteFramebuffer(y.__webglFramebuffer[Q][re]);else n.deleteFramebuffer(y.__webglFramebuffer[Q]);y.__webglDepthbuffer&&n.deleteRenderbuffer(y.__webglDepthbuffer[Q])}else{if(Array.isArray(y.__webglFramebuffer))for(let Q=0;Q<y.__webglFramebuffer.length;Q++)n.deleteFramebuffer(y.__webglFramebuffer[Q]);else n.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&n.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&n.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let Q=0;Q<y.__webglColorRenderbuffer.length;Q++)y.__webglColorRenderbuffer[Q]&&n.deleteRenderbuffer(y.__webglColorRenderbuffer[Q]);y.__webglDepthRenderbuffer&&n.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const W=R.textures;for(let Q=0,re=W.length;Q<re;Q++){const j=i.get(W[Q]);j.__webglTexture&&(n.deleteTexture(j.__webglTexture),s.memory.textures--),i.remove(W[Q])}i.remove(R)}let O=0;function k(){O=0}function q(){const R=O;return R>=r.maxTextures&&$e("WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+r.maxTextures),O+=1,R}function $(R){const y=[];return y.push(R.wrapS),y.push(R.wrapT),y.push(R.wrapR||0),y.push(R.magFilter),y.push(R.minFilter),y.push(R.anisotropy),y.push(R.internalFormat),y.push(R.format),y.push(R.type),y.push(R.generateMipmaps),y.push(R.premultiplyAlpha),y.push(R.flipY),y.push(R.unpackAlignment),y.push(R.colorSpace),y.join()}function J(R,y){const W=i.get(R);if(R.isVideoTexture&&bt(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&W.__version!==R.version){const Q=R.image;if(Q===null)$e("WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)$e("WebGLRenderer: Texture marked for update but image is incomplete");else{ee(W,R,y);return}}else R.isExternalTexture&&(W.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,W.__webglTexture,n.TEXTURE0+y)}function Z(R,y){const W=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&W.__version!==R.version){ee(W,R,y);return}else R.isExternalTexture&&(W.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,W.__webglTexture,n.TEXTURE0+y)}function he(R,y){const W=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&W.__version!==R.version){ee(W,R,y);return}t.bindTexture(n.TEXTURE_3D,W.__webglTexture,n.TEXTURE0+y)}function K(R,y){const W=i.get(R);if(R.version>0&&W.__version!==R.version){ne(W,R,y);return}t.bindTexture(n.TEXTURE_CUBE_MAP,W.__webglTexture,n.TEXTURE0+y)}const fe={[W0]:n.REPEAT,[yi]:n.CLAMP_TO_EDGE,[q0]:n.MIRRORED_REPEAT},de={[In]:n.NEAREST,[Tm]:n.NEAREST_MIPMAP_NEAREST,[Qa]:n.NEAREST_MIPMAP_LINEAR,[Hn]:n.LINEAR,[Do]:n.LINEAR_MIPMAP_NEAREST,[pr]:n.LINEAR_MIPMAP_LINEAR},Pe={[Dm]:n.NEVER,[Fm]:n.ALWAYS,[Pm]:n.LESS,[gd]:n.LEQUAL,[Lm]:n.EQUAL,[Nm]:n.GEQUAL,[Im]:n.GREATER,[Um]:n.NOTEQUAL};function tt(R,y){if(y.type===Mi&&e.has("OES_texture_float_linear")===!1&&(y.magFilter===Hn||y.magFilter===Do||y.magFilter===Qa||y.magFilter===pr||y.minFilter===Hn||y.minFilter===Do||y.minFilter===Qa||y.minFilter===pr)&&$e("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(R,n.TEXTURE_WRAP_S,fe[y.wrapS]),n.texParameteri(R,n.TEXTURE_WRAP_T,fe[y.wrapT]),(R===n.TEXTURE_3D||R===n.TEXTURE_2D_ARRAY)&&n.texParameteri(R,n.TEXTURE_WRAP_R,fe[y.wrapR]),n.texParameteri(R,n.TEXTURE_MAG_FILTER,de[y.magFilter]),n.texParameteri(R,n.TEXTURE_MIN_FILTER,de[y.minFilter]),y.compareFunction&&(n.texParameteri(R,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(R,n.TEXTURE_COMPARE_FUNC,Pe[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===In||y.minFilter!==Qa&&y.minFilter!==pr||y.type===Mi&&e.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||i.get(y).__currentAnisotropy){const W=e.get("EXT_texture_filter_anisotropic");n.texParameterf(R,W.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,r.getMaxAnisotropy())),i.get(y).__currentAnisotropy=y.anisotropy}}}function nt(R,y){let W=!1;R.__webglInit===void 0&&(R.__webglInit=!0,y.addEventListener("dispose",C));const Q=y.source;let re=f.get(Q);re===void 0&&(re={},f.set(Q,re));const j=$(y);if(j!==R.__cacheKey){re[j]===void 0&&(re[j]={texture:n.createTexture(),usedTimes:0},s.memory.textures++,W=!0),re[j].usedTimes++;const Le=re[R.__cacheKey];Le!==void 0&&(re[R.__cacheKey].usedTimes--,Le.usedTimes===0&&E(y)),R.__cacheKey=j,R.__webglTexture=re[j].texture}return W}function ft(R,y,W){return Math.floor(Math.floor(R/W)/y)}function xt(R,y,W,Q){const j=R.updateRanges;if(j.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,y.width,y.height,W,Q,y.data);else{j.sort((se,me)=>se.start-me.start);let Le=0;for(let se=1;se<j.length;se++){const me=j[Le],Ge=j[se],ke=me.start+me.count,Ee=ft(Ge.start,y.width,4),Xe=ft(me.start,y.width,4);Ge.start<=ke+1&&Ee===Xe&&ft(Ge.start+Ge.count-1,y.width,4)===Ee?me.count=Math.max(me.count,Ge.start+Ge.count-me.start):(++Le,j[Le]=Ge)}j.length=Le+1;const _e=n.getParameter(n.UNPACK_ROW_LENGTH),ze=n.getParameter(n.UNPACK_SKIP_PIXELS),Ie=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,y.width);for(let se=0,me=j.length;se<me;se++){const Ge=j[se],ke=Math.floor(Ge.start/4),Ee=Math.ceil(Ge.count/4),Xe=ke%y.width,F=Math.floor(ke/y.width),ye=Ee,ge=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,Xe),n.pixelStorei(n.UNPACK_SKIP_ROWS,F),t.texSubImage2D(n.TEXTURE_2D,0,Xe,F,ye,ge,W,Q,y.data)}R.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,_e),n.pixelStorei(n.UNPACK_SKIP_PIXELS,ze),n.pixelStorei(n.UNPACK_SKIP_ROWS,Ie)}}function ee(R,y,W){let Q=n.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(Q=n.TEXTURE_2D_ARRAY),y.isData3DTexture&&(Q=n.TEXTURE_3D);const re=nt(R,y),j=y.source;t.bindTexture(Q,R.__webglTexture,n.TEXTURE0+W);const Le=i.get(j);if(j.version!==Le.__version||re===!0){t.activeTexture(n.TEXTURE0+W);const _e=dt.getPrimaries(dt.workingColorSpace),ze=y.colorSpace===Hi?null:dt.getPrimaries(y.colorSpace),Ie=y.colorSpace===Hi||_e===ze?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,y.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,y.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ie);let se=b(y.image,!1,r.maxTextureSize);se=Ne(y,se);const me=a.convert(y.format,y.colorSpace),Ge=a.convert(y.type);let ke=A(y.internalFormat,me,Ge,y.colorSpace,y.isVideoTexture);tt(Q,y);let Ee;const Xe=y.mipmaps,F=y.isVideoTexture!==!0,ye=Le.__version===void 0||re===!0,ge=j.dataReady,ve=I(y,se);if(y.isDepthTexture)ke=D(y.format===La,y.type),ye&&(F?t.texStorage2D(n.TEXTURE_2D,1,ke,se.width,se.height):t.texImage2D(n.TEXTURE_2D,0,ke,se.width,se.height,0,me,Ge,null));else if(y.isDataTexture)if(Xe.length>0){F&&ye&&t.texStorage2D(n.TEXTURE_2D,ve,ke,Xe[0].width,Xe[0].height);for(let ce=0,te=Xe.length;ce<te;ce++)Ee=Xe[ce],F?ge&&t.texSubImage2D(n.TEXTURE_2D,ce,0,0,Ee.width,Ee.height,me,Ge,Ee.data):t.texImage2D(n.TEXTURE_2D,ce,ke,Ee.width,Ee.height,0,me,Ge,Ee.data);y.generateMipmaps=!1}else F?(ye&&t.texStorage2D(n.TEXTURE_2D,ve,ke,se.width,se.height),ge&&xt(y,se,me,Ge)):t.texImage2D(n.TEXTURE_2D,0,ke,se.width,se.height,0,me,Ge,se.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){F&&ye&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ve,ke,Xe[0].width,Xe[0].height,se.depth);for(let ce=0,te=Xe.length;ce<te;ce++)if(Ee=Xe[ce],y.format!==Zn)if(me!==null)if(F){if(ge)if(y.layerUpdates.size>0){const Re=Lu(Ee.width,Ee.height,y.format,y.type);for(const Ze of y.layerUpdates){const At=Ee.data.subarray(Ze*Re/Ee.data.BYTES_PER_ELEMENT,(Ze+1)*Re/Ee.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ce,0,0,Ze,Ee.width,Ee.height,1,me,At)}y.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ce,0,0,0,Ee.width,Ee.height,se.depth,me,Ee.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ce,ke,Ee.width,Ee.height,se.depth,0,Ee.data,0,0);else $e("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else F?ge&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,ce,0,0,0,Ee.width,Ee.height,se.depth,me,Ge,Ee.data):t.texImage3D(n.TEXTURE_2D_ARRAY,ce,ke,Ee.width,Ee.height,se.depth,0,me,Ge,Ee.data)}else{F&&ye&&t.texStorage2D(n.TEXTURE_2D,ve,ke,Xe[0].width,Xe[0].height);for(let ce=0,te=Xe.length;ce<te;ce++)Ee=Xe[ce],y.format!==Zn?me!==null?F?ge&&t.compressedTexSubImage2D(n.TEXTURE_2D,ce,0,0,Ee.width,Ee.height,me,Ee.data):t.compressedTexImage2D(n.TEXTURE_2D,ce,ke,Ee.width,Ee.height,0,Ee.data):$e("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):F?ge&&t.texSubImage2D(n.TEXTURE_2D,ce,0,0,Ee.width,Ee.height,me,Ge,Ee.data):t.texImage2D(n.TEXTURE_2D,ce,ke,Ee.width,Ee.height,0,me,Ge,Ee.data)}else if(y.isDataArrayTexture)if(F){if(ye&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ve,ke,se.width,se.height,se.depth),ge)if(y.layerUpdates.size>0){const ce=Lu(se.width,se.height,y.format,y.type);for(const te of y.layerUpdates){const Re=se.data.subarray(te*ce/se.data.BYTES_PER_ELEMENT,(te+1)*ce/se.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,te,se.width,se.height,1,me,Ge,Re)}y.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,se.width,se.height,se.depth,me,Ge,se.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,ke,se.width,se.height,se.depth,0,me,Ge,se.data);else if(y.isData3DTexture)F?(ye&&t.texStorage3D(n.TEXTURE_3D,ve,ke,se.width,se.height,se.depth),ge&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,se.width,se.height,se.depth,me,Ge,se.data)):t.texImage3D(n.TEXTURE_3D,0,ke,se.width,se.height,se.depth,0,me,Ge,se.data);else if(y.isFramebufferTexture){if(ye)if(F)t.texStorage2D(n.TEXTURE_2D,ve,ke,se.width,se.height);else{let ce=se.width,te=se.height;for(let Re=0;Re<ve;Re++)t.texImage2D(n.TEXTURE_2D,Re,ke,ce,te,0,me,Ge,null),ce>>=1,te>>=1}}else if(Xe.length>0){if(F&&ye){const ce=Ye(Xe[0]);t.texStorage2D(n.TEXTURE_2D,ve,ke,ce.width,ce.height)}for(let ce=0,te=Xe.length;ce<te;ce++)Ee=Xe[ce],F?ge&&t.texSubImage2D(n.TEXTURE_2D,ce,0,0,me,Ge,Ee):t.texImage2D(n.TEXTURE_2D,ce,ke,me,Ge,Ee);y.generateMipmaps=!1}else if(F){if(ye){const ce=Ye(se);t.texStorage2D(n.TEXTURE_2D,ve,ke,ce.width,ce.height)}ge&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,me,Ge,se)}else t.texImage2D(n.TEXTURE_2D,0,ke,me,Ge,se);g(y)&&p(Q),Le.__version=j.version,y.onUpdate&&y.onUpdate(y)}R.__version=y.version}function ne(R,y,W){if(y.image.length!==6)return;const Q=nt(R,y),re=y.source;t.bindTexture(n.TEXTURE_CUBE_MAP,R.__webglTexture,n.TEXTURE0+W);const j=i.get(re);if(re.version!==j.__version||Q===!0){t.activeTexture(n.TEXTURE0+W);const Le=dt.getPrimaries(dt.workingColorSpace),_e=y.colorSpace===Hi?null:dt.getPrimaries(y.colorSpace),ze=y.colorSpace===Hi||Le===_e?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,y.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,y.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ze);const Ie=y.isCompressedTexture||y.image[0].isCompressedTexture,se=y.image[0]&&y.image[0].isDataTexture,me=[];for(let te=0;te<6;te++)!Ie&&!se?me[te]=b(y.image[te],!0,r.maxCubemapSize):me[te]=se?y.image[te].image:y.image[te],me[te]=Ne(y,me[te]);const Ge=me[0],ke=a.convert(y.format,y.colorSpace),Ee=a.convert(y.type),Xe=A(y.internalFormat,ke,Ee,y.colorSpace),F=y.isVideoTexture!==!0,ye=j.__version===void 0||Q===!0,ge=re.dataReady;let ve=I(y,Ge);tt(n.TEXTURE_CUBE_MAP,y);let ce;if(Ie){F&&ye&&t.texStorage2D(n.TEXTURE_CUBE_MAP,ve,Xe,Ge.width,Ge.height);for(let te=0;te<6;te++){ce=me[te].mipmaps;for(let Re=0;Re<ce.length;Re++){const Ze=ce[Re];y.format!==Zn?ke!==null?F?ge&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,Re,0,0,Ze.width,Ze.height,ke,Ze.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,Re,Xe,Ze.width,Ze.height,0,Ze.data):$e("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):F?ge&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,Re,0,0,Ze.width,Ze.height,ke,Ee,Ze.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,Re,Xe,Ze.width,Ze.height,0,ke,Ee,Ze.data)}}}else{if(ce=y.mipmaps,F&&ye){ce.length>0&&ve++;const te=Ye(me[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,ve,Xe,te.width,te.height)}for(let te=0;te<6;te++)if(se){F?ge&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,me[te].width,me[te].height,ke,Ee,me[te].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,Xe,me[te].width,me[te].height,0,ke,Ee,me[te].data);for(let Re=0;Re<ce.length;Re++){const At=ce[Re].image[te].image;F?ge&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,Re+1,0,0,At.width,At.height,ke,Ee,At.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,Re+1,Xe,At.width,At.height,0,ke,Ee,At.data)}}else{F?ge&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,ke,Ee,me[te]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,Xe,ke,Ee,me[te]);for(let Re=0;Re<ce.length;Re++){const Ze=ce[Re];F?ge&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,Re+1,0,0,ke,Ee,Ze.image[te]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,Re+1,Xe,ke,Ee,Ze.image[te])}}}g(y)&&p(n.TEXTURE_CUBE_MAP),j.__version=re.version,y.onUpdate&&y.onUpdate(y)}R.__version=y.version}function Te(R,y,W,Q,re,j){const Le=a.convert(W.format,W.colorSpace),_e=a.convert(W.type),ze=A(W.internalFormat,Le,_e,W.colorSpace),Ie=i.get(y),se=i.get(W);if(se.__renderTarget=y,!Ie.__hasExternalTextures){const me=Math.max(1,y.width>>j),Ge=Math.max(1,y.height>>j);re===n.TEXTURE_3D||re===n.TEXTURE_2D_ARRAY?t.texImage3D(re,j,ze,me,Ge,y.depth,0,Le,_e,null):t.texImage2D(re,j,ze,me,Ge,0,Le,_e,null)}t.bindFramebuffer(n.FRAMEBUFFER,R),Ce(y)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Q,re,se.__webglTexture,0,vt(y)):(re===n.TEXTURE_2D||re>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&re<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,Q,re,se.__webglTexture,j),t.bindFramebuffer(n.FRAMEBUFFER,null)}function He(R,y,W){if(n.bindRenderbuffer(n.RENDERBUFFER,R),y.depthBuffer){const Q=y.depthTexture,re=Q&&Q.isDepthTexture?Q.type:null,j=D(y.stencilBuffer,re),Le=y.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,_e=vt(y);Ce(y)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,_e,j,y.width,y.height):W?n.renderbufferStorageMultisample(n.RENDERBUFFER,_e,j,y.width,y.height):n.renderbufferStorage(n.RENDERBUFFER,j,y.width,y.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Le,n.RENDERBUFFER,R)}else{const Q=y.textures;for(let re=0;re<Q.length;re++){const j=Q[re],Le=a.convert(j.format,j.colorSpace),_e=a.convert(j.type),ze=A(j.internalFormat,Le,_e,j.colorSpace),Ie=vt(y);W&&Ce(y)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ie,ze,y.width,y.height):Ce(y)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ie,ze,y.width,y.height):n.renderbufferStorage(n.RENDERBUFFER,ze,y.width,y.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Ue(R,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,R),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Q=i.get(y.depthTexture);Q.__renderTarget=y,(!Q.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),J(y.depthTexture,0);const re=Q.__webglTexture,j=vt(y);if(y.depthTexture.format===Pa)Ce(y)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,re,0,j):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,re,0);else if(y.depthTexture.format===La)Ce(y)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,re,0,j):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,re,0);else throw new Error("Unknown depthTexture format")}function rt(R){const y=i.get(R),W=R.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==R.depthTexture){const Q=R.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),Q){const re=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,Q.removeEventListener("dispose",re)};Q.addEventListener("dispose",re),y.__depthDisposeCallback=re}y.__boundDepthTexture=Q}if(R.depthTexture&&!y.__autoAllocateDepthBuffer){if(W)throw new Error("target.depthTexture not supported in Cube render targets");const Q=R.texture.mipmaps;Q&&Q.length>0?Ue(y.__webglFramebuffer[0],R):Ue(y.__webglFramebuffer,R)}else if(W){y.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)if(t.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer[Q]),y.__webglDepthbuffer[Q]===void 0)y.__webglDepthbuffer[Q]=n.createRenderbuffer(),He(y.__webglDepthbuffer[Q],R,!1);else{const re=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,j=y.__webglDepthbuffer[Q];n.bindRenderbuffer(n.RENDERBUFFER,j),n.framebufferRenderbuffer(n.FRAMEBUFFER,re,n.RENDERBUFFER,j)}}else{const Q=R.texture.mipmaps;if(Q&&Q.length>0?t.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=n.createRenderbuffer(),He(y.__webglDepthbuffer,R,!1);else{const re=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,j=y.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,j),n.framebufferRenderbuffer(n.FRAMEBUFFER,re,n.RENDERBUFFER,j)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ht(R,y,W){const Q=i.get(R);y!==void 0&&Te(Q.__webglFramebuffer,R,R.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),W!==void 0&&rt(R)}function Je(R){const y=R.texture,W=i.get(R),Q=i.get(y);R.addEventListener("dispose",U);const re=R.textures,j=R.isWebGLCubeRenderTarget===!0,Le=re.length>1;if(Le||(Q.__webglTexture===void 0&&(Q.__webglTexture=n.createTexture()),Q.__version=y.version,s.memory.textures++),j){W.__webglFramebuffer=[];for(let _e=0;_e<6;_e++)if(y.mipmaps&&y.mipmaps.length>0){W.__webglFramebuffer[_e]=[];for(let ze=0;ze<y.mipmaps.length;ze++)W.__webglFramebuffer[_e][ze]=n.createFramebuffer()}else W.__webglFramebuffer[_e]=n.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){W.__webglFramebuffer=[];for(let _e=0;_e<y.mipmaps.length;_e++)W.__webglFramebuffer[_e]=n.createFramebuffer()}else W.__webglFramebuffer=n.createFramebuffer();if(Le)for(let _e=0,ze=re.length;_e<ze;_e++){const Ie=i.get(re[_e]);Ie.__webglTexture===void 0&&(Ie.__webglTexture=n.createTexture(),s.memory.textures++)}if(R.samples>0&&Ce(R)===!1){W.__webglMultisampledFramebuffer=n.createFramebuffer(),W.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let _e=0;_e<re.length;_e++){const ze=re[_e];W.__webglColorRenderbuffer[_e]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,W.__webglColorRenderbuffer[_e]);const Ie=a.convert(ze.format,ze.colorSpace),se=a.convert(ze.type),me=A(ze.internalFormat,Ie,se,ze.colorSpace,R.isXRRenderTarget===!0),Ge=vt(R);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ge,me,R.width,R.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+_e,n.RENDERBUFFER,W.__webglColorRenderbuffer[_e])}n.bindRenderbuffer(n.RENDERBUFFER,null),R.depthBuffer&&(W.__webglDepthRenderbuffer=n.createRenderbuffer(),He(W.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(j){t.bindTexture(n.TEXTURE_CUBE_MAP,Q.__webglTexture),tt(n.TEXTURE_CUBE_MAP,y);for(let _e=0;_e<6;_e++)if(y.mipmaps&&y.mipmaps.length>0)for(let ze=0;ze<y.mipmaps.length;ze++)Te(W.__webglFramebuffer[_e][ze],R,y,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,ze);else Te(W.__webglFramebuffer[_e],R,y,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0);g(y)&&p(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Le){for(let _e=0,ze=re.length;_e<ze;_e++){const Ie=re[_e],se=i.get(Ie);let me=n.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(me=R.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(me,se.__webglTexture),tt(me,Ie),Te(W.__webglFramebuffer,R,Ie,n.COLOR_ATTACHMENT0+_e,me,0),g(Ie)&&p(me)}t.unbindTexture()}else{let _e=n.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(_e=R.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(_e,Q.__webglTexture),tt(_e,y),y.mipmaps&&y.mipmaps.length>0)for(let ze=0;ze<y.mipmaps.length;ze++)Te(W.__webglFramebuffer[ze],R,y,n.COLOR_ATTACHMENT0,_e,ze);else Te(W.__webglFramebuffer,R,y,n.COLOR_ATTACHMENT0,_e,0);g(y)&&p(_e),t.unbindTexture()}R.depthBuffer&&rt(R)}function gt(R){const y=R.textures;for(let W=0,Q=y.length;W<Q;W++){const re=y[W];if(g(re)){const j=T(R),Le=i.get(re).__webglTexture;t.bindTexture(j,Le),p(j),t.unbindTexture()}}}const N=[],at=[];function st(R){if(R.samples>0){if(Ce(R)===!1){const y=R.textures,W=R.width,Q=R.height;let re=n.COLOR_BUFFER_BIT;const j=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Le=i.get(R),_e=y.length>1;if(_e)for(let Ie=0;Ie<y.length;Ie++)t.bindFramebuffer(n.FRAMEBUFFER,Le.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ie,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Le.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ie,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Le.__webglMultisampledFramebuffer);const ze=R.texture.mipmaps;ze&&ze.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Le.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Le.__webglFramebuffer);for(let Ie=0;Ie<y.length;Ie++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(re|=n.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(re|=n.STENCIL_BUFFER_BIT)),_e){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Le.__webglColorRenderbuffer[Ie]);const se=i.get(y[Ie]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,se,0)}n.blitFramebuffer(0,0,W,Q,0,0,W,Q,re,n.NEAREST),l===!0&&(N.length=0,at.length=0,N.push(n.COLOR_ATTACHMENT0+Ie),R.depthBuffer&&R.resolveDepthBuffer===!1&&(N.push(j),at.push(j),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,at)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,N))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),_e)for(let Ie=0;Ie<y.length;Ie++){t.bindFramebuffer(n.FRAMEBUFFER,Le.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ie,n.RENDERBUFFER,Le.__webglColorRenderbuffer[Ie]);const se=i.get(y[Ie]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Le.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ie,n.TEXTURE_2D,se,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Le.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){const y=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[y])}}}function vt(R){return Math.min(r.maxSamples,R.samples)}function Ce(R){const y=i.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function bt(R){const y=s.render.frame;u.get(R)!==y&&(u.set(R,y),R.update())}function Ne(R,y){const W=R.colorSpace,Q=R.format,re=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||W!==Qr&&W!==Hi&&(dt.getTransfer(W)===Mt?(Q!==Zn||re!==si)&&$e("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):kt("WebGLTextures: Unsupported texture color space:",W)),y}function Ye(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=q,this.resetTextureUnits=k,this.setTexture2D=J,this.setTexture2DArray=Z,this.setTexture3D=he,this.setTextureCube=K,this.rebindTextures=Ht,this.setupRenderTarget=Je,this.updateRenderTargetMipmap=gt,this.updateMultisampleRenderTarget=st,this.setupDepthRenderbuffer=rt,this.setupFrameBufferTexture=Te,this.useMultisampledRTT=Ce}function ig(n,e){function t(i,r=Hi){let a;const s=dt.getTransfer(r);if(i===si)return n.UNSIGNED_BYTE;if(i===Gl)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Wl)return n.UNSIGNED_SHORT_5_5_5_1;if(i===hd)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===dd)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===cd)return n.BYTE;if(i===ud)return n.SHORT;if(i===Ra)return n.UNSIGNED_SHORT;if(i===Vl)return n.INT;if(i===xr)return n.UNSIGNED_INT;if(i===Mi)return n.FLOAT;if(i===ua)return n.HALF_FLOAT;if(i===fd)return n.ALPHA;if(i===pd)return n.RGB;if(i===Zn)return n.RGBA;if(i===Pa)return n.DEPTH_COMPONENT;if(i===La)return n.DEPTH_STENCIL;if(i===md)return n.RED;if(i===ql)return n.RED_INTEGER;if(i===Xl)return n.RG;if(i===Yl)return n.RG_INTEGER;if(i===$l)return n.RGBA_INTEGER;if(i===As||i===Cs||i===Rs||i===Ds)if(s===Mt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(i===As)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Cs)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Rs)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Ds)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(i===As)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Cs)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Rs)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Ds)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===X0||i===Y0||i===$0||i===j0)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(i===X0)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Y0)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===$0)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===j0)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===K0||i===Z0||i===J0)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(i===K0||i===Z0)return s===Mt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(i===J0)return s===Mt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Q0||i===el||i===tl||i===nl||i===il||i===rl||i===al||i===sl||i===ol||i===ll||i===cl||i===ul||i===hl||i===dl)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(i===Q0)return s===Mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===el)return s===Mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===tl)return s===Mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===nl)return s===Mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===il)return s===Mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===rl)return s===Mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===al)return s===Mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===sl)return s===Mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===ol)return s===Mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===ll)return s===Mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===cl)return s===Mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===ul)return s===Mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===hl)return s===Mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===dl)return s===Mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===fl||i===pl||i===ml)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(i===fl)return s===Mt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===pl)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===ml)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===xl||i===gl||i===vl||i===bl)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(i===xl)return a.COMPRESSED_RED_RGTC1_EXT;if(i===gl)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===vl)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===bl)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Da?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const rg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,ag=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class sg{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new Cd(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Ci({vertexShader:rg,fragmentShader:ag,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Qt(new na(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class og extends yr{constructor(e,t){super();const i=this;let r=null,a=1,s=null,o="local-floor",l=1,c=null,u=null,d=null,f=null,m=null,v=null;const b=typeof XRWebGLBinding<"u",g=new sg,p={},T=t.getContextAttributes();let A=null,D=null;const I=[],C=[],U=new je;let B=null;const E=new Bn;E.viewport=new zt;const w=new Bn;w.viewport=new zt;const O=[E,w],k=new S1;let q=null,$=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ee){let ne=I[ee];return ne===void 0&&(ne=new Jo,I[ee]=ne),ne.getTargetRaySpace()},this.getControllerGrip=function(ee){let ne=I[ee];return ne===void 0&&(ne=new Jo,I[ee]=ne),ne.getGripSpace()},this.getHand=function(ee){let ne=I[ee];return ne===void 0&&(ne=new Jo,I[ee]=ne),ne.getHandSpace()};function J(ee){const ne=C.indexOf(ee.inputSource);if(ne===-1)return;const Te=I[ne];Te!==void 0&&(Te.update(ee.inputSource,ee.frame,c||s),Te.dispatchEvent({type:ee.type,data:ee.inputSource}))}function Z(){r.removeEventListener("select",J),r.removeEventListener("selectstart",J),r.removeEventListener("selectend",J),r.removeEventListener("squeeze",J),r.removeEventListener("squeezestart",J),r.removeEventListener("squeezeend",J),r.removeEventListener("end",Z),r.removeEventListener("inputsourceschange",he);for(let ee=0;ee<I.length;ee++){const ne=C[ee];ne!==null&&(C[ee]=null,I[ee].disconnect(ne))}q=null,$=null,g.reset();for(const ee in p)delete p[ee];e.setRenderTarget(A),m=null,f=null,d=null,r=null,D=null,xt.stop(),i.isPresenting=!1,e.setPixelRatio(B),e.setSize(U.width,U.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ee){a=ee,i.isPresenting===!0&&$e("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ee){o=ee,i.isPresenting===!0&&$e("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||s},this.setReferenceSpace=function(ee){c=ee},this.getBaseLayer=function(){return f!==null?f:m},this.getBinding=function(){return d===null&&b&&(d=new XRWebGLBinding(r,t)),d},this.getFrame=function(){return v},this.getSession=function(){return r},this.setSession=async function(ee){if(r=ee,r!==null){if(A=e.getRenderTarget(),r.addEventListener("select",J),r.addEventListener("selectstart",J),r.addEventListener("selectend",J),r.addEventListener("squeeze",J),r.addEventListener("squeezestart",J),r.addEventListener("squeezeend",J),r.addEventListener("end",Z),r.addEventListener("inputsourceschange",he),T.xrCompatible!==!0&&await t.makeXRCompatible(),B=e.getPixelRatio(),e.getSize(U),b&&"createProjectionLayer"in XRWebGLBinding.prototype){let Te=null,He=null,Ue=null;T.depth&&(Ue=T.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Te=T.stencil?La:Pa,He=T.stencil?Da:xr);const rt={colorFormat:t.RGBA8,depthFormat:Ue,scaleFactor:a};d=this.getBinding(),f=d.createProjectionLayer(rt),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),D=new vr(f.textureWidth,f.textureHeight,{format:Zn,type:si,depthTexture:new Ad(f.textureWidth,f.textureHeight,He,void 0,void 0,void 0,void 0,void 0,void 0,Te),stencilBuffer:T.stencil,colorSpace:e.outputColorSpace,samples:T.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const Te={antialias:T.antialias,alpha:!0,depth:T.depth,stencil:T.stencil,framebufferScaleFactor:a};m=new XRWebGLLayer(r,t,Te),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),D=new vr(m.framebufferWidth,m.framebufferHeight,{format:Zn,type:si,colorSpace:e.outputColorSpace,stencilBuffer:T.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1})}D.isXRRenderTarget=!0,this.setFoveation(l),c=null,s=await r.requestReferenceSpace(o),xt.setContext(r),xt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function he(ee){for(let ne=0;ne<ee.removed.length;ne++){const Te=ee.removed[ne],He=C.indexOf(Te);He>=0&&(C[He]=null,I[He].disconnect(Te))}for(let ne=0;ne<ee.added.length;ne++){const Te=ee.added[ne];let He=C.indexOf(Te);if(He===-1){for(let rt=0;rt<I.length;rt++)if(rt>=C.length){C.push(Te),He=rt;break}else if(C[rt]===null){C[rt]=Te,He=rt;break}if(He===-1)break}const Ue=I[He];Ue&&Ue.connect(Te)}}const K=new G,fe=new G;function de(ee,ne,Te){K.setFromMatrixPosition(ne.matrixWorld),fe.setFromMatrixPosition(Te.matrixWorld);const He=K.distanceTo(fe),Ue=ne.projectionMatrix.elements,rt=Te.projectionMatrix.elements,Ht=Ue[14]/(Ue[10]-1),Je=Ue[14]/(Ue[10]+1),gt=(Ue[9]+1)/Ue[5],N=(Ue[9]-1)/Ue[5],at=(Ue[8]-1)/Ue[0],st=(rt[8]+1)/rt[0],vt=Ht*at,Ce=Ht*st,bt=He/(-at+st),Ne=bt*-at;if(ne.matrixWorld.decompose(ee.position,ee.quaternion,ee.scale),ee.translateX(Ne),ee.translateZ(bt),ee.matrixWorld.compose(ee.position,ee.quaternion,ee.scale),ee.matrixWorldInverse.copy(ee.matrixWorld).invert(),Ue[10]===-1)ee.projectionMatrix.copy(ne.projectionMatrix),ee.projectionMatrixInverse.copy(ne.projectionMatrixInverse);else{const Ye=Ht+bt,R=Je+bt,y=vt-Ne,W=Ce+(He-Ne),Q=gt*Je/R*Ye,re=N*Je/R*Ye;ee.projectionMatrix.makePerspective(y,W,Q,re,Ye,R),ee.projectionMatrixInverse.copy(ee.projectionMatrix).invert()}}function Pe(ee,ne){ne===null?ee.matrixWorld.copy(ee.matrix):ee.matrixWorld.multiplyMatrices(ne.matrixWorld,ee.matrix),ee.matrixWorldInverse.copy(ee.matrixWorld).invert()}this.updateCamera=function(ee){if(r===null)return;let ne=ee.near,Te=ee.far;g.texture!==null&&(g.depthNear>0&&(ne=g.depthNear),g.depthFar>0&&(Te=g.depthFar)),k.near=w.near=E.near=ne,k.far=w.far=E.far=Te,(q!==k.near||$!==k.far)&&(r.updateRenderState({depthNear:k.near,depthFar:k.far}),q=k.near,$=k.far),k.layers.mask=ee.layers.mask|6,E.layers.mask=k.layers.mask&3,w.layers.mask=k.layers.mask&5;const He=ee.parent,Ue=k.cameras;Pe(k,He);for(let rt=0;rt<Ue.length;rt++)Pe(Ue[rt],He);Ue.length===2?de(k,E,w):k.projectionMatrix.copy(E.projectionMatrix),tt(ee,k,He)};function tt(ee,ne,Te){Te===null?ee.matrix.copy(ne.matrixWorld):(ee.matrix.copy(Te.matrixWorld),ee.matrix.invert(),ee.matrix.multiply(ne.matrixWorld)),ee.matrix.decompose(ee.position,ee.quaternion,ee.scale),ee.updateMatrixWorld(!0),ee.projectionMatrix.copy(ne.projectionMatrix),ee.projectionMatrixInverse.copy(ne.projectionMatrixInverse),ee.isPerspectiveCamera&&(ee.fov=_l*2*Math.atan(1/ee.projectionMatrix.elements[5]),ee.zoom=1)}this.getCamera=function(){return k},this.getFoveation=function(){if(!(f===null&&m===null))return l},this.setFoveation=function(ee){l=ee,f!==null&&(f.fixedFoveation=ee),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=ee)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(k)},this.getCameraTexture=function(ee){return p[ee]};let nt=null;function ft(ee,ne){if(u=ne.getViewerPose(c||s),v=ne,u!==null){const Te=u.views;m!==null&&(e.setRenderTargetFramebuffer(D,m.framebuffer),e.setRenderTarget(D));let He=!1;Te.length!==k.cameras.length&&(k.cameras.length=0,He=!0);for(let Je=0;Je<Te.length;Je++){const gt=Te[Je];let N=null;if(m!==null)N=m.getViewport(gt);else{const st=d.getViewSubImage(f,gt);N=st.viewport,Je===0&&(e.setRenderTargetTextures(D,st.colorTexture,st.depthStencilTexture),e.setRenderTarget(D))}let at=O[Je];at===void 0&&(at=new Bn,at.layers.enable(Je),at.viewport=new zt,O[Je]=at),at.matrix.fromArray(gt.transform.matrix),at.matrix.decompose(at.position,at.quaternion,at.scale),at.projectionMatrix.fromArray(gt.projectionMatrix),at.projectionMatrixInverse.copy(at.projectionMatrix).invert(),at.viewport.set(N.x,N.y,N.width,N.height),Je===0&&(k.matrix.copy(at.matrix),k.matrix.decompose(k.position,k.quaternion,k.scale)),He===!0&&k.cameras.push(at)}const Ue=r.enabledFeatures;if(Ue&&Ue.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&b){d=i.getBinding();const Je=d.getDepthInformation(Te[0]);Je&&Je.isValid&&Je.texture&&g.init(Je,r.renderState)}if(Ue&&Ue.includes("camera-access")&&b){e.state.unbindTexture(),d=i.getBinding();for(let Je=0;Je<Te.length;Je++){const gt=Te[Je].camera;if(gt){let N=p[gt];N||(N=new Cd,p[gt]=N);const at=d.getCameraImage(gt);N.sourceTexture=at}}}}for(let Te=0;Te<I.length;Te++){const He=C[Te],Ue=I[Te];He!==null&&Ue!==void 0&&Ue.update(He,ne,c||s)}nt&&nt(ee,ne),ne.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ne}),v=null}const xt=new Pd;xt.setAnimationLoop(ft),this.setAnimationLoop=function(ee){nt=ee},this.dispose=function(){}}}const cr=new oi,lg=new Tt;function cg(n,e){function t(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function i(g,p){p.color.getRGB(g.fogColor.value,wd(n)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function r(g,p,T,A,D){p.isMeshBasicMaterial||p.isMeshLambertMaterial?a(g,p):p.isMeshToonMaterial?(a(g,p),d(g,p)):p.isMeshPhongMaterial?(a(g,p),u(g,p)):p.isMeshStandardMaterial?(a(g,p),f(g,p),p.isMeshPhysicalMaterial&&m(g,p,D)):p.isMeshMatcapMaterial?(a(g,p),v(g,p)):p.isMeshDepthMaterial?a(g,p):p.isMeshDistanceMaterial?(a(g,p),b(g,p)):p.isMeshNormalMaterial?a(g,p):p.isLineBasicMaterial?(s(g,p),p.isLineDashedMaterial&&o(g,p)):p.isPointsMaterial?l(g,p,T,A):p.isSpriteMaterial?c(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function a(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,t(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===Mn&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,t(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===Mn&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,t(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,t(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);const T=e.get(p),A=T.envMap,D=T.envMapRotation;A&&(g.envMap.value=A,cr.copy(D),cr.x*=-1,cr.y*=-1,cr.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(cr.y*=-1,cr.z*=-1),g.envMapRotation.value.setFromMatrix4(lg.makeRotationFromEuler(cr)),g.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,g.aoMapTransform))}function s(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform))}function o(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function l(g,p,T,A){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*T,g.scale.value=A*.5,p.map&&(g.map.value=p.map,t(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function c(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function u(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function d(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function f(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function m(g,p,T){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Mn&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=T.texture,g.transmissionSamplerSize.value.set(T.width,T.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,g.specularIntensityMapTransform))}function v(g,p){p.matcap&&(g.matcap.value=p.matcap)}function b(g,p){const T=e.get(p).light;g.referencePosition.value.setFromMatrixPosition(T.matrixWorld),g.nearDistance.value=T.shadow.camera.near,g.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function ug(n,e,t,i){let r={},a={},s=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(T,A){const D=A.program;i.uniformBlockBinding(T,D)}function c(T,A){let D=r[T.id];D===void 0&&(v(T),D=u(T),r[T.id]=D,T.addEventListener("dispose",g));const I=A.program;i.updateUBOMapping(T,I);const C=e.render.frame;a[T.id]!==C&&(f(T),a[T.id]=C)}function u(T){const A=d();T.__bindingPointIndex=A;const D=n.createBuffer(),I=T.__size,C=T.usage;return n.bindBuffer(n.UNIFORM_BUFFER,D),n.bufferData(n.UNIFORM_BUFFER,I,C),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,A,D),D}function d(){for(let T=0;T<o;T++)if(s.indexOf(T)===-1)return s.push(T),T;return kt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(T){const A=r[T.id],D=T.uniforms,I=T.__cache;n.bindBuffer(n.UNIFORM_BUFFER,A);for(let C=0,U=D.length;C<U;C++){const B=Array.isArray(D[C])?D[C]:[D[C]];for(let E=0,w=B.length;E<w;E++){const O=B[E];if(m(O,C,E,I)===!0){const k=O.__offset,q=Array.isArray(O.value)?O.value:[O.value];let $=0;for(let J=0;J<q.length;J++){const Z=q[J],he=b(Z);typeof Z=="number"||typeof Z=="boolean"?(O.__data[0]=Z,n.bufferSubData(n.UNIFORM_BUFFER,k+$,O.__data)):Z.isMatrix3?(O.__data[0]=Z.elements[0],O.__data[1]=Z.elements[1],O.__data[2]=Z.elements[2],O.__data[3]=0,O.__data[4]=Z.elements[3],O.__data[5]=Z.elements[4],O.__data[6]=Z.elements[5],O.__data[7]=0,O.__data[8]=Z.elements[6],O.__data[9]=Z.elements[7],O.__data[10]=Z.elements[8],O.__data[11]=0):(Z.toArray(O.__data,$),$+=he.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,k,O.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function m(T,A,D,I){const C=T.value,U=A+"_"+D;if(I[U]===void 0)return typeof C=="number"||typeof C=="boolean"?I[U]=C:I[U]=C.clone(),!0;{const B=I[U];if(typeof C=="number"||typeof C=="boolean"){if(B!==C)return I[U]=C,!0}else if(B.equals(C)===!1)return B.copy(C),!0}return!1}function v(T){const A=T.uniforms;let D=0;const I=16;for(let U=0,B=A.length;U<B;U++){const E=Array.isArray(A[U])?A[U]:[A[U]];for(let w=0,O=E.length;w<O;w++){const k=E[w],q=Array.isArray(k.value)?k.value:[k.value];for(let $=0,J=q.length;$<J;$++){const Z=q[$],he=b(Z),K=D%I,fe=K%he.boundary,de=K+fe;D+=fe,de!==0&&I-de<he.storage&&(D+=I-de),k.__data=new Float32Array(he.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=D,D+=he.storage}}}const C=D%I;return C>0&&(D+=I-C),T.__size=D,T.__cache={},this}function b(T){const A={boundary:0,storage:0};return typeof T=="number"||typeof T=="boolean"?(A.boundary=4,A.storage=4):T.isVector2?(A.boundary=8,A.storage=8):T.isVector3||T.isColor?(A.boundary=16,A.storage=12):T.isVector4?(A.boundary=16,A.storage=16):T.isMatrix3?(A.boundary=48,A.storage=48):T.isMatrix4?(A.boundary=64,A.storage=64):T.isTexture?$e("WebGLRenderer: Texture samplers can not be part of an uniforms group."):$e("WebGLRenderer: Unsupported uniform value type.",T),A}function g(T){const A=T.target;A.removeEventListener("dispose",g);const D=s.indexOf(A.__bindingPointIndex);s.splice(D,1),n.deleteBuffer(r[A.id]),delete r[A.id],delete a[A.id]}function p(){for(const T in r)n.deleteBuffer(r[T]);s=[],r={},a={}}return{bind:l,update:c,dispose:p}}const hg=new Uint16Array([11481,15204,11534,15171,11808,15015,12385,14843,12894,14716,13396,14600,13693,14483,13976,14366,14237,14171,14405,13961,14511,13770,14605,13598,14687,13444,14760,13305,14822,13066,14876,12857,14923,12675,14963,12517,14997,12379,15025,12230,15049,12023,15070,11843,15086,11687,15100,11551,15111,11433,15120,11330,15127,11217,15132,11060,15135,10922,15138,10801,15139,10695,15139,10600,13012,14923,13020,14917,13064,14886,13176,14800,13349,14666,13513,14526,13724,14398,13960,14230,14200,14020,14383,13827,14488,13651,14583,13491,14667,13348,14740,13132,14803,12908,14856,12713,14901,12542,14938,12394,14968,12241,14992,12017,15010,11822,15024,11654,15034,11507,15041,11380,15044,11269,15044,11081,15042,10913,15037,10764,15031,10635,15023,10520,15014,10419,15003,10330,13657,14676,13658,14673,13670,14660,13698,14622,13750,14547,13834,14442,13956,14317,14112,14093,14291,13889,14407,13704,14499,13538,14586,13389,14664,13201,14733,12966,14792,12758,14842,12577,14882,12418,14915,12272,14940,12033,14959,11826,14972,11646,14980,11490,14983,11355,14983,11212,14979,11008,14971,10830,14961,10675,14950,10540,14936,10420,14923,10315,14909,10204,14894,10041,14089,14460,14090,14459,14096,14452,14112,14431,14141,14388,14186,14305,14252,14130,14341,13941,14399,13756,14467,13585,14539,13430,14610,13272,14677,13026,14737,12808,14790,12617,14833,12449,14869,12303,14896,12065,14916,11845,14929,11655,14937,11490,14939,11347,14936,11184,14930,10970,14921,10783,14912,10621,14900,10480,14885,10356,14867,10247,14848,10062,14827,9894,14805,9745,14400,14208,14400,14206,14402,14198,14406,14174,14415,14122,14427,14035,14444,13913,14469,13767,14504,13613,14548,13463,14598,13324,14651,13082,14704,12858,14752,12658,14795,12483,14831,12330,14860,12106,14881,11875,14895,11675,14903,11501,14905,11351,14903,11178,14900,10953,14892,10757,14880,10589,14865,10442,14847,10313,14827,10162,14805,9965,14782,9792,14757,9642,14731,9507,14562,13883,14562,13883,14563,13877,14566,13862,14570,13830,14576,13773,14584,13689,14595,13582,14613,13461,14637,13336,14668,13120,14704,12897,14741,12695,14776,12516,14808,12358,14835,12150,14856,11910,14870,11701,14878,11519,14882,11361,14884,11187,14880,10951,14871,10748,14858,10572,14842,10418,14823,10286,14801,10099,14777,9897,14751,9722,14725,9567,14696,9430,14666,9309,14702,13604,14702,13604,14702,13600,14703,13591,14705,13570,14707,13533,14709,13477,14712,13400,14718,13305,14727,13106,14743,12907,14762,12716,14784,12539,14807,12380,14827,12190,14844,11943,14855,11727,14863,11539,14870,11376,14871,11204,14868,10960,14858,10748,14845,10565,14829,10406,14809,10269,14786,10058,14761,9852,14734,9671,14705,9512,14674,9374,14641,9253,14608,9076,14821,13366,14821,13365,14821,13364,14821,13358,14821,13344,14821,13320,14819,13252,14817,13145,14815,13011,14814,12858,14817,12698,14823,12539,14832,12389,14841,12214,14850,11968,14856,11750,14861,11558,14866,11390,14867,11226,14862,10972,14853,10754,14840,10565,14823,10401,14803,10259,14780,10032,14754,9820,14725,9635,14694,9473,14661,9333,14627,9203,14593,8988,14557,8798,14923,13014,14922,13014,14922,13012,14922,13004,14920,12987,14919,12957,14915,12907,14909,12834,14902,12738,14894,12623,14888,12498,14883,12370,14880,12203,14878,11970,14875,11759,14873,11569,14874,11401,14872,11243,14865,10986,14855,10762,14842,10568,14825,10401,14804,10255,14781,10017,14754,9799,14725,9611,14692,9445,14658,9301,14623,9139,14587,8920,14548,8729,14509,8562,15008,12672,15008,12672,15008,12671,15007,12667,15005,12656,15001,12637,14997,12605,14989,12556,14978,12490,14966,12407,14953,12313,14940,12136,14927,11934,14914,11742,14903,11563,14896,11401,14889,11247,14879,10992,14866,10767,14851,10570,14833,10400,14812,10252,14789,10007,14761,9784,14731,9592,14698,9424,14663,9279,14627,9088,14588,8868,14548,8676,14508,8508,14467,8360,15080,12386,15080,12386,15079,12385,15078,12383,15076,12378,15072,12367,15066,12347,15057,12315,15045,12253,15030,12138,15012,11998,14993,11845,14972,11685,14951,11530,14935,11383,14920,11228,14904,10981,14887,10762,14870,10567,14850,10397,14827,10248,14803,9997,14774,9771,14743,9578,14710,9407,14674,9259,14637,9048,14596,8826,14555,8632,14514,8464,14471,8317,14427,8182,15139,12008,15139,12008,15138,12008,15137,12007,15135,12003,15130,11990,15124,11969,15115,11929,15102,11872,15086,11794,15064,11693,15041,11581,15013,11459,14987,11336,14966,11170,14944,10944,14921,10738,14898,10552,14875,10387,14850,10239,14824,9983,14794,9758,14762,9563,14728,9392,14692,9244,14653,9014,14611,8791,14569,8597,14526,8427,14481,8281,14436,8110,14391,7885,15188,11617,15188,11617,15187,11617,15186,11618,15183,11617,15179,11612,15173,11601,15163,11581,15150,11546,15133,11495,15110,11427,15083,11346,15051,11246,15024,11057,14996,10868,14967,10687,14938,10517,14911,10362,14882,10206,14853,9956,14821,9737,14787,9543,14752,9375,14715,9228,14675,8980,14632,8760,14589,8565,14544,8395,14498,8248,14451,8049,14404,7824,14357,7630,15228,11298,15228,11298,15227,11299,15226,11301,15223,11303,15219,11302,15213,11299,15204,11290,15191,11271,15174,11217,15150,11129,15119,11015,15087,10886,15057,10744,15024,10599,14990,10455,14957,10318,14924,10143,14891,9911,14856,9701,14820,9516,14782,9352,14744,9200,14703,8946,14659,8725,14615,8533,14568,8366,14521,8220,14472,7992,14423,7770,14374,7578,14315,7408,15260,10819,15260,10819,15259,10822,15258,10826,15256,10832,15251,10836,15246,10841,15237,10838,15225,10821,15207,10788,15183,10734,15151,10660,15120,10571,15087,10469,15049,10359,15012,10249,14974,10041,14937,9837,14900,9647,14860,9475,14820,9320,14779,9147,14736,8902,14691,8688,14646,8499,14598,8335,14549,8189,14499,7940,14448,7720,14397,7529,14347,7363,14256,7218,15285,10410,15285,10411,15285,10413,15284,10418,15282,10425,15278,10434,15272,10442,15264,10449,15252,10445,15235,10433,15210,10403,15179,10358,15149,10301,15113,10218,15073,10059,15033,9894,14991,9726,14951,9565,14909,9413,14865,9273,14822,9073,14777,8845,14730,8641,14682,8459,14633,8300,14583,8129,14531,7883,14479,7670,14426,7482,14373,7321,14305,7176,14201,6939,15305,9939,15305,9940,15305,9945,15304,9955,15302,9967,15298,9989,15293,10010,15286,10033,15274,10044,15258,10045,15233,10022,15205,9975,15174,9903,15136,9808,15095,9697,15053,9578,15009,9451,14965,9327,14918,9198,14871,8973,14825,8766,14775,8579,14725,8408,14675,8259,14622,8058,14569,7821,14515,7615,14460,7435,14405,7276,14350,7108,14256,6866,14149,6653,15321,9444,15321,9445,15321,9448,15320,9458,15317,9470,15314,9490,15310,9515,15302,9540,15292,9562,15276,9579,15251,9577,15226,9559,15195,9519,15156,9463,15116,9389,15071,9304,15025,9208,14978,9023,14927,8838,14878,8661,14827,8496,14774,8344,14722,8206,14667,7973,14612,7749,14556,7555,14499,7382,14443,7229,14385,7025,14322,6791,14210,6588,14100,6409,15333,8920,15333,8921,15332,8927,15332,8943,15329,8965,15326,9002,15322,9048,15316,9106,15307,9162,15291,9204,15267,9221,15244,9221,15212,9196,15175,9134,15133,9043,15088,8930,15040,8801,14990,8665,14938,8526,14886,8391,14830,8261,14775,8087,14719,7866,14661,7664,14603,7482,14544,7322,14485,7178,14426,6936,14367,6713,14281,6517,14166,6348,14054,6198,15341,8360,15341,8361,15341,8366,15341,8379,15339,8399,15336,8431,15332,8473,15326,8527,15318,8585,15302,8632,15281,8670,15258,8690,15227,8690,15191,8664,15149,8612,15104,8543,15055,8456,15001,8360,14948,8259,14892,8122,14834,7923,14776,7734,14716,7558,14656,7397,14595,7250,14534,7070,14472,6835,14410,6628,14350,6443,14243,6283,14125,6135,14010,5889,15348,7715,15348,7717,15348,7725,15347,7745,15345,7780,15343,7836,15339,7905,15334,8e3,15326,8103,15310,8193,15293,8239,15270,8270,15240,8287,15204,8283,15163,8260,15118,8223,15067,8143,15014,8014,14958,7873,14899,7723,14839,7573,14778,7430,14715,7293,14652,7164,14588,6931,14524,6720,14460,6531,14396,6362,14330,6210,14207,6015,14086,5781,13969,5576,15352,7114,15352,7116,15352,7128,15352,7159,15350,7195,15348,7237,15345,7299,15340,7374,15332,7457,15317,7544,15301,7633,15280,7703,15251,7754,15216,7775,15176,7767,15131,7733,15079,7670,15026,7588,14967,7492,14906,7387,14844,7278,14779,7171,14714,6965,14648,6770,14581,6587,14515,6420,14448,6269,14382,6123,14299,5881,14172,5665,14049,5477,13929,5310,15355,6329,15355,6330,15355,6339,15355,6362,15353,6410,15351,6472,15349,6572,15344,6688,15337,6835,15323,6985,15309,7142,15287,7220,15260,7277,15226,7310,15188,7326,15142,7318,15090,7285,15036,7239,14976,7177,14914,7045,14849,6892,14782,6736,14714,6581,14645,6433,14576,6293,14506,6164,14438,5946,14369,5733,14270,5540,14140,5369,14014,5216,13892,5043,15357,5483,15357,5484,15357,5496,15357,5528,15356,5597,15354,5692,15351,5835,15347,6011,15339,6195,15328,6317,15314,6446,15293,6566,15268,6668,15235,6746,15197,6796,15152,6811,15101,6790,15046,6748,14985,6673,14921,6583,14854,6479,14785,6371,14714,6259,14643,6149,14571,5946,14499,5750,14428,5567,14358,5401,14242,5250,14109,5111,13980,4870,13856,4657,15359,4555,15359,4557,15358,4573,15358,4633,15357,4715,15355,4841,15353,5061,15349,5216,15342,5391,15331,5577,15318,5770,15299,5967,15274,6150,15243,6223,15206,6280,15161,6310,15111,6317,15055,6300,14994,6262,14928,6208,14860,6141,14788,5994,14715,5838,14641,5684,14566,5529,14492,5384,14418,5247,14346,5121,14216,4892,14079,4682,13948,4496,13822,4330,15359,3498,15359,3501,15359,3520,15359,3598,15358,3719,15356,3860,15355,4137,15351,4305,15344,4563,15334,4809,15321,5116,15303,5273,15280,5418,15250,5547,15214,5653,15170,5722,15120,5761,15064,5763,15002,5733,14935,5673,14865,5597,14792,5504,14716,5400,14640,5294,14563,5185,14486,5041,14410,4841,14335,4655,14191,4482,14051,4325,13918,4183,13790,4012,15360,2282,15360,2285,15360,2306,15360,2401,15359,2547,15357,2748,15355,3103,15352,3349,15345,3675,15336,4020,15324,4272,15307,4496,15285,4716,15255,4908,15220,5086,15178,5170,15128,5214,15072,5234,15010,5231,14943,5206,14871,5166,14796,5102,14718,4971,14639,4833,14559,4687,14480,4541,14402,4401,14315,4268,14167,4142,14025,3958,13888,3747,13759,3556,15360,923,15360,925,15360,946,15360,1052,15359,1214,15357,1494,15356,1892,15352,2274,15346,2663,15338,3099,15326,3393,15309,3679,15288,3980,15260,4183,15226,4325,15185,4437,15136,4517,15080,4570,15018,4591,14950,4581,14877,4545,14800,4485,14720,4411,14638,4325,14556,4231,14475,4136,14395,3988,14297,3803,14145,3628,13999,3465,13861,3314,13729,3177,15360,263,15360,264,15360,272,15360,325,15359,407,15358,548,15356,780,15352,1144,15347,1580,15339,2099,15328,2425,15312,2795,15292,3133,15264,3329,15232,3517,15191,3689,15143,3819,15088,3923,15025,3978,14956,3999,14882,3979,14804,3931,14722,3855,14639,3756,14554,3645,14470,3529,14388,3409,14279,3289,14124,3173,13975,3055,13834,2848,13701,2658,15360,49,15360,49,15360,52,15360,75,15359,111,15358,201,15356,283,15353,519,15348,726,15340,1045,15329,1415,15314,1795,15295,2173,15269,2410,15237,2649,15197,2866,15150,3054,15095,3140,15032,3196,14963,3228,14888,3236,14808,3224,14725,3191,14639,3146,14553,3088,14466,2976,14382,2836,14262,2692,14103,2549,13952,2409,13808,2278,13674,2154,15360,4,15360,4,15360,4,15360,13,15359,33,15358,59,15357,112,15353,199,15348,302,15341,456,15331,628,15316,827,15297,1082,15272,1332,15241,1601,15202,1851,15156,2069,15101,2172,15039,2256,14970,2314,14894,2348,14813,2358,14728,2344,14640,2311,14551,2263,14463,2203,14376,2133,14247,2059,14084,1915,13930,1761,13784,1609,13648,1464,15360,0,15360,0,15360,0,15360,3,15359,18,15358,26,15357,53,15354,80,15348,97,15341,165,15332,238,15318,326,15299,427,15275,529,15245,654,15207,771,15161,885,15108,994,15046,1089,14976,1170,14900,1229,14817,1266,14731,1284,14641,1282,14550,1260,14460,1223,14370,1174,14232,1116,14066,1050,13909,981,13761,910,13623,839]);let vi=null;function dg(){return vi===null&&(vi=new d1(hg,32,32,Xl,ua),vi.minFilter=Hn,vi.magFilter=Hn,vi.wrapS=yi,vi.wrapT=yi,vi.generateMipmaps=!1,vi.needsUpdate=!0),vi}class fg{constructor(e={}){const{canvas:t=Om(),context:i=null,depth:r=!0,stencil:a=!1,alpha:s=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let m;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=i.getContextAttributes().alpha}else m=s;const v=new Set([$l,Yl,ql]),b=new Set([si,xr,Ra,Da,Gl,Wl]),g=new Uint32Array(4),p=new Int32Array(4);let T=null,A=null;const D=[],I=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Wi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const C=this;let U=!1;this._outputColorSpace=Dn;let B=0,E=0,w=null,O=-1,k=null;const q=new zt,$=new zt;let J=null;const Z=new ut(0);let he=0,K=t.width,fe=t.height,de=1,Pe=null,tt=null;const nt=new zt(0,0,K,fe),ft=new zt(0,0,K,fe);let xt=!1;const ee=new Zl;let ne=!1,Te=!1;const He=new Tt,Ue=new G,rt=new zt,Ht={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Je=!1;function gt(){return w===null?de:1}let N=i;function at(S,H){return t.getContext(S,H)}try{const S={alpha:!0,depth:r,stencil:a,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Hl}`),t.addEventListener("webglcontextlost",ce,!1),t.addEventListener("webglcontextrestored",te,!1),t.addEventListener("webglcontextcreationerror",Re,!1),N===null){const H="webgl2";if(N=at(H,S),N===null)throw at(H)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(S){throw S("WebGLRenderer: "+S.message),S}let st,vt,Ce,bt,Ne,Ye,R,y,W,Q,re,j,Le,_e,ze,Ie,se,me,Ge,ke,Ee,Xe,F,ye;function ge(){st=new yx(N),st.init(),Xe=new ig(N,st),vt=new dx(N,st,e,Xe),Ce=new tg(N,st),vt.reversedDepthBuffer&&f&&Ce.buffers.depth.setReversed(!0),bt=new wx(N),Ne=new V4,Ye=new ng(N,st,Ce,Ne,vt,Xe,bt),R=new px(C),y=new _x(C),W=new C1(N),F=new ux(N,W),Q=new Mx(N,W,bt,F),re=new Tx(N,Q,W,bt),Ge=new Ex(N,vt,Ye),Ie=new fx(Ne),j=new H4(C,R,y,st,vt,F,Ie),Le=new cg(C,Ne),_e=new W4,ze=new K4(st),me=new cx(C,R,y,Ce,re,m,l),se=new Q4(C,re,vt),ye=new ug(N,bt,vt,Ce),ke=new hx(N,st,bt),Ee=new Sx(N,st,bt),bt.programs=j.programs,C.capabilities=vt,C.extensions=st,C.properties=Ne,C.renderLists=_e,C.shadowMap=se,C.state=Ce,C.info=bt}ge();const ve=new og(C,N);this.xr=ve,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){const S=st.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=st.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return de},this.setPixelRatio=function(S){S!==void 0&&(de=S,this.setSize(K,fe,!1))},this.getSize=function(S){return S.set(K,fe)},this.setSize=function(S,H,X=!0){if(ve.isPresenting){$e("WebGLRenderer: Can't change size while VR device is presenting.");return}K=S,fe=H,t.width=Math.floor(S*de),t.height=Math.floor(H*de),X===!0&&(t.style.width=S+"px",t.style.height=H+"px"),this.setViewport(0,0,S,H)},this.getDrawingBufferSize=function(S){return S.set(K*de,fe*de).floor()},this.setDrawingBufferSize=function(S,H,X){K=S,fe=H,de=X,t.width=Math.floor(S*X),t.height=Math.floor(H*X),this.setViewport(0,0,S,H)},this.getCurrentViewport=function(S){return S.copy(q)},this.getViewport=function(S){return S.copy(nt)},this.setViewport=function(S,H,X,Y){S.isVector4?nt.set(S.x,S.y,S.z,S.w):nt.set(S,H,X,Y),Ce.viewport(q.copy(nt).multiplyScalar(de).round())},this.getScissor=function(S){return S.copy(ft)},this.setScissor=function(S,H,X,Y){S.isVector4?ft.set(S.x,S.y,S.z,S.w):ft.set(S,H,X,Y),Ce.scissor($.copy(ft).multiplyScalar(de).round())},this.getScissorTest=function(){return xt},this.setScissorTest=function(S){Ce.setScissorTest(xt=S)},this.setOpaqueSort=function(S){Pe=S},this.setTransparentSort=function(S){tt=S},this.getClearColor=function(S){return S.copy(me.getClearColor())},this.setClearColor=function(){me.setClearColor(...arguments)},this.getClearAlpha=function(){return me.getClearAlpha()},this.setClearAlpha=function(){me.setClearAlpha(...arguments)},this.clear=function(S=!0,H=!0,X=!0){let Y=0;if(S){let V=!1;if(w!==null){const pe=w.texture.format;V=v.has(pe)}if(V){const pe=w.texture.type,Se=b.has(pe),De=me.getClearColor(),Ae=me.getClearAlpha(),Ve=De.r,qe=De.g,Fe=De.b;Se?(g[0]=Ve,g[1]=qe,g[2]=Fe,g[3]=Ae,N.clearBufferuiv(N.COLOR,0,g)):(p[0]=Ve,p[1]=qe,p[2]=Fe,p[3]=Ae,N.clearBufferiv(N.COLOR,0,p))}else Y|=N.COLOR_BUFFER_BIT}H&&(Y|=N.DEPTH_BUFFER_BIT),X&&(Y|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),N.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ce,!1),t.removeEventListener("webglcontextrestored",te,!1),t.removeEventListener("webglcontextcreationerror",Re,!1),me.dispose(),_e.dispose(),ze.dispose(),Ne.dispose(),R.dispose(),y.dispose(),re.dispose(),F.dispose(),ye.dispose(),j.dispose(),ve.dispose(),ve.removeEventListener("sessionstart",sc),ve.removeEventListener("sessionend",oc),er.stop()};function ce(S){S.preventDefault(),su("WebGLRenderer: Context Lost."),U=!0}function te(){su("WebGLRenderer: Context Restored."),U=!1;const S=bt.autoReset,H=se.enabled,X=se.autoUpdate,Y=se.needsUpdate,V=se.type;ge(),bt.autoReset=S,se.enabled=H,se.autoUpdate=X,se.needsUpdate=Y,se.type=V}function Re(S){kt("WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function Ze(S){const H=S.target;H.removeEventListener("dispose",Ze),At(H)}function At(S){_t(S),Ne.remove(S)}function _t(S){const H=Ne.get(S).programs;H!==void 0&&(H.forEach(function(X){j.releaseProgram(X)}),S.isShaderMaterial&&j.releaseShaderCache(S))}this.renderBufferDirect=function(S,H,X,Y,V,pe){H===null&&(H=Ht);const Se=V.isMesh&&V.matrixWorld.determinant()<0,De=Gd(S,H,X,Y,V);Ce.setMaterial(Y,Se);let Ae=X.index,Ve=1;if(Y.wireframe===!0){if(Ae=Q.getWireframeAttribute(X),Ae===void 0)return;Ve=2}const qe=X.drawRange,Fe=X.attributes.position;let ct=qe.start*Ve,yt=(qe.start+qe.count)*Ve;pe!==null&&(ct=Math.max(ct,pe.start*Ve),yt=Math.min(yt,(pe.start+pe.count)*Ve)),Ae!==null?(ct=Math.max(ct,0),yt=Math.min(yt,Ae.count)):Fe!=null&&(ct=Math.max(ct,0),yt=Math.min(yt,Fe.count));const Nt=yt-ct;if(Nt<0||Nt===1/0)return;F.setup(V,Y,De,X,Ae);let Ft,wt=ke;if(Ae!==null&&(Ft=W.get(Ae),wt=Ee,wt.setIndex(Ft)),V.isMesh)Y.wireframe===!0?(Ce.setLineWidth(Y.wireframeLinewidth*gt()),wt.setMode(N.LINES)):wt.setMode(N.TRIANGLES);else if(V.isLine){let Be=Y.linewidth;Be===void 0&&(Be=1),Ce.setLineWidth(Be*gt()),V.isLineSegments?wt.setMode(N.LINES):V.isLineLoop?wt.setMode(N.LINE_LOOP):wt.setMode(N.LINE_STRIP)}else V.isPoints?wt.setMode(N.POINTS):V.isSprite&&wt.setMode(N.TRIANGLES);if(V.isBatchedMesh)if(V._multiDrawInstances!==null)Ia("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),wt.renderMultiDrawInstances(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount,V._multiDrawInstances);else if(st.get("WEBGL_multi_draw"))wt.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else{const Be=V._multiDrawStarts,Dt=V._multiDrawCounts,ht=V._multiDrawCount,wn=Ae?W.get(Ae).bytesPerElement:1,Mr=Ne.get(Y).currentProgram.getUniforms();for(let En=0;En<ht;En++)Mr.setValue(N,"_gl_DrawID",En),wt.render(Be[En]/wn,Dt[En])}else if(V.isInstancedMesh)wt.renderInstances(ct,Nt,V.count);else if(X.isInstancedBufferGeometry){const Be=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,Dt=Math.min(X.instanceCount,Be);wt.renderInstances(ct,Nt,Dt)}else wt.render(ct,Nt)};function Qn(S,H,X){S.transparent===!0&&S.side===yn&&S.forceSinglePass===!1?(S.side=Mn,S.needsUpdate=!0,Wa(S,H,X),S.side=Ki,S.needsUpdate=!0,Wa(S,H,X),S.side=yn):Wa(S,H,X)}this.compile=function(S,H,X=null){X===null&&(X=S),A=ze.get(X),A.init(H),I.push(A),X.traverseVisible(function(V){V.isLight&&V.layers.test(H.layers)&&(A.pushLight(V),V.castShadow&&A.pushShadow(V))}),S!==X&&S.traverseVisible(function(V){V.isLight&&V.layers.test(H.layers)&&(A.pushLight(V),V.castShadow&&A.pushShadow(V))}),A.setupLights();const Y=new Set;return S.traverse(function(V){if(!(V.isMesh||V.isPoints||V.isLine||V.isSprite))return;const pe=V.material;if(pe)if(Array.isArray(pe))for(let Se=0;Se<pe.length;Se++){const De=pe[Se];Qn(De,X,V),Y.add(De)}else Qn(pe,X,V),Y.add(pe)}),A=I.pop(),Y},this.compileAsync=function(S,H,X=null){const Y=this.compile(S,H,X);return new Promise(V=>{function pe(){if(Y.forEach(function(Se){Ne.get(Se).currentProgram.isReady()&&Y.delete(Se)}),Y.size===0){V(S);return}setTimeout(pe,10)}st.get("KHR_parallel_shader_compile")!==null?pe():setTimeout(pe,10)})};let qn=null;function Vd(S){qn&&qn(S)}function sc(){er.stop()}function oc(){er.start()}const er=new Pd;er.setAnimationLoop(Vd),typeof self<"u"&&er.setContext(self),this.setAnimationLoop=function(S){qn=S,ve.setAnimationLoop(S),S===null?er.stop():er.start()},ve.addEventListener("sessionstart",sc),ve.addEventListener("sessionend",oc),this.render=function(S,H){if(H!==void 0&&H.isCamera!==!0){kt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(U===!0)return;if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),ve.enabled===!0&&ve.isPresenting===!0&&(ve.cameraAutoUpdate===!0&&ve.updateCamera(H),H=ve.getCamera()),S.isScene===!0&&S.onBeforeRender(C,S,H,w),A=ze.get(S,I.length),A.init(H),I.push(A),He.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),ee.setFromProjectionMatrix(He,ri,H.reversedDepth),Te=this.localClippingEnabled,ne=Ie.init(this.clippingPlanes,Te),T=_e.get(S,D.length),T.init(),D.push(T),ve.enabled===!0&&ve.isPresenting===!0){const pe=C.xr.getDepthSensingMesh();pe!==null&&ho(pe,H,-1/0,C.sortObjects)}ho(S,H,0,C.sortObjects),T.finish(),C.sortObjects===!0&&T.sort(Pe,tt),Je=ve.enabled===!1||ve.isPresenting===!1||ve.hasDepthSensing()===!1,Je&&me.addToRenderList(T,S),this.info.render.frame++,ne===!0&&Ie.beginShadows();const X=A.state.shadowsArray;se.render(X,S,H),ne===!0&&Ie.endShadows(),this.info.autoReset===!0&&this.info.reset();const Y=T.opaque,V=T.transmissive;if(A.setupLights(),H.isArrayCamera){const pe=H.cameras;if(V.length>0)for(let Se=0,De=pe.length;Se<De;Se++){const Ae=pe[Se];cc(Y,V,S,Ae)}Je&&me.render(S);for(let Se=0,De=pe.length;Se<De;Se++){const Ae=pe[Se];lc(T,S,Ae,Ae.viewport)}}else V.length>0&&cc(Y,V,S,H),Je&&me.render(S),lc(T,S,H);w!==null&&E===0&&(Ye.updateMultisampleRenderTarget(w),Ye.updateRenderTargetMipmap(w)),S.isScene===!0&&S.onAfterRender(C,S,H),F.resetDefaultState(),O=-1,k=null,I.pop(),I.length>0?(A=I[I.length-1],ne===!0&&Ie.setGlobalState(C.clippingPlanes,A.state.camera)):A=null,D.pop(),D.length>0?T=D[D.length-1]:T=null};function ho(S,H,X,Y){if(S.visible===!1)return;if(S.layers.test(H.layers)){if(S.isGroup)X=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(H);else if(S.isLight)A.pushLight(S),S.castShadow&&A.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||ee.intersectsSprite(S)){Y&&rt.setFromMatrixPosition(S.matrixWorld).applyMatrix4(He);const Se=re.update(S),De=S.material;De.visible&&T.push(S,Se,De,X,rt.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||ee.intersectsObject(S))){const Se=re.update(S),De=S.material;if(Y&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),rt.copy(S.boundingSphere.center)):(Se.boundingSphere===null&&Se.computeBoundingSphere(),rt.copy(Se.boundingSphere.center)),rt.applyMatrix4(S.matrixWorld).applyMatrix4(He)),Array.isArray(De)){const Ae=Se.groups;for(let Ve=0,qe=Ae.length;Ve<qe;Ve++){const Fe=Ae[Ve],ct=De[Fe.materialIndex];ct&&ct.visible&&T.push(S,Se,ct,X,rt.z,Fe)}}else De.visible&&T.push(S,Se,De,X,rt.z,null)}}const pe=S.children;for(let Se=0,De=pe.length;Se<De;Se++)ho(pe[Se],H,X,Y)}function lc(S,H,X,Y){const{opaque:V,transmissive:pe,transparent:Se}=S;A.setupLightsView(X),ne===!0&&Ie.setGlobalState(C.clippingPlanes,X),Y&&Ce.viewport(q.copy(Y)),V.length>0&&Ga(V,H,X),pe.length>0&&Ga(pe,H,X),Se.length>0&&Ga(Se,H,X),Ce.buffers.depth.setTest(!0),Ce.buffers.depth.setMask(!0),Ce.buffers.color.setMask(!0),Ce.setPolygonOffset(!1)}function cc(S,H,X,Y){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;A.state.transmissionRenderTarget[Y.id]===void 0&&(A.state.transmissionRenderTarget[Y.id]=new vr(1,1,{generateMipmaps:!0,type:st.has("EXT_color_buffer_half_float")||st.has("EXT_color_buffer_float")?ua:si,minFilter:pr,samples:4,stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:dt.workingColorSpace}));const pe=A.state.transmissionRenderTarget[Y.id],Se=Y.viewport||q;pe.setSize(Se.z*C.transmissionResolutionScale,Se.w*C.transmissionResolutionScale);const De=C.getRenderTarget(),Ae=C.getActiveCubeFace(),Ve=C.getActiveMipmapLevel();C.setRenderTarget(pe),C.getClearColor(Z),he=C.getClearAlpha(),he<1&&C.setClearColor(16777215,.5),C.clear(),Je&&me.render(X);const qe=C.toneMapping;C.toneMapping=Wi;const Fe=Y.viewport;if(Y.viewport!==void 0&&(Y.viewport=void 0),A.setupLightsView(Y),ne===!0&&Ie.setGlobalState(C.clippingPlanes,Y),Ga(S,X,Y),Ye.updateMultisampleRenderTarget(pe),Ye.updateRenderTargetMipmap(pe),st.has("WEBGL_multisampled_render_to_texture")===!1){let ct=!1;for(let yt=0,Nt=H.length;yt<Nt;yt++){const Ft=H[yt],{object:wt,geometry:Be,material:Dt,group:ht}=Ft;if(Dt.side===yn&&wt.layers.test(Y.layers)){const wn=Dt.side;Dt.side=Mn,Dt.needsUpdate=!0,uc(wt,X,Y,Be,Dt,ht),Dt.side=wn,Dt.needsUpdate=!0,ct=!0}}ct===!0&&(Ye.updateMultisampleRenderTarget(pe),Ye.updateRenderTargetMipmap(pe))}C.setRenderTarget(De,Ae,Ve),C.setClearColor(Z,he),Fe!==void 0&&(Y.viewport=Fe),C.toneMapping=qe}function Ga(S,H,X){const Y=H.isScene===!0?H.overrideMaterial:null;for(let V=0,pe=S.length;V<pe;V++){const Se=S[V],{object:De,geometry:Ae,group:Ve}=Se;let qe=Se.material;qe.allowOverride===!0&&Y!==null&&(qe=Y),De.layers.test(X.layers)&&uc(De,H,X,Ae,qe,Ve)}}function uc(S,H,X,Y,V,pe){S.onBeforeRender(C,H,X,Y,V,pe),S.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),V.onBeforeRender(C,H,X,Y,S,pe),V.transparent===!0&&V.side===yn&&V.forceSinglePass===!1?(V.side=Mn,V.needsUpdate=!0,C.renderBufferDirect(X,H,Y,V,S,pe),V.side=Ki,V.needsUpdate=!0,C.renderBufferDirect(X,H,Y,V,S,pe),V.side=yn):C.renderBufferDirect(X,H,Y,V,S,pe),S.onAfterRender(C,H,X,Y,V,pe)}function Wa(S,H,X){H.isScene!==!0&&(H=Ht);const Y=Ne.get(S),V=A.state.lights,pe=A.state.shadowsArray,Se=V.state.version,De=j.getParameters(S,V.state,pe,H,X),Ae=j.getProgramCacheKey(De);let Ve=Y.programs;Y.environment=S.isMeshStandardMaterial?H.environment:null,Y.fog=H.fog,Y.envMap=(S.isMeshStandardMaterial?y:R).get(S.envMap||Y.environment),Y.envMapRotation=Y.environment!==null&&S.envMap===null?H.environmentRotation:S.envMapRotation,Ve===void 0&&(S.addEventListener("dispose",Ze),Ve=new Map,Y.programs=Ve);let qe=Ve.get(Ae);if(qe!==void 0){if(Y.currentProgram===qe&&Y.lightsStateVersion===Se)return dc(S,De),qe}else De.uniforms=j.getUniforms(S),S.onBeforeCompile(De,C),qe=j.acquireProgram(De,Ae),Ve.set(Ae,qe),Y.uniforms=De.uniforms;const Fe=Y.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Fe.clippingPlanes=Ie.uniform),dc(S,De),Y.needsLights=qd(S),Y.lightsStateVersion=Se,Y.needsLights&&(Fe.ambientLightColor.value=V.state.ambient,Fe.lightProbe.value=V.state.probe,Fe.directionalLights.value=V.state.directional,Fe.directionalLightShadows.value=V.state.directionalShadow,Fe.spotLights.value=V.state.spot,Fe.spotLightShadows.value=V.state.spotShadow,Fe.rectAreaLights.value=V.state.rectArea,Fe.ltc_1.value=V.state.rectAreaLTC1,Fe.ltc_2.value=V.state.rectAreaLTC2,Fe.pointLights.value=V.state.point,Fe.pointLightShadows.value=V.state.pointShadow,Fe.hemisphereLights.value=V.state.hemi,Fe.directionalShadowMap.value=V.state.directionalShadowMap,Fe.directionalShadowMatrix.value=V.state.directionalShadowMatrix,Fe.spotShadowMap.value=V.state.spotShadowMap,Fe.spotLightMatrix.value=V.state.spotLightMatrix,Fe.spotLightMap.value=V.state.spotLightMap,Fe.pointShadowMap.value=V.state.pointShadowMap,Fe.pointShadowMatrix.value=V.state.pointShadowMatrix),Y.currentProgram=qe,Y.uniformsList=null,qe}function hc(S){if(S.uniformsList===null){const H=S.currentProgram.getUniforms();S.uniformsList=Ls.seqWithValue(H.seq,S.uniforms)}return S.uniformsList}function dc(S,H){const X=Ne.get(S);X.outputColorSpace=H.outputColorSpace,X.batching=H.batching,X.batchingColor=H.batchingColor,X.instancing=H.instancing,X.instancingColor=H.instancingColor,X.instancingMorph=H.instancingMorph,X.skinning=H.skinning,X.morphTargets=H.morphTargets,X.morphNormals=H.morphNormals,X.morphColors=H.morphColors,X.morphTargetsCount=H.morphTargetsCount,X.numClippingPlanes=H.numClippingPlanes,X.numIntersection=H.numClipIntersection,X.vertexAlphas=H.vertexAlphas,X.vertexTangents=H.vertexTangents,X.toneMapping=H.toneMapping}function Gd(S,H,X,Y,V){H.isScene!==!0&&(H=Ht),Ye.resetTextureUnits();const pe=H.fog,Se=Y.isMeshStandardMaterial?H.environment:null,De=w===null?C.outputColorSpace:w.isXRRenderTarget===!0?w.texture.colorSpace:Qr,Ae=(Y.isMeshStandardMaterial?y:R).get(Y.envMap||Se),Ve=Y.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,qe=!!X.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),Fe=!!X.morphAttributes.position,ct=!!X.morphAttributes.normal,yt=!!X.morphAttributes.color;let Nt=Wi;Y.toneMapped&&(w===null||w.isXRRenderTarget===!0)&&(Nt=C.toneMapping);const Ft=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,wt=Ft!==void 0?Ft.length:0,Be=Ne.get(Y),Dt=A.state.lights;if(ne===!0&&(Te===!0||S!==k)){const ln=S===k&&Y.id===O;Ie.setState(Y,S,ln)}let ht=!1;Y.version===Be.__version?(Be.needsLights&&Be.lightsStateVersion!==Dt.state.version||Be.outputColorSpace!==De||V.isBatchedMesh&&Be.batching===!1||!V.isBatchedMesh&&Be.batching===!0||V.isBatchedMesh&&Be.batchingColor===!0&&V.colorTexture===null||V.isBatchedMesh&&Be.batchingColor===!1&&V.colorTexture!==null||V.isInstancedMesh&&Be.instancing===!1||!V.isInstancedMesh&&Be.instancing===!0||V.isSkinnedMesh&&Be.skinning===!1||!V.isSkinnedMesh&&Be.skinning===!0||V.isInstancedMesh&&Be.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&Be.instancingColor===!1&&V.instanceColor!==null||V.isInstancedMesh&&Be.instancingMorph===!0&&V.morphTexture===null||V.isInstancedMesh&&Be.instancingMorph===!1&&V.morphTexture!==null||Be.envMap!==Ae||Y.fog===!0&&Be.fog!==pe||Be.numClippingPlanes!==void 0&&(Be.numClippingPlanes!==Ie.numPlanes||Be.numIntersection!==Ie.numIntersection)||Be.vertexAlphas!==Ve||Be.vertexTangents!==qe||Be.morphTargets!==Fe||Be.morphNormals!==ct||Be.morphColors!==yt||Be.toneMapping!==Nt||Be.morphTargetsCount!==wt)&&(ht=!0):(ht=!0,Be.__version=Y.version);let wn=Be.currentProgram;ht===!0&&(wn=Wa(Y,H,V));let Mr=!1,En=!1,fa=!1;const Pt=wn.getUniforms(),xn=Be.uniforms;if(Ce.useProgram(wn.program)&&(Mr=!0,En=!0,fa=!0),Y.id!==O&&(O=Y.id,En=!0),Mr||k!==S){Ce.buffers.depth.getReversed()&&S.reversedDepth!==!0&&(S._reversedDepth=!0,S.updateProjectionMatrix()),Pt.setValue(N,"projectionMatrix",S.projectionMatrix),Pt.setValue(N,"viewMatrix",S.matrixWorldInverse);const gn=Pt.map.cameraPosition;gn!==void 0&&gn.setValue(N,Ue.setFromMatrixPosition(S.matrixWorld)),vt.logarithmicDepthBuffer&&Pt.setValue(N,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&Pt.setValue(N,"isOrthographic",S.isOrthographicCamera===!0),k!==S&&(k=S,En=!0,fa=!0)}if(V.isSkinnedMesh){Pt.setOptional(N,V,"bindMatrix"),Pt.setOptional(N,V,"bindMatrixInverse");const ln=V.skeleton;ln&&(ln.boneTexture===null&&ln.computeBoneTexture(),Pt.setValue(N,"boneTexture",ln.boneTexture,Ye))}V.isBatchedMesh&&(Pt.setOptional(N,V,"batchingTexture"),Pt.setValue(N,"batchingTexture",V._matricesTexture,Ye),Pt.setOptional(N,V,"batchingIdTexture"),Pt.setValue(N,"batchingIdTexture",V._indirectTexture,Ye),Pt.setOptional(N,V,"batchingColorTexture"),V._colorsTexture!==null&&Pt.setValue(N,"batchingColorTexture",V._colorsTexture,Ye));const On=X.morphAttributes;if((On.position!==void 0||On.normal!==void 0||On.color!==void 0)&&Ge.update(V,X,wn),(En||Be.receiveShadow!==V.receiveShadow)&&(Be.receiveShadow=V.receiveShadow,Pt.setValue(N,"receiveShadow",V.receiveShadow)),Y.isMeshGouraudMaterial&&Y.envMap!==null&&(xn.envMap.value=Ae,xn.flipEnvMap.value=Ae.isCubeTexture&&Ae.isRenderTargetTexture===!1?-1:1),Y.isMeshStandardMaterial&&Y.envMap===null&&H.environment!==null&&(xn.envMapIntensity.value=H.environmentIntensity),xn.dfgLUT!==void 0&&(xn.dfgLUT.value=dg()),En&&(Pt.setValue(N,"toneMappingExposure",C.toneMappingExposure),Be.needsLights&&Wd(xn,fa),pe&&Y.fog===!0&&Le.refreshFogUniforms(xn,pe),Le.refreshMaterialUniforms(xn,Y,de,fe,A.state.transmissionRenderTarget[S.id]),Ls.upload(N,hc(Be),xn,Ye)),Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(Ls.upload(N,hc(Be),xn,Ye),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&Pt.setValue(N,"center",V.center),Pt.setValue(N,"modelViewMatrix",V.modelViewMatrix),Pt.setValue(N,"normalMatrix",V.normalMatrix),Pt.setValue(N,"modelMatrix",V.matrixWorld),Y.isShaderMaterial||Y.isRawShaderMaterial){const ln=Y.uniformsGroups;for(let gn=0,fo=ln.length;gn<fo;gn++){const tr=ln[gn];ye.update(tr,wn),ye.bind(tr,wn)}}return wn}function Wd(S,H){S.ambientLightColor.needsUpdate=H,S.lightProbe.needsUpdate=H,S.directionalLights.needsUpdate=H,S.directionalLightShadows.needsUpdate=H,S.pointLights.needsUpdate=H,S.pointLightShadows.needsUpdate=H,S.spotLights.needsUpdate=H,S.spotLightShadows.needsUpdate=H,S.rectAreaLights.needsUpdate=H,S.hemisphereLights.needsUpdate=H}function qd(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return B},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(S,H,X){const Y=Ne.get(S);Y.__autoAllocateDepthBuffer=S.resolveDepthBuffer===!1,Y.__autoAllocateDepthBuffer===!1&&(Y.__useRenderToTexture=!1),Ne.get(S.texture).__webglTexture=H,Ne.get(S.depthTexture).__webglTexture=Y.__autoAllocateDepthBuffer?void 0:X,Y.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(S,H){const X=Ne.get(S);X.__webglFramebuffer=H,X.__useDefaultFramebuffer=H===void 0};const Xd=N.createFramebuffer();this.setRenderTarget=function(S,H=0,X=0){w=S,B=H,E=X;let Y=!0,V=null,pe=!1,Se=!1;if(S){const Ae=Ne.get(S);if(Ae.__useDefaultFramebuffer!==void 0)Ce.bindFramebuffer(N.FRAMEBUFFER,null),Y=!1;else if(Ae.__webglFramebuffer===void 0)Ye.setupRenderTarget(S);else if(Ae.__hasExternalTextures)Ye.rebindTextures(S,Ne.get(S.texture).__webglTexture,Ne.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){const Fe=S.depthTexture;if(Ae.__boundDepthTexture!==Fe){if(Fe!==null&&Ne.has(Fe)&&(S.width!==Fe.image.width||S.height!==Fe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Ye.setupDepthRenderbuffer(S)}}const Ve=S.texture;(Ve.isData3DTexture||Ve.isDataArrayTexture||Ve.isCompressedArrayTexture)&&(Se=!0);const qe=Ne.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(qe[H])?V=qe[H][X]:V=qe[H],pe=!0):S.samples>0&&Ye.useMultisampledRTT(S)===!1?V=Ne.get(S).__webglMultisampledFramebuffer:Array.isArray(qe)?V=qe[X]:V=qe,q.copy(S.viewport),$.copy(S.scissor),J=S.scissorTest}else q.copy(nt).multiplyScalar(de).floor(),$.copy(ft).multiplyScalar(de).floor(),J=xt;if(X!==0&&(V=Xd),Ce.bindFramebuffer(N.FRAMEBUFFER,V)&&Y&&Ce.drawBuffers(S,V),Ce.viewport(q),Ce.scissor($),Ce.setScissorTest(J),pe){const Ae=Ne.get(S.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+H,Ae.__webglTexture,X)}else if(Se){const Ae=H;for(let Ve=0;Ve<S.textures.length;Ve++){const qe=Ne.get(S.textures[Ve]);N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0+Ve,qe.__webglTexture,X,Ae)}}else if(S!==null&&X!==0){const Ae=Ne.get(S.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,Ae.__webglTexture,X)}O=-1},this.readRenderTargetPixels=function(S,H,X,Y,V,pe,Se,De=0){if(!(S&&S.isWebGLRenderTarget)){kt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ae=Ne.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&Se!==void 0&&(Ae=Ae[Se]),Ae){Ce.bindFramebuffer(N.FRAMEBUFFER,Ae);try{const Ve=S.textures[De],qe=Ve.format,Fe=Ve.type;if(!vt.textureFormatReadable(qe)){kt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!vt.textureTypeReadable(Fe)){kt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=S.width-Y&&X>=0&&X<=S.height-V&&(S.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+De),N.readPixels(H,X,Y,V,Xe.convert(qe),Xe.convert(Fe),pe))}finally{const Ve=w!==null?Ne.get(w).__webglFramebuffer:null;Ce.bindFramebuffer(N.FRAMEBUFFER,Ve)}}},this.readRenderTargetPixelsAsync=async function(S,H,X,Y,V,pe,Se,De=0){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ae=Ne.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&Se!==void 0&&(Ae=Ae[Se]),Ae)if(H>=0&&H<=S.width-Y&&X>=0&&X<=S.height-V){Ce.bindFramebuffer(N.FRAMEBUFFER,Ae);const Ve=S.textures[De],qe=Ve.format,Fe=Ve.type;if(!vt.textureFormatReadable(qe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!vt.textureTypeReadable(Fe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ct=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,ct),N.bufferData(N.PIXEL_PACK_BUFFER,pe.byteLength,N.STREAM_READ),S.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+De),N.readPixels(H,X,Y,V,Xe.convert(qe),Xe.convert(Fe),0);const yt=w!==null?Ne.get(w).__webglFramebuffer:null;Ce.bindFramebuffer(N.FRAMEBUFFER,yt);const Nt=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await zm(N,Nt,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,ct),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,pe),N.deleteBuffer(ct),N.deleteSync(Nt),pe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(S,H=null,X=0){const Y=Math.pow(2,-X),V=Math.floor(S.image.width*Y),pe=Math.floor(S.image.height*Y),Se=H!==null?H.x:0,De=H!==null?H.y:0;Ye.setTexture2D(S,0),N.copyTexSubImage2D(N.TEXTURE_2D,X,0,0,Se,De,V,pe),Ce.unbindTexture()};const Yd=N.createFramebuffer(),$d=N.createFramebuffer();this.copyTextureToTexture=function(S,H,X=null,Y=null,V=0,pe=null){pe===null&&(V!==0?(Ia("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),pe=V,V=0):pe=0);let Se,De,Ae,Ve,qe,Fe,ct,yt,Nt;const Ft=S.isCompressedTexture?S.mipmaps[pe]:S.image;if(X!==null)Se=X.max.x-X.min.x,De=X.max.y-X.min.y,Ae=X.isBox3?X.max.z-X.min.z:1,Ve=X.min.x,qe=X.min.y,Fe=X.isBox3?X.min.z:0;else{const On=Math.pow(2,-V);Se=Math.floor(Ft.width*On),De=Math.floor(Ft.height*On),S.isDataArrayTexture?Ae=Ft.depth:S.isData3DTexture?Ae=Math.floor(Ft.depth*On):Ae=1,Ve=0,qe=0,Fe=0}Y!==null?(ct=Y.x,yt=Y.y,Nt=Y.z):(ct=0,yt=0,Nt=0);const wt=Xe.convert(H.format),Be=Xe.convert(H.type);let Dt;H.isData3DTexture?(Ye.setTexture3D(H,0),Dt=N.TEXTURE_3D):H.isDataArrayTexture||H.isCompressedArrayTexture?(Ye.setTexture2DArray(H,0),Dt=N.TEXTURE_2D_ARRAY):(Ye.setTexture2D(H,0),Dt=N.TEXTURE_2D),N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,H.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,H.unpackAlignment);const ht=N.getParameter(N.UNPACK_ROW_LENGTH),wn=N.getParameter(N.UNPACK_IMAGE_HEIGHT),Mr=N.getParameter(N.UNPACK_SKIP_PIXELS),En=N.getParameter(N.UNPACK_SKIP_ROWS),fa=N.getParameter(N.UNPACK_SKIP_IMAGES);N.pixelStorei(N.UNPACK_ROW_LENGTH,Ft.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,Ft.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,Ve),N.pixelStorei(N.UNPACK_SKIP_ROWS,qe),N.pixelStorei(N.UNPACK_SKIP_IMAGES,Fe);const Pt=S.isDataArrayTexture||S.isData3DTexture,xn=H.isDataArrayTexture||H.isData3DTexture;if(S.isDepthTexture){const On=Ne.get(S),ln=Ne.get(H),gn=Ne.get(On.__renderTarget),fo=Ne.get(ln.__renderTarget);Ce.bindFramebuffer(N.READ_FRAMEBUFFER,gn.__webglFramebuffer),Ce.bindFramebuffer(N.DRAW_FRAMEBUFFER,fo.__webglFramebuffer);for(let tr=0;tr<Ae;tr++)Pt&&(N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Ne.get(S).__webglTexture,V,Fe+tr),N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Ne.get(H).__webglTexture,pe,Nt+tr)),N.blitFramebuffer(Ve,qe,Se,De,ct,yt,Se,De,N.DEPTH_BUFFER_BIT,N.NEAREST);Ce.bindFramebuffer(N.READ_FRAMEBUFFER,null),Ce.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else if(V!==0||S.isRenderTargetTexture||Ne.has(S)){const On=Ne.get(S),ln=Ne.get(H);Ce.bindFramebuffer(N.READ_FRAMEBUFFER,Yd),Ce.bindFramebuffer(N.DRAW_FRAMEBUFFER,$d);for(let gn=0;gn<Ae;gn++)Pt?N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,On.__webglTexture,V,Fe+gn):N.framebufferTexture2D(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,On.__webglTexture,V),xn?N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,ln.__webglTexture,pe,Nt+gn):N.framebufferTexture2D(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,ln.__webglTexture,pe),V!==0?N.blitFramebuffer(Ve,qe,Se,De,ct,yt,Se,De,N.COLOR_BUFFER_BIT,N.NEAREST):xn?N.copyTexSubImage3D(Dt,pe,ct,yt,Nt+gn,Ve,qe,Se,De):N.copyTexSubImage2D(Dt,pe,ct,yt,Ve,qe,Se,De);Ce.bindFramebuffer(N.READ_FRAMEBUFFER,null),Ce.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else xn?S.isDataTexture||S.isData3DTexture?N.texSubImage3D(Dt,pe,ct,yt,Nt,Se,De,Ae,wt,Be,Ft.data):H.isCompressedArrayTexture?N.compressedTexSubImage3D(Dt,pe,ct,yt,Nt,Se,De,Ae,wt,Ft.data):N.texSubImage3D(Dt,pe,ct,yt,Nt,Se,De,Ae,wt,Be,Ft):S.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,pe,ct,yt,Se,De,wt,Be,Ft.data):S.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,pe,ct,yt,Ft.width,Ft.height,wt,Ft.data):N.texSubImage2D(N.TEXTURE_2D,pe,ct,yt,Se,De,wt,Be,Ft);N.pixelStorei(N.UNPACK_ROW_LENGTH,ht),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,wn),N.pixelStorei(N.UNPACK_SKIP_PIXELS,Mr),N.pixelStorei(N.UNPACK_SKIP_ROWS,En),N.pixelStorei(N.UNPACK_SKIP_IMAGES,fa),pe===0&&H.generateMipmaps&&N.generateMipmap(Dt),Ce.unbindTexture()},this.initRenderTarget=function(S){Ne.get(S).__webglFramebuffer===void 0&&Ye.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?Ye.setTextureCube(S,0):S.isData3DTexture?Ye.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?Ye.setTexture2DArray(S,0):Ye.setTexture2D(S,0),Ce.unbindTexture()},this.resetState=function(){B=0,E=0,w=null,Ce.reset(),F.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ri}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=dt._getDrawingBufferColorSpace(e),t.unpackColorSpace=dt._getUnpackColorSpace()}}const nh={type:"change"},ec={type:"start"},Fd={type:"end"},Ms=new Kl,ih=new ki,pg=Math.cos(70*km.DEG2RAD),Yt=new G,bn=2*Math.PI,St={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},c0=1e-6;class mg extends T1{constructor(e,t=null){super(e,t),this.state=St.NONE,this.target=new G,this.cursor=new G,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Vr.ROTATE,MIDDLE:Vr.DOLLY,RIGHT:Vr.PAN},this.touches={ONE:Br.ROTATE,TWO:Br.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new G,this._lastQuaternion=new gr,this._lastTargetPosition=new G,this._quat=new gr().setFromUnitVectors(e.up,new G(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Du,this._sphericalDelta=new Du,this._scale=1,this._panOffset=new G,this._rotateStart=new je,this._rotateEnd=new je,this._rotateDelta=new je,this._panStart=new je,this._panEnd=new je,this._panDelta=new je,this._dollyStart=new je,this._dollyEnd=new je,this._dollyDelta=new je,this._dollyDirection=new G,this._mouse=new je,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=gg.bind(this),this._onPointerDown=xg.bind(this),this._onPointerUp=vg.bind(this),this._onContextMenu=Eg.bind(this),this._onMouseWheel=yg.bind(this),this._onKeyDown=Mg.bind(this),this._onTouchStart=Sg.bind(this),this._onTouchMove=wg.bind(this),this._onMouseDown=bg.bind(this),this._onMouseMove=_g.bind(this),this._interceptControlDown=Tg.bind(this),this._interceptControlUp=Ag.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(nh),this.update(),this.state=St.NONE}update(e=null){const t=this.object.position;Yt.copy(t).sub(this.target),Yt.applyQuaternion(this._quat),this._spherical.setFromVector3(Yt),this.autoRotate&&this.state===St.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(i)&&isFinite(r)&&(i<-Math.PI?i+=bn:i>Math.PI&&(i-=bn),r<-Math.PI?r+=bn:r>Math.PI&&(r-=bn),i<=r?this._spherical.theta=Math.max(i,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+r)/2?Math.max(i,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let a=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const s=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),a=s!=this._spherical.radius}if(Yt.setFromSpherical(this._spherical),Yt.applyQuaternion(this._quatInverse),t.copy(this.target).add(Yt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let s=null;if(this.object.isPerspectiveCamera){const o=Yt.length();s=this._clampDistance(o*this._scale);const l=o-s;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),a=!!l}else if(this.object.isOrthographicCamera){const o=new G(this._mouse.x,this._mouse.y,0);o.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),a=l!==this.object.zoom;const c=new G(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),s=Yt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;s!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(s).add(this.object.position):(Ms.origin.copy(this.object.position),Ms.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Ms.direction))<pg?this.object.lookAt(this.target):(ih.setFromNormalAndCoplanarPoint(this.object.up,this.target),Ms.intersectPlane(ih,this.target))))}else if(this.object.isOrthographicCamera){const s=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),s!==this.object.zoom&&(this.object.updateProjectionMatrix(),a=!0)}return this._scale=1,this._performCursorZoom=!1,a||this._lastPosition.distanceToSquared(this.object.position)>c0||8*(1-this._lastQuaternion.dot(this.object.quaternion))>c0||this._lastTargetPosition.distanceToSquared(this.target)>c0?(this.dispatchEvent(nh),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?bn/60*this.autoRotateSpeed*e:bn/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Yt.setFromMatrixColumn(t,0),Yt.multiplyScalar(-e),this._panOffset.add(Yt)}_panUp(e,t){this.screenSpacePanning===!0?Yt.setFromMatrixColumn(t,1):(Yt.setFromMatrixColumn(t,0),Yt.crossVectors(this.object.up,Yt)),Yt.multiplyScalar(e),this._panOffset.add(Yt)}_pan(e,t){const i=this.domElement;if(this.object.isPerspectiveCamera){const r=this.object.position;Yt.copy(r).sub(this.target);let a=Yt.length();a*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*a/i.clientHeight,this.object.matrix),this._panUp(2*t*a/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),r=e-i.left,a=t-i.top,s=i.width,o=i.height;this._mouse.x=r/s*2-1,this._mouse.y=-(a/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(bn*this._rotateDelta.x/t.clientHeight),this._rotateUp(bn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(bn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-bn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(bn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-bn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._rotateStart.set(i,r)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panStart.set(i,r)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,r=e.pageY-t.y,a=Math.sqrt(i*i+r*r);this._dollyStart.set(0,a)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),r=.5*(e.pageX+i.x),a=.5*(e.pageY+i.y);this._rotateEnd.set(r,a)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(bn*this._rotateDelta.x/t.clientHeight),this._rotateUp(bn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panEnd.set(i,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,r=e.pageY-t.y,a=Math.sqrt(i*i+r*r);this._dollyEnd.set(0,a),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const s=(e.pageX+t.x)*.5,o=(e.pageY+t.y)*.5;this._updateZoomParameters(s,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new je,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function xg(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n)))}function gg(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function vg(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Fd),this.state=St.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function bg(n){let e;switch(n.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Vr.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=St.DOLLY;break;case Vr.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=St.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=St.ROTATE}break;case Vr.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=St.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=St.PAN}break;default:this.state=St.NONE}this.state!==St.NONE&&this.dispatchEvent(ec)}function _g(n){switch(this.state){case St.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case St.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case St.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function yg(n){this.enabled===!1||this.enableZoom===!1||this.state!==St.NONE||(n.preventDefault(),this.dispatchEvent(ec),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(Fd))}function Mg(n){this.enabled!==!1&&this._handleKeyDown(n)}function Sg(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case Br.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=St.TOUCH_ROTATE;break;case Br.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=St.TOUCH_PAN;break;default:this.state=St.NONE}break;case 2:switch(this.touches.TWO){case Br.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=St.TOUCH_DOLLY_PAN;break;case Br.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=St.TOUCH_DOLLY_ROTATE;break;default:this.state=St.NONE}break;default:this.state=St.NONE}this.state!==St.NONE&&this.dispatchEvent(ec)}function wg(n){switch(this._trackPointer(n),this.state){case St.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case St.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case St.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case St.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=St.NONE}}function Eg(n){this.enabled!==!1&&n.preventDefault()}function Tg(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Ag(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}class Od extends qt{constructor(e=document.createElement("div")){super(),this.isCSS2DObject=!0,this.element=e,this.element.style.position="absolute",this.element.style.userSelect="none",this.element.setAttribute("draggable",!1),this.center=new je(.5,.5),this.addEventListener("removed",function(){this.traverse(function(t){t.element&&t.element instanceof t.element.ownerDocument.defaultView.Element&&t.element.parentNode!==null&&t.element.remove()})})}copy(e,t){return super.copy(e,t),this.element=e.element.cloneNode(!0),this.center=e.center,this}}const zr=new G,rh=new Tt,ah=new Tt,sh=new G,oh=new G;class Cg{constructor(e={}){const t=this;let i,r,a,s;const o={objects:new WeakMap},l=e.element!==void 0?e.element:document.createElement("div");l.style.overflow="hidden",this.domElement=l,this.sortObjects=!0,this.getSize=function(){return{width:i,height:r}},this.render=function(v,b){v.matrixWorldAutoUpdate===!0&&v.updateMatrixWorld(),b.parent===null&&b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),rh.copy(b.matrixWorldInverse),ah.multiplyMatrices(b.projectionMatrix,rh),u(v,v,b),this.sortObjects&&m(v)},this.setSize=function(v,b){i=v,r=b,a=i/2,s=r/2,l.style.width=v+"px",l.style.height=b+"px"};function c(v){v.isCSS2DObject&&(v.element.style.display="none");for(let b=0,g=v.children.length;b<g;b++)c(v.children[b])}function u(v,b,g){if(v.visible===!1){c(v);return}if(v.isCSS2DObject){zr.setFromMatrixPosition(v.matrixWorld),zr.applyMatrix4(ah);const p=zr.z>=-1&&zr.z<=1&&v.layers.test(g.layers)===!0,T=v.element;T.style.display=p===!0?"":"none",p===!0&&(v.onBeforeRender(t,b,g),T.style.transform="translate("+-100*v.center.x+"%,"+-100*v.center.y+"%)translate("+(zr.x*a+a)+"px,"+(-zr.y*s+s)+"px)",T.parentNode!==l&&l.appendChild(T),v.onAfterRender(t,b,g));const A={distanceToCameraSquared:d(g,v)};o.objects.set(v,A)}for(let p=0,T=v.children.length;p<T;p++)u(v.children[p],b,g)}function d(v,b){return sh.setFromMatrixPosition(v.matrixWorld),oh.setFromMatrixPosition(b.matrixWorld),sh.distanceToSquared(oh)}function f(v){const b=[];return v.traverseVisible(function(g){g.isCSS2DObject&&b.push(g)}),b}function m(v){const b=f(v).sort(function(p,T){if(p.renderOrder!==T.renderOrder)return T.renderOrder-p.renderOrder;const A=o.objects.get(p).distanceToCameraSquared,D=o.objects.get(T).distanceToCameraSquared;return A-D}),g=b.length;for(let p=0,T=b.length;p<T;p++)b[p].element.style.zIndex=g-p}}}const an=n=>n*Math.PI/180,u0=n=>n*180/Math.PI,Ml=(n,e)=>n.reduce((t,i,r)=>t+i*e[r],0),h0=(n,e)=>[n[1]*e[2]-n[2]*e[1],n[2]*e[0]-n[0]*e[2],n[0]*e[1]-n[1]*e[0]],Ea=(n,e)=>n.map(t=>t*e),Rg=n=>Math.hypot(...n),Kn=n=>Ea(n,1/(Rg(n)||1)),tc={alpha:5,beta:0,theta:15,phi:0,psi:0,speed:60};function fr(n,e){const[t,i,r]=[e.phi,e.theta,e.psi].map(an),[a,s,o,l,c,u]=[Math.cos(t),Math.sin(t),Math.cos(i),Math.sin(i),Math.cos(r),Math.sin(r)];return[c*o*n[0]+(c*l*s-u*a)*n[1]+(c*l*a+u*s)*n[2],u*o*n[0]+(u*l*s+c*a)*n[1]+(u*l*a-c*s)*n[2],-l*n[0]+o*s*n[1]+o*a*n[2]]}function Xr(n){const[e,t]=[n.alpha,n.beta].map(an),i=[n.speed*Math.cos(e)*Math.cos(t),n.speed*Math.sin(t),n.speed*Math.sin(e)*Math.cos(t)],r=fr(i,n),a=u0(Math.atan2(-r[2],Math.hypot(r[0],r[1]))),s=u0(Math.atan2(r[1],r[0])),o=fr([1,0,0],n),l=fr([0,1,0],n),c=fr([0,0,1],n),u=Kn(r),d=fr([-Math.sin(e),0,Math.cos(e)],n),f=Kn(h0(d,u)),v=Kn(h0([0,0,1],u)),b=Kn(h0(u,v)),g=Math.hypot(u[0],u[1])<1e-8,p=g?NaN:u0(Math.atan2(Ml(f,b),Ml(f,v)));return{...n,gamma:a,sigma:g?NaN:s,mu:p,velocityBody:i,velocityEarth:r,bx:o,by:l,bz:c,wx:u,wy:f,wz:d,levelY:v,levelZ:b,longitudinal:Math.abs(n.phi)<1e-7&&Math.abs(n.beta)<1e-7&&Math.abs(n.theta-n.alpha)<=90,lateral:Math.abs(n.phi)<1e-7&&Math.abs(n.theta)<1e-7&&Math.abs(n.alpha)<1e-7,verticalPath:g}}const Dg={alpha:[-30,30],beta:[-30,30],theta:[-80,80],phi:[-80,80],psi:[-180,180],speed:[10,200]},Pn={alpha:{symbol:"α",name:"攻角",english:"Angle of attack",group:"气动角",definition:"空速向量在机体对称面 x_A–z_A 上的投影，与机体纵轴 x_A 的夹角。",directions:"机体纵轴 x_A ↔ 空速在机体对称面上的投影",positive:"w > 0 时为正：机头相对空速方向上仰。",formula:"\\alpha=\\operatorname{atan2}(w,u)",condition:"本工具以飞机相对空气的速度定义空速。迎面来流箭头与空速箭头相反，不能直接互换。",misconception:"攻角不是俯仰角。机头相对地平线抬高，并不代表攻角一定增大。",view:"side"},beta:{symbol:"β",name:"侧滑角",english:"Sideslip angle",group:"气动角",definition:"空速向量偏离机体对称面的角度，表示速度沿机体横轴的分量。",directions:"空速在机体对称面上的投影 ↔ 完整空速向量",positive:"v > 0 时为正，即空速包含指向右翼的分量。",formula:"\\beta=\\arcsin\\left(\\frac{v}{V}\\right)",condition:"β 由三维向量与对称面的夹角定义；俯视投影角仅在特定条件下等于 β。",misconception:"侧滑角不是机头相对地面的偏航角，也不等于横风修正角。",view:"top"},theta:{symbol:"θ",name:"俯仰角",english:"Pitch angle",group:"姿态角",definition:"在 Z–Y–X 欧拉角约定下，机体纵轴相对地面水平面的仰角。",directions:"地面水平面 ↔ 机体纵轴 x_A",positive:"机头向上为正。",formula:"R_{EA}=R_z(\\psi)R_y(\\theta)R_x(\\phi)",condition:"采用内禀 3–2–1 欧拉角。俯仰范围限制在 ±80°，避开 ±90° 的欧拉角奇异点。",misconception:"飞机机头指向不等于飞机运动方向；θ 与 γ 一般不同。",view:"side"},gamma:{symbol:"γ",name:"航迹角",english:"Flight path angle",group:"航迹角",definition:"地速向量相对地面水平面的仰角，表示实际飞行方向的爬升或下降。",directions:"地速在水平面上的投影 ↔ 地速向量",positive:"爬升为正，下降为负；NED 坐标的向下速度此时为负。",formula:"\\gamma=\\operatorname{atan2}(-V_{z_E},\\sqrt{V_{x_E}^2+V_{y_E}^2})",condition:"第一版采用无风假设，因此地速与空速数值相同。θ = α + γ 只在适用的纵向状态下显示。",misconception:"抬头不一定爬升。θ > 0 时，γ 仍可能为零或为负。",view:"side"},phi:{symbol:"φ",name:"滚转角",english:"Roll angle",group:"姿态角",definition:"3–2–1 欧拉旋转的最后一步：绕已经偏航、俯仰后的纵轴旋转。",directions:"中间参考系横轴 ↔ 机体横轴 y_A",positive:"右翼向下为正。",formula:"R_{EA}=R_z(\\psi)R_y(\\theta)R_x(\\phi)",condition:"欧拉角是有顺序的旋转，不是任意顺序的三个独立空间转角。",misconception:"φ 描述机体姿态；μ 描述风轴相对航迹水平参考的倾斜，二者一般不同。",view:"front"},psi:{symbol:"ψ",name:"偏航角",english:"Yaw angle",group:"姿态角",definition:"机体纵轴在地面水平面上的投影，相对于地面北向 x_E 的方位角。",directions:"地面北向 x_E ↔ 机头的水平投影",positive:"从北向东旋转为正，即从上方看顺时针。",formula:"\\psi=\\operatorname{atan2}(x_{A,y_E},x_{A,x_E})",condition:"这里用 ψ 表示机头航向，用 σ 表示地速航迹方位。不同教材的命名和符号可能不同。",misconception:"机头指向 ψ 与实际水平运动方向 σ 不必一致。",view:"top"},sigma:{symbol:"σ",name:"航迹方位角",english:"Course angle",group:"航迹角",definition:"地速在地面水平面上的投影，相对于北向 x_E 的方位角。",directions:"地面北向 x_E ↔ 地速的水平投影",positive:"从北向东为正，显示范围 −180° 到 180°。",formula:"\\sigma=\\operatorname{atan2}(V_{y_E},V_{x_E})",condition:"本工具以 σ 表示 course。σ = ψ + β 仅在无风、α = θ = φ = 0 的水平几何状态下使用，并按 360° 取模。",misconception:"英文 heading 常指机头航向。为避免歧义，本工具明确区分 heading ψ 与 course σ。",view:"top"},mu:{symbol:"μ",name:"风轴倾斜角",english:"Wind-axis bank angle",group:"转弯角",definition:"绕空速方向，风轴横轴相对当地航迹水平横轴的旋转角。",directions:"航迹水平横轴 ↔ 风轴横轴 y_W",positive:"沿速度方向看，风轴右翼侧向下为正。",formula:"\\mu=\\operatorname{atan2}(\\mathbf y_W\\cdot\\mathbf z_T,\\mathbf y_W\\cdot\\mathbf y_T)",condition:"L cos μ = W、n = 1/cos μ 还要求协调稳定水平转弯、忽略其他垂直力，不能套用到所有几何状态。",misconception:"μ 与 φ 在 α、β 均为零时一致，一般三维飞行中不能无条件互换。",view:"front"}},Na=["alpha","beta","theta","gamma","phi","psi","sigma","mu"],co=[{id:"climb",name:"纵向爬升",english:"Climb",state:{alpha:5,beta:0,theta:15,phi:0,psi:0,speed:60},note:"无风纵向几何：θ = 15°，α = 5°，γ = 10°。"},{id:"level",name:"水平飞行",english:"Level",state:{alpha:5,beta:0,theta:5,phi:0,psi:0,speed:60},note:"γ = 0° 时，机头仍可上仰。这里 α = θ = 5°。"},{id:"descent",name:"下降",english:"Descent",state:{alpha:5,beta:0,theta:-5,phi:0,psi:0,speed:60},note:"θ = −5°、α = 5°，得到 γ = −10°。"},{id:"slip",name:"侧滑",english:"Sideslip",state:{alpha:0,beta:12,theta:0,phi:0,psi:20,speed:60},note:"无风水平几何：ψ = 20°，β = 12°，σ = 32°。"},{id:"bank",name:"倾斜姿态",english:"Bank",state:{alpha:8,beta:0,theta:10,phi:35,psi:0,speed:60},note:"这是倾斜姿态几何示例；没有求解力平衡，不代表稳定转弯。"}],Fa={alpha:{brief:"机体纵轴与空速在对称面上投影的夹角。",plane:"机体对称面",labels:["x_A","V_xz"],names:["机体纵轴","空速在对称面上的投影"]},beta:{brief:"空速偏离机体对称面的角度。",plane:"侧滑角截面",labels:["V_xz","V"],names:["空速在对称面上的投影","完整空速方向"]},theta:{brief:"机头相对地面水平面的仰角。",plane:"机头所在的竖直截面",labels:["H_A","x_A"],names:["机头的水平投影","机体纵轴"]},gamma:{brief:"运动方向相对水平面的爬升或下降角。",plane:"航迹所在的竖直截面",labels:["V_H","V"],names:["速度的水平投影","速度方向"]},phi:{brief:"绕机体纵轴，机翼相对未滚转位置的倾斜。",plane:"沿机体纵轴观察",labels:["y_0","y_A"],names:["未滚转时的横轴","当前机体横轴"]},psi:{brief:"机头在水平面上的指向，由北向东为正。",plane:"地面水平面",labels:["x_E","x_AH"],names:["地面北向","机头的水平投影"]},sigma:{brief:"实际运动在水平面上的方向，由北向东为正。",plane:"地面水平面",labels:["x_E","V_H"],names:["地面北向","速度的水平投影"]},mu:{brief:"绕空速方向，风轴相对航迹水平参考的倾斜。",plane:"沿空速方向观察",labels:["y_T","y_W"],names:["航迹水平横轴","当前风轴横轴"]}};function Pg(n,e){if(!Number.isFinite(n[e]))return null;const t=a=>Kn([a[0],a[1],0]),i=fr([Math.cos(an(n.alpha)),0,Math.sin(an(n.alpha))],n);return{...{alpha:{start:n.bx,axis:Ea(n.by,-1),radius:5.4},beta:{start:i,axis:n.wz,radius:5.4},theta:{start:t(n.bx),axis:[-Math.sin(an(n.psi)),Math.cos(an(n.psi)),0],radius:5.6},gamma:{start:t(n.wx),axis:Kn([-n.wx[1],n.wx[0],0]),radius:6},phi:{start:fr([0,1,0],{...n,phi:0}),axis:n.bx,radius:5.2},psi:{start:[1,0,0],axis:[0,0,1],radius:5.8},sigma:{start:[1,0,0],axis:[0,0,1],radius:6},mu:{start:n.levelY,axis:n.wx,radius:5.2}}[e],angle:n[e],...Fa[e]}}function lh(n,e){const t=Fa[e],i=n[e],r=Pn[e];if(!Number.isFinite(i))return`<p class="diagram-empty">垂直航迹下，${r.symbol} 没有唯一的参考方向。</p>`;const a=an(i)*(e==="theta"||e==="gamma"?1:-1),s=138,o=145,l=69,c=103,u=v=>s+Math.cos(v)*c,d=v=>o-Math.sin(v)*c,f=v=>v.includes("_")?v.replace(/_(.+)/,'<tspan baseline-shift="sub" font-size="10">$1</tspan>'):v,m=a/2;return`<svg viewBox="0 0 300 260" role="img" aria-label="${r.name} ${i.toFixed(1)}度，${t.names[0]}与${t.names[1]}的夹角"><defs><marker id="angle-ref" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><path d="M0 0 6 3 0 6" fill="#64bdcc"/></marker><marker id="angle-current" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><path d="M0 0 6 3 0 6" fill="#e0b56d"/></marker></defs><path d="M22 ${o}H278M${s} 23V243" stroke="#303437" stroke-dasharray="2 5"/>${Math.abs(i)>.001?`<path d="M${s} ${o}L${s+l} ${o}A${l} ${l} 0 0 ${a>0?0:1} ${s+l*Math.cos(a)} ${o-l*Math.sin(a)}Z" fill="#e0b56d" fill-opacity=".18" stroke="#e0b56d" stroke-width="1.3"/>`:""}<path d="M${s} ${o}L${u(0)} ${d(0)}" stroke="#64bdcc" stroke-width="2" marker-end="url(#angle-ref)"/><path d="M${s} ${o}L${u(a)} ${d(a)}" stroke="#e0b56d" stroke-width="2" marker-end="url(#angle-current)"/><circle cx="${s}" cy="${o}" r="2.8" fill="#e5e7e8"/><text x="${u(0)+9}" y="${o-10}" fill="#64bdcc">${f(t.labels[0])}</text><text x="${u(a)+(Math.cos(a)<0?-8:8)}" y="${d(a)+(a>0?-9:19)}" text-anchor="${Math.cos(a)<0?"end":"start"}" fill="#e0b56d">${f(t.labels[1])}</text><text x="${s+Math.cos(m)*44}" y="${o-Math.sin(m)*44-7}" fill="#f2cf8b" class="diagram-symbol">${r.symbol}</text><text x="18" y="258" fill="#adb5ba">${r.symbol} = ${i.toFixed(1)}°</text></svg>`}const Cn=n=>new G(n[0],-n[2],n[1]),d0=n=>n<1?1.35/n:n>1.4?.82:1,ei={earth:10132898,body:6602188,wind:14726509,selected:15912843};function Ss(n){for(;n.children.length;){const e=n.children[0];n.remove(e),e.traverse(t=>{(t instanceof Qt||t instanceof Ua)&&(t.geometry.dispose(),(Array.isArray(t.material)?t.material:[t.material]).forEach(r=>r.dispose())),t instanceof Od&&t.element.remove()})}}class Lg{constructor(e,t,i=()=>{}){this.host=e,this.select=t,this.invalidate=i,this.scene.background=new ut("#101112"),this.renderer=new fg({antialias:!0,alpha:!1}),this.renderer.setPixelRatio(Math.min(devicePixelRatio,2)),this.renderer.outputColorSpace=Dn,this.renderer.setClearColor("#101112"),this.renderer.domElement.setAttribute("aria-label","可拖动旋转、滚轮缩放的三维飞机"),e.append(this.renderer.domElement),this.labels.domElement.className="scene-labels",e.append(this.labels.domElement),this.controls=new mg(this.camera,this.renderer.domElement),this.controls.addEventListener("change",this.invalidate),this.controls.enableDamping=!0,this.controls.enablePan=!1,this.controls.minDistance=9,this.controls.maxDistance=60,this.controls.target.set(0,0,0),this.view("iso"),this.scene.add(new _1(15069951,3551530,2.3));const r=new Ru(16777215,3.5);r.position.set(5,10,5),this.scene.add(r);const a=new Ru(10269890,1.1);a.position.set(-5,3,-6),this.scene.add(a),this.aircraftMaterial=new t0({color:13488849,roughness:.46,metalness:.3}),this.buildAircraft(),this.scene.add(this.aircraft,this.overlays,this.earth);const s=new w1(24,16,2435371,1777441);s.position.y=-3.4,this.scene.add(s),this.addAxes(this.earth,[1,0,0],[0,1,0],[0,0,1],ei.earth,"E",7.7),this.resizeObserver=new ResizeObserver(()=>this.resize()),this.resizeObserver.observe(e),this.resize()}host;select;invalidate;scene=new h1;camera=new Bn(36,1,.1,200);renderer;labels=new Cg;controls;lastAspect=null;aircraft=new mr;overlays=new mr;earth=new mr;aircraftMaterial;visibility={earth:!1,body:!1,wind:!1,planes:!1};showFlow=!1;resizeObserver;buildAircraft(){const e=this.aircraftMaterial,t=new Qt(new Gs(1,40,24),e);t.scale.set(4.2,.43,.48),this.aircraft.add(t);const i=new Qt(new Gs(1,24,16),new t0({color:3427156,roughness:.2,metalness:.5}));i.position.set(1.05,0,-.33),i.scale.set(1.35,.36,.36),this.aircraft.add(i);const r=(o,l)=>{const c=[];for(let f=1;f<o.length-1;f++)c.push(...o[0],...o[f],...o[f+1]);const u=new en;u.setAttribute("position",new Ut(c,3)),u.computeVertexNormals();const d=new Qt(u,l);this.aircraft.add(d)},a=e.clone();a.side=yn;for(const o of[-1,1]){r([[1.15,o*.3,0],[-.6,o*5,0],[-1.65,o*5,0],[-.95,o*.3,0]],a),r([[-2.4,o*.16,-.05],[-3.3,o*2,-.05],[-3.9,o*2,-.05],[-3.55,o*.16,-.05]],a);const l=new Qt(new so(.23,.3,1.4,24),e);l.rotation.z=Math.PI/2,l.position.set(-.2,o*1.8,.36),this.aircraft.add(l);const c=new Qt(new Jl(.19,24),new t0({color:1514269,side:yn}));c.rotation.y=Math.PI/2,c.position.set(.51,o*1.8,.36),this.aircraft.add(c),r([[-.7,o*5,0],[-1.65,o*5,0],[-1.6,o*5,-.75],[-1,o*5,-.65]],a)}r([[-2.2,0,-.25],[-3.1,0,-2],[-3.75,0,-2],[-3.9,0,-.25]],a);const s=new en().setFromPoints([new G(-3.7,0,-.47),new G(3.8,0,-.1)]);this.aircraft.add(new Ua(s,new ta({color:8557463})))}resize(){const e=this.host.clientWidth,t=this.host.clientHeight;if(!e||!t)return;const i=e/t;this.lastAspect!==null&&this.camera.position.sub(this.controls.target).multiplyScalar(d0(i)/d0(this.lastAspect)).add(this.controls.target),this.lastAspect=i,this.camera.aspect=i,this.camera.updateProjectionMatrix(),this.renderer.setSize(e,t),this.labels.setSize(e,t),this.invalidate()}view(e){this.camera.up.set(0,1,0);const t={iso:[13,9,15],side:[0,2,21],top:[0,23,.001],front:[22,1,0],rear:[-22,1,0]},i=t[e]??t.iso;this.camera.position.set(i[0],i[1],i[2]),this.camera.position.multiplyScalar(d0(this.host.clientWidth/this.host.clientHeight)),e==="top"&&this.camera.up.set(1,0,0),this.controls.update()}label(e,t,i,r,a){const s=document.createElement(a?"button":"span");s.textContent=t,s.className=a?"angle-marker":"axis-label",s.style.color="#"+r.toString(16).padStart(6,"0"),a&&(s.setAttribute("aria-label",`查看${Pn[a].name} ${Pn[a].symbol}`),s.addEventListener("click",()=>this.select(a)));const o=new Od(s);o.position.copy(Cn(i)),e.add(o)}arrow(e,t,i,r,a){if(Math.hypot(...t)<1e-7)return;const s=new E1(Cn(Kn(t)),new G,r,i,.25,.13);e.add(s),a&&this.label(e,a,Ea(Kn(t),r+.4),i)}line(e,t,i,r=!1){const a=new en().setFromPoints(t.map(Cn)),s=r?new b1({color:i,dashSize:.15,gapSize:.1,transparent:!0,opacity:.6}):new ta({color:i,transparent:!0,opacity:.85}),o=new Ua(a,s);r&&o.computeLineDistances(),e.add(o)}addAxes(e,t,i,r,a,s,o=6){[t,i,r].forEach((l,c)=>this.arrow(e,l,a,o,["x","y","z"][c]+"_"+s))}arc(e,t,i,r,a,s){const o=[],l=Cn(Kn(t)),c=Cn(Kn(i)),u=Math.max(8,Math.ceil(Math.abs(r)));for(let m=0;m<=u;m++){const v=l.clone().applyAxisAngle(c,an(r*m/u)).multiplyScalar(a);o.push([v.x,v.z,-v.y])}this.line(e,o,ei.selected);const d=l.clone().applyAxisAngle(c,an(r));if(this.arrow(e,Kn(t),ei.body,a+1,Fa[s].labels[0]),this.arrow(e,[d.x,d.z,-d.y],ei.wind,a+1,Fa[s].labels[1]),Math.abs(r)>.001){const m=[];for(let g=0;g<o.length-1;g++){const p=Cn(o[g]),T=Cn(o[g+1]);m.push(0,0,0,p.x,p.y,p.z,T.x,T.y,T.z)}const v=new en;v.setAttribute("position",new Ut(m,3)),v.computeVertexNormals();const b=new Qt(v,new qr({color:ei.selected,transparent:!0,opacity:.38,side:yn,depthWrite:!1,depthTest:!1}));b.renderOrder=3,e.add(b),this.line(e,[o[0],[0,0,0],o[o.length-1]],ei.selected)}const f=l.clone().applyAxisAngle(c,an(r/2)).multiplyScalar(a+.5);this.label(e,Pn[s].symbol,[f.x,f.z,-f.y],ei.selected,s)}update(e,t){const i=new Tt().makeBasis(Cn(e.bx),Cn(e.by),Cn(e.bz));if(this.aircraft.quaternion.setFromRotationMatrix(i),this.earth.visible=this.visibility.earth,Ss(this.overlays),this.visibility.body&&this.addAxes(this.overlays,e.bx,e.by,e.bz,ei.body,"A",6),this.visibility.wind&&this.addAxes(this.overlays,e.wx,e.wy,e.wz,ei.wind,"W",5.3),this.showFlow&&this.arrow(this.overlays,Ea(e.wx,-1),11910853,7,"来流 −V"),this.visibility.planes){const a=new Qt(new na(15,15),new qr({color:9939125,transparent:!0,opacity:.035,side:yn,depthWrite:!1}));if(a.rotation.x=-Math.PI/2,this.overlays.add(a),t==="alpha"||t==="beta"){const s=new Qt(new na(14,9),new qr({color:ei.body,transparent:!0,opacity:.055,side:yn,depthWrite:!1})),o=new Tt().makeBasis(Cn(e.bx),Cn(e.bz),Cn(Ea(e.by,-1)));s.quaternion.setFromRotationMatrix(o),this.overlays.add(s)}}const r=Pg(e,t);r&&this.arc(this.overlays,r.start,r.axis,r.angle,r.radius,t)}render(){this.controls.update(),this.renderer.render(this.scene,this.camera),this.labels.render(this.scene,this.camera)}dispose(){this.resizeObserver.disconnect(),this.controls.removeEventListener("change",this.invalidate),this.controls.dispose(),this.renderer.dispose(),Ss(this.overlays),Ss(this.aircraft),Ss(this.earth)}}const xe=n=>document.querySelector(n),Rn=n=>{const e={plane:'<path d="m3 12 7-2 2-7 2 7 7 2-7 2-2 7-2-7z"/>',reset:'<path d="M3 10a9 9 0 1 1 2 8M3 4v6h6"/>',play:'<path d="m8 5 11 7-11 7z"/>',pause:'<path d="M8 5v14M16 5v14"/>',cube:'<path d="m12 3 9 5v8l-9 5-9-5V8zM3 8l9 5 9-5M12 13v8M7.5 5.5l9 5"/>',formula:'<path d="M18 4H7l6 8-6 8h11"/>',info:'<circle cx="12" cy="12" r="9"/><path d="M12 11v6M12 7v1"/>',arrow:'<path d="M4 12h16m-6-6 6 6-6 6"/>',close:'<path d="m6 6 12 12M6 18 18 6"/>',check:'<path d="m5 12 4 4 10-10"/>',download:'<path d="M12 3v12m-5-5 5 5 5-5M4 17v4h16v-4"/>'};return`<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${e[n]||e.info}</svg>`},zd=n=>jp.renderToString(n,{throwOnError:!1,output:"html",strict:!1});let ot={...tc},tn="alpha",hn="free",sn=0,ia=!1,Bt=null,Va={...ot},Ta=0,li=null,br=0,uo=!0,Sa=0,Ws=!1,f0=null;function Qi(){!br&&!document.hidden&&(uo||ia)&&(br=requestAnimationFrame(Fg))}function nc(){Sa++,Ws=!1,xe("#apply-formula").disabled=!1,xe("#time-slider").disabled=!1,xe(".formula-panel").removeAttribute("aria-busy")}let Vn=co[0].note,Ti=[];const kr=n=>Number.isFinite(n)?n.toFixed(1):"—",Ig=n=>n.replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]);xe("#app").innerHTML=`
<a class="skip-link" href="#workspace-title">跳到实验参数</a>
<header class="app-header">
  <a class="brand" href="./" aria-label="AeroLab 首页">${Rn("plane")}<strong>Aero<span>Lab</span></strong><span class="brand-caption">飞行姿态实验室</span></a>
  
  <div class="header-actions"><button id="conventions-button" type="button" commandfor="conventions-dialog" command="show-modal" aria-label="数学约定">${Rn("info")}<span>数学约定</span></button><button id="export-button" aria-label="导出状态" title="导出当前参数">${Rn("download")}<span>导出状态</span></button></div>
</header>
<main class="app-layout">
 <aside id="angle-sidebar" class="sidebar" aria-label="角度知识导航"><div class="drawer-heading">角度导航</div>
  <div class="sidebar-heading">探索角度 <span>8</span></div>
  ${["气动角","姿态角","航迹角","转弯角"].map(n=>`<div class="nav-group"><div class="group-title">${n}</div>${Na.filter(e=>Pn[e].group===n).map(e=>`<button class="concept-nav ${e===tn?"active":""}" data-angle="${e}" aria-pressed="${e===tn}"><span class="nav-symbol">${Pn[e].symbol}</span><span>${Pn[e].name}<small>${Pn[e].english}</small></span><span class="nav-value" data-value="${e}"></span></button>`).join("")}</div>`).join("")}
  
 </aside>
 <section class="workspace" aria-label="交互实验台">
  <div class="workspace-heading"><div><h1 id="workspace-title" tabindex="-1">飞行姿态</h1><span class="assumption">无风</span></div><button id="reset-button" aria-label="重置实验" class="subtle-button">${Rn("reset")}重置实验</button></div>
<div class="mode-tabs" role="group" aria-label="探索模式"><button aria-pressed="true" data-mode="free" class="active">${Rn("cube")}自由探索</button><button aria-pressed="false" data-mode="relation">角度关系</button><button aria-pressed="false" data-mode="formula">${Rn("formula")}公式驱动</button><span id="mode-description" hidden></span></div>
  <div class="scene-shell">
   <div class="scene-top"><span><span class="status-dot"></span>3D 空间视图</span><div class="view-options" aria-label="预设观察视角">${[["iso","立体"],["front","前视"],["side","侧视"],["top","俯视"],["rear","后视"]].map(([n,e])=>`<button data-view="${n}" class="${n==="iso"?"active":""}">${e}</button>`).join("")}</div></div>
   <div id="viewport"></div>
   <div class="scene-readout"><span id="selected-readout"></span></div>
   <div class="scene-footer"><div class="legend"><span><i class="earth"></i>地面 E</span><span><i class="body"></i>机体 A</span><span><i class="wind"></i>风轴 W / 空速</span></div><span class="orbit-hint">拖动旋转视角 · 滚轮缩放</span></div>
  </div>

  <section class="control-deck"><div class="control-title"><span>状态参数</span><span id="constraint-label">γ、σ、μ 由向量计算</span><label class="speed-input">V <input id="speed" aria-label="空速 米每秒" aria-describedby="state-notice" type="number" min="10" max="200" value="60" step="1"/> m/s</label></div><div class="sliders">${Na.map(n=>{const e=["gamma","sigma","mu"].includes(n),t=Dg[n]??(n==="gamma"?[-90,90]:[-180,180]);return`<div class="parameter" data-parameter="${n}"><label for="slider-${n}"><span>${Pn[n].symbol} <span class="parameter-name">${Pn[n].name}</span></span><output for="slider-${n}" data-value="${n}"></output></label><input id="slider-${n}" type="range" min="${t[0]}" max="${t[1]}" step="0.5" value="0" ${e?"disabled":""}/></div>`}).join("")}</div></section>
  <div class="scenario-bar"><span>场景</span>${co.map(n=>`<button data-preset="${n.id}" class="${n.id==="climb"?"active":""}">${n.name}</button>`).join("")}</div>
  <p class="state-notice" id="state-notice" role="status"></p>
 </section>
 <aside id="inspector-panel" class="inspector" aria-label="投影与角度讲解"><div class="drawer-heading">投影与讲解</div>  <div class="projection-row"><section class="projection"><div class="panel-label" id="side-projection-title">侧视投影 <span>俯仰与航迹</span></div><div id="side-projection"></div></section><section class="projection"><div class="panel-label" id="top-projection-title">俯视投影 <span>机头与运动方向</span></div><div id="top-projection"></div></section></div>
  <section id="concept-detail"></section>
  <section class="display-settings"><div class="panel-label">参考系与辅助显示</div><div class="checkbox-grid">${[["earth","地面坐标系"],["body","机体坐标系"],["wind","风轴坐标系"],["planes","辅助平面"]].map(([n,e])=>`<label><input type="checkbox" data-display="${n}" />${e}</label>`).join("")}<label class="full"><input type="checkbox" id="flow-toggle"/>显示迎面来流 −V</label></div></section>
  <section class="formula-panel" hidden><div class="panel-label">公式实验 <span>输入 · 计算 · 演示</span></div><label for="formula-input" class="sr-only">输入控制公式</label><textarea id="formula-input" aria-describedby="formula-help formula-status" rows="2" spellcheck="false">theta = 10*sin(2*pi*t/5)</textarea><div id="formula-help" class="formula-help">角度输出为度；sin / cos 输入为弧度。t 单位为秒。</div><div class="formula-actions"><select id="formula-template" aria-label="公式模板"><option value="pitch">俯仰振荡</option><option value="roll">滚转振荡</option><option value="relation">纵向角度关系</option></select><button id="apply-formula" class="primary">应用公式 ${Rn("arrow")}</button></div><p id="formula-status" role="status" aria-live="polite"></p><div id="formula-render"></div>
  <div class="transport"><button id="play-button" aria-label="播放公式演示">${Rn("play")}</button><button id="rewind-button" aria-label="时间归零">${Rn("reset")}</button><input id="time-slider" aria-label="演示时间" type="range" min="0" max="10" step="0.01" value="0"/><output id="time-output">0.00 s</output></div><div id="time-chart"><p>应用时间函数后，查看同步角度曲线。</p></div><details class="geometry-note"><summary>演示说明</summary><p>公式指定姿态变化，飞行轨迹和受力需另外建模。</p></details></section>
 </aside>
</main>

<dialog id="conventions-dialog" closedby="any" aria-labelledby="conventions-title"><div class="dialog-heading"><h2 id="conventions-title">数学约定与使用边界</h2><button id="close-dialog" type="button" commandfor="conventions-dialog" command="close" autofocus aria-label="关闭">${Rn("close")}</button></div><div class="convention-content"><p>这是通用飞行力学学习工具。当前版本展示瞬时几何与指定的运动函数，不求解完整飞行动力学。</p><h3>坐标系</h3><ul><li>地面 E：x 指北、y 指东、z 向下，采用右手系。</li><li>机体 A：x 向机头、y 向右翼、z 向机腹，原点位于参考重心。</li><li>风轴 W：x 沿飞机相对空气的速度 V；z 位于机体对称面内；y 补成右手系。迎面来流为 −V。</li></ul><h3>姿态与角度</h3><p>机体到地面的变换为 Rz(ψ) Ry(θ) Rx(φ)，对应内禀 3–2–1 欧拉角。机头上仰 θ 为正、右翼向下 φ 为正、机头由北转东 ψ 为正。θ 限制在 ±80°，避开欧拉角奇异点。</p><p>σ 表示地速航迹方位（course），ψ 表示机头航向（heading）。μ 为风轴相对航迹水平参考的倾斜角。垂直航迹时 σ、μ 无定义，显示为 —。</p><h3>关系的适用条件</h3><p>无风时空速等于地速。θ = α + γ 在 φ = β = 0 且选定角度分支内使用；σ = ψ + β 在 α = θ = φ = 0 时按 360° 取模。任意三维状态采用向量变换计算，二维投影角不一定等于空间角。</p><p>θ(t) 是指定的姿态运动，不自动产生速度或航迹。俯仰角速度 q 仅在纯纵向运动中等于 dθ/dt。本版未实现短周期、长周期和受力仿真。</p><h3>公式输入</h3><p>左侧可使用 alpha、beta、theta、phi、psi、V，支持希腊字母。右侧可使用当前状态的八种角度、V、t、pi，以及 sin、cos、tan、abs、sqrt。角度变量与结果均以度表示，三角函数参数为弧度。公式应用时冻结参考输入，不作隐式方程求解。</p><h3>参考资料</h3><p><a href="https://jsbsim-team.github.io/jsbsim-reference-manual/user/concepts/frames-of-reference/" target="_blank" rel="noreferrer">JSBSim 坐标系参考</a></p></div><button id="understood-button" type="button" commandfor="conventions-dialog" command="close" class="primary">理解并继续</button></dialog>`;const Ug=xe(".mode-tabs");xe(".app-header").insertBefore(Ug,xe(".header-actions"));xe(".workspace-heading h1").classList.add("sr-only");xe(".workspace").prepend(xe(".workspace-heading h1"));xe(".view-options").append(xe("#reset-button"));xe(".workspace-heading").remove();const Ng=xe("#inspector-panel"),qi=document.createElement("section");qi.className="inspector-tools";qi.innerHTML='<div class="inspector-tabs" role="tablist" focusgroup="tablist nomemory" aria-label="辅助工具"><button id="concept-tab" type="button" data-inspector-tab="concept" role="tab" aria-selected="true" focusgroupstart>讲解</button><button id="formula-tab" type="button" data-inspector-tab="formula" role="tab" aria-selected="false">公式</button></div>';Ng.append(qi);qi.append(xe("#concept-detail"),xe(".formula-panel"),xe(".display-settings"));xe("#concept-detail").dataset.inspectorPage="concept";xe(".formula-panel").dataset.inspectorPage="formula";for(const n of["concept","formula"]){const e=xe(`[data-inspector-page="${n}"]`);e.setAttribute("role","tabpanel"),e.setAttribute("aria-labelledby",`${n}-tab`)}function ic(n){qi.querySelectorAll("[data-inspector-page]").forEach(e=>{e.hidden=e.dataset.inspectorPage!==n}),qi.querySelectorAll("[data-inspector-tab]").forEach(e=>{const t=e.dataset.inspectorTab===n;e.classList.toggle("active",t),e.setAttribute("aria-selected",String(t)),e.toggleAttribute("focusgroupstart",t)}),qi.scrollTop=0}qi.querySelectorAll("[data-inspector-tab]").forEach(n=>n.onclick=()=>ic(n.dataset.inspectorTab));ic("concept");"commandForElement"in HTMLButtonElement.prototype||wl(()=>import("./invokers-polyfill-C-8bvXHo.js"),[]);"focusGroup"in HTMLElement.prototype||wl(async()=>{const{polyfill:n}=await import("./build-CAgBT-nE.js");return{polyfill:n}},[]).then(({polyfill:n})=>n(document.body));document.body.classList.add("nav-open","inspector-open","fixed-panels");function rc(n){tn=n,document.querySelectorAll("[data-angle]").forEach(e=>{const t=e.dataset.angle===n;e.classList.toggle("active",t),e.setAttribute("aria-pressed",String(t))}),Bd(),Sn()}function Bd(){const n=Pn[tn];xe("#concept-detail").innerHTML=`<div class="detail-category">${n.group}<span>概念 ${String(Na.indexOf(tn)+1).padStart(2,"0")} / 08</span></div><div class="concept-title"><span class="hero-symbol">${n.symbol}</span><div><h2>${n.name}</h2><p>${n.english}</p></div><button id="focus-angle" title="切换适合的观察视角" aria-label="聚焦当前角度">${Rn("cube")}</button></div><p class="definition">${n.definition}</p><div class="direction-pair"><span>角度从哪里量起</span><p>${n.directions}</p></div><div class="concept-formula">${zd(n.formula)}</div><div class="detail-note"><h3>正方向</h3><p>${n.positive}</p></div><details><summary>适用条件</summary><p>${n.condition}</p></details><details><summary>常见误区</summary><p>${n.misconception}</p></details>`,xe("#focus-angle").onclick=()=>ac(n.view)}function ac(n){li?.view(n),document.querySelectorAll("[data-view]").forEach(e=>e.classList.toggle("active",e.dataset.view===n))}function Wn(){ia=!1,xe("#play-button").innerHTML=Rn("play"),xe("#play-button").setAttribute("aria-label","播放公式演示")}function Zi(n){Wn(),n!=="formula"&&nc(),hn==="formula"&&n!=="formula"&&(Bt=null,Ti=[],xe("#formula-render").replaceChildren(),ra(),Jn("已退出公式控制，重新应用可恢复演示。")),hn=n,hn==="formula"&&ic("formula"),document.querySelectorAll("[data-mode]").forEach(e=>{const t=e.dataset.mode===hn;e.classList.toggle("active",t),e.setAttribute("aria-pressed",String(t))}),hn==="relation"?(ot.phi=0,ot.beta=0,Math.abs(ot.theta-ot.alpha)>90&&(ot.theta=ot.alpha),Vn="纵向关系模式：锁定 φ = β = 0，调整 α 或 γ，θ 随之计算。"):hn==="formula"?Vn="公式按冻结的参考输入计算；动画只指定姿态，不求解受力。":Vn="自由探索：设置姿态与空速方向，航迹角由坐标变换计算。",xe("#mode-description").textContent=hn==="relation"?"θ = α + γ · 纵向无风":hn==="formula"?"输入数学表达式，驱动状态":"姿态与空速独立设置",Sn()}function ch(n,e=!1){const i=e?81:108,r=112,a=f=>92+r*f,s=f=>i-r*f,o=(f,m,v)=>`<line x1="92" y1="${i}" x2="${a(f[0])}" y2="${s(f[1])}" stroke="${m}" stroke-width="2" marker-end="url(#${e?"top":"side"}-${v==="V"?"v":"b"})"/><text x="${a(f[0])+7}" y="${s(f[1])-5}" fill="${m}">${v}</text>`,l=e?[n.bx[0],-n.bx[1]]:[Math.cos(an(n.theta)),Math.sin(an(n.theta))],c=e?[n.wx[0],-n.wx[1]]:[Ml(n.wx,[Math.cos(an(n.psi)),Math.sin(an(n.psi)),0]),-n.wx[2]],u=(f,m,v)=>{if(!Number.isFinite(f))return"";const b=e?-an(f):an(f);return`<path d="M ${92+m} ${i} A ${m} ${m} 0 ${Math.abs(b)>Math.PI?1:0} ${b>0?0:1} ${92+m*Math.cos(b)} ${i-m*Math.sin(b)}" fill="none" stroke="${v}" stroke-width="1.3"/>`},d=e?`ψ ${kr(n.psi)}° / σ ${kr(n.sigma)}°`:`θ ${kr(n.theta)}° / γ ${kr(n.gamma)}°`;return`<svg viewBox="0 0 330 157" role="img" aria-label="${e?"俯视":"侧视"}投影，${d}"><defs>${["v","b"].map((f,m)=>`<marker id="${e?"top":"side"}-${f}" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><path d="M0 0 6 3 0 6" fill="${m?"#64bdcc":"#e0b56d"}"/></marker>`).join("")}</defs><path d="M20 ${i}H288 M92 15V140" stroke="#393c3e" stroke-dasharray="3 4"/><text x="270" y="${i+17}" fill="#93999d">${e?"北 x_E":"水平"}</text>${o(l,"#64bdcc","x_A")}${o(c,"#e0b56d","V")}${u(e?n.psi:n.theta,45,"#64bdcc")}${e||n.longitudinal?u(e?n.sigma:n.gamma,64,"#e0b56d"):""}<circle cx="92" cy="${i}" r="2.7" fill="#dadcdd"/><text x="18" y="153" fill="#a2a7ab">${d}</text><text x="329" y="153" text-anchor="end" fill="#a2a7ab">${e?n.lateral?"σ = ψ + β":"地面水平投影":n.longitudinal?"θ = α + γ":"投影角 ≠ 空间角"}</text></svg>`}function Sn(){const n=Xr(ot);document.querySelectorAll("[data-value]").forEach(i=>{const r=i.dataset.value;i.textContent=Number.isFinite(n[r])?kr(n[r])+"°":"—"});for(const i of Na){const r=xe(`#slider-${i}`);r.value=String(Number.isFinite(n[i])?n[i]:0),r.disabled=["sigma","mu"].includes(i)||i==="gamma"&&hn!=="relation"||hn==="relation"&&["beta","phi"].includes(i)||hn==="formula",r.style.setProperty("--fill",`${(Number(r.value)-Number(r.min))/(Number(r.max)-Number(r.min))*100}%`)}xe("#speed").value=String(Math.round(ot.speed*100)/100),xe("#speed").removeAttribute("aria-invalid"),xe("#selected-readout").innerHTML=`<span>${Pn[tn].symbol}</span> ${kr(n[tn])}<small>°</small>`,xe("#constraint-label").textContent=hn==="relation"?"锁定 φ、β · 调整 α、γ":"γ、σ、μ 由向量计算";const e=tn==="phi"||tn==="mu",t=tn==="alpha"&&!n.longitudinal;xe("#side-projection-title").textContent=e||t?Fa[tn].plane:"侧视投影",xe("#top-projection-title").textContent=tn==="beta"&&!n.lateral?"侧滑角截面":"俯视投影",xe("#side-projection").innerHTML=e||t?lh(n,tn):ch(n),xe("#top-projection").innerHTML=tn==="beta"&&!n.lateral?lh(n,tn):ch(n,!0),xe("#state-notice").textContent=Vn,xe("#state-notice").hidden=!/超出|需为/.test(Vn),uo&&li?.update(n,tn),Qi()}function Jn(n,e=!1){xe("#formula-status").textContent=n,xe("#formula-status").classList.toggle("error",e),xe("#formula-input").setAttribute("aria-invalid",String(e))}function ra(){if(!Bt||!Ti.length){xe("#time-chart").innerHTML="<p>应用时间函数后，查看同步角度曲线。</p>";return}const n=Ti.map(l=>l.value);let e=Math.min(...n),t=Math.max(...n);t-e<1&&(e-=5,t+=5);const i=(t-e)*.15;e-=i,t+=i;const r=l=>30+l*24,a=l=>87-(l-e)/(t-e)*64,s=Ti.map((l,c)=>`${c?"L":"M"}${r(l.t).toFixed(2)},${a(l.value).toFixed(2)}`).join(" "),o=Bt.target==="speed"?"V":Pn[Bt.target].symbol;xe("#time-chart").innerHTML=`<svg viewBox="0 0 288 112" role="img" aria-label="${o} 随时间变化曲线"><path d="M30 23H270M30 55H270M30 87H270" stroke="#303235"/><text x="1" y="26">${t.toFixed(0)}</text><text x="1" y="90">${e.toFixed(0)}</text><path d="${s}" fill="none" stroke="#64bdcc" stroke-width="1.6"/><path d="M${r(sn)} 17V89" stroke="#e0b56d" stroke-dasharray="3 3"/><text x="30" y="108">0</text><text x="140" y="108">5 s</text><text x="250" y="108">10 s</text><text x="30" y="12">${o} / ${Bt.target==="speed"?"m/s":"°"}</text></svg>`}function aa(){xe("#time-output").textContent=sn.toFixed(2)+" s",xe("#time-slider").value=String(sn);const n=xe("#time-chart svg");n&&n.querySelectorAll("path")[2]?.setAttribute("d",`M${30+sn*24} 17V89`)}async function kd(){Wn(),Zi("formula");const n=++Sa,e=xe("#formula-input").value,t={...ot};Bt=null,Ti=[],ra(),Ws=!0,Jn("正在加载公式计算器…"),xe("#apply-formula").disabled=!0,xe("#time-slider").disabled=!0,xe(".formula-panel").setAttribute("aria-busy","true");try{f0??=wl(()=>import("./formula-DLLW0A0x.js"),[]).catch(o=>{throw f0=null,o});const{compileFormula:i}=await f0;if(n!==Sa)return;const r=i(e),a=r.evaluate(t,0),s=[];for(let o=0;o<=200;o++){const l=o/20,c=r.evaluate(t,l);s.push({t:l,value:c[r.target]})}Bt=r,Va=t,Ti=s,sn=0,ot=a,Zi("formula"),xe("#formula-render").innerHTML=zd(r.tex),Jn(r.usesTime?"公式已应用。点击播放，或拖动时间轴。":"关系已计算。参考输入已冻结，修改公式后可重新应用。"),ra(),aa(),Sn()}catch(i){n===Sa&&Jn(i.message,!0)}finally{n===Sa&&(Ws=!1,xe("#apply-formula").disabled=!1,xe("#time-slider").disabled=!1,xe(".formula-panel").removeAttribute("aria-busy"))}}document.querySelectorAll("[data-angle]").forEach(n=>n.onclick=()=>rc(n.dataset.angle));document.querySelectorAll("[data-mode]").forEach(n=>n.onclick=()=>{n.dataset.mode==="formula"&&!Bt?(Zi("formula"),xe("#formula-input").focus()):Zi(n.dataset.mode)});document.querySelectorAll("[data-view]").forEach(n=>n.onclick=()=>ac(n.dataset.view));for(const n of Na)xe(`#slider-${n}`).oninput=e=>{Wn();const t=Number(e.target.value),i={...ot};if(hn==="relation"){const r=Xr(ot);if(n==="gamma"?ot.theta=ot.alpha+t:n==="alpha"?(ot.alpha=t,ot.theta=t+r.gamma):n==="theta"?ot.theta=t:n==="psi"&&(ot.psi=t),Math.abs(ot.theta)>80||Math.abs(ot.theta-ot.alpha)>90){ot=i,Vn="该组合超出 θ ±80° 或纵向关系的角度分支，请减小 α 或 γ。",Sn();return}}else n in ot&&(ot={...ot,[n]:t});Vn=hn==="relation"?"纵向关系：θ = α + γ（φ = β = 0，无风）。":"当前状态由姿态与空速方向计算。二维投影与三维向量同步。",document.querySelectorAll("[data-preset]").forEach(r=>r.classList.remove("active")),Sn()};xe("#speed").onchange=n=>{const e=n.target,t=e.valueAsNumber;if(!Number.isFinite(t)||t<10||t>200){Vn="空速需为 10–200 m/s 的有限数值。",e.setAttribute("aria-invalid","true"),xe("#state-notice").textContent=Vn,xe("#state-notice").hidden=!1;return}else e.removeAttribute("aria-invalid"),Vn="",Wn(),hn==="formula"&&Zi("free"),ot.speed=t;Sn()};document.querySelectorAll("[data-preset]").forEach(n=>n.onclick=()=>{const e=co.find(t=>t.id===n.dataset.preset);ot={...e.state},Zi("free"),Vn=e.note,document.querySelectorAll("[data-preset]").forEach(t=>t.classList.toggle("active",t===n)),Sn()});document.querySelectorAll("[data-display]").forEach(n=>n.onchange=()=>{li&&(li.visibility[n.dataset.display]=n.checked),Sn()});xe("#flow-toggle").onchange=n=>{li&&(li.showFlow=n.target.checked),Sn()};xe("#reset-button").onclick=()=>{ot={...tc},sn=0,Bt=null,Ti=[],Zi("free"),rc("alpha"),ac("iso"),Vn=co[0].note,xe("#formula-input").value="theta = 10*sin(2*pi*t/5)",xe("#formula-template").value="pitch",document.querySelectorAll("[data-preset]").forEach(n=>n.classList.toggle("active",n.dataset.preset==="climb")),Jn(""),xe("#formula-render").replaceChildren(),ra(),aa(),Sn()};xe("#apply-formula").onclick=kd;xe("#formula-template").onchange=n=>{Wn(),nc(),Bt=null,Ti=[],xe("#formula-render").replaceChildren(),ra();const e=n.target.value;e==="relation"?(ot={...tc},Zi("relation"),xe("#formula-input").value="theta = alpha + gamma"):xe("#formula-input").value=e==="pitch"?"theta = 10*sin(2*pi*t/5)":"phi = 30*sin(2*pi*t/8)",Jn("模板已填入，点击“应用公式”开始。")};xe("#formula-input").oninput=()=>{Wn(),nc(),Bt=null,Ti=[],xe("#formula-render").replaceChildren(),Jn("公式已修改，请重新应用。"),ra()};xe("#play-button").onclick=async()=>{if(!Ws&&!(!Bt&&(await kd(),!Bt))){if(ia){Wn();return}if(!Bt.usesTime){Jn("这是静态关系，已计算结果。加入变量 t 可播放时间函数。");return}sn>=10&&(sn=0),ia=!0,xe("#play-button").innerHTML=Rn("pause"),xe("#play-button").setAttribute("aria-label","暂停公式演示"),Ta=0,Qi()}};xe("#rewind-button").onclick=()=>{Wn(),sn=0,Bt&&(ot=Bt.evaluate(Va,0),Sn()),aa()};xe("#time-slider").oninput=n=>{if(Wn(),!Bt){Jn("请先应用公式。"),aa();return}sn=Number(n.target.value);try{ot=Bt.evaluate(Va,sn),Sn(),aa()}catch(e){Jn(e.message,!0)}};const ws=xe("#conventions-dialog");if(!("closedBy"in HTMLDialogElement.prototype)){let n=!1;const e=t=>{const i=ws.getBoundingClientRect();return t.clientX<i.left||t.clientX>i.right||t.clientY<i.top||t.clientY>i.bottom};ws.addEventListener("pointerdown",t=>{n=e(t)}),ws.addEventListener("pointerup",t=>{n&&e(t)&&ws.close()})}xe("#export-button").onclick=()=>{const n={version:1,convention:"NED; body-to-earth Rz(psi) Ry(theta) Rx(phi); no wind; degrees; m/s",state:ot,derived:{gamma:Xr(ot).gamma,sigma:Xr(ot).sigma,mu:Xr(ot).mu},formula:Bt?.expression??null,formulaBase:Bt?Va:null,time:sn},e=URL.createObjectURL(new Blob([JSON.stringify(n,null,2)],{type:"application/json"})),t=document.createElement("a");t.href=e,t.download="aerolab-state.json",t.click(),setTimeout(()=>URL.revokeObjectURL(e),1e3)};try{li=new Lg(xe("#viewport"),rc,Qi)}catch(n){xe("#viewport").innerHTML=`<div class="webgl-error"><h2>3D 视图暂不可用</h2><p>浏览器未能启用 WebGL。请开启硬件加速后重试。二维投影和公式实验仍可使用。</p><button onclick="location.reload()">重新加载</button><small>${Ig(n.message)}</small></div>`}Bd();Sn();function Fg(n){if(br=0,document.hidden)return;const e=Ta?Math.min((n-Ta)/1e3,.05):0;if(Ta=n,ia&&Bt){sn=Math.min(10,sn+e);try{ot=Bt.evaluate(Va,sn),Sn(),aa(),sn>=10&&Wn()}catch(t){Wn(),Jn(t.message,!0)}}uo&&li?.render(),ia&&Qi()}const Sl=xe(".scene-shell");function Hd(n){uo=n,n&&(li?.update(Xr(ot),tn),Qi())}Sl.addEventListener("contentvisibilityautostatechange",n=>{Hd(!n.skipped)});"oncontentvisibilityautostatechange"in Sl||new IntersectionObserver(([n])=>{Hd(n.isIntersecting)},{rootMargin:"200px"}).observe(Sl);document.addEventListener("visibilitychange",()=>{document.hidden?(Wn(),cancelAnimationFrame(br),br=0,Ta=0):Qi()});Qi();window.addEventListener("pagehide",n=>{cancelAnimationFrame(br),br=0,n.persisted||li?.dispose()});window.addEventListener("pageshow",Qi);export{Xr as d,Dg as l};
