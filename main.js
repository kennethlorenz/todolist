(()=>{"use strict";var t={d:(e,n)=>{for(var a in n)t.o(n,a)&&!t.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:n[a]})},o:(t,e)=>Object.prototype.hasOwnProperty.call(t,e),r:t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}},e={};t.r(e),t.d(e,{I:()=>Ft,A:()=>Ht});class n{constructor(t,e){this.title=t,this.todos=[]}}function a(t){const e=new n(t);localStorage.setItem(t,JSON.stringify(e))}function o(){const t=Object.keys(localStorage),e=[];return t.sort().map((t=>{const n=JSON.parse(localStorage.getItem(t));e.push(n)})),e}function r(t){return null!=JSON.parse(localStorage.getItem(t))}function i(t){let e;return r(t)||a(t),e=JSON.parse(localStorage.getItem(t)),e.todos}function c(t,e,n){const a=JSON.parse(localStorage.getItem(t)),o=a.todos[e];o.checked=n,console.log(o.checked),localStorage.setItem(t,JSON.stringify({title:a.title,todos:a.todos}))}const d={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};function s(t){return(e={})=>{const n=e.width?String(e.width):t.defaultWidth;return t.formats[n]||t.formats[t.defaultWidth]}}const u={date:s({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:s({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:s({formats:{full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})},l={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"};function m(t){return(e,n)=>{let a;if("formatting"===(n?.context?String(n.context):"standalone")&&t.formattingValues){const e=t.defaultFormattingWidth||t.defaultWidth,o=n?.width?String(n.width):e;a=t.formattingValues[o]||t.formattingValues[e]}else{const e=t.defaultWidth,o=n?.width?String(n.width):t.defaultWidth;a=t.values[o]||t.values[e]}return a[t.argumentCallback?t.argumentCallback(e):e]}}function h(t){return(e,n={})=>{const a=n.width,o=a&&t.matchPatterns[a]||t.matchPatterns[t.defaultMatchWidth],r=e.match(o);if(!r)return null;const i=r[0],c=a&&t.parsePatterns[a]||t.parsePatterns[t.defaultParseWidth],d=Array.isArray(c)?function(t,e){for(let e=0;e<t.length;e++)if(t[e].test(i))return e}(c):function(t,e){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e)&&t[e].test(i))return e}(c);let s;return s=t.valueCallback?t.valueCallback(d):d,s=n.valueCallback?n.valueCallback(s):s,{value:s,rest:e.slice(i.length)}}}var f;const g={code:"en-US",formatDistance:(t,e,n)=>{let a;const o=d[t];return a="string"==typeof o?o:1===e?o.one:o.other.replace("{{count}}",e.toString()),n?.addSuffix?n.comparison&&n.comparison>0?"in "+a:a+" ago":a},formatLong:u,formatRelative:(t,e,n,a)=>l[t],localize:{ordinalNumber:(t,e)=>{const n=Number(t),a=n%100;if(a>20||a<10)switch(a%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},era:m({values:{narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},defaultWidth:"wide"}),quarter:m({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},defaultWidth:"wide",argumentCallback:t=>t-1}),month:m({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},defaultWidth:"wide"}),day:m({values:{narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},defaultWidth:"wide"}),dayPeriod:m({values:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},defaultFormattingWidth:"wide"})},match:{ordinalNumber:(f={matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:t=>parseInt(t,10)},(t,e={})=>{const n=t.match(f.matchPattern);if(!n)return null;const a=n[0],o=t.match(f.parsePattern);if(!o)return null;let r=f.valueCallback?f.valueCallback(o[0]):o[0];return r=e.valueCallback?e.valueCallback(r):r,{value:r,rest:t.slice(a.length)}}),era:h({matchPatterns:{narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:h({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:t=>t+1}),month:h({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:h({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:h({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})},options:{weekStartsOn:0,firstWeekContainsDate:1}};let p={};function y(){return p}Math.pow(10,8);const w=6048e5,b=864e5;function v(t){const e=Object.prototype.toString.call(t);return t instanceof Date||"object"==typeof t&&"[object Date]"===e?new t.constructor(+t):"number"==typeof t||"[object Number]"===e||"string"==typeof t||"[object String]"===e?new Date(t):new Date(NaN)}function C(t){const e=v(t);return e.setHours(0,0,0,0),e}function k(t){const e=v(t),n=new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()));return n.setUTCFullYear(e.getFullYear()),+t-+n}function S(t,e){return t instanceof Date?new t.constructor(e):new Date(e)}function E(t){const e=v(t);return function(t,e){const n=C(t),a=C(e),o=+n-k(n),r=+a-k(a);return Math.round((o-r)/b)}(e,function(t){const e=v(t),n=S(t,0);return n.setFullYear(e.getFullYear(),0,1),n.setHours(0,0,0,0),n}(e))+1}function M(t,e){const n=y(),a=e?.weekStartsOn??e?.locale?.options?.weekStartsOn??n.weekStartsOn??n.locale?.options?.weekStartsOn??0,o=v(t),r=o.getDay(),i=(r<a?7:0)+r-a;return o.setDate(o.getDate()-i),o.setHours(0,0,0,0),o}function x(t){return M(t,{weekStartsOn:1})}function L(t){const e=v(t),n=e.getFullYear(),a=S(t,0);a.setFullYear(n+1,0,4),a.setHours(0,0,0,0);const o=x(a),r=S(t,0);r.setFullYear(n,0,4),r.setHours(0,0,0,0);const i=x(r);return e.getTime()>=o.getTime()?n+1:e.getTime()>=i.getTime()?n:n-1}function P(t){const e=v(t),n=+x(e)-+function(t){const e=L(t),n=S(t,0);return n.setFullYear(e,0,4),n.setHours(0,0,0,0),x(n)}(e);return Math.round(n/w)+1}function D(t,e){const n=v(t),a=n.getFullYear(),o=y(),r=e?.firstWeekContainsDate??e?.locale?.options?.firstWeekContainsDate??o.firstWeekContainsDate??o.locale?.options?.firstWeekContainsDate??1,i=S(t,0);i.setFullYear(a+1,0,r),i.setHours(0,0,0,0);const c=M(i,e),d=S(t,0);d.setFullYear(a,0,r),d.setHours(0,0,0,0);const s=M(d,e);return n.getTime()>=c.getTime()?a+1:n.getTime()>=s.getTime()?a:a-1}function q(t,e){const n=v(t),a=+M(n,e)-+function(t,e){const n=y(),a=e?.firstWeekContainsDate??e?.locale?.options?.firstWeekContainsDate??n.firstWeekContainsDate??n.locale?.options?.firstWeekContainsDate??1,o=D(t,e),r=S(t,0);return r.setFullYear(o,0,a),r.setHours(0,0,0,0),M(r,e)}(n,e);return Math.round(a/w)+1}function T(t,e){return(t<0?"-":"")+Math.abs(t).toString().padStart(e,"0")}const O={y(t,e){const n=t.getFullYear(),a=n>0?n:1-n;return T("yy"===e?a%100:a,e.length)},M(t,e){const n=t.getMonth();return"M"===e?String(n+1):T(n+1,2)},d:(t,e)=>T(t.getDate(),e.length),a(t,e){const n=t.getHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return n.toUpperCase();case"aaa":return n;case"aaaaa":return n[0];default:return"am"===n?"a.m.":"p.m."}},h:(t,e)=>T(t.getHours()%12||12,e.length),H:(t,e)=>T(t.getHours(),e.length),m:(t,e)=>T(t.getMinutes(),e.length),s:(t,e)=>T(t.getSeconds(),e.length),S(t,e){const n=e.length,a=t.getMilliseconds();return T(Math.trunc(a*Math.pow(10,n-3)),e.length)}},W={G:function(t,e,n){const a=t.getFullYear()>0?1:0;switch(e){case"G":case"GG":case"GGG":return n.era(a,{width:"abbreviated"});case"GGGGG":return n.era(a,{width:"narrow"});default:return n.era(a,{width:"wide"})}},y:function(t,e,n){if("yo"===e){const e=t.getFullYear(),a=e>0?e:1-e;return n.ordinalNumber(a,{unit:"year"})}return O.y(t,e)},Y:function(t,e,n,a){const o=D(t,a),r=o>0?o:1-o;return"YY"===e?T(r%100,2):"Yo"===e?n.ordinalNumber(r,{unit:"year"}):T(r,e.length)},R:function(t,e){return T(L(t),e.length)},u:function(t,e){return T(t.getFullYear(),e.length)},Q:function(t,e,n){const a=Math.ceil((t.getMonth()+1)/3);switch(e){case"Q":return String(a);case"QQ":return T(a,2);case"Qo":return n.ordinalNumber(a,{unit:"quarter"});case"QQQ":return n.quarter(a,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(a,{width:"narrow",context:"formatting"});default:return n.quarter(a,{width:"wide",context:"formatting"})}},q:function(t,e,n){const a=Math.ceil((t.getMonth()+1)/3);switch(e){case"q":return String(a);case"qq":return T(a,2);case"qo":return n.ordinalNumber(a,{unit:"quarter"});case"qqq":return n.quarter(a,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(a,{width:"narrow",context:"standalone"});default:return n.quarter(a,{width:"wide",context:"standalone"})}},M:function(t,e,n){const a=t.getMonth();switch(e){case"M":case"MM":return O.M(t,e);case"Mo":return n.ordinalNumber(a+1,{unit:"month"});case"MMM":return n.month(a,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(a,{width:"narrow",context:"formatting"});default:return n.month(a,{width:"wide",context:"formatting"})}},L:function(t,e,n){const a=t.getMonth();switch(e){case"L":return String(a+1);case"LL":return T(a+1,2);case"Lo":return n.ordinalNumber(a+1,{unit:"month"});case"LLL":return n.month(a,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(a,{width:"narrow",context:"standalone"});default:return n.month(a,{width:"wide",context:"standalone"})}},w:function(t,e,n,a){const o=q(t,a);return"wo"===e?n.ordinalNumber(o,{unit:"week"}):T(o,e.length)},I:function(t,e,n){const a=P(t);return"Io"===e?n.ordinalNumber(a,{unit:"week"}):T(a,e.length)},d:function(t,e,n){return"do"===e?n.ordinalNumber(t.getDate(),{unit:"date"}):O.d(t,e)},D:function(t,e,n){const a=E(t);return"Do"===e?n.ordinalNumber(a,{unit:"dayOfYear"}):T(a,e.length)},E:function(t,e,n){const a=t.getDay();switch(e){case"E":case"EE":case"EEE":return n.day(a,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(a,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(a,{width:"short",context:"formatting"});default:return n.day(a,{width:"wide",context:"formatting"})}},e:function(t,e,n,a){const o=t.getDay(),r=(o-a.weekStartsOn+8)%7||7;switch(e){case"e":return String(r);case"ee":return T(r,2);case"eo":return n.ordinalNumber(r,{unit:"day"});case"eee":return n.day(o,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(o,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(o,{width:"short",context:"formatting"});default:return n.day(o,{width:"wide",context:"formatting"})}},c:function(t,e,n,a){const o=t.getDay(),r=(o-a.weekStartsOn+8)%7||7;switch(e){case"c":return String(r);case"cc":return T(r,e.length);case"co":return n.ordinalNumber(r,{unit:"day"});case"ccc":return n.day(o,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(o,{width:"narrow",context:"standalone"});case"cccccc":return n.day(o,{width:"short",context:"standalone"});default:return n.day(o,{width:"wide",context:"standalone"})}},i:function(t,e,n){const a=t.getDay(),o=0===a?7:a;switch(e){case"i":return String(o);case"ii":return T(o,e.length);case"io":return n.ordinalNumber(o,{unit:"day"});case"iii":return n.day(a,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(a,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(a,{width:"short",context:"formatting"});default:return n.day(a,{width:"wide",context:"formatting"})}},a:function(t,e,n){const a=t.getHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"aaa":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return n.dayPeriod(a,{width:"narrow",context:"formatting"});default:return n.dayPeriod(a,{width:"wide",context:"formatting"})}},b:function(t,e,n){const a=t.getHours();let o;switch(o=12===a?"noon":0===a?"midnight":a/12>=1?"pm":"am",e){case"b":case"bb":return n.dayPeriod(o,{width:"abbreviated",context:"formatting"});case"bbb":return n.dayPeriod(o,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return n.dayPeriod(o,{width:"narrow",context:"formatting"});default:return n.dayPeriod(o,{width:"wide",context:"formatting"})}},B:function(t,e,n){const a=t.getHours();let o;switch(o=a>=17?"evening":a>=12?"afternoon":a>=4?"morning":"night",e){case"B":case"BB":case"BBB":return n.dayPeriod(o,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(o,{width:"narrow",context:"formatting"});default:return n.dayPeriod(o,{width:"wide",context:"formatting"})}},h:function(t,e,n){if("ho"===e){let e=t.getHours()%12;return 0===e&&(e=12),n.ordinalNumber(e,{unit:"hour"})}return O.h(t,e)},H:function(t,e,n){return"Ho"===e?n.ordinalNumber(t.getHours(),{unit:"hour"}):O.H(t,e)},K:function(t,e,n){const a=t.getHours()%12;return"Ko"===e?n.ordinalNumber(a,{unit:"hour"}):T(a,e.length)},k:function(t,e,n){let a=t.getHours();return 0===a&&(a=24),"ko"===e?n.ordinalNumber(a,{unit:"hour"}):T(a,e.length)},m:function(t,e,n){return"mo"===e?n.ordinalNumber(t.getMinutes(),{unit:"minute"}):O.m(t,e)},s:function(t,e,n){return"so"===e?n.ordinalNumber(t.getSeconds(),{unit:"second"}):O.s(t,e)},S:function(t,e){return O.S(t,e)},X:function(t,e,n){const a=t.getTimezoneOffset();if(0===a)return"Z";switch(e){case"X":return N(a);case"XXXX":case"XX":return Y(a);default:return Y(a,":")}},x:function(t,e,n){const a=t.getTimezoneOffset();switch(e){case"x":return N(a);case"xxxx":case"xx":return Y(a);default:return Y(a,":")}},O:function(t,e,n){const a=t.getTimezoneOffset();switch(e){case"O":case"OO":case"OOO":return"GMT"+j(a,":");default:return"GMT"+Y(a,":")}},z:function(t,e,n){const a=t.getTimezoneOffset();switch(e){case"z":case"zz":case"zzz":return"GMT"+j(a,":");default:return"GMT"+Y(a,":")}},t:function(t,e,n){return T(Math.trunc(t.getTime()/1e3),e.length)},T:function(t,e,n){return T(t.getTime(),e.length)}};function j(t,e=""){const n=t>0?"-":"+",a=Math.abs(t),o=Math.trunc(a/60),r=a%60;return 0===r?n+String(o):n+String(o)+e+T(r,2)}function N(t,e){return t%60==0?(t>0?"-":"+")+T(Math.abs(t)/60,2):Y(t,e)}function Y(t,e=""){const n=t>0?"-":"+",a=Math.abs(t);return n+T(Math.trunc(a/60),2)+e+T(a%60,2)}const H=(t,e)=>{switch(t){case"P":return e.date({width:"short"});case"PP":return e.date({width:"medium"});case"PPP":return e.date({width:"long"});default:return e.date({width:"full"})}},F=(t,e)=>{switch(t){case"p":return e.time({width:"short"});case"pp":return e.time({width:"medium"});case"ppp":return e.time({width:"long"});default:return e.time({width:"full"})}},I={p:F,P:(t,e)=>{const n=t.match(/(P+)(p+)?/)||[],a=n[1],o=n[2];if(!o)return H(t,e);let r;switch(a){case"P":r=e.dateTime({width:"short"});break;case"PP":r=e.dateTime({width:"medium"});break;case"PPP":r=e.dateTime({width:"long"});break;default:r=e.dateTime({width:"full"})}return r.replace("{{date}}",H(a,e)).replace("{{time}}",F(o,e))}},B=/^D+$/,A=/^Y+$/,z=["D","DD","YY","YYYY"];function J(t){if(!(e=t,e instanceof Date||"object"==typeof e&&"[object Date]"===Object.prototype.toString.call(e)||"number"==typeof t))return!1;var e;const n=v(t);return!isNaN(Number(n))}const Q=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,G=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,X=/^'([^]*?)'?$/,$=/''/g,R=/[a-zA-Z]/;function U(t){const e=t.match(X);return e?e[1].replace($,"'"):t}function V(t,e){t.style.display="unset",e.classList.add("modalZoom"),e.classList.remove("modalZoomOut")}function Z(t,e){e.classList.remove("modalZoom"),e.classList.add("modalZoomOut"),setTimeout((()=>{t.style.display="none"}),200)}function K(t,e){const n=document.createElement("div");n.classList.add("todoContainer"),n.classList.add(e.checked?"checked":null),n.dataset.id=t,n.dataset.index=e.index;const a=document.createElement("div");a.classList.add("todo-left");const o=document.createElement("input");o.type="checkbox",o.name="todo",o.checked=e.checked;const r=document.createElement("label");r.htmlFor="todo",r.textContent=e.title,a.appendChild(o),a.appendChild(r),n.appendChild(a);const i=document.createElement("div");i.classList.add("todo-right");const d=document.createElement("button");d.classList.add("todo-details"),d.classList.add(e.checked?"checked":null),d.textContent="DETAILS";const s=document.createElement("p");s.classList.add("todo-duedate"),s.textContent=function(t,e,n){const a=y(),o=n?.locale??a.locale??g,r=n?.firstWeekContainsDate??n?.locale?.options?.firstWeekContainsDate??a.firstWeekContainsDate??a.locale?.options?.firstWeekContainsDate??1,i=n?.weekStartsOn??n?.locale?.options?.weekStartsOn??a.weekStartsOn??a.locale?.options?.weekStartsOn??0,c=v(t);if(!J(c))throw new RangeError("Invalid time value");let d=e.match(G).map((t=>{const e=t[0];return"p"===e||"P"===e?(0,I[e])(t,o.formatLong):t})).join("").match(Q).map((t=>{if("''"===t)return{isToken:!1,value:"'"};const e=t[0];if("'"===e)return{isToken:!1,value:U(t)};if(W[e])return{isToken:!0,value:t};if(e.match(R))throw new RangeError("Format string contains an unescaped latin alphabet character `"+e+"`");return{isToken:!1,value:t}}));o.localize.preprocessor&&(d=o.localize.preprocessor(c,d));const s={firstWeekContainsDate:r,weekStartsOn:i,locale:o};return d.map((a=>{if(!a.isToken)return a.value;const r=a.value;return(!n?.useAdditionalWeekYearTokens&&function(t){return A.test(t)}(r)||!n?.useAdditionalDayOfYearTokens&&function(t){return B.test(t)}(r))&&function(t,e,n){const a=function(t,e,n){const a="Y"===t[0]?"years":"days of the month";return`Use \`${t.toLowerCase()}\` instead of \`${t}\` (in \`${e}\`) for formatting ${a} to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`}(t,e,n);if(console.warn(a),z.includes(t))throw new RangeError(a)}(r,e,String(t)),(0,W[r[0]])(c,r,o.localize,s)})).join("")}(e.dueDate,"MMM do");const u=document.createElement("i");u.classList.add("fa-regular"),u.classList.add("fa-pen-to-square");const l=document.createElement("i");var m;l.classList.add("fa-solid"),l.classList.add("fa-trash"),i.appendChild(d),i.appendChild(s),i.appendChild(u),i.appendChild(l),n.appendChild(i),n.style.borderLeft="1rem solid "+("High"==(m=e.priority)?"red":"Medium"==m?"yellow":"green");const h=n.dataset.id,f=n.dataset.index;return l.addEventListener("click",(()=>{!function(t,e){document.querySelector(`[data-id="${t}"][data-index="${e}"]`).remove()}(h,f),function(t,e){const n=JSON.parse(localStorage.getItem(t)),a=n.todos;a.splice(e,1),localStorage.setItem(t,JSON.stringify({title:n.title,todos:a}))}(h,f)})),o.addEventListener("change",(()=>{o.checked?(c(h,f,!0),n.classList.add("checked"),d.classList.add("checked")):(c(h,f,!1),n.classList.remove("checked"),d.classList.remove("checked"))})),d.addEventListener("click",(()=>{!function(t,e){const n=document.querySelector("#detailsModal .close"),a=document.getElementById("detailsModal"),o=document.getElementById("detailsContent"),r=document.getElementById("todoTitle"),i=document.getElementById("projectName"),c=document.getElementById("priority"),d=document.getElementById("dueDate"),s=document.querySelector(".detail-content #details");r.textContent=e.title,i.textContent=t,c.textContent=e.priority,d.textContent=e.dueDate,s.textContent=e.details,V(a,o),n.addEventListener("click",(()=>{Z(a,o)}))}(h,e)})),u.addEventListener("click",(()=>{console.log("edit clicked"),function(t){const e=document.querySelector("#editTodoContent .close"),n=document.getElementById("editTodoContent"),a=document.getElementById("editTodoModal");n.appendChild(function(t){yt.removeEventListener("click",bt);const e=document.getElementById(t.priority);return at.value=t.title,ot.value=t.details,dt.value=t.dueDate,e.checked=!0,yt.addEventListener("click",(t=>{t.preventDefault()})),et}(t)),V(a,n),e.addEventListener("click",(()=>{Z(a,n)}))}(e)})),n}class _{constructor(t,e,n,a,o,r){this.title=t,this.details=e,this.dueDate=n,this.priority=a,this.checked=o,this.index=r}}function tt(t,e){const n=document.querySelector("#todosContainer"),a=K(t,e);n.appendChild(a)}const et=document.createElement("form");et.method="post",et.id="addTodoForm";const nt=document.createElement("div"),at=document.createElement("input");at.type="text",at.id="title",at.placeholder="Title: Pay Bills",at.name="title",at.required=!0;const ot=document.createElement("textarea");ot.id="details",ot.placeholder="Details: e.g. internet, phone, rent, etc.",ot.name="details",nt.appendChild(at),nt.appendChild(ot),et.appendChild(nt);const rt=document.createElement("div"),it=document.createElement("div");it.classList.add("duedate");const ct=document.createElement("label");ct.htmlFor="date",ct.textContent="Due Date :";const dt=document.createElement("input");dt.type="date",dt.id="date",dt.name="date",dt.required=!0,rt.appendChild(it),it.appendChild(ct),it.appendChild(dt);const st=document.createElement("div"),ut=document.createElement("p");ut.textContent="Priority :";const lt=document.createElement("input");lt.type="radio",lt.id="Low",lt.name="priority",lt.required=!0,lt.value="Low";const mt=document.createElement("label");mt.htmlFor="Low",mt.textContent="Low";const ht=document.createElement("input");ht.type="radio",ht.id="Medium",ht.name="priority",ht.value="Medium";const ft=document.createElement("label");ft.htmlFor="Medium",ft.textContent="Medium";const gt=document.createElement("input");gt.type="radio",gt.id="High",gt.name="priority",gt.value="High";const pt=document.createElement("label");pt.htmlFor="High",pt.textContent="High";const yt=document.createElement("button");function wt(){return vt(),yt.addEventListener("click",bt),et}function bt(){if(0==!!et.checkValidity())return;const t=document.querySelector(".project.selected").dataset.id,e=at.value,n=ot.value,a=dt.value,o=Array.from(document.getElementsByName("priority")).find((t=>t.checked)).value,r=function(t){return JSON.parse(localStorage.getItem(t)).todos.length}(t);!function(t,e){(function(t,e){const n=JSON.parse(localStorage.getItem(t)),a=n.todos;a.push(e),localStorage.setItem(t,JSON.stringify({title:n.title,todos:a}))})(t,e),tt(t,e)}(t,new _(e,n,a,o,!1,r)),Ft()}function vt(){at.value="",ot.value="",dt.value="",document.querySelectorAll("input[name=priority]").forEach((t=>{t.checked=!1}))}function Ct(t){const e=document.createElement("li");e.classList.add("project"),e.dataset.id=t;const n=document.createElement("div");n.classList.add("project-logo");const a=document.createElement("i");a.classList.add("fa-solid"),a.classList.add("fa-list");const o=document.createElement("p");o.classList.add("project-name"),o.textContent=t;const r=document.createElement("div");r.classList.add("delete");const i=document.createElement("i");return i.classList.add("fa-solid"),i.classList.add("fa-x"),e.appendChild(n),n.appendChild(a),e.appendChild(o),e.appendChild(r),r.appendChild(i),e.addEventListener("click",(t=>{t.target.classList.contains("fa-x")?function(t,e){const n=document.querySelector(`[data-id='${t}']`);kt.removeChild(n),function(t){localStorage.removeItem(t)}(e),Et(St)}(e.dataset.id,o.textContent):Et(e)})),e}yt.type="submit",yt.id="addTodo",yt.textContent="Submit",st.appendChild(ut),st.appendChild(lt),st.appendChild(mt),st.appendChild(ht),st.appendChild(ft),st.appendChild(gt),st.appendChild(pt),st.appendChild(yt),rt.appendChild(st),et.appendChild(rt);const kt=document.querySelector(".projects"),St=document.querySelector("#home.project");function Et(t){!function(t){document.querySelectorAll(".project").forEach((e=>{e.dataset.id!=t.dataset.id?e.classList.remove("selected"):e.classList.add("selected")}))}(t),function(t){let e=document.querySelector("body");e.replaceChild(function(t){const e=document.createElement("div");e.classList.add("main");const n=document.createElement("div");n.classList.add("main-heading");const a=document.createElement("p");a.classList.add("project-title"),a.textContent=t;const o=document.createElement("div");return o.id="todosContainer",n.appendChild(a),e.appendChild(n),e.appendChild(o),e}(t.dataset.id),e.children[5]),function(){const t=document.querySelector(".project.selected").dataset.id;if(null!=i(t))if("Home"!=t){let e;e=i(t),e.forEach((e=>{const n=new _(e.title,e.details,e.dueDate,e.priority,e.checked,e.index);tt(t,n)}))}else"Home"==t&&o().sort().forEach((t=>{t.todos.forEach((e=>{const n=new _(e.title,e.details,e.dueDate,e.priority,e.checked,e.index);tt(t.title,n)}))}))}()}(t)}St.addEventListener("click",(()=>{Et(St)}));const Mt=document.createElement("form");Mt.id="addProjectForm",Mt.method="post";const xt=document.createElement("div");Mt.appendChild(xt),xt.style.display="none",xt.style.fontSize="1.5rem",xt.style.color="red";const Lt=document.createElement("textarea");Lt.id="projectName",Lt.placeholder="Project Name: House Renovations",Lt.name="projectName",Lt.required=!0,Lt.maxLength=15;const Pt=document.createElement("button");Pt.type="submit",Pt.id="addProject",Pt.textContent="Create Project",Mt.appendChild(Lt),Mt.appendChild(Pt),document.createElement("div").textContent="create project page",Pt.addEventListener("click",(t=>{t.preventDefault();const n=Lt.value;0!=(!!Mt.checkValidity()||(xt.textContent="Project Name is required.",xt.style.display="unset",!1))&&function(t){1==r(t)?(xt.textContent="Project Name already exists",xt.style.display="unset"):(a(t),function(t){const e=Ct(t);kt.appendChild(e),Et(e)}(t),(0,e.closeModal)())}(function(t){return t.charAt(0).toUpperCase()+t.slice(1)}(n))}));const Dt=document.getElementById("add"),qt=document.querySelector(".modal"),Tt=document.querySelector(".close"),Ot=document.querySelector(".modal-content"),Wt=document.getElementById("todo"),jt=document.getElementById("project"),Nt=document.querySelector(".close"),Yt=document.querySelector(".modal-main");function Ht(){Yt.appendChild(wt())}function Ft(){It(wt(),Wt),Z(qt,Ot),xt.textContent="",xt.style.display="none",Lt.value="",vt()}function It(t,e){Yt.replaceChildren(t),Bt(e)}function Bt(t){document.querySelectorAll(".modal-item").forEach((e=>{e.id!==t.id&&e.classList.remove("selected")})),t.classList.add("selected")}Wt.addEventListener("click",(()=>{It(wt(),Wt)})),jt.addEventListener("click",(()=>{It(Mt,jt)})),Nt.addEventListener("click",(()=>{It(wt(),Wt),Bt(Wt)})),Dt.addEventListener("click",(()=>{V(qt,Ot),vt(),It(wt(),Wt)})),Tt.addEventListener("click",(()=>{Ft()})),Ht(),o().forEach((t=>{"Home"!=t.title&&(Ct(t.title),kt.appendChild(Ct(t.title)))})),Et(St)})();