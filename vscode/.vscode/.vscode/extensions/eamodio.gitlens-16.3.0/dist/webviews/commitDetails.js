var e={47:(e,t,o)=>{const n=o(602),r=/[\u001b\u009b][[()#;?]*(?:[0-9]{1,4}(?:;[0-9]{0,4})*)?[0-9A-ORZcf-nqry=><]/y,a=/[\x00-\x1F\x7F-\x9F]{1,1000}/y,l=/(?:\p{Emoji_Modifier_Base}\p{Emoji_Modifier}?|\p{Emoji_Presentation}|\p{Emoji}\uFE0F)(?:\u200d(?:\p{Emoji_Modifier_Base}\p{Emoji_Modifier}?|\p{Emoji_Presentation}|\p{Emoji}\uFE0F))*/uy,c=/[\x20-\x7E\xA0-\xFF]{1,1000}/y,d=/\p{M}+/gu,h={limit:1/0,ellipsis:""},p=(e,t={},o={})=>{const u=t.limit??1/0,g=t.ellipsis??"",f=t?.ellipsisWidth??(g?p(g,h,o).width:0),m=o.ansiWidth??0,b=o.controlWidth??0,v=o.ambiguousWidth??1,y=o.emojiWidth??2,w=o.fullWidthWidth??2,k=o.regularWidth??1,x=o.wideWidth??2;let _=0,C=0,S=e.length,A=0,E=!1,P=S,R=Math.max(0,u-f),T=0,O=0,D=0,M=0;e:for(;;){if(O>T||C>=S&&C>_){const t=e.slice(T,O)||e.slice(_,C);A=0;for(const e of t.replaceAll(d,"")){const t=e.codePointAt(0)||0;if(M=(0,n.isFullWidth)(t)?w:(0,n.isWide)(t)?x:v!==k&&(0,n.isAmbiguous)(t)?v:k,D+M>R&&(P=Math.min(P,Math.max(T,_)+A)),D+M>u){E=!0;break e}A+=e.length,D+=M}T=O=0}if(C>=S)break;if(c.lastIndex=C,c.test(e)){if(A=c.lastIndex-C,M=A*k,D+M>R&&(P=Math.min(P,C+Math.floor((R-D)/k))),D+M>u){E=!0;break}D+=M,T=_,O=C,C=_=c.lastIndex}else if(r.lastIndex=C,r.test(e)){if(D+m>R&&(P=Math.min(P,C)),D+m>u){E=!0;break}D+=m,T=_,O=C,C=_=r.lastIndex}else if(a.lastIndex=C,a.test(e)){if(A=a.lastIndex-C,M=A*b,D+M>R&&(P=Math.min(P,C+Math.floor((R-D)/b))),D+M>u){E=!0;break}D+=M,T=_,O=C,C=_=a.lastIndex}else if(l.lastIndex=C,l.test(e)){if(D+y>R&&(P=Math.min(P,C)),D+y>u){E=!0;break}D+=y,T=_,O=C,C=_=l.lastIndex}else C+=1}return{width:E?R:D,index:E?P:S,truncated:E,ellipsed:E&&u>=f}}},602:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.isWide=t.isFullWidth=t.isAmbiguous=void 0;t.isAmbiguous=e=>161===e||164===e||167===e||168===e||170===e||173===e||174===e||e>=176&&e<=180||e>=182&&e<=186||e>=188&&e<=191||198===e||208===e||215===e||216===e||e>=222&&e<=225||230===e||e>=232&&e<=234||236===e||237===e||240===e||242===e||243===e||e>=247&&e<=250||252===e||254===e||257===e||273===e||275===e||283===e||294===e||295===e||299===e||e>=305&&e<=307||312===e||e>=319&&e<=322||324===e||e>=328&&e<=331||333===e||338===e||339===e||358===e||359===e||363===e||462===e||464===e||466===e||468===e||470===e||472===e||474===e||476===e||593===e||609===e||708===e||711===e||e>=713&&e<=715||717===e||720===e||e>=728&&e<=731||733===e||735===e||e>=768&&e<=879||e>=913&&e<=929||e>=931&&e<=937||e>=945&&e<=961||e>=963&&e<=969||1025===e||e>=1040&&e<=1103||1105===e||8208===e||e>=8211&&e<=8214||8216===e||8217===e||8220===e||8221===e||e>=8224&&e<=8226||e>=8228&&e<=8231||8240===e||8242===e||8243===e||8245===e||8251===e||8254===e||8308===e||8319===e||e>=8321&&e<=8324||8364===e||8451===e||8453===e||8457===e||8467===e||8470===e||8481===e||8482===e||8486===e||8491===e||8531===e||8532===e||e>=8539&&e<=8542||e>=8544&&e<=8555||e>=8560&&e<=8569||8585===e||e>=8592&&e<=8601||8632===e||8633===e||8658===e||8660===e||8679===e||8704===e||8706===e||8707===e||8711===e||8712===e||8715===e||8719===e||8721===e||8725===e||8730===e||e>=8733&&e<=8736||8739===e||8741===e||e>=8743&&e<=8748||8750===e||e>=8756&&e<=8759||8764===e||8765===e||8776===e||8780===e||8786===e||8800===e||8801===e||e>=8804&&e<=8807||8810===e||8811===e||8814===e||8815===e||8834===e||8835===e||8838===e||8839===e||8853===e||8857===e||8869===e||8895===e||8978===e||e>=9312&&e<=9449||e>=9451&&e<=9547||e>=9552&&e<=9587||e>=9600&&e<=9615||e>=9618&&e<=9621||9632===e||9633===e||e>=9635&&e<=9641||9650===e||9651===e||9654===e||9655===e||9660===e||9661===e||9664===e||9665===e||e>=9670&&e<=9672||9675===e||e>=9678&&e<=9681||e>=9698&&e<=9701||9711===e||9733===e||9734===e||9737===e||9742===e||9743===e||9756===e||9758===e||9792===e||9794===e||9824===e||9825===e||e>=9827&&e<=9829||e>=9831&&e<=9834||9836===e||9837===e||9839===e||9886===e||9887===e||9919===e||e>=9926&&e<=9933||e>=9935&&e<=9939||e>=9941&&e<=9953||9955===e||9960===e||9961===e||e>=9963&&e<=9969||9972===e||e>=9974&&e<=9977||9979===e||9980===e||9982===e||9983===e||10045===e||e>=10102&&e<=10111||e>=11094&&e<=11097||e>=12872&&e<=12879||e>=57344&&e<=63743||e>=65024&&e<=65039||65533===e||e>=127232&&e<=127242||e>=127248&&e<=127277||e>=127280&&e<=127337||e>=127344&&e<=127373||127375===e||127376===e||e>=127387&&e<=127404||e>=917760&&e<=917999||e>=983040&&e<=1048573||e>=1048576&&e<=1114109;t.isFullWidth=e=>12288===e||e>=65281&&e<=65376||e>=65504&&e<=65510;t.isWide=e=>e>=4352&&e<=4447||8986===e||8987===e||9001===e||9002===e||e>=9193&&e<=9196||9200===e||9203===e||9725===e||9726===e||9748===e||9749===e||e>=9800&&e<=9811||9855===e||9875===e||9889===e||9898===e||9899===e||9917===e||9918===e||9924===e||9925===e||9934===e||9940===e||9962===e||9970===e||9971===e||9973===e||9978===e||9981===e||9989===e||9994===e||9995===e||10024===e||10060===e||10062===e||e>=10067&&e<=10069||10071===e||e>=10133&&e<=10135||10160===e||10175===e||11035===e||11036===e||11088===e||11093===e||e>=11904&&e<=11929||e>=11931&&e<=12019||e>=12032&&e<=12245||e>=12272&&e<=12287||e>=12289&&e<=12350||e>=12353&&e<=12438||e>=12441&&e<=12543||e>=12549&&e<=12591||e>=12593&&e<=12686||e>=12688&&e<=12771||e>=12783&&e<=12830||e>=12832&&e<=12871||e>=12880&&e<=19903||e>=19968&&e<=42124||e>=42128&&e<=42182||e>=43360&&e<=43388||e>=44032&&e<=55203||e>=63744&&e<=64255||e>=65040&&e<=65049||e>=65072&&e<=65106||e>=65108&&e<=65126||e>=65128&&e<=65131||e>=94176&&e<=94180||94192===e||94193===e||e>=94208&&e<=100343||e>=100352&&e<=101589||e>=101632&&e<=101640||e>=110576&&e<=110579||e>=110581&&e<=110587||110589===e||110590===e||e>=110592&&e<=110882||110898===e||e>=110928&&e<=110930||110933===e||e>=110948&&e<=110951||e>=110960&&e<=111355||126980===e||127183===e||127374===e||e>=127377&&e<=127386||e>=127488&&e<=127490||e>=127504&&e<=127547||e>=127552&&e<=127560||127568===e||127569===e||e>=127584&&e<=127589||e>=127744&&e<=127776||e>=127789&&e<=127797||e>=127799&&e<=127868||e>=127870&&e<=127891||e>=127904&&e<=127946||e>=127951&&e<=127955||e>=127968&&e<=127984||127988===e||e>=127992&&e<=128062||128064===e||e>=128066&&e<=128252||e>=128255&&e<=128317||e>=128331&&e<=128334||e>=128336&&e<=128359||128378===e||128405===e||128406===e||128420===e||e>=128507&&e<=128591||e>=128640&&e<=128709||128716===e||e>=128720&&e<=128722||e>=128725&&e<=128727||e>=128732&&e<=128735||128747===e||128748===e||e>=128756&&e<=128764||e>=128992&&e<=129003||129008===e||e>=129292&&e<=129338||e>=129340&&e<=129349||e>=129351&&e<=129535||e>=129648&&e<=129660||e>=129664&&e<=129672||e>=129680&&e<=129725||e>=129727&&e<=129733||e>=129742&&e<=129755||e>=129760&&e<=129768||e>=129776&&e<=129784||e>=131072&&e<=196605||e>=196608&&e<=262141}},t={};function o(n){var r=t[n];if(void 0!==r)return r.exports;var a=t[n]={exports:{}};return e[n](a,a.exports,o),a.exports}o.d=(e,t)=>{for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),void 0!==o&&Object.defineProperty(o,"p",{get:function(){try{if("string"!=typeof webpackResourceBasePath)throw new Error("WebpackRequireFrom: 'webpackResourceBasePath' is not a string or not available at runtime. See https://github.com/agoldis/webpack-require-from#troubleshooting");return webpackResourceBasePath}catch(e){return"#{root}/dist/webviews/"}},set:function(e){}});var n={};o.d(n,{L:()=>CommitDetailsApp});class context_request_event_s extends Event{constructor(e,t,o){super("context-request",{bubbles:!0,composed:!0}),this.context=e,this.callback=t,this.subscribe=o??!1}}class value_notifier_s{get value(){return this.o}set value(e){this.setValue(e)}setValue(e,t=!1){const o=t||!Object.is(e,this.o);this.o=e,o&&this.updateObservers()}constructor(e){this.subscriptions=new Map,this.updateObservers=()=>{for(const[e,{disposer:t}]of this.subscriptions)e(this.o,t)},void 0!==e&&(this.value=e)}addCallback(e,t,o){if(!o)return void e(this.value);this.subscriptions.has(e)||this.subscriptions.set(e,{disposer:()=>{this.subscriptions.delete(e)},consumerHost:t});const{disposer:n}=this.subscriptions.get(e);e(this.value,n)}clearCallbacks(){this.subscriptions.clear()}}class context_provider_e extends Event{constructor(e){super("context-provider",{bubbles:!0,composed:!0}),this.context=e}}class i extends value_notifier_s{constructor(e,t,o){super(void 0!==t.context?t.initialValue:o),this.onContextRequest=e=>{const t=e.composedPath()[0];e.context===this.context&&t!==this.host&&(e.stopPropagation(),this.addCallback(e.callback,t,e.subscribe))},this.onProviderRequest=e=>{const t=e.composedPath()[0];if(e.context!==this.context||t===this.host)return;const o=new Set;for(const[e,{consumerHost:t}]of this.subscriptions)o.has(e)||(o.add(e),t.dispatchEvent(new context_request_event_s(this.context,e,!0)));e.stopPropagation()},this.host=e,void 0!==t.context?this.context=t.context:this.context=t,this.attachListeners(),this.host.addController?.(this)}attachListeners(){this.host.addEventListener("context-request",this.onContextRequest),this.host.addEventListener("context-provider",this.onProviderRequest)}hostConnected(){this.host.dispatchEvent(new context_provider_e(this.context))}}function r(e,t,o){let n,r,a,l,c;function d(){const e=Date.now();if(function(e){const o=e-(r??0);return null==r||o>=t||o<0}(e))h();else{c=setTimeout(d,t-(e-(r??0)))}}function h(){return c=void 0,n?function(){const t=n,o=a;return n=a=void 0,l=e.apply(o,t),l}():(n=void 0,a=void 0,l)}function p(...e){const h=Date.now();return n=null!=o&&n?o(n,e):e,a=this,r=h,null==c&&(c=setTimeout(d,t)),l}return p.cancel=function(){null!=c&&clearTimeout(c),n=void 0,r=void 0,a=void 0,c=void 0},p.flush=function(){return null==c?l:(clearTimeout(c),h())},p.pending=function(){return null!=c},p}const a=/\(([\s\S]*)\)/,l=/(\/\*([\s\S]*?)\*\/|([^:]|^)\/\/(.*)$)/gm,c=/\s?=.*$/;class IpcCall{constructor(e,t,o=!1,n=!1){this.scope=e,this.reset=o,this.pack=n,this.method=`${e}/${t}`}is(e){return e.method===this.method}}class IpcCommand extends IpcCall{}class IpcRequest extends IpcCall{constructor(e,t,o,n){super(e,t,o,n),this.response=new IpcNotification(this.scope,`${t}/completion`,this.reset,this.pack)}}class IpcNotification extends IpcCall{}const d=new IpcCommand("core","webview/ready"),h=new IpcCommand("core","webview/focus/changed"),p=new IpcCommand("core","command/execute"),u=new IpcRequest("core","promos/applicable"),g=(new IpcCommand("core","configuration/update"),new IpcCommand("core","telemetry/sendEvent"));function f(e){return null!=e&&"object"==typeof e&&"__ipc"in e&&"promise"===e.__ipc&&"id"in e&&"string"==typeof e.id&&"method"in e&&"string"==typeof e.method}const m=new IpcNotification("core","ipc/promise/settled"),b=(new IpcNotification("core","window/focus/didChange"),new IpcCommand("core","webview/focus/didChange"));new IpcNotification("core","configuration/didChange");function v(e){const t=.001*performance.now();let o=Math.floor(t),n=Math.floor(t%1*1e9);return void 0!==e&&(o-=e[0],n-=e[1],n<0&&(o--,n+=1e9)),[o,n]}function y(){let e=0;return{get current(){return e},next:function(){return 1073741823===e&&(e=0),++e}}}const w=y(),k=new Map;function x(e){k.delete(e)}function _(e,t){return null==t?`[${e.toString(16).padStart(13)}]`:`[${t.toString(16).padStart(5)} → ${e.toString(16).padStart(5)}]`}function C(e,t){if(null!=t&&"boolean"!=typeof t)return{scopeId:t.scopeId,prevScopeId:t.prevScopeId,prefix:`${t.prefix}${e}`};const o=t?w.current:void 0,n=w.next();return{scopeId:n,prevScopeId:o,prefix:`${_(n,o)} ${e}`}}Error;function S(e){return null!=e&&(e instanceof Promise||"function"==typeof e?.then)}Error;o(47);var A=(e=>(e[e.Hash=35]="Hash",e[e.Slash=47]="Slash",e[e.Digit0=48]="Digit0",e[e.Digit1=49]="Digit1",e[e.Digit2=50]="Digit2",e[e.Digit3=51]="Digit3",e[e.Digit4=52]="Digit4",e[e.Digit5=53]="Digit5",e[e.Digit6=54]="Digit6",e[e.Digit7=55]="Digit7",e[e.Digit8=56]="Digit8",e[e.Digit9=57]="Digit9",e[e.Backslash=92]="Backslash",e[e.A=65]="A",e[e.B=66]="B",e[e.C=67]="C",e[e.D=68]="D",e[e.E=69]="E",e[e.F=70]="F",e[e.Z=90]="Z",e[e.a=97]="a",e[e.b=98]="b",e[e.c=99]="c",e[e.d=100]="d",e[e.e=101]="e",e[e.f=102]="f",e[e.z=122]="z",e))(A||{});Object.freeze({".png":"image/png",".gif":"image/gif",".jpg":"image/jpeg",".jpeg":"image/jpeg",".jpe":"image/jpeg",".webp":"image/webp",".tif":"image/tiff",".tiff":"image/tiff",".bmp":"image/bmp"}),Object.freeze(["left","alt+left","ctrl+left","right","alt+right","ctrl+right","alt+,","alt+.","alt+enter","ctrl+enter","escape"]);Object.freeze(new Set(["file","git","gitlens","pr","vscode-remote","vsls","vsls-scc","vscode-vfs","github"]));const E="utm_source=gitlens-extension&utm_medium=in-app-links",P=Object.freeze({codeSuggest:`https://gitkraken.com/solutions/code-suggest?${E}`,cloudPatches:`https://gitkraken.com/solutions/cloud-patches?${E}`,graph:`https://gitkraken.com/solutions/commit-graph?${E}`,launchpad:`https://gitkraken.com/solutions/launchpad?${E}`,platform:`https://gitkraken.com/devex?${E}`,pricing:`https://gitkraken.com/gitlens/pricing?${E}`,proFeatures:`https://gitkraken.com/gitlens/pro-features?${E}`,security:`https://help.gitkraken.com/gitlens/security?${E}`,workspaces:`https://gitkraken.com/solutions/workspaces?${E}`,cli:`https://gitkraken.com/cli?${E}`,browserExtension:`https://gitkraken.com/browser-extension?${E}`,desktop:`https://gitkraken.com/git-client?${E}`,githubIssues:`https://github.com/gitkraken/vscode-gitlens/issues/?${E}`,githubDiscussions:`https://github.com/gitkraken/vscode-gitlens/discussions/?${E}`,helpCenter:`https://help.gitkraken.com/gitlens/gitlens-start-here/?${E}`,helpCenterHome:`https://help.gitkraken.com/gitlens/home-view/?${E}`,releaseNotes:`https://help.gitkraken.com/gitlens/gitlens-release-notes-current/?${E}`,acceleratePrReviews:`https://help.gitkraken.com/gitlens/gitlens-start-here/?${E}#accelerate-pr-reviews`,communityVsPro:`https://help.gitkraken.com/gitlens/gitlens-community-vs-gitlens-pro/?${E}`,interactiveCodeHistory:`https://help.gitkraken.com/gitlens/gitlens-start-here/?${E}#interactive-code-history`,startIntegrations:`https://help.gitkraken.com/gitlens/gitlens-start-here/?${E}#improve-workflows-with-integrations`,streamlineCollaboration:`https://help.gitkraken.com/gitlens/gitlens-start-here/?${E}#streamline-collaboration`}),R=/(?<literal>\[.*?\])|(?<year>YYYY|YY)|(?<month>M{1,4})|(?<day>Do|DD?)|(?<weekday>d{2,4})|(?<hour>HH?|hh?)|(?<minute>mm?)|(?<second>ss?)|(?<fractionalSecond>SSS)|(?<dayPeriod>A|a)|(?<timeZoneName>ZZ?)/g,T=/(?<dateStyle>full|long|medium|short)(?:\+(?<timeStyle>full|long|medium|short))?/,O=[["year",629856e5,31536e6,"yr"],["month",2628e6,2628e6,"mo"],["week",6048e5,6048e5,"wk"],["day",864e5,864e5,"d"],["hour",36e5,36e5,"h"],["minute",6e4,6e4,"m"],["second",1e3,1e3,"s"]];let D;const M=new Map;let L,I,B;const j=new Map;function N(e,t,o,n=!0){const r=`${o??""}:${t=t??void 0}`;let a=M.get(r);if(null==a){const e=function(e){if(null==e)return{localeMatcher:"best fit",dateStyle:"full",timeStyle:"short"};const t=T.exec(e);if(null!=t?.groups){const{dateStyle:e,timeStyle:o}=t.groups;return{localeMatcher:"best fit",dateStyle:e||"full",timeStyle:o||void 0}}const o={localeMatcher:"best fit"};for(const{groups:t}of e.matchAll(R))if(null!=t)for(const[e,n]of Object.entries(t))if(null!=n)switch(e){case"year":o.year=4===n.length?"numeric":"2-digit";break;case"month":switch(n.length){case 4:o.month="long";break;case 3:o.month="short";break;case 2:o.month="2-digit";break;case 1:o.month="numeric"}break;case"day":o.day="DD"===n?"2-digit":"numeric";break;case"weekday":switch(n.length){case 4:o.weekday="long";break;case 3:o.weekday="short";break;case 2:o.weekday="narrow"}break;case"hour":o.hour=2===n.length?"2-digit":"numeric",o.hour12="hh"===n||"h"===n;break;case"minute":o.minute=2===n.length?"2-digit":"numeric";break;case"second":o.second=2===n.length?"2-digit":"numeric";break;case"fractionalSecond":o.fractionalSecondDigits=3;break;case"dayPeriod":o.dayPeriod="narrow",o.hour12=!0,o.hourCycle="h12";break;case"timeZoneName":o.timeZoneName=2===n.length?"long":"short"}return o}(t);let l;l=null==o?L:"system"===o?void 0:[o],a=new Intl.DateTimeFormat(l,e),n&&M.set(r,a)}if(null==t||T.test(t))return a.format(e);function l(e){const t=`${o??""}:time:${e}`;let r=M.get(t);if(null==r){const a={localeMatcher:"best fit",timeStyle:e};let l;l=null==o?L:"system"===o?void 0:[o],r=new Intl.DateTimeFormat(l,a),n&&M.set(t,r)}return r}const c=a.formatToParts(e);return t.replace(R,((t,o,n,r,a,d,h,p,u,g,f,m,b,v,y)=>{if(null!=o)return o.substring(1,o.length-1);for(const[t,o]of Object.entries(y)){if(null==o)continue;const n=c.find((e=>e.type===t));if("Do"===o&&"day"===n?.type)return F(Number(n.value));if("a"===o&&"dayPeriod"===n?.type){const t=l("short").formatToParts(e).find((e=>"dayPeriod"===e.type));return` ${(t??n)?.value??""}`}return n?.value??""}return""}))}const U=["th","st","nd","rd"];function F(e){const t=e%100;return`${e}${U[(t-20)%10]??U[t]??U[0]}`}function H(e,t){null==e&&(e="decimal");const o=`${t??""}:${e}`;let n=j.get(o);if(null==n){const r={localeMatcher:"best fit",style:e};let a;a=null==t?L:"system"===t?void 0:[t],n=new Intl.NumberFormat(a,r),j.set(o,n)}return n.format}const{fromCharCode:q}=String;new TextEncoder;let V;function W(e,t){return null==e&&null==t||null!=e&&null!=t&&0===function(e,t){null==V&&(V=new Intl.Collator(void 0,{sensitivity:"accent"}));const o=V.compare(e,t);return 0===o?0:o>0?1:-1}(e,t)}function G(e){const[t,o]=v(e);return 1e3*t+Math.floor(o/1e6)}let K;function Z(e,t,o){if(null==o)return K??=H(),`${K(t)} ${e}${1===t?"":"s"}`;const n=1===t?e:o.plural??`${e}s`;if(o.only)return n;let r;return 0===t?r=o.zero??t:!1===o.format?r=t:null!=o.format?r=o.format(t):(K??=H(),r=K(t)),`${r}${o.infix??" "}${n}`}new Uint8Array([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,62,0,0,0,63,52,53,54,55,56,57,58,59,60,61,0,0,0,64,0,0,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,0,0,0,0,0,0,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51]);const Y=Symbol("logInstanceNameFn");function J(e){return function(e,t=!1){let o,n,r,d,h,p=0,u=!1,g=!1,f=!0;null!=e&&({args:o,if:n,enter:r,exit:d,prefix:h,logThreshold:p=0,scoped:u=!0,singleLine:g=!1,timed:f=!0}=e);p>0&&(g=!0,f=!0);f&&(u=!0);const m=ee.isDebugging,b=t?ee.debug:ee.log,y=m?"debug":"info";return(e,t,C)=>{let A,E;if("function"==typeof C.value?(A=C.value,E="value"):"function"==typeof C.get&&(A=C.get,E="get"),null==A||null==E)throw new Error("Not supported");const P=!1!==o?function(e){if("function"!=typeof e)throw new Error("Not supported");if(0===e.length)return[];let t=Function.prototype.toString.call(e);t=t.replace(l,"")||t,t=t.slice(0,t.indexOf("{"));let o=t.indexOf("("),n=t.indexOf(")");o=o>=0?o+1:0,n=n>0?n:t.indexOf("="),t=t.slice(o,n),t=`(${t})`;const r=a.exec(t);return null!=r?r[1].split(",").map((e=>e.trim().replace(c,""))):[]}(A):[];C[E]=function(...e){if(!m&&!ee.enabled(y)||null!=n&&!n.apply(this,e))return A.apply(this,e);const a=w.current,l=w.next(),c=null!=this?function(e){let t;if("function"==typeof e){if(null==e.prototype?.constructor)return e.name;t=e.prototype.constructor}else t=e.constructor;let o=t?.name??"";const n=o.indexOf("_");o=-1===n?o:o.substring(n+1),null!=t?.[Y]&&(o=t[Y](e,o));return o}(this):void 0;let C,E=c?u?`${_(l,a)} ${c}.${t}`:`${c}.${t}`:t;null!=h&&(E=h({id:l,instance:this,instanceName:c??"",name:t,prefix:E},...e)),u&&(C=function(e,t){return t={prevScopeId:w.current,...t},k.set(e,t),t}(l,{scopeId:l,prevScopeId:a,prefix:E}));const R=null!=r?r(...e):"";let T;if(!1===o||0===e.length)T="",g||b.call(ee,`${E}${R}`);else{let t;T="";let n,r,a,l=-1;for(a of e){if(n=P[++l],t=o?.[l],null!=t){if("boolean"==typeof t)continue;if(T.length>0&&(T+=", "),"string"==typeof t){T+=t;continue}r=String(t(a))}else T.length>0&&(T+=", "),r=ee.toLoggable(a);T+=n?`${n}=${r}`:r}g||b.call(ee,T?`${E}${R}(${T})`:`${E}${R}`)}if(g||f||null!=d){const t=f?v():void 0,o=e=>{const o=void 0!==t?` [${G(t)}ms]`:"";g?ee.error(e,T?`${E}${R}(${T})`:`${E}${R}`,C?.exitDetails?`failed${C.exitDetails}${o}`:`failed${o}`):ee.error(e,E,C?.exitDetails?`failed${C.exitDetails}${o}`:`failed${o}`),u&&x(l)};let n;try{n=A.apply(this,e)}catch(e){throw o(e),e}const r=e=>{let o,n,r,a;if(null!=t?(o=G(t),o>500?(n=ee.warn,r=` [*${o}ms] (slow)`):(n=b,r=` [${o}ms]`)):(r="",n=b),null!=d)if("function"==typeof d)try{a=d(e)}catch(e){a=`@log.exit error: ${e}`}else!0===d&&(a=`returned ${ee.toLoggable(e)}`);else C?.exitFailed?(a=C.exitFailed,n=(e,...t)=>ee.error(null,e,...t)):a="completed";g?(0===p||o>p)&&n.call(ee,T?`${E}${R}(${T}) ${a}${C?.exitDetails||""}${r}`:`${E}${R} ${a}${C?.exitDetails||""}${r}`):n.call(ee,T?`${E}(${T}) ${a}${C?.exitDetails||""}${r}`:`${E} ${a}${C?.exitDetails||""}${r}`),u&&x(l)};return null!=n&&S(n)?n.then(r,o):r(n),n}return A.apply(this,e)}}}(e,!0)}const X=["accessToken","password","token"],ee=new class Logger2{constructor(){this._isDebugging=!1,this.level=0,this._logLevel="off"}configure(e,t,o=!1){if(null!=e.sanitizeKeys)for(const t of X)e.sanitizeKeys.add(t);else e.sanitizeKeys=new Set(X);this.provider=e,this._isDebugging=o,this.logLevel=t}enabled(e){return this.level>=te(e)}get isDebugging(){return this._isDebugging}get logLevel(){return this._logLevel}set logLevel(e){this._logLevel=e,this.level=te(this._logLevel),"off"===e?(this.output?.dispose?.(),this.output=void 0):this.output??=this.provider.createChannel(this.provider.name)}get timestamp(){return`[${(new Date).toISOString().replace(/T/," ").slice(0,-1)}]`}debug(e,...t){if(this.level<4&&!this.isDebugging)return;let o;"string"==typeof e?o=e:(o=t.shift(),null!=e&&(o=`${e.prefix} ${o??""}`)),this.isDebugging,null==this.output||this.level<4||this.output.appendLine(`${this.timestamp} ${o??""}${this.toLoggableParams(!0,t)}`)}error(e,t,...o){if(this.level<1&&!this.isDebugging)return;let n;if(n=null==t||"string"==typeof t?t:`${t.prefix} ${o.shift()??""}`,null==n){const t=e instanceof Error?e.stack:void 0;if(t){const e=/.*\s*?at\s(.+?)\s/.exec(t);null!=e&&(n=e[1])}}this.isDebugging,null==this.output||this.level<1||this.output.appendLine(`${this.timestamp} ${n??""}${this.toLoggableParams(!1,o)}${null!=e?`\n${String(e)}`:""}`)}log(e,...t){if(this.level<3&&!this.isDebugging)return;let o;"string"==typeof e?o=e:(o=t.shift(),null!=e&&(o=`${e.prefix} ${o??""}`)),this.isDebugging,null==this.output||this.level<3||this.output.appendLine(`${this.timestamp} ${o??""}${this.toLoggableParams(!1,t)}`)}warn(e,...t){if(this.level<2&&!this.isDebugging)return;let o;"string"==typeof e?o=e:(o=t.shift(),null!=e&&(o=`${e.prefix} ${o??""}`)),this.isDebugging,null==this.output||this.level<2||this.output.appendLine(`${this.timestamp} ${o??""}${this.toLoggableParams(!1,t)}`)}showOutputChannel(e){this.output?.show?.(e)}toLoggable(e,t){if("object"!=typeof e)return String(e);if(Array.isArray(e))return`[${e.map((e=>this.toLoggable(e,t))).join(", ")}]`;const o=this.provider.toLoggable?.(e);if(null!=o)return o;try{return JSON.stringify(e,((e,o)=>this.provider.sanitizeKeys.has(e)?`<${e}>`:(null!=t&&(o=t(e,o)),null!=this.provider?.sanitizer&&(o=this.provider.sanitizer(e,o)),o)))}catch{return"<error>"}}toLoggableParams(e,t){if(0===t.length||e&&this.level<4&&!this.isDebugging)return"";const o=t.map((e=>this.toLoggable(e))).join(", ");return 0!==o.length?` — ${o}`:""}};function te(e){switch(e){case"off":default:return 0;case"error":return 1;case"warn":return 2;case"info":return 3;case"debug":return 4}}const ie={enabled:e=>ee.enabled(e)||ee.isDebugging,log:(e,t,o,...n)=>{switch(e){case"error":ee.error(void 0,t,o,...n);break;case"warn":ee.warn(t,o,...n);break;case"info":ee.log(t,o,...n);break;default:ee.debug(t,o,...n)}}};class LoggerContext{constructor(e){this.scope=C(e,void 0),ee.configure({name:e,createChannel:function(e){return{name:e,appendLine:ee.isDebugging?function(){}:function(e){}}}},"off",!1)}log(e,...t){"string"==typeof e?ee.log(this.scope,e,...t):ee.log(e,t.shift(),...t)}}class PromosContext{constructor(e){this.disposables=[],this._promos=new Map,this.ipc=e}async getApplicablePromo(e){let t=this._promos.get(e);null==t&&(t=this.ipc.sendRequest(u,{location:e}).then((e=>e.promo),(()=>{})),this._promos.set(e,t));return await t}dispose(){this.disposables.forEach((e=>e.dispose()))}}class TelemetryContext{constructor(e){this.disposables=[],this.ipc=e}sendEvent(e){this.ipc.sendCommand(g,e)}dispose(){this.disposables.forEach((e=>e.dispose()))}}var oe;function ne(e){return(e=e.toString().toLowerCase()).includes("ms")?parseFloat(e):e.includes("s")?1e3*parseFloat(e):parseFloat(e)}function se(e,t){return new Promise((o=>{e.addEventListener(t,(function n(r){r.target===e&&(e.removeEventListener(t,n),o())}))}))}(oe||(oe={})).on=function(e,t,o,n){let r=!1;if("string"==typeof e){const a=function(t){const n=t?.target?.closest(e);null!=n&&o(t,n)};return document.addEventListener(t,a,n??!0),{dispose:()=>{r||(r=!0,document.removeEventListener(t,a,n??!0))}}}const a=function(e){o(e,this)};return e.addEventListener(t,a,n??!1),{dispose:()=>{r||(r=!0,e.removeEventListener(t,a,n??!1))}}},Symbol.dispose??=Symbol("Symbol.dispose"),Symbol.asyncDispose??=Symbol("Symbol.asyncDispose");class Stopwatch{constructor(e,t,...o){let n;if(this._stopped=!1,this.logScope=null!=e&&"string"!=typeof e?e:C(e??"",!1),n="boolean"==typeof t?.log?t.log?{}:void 0:t?.log??{},this.logLevel=t?.logLevel??"info",this.logProvider=t?.provider??ie,this._time=v(),null!=n){if(!this.logProvider.enabled(this.logLevel))return;o.length?this.logProvider.log(this.logLevel,this.logScope,`${n.message??""}${n.suffix??""}`,...o):this.logProvider.log(this.logLevel,this.logScope,`${n.message??""}${n.suffix??""}`)}}get startTime(){return this._time}[Symbol.dispose](){this.stop()}elapsed(){const[e,t]=v(this._time);return 1e3*e+Math.floor(t/1e6)}log(e){this.logCore(e,!1)}restart(e){this.logCore(e,!0),this._time=v(),this._stopped=!1}stop(e){this._stopped||(this.restart(e),this._stopped=!0)}logCore(e,t){if(!this.logProvider.enabled(this.logLevel))return;if(!t)return void this.logProvider.log(this.logLevel,this.logScope,`${e?.message??""}${e?.suffix??""}`);const[o,n]=v(this._time),r=1e3*o+Math.floor(n/1e6),a=e?.message??"";this.logProvider.log(r>250?"warn":this.logLevel,this.logScope,`${a?`${a} `:""}[${r}ms]${e?.suffix??""}`)}}const re=class _Emitter{constructor(){this._disposed=!1}get event(){return null==this._event&&(this._event=(e,t,o)=>{null==this.listeners&&(this.listeners=new LinkedList);const n=this.listeners.push(null==t?e:[e,t]),r={dispose:()=>{r.dispose=_Emitter._noop,this._disposed||n()}};return Array.isArray(o)&&o.push(r),r}),this._event}fire(e){if(null!=this.listeners){null==this._deliveryQueue&&(this._deliveryQueue=new LinkedList);for(let t=this.listeners.iterator(),o=t.next();!o.done;o=t.next())this._deliveryQueue.push([o.value,e]);for(;this._deliveryQueue.size>0;){const[e,t]=this._deliveryQueue.shift();try{"function"==typeof e?e(t):e[0].call(e[1],t)}catch(e){}}}}dispose(){this.listeners?.clear(),this._deliveryQueue?.clear(),this._disposed=!0}};re._noop=function(){};let ae=re;const le={done:!0,value:void 0},ce=class _Node{constructor(e){this.element=e,this.next=_Node.Undefined,this.prev=_Node.Undefined}};ce.Undefined=new ce(void 0);let de=ce;class LinkedList{constructor(){this._first=de.Undefined,this._last=de.Undefined,this._size=0}get size(){return this._size}isEmpty(){return this._first===de.Undefined}clear(){this._first=de.Undefined,this._last=de.Undefined,this._size=0}unshift(e){return this._insert(e,!1)}push(e){return this._insert(e,!0)}_insert(e,t){const o=new de(e);if(this._first===de.Undefined)this._first=o,this._last=o;else if(t){const e=this._last;this._last=o,o.prev=e,e.next=o}else{const e=this._first;this._first=o,o.next=e,e.prev=o}this._size+=1;let n=!1;return()=>{n||(n=!0,this._remove(o))}}shift(){if(this._first===de.Undefined)return;const e=this._first.element;return this._remove(this._first),e}pop(){if(this._last===de.Undefined)return;const e=this._last.element;return this._remove(this._last),e}_remove(e){if(e.prev!==de.Undefined&&e.next!==de.Undefined){const t=e.prev;t.next=e.next,e.next.prev=t}else e.prev===de.Undefined&&e.next===de.Undefined?(this._first=de.Undefined,this._last=de.Undefined):e.next===de.Undefined?(this._last=this._last.prev,this._last.next=de.Undefined):e.prev===de.Undefined&&(this._first=this._first.next,this._first.prev=de.Undefined);this._size-=1}iterator(){let e,t=this._first;return{next:function(){return t===de.Undefined?le:(null==e?e={done:!1,value:t.element}:e.value=t.element,t=t.next,e)}}}toArray(){const e=[];for(let t=this._first;t!==de.Undefined;t=t.next)e.push(t.element);return e}}var he=Object.defineProperty,pe=Object.getOwnPropertyDescriptor,ue=(e,t,o,n)=>{for(var r,a=n>1?void 0:n?pe(t,o):t,l=e.length-1;l>=0;l--)(r=e[l])&&(a=(n?r(t,o,a):r(a))||a);return n&&a&&he(t,o,a),a};let ge;function fe(){return ge??=acquireVsCodeApi()}const me=y();function be(){return`webview:${me.next()}`}let ve=class{constructor(e){this.appName=e,this._onReceiveMessage=new ae,this._pendingHandlers=new Map,this._api=fe(),this._disposable=oe.on(window,"message",(e=>this.onMessageReceived(e)))}get onReceiveMessage(){return this._onReceiveMessage.event}dispose(){this._disposable.dispose()}onMessageReceived(e){const t=k.get(w.current),o=e.data;if(o.packed&&o.params instanceof Uint8Array){const n=function(e,t,...o){return(t?.provider??ie).enabled(t?.logLevel??"info")?new Stopwatch(e,t,...o):void 0}(C(` deserializing msg=${e.data.method}`,t),{log:!1,logLevel:"debug"});this._textDecoder??=new TextDecoder,o.params=JSON.parse(this._textDecoder.decode(o.params)),n?.stop()}if(this.replaceIpcPromisesWithPromises(o.params),null==o.completionId)this._onReceiveMessage.fire(o);else{const e=we(o.method,o.completionId);this._pendingHandlers.get(e)?.(o)}}replaceIpcPromisesWithPromises(e){if(null!=e&&"object"==typeof e)for(const t in e){const o=e[t];f(o)?e[t]=this.getResponsePromise(o.method,o.id):this.replaceIpcPromisesWithPromises(o)}}sendCommand(e,t){const o=be();this.postMessage({id:o,scope:e.scope,method:e.method,params:t})}async sendRequest(e,t){const o=be(),n=this.getResponsePromise(e.response.method,o);return this.postMessage({id:o,scope:e.scope,method:e.method,params:t,completionId:o}),n}getResponsePromise(e,t){return new Promise(((o,n)=>{const r=we(e,t);let a;function l(){clearTimeout(a),a=void 0,this._pendingHandlers.delete(r)}a=setTimeout((()=>{l.call(this),n(new Error(`Timed out waiting for completion of ${r}`))}),60*(ee.isDebugging?60:5)*1e3),this._pendingHandlers.set(r,(e=>{if(l.call(this),e.method===m.method){const t=e.params;"rejected"===t.status?queueMicrotask((()=>n(new Error(t.reason)))):queueMicrotask((()=>o(t.value)))}else queueMicrotask((()=>o(e.params)))}))}))}setState(e){this._api.setState(e)}postMessage(e){this._api.postMessage(e)}};var ye;function we(e,t){return`${e}|${t}`}ue([J({args:{0:e=>`${e.data.id}, method=${e.data.method}`}})],ve.prototype,"onMessageReceived",1),ue([J({args:{0:e=>e.method,1:!1}})],ve.prototype,"sendCommand",1),ue([J({args:{0:e=>e.method,1:!1,2:!1}})],ve.prototype,"sendRequest",1),ue([J({args:{0:e=>`${e.id}, method=${e.method}`}})],ve.prototype,"postMessage",1),ve=ue([(ye=(e,t)=>`${e.appName}(${t})`,e=>{e[Y]=ye})],ve);const ke="gl-telemetry-fired";function _e(e,t){const o=Math.pow(10,t);return Math.round(e*o)/o}class RGBA{constructor(e,t,o,n=1){this._rgbaBrand=void 0,this.r=0|Math.min(255,Math.max(0,e)),this.g=0|Math.min(255,Math.max(0,t)),this.b=0|Math.min(255,Math.max(0,o)),this.a=_e(Math.max(Math.min(1,n),0),3)}static equals(e,t){return e.r===t.r&&e.g===t.g&&e.b===t.b&&e.a===t.a}}class HSLA{constructor(e,t,o,n){this._hslaBrand=void 0,this.h=0|Math.max(Math.min(360,e),0),this.s=_e(Math.max(Math.min(1,t),0),3),this.l=_e(Math.max(Math.min(1,o),0),3),this.a=_e(Math.max(Math.min(1,n),0),3)}static equals(e,t){return e.h===t.h&&e.s===t.s&&e.l===t.l&&e.a===t.a}static fromRGBA(e){const t=e.r/255,o=e.g/255,n=e.b/255,r=e.a,a=Math.max(t,o,n),l=Math.min(t,o,n);let c=0,d=0;const h=(l+a)/2,p=a-l;if(p>0){switch(d=Math.min(h<=.5?p/(2*h):p/(2-2*h),1),a){case t:c=(o-n)/p+(o<n?6:0);break;case o:c=(n-t)/p+2;break;case n:c=(t-o)/p+4}c*=60,c=Math.round(c)}return new HSLA(c,d,h,r)}static _hue2rgb(e,t,o){return o<0&&(o+=1),o>1&&(o-=1),o<1/6?e+6*(t-e)*o:o<.5?t:o<2/3?e+(t-e)*(2/3-o)*6:e}static toRGBA(e){const t=e.h/360,{s:o,l:n,a:r}=e;let a,l,c;if(0===o)a=l=c=n;else{const e=n<.5?n*(1+o):n+o-n*o,r=2*n-e;a=HSLA._hue2rgb(r,e,t+1/3),l=HSLA._hue2rgb(r,e,t),c=HSLA._hue2rgb(r,e,t-1/3)}return new RGBA(Math.round(255*a),Math.round(255*l),Math.round(255*c),r)}}class HSVA{constructor(e,t,o,n){this._hsvaBrand=void 0,this.h=0|Math.max(Math.min(360,e),0),this.s=_e(Math.max(Math.min(1,t),0),3),this.v=_e(Math.max(Math.min(1,o),0),3),this.a=_e(Math.max(Math.min(1,n),0),3)}static equals(e,t){return e.h===t.h&&e.s===t.s&&e.v===t.v&&e.a===t.a}static fromRGBA(e){const t=e.r/255,o=e.g/255,n=e.b/255,r=Math.max(t,o,n),a=r-Math.min(t,o,n),l=0===r?0:a/r;let c;return c=0===a?0:r===t?((o-n)/a%6+6)%6:r===o?(n-t)/a+2:(t-o)/a+4,new HSVA(Math.round(60*c),l,r,e.a)}static toRGBA(e){const{h:t,s:o,v:n,a:r}=e,a=n*o,l=a*(1-Math.abs(t/60%2-1)),c=n-a;let[d,h,p]=[0,0,0];return t<60?(d=a,h=l):t<120?(d=l,h=a):t<180?(h=a,p=l):t<240?(h=l,p=a):t<300?(d=l,p=a):t<=360&&(d=a,p=l),d=Math.round(255*(d+c)),h=Math.round(255*(h+c)),p=Math.round(255*(p+c)),new RGBA(d,h,p,r)}}function Ce(e,t){return t.getPropertyValue(e).trim()}const Ae=class _Color{static from(e){return e instanceof _Color?e:De(e)||_Color.red}static fromCssVariable(e,t){return De(Ce(e,t))||_Color.red}static fromHex(e){return Me(e)||_Color.red}static equals(e,t){return!e&&!t||!(!e||!t)&&e.equals(t)}get hsla(){return this._hsla?this._hsla:HSLA.fromRGBA(this.rgba)}get hsva(){return this._hsva?this._hsva:HSVA.fromRGBA(this.rgba)}constructor(e){if(!e)throw new Error("Color needs a value");if(e instanceof RGBA)this.rgba=e;else if(e instanceof HSLA)this._hsla=e,this.rgba=HSLA.toRGBA(e);else{if(!(e instanceof HSVA))throw new Error("Invalid color ctor argument");this._hsva=e,this.rgba=HSVA.toRGBA(e)}}equals(e){return null!=e&&(Boolean(e)&&RGBA.equals(this.rgba,e.rgba)&&HSLA.equals(this.hsla,e.hsla)&&HSVA.equals(this.hsva,e.hsva))}getRelativeLuminance(){return _e(.2126*_Color._relativeLuminanceForComponent(this.rgba.r)+.7152*_Color._relativeLuminanceForComponent(this.rgba.g)+.0722*_Color._relativeLuminanceForComponent(this.rgba.b),4)}static _relativeLuminanceForComponent(e){const t=e/255;return t<=.03928?t/12.92:Math.pow((t+.055)/1.055,2.4)}luminance(e){return function(e,t){if(0===t)return new Ee(new RGBA(0,0,0,e.rgba.a));if(1===t)return new Ee(new RGBA(255,255,255,e.rgba.a));const o=e.getRelativeLuminance();let n=20;const r=(e,o)=>{const a=e.mix(o,.5),l=a.getRelativeLuminance();return Math.abs(t-l)<1e-7||!n--?a:l>t?r(e,a):r(a,o)},a=(o>t?r(Ee.black,e):r(e,Ee.white)).rgba;return new Ee(new RGBA(a.r,a.g,a.b,e.rgba.a))}(this,e)}getContrastRatio(e){const t=this.getRelativeLuminance(),o=e.getRelativeLuminance();return t>o?(t+.05)/(o+.05):(o+.05)/(t+.05)}isDarker(){return(299*this.rgba.r+587*this.rgba.g+114*this.rgba.b)/1e3<128}isLighter(){return(299*this.rgba.r+587*this.rgba.g+114*this.rgba.b)/1e3>=128}isLighterThan(e){return this.getRelativeLuminance()>e.getRelativeLuminance()}isDarkerThan(e){return this.getRelativeLuminance()<e.getRelativeLuminance()}lighten(e){return new _Color(new HSLA(this.hsla.h,this.hsla.s,this.hsla.l+this.hsla.l*e,this.hsla.a))}darken(e){return new _Color(new HSLA(this.hsla.h,this.hsla.s,this.hsla.l-this.hsla.l*e,this.hsla.a))}transparent(e){const{r:t,g:o,b:n,a:r}=this.rgba;return new _Color(new RGBA(t,o,n,r*e))}isTransparent(){return 0===this.rgba.a}isOpaque(){return 1===this.rgba.a}opposite(){return new _Color(new RGBA(255-this.rgba.r,255-this.rgba.g,255-this.rgba.b,this.rgba.a))}blend(e){const t=e.rgba,o=this.rgba.a,n=t.a,r=o+n*(1-o);if(r<1e-6)return _Color.transparent;const a=this.rgba.r*o/r+t.r*n*(1-o)/r,l=this.rgba.g*o/r+t.g*n*(1-o)/r,c=this.rgba.b*o/r+t.b*n*(1-o)/r;return new _Color(new RGBA(a,l,c,r))}mix(e,t){return function(e,t,o){const n=e.rgba,r=t.rgba;return new Ee(new RGBA(n.r+o*(r.r-n.r),n.g+o*(r.g-n.g),n.b+o*(r.b-n.b),n.a+o*(r.a-n.a)))}(this,e,t)}makeOpaque(e){if(this.isOpaque()||1!==e.rgba.a)return this;const{r:t,g:o,b:n,a:r}=this.rgba;return new _Color(new RGBA(e.rgba.r-r*(e.rgba.r-t),e.rgba.g-r*(e.rgba.g-o),e.rgba.b-r*(e.rgba.b-n),1))}flatten(...e){const t=e.reduceRight(((e,t)=>_Color._flatten(t,e)));return _Color._flatten(this,t)}static _flatten(e,t){const o=1-e.rgba.a;return new _Color(new RGBA(o*t.rgba.r+e.rgba.a*e.rgba.r,o*t.rgba.g+e.rgba.a*e.rgba.g,o*t.rgba.b+e.rgba.a*e.rgba.b))}toString(){return this._toString||(this._toString=function(e){if(e.isOpaque())return Te(e);return Pe(e)}(this)),this._toString}static getLighterColor(e,t,o){if(e.isLighterThan(t))return e;o=o||.5;const n=e.getRelativeLuminance(),r=t.getRelativeLuminance();return o=o*(r-n)/r,e.lighten(o)}static getDarkerColor(e,t,o){if(e.isDarkerThan(t))return e;o=o||.5;const n=e.getRelativeLuminance();return o=o*(n-t.getRelativeLuminance())/n,e.darken(o)}};Ae.white=new Ae(new RGBA(255,255,255,1)),Ae.black=new Ae(new RGBA(0,0,0,1)),Ae.red=new Ae(new RGBA(255,0,0,1)),Ae.blue=new Ae(new RGBA(0,0,255,1)),Ae.green=new Ae(new RGBA(0,255,0,1)),Ae.cyan=new Ae(new RGBA(0,255,255,1)),Ae.lightgrey=new Ae(new RGBA(211,211,211,1)),Ae.transparent=new Ae(new RGBA(0,0,0,0));let Ee=Ae;function Pe(e){return`rgba(${e.rgba.r}, ${e.rgba.g}, ${e.rgba.b}, ${Number(e.rgba.a.toFixed(2))})`}function Re(e){const t=e.toString(16);return 2!==t.length?`0${t}`:t}function Te(e){return`#${Re(e.rgba.r)}${Re(e.rgba.g)}${Re(e.rgba.b)}`}const Oe=/^((?:rgb|hsl)a?)\((-?\d+(?:%|deg)?)[,\s]+(-?\d+%?)[,\s]+(-?\d+%?)[,\s]*(-?[\d.]+%?)?\)$/i;function De(e){if(0===(e=e.trim()).length)return null;if(e.charCodeAt(0)===A.Hash)return Me(e);const t=Oe.exec(e);if(null==t)return null;const o=t[1];let n;switch(o){case"rgb":case"hsl":n=[parseInt(t[2],10),parseInt(t[3],10),parseInt(t[4],10),1];break;case"rgba":case"hsla":n=[parseInt(t[2],10),parseInt(t[3],10),parseInt(t[4],10),parseFloat(t[5])];break;default:return null}switch(o){case"rgb":case"rgba":return new Ee(new RGBA(n[0],n[1],n[2],n[3]));case"hsl":case"hsla":return new Ee(new HSLA(n[0],n[1],n[2],n[3]))}return Ee.red}function Me(e){const t=(e=e.trim()).length;if(0===t)return null;if(e.charCodeAt(0)!==A.Hash)return null;switch(t){case 7:{const t=16*ze(e.charCodeAt(1))+ze(e.charCodeAt(2)),o=16*ze(e.charCodeAt(3))+ze(e.charCodeAt(4)),n=16*ze(e.charCodeAt(5))+ze(e.charCodeAt(6));return new Ee(new RGBA(t,o,n,1))}case 9:{const t=16*ze(e.charCodeAt(1))+ze(e.charCodeAt(2)),o=16*ze(e.charCodeAt(3))+ze(e.charCodeAt(4)),n=16*ze(e.charCodeAt(5))+ze(e.charCodeAt(6)),r=16*ze(e.charCodeAt(7))+ze(e.charCodeAt(8));return new Ee(new RGBA(t,o,n,r/255))}case 4:{const t=ze(e.charCodeAt(1)),o=ze(e.charCodeAt(2)),n=ze(e.charCodeAt(3));return new Ee(new RGBA(16*t+t,16*o+o,16*n+n))}case 5:{const t=ze(e.charCodeAt(1)),o=ze(e.charCodeAt(2)),n=ze(e.charCodeAt(3)),r=ze(e.charCodeAt(4));return new Ee(new RGBA(16*t+t,16*o+o,16*n+n,(16*r+r)/255))}default:return null}}function ze(e){switch(e){case A.Digit0:return 0;case A.Digit1:return 1;case A.Digit2:return 2;case A.Digit3:return 3;case A.Digit4:return 4;case A.Digit5:return 5;case A.Digit6:return 6;case A.Digit7:return 7;case A.Digit8:return 8;case A.Digit9:return 9;case A.a:case A.A:return 10;case A.b:case A.B:return 11;case A.c:case A.C:return 12;case A.d:case A.D:return 13;case A.e:case A.E:return 14;case A.f:case A.F:return 15}return 0}const Ie=new ae,je=Ie.event;function Ne(e){const t=document.documentElement,o=window.getComputedStyle(t),n=document.body.classList,r=n.contains("vscode-light")||n.contains("vscode-high-contrast-light"),a=n.contains("vscode-high-contrast")||n.contains("vscode-high-contrast-light"),l=Ce("--vscode-editor-background",o);let c=Ce("--vscode-editor-foreground",o);return c||(c=Ce("--vscode-foreground",o)),{colors:{background:l,foreground:c},computedStyle:o,isLightTheme:r,isHighContrastTheme:a,isInitializing:null==e}}class App{constructor(e){this.appName=e;const t=[],o=Ne();if(null!=this.onThemeUpdated&&(this.onThemeUpdated(o),t.push(je(this.onThemeUpdated,this))),this.state=window.bootstrap,window.bootstrap=void 0,this.placement=document.body.getAttribute("data-placement")??"editor",this._logger=new LoggerContext(e),this.log("opening..."),this._api=fe(),this._hostIpc=new ve(this.appName),t.push(this._hostIpc),this._promos=new PromosContext(this._hostIpc),t.push(this._promos),this._telemetry=new TelemetryContext(this._hostIpc),t.push(this._telemetry),new i(document.body,{context:"ipc",initialValue:this._hostIpc}),new i(document.body,{context:"logger",initialValue:this._logger}),new i(document.body,{context:"promos",initialValue:this._promos}),new i(document.body,{context:"telemetry",initialValue:this._telemetry}),null!=this.state){const e=this.getState();this.state.timestamp>=(e?.timestamp??0)?this._api.setState(this.state):this.state=e}t.push(function(){const e=new MutationObserver((e=>{Ie.fire(Ne(e))}));return e.observe(document.body,{attributeFilter:["class"]}),{dispose:()=>e.disconnect()}}()),requestAnimationFrame((()=>{this.log("initializing...");try{this.onInitialize?.(),this.bind(),null!=this.onMessageReceived&&t.push(this._hostIpc.onReceiveMessage((e=>{if(!0===b.is(e))window.dispatchEvent(new CustomEvent(e.params.focused?"webview-focus":"webview-blur"));else this.onMessageReceived(e)}))),this.sendCommand(d,void 0),this.onInitialized?.()}finally{this.log("initialized"),document.body.classList.contains("preload")&&setTimeout((()=>{document.body.classList.remove("preload")}),500)}})),t.push(oe.on(window,"pagehide",(()=>{t?.forEach((e=>e.dispose())),this.bindDisposables?.forEach((e=>e.dispose())),this.bindDisposables=void 0}))),t.push(oe.on(window,ke,(e=>{this._telemetry.sendEvent(e.detail)}))),this.log("opened")}bind(){document.querySelectorAll("a").forEach((e=>{e.href===e.title&&e.removeAttribute("title")})),this.bindDisposables?.forEach((e=>e.dispose())),this.bindDisposables=this.onBind?.(),null==this.bindDisposables&&(this.bindDisposables=[]);const e=r((e=>{this.sendCommand(h,e)}),150);this.bindDisposables.push(oe.on(document,"focusin",(t=>{const o=t.composedPath().some((e=>"INPUT"===e.tagName));!0===this._focused&&this._inputFocused===o||(this._focused=!0,this._inputFocused=o,e({focused:!0,inputFocused:o}))})),oe.on(document,"focusout",(()=>{!1===this._focused&&!1===this._inputFocused||(this._focused=!1,this._inputFocused=!1,e({focused:!1,inputFocused:!1}))})))}log(e,...t){this._logger.log(e,...t)}getState(){return this._api.getState()}sendCommand(e,t){this._hostIpc.sendCommand(e,t)}sendRequest(e,t){return this._hostIpc.sendRequest(e,t)}setState(e){this._api.setState(e)}}var Ue={408:(e,t)=>{var o=Symbol.for("react.element"),n=Symbol.for("react.portal"),r=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.provider"),d=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),u=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),f=Symbol.iterator,m={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},b=Object.assign,v={};function y(e,t,o){this.props=e,this.context=t,this.refs=v,this.updater=o||m}function w(){}function k(e,t,o){this.props=e,this.context=t,this.refs=v,this.updater=o||m}y.prototype.isReactComponent={},y.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},y.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},w.prototype=y.prototype;var x=k.prototype=new w;x.constructor=k,b(x,y.prototype),x.isPureReactComponent=!0;var _=Array.isArray,C=Object.prototype.hasOwnProperty,S={current:null},A={key:!0,ref:!0,__self:!0,__source:!0};function E(e,t,n){var r,a={},l=null,c=null;if(null!=t)for(r in void 0!==t.ref&&(c=t.ref),void 0!==t.key&&(l=""+t.key),t)C.call(t,r)&&!A.hasOwnProperty(r)&&(a[r]=t[r]);var d=arguments.length-2;if(1===d)a.children=n;else if(1<d){for(var h=Array(d),p=0;p<d;p++)h[p]=arguments[p+2];a.children=h}if(e&&e.defaultProps)for(r in d=e.defaultProps)void 0===a[r]&&(a[r]=d[r]);return{$$typeof:o,type:e,key:l,ref:c,props:a,_owner:S.current}}function P(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var R=/\/+/g;function T(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function O(e,t,r,a,l){var c=typeof e;"undefined"!==c&&"boolean"!==c||(e=null);var d=!1;if(null===e)d=!0;else switch(c){case"string":case"number":d=!0;break;case"object":switch(e.$$typeof){case o:case n:d=!0}}if(d)return l=l(d=e),e=""===a?"."+T(d,0):a,_(l)?(r="",null!=e&&(r=e.replace(R,"$&/")+"/"),O(l,t,r,"",(function(e){return e}))):null!=l&&(P(l)&&(l=function(e,t){return{$$typeof:o,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(l,r+(!l.key||d&&d.key===l.key?"":(""+l.key).replace(R,"$&/")+"/")+e)),t.push(l)),1;if(d=0,a=""===a?".":a+":",_(e))for(var h=0;h<e.length;h++){var p=a+T(c=e[h],h);d+=O(c,t,r,p,l)}else if(p=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=f&&e[f]||e["@@iterator"])?e:null}(e),"function"==typeof p)for(e=p.call(e),h=0;!(c=e.next()).done;)d+=O(c=c.value,t,r,p=a+T(c,h++),l);else if("object"===c)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return d}function D(e,t,o){if(null==e)return e;var n=[],r=0;return O(e,n,"","",(function(e){return t.call(o,e,r++)})),n}function M(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var L={current:null},I={transition:null},B={ReactCurrentDispatcher:L,ReactCurrentBatchConfig:I,ReactCurrentOwner:S};t.Children={map:D,forEach:function(e,t,o){D(e,(function(){t.apply(this,arguments)}),o)},count:function(e){var t=0;return D(e,(function(){t++})),t},toArray:function(e){return D(e,(function(e){return e}))||[]},only:function(e){if(!P(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},t.Component=y,t.Fragment=r,t.Profiler=l,t.PureComponent=k,t.StrictMode=a,t.Suspense=p,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=B,t.cloneElement=function(e,t,n){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=b({},e.props),a=e.key,l=e.ref,c=e._owner;if(null!=t){if(void 0!==t.ref&&(l=t.ref,c=S.current),void 0!==t.key&&(a=""+t.key),e.type&&e.type.defaultProps)var d=e.type.defaultProps;for(h in t)C.call(t,h)&&!A.hasOwnProperty(h)&&(r[h]=void 0===t[h]&&void 0!==d?d[h]:t[h])}var h=arguments.length-2;if(1===h)r.children=n;else if(1<h){d=Array(h);for(var p=0;p<h;p++)d[p]=arguments[p+2];r.children=d}return{$$typeof:o,type:e.type,key:a,ref:l,props:r,_owner:c}},t.createContext=function(e){return(e={$$typeof:d,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:c,_context:e},e.Consumer=e},t.createElement=E,t.createFactory=function(e){var t=E.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:h,render:e}},t.isValidElement=P,t.lazy=function(e){return{$$typeof:g,_payload:{_status:-1,_result:e},_init:M}},t.memo=function(e,t){return{$$typeof:u,type:e,compare:void 0===t?null:t}},t.startTransition=function(e){var t=I.transition;I.transition={};try{e()}finally{I.transition=t}},t.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")},t.useCallback=function(e,t){return L.current.useCallback(e,t)},t.useContext=function(e){return L.current.useContext(e)},t.useDebugValue=function(){},t.useDeferredValue=function(e){return L.current.useDeferredValue(e)},t.useEffect=function(e,t){return L.current.useEffect(e,t)},t.useId=function(){return L.current.useId()},t.useImperativeHandle=function(e,t,o){return L.current.useImperativeHandle(e,t,o)},t.useInsertionEffect=function(e,t){return L.current.useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return L.current.useLayoutEffect(e,t)},t.useMemo=function(e,t){return L.current.useMemo(e,t)},t.useReducer=function(e,t,o){return L.current.useReducer(e,t,o)},t.useRef=function(e){return L.current.useRef(e)},t.useState=function(e){return L.current.useState(e)},t.useSyncExternalStore=function(e,t,o){return L.current.useSyncExternalStore(e,t,o)},t.useTransition=function(){return L.current.useTransition()},t.version="18.2.0"},294:(e,t,o)=>{e.exports=o(408)}},Fe={};function qe(e){var t=Fe[e];if(void 0!==t)return t.exports;var o=Fe[e]={exports:{}};return Ue[e](o,o.exports,qe),o.exports}qe.d=(e,t)=>{for(var o in t)qe.o(t,o)&&!qe.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},qe.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);var Ve={};(()=>{qe.d(Ve,{Tn:()=>Se,qE:()=>He,HE:()=>Le,Ct:()=>Be,zx:()=>Ge,M1:()=>Je,sX:()=>bo,D0:()=>yo,fs:()=>vo,Tw:()=>zt,ud:()=>jt,wt:()=>Nt,ne:()=>Ft,Ku:()=>Vt,FU:()=>Kt,XO:()=>di,Ze:()=>hi,K$:()=>pi,cX:()=>wi,Js:()=>ki,J9:()=>xi,si:()=>ri,sg:()=>_i,hW:()=>Ci,II:()=>Ro,v2:()=>Mo,sN:()=>Do,Lb:()=>Ho,J2:()=>xe,$$:()=>po,Vp:()=>Bo,u:()=>$e,fW:()=>Si,WV:()=>le,h4:()=>ae,kZ:()=>re});const e=globalThis,t=e.ShadowRoot&&(void 0===e.ShadyCSS||e.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,o=Symbol(),n=new WeakMap;class s{constructor(e,t,n){if(this._$cssResult$=!0,n!==o)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const o=this.t;if(t&&void 0===e){const t=void 0!==o&&1===o.length;t&&(e=n.get(o)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),t&&n.set(o,e))}return e}toString(){return this.cssText}}const r=(e,...t)=>{const n=1===e.length?e[0]:t.reduce(((t,o,n)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+e[n+1]),e[0]);return new s(n,e,o)},a=(o,n)=>{if(t)o.adoptedStyleSheets=n.map((e=>e instanceof CSSStyleSheet?e:e.styleSheet));else for(const t of n){const n=document.createElement("style"),r=e.litNonce;void 0!==r&&n.setAttribute("nonce",r),n.textContent=t.cssText,o.appendChild(n)}},l=t?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(const o of e.cssRules)t+=o.cssText;return(e=>new s("string"==typeof e?e:e+"",void 0,o))(t)})(e):e,{is:c,defineProperty:d,getOwnPropertyDescriptor:h,getOwnPropertyNames:p,getOwnPropertySymbols:u,getPrototypeOf:g}=Object,f=globalThis,m=f.trustedTypes,b=m?m.emptyScript:"",v=f.reactiveElementPolyfillSupport,y=(e,t)=>e,w={toAttribute(e,t){switch(t){case Boolean:e=e?b:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let o=e;switch(t){case Boolean:o=null!==e;break;case Number:o=null===e?null:Number(e);break;case Object:case Array:try{o=JSON.parse(e)}catch(e){o=null}}return o}},k=(e,t)=>!c(e,t),x={attribute:!0,type:String,converter:w,reflect:!1,hasChanged:k};Symbol.metadata??=Symbol("metadata"),f.litPropertyMetadata??=new WeakMap;class $ extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=x){if(t.state&&(t.attribute=!1),this._$Ei(),this.elementProperties.set(e,t),!t.noAccessor){const o=Symbol(),n=this.getPropertyDescriptor(e,o,t);void 0!==n&&d(this.prototype,e,n)}}static getPropertyDescriptor(e,t,o){const{get:n,set:r}=h(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get(){return n?.call(this)},set(t){const a=n?.call(this);r.call(this,t),this.requestUpdate(e,a,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??x}static _$Ei(){if(this.hasOwnProperty(y("elementProperties")))return;const e=g(this);e.finalize(),void 0!==e.l&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(y("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(y("properties"))){const e=this.properties,t=[...p(e),...u(e)];for(const o of t)this.createProperty(o,e[o])}const e=this[Symbol.metadata];if(null!==e){const t=litPropertyMetadata.get(e);if(void 0!==t)for(const[e,o]of t)this.elementProperties.set(e,o)}this._$Eh=new Map;for(const[e,t]of this.elementProperties){const o=this._$Eu(e,t);void 0!==o&&this._$Eh.set(o,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const o=new Set(e.flat(1/0).reverse());for(const e of o)t.unshift(l(e))}else void 0!==e&&t.push(l(e));return t}static _$Eu(e,t){const o=t.attribute;return!1===o?void 0:"string"==typeof o?o:"string"==typeof e?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$Eg=new Promise((e=>this.enableUpdating=e)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((e=>e(this)))}addController(e){(this._$ES??=[]).push(e),void 0!==this.renderRoot&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$ES?.splice(this._$ES.indexOf(e)>>>0,1)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const o of t.keys())this.hasOwnProperty(o)&&(e.set(o,this[o]),delete this[o]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return a(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$ES?.forEach((e=>e.hostConnected?.()))}enableUpdating(e){}disconnectedCallback(){this._$ES?.forEach((e=>e.hostDisconnected?.()))}attributeChangedCallback(e,t,o){this._$AK(e,o)}_$EO(e,t){const o=this.constructor.elementProperties.get(e),n=this.constructor._$Eu(e,o);if(void 0!==n&&!0===o.reflect){const r=(void 0!==o.converter?.toAttribute?o.converter:w).toAttribute(t,o.type);this._$Em=e,null==r?this.removeAttribute(n):this.setAttribute(n,r),this._$Em=null}}_$AK(e,t){const o=this.constructor,n=o._$Eh.get(e);if(void 0!==n&&this._$Em!==n){const e=o.getPropertyOptions(n),r="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==e.converter?.fromAttribute?e.converter:w;this._$Em=n,this[n]=r.fromAttribute(t,e.type),this._$Em=null}}requestUpdate(e,t,o,n=!1,r){if(void 0!==e){if(o??=this.constructor.getPropertyOptions(e),!(o.hasChanged??k)(n?r:this[e],t))return;this.C(e,t,o)}!1===this.isUpdatePending&&(this._$Eg=this._$EP())}C(e,t,o){this._$AL.has(e)||this._$AL.set(e,t),!0===o.reflect&&this._$Em!==e&&(this._$Ej??=new Set).add(e)}async _$EP(){this.isUpdatePending=!0;try{await this._$Eg}catch(e){Promise.reject(e)}const e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this._$Ep){for(const[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}const e=this.constructor.elementProperties;if(e.size>0)for(const[t,o]of e)!0!==o.wrapped||this._$AL.has(t)||void 0===this[t]||this.C(t,this[t],o)}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$ES?.forEach((e=>e.hostUpdate?.())),this.update(t)):this._$ET()}catch(t){throw e=!1,this._$ET(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$ES?.forEach((e=>e.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$ET(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Eg}shouldUpdate(e){return!0}update(e){this._$Ej&&=this._$Ej.forEach((e=>this._$EO(e,this[e]))),this._$ET()}updated(e){}firstUpdated(e){}}$.elementStyles=[],$.shadowRootOptions={mode:"open"},$[y("elementProperties")]=new Map,$[y("finalized")]=new Map,v?.({ReactiveElement:$}),(f.reactiveElementVersions??=[]).push("2.0.0");const _=globalThis,C=_.trustedTypes,S=C?C.createPolicy("lit-html",{createHTML:e=>e}):void 0,A="$lit$",E=`lit$${(Math.random()+"").slice(9)}$`,P="?"+E,R=`<${P}>`,T=document,O=()=>T.createComment(""),D=e=>null===e||"object"!=typeof e&&"function"!=typeof e,M=Array.isArray,L="[ \t\n\f\r]",I=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,B=/-->/g,j=/>/g,N=RegExp(`>|${L}(?:([^\\s"'>=/]+)(${L}*=${L}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),U=/'/g,F=/"/g,H=/^(?:script|style|textarea|title)$/i,q=e=>(t,...o)=>({_$litType$:e,strings:t,values:o}),V=q(1),W=(q(2),Symbol.for("lit-noChange")),G=Symbol.for("lit-nothing"),K=new WeakMap,Z=T.createTreeWalker(T,129);function Y(e,t){if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==S?S.createHTML(t):t}class Q{constructor({strings:e,_$litType$:t},o){let n;this.parts=[];let r=0,a=0;const l=e.length-1,c=this.parts,[d,h]=((e,t)=>{const o=e.length-1,n=[];let r,a=2===t?"<svg>":"",l=I;for(let t=0;t<o;t++){const o=e[t];let c,d,h=-1,p=0;for(;p<o.length&&(l.lastIndex=p,d=l.exec(o),null!==d);)p=l.lastIndex,l===I?"!--"===d[1]?l=B:void 0!==d[1]?l=j:void 0!==d[2]?(H.test(d[2])&&(r=RegExp("</"+d[2],"g")),l=N):void 0!==d[3]&&(l=N):l===N?">"===d[0]?(l=r??I,h=-1):void 0===d[1]?h=-2:(h=l.lastIndex-d[2].length,c=d[1],l=void 0===d[3]?N:'"'===d[3]?F:U):l===F||l===U?l=N:l===B||l===j?l=I:(l=N,r=void 0);const u=l===N&&e[t+1].startsWith("/>")?" ":"";a+=l===I?o+R:h>=0?(n.push(c),o.slice(0,h)+A+o.slice(h)+E+u):o+E+(-2===h?t:u)}return[Y(e,a+(e[o]||"<?>")+(2===t?"</svg>":"")),n]})(e,t);if(this.el=Q.createElement(d,o),Z.currentNode=this.el.content,2===t){const e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;null!==(n=Z.nextNode())&&c.length<l;){if(1===n.nodeType){if(n.hasAttributes())for(const e of n.getAttributeNames())if(e.endsWith(A)){const t=h[a++],o=n.getAttribute(e).split(E),l=/([.?@])?(.*)/.exec(t);c.push({type:1,index:r,name:l[2],strings:o,ctor:"."===l[1]?it:"?"===l[1]?rt:"@"===l[1]?st:nt}),n.removeAttribute(e)}else e.startsWith(E)&&(c.push({type:6,index:r}),n.removeAttribute(e));if(H.test(n.tagName)){const e=n.textContent.split(E),t=e.length-1;if(t>0){n.textContent=C?C.emptyScript:"";for(let o=0;o<t;o++)n.append(e[o],O()),Z.nextNode(),c.push({type:2,index:++r});n.append(e[t],O())}}}else if(8===n.nodeType)if(n.data===P)c.push({type:2,index:r});else{let e=-1;for(;-1!==(e=n.data.indexOf(E,e+1));)c.push({type:7,index:r}),e+=E.length-1}r++}}static createElement(e,t){const o=T.createElement("template");return o.innerHTML=e,o}}function J(e,t,o=e,n){if(t===W)return t;let r=void 0!==n?o._$Co?.[n]:o._$Cl;const a=D(t)?void 0:t._$litDirective$;return r?.constructor!==a&&(r?._$AO?.(!1),void 0===a?r=void 0:(r=new a(e),r._$AT(e,o,n)),void 0!==n?(o._$Co??=[])[n]=r:o._$Cl=r),void 0!==r&&(t=J(e,r._$AS(e,t.values),r,n)),t}class et{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:o}=this._$AD,n=(e?.creationScope??T).importNode(t,!0);Z.currentNode=n;let r=Z.nextNode(),a=0,l=0,c=o[0];for(;void 0!==c;){if(a===c.index){let t;2===c.type?t=new ot(r,r.nextSibling,this,e):1===c.type?t=new c.ctor(r,c.name,c.strings,this,e):6===c.type&&(t=new at(r,this,e)),this._$AV.push(t),c=o[++l]}a!==c?.index&&(r=Z.nextNode(),a++)}return Z.currentNode=T,n}p(e){let t=0;for(const o of this._$AV)void 0!==o&&(void 0!==o.strings?(o._$AI(e,o,t),t+=o.strings.length-2):o._$AI(e[t])),t++}}class ot{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,o,n){this.type=2,this._$AH=G,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=o,this.options=n,this._$Cv=n?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return void 0!==t&&11===e?.nodeType&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=J(this,e,t),D(e)?e===G||null==e||""===e?(this._$AH!==G&&this._$AR(),this._$AH=G):e!==this._$AH&&e!==W&&this._(e):void 0!==e._$litType$?this.g(e):void 0!==e.nodeType?this.$(e):(e=>M(e)||"function"==typeof e?.[Symbol.iterator])(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==G&&D(this._$AH)?this._$AA.nextSibling.data=e:this.$(T.createTextNode(e)),this._$AH=e}g(e){const{values:t,_$litType$:o}=e,n="number"==typeof o?this._$AC(e):(void 0===o.el&&(o.el=Q.createElement(Y(o.h,o.h[0]),this.options)),o);if(this._$AH?._$AD===n)this._$AH.p(t);else{const e=new et(n,this),o=e.u(this.options);e.p(t),this.$(o),this._$AH=e}}_$AC(e){let t=K.get(e.strings);return void 0===t&&K.set(e.strings,t=new Q(e)),t}T(e){M(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let o,n=0;for(const r of e)n===t.length?t.push(o=new ot(this.k(O()),this.k(O()),this,this.options)):o=t[n],o._$AI(r),n++;n<t.length&&(this._$AR(o&&o._$AB.nextSibling,n),t.length=n)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e&&e!==this._$AB;){const t=e.nextSibling;e.remove(),e=t}}setConnected(e){void 0===this._$AM&&(this._$Cv=e,this._$AP?.(e))}}class nt{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,o,n,r){this.type=1,this._$AH=G,this._$AN=void 0,this.element=e,this.name=t,this._$AM=n,this.options=r,o.length>2||""!==o[0]||""!==o[1]?(this._$AH=Array(o.length-1).fill(new String),this.strings=o):this._$AH=G}_$AI(e,t=this,o,n){const r=this.strings;let a=!1;if(void 0===r)e=J(this,e,t,0),a=!D(e)||e!==this._$AH&&e!==W,a&&(this._$AH=e);else{const n=e;let l,c;for(e=r[0],l=0;l<r.length-1;l++)c=J(this,n[o+l],t,l),c===W&&(c=this._$AH[l]),a||=!D(c)||c!==this._$AH[l],c===G?e=G:e!==G&&(e+=(c??"")+r[l+1]),this._$AH[l]=c}a&&!n&&this.j(e)}j(e){e===G?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class it extends nt{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===G?void 0:e}}class rt extends nt{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==G)}}class st extends nt{constructor(e,t,o,n,r){super(e,t,o,n,r),this.type=5}_$AI(e,t=this){if((e=J(this,e,t,0)??G)===W)return;const o=this._$AH,n=e===G&&o!==G||e.capture!==o.capture||e.once!==o.once||e.passive!==o.passive,r=e!==G&&(o===G||n);n&&this.element.removeEventListener(this.name,this,o),r&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}}class at{constructor(e,t,o){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=o}get _$AU(){return this._$AM._$AU}_$AI(e){J(this,e)}}const X=_.litHtmlPolyfillSupport;X?.(Q,ot),(_.litHtmlVersions??=[]).push("3.0.0");class ct extends ${constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=((e,t,o)=>{const n=o?.renderBefore??t;let r=n._$litPart$;if(void 0===r){const e=o?.renderBefore??null;n._$litPart$=r=new ot(t.insertBefore(O(),e),e,void 0,o??{})}return r._$AI(e),r})(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return W}}ct._$litElement$=!0,ct.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:ct});const ee=globalThis.litElementPolyfillSupport;ee?.({LitElement:ct}),(globalThis.litElementVersions??=[]).push("4.0.0");const te={attribute:!0,type:String,converter:w,reflect:!1,hasChanged:k},ie=(e=te,t,o)=>{const{kind:n,metadata:r}=o;let a=globalThis.litPropertyMetadata.get(r);if(void 0===a&&globalThis.litPropertyMetadata.set(r,a=new Map),a.set(o.name,e),"accessor"===n){const{name:n}=o;return{set(o){const r=t.get.call(this);t.set.call(this,o),this.requestUpdate(n,r,e)},init(t){return void 0!==t&&this.C(n,void 0,e),t}}}if("setter"===n){const{name:n}=o;return function(o){const r=this[n];t.call(this,o),this.requestUpdate(n,r,e)}}throw Error("Unsupported decorator location: "+n)};function oe(e){return(t,o)=>"object"==typeof o?ie(e,t,o):((e,t,o)=>{const n=t.hasOwnProperty(o);return t.constructor.createProperty(o,n?{...e,wrapped:!0}:e),n?Object.getOwnPropertyDescriptor(t,o):void 0})(e,t,o)}const ne=(e,t,o)=>(o.configurable=!0,o.enumerable=!0,Reflect.decorate&&"object"!=typeof t&&Object.defineProperty(e,t,o),o);function se(e,t){return(o,n,r)=>{const a=t=>t.renderRoot?.querySelector(e)??null;if(t){const{get:e,set:l}="object"==typeof n?o:r??(()=>{const e=Symbol();return{get(){return this[e]},set(t){this[e]=t}}})();return ne(o,n,{get(){if(t){let t=e.call(this);return void 0===t&&(t=a(this),l.call(this,t)),t}return a(this)}})}return ne(o,n,{get(){return a(this)}})}}class gt extends ct{}const re=r`.sr-only,.sr-only-focusable:not(:active):not(:focus){clip:rect(0 0 0 0);clip-path:inset(50%);width:1px;height:1px;overflow:hidden;position:absolute;white-space:nowrap}`,ae=r``,le=r`:host{box-sizing:border-box}:host *,:host ::after,:host ::before{box-sizing:inherit}[hidden]{display:none!important}`,ce=Math.min,de=Math.max,he=Math.round,pe=(Math.floor,e=>({x:e,y:e})),ue={left:"right",right:"left",bottom:"top",top:"bottom"},ge={start:"end",end:"start"};function fe(e,t,o){return de(e,ce(t,o))}function me(e,t){return"function"==typeof e?e(t):e}function be(e){return e.split("-")[0]}function ve(e){return e.split("-")[1]}function ye(e){return"x"===e?"y":"x"}function we(e){return"y"===e?"height":"width"}function ke(e){return["top","bottom"].includes(be(e))?"y":"x"}function _e(e){return ye(ke(e))}function Ce(e){return e.replace(/start|end/g,(e=>ge[e]))}function Ae(e){return e.replace(/left|right|bottom|top/g,(e=>ue[e]))}function Ee(e){return"number"!=typeof e?function(e){return{top:0,right:0,bottom:0,left:0,...e}}(e):{top:e,right:e,bottom:e,left:e}}function Pe(e){return{...e,top:e.y,left:e.x,right:e.x+e.width,bottom:e.y+e.height}}function Re(e,t,o){let{reference:n,floating:r}=e;const a=ke(t),l=_e(t),c=we(l),d=be(t),h="y"===a,p=n.x+n.width/2-r.width/2,u=n.y+n.height/2-r.height/2,g=n[c]/2-r[c]/2;let f;switch(d){case"top":f={x:p,y:n.y-r.height};break;case"bottom":f={x:p,y:n.y+n.height};break;case"right":f={x:n.x+n.width,y:u};break;case"left":f={x:n.x-r.width,y:u};break;default:f={x:n.x,y:n.y}}switch(ve(t)){case"start":f[l]-=g*(o&&h?-1:1);break;case"end":f[l]+=g*(o&&h?-1:1)}return f}async function Te(e,t){var o;void 0===t&&(t={});const{x:n,y:r,platform:a,rects:l,elements:c,strategy:d}=e,{boundary:h="clippingAncestors",rootBoundary:p="viewport",elementContext:u="floating",altBoundary:g=!1,padding:f=0}=me(t,e),m=Ee(f),b=c[g?"floating"===u?"reference":"floating":u],v=Pe(await a.getClippingRect({element:null==(o=await(null==a.isElement?void 0:a.isElement(b)))||o?b:b.contextElement||await(null==a.getDocumentElement?void 0:a.getDocumentElement(c.floating)),boundary:h,rootBoundary:p,strategy:d})),y="floating"===u?{...l.floating,x:n,y:r}:l.reference,w=await(null==a.getOffsetParent?void 0:a.getOffsetParent(c.floating)),k=await(null==a.isElement?void 0:a.isElement(w))&&await(null==a.getScale?void 0:a.getScale(w))||{x:1,y:1},x=Pe(a.convertOffsetParentRelativeRectToViewportRelativeRect?await a.convertOffsetParentRelativeRectToViewportRelativeRect({rect:y,offsetParent:w,strategy:d}):y);return{top:(v.top-x.top+m.top)/k.y,bottom:(x.bottom-v.bottom+m.bottom)/k.y,left:(v.left-x.left+m.left)/k.x,right:(x.right-v.right+m.right)/k.x}}const Oe=function(e){return void 0===e&&(e={}),{name:"flip",options:e,async fn(t){var o,n;const{placement:r,middlewareData:a,rects:l,initialPlacement:c,platform:d,elements:h}=t,{mainAxis:p=!0,crossAxis:u=!0,fallbackPlacements:g,fallbackStrategy:f="bestFit",fallbackAxisSideDirection:m="none",flipAlignment:b=!0,...v}=me(e,t);if(null!=(o=a.arrow)&&o.alignmentOffset)return{};const y=be(r),w=be(c)===c,k=await(null==d.isRTL?void 0:d.isRTL(h.floating)),x=g||(w||!b?[Ae(c)]:function(e){const t=Ae(e);return[Ce(e),t,Ce(t)]}(c));g||"none"===m||x.push(...function(e,t,o,n){const r=ve(e);let a=function(e,t,o){const n=["left","right"],r=["right","left"],a=["top","bottom"],l=["bottom","top"];switch(e){case"top":case"bottom":return o?t?r:n:t?n:r;case"left":case"right":return t?a:l;default:return[]}}(be(e),"start"===o,n);return r&&(a=a.map((e=>e+"-"+r)),t&&(a=a.concat(a.map(Ce)))),a}(c,b,m,k));const _=[c,...x],C=await Te(t,v),S=[];let A=(null==(n=a.flip)?void 0:n.overflows)||[];if(p&&S.push(C[y]),u){const e=function(e,t,o){void 0===o&&(o=!1);const n=ve(e),r=_e(e),a=we(r);let l="x"===r?n===(o?"end":"start")?"right":"left":"start"===n?"bottom":"top";return t.reference[a]>t.floating[a]&&(l=Ae(l)),[l,Ae(l)]}(r,l,k);S.push(C[e[0]],C[e[1]])}if(A=[...A,{placement:r,overflows:S}],!S.every((e=>e<=0))){var E,P;const e=((null==(E=a.flip)?void 0:E.index)||0)+1,t=_[e];if(t)return{data:{index:e,overflows:A},reset:{placement:t}};let o=null==(P=A.filter((e=>e.overflows[0]<=0)).sort(((e,t)=>e.overflows[1]-t.overflows[1]))[0])?void 0:P.placement;if(!o)switch(f){case"bestFit":{var R;const e=null==(R=A.map((e=>[e.placement,e.overflows.filter((e=>e>0)).reduce(((e,t)=>e+t),0)])).sort(((e,t)=>e[1]-t[1]))[0])?void 0:R[0];e&&(o=e);break}case"initialPlacement":o=c}if(r!==o)return{reset:{placement:o}}}return{}}}},De=function(e){return void 0===e&&(e=0),{name:"offset",options:e,async fn(t){const{x:o,y:n}=t,r=await async function(e,t){const{placement:o,platform:n,elements:r}=e,a=await(null==n.isRTL?void 0:n.isRTL(r.floating)),l=be(o),c=ve(o),d="y"===ke(o),h=["left","top"].includes(l)?-1:1,p=a&&d?-1:1,u=me(t,e);let{mainAxis:g,crossAxis:f,alignmentAxis:m}="number"==typeof u?{mainAxis:u,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...u};return c&&"number"==typeof m&&(f="end"===c?-1*m:m),d?{x:f*p,y:g*h}:{x:g*h,y:f*p}}(t,e);return{x:o+r.x,y:n+r.y,data:r}}}};function Me(e){return je(e)?(e.nodeName||"").toLowerCase():"#document"}function ze(e){var t;return(null==e||null==(t=e.ownerDocument)?void 0:t.defaultView)||window}function Ie(e){var t;return null==(t=(je(e)?e.ownerDocument:e.document)||window.document)?void 0:t.documentElement}function je(e){return e instanceof Node||e instanceof ze(e).Node}function Ne(e){return e instanceof Element||e instanceof ze(e).Element}function Ue(e){return e instanceof HTMLElement||e instanceof ze(e).HTMLElement}function Fe(e){return"undefined"!=typeof ShadowRoot&&(e instanceof ShadowRoot||e instanceof ze(e).ShadowRoot)}function We(e){const{overflow:t,overflowX:o,overflowY:n,display:r}=Xe(e);return/auto|scroll|overlay|hidden|clip/.test(t+n+o)&&!["inline","contents"].includes(r)}function Ke(e){return["table","td","th"].includes(Me(e))}function Ze(e){const t=Ye(),o=Xe(e);return"none"!==o.transform||"none"!==o.perspective||!!o.containerType&&"normal"!==o.containerType||!t&&!!o.backdropFilter&&"none"!==o.backdropFilter||!t&&!!o.filter&&"none"!==o.filter||["transform","perspective","filter"].some((e=>(o.willChange||"").includes(e)))||["paint","layout","strict","content"].some((e=>(o.contain||"").includes(e)))}function Ye(){return!("undefined"==typeof CSS||!CSS.supports)&&CSS.supports("-webkit-backdrop-filter","none")}function Qe(e){return["html","body","#document"].includes(Me(e))}function Xe(e){return ze(e).getComputedStyle(e)}function tt(e){return Ne(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.pageXOffset,scrollTop:e.pageYOffset}}function lt(e){if("html"===Me(e))return e;const t=e.assignedSlot||e.parentNode||Fe(e)&&e.host||Ie(e);return Fe(t)?t.host:t}function dt(e){const t=lt(e);return Qe(t)?e.ownerDocument?e.ownerDocument.body:e.body:Ue(t)&&We(t)?t:dt(t)}function ht(e,t,o){var n;void 0===t&&(t=[]),void 0===o&&(o=!0);const r=dt(e),a=r===(null==(n=e.ownerDocument)?void 0:n.body),l=ze(r);return a?t.concat(l,l.visualViewport||[],We(r)?r:[],l.frameElement&&o?ht(l.frameElement):[]):t.concat(r,ht(r,[],o))}function pt(e){const t=Xe(e);let o=parseFloat(t.width)||0,n=parseFloat(t.height)||0;const r=Ue(e),a=r?e.offsetWidth:o,l=r?e.offsetHeight:n,c=he(o)!==a||he(n)!==l;return c&&(o=a,n=l),{width:o,height:n,$:c}}function ut(e){return Ne(e)?e:e.contextElement}function ft(e){const t=ut(e);if(!Ue(t))return pe(1);const o=t.getBoundingClientRect(),{width:n,height:r,$:a}=pt(t);let l=(a?he(o.width):o.width)/n,c=(a?he(o.height):o.height)/r;return l&&Number.isFinite(l)||(l=1),c&&Number.isFinite(c)||(c=1),{x:l,y:c}}const mt=pe(0);function bt(e){const t=ze(e);return Ye()&&t.visualViewport?{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}:mt}function vt(e,t,o,n){void 0===t&&(t=!1),void 0===o&&(o=!1);const r=e.getBoundingClientRect(),a=ut(e);let l=pe(1);t&&(n?Ne(n)&&(l=ft(n)):l=ft(e));const c=function(e,t,o){return void 0===t&&(t=!1),!(!o||t&&o!==ze(e))&&t}(a,o,n)?bt(a):pe(0);let d=(r.left+c.x)/l.x,h=(r.top+c.y)/l.y,p=r.width/l.x,u=r.height/l.y;if(a){const e=ze(a),t=n&&Ne(n)?ze(n):n;let o=e.frameElement;for(;o&&n&&t!==e;){const e=ft(o),t=o.getBoundingClientRect(),n=Xe(o),r=t.left+(o.clientLeft+parseFloat(n.paddingLeft))*e.x,a=t.top+(o.clientTop+parseFloat(n.paddingTop))*e.y;d*=e.x,h*=e.y,p*=e.x,u*=e.y,d+=r,h+=a,o=ze(o).frameElement}}return Pe({width:p,height:u,x:d,y:h})}function yt(e){return vt(Ie(e)).left+tt(e).scrollLeft}function wt(e,t,o){let n;if("viewport"===t)n=function(e,t){const o=ze(e),n=Ie(e),r=o.visualViewport;let a=n.clientWidth,l=n.clientHeight,c=0,d=0;if(r){a=r.width,l=r.height;const e=Ye();(!e||e&&"fixed"===t)&&(c=r.offsetLeft,d=r.offsetTop)}return{width:a,height:l,x:c,y:d}}(e,o);else if("document"===t)n=function(e){const t=Ie(e),o=tt(e),n=e.ownerDocument.body,r=de(t.scrollWidth,t.clientWidth,n.scrollWidth,n.clientWidth),a=de(t.scrollHeight,t.clientHeight,n.scrollHeight,n.clientHeight);let l=-o.scrollLeft+yt(e);const c=-o.scrollTop;return"rtl"===Xe(n).direction&&(l+=de(t.clientWidth,n.clientWidth)-r),{width:r,height:a,x:l,y:c}}(Ie(e));else if(Ne(t))n=function(e,t){const o=vt(e,!0,"fixed"===t),n=o.top+e.clientTop,r=o.left+e.clientLeft,a=Ue(e)?ft(e):pe(1);return{width:e.clientWidth*a.x,height:e.clientHeight*a.y,x:r*a.x,y:n*a.y}}(t,o);else{const o=bt(e);n={...t,x:t.x-o.x,y:t.y-o.y}}return Pe(n)}function kt(e,t){const o=lt(e);return!(o===t||!Ne(o)||Qe(o))&&("fixed"===Xe(o).position||kt(o,t))}function xt(e,t,o){const n=Ue(t),r=Ie(t),a="fixed"===o,l=vt(e,!0,a,t);let c={scrollLeft:0,scrollTop:0};const d=pe(0);if(n||!n&&!a)if(("body"!==Me(t)||We(r))&&(c=tt(t)),n){const e=vt(t,!0,a,t);d.x=e.x+t.clientLeft,d.y=e.y+t.clientTop}else r&&(d.x=yt(r));return{x:l.left+c.scrollLeft-d.x,y:l.top+c.scrollTop-d.y,width:l.width,height:l.height}}function $t(e,t){return Ue(e)&&"fixed"!==Xe(e).position?t?t(e):e.offsetParent:null}function _t(e,t){const o=ze(e);if(!Ue(e))return o;let n=$t(e,t);for(;n&&Ke(n)&&"static"===Xe(n).position;)n=$t(n,t);return n&&("html"===Me(n)||"body"===Me(n)&&"static"===Xe(n).position&&!Ze(n))?o:n||function(e){let t=lt(e);for(;Ue(t)&&!Qe(t);){if(Ze(t))return t;t=lt(t)}return null}(e)||o}const Ct={convertOffsetParentRelativeRectToViewportRelativeRect:function(e){let{rect:t,offsetParent:o,strategy:n}=e;const r=Ue(o),a=Ie(o);if(o===a)return t;let l={scrollLeft:0,scrollTop:0},c=pe(1);const d=pe(0);if((r||!r&&"fixed"!==n)&&(("body"!==Me(o)||We(a))&&(l=tt(o)),Ue(o))){const e=vt(o);c=ft(o),d.x=e.x+o.clientLeft,d.y=e.y+o.clientTop}return{width:t.width*c.x,height:t.height*c.y,x:t.x*c.x-l.scrollLeft*c.x+d.x,y:t.y*c.y-l.scrollTop*c.y+d.y}},getDocumentElement:Ie,getClippingRect:function(e){let{element:t,boundary:o,rootBoundary:n,strategy:r}=e;const a=[..."clippingAncestors"===o?function(e,t){const o=t.get(e);if(o)return o;let n=ht(e,[],!1).filter((e=>Ne(e)&&"body"!==Me(e))),r=null;const a="fixed"===Xe(e).position;let l=a?lt(e):e;for(;Ne(l)&&!Qe(l);){const t=Xe(l),o=Ze(l);o||"fixed"!==t.position||(r=null),(a?!o&&!r:!o&&"static"===t.position&&r&&["absolute","fixed"].includes(r.position)||We(l)&&!o&&kt(e,l))?n=n.filter((e=>e!==l)):r=t,l=lt(l)}return t.set(e,n),n}(t,this._c):[].concat(o),n],l=a[0],c=a.reduce(((e,o)=>{const n=wt(t,o,r);return e.top=de(n.top,e.top),e.right=ce(n.right,e.right),e.bottom=ce(n.bottom,e.bottom),e.left=de(n.left,e.left),e}),wt(t,l,r));return{width:c.right-c.left,height:c.bottom-c.top,x:c.left,y:c.top}},getOffsetParent:_t,getElementRects:async function(e){let{reference:t,floating:o,strategy:n}=e;const r=this.getOffsetParent||_t,a=this.getDimensions;return{reference:xt(t,await r(o),n),floating:{x:0,y:0,...await a(o)}}},getClientRects:function(e){return Array.from(e.getClientRects())},getDimensions:function(e){return pt(e)},getScale:ft,isElement:Ne,isRTL:function(e){return"rtl"===Xe(e).direction}},St=r`:host{display:contents;position:relative}.popover{display:block;left:0;top:0;position:absolute;z-index:var(--gk-popover-z-index,100)}.arrow{background:var(--gk-tooltip-background-color,#000);height:8px;position:absolute;transform:rotate(45deg);width:8px}`;var At=function(e,t,o,n){var r,a=arguments.length,l=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,o,n);else for(var c=e.length-1;c>=0;c--)(r=e[c])&&(l=(a<3?r(l):a>3?r(t,o,l):r(t,o))||l);return a>3&&l&&Object.defineProperty(t,o,l),l};class xe extends gt{constructor(){super(...arguments),this.arrow=!1,this.hover=!1,this.placement="top",this.popoverId=`popover_${Math.random().toString(16).slice(2)}`,this.srVisible=!1,this.open=!1,this.isTrackingOutside=!1}static{this.styles=[le,re,St]}static{this.elementName="gk-popover"}firstUpdated(e){const t=this.triggerSlot.assignedElements()[0];this.triggerEl=t instanceof HTMLSlotElement?t.assignedElements({flatten:!0})[0]:t}async connectedCallback(){super.connectedCallback(),await this.updateComplete,await this.updateToggle(),null==this._toggleHandler&&(this._toggleHandler=this.handleToggle.bind(this)),this.hover?(this.triggerEl?.addEventListener("mouseover",this._toggleHandler,!1),this.triggerEl?.addEventListener("mouseout",this._toggleHandler,!1)):this.triggerEl?.addEventListener("focus",this._toggleHandler,!1)}disconnectedCallback(){super.disconnectedCallback(),null!=this._toggleHandler&&(this.triggerEl?.removeEventListener("focus",this._toggleHandler,!1),this.triggerEl?.removeEventListener("mouseover",this._toggleHandler,!1),this.triggerEl?.removeEventListener("mouseout",this._toggleHandler,!1),this._toggleHandler=void 0),this.disposeTrackOutside()}handleToggle(e){e.composedPath().includes(this.triggerEl)&&(this.open=!this.open,this.updateToggle())}async updateToggle(){this.open?(await this.showPopover(),null!=this.popoverEl&&window.requestAnimationFrame((()=>{this.popoverEl?.focus()}))):this.hidePopover()}handleDocumentEvent(e){!1!==this.open&&(e.composedPath().includes(this)||this.hidePopover())}trackOutside(){this.hover||this.isTrackingOutside||!this.open||(this.isTrackingOutside=!0,null==this._documentEventHandler&&(this._documentEventHandler=this.handleDocumentEvent.bind(this)),document.addEventListener("click",this._documentEventHandler,!1),document.addEventListener("focusin",this._documentEventHandler,!1))}disposeTrackOutside(){this.isTrackingOutside&&(this.isTrackingOutside=!1,null!=this._documentEventHandler&&(document.removeEventListener("click",this._documentEventHandler,!1),window.removeEventListener("focusin",this._documentEventHandler,!1),this._documentEventHandler=void 0))}async updatePositioning(){const e=[De(6),Oe(),(t={padding:5},void 0===t&&(t={}),{name:"shift",options:t,async fn(e){const{x:o,y:n,placement:r}=e,{mainAxis:a=!0,crossAxis:l=!1,limiter:c={fn:e=>{let{x:t,y:o}=e;return{x:t,y:o}}},...d}=me(t,e),h={x:o,y:n},p=await Te(e,d),u=ke(be(r)),g=ye(u);let f=h[g],m=h[u];if(a){const e="y"===g?"bottom":"right";f=fe(f+p["y"===g?"top":"left"],f,f-p[e])}if(l){const e="y"===u?"bottom":"right";m=fe(m+p["y"===u?"top":"left"],m,m-p[e])}const b=c.fn({...e,[g]:f,[u]:m});return{...b,data:{x:b.x-o,y:b.y-n}}}})];var t;this.arrowEl&&e.push((e=>({name:"arrow",options:e,async fn(t){const{x:o,y:n,placement:r,rects:a,platform:l,elements:c,middlewareData:d}=t,{element:h,padding:p=0}=me(e,t)||{};if(null==h)return{};const u=Ee(p),g={x:o,y:n},f=_e(r),m=we(f),b=await l.getDimensions(h),v="y"===f,y=v?"top":"left",w=v?"bottom":"right",k=v?"clientHeight":"clientWidth",x=a.reference[m]+a.reference[f]-g[f]-a.floating[m],_=g[f]-a.reference[f],C=await(null==l.getOffsetParent?void 0:l.getOffsetParent(h));let S=C?C[k]:0;S&&await(null==l.isElement?void 0:l.isElement(C))||(S=c.floating[k]||a.floating[m]);const A=x/2-_/2,E=S/2-b[m]/2-1,P=ce(u[y],E),R=ce(u[w],E),T=P,O=S-b[m]-R,D=S/2-b[m]/2+A,M=fe(T,D,O),L=!d.arrow&&null!=ve(r)&&D!=M&&a.reference[m]/2-(D<T?P:R)-b[m]/2<0,I=L?D<T?D-T:D-O:0;return{[f]:g[f]+I,data:{[f]:M,centerOffset:D-M-I,...L&&{alignmentOffset:I}},reset:L}}}))({element:this.arrowEl})),await((e,t,o)=>{const n=new Map,r={platform:Ct,...o},a={...r.platform,_c:n};return(async(e,t,o)=>{const{placement:n="bottom",strategy:r="absolute",middleware:a=[],platform:l}=o,c=a.filter(Boolean),d=await(null==l.isRTL?void 0:l.isRTL(t));let h=await l.getElementRects({reference:e,floating:t,strategy:r}),{x:p,y:u}=Re(h,n,d),g=n,f={},m=0;for(let o=0;o<c.length;o++){const{name:a,fn:b}=c[o],{x:v,y,data:w,reset:k}=await b({x:p,y:u,initialPlacement:n,placement:g,strategy:r,middlewareData:f,rects:h,platform:l,elements:{reference:e,floating:t}});p=null!=v?v:p,u=null!=y?y:u,f={...f,[a]:{...f[a],...w}},k&&m<=50&&(m++,"object"==typeof k&&(k.placement&&(g=k.placement),k.rects&&(h=!0===k.rects?await l.getElementRects({reference:e,floating:t,strategy:r}):k.rects),({x:p,y:u}=Re(h,g,d))),o=-1)}return{x:p,y:u,placement:g,strategy:r,middlewareData:f}})(e,t,{...r,platform:a})})(this.triggerEl,this.popoverEl,{middleware:e,placement:this.placement}).then((({x:e,y:t,placement:o,middlewareData:n})=>{if(Object.assign(this.popoverEl.style,{left:`${e}px`,top:`${t}px`}),this.arrowEl){const e=n.arrow?.x,t=n.arrow?.y,r={top:"bottom",right:"left",bottom:"top",left:"right"}[o.split("-")[0]];Object.assign(this.arrowEl.style,{left:null!=e?`${e}px`:"",top:null!=t?`${t}px`:"",right:"",bottom:"",[r]:"-4px"})}}))}async showPopover(){this.open=!0,null!=this.triggerEl&&(this.triggerEl.ariaExpanded="true"),this.srVisible?this.popoverEl.classList.remove("sr-only"):this.popoverEl.removeAttribute("hidden"),await this.updatePositioning(),this.trackOutside()}hidePopover(){this.open=!1,null!=this.triggerEl&&(this.triggerEl.ariaExpanded="false"),this.srVisible?this.popoverEl.classList.add("sr-only"):this.popoverEl.setAttribute("hidden","true"),this.disposeTrackOutside()}get arrowMarkup(){return this.arrow?V`<div part="arrow" class="arrow"></div>`:""}render(){return V`<slot name="trigger" aria-describedby="${this.popoverId}"></slot><div class="popover ${this.srVisible&&"sr-only"}" ?hidden="${!this.srVisible}" id="${this.popoverId}" part="popover" role="tooltip"><slot></slot>${this.arrowMarkup}</div>`}}At([oe({type:Boolean})],xe.prototype,"arrow",void 0),At([oe({type:Boolean})],xe.prototype,"hover",void 0),At([oe()],xe.prototype,"placement",void 0),At([oe({attribute:"popover-id"})],xe.prototype,"popoverId",void 0),At([oe({attribute:"sr-visible",type:Boolean})],xe.prototype,"srVisible",void 0),At([se('slot[name="trigger"]')],xe.prototype,"triggerSlot",void 0),At([se(".popover")],xe.prototype,"popoverEl",void 0),At([se(".arrow")],xe.prototype,"arrowEl",void 0),At([oe({state:!0,attribute:!1})],xe.prototype,"open",void 0);const Et=r`gk-popover::part(popover){background:var(--gk-tooltip-background-color,#000);border-radius:var(--gk-tooltip-border-radius,0);color:var(--gk-tooltip-font-color,#fff);font-size:var(--gk-tooltip-font-size, 14px);font-weight:var(--gk-tooltip-font-weight,bold);line-height:var(--gk-tooltip-line-height, 14px);max-width:var(--gk-tooltip-max-width,none);padding:var(--gk-tooltip-padding,10px 16px);text-align:var(--gk-tooltip-text-align,left);width:max-content}`;class $e extends gt{constructor(){super(...arguments),this.srVisible=!1}static{this.styles=[le,re,Et]}static{this.elementName="gk-tooltip"}static{this.components=[xe]}render(){return V`<gk-popover arrow hover ?sr-visible="${this.srVisible}" part="base"><slot name="trigger" slot="trigger"></slot><slot></slot></gk-popover>`}}!function(e,t,o,n){var r,a=arguments.length,l=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,o,n);else for(var c=e.length-1;c>=0;c--)(r=e[c])&&(l=(a<3?r(l):a>3?r(t,o,l):r(t,o))||l);a>3&&l&&Object.defineProperty(t,o,l)}([oe({attribute:"sr-visible",type:Boolean})],$e.prototype,"srVisible",void 0);const Pt=r`:host{display:inline-block;vertical-align:middle;font-weight:700}.deletions{color:var(--gk-deletions-color,#fe5955);padding-left:4px}.additions{color:var(--gk-additions-color,#74b666);padding-right:4px}`;class Se extends gt{constructor(){super(...arguments),this.tooltipText="Lines Added/Removed",this.tooltipId=`additions-deletions_${Math.random().toString(16).slice(2)}`}static{this.styles=Pt}static{this.elementName="gk-additions-deletions"}static{this.components=[$e]}render(){return V`<gk-tooltip sr-visible tooltip-id="${this.tooltipId}"><span slot="trigger" part="base"><span class="additions">+<slot name="additions"></slot></span>/ <span class="deletions">−<slot name="deletions"></slot></span></span><span>${this.tooltipText}</span></gk-tooltip>`}}!function(e,t,o,n){var r,a=arguments.length,l=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,o,n);else for(var c=e.length-1;c>=0;c--)(r=e[c])&&(l=(a<3?r(l):a>3?r(t,o,l):r(t,o))||l);a>3&&l&&Object.defineProperty(t,o,l)}([oe({attribute:"tooltip-text"})],Se.prototype,"tooltipText",void 0);const Rt=new Set(["children","localName","ref","style","className"]),Tt=new WeakMap,Ot=(e,t,o,n,r)=>{const a=r?.[t];void 0===a||o===n?(e[t]=o,null==o&&t in HTMLElement.prototype&&e.removeAttribute(t)):((e,t,o)=>{let n=Tt.get(e);void 0===n&&Tt.set(e,n=new Map);let r=n.get(t);void 0!==o?void 0===r?(n.set(t,r={handleEvent:o}),e.addEventListener(t,r)):r.handleEvent=o:void 0!==r&&(n.delete(t),e.removeEventListener(t,r))})(e,a,o)},Dt=({react:e,tagName:t,elementClass:o,events:n,displayName:r})=>{const a=new Set(Object.keys(n??{})),l=e.forwardRef(((r,l)=>{const c=e.useRef(null),d=e.useRef(null),h={},p={};for(const[e,t]of Object.entries(r))Rt.has(e)?h["className"===e?"class":e]=t:a.has(e)||e in o.prototype?p[e]=t:h[e]=t;return e.useLayoutEffect((()=>{if(null!==d.current){for(const e in p)Ot(d.current,e,r[e],c.current?c.current[e]:void 0,n);c.current=r}})),e.useLayoutEffect((()=>{d.current?.removeAttribute("defer-hydration")}),[]),h.suppressHydrationWarning=!0,e.createElement(t,{...h,ref:e=>{d.current=e,"function"==typeof l?l(e):null!==l&&(l.current=e)}})}));return l.displayName=r??o.name,l};var Mt=qe(294);const zt=Dt({react:Mt,tagName:Se.elementName,elementClass:Se}),Lt=r`:host{display:inline-block}.avatar{vertical-align:middle;background-color:var(--gk-avatar-background-color,#e0e0e0);width:var(--gk-avatar-size,30px);aspect-ratio:1/1;border-radius:50%;transition:.2s}.avatar.is-offline{border:2px solid var(--gk-avatar-offline-outline-color,#3d424d)}.avatar.is-online{border:2px solid var(--gk-avatar-online-outline-color,#60b864)}.avatar--image{display:inline-block;object-fit:cover;object-position:50% 50%}.avatar--content{display:inline-flex;justify-content:center;align-items:center;font-size:var(--gk-avatar-font-size, 11px);line-height:var(--gk-avatar-size, 30px);text-align:center}.avatar:hover{transform:scale(1.2)}`,It=r`:host{display:inline-block}.avatar-group{display:inline-flex;flex-direction:row;justify-content:center;align-items:center}.avatar-group::slotted(:not(:first-child)){margin-left:calc(var(--gk-avatar-size,2.4rem) * -.2)}.avatar-group:focus-within::slotted(*),.avatar-group:hover::slotted(*){opacity:.5}.avatar-group:focus-within::slotted(:focus),.avatar-group:hover::slotted(:hover){opacity:1;z-index:var(--gk-avatar-selected-zindex,1)!important}`;var Bt=function(e,t,o,n){var r,a=arguments.length,l=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,o,n);else for(var c=e.length-1;c>=0;c--)(r=e[c])&&(l=(a<3?r(l):a>3?r(t,o,l):r(t,o))||l);return a>3&&l&&Object.defineProperty(t,o,l),l};class He extends gt{static{this.styles=[le,Lt]}static{this.elementName="gk-avatar"}get indicatorClass(){return this.indicator?`is-${this.indicator}`:""}render(){return this.src?V`<img src="${this.src}" class="avatar avatar--image${this.indicatorClass}" part="base" alt="">`:V`<slot class="avatar avatar--content${this.indicatorClass}" part="base"></slot>`}}Bt([oe()],He.prototype,"src",void 0),Bt([oe()],He.prototype,"indicator",void 0);class Le extends gt{static{this.elementName="gk-avatar-group"}static{this.styles=[le,It]}render(){return V`<slot class="avatar-group" part="base"></slot>`}}const jt=Dt({react:Mt,tagName:He.elementName,elementClass:He}),Nt=Dt({react:Mt,tagName:Le.elementName,elementClass:Le}),Ut=r`.badge{border-radius:var(--gk-badge-border-radius,22px);display:inline-block;font-size:var(--gk-badge-font-size, 12px)}.badge--outline{border-color:var(--gk-badge-outline-color,#ffffff99);border-style:solid;border-width:var(--gk-badge-outline-border-width,1px);color:var(--gk-badge-outline-color,#ffffff99);padding:var(--gk-badge-outline-padding,0 8px)}.badge--filled{background-color:var(--gk-badge-filled-background-color,#2b2f36);color:var(--gk-badge-filled-color,#ffffff99);padding:var(--gk-badge-filled-padding,2px 6px)}`;class Be extends gt{constructor(){super(...arguments),this.variant="outline"}static{this.styles=Ut}static{this.elementName="gk-badge"}render(){return V`<slot class="${`badge badge--${this.variant}`}" part="base"></slot>`}}!function(e,t,o,n){var r,a=arguments.length,l=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,o,n);else for(var c=e.length-1;c>=0;c--)(r=e[c])&&(l=(a<3?r(l):a>3?r(t,o,l):r(t,o))||l);a>3&&l&&Object.defineProperty(t,o,l)}([oe()],Be.prototype,"variant",void 0);const Ft=Dt({react:Mt,tagName:Be.elementName,elementClass:Be}),Ht=r`:host{display:inline-block}button{appearance:none;border:none;padding:8px 12px}button:hover{cursor:pointer}button:focus{outline:1px solid var(--gk-focus-border-color,#007fd4);outline-offset:-1px}.button--ghost{background:0 0;color:var(--gk-button-ghost-color,#fff)}.button--ghost:focus,.button--ghost:hover{text-decoration:underline}.button--ghost:active{color:var(--gk-button-ghost-color-active,#adb8c2)}.button--ghost:disabled,.button--ghost:disabled:active,.button--ghost:disabled:focus,.button--ghost:disabled:hover{color:var(--gk-button-ghost-color-disabled,#ffffff60);cursor:default;text-decoration:none}.button--outline{background:0 0;border-radius:2px;border-style:solid;border-width:var(--gk-button-outline-border-width,1px);color:var(--gk-button-outline-color,#fff)}.button--outline:focus,.button--outline:hover{background-color:#ffffff50}.button--outline:active{background-color:var(--gk-button-outline-color-active,#adb8c2)}.button--outline:disabled,.button--outline:disabled:active,.button--outline:disabled:focus,.button--outline:disabled:hover{background-color:transparent;border-color:var(--gk-button-outline-color-disabled,#ffffff60);color:var(--gk-button-outline-color-disabled,#ffffff60);cursor:default;text-decoration:none}`;var qt=function(e,t,o,n){var r,a=arguments.length,l=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,o,n);else for(var c=e.length-1;c>=0;c--)(r=e[c])&&(l=(a<3?r(l):a>3?r(t,o,l):r(t,o))||l);return a>3&&l&&Object.defineProperty(t,o,l),l};class Ge extends gt{constructor(){super(...arguments),this.disabled=!1,this.type="button",this.variant="ghost"}static{this.styles=Ht}static{this.elementName="gk-button"}get allClasses(){const e=["button"];return e.push(`button--${this.variant}`),e.join(" ")}_handleClick(e){e.stopPropagation(),this.dispatchEvent(new Event("click"))}render(){return V`<button class="${this.allClasses}" @click="${this._handleClick}" ?disabled="${this.disabled}" part="base" type="${this.type}"><slot name="prefix"></slot><slot></slot><slot name="suffix"></slot></button>`}}qt([oe({type:Boolean,reflect:!0})],Ge.prototype,"disabled",void 0),qt([oe({reflect:!0})],Ge.prototype,"type",void 0),qt([oe()],Ge.prototype,"variant",void 0);const Vt=Dt({react:Mt,tagName:Ge.elementName,elementClass:Ge,events:{onClick:"click"}}),Wt=r`:host{display:inline-block}.complexity-indicator{display:inline-flex}.complexity-indicator__box{display:block;height:var(--gk-complexity-indicator-box-size,8px);width:var(--gk-complexity-indicator-box-size,8px)}.complexity-indicator__box:not(:last-of-type){margin-right:var(--gk-complexity-indicator-space-between,2px)}.complexity-indicator--level-1 .complexity-indicator__box{background-color:var(--gk-complexity-indicator-color-level-1,#5cb85c)}.complexity-indicator--level-2 .complexity-indicator__box{background-color:var(--gk-complexity-indicator-color-level-2,#4d88ff)}.complexity-indicator--level-3 .complexity-indicator__box{background-color:var(--gk-complexity-indicator-color-level-3,#de9b43)}.complexity-indicator--level-4 .complexity-indicator__box{background-color:var(--gk-complexity-indicator-color-level-4,#d9413d)}`;var Gt=function(e,t,o,n){var r,a=arguments.length,l=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,o,n);else for(var c=e.length-1;c>=0;c--)(r=e[c])&&(l=(a<3?r(l):a>3?r(t,o,l):r(t,o))||l);return a>3&&l&&Object.defineProperty(t,o,l),l};class Je extends gt{constructor(){super(...arguments),this.level=1,this.label="Complexity of pull request"}static{this.styles=[le,re,Wt]}static{this.elementName="gk-complexity-indicator"}render(){const e=[];for(let t=0;t<this.level;t++)e.push(t);return V`<div class="complexity-indicator complexity-indicator--level-${this.level}" part="base"><span class="sr-only">${this.label}</span> ${e.map((()=>V`<span class="complexity-indicator__box"></span>`))}</div>`}}Gt([oe({type:Number})],Je.prototype,"level",void 0),Gt([oe()],Je.prototype,"label",void 0);const Kt=Dt({react:Mt,tagName:Je.elementName,elementClass:Je}),Zt=/(?<literal>\[.*?\])|(?<year>YYYY|YY)|(?<month>M{1,4})|(?<day>Do|DD?)|(?<weekday>d{2,4})|(?<hour>HH?|hh?)|(?<minute>mm?)|(?<second>ss?)|(?<fractionalSecond>SSS)|(?<dayPeriod>A|a)|(?<timeZoneName>ZZ?)/g,Yt=/(?<dateStyle>full|long|medium|short)(?:\+(?<timeStyle>full|long|medium|short))?/,Jt=[["year",629856e5,31536e6,"yr"],["month",2628e6,2628e6,"mo"],["week",6048e5,6048e5,"wk"],["day",864e5,864e5,"d"],["hour",36e5,36e5,"h"],["minute",6e4,6e4,"m"],["second",1e3,1e3,"s"]];let Qt;const Xt=new Map;let ei,ti,ii;new Map;const oi=["th","st","nd","rd"];function ni(e){const t=e%100;return`${e}${oi[(t-20)%10]??oi[t]??oi[0]}`}var si=function(e,t,o,n){var r,a=arguments.length,l=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,o,n);else for(var c=e.length-1;c>=0;c--)(r=e[c])&&(l=(a<3?r(l):a>3?r(t,o,l):r(t,o))||l);return a>3&&l&&Object.defineProperty(t,o,l),l};class po extends gt{constructor(){super(...arguments),this.date=new Date,this.format="MMMM Do, YYYY h:mma"}static{this.styles=[le]}static{this.elementName="gk-date-from"}static{this.components=[$e]}get relativeTime(){return function(e){const t=("number"==typeof e?e:e.getTime())-(new Date).getTime();for(const[e,o,n,r]of Jt){const a=Math.abs(t);if(a>=o||1e3===o)return null==Qt&&(null!=ii?Qt=ii.resolvedOptions().locale:null!=ti?Qt=ti.resolvedOptions().locale:(ii=new Intl.RelativeTimeFormat(ei,{localeMatcher:"best fit",numeric:"always",style:"narrow"}),Qt=ii.resolvedOptions().locale)),"en"===Qt||Qt?.startsWith("en-")?`${Math.round(a/n)}${r}`:(null==ii&&(ii=new Intl.RelativeTimeFormat(ei,{localeMatcher:"best fit",numeric:"always",style:"narrow"})),ii.format(Math.round(t/n),e))}return""}(this.date)}get isDate(){return this.date&&!isNaN(this.date.getMilliseconds())}render(){if(this.isDate)return V`<gk-tooltip><time datetime="${this.date}" part="base" slot="trigger">${this.relativeTime}</time><span>${function(e,t,o,n=!0){const r=`${o??""}:${t=t??void 0}`;let a=Xt.get(r);if(null==a){const e=function(e){if(null==e)return{localeMatcher:"best fit",dateStyle:"full",timeStyle:"short"};const t=Yt.exec(e);if(null!=t?.groups){const{dateStyle:e,timeStyle:o}=t.groups;return{localeMatcher:"best fit",dateStyle:e||"full",timeStyle:o||void 0}}const o={localeMatcher:"best fit"};for(const{groups:t}of e.matchAll(Zt))if(null!=t)for(const e in t){const n=t[e];if(null!=n)switch(e){case"year":o.year=4===n.length?"numeric":"2-digit";break;case"month":switch(n.length){case 4:o.month="long";break;case 3:o.month="short";break;case 2:o.month="2-digit";break;case 1:o.month="numeric"}break;case"day":o.day="DD"===n?"2-digit":"numeric";break;case"weekday":switch(n.length){case 4:o.weekday="long";break;case 3:o.weekday="short";break;case 2:o.weekday="narrow"}break;case"hour":o.hour=2===n.length?"2-digit":"numeric",o.hour12="hh"===n||"h"===n;break;case"minute":o.minute=2===n.length?"2-digit":"numeric";break;case"second":o.second=2===n.length?"2-digit":"numeric";break;case"fractionalSecond":o.fractionalSecondDigits=3;break;case"dayPeriod":o.dayPeriod="narrow",o.hour12=!0,o.hourCycle="h12";break;case"timeZoneName":o.timeZoneName=2===n.length?"long":"short"}}return o}(t);let l;l=null==o?ei:"system"===o?void 0:[o],a=new Intl.DateTimeFormat(l,e),n&&Xt.set(r,a)}if(null==t||Yt.test(t))return a.format(e);function l(e){const t=`${o??""}:time:${e}`;let r=Xt.get(t);if(null==r){const a={localeMatcher:"best fit",timeStyle:e};let l;l=null==o?ei:"system"===o?void 0:[o],r=new Intl.DateTimeFormat(l,a),n&&Xt.set(t,r)}return r}const c=a.formatToParts(e);return t.replace(Zt,((t,o,n,r,a,d,h,p,u,g,f,m,b,v,y)=>{if(null!=o)return o.substring(1,o.length-1);for(const t in y){const o=y[t];if(null==o)continue;const n=c.find((e=>e.type===t));if("Do"===o&&"day"===n?.type)return ni(Number(n.value));if("a"===o&&"dayPeriod"===n?.type){const t=l("short").formatToParts(e).find((e=>"dayPeriod"===e.type));return`${(t??n)?.value??""}`}return n?.value??""}return""}))}(this.date,this.format??"MMMM Do, YYYY h:mma")}</span></gk-tooltip>`}}si([oe({converter:(e=>({toAttribute:t=>t.toLocaleDateString(e),fromAttribute:e=>new Date(e)}))(navigator.language),reflect:!0})],po.prototype,"date",void 0),si([oe()],po.prototype,"format",void 0);const ri=Dt({react:Mt,tagName:po.elementName,elementClass:po}),ai=r`.row--heading{text-transform:uppercase;color:var(--gk-text-secondary-color,rgba(255,255,255,.6))}.content::slotted(:not(:first-child)){border-top:1px solid var(--gk-divider-color,rgba(255,255,255,.04))}`,li=r`:host{display:contents}.row{display:flex;flex-direction:row;padding:var(--gk-focus-row-padding,8px)}.row:not(.row--heading):focus-within,.row:not(.row--heading):hover{background-color:var(--gk-focus-background-color-hover,rgba(255,255,255,.04))}.row:not(.row--heading):focus-within{outline:1px solid var(--gk-focus-border-color,#007fd4);outline-offset:-1px}.row__key{flex:none;display:block;width:var(--gk-focus-row-key-min-width,64px)}@media (max-width:720px){.row__key{width:var(--gk-focus-row-key-min-width-screen-sm,32px)}}.row__content{flex:1;display:block}.row__pin{display:block;min-width:var(--gk-focus-row-pin-min-width,35px)}.row__date{display:block;min-width:var(--gk-focus-row-date-min-width,48px)}@media (max-width:720px){.row--heading .item__date,.row--heading .item__secondary{display:none}}`,ci=r`.item{display:flex;flex-direction:row;align-items:center;gap:8px}@media (max-width:720px){.item{flex-direction:column;align-items:stretch}}.item__primary{flex:1;display:flex;flex-direction:row;gap:12px}.item__type{flex:none}@media (max-width:720px){.item__type{order:-1}}.item__content{display:flex;flex-direction:column;gap:6px;min-width:var(--gk-focus-item-content-min-width,92px)}@media (max-width:720px){.item__content{align-items:stretch}}.item__content>p{margin:0}.item__secondary{flex:none;display:flex;flex-direction:row;align-items:center;gap:8px}@media (max-width:720px){.item__secondary{flex-wrap:wrap;padding-left:36px}}.item__people{display:block;min-width:var(--gk-focus-item-people-min-width,92px)}@media (max-width:720px){.item__people{min-width:0}}.item__repo{display:block;width:var(--gk-focus-item-repo-min-width,150px)}@media (max-width:720px){.item__repo{width:max-content}}@media (max-width:720px){.item__date{align-self:flex-start;min-width:0}}.item__actions{display:block;min-width:var(--gk-focus-item-actions-min-width,70px)}@media (max-width:720px){.item__actions{width:100%}}`;class yo extends gt{static{this.styles=[le,ci]}static{this.elementName="gk-focus-item"}render(){return V`<div class="item"><div class="item__primary"><div class="item__content" part="base"><slot></slot></div></div><div class="item__secondary"><slot name="people" class="item__people" part="people"></slot><slot name="repo" class="item__repo" part="repo"></slot><slot name="actions" class="item__actions" part="actions"></slot></div></div>`}}class vo extends gt{static{this.styles=[le,li]}static{this.elementName="gk-focus-row"}render(){return V`<div class="row" part="row"><slot name="pin" class="row__pin" part="pin"></slot><div class="row__date" part="date"><slot name="date"></slot></div><div class="row__key" part="key"><slot name="key"></slot></div><slot class="row__content"></slot></div>`}}class bo extends gt{static{this.styles=[le,li,ci,ai]}static{this.elementName="gk-focus-container"}render(){return V`<div class="row row--heading"><slot name="pin" class="row__pin" part="pin">Pinned</slot><slot name="date" class="row__date" part="date">Updated</slot><slot name="key" class="row__key" part="key">Key</slot><div class="row__content"><div class="item"><div class="item__primary"><slot name="item" class="item__content" part="item">Item</slot></div><div class="item__secondary"><slot name="people" class="item__people" part="people">People</slot><slot name="repo" class="item__repo" part="repo">Repo</slot><slot name="actions" class="item__actions" part="actions">Action</slot></div></div></div></div><slot class="content"></slot>`}}const di=Dt({react:Mt,tagName:yo.elementName,elementClass:yo}),hi=Dt({react:Mt,tagName:vo.elementName,elementClass:vo}),pi=Dt({react:Mt,tagName:bo.elementName,elementClass:bo});class $o{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,o){this._$Ct=e,this._$AM=t,this._$Ci=o}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}const ui=(e=>(...t)=>({_$litDirective$:e,values:t}))(class extends $o{constructor(e){if(super(e),1!==e.type||"class"!==e.name||e.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter((t=>e[t])).join(" ")+" "}update(e,[t]){if(void 0===this.it){this.it=new Set,void 0!==e.strings&&(this.st=new Set(e.strings.join(" ").split(/\s/).filter((e=>""!==e))));for(const e in t)t[e]&&!this.st?.has(e)&&this.it.add(e);return this.render(t)}const o=e.element.classList;for(const e of this.it)e in t||(o.remove(e),this.it.delete(e));for(const e in t){const n=!!t[e];n===this.it.has(e)||this.st?.has(e)||(n?(o.add(e),this.it.add(e)):(o.remove(e),this.it.delete(e)))}return W}}),gi=e=>e??G,fi=r`:host{display:block}.input-container{background-color:var(--gk-input-background-color,#000);border:1px solid var(--gk-input-border-color,#ffffff14);border-radius:var(--gk-input-border-radius,2px);color:var(--gk-input-color,#ffffff99);cursor:text;display:inline-flex;justify-content:start;padding:var(--gk-input-padding,10px);vertical-align:middle;width:100%}.input{appearance:none;background:inherit;border:none;box-shadow:none;color:inherit;flex:1 1 auto;font:inherit;height:100%;margin:0;outline:0;padding:0}.input-container:focus-within{outline:1px solid var(--gk-focus-border-color,#007fd4);outline-offset:-1px}`;var mi=function(e,t,o,n){var r,a=arguments.length,l=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,o,n);else for(var c=e.length-1;c>=0;c--)(r=e[c])&&(l=(a<3?r(l):a>3?r(t,o,l):r(t,o))||l);return a>3&&l&&Object.defineProperty(t,o,l),l};class Ro extends gt{static{this.formAssociated=!0}static{this.styles=[le,re,fi]}static{this.elementName="gk-input"}constructor(){super(),this.disabled=!1,this.labelVisibility="visible",this.required=!1,this.type="text",this.value="";try{this.internals=this.attachInternals()}catch{}}firstUpdated(){this.internals&&this.internals.setFormValue(this.value)}render(){return V`<div class="field"><label class="${ui({label:!0,"sr-only":"sr-only"===this.labelVisibility})}" for="input" ?hidden="${"hidden"===this.labelVisibility}" part="field-label"><slot name="label">${this.label}</slot></label><div class="${ui({"input-container":!0,"input-container--disabled":this.disabled})}"><slot name="prefix" part="prefix"></slot><input autocomplete="${gi(this.autocomplete)}" autocorrect="${gi(this.autocorrect)}" class="input" ?disabled="${this.disabled}" id="input" name="${gi(this.name)}" part="input" placeholder="${gi(this.placeholder)}" type="${this.type}" @input="${this.onInput}"><slot name="suffix" part="suffix"></slot></div></div>`}onInput(e){this.value=e.target.value,this.internals&&this.internals.setFormValue(this.value)}}mi([oe()],Ro.prototype,"autocomplete",void 0),mi([oe()],Ro.prototype,"autocorrect",void 0),mi([oe({type:Boolean,reflect:!0})],Ro.prototype,"disabled",void 0),mi([oe()],Ro.prototype,"label",void 0),mi([oe({attribute:"label-visibility"})],Ro.prototype,"labelVisibility",void 0),mi([oe()],Ro.prototype,"name",void 0),mi([oe()],Ro.prototype,"placeholder",void 0),mi([oe({type:Boolean,reflect:!0})],Ro.prototype,"required",void 0),mi([oe({reflect:!0})],Ro.prototype,"type",void 0),mi([oe()],Ro.prototype,"value",void 0);const bi=r`:host{display:inline-block}.menu{border:1px solid var(--gk-menu-border-color,#2a2f35);border-radius:4px;background:var(--gk-menu-background-color,#32363f);box-shadow:0 5px 16px 0 rgba(0,0,0,.85);display:inline-block;padding:4px 0}`,vi=r`:host{display:block}.menu-item{font-size:var(--gk-menu-item-font-size, 12px);padding:5px 6px}.menu-item:focus,.menu-item:hover{background-color:var(--gk-menu-item-background-color-hover,#4d88ff1a);cursor:pointer}.menu-item:focus{outline:1px solid var(--gk-focus-border-color,#007fd4);outline-offset:-1px}.menu-item:active{background-color:var(--gk-menu-item-background-color-active,#4d88ff4d)}.menu-item--disabled,.menu-item--disabled:active,.menu-item--disabled:focus,.menu-item--disabled:hover{background-color:initial;color:var(--gk-menu-item-font-color-disabled,#ffffff60);cursor:default;pointer-events:none}`,yi=r`:host{display:block}.menu-label{cursor:default;display:inline-block;font-size:var(--gk-menu-label-font-size, 12px);font-weight:700;padding:5px 6px}`;class Mo extends gt{constructor(){super(...arguments),this._currentMenuItem=void 0}static{this.styles=[le,bi]}static{this.elementName="gk-menu"}_handleSlotChange(){const e=this._getAllItems();e.length&&this._setCurrentItem(e[0])}_handleClick(e){e.stopPropagation();const t=e.target.closest("gk-menu-item");if(!t||t.disabled)return;this._currentMenuItem=t;const o=new CustomEvent("select",{detail:{target:t}});this.dispatchEvent(o)}_handleKeyDown(e){if("Enter"===e.key||" "===e.key)return e.preventDefault(),void this._currentMenuItem?.click();if(["ArrowUp","ArrowDown","Home","End"].includes(e.key)){const t=this._getAllItems(),o=t.length;let n=this._currentMenuItem?t.indexOf(this._currentMenuItem):0;"ArrowUp"===e.key?n=(n-1+o)%o:"ArrowDown"===e.key?n=(n+1)%o:"Home"===e.key?n=0:"End"===e.key&&(n=o-1),this._setCurrentItem(t[n]),t[n].focus()}}_handleMouseDown(e){const t=e.target;this._isMenuItem(t)&&this._setCurrentItem(t)}_isMenuItem(e){const t=e.getAttribute("role")||"";return"gk-menu-item"===e.tagName.toLowerCase()||["menuitem","menuitemcheckbox","menuitemradio"].includes(t)}_setCurrentItem(e){this._currentMenuItem=e,this._setTabIndex()}_getAllItems(){return this.slotChildren.filter((e=>this._isMenuItem(e)))}_setTabIndex(){this._getAllItems().forEach((e=>{e.setAttribute("tabindex",this._currentMenuItem===e?"0":"-1")}))}render(){return V`<slot class="menu" @click="${this._handleClick}" @keydown="${this._handleKeyDown}" @mousedown="${this._handleMouseDown}" @slotchange="${this._handleSlotChange}" part="base" role="menu"></slot>`}}!function(e,t,o,n){var r,a=arguments.length,l=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,o,n);else for(var c=e.length-1;c>=0;c--)(r=e[c])&&(l=(a<3?r(l):a>3?r(t,o,l):r(t,o))||l);a>3&&l&&Object.defineProperty(t,o,l)}([function(e){return(t,o)=>{const{slot:n,selector:r}=e??{},a="slot"+(n?`[name=${n}]`:":not([name])");return ne(t,o,{get(){const t=this.renderRoot?.querySelector(a),o=t?.assignedElements(e)??[];return void 0===r?o:o.filter((e=>e.matches(r)))}})}}({flatten:!0})],Mo.prototype,"slotChildren",void 0);class Do extends gt{constructor(){super(...arguments),this.disabled=!1}static{this.styles=[le,vi]}static{this.elementName="gk-menu-item"}get allClasses(){return this.disabled?"menu-item--disabled":""}render(){return V`<div aria-disabled="${this.disabled}" class="menu-item ${this.allClasses}" part="base" role="menuitem"><slot name="prefix"></slot><slot></slot><slot name="suffix"></slot></div>`}}!function(e,t,o,n){var r,a=arguments.length,l=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,o,n);else for(var c=e.length-1;c>=0;c--)(r=e[c])&&(l=(a<3?r(l):a>3?r(t,o,l):r(t,o))||l);a>3&&l&&Object.defineProperty(t,o,l)}([oe({type:Boolean,reflect:!0})],Do.prototype,"disabled",void 0);class Ho extends gt{static{this.styles=[le,yi]}static{this.elementName="gk-menu-label"}render(){return V`<slot class="menu-label" part="base"></slot>`}}const wi=Dt({react:Mt,tagName:Mo.elementName,elementClass:Mo,events:{onClick:"select"}}),ki=Dt({react:Mt,tagName:Do.elementName,elementClass:Do}),xi=Dt({react:Mt,tagName:Ho.elementName,elementClass:Ho}),$i=r`:host{display:inline-block}.tag{display:inline-flex;align-items:center;vertical-align:middle;gap:8px;padding:var(--gk-tag-padding,2px 6px);border-radius:var(--gk-tag-radius,4px);background-color:var(--gk-tag-background-color,#33363e);color:var(--gk-tag-color,#85868b);max-width:100%}.tag__prefix,.tag__suffix{flex:none}.tag__label{display:inline;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tag--ghost{background-color:transparent}`;class Bo extends gt{static{this.styles=[le,$i]}static{this.elementName="gk-tag"}render(){return V`<span class="tag ${this.variant?`tag--${this.variant}`:""}" part="base"><slot class="tag__prefix" name="prefix"></slot><slot class="tag__label"></slot><slot class="tag__suffix" name="suffix"></slot></span>`}}!function(e,t,o,n){var r,a=arguments.length,l=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,o,n);else for(var c=e.length-1;c>=0;c--)(r=e[c])&&(l=(a<3?r(l):a>3?r(t,o,l):r(t,o))||l);a>3&&l&&Object.defineProperty(t,o,l)}([oe()],Bo.prototype,"variant",void 0);const _i=Dt({react:Mt,tagName:Bo.elementName,elementClass:Bo}),Ci=Dt({react:Mt,tagName:$e.elementName,elementClass:$e});function Si(...e){e.forEach((e=>{e.elementName&&!customElements.get(e.elementName)&&(customElements.define(e.elementName,e),e.components&&e.components.length>0&&Si(...e.components))}))}})();var We=Ve.qE,Ke=Ve.Ct,Ze=Ve.zx,Ye=Ve.v2,Qe=Ve.sN,Xe=Ve.J2,tt=Ve.fW;const lt=globalThis,dt=lt.ShadowRoot&&(void 0===lt.ShadyCSS||lt.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,ht=Symbol(),pt=new WeakMap;class css_tag_n{constructor(e,t,o){if(this._$cssResult$=!0,o!==ht)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(dt&&void 0===e){const o=void 0!==t&&1===t.length;o&&(e=pt.get(t)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),o&&pt.set(t,e))}return e}toString(){return this.cssText}}const ut=e=>new css_tag_n("string"==typeof e?e:e+"",void 0,ht),ft=(e,...t)=>{const o=1===e.length?e[0]:t.reduce(((t,o,n)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+e[n+1]),e[0]);return new css_tag_n(o,e,ht)},mt=dt?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(const o of e.cssRules)t+=o.cssText;return ut(t)})(e):e,{is:bt,defineProperty:vt,getOwnPropertyDescriptor:yt,getOwnPropertyNames:wt,getOwnPropertySymbols:kt,getPrototypeOf:xt}=Object,$t=globalThis,_t=$t.trustedTypes,Ct=_t?_t.emptyScript:"",St=$t.reactiveElementPolyfillSupport,At=(e,t)=>e,Et={toAttribute(e,t){switch(t){case Boolean:e=e?Ct:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let o=e;switch(t){case Boolean:o=null!==e;break;case Number:o=null===e?null:Number(e);break;case Object:case Array:try{o=JSON.parse(e)}catch(e){o=null}}return o}},Pt=(e,t)=>!bt(e,t),Rt={attribute:!0,type:String,converter:Et,reflect:!1,hasChanged:Pt};Symbol.metadata??=Symbol("metadata"),$t.litPropertyMetadata??=new WeakMap;class reactive_element_b extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=Rt){if(t.state&&(t.attribute=!1),this._$Ei(),this.elementProperties.set(e,t),!t.noAccessor){const o=Symbol(),n=this.getPropertyDescriptor(e,o,t);void 0!==n&&vt(this.prototype,e,n)}}static getPropertyDescriptor(e,t,o){const{get:n,set:r}=yt(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get(){return n?.call(this)},set(t){const a=n?.call(this);r.call(this,t),this.requestUpdate(e,a,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??Rt}static _$Ei(){if(this.hasOwnProperty(At("elementProperties")))return;const e=xt(this);e.finalize(),void 0!==e.l&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(At("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(At("properties"))){const e=this.properties,t=[...wt(e),...kt(e)];for(const o of t)this.createProperty(o,e[o])}const e=this[Symbol.metadata];if(null!==e){const t=litPropertyMetadata.get(e);if(void 0!==t)for(const[e,o]of t)this.elementProperties.set(e,o)}this._$Eh=new Map;for(const[e,t]of this.elementProperties){const o=this._$Eu(e,t);void 0!==o&&this._$Eh.set(o,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const o=new Set(e.flat(1/0).reverse());for(const e of o)t.unshift(mt(e))}else void 0!==e&&t.push(mt(e));return t}static _$Eu(e,t){const o=t.attribute;return!1===o?void 0:"string"==typeof o?o:"string"==typeof e?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise((e=>this.enableUpdating=e)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((e=>e(this)))}addController(e){(this._$EO??=new Set).add(e),void 0!==this.renderRoot&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const o of t.keys())this.hasOwnProperty(o)&&(e.set(o,this[o]),delete this[o]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((e,t)=>{if(dt)e.adoptedStyleSheets=t.map((e=>e instanceof CSSStyleSheet?e:e.styleSheet));else for(const o of t){const t=document.createElement("style"),n=lt.litNonce;void 0!==n&&t.setAttribute("nonce",n),t.textContent=o.cssText,e.appendChild(t)}})(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach((e=>e.hostConnected?.()))}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach((e=>e.hostDisconnected?.()))}attributeChangedCallback(e,t,o){this._$AK(e,o)}_$EC(e,t){const o=this.constructor.elementProperties.get(e),n=this.constructor._$Eu(e,o);if(void 0!==n&&!0===o.reflect){const r=(void 0!==o.converter?.toAttribute?o.converter:Et).toAttribute(t,o.type);this._$Em=e,null==r?this.removeAttribute(n):this.setAttribute(n,r),this._$Em=null}}_$AK(e,t){const o=this.constructor,n=o._$Eh.get(e);if(void 0!==n&&this._$Em!==n){const e=o.getPropertyOptions(n),r="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==e.converter?.fromAttribute?e.converter:Et;this._$Em=n,this[n]=r.fromAttribute(t,e.type),this._$Em=null}}requestUpdate(e,t,o){if(void 0!==e){if(o??=this.constructor.getPropertyOptions(e),!(o.hasChanged??Pt)(this[e],t))return;this.P(e,t,o)}!1===this.isUpdatePending&&(this._$ES=this._$ET())}P(e,t,o){this._$AL.has(e)||this._$AL.set(e,t),!0===o.reflect&&this._$Em!==e&&(this._$Ej??=new Set).add(e)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}const e=this.constructor.elementProperties;if(e.size>0)for(const[t,o]of e)!0!==o.wrapped||this._$AL.has(t)||void 0===this[t]||this.P(t,this[t],o)}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach((e=>e.hostUpdate?.())),this.update(t)):this._$EU()}catch(t){throw e=!1,this._$EU(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach((e=>e.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Ej&&=this._$Ej.forEach((e=>this._$EC(e,this[e]))),this._$EU()}updated(e){}firstUpdated(e){}}reactive_element_b.elementStyles=[],reactive_element_b.shadowRootOptions={mode:"open"},reactive_element_b[At("elementProperties")]=new Map,reactive_element_b[At("finalized")]=new Map,St?.({ReactiveElement:reactive_element_b}),($t.reactiveElementVersions??=[]).push("2.0.4");const Tt=globalThis,Ot=Tt.trustedTypes,Dt=Ot?Ot.createPolicy("lit-html",{createHTML:e=>e}):void 0,Mt="$lit$",zt=`lit$${Math.random().toFixed(9).slice(2)}$`,Lt="?"+zt,It=`<${Lt}>`,Bt=document,jt=()=>Bt.createComment(""),Nt=e=>null===e||"object"!=typeof e&&"function"!=typeof e,Ut=Array.isArray,Ft=e=>Ut(e)||"function"==typeof e?.[Symbol.iterator],Ht="[ \t\n\f\r]",qt=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Vt=/-->/g,Wt=/>/g,Gt=RegExp(`>|${Ht}(?:([^\\s"'>=/]+)(${Ht}*=${Ht}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),Kt=/'/g,Zt=/"/g,Yt=/^(?:script|style|textarea|title)$/i,Jt=e=>(t,...o)=>({_$litType$:e,strings:t,values:o}),Qt=Jt(1),Xt=(Jt(2),Jt(3),Symbol.for("lit-noChange")),ei=Symbol.for("lit-nothing"),ti=new WeakMap,ii=Bt.createTreeWalker(Bt,129);function oi(e,t){if(!Ut(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==Dt?Dt.createHTML(t):t}const ni=(e,t)=>{const o=e.length-1,n=[];let r,a=2===t?"<svg>":3===t?"<math>":"",l=qt;for(let t=0;t<o;t++){const o=e[t];let c,d,h=-1,p=0;for(;p<o.length&&(l.lastIndex=p,d=l.exec(o),null!==d);)p=l.lastIndex,l===qt?"!--"===d[1]?l=Vt:void 0!==d[1]?l=Wt:void 0!==d[2]?(Yt.test(d[2])&&(r=RegExp("</"+d[2],"g")),l=Gt):void 0!==d[3]&&(l=Gt):l===Gt?">"===d[0]?(l=r??qt,h=-1):void 0===d[1]?h=-2:(h=l.lastIndex-d[2].length,c=d[1],l=void 0===d[3]?Gt:'"'===d[3]?Zt:Kt):l===Zt||l===Kt?l=Gt:l===Vt||l===Wt?l=qt:(l=Gt,r=void 0);const u=l===Gt&&e[t+1].startsWith("/>")?" ":"";a+=l===qt?o+It:h>=0?(n.push(c),o.slice(0,h)+Mt+o.slice(h)+zt+u):o+zt+(-2===h?t:u)}return[oi(e,a+(e[o]||"<?>")+(2===t?"</svg>":3===t?"</math>":"")),n]};class lit_html_N{constructor({strings:e,_$litType$:t},o){let n;this.parts=[];let r=0,a=0;const l=e.length-1,c=this.parts,[d,h]=ni(e,t);if(this.el=lit_html_N.createElement(d,o),ii.currentNode=this.el.content,2===t||3===t){const e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;null!==(n=ii.nextNode())&&c.length<l;){if(1===n.nodeType){if(n.hasAttributes())for(const e of n.getAttributeNames())if(e.endsWith(Mt)){const t=h[a++],o=n.getAttribute(e).split(zt),l=/([.?@])?(.*)/.exec(t);c.push({type:1,index:r,name:l[2],strings:o,ctor:"."===l[1]?lit_html_H:"?"===l[1]?lit_html_I:"@"===l[1]?lit_html_L:lit_html_k}),n.removeAttribute(e)}else e.startsWith(zt)&&(c.push({type:6,index:r}),n.removeAttribute(e));if(Yt.test(n.tagName)){const e=n.textContent.split(zt),t=e.length-1;if(t>0){n.textContent=Ot?Ot.emptyScript:"";for(let o=0;o<t;o++)n.append(e[o],jt()),ii.nextNode(),c.push({type:2,index:++r});n.append(e[t],jt())}}}else if(8===n.nodeType)if(n.data===Lt)c.push({type:2,index:r});else{let e=-1;for(;-1!==(e=n.data.indexOf(zt,e+1));)c.push({type:7,index:r}),e+=zt.length-1}r++}}static createElement(e,t){const o=Bt.createElement("template");return o.innerHTML=e,o}}function si(e,t,o=e,n){if(t===Xt)return t;let r=void 0!==n?o._$Co?.[n]:o._$Cl;const a=Nt(t)?void 0:t._$litDirective$;return r?.constructor!==a&&(r?._$AO?.(!1),void 0===a?r=void 0:(r=new a(e),r._$AT(e,o,n)),void 0!==n?(o._$Co??=[])[n]=r:o._$Cl=r),void 0!==r&&(t=si(e,r._$AS(e,t.values),r,n)),t}class lit_html_M{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:o}=this._$AD,n=(e?.creationScope??Bt).importNode(t,!0);ii.currentNode=n;let r=ii.nextNode(),a=0,l=0,c=o[0];for(;void 0!==c;){if(a===c.index){let t;2===c.type?t=new lit_html_R(r,r.nextSibling,this,e):1===c.type?t=new c.ctor(r,c.name,c.strings,this,e):6===c.type&&(t=new z(r,this,e)),this._$AV.push(t),c=o[++l]}a!==c?.index&&(r=ii.nextNode(),a++)}return ii.currentNode=Bt,n}p(e){let t=0;for(const o of this._$AV)void 0!==o&&(void 0!==o.strings?(o._$AI(e,o,t),t+=o.strings.length-2):o._$AI(e[t])),t++}}class lit_html_R{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,o,n){this.type=2,this._$AH=ei,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=o,this.options=n,this._$Cv=n?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return void 0!==t&&11===e?.nodeType&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=si(this,e,t),Nt(e)?e===ei||null==e||""===e?(this._$AH!==ei&&this._$AR(),this._$AH=ei):e!==this._$AH&&e!==Xt&&this._(e):void 0!==e._$litType$?this.$(e):void 0!==e.nodeType?this.T(e):Ft(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==ei&&Nt(this._$AH)?this._$AA.nextSibling.data=e:this.T(Bt.createTextNode(e)),this._$AH=e}$(e){const{values:t,_$litType$:o}=e,n="number"==typeof o?this._$AC(e):(void 0===o.el&&(o.el=lit_html_N.createElement(oi(o.h,o.h[0]),this.options)),o);if(this._$AH?._$AD===n)this._$AH.p(t);else{const e=new lit_html_M(n,this),o=e.u(this.options);e.p(t),this.T(o),this._$AH=e}}_$AC(e){let t=ti.get(e.strings);return void 0===t&&ti.set(e.strings,t=new lit_html_N(e)),t}k(e){Ut(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let o,n=0;for(const r of e)n===t.length?t.push(o=new lit_html_R(this.O(jt()),this.O(jt()),this,this.options)):o=t[n],o._$AI(r),n++;n<t.length&&(this._$AR(o&&o._$AB.nextSibling,n),t.length=n)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e&&e!==this._$AB;){const t=e.nextSibling;e.remove(),e=t}}setConnected(e){void 0===this._$AM&&(this._$Cv=e,this._$AP?.(e))}}class lit_html_k{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,o,n,r){this.type=1,this._$AH=ei,this._$AN=void 0,this.element=e,this.name=t,this._$AM=n,this.options=r,o.length>2||""!==o[0]||""!==o[1]?(this._$AH=Array(o.length-1).fill(new String),this.strings=o):this._$AH=ei}_$AI(e,t=this,o,n){const r=this.strings;let a=!1;if(void 0===r)e=si(this,e,t,0),a=!Nt(e)||e!==this._$AH&&e!==Xt,a&&(this._$AH=e);else{const n=e;let l,c;for(e=r[0],l=0;l<r.length-1;l++)c=si(this,n[o+l],t,l),c===Xt&&(c=this._$AH[l]),a||=!Nt(c)||c!==this._$AH[l],c===ei?e=ei:e!==ei&&(e+=(c??"")+r[l+1]),this._$AH[l]=c}a&&!n&&this.j(e)}j(e){e===ei?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class lit_html_H extends lit_html_k{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===ei?void 0:e}}class lit_html_I extends lit_html_k{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==ei)}}class lit_html_L extends lit_html_k{constructor(e,t,o,n,r){super(e,t,o,n,r),this.type=5}_$AI(e,t=this){if((e=si(this,e,t,0)??ei)===Xt)return;const o=this._$AH,n=e===ei&&o!==ei||e.capture!==o.capture||e.once!==o.once||e.passive!==o.passive,r=e!==ei&&(o===ei||n);n&&this.element.removeEventListener(this.name,this,o),r&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}}class z{constructor(e,t,o){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=o}get _$AU(){return this._$AM._$AU}_$AI(e){si(this,e)}}const ri={M:Mt,P:zt,A:Lt,C:1,L:ni,R:lit_html_M,D:Ft,V:si,I:lit_html_R,H:lit_html_k,N:lit_html_I,U:lit_html_L,B:lit_html_H,F:z},ai=Tt.litHtmlPolyfillSupport;ai?.(lit_html_N,lit_html_R),(Tt.litHtmlVersions??=[]).push("3.2.1");class lit_element_r extends reactive_element_b{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=((e,t,o)=>{const n=o?.renderBefore??t;let r=n._$litPart$;if(void 0===r){const e=o?.renderBefore??null;n._$litPart$=r=new lit_html_R(t.insertBefore(jt(),e),e,void 0,o??{})}return r._$AI(e),r})(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return Xt}}lit_element_r._$litElement$=!0,lit_element_r.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:lit_element_r});const li=globalThis.litElementPolyfillSupport;li?.({LitElement:lit_element_r});(globalThis.litElementVersions??=[]).push("4.1.1");const ci=e=>(t,o)=>{void 0!==o?o.addInitializer((()=>{customElements.define(e,t)})):customElements.define(e,t)},di={attribute:!0,type:String,converter:Et,reflect:!1,hasChanged:Pt},hi=(e=di,t,o)=>{const{kind:n,metadata:r}=o;let a=globalThis.litPropertyMetadata.get(r);if(void 0===a&&globalThis.litPropertyMetadata.set(r,a=new Map),a.set(o.name,e),"accessor"===n){const{name:n}=o;return{set(o){const r=t.get.call(this);t.set.call(this,o),this.requestUpdate(n,r,e)},init(t){return void 0!==t&&this.P(n,void 0,e),t}}}if("setter"===n){const{name:n}=o;return function(o){const r=this[n];t.call(this,o),this.requestUpdate(n,r,e)}}throw Error("Unsupported decorator location: "+n)};function pi(e){return(t,o)=>"object"==typeof o?hi(e,t,o):((e,t,o)=>{const n=t.hasOwnProperty(o);return t.constructor.createProperty(o,n?{...e,wrapped:!0}:e),n?Object.getOwnPropertyDescriptor(t,o):void 0})(e,t,o)}function ui(e){return pi({...e,state:!0,attribute:!1})}const gi=(e,t,o)=>(o.configurable=!0,o.enumerable=!0,Reflect.decorate&&"object"!=typeof t&&Object.defineProperty(e,t,o),o);function fi(e,t){return(o,n,r)=>{const a=t=>t.renderRoot?.querySelector(e)??null;if(t){const{get:e,set:t}="object"==typeof n?o:r??(()=>{const e=Symbol();return{get(){return this[e]},set(t){this[e]=t}}})();return gi(o,n,{get(){let o=e.call(this);return void 0===o&&(o=a(this),(null!==o||this.hasUpdated)&&t.call(this,o)),o}})}return gi(o,n,{get(){return a(this)}})}}function mi(e){return(t,o)=>{const{slot:n,selector:r}=e??{},a="slot"+(n?`[name=${n}]`:":not([name])");return gi(t,o,{get(){const t=this.renderRoot?.querySelector(a),o=t?.assignedElements(e)??[];return void 0===r?o:o.filter((e=>e.matches(r)))}})}}function bi(e,t,o){return e?t(e):o?.(e)}const vi="commitDetails",yi=new IpcCommand(vi,"commit/suggestChanges"),wi=new IpcCommand(vi,"commit/actions/execute"),ki=new IpcCommand(vi,"file/actions/execute"),xi=new IpcCommand(vi,"file/open"),$i=new IpcCommand(vi,"file/openOnRemote"),_i=new IpcCommand(vi,"file/compareWorking"),Ci=new IpcCommand(vi,"file/comparePrevious"),Si=new IpcCommand(vi,"file/stage"),Ai=new IpcCommand(vi,"file/unstage"),Ei=new IpcCommand(vi,"pickCommit"),Pi=new IpcCommand(vi,"searchCommit"),Ri=new IpcCommand(vi,"switchMode"),Ti=(new IpcCommand(vi,"autolinkSettings"),new IpcCommand(vi,"pin")),Oi=new IpcCommand(vi,"navigate"),Di=new IpcCommand(vi,"preferences/update"),Mi=new IpcCommand(vi,"wip/createPatch"),zi=new IpcCommand(vi,"wip/changeReviewMode"),Li=new IpcCommand(vi,"wip/showCodeSuggestion"),Ii=new IpcCommand(vi,"fetch"),Bi=new IpcCommand(vi,"publish"),ji=new IpcCommand(vi,"push"),Ni=new IpcCommand(vi,"pull"),Ui=new IpcCommand(vi,"switch"),Fi=new IpcCommand(vi,"openPullRequestChanges"),Hi=new IpcCommand(vi,"openPullRequestComparison"),qi=new IpcCommand(vi,"openPullRequestOnRemote"),Vi=new IpcCommand(vi,"openPullRequestDetails"),Wi=new IpcRequest(vi,"explain"),Gi=new IpcRequest(vi,"generate"),Ki=new IpcNotification(vi,"didChange",!0),Zi=new IpcNotification(vi,"didChange/wip"),Yi=(new IpcNotification(vi,"org/settings/didChange"),new IpcNotification(vi,"didChange/jira")),Ji=new IpcNotification(vi,"didChange/account"),Qi=new IpcNotification(vi,"didChange/patch"),Xi=Object.freeze({add:"\\ea60",plus:"\\ea60","gist-new":"\\ea60","repo-create":"\\ea60",lightbulb:"\\ea61","light-bulb":"\\ea61",repo:"\\ea62","repo-delete":"\\ea62","gist-fork":"\\ea63","repo-forked":"\\ea63","git-pull-request":"\\ea64","git-pull-request-abandoned":"\\ea64","record-keys":"\\ea65",keyboard:"\\ea65",tag:"\\ea66","git-pull-request-label":"\\ea66","tag-add":"\\ea66","tag-remove":"\\ea66",person:"\\ea67","person-follow":"\\ea67","person-outline":"\\ea67","person-filled":"\\ea67","git-branch":"\\ea68","git-branch-create":"\\ea68","git-branch-delete":"\\ea68","source-control":"\\ea68",mirror:"\\ea69","mirror-public":"\\ea69",star:"\\ea6a","star-add":"\\ea6a","star-delete":"\\ea6a","star-empty":"\\ea6a",comment:"\\ea6b","comment-add":"\\ea6b",alert:"\\ea6c",warning:"\\ea6c",search:"\\ea6d","search-save":"\\ea6d","log-out":"\\ea6e","sign-out":"\\ea6e","log-in":"\\ea6f","sign-in":"\\ea6f",eye:"\\ea70","eye-unwatch":"\\ea70","eye-watch":"\\ea70","circle-filled":"\\ea71","primitive-dot":"\\ea71","close-dirty":"\\ea71","debug-breakpoint":"\\ea71","debug-breakpoint-disabled":"\\ea71","debug-hint":"\\ea71","terminal-decoration-success":"\\ea71","primitive-square":"\\ea72",edit:"\\ea73",pencil:"\\ea73",info:"\\ea74","issue-opened":"\\ea74","gist-private":"\\ea75","git-fork-private":"\\ea75",lock:"\\ea75","mirror-private":"\\ea75",close:"\\ea76","remove-close":"\\ea76",x:"\\ea76","repo-sync":"\\ea77",sync:"\\ea77",clone:"\\ea78","desktop-download":"\\ea78",beaker:"\\ea79",microscope:"\\ea79",vm:"\\ea7a","device-desktop":"\\ea7a",file:"\\ea7b","file-text":"\\ea7b",more:"\\ea7c",ellipsis:"\\ea7c","kebab-horizontal":"\\ea7c","mail-reply":"\\ea7d",reply:"\\ea7d",organization:"\\ea7e","organization-filled":"\\ea7e","organization-outline":"\\ea7e","new-file":"\\ea7f","file-add":"\\ea7f","new-folder":"\\ea80","file-directory-create":"\\ea80",trash:"\\ea81",trashcan:"\\ea81",history:"\\ea82",clock:"\\ea82",folder:"\\ea83","file-directory":"\\ea83","symbol-folder":"\\ea83","logo-github":"\\ea84","mark-github":"\\ea84",github:"\\ea84",terminal:"\\ea85",console:"\\ea85",repl:"\\ea85",zap:"\\ea86","symbol-event":"\\ea86",error:"\\ea87",stop:"\\ea87",variable:"\\ea88","symbol-variable":"\\ea88",array:"\\ea8a","symbol-array":"\\ea8a","symbol-module":"\\ea8b","symbol-package":"\\ea8b","symbol-namespace":"\\ea8b","symbol-object":"\\ea8b","symbol-method":"\\ea8c","symbol-function":"\\ea8c","symbol-constructor":"\\ea8c","symbol-boolean":"\\ea8f","symbol-null":"\\ea8f","symbol-numeric":"\\ea90","symbol-number":"\\ea90","symbol-structure":"\\ea91","symbol-struct":"\\ea91","symbol-parameter":"\\ea92","symbol-type-parameter":"\\ea92","symbol-key":"\\ea93","symbol-text":"\\ea93","symbol-reference":"\\ea94","go-to-file":"\\ea94","symbol-enum":"\\ea95","symbol-value":"\\ea95","symbol-ruler":"\\ea96","symbol-unit":"\\ea96","activate-breakpoints":"\\ea97",archive:"\\ea98","arrow-both":"\\ea99","arrow-down":"\\ea9a","arrow-left":"\\ea9b","arrow-right":"\\ea9c","arrow-small-down":"\\ea9d","arrow-small-left":"\\ea9e","arrow-small-right":"\\ea9f","arrow-small-up":"\\eaa0","arrow-up":"\\eaa1",bell:"\\eaa2",bold:"\\eaa3",book:"\\eaa4",bookmark:"\\eaa5","debug-breakpoint-conditional-unverified":"\\eaa6","debug-breakpoint-conditional":"\\eaa7","debug-breakpoint-conditional-disabled":"\\eaa7","debug-breakpoint-data-unverified":"\\eaa8","debug-breakpoint-data":"\\eaa9","debug-breakpoint-data-disabled":"\\eaa9","debug-breakpoint-log-unverified":"\\eaaa","debug-breakpoint-log":"\\eaab","debug-breakpoint-log-disabled":"\\eaab",briefcase:"\\eaac",broadcast:"\\eaad",browser:"\\eaae",bug:"\\eaaf",calendar:"\\eab0","case-sensitive":"\\eab1",check:"\\eab2",checklist:"\\eab3","chevron-down":"\\eab4","chevron-left":"\\eab5","chevron-right":"\\eab6","chevron-up":"\\eab7","chrome-close":"\\eab8","chrome-maximize":"\\eab9","chrome-minimize":"\\eaba","chrome-restore":"\\eabb","circle-outline":"\\eabc",circle:"\\eabc","debug-breakpoint-unverified":"\\eabc","terminal-decoration-incomplete":"\\eabc","circle-slash":"\\eabd","circuit-board":"\\eabe","clear-all":"\\eabf",clippy:"\\eac0","close-all":"\\eac1","cloud-download":"\\eac2","cloud-upload":"\\eac3",code:"\\eac4","collapse-all":"\\eac5","color-mode":"\\eac6","comment-discussion":"\\eac7","credit-card":"\\eac9",dash:"\\eacc",dashboard:"\\eacd",database:"\\eace","debug-continue":"\\eacf","debug-disconnect":"\\ead0","debug-pause":"\\ead1","debug-restart":"\\ead2","debug-start":"\\ead3","debug-step-into":"\\ead4","debug-step-out":"\\ead5","debug-step-over":"\\ead6","debug-stop":"\\ead7",debug:"\\ead8","device-camera-video":"\\ead9","device-camera":"\\eada","device-mobile":"\\eadb","diff-added":"\\eadc","diff-ignored":"\\eadd","diff-modified":"\\eade","diff-removed":"\\eadf","diff-renamed":"\\eae0",diff:"\\eae1","diff-sidebyside":"\\eae1",discard:"\\eae2","editor-layout":"\\eae3","empty-window":"\\eae4",exclude:"\\eae5",extensions:"\\eae6","eye-closed":"\\eae7","file-binary":"\\eae8","file-code":"\\eae9","file-media":"\\eaea","file-pdf":"\\eaeb","file-submodule":"\\eaec","file-symlink-directory":"\\eaed","file-symlink-file":"\\eaee","file-zip":"\\eaef",files:"\\eaf0",filter:"\\eaf1",flame:"\\eaf2","fold-down":"\\eaf3","fold-up":"\\eaf4",fold:"\\eaf5","folder-active":"\\eaf6","folder-opened":"\\eaf7",gear:"\\eaf8",gift:"\\eaf9","gist-secret":"\\eafa",gist:"\\eafb","git-commit":"\\eafc","git-compare":"\\eafd","compare-changes":"\\eafd","git-merge":"\\eafe","github-action":"\\eaff","github-alt":"\\eb00",globe:"\\eb01",grabber:"\\eb02",graph:"\\eb03",gripper:"\\eb04",heart:"\\eb05",home:"\\eb06","horizontal-rule":"\\eb07",hubot:"\\eb08",inbox:"\\eb09","issue-reopened":"\\eb0b",issues:"\\eb0c",italic:"\\eb0d",jersey:"\\eb0e",json:"\\eb0f","kebab-vertical":"\\eb10",key:"\\eb11",law:"\\eb12","lightbulb-autofix":"\\eb13","link-external":"\\eb14",link:"\\eb15","list-ordered":"\\eb16","list-unordered":"\\eb17","live-share":"\\eb18",loading:"\\eb19",location:"\\eb1a","mail-read":"\\eb1b",mail:"\\eb1c",markdown:"\\eb1d",megaphone:"\\eb1e",mention:"\\eb1f",milestone:"\\eb20","git-pull-request-milestone":"\\eb20","mortar-board":"\\eb21",move:"\\eb22","multiple-windows":"\\eb23",mute:"\\eb24","no-newline":"\\eb25",note:"\\eb26",octoface:"\\eb27","open-preview":"\\eb28",package:"\\eb29",paintcan:"\\eb2a",pin:"\\eb2b",play:"\\eb2c",run:"\\eb2c",plug:"\\eb2d","preserve-case":"\\eb2e",preview:"\\eb2f",project:"\\eb30",pulse:"\\eb31",question:"\\eb32",quote:"\\eb33","radio-tower":"\\eb34",reactions:"\\eb35",references:"\\eb36",refresh:"\\eb37",regex:"\\eb38","remote-explorer":"\\eb39",remote:"\\eb3a",remove:"\\eb3b","replace-all":"\\eb3c",replace:"\\eb3d","repo-clone":"\\eb3e","repo-force-push":"\\eb3f","repo-pull":"\\eb40","repo-push":"\\eb41",report:"\\eb42","request-changes":"\\eb43",rocket:"\\eb44","root-folder-opened":"\\eb45","root-folder":"\\eb46",rss:"\\eb47",ruby:"\\eb48","save-all":"\\eb49","save-as":"\\eb4a",save:"\\eb4b","screen-full":"\\eb4c","screen-normal":"\\eb4d","search-stop":"\\eb4e",server:"\\eb50","settings-gear":"\\eb51",settings:"\\eb52",shield:"\\eb53",smiley:"\\eb54","sort-precedence":"\\eb55","split-horizontal":"\\eb56","split-vertical":"\\eb57",squirrel:"\\eb58","star-full":"\\eb59","star-half":"\\eb5a","symbol-class":"\\eb5b","symbol-color":"\\eb5c","symbol-constant":"\\eb5d","symbol-enum-member":"\\eb5e","symbol-field":"\\eb5f","symbol-file":"\\eb60","symbol-interface":"\\eb61","symbol-keyword":"\\eb62","symbol-misc":"\\eb63","symbol-operator":"\\eb64","symbol-property":"\\eb65",wrench:"\\eb65","wrench-subaction":"\\eb65","symbol-snippet":"\\eb66",tasklist:"\\eb67",telescope:"\\eb68","text-size":"\\eb69","three-bars":"\\eb6a",thumbsdown:"\\eb6b",thumbsup:"\\eb6c",tools:"\\eb6d","triangle-down":"\\eb6e","triangle-left":"\\eb6f","triangle-right":"\\eb70","triangle-up":"\\eb71",twitter:"\\eb72",unfold:"\\eb73",unlock:"\\eb74",unmute:"\\eb75",unverified:"\\eb76",verified:"\\eb77",versions:"\\eb78","vm-active":"\\eb79","vm-outline":"\\eb7a","vm-running":"\\eb7b",watch:"\\eb7c",whitespace:"\\eb7d","whole-word":"\\eb7e",window:"\\eb7f","word-wrap":"\\eb80","zoom-in":"\\eb81","zoom-out":"\\eb82","list-filter":"\\eb83","list-flat":"\\eb84","list-selection":"\\eb85",selection:"\\eb85","list-tree":"\\eb86","debug-breakpoint-function-unverified":"\\eb87","debug-breakpoint-function":"\\eb88","debug-breakpoint-function-disabled":"\\eb88","debug-stackframe-active":"\\eb89","circle-small-filled":"\\eb8a","debug-stackframe-dot":"\\eb8a","terminal-decoration-mark":"\\eb8a","debug-stackframe":"\\eb8b","debug-stackframe-focused":"\\eb8b","debug-breakpoint-unsupported":"\\eb8c","symbol-string":"\\eb8d","debug-reverse-continue":"\\eb8e","debug-step-back":"\\eb8f","debug-restart-frame":"\\eb90","debug-alt":"\\eb91","call-incoming":"\\eb92","call-outgoing":"\\eb93",menu:"\\eb94","expand-all":"\\eb95",feedback:"\\eb96","git-pull-request-reviewer":"\\eb96","group-by-ref-type":"\\eb97","ungroup-by-ref-type":"\\eb98",account:"\\eb99","git-pull-request-assignee":"\\eb99","bell-dot":"\\eb9a","debug-console":"\\eb9b",library:"\\eb9c",output:"\\eb9d","run-all":"\\eb9e","sync-ignored":"\\eb9f",pinned:"\\eba0","github-inverted":"\\eba1","server-process":"\\eba2","server-environment":"\\eba3",pass:"\\eba4","issue-closed":"\\eba4","stop-circle":"\\eba5","play-circle":"\\eba6",record:"\\eba7","debug-alt-small":"\\eba8","vm-connect":"\\eba9",cloud:"\\ebaa",merge:"\\ebab",export:"\\ebac","graph-left":"\\ebad",magnet:"\\ebae",notebook:"\\ebaf",redo:"\\ebb0","check-all":"\\ebb1","pinned-dirty":"\\ebb2","pass-filled":"\\ebb3","circle-large-filled":"\\ebb4","circle-large":"\\ebb5","circle-large-outline":"\\ebb5",combine:"\\ebb6",gather:"\\ebb6",table:"\\ebb7","variable-group":"\\ebb8","type-hierarchy":"\\ebb9","type-hierarchy-sub":"\\ebba","type-hierarchy-super":"\\ebbb","git-pull-request-create":"\\ebbc","run-above":"\\ebbd","run-below":"\\ebbe","notebook-template":"\\ebbf","debug-rerun":"\\ebc0","workspace-trusted":"\\ebc1","workspace-untrusted":"\\ebc2","workspace-unknown":"\\ebc3","terminal-cmd":"\\ebc4","terminal-debian":"\\ebc5","terminal-linux":"\\ebc6","terminal-powershell":"\\ebc7","terminal-tmux":"\\ebc8","terminal-ubuntu":"\\ebc9","terminal-bash":"\\ebca","arrow-swap":"\\ebcb",copy:"\\ebcc","person-add":"\\ebcd","filter-filled":"\\ebce",wand:"\\ebcf","debug-line-by-line":"\\ebd0",inspect:"\\ebd1",layers:"\\ebd2","layers-dot":"\\ebd3","layers-active":"\\ebd4",compass:"\\ebd5","compass-dot":"\\ebd6","compass-active":"\\ebd7",azure:"\\ebd8","issue-draft":"\\ebd9","git-pull-request-closed":"\\ebda","git-pull-request-draft":"\\ebdb","debug-all":"\\ebdc","debug-coverage":"\\ebdd","run-errors":"\\ebde","folder-library":"\\ebdf","debug-continue-small":"\\ebe0","beaker-stop":"\\ebe1","graph-line":"\\ebe2","graph-scatter":"\\ebe3","pie-chart":"\\ebe4",bracket:"\\eb0f","bracket-dot":"\\ebe5","bracket-error":"\\ebe6","lock-small":"\\ebe7","azure-devops":"\\ebe8","verified-filled":"\\ebe9",newline:"\\ebea",layout:"\\ebeb","layout-activitybar-left":"\\ebec","layout-activitybar-right":"\\ebed","layout-panel-left":"\\ebee","layout-panel-center":"\\ebef","layout-panel-justify":"\\ebf0","layout-panel-right":"\\ebf1","layout-panel":"\\ebf2","layout-sidebar-left":"\\ebf3","layout-sidebar-right":"\\ebf4","layout-statusbar":"\\ebf5","layout-menubar":"\\ebf6","layout-centered":"\\ebf7",target:"\\ebf8",indent:"\\ebf9","record-small":"\\ebfa","error-small":"\\ebfb","terminal-decoration-error":"\\ebfb","arrow-circle-down":"\\ebfc","arrow-circle-left":"\\ebfd","arrow-circle-right":"\\ebfe","arrow-circle-up":"\\ebff","layout-sidebar-right-off":"\\ec00","layout-panel-off":"\\ec01","layout-sidebar-left-off":"\\ec02",blank:"\\ec03","heart-filled":"\\ec04",map:"\\ec05","map-horizontal":"\\ec05","fold-horizontal":"\\ec05","map-filled":"\\ec06","map-horizontal-filled":"\\ec06","fold-horizontal-filled":"\\ec06","circle-small":"\\ec07","bell-slash":"\\ec08","bell-slash-dot":"\\ec09","comment-unresolved":"\\ec0a","git-pull-request-go-to-changes":"\\ec0b","git-pull-request-new-changes":"\\ec0c","search-fuzzy":"\\ec0d","comment-draft":"\\ec0e",send:"\\ec0f",sparkle:"\\ec10",insert:"\\ec11",mic:"\\ec12","thumbsdown-filled":"\\ec13","thumbsup-filled":"\\ec14",coffee:"\\ec15",snake:"\\ec16",game:"\\ec17",vr:"\\ec18",chip:"\\ec19",piano:"\\ec1a",music:"\\ec1b","mic-filled":"\\ec1c","repo-fetch":"\\ec1d",copilot:"\\ec1e","lightbulb-sparkle":"\\ec1f",robot:"\\ec20","sparkle-filled":"\\ec21","diff-single":"\\ec22","diff-multiple":"\\ec23","surround-with":"\\ec24",share:"\\ec25","git-stash":"\\ec26","git-stash-apply":"\\ec27","git-stash-pop":"\\ec28",vscode:"\\ec29","vscode-insiders":"\\ec2a","code-oss":"\\ec2b","run-coverage":"\\ec2c","run-all-coverage":"\\ec2d",coverage:"\\ec2e","github-project":"\\ec2f","map-vertical":"\\ec30","fold-vertical":"\\ec30","map-vertical-filled":"\\ec31","fold-vertical-filled":"\\ec31","go-to-search":"\\ec32",percentage:"\\ec33","sort-percentage":"\\ec33"}),eo=Object.freeze({"commit-horizontal":"\\f101",graph:"\\f102","next-commit":"\\f103","prev-commit-menu":"\\f104","prev-commit":"\\f105","compare-ref-working":"\\f106","branches-view":"\\f107","commit-view":"\\f108","commits-view":"\\f109","compare-view":"\\f10a","contributors-view":"\\f10b","history-view":"\\f10c",history:"\\f10c","remotes-view":"\\f10d","repositories-view":"\\f10e","search-view":"\\f10f","stashes-view":"\\f110",stashes:"\\f110","tags-view":"\\f111","worktrees-view":"\\f112",gitlens:"\\f113","stash-pop":"\\f114","stash-save":"\\f115",unplug:"\\f116","open-revision":"\\f117",switch:"\\f118",expand:"\\f119","list-auto":"\\f11a","pinned-filled":"\\f11c",clock:"\\f11d","provider-azdo":"\\f11e","provider-bitbucket":"\\f11f","provider-gerrit":"\\f120","provider-gitea":"\\f121","provider-github":"\\f122","provider-gitlab":"\\f123","gitlens-inspect":"\\f124","workspaces-view":"\\f125","confirm-checked":"\\f126","confirm-unchecked":"\\f127","cloud-patch":"\\f128","cloud-patch-share":"\\f129",inspect:"\\f12a","repository-filled":"\\f12b","gitlens-filled":"\\f12c","code-suggestion":"\\f12d","provider-jira":"\\f133","play-button":"\\f134","rocket-filled":"\\f135","branches-view-filled":"\\f136","commits-view-filled":"\\f137","contributors-view-filled":"\\f138","remotes-view-filled":"\\f139","repositories-view-filled":"\\f13a","search-view-filled":"\\f13b","stashes-view-filled":"\\f13c","tags-view-filled":"\\f13d","worktrees-view-filled":"\\f13e","launchpad-view":"\\f13f","launchpad-view-filled":"\\f140","merge-target":"\\f141"});var to=Object.defineProperty,io=Object.getOwnPropertyDescriptor,oo=(e,t,o,n)=>{for(var r,a=n>1?void 0:n?io(t,o):t,l=e.length-1;l>=0;l--)(r=e[l])&&(a=(n?r(t,o,a):r(a))||a);return n&&a&&to(t,o,a),a};function no(e,t=""){return ut(Object.entries(e).map((([e,o])=>function(e,t,o=""){return`:host([icon='${o}${e}'])::before { content: '${t}'; }`}(e,o,t))).join(""))}let so=class extends lit_element_r{constructor(){super(...arguments),this.icon="",this.modifier="",this.size=void 0}updated(e){e.has("size")&&this.style.setProperty("--code-icon-size",`${this.size}px`),super.update(e)}};so.styles=ft`
		:host {
			--code-icon-size: 16px;
			--code-icon-v-align: text-bottom;

			font: normal normal normal var(--code-icon-size, 16px) / 1 codicon;
			display: inline-block;
			text-decoration: none;
			text-rendering: auto;
			text-align: center;
			-webkit-font-smoothing: antialiased;
			-moz-osx-font-smoothing: grayscale;
			user-select: none;
			-webkit-user-select: none;
			-ms-user-select: none;
			color: inherit;
			vertical-align: var(--code-icon-v-align);
			letter-spacing: normal;
		}

		:host([icon^='gl-']) {
			font-family: 'glicons';
		}

		${no(Xi)}
		${no(eo,"gl-")}

		:host([icon='custom-start-work']) {
			position: relative;
		}
		:host([icon='custom-start-work'])::before {
			content: '\\ea68';
		}
		:host([icon='custom-start-work'])::after {
			content: '\\ea60';
			position: absolute;
			right: -0.2em;
			bottom: -0.2em;
			font-size: 0.6em;
			line-height: normal;
		}

		:host([icon='gl-pinned-filled']):before {
			/* TODO: see relative positioning needed in every use-case */
			position: relative;
			left: 1px;
		}

		@keyframes codicon-spin {
			100% {
				transform: rotate(360deg);
			}
		}

		:host([modifier='spin']) {
			/* Use steps to throttle FPS to reduce CPU usage */
			animation: codicon-spin 1.5s steps(30) infinite;
		}
		:host([icon='loading'][modifier='spin']) {
			/* Use steps to throttle FPS to reduce CPU usage */
			animation: codicon-spin 1.5s steps(30) infinite;

			/* custom speed & easing for loading icon */
			animation-duration: 1s !important;
			animation-timing-function: cubic-bezier(0.53, 0.21, 0.29, 0.67) !important;
		}

		:host([flip='inline']) {
			transform: rotateY(180deg);
		}

		:host([flip='block']) {
			transform: rotateX(180deg);
		}

		:host([rotate='45']) {
			transform: rotateZ(45deg);
		}
	`,oo([pi({reflect:!0})],so.prototype,"icon",2),oo([pi({reflect:!0})],so.prototype,"modifier",2),oo([pi({type:Number})],so.prototype,"size",2),oo([pi({reflect:!0})],so.prototype,"flip",2),oo([pi({reflect:!0})],so.prototype,"rotate",2),so=oo([ci("code-icon")],so);const ro=ft`
	/*
	:host {
		display: inline-block;
	}
    */

	.indicator {
		display: inline-block;
		border-radius: calc(var(--gl-indicator-size, 0.8rem) * 2);
		width: var(--gl-indicator-size, 0.8rem);
		aspect-ratio: 1;
		background-color: var(--gl-indicator-color);
		vertical-align: text-bottom;
	}
`,ao=ft`
	.indicator--pulse {
		animation: 1.5s ease 0s infinite normal none running pulse;
	}

	@keyframes pulse {
		0% {
			box-shadow: 0 0 0 0 var(--gl-indicator-pulse-color);
		}
		70% {
			box-shadow: 0 0 0 var(--gl-indicator-size, 0.8rem) transparent;
		}
		100% {
			box-shadow: 0 0 0 0 transparent;
		}
	}
`;var lo=Object.defineProperty,co=Object.getOwnPropertyDescriptor,ho=(e,t,o,n)=>{for(var r,a=n>1?void 0:n?co(t,o):t,l=e.length-1;l>=0;l--)(r=e[l])&&(a=(n?r(t,o,a):r(a))||a);return n&&a&&lo(t,o,a),a};let uo=class extends lit_element_r{constructor(){super(...arguments),this.pulse=!1}render(){return Qt`<slot class="indicator${this.pulse?" indicator--pulse":""}"></slot>`}};uo.styles=[ro,ao],ho([pi({type:Boolean})],uo.prototype,"pulse",2),uo=ho([ci("gl-indicator")],uo);var go=Object.defineProperty,fo=Object.defineProperties,mo=Object.getOwnPropertyDescriptor,wo=Object.getOwnPropertyDescriptors,ko=Object.getOwnPropertySymbols,xo=Object.prototype.hasOwnProperty,_o=Object.prototype.propertyIsEnumerable,Co=e=>{throw TypeError(e)},So=(e,t,o)=>t in e?go(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,Ao=(e,t)=>{for(var o in t||(t={}))xo.call(t,o)&&So(e,o,t[o]);if(ko)for(var o of ko(t))_o.call(t,o)&&So(e,o,t[o]);return e},Eo=(e,t)=>fo(e,wo(t)),Po=(e,t,o,n)=>{for(var r,a=n>1?void 0:n?mo(t,o):t,l=e.length-1;l>=0;l--)(r=e[l])&&(a=(n?r(t,o,a):r(a))||a);return n&&a&&go(t,o,a),a},To=(e,t,o)=>t.has(e)||Co("Cannot "+o),Oo=new Map,zo=new WeakMap;function Lo(e){return null!=e?e:{keyframes:[],options:{duration:0}}}function Io(e,t){return"rtl"===t.toLowerCase()?{keyframes:e.rtlKeyframes||e.keyframes,options:e.options}:e}function jo(e,t){Oo.set(e,Lo(t))}function No(e,t,o){const n=zo.get(e);if(null==n?void 0:n[t])return Io(n[t],o.dir);const r=Oo.get(t);return r?Io(r,o.dir):{keyframes:[],options:{duration:0}}}var Uo=ft`
  :host {
    --max-width: 20rem;
    --hide-delay: 0ms;
    --show-delay: 150ms;

    display: contents;
  }

  .tooltip {
    --arrow-size: var(--sl-tooltip-arrow-size);
    --arrow-color: var(--sl-tooltip-background-color);
  }

  .tooltip::part(popup) {
    z-index: var(--sl-z-index-tooltip);
  }

  .tooltip[placement^='top']::part(popup) {
    transform-origin: bottom;
  }

  .tooltip[placement^='bottom']::part(popup) {
    transform-origin: top;
  }

  .tooltip[placement^='left']::part(popup) {
    transform-origin: right;
  }

  .tooltip[placement^='right']::part(popup) {
    transform-origin: left;
  }

  .tooltip__body {
    display: block;
    width: max-content;
    max-width: var(--max-width);
    border-radius: var(--sl-tooltip-border-radius);
    background-color: var(--sl-tooltip-background-color);
    font-family: var(--sl-tooltip-font-family);
    font-size: var(--sl-tooltip-font-size);
    font-weight: var(--sl-tooltip-font-weight);
    line-height: var(--sl-tooltip-line-height);
    text-align: start;
    white-space: normal;
    color: var(--sl-tooltip-color);
    padding: var(--sl-tooltip-padding);
    pointer-events: none;
    user-select: none;
    -webkit-user-select: none;
  }
`,Fo=ft`
  :host {
    --arrow-color: var(--sl-color-neutral-1000);
    --arrow-size: 6px;

    /*
     * These properties are computed to account for the arrow's dimensions after being rotated 45º. The constant
     * 0.7071 is derived from sin(45), which is the diagonal size of the arrow's container after rotating.
     */
    --arrow-size-diagonal: calc(var(--arrow-size) * 0.7071);
    --arrow-padding-offset: calc(var(--arrow-size-diagonal) - var(--arrow-size));

    display: contents;
  }

  .popup {
    position: absolute;
    isolation: isolate;
    max-width: var(--auto-size-available-width, none);
    max-height: var(--auto-size-available-height, none);
  }

  .popup--fixed {
    position: fixed;
  }

  .popup:not(.popup--active) {
    display: none;
  }

  .popup__arrow {
    position: absolute;
    width: calc(var(--arrow-size-diagonal) * 2);
    height: calc(var(--arrow-size-diagonal) * 2);
    rotate: 45deg;
    background: var(--arrow-color);
    z-index: -1;
  }

  /* Hover bridge */
  .popup-hover-bridge:not(.popup-hover-bridge--visible) {
    display: none;
  }

  .popup-hover-bridge {
    position: fixed;
    z-index: calc(var(--sl-z-index-dropdown) - 1);
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    clip-path: polygon(
      var(--hover-bridge-top-left-x, 0) var(--hover-bridge-top-left-y, 0),
      var(--hover-bridge-top-right-x, 0) var(--hover-bridge-top-right-y, 0),
      var(--hover-bridge-bottom-right-x, 0) var(--hover-bridge-bottom-right-y, 0),
      var(--hover-bridge-bottom-left-x, 0) var(--hover-bridge-bottom-left-y, 0)
    );
  }
`;const qo=new Set,Vo=new Map;let Wo,Go="ltr",Ko="en";const Zo="undefined"!=typeof MutationObserver&&"undefined"!=typeof document&&void 0!==document.documentElement;if(Zo){const e=new MutationObserver(Jo);Go=document.documentElement.dir||"ltr",Ko=document.documentElement.lang||navigator.language,e.observe(document.documentElement,{attributes:!0,attributeFilter:["dir","lang"]})}function Yo(...e){e.map((e=>{const t=e.$code.toLowerCase();Vo.has(t)?Vo.set(t,Object.assign(Object.assign({},Vo.get(t)),e)):Vo.set(t,e),Wo||(Wo=e)})),Jo()}function Jo(){Zo&&(Go=document.documentElement.dir||"ltr",Ko=document.documentElement.lang||navigator.language),[...qo.keys()].map((e=>{"function"==typeof e.requestUpdate&&e.requestUpdate()}))}class LocalizeController{constructor(e){this.host=e,this.host.addController(this)}hostConnected(){qo.add(this.host)}hostDisconnected(){qo.delete(this.host)}dir(){return`${this.host.dir||Go}`.toLowerCase()}lang(){return`${this.host.lang||Ko}`.toLowerCase()}getTranslationData(e){var t,o;const n=new Intl.Locale(e.replace(/_/g,"-")),r=null==n?void 0:n.language.toLowerCase(),a=null!==(o=null===(t=null==n?void 0:n.region)||void 0===t?void 0:t.toLowerCase())&&void 0!==o?o:"";return{locale:n,language:r,region:a,primary:Vo.get(`${r}-${a}`),secondary:Vo.get(r)}}exists(e,t){var o;const{primary:n,secondary:r}=this.getTranslationData(null!==(o=t.lang)&&void 0!==o?o:this.lang());return t=Object.assign({includeFallback:!1},t),!!(n&&n[e]||r&&r[e]||t.includeFallback&&Wo&&Wo[e])}term(e,...t){const{primary:o,secondary:n}=this.getTranslationData(this.lang());let r;if(o&&o[e])r=o[e];else if(n&&n[e])r=n[e];else{if(!Wo||!Wo[e])return String(e);r=Wo[e]}return"function"==typeof r?r(...t):r}date(e,t){return e=new Date(e),new Intl.DateTimeFormat(this.lang(),t).format(e)}number(e,t){return e=Number(e),isNaN(e)?"":new Intl.NumberFormat(this.lang(),t).format(e)}relativeTime(e,t,o){return new Intl.RelativeTimeFormat(this.lang(),o).format(e,t)}}var Qo={$code:"en",$name:"English",$dir:"ltr",carousel:"Carousel",clearEntry:"Clear entry",close:"Close",copied:"Copied",copy:"Copy",currentValue:"Current value",error:"Error",goToSlide:(e,t)=>`Go to slide ${e} of ${t}`,hidePassword:"Hide password",loading:"Loading",nextSlide:"Next slide",numOptionsSelected:e=>0===e?"No options selected":1===e?"1 option selected":`${e} options selected`,previousSlide:"Previous slide",progress:"Progress",remove:"Remove",resize:"Resize",scrollToEnd:"Scroll to end",scrollToStart:"Scroll to start",selectAColorFromTheScreen:"Select a color from the screen",showPassword:"Show password",slideNum:e=>`Slide ${e}`,toggleColorFormat:"Toggle color format"};Yo(Qo);var Xo=Qo,en=class extends LocalizeController{};Yo(Xo);var tn,on=ft`
  :host {
    box-sizing: border-box;
  }

  :host *,
  :host *::before,
  :host *::after {
    box-sizing: inherit;
  }

  [hidden] {
    display: none !important;
  }
`,nn=class extends lit_element_r{constructor(){var e,t,o;super(),e=this,o=!1,(t=tn).has(e)?Co("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,o),this.initialReflectedProperties=new Map,Object.entries(this.constructor.dependencies).forEach((([e,t])=>{this.constructor.define(e,t)}))}emit(e,t){const o=new CustomEvent(e,Ao({bubbles:!0,cancelable:!1,composed:!0,detail:{}},t));return this.dispatchEvent(o),o}static define(e,t=this,o={}){const n=customElements.get(e);if(!n){try{customElements.define(e,t,o)}catch(n){customElements.define(e,class extends t{},o)}return}let r=" (unknown version)",a=r;"version"in t&&t.version&&(r=" v"+t.version),"version"in n&&n.version&&(a=" v"+n.version)}attributeChangedCallback(e,t,o){var n,r,a;To(n=this,r=tn,"read from private field"),(a?a.call(n):r.get(n))||(this.constructor.elementProperties.forEach(((e,t)=>{e.reflect&&null!=this[t]&&this.initialReflectedProperties.set(t,this[t])})),((e,t,o,n)=>{To(e,t,"write to private field"),n?n.call(e,o):t.set(e,o)})(this,tn,!0)),super.attributeChangedCallback(e,t,o)}willUpdate(e){super.willUpdate(e),this.initialReflectedProperties.forEach(((t,o)=>{e.has(o)&&null==this[o]&&(this[o]=t)}))}};tn=new WeakMap,nn.version="2.19.1",nn.dependencies={},Po([pi()],nn.prototype,"dir",2),Po([pi()],nn.prototype,"lang",2);const sn=Math.min,rn=Math.max,an=Math.round,ln=Math.floor,cn=e=>({x:e,y:e}),dn={left:"right",right:"left",bottom:"top",top:"bottom"},hn={start:"end",end:"start"};function pn(e,t,o){return rn(e,sn(t,o))}function un(e,t){return"function"==typeof e?e(t):e}function gn(e){return e.split("-")[0]}function fn(e){return e.split("-")[1]}function mn(e){return"x"===e?"y":"x"}function bn(e){return"y"===e?"height":"width"}function vn(e){return["top","bottom"].includes(gn(e))?"y":"x"}function yn(e){return mn(vn(e))}function wn(e){return e.replace(/start|end/g,(e=>hn[e]))}function kn(e){return e.replace(/left|right|bottom|top/g,(e=>dn[e]))}function xn(e){return"number"!=typeof e?function(e){return{top:0,right:0,bottom:0,left:0,...e}}(e):{top:e,right:e,bottom:e,left:e}}function $n(e){const{x:t,y:o,width:n,height:r}=e;return{width:n,height:r,top:o,left:t,right:t+n,bottom:o+r,x:t,y:o}}function _n(e,t,o){let{reference:n,floating:r}=e;const a=vn(t),l=yn(t),c=bn(l),d=gn(t),h="y"===a,p=n.x+n.width/2-r.width/2,u=n.y+n.height/2-r.height/2,g=n[c]/2-r[c]/2;let f;switch(d){case"top":f={x:p,y:n.y-r.height};break;case"bottom":f={x:p,y:n.y+n.height};break;case"right":f={x:n.x+n.width,y:u};break;case"left":f={x:n.x-r.width,y:u};break;default:f={x:n.x,y:n.y}}switch(fn(t)){case"start":f[l]-=g*(o&&h?-1:1);break;case"end":f[l]+=g*(o&&h?-1:1)}return f}async function Cn(e,t){var o;void 0===t&&(t={});const{x:n,y:r,platform:a,rects:l,elements:c,strategy:d}=e,{boundary:h="clippingAncestors",rootBoundary:p="viewport",elementContext:u="floating",altBoundary:g=!1,padding:f=0}=un(t,e),m=xn(f),b=c[g?"floating"===u?"reference":"floating":u],v=$n(await a.getClippingRect({element:null==(o=await(null==a.isElement?void 0:a.isElement(b)))||o?b:b.contextElement||await(null==a.getDocumentElement?void 0:a.getDocumentElement(c.floating)),boundary:h,rootBoundary:p,strategy:d})),y="floating"===u?{x:n,y:r,width:l.floating.width,height:l.floating.height}:l.reference,w=await(null==a.getOffsetParent?void 0:a.getOffsetParent(c.floating)),k=await(null==a.isElement?void 0:a.isElement(w))&&await(null==a.getScale?void 0:a.getScale(w))||{x:1,y:1},x=$n(a.convertOffsetParentRelativeRectToViewportRelativeRect?await a.convertOffsetParentRelativeRectToViewportRelativeRect({elements:c,rect:y,offsetParent:w,strategy:d}):y);return{top:(v.top-x.top+m.top)/k.y,bottom:(x.bottom-v.bottom+m.bottom)/k.y,left:(v.left-x.left+m.left)/k.x,right:(x.right-v.right+m.right)/k.x}}function Sn(){return"undefined"!=typeof window}function An(e){return Rn(e)?(e.nodeName||"").toLowerCase():"#document"}function En(e){var t;return(null==e||null==(t=e.ownerDocument)?void 0:t.defaultView)||window}function Pn(e){var t;return null==(t=(Rn(e)?e.ownerDocument:e.document)||window.document)?void 0:t.documentElement}function Rn(e){return!!Sn()&&(e instanceof Node||e instanceof En(e).Node)}function Tn(e){return!!Sn()&&(e instanceof Element||e instanceof En(e).Element)}function On(e){return!!Sn()&&(e instanceof HTMLElement||e instanceof En(e).HTMLElement)}function Dn(e){return!(!Sn()||"undefined"==typeof ShadowRoot)&&(e instanceof ShadowRoot||e instanceof En(e).ShadowRoot)}function Mn(e){const{overflow:t,overflowX:o,overflowY:n,display:r}=Nn(e);return/auto|scroll|overlay|hidden|clip/.test(t+n+o)&&!["inline","contents"].includes(r)}function zn(e){return["table","td","th"].includes(An(e))}function Ln(e){return[":popover-open",":modal"].some((t=>{try{return e.matches(t)}catch(e){return!1}}))}function In(e){const t=Bn(),o=Tn(e)?Nn(e):e;return["transform","translate","scale","rotate","perspective"].some((e=>!!o[e]&&"none"!==o[e]))||!!o.containerType&&"normal"!==o.containerType||!t&&!!o.backdropFilter&&"none"!==o.backdropFilter||!t&&!!o.filter&&"none"!==o.filter||["transform","translate","scale","rotate","perspective","filter"].some((e=>(o.willChange||"").includes(e)))||["paint","layout","strict","content"].some((e=>(o.contain||"").includes(e)))}function Bn(){return!("undefined"==typeof CSS||!CSS.supports)&&CSS.supports("-webkit-backdrop-filter","none")}function jn(e){return["html","body","#document"].includes(An(e))}function Nn(e){return En(e).getComputedStyle(e)}function Un(e){return Tn(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function Fn(e){if("html"===An(e))return e;const t=e.assignedSlot||e.parentNode||Dn(e)&&e.host||Pn(e);return Dn(t)?t.host:t}function Hn(e){const t=Fn(e);return jn(t)?e.ownerDocument?e.ownerDocument.body:e.body:On(t)&&Mn(t)?t:Hn(t)}function qn(e,t,o){var n;void 0===t&&(t=[]),void 0===o&&(o=!0);const r=Hn(e),a=r===(null==(n=e.ownerDocument)?void 0:n.body),l=En(r);if(a){const e=Vn(l);return t.concat(l,l.visualViewport||[],Mn(r)?r:[],e&&o?qn(e):[])}return t.concat(r,qn(r,[],o))}function Vn(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}function Wn(e){const t=Nn(e);let o=parseFloat(t.width)||0,n=parseFloat(t.height)||0;const r=On(e),a=r?e.offsetWidth:o,l=r?e.offsetHeight:n,c=an(o)!==a||an(n)!==l;return c&&(o=a,n=l),{width:o,height:n,$:c}}function Gn(e){return Tn(e)?e:e.contextElement}function Kn(e){const t=Gn(e);if(!On(t))return cn(1);const o=t.getBoundingClientRect(),{width:n,height:r,$:a}=Wn(t);let l=(a?an(o.width):o.width)/n,c=(a?an(o.height):o.height)/r;return l&&Number.isFinite(l)||(l=1),c&&Number.isFinite(c)||(c=1),{x:l,y:c}}const Zn=cn(0);function Yn(e){const t=En(e);return Bn()&&t.visualViewport?{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}:Zn}function Jn(e,t,o,n){void 0===t&&(t=!1),void 0===o&&(o=!1);const r=e.getBoundingClientRect(),a=Gn(e);let l=cn(1);t&&(n?Tn(n)&&(l=Kn(n)):l=Kn(e));const c=function(e,t,o){return void 0===t&&(t=!1),!(!o||t&&o!==En(e))&&t}(a,o,n)?Yn(a):cn(0);let d=(r.left+c.x)/l.x,h=(r.top+c.y)/l.y,p=r.width/l.x,u=r.height/l.y;if(a){const e=En(a),t=n&&Tn(n)?En(n):n;let o=e,r=Vn(o);for(;r&&n&&t!==o;){const e=Kn(r),t=r.getBoundingClientRect(),n=Nn(r),a=t.left+(r.clientLeft+parseFloat(n.paddingLeft))*e.x,l=t.top+(r.clientTop+parseFloat(n.paddingTop))*e.y;d*=e.x,h*=e.y,p*=e.x,u*=e.y,d+=a,h+=l,o=En(r),r=Vn(o)}}return $n({width:p,height:u,x:d,y:h})}function Qn(e,t){const o=Un(e).scrollLeft;return t?t.left+o:Jn(Pn(e)).left+o}function Xn(e,t,o){void 0===o&&(o=!1);const n=e.getBoundingClientRect();return{x:n.left+t.scrollLeft-(o?0:Qn(e,n)),y:n.top+t.scrollTop}}function es(e,t,o){let n;if("viewport"===t)n=function(e,t){const o=En(e),n=Pn(e),r=o.visualViewport;let a=n.clientWidth,l=n.clientHeight,c=0,d=0;if(r){a=r.width,l=r.height;const e=Bn();(!e||e&&"fixed"===t)&&(c=r.offsetLeft,d=r.offsetTop)}return{width:a,height:l,x:c,y:d}}(e,o);else if("document"===t)n=function(e){const t=Pn(e),o=Un(e),n=e.ownerDocument.body,r=rn(t.scrollWidth,t.clientWidth,n.scrollWidth,n.clientWidth),a=rn(t.scrollHeight,t.clientHeight,n.scrollHeight,n.clientHeight);let l=-o.scrollLeft+Qn(e);const c=-o.scrollTop;return"rtl"===Nn(n).direction&&(l+=rn(t.clientWidth,n.clientWidth)-r),{width:r,height:a,x:l,y:c}}(Pn(e));else if(Tn(t))n=function(e,t){const o=Jn(e,!0,"fixed"===t),n=o.top+e.clientTop,r=o.left+e.clientLeft,a=On(e)?Kn(e):cn(1);return{width:e.clientWidth*a.x,height:e.clientHeight*a.y,x:r*a.x,y:n*a.y}}(t,o);else{const o=Yn(e);n={x:t.x-o.x,y:t.y-o.y,width:t.width,height:t.height}}return $n(n)}function ts(e,t){const o=Fn(e);return!(o===t||!Tn(o)||jn(o))&&("fixed"===Nn(o).position||ts(o,t))}function is(e,t,o){const n=On(t),r=Pn(t),a="fixed"===o,l=Jn(e,!0,a,t);let c={scrollLeft:0,scrollTop:0};const d=cn(0);if(n||!n&&!a)if(("body"!==An(t)||Mn(r))&&(c=Un(t)),n){const e=Jn(t,!0,a,t);d.x=e.x+t.clientLeft,d.y=e.y+t.clientTop}else r&&(d.x=Qn(r));const h=!r||n||a?cn(0):Xn(r,c);return{x:l.left+c.scrollLeft-d.x-h.x,y:l.top+c.scrollTop-d.y-h.y,width:l.width,height:l.height}}function os(e){return"static"===Nn(e).position}function ns(e,t){if(!On(e)||"fixed"===Nn(e).position)return null;if(t)return t(e);let o=e.offsetParent;return Pn(e)===o&&(o=o.ownerDocument.body),o}function ss(e,t){const o=En(e);if(Ln(e))return o;if(!On(e)){let t=Fn(e);for(;t&&!jn(t);){if(Tn(t)&&!os(t))return t;t=Fn(t)}return o}let n=ns(e,t);for(;n&&zn(n)&&os(n);)n=ns(n,t);return n&&jn(n)&&os(n)&&!In(n)?o:n||function(e){let t=Fn(e);for(;On(t)&&!jn(t);){if(In(t))return t;if(Ln(t))return null;t=Fn(t)}return null}(e)||o}const rs={convertOffsetParentRelativeRectToViewportRelativeRect:function(e){let{elements:t,rect:o,offsetParent:n,strategy:r}=e;const a="fixed"===r,l=Pn(n),c=!!t&&Ln(t.floating);if(n===l||c&&a)return o;let d={scrollLeft:0,scrollTop:0},h=cn(1);const p=cn(0),u=On(n);if((u||!u&&!a)&&(("body"!==An(n)||Mn(l))&&(d=Un(n)),On(n))){const e=Jn(n);h=Kn(n),p.x=e.x+n.clientLeft,p.y=e.y+n.clientTop}const g=!l||u||a?cn(0):Xn(l,d,!0);return{width:o.width*h.x,height:o.height*h.y,x:o.x*h.x-d.scrollLeft*h.x+p.x+g.x,y:o.y*h.y-d.scrollTop*h.y+p.y+g.y}},getDocumentElement:Pn,getClippingRect:function(e){let{element:t,boundary:o,rootBoundary:n,strategy:r}=e;const a=[..."clippingAncestors"===o?Ln(t)?[]:function(e,t){const o=t.get(e);if(o)return o;let n=qn(e,[],!1).filter((e=>Tn(e)&&"body"!==An(e))),r=null;const a="fixed"===Nn(e).position;let l=a?Fn(e):e;for(;Tn(l)&&!jn(l);){const t=Nn(l),o=In(l);o||"fixed"!==t.position||(r=null),(a?!o&&!r:!o&&"static"===t.position&&r&&["absolute","fixed"].includes(r.position)||Mn(l)&&!o&&ts(e,l))?n=n.filter((e=>e!==l)):r=t,l=Fn(l)}return t.set(e,n),n}(t,this._c):[].concat(o),n],l=a[0],c=a.reduce(((e,o)=>{const n=es(t,o,r);return e.top=rn(n.top,e.top),e.right=sn(n.right,e.right),e.bottom=sn(n.bottom,e.bottom),e.left=rn(n.left,e.left),e}),es(t,l,r));return{width:c.right-c.left,height:c.bottom-c.top,x:c.left,y:c.top}},getOffsetParent:ss,getElementRects:async function(e){const t=this.getOffsetParent||ss,o=this.getDimensions,n=await o(e.floating);return{reference:is(e.reference,await t(e.floating),e.strategy),floating:{x:0,y:0,width:n.width,height:n.height}}},getClientRects:function(e){return Array.from(e.getClientRects())},getDimensions:function(e){const{width:t,height:o}=Wn(e);return{width:t,height:o}},getScale:Kn,isElement:Tn,isRTL:function(e){return"rtl"===Nn(e).direction}};function as(e,t){return e.x===t.x&&e.y===t.y&&e.width===t.width&&e.height===t.height}function ls(e,t,o,n){void 0===n&&(n={});const{ancestorScroll:r=!0,ancestorResize:a=!0,elementResize:l="function"==typeof ResizeObserver,layoutShift:c="function"==typeof IntersectionObserver,animationFrame:d=!1}=n,h=Gn(e),p=r||a?[...h?qn(h):[],...qn(t)]:[];p.forEach((e=>{r&&e.addEventListener("scroll",o,{passive:!0}),a&&e.addEventListener("resize",o)}));const u=h&&c?function(e,t){let o,n=null;const r=Pn(e);function a(){var e;clearTimeout(o),null==(e=n)||e.disconnect(),n=null}return function l(c,d){void 0===c&&(c=!1),void 0===d&&(d=1),a();const h=e.getBoundingClientRect(),{left:p,top:u,width:g,height:f}=h;if(c||t(),!g||!f)return;const m={rootMargin:-ln(u)+"px "+-ln(r.clientWidth-(p+g))+"px "+-ln(r.clientHeight-(u+f))+"px "+-ln(p)+"px",threshold:rn(0,sn(1,d))||1};let b=!0;function v(t){const n=t[0].intersectionRatio;if(n!==d){if(!b)return l();n?l(!1,n):o=setTimeout((()=>{l(!1,1e-7)}),1e3)}1!==n||as(h,e.getBoundingClientRect())||l(),b=!1}try{n=new IntersectionObserver(v,{...m,root:r.ownerDocument})}catch(e){n=new IntersectionObserver(v,m)}n.observe(e)}(!0),a}(h,o):null;let g,f=-1,m=null;l&&(m=new ResizeObserver((e=>{let[n]=e;n&&n.target===h&&m&&(m.unobserve(t),cancelAnimationFrame(f),f=requestAnimationFrame((()=>{var e;null==(e=m)||e.observe(t)}))),o()})),h&&!d&&m.observe(h),m.observe(t));let b=d?Jn(e):null;return d&&function t(){const n=Jn(e);b&&!as(b,n)&&o();b=n,g=requestAnimationFrame(t)}(),o(),()=>{var e;p.forEach((e=>{r&&e.removeEventListener("scroll",o),a&&e.removeEventListener("resize",o)})),null==u||u(),null==(e=m)||e.disconnect(),m=null,d&&cancelAnimationFrame(g)}}const cs=function(e){return void 0===e&&(e=0),{name:"offset",options:e,async fn(t){var o,n;const{x:r,y:a,placement:l,middlewareData:c}=t,d=await async function(e,t){const{placement:o,platform:n,elements:r}=e,a=await(null==n.isRTL?void 0:n.isRTL(r.floating)),l=gn(o),c=fn(o),d="y"===vn(o),h=["left","top"].includes(l)?-1:1,p=a&&d?-1:1,u=un(t,e);let{mainAxis:g,crossAxis:f,alignmentAxis:m}="number"==typeof u?{mainAxis:u,crossAxis:0,alignmentAxis:null}:{mainAxis:u.mainAxis||0,crossAxis:u.crossAxis||0,alignmentAxis:u.alignmentAxis};return c&&"number"==typeof m&&(f="end"===c?-1*m:m),d?{x:f*p,y:g*h}:{x:g*h,y:f*p}}(t,e);return l===(null==(o=c.offset)?void 0:o.placement)&&null!=(n=c.arrow)&&n.alignmentOffset?{}:{x:r+d.x,y:a+d.y,data:{...d,placement:l}}}}},ds=function(e){return void 0===e&&(e={}),{name:"shift",options:e,async fn(t){const{x:o,y:n,placement:r}=t,{mainAxis:a=!0,crossAxis:l=!1,limiter:c={fn:e=>{let{x:t,y:o}=e;return{x:t,y:o}}},...d}=un(e,t),h={x:o,y:n},p=await Cn(t,d),u=vn(gn(r)),g=mn(u);let f=h[g],m=h[u];if(a){const e="y"===g?"bottom":"right";f=pn(f+p["y"===g?"top":"left"],f,f-p[e])}if(l){const e="y"===u?"bottom":"right";m=pn(m+p["y"===u?"top":"left"],m,m-p[e])}const b=c.fn({...t,[g]:f,[u]:m});return{...b,data:{x:b.x-o,y:b.y-n,enabled:{[g]:a,[u]:l}}}}}},hs=function(e){return void 0===e&&(e={}),{name:"flip",options:e,async fn(t){var o,n;const{placement:r,middlewareData:a,rects:l,initialPlacement:c,platform:d,elements:h}=t,{mainAxis:p=!0,crossAxis:u=!0,fallbackPlacements:g,fallbackStrategy:f="bestFit",fallbackAxisSideDirection:m="none",flipAlignment:b=!0,...v}=un(e,t);if(null!=(o=a.arrow)&&o.alignmentOffset)return{};const y=gn(r),w=vn(c),k=gn(c)===c,x=await(null==d.isRTL?void 0:d.isRTL(h.floating)),_=g||(k||!b?[kn(c)]:function(e){const t=kn(e);return[wn(e),t,wn(t)]}(c)),C="none"!==m;!g&&C&&_.push(...function(e,t,o,n){const r=fn(e);let a=function(e,t,o){const n=["left","right"],r=["right","left"],a=["top","bottom"],l=["bottom","top"];switch(e){case"top":case"bottom":return o?t?r:n:t?n:r;case"left":case"right":return t?a:l;default:return[]}}(gn(e),"start"===o,n);return r&&(a=a.map((e=>e+"-"+r)),t&&(a=a.concat(a.map(wn)))),a}(c,b,m,x));const S=[c,..._],A=await Cn(t,v),E=[];let P=(null==(n=a.flip)?void 0:n.overflows)||[];if(p&&E.push(A[y]),u){const e=function(e,t,o){void 0===o&&(o=!1);const n=fn(e),r=yn(e),a=bn(r);let l="x"===r?n===(o?"end":"start")?"right":"left":"start"===n?"bottom":"top";return t.reference[a]>t.floating[a]&&(l=kn(l)),[l,kn(l)]}(r,l,x);E.push(A[e[0]],A[e[1]])}if(P=[...P,{placement:r,overflows:E}],!E.every((e=>e<=0))){var R,T;const e=((null==(R=a.flip)?void 0:R.index)||0)+1,t=S[e];if(t)return{data:{index:e,overflows:P},reset:{placement:t}};let o=null==(T=P.filter((e=>e.overflows[0]<=0)).sort(((e,t)=>e.overflows[1]-t.overflows[1]))[0])?void 0:T.placement;if(!o)switch(f){case"bestFit":{var O;const e=null==(O=P.filter((e=>{if(C){const t=vn(e.placement);return t===w||"y"===t}return!0})).map((e=>[e.placement,e.overflows.filter((e=>e>0)).reduce(((e,t)=>e+t),0)])).sort(((e,t)=>e[1]-t[1]))[0])?void 0:O[0];e&&(o=e);break}case"initialPlacement":o=c}if(r!==o)return{reset:{placement:o}}}return{}}}},ps=function(e){return void 0===e&&(e={}),{name:"size",options:e,async fn(t){var o,n;const{placement:r,rects:a,platform:l,elements:c}=t,{apply:d=()=>{},...h}=un(e,t),p=await Cn(t,h),u=gn(r),g=fn(r),f="y"===vn(r),{width:m,height:b}=a.floating;let v,y;"top"===u||"bottom"===u?(v=u,y=g===(await(null==l.isRTL?void 0:l.isRTL(c.floating))?"start":"end")?"left":"right"):(y=u,v="end"===g?"top":"bottom");const w=b-p.top-p.bottom,k=m-p.left-p.right,x=sn(b-p[v],w),_=sn(m-p[y],k),C=!t.middlewareData.shift;let S=x,A=_;if(null!=(o=t.middlewareData.shift)&&o.enabled.x&&(A=k),null!=(n=t.middlewareData.shift)&&n.enabled.y&&(S=w),C&&!g){const e=rn(p.left,0),t=rn(p.right,0),o=rn(p.top,0),n=rn(p.bottom,0);f?A=m-2*(0!==e||0!==t?e+t:rn(p.left,p.right)):S=b-2*(0!==o||0!==n?o+n:rn(p.top,p.bottom))}await d({...t,availableWidth:A,availableHeight:S});const E=await l.getDimensions(c.floating);return m!==E.width||b!==E.height?{reset:{rects:!0}}:{}}}},us=e=>({name:"arrow",options:e,async fn(t){const{x:o,y:n,placement:r,rects:a,platform:l,elements:c,middlewareData:d}=t,{element:h,padding:p=0}=un(e,t)||{};if(null==h)return{};const u=xn(p),g={x:o,y:n},f=yn(r),m=bn(f),b=await l.getDimensions(h),v="y"===f,y=v?"top":"left",w=v?"bottom":"right",k=v?"clientHeight":"clientWidth",x=a.reference[m]+a.reference[f]-g[f]-a.floating[m],_=g[f]-a.reference[f],C=await(null==l.getOffsetParent?void 0:l.getOffsetParent(h));let S=C?C[k]:0;S&&await(null==l.isElement?void 0:l.isElement(C))||(S=c.floating[k]||a.floating[m]);const A=x/2-_/2,E=S/2-b[m]/2-1,P=sn(u[y],E),R=sn(u[w],E),T=P,O=S-b[m]-R,D=S/2-b[m]/2+A,M=pn(T,D,O),L=!d.arrow&&null!=fn(r)&&D!==M&&a.reference[m]/2-(D<T?P:R)-b[m]/2<0,I=L?D<T?D-T:D-O:0;return{[f]:g[f]+I,data:{[f]:M,centerOffset:D-M-I,...L&&{alignmentOffset:I}},reset:L}}}),gs=(e,t,o)=>{const n=new Map,r={platform:rs,...o},a={...r.platform,_c:n};return(async(e,t,o)=>{const{placement:n="bottom",strategy:r="absolute",middleware:a=[],platform:l}=o,c=a.filter(Boolean),d=await(null==l.isRTL?void 0:l.isRTL(t));let h=await l.getElementRects({reference:e,floating:t,strategy:r}),{x:p,y:u}=_n(h,n,d),g=n,f={},m=0;for(let o=0;o<c.length;o++){const{name:a,fn:b}=c[o],{x:v,y,data:w,reset:k}=await b({x:p,y:u,initialPlacement:n,placement:g,strategy:r,middlewareData:f,rects:h,platform:l,elements:{reference:e,floating:t}});p=null!=v?v:p,u=null!=y?y:u,f={...f,[a]:{...f[a],...w}},k&&m<=50&&(m++,"object"==typeof k&&(k.placement&&(g=k.placement),k.rects&&(h=!0===k.rects?await l.getElementRects({reference:e,floating:t,strategy:r}):k.rects),({x:p,y:u}=_n(h,g,d))),o=-1)}return{x:p,y:u,placement:g,strategy:r,middlewareData:f}})(e,t,{...r,platform:a})},fs=1,ms=2,bs=e=>(...t)=>({_$litDirective$:e,values:t});class directive_i{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,o){this._$Ct=e,this._$AM=t,this._$Ci=o}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}const vs=bs(class extends directive_i{constructor(e){if(super(e),e.type!==fs||"class"!==e.name||e.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter((t=>e[t])).join(" ")+" "}update(e,[t]){if(void 0===this.st){this.st=new Set,void 0!==e.strings&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter((e=>""!==e))));for(const e in t)t[e]&&!this.nt?.has(e)&&this.st.add(e);return this.render(t)}const o=e.element.classList;for(const e of this.st)e in t||(o.remove(e),this.st.delete(e));for(const e in t){const n=!!t[e];n===this.st.has(e)||this.nt?.has(e)||(n?(o.add(e),this.st.add(e)):(o.remove(e),this.st.delete(e)))}return Xt}});function ys(e){return ks(e)}function ws(e){return e.assignedSlot?e.assignedSlot:e.parentNode instanceof ShadowRoot?e.parentNode.host:e.parentNode}function ks(e){for(let t=e;t;t=ws(t))if(t instanceof Element&&"none"===getComputedStyle(t).display)return null;for(let t=ws(e);t;t=ws(t)){if(!(t instanceof Element))continue;const e=getComputedStyle(t);if("contents"!==e.display){if("static"!==e.position||In(e))return t;if("BODY"===t.tagName)return t}}return null}var xs=class extends nn{constructor(){super(...arguments),this.localize=new en(this),this.active=!1,this.placement="top",this.strategy="absolute",this.distance=0,this.skidding=0,this.arrow=!1,this.arrowPlacement="anchor",this.arrowPadding=10,this.flip=!1,this.flipFallbackPlacements="",this.flipFallbackStrategy="best-fit",this.flipPadding=0,this.shift=!1,this.shiftPadding=0,this.autoSizePadding=0,this.hoverBridge=!1,this.updateHoverBridge=()=>{if(this.hoverBridge&&this.anchorEl){const e=this.anchorEl.getBoundingClientRect(),t=this.popup.getBoundingClientRect();let o=0,n=0,r=0,a=0,l=0,c=0,d=0,h=0;this.placement.includes("top")||this.placement.includes("bottom")?e.top<t.top?(o=e.left,n=e.bottom,r=e.right,a=e.bottom,l=t.left,c=t.top,d=t.right,h=t.top):(o=t.left,n=t.bottom,r=t.right,a=t.bottom,l=e.left,c=e.top,d=e.right,h=e.top):e.left<t.left?(o=e.right,n=e.top,r=t.left,a=t.top,l=e.right,c=e.bottom,d=t.left,h=t.bottom):(o=t.right,n=t.top,r=e.left,a=e.top,l=t.right,c=t.bottom,d=e.left,h=e.bottom),this.style.setProperty("--hover-bridge-top-left-x",`${o}px`),this.style.setProperty("--hover-bridge-top-left-y",`${n}px`),this.style.setProperty("--hover-bridge-top-right-x",`${r}px`),this.style.setProperty("--hover-bridge-top-right-y",`${a}px`),this.style.setProperty("--hover-bridge-bottom-left-x",`${l}px`),this.style.setProperty("--hover-bridge-bottom-left-y",`${c}px`),this.style.setProperty("--hover-bridge-bottom-right-x",`${d}px`),this.style.setProperty("--hover-bridge-bottom-right-y",`${h}px`)}}}async connectedCallback(){super.connectedCallback(),await this.updateComplete,this.start()}disconnectedCallback(){super.disconnectedCallback(),this.stop()}async updated(e){super.updated(e),e.has("active")&&(this.active?this.start():this.stop()),e.has("anchor")&&this.handleAnchorChange(),this.active&&(await this.updateComplete,this.reposition())}async handleAnchorChange(){if(await this.stop(),this.anchor&&"string"==typeof this.anchor){const e=this.getRootNode();this.anchorEl=e.getElementById(this.anchor)}else this.anchor instanceof Element||function(e){return null!==e&&"object"==typeof e&&"getBoundingClientRect"in e&&(!("contextElement"in e)||e instanceof Element)}(this.anchor)?this.anchorEl=this.anchor:this.anchorEl=this.querySelector('[slot="anchor"]');this.anchorEl instanceof HTMLSlotElement&&(this.anchorEl=this.anchorEl.assignedElements({flatten:!0})[0]),this.anchorEl&&this.active&&this.start()}start(){this.anchorEl&&this.active&&(this.cleanup=ls(this.anchorEl,this.popup,(()=>{this.reposition()})))}async stop(){return new Promise((e=>{this.cleanup?(this.cleanup(),this.cleanup=void 0,this.removeAttribute("data-current-placement"),this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height"),requestAnimationFrame((()=>e()))):e()}))}reposition(){if(!this.active||!this.anchorEl)return;const e=[cs({mainAxis:this.distance,crossAxis:this.skidding})];this.sync?e.push(ps({apply:({rects:e})=>{const t="width"===this.sync||"both"===this.sync,o="height"===this.sync||"both"===this.sync;this.popup.style.width=t?`${e.reference.width}px`:"",this.popup.style.height=o?`${e.reference.height}px`:""}})):(this.popup.style.width="",this.popup.style.height=""),this.flip&&e.push(hs({boundary:this.flipBoundary,fallbackPlacements:this.flipFallbackPlacements,fallbackStrategy:"best-fit"===this.flipFallbackStrategy?"bestFit":"initialPlacement",padding:this.flipPadding})),this.shift&&e.push(ds({boundary:this.shiftBoundary,padding:this.shiftPadding})),this.autoSize?e.push(ps({boundary:this.autoSizeBoundary,padding:this.autoSizePadding,apply:({availableWidth:e,availableHeight:t})=>{"vertical"===this.autoSize||"both"===this.autoSize?this.style.setProperty("--auto-size-available-height",`${t}px`):this.style.removeProperty("--auto-size-available-height"),"horizontal"===this.autoSize||"both"===this.autoSize?this.style.setProperty("--auto-size-available-width",`${e}px`):this.style.removeProperty("--auto-size-available-width")}})):(this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height")),this.arrow&&e.push(us({element:this.arrowEl,padding:this.arrowPadding}));const t="absolute"===this.strategy?e=>rs.getOffsetParent(e,ys):rs.getOffsetParent;gs(this.anchorEl,this.popup,{placement:this.placement,middleware:e,strategy:this.strategy,platform:Eo(Ao({},rs),{getOffsetParent:t})}).then((({x:e,y:t,middlewareData:o,placement:n})=>{const r="rtl"===this.localize.dir(),a={top:"bottom",right:"left",bottom:"top",left:"right"}[n.split("-")[0]];if(this.setAttribute("data-current-placement",n),Object.assign(this.popup.style,{left:`${e}px`,top:`${t}px`}),this.arrow){const e=o.arrow.x,t=o.arrow.y;let n="",l="",c="",d="";if("start"===this.arrowPlacement){const o="number"==typeof e?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";n="number"==typeof t?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"",l=r?o:"",d=r?"":o}else if("end"===this.arrowPlacement){const o="number"==typeof e?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";l=r?"":o,d=r?o:"",c="number"==typeof t?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:""}else"center"===this.arrowPlacement?(d="number"==typeof e?"calc(50% - var(--arrow-size-diagonal))":"",n="number"==typeof t?"calc(50% - var(--arrow-size-diagonal))":""):(d="number"==typeof e?`${e}px`:"",n="number"==typeof t?`${t}px`:"");Object.assign(this.arrowEl.style,{top:n,right:l,bottom:c,left:d,[a]:"calc(var(--arrow-size-diagonal) * -1)"})}})),requestAnimationFrame((()=>this.updateHoverBridge())),this.emit("sl-reposition")}render(){return Qt`
      <slot name="anchor" @slotchange=${this.handleAnchorChange}></slot>

      <span
        part="hover-bridge"
        class=${vs({"popup-hover-bridge":!0,"popup-hover-bridge--visible":this.hoverBridge&&this.active})}
      ></span>

      <div
        part="popup"
        class=${vs({popup:!0,"popup--active":this.active,"popup--fixed":"fixed"===this.strategy,"popup--has-arrow":this.arrow})}
      >
        <slot></slot>
        ${this.arrow?Qt`<div part="arrow" class="popup__arrow" role="presentation"></div>`:""}
      </div>
    `}};function $s(e,t){return new Promise((o=>{e.addEventListener(t,(function n(r){r.target===e&&(e.removeEventListener(t,n),o())}))}))}function _s(e,t,o){return new Promise((n=>{if((null==o?void 0:o.duration)===1/0)throw new Error("Promise-based animations must be finite.");const r=e.animate(t,Eo(Ao({},o),{duration:Ss()?0:o.duration}));r.addEventListener("cancel",n,{once:!0}),r.addEventListener("finish",n,{once:!0})}))}function Cs(e){return(e=e.toString().toLowerCase()).indexOf("ms")>-1?parseFloat(e):e.indexOf("s")>-1?1e3*parseFloat(e):parseFloat(e)}function Ss(){return window.matchMedia("(prefers-reduced-motion: reduce)").matches}function As(e){return Promise.all(e.getAnimations().map((e=>new Promise((t=>{e.cancel(),requestAnimationFrame(t)})))))}function Es(e,t){const o=Ao({waitUntilFirstUpdate:!1},t);return(t,n)=>{const{update:r}=t,a=Array.isArray(e)?e:[e];t.update=function(e){a.forEach((t=>{const r=t;if(e.has(r)){const t=e.get(r),a=this[r];t!==a&&(o.waitUntilFirstUpdate&&!this.hasUpdated||this[n](t,a))}})),r.call(this,e)}}}xs.styles=[on,Fo],Po([fi(".popup")],xs.prototype,"popup",2),Po([fi(".popup__arrow")],xs.prototype,"arrowEl",2),Po([pi()],xs.prototype,"anchor",2),Po([pi({type:Boolean,reflect:!0})],xs.prototype,"active",2),Po([pi({reflect:!0})],xs.prototype,"placement",2),Po([pi({reflect:!0})],xs.prototype,"strategy",2),Po([pi({type:Number})],xs.prototype,"distance",2),Po([pi({type:Number})],xs.prototype,"skidding",2),Po([pi({type:Boolean})],xs.prototype,"arrow",2),Po([pi({attribute:"arrow-placement"})],xs.prototype,"arrowPlacement",2),Po([pi({attribute:"arrow-padding",type:Number})],xs.prototype,"arrowPadding",2),Po([pi({type:Boolean})],xs.prototype,"flip",2),Po([pi({attribute:"flip-fallback-placements",converter:{fromAttribute:e=>e.split(" ").map((e=>e.trim())).filter((e=>""!==e)),toAttribute:e=>e.join(" ")}})],xs.prototype,"flipFallbackPlacements",2),Po([pi({attribute:"flip-fallback-strategy"})],xs.prototype,"flipFallbackStrategy",2),Po([pi({type:Object})],xs.prototype,"flipBoundary",2),Po([pi({attribute:"flip-padding",type:Number})],xs.prototype,"flipPadding",2),Po([pi({type:Boolean})],xs.prototype,"shift",2),Po([pi({type:Object})],xs.prototype,"shiftBoundary",2),Po([pi({attribute:"shift-padding",type:Number})],xs.prototype,"shiftPadding",2),Po([pi({attribute:"auto-size"})],xs.prototype,"autoSize",2),Po([pi()],xs.prototype,"sync",2),Po([pi({type:Object})],xs.prototype,"autoSizeBoundary",2),Po([pi({attribute:"auto-size-padding",type:Number})],xs.prototype,"autoSizePadding",2),Po([pi({attribute:"hover-bridge",type:Boolean})],xs.prototype,"hoverBridge",2);var Ps=class extends nn{constructor(){super(),this.localize=new en(this),this.content="",this.placement="top",this.disabled=!1,this.distance=8,this.open=!1,this.skidding=0,this.trigger="hover focus",this.hoist=!1,this.handleBlur=()=>{this.hasTrigger("focus")&&this.hide()},this.handleClick=()=>{this.hasTrigger("click")&&(this.open?this.hide():this.show())},this.handleFocus=()=>{this.hasTrigger("focus")&&this.show()},this.handleDocumentKeyDown=e=>{"Escape"===e.key&&(e.stopPropagation(),this.hide())},this.handleMouseOver=()=>{if(this.hasTrigger("hover")){const e=Cs(getComputedStyle(this).getPropertyValue("--show-delay"));clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout((()=>this.show()),e)}},this.handleMouseOut=()=>{if(this.hasTrigger("hover")){const e=Cs(getComputedStyle(this).getPropertyValue("--hide-delay"));clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout((()=>this.hide()),e)}},this.addEventListener("blur",this.handleBlur,!0),this.addEventListener("focus",this.handleFocus,!0),this.addEventListener("click",this.handleClick),this.addEventListener("mouseover",this.handleMouseOver),this.addEventListener("mouseout",this.handleMouseOut)}disconnectedCallback(){var e;super.disconnectedCallback(),null==(e=this.closeWatcher)||e.destroy(),document.removeEventListener("keydown",this.handleDocumentKeyDown)}firstUpdated(){this.body.hidden=!this.open,this.open&&(this.popup.active=!0,this.popup.reposition())}hasTrigger(e){return this.trigger.split(" ").includes(e)}async handleOpenChange(){var e,t;if(this.open){if(this.disabled)return;this.emit("sl-show"),"CloseWatcher"in window?(null==(e=this.closeWatcher)||e.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>{this.hide()}):document.addEventListener("keydown",this.handleDocumentKeyDown),await As(this.body),this.body.hidden=!1,this.popup.active=!0;const{keyframes:t,options:o}=No(this,"tooltip.show",{dir:this.localize.dir()});await _s(this.popup.popup,t,o),this.popup.reposition(),this.emit("sl-after-show")}else{this.emit("sl-hide"),null==(t=this.closeWatcher)||t.destroy(),document.removeEventListener("keydown",this.handleDocumentKeyDown),await As(this.body);const{keyframes:e,options:o}=No(this,"tooltip.hide",{dir:this.localize.dir()});await _s(this.popup.popup,e,o),this.popup.active=!1,this.body.hidden=!0,this.emit("sl-after-hide")}}async handleOptionsChange(){this.hasUpdated&&(await this.updateComplete,this.popup.reposition())}handleDisabledChange(){this.disabled&&this.open&&this.hide()}async show(){if(!this.open)return this.open=!0,$s(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,$s(this,"sl-after-hide")}render(){return Qt`
      <sl-popup
        part="base"
        exportparts="
          popup:base__popup,
          arrow:base__arrow
        "
        class=${vs({tooltip:!0,"tooltip--open":this.open})}
        placement=${this.placement}
        distance=${this.distance}
        skidding=${this.skidding}
        strategy=${this.hoist?"fixed":"absolute"}
        flip
        shift
        arrow
        hover-bridge
      >
        ${""}
        <slot slot="anchor" aria-describedby="tooltip"></slot>

        ${""}
        <div part="body" id="tooltip" class="tooltip__body" role="tooltip" aria-live=${this.open?"polite":"off"}>
          <slot name="content">${this.content}</slot>
        </div>
      </sl-popup>
    `}};Ps.styles=[on,Uo],Ps.dependencies={"sl-popup":xs},Po([fi("slot:not([name])")],Ps.prototype,"defaultSlot",2),Po([fi(".tooltip__body")],Ps.prototype,"body",2),Po([fi("sl-popup")],Ps.prototype,"popup",2),Po([pi()],Ps.prototype,"content",2),Po([pi()],Ps.prototype,"placement",2),Po([pi({type:Boolean,reflect:!0})],Ps.prototype,"disabled",2),Po([pi({type:Number})],Ps.prototype,"distance",2),Po([pi({type:Boolean,reflect:!0})],Ps.prototype,"open",2),Po([pi({type:Number})],Ps.prototype,"skidding",2),Po([pi()],Ps.prototype,"trigger",2),Po([pi({type:Boolean})],Ps.prototype,"hoist",2),Po([Es("open",{waitUntilFirstUpdate:!0})],Ps.prototype,"handleOpenChange",1),Po([Es(["content","distance","hoist","placement","skidding"])],Ps.prototype,"handleOptionsChange",1),Po([Es("disabled")],Ps.prototype,"handleDisabledChange",1),jo("tooltip.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:150,easing:"ease"}}),jo("tooltip.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:150,easing:"ease"}});Ps.define("sl-tooltip");var Rs=Object.defineProperty,Ts=Object.getOwnPropertyDescriptor,Os=(e,t,o,n)=>{for(var r,a=n>1?void 0:n?Ts(t,o):t,l=e.length-1;l>=0;l--)(r=e[l])&&(a=(n?r(t,o,a):r(a))||a);return n&&a&&Rs(t,o,a),a};jo("tooltip.show",null),jo("tooltip.hide",null);let Ds=class extends lit_element_r{constructor(){super(...arguments),this.placement="bottom",this.disabled=!1}firstUpdated(){this.observer=new MutationObserver((e=>{for(const t of e)if("attributes"===t.type&&"data-current-placement"===t.attributeName){const e=t.target.getAttribute("data-current-placement");e?this.setAttribute("data-current-placement",e):this.removeAttribute("data-current-placement")}}));const e=this.shadowRoot?.querySelector("sl-tooltip")?.shadowRoot;e&&this.observer.observe(e,{attributes:!0,attributeFilter:["data-current-placement"],subtree:!0})}disconnectedCallback(){this.observer?.disconnect(),super.disconnectedCallback()}render(){return Qt`<sl-tooltip
			.placement=${this.placement}
			?disabled=${this.disabled}
			.distance=${this.distance??ei}
			hoist
		>
			<slot></slot>
			<div slot="content">
				<slot name="content">${this.content}</slot>
			</div>
		</sl-tooltip>`}};Ds.styles=ft`
		sl-tooltip {
			--max-width: 320px;
			--hide-delay: 0ms;
			--show-delay: 500ms;
		}

		sl-tooltip::part(base__popup) {
			pointer-events: none;
		}

		sl-tooltip::part(body) {
			border: 1px solid var(--gl-tooltip-border-color);
			box-shadow: 0 2px 8px var(--gl-tooltip-shadow);
		}

		sl-tooltip::part(base__arrow) {
			border: 1px solid var(--gl-tooltip-border-color);
			z-index: 1;
		}

		:host([data-current-placement^='top']) sl-tooltip::part(base__arrow) {
			border-top-width: 0;
			border-left-width: 0;
		}

		:host([data-current-placement^='bottom']) sl-tooltip::part(base__arrow) {
			border-bottom-width: 0;
			border-right-width: 0;
		}

		:host([data-current-placement^='left']) sl-tooltip::part(base__arrow) {
			border-bottom-width: 0;
			border-left-width: 0;
		}

		:host([data-current-placement^='right']) sl-tooltip::part(base__arrow) {
			border-top-width: 0;
			border-right-width: 0;
		}
	`,Os([pi()],Ds.prototype,"content",2),Os([pi({reflect:!0})],Ds.prototype,"placement",2),Os([pi({type:Boolean})],Ds.prototype,"disabled",2),Os([pi({type:Number})],Ds.prototype,"distance",2),Os([pi({type:Boolean})],Ds.prototype,"hoist",2),Ds=Os([ci("gl-tooltip")],Ds);const Ms=ft`
	:host {
		box-sizing: border-box;
		display: inline-block;
		vertical-align: text-bottom;
	}

	.pill {
		box-sizing: border-box;
		display: inline-flex;
		align-items: center;
		justify-content: center;
		padding: 0.2rem 0.5rem;
		border-radius: 0.5rem;
		font-size: 1rem;
		font-weight: 500;
		line-height: normal;
		text-transform: uppercase;
		color: var(--gl-pill-foreground, var(--vscode-foreground));
		background-color: var(--gl-pill-background, var(--vscode-editorWidget-background));
		white-space: nowrap;
	}

	.pill--outlined {
		padding: 0.1rem 0.4rem;
		background-color: transparent;
		border: 1px solid var(--gl-pill-border, var(--vscode-foreground));
	}
`;var zs=Object.defineProperty,Ls=Object.getOwnPropertyDescriptor,Is=(e,t,o,n)=>{for(var r,a=n>1?void 0:n?Ls(t,o):t,l=e.length-1;l>=0;l--)(r=e[l])&&(a=(n?r(t,o,a):r(a))||a);return n&&a&&zs(t,o,a),a};let Bs=class extends lit_element_r{constructor(){super(...arguments),this.ahead=0,this.behind=0,this.working=0,this.alwaysShow=!1,this.outlined=!1,this.colorized=!1,this.missingUpstream=!1}render(){return 0===this.ahead&&0===this.behind&&0===this.working?this.alwaysShow?this.missingUpstream?Qt`<span part="base" class="pill${this.outlined?" pill--outlined":""}">
					<span class="state${this.colorized?" state--missing":""}"
						><code-icon icon="error"></code-icon></span
				></span>`:Qt`<span part="base" class="pill${this.outlined?" pill--outlined":""}">
				<span class="state${this.colorized?" state--ahead":""}"><code-icon icon="check"></code-icon></span>
			</span>`:ei:Qt`<span part="base" class="pill${this.outlined?" pill--outlined":""}"
			>${bi(this.behind>0,(()=>Qt`<span class="state${this.colorized?" state--behind":""}"
						>${this.behind}<code-icon icon="arrow-down"></code-icon
					></span>`))}${bi(this.ahead>0,(()=>Qt`<span class="state${this.colorized?" state--ahead":""}"
						>${this.ahead}<code-icon icon="arrow-up"></code-icon
					></span>`))}${bi(this.working>0,(()=>Qt`<span class="state${this.colorized?" state--working":""}"
						>${this.working}<span class="working">&#177;</span></span
					>`))}</span
		>`}};Bs.styles=[Ms,ft`
			.pill {
				gap: 0.1rem;
				text-transform: none;
			}

			.state {
				-webkit-font-smoothing: antialiased;
				-moz-osx-font-smoothing: grayscale;
			}

			.state--missing code-icon {
				color: var(--gl-tracking-missing);
			}

			.state--ahead code-icon {
				color: var(--gl-tracking-ahead);
			}

			.state--behind code-icon {
				color: var(--gl-tracking-behind);
			}

			.state--working .working {
				color: var(--gl-tracking-working);
			}

			.state code-icon {
				font-size: inherit !important;
				line-height: inherit !important;
			}

			.working {
				display: inline-block;
				width: 1rem;
				text-align: center;
				vertical-align: text-bottom;
				font-weight: normal;
			}
		`],Is([pi({type:Number})],Bs.prototype,"ahead",2),Is([pi({type:Number})],Bs.prototype,"behind",2),Is([pi({type:Number})],Bs.prototype,"working",2),Is([pi({type:Boolean,attribute:"always-show"})],Bs.prototype,"alwaysShow",2),Is([pi({type:Boolean})],Bs.prototype,"outlined",2),Is([pi({type:Boolean})],Bs.prototype,"colorized",2),Is([pi({type:Boolean})],Bs.prototype,"missingUpstream",2),Bs=Is([ci("gl-tracking-pill")],Bs);class unsafe_html_e extends directive_i{constructor(e){if(super(e),this.it=ei,e.type!==ms)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===ei||null==e)return this._t=void 0,this.it=e;if(e===Xt)return e;if("string"!=typeof e)throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.it)return this._t;this.it=e;const t=[e];return t.raw=t,this._t={_$litType$:this.constructor.resultType,strings:t,values:[]}}}unsafe_html_e.directiveName="unsafeHTML",unsafe_html_e.resultType=1;const js=bs(unsafe_html_e);function Ns(e,t,o,n=!1,r){const a={name:"",relativePath:"",children:new Map,descendants:[]};let l=e.reduce(((e,n)=>{let r=e,a="";for(const e of t(n)){a=o(a,e),void 0===r.children&&(r.children=new Map);let t=r.children.get(e);void 0===t&&(t={name:e,relativePath:a,parent:r,children:void 0,descendants:void 0},r.children.set(e,t)),void 0===r.descendants&&(r.descendants=[]),r.descendants.push(n),r=t}return r.value=n,e}),a);return n&&(l=Us(l,o,!0,r)),l}function Us(e,t,o=!0,n){if(void 0===e.children)return e;const r=[...e.children.values()];for(const e of r)Us(e,t,!1,n);if(!o&&1===r.length){const o=r[0];(void 0===o.value||n?.(o.value))&&(e.name=t(e.name,o.name),e.relativePath=o.relativePath,e.children=o.children,e.descendants=o.descendants,e.value=o.value)}return e}ft`
	.sr-only,
	.sr-only-focusable:not(:active):not(:focus):not(:focus-within) {
		${ft`
	clip: rect(0 0 0 0);
	clip-path: inset(50%);
	width: 1px;
	height: 1px;
	overflow: hidden;
	position: absolute;
	white-space: nowrap;
`}
	}
`;const Fs=ft`
	outline: 1px solid var(--color-focus-border);
	outline-offset: -1px;
`,Hs=ft`
	outline: 1px solid var(--color-focus-border);
	outline-offset: 2px;
`,qs=ft`
	:host {
		box-sizing: border-box;
	}
	:host *,
	:host *::before,
	:host *::after {
		box-sizing: inherit;
	}
	[hidden] {
		display: none !important;
	}
`,Vs=(ft`
	a {
		color: var(--vscode-textLink-foreground);
		text-decoration: none;
	}
	a:focus {
		${Fs}
	}
	a:hover {
		text-decoration: underline;
	}
`,ft`
	::-webkit-scrollbar {
		width: 10px;
		height: 10px;
	}
	::-webkit-scrollbar-corner {
		background-color: transparent;
	}

	::-webkit-scrollbar-thumb {
		background-color: transparent;
		border-color: inherit;
		border-right-style: inset;
		border-right-width: calc(100vw + 100vh);
		border-radius: unset !important;
	}
	::-webkit-scrollbar-thumb:hover {
		border-color: var(--vscode-scrollbarSlider-hoverBackground);
	}
	::-webkit-scrollbar-thumb:active {
		border-color: var(--vscode-scrollbarSlider-activeBackground);
	}

	.scrollable {
		border-color: transparent;
		transition: border-color 1s linear;
	}

	:host(:hover) .scrollable,
	:host(:focus-within) .scrollable {
		border-color: var(--vscode-scrollbarSlider-background);
		transition: none;
	}

	:host-context(.preload) .scrollable {
		transition: none;
	}
`);var Ws=Object.defineProperty,Gs=Object.getOwnPropertyDescriptor,Ks=(e,t,o,n)=>{for(var r,a=n>1?void 0:n?Gs(t,o):t,l=e.length-1;l>=0;l--)(r=e[l])&&(a=(n?r(t,o,a):r(a))||a);return n&&a&&Ws(t,o,a),a};let Zs=class extends lit_element_r{constructor(){super(...arguments),this.mode="infinite",this.active=!1,this.position="bottom"}firstUpdated(){this.setAttribute("role","progressbar")}render(){return Qt`<div class="progress-bar"></div>`}};Zs.styles=ft`
		* {
			box-sizing: border-box;
		}

		:host {
			position: absolute;
			left: 0;
			z-index: 5;
			height: 2px;
			width: 100%;
			overflow: hidden;
		}

		:host([position='bottom']) {
			bottom: 0;
		}

		:host([position='top']) {
			top: 0;
		}

		.progress-bar {
			background-color: var(--vscode-progressBar-background);
			display: none;
			position: absolute;
			left: 0;
			width: 2%;
			height: 2px;
		}

		:host([active]:not([active='false'])) .progress-bar {
			display: inherit;
		}

		:host([mode='discrete']) .progress-bar {
			left: 0;
			transition: width 0.1s linear;
		}

		:host([mode='discrete done']) .progress-bar {
			width: 100%;
		}

		:host([mode='infinite']) .progress-bar {
			animation-name: progress;
			animation-duration: 4s;
			animation-iteration-count: infinite;
			animation-timing-function: steps(100);
			transform: translateZ(0);
		}

		@keyframes progress {
			0% {
				transform: translateX(0) scaleX(1);
			}

			50% {
				transform: translateX(2500%) scaleX(3);
			}

			to {
				transform: translateX(4900%) scaleX(1);
			}
		}
	`,Ks([pi({reflect:!0})],Zs.prototype,"mode",2),Ks([pi({type:Boolean})],Zs.prototype,"active",2),Ks([pi()],Zs.prototype,"position",2),Zs=Ks([ci("progress-indicator")],Zs);var Ys=Object.defineProperty,Js=Object.getOwnPropertyDescriptor,Qs=(e,t,o,n)=>{for(var r,a=n>1?void 0:n?Js(t,o):t,l=e.length-1;l>=0;l--)(r=e[l])&&(a=(n?r(t,o,a):r(a))||a);return n&&a&&Ys(t,o,a),a};let Xs=class extends lit_element_r{constructor(){super(...arguments),this.collapsable=!1,this.expanded=!1,this.loading=!1}renderTitle(){return this.collapsable?Qt`<button
			type="button"
			class="label"
			aria-controls="content"
			aria-expanded=${this.expanded}
			@click="${this.toggleExpanded}"
		>
			<code-icon class="icon" icon=${this.expanded?"chevron-down":"chevron-right"}></code-icon
			><span class="title"><slot name="title">Section</slot></span>
			<span class="subtitle"><slot name="subtitle"></slot></span>
		</button>`:Qt`<div class="label">
				<span class="title"><slot name="title">Section</slot></span>
				<span class="subtitle"><slot name="subtitle"></slot></span>
			</div>`}render(){return Qt`
			<header class="header">
				${this.renderTitle()}
				<slot name="actions"></slot>
				<progress-indicator ?active="${this.loading}"></progress-indicator>
			</header>
			<div id="content" role="region" part="content" class="content scrollable">
				<slot></slot>
			</div>
		`}toggleExpanded(){this.expanded=!this.expanded,this.dispatchEvent(new CustomEvent("expanded-change",{detail:{expanded:this.expanded},bubbles:!0,composed:!0}))}};Xs.styles=[Vs,ft`
			:host {
				display: flex;
				flex-direction: column;
				background-color: var(--vscode-sideBar-background);
				min-height: 23px;
			}

			* {
				box-sizing: border-box;
			}

			.header {
				flex: none;
				display: flex;
				background-color: var(--vscode-sideBarSectionHeader-background);
				color: var(--vscode-sideBarSectionHeader-foreground);
				border-top: 1px solid var(--vscode-sideBarSectionHeader-border);
				position: relative;
			}

			.header:focus-within {
				outline: 1px solid var(--vscode-focusBorder);
				outline-offset: -1px;
			}

			.label {
				appearance: none;
				display: flex;
				flex-direction: row;
				align-items: center;
				width: 100%;
				padding: 0;
				border: none;
				text-align: left;
				font-family: var(--font-family);
				font-size: 1.1rem;
				line-height: 2.2rem;
				height: 2.2rem;
				background: transparent;
				color: inherit;
				outline: none;
				text-overflow: ellipsis;
				user-select: none;
			}

			:host([collapsable]) .label {
				cursor: pointer;
			}

			.title {
				font-weight: bold;
				text-transform: uppercase;
			}

			:host(:not([collapsable])) .title {
				margin-left: 0.8rem;
			}

			.subtitle {
				margin-left: 1rem;
				opacity: 0.6;
			}

			.icon {
				font-weight: normal;
				margin: 0 0.2rem;
			}

			.content {
				flex: 1;
				overflow: auto;
				min-height: 0;
				/*
			scrollbar-gutter: stable;
			box-shadow: #000000 0 0.6rem 0.6rem -0.6rem inset;
			*/
				padding-top: 0.6rem;
			}

			:host([collapsable]:not([expanded])) .content,
			:host([collapsable][expanded='false']) .content {
				display: none;
			}

			slot[name='actions']::slotted(*) {
				flex: none;
				margin-left: auto;
			}
		`],Qs([pi({type:Boolean,reflect:!0})],Xs.prototype,"collapsable",2),Qs([pi({type:Boolean,reflect:!0})],Xs.prototype,"expanded",2),Qs([pi({type:Boolean,reflect:!0})],Xs.prototype,"loading",2),Xs=Qs([ci("webview-pane")],Xs);var er=Object.defineProperty,tr=Object.getOwnPropertyDescriptor,ir=(e,t,o,n)=>{for(var r,a=n>1?void 0:n?tr(t,o):t,l=e.length-1;l>=0;l--)(r=e[l])&&(a=(n?r(t,o,a):r(a))||a);return n&&a&&er(t,o,a),a};let or=class extends lit_element_r{constructor(){super(...arguments),this.icon="",this.disabled=!1}render(){return Qt`
			<gl-tooltip hoist content="${this.label??ei}">
				<a
					role="${this.href?ei:"button"}"
					type="${this.href?ei:"button"}"
					aria-label="${this.label??ei}"
					?disabled=${this.disabled}
					href=${this.href??ei}
				>
					<code-icon icon="${this.icon}"></code-icon>
				</a>
			</gl-tooltip>
		`}focus(e){this.defaultFocusEl.focus(e)}};or.shadowRootOptions={...lit_element_r.shadowRootOptions,delegatesFocus:!0},or.styles=ft`
		:host {
			box-sizing: border-box;
			display: inline-flex;
			justify-content: center;
			align-items: center;
			width: 2rem;
			height: 2rem;
			border-radius: 0.5rem;
			color: inherit;
			padding: 0.2rem;
			vertical-align: text-bottom;
			text-decoration: none;
			cursor: pointer;
		}

		:host(:focus-within) {
			${Fs}
		}

		:host(:hover) {
			background-color: var(--vscode-toolbar-hoverBackground);
		}

		:host(:active) {
			background-color: var(--vscode-toolbar-activeBackground);
		}

		:host([disabled]) {
			pointer-events: none;
			opacity: 0.5;
		}

		a {
			color: inherit;
		}
		a:focus {
			outline: none;
		}
	`,ir([pi()],or.prototype,"href",2),ir([pi()],or.prototype,"label",2),ir([pi()],or.prototype,"icon",2),ir([pi({type:Boolean})],or.prototype,"disabled",2),ir([fi("a")],or.prototype,"defaultFocusEl",2),or=ir([ci("action-item")],or);var nr=Object.defineProperty,sr=Object.getOwnPropertyDescriptor,rr=(e,t,o,n)=>{for(var r,a=n>1?void 0:n?sr(t,o):t,l=e.length-1;l>=0;l--)(r=e[l])&&(a=(n?r(t,o,a):r(a))||a);return n&&a&&nr(t,o,a),a};let ar=class extends lit_element_r{firstUpdated(){this.role="navigation"}disconnectedCallback(){this._slotSubscriptionsDisposer?.()}render(){return Qt`<slot @slotchange=${this.handleSlotChange}></slot>`}handleSlotChange(e){if(this._slotSubscriptionsDisposer?.(),this.actionNodes.length<2)return;const t=this.handleKeydown.bind(this),o=`${this.actionNodes.length}`,n=this.actionNodes.map(((e,n)=>(e.setAttribute("aria-posinset",`${n+1}`),e.setAttribute("aria-setsize",o),e.setAttribute("tabindex",0===n?"0":"-1"),e.addEventListener("keydown",t,!1),{dispose:()=>{e?.removeEventListener("keydown",t,!1)}})));this._slotSubscriptionsDisposer=()=>{n?.forEach((({dispose:e})=>e()))}}handleKeydown(e){if(!e.target||null==this.actionNodes||this.actionNodes.length<2)return;const t=e.target,o=parseInt(t.getAttribute("aria-posinset")??"0",10);let n=null;if("ArrowLeft"===e.key){const e=1===o?this.actionNodes.length-1:o-2;n=this.actionNodes[e]}else if("ArrowRight"===e.key){const e=o===this.actionNodes.length?0:o;n=this.actionNodes[e]}null!=n&&n!==t&&(t.setAttribute("tabindex","-1"),n.setAttribute("tabindex","0"),n.focus())}};ar.styles=ft`
		:host {
			display: flex;
			align-items: center;
			user-select: none;
		}
	`,rr([mi({flatten:!0})],ar.prototype,"actionNodes",2),ar=rr([ci("action-nav")],ar);const lr=new WeakMap;function cr(e,t){return function(o,n,r){let a=lr.get(o.constructor);null==a&&lr.set(o.constructor,a=[]),a.push({method:r.value,keys:Array.isArray(e)?e:[e],afterFirstUpdate:t?.afterFirstUpdate??!1})}}class GlElement extends lit_element_r{emit(e,t,o){const n=new CustomEvent(e,{bubbles:!0,cancelable:!1,composed:!0,...o,detail:t});return this.dispatchEvent(n),n}update(e){const t=lr.get(this.constructor);if(null!=t)for(const{keys:o,method:n,afterFirstUpdate:r}of t){if(r&&!this.hasUpdated)continue;const t=o.filter((t=>e.has(t)));t.length&&n.call(this,t)}super.update(e)}}const dr={".":"Unchanged","!":"Ignored","?":"Untracked",A:"Added",D:"Deleted",M:"Modified",R:"Renamed",C:"Copied",AA:"Conflict",AU:"Conflict",UA:"Conflict",DD:"Conflict",DU:"Conflict",UD:"Conflict",UU:"Conflict",T:"Modified",U:"Updated but Unmerged"};var hr=Object.defineProperty,pr=Object.getOwnPropertyDescriptor,ur=(e,t,o,n)=>{for(var r,a=n>1?void 0:n?pr(t,o):t,l=e.length-1;l>=0;l--)(r=e[l])&&(a=(n?r(t,o,a):r(a))||a);return n&&a&&hr(t,o,a),a};let gr=class extends lit_element_r{get statusName(){return this.status?(e=this.status,dr[e]??"Unknown"):"";var e}updated(e){super.updated(e),e.has("status")&&(this.statusName?this.setAttribute("title",this.statusName):this.removeAttribute("title"))}renderIgnored(){return Qt`
			<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16">
				<path
					fill="#969696"
					fill-rule="evenodd"
					d="M7.5 15a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15zM10 4l-6.01 6.01 1.06 1.061 6.01-6.01L10 4z"
					clip-rule="evenodd"
				/>
			</svg>
		`}renderUntracked(){return Qt`
			<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16">
				<path
					fill="#6C6C6C"
					fill-rule="evenodd"
					d="M7.5 15a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15zm-3.942-3.942l7.5-7.5.884.884-.664.664c.95.655 1.65 1.524 2.222 2.394-1.15 1.75-2.824 3.5-6 3.5-.696 0-1.32-.084-1.882-.234l-1.176 1.176-.884-.884zm5.188-3.42l1.629-1.629c.634.393 1.147.913 1.594 1.491C10.99 8.767 9.692 9.75 7.5 9.75c-.287 0-.56-.017-.817-.05l.455-.454a1.5 1.5 0 0 0 1.608-1.608zM7.362 6.254L5.754 7.862a1.5 1.5 0 0 1 1.608-1.608zm.955-.955A6.595 6.595 0 0 0 7.5 5.25c-2.192 0-3.49.982-4.469 2.25.447.578.96 1.098 1.594 1.491l-.903.903C2.772 9.239 2.072 8.369 1.5 7.5 2.65 5.75 4.324 4 7.5 4c.696 0 1.32.084 1.882.234L8.317 5.299z"
					clip-rule="evenodd"
				/>
			</svg>
		`}renderAdded(){return Qt`
			<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16">
				<path
					fill="#388A34"
					fill-rule="evenodd"
					d="M7.5 15a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15zm.75-6.75h3v-1.5h-3v-3h-1.5v3h-3v1.5h3v3h1.5v-3z"
					clip-rule="evenodd"
				/>
			</svg>
		`}renderDeleted(){return Qt`
			<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16">
				<path
					fill="#9E121D"
					fill-rule="evenodd"
					d="M7.5 15a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15zm3.75-6.75v-1.5h-7.5v1.5h7.5z"
					clip-rule="evenodd"
				/>
			</svg>
		`}renderModified(){return Qt`
			<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16">
				<path
					fill="#1B80B2"
					fill-rule="evenodd"
					d="M7.5 15a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15zm3.75-9.5V7h-3v2.5h-1.5V7h-3V5.5h3v-3h1.5v3h3zm0 5V12h-7.5v-1.5h7.5z"
					clip-rule="evenodd"
				/>
			</svg>
		`}renderRenamed(){return Qt`
			<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16">
				<path
					fill="#C63"
					fill-rule="evenodd"
					d="M7.5 15a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15zM9.25 4.5v1.25h1.25l1 1v2.5l-1 1H9.25v1.25H10v1.25H7V11.5h.75v-1.25H4l-1-1v-2.5l1-1h3.75V4.5H7V3.25h3V4.5h-.75zm-5 2.5h3.5v2h-3.5V7zm5 0v2h1V7h-1z"
					clip-rule="evenodd"
				/>
			</svg>
		`}renderCopied(){return Qt`
			<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16">
				<path
					fill="#692C77"
					fill-rule="evenodd"
					d="M7.5 15a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15zM6.964 3.75L5.893 4.813v.53h1.071v-.53h3.215v4.25h-.536v1.062h.536l1.071-1.063v-4.25L10.179 3.75H6.964zM3.75 6.938l1.071-1.063h3.215l1.071 1.063v4.25L8.036 12.25H4.82L3.75 11.187v-4.25zm1.071 0v4.25h3.215v-4.25H4.82z"
					clip-rule="evenodd"
				/>
			</svg>
		`}renderConflict(){return Qt`
			<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16">
				<path
					fill="#7F4E7E"
					fill-rule="evenodd"
					d="M7.5 15a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15zm-4.03-4.53L6.44 7.5 3.47 4.53l1.06-1.06L7.5 6.44l2.97-2.97 1.06 1.06L8.56 7.5l2.97 2.97-1.06 1.06L7.5 8.56l-2.97 2.97-1.06-1.06z"
					clip-rule="evenodd"
				/>
			</svg>
		`}renderUnknown(){return Qt`
			<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16">
				<path
					fill="#6C6C6C"
					fill-rule="evenodd"
					d="M7.5 15a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15zM9.19 2.822c-.439-.215-.97-.322-1.596-.322-1.25 0-2.282.478-3.094 1.435l1.05.798c.275-.331.579-.574.91-.728.331-.154.66-.231.987-.231.415 0 .76.093 1.036.28.275.182.413.448.413.798 0 .275-.082.509-.245.7-.159.187-.36.364-.602.532a9.506 9.506 0 0 0-.728.56 2.66 2.66 0 0 0-.602.763c-.159.299-.238.679-.238 1.141v.483h1.498v-.413c0-.364.086-.663.259-.896a2.76 2.76 0 0 1 .637-.616c.252-.177.504-.362.756-.553.257-.196.471-.436.644-.721.173-.285.259-.651.259-1.099 0-.387-.114-.749-.343-1.085-.229-.34-.562-.616-1.001-.826zm-1.169 7.917a1.024 1.024 0 0 0-.763-.315c-.294 0-.544.105-.749.315-.2.205-.301.453-.301.742 0 .294.1.546.301.756.205.205.455.308.749.308.303 0 .558-.103.763-.308.205-.21.308-.462.308-.756 0-.29-.103-.537-.308-.742z"
					clip-rule="evenodd"
				/>
			</svg>
		`}render(){switch(this.status){case"!":return this.renderIgnored();case"?":return this.renderUntracked();case"A":return this.renderAdded();case"D":return this.renderDeleted();case"M":case"T":case"U":return this.renderModified();case"R":return this.renderRenamed();case"C":return this.renderCopied();case"AA":case"AU":case"UA":case"DD":case"DU":case"UD":case"UU":return this.renderConflict()}return this.renderUnknown()}};gr.styles=[ft`
			:host-context(.vscode-high-contrast:not(.vscode-high-contrast-light)),
			:host-context(.vscode-dark) {
				--gl-git-status-ignored: #969696;
				--gl-git-status-untracked: #6c6c6c;
				--gl-git-status-added: #388a34;
				--gl-git-status-deleted: #9e121d;
				--gl-git-status-modified: #1b80b2;
				--gl-git-status-renamed: #c63;
				--gl-git-status-copied: #692c77;
				--gl-git-status-conflict: #7f4e7e;
				--gl-git-status-unknown: #6c6c6c;
			}

			:host-context(.vscode-high-contrast-light),
			:host-context(.vscode-light) {
				--gl-git-status-ignored: #969696;
				--gl-git-status-untracked: #6c6c6c;
				--gl-git-status-added: #388a34;
				--gl-git-status-deleted: #9e121d;
				--gl-git-status-modified: #1b80b2;
				--gl-git-status-renamed: #c63;
				--gl-git-status-copied: #692c77;
				--gl-git-status-conflict: #7f4e7e;
				--gl-git-status-unknown: #6c6c6c;
			}

			:host {
				display: inline-block;
				width: 16px;
				aspect-ratio: 1 / 1;
			}

			svg {
				display: inline-block;
				vertical-align: text-bottom;
			}
		`],ur([pi()],gr.prototype,"status",2),ur([ui()],gr.prototype,"statusName",1),gr=ur([ci("gl-git-status")],gr);const fr=[qs,ft``],mr=[qs,ft`
		:host {
			--tree-connector-spacing: 0.6rem;
			--tree-connector-size: var(--gitlens-tree-indent, 1.6rem);
			box-sizing: border-box;
			padding-left: var(--gitlens-gutter-width);
			/* padding-right: var(--gitlens-scrollbar-gutter-width); */
			padding-right: 0.5rem;
			padding-top: 0.1rem;
			padding-bottom: 0.1rem;
			line-height: 2.2rem;
			height: 2.2rem;

			display: flex;
			flex-direction: row;
			align-items: center;
			justify-content: space-between;
			font-size: var(--vscode-font-size);
			color: var(--gitlens-tree-foreground, var(--vscode-foreground));

			content-visibility: auto;
			contain-intrinsic-size: auto 2.2rem;
			cursor: pointer;
		}

		:host(:hover),
		:host(:focus-within) {
			content-visibility: visible;
		}

		:host([aria-hidden='true']) {
			display: none;
		}

		:host(:hover) {
			color: var(--vscode-list-hoverForeground);
			background-color: var(--vscode-list-hoverBackground);
		}

		:host([aria-selected='true']) {
			color: var(--vscode-list-inactiveSelectionForeground);
			background-color: var(--vscode-list-inactiveSelectionBackground);
		}

		/* TODO: these should be :has(.input:focus) instead of :focus-within */
		:host(:focus-within) {
			outline: 1px solid var(--vscode-list-focusOutline);
			outline-offset: -0.1rem;
		}

		:host([aria-selected='true']:focus-within) {
			color: var(--vscode-list-activeSelectionForeground);
			background-color: var(--vscode-list-activeSelectionBackground);
		}

		.item {
			appearance: none;
			display: flex;
			flex-direction: row;
			justify-content: flex-start;
			align-items: center;
			gap: 0.6rem;
			width: 100%;
			padding: 0;
			font-family: inherit;
			font-size: inherit;
			text-decoration: none;
			color: inherit;
			background: none;
			border: none;
			outline: none;
			cursor: pointer;
			min-width: 0;
		}

		/* FIXME: remove, this is for debugging
		.item:focus {
			outline: 1px solid var(--vscode-list-focusOutline);
			outline-offset: -0.1rem;
		}
 		*/
		.icon {
			display: inline-block;
			width: 1.6rem;
			text-align: center;
			height: 2.2rem;
			line-height: 2.2rem;
			pointer-events: none;
			vertical-align: text-bottom;
		}

		slot[name='icon']::slotted(*) {
			width: 1.6rem;
			aspect-ratio: 1;
			vertical-align: text-bottom;
		}

		.node {
			display: inline-block;
			width: var(--tree-connector-size);
			text-align: center;
			flex: none;
			height: 2.2rem;
			line-height: 2.2rem;
			pointer-events: none;
			vertical-align: text-bottom;
		}

		.node:last-of-type {
			margin-right: 0.3rem;
		}

		.node--connector {
			position: relative;
		}

		.node--connector::before {
			content: '';
			position: absolute;
			height: 2.2rem;
			border-left: 1px solid transparent;
			top: 50%;
			transform: translate(-1px, -50%);
			left: 0.8rem;
			width: 0.1rem;
			transition: border-color 0.1s linear;
			opacity: 0.4;
		}

		:host-context([guides='always']) .node--connector::before,
		:host-context([guides='onHover']:focus-within) .node--connector::before,
		:host-context([guides='onHover']:hover) .node--connector::before {
			border-color: var(--vscode-tree-indentGuidesStroke);
		}

		.branch {
			display: inline-block;
			margin-right: 0.6rem;
			height: 2.2rem;
			line-height: 2.2rem;
			vertical-align: text-bottom;
		}

		.text {
			line-height: 1.6rem;
			overflow: hidden;
			white-space: nowrap;
			text-align: left;
			text-overflow: ellipsis;
			flex: 1;
		}

		.main {
			display: inline;
		}

		.description {
			display: inline;
			opacity: 0.7;
			font-size: 0.9em;
			margin-left: 0.3rem;
			pointer-events: none;
		}

		.actions {
			flex: none;
			user-select: none;
			color: var(--vscode-icon-foreground);
		}

		:host(:focus-within) .actions {
			color: var(--vscode-list-activeSelectionIconForeground);
		}

		:host(:not(:hover):not(:focus-within)) .actions {
			display: none;
		}

		.checkbox {
			position: relative;
			display: inline-flex;
			width: 1.6rem;
			aspect-ratio: 1 / 1;
			text-align: center;
			color: var(--vscode-checkbox-foreground);
			background: var(--vscode-checkbox-background);
			border: 1px solid var(--vscode-checkbox-border);
			border-radius: 0.3rem;
			// overflow: hidden;
			margin-right: 0.6rem;
		}

		.checkbox:has(:checked) {
			color: var(--vscode-inputOption-activeForeground);
			border-color: var(--vscode-inputOption-activeBorder);
			background-color: var(--vscode-inputOption-activeBackground);
		}

		.checkbox:has(:disabled) {
			opacity: 0.4;
		}

		.checkbox__input {
			position: absolute;
			top: 0;
			left: 0;
			appearance: none;
			width: 1.4rem;
			aspect-ratio: 1 / 1;
			margin: 0;
			cursor: pointer;
			border-radius: 0.3rem;
		}

		.checkbox__input:disabled {
			cursor: default;
		}

		.checkbox__check {
			width: 1.6rem;
			aspect-ratio: 1 / 1;
			opacity: 0;
			transition: opacity 0.1s linear;
			color: var(--vscode-checkbox-foreground);
			pointer-events: none;
		}

		.checkbox__input:checked + .checkbox__check {
			opacity: 1;
		}

		slot[name='decorations'] {
			display: inline-block;
			margin-left: 0.4rem;
		}
	`];var br=Object.defineProperty,vr=Object.getOwnPropertyDescriptor,yr=(e,t,o,n)=>{for(var r,a=n>1?void 0:n?vr(t,o):t,l=e.length-1;l>=0;l--)(r=e[l])&&(a=(n?r(t,o,a):r(a))||a);return n&&a&&br(t,o,a),a};let wr=class extends lit_element_r{disconnectedCallback(){super.disconnectedCallback(),this._slotSubscriptionsDisposer?.()}firstUpdated(){this.setAttribute("role","tree")}render(){return Qt`<slot @slotchange=${this.handleSlotChange}></slot>`}handleSlotChange(){if(!this.treeItems?.length)return;const e=this.handleKeydown.bind(this),t=this.handleBeforeSelected.bind(this),o=this.handleSelected.bind(this),n=this.treeItems.map((n=>(n.addEventListener("keydown",e,!1),n.addEventListener("gl-tree-item-select",t,!1),n.addEventListener("gl-tree-item-selected",o,!1),{dispose:function(){n?.removeEventListener("keydown",e,!1),n?.removeEventListener("gl-tree-item-select",t,!1),n?.removeEventListener("gl-tree-item-selected",o,!1)}})));this._slotSubscriptionsDisposer=()=>{n?.forEach((({dispose:e})=>e()))}}handleKeydown(e){if(!e.target)return;const t=e.target;if("ArrowUp"===e.key){const e=t.previousElementSibling;e?.focus()}else if("ArrowDown"===e.key){const e=t.nextElementSibling;e?.focus()}}handleBeforeSelected(e){if(!e.target)return;const t=e.target;null!=this._lastSelected&&this._lastSelected!==t&&this._lastSelected.deselect(),this._lastSelected=t}handleSelected(e){if(!e.target||!e.detail.node.branch)return;function t(e){const t=e.level;let o=e.previousElementSibling;for(;o;){if(o.level<t)return o;o=o.previousElementSibling}}const o=e.target,n=o.level;let r=o.nextElementSibling;for(;r&&n!==r.level;){const o=t(r);r.parentExpanded=!1!==o?.expanded,r.expanded=e.detail.node.expanded,r=r.nextElementSibling}}};wr.styles=fr,yr([pi({reflect:!0})],wr.prototype,"guides",2),yr([mi({flatten:!0})],wr.prototype,"treeItems",2),wr=yr([ci("gl-tree")],wr);var kr=Object.defineProperty,xr=Object.getOwnPropertyDescriptor,$r=(e,t,o,n)=>{for(var r,a=n>1?void 0:n?xr(t,o):t,l=e.length-1;l>=0;l--)(r=e[l])&&(a=(n?r(t,o,a):r(a))||a);return n&&a&&kr(t,o,a),a};let _r=class extends GlElement{constructor(){super(...arguments),this.branch=!1,this.expanded=!0,this.path="",this.level=0,this.size=1,this.position=1,this.checkable=!1,this.checked=!1,this.disableCheck=!1,this.showIcon=!0,this.selected=!1,this.focused=!1,this.onComponentClickBound=this.onComponentClick.bind(this)}get isHidden(){return!1===this.parentExpanded||!this.branch&&!this.expanded}connectedCallback(){super.connectedCallback(),this.addEventListener("click",this.onComponentClickBound)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("click",this.onComponentClickBound)}onComponentClick(e){this.selectCore({dblClick:!1,altKey:e.altKey}),this.buttonEl.focus()}updateAttrs(e,t=!1){(e.has("expanded")||t)&&this.setAttribute("aria-expanded",this.expanded.toString()),(e.has("parentExpanded")||t)&&this.setAttribute("aria-hidden",this.isHidden.toString()),(e.has("selected")||t)&&this.setAttribute("aria-selected",this.selected.toString()),(e.has("size")||t)&&this.setAttribute("aria-setsize",this.size.toString()),(e.has("position")||t)&&this.setAttribute("aria-posinset",this.position.toString()),(e.has("level")||t)&&this.setAttribute("aria-level",this.level.toString())}firstUpdated(){this.role="treeitem"}updated(e){this.updateAttrs(e)}renderBranching(){const e=this.level-1;if(e<1&&!this.branch)return ei;const t=[];if(e>0)for(let o=0;o<e;o++)t.push(Qt`<span class="node node--connector"><code-icon name="blank"></code-icon></span>`);return this.branch&&t.push(Qt`<code-icon class="branch" icon="${this.expanded?"chevron-down":"chevron-right"}"></code-icon>`),t}renderCheckbox(){return this.checkable?Qt`<span class="checkbox"
			><input
				class="checkbox__input"
				id="checkbox"
				type="checkbox"
				.checked=${this.checked}
				?disabled=${this.disableCheck}
				@change=${this.onCheckboxChange}
				@click=${this.onCheckboxClick} /><code-icon icon="check" size="14" class="checkbox__check"></code-icon
		></span>`:ei}renderActions(){return Qt`<action-nav class="actions"><slot name="actions"></slot></action-nav>`}renderDecorations(){return Qt`<slot name="decorations" class="decorations"></slot>`}render(){return Qt`
			${this.renderBranching()}${this.renderCheckbox()}
			<button
				id="button"
				class="item"
				type="button"
				@click=${this.onButtonClick}
				@dblclick=${this.onButtonDblClick}
			>
				${bi(this.showIcon,(()=>Qt`<slot name="icon" class="icon"></slot>`))}
				<span class="text">
					<slot class="main"></slot>
					<slot name="description" class="description"></slot>
				</span>
			</button>
			${this.renderActions()}${this.renderDecorations()}
		`}selectCore(e,t=!1){this.emit("gl-tree-item-select"),this.branch&&(this.expanded=!this.expanded),this.selected=!0,t||window.requestAnimationFrame((()=>{this.emit("gl-tree-item-selected",{node:this,dblClick:e?.dblClick??!1,altKey:e?.altKey??!1,ctrlKey:e?.ctrlKey??!1,metaKey:e?.metaKey??!1})}))}select(){this.selectCore(void 0,!0)}deselect(){this.selected=!1}focus(){this.buttonEl.focus()}onButtonClick(e){e.stopPropagation(),this.selectCore({dblClick:!1,altKey:e.altKey})}onButtonDblClick(e){e.stopPropagation(),this.selectCore({dblClick:!0,altKey:e.altKey,ctrlKey:e.ctrlKey,metaKey:e.metaKey})}onCheckboxClick(e){e.stopPropagation()}onCheckboxChange(e){e.preventDefault(),e.stopPropagation(),this.checked=e.target.checked,this.emit("gl-tree-item-checked",{node:this,checked:this.checked})}};_r.styles=mr,$r([pi({type:Boolean})],_r.prototype,"branch",2),$r([pi({type:Boolean})],_r.prototype,"expanded",2),$r([pi({type:String})],_r.prototype,"path",2),$r([pi({type:String,attribute:"parent-path"})],_r.prototype,"parentPath",2),$r([pi({type:Boolean,attribute:"parent-expanded"})],_r.prototype,"parentExpanded",2),$r([pi({type:Number})],_r.prototype,"level",2),$r([pi({type:Number})],_r.prototype,"size",2),$r([pi({type:Number})],_r.prototype,"position",2),$r([pi({type:Boolean})],_r.prototype,"checkable",2),$r([pi({type:Boolean})],_r.prototype,"checked",2),$r([pi({type:Boolean})],_r.prototype,"disableCheck",2),$r([pi({type:Boolean})],_r.prototype,"showIcon",2),$r([ui()],_r.prototype,"selected",2),$r([ui()],_r.prototype,"focused",2),$r([fi("#button")],_r.prototype,"buttonEl",2),_r=$r([ci("gl-tree-item")],_r);var Cr=Object.defineProperty,Sr=Object.getOwnPropertyDescriptor,Ar=(e,t,o,n)=>{for(var r,a=n>1?void 0:n?Sr(t,o):t,l=e.length-1;l>=0;l--)(r=e[l])&&(a=(n?r(t,o,a):r(a))||a);return n&&a&&Cr(t,o,a),a};let Er=class extends GlElement{constructor(){super(...arguments),this.treeItems=void 0}set model(e){if(this._model===e)return;let t;if(this._model=e,null!=this._model){const e=this._model.length;t=this._model.reduce(((t,o,n)=>(t.push(...Pr(o,e,n+1)),t)),[])}this.treeItems=t}get model(){return this._model}renderIcon(e){return null==e?ei:"string"==typeof e?Qt`<code-icon slot="icon" icon=${e}></code-icon>`:"status"!==e.type?ei:Qt`<gl-git-status slot="icon" .status=${e.name}></gl-git-status>`}renderActions(e){const t=e.actions;return null==t||0===t.length?ei:t.map((t=>Qt`<action-item
				slot="actions"
				.icon=${t.icon}
				.label=${t.label}
				@click=${o=>this.onTreeItemActionClicked(o,e,t)}
				@dblclick=${o=>this.onTreeItemActionDblClicked(o,e,t)}
			></action-item>`))}renderDecorations(e){const t=e.decorations;return null==t||0===t.length?ei:t.map((e=>"icon"===e.type?Qt`<code-icon
					slot="decorations"
					title="${e.label}"
					aria-label="${e.label}"
					.icon=${e.icon}
				></code-icon>`:"text"===e.type?Qt`<span slot="decorations">${e.label}</span>`:void 0))}renderTreeItem(e){return Qt`<gl-tree-item
			.branch=${e.branch}
			.expanded=${e.expanded}
			.path=${e.path}
			.parentPath=${e.parentPath}
			.parentExpanded=${e.parentExpanded}
			.level=${e.level}
			.size=${e.size}
			.position=${e.position}
			.checkable=${e.checkable}
			.checked=${e.checked??!1}
			.disableCheck=${e.disableCheck??!1}
			.showIcon=${null!=e.icon}
			@gl-tree-item-selected=${t=>this.onTreeItemSelected(t,e)}
			@gl-tree-item-checked=${t=>this.onTreeItemChecked(t,e)}
		>
			${this.renderIcon(e.icon)}
			${e.label}${bi(null!=e.description,(()=>Qt`<span slot="description">${e.description}</span>`))}
			${this.renderActions(e)} ${this.renderDecorations(e)}
		</gl-tree-item>`}renderTree(e){return e?.map((e=>this.renderTreeItem(e)))}render(){return Qt`<gl-tree>${this.renderTree(this.treeItems)}</gl-tree>`}onTreeItemSelected(e,t){e.stopPropagation(),this.emit("gl-tree-generated-item-selected",{...e.detail,node:t,context:t.context})}onTreeItemChecked(e,t){e.stopPropagation(),this.emit("gl-tree-generated-item-checked",{...e.detail,node:t,context:t.context})}onTreeItemActionClicked(e,t,o){e.stopPropagation(),this.emit("gl-tree-generated-item-action-clicked",{node:t,context:t.context,action:o,dblClick:!1,altKey:e.altKey,ctrlKey:e.ctrlKey,metaKey:e.metaKey})}onTreeItemActionDblClicked(e,t,o){e.stopPropagation(),this.emit("gl-tree-generated-item-action-clicked",{node:t,context:t.context,action:o,dblClick:!0,altKey:e.altKey,ctrlKey:e.ctrlKey,metaKey:e.metaKey})}};function Pr(e,t=1,o=1){const n={size:t,position:o};for(const[t,o]of Object.entries(e))null!=o&&"children"!==t&&(n[t]=o);const r=[n];if(null!=e.children&&e.children.length>0){const t=e.children.length;for(let o=0;o<t;o++)r.push(...Pr(e.children[o],t,o+1))}return r}Er.styles=ft`
		:host {
			display: contents;
		}
	`,Ar([ui()],Er.prototype,"treeItems",2),Ar([pi({reflect:!0})],Er.prototype,"guides",2),Ar([pi({type:Array,attribute:!1})],Er.prototype,"model",1),Er=Ar([ci("gl-tree-generator")],Er);var Rr=Object.defineProperty,Tr=Object.getOwnPropertyDescriptor,Or=(e,t,o,n)=>{for(var r,a=n>1?void 0:n?Tr(t,o):t,l=e.length-1;l>=0;l--)(r=e[l])&&(a=(n?r(t,o,a):r(a))||a);return n&&a&&Rr(t,o,a),a};const Dr=-2;class GlDetailsBase extends lit_element_r{constructor(){super(...arguments),this.tab="commit",this.isUncommitted=!1,this.emptyText="No Files"}get fileLayout(){return this.preferences?.files?.layout??"auto"}get isCompact(){return this.preferences?.files?.compact??!0}get indentGuides(){return this.preferences?.indentGuides??"none"}get filesChangedPaneLabel(){const e=this.files?.length??0;return`${e>0?Z("file",e):"Files"} changed`}renderChangedFiles(e,t){const o=this.files?.length??0,n=this.isTree(o);let r="tree",a="list-tree",l="View as Tree";switch(this.fileLayout){case"auto":r="list",a="gl-list-auto",l="View as List";break;case"list":r="tree",a="list-flat",l="View as Tree";break;case"tree":r="auto",a="list-tree",l="View as Auto"}const c=this.createTreeModel(e,this.files??[],n,this.isCompact);return Qt`
			<webview-pane collapsable expanded flexible>
				<span slot="title">${this.filesChangedPaneLabel}</span>
				<span slot="subtitle" data-region="stats">${t}</span>
				<action-nav slot="actions">
					<action-item
						data-action="files-layout"
						data-files-layout="${r}"
						label="${l}"
						icon="${a}"
					></action-item>
				</action-nav>
				${bi(o>0&&"wip"===this.tab,(()=>Qt`<div class="section section--actions">
							<p class="button-container">
								<span class="button-group button-group--single">
									<gl-button full href="command:workbench.view.scm"
										>Commit via SCM <code-icon rotate="45" icon="arrow-up" slot="suffix"></code-icon
									></gl-button>
								</span>
							</p>
						</div>`))}
				${this.renderTreeFileModel(c)}
			</webview-pane>
		`}onShareWipChanges(e,t,o){if(!o)return;const n=new CustomEvent("share-wip",{detail:{checked:t}});this.dispatchEvent(n)}createRenderRoot(){return this}isTree(e){return"auto"===this.fileLayout?e>(this.preferences?.files?.threshold??5):"tree"===this.fileLayout}createTreeModel(e,t,o=!1,n=!0){if(!this.isUncommitted)return this.createFileTreeModel(e,t,o,n);const r=[],a=[],l=[];for(const e of t)e.staged?a.push(e):l.push(e);return 0===a.length||0===l.length?r.push(...this.createFileTreeModel(e,t,o,n)):(a.length&&r.push({label:"Staged Changes",path:"",level:1,branch:!0,checkable:!1,expanded:!0,checked:!1,context:["staged"],children:this.createFileTreeModel(e,a,o,n,{level:2}),actions:this.getStagedActions()}),l.length&&r.push({label:"Unstaged Changes",path:"",level:1,branch:!0,checkable:!1,expanded:!0,checked:!1,context:["unstaged"],children:this.createFileTreeModel(e,l,o,n,{level:2}),actions:this.getUnstagedActions()})),r}sortChildren(e){return e.sort(((e,t)=>e.branch&&!t.branch?-1:!e.branch&&t.branch?1:e.label<t.label?-1:e.label>t.label?1:0)),e}createFileTreeModel(e,t,o=!1,n=!0,r={level:1}){if(void 0===r.level&&(r.level=1),!t.length)return[{label:"No changes",path:"",level:r.level,branch:!1,checkable:!1,expanded:!0,checked:!1}];const a=[];if(o){const e=Ns(t,(e=>e.path.split("/")),((...e)=>e.join("/")),n);if(null!=e.children)for(const t of e.children.values()){const e=this.walkFileTree(t,{level:r.level});a.push(e)}}else for(const e of t){const t=this.fileToTreeModel(e,{level:r.level,branch:!1},!0);a.push(t)}return this.sortChildren(a),a}walkFileTree(e,t={level:1}){let o;if(void 0===t.level&&(t.level=1),o=null==e.value?this.folderToTreeModel(e.name,t):this.fileToTreeModel(e.value,t),null!=e.children){const n=[];for(const o of e.children.values()){const e=this.walkFileTree(o,{...t,level:t.level+1});n.push(e)}n.length>0&&(this.sortChildren(n),o.branch=!0,o.children=n)}return o}getStagedActions(e){return"wip"===this.tab?[{icon:"gl-cloud-patch-share",label:"Share Staged Changes",action:"staged-create-patch"}]:[]}getUnstagedActions(e){return"wip"===this.tab?[{icon:"gl-cloud-patch-share",label:"Share Unstaged Changes",action:"unstaged-create-patch"}]:[]}getFileActions(e,t){return[]}fileToTreeModel(e,t,o=!1,n="/"){const r=e.path.lastIndexOf(n),a=-1!==r?e.path.substring(r+1):e.path,l=o&&-1!==r?e.path.substring(0,r):"";return{branch:!1,expanded:!0,path:e.path,level:1,checkable:!1,checked:!1,icon:{type:"status",name:e.status},label:a,description:`${!0===o?l:""}${"R"===e.status?` ← ${e.originalPath}`:""}`,context:[e],actions:this.getFileActions(e,t),...t}}folderToTreeModel(e,t){return{branch:!1,expanded:!0,path:e,level:1,checkable:!1,checked:!1,icon:"folder",label:e,...t}}renderTreeFileModel(e){return Qt`<gl-tree-generator
			.model=${e}
			.guides=${this.indentGuides}
			@gl-tree-generated-item-action-clicked=${this.onTreeItemActionClicked}
			@gl-tree-generated-item-checked=${this.onTreeItemChecked}
			@gl-tree-generated-item-selected=${this.onTreeItemSelected}
		></gl-tree-generator>`}onTreeItemActionClicked(e){if(!e.detail.context||!e.detail.action)return;switch(e.detail.action.action){case"staged-create-patch":this.onCreatePatch(e);break;case"unstaged-create-patch":this.onCreatePatch(e,!0);break;case"file-open":this.onOpenFile(e);break;case"file-unstage":this.onUnstageFile(e);break;case"file-stage":this.onStageFile(e);break;case"file-compare-working":this.onCompareWorking(e);break;case"file-open-on-remote":this.onOpenFileOnRemote(e);break;case"file-more-actions":this.onMoreActions(e)}}onTreeItemSelected(e){e.detail.context&&this.onComparePrevious(e)}onCreatePatch(e,t=!1){const o=new CustomEvent("create-patch",{detail:{checked:!!t||"staged"}});this.dispatchEvent(o)}onOpenFile(e){if(!e.detail.context)return;const[t]=e.detail.context,o=new CustomEvent("file-open",{detail:this.getEventDetail(t,{preview:!e.detail.dblClick,viewColumn:e.detail.altKey?Dr:void 0})});this.dispatchEvent(o)}onOpenFileOnRemote(e){if(!e.detail.context)return;const[t]=e.detail.context,o=new CustomEvent("file-open-on-remote",{detail:this.getEventDetail(t,{preview:!e.detail.dblClick,viewColumn:e.detail.altKey?Dr:void 0})});this.dispatchEvent(o)}onCompareWorking(e){if(!e.detail.context)return;const[t]=e.detail.context,o=new CustomEvent("file-compare-working",{detail:this.getEventDetail(t,{preview:!e.detail.dblClick,viewColumn:e.detail.altKey?Dr:void 0})});this.dispatchEvent(o)}onComparePrevious(e){if(!e.detail.context)return;const[t]=e.detail.context,o=new CustomEvent("file-compare-previous",{detail:this.getEventDetail(t,{preview:!e.detail.dblClick,viewColumn:e.detail.altKey?Dr:void 0})});this.dispatchEvent(o)}onMoreActions(e){if(!e.detail.context)return;const[t]=e.detail.context,o=new CustomEvent("file-more-actions",{detail:this.getEventDetail(t)});this.dispatchEvent(o)}onStageFile(e){if(!e.detail.context)return;const[t]=e.detail.context,o=new CustomEvent("file-stage",{detail:this.getEventDetail(t,{preview:!e.detail.dblClick,viewColumn:e.detail.altKey?Dr:void 0})});this.dispatchEvent(o)}onUnstageFile(e){if(!e.detail.context)return;const[t]=e.detail.context,o=new CustomEvent("file-unstage",{detail:this.getEventDetail(t,{preview:!e.detail.dblClick,viewColumn:e.detail.altKey?Dr:void 0})});this.dispatchEvent(o)}getEventDetail(e,t){return{path:e.path,repoPath:e.repoPath,status:e.status,staged:e.staged,showOptions:t}}}Or([pi({type:Array})],GlDetailsBase.prototype,"files",2),Or([pi({type:Boolean})],GlDetailsBase.prototype,"isUncommitted",2),Or([pi({type:Object})],GlDetailsBase.prototype,"preferences",2),Or([pi({attribute:"empty-text"})],GlDetailsBase.prototype,"emptyText",2);const Mr=e=>e??ei;var zr=Object.defineProperty,Lr=Object.getOwnPropertyDescriptor,Ir=(e,t,o,n)=>{for(var r,a=n>1?void 0:n?Lr(t,o):t,l=e.length-1;l>=0;l--)(r=e[l])&&(a=(n?r(t,o,a):r(a))||a);return n&&a&&zr(t,o,a),a};let Br=class extends lit_element_r{constructor(){super(...arguments),this.disabled=!1,this.full=!1,this.tooltipPlacement="bottom"}get role(){return this.href?"link":"button"}updated(e){super.updated(e),e.has("disabled")&&this.setAttribute("aria-disabled",this.disabled.toString())}render(){return this.tooltip?Qt`<gl-tooltip .content=${this.tooltip} placement=${Mr(this.tooltipPlacement)}
				>${this.renderControl()}</gl-tooltip
			>`:this.querySelectorAll('[slot="tooltip"]').length>0?Qt`<gl-tooltip placement=${Mr(this.tooltipPlacement)}>
				${this.renderControl()}
				<slot name="tooltip" slot="content"></slot>
			</gl-tooltip>`:this.renderControl()}renderControl(){return null!=this.href?Qt`<a
				class="control"
				tabindex="${!1===this.disabled?0:-1}"
				href=${this.href}
				@keypress=${e=>this.onLinkKeypress(e)}
				><slot name="prefix"></slot><slot class="label"></slot><slot name="suffix"></slot
			></a>`:Qt`<button
			class="control"
			role=${Mr(this.role)}
			aria-checked=${Mr(this.ariaChecked)}
			?disabled=${this.disabled}
		>
			<slot name="prefix"></slot><slot class="label"></slot><slot name="suffix"></slot>
		</button>`}onLinkKeypress(e){" "===e.key&&this.control.click()}focus(e){this.control.focus(e)}blur(){this.control.blur()}click(){this.control.click()}};Br.shadowRootOptions={...lit_element_r.shadowRootOptions,delegatesFocus:!0},Br.styles=[qs,ft`
			:host {
				--button-foreground: var(--color-button-foreground);
				--button-background: var(--color-button-background);
				--button-hover-background: var(--vscode-button-hoverBackground);
				--button-padding: 0.4rem;
				--button-gap: 0.6rem;
				--button-compact-padding: 0.4rem;
				--button-input-padding: 0.1rem;
				--button-tight-padding: 0.4rem 0.8rem;
				--button-line-height: 1.35;
				--button-border: var(--vscode-button-border, transparent);

				display: inline-block;
				border: none;
				font-family: inherit;
				font-size: inherit;
				line-height: var(--button-line-height);
				text-align: center;
				text-decoration: none;
				user-select: none;
				background: var(--button-background);
				color: var(--button-foreground);
				cursor: pointer;
				border: 1px solid var(--button-border);
				border-radius: var(--gk-action-radius, 0.3rem);
				-webkit-font-smoothing: auto;
			}

			.control {
				box-sizing: border-box;
				display: inline-flex;
				flex-direction: row;
				justify-content: center;
				align-items: center;
				gap: var(--button-gap);
				padding: var(--button-padding);
				line-height: var(--button-line-height);
				font-family: inherit;

				color: inherit;
				text-decoration: none;

				width: max-content;
				height: 100%;
				cursor: pointer;
			}

			button.control {
				appearance: none;
				background: transparent;
				border: none;
			}

			.control:focus {
				outline: none;
			}

			.label {
				display: inline-block;
				max-width: 100%;
			}

			:host(:hover) {
				background: var(--button-hover-background);
			}

			:host(:focus-within) {
				${Hs}
			}

			:host([appearance='input']),
			:host([role='checkbox']:focus-within),
			:host([aria-checked]:focus-within) {
				outline-offset: -1px;
			}

			:host([full]),
			:host([full]) .control {
				width: 100%;
			}

			:host([appearance='secondary']) {
				--button-background: var(--vscode-button-secondaryBackground);
				--button-foreground: var(--vscode-button-secondaryForeground);
				--button-hover-background: var(--vscode-button-secondaryHoverBackground);
			}

			:host([appearance='input']),
			:host([appearance='toolbar']) {
				--button-background: transparent;
				--button-foreground: var(--vscode-foreground);
				--button-hover-background: var(--vscode-toolbar-hoverBackground);
				--button-border: transparent;
			}

			:host([appearance='alert']) {
				--button-background: transparent;
				--button-border: var(--color-alert-infoBorder);
				--button-foreground: var(--color-button-foreground);
				--button-hover-background: var(--color-alert-infoBorder);
				--button-line-height: 1.64;
				width: max-content;
			}

			:host-context(.vscode-light):host([appearance='alert']:not(:hover)),
			:host-context(.vscode-high-contrast-light):host([appearance='alert']:not(:hover)) {
				--button-foreground: var(--color-foreground);
			}

			:host([appearance='input']) .control {
				padding: var(--button-input-padding);
				--button-line-height: 1.1;
				height: 1.8rem;
				gap: 0.2rem;
			}

			:host([appearance='input'][href]) > a,
			:host([appearance='toolbar'][href]) > a {
				display: flex;
				align-items: center;
			}

			:host([appearance='alert'][href]) > a {
				display: block;
				width: max-content;
			}

			:host([density='compact']) .control {
				padding: var(--button-compact-padding);
			}

			:host([density='tight']) .control {
				padding: var(--button-tight-padding);
			}

			:host([density='tight']) .control ::slotted(code-icon) {
				--code-icon-size: 11px;
				--code-icon-v-align: unset;
			}

			:host([aria-checked]:hover:not([disabled]):not([aria-checked='true'])) {
				background-color: var(--vscode-inputOption-hoverBackground);
			}

			:host([disabled]) {
				opacity: 0.4;
				cursor: not-allowed;
				pointer-events: none;
			}

			:host([disabled][aria-checked='true']) {
				opacity: 0.8;
			}

			:host([aria-checked='true']) {
				background-color: var(--vscode-inputOption-activeBackground);
				color: var(--vscode-inputOption-activeForeground);
				border-color: var(--vscode-inputOption-activeBorder);
			}

			gl-tooltip {
				height: 100%;
				width: 100%;
				display: inline-flex;
				align-items: center;
				justify-content: center;
			}
		`],Ir([fi(".control")],Br.prototype,"control",2),Ir([pi({reflect:!0})],Br.prototype,"appearance",2),Ir([pi({type:Boolean,reflect:!0})],Br.prototype,"disabled",2),Ir([pi({reflect:!0})],Br.prototype,"density",2),Ir([pi({type:Boolean,reflect:!0})],Br.prototype,"full",2),Ir([pi()],Br.prototype,"href",2),Ir([pi({reflect:!0})],Br.prototype,"role",1),Ir([pi()],Br.prototype,"tooltip",2),Ir([pi()],Br.prototype,"tooltipPlacement",2),Br=Ir([ci("gl-button")],Br);const jr=()=>({toAttribute:e=>e.getTime(),fromAttribute:(e,t)=>new Date(parseInt(e,10))});var Nr=Object.defineProperty,Ur=Object.getOwnPropertyDescriptor,Fr=(e,t,o,n)=>{for(var r,a=n>1?void 0:n?Ur(t,o):t,l=e.length-1;l>=0;l--)(r=e[l])&&(a=(n?r(t,o,a):r(a))||a);return n&&a&&Nr(t,o,a),a};let Hr=class extends lit_element_r{constructor(){super(...arguments),this.dateStyle="relative",this.date=new Date,this.tooltip=""}render(){const e=N(this.date,this.format??"MMMM Do, YYYY h:mma");return Qt`<gl-tooltip content="${this.tooltip} ${e}"
			><time datetime="${this.date.toISOString()}"
				>${"relative"===this.dateStyle?function(e,t){const o=("number"==typeof e?e:e.getTime())-(new Date).getTime();for(const[e,n,r,a]of O){const l=Math.abs(o);if(l>=n||1e3===n)return t?(null==D&&(null!=B?D=B.resolvedOptions().locale:null!=I?D=I.resolvedOptions().locale:(B=new Intl.RelativeTimeFormat(L,{localeMatcher:"best fit",numeric:"always",style:"narrow"}),D=B.resolvedOptions().locale)),"en"===D||D?.startsWith("en-")?`${Math.round(l/r)}${a}`:(null==B&&(B=new Intl.RelativeTimeFormat(L,{localeMatcher:"best fit",numeric:"always",style:"narrow"})),B.format(Math.round(o/r),e))):(null==I&&(I=new Intl.RelativeTimeFormat(L,{localeMatcher:"best fit",numeric:"auto",style:"long"})),I.format(Math.round(o/r),e))}return""}(this.date):e}</time
			></gl-tooltip
		>`}};Fr([pi()],Hr.prototype,"format",2),Fr([pi({attribute:"date-style"})],Hr.prototype,"dateStyle",2),Fr([pi({converter:jr(),reflect:!0})],Hr.prototype,"date",2),Fr([pi()],Hr.prototype,"tooltip",2),Hr=Fr([ci("formatted-date")],Hr);var qr=Object.defineProperty,Vr=Object.getOwnPropertyDescriptor,Wr=(e,t,o,n)=>{for(var r,a=n>1?void 0:n?Vr(t,o):t,l=e.length-1;l>=0;l--)(r=e[l])&&(a=(n?r(t,o,a):r(a))||a);return n&&a&&qr(t,o,a),a};let Gr=class extends lit_element_r{constructor(){super(...arguments),this.name="",this.avatarUrl="https://www.gravatar.com/avatar/?s=64&d=robohash",this.showAvatar=!1,this.dateFormat="MMMM Do, YYYY h:mma",this.dateStyle="relative",this.committer=!1}renderAvatar(){return this.showAvatar&&this.avatarUrl?.length?Qt`<img class="thumb" src="${this.avatarUrl}" alt="${this.name}" />`:Qt`<code-icon icon="person" size="18"></code-icon>`}render(){return Qt`
			<gl-tooltip>
				${bi(null!=this.url,(()=>Qt`<a class="author" href="${this.url}"
							><span class="avatar">${this.renderAvatar()}</span
							><span class="name" href="${this.url}">${this.name}</span></a
						>`),(()=>Qt`<span class="author"
							><span class="avatar">${this.renderAvatar()}</span
							><span class="name" href="${this.url}">${this.name}</span></span
						>`))}
				<div class="author-hover" slot="content">
					${this.avatarUrl?.length?Qt`<img class="thumb" src="${this.avatarUrl}" alt="${this.name}" />`:ei}
					<span>${this.name}</span>
				</div>
			</gl-tooltip>
			<span class="date">
				${this.actionLabel}
				<formatted-date
					.date=${this.date}
					.format=${this.dateFormat}
					.dateStyle=${this.dateStyle}
				></formatted-date>
			</span>
		`}};Gr.styles=ft`
		:host,
		.author {
			display: flex;
			flex-direction: row;
			align-items: center;
			gap: 0 0.6rem;
		}

		a {
			color: var(--color-link-foreground);
			text-decoration: none;
		}

		.author-hover {
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			gap: 0.6rem;
			margin: 0.6rem 0.2rem 0.2rem 0.2rem;
		}

		.author-hover img {
			max-width: 64px;
		}

		.avatar {
			width: 1.8rem;
		}

		.thumb {
			width: 100%;
			height: auto;
			vertical-align: middle;
			border-radius: 0.4rem;
		}

		.name {
			flex: 1;
			font-size: 1.3rem;
			white-space: nowrap;
			text-overflow: ellipsis;
		}

		.date {
			flex: none;
			margin-inline-start: auto;
			font-size: 1.3rem;
			color: var(--color-foreground--50);
		}
	`,Wr([pi()],Gr.prototype,"name",2),Wr([pi()],Gr.prototype,"url",2),Wr([pi({converter:jr(),reflect:!0})],Gr.prototype,"date",2),Wr([pi()],Gr.prototype,"avatarUrl",2),Wr([pi({type:Boolean,attribute:"show-avatar",reflect:!0})],Gr.prototype,"showAvatar",2),Wr([pi()],Gr.prototype,"dateFormat",2),Wr([pi()],Gr.prototype,"dateStyle",2),Wr([pi({type:Boolean})],Gr.prototype,"committer",2),Wr([pi()],Gr.prototype,"actionLabel",2),Gr=Wr([ci("commit-identity")],Gr);var Kr=Object.defineProperty,Zr=Object.getOwnPropertyDescriptor,Yr=(e,t,o,n)=>{for(var r,a=n>1?void 0:n?Zr(t,o):t,l=e.length-1;l>=0;l--)(r=e[l])&&(a=(n?r(t,o,a):r(a))||a);return n&&a&&Kr(t,o,a),a};const Jr=Object.freeze([["added",["+","add"]],["modified",["~","edit"]],["removed",["-","trash"]]]);let Qr=class extends lit_element_r{constructor(){super(...arguments),this.added=0,this.modified=0,this.removed=0}render(){return Jr.map((([e,t])=>this.renderStat(e,t)))}renderStat(e,t){const o=this[e];return null==o?ei:Qt`<span class="stat ${e}" aria-label="${o} ${e}"
			><span class="label">${this.renderSymbol(t)}${o}</span></span
		>`}renderSymbol([e,t]){return"icons"===this.symbol?Qt`<code-icon class="icon" icon="${t}"></code-icon>`:Qt`<span>${e}</span>`}};Qr.styles=ft`
		:host {
			display: inline-flex;
			flex-direction: row;
			align-items: center;
			gap: 1rem;
			white-space: nowrap;
			font-size: 1rem;
		}

		:host([symbol='icons']) {
			gap: 0.8rem;
		}

		.stat {
			display: inline-flex;
			flex-direction: row;
			align-items: center;
		}

		.added {
			color: var(--vscode-gitDecoration-addedResourceForeground);
		}
		.modified {
			color: var(--vscode-gitDecoration-modifiedResourceForeground);
		}
		.removed {
			color: var(--vscode-gitDecoration-deletedResourceForeground);
		}

		.label {
			flex-basis: 100%;
			text-align: center;
			align-content: center;
			user-select: none;
		}

		.icon {
			--code-icon-size: 0.94017em;
			margin-inline-end: 0.2rem;
		}
	`,Yr([pi({type:Number})],Qr.prototype,"added",2),Yr([pi({type:Number})],Qr.prototype,"modified",2),Yr([pi({type:Number})],Qr.prototype,"removed",2),Yr([pi()],Qr.prototype,"symbol",2),Qr=Yr([ci("commit-stats")],Qr);const{I:Xr}=ri,ea=()=>document.createComment(""),ta=(e,t,o)=>{const n=e._$AA.parentNode,r=void 0===t?e._$AB:t._$AA;if(void 0===o){const t=n.insertBefore(ea(),r),a=n.insertBefore(ea(),r);o=new Xr(t,a,e,e.options)}else{const t=o._$AB.nextSibling,a=o._$AM,l=a!==e;if(l){let t;o._$AQ?.(e),o._$AM=e,void 0!==o._$AP&&(t=e._$AU)!==a._$AU&&o._$AP(t)}if(t!==r||l){let e=o._$AA;for(;e!==t;){const t=e.nextSibling;n.insertBefore(e,r),e=t}}}return o},ia=(e,t,o=e)=>(e._$AI(t,o),e),oa={},na=e=>{e._$AP?.(!1,!0);let t=e._$AA;const o=e._$AB.nextSibling;for(;t!==o;){const e=t.nextSibling;t.remove(),t=e}},sa=(e,t)=>{const o=e._$AN;if(void 0===o)return!1;for(const e of o)e._$AO?.(t,!1),sa(e,t);return!0},ra=e=>{let t,o;do{if(void 0===(t=e._$AM))break;o=t._$AN,o.delete(e),e=t}while(0===o?.size)},aa=e=>{for(let t;t=e._$AM;e=t){let o=t._$AN;if(void 0===o)t._$AN=o=new Set;else if(o.has(e))break;o.add(e),da(t)}};function la(e){void 0!==this._$AN?(ra(this),this._$AM=e,aa(this)):this._$AM=e}function ca(e,t=!1,o=0){const n=this._$AH,r=this._$AN;if(void 0!==r&&0!==r.size)if(t)if(Array.isArray(n))for(let e=o;e<n.length;e++)sa(n[e],!1),ra(n[e]);else null!=n&&(sa(n,!1),ra(n));else sa(this,e)}const da=e=>{e.type==ms&&(e._$AP??=ca,e._$AQ??=la)};class async_directive_f extends directive_i{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,t,o){super._$AT(e,t,o),aa(this),this.isConnected=e._$AU}_$AO(e,t=!0){e!==this.isConnected&&(this.isConnected=e,e?this.reconnected?.():this.disconnected?.()),t&&(sa(this,e),ra(this))}setValue(e){if((e=>void 0===e.strings)(this._$Ct))this._$Ct._$AI(e,this);else{const t=[...this._$Ct._$AH];t[this._$Ci]=e,this._$Ct._$AI(t,this,0)}}disconnected(){}reconnected(){}}class private_async_helpers_s{constructor(e){this.Y=e}disconnect(){this.Y=void 0}reconnect(e){this.Y=e}deref(){return this.Y}}class private_async_helpers_i{constructor(){this.Z=void 0,this.q=void 0}get(){return this.Z}pause(){this.Z??=new Promise((e=>this.q=e))}resume(){this.q?.(),this.Z=this.q=void 0}}const ha=e=>!(e=>null===e||"object"!=typeof e&&"function"!=typeof e)(e)&&"function"==typeof e.then,pa=1073741823;const ua=bs(class until_c extends async_directive_f{constructor(){super(...arguments),this._$Cwt=pa,this._$Cbt=[],this._$CK=new private_async_helpers_s(this),this._$CX=new private_async_helpers_i}render(...e){return e.find((e=>!ha(e)))??Xt}update(e,t){const o=this._$Cbt;let n=o.length;this._$Cbt=t;const r=this._$CK,a=this._$CX;this.isConnected||this.disconnected();for(let e=0;e<t.length&&!(e>this._$Cwt);e++){const l=t[e];if(!ha(l))return this._$Cwt=e,l;e<n&&l===o[e]||(this._$Cwt=pa,n=0,Promise.resolve(l).then((async e=>{for(;a.get();)await a.get();const t=r.deref();if(void 0!==t){const o=t._$Cbt.indexOf(l);o>-1&&o<t._$Cwt&&(t._$Cwt=o,t.setValue(e))}})))}return Xt}disconnected(){this._$CK.disconnect(),this._$CX.pause()}reconnected(){this._$CK.reconnect(this),this._$CX.resume()}});function ga(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}let fa={async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null};function ma(e){fa=e}const ba={exec:()=>null};function va(e,t=""){let o="string"==typeof e?e:e.source;const n={replace:(e,t)=>{let r="string"==typeof t?t:t.source;return r=r.replace(ya.caret,"$1"),o=o.replace(e,r),n},getRegex:()=>new RegExp(o,t)};return n}const ya={codeRemoveIndent:/^(?: {1,4}| {0,3}\t)/gm,outputLinkReplace:/\\([\[\]])/g,indentCodeCompensation:/^(\s+)(?:```)/,beginningSpace:/^\s+/,endingHash:/#$/,startingSpaceChar:/^ /,endingSpaceChar:/ $/,nonSpaceChar:/[^ ]/,newLineCharGlobal:/\n/g,tabCharGlobal:/\t/g,multipleSpaceGlobal:/\s+/g,blankLine:/^[ \t]*$/,doubleBlankLine:/\n[ \t]*\n[ \t]*$/,blockquoteStart:/^ {0,3}>/,blockquoteSetextReplace:/\n {0,3}((?:=+|-+) *)(?=\n|$)/g,blockquoteSetextReplace2:/^ {0,3}>[ \t]?/gm,listReplaceTabs:/^\t+/,listReplaceNesting:/^ {1,4}(?=( {4})*[^ ])/g,listIsTask:/^\[[ xX]\] /,listReplaceTask:/^\[[ xX]\] +/,anyLine:/\n.*\n/,hrefBrackets:/^<(.*)>$/,tableDelimiter:/[:|]/,tableAlignChars:/^\||\| *$/g,tableRowBlankLine:/\n[ \t]*$/,tableAlignRight:/^ *-+: *$/,tableAlignCenter:/^ *:-+: *$/,tableAlignLeft:/^ *:-+ *$/,startATag:/^<a /i,endATag:/^<\/a>/i,startPreScriptTag:/^<(pre|code|kbd|script)(\s|>)/i,endPreScriptTag:/^<\/(pre|code|kbd|script)(\s|>)/i,startAngleBracket:/^</,endAngleBracket:/>$/,pedanticHrefTitle:/^([^'"]*[^\s])\s+(['"])(.*)\2/,unicodeAlphaNumeric:/[\p{L}\p{N}]/u,escapeTest:/[&<>"']/,escapeReplace:/[&<>"']/g,escapeTestNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,escapeReplaceNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g,unescapeTest:/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/gi,caret:/(^|[^\[])\^/g,percentDecode:/%25/g,findPipe:/\|/g,splitPipe:/ \|/,slashPipe:/\\\|/g,carriageReturn:/\r\n|\r/g,spaceLine:/^ +$/gm,notSpaceStart:/^\S*/,endingNewline:/\n$/,listItemRegex:e=>new RegExp(`^( {0,3}${e})((?:[\t ][^\\n]*)?(?:\\n|$))`),nextBulletRegex:e=>new RegExp(`^ {0,${Math.min(3,e-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ \t][^\\n]*)?(?:\\n|$))`),hrRegex:e=>new RegExp(`^ {0,${Math.min(3,e-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),fencesBeginRegex:e=>new RegExp(`^ {0,${Math.min(3,e-1)}}(?:\`\`\`|~~~)`),headingBeginRegex:e=>new RegExp(`^ {0,${Math.min(3,e-1)}}#`),htmlBeginRegex:e=>new RegExp(`^ {0,${Math.min(3,e-1)}}<(?:[a-z].*>|!--)`,"i")},wa=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,ka=/(?:[*+-]|\d{1,9}[.)])/,xa=va(/^(?!bull |blockCode|fences|blockquote|heading|html)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html))+?)\n {0,3}(=+|-+) *(?:\n+|$)/).replace(/bull/g,ka).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).getRegex(),$a=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,_a=/(?!\s*\])(?:\\.|[^\[\]\\])+/,Ca=va(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label",_a).replace("title",/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),Sa=va(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g,ka).getRegex(),Aa="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",Ea=/<!--(?:-?>|[\s\S]*?(?:-->|$))/,Pa=va("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ \t]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ \t]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ \t]*)+\\n|$))","i").replace("comment",Ea).replace("tag",Aa).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),Ra=va($a).replace("hr",wa).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Aa).getRegex(),Ta={blockquote:va(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph",Ra).getRegex(),code:/^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/,def:Ca,fences:/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,heading:/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,hr:wa,html:Pa,lheading:xa,list:Sa,newline:/^(?:[ \t]*(?:\n|$))+/,paragraph:Ra,table:ba,text:/^[^\n]+/},Oa=va("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr",wa).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("blockquote"," {0,3}>").replace("code","(?: {4}| {0,3}\t)[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Aa).getRegex(),Da={...Ta,table:Oa,paragraph:va($a).replace("hr",wa).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("table",Oa).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Aa).getRegex()},Ma={...Ta,html:va("^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:\"[^\"]*\"|'[^']*'|\\s[^'\"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))").replace("comment",Ea).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:ba,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:va($a).replace("hr",wa).replace("heading"," *#{1,6} *[^\n]").replace("lheading",xa).replace("|table","").replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").replace("|tag","").getRegex()},za=/^( {2,}|\\)\n(?!\s*$)/,La=/[\p{P}\p{S}]/u,Ia=/[\s\p{P}\p{S}]/u,Ba=/[^\s\p{P}\p{S}]/u,ja=va(/^((?![*_])punctSpace)/,"u").replace(/punctSpace/g,Ia).getRegex(),Na=/(?!~)[\p{P}\p{S}]/u,Ua=/^(?:\*+(?:((?!\*)punct)|[^\s*]))|^_+(?:((?!_)punct)|([^\s_]))/,Fa=va(Ua,"u").replace(/punct/g,La).getRegex(),Ha=va(Ua,"u").replace(/punct/g,Na).getRegex(),qa="^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)",Va=va(qa,"gu").replace(/notPunctSpace/g,Ba).replace(/punctSpace/g,Ia).replace(/punct/g,La).getRegex(),Wa=va(qa,"gu").replace(/notPunctSpace/g,/(?:[^\s\p{P}\p{S}]|~)/u).replace(/punctSpace/g,/(?!~)[\s\p{P}\p{S}]/u).replace(/punct/g,Na).getRegex(),Ga=va("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)","gu").replace(/notPunctSpace/g,Ba).replace(/punctSpace/g,Ia).replace(/punct/g,La).getRegex(),Ka=va(/\\(punct)/,"gu").replace(/punct/g,La).getRegex(),Za=va(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme",/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email",/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),Ya=va(Ea).replace("(?:--\x3e|$)","--\x3e").getRegex(),Ja=va("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment",Ya).replace("attribute",/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),Qa=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/,Xa=va(/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/).replace("label",Qa).replace("href",/<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/).replace("title",/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),el=va(/^!?\[(label)\]\[(ref)\]/).replace("label",Qa).replace("ref",_a).getRegex(),tl=va(/^!?\[(ref)\](?:\[\])?/).replace("ref",_a).getRegex(),il={_backpedal:ba,anyPunctuation:Ka,autolink:Za,blockSkip:/\[[^[\]]*?\]\((?:\\.|[^\\\(\)]|\((?:\\.|[^\\\(\)])*\))*\)|`[^`]*?`|<[^<>]*?>/g,br:za,code:/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,del:ba,emStrongLDelim:Fa,emStrongRDelimAst:Va,emStrongRDelimUnd:Ga,escape:/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,link:Xa,nolink:tl,punctuation:ja,reflink:el,reflinkSearch:va("reflink|nolink(?!\\()","g").replace("reflink",el).replace("nolink",tl).getRegex(),tag:Ja,text:/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,url:ba},ol={...il,link:va(/^!?\[(label)\]\((.*?)\)/).replace("label",Qa).getRegex(),reflink:va(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",Qa).getRegex()},nl={...il,emStrongRDelimAst:Wa,emStrongLDelim:Ha,url:va(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,"i").replace("email",/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])((?:\\.|[^\\])*?(?:\\.|[^\s~\\]))\1(?=[^~]|$)/,text:/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/},sl={...nl,br:va(za).replace("{2,}","*").getRegex(),text:va(nl.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()},rl={normal:Ta,gfm:Da,pedantic:Ma},al={normal:il,gfm:nl,breaks:sl,pedantic:ol},ll={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},cl=e=>ll[e];function dl(e,t){if(t){if(ya.escapeTest.test(e))return e.replace(ya.escapeReplace,cl)}else if(ya.escapeTestNoEncode.test(e))return e.replace(ya.escapeReplaceNoEncode,cl);return e}function hl(e){try{e=encodeURI(e).replace(ya.percentDecode,"%")}catch{return null}return e}function pl(e,t){const o=e.replace(ya.findPipe,((e,t,o)=>{let n=!1,r=t;for(;--r>=0&&"\\"===o[r];)n=!n;return n?"|":" |"})),n=o.split(ya.splitPipe);let r=0;if(n[0].trim()||n.shift(),n.length>0&&!n.at(-1)?.trim()&&n.pop(),t)if(n.length>t)n.splice(t);else for(;n.length<t;)n.push("");for(;r<n.length;r++)n[r]=n[r].trim().replace(ya.slashPipe,"|");return n}function ul(e,t,o){const n=e.length;if(0===n)return"";let r=0;for(;r<n;){if(e.charAt(n-r-1)!==t)break;r++}return e.slice(0,n-r)}function gl(e,t,o,n,r){const a=t.href,l=t.title||null,c=e[1].replace(r.other.outputLinkReplace,"$1");if("!"!==e[0].charAt(0)){n.state.inLink=!0;const e={type:"link",raw:o,href:a,title:l,text:c,tokens:n.inlineTokens(c)};return n.state.inLink=!1,e}return{type:"image",raw:o,href:a,title:l,text:c}}class _Tokenizer{options;rules;lexer;constructor(e){this.options=e||fa}space(e){const t=this.rules.block.newline.exec(e);if(t&&t[0].length>0)return{type:"space",raw:t[0]}}code(e){const t=this.rules.block.code.exec(e);if(t){const e=t[0].replace(this.rules.other.codeRemoveIndent,"");return{type:"code",raw:t[0],codeBlockStyle:"indented",text:this.options.pedantic?e:ul(e,"\n")}}}fences(e){const t=this.rules.block.fences.exec(e);if(t){const e=t[0],o=function(e,t,o){const n=e.match(o.other.indentCodeCompensation);if(null===n)return t;const r=n[1];return t.split("\n").map((e=>{const t=e.match(o.other.beginningSpace);if(null===t)return e;const[n]=t;return n.length>=r.length?e.slice(r.length):e})).join("\n")}(e,t[3]||"",this.rules);return{type:"code",raw:e,lang:t[2]?t[2].trim().replace(this.rules.inline.anyPunctuation,"$1"):t[2],text:o}}}heading(e){const t=this.rules.block.heading.exec(e);if(t){let e=t[2].trim();if(this.rules.other.endingHash.test(e)){const t=ul(e,"#");this.options.pedantic?e=t.trim():t&&!this.rules.other.endingSpaceChar.test(t)||(e=t.trim())}return{type:"heading",raw:t[0],depth:t[1].length,text:e,tokens:this.lexer.inline(e)}}}hr(e){const t=this.rules.block.hr.exec(e);if(t)return{type:"hr",raw:ul(t[0],"\n")}}blockquote(e){const t=this.rules.block.blockquote.exec(e);if(t){let e=ul(t[0],"\n").split("\n"),o="",n="";const r=[];for(;e.length>0;){let t=!1;const a=[];let l;for(l=0;l<e.length;l++)if(this.rules.other.blockquoteStart.test(e[l]))a.push(e[l]),t=!0;else{if(t)break;a.push(e[l])}e=e.slice(l);const c=a.join("\n"),d=c.replace(this.rules.other.blockquoteSetextReplace,"\n    $1").replace(this.rules.other.blockquoteSetextReplace2,"");o=o?`${o}\n${c}`:c,n=n?`${n}\n${d}`:d;const h=this.lexer.state.top;if(this.lexer.state.top=!0,this.lexer.blockTokens(d,r,!0),this.lexer.state.top=h,0===e.length)break;const p=r.at(-1);if("code"===p?.type)break;if("blockquote"===p?.type){const t=p,a=t.raw+"\n"+e.join("\n"),l=this.blockquote(a);r[r.length-1]=l,o=o.substring(0,o.length-t.raw.length)+l.raw,n=n.substring(0,n.length-t.text.length)+l.text;break}if("list"!==p?.type);else{const t=p,a=t.raw+"\n"+e.join("\n"),l=this.list(a);r[r.length-1]=l,o=o.substring(0,o.length-p.raw.length)+l.raw,n=n.substring(0,n.length-t.raw.length)+l.raw,e=a.substring(r.at(-1).raw.length).split("\n")}}return{type:"blockquote",raw:o,tokens:r,text:n}}}list(e){let t=this.rules.block.list.exec(e);if(t){let o=t[1].trim();const n=o.length>1,r={type:"list",raw:"",ordered:n,start:n?+o.slice(0,-1):"",loose:!1,items:[]};o=n?`\\d{1,9}\\${o.slice(-1)}`:`\\${o}`,this.options.pedantic&&(o=n?o:"[*+-]");const a=this.rules.other.listItemRegex(o);let l=!1;for(;e;){let o=!1,n="",c="";if(!(t=a.exec(e)))break;if(this.rules.block.hr.test(e))break;n=t[0],e=e.substring(n.length);let d=t[2].split("\n",1)[0].replace(this.rules.other.listReplaceTabs,(e=>" ".repeat(3*e.length))),h=e.split("\n",1)[0],p=!d.trim(),u=0;if(this.options.pedantic?(u=2,c=d.trimStart()):p?u=t[1].length+1:(u=t[2].search(this.rules.other.nonSpaceChar),u=u>4?1:u,c=d.slice(u),u+=t[1].length),p&&this.rules.other.blankLine.test(h)&&(n+=h+"\n",e=e.substring(h.length+1),o=!0),!o){const t=this.rules.other.nextBulletRegex(u),o=this.rules.other.hrRegex(u),r=this.rules.other.fencesBeginRegex(u),a=this.rules.other.headingBeginRegex(u),l=this.rules.other.htmlBeginRegex(u);for(;e;){const g=e.split("\n",1)[0];let f;if(h=g,this.options.pedantic?(h=h.replace(this.rules.other.listReplaceNesting,"  "),f=h):f=h.replace(this.rules.other.tabCharGlobal,"    "),r.test(h))break;if(a.test(h))break;if(l.test(h))break;if(t.test(h))break;if(o.test(h))break;if(f.search(this.rules.other.nonSpaceChar)>=u||!h.trim())c+="\n"+f.slice(u);else{if(p)break;if(d.replace(this.rules.other.tabCharGlobal,"    ").search(this.rules.other.nonSpaceChar)>=4)break;if(r.test(d))break;if(a.test(d))break;if(o.test(d))break;c+="\n"+h}p||h.trim()||(p=!0),n+=g+"\n",e=e.substring(g.length+1),d=f.slice(u)}}r.loose||(l?r.loose=!0:this.rules.other.doubleBlankLine.test(n)&&(l=!0));let g,f=null;this.options.gfm&&(f=this.rules.other.listIsTask.exec(c),f&&(g="[ ] "!==f[0],c=c.replace(this.rules.other.listReplaceTask,""))),r.items.push({type:"list_item",raw:n,task:!!f,checked:g,loose:!1,text:c,tokens:[]}),r.raw+=n}const c=r.items.at(-1);if(!c)return;c.raw=c.raw.trimEnd(),c.text=c.text.trimEnd(),r.raw=r.raw.trimEnd();for(let e=0;e<r.items.length;e++)if(this.lexer.state.top=!1,r.items[e].tokens=this.lexer.blockTokens(r.items[e].text,[]),!r.loose){const t=r.items[e].tokens.filter((e=>"space"===e.type)),o=t.length>0&&t.some((e=>this.rules.other.anyLine.test(e.raw)));r.loose=o}if(r.loose)for(let e=0;e<r.items.length;e++)r.items[e].loose=!0;return r}}html(e){const t=this.rules.block.html.exec(e);if(t){return{type:"html",block:!0,raw:t[0],pre:"pre"===t[1]||"script"===t[1]||"style"===t[1],text:t[0]}}}def(e){const t=this.rules.block.def.exec(e);if(t){const e=t[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal," "),o=t[2]?t[2].replace(this.rules.other.hrefBrackets,"$1").replace(this.rules.inline.anyPunctuation,"$1"):"",n=t[3]?t[3].substring(1,t[3].length-1).replace(this.rules.inline.anyPunctuation,"$1"):t[3];return{type:"def",tag:e,raw:t[0],href:o,title:n}}}table(e){const t=this.rules.block.table.exec(e);if(!t)return;if(!this.rules.other.tableDelimiter.test(t[2]))return;const o=pl(t[1]),n=t[2].replace(this.rules.other.tableAlignChars,"").split("|"),r=t[3]?.trim()?t[3].replace(this.rules.other.tableRowBlankLine,"").split("\n"):[],a={type:"table",raw:t[0],header:[],align:[],rows:[]};if(o.length===n.length){for(const e of n)this.rules.other.tableAlignRight.test(e)?a.align.push("right"):this.rules.other.tableAlignCenter.test(e)?a.align.push("center"):this.rules.other.tableAlignLeft.test(e)?a.align.push("left"):a.align.push(null);for(let e=0;e<o.length;e++)a.header.push({text:o[e],tokens:this.lexer.inline(o[e]),header:!0,align:a.align[e]});for(const e of r)a.rows.push(pl(e,a.header.length).map(((e,t)=>({text:e,tokens:this.lexer.inline(e),header:!1,align:a.align[t]}))));return a}}lheading(e){const t=this.rules.block.lheading.exec(e);if(t)return{type:"heading",raw:t[0],depth:"="===t[2].charAt(0)?1:2,text:t[1],tokens:this.lexer.inline(t[1])}}paragraph(e){const t=this.rules.block.paragraph.exec(e);if(t){const e="\n"===t[1].charAt(t[1].length-1)?t[1].slice(0,-1):t[1];return{type:"paragraph",raw:t[0],text:e,tokens:this.lexer.inline(e)}}}text(e){const t=this.rules.block.text.exec(e);if(t)return{type:"text",raw:t[0],text:t[0],tokens:this.lexer.inline(t[0])}}escape(e){const t=this.rules.inline.escape.exec(e);if(t)return{type:"escape",raw:t[0],text:t[1]}}tag(e){const t=this.rules.inline.tag.exec(e);if(t)return!this.lexer.state.inLink&&this.rules.other.startATag.test(t[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&this.rules.other.endATag.test(t[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&this.rules.other.startPreScriptTag.test(t[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&this.rules.other.endPreScriptTag.test(t[0])&&(this.lexer.state.inRawBlock=!1),{type:"html",raw:t[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:t[0]}}link(e){const t=this.rules.inline.link.exec(e);if(t){const e=t[2].trim();if(!this.options.pedantic&&this.rules.other.startAngleBracket.test(e)){if(!this.rules.other.endAngleBracket.test(e))return;const t=ul(e.slice(0,-1),"\\");if((e.length-t.length)%2==0)return}else{const e=function(e,t){if(-1===e.indexOf(t[1]))return-1;let o=0;for(let n=0;n<e.length;n++)if("\\"===e[n])n++;else if(e[n]===t[0])o++;else if(e[n]===t[1]&&(o--,o<0))return n;return-1}(t[2],"()");if(e>-1){const o=(0===t[0].indexOf("!")?5:4)+t[1].length+e;t[2]=t[2].substring(0,e),t[0]=t[0].substring(0,o).trim(),t[3]=""}}let o=t[2],n="";if(this.options.pedantic){const e=this.rules.other.pedanticHrefTitle.exec(o);e&&(o=e[1],n=e[3])}else n=t[3]?t[3].slice(1,-1):"";return o=o.trim(),this.rules.other.startAngleBracket.test(o)&&(o=this.options.pedantic&&!this.rules.other.endAngleBracket.test(e)?o.slice(1):o.slice(1,-1)),gl(t,{href:o?o.replace(this.rules.inline.anyPunctuation,"$1"):o,title:n?n.replace(this.rules.inline.anyPunctuation,"$1"):n},t[0],this.lexer,this.rules)}}reflink(e,t){let o;if((o=this.rules.inline.reflink.exec(e))||(o=this.rules.inline.nolink.exec(e))){const e=t[(o[2]||o[1]).replace(this.rules.other.multipleSpaceGlobal," ").toLowerCase()];if(!e){const e=o[0].charAt(0);return{type:"text",raw:e,text:e}}return gl(o,e,o[0],this.lexer,this.rules)}}emStrong(e,t,o=""){let n=this.rules.inline.emStrongLDelim.exec(e);if(!n)return;if(n[3]&&o.match(this.rules.other.unicodeAlphaNumeric))return;if(!(n[1]||n[2]||"")||!o||this.rules.inline.punctuation.exec(o)){const o=[...n[0]].length-1;let r,a,l=o,c=0;const d="*"===n[0][0]?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(d.lastIndex=0,t=t.slice(-1*e.length+o);null!=(n=d.exec(t));){if(r=n[1]||n[2]||n[3]||n[4]||n[5]||n[6],!r)continue;if(a=[...r].length,n[3]||n[4]){l+=a;continue}if((n[5]||n[6])&&o%3&&!((o+a)%3)){c+=a;continue}if(l-=a,l>0)continue;a=Math.min(a,a+l+c);const t=[...n[0]][0].length,d=e.slice(0,o+n.index+t+a);if(Math.min(o,a)%2){const e=d.slice(1,-1);return{type:"em",raw:d,text:e,tokens:this.lexer.inlineTokens(e)}}const h=d.slice(2,-2);return{type:"strong",raw:d,text:h,tokens:this.lexer.inlineTokens(h)}}}}codespan(e){const t=this.rules.inline.code.exec(e);if(t){let e=t[2].replace(this.rules.other.newLineCharGlobal," ");const o=this.rules.other.nonSpaceChar.test(e),n=this.rules.other.startingSpaceChar.test(e)&&this.rules.other.endingSpaceChar.test(e);return o&&n&&(e=e.substring(1,e.length-1)),{type:"codespan",raw:t[0],text:e}}}br(e){const t=this.rules.inline.br.exec(e);if(t)return{type:"br",raw:t[0]}}del(e){const t=this.rules.inline.del.exec(e);if(t)return{type:"del",raw:t[0],text:t[2],tokens:this.lexer.inlineTokens(t[2])}}autolink(e){const t=this.rules.inline.autolink.exec(e);if(t){let e,o;return"@"===t[2]?(e=t[1],o="mailto:"+e):(e=t[1],o=e),{type:"link",raw:t[0],text:e,href:o,tokens:[{type:"text",raw:e,text:e}]}}}url(e){let t;if(t=this.rules.inline.url.exec(e)){let e,o;if("@"===t[2])e=t[0],o="mailto:"+e;else{let n;do{n=t[0],t[0]=this.rules.inline._backpedal.exec(t[0])?.[0]??""}while(n!==t[0]);e=t[0],o="www."===t[1]?"http://"+t[0]:t[0]}return{type:"link",raw:t[0],text:e,href:o,tokens:[{type:"text",raw:e,text:e}]}}}inlineText(e){const t=this.rules.inline.text.exec(e);if(t){const e=this.lexer.state.inRawBlock;return{type:"text",raw:t[0],text:t[0],escaped:e}}}}class _Lexer{tokens;options;state;tokenizer;inlineQueue;constructor(e){this.tokens=[],this.tokens.links=Object.create(null),this.options=e||fa,this.options.tokenizer=this.options.tokenizer||new _Tokenizer,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};const t={other:ya,block:rl.normal,inline:al.normal};this.options.pedantic?(t.block=rl.pedantic,t.inline=al.pedantic):this.options.gfm&&(t.block=rl.gfm,this.options.breaks?t.inline=al.breaks:t.inline=al.gfm),this.tokenizer.rules=t}static get rules(){return{block:rl,inline:al}}static lex(e,t){return new _Lexer(t).lex(e)}static lexInline(e,t){return new _Lexer(t).inlineTokens(e)}lex(e){e=e.replace(ya.carriageReturn,"\n"),this.blockTokens(e,this.tokens);for(let e=0;e<this.inlineQueue.length;e++){const t=this.inlineQueue[e];this.inlineTokens(t.src,t.tokens)}return this.inlineQueue=[],this.tokens}blockTokens(e,t=[],o=!1){for(this.options.pedantic&&(e=e.replace(ya.tabCharGlobal,"    ").replace(ya.spaceLine,""));e;){let n;if(this.options.extensions?.block?.some((o=>!!(n=o.call({lexer:this},e,t))&&(e=e.substring(n.raw.length),t.push(n),!0))))continue;if(n=this.tokenizer.space(e)){e=e.substring(n.raw.length);const o=t.at(-1);1===n.raw.length&&void 0!==o?o.raw+="\n":t.push(n);continue}if(n=this.tokenizer.code(e)){e=e.substring(n.raw.length);const o=t.at(-1);"paragraph"===o?.type||"text"===o?.type?(o.raw+="\n"+n.raw,o.text+="\n"+n.text,this.inlineQueue.at(-1).src=o.text):t.push(n);continue}if(n=this.tokenizer.fences(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.heading(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.hr(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.blockquote(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.list(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.html(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.def(e)){e=e.substring(n.raw.length);const o=t.at(-1);"paragraph"===o?.type||"text"===o?.type?(o.raw+="\n"+n.raw,o.text+="\n"+n.raw,this.inlineQueue.at(-1).src=o.text):this.tokens.links[n.tag]||(this.tokens.links[n.tag]={href:n.href,title:n.title});continue}if(n=this.tokenizer.table(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.lheading(e)){e=e.substring(n.raw.length),t.push(n);continue}let r=e;if(this.options.extensions?.startBlock){let t=1/0;const o=e.slice(1);let n;this.options.extensions.startBlock.forEach((e=>{n=e.call({lexer:this},o),"number"==typeof n&&n>=0&&(t=Math.min(t,n))})),t<1/0&&t>=0&&(r=e.substring(0,t+1))}if(this.state.top&&(n=this.tokenizer.paragraph(r))){const a=t.at(-1);o&&"paragraph"===a?.type?(a.raw+="\n"+n.raw,a.text+="\n"+n.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=a.text):t.push(n),o=r.length!==e.length,e=e.substring(n.raw.length)}else if(n=this.tokenizer.text(e)){e=e.substring(n.raw.length);const o=t.at(-1);"text"===o?.type?(o.raw+="\n"+n.raw,o.text+="\n"+n.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=o.text):t.push(n)}else if(e){const t="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent)break;throw new Error(t)}}return this.state.top=!0,t}inline(e,t=[]){return this.inlineQueue.push({src:e,tokens:t}),t}inlineTokens(e,t=[]){let o=e,n=null;if(this.tokens.links){const e=Object.keys(this.tokens.links);if(e.length>0)for(;null!=(n=this.tokenizer.rules.inline.reflinkSearch.exec(o));)e.includes(n[0].slice(n[0].lastIndexOf("[")+1,-1))&&(o=o.slice(0,n.index)+"["+"a".repeat(n[0].length-2)+"]"+o.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;null!=(n=this.tokenizer.rules.inline.blockSkip.exec(o));)o=o.slice(0,n.index)+"["+"a".repeat(n[0].length-2)+"]"+o.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);for(;null!=(n=this.tokenizer.rules.inline.anyPunctuation.exec(o));)o=o.slice(0,n.index)+"++"+o.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);let r=!1,a="";for(;e;){let n;if(r||(a=""),r=!1,this.options.extensions?.inline?.some((o=>!!(n=o.call({lexer:this},e,t))&&(e=e.substring(n.raw.length),t.push(n),!0))))continue;if(n=this.tokenizer.escape(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.tag(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.link(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.reflink(e,this.tokens.links)){e=e.substring(n.raw.length);const o=t.at(-1);"text"===n.type&&"text"===o?.type?(o.raw+=n.raw,o.text+=n.text):t.push(n);continue}if(n=this.tokenizer.emStrong(e,o,a)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.codespan(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.br(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.del(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.autolink(e)){e=e.substring(n.raw.length),t.push(n);continue}if(!this.state.inLink&&(n=this.tokenizer.url(e))){e=e.substring(n.raw.length),t.push(n);continue}let l=e;if(this.options.extensions?.startInline){let t=1/0;const o=e.slice(1);let n;this.options.extensions.startInline.forEach((e=>{n=e.call({lexer:this},o),"number"==typeof n&&n>=0&&(t=Math.min(t,n))})),t<1/0&&t>=0&&(l=e.substring(0,t+1))}if(n=this.tokenizer.inlineText(l)){e=e.substring(n.raw.length),"_"!==n.raw.slice(-1)&&(a=n.raw.slice(-1)),r=!0;const o=t.at(-1);"text"===o?.type?(o.raw+=n.raw,o.text+=n.text):t.push(n)}else if(e){const t="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent)break;throw new Error(t)}}return t}}class _Renderer{options;parser;constructor(e){this.options=e||fa}space(e){return""}code({text:e,lang:t,escaped:o}){const n=(t||"").match(ya.notSpaceStart)?.[0],r=e.replace(ya.endingNewline,"")+"\n";return n?'<pre><code class="language-'+dl(n)+'">'+(o?r:dl(r,!0))+"</code></pre>\n":"<pre><code>"+(o?r:dl(r,!0))+"</code></pre>\n"}blockquote({tokens:e}){return`<blockquote>\n${this.parser.parse(e)}</blockquote>\n`}html({text:e}){return e}heading({tokens:e,depth:t}){return`<h${t}>${this.parser.parseInline(e)}</h${t}>\n`}hr(e){return"<hr>\n"}list(e){const t=e.ordered,o=e.start;let n="";for(let t=0;t<e.items.length;t++){const o=e.items[t];n+=this.listitem(o)}const r=t?"ol":"ul";return"<"+r+(t&&1!==o?' start="'+o+'"':"")+">\n"+n+"</"+r+">\n"}listitem(e){let t="";if(e.task){const o=this.checkbox({checked:!!e.checked});e.loose?"paragraph"===e.tokens[0]?.type?(e.tokens[0].text=o+" "+e.tokens[0].text,e.tokens[0].tokens&&e.tokens[0].tokens.length>0&&"text"===e.tokens[0].tokens[0].type&&(e.tokens[0].tokens[0].text=o+" "+dl(e.tokens[0].tokens[0].text),e.tokens[0].tokens[0].escaped=!0)):e.tokens.unshift({type:"text",raw:o+" ",text:o+" ",escaped:!0}):t+=o+" "}return t+=this.parser.parse(e.tokens,!!e.loose),`<li>${t}</li>\n`}checkbox({checked:e}){return"<input "+(e?'checked="" ':"")+'disabled="" type="checkbox">'}paragraph({tokens:e}){return`<p>${this.parser.parseInline(e)}</p>\n`}table(e){let t="",o="";for(let t=0;t<e.header.length;t++)o+=this.tablecell(e.header[t]);t+=this.tablerow({text:o});let n="";for(let t=0;t<e.rows.length;t++){const r=e.rows[t];o="";for(let e=0;e<r.length;e++)o+=this.tablecell(r[e]);n+=this.tablerow({text:o})}return n&&(n=`<tbody>${n}</tbody>`),"<table>\n<thead>\n"+t+"</thead>\n"+n+"</table>\n"}tablerow({text:e}){return`<tr>\n${e}</tr>\n`}tablecell(e){const t=this.parser.parseInline(e.tokens),o=e.header?"th":"td";return(e.align?`<${o} align="${e.align}">`:`<${o}>`)+t+`</${o}>\n`}strong({tokens:e}){return`<strong>${this.parser.parseInline(e)}</strong>`}em({tokens:e}){return`<em>${this.parser.parseInline(e)}</em>`}codespan({text:e}){return`<code>${dl(e,!0)}</code>`}br(e){return"<br>"}del({tokens:e}){return`<del>${this.parser.parseInline(e)}</del>`}link({href:e,title:t,tokens:o}){const n=this.parser.parseInline(o),r=hl(e);if(null===r)return n;let a='<a href="'+(e=r)+'"';return t&&(a+=' title="'+dl(t)+'"'),a+=">"+n+"</a>",a}image({href:e,title:t,text:o}){const n=hl(e);if(null===n)return dl(o);let r=`<img src="${e=n}" alt="${o}"`;return t&&(r+=` title="${dl(t)}"`),r+=">",r}text(e){return"tokens"in e&&e.tokens?this.parser.parseInline(e.tokens):"escaped"in e&&e.escaped?e.text:dl(e.text)}}class _TextRenderer{strong({text:e}){return e}em({text:e}){return e}codespan({text:e}){return e}del({text:e}){return e}html({text:e}){return e}text({text:e}){return e}link({text:e}){return""+e}image({text:e}){return""+e}br(){return""}}class _Parser{options;renderer;textRenderer;constructor(e){this.options=e||fa,this.options.renderer=this.options.renderer||new _Renderer,this.renderer=this.options.renderer,this.renderer.options=this.options,this.renderer.parser=this,this.textRenderer=new _TextRenderer}static parse(e,t){return new _Parser(t).parse(e)}static parseInline(e,t){return new _Parser(t).parseInline(e)}parse(e,t=!0){let o="";for(let n=0;n<e.length;n++){const r=e[n];if(this.options.extensions?.renderers?.[r.type]){const e=r,t=this.options.extensions.renderers[e.type].call({parser:this},e);if(!1!==t||!["space","hr","heading","code","table","blockquote","list","html","paragraph","text"].includes(e.type)){o+=t||"";continue}}const a=r;switch(a.type){case"space":o+=this.renderer.space(a);continue;case"hr":o+=this.renderer.hr(a);continue;case"heading":o+=this.renderer.heading(a);continue;case"code":o+=this.renderer.code(a);continue;case"table":o+=this.renderer.table(a);continue;case"blockquote":o+=this.renderer.blockquote(a);continue;case"list":o+=this.renderer.list(a);continue;case"html":o+=this.renderer.html(a);continue;case"paragraph":o+=this.renderer.paragraph(a);continue;case"text":{let r=a,l=this.renderer.text(r);for(;n+1<e.length&&"text"===e[n+1].type;)r=e[++n],l+="\n"+this.renderer.text(r);o+=t?this.renderer.paragraph({type:"paragraph",raw:l,text:l,tokens:[{type:"text",raw:l,text:l,escaped:!0}]}):l;continue}default:{const e='Token with "'+a.type+'" type was not found.';if(this.options.silent)return"";throw new Error(e)}}}return o}parseInline(e,t=this.renderer){let o="";for(let n=0;n<e.length;n++){const r=e[n];if(this.options.extensions?.renderers?.[r.type]){const e=this.options.extensions.renderers[r.type].call({parser:this},r);if(!1!==e||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(r.type)){o+=e||"";continue}}const a=r;switch(a.type){case"escape":case"text":o+=t.text(a);break;case"html":o+=t.html(a);break;case"link":o+=t.link(a);break;case"image":o+=t.image(a);break;case"strong":o+=t.strong(a);break;case"em":o+=t.em(a);break;case"codespan":o+=t.codespan(a);break;case"br":o+=t.br(a);break;case"del":o+=t.del(a);break;default:{const e='Token with "'+a.type+'" type was not found.';if(this.options.silent)return"";throw new Error(e)}}}return o}}class _Hooks{options;block;constructor(e){this.options=e||fa}static passThroughHooks=new Set(["preprocess","postprocess","processAllTokens"]);preprocess(e){return e}postprocess(e){return e}processAllTokens(e){return e}provideLexer(){return this.block?_Lexer.lex:_Lexer.lexInline}provideParser(){return this.block?_Parser.parse:_Parser.parseInline}}const fl=new class Marked{defaults={async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null};options=this.setOptions;parse=this.parseMarkdown(!0);parseInline=this.parseMarkdown(!1);Parser=_Parser;Renderer=_Renderer;TextRenderer=_TextRenderer;Lexer=_Lexer;Tokenizer=_Tokenizer;Hooks=_Hooks;constructor(...e){this.use(...e)}walkTokens(e,t){let o=[];for(const n of e)switch(o=o.concat(t.call(this,n)),n.type){case"table":{const e=n;for(const n of e.header)o=o.concat(this.walkTokens(n.tokens,t));for(const n of e.rows)for(const e of n)o=o.concat(this.walkTokens(e.tokens,t));break}case"list":{const e=n;o=o.concat(this.walkTokens(e.items,t));break}default:{const e=n;this.defaults.extensions?.childTokens?.[e.type]?this.defaults.extensions.childTokens[e.type].forEach((n=>{const r=e[n].flat(1/0);o=o.concat(this.walkTokens(r,t))})):e.tokens&&(o=o.concat(this.walkTokens(e.tokens,t)))}}return o}use(...e){const t=this.defaults.extensions||{renderers:{},childTokens:{}};return e.forEach((e=>{const o={...e};if(o.async=this.defaults.async||o.async||!1,e.extensions&&(e.extensions.forEach((e=>{if(!e.name)throw new Error("extension name required");if("renderer"in e){const o=t.renderers[e.name];t.renderers[e.name]=o?function(...t){let n=e.renderer.apply(this,t);return!1===n&&(n=o.apply(this,t)),n}:e.renderer}if("tokenizer"in e){if(!e.level||"block"!==e.level&&"inline"!==e.level)throw new Error("extension level must be 'block' or 'inline'");const o=t[e.level];o?o.unshift(e.tokenizer):t[e.level]=[e.tokenizer],e.start&&("block"===e.level?t.startBlock?t.startBlock.push(e.start):t.startBlock=[e.start]:"inline"===e.level&&(t.startInline?t.startInline.push(e.start):t.startInline=[e.start]))}"childTokens"in e&&e.childTokens&&(t.childTokens[e.name]=e.childTokens)})),o.extensions=t),e.renderer){const t=this.defaults.renderer||new _Renderer(this.defaults);for(const o in e.renderer){if(!(o in t))throw new Error(`renderer '${o}' does not exist`);if(["options","parser"].includes(o))continue;const n=o,r=e.renderer[n],a=t[n];t[n]=(...e)=>{let o=r.apply(t,e);return!1===o&&(o=a.apply(t,e)),o||""}}o.renderer=t}if(e.tokenizer){const t=this.defaults.tokenizer||new _Tokenizer(this.defaults);for(const o in e.tokenizer){if(!(o in t))throw new Error(`tokenizer '${o}' does not exist`);if(["options","rules","lexer"].includes(o))continue;const n=o,r=e.tokenizer[n],a=t[n];t[n]=(...e)=>{let o=r.apply(t,e);return!1===o&&(o=a.apply(t,e)),o}}o.tokenizer=t}if(e.hooks){const t=this.defaults.hooks||new _Hooks;for(const o in e.hooks){if(!(o in t))throw new Error(`hook '${o}' does not exist`);if(["options","block"].includes(o))continue;const n=o,r=e.hooks[n],a=t[n];_Hooks.passThroughHooks.has(o)?t[n]=e=>{if(this.defaults.async)return Promise.resolve(r.call(t,e)).then((e=>a.call(t,e)));const o=r.call(t,e);return a.call(t,o)}:t[n]=(...e)=>{let o=r.apply(t,e);return!1===o&&(o=a.apply(t,e)),o}}o.hooks=t}if(e.walkTokens){const t=this.defaults.walkTokens,n=e.walkTokens;o.walkTokens=function(e){let o=[];return o.push(n.call(this,e)),t&&(o=o.concat(t.call(this,e))),o}}this.defaults={...this.defaults,...o}})),this}setOptions(e){return this.defaults={...this.defaults,...e},this}lexer(e,t){return _Lexer.lex(e,t??this.defaults)}parser(e,t){return _Parser.parse(e,t??this.defaults)}parseMarkdown(e){return(t,o)=>{const n={...o},r={...this.defaults,...n},a=this.onError(!!r.silent,!!r.async);if(!0===this.defaults.async&&!1===n.async)return a(new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));if(null==t)return a(new Error("marked(): input parameter is undefined or null"));if("string"!=typeof t)return a(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(t)+", string expected"));r.hooks&&(r.hooks.options=r,r.hooks.block=e);const l=r.hooks?r.hooks.provideLexer():e?_Lexer.lex:_Lexer.lexInline,c=r.hooks?r.hooks.provideParser():e?_Parser.parse:_Parser.parseInline;if(r.async)return Promise.resolve(r.hooks?r.hooks.preprocess(t):t).then((e=>l(e,r))).then((e=>r.hooks?r.hooks.processAllTokens(e):e)).then((e=>r.walkTokens?Promise.all(this.walkTokens(e,r.walkTokens)).then((()=>e)):e)).then((e=>c(e,r))).then((e=>r.hooks?r.hooks.postprocess(e):e)).catch(a);try{r.hooks&&(t=r.hooks.preprocess(t));let e=l(t,r);r.hooks&&(e=r.hooks.processAllTokens(e)),r.walkTokens&&this.walkTokens(e,r.walkTokens);let o=c(e,r);return r.hooks&&(o=r.hooks.postprocess(o)),o}catch(e){return a(e)}}}onError(e,t){return o=>{if(o.message+="\nPlease report this to https://github.com/markedjs/marked.",e){const e="<p>An error occurred:</p><pre>"+dl(o.message+"",!0)+"</pre>";return t?Promise.resolve(e):e}if(t)return Promise.reject(o);throw o}}};function ml(e,t){return fl.parse(e,t)}ml.options=ml.setOptions=function(e){return fl.setOptions(e),ml.defaults=fl.defaults,ma(ml.defaults),ml},ml.getDefaults=ga,ml.defaults=fa,ml.use=function(...e){return fl.use(...e),ml.defaults=fl.defaults,ma(ml.defaults),ml},ml.walkTokens=function(e,t){return fl.walkTokens(e,t)},ml.parseInline=fl.parseInline,ml.Parser=_Parser,ml.parser=_Parser.parse,ml.Renderer=_Renderer,ml.TextRenderer=_TextRenderer,ml.Lexer=_Lexer,ml.lexer=_Lexer.lex,ml.Tokenizer=_Tokenizer,ml.Hooks=_Hooks,ml.parse=ml;ml.options,ml.setOptions,ml.use,ml.walkTokens,ml.parseInline,_Parser.parse,_Lexer.lex;var bl=Object.defineProperty,vl=Object.getOwnPropertyDescriptor,yl=(e,t,o,n)=>{for(var r,a=n>1?void 0:n?vl(t,o):t,l=e.length-1;l>=0;l--)(r=e[l])&&(a=(n?r(t,o,a):r(a))||a);return n&&a&&bl(t,o,a),a};let wl=class extends lit_element_r{constructor(){super(...arguments),this.markdown=""}render(){return Qt`${this.markdown?ua(this.renderMarkdown(this.markdown),"Loading..."):""}`}async renderMarkdown(e){ml.setOptions({gfm:!0}),ml.use({renderer:{image:function({href:e,title:t,text:o}){let n=[],r=[];return e&&(({href:e,dimensions:n}=function(e){const t=[],o=e.split("|").map((e=>e.trim()));e=o[0];const n=o[1];if(n){const e=/height=(\d+)/.exec(n),o=/width=(\d+)/.exec(n),r=e?e[1]:"",a=o?o[1]:"",l=isFinite(parseInt(a)),c=isFinite(parseInt(r));l&&t.push(`width="${a}"`),c&&t.push(`height="${r}"`)}return{href:e,dimensions:t}}(e)),r.push(`src="${El(e)}"`)),o&&r.push(`alt="${El(o)}"`),t&&r.push(`title="${El(t)}"`),n.length&&(r=r.concat(n)),`<img ${r.join(" ")}>`},paragraph:function({tokens:e}){const t=this.parser.parseInline(e);return`<p>${t}</p>`},link:function({href:e,title:t,tokens:o}){if("string"!=typeof e)return"";let n=this.parser.parseInline(o);return e===n&&(n=Pl(n)),t="string"==typeof t?El(Pl(t)):"",`<a href="${e=Pl(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}" title="${t||e}" draggable="false">${n}</a>`},code:function({text:e,lang:t}){return e=e.replace(/</g,"&lt;"),`<pre class="language-${t}"><code>${e}</code></pre>`},codespan:function({text:e}){return`<code>${e=e.replace(/</g,"&lt;")}</code>`}}});let t=await ml.parse((o=e,o.replace(Cl,(e=>`\\${e}`))));var o;return t=function(e){const t=[];let o,n=0,r=0;for(;null!==(o=Sl.exec(e));){r=o.index||0,n<r&&t.push(e.substring(n,r)),n=(o.index||0)+o[0].length;const[,a,l]=o;t.push(a?`$(${l})`:Al({id:l}))}n<e.length&&t.push(e.substring(n));return t.join("")}(t),js(t)}};wl.styles=ft`
		a,
		a code {
			text-decoration: none;
			color: var(--vscode-textLink-foreground);
		}

		a:hover,
		a:hover code {
			color: var(--vscode-textLink-activeForeground);
		}

		a:hover:not(.disabled) {
			cursor: pointer;
		}

		p,
		.code,
		ul,
		h1,
		h2,
		h3,
		h4,
		h5,
		h6 {
			margin: 8px 0;
		}

		h1,
		h2,
		h3,
		h4,
		h5,
		h6 {
			line-height: 1.1;
		}

		code {
			background: var(--vscode-textCodeBlock-background);
			border-radius: 3px;
			padding: 0px 4px 2px 4px;
			font-family: var(--vscode-editor-font-family);
		}

		code code-icon {
			color: inherit;
			font-size: inherit;
			vertical-align: middle;
		}

		hr {
			border: none;
			border-top: 1px solid var(--color-foreground--25);
		}

		p:first-child,
		.code:first-child,
		ul:first-child {
			margin-top: 0;
		}

		p:last-child,
		.code:last-child,
		ul:last-child {
			margin-bottom: 0;
		}

		/* MarkupContent Layout */
		ul {
			padding-left: 20px;
		}
		ol {
			padding-left: 20px;
		}

		li > p {
			margin-bottom: 0;
		}

		li > ul {
			margin-top: 0;
		}
	`,yl([pi({type:String})],wl.prototype,"markdown",2),wl=yl([ci("gl-markdown")],wl);const kl="[A-Za-z0-9-]+",xl="~[A-Za-z]+",$l=new RegExp(`^(${kl})(${xl})?$`),_l=new RegExp(`\\$\\(${kl}(?:${xl})?\\)`,"g"),Cl=new RegExp(`\\\\${_l.source}`,"g"),Sl=new RegExp(`(\\\\)?\\$\\((${kl}(?:${xl})?)\\)`,"g");function Al(e){const t=$l.exec(e.id);let[,o,n]=t??[void 0,"error",void 0];return o.startsWith("gitlens-")&&(o=`gl-${o.substring(8)}`),`<code-icon icon="${o}"${n?` modifier="${n}"`:""}></code-icon>`}function El(e){return e.replace(/"/g,"&quot;")}function Pl(e){return e?e.replace(/\\([\\`*_{}[\]()#+\-.!~])/g,"$1"):e}xs.define("sl-popup");var Rl=Object.defineProperty,Tl=Object.getOwnPropertyDescriptor,Ol=(e,t,o,n)=>{for(var r,a=n>1?void 0:n?Tl(t,o):t,l=e.length-1;l>=0;l--)(r=e[l])&&(a=(n?r(t,o,a):r(a))||a);return n&&a&&Rl(t,o,a),a};let Dl=class extends GlElement{constructor(){super(),this.placement="bottom",this.disabled=!1,this.distance=8,this.open=!1,this.arrow=!0,this.skidding=0,this.trigger="hover focus",this.hoist=!1,this.handleTriggerBlur=e=>{if(this.open&&this.hasTrigger("focus")){if(e.relatedTarget&&this.contains(e.relatedTarget))return;this.hide()}},this.handleTriggerClick=e=>{if(this.hasTrigger("click"))if(this.open&&"hover"!==this._triggeredBy){if(this._skipHideOnClick)return void(this._skipHideOnClick=!1);if(e.composedPath().includes(this.body))return;this.hide()}else this.show("click")},this._skipHideOnClick=!1,this.handleTriggerMouseDown=()=>{this.hasTrigger("click")&&this.hasTrigger("focus")&&!this.matches(":focus-within")?this._skipHideOnClick=!0:this._skipHideOnClick=!1},this.handleTriggerFocus=()=>{this.hasTrigger("focus")&&(this.open&&"hover"!==this._triggeredBy&&!this.hasPopupFocus()?this.hide():this.show("focus"))},this.handleDocumentKeyDown=e=>{"Escape"===e.key&&(e.stopPropagation(),this.hide())},this.handlePopupBlur=e=>{const t=e.composedPath();t.includes(this)||t.includes(this.body)||this.hide()},this.handleWebviewBlur=()=>{this.hide()},this.handleWebviewMouseDown=e=>{const t=e.composedPath();t.includes(this)||t.includes(this.body)||this.hide()},this.handleMouseOver=()=>{if(this.hasTrigger("hover")){clearTimeout(this.hoverTimeout);const e=ne(getComputedStyle(this).getPropertyValue("--show-delay"));this.hoverTimeout=setTimeout((()=>this.show("hover")),e)}},this.handleMouseOut=e=>{if(this.hasTrigger("hover")){clearTimeout(this.hoverTimeout);const t=e.composedPath();if(t[t.length-2]===this)return;if(this.hasPopupFocus()||"hover"!==this._triggeredBy)return;const o=ne(getComputedStyle(this).getPropertyValue("--hide-delay"));this.hoverTimeout=setTimeout((()=>this.hide()),o)}},this.addEventListener("blur",this.handleTriggerBlur,!0),this.addEventListener("focus",this.handleTriggerFocus,!0),this.addEventListener("click",this.handleTriggerClick),this.addEventListener("mousedown",this.handleTriggerMouseDown),this.addEventListener("mouseover",this.handleMouseOver),this.addEventListener("mouseout",this.handleMouseOut)}get currentPlacement(){return this.popup?.getAttribute("data-current-placement")??this.placement}disconnectedCallback(){this.closeWatcher?.destroy(),document.removeEventListener("focusin",this.handlePopupBlur),window.removeEventListener("webview-blur",this.handleWebviewBlur,!1),document.removeEventListener("keydown",this.handleDocumentKeyDown),document.removeEventListener("mousedown",this.handleWebviewMouseDown),super.disconnectedCallback()}firstUpdated(){this.body.hidden=!this.open,this.open&&(this.popup.active=!0,this.popup.reposition())}render(){return Qt`<sl-popup
			part="base"
			exportparts="
				popup:base__popup,
				arrow:base__arrow
			"
			class="popover"
			.anchor=${this.anchor}
			placement=${this.placement}
			distance=${this.distance}
			skidding=${this.skidding}
			strategy=${this.hoist?"fixed":"absolute"}
			auto-size="horizontal"
			auto-size-padding="3"
			flip-padding="3"
			flip
			shift
			?arrow=${this.arrow}
			hover-bridge
		>
			<div slot="anchor" aria-describedby="popover">
				<slot name="anchor"></slot>
			</div>

			<div
				part="body"
				id="popover"
				class="popover__body"
				role="tooltip"
				aria-live=${this.open?"polite":"off"}
			>
				<slot name="content"></slot>
			</div>
		</sl-popup>`}async show(e){if(null!=this._triggeredBy&&"hover"===e||(this._triggeredBy=e),!this.open)return this.open=!0,se(this,"gl-popover-after-show")}async hide(){if(this._triggeredBy=void 0,this.open)return this.open=!1,se(this,"gl-popover-after-hide")}hasPopupFocus(){return this.matches(':has([slot="content"]:focus-within)')}hasTrigger(e){return this.trigger.split(" ").includes(e)}handleOpenChange(){if(this.open){if(this.disabled)return;this.emit("gl-popover-show"),"CloseWatcher"in window?(this.closeWatcher?.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>{this.hide()}):document.addEventListener("keydown",this.handleDocumentKeyDown),document.addEventListener("focusin",this.handlePopupBlur),window.addEventListener("webview-blur",this.handleWebviewBlur,!1),(this.hasTrigger("click")||this.hasTrigger("focus"))&&document.addEventListener("mousedown",this.handleWebviewMouseDown),this.body.hidden=!1,this.popup.active=!0,this.popup.reposition(),this.emit("gl-popover-after-show")}else document.removeEventListener("focusin",this.handlePopupBlur),window.removeEventListener("webview-blur",this.handleWebviewBlur,!1),document.removeEventListener("mousedown",this.handleWebviewMouseDown),this.emit("gl-popover-hide"),this.closeWatcher?.destroy(),document.removeEventListener("keydown",this.handleDocumentKeyDown),this.popup.active=!1,this.body.hidden=!0,this.emit("gl-popover-after-hide")}async handleOptionsChange(){this.hasUpdated&&(await this.updateComplete,this.popup.reposition())}handleDisabledChange(){this.disabled&&this.open&&this.hide()}};Dl.shadowRootOptions={...lit_element_r.shadowRootOptions,delegatesFocus:!0},Dl.styles=ft`
		:host {
			--hide-delay: 0ms;
			--show-delay: 500ms;

			display: contents;
		}

		.popover {
			--arrow-size: var(--sl-tooltip-arrow-size);
			--arrow-color: var(--sl-tooltip-background-color);
		}

		.popover::part(popup) {
			z-index: var(--sl-z-index-tooltip);
		}

		.popover::part(arrow) {
			border: 1px solid var(--gl-tooltip-border-color);
			z-index: 1;
		}

		.popover[placement^='top']::part(popup) {
			transform-origin: bottom;
		}

		.popover[placement^='bottom']::part(popup) {
			transform-origin: top;
		}

		.popover[placement^='left']::part(popup) {
			transform-origin: right;
		}

		.popover[placement^='right']::part(popup) {
			transform-origin: left;
		}

		.popover[data-current-placement^='top']::part(arrow) {
			border-top-width: 0;
			border-left-width: 0;
			clip-path: polygon(0 50%, 100% 0, 100% 100%, 0 100%);
		}

		.popover[data-current-placement^='bottom']::part(arrow) {
			border-bottom-width: 0;
			border-right-width: 0;
			clip-path: polygon(0 0, 100% 0, 100% 50%, 0 100%);
		}

		.popover[data-current-placement^='left']::part(arrow) {
			border-bottom-width: 0;
			border-left-width: 0;
			clip-path: polygon(0 0, 100% 0, 100% 100%, 70% 100%, 0 30%);
		}

		.popover[data-current-placement^='right']::part(arrow) {
			border-top-width: 0;
			border-right-width: 0;
			clip-path: polygon(0 0, 0 100%, 100% 100%, 100% 70%, 30% 0);
		}

		.popover__body {
			display: block;
			width: fit-content;
			border: 1px solid var(--gl-tooltip-border-color);
			border-radius: var(--sl-tooltip-border-radius);
			box-shadow: 0 2px 8px var(--gl-tooltip-shadow);
			background-color: var(--sl-tooltip-background-color);
			font-family: var(--sl-tooltip-font-family);
			font-size: var(--sl-tooltip-font-size);
			font-weight: var(--sl-tooltip-font-weight);
			line-height: var(--sl-tooltip-line-height);
			text-align: start;
			white-space: normal;
			color: var(--sl-tooltip-color);
			padding: var(--sl-tooltip-padding);
			user-select: none;
			-webkit-user-select: none;
			max-width: min(var(--auto-size-available-width), var(--max-width, 70vw));
			/* max-height: var(--auto-size-available-height);
			overflow: auto; */
			pointer-events: all;
		}

		.popover[data-current-placement^='top'] .popover__body,
		.popover[data-current-placement^='bottom'] .popover__body {
			width: max-content;
		}

		/* .popover::part(hover-bridge) {
			background: tomato;
			opacity: 1;
			z-index: 10000000000;
		} */
	`,Ol([fi("#popover")],Dl.prototype,"body",2),Ol([fi("sl-popup")],Dl.prototype,"popup",2),Ol([pi({reflect:!0})],Dl.prototype,"placement",2),Ol([pi({type:Object})],Dl.prototype,"anchor",2),Ol([pi({reflect:!0,type:Boolean})],Dl.prototype,"disabled",2),Ol([pi({type:Number})],Dl.prototype,"distance",2),Ol([pi({reflect:!0,type:Boolean})],Dl.prototype,"open",2),Ol([pi({reflect:!0,type:Boolean})],Dl.prototype,"arrow",2),Ol([pi({type:Number})],Dl.prototype,"skidding",2),Ol([pi()],Dl.prototype,"trigger",2),Ol([pi({type:Boolean})],Dl.prototype,"hoist",2),Ol([cr("open",{afterFirstUpdate:!0})],Dl.prototype,"handleOpenChange",1),Ol([cr(["distance","hoist","placement","skidding"])],Dl.prototype,"handleOptionsChange",1),Ol([cr("disabled")],Dl.prototype,"handleDisabledChange",1),Dl=Ol([ci("gl-popover")],Dl);var Ml=Object.defineProperty,zl=Object.getOwnPropertyDescriptor,Ll=(e,t,o,n)=>{for(var r,a=n>1?void 0:n?zl(t,o):t,l=e.length-1;l>=0;l--)(r=e[l])&&(a=(n?r(t,o,a):r(a))||a);return n&&a&&Ml(t,o,a),a};let Il=class extends GlElement{constructor(){super(...arguments),this.url="",this.name="",this.status="merged",this.type="autolink",this.identifier="",this.details=!1}renderDate(){return this.date?Qt`<formatted-date
			.date=${new Date(this.date)}
			.format=${this.dateFormat}
			.dateStyle=${this.dateStyle}
		></formatted-date>`:ei}render(){let e,t;switch(this.type){case"issue":t="closed"===this.status?"merged":"opened",e="closed"===this.status?"pass":"issues";break;case"pr":switch(t=this.status,this.status){case"merged":e="git-merge";break;case"closed":e="git-pull-request-closed";break;default:e="git-pull-request"}break;default:t="opened",e="link"}return this.compact?Qt`
				<span class="icon icon--${t}"><code-icon icon=${e}></code-icon></span>
				<p class="title">${this.identifier}</p>
			`:Qt`
			<span class="icon icon--${t}"><code-icon icon=${e}></code-icon></span>
			<p class="title">
				<a href="${this.url}">${this.name}</a>
			</p>
			<p class="date">${this.identifier} ${this.status?this.status:ei} ${this.renderDate()}</p>
			${bi(!0===this.details,(()=>Qt`
					<p class="details">
						<gl-button appearance="toolbar" tooltip="Open Details" @click=${()=>this.onDetailsClicked()}
							><code-icon icon="eye"></code-icon
						></gl-button>
					</p>
				`))}
		`}onDetailsClicked(){this.emit("gl-issue-pull-request-details")}};Il.styles=ft`
		:host {
			display: grid;
			gap: 0.25rem 0.6rem;
			justify-content: start;
			font-size: 1.3rem;
			grid-template-columns: min-content 1fr min-content;
		}

		:host([compact]) {
			grid-template-columns: min-content 1fr;
		}

		a {
			color: var(--color-link-foreground);
			text-decoration: none;
		}

		.icon {
			grid-column: 1;
			grid-row: 1 / 3;
			text-align: center;
			padding-top: 0.1rem;
		}

		.icon--opened {
			color: var(--vscode-gitlens-openPullRequestIconColor);
		}
		.icon--closed {
			color: var(--vscode-gitlens-closedPullRequestIconColor);
		}
		.icon--merged {
			color: var(--vscode-gitlens-mergedPullRequestIconColor);
		}

		.title {
			grid-column: 2;
			grid-row: 1;
			margin: 0;
		}

		.date {
			grid-column: 2;
			grid-row: 2;
			margin: 0;
		}

		.details {
			grid-column: 3;
			grid-row: 1 / 3;
			margin: 0;
		}
	`,Ll([pi()],Il.prototype,"url",2),Ll([pi()],Il.prototype,"name",2),Ll([pi()],Il.prototype,"date",2),Ll([pi()],Il.prototype,"dateFormat",2),Ll([pi()],Il.prototype,"dateStyle",2),Ll([pi()],Il.prototype,"status",2),Ll([pi()],Il.prototype,"type",2),Ll([pi()],Il.prototype,"identifier",2),Ll([pi({type:Boolean,reflect:!0})],Il.prototype,"compact",2),Ll([pi({type:Boolean})],Il.prototype,"details",2),Il=Ll([ci("issue-pull-request")],Il);var Bl=Object.defineProperty,jl=Object.getOwnPropertyDescriptor,Nl=(e,t,o,n)=>{for(var r,a=n>1?void 0:n?jl(t,o):t,l=e.length-1;l>=0;l--)(r=e[l])&&(a=(n?r(t,o,a):r(a))||a);return n&&a&&Bl(t,o,a),a};let Ul=class extends lit_element_r{constructor(){super(...arguments),this.lines=1}render(){const e=`--skeleton-lines: ${this.lines};`;return Qt`<div class="skeleton" style=${e}></div>`}};Ul.styles=ft`
		:host {
			--skeleton-line-height: 1.2;
			--skeleton-lines: 1;
		}

		.skeleton {
			position: relative;
			display: block;
			overflow: hidden;
			border-radius: 0.25em;
			width: 100%;
			height: calc(1em * var(--skeleton-line-height, 1.2) * var(--skeleton-lines, 1));
			background-color: var(--color-background--lighten-15);
		}

		.skeleton::before {
			content: '';
			position: absolute;
			display: block;
			top: 0;
			right: 0;
			bottom: 0;
			left: 0;
			background-image: linear-gradient(
				to right,
				transparent 0%,
				var(--color-background--lighten-15) 20%,
				var(--color-background--lighten-30) 60%,
				transparent 100%
			);
			transform: translateX(-100%);
			animation: skeleton-loader 2s ease-in-out infinite;
		}

		@keyframes skeleton-loader {
			100% {
				transform: translateX(100%);
			}
		}
	`,Nl([pi({type:Number})],Ul.prototype,"lines",2),Ul=Nl([ci("skeleton-loader")],Ul);var Fl=Object.defineProperty,Hl=Object.getOwnPropertyDescriptor,ql=(e,t,o,n)=>{for(var r,a=n>1?void 0:n?Hl(t,o):t,l=e.length-1;l>=0;l--)(r=e[l])&&(a=(n?r(t,o,a):r(a))||a);return n&&a&&Fl(t,o,a),a};let Vl=class extends GlDetailsBase{constructor(){super(...arguments),this.tab="commit",this.explainBusy=!1}get isStash(){return null!=this.state?.commit?.stashNumber}get shortSha(){return this.state?.commit?.shortSha??""}get navigation(){if(null==this.state?.navigationStack)return{back:!1,forward:!1};const e={back:!0,forward:!0};return this.state.navigationStack.count<=1?(e.back=!1,e.forward=!1):0===this.state.navigationStack.position?(e.back=!0,e.forward=!1):this.state.navigationStack.position===this.state.navigationStack.count-1&&(e.back=!1,e.forward=!0),e}updated(e){e.has("explain")&&(this.explainBusy=!1,this.querySelector('[data-region="commit-explanation"]')?.scrollIntoView())}renderEmptyContent(){return Qt`
			<div class="section section--empty" id="empty">
				<p>Rich details for commits and stashes are shown as you navigate:</p>

				<ul class="bulleted">
					<li>lines in the text editor</li>
					<li>
						commits in the <a href="command:gitlens.showGraph">Commit Graph</a>,
						<a href="command:gitlens.showTimelineView">Visual File History</a>, or
						<a href="command:gitlens.showCommitsView">Commits view</a>
					</li>
					<li>stashes in the <a href="command:gitlens.showStashesView">Stashes view</a></li>
				</ul>

				<p>Alternatively, show your work-in-progress, or search for or choose a commit</p>

				<p class="button-container">
					<span class="button-group button-group--single">
						<gl-button full data-action="wip">Overview</gl-button>
					</span>
				</p>
				<p class="button-container">
					<span class="button-group button-group--single">
						<gl-button full data-action="pick-commit">Choose Commit...</gl-button>
						<gl-button density="compact" data-action="search-commit" tooltip="Search for Commit"
							><code-icon icon="search"></code-icon
						></gl-button>
					</span>
				</p>
			</div>
		`}renderCommitMessage(){const e=this.state?.commit;if(null==e)return;const t=e.message,o=t.indexOf("\0\n\0");return Qt`
			<div class="section section--message">
				${bi(!this.isStash,(()=>Qt`
						<commit-identity
							class="mb-1"
							name="${e.author.name}"
							url="${e.author.email?`mailto:${e.author.email}`:void 0}"
							date=${e.author.date}
							.dateFormat="${this.preferences?.dateFormat}"
							.avatarUrl="${e.author.avatar??""}"
							.showAvatar="${this.preferences?.avatars??!0}"
							.actionLabel="${e.sha===xc?"modified":"committed"}"
						></commit-identity>
					`))}
				<div class="message-block">
					${bi(-1===o,(()=>Qt`<p class="message-block__text scrollable" data-region="message">
								<strong>${js(t)}</strong>
							</p>`),(()=>Qt`<p class="message-block__text scrollable" data-region="message">
								<strong>${js(t.substring(0,o))}</strong><br /><span
									>${js(t.substring(o+3))}</span
								>
							</p>`))}
				</div>
			</div>
		`}renderJiraLink(){if(null==this.state)return"Jira issues";const{hasAccount:e,hasConnectedJira:t}=this.state;let o=Qt`<a
				href="command:gitlens.plus.cloudIntegrations.connect?${encodeURIComponent(JSON.stringify({integrationIds:["jira"],source:"inspect",detail:{action:"connect",integration:"jira"}}))}"
				>Connect to Jira Cloud</a
			>
			&mdash; ${e?"":"sign up and "}get access to automatic rich Jira autolinks`;return e&&t&&(o=Qt`<i class="codicon codicon-check" style="vertical-align: text-bottom"></i> Jira connected
				&mdash; automatic rich Jira autolinks are enabled`),Qt`<gl-popover hoist class="inline-popover">
			<span class="tooltip-hint" slot="anchor"
				>Jira issues <code-icon icon="${t?"check":"gl-unplug"}"></code-icon
			></span>
			<span slot="content">${o}</span>
		</gl-popover>`}renderAutoLinks(){if(this.isUncommitted)return;const e=new Map,t=new Map;if(null!=this.state?.commit?.autolinks)for(const o of this.state.commit.autolinks)e.set(o.id,{type:"autolink",value:o}),t.set(o.url,o.id);if(null!=this.state?.autolinkedIssues)for(const o of this.state.autolinkedIssues){if(null!=o.url){const n=t.get(o.url);null!=n&&e.delete(n)}e.set(o.id,{type:"issue",value:o})}if(null!=this.state?.pullRequest){if(null!=this.state.pullRequest.url){const o=t.get(this.state.pullRequest.url);null!=o&&e.delete(o)}e.set(this.state.pullRequest.id,{type:"pr",value:this.state.pullRequest})}const o=[],n=[],r=[];for(const t of e.values())switch(t.type){case"autolink":o.push(t.value);break;case"issue":n.push(t.value);break;case"pr":r.push(t.value)}const{hasAccount:a,hasConnectedJira:l}=this.state??{},c=l?`command:gitlens.plus.cloudIntegrations.manage?${encodeURIComponent(JSON.stringify({source:"inspect",detail:{action:"connect",integration:"jira"}}))}`:`command:gitlens.plus.cloudIntegrations.connect?${encodeURIComponent(JSON.stringify({integrationIds:["jira"],source:"inspect",detail:{action:"connect",integration:"jira"}}))}`;return Qt`
			<webview-pane
				collapsable
				?expanded=${this.state?.preferences?.autolinksExpanded??!0}
				?loading=${!this.state?.includeRichContent}
				data-region="rich-pane"
			>
				<span slot="title">Autolinks</span>
				<span slot="subtitle" data-region="autolink-count"
					>${this.state?.includeRichContent||e.size?`${e.size} found `:""}${this.state?.includeRichContent?"":"…"}</span
				>
				<action-nav slot="actions">
					<action-item
						label="${a&&l?"Manage Jira":"Connect to Jira Cloud"}"
						icon="gl-provider-jira"
						href="${c}"
					></action-item>
					<action-item
						data-action="autolinks-settings"
						label="Autolinks Settings"
						icon="gear"
						href="command:gitlens.showSettingsPage!autolinks"
					></action-item>
				</action-nav>
				${bi(null==this.state,(()=>Qt`
						<div class="section" data-region="autolinks">
							<section class="auto-link" aria-label="Custom Autolinks" data-region="custom-autolinks">
								<skeleton-loader lines="2"></skeleton-loader>
							</section>
							<section class="pull-request" aria-label="Pull request" data-region="pull-request">
								<skeleton-loader lines="2"></skeleton-loader>
							</section>
							<section class="issue" aria-label="Issue" data-region="issue">
								<skeleton-loader lines="2"></skeleton-loader>
							</section>
						</div>
					`),(()=>0===e.size?Qt`
								<div class="section" data-region="rich-info">
									<p>
										<code-icon icon="info"></code-icon>&nbsp;Use
										<gl-tooltip hoist>
											<a
												href="command:gitlens.showSettingsPage!autolinks"
												data-action="autolink-settings"
												>autolinks</a
											>
											<span slot="content">Configure autolinks</span>
										</gl-tooltip>
										to linkify external references, like ${this.renderJiraLink()} or Zendesk
										tickets, in commit messages.
									</p>
								</div>
							`:Qt`
							<div class="section" data-region="autolinks">
								${o.length?Qt`
											<section
												class="auto-link"
												aria-label="Custom Autolinks"
												data-region="custom-autolinks"
											>
												${o.map((e=>{let t=e.description??e.title;return void 0===t&&(t=`Custom Autolink ${e.prefix}${e.id}`),Qt`
														<issue-pull-request
															type="autolink"
															name="${t}"
															url="${e.url}"
															identifier="${e.prefix}${e.id}"
															status=""
														></issue-pull-request>
													`}))}
											</section>
									  `:void 0}
								${r.length?Qt`
											<section
												class="pull-request"
												aria-label="Pull request"
												data-region="pull-request"
											>
												${r.map((e=>Qt`
														<issue-pull-request
																type="pr"
																name="${e.title}"
																url="${e.url}"
																identifier="#${e.id}"
																status="${e.state}"
																.date=${e.updatedDate}
																.dateFormat="${this.state.preferences.dateFormat}"
																.dateStyle="${this.state.preferences.dateStyle}"
															></issue-pull-request>
														</section>
									  				`))}
											</section>
									  `:void 0}
								${n.length?Qt`
											<section class="issue" aria-label="Issue" data-region="issue">
												${n.map((e=>Qt`
														<issue-pull-request
															type="issue"
															name="${e.title}"
															url="${e.url}"
															identifier="${e.id}"
															status="${e.state}"
															.date=${e.closed?e.closedDate:e.createdDate}
															.dateFormat="${this.state.preferences.dateFormat}"
															.dateStyle="${this.state.preferences.dateStyle}"
														></issue-pull-request>
													`))}
											</section>
									  `:void 0}
							</div>
						`))}
			</webview-pane>
		`}renderExplainAi(){if(!1===this.state?.orgSettings.ai)return;const e=null!=this.explain?.result?`${this.explain.result.summary}\n\n${this.explain.result.body}`:void 0;return Qt`
			<webview-pane collapsable data-region="explain-pane">
				<span slot="title">Explain (AI)</span>
				<span slot="subtitle"><code-icon icon="beaker" size="12"></code-icon></span>
				<action-nav slot="actions">
					<action-item data-action="switch-ai" label="Switch AI Model" icon="hubot"></action-item>
				</action-nav>

				<div class="section">
					<p>Let AI assist in understanding the changes made with this commit.</p>
					<p class="button-container">
						<span class="button-group button-group--single">
							<gl-button
								full
								class="button--busy"
								data-action="explain-commit"
								aria-busy="${this.explainBusy?"true":ei}"
								@click=${this.onExplainChanges}
								@keydown=${this.onExplainChanges}
								><code-icon icon="loading" modifier="spin" slot="prefix"></code-icon>Explain
								Changes</gl-button
							>
						</span>
					</p>
					${e?Qt`<div class="ai-content" data-region="commit-explanation">
								<gl-markdown
									class="ai-content__summary scrollable"
									markdown="${e}"
								></gl-markdown>
						  </div>`:this.explain?.error?Qt`<div class="ai-content has-error" data-region="commit-explanation">
									<p class="ai-content__summary scrollable">
										${this.explain.error.message??"Error retrieving content"}
									</p>
						    </div>`:void 0}
				</div>
			</webview-pane>
		`}render(){return null==this.state?.commit?this.renderEmptyContent():Qt`
			${this.renderCommitMessage()}
			<webview-pane-group flexible>
				${this.renderAutoLinks()}
				${this.renderChangedFiles(this.isStash?"stash":"commit",this.renderCommitStats(this.state.commit.stats))}
				${this.renderExplainAi()}
			</webview-pane-group>
		`}onExplainChanges(e){if(!0===this.explainBusy||e instanceof KeyboardEvent&&"Enter"!==e.key)return e.preventDefault(),void e.stopPropagation();this.explainBusy=!0}renderCommitStats(e){if(null==e?.files)return;if("number"==typeof e.files)return Qt`<commit-stats added="?" modified="${e.files}" removed="?"></commit-stats>`;const{added:t,deleted:o,changed:n}=e.files;return Qt`<commit-stats added="${t}" modified="${n}" removed="${o}"></commit-stats>`}getFileActions(e,t){const o=[{icon:"go-to-file",label:"Open file",action:"file-open"}];return this.isUncommitted||(o.push({icon:"git-compare",label:"Open Changes with Working File",action:"file-compare-working"}),this.isStash||o.push({icon:"globe",label:"Open on remote",action:"file-open-on-remote"}),o.push({icon:"ellipsis",label:"Show more actions",action:"file-more-actions"})),o}};ql([pi({type:Object})],Vl.prototype,"state",2),ql([ui()],Vl.prototype,"isStash",1),ql([ui()],Vl.prototype,"shortSha",1),ql([ui()],Vl.prototype,"explainBusy",2),ql([pi({type:Object})],Vl.prototype,"explain",2),Vl=ql([ci("gl-commit-details")],Vl);const Wl=(e,t,o)=>{const n=new Map;for(let r=t;r<=o;r++)n.set(e[r],r);return n},Gl=bs(class extends directive_i{constructor(e){if(super(e),e.type!==ms)throw Error("repeat() can only be used in text expressions")}dt(e,t,o){let n;void 0===o?o=t:void 0!==t&&(n=t);const r=[],a=[];let l=0;for(const t of e)r[l]=n?n(t,l):l,a[l]=o(t,l),l++;return{values:a,keys:r}}render(e,t,o){return this.dt(e,t,o).values}update(e,[t,o,n]){const r=(e=>e._$AH)(e),{values:a,keys:l}=this.dt(t,o,n);if(!Array.isArray(r))return this.ut=l,a;const c=this.ut??=[],d=[];let h,p,u=0,g=r.length-1,f=0,m=a.length-1;for(;u<=g&&f<=m;)if(null===r[u])u++;else if(null===r[g])g--;else if(c[u]===l[f])d[f]=ia(r[u],a[f]),u++,f++;else if(c[g]===l[m])d[m]=ia(r[g],a[m]),g--,m--;else if(c[u]===l[m])d[m]=ia(r[u],a[m]),ta(e,d[m+1],r[u]),u++,m--;else if(c[g]===l[f])d[f]=ia(r[g],a[f]),ta(e,r[u],r[g]),g--,f++;else if(void 0===h&&(h=Wl(l,f,m),p=Wl(c,u,g)),h.has(c[u]))if(h.has(c[g])){const t=p.get(l[f]),o=void 0!==t?r[t]:null;if(null===o){const t=ta(e,r[u]);ia(t,a[f]),d[f]=t}else d[f]=ia(o,a[f]),ta(e,r[u],o),r[t]=null;f++}else na(r[g]),g--;else na(r[u]),u++;for(;f<=m;){const t=ta(e,d[m+1]);ia(t,a[f]),d[f++]=t}for(;u<=g;){const e=r[u++];null!==e&&na(e)}return this.ut=l,((e,t=oa)=>{e._$AH=t})(e,d),Xt}});var Kl=Object.defineProperty,Zl=Object.getOwnPropertyDescriptor;let Yl=class extends lit_element_r{render(){return Qt`<slot></slot>`}};Yl.styles=ft`
		:host {
			display: flex;
			box-sizing: border-box;
			flex-direction: column;
		}

		::slotted(webview-pane) {
			flex: none;
		}

		:host([flexible]) ::slotted(webview-pane[flexible][expanded]) {
			flex: 1;
		}
	`,Yl=((e,t,o,n)=>{for(var r,a=n>1?void 0:n?Zl(t,o):t,l=e.length-1;l>=0;l--)(r=e[l])&&(a=(n?r(t,o,a):r(a))||a);return n&&a&&Kl(t,o,a),a})([ci("webview-pane-group")],Yl);const Jl=ft`
	.button-container {
		margin: 1rem auto 0;
		text-align: left;
		max-width: 30rem;
		transition: max-width 0.2s ease-out;
	}

	@media (min-width: 640px) {
		.button-container {
			max-width: 100%;
		}
	}

	.button-group {
		display: inline-flex;
		gap: 0.1rem;
	}
	.button-group--single {
		width: 100%;
		max-width: 30rem;
	}

	.button-group > *:not(:first-child),
	.button-group > *:not(:first-child) gl-button {
		border-top-left-radius: 0;
		border-bottom-left-radius: 0;
	}

	.button-group > *:not(:last-child),
	.button-group > *:not(:last-child) gl-button {
		border-top-right-radius: 0;
		border-bottom-right-radius: 0;
	}
`;class GlTreeBase extends GlElement{renderLoading(){return Qt`
			<div class="section section--skeleton">
				<skeleton-loader></skeleton-loader>
			</div>
			<div class="section section--skeleton">
				<skeleton-loader></skeleton-loader>
			</div>
			<div class="section section--skeleton">
				<skeleton-loader></skeleton-loader>
			</div>
		`}renderLayoutAction(e){if(!e)return ei;let t="tree",o="list-tree",n="View as Tree";switch(e){case"auto":t="list",o="gl-list-auto",n="View as List";break;case"list":t="tree",o="list-flat",n="View as Tree";break;case"tree":t="auto",o="list-tree",n="View as Auto"}return Qt`<action-item data-switch-value="${t}" label="${n}" icon="${o}"></action-item>`}renderTreeView(e,t="none"){return Qt`<gl-tree-generator
			.model=${e}
			.guides=${t}
			@gl-tree-generated-item-action-clicked=${this.onTreeItemActionClicked}
			@gl-tree-generated-item-checked=${this.onTreeItemChecked}
			@gl-tree-generated-item-selected=${this.onTreeItemSelected}
		></gl-tree-generator>`}renderFiles(e,t=!1,o=!1,n=2){const r=[];if(t){const t=Ns(e,(e=>e.path.split("/")),((...e)=>e.join("/")),o);if(null!=t.children)for(const e of t.children.values()){const t=this.walkFileTree(e,{level:n});r.push(t)}}else for(const t of e){const e=this.fileToTreeModel(t,{level:n,branch:!1},!0);r.push(e)}return r}walkFileTree(e,t={level:1}){let o;if(void 0===t.level&&(t.level=1),o=null==e.value?this.folderToTreeModel(e.name,t):this.fileToTreeModel(e.value,t),null!=e.children){const n=[];for(const o of e.children.values()){const e=this.walkFileTree(o,{...t,level:t.level+1});n.push(e)}n.length>0&&(o.branch=!0,o.children=n)}return o}folderToTreeModel(e,t){return{branch:!1,expanded:!0,path:e,level:1,checkable:!1,checked:!1,icon:"folder",label:e,...t}}getRepoActions(e,t,o){return[]}emptyTreeModel(e,t){return{branch:!1,expanded:!0,path:"",level:1,checkable:!0,checked:!0,icon:void 0,label:e,...t}}repoToTreeModel(e,t,o,n){return{branch:!1,expanded:!0,path:t,level:1,checkable:!0,checked:!0,icon:"repo",label:e,description:n,context:[t],actions:this.getRepoActions(e,t,o),...o}}getFileActions(e,t){return[]}fileToTreeModel(e,t,o=!1,n="/"){const r=e.path.lastIndexOf(n),a=-1!==r?e.path.substring(r+1):e.path,l=o&&-1!==r?e.path.substring(0,r):"";return{branch:!1,expanded:!0,path:e.path,level:1,checkable:!1,checked:!1,icon:"file",label:a,description:!0===o?l:void 0,context:[e],actions:this.getFileActions(e,t),decorations:[{type:"text",label:e.status}],...t}}}var Ql=Object.defineProperty,Xl=Object.getOwnPropertyDescriptor,ec=(e,t,o,n)=>{for(var r,a=n>1?void 0:n?Xl(t,o):t,l=e.length-1;l>=0;l--)(r=e[l])&&(a=(n?r(t,o,a):r(a))||a);return n&&a&&Ql(t,o,a),a};let tc=class extends GlTreeBase{constructor(){super(),this.review=!1,this.generateBusy=!1,this.creationBusy=!1,this.onDebounceTitleInput=r(this.onTitleInput,500),this.onDebounceDescriptionInput=r(this.onDescriptionInput,500),tt(We,Ze,Ye,Qe,Xe)}get create(){return this.state.create}get createChanges(){return Object.values(this.create.changes)}get createEntries(){return Object.entries(this.create.changes)}get hasWipChanges(){return this.createChanges.some((e=>"wip"===e?.type))}get selectedChanges(){return 1===this.createChanges.length?this.createEntries:this.createEntries.filter((([,e])=>!1!==e.checked))}get canSubmit(){return null!=this.create.title&&this.create.title.length>0&&this.selectedChanges.length>0}get fileLayout(){return this.state?.preferences?.files?.layout??"auto"}get isCompact(){return this.state?.preferences?.files?.compact??!0}get filesModified(){return function(e,t){if(null==e)return 0;let o=0;for(const n of e)o+=t(n);return o}(this.createChanges,(e=>e.files?.length??0))}get draftVisibility(){return this.state?.create?.visibility??"public"}updated(e){e.has("state")&&(this.creationBusy=!1),e.has("generate")&&(this.generateBusy=!1,this.generateAiButton.scrollIntoView())}firstUpdated(){window.requestAnimationFrame((()=>{this.titleInput.focus()}))}renderUserSelection(e){const t=e.pendingRole,o=new Map([["admin","admin"],["editor","can edit"],["viewer","can view"],["remove","un-invite"]]),n=o.get(t);return Qt`
			<div class="user-selection">
				<div class="user-selection__avatar">
					<gk-avatar .src=${e.avatarUrl}></gk-avatar>
				</div>
				<div class="user-selection__info">
					<div class="user-selection__name">
						${e.member.name??e.member.username??"Unknown"}
					</div>
				</div>
				<div class="user-selection__actions">
					<gk-popover>
						<gk-button slot="trigger">${n} <code-icon icon="chevron-down"></code-icon></gk-button>
						<gk-menu>
							${function*(e,t){if(void 0!==e){let o=0;for(const n of e)yield t(n,o++)}}(o,(([o,n])=>Qt`<gk-menu-item
										@click=${t=>this.onChangeSelectionRole(t,e,o)}
									>
										<code-icon
											icon="check"
											class="user-selection__check ${t===o?"is-active":""}"
										></code-icon>
										${n}
									</gk-menu-item>`))}
						</gk-menu>
					</gk-popover>
				</div>
			</div>
		`}renderUserSelectionList(){if(null!=this.state?.create?.userSelections&&0!==this.state?.create?.userSelections.length)return Qt`
			<div class="message-input">
				<div class="user-selection-container scrollable">
					${Gl(this.state.create.userSelections,(e=>e.member.id),(e=>this.renderUserSelection(e)))}
				</div>
			</div>
		`}renderForm(){let e;switch(this.draftVisibility){case"private":e="organization";break;case"invite_only":e="lock";break;default:e="globe"}const t=this.review?"Code Suggestion":"Cloud Patch",o=this.review?"Code Suggestions":"Cloud Patches";return Qt`
			<div class="section section--action">
				${bi(null!=this.state?.create?.creationError,(()=>Qt` <div class="alert alert--error">
							<code-icon icon="error"></code-icon>
							<p class="alert__content">${this.state.create.creationError}</p>
						</div>`))}
				${bi(!1===this.review,(()=>Qt`
						<div class="message-input message-input--group">
							<div class="message-input__select">
								<span class="message-input__select-icon"
									><code-icon icon=${e}></code-icon
								></span>
								<select
									id="visibility"
									class="message-input__control"
									@change=${this.onVisibilityChange}
								>
									<option value="public" ?selected=${"public"===this.draftVisibility}>
										Anyone with the link
									</option>
									<option value="private" ?selected=${"private"===this.draftVisibility}>
										Members of my Org with the link
									</option>
									<option value="invite_only" ?selected=${"invite_only"===this.draftVisibility}>
										Collaborators only
									</option>
								</select>
								<span class="message-input__select-caret"
									><code-icon icon="chevron-down"></code-icon
								></span>
							</div>
							<gl-button appearance="secondary" @click=${this.onInviteUsers}
								><code-icon icon="person-add" slot="prefix"></code-icon> Invite</gl-button
							>
						</div>
						${this.renderUserSelectionList()}
					`))}
				<div class="message-input message-input--with-menu">
					<input
						id="title"
						type="text"
						class="message-input__control"
						placeholder="Title (required)"
						maxlength="100"
						.value=${this.create.title??""}
						?disabled=${this.generateBusy}
						@input=${e=>this.onDebounceTitleInput(e)}
					/>
					${bi(!0===this.state?.orgSettings.ai,(()=>Qt`<div class="message-input__menu">
								<gl-button
									id="generate-ai"
									appearance="toolbar"
									density="compact"
									tooltip="Generate Title and Description..."
									@click=${e=>this.onGenerateTitleClick(e)}
									?disabled=${this.generateBusy}
									><code-icon
										icon=${this.generateBusy?"loading":"sparkle"}
										modifier="${this.generateBusy?"spin":""}"
									></code-icon
								></gl-button>
							</div>`))}
				</div>

				${bi(null!=this.generate?.error,(()=>Qt`
						<div class="alert alert--error">
							<code-icon icon="error"></code-icon>
							<p class="alert__content">${this.generate.error.message??"Error retrieving content"}</p>
						</div>
					`))}
				<div class="message-input">
					<textarea
						id="desc"
						class="message-input__control"
						placeholder="Description (optional)"
						maxlength="10000"
						.value=${this.create.description??""}
						?disabled=${this.generateBusy}
						@input=${e=>this.onDebounceDescriptionInput(e)}
					></textarea>
				</div>
				<p class="button-container">
					<span class="button-group button-group--single">
						<gl-button ?disabled=${this.creationBusy} full @click=${e=>this.onCreateAll(e)}
							>Create ${t}</gl-button
						>
					</span>
				</p>
				${bi(!0===this.review,(()=>Qt`
						<p class="button-container">
							<span class="button-group button-group--single">
								<gl-button appearance="secondary" full @click=${()=>this.onCancel()}
									>Cancel</gl-button
								>
							</span>
						</p>
					`))}
				${bi(!1===this.state?.orgSettings.byob,(()=>Qt`<p class="h-deemphasize">
							<code-icon icon="lock"></code-icon>
							<a
								href="${P.cloudPatches}"
								title="Learn more about ${o}"
								aria-label="Learn more about ${o}"
								>${o}</a
							>
							are
							<a
								href="https://help.gitkraken.com/gitlens/security"
								title="Learn more about GitKraken security"
								aria-label="Learn more about GitKraken security"
								>securely stored</a
							>
							by GitKraken.
						</p>`),(()=>Qt`<p class="h-deemphasize">
							<code-icon icon="info"></code-icon>
							Your
							<a
								href="${P.cloudPatches}"
								title="Learn more about ${o}"
								aria-label="Learn more about ${o}"
								>${t}</a
							>
							will be securely stored in your organization's self-hosted storage
						</p>`))}
			</div>
		`}render(){return Qt`
			<div class="pane-groups">
				<div class="pane-groups__group">${this.renderChangedFiles()}</div>
				<div class="pane-groups__group-fixed pane-groups__group--bottom">${this.renderForm()}</div>
			</div>
		`}renderChangedFiles(){return Qt`
			<webview-pane class="h-no-border" expanded>
				<span slot="title">${this.review?"Changes to Suggest":"Changes to Include"}</span>
				<action-nav slot="actions">${this.renderLayoutAction(this.fileLayout)}</action-nav>

				${bi(null!=this.validityMessage,(()=>Qt`<div class="section">
							<div class="alert alert--error">
								<code-icon icon="error"></code-icon>
								<p class="alert__content">${this.validityMessage}</p>
							</div>
						</div>`))}
				<div class="change-list" data-region="files">
					${bi(null==this.create.changes,(()=>this.renderLoading()),(()=>this.renderTreeViewWithModel()))}
				</div>
			</webview-pane>
		`}onTreeItemChecked(e){if(null==e.detail.context||e.detail.context.length<1)return;const[t,o]=e.detail.context;let n=e.detail.checked;"unstaged"===o&&(n=!!e.detail.checked||"staged");const r=this.getChangeForRepo(t);null!=r&&r.checked!==n&&(r.checked=n,this.requestUpdate("state"),this.emit("gl-patch-create-repo-checked",{repoUri:t,checked:n}))}onTreeItemSelected(e){if(!e.detail.context)return;const[t]=e.detail.context;this.emit("gl-patch-file-compare-previous",{...t})}renderTreeViewWithModel(){if(null==this.createChanges||0===this.createChanges.length)return this.renderTreeView([{label:"No changes",path:"",level:1,branch:!1,checkable:!1,expanded:!0,checked:!1}]);const e=[],t=this.createChanges.length>1,o=this.isTree(this.filesModified??0),n=this.isCompact;if(t)for(const t of this.createChanges){const r=this.getTreeForChange(t,!0,o,n);null!=r&&e.push(...r)}else{const t=this.createChanges[0],r=this.getTreeForChange(t,!1,o,n);null!=r&&e.push(...r)}return this.renderTreeView(e,this.state?.preferences?.indentGuides)}getTreeForChange(e,t=!1,o=!1,n=!0){if(null==e.files||0===e.files.length)return;const r=[];if("wip"===e.type){const a=[],l=[];for(const t of e.files)t.staged?a.push(t):l.push(t);0===a.length||0===l.length?r.push(...this.renderFiles(e.files,o,n,t?2:1)):(l.length&&r.push({label:"Unstaged Changes",path:"",level:t?2:1,branch:!0,checkable:!0,expanded:!0,checked:!0===e.checked,context:[e.repository.uri,"unstaged"],children:this.renderFiles(l,o,n,t?3:2)}),a.length&&r.push({label:"Staged Changes",path:"",level:t?2:1,branch:!0,checkable:!0,expanded:!0,checked:!1!==e.checked,disableCheck:!0,children:this.renderFiles(a,o,n,t?3:2)}))}else r.push(...this.renderFiles(e.files,o,n));if(!t)return r;const a=this.repoToTreeModel(e.repository.name,e.repository.uri,{branch:!0,checkable:!0,checked:!1!==e.checked});return a.children=r,[a]}isTree(e){return"auto"===this.fileLayout?e>(this.state?.preferences?.files?.threshold??5):"tree"===this.fileLayout}createPatch(){if(!this.canSubmit)return 0===this.titleInput.value.length?(this.titleInput.setCustomValidity("Title is required"),this.titleInput.reportValidity(),this.titleInput.focus()):this.titleInput.setCustomValidity(""),void(null==this.selectedChanges||0===this.selectedChanges.length?this.validityMessage="Check at least one change":this.validityMessage=void 0);this.validityMessage=void 0,this.titleInput.setCustomValidity("");const e=this.selectedChanges.reduce(((e,[t,o])=>(e[t]=o,e)),{}),t={title:this.create.title??"",description:this.create.description,changesets:e,visibility:this.create.visibility,userSelections:this.create.userSelections};this.emit("gl-patch-create-patch",t)}onCreateAll(e){this.createPatch(),this.state?.create&&(this.creationBusy=!0)}onSelectCreateOption(e){}getChangeForRepo(e){return this.create.changes[e]}onTitleInput(e){this.create.title=this.titleInput.value,this.fireMetadataUpdate()}onDescriptionInput(e){this.create.description=this.descInput.value,this.fireMetadataUpdate()}onInviteUsers(e){this.emit("gl-patch-create-invite-users")}onChangeSelectionRole(e,t,o){this.emit("gl-patch-create-update-selection",{selection:t,role:o});const n=e.target?.closest("gk-popover");n?.hidePopover()}onVisibilityChange(e){this.create.visibility=e.target.value,this.fireMetadataUpdate()}onGenerateTitleClick(e){this.generateBusy=!0,this.emit("gl-patch-generate-title",{title:this.create.title,description:this.create.description,visibility:this.create.visibility})}fireMetadataUpdate(){this.emit("gl-patch-create-update-metadata",{title:this.create.title,description:this.create.description,visibility:this.create.visibility})}createRenderRoot(){return this}onTreeItemActionClicked(e){if(!e.detail.context||!e.detail.action)return;switch(e.detail.action.action){case"show-patch-in-graph":this.onShowInGraph(e);break;case"file-open":this.onOpenFile(e);break;case"file-stage":this.onStageFile(e);break;case"file-unstage":this.onUnstageFile(e)}}onOpenFile(e){if(!e.detail.context)return;const[t]=e.detail.context;this.emit("gl-patch-file-open",{...t,showOptions:{preview:!e.detail.dblClick,viewColumn:e.detail.altKey?-2:void 0}})}onStageFile(e){if(!e.detail.context)return;const[t]=e.detail.context;this.emit("gl-patch-file-stage",{...t,showOptions:{preview:!e.detail.dblClick,viewColumn:e.detail.altKey?-2:void 0}})}onUnstageFile(e){if(!e.detail.context)return;const[t]=e.detail.context;this.emit("gl-patch-file-unstage",{...t,showOptions:{preview:!e.detail.dblClick,viewColumn:e.detail.altKey?-2:void 0}})}onShowInGraph(e){}onCancel(){this.emit("gl-patch-create-cancelled")}getFileActions(e,t){const o={icon:"go-to-file",label:"Open file",action:"file-open"};return this.review?[o]:!0===e.staged?[o,{icon:"remove",label:"Unstage changes",action:"file-unstage"}]:[o,{icon:"plus",label:"Stage changes",action:"file-stage"}]}getRepoActions(e,t,o){return[{icon:"gl-graph",label:"Open in Commit Graph",action:"show-patch-in-graph"}]}};ec([pi({type:Object})],tc.prototype,"state",2),ec([pi({type:Boolean})],tc.prototype,"review",2),ec([pi({type:Object})],tc.prototype,"generate",2),ec([ui()],tc.prototype,"generateBusy",2),ec([ui()],tc.prototype,"creationBusy",2),ec([fi("#title")],tc.prototype,"titleInput",2),ec([fi("#desc")],tc.prototype,"descInput",2),ec([fi("#generate-ai")],tc.prototype,"generateAiButton",2),ec([ui()],tc.prototype,"validityMessage",2),tc=ec([ci("gl-patch-create")],tc);var ic=Object.defineProperty,oc=Object.getOwnPropertyDescriptor,nc=(e,t,o,n)=>{for(var r,a=n>1?void 0:n?oc(t,o):t,l=e.length-1;l>=0;l--)(r=e[l])&&(a=(n?r(t,o,a):r(a))||a);return n&&a&&ic(t,o,a),a};let sc=class extends GlElement{get patchCreateState(){return{preferences:this.preferences,orgSettings:this.orgSettings,create:this.createState}}render(){return Qt`<gl-patch-create
			.state=${this.patchCreateState}
			.generate=${this.generate}
			review
			@gl-patch-file-compare-working=${e=>{}}
			@gl-patch-create-update-metadata=${e=>{}}
		></gl-patch-create>`}};sc.styles=[Jl,ft`
			:host {
				flex: 1;
			}

			*,
			*::before,
			*::after {
				box-sizing: border-box;
			}

			a {
				color: var(--vscode-textLink-foreground);
				text-decoration: none;
			}
			a:hover {
				text-decoration: underline;
			}

			gl-patch-create {
				height: 100%;
				display: block;
			}

			.pane-groups {
				display: flex;
				flex-direction: column;
				height: 100%;
			}
			.pane-groups__group {
				min-height: 0;
				flex: 1 1 auto;
				display: flex;
				flex-direction: column;
				overflow: hidden;
			}
			.pane-groups__group webview-pane {
				flex: none;
			}
			.pane-groups__group webview-pane[expanded] {
				min-height: 0;
				flex: 1;
			}

			.pane-groups__group-fixed {
				flex: none;
			}
			.pane-groups__group-fixed webview-pane::part(content) {
				overflow: visible;
			}

			.section {
				padding: 0 var(--gitlens-scrollbar-gutter-width) 1.5rem var(--gitlens-gutter-width);
			}
			.section > :first-child {
				margin-top: 0;
			}
			.section > :last-child {
				margin-bottom: 0;
			}

			.section--action {
				border-top: 1px solid var(--vscode-sideBarSectionHeader-border);
				padding-top: 1.5rem;
				padding-bottom: 1.5rem;
			}
			.section--action > :first-child {
				padding-top: 0;
			}

			/* TODO: these form styles should be moved to a common location */
			.message-input {
				padding-top: 0.8rem;
			}

			.message-input__control {
				flex: 1;
				border: 1px solid var(--vscode-input-border);
				background: var(--vscode-input-background);
				padding: 0.5rem;
				font-size: 1.3rem;
				line-height: 1.4;
				width: 100%;
				border-radius: 0.2rem;
				color: var(--vscode-input-foreground);
				font-family: inherit;
			}

			.message-input__control::placeholder {
				color: var(--vscode-input-placeholderForeground);
			}

			.message-input__control:invalid {
				border-color: var(--vscode-inputValidation-errorBorder);
				background-color: var(--vscode-inputValidation-errorBackground);
			}

			.message-input__control:focus {
				outline: 1px solid var(--vscode-focusBorder);
				outline-offset: -1px;
			}

			.message-input__control:disabled {
				opacity: 0.4;
				cursor: not-allowed;
				pointer-events: none;
			}

			.message-input__control--text {
				overflow: hidden;
				white-space: nowrap;
				opacity: 0.7;
			}

			.message-input__action {
				flex: none;
			}

			.message-input__select {
				flex: 1;
				position: relative;
				display: flex;
				align-items: stretch;
			}
			.message-input__select-icon {
				position: absolute;
				left: 0;
				top: 0;
				display: flex;
				width: 2.4rem;
				height: 100%;
				align-items: center;
				justify-content: center;
				pointer-events: none;
				color: var(--vscode-foreground);
			}
			.message-input__select-caret {
				position: absolute;
				right: 0;
				top: 0;
				display: flex;
				width: 2.4rem;
				height: 100%;
				align-items: center;
				justify-content: center;
				pointer-events: none;
				color: var(--vscode-foreground);
			}

			.message-input__select .message-input__control {
				box-sizing: border-box;
				appearance: none;
				padding-left: 2.4rem;
				padding-right: 2.4rem;
			}

			.message-input__menu {
				position: absolute;
				top: 0.8rem;
				right: 0;
			}

			.section--action > :first-child .message-input__menu {
				top: 0;
			}

			.message-input--group {
				display: flex;
				flex-direction: row;
				align-items: stretch;
				gap: 0.6rem;
			}

			.message-input--with-menu {
				position: relative;
			}

			textarea.message-input__control {
				resize: vertical;
				min-height: 4rem;
				max-height: 40rem;
			}

			.user-selection-container {
				max-height: (2.4rem * 4);
				overflow: auto;
			}

			.user-selection {
				--gk-avatar-size: 2rem;
				display: flex;
				flex-direction: row;
				align-items: center;
				gap: 0.4rem;
				height: 2.4rem;
			}
			.user-selection__avatar {
				flex: none;
			}

			.user-selection__info {
				flex: 1;
				min-width: 0;
				white-space: nowrap;
			}

			.user-selection__name {
				overflow: hidden;
				text-overflow: ellipsis;
			}

			.user-selection__actions {
				flex: none;
				color: var(--gk-button-ghost-color);
			}
			.user-selection__actions gk-button::part(base) {
				padding-right: 0;
				padding-block: 0.4rem;
			}

			.user-selection__actions gk-button code-icon {
				pointer-events: none;
			}

			.user-selection__check:not(.is-active) {
				opacity: 0;
			}

			.alert {
				display: flex;
				flex-direction: row;
				align-items: center;
				padding: 0.8rem 1.2rem;
				line-height: 1.2;
				background-color: var(--color-alert-errorBackground);
				border-left: 0.3rem solid var(--color-alert-errorBorder);
				color: var(--color-alert-foreground);
			}

			.alert code-icon {
				margin-right: 0.4rem;
				vertical-align: baseline;
			}

			.alert__content {
				font-size: 1.2rem;
				line-height: 1.2;
				text-align: left;
				margin: 0;
			}
		`],nc([pi({type:Object})],sc.prototype,"orgSettings",2),nc([pi({type:Object})],sc.prototype,"preferences",2),nc([pi({type:Object})],sc.prototype,"generate",2),nc([pi({type:Object})],sc.prototype,"createState",2),sc=nc([ci("gl-inspect-patch")],sc);var rc=Object.defineProperty,ac=Object.getOwnPropertyDescriptor,lc=(e,t,o,n)=>{for(var r,a=n>1?void 0:n?ac(t,o):t,l=e.length-1;l>=0;l--)(r=e[l])&&(a=(n?r(t,o,a):r(a))||a);return n&&a&&rc(t,o,a),a};let cc=class extends GlDetailsBase{constructor(){super(),this.tab="wip",this.patchCreateMetadata={title:void 0,description:void 0},tt(We)}get inReview(){return this.draftState?.inReview??!1}get isUnpublished(){const e=this.wip?.branch;return null==e?.upstream||!0===e.upstream.missing}get draftsEnabled(){return!0===this.orgSettings?.drafts}get filesCount(){return this.files?.length??0}get branchState(){const e=this.wip?.branch;if(null!=e)return{ahead:e.tracking?.ahead??0,behind:e.tracking?.behind??0}}get patchCreateState(){const e=this.wip,t=e.repo.uri,o={type:"wip",repository:{name:e.repo.name,path:e.repo.path,uri:e.repo.uri},files:e.changes?.files??[],checked:!0};return{...this.patchCreateMetadata,changes:{[t]:o},creationError:void 0,visibility:"public",userSelections:void 0}}get codeSuggestions(){return this.wip?.codeSuggestions??[]}updated(e){super.updated(e),e.has("generate")&&(this.patchCreateMetadata={title:this.generate?.title??this.patchCreateMetadata.title,description:this.generate?.description??this.patchCreateMetadata.description})}get filesChangedPaneLabel(){return"Working Changes"}renderSecondaryAction(){if(!this.draftsEnabled||this.inReview)return;let e="Share as Cloud Patch",t="create-patch";const o=this.wip?.pullRequest;return null!=o&&"opened"===o.state&&W(o.provider.domain,"github.com")?(this.inReview?(e="Close Suggestion for PR",t="end-patch-review"):(e="Suggest Changes for PR",t="start-patch-review"),Qt`<p class="button-container">
				<span class="button-group button-group--single">
					<gl-button
						appearance="secondary"
						full
						data-action="${t}"
						@click=${()=>this.onToggleReviewMode(!this.inReview)}
					>
						<code-icon icon="gl-code-suggestion" slot="prefix"></code-icon>${e}
					</gl-button>
					<gl-button
						appearance="secondary"
						density="compact"
						data-action="create-patch"
						tooltip="Share as Cloud Patch"
						@click=${()=>this.onDataActionClick("create-patch")}
					>
						<code-icon icon="gl-cloud-patch-share"></code-icon>
					</gl-button>
				</span>
			</p>`):Qt`<p class="button-container">
			<span class="button-group button-group--single">
				<gl-button
					appearance="secondary"
					full
					data-action="${t}"
					@click=${()=>this.onDataActionClick(t)}
				>
					<code-icon icon="gl-cloud-patch-share" slot="prefix"></code-icon>${e}
				</gl-button>
			</span>
		</p>`}renderPrimaryAction(){const e=this.draftsEnabled;if(this.isUnpublished&&e)return Qt`<p class="button-container">
				<span class="button-group button-group--single">
					<gl-button
						full
						data-action="publish-branch"
						@click=${()=>this.onDataActionClick("publish-branch")}
					>
						<code-icon icon="cloud-upload" slot="prefix"></code-icon> Publish Branch
					</gl-button>
				</span>
			</p>`;if(!this.isUnpublished&&!e||null==this.branchState)return;const{ahead:t,behind:o}=this.branchState;if(0===t&&0===o)return;const n=o>0?"Pull":t>0?"Push":"Fetch",r=o>0?"repo-pull":t>0?"repo-push":"repo-fetch";return Qt`<p class="button-container">
			<span class="button-group button-group--single">
				<gl-button
					full
					data-action="${n.toLowerCase()}"
					@click=${()=>this.onDataActionClick(n.toLowerCase())}
				>
					<code-icon icon="${r}" slot="prefix"></code-icon> ${n}
					<gl-tracking-pill .ahead=${t} .behind=${o} slot="suffix"></gl-tracking-pill>
				</gl-button>
			</span>
		</p>`}renderActions(){const e=this.renderPrimaryAction(),t=this.renderSecondaryAction();return null==e&&null==t?ei:Qt`<div class="section section--actions">${e}${t}</div>`}renderSuggestedChanges(){return 0===this.codeSuggestions.length?ei:Qt`
			<gl-tree>
				<gl-tree-item branch .expanded=${!0} .level=${0}>
					<code-icon slot="icon" icon="gl-code-suggestion"></code-icon>
					Code Suggestions
				</gl-tree-item>
				${Gl(this.codeSuggestions,(e=>e.id),(e=>Qt`
						<gl-tree-item
							.expanded=${!0}
							.level=${1}
							@gl-tree-item-selected=${()=>this.onShowCodeSuggestion(e.id)}
						>
							<gk-avatar
								class="author-icon"
								src="${e.author.avatarUri}"
								title="${e.author.name} (author)"
							></gk-avatar>
							${e.title}
							<span slot="description"
								><formatted-date .date=${new Date(e.updatedAt)}></formatted-date
							></span>
						</gl-tree-item>
					`))}
			</gl-tree>
		`}renderPullRequest(){return null==this.wip?.pullRequest?ei:Qt`
			<webview-pane
				collapsable
				flexible
				?expanded=${this.preferences?.pullRequestExpanded??!0}
				data-region="pullrequest-pane"
			>
				<span slot="title">Pull Request #${this.wip?.pullRequest?.id}</span>
				<action-nav slot="actions">
					<action-item
						label="Open Pull Request Changes"
						icon="diff-multiple"
						@click=${()=>this.onDataActionClick("open-pr-changes")}
					></action-item>
					<action-item
						label="Compare Pull Request"
						icon="compare-changes"
						@click=${()=>this.onDataActionClick("open-pr-compare")}
					></action-item>
					<action-item
						label="Open Pull Request on Remote"
						icon="globe"
						@click=${()=>this.onDataActionClick("open-pr-remote")}
					></action-item>
				</action-nav>
				<div class="section">
					<issue-pull-request
						type="pr"
						name="${this.wip.pullRequest.title}"
						url="${this.wip.pullRequest.url}"
						identifier="#${this.wip.pullRequest.id}"
						status="${this.wip.pullRequest.state}"
						.date=${this.wip.pullRequest.updatedDate}
						.dateFormat="${this.preferences?.dateFormat}"
						.dateStyle="${this.preferences?.dateStyle}"
						details
					></issue-pull-request>
				</div>
				${this.renderSuggestedChanges()}
			</webview-pane>
		`}renderIncomingOutgoing(){return null==this.branchState||0===this.branchState.ahead&&0===this.branchState.behind?ei:Qt`
			<webview-pane collapsable>
				<span slot="title">Incoming / Outgoing</span>
				<gl-tree>
					<gl-tree-item branch .expanded=${!1}>
						<code-icon slot="icon" icon="arrow-circle-down"></code-icon>
						Incoming Changes
						<span slot="decorations">${this.branchState.behind??0}</span>
					</gl-tree-item>
					<gl-tree-item branch .expanded=${!1}>
						<code-icon slot="icon" icon="arrow-circle-up"></code-icon>
						Outgoing Changes
						<span slot="decorations">${this.branchState.ahead??0}</span>
					</gl-tree-item>
				</gl-tree>
			</webview-pane>
		`}renderPatchCreation(){return this.inReview?Qt`<gl-inspect-patch
			.orgSettings=${this.orgSettings}
			.preferences=${this.preferences}
			.generate=${this.generate}
			.createState=${this.patchCreateState}
			@gl-patch-create-patch=${e=>{this.dispatchEvent(new CustomEvent("gl-inspect-create-suggestions",{detail:e.detail}))}}
		></gl-inspect-patch>`:ei}render(){return null==this.wip?ei:Qt`
			${this.renderActions()}
			<webview-pane-group flexible>
				${this.renderPullRequest()}
				${bi(!1===this.inReview,(()=>this.renderChangedFiles("wip")))}${this.renderPatchCreation()}
			</webview-pane-group>
		`}getFileActions(e,t){const o={icon:"go-to-file",label:"Open file",action:"file-open"};return!0===e.staged?[o,{icon:"remove",label:"Unstage changes",action:"file-unstage"}]:[o,{icon:"plus",label:"Stage changes",action:"file-stage"}]}onDataActionClick(e){this.dispatchEvent(new CustomEvent("data-action",{detail:{name:e}}))}onToggleReviewMode(e){this.dispatchEvent(new CustomEvent("draft-state-changed",{detail:{inReview:e}}))}onShowCodeSuggestion(e){this.dispatchEvent(new CustomEvent("gl-show-code-suggestion",{detail:{id:e}}))}};cc.styles=[ft`
			:host {
				--gk-avatar-size: 1.6rem;
			}
		`],lc([pi({type:Object})],cc.prototype,"wip",2),lc([pi({type:Object})],cc.prototype,"orgSettings",2),lc([pi({type:Object})],cc.prototype,"draftState",2),lc([pi({type:Object})],cc.prototype,"generate",2),lc([ui()],cc.prototype,"inReview",1),lc([ui()],cc.prototype,"patchCreateMetadata",2),cc=lc([ci("gl-wip-details")],cc);const dc=ft`
	.commit-action {
		display: inline-flex;
		justify-content: center;
		align-items: center;
		height: 21px;
		border-radius: 0.25em;
		color: inherit;
		padding: 0.2rem;
		vertical-align: text-bottom;
		text-decoration: none;
		gap: 0.2rem;
	}

	.commit-action > * {
		pointer-events: none;
	}

	.commit-action:focus {
		outline: 1px solid var(--vscode-focusBorder);
		outline-offset: -1px;
	}

	.commit-action:hover {
		color: var(--vscode-foreground);
		text-decoration: none;
	}

	:host-context(.vscode-dark) .commit-action:hover,
	:host-context(.vscode-high-contrast:not(.vscode-high-contrast-light)) .commit-action:hover {
		background-color: var(--color-background--lighten-15);
	}
	:host-context(.vscode-light) .commit-action:hover,
	:host-context(.vscode-high-contrast-light) .commit-action:hover {
		background-color: var(--color-background--darken-15);
	}

	:host-context(.vscode-dark) .commit-action.is-active,
	:host-context(.vscode-high-contrast:not(.vscode-high-contrast-light)) .commit-action.is-active {
		background-color: var(--color-background--lighten-10);
	}
	:host-context(.vscode-light) .commit-action.is-active,
	:host-context(.vscode-high-contrast-light) .commit-action.is-active {
		background-color: var(--color-background--darken-10);
	}

	.commit-action.is-disabled {
		opacity: 0.5;
		pointer-events: none;
	}

	.commit-action.is-hidden {
		display: none;
	}

	.commit-action--emphasis-low:not(:hover, :focus, :active) {
		opacity: 0.5;
	}

	.pr--opened {
		color: var(--vscode-gitlens-openPullRequestIconColor);
	}
	.pr--closed {
		color: var(--vscode-gitlens-closedPullRequestIconColor);
	}
	.pr--merged {
		color: var(--vscode-gitlens-mergedPullRequestIconColor);
	}
`;var hc=Object.defineProperty,pc=Object.getOwnPropertyDescriptor,uc=(e,t,o,n)=>{for(var r,a=n>1?void 0:n?pc(t,o):t,l=e.length-1;l>=0;l--)(r=e[l])&&(a=(n?r(t,o,a):r(a))||a);return n&&a&&hc(t,o,a),a};let gc=class extends lit_element_r{constructor(){super(...arguments),this.pinned=!1,this.uncommitted=!1,this.shortSha=""}get navigationState(){if(null==this.navigation)return{back:!1,forward:!1};const e={back:!0,forward:!0};return this.navigation.count<=1?(e.back=!1,e.forward=!1):0===this.navigation.position?(e.back=!0,e.forward=!1):this.navigation.position===this.navigation.count-1&&(e.back=!1,e.forward=!0),e}handleAction(e){const t=e.target,o=t.dataset.action;if(null!=o)if("commit-actions"===o){const o=e instanceof MouseEvent&&e.altKey;this.fireEvent("commit-actions",{action:t.dataset.actionType,alt:o})}else this.fireEvent(o)}fireEvent(e,t){this.dispatchEvent(new CustomEvent(`gl-${e}`,{detail:t}))}render(){const e=this.pinned?Qt`Unpin this Commit<br />Restores Automatic Following`:Qt`Pin this Commit<br />Suspends Automatic Following`;let t="Forward",o="Back";return this.navigation?.hint&&(this.pinned?o+=` - ${this.navigation.hint}`:t+=` - ${this.navigation.hint}`),Qt`
			<div class="group">
				${bi(!this.uncommitted,(()=>Qt`
						<gl-tooltip hoist>
							<a
								class="commit-action"
								href="#"
								data-action="commit-actions"
								data-action-type="sha"
								@click=${this.handleAction}
							>
								<code-icon
									icon="${null!=this.stashNumber?"gl-stashes-view":"git-commit"}"
								></code-icon>
								<span class="sha" data-region="shortsha"
									>${null!=this.stashNumber?`#${this.stashNumber}`:this.shortSha}</span
								>
							</a>
							<span slot="content"
								>Copy ${null!=this.stashNumber?"Stash Name":"SHA"}<br />[⌥] Copy Message</span
							>
						</gl-tooltip>
					`))}
			</div>
			<div class="group">
				<gl-tooltip hoist
					><a
						class="commit-action${this.pinned?" is-active":""}"
						href="#"
						data-action="pin"
						@click=${this.handleAction}
						><code-icon
							icon="${this.pinned?"gl-pinned-filled":"pin"}"
							data-region="commit-pin"
						></code-icon></a
					><span slot="content">${e}</span></gl-tooltip
				>
				<gl-tooltip hoist content="${o}"
					><a
						class="commit-action${this.navigationState.back?"":" is-disabled"}"
						aria-disabled="${this.navigationState.back?"false":"true"}"
						href="#"
						data-action="back"
						@click=${this.handleAction}
						><code-icon icon="arrow-left" data-region="commit-back"></code-icon></a
				></gl-tooltip>
				${bi(this.navigationState.forward,(()=>Qt`
						<gl-tooltip hoist content="${t}"
							><a class="commit-action" href="#" data-action="forward" @click=${this.handleAction}
								><code-icon icon="arrow-right" data-region="commit-forward"></code-icon></a
						></gl-tooltip>
					`))}
				<!-- TODO: add a spacer -->
				${bi(this.uncommitted,(()=>Qt`
						<gl-tooltip hoist content="Open SCM view"
							><a
								class="commit-action"
								href="#"
								data-action="commit-actions"
								data-action-type="scm"
								@click=${this.handleAction}
								><code-icon icon="source-control"></code-icon></a
						></gl-tooltip>
					`))}
				<gl-tooltip hoist content="Open in Commit Graph"
					><a
						class="commit-action"
						href="#"
						data-action="commit-actions"
						data-action-type="graph"
						@click=${this.handleAction}
						><code-icon icon="gl-graph"></code-icon></a
				></gl-tooltip>
				${bi(!this.uncommitted,(()=>Qt`
						<gl-tooltip hoist content="Show Commit Actions"
							><a
								class="commit-action"
								href="#"
								data-action="commit-actions"
								data-action-type="more"
								@click=${this.handleAction}
								><code-icon icon="kebab-vertical"></code-icon></a
						></gl-tooltip>
					`))}
			</div>
		`}};gc.styles=[dc,ft`
			*,
			*::before,
			*::after {
				box-sizing: border-box;
			}

			:host {
				display: flex;
				flex-direction: row;
				flex-wrap: wrap;
				align-items: center;
				justify-content: space-between;
				gap: 0.2rem;
			}

			:host([pinned]) {
				background-color: var(--color-alert-warningBackground);
				box-shadow: 0 0 0 0.1rem var(--color-alert-warningBorder);
				border-radius: 0.3rem;
			}

			:host([pinned]) .commit-action:hover,
			:host([pinned]) .commit-action.is-active {
				background-color: var(--color-alert-warningHoverBackground);
			}

			.group {
				display: flex;
				flex: none;
				flex-direction: row;
				max-width: 100%;
			}

			.sha {
				margin: 0 0.5rem 0 0.25rem;
			}
		`],uc([pi({type:Boolean,reflect:!0})],gc.prototype,"pinned",2),uc([pi({type:Boolean})],gc.prototype,"uncommitted",2),uc([pi({type:Object})],gc.prototype,"navigation",2),uc([pi()],gc.prototype,"shortSha",2),uc([pi()],gc.prototype,"stashNumber",2),gc=uc([ci("gl-inspect-nav")],gc);var fc=Object.defineProperty,mc=Object.getOwnPropertyDescriptor,bc=(e,t,o,n)=>{for(var r,a=n>1?void 0:n?mc(t,o):t,l=e.length-1;l>=0;l--)(r=e[l])&&(a=(n?r(t,o,a):r(a))||a);return n&&a&&fc(t,o,a),a};let vc=class extends lit_element_r{render(){if(null==this.wip)return ei;const e=this.wip.changes,t=this.wip.branch;if(null==e||null==t)return ei;let o="git-pull-request";if(this.wip.pullRequest?.state)switch(this.wip.pullRequest?.state){case"merged":o="git-merge";break;case"closed":o="git-pull-request-closed"}return Qt`
			<div class="group">
				${bi(null!=this.wip.pullRequest,(()=>Qt`<gl-popover hoist>
							<a href="#" class="commit-action" slot="anchor"
								><code-icon icon=${o} class="pr pr--${this.wip.pullRequest.state}"></code-icon
								><span>#${this.wip.pullRequest.id}</span></a
							>
							<div slot="content">
								<issue-pull-request
									type="pr"
									name="${this.wip.pullRequest.title}"
									url="${this.wip.pullRequest.url}"
									identifier="#${this.wip.pullRequest.id}"
									status="${this.wip.pullRequest.state}"
									.date=${this.wip.pullRequest.updatedDate}
									.dateFormat="${this.preferences?.dateFormat}"
									.dateStyle="${this.preferences?.dateStyle}"
									details
								></issue-pull-request>
							</div>
						</gl-popover>`))}
				<gl-tooltip hoist class="tooltip--overflowed">
					<a
						href="#"
						class="commit-action commit-action--overflowed"
						@click=${e=>this.handleAction(e,"switch")}
					>
						${bi(null==this.wip.pullRequest,(()=>Qt`<code-icon icon="git-branch"></code-icon>`))}<span class="branch">${t.name}</span><code-icon icon="chevron-down" size="10"></code-icon
					></a>
					<div slot="content">
						Switch to Another Branch...
						<hr />
						<code-icon icon="git-branch"></code-icon><span class="md-code">${this.wip.branch?.name}</span>
					</div>
				</gl-tooltip>
			</div>
			<div class="group">
				<gl-tooltip hoist content="Fetch">
					<a href="#" class="commit-action" @click=${e=>this.handleAction(e,"fetch")}
						><code-icon icon="repo-fetch"></code-icon></a
				></gl-tooltip>
			</div>
		`}handleAction(e,t){const o=e instanceof MouseEvent&&e.altKey;this.dispatchEvent(new CustomEvent("gl-branch-action",{detail:{action:t,alt:o}}))}};vc.styles=[dc,ft`
			*,
			*::before,
			*::after {
				box-sizing: border-box;
			}

			:host {
				display: flex;
				flex-direction: row;
				/* flex-wrap: wrap; */
				align-items: center;
				justify-content: space-between;
				gap: 0.2rem;
			}

			.tooltip--overflowed {
				min-width: 0;
			}

			.commit-action--overflowed {
				width: 100%;
			}

			.branch {
				min-width: 0;
				max-width: fit-content;
				white-space: nowrap;
				text-overflow: ellipsis;
				overflow: hidden;
			}

			.group {
				display: flex;
				flex: none;
				flex-direction: row;
				min-width: 0;
				max-width: 100%;
			}

			.group:first-child {
				min-width: 0;
				flex: 0 1 auto;
			}

			hr {
				border: none;
				border-top: 1px solid var(--color-foreground--25);
			}

			.md-code {
				background: var(--vscode-textCodeBlock-background);
				border-radius: 3px;
				padding: 0px 4px 2px 4px;
				font-family: var(--vscode-editor-font-family);
			}
		`],bc([pi({type:Object})],vc.prototype,"wip",2),bc([pi({type:Object})],vc.prototype,"preferences",2),vc=bc([ci("gl-status-nav")],vc);var yc=Object.defineProperty,wc=Object.getOwnPropertyDescriptor,kc=(e,t,o,n)=>{for(var r,a=n>1?void 0:n?wc(t,o):t,l=e.length-1;l>=0;l--)(r=e[l])&&(a=(n?r(t,o,a):r(a))||a);return n&&a&&yc(t,o,a),a};const xc="0000000000000000000000000000000000000000";let $c=class extends lit_element_r{constructor(){super(),this.draftState={inReview:!1},this._disposables=[],this.indentPreference=16,tt(Ke)}get isUncommitted(){return this.state?.commit?.sha===xc}get hasCommit(){return null!=this.state?.commit}get isStash(){return null!=this.state?.commit?.stashNumber}get wipStatus(){const e=this.state?.wip;if(null==e)return;const t=e.branch;if(null==t)return;const o=e.changes,n=o?.files.length??0,r=t.tracking?.ahead??0,a=t.tracking?.behind??0,l=a>0&&r>0?"both":a>0?"behind":r>0?"ahead":n>0?"working":void 0;return{branch:e.repositoryCount>1?`${e.repo.name}:${t.name}`:t.name,upstream:t.upstream?.name,ahead:r,behind:a,working:e.changes?.files.length??0,status:l}}get navigation(){if(null==this.state?.navigationStack)return{back:!1,forward:!1};const e={back:!0,forward:!0};return this.state.navigationStack.count<=1?(e.back=!1,e.forward=!1):0===this.state.navigationStack.position?(e.back=!0,e.forward=!1):this.state.navigationStack.position===this.state.navigationStack.count-1&&(e.back=!1,e.forward=!0),e}updateDocumentProperties(){const e=this.state?.preferences?.indent;if(e===this.indentPreference)return;this.indentPreference=e??16;document.documentElement.style.setProperty("--gitlens-tree-indent",`${this.indentPreference}px`)}updated(e){e.has("state")&&(this.updateDocumentProperties(),null!=this.state?.inReview&&this.state.inReview!==this.draftState.inReview&&(this.draftState.inReview=this.state.inReview))}connectedCallback(){super.connectedCallback(),this._hostIpc=new ve("commit-details"),this._disposables=[this._hostIpc.onReceiveMessage((e=>this.onMessageReceived(e))),this._hostIpc,oe.on("gl-inspect-nav","gl-commit-actions",(e=>this.onCommitActions(e))),oe.on("gl-status-nav","gl-branch-action",(e=>this.onBranchAction(e.detail.action))),oe.on('[data-action="pick-commit"]',"click",(e=>this.onPickCommit(e))),oe.on('[data-action="wip"]',"click",(e=>this.onSwitchMode(e,"wip"))),oe.on('[data-action="details"]',"click",(e=>this.onSwitchMode(e,"commit"))),oe.on('[data-action="search-commit"]',"click",(e=>this.onSearchCommit(e))),oe.on('[data-action="files-layout"]',"click",(e=>this.onToggleFilesLayout(e))),oe.on("gl-inspect-nav","gl-pin",(()=>this.onTogglePin())),oe.on("gl-inspect-nav","gl-back",(()=>this.onNavigate("back"))),oe.on("gl-inspect-nav","gl-forward",(()=>this.onNavigate("forward"))),oe.on('[data-action="create-patch"]',"click",(e=>this.onCreatePatchFromWip(!0))),oe.on('[data-region="rich-pane"]',"expanded-change",(e=>this.onExpandedChange(e.detail,"autolinks"))),oe.on('[data-region="pullrequest-pane"]',"expanded-change",(e=>this.onExpandedChange(e.detail,"pullrequest"))),oe.on('[data-action="explain-commit"]',"click",(e=>this.onExplainCommit(e))),oe.on('[data-action="switch-ai"]',"click",(e=>this.onSwitchAiModel(e))),oe.on("gl-wip-details","create-patch",(e=>this.onCreatePatchFromWip(e.detail.checked))),oe.on("gl-commit-details","file-open-on-remote",(e=>this.onOpenFileOnRemote(e.detail))),oe.on("gl-commit-details,gl-wip-details","file-open",(e=>this.onOpenFile(e.detail))),oe.on("gl-commit-details","file-compare-working",(e=>this.onCompareFileWithWorking(e.detail))),oe.on("gl-commit-details,gl-wip-details","file-compare-previous",(e=>this.onCompareFileWithPrevious(e.detail))),oe.on("gl-commit-details","file-more-actions",(e=>this.onFileMoreActions(e.detail))),oe.on("gl-wip-details","file-stage",(e=>this.onStageFile(e.detail))),oe.on("gl-wip-details","file-unstage",(e=>this.onUnstageFile(e.detail))),oe.on("gl-wip-details","data-action",(e=>this.onBranchAction(e.detail.name))),oe.on("gl-wip-details","gl-inspect-create-suggestions",(e=>this.onSuggestChanges(e.detail))),oe.on("gl-wip-details","gl-patch-generate-title",(e=>this.onCreateGenerateTitle(e.detail))),oe.on("gl-wip-details","gl-show-code-suggestion",(e=>this.onShowCodeSuggestion(e.detail))),oe.on("gl-wip-details","gl-patch-file-compare-previous",(e=>this.onCompareFileWithPrevious(e.detail))),oe.on("gl-wip-details","gl-patch-file-open",(e=>this.onOpenFile(e.detail))),oe.on("gl-wip-details","gl-patch-file-stage",(e=>this.onStageFile(e.detail))),oe.on("gl-wip-details","gl-patch-file-unstage",(e=>this.onUnstageFile(e.detail))),oe.on("gl-wip-details","gl-patch-create-cancelled",(()=>this.onDraftStateChanged(!1))),oe.on("gl-status-nav,issue-pull-request","gl-issue-pull-request-details",(()=>this.onBranchAction("open-pr-details")))]}onSuggestChanges(e){this._hostIpc.sendCommand(yi,e)}onShowCodeSuggestion(e){this._hostIpc.sendCommand(Li,e)}onMessageReceived(e){switch(!0){case Ki.is(e):e.params.state,this.state=e.params.state,this.dispatchEvent(new CustomEvent("state-changed",{detail:this.state}));break;case Zi.is(e):this.state={...this.state,wip:e.params.wip,inReview:e.params.inReview},this.dispatchEvent(new CustomEvent("state-changed",{detail:this.state}));break;case Qi.is(e):this.onDraftStateChanged(e.params.inReview,!0);break;case Yi.is(e):this.state={...this.state,hasConnectedJira:e.params.hasConnectedJira},this.dispatchEvent(new CustomEvent("state-changed",{detail:this.state}));break;case Ji.is(e):this.state={...this.state,hasAccount:e.params.hasAccount},this.dispatchEvent(new CustomEvent("state-changed",{detail:this.state}))}}disconnectedCallback(){this._disposables.forEach((e=>e.dispose())),this._disposables=[],super.disconnectedCallback()}renderTopInspect(){return null==this.state?.commit?ei:Qt`<gl-inspect-nav
			?uncommitted=${this.isUncommitted}
			?pinned=${this.state?.pinned}
			.navigation=${this.state?.navigationStack}
			.shortSha=${this.state?.commit.shortSha??""}
			.stashNumber=${this.state?.commit.stashNumber}
		></gl-inspect-nav>`}renderTopWip(){return null==this.state?.wip?ei:Qt`<gl-status-nav .wip=${this.state.wip} .preferences=${this.state.preferences}></gl-status-nav>`}renderRepoStatusContent(e){const t=this.wipStatus?.status;return Qt`
			<code-icon icon="gl-repository-filled"></code-icon>
			${bi(null!=this.wipStatus?.status,(()=>Qt`<gl-tracking-pill
						class="inspect-header__tab-tracking"
						.ahead=${this.wipStatus.ahead}
						.behind=${this.wipStatus.behind}
						.working=${this.wipStatus.working}
						outlined
					></gl-tracking-pill>`))}
			${bi(null!=t,(()=>Qt`<gl-indicator
						class="inspect-header__tab-indicator inspect-header__tab-indicator--${t}"
					></gl-indicator>`))}
		`}renderWipTooltipContent(){return null==this.wipStatus?"Overview":Qt`
			Overview of &nbsp;<code-icon icon="git-branch" size="12"></code-icon
			><span class="md-code">${this.wipStatus.branch}</span>
			${bi("both"===this.wipStatus.status,(()=>Qt`<hr />
						<span class="md-code">${this.wipStatus.branch}</span> is
						${Z("commit",this.wipStatus.behind)} behind and
						${Z("commit",this.wipStatus.ahead)} ahead of
						<span class="md-code">${this.wipStatus.upstream??"origin"}</span>`))}
			${bi("behind"===this.wipStatus.status,(()=>Qt`<hr />
						<span class="md-code">${this.wipStatus.branch}</span> is
						${Z("commit",this.wipStatus.behind)} behind
						<span class="md-code">${this.wipStatus.upstream??"origin"}</span>`))}
			${bi("ahead"===this.wipStatus.status,(()=>Qt`<hr />
						<span class="md-code">${this.wipStatus.branch}</span> is
						${Z("commit",this.wipStatus.ahead)} ahead of
						<span class="md-code"> ${this.wipStatus.upstream??"origin"}</span>`))}
			${bi(this.wipStatus.working>0,(()=>Qt`<hr />
						${Z("working change",this.wipStatus.working)}`))}
		`}renderTopSection(){const e="wip"===this.state?.mode;return Qt`
			<div class="inspect-header">
				<nav class="inspect-header__tabs">
					<gl-tooltip hoist>
						<button class="inspect-header__tab${e?"":" is-active"}" data-action="details">
							<code-icon icon="gl-inspect"></code-icon>
						</button>
						<span slot="content"
							>${null!=this.state?.commit?this.isStash?Qt`Inspect Stash
											<span class="md-code"
												><code-icon icon="gl-stashes-view"></code-icon> #${this.state.commit.stashNumber}</span
											>`:Qt`Inspect Commit
											<span class="md-code"
												><code-icon icon="git-commit"></code-icon> ${this.state.commit.shortSha}</span
											>`:"Inspect"}${this.state?.pinned?Qt`(pinned)
										<hr />
										Automatic following is suspended while pinned`:""}</span
						>
					</gl-tooltip>
					<gl-tooltip hoist>
						<button class="inspect-header__tab${e?" is-active":""}" data-action="wip">
							${this.renderRepoStatusContent(e)}
						</button>
						<span slot="content">${this.renderWipTooltipContent()}</span>
					</gl-tooltip>
				</nav>
				<div class="inspect-header__content">
					${bi("wip"!==this.state?.mode,(()=>this.renderTopInspect()),(()=>this.renderTopWip()))}
				</div>
			</div>
		`}render(){const e=this.state?.wip;return Qt`
			<div class="commit-detail-panel scrollable">
				${this.renderTopSection()}
				<main id="main" tabindex="-1">
					${bi("commit"===this.state?.mode,(()=>Qt`<gl-commit-details
								.state=${this.state}
								.files=${this.state?.commit?.files}
								.explain=${this.explain}
								.preferences=${this.state?.preferences}
								.orgSettings=${this.state?.orgSettings}
								.isUncommitted=${this.isUncommitted}
							></gl-commit-details>`),(()=>Qt`<gl-wip-details
								.wip=${e}
								.files=${e?.changes?.files}
								.preferences=${this.state?.preferences}
								.orgSettings=${this.state?.orgSettings}
								.generate=${this.generate}
								.isUncommitted=${!0}
								.emptyText=${"No working changes"}
								.draftState=${this.draftState}
								@draft-state-changed=${e=>this.onDraftStateChanged(e.detail.inReview)}
							></gl-wip-details>`))}
				</main>
			</div>
		`}createRenderRoot(){return this}onDraftStateChanged(e,t=!1){e!==this.draftState.inReview&&(this.draftState={...this.draftState,inReview:e},this.requestUpdate("draftState"),t||this._hostIpc.sendCommand(zi,{inReview:e}))}onBranchAction(e){switch(e){case"pull":this._hostIpc.sendCommand(Ni,void 0);break;case"push":this._hostIpc.sendCommand(ji,void 0);break;case"fetch":this._hostIpc.sendCommand(Ii,void 0);break;case"publish-branch":this._hostIpc.sendCommand(Bi,void 0);break;case"switch":this._hostIpc.sendCommand(Ui,void 0);break;case"open-pr-changes":this._hostIpc.sendCommand(Fi,void 0);break;case"open-pr-compare":this._hostIpc.sendCommand(Hi,void 0);break;case"open-pr-remote":this._hostIpc.sendCommand(qi,void 0);break;case"open-pr-details":this._hostIpc.sendCommand(Vi,void 0)}}onCreatePatchFromWip(e=!0){null!=this.state?.wip?.changes&&this._hostIpc.sendCommand(Mi,{changes:this.state.wip.changes,checked:e})}onCommandClickedCore(e){const t=e?.startsWith("command:")?e.slice(8):e;null!=t&&this._hostIpc.sendCommand(p,{command:t})}onSwitchAiModel(e){this.onCommandClickedCore("gitlens.switchAIModel")}async onExplainCommit(e){try{const e=await this._hostIpc.sendRequest(Wi,void 0);e.error?this.explain={error:{message:e.error.message??"Error retrieving content"}}:this.explain=e}catch(e){this.explain={error:{message:"Error retrieving content"}}}}async onCreateGenerateTitle(e){try{const e=await this._hostIpc.sendRequest(Gi,void 0);e.error?this.generate={error:{message:e.error.message??"Error retrieving content"}}:e.title||e.description?this.generate={title:e.title,description:e.description}:this.generate=void 0}catch(e){this.generate={error:{message:"Error retrieving content"}}}this.requestUpdate("generate")}onToggleFilesLayout(e){const t=e.target?.dataset.filesLayout??void 0;if(t===this.state?.preferences?.files?.layout)return;const o={...this.state.preferences?.files,layout:t??"auto"};this.state={...this.state,preferences:{...this.state.preferences,files:o}},this._hostIpc.sendCommand(Di,{files:o})}onExpandedChange(e,t){let o;"autolinks"===t?o={autolinksExpanded:e.expanded}:"pullrequest"===t&&(o={pullRequestExpanded:e.expanded}),null!=o&&(this.state={...this.state,preferences:{...this.state.preferences,...o}},this._hostIpc.sendCommand(Di,o))}onNavigate(e){this._hostIpc.sendCommand(Oi,{direction:e})}onTogglePin(){this._hostIpc.sendCommand(Ti,{pin:!this.state.pinned})}onPickCommit(e){this._hostIpc.sendCommand(Ei,void 0)}onSearchCommit(e){this._hostIpc.sendCommand(Pi,void 0)}onSwitchMode(e,t){this.state={...this.state,mode:t},this._hostIpc.sendCommand(Ri,{mode:t,repoPath:this.state.commit?.repoPath})}onOpenFileOnRemote(e){this._hostIpc.sendCommand($i,e)}onOpenFile(e){this._hostIpc.sendCommand(xi,e)}onCompareFileWithWorking(e){this._hostIpc.sendCommand(_i,e)}onCompareFileWithPrevious(e){this._hostIpc.sendCommand(Ci,e)}onFileMoreActions(e){this._hostIpc.sendCommand(ki,e)}onStageFile(e){this._hostIpc.sendCommand(Si,e)}onUnstageFile(e){this._hostIpc.sendCommand(Ai,e)}onCommitActions(e){void 0!==this.state?.commit&&this._hostIpc.sendCommand(wi,{action:e.detail.action,alt:e.detail.alt})}};kc([pi({type:Object})],$c.prototype,"state",2),kc([pi({type:Object})],$c.prototype,"explain",2),kc([pi({type:Object})],$c.prototype,"generate",2),kc([ui()],$c.prototype,"draftState",2),kc([ui()],$c.prototype,"isUncommitted",1),kc([ui()],$c.prototype,"isStash",1),$c=kc([ci("gl-commit-details-app")],$c);class CommitDetailsApp extends App{constructor(){super("CommitDetailsApp")}onInitialize(){const e=document.getElementById("app");e.state=this.state,oe.on(e,"state-changed",(e=>{this.state=e.detail,this.setState(this.state)}))}}new CommitDetailsApp;var _c=n.L;export{_c as CommitDetailsApp};