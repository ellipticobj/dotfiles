(()=>{var W=Object.defineProperty;var K=(w,h,x)=>h in w?W(w,h,{enumerable:!0,configurable:!0,writable:!0,value:x}):w[h]=x;var o=(w,h)=>W(w,"name",{value:h,configurable:!0});var v=(w,h,x)=>K(w,typeof h!="symbol"?h+"":h,x);(()=>{var w={32:(y,S,g)=>{y.exports=g(924)},924:(y,S)=>{"use strict";var g;g={value:!0};const E={h1:{proto:o(()=>HTMLHeadingElement,"proto"),attrs:{role:"heading","aria-level":"1"},style:"display: block; font-size: 2em; margin-block-start: 0.67em; margin-block-end: 0.67em; margin-inline-start: 0px; margin-inline-end: 0px; font-weight: bold;"},h2:{proto:o(()=>HTMLHeadingElement,"proto"),attrs:{role:"heading","aria-level":"2"},style:"display: block; font-size: 1.5em; margin-block-start: 0.83em; margin-block-end: 0.83em; margin-inline-start: 0px; margin-inline-end: 0px; font-weight: bold;"},h3:{proto:o(()=>HTMLHeadingElement,"proto"),attrs:{role:"heading","aria-level":"3"},style:"display: block; font-size: 1.17em; margin-block-start: 1em; margin-block-end: 1em; margin-inline-start: 0px; margin-inline-end: 0px; font-weight: bold;"},h4:{proto:o(()=>HTMLHeadingElement,"proto"),attrs:{role:"heading","aria-level":"4"},style:"display: block; margin-block-start: 1.33em; margin-block-end: 1.33em; margin-inline-start: 0px; margin-inline-end: 0px; font-weight: bold;"},h5:{proto:o(()=>HTMLHeadingElement,"proto"),attrs:{role:"heading","aria-level":"5"},style:"display: block; font-size: 0.83em; margin-block-start: 1.67em; margin-block-end: 1.67em; margin-inline-start: 0px; margin-inline-end: 0px; font-weight: bold;"},h6:{proto:o(()=>HTMLHeadingElement,"proto"),attrs:{role:"heading","aria-level":"6"},style:"display: block; font-size: 0.67em; margin-block-start: 2.33em; margin-block-end: 2.33em; margin-inline-start: 0px; margin-inline-end: 0px; font-weight: bold;"},span:{proto:o(()=>HTMLSpanElement,"proto")},pre:{proto:o(()=>HTMLElement,"proto"),style:"display: block; font-family: monospace; white-space: pre; margin: 1em 0; --marp-auto-scaling-white-space: pre;"}},A="data-marp-auto-scaling-wrapper",p="data-marp-auto-scaling-svg",c="data-marp-auto-scaling-container",T=class T extends HTMLElement{constructor(){super();v(this,"container");v(this,"containerSize");v(this,"containerObserver");v(this,"svg");v(this,"svgComputedStyle");v(this,"svgPreserveAspectRatio","xMinYMid meet");v(this,"wrapper");v(this,"wrapperSize");v(this,"wrapperObserver");const s=o(t=>([e])=>{const{width:n,height:r}=e.contentRect;this[t]={width:n,height:r},this.updateSVGRect()},"e");this.attachShadow({mode:"open"}),this.containerObserver=new ResizeObserver(s("containerSize")),this.wrapperObserver=new ResizeObserver((...t)=>{s("wrapperSize")(...t),this.flushSvgDisplay()})}static get observedAttributes(){return["data-downscale-only"]}connectedCallback(){this.shadowRoot.innerHTML=`
<style>
  svg[${p}] { display: block; width: 100%; height: auto; vertical-align: top; }
  span[${c}] { display: table; white-space: var(--marp-auto-scaling-white-space, nowrap); width: max-content; }
</style>
<div ${A}>
  <svg part="svg" ${p}>
    <foreignObject><span ${c}><slot></slot></span></foreignObject>
  </svg>
</div>
    `.split(/\n\s*/).join(""),this.wrapper=this.shadowRoot.querySelector(`div[${A}]`)??void 0;const s=this.svg;this.svg=this.wrapper?.querySelector(`svg[${p}]`)??void 0,this.svg!==s&&(this.svgComputedStyle=this.svg?window.getComputedStyle(this.svg):void 0),this.container=this.svg?.querySelector(`span[${c}]`)??void 0,this.observe()}disconnectedCallback(){this.svg=void 0,this.svgComputedStyle=void 0,this.wrapper=void 0,this.container=void 0,this.observe()}attributeChangedCallback(){this.observe()}flushSvgDisplay(){const{svg:s}=this;s&&(s.style.display="inline",requestAnimationFrame(()=>{s.style.display=""}))}observe(){this.containerObserver.disconnect(),this.wrapperObserver.disconnect(),this.wrapper&&this.wrapperObserver.observe(this.wrapper),this.container&&this.containerObserver.observe(this.container),this.svgComputedStyle&&this.observeSVGStyle(this.svgComputedStyle)}observeSVGStyle(s){const t=o(()=>{const e=(()=>{const n=s.getPropertyValue("--preserve-aspect-ratio");return n?n.trim():`x${(({textAlign:r,direction:l})=>{if(r.endsWith("left"))return"Min";if(r.endsWith("right"))return"Max";if(r==="start"||r==="end"){let d=l==="rtl";return r==="end"&&(d=!d),d?"Max":"Min"}return"Mid"})(s)}YMid meet`})();e!==this.svgPreserveAspectRatio&&(this.svgPreserveAspectRatio=e,this.updateSVGRect()),s===this.svgComputedStyle&&requestAnimationFrame(t)},"t");t()}updateSVGRect(){let s=Math.ceil(this.containerSize?.width??0);const t=Math.ceil(this.containerSize?.height??0);this.dataset.downscaleOnly!==void 0&&(s=Math.max(s,this.wrapperSize?.width??0));const e=this.svg?.querySelector(":scope > foreignObject");if(e?.setAttribute("width",`${s}`),e?.setAttribute("height",`${t}`),this.svg&&(this.svg.setAttribute("viewBox",`0 0 ${s} ${t}`),this.svg.setAttribute("preserveAspectRatio",this.svgPreserveAspectRatio),this.svg.style.height=s<=0||t<=0?"0":""),this.container){const n=this.svgPreserveAspectRatio.toLowerCase();this.container.style.marginLeft=n.startsWith("xmid")||n.startsWith("xmax")?"auto":"0",this.container.style.marginRight=n.startsWith("xmi")?"auto":"0"}}};o(T,"s");let i=T;const m=o((a,{attrs:u={},style:s})=>class extends a{constructor(...t){super(...t);for(const[e,n]of Object.entries(u))this.hasAttribute(e)||this.setAttribute(e,n);this._shadow()}static get observedAttributes(){return["data-auto-scaling"]}connectedCallback(){this._update()}attributeChangedCallback(){this._update()}_shadow(){if(!this.shadowRoot)try{this.attachShadow({mode:"open"})}catch(t){if(!(t instanceof Error&&t.name==="NotSupportedError"))throw t}return this.shadowRoot}_update(){const t=this._shadow();if(t){const e=s?`<style>:host { ${s} }</style>`:"";let n="<slot></slot>";const{autoScaling:r}=this.dataset;r!==void 0&&(n=`<marp-auto-scaling exportparts="svg:auto-scaling" ${r==="downscale-only"?"data-downscale-only":""}>${n}</marp-auto-scaling>`),t.innerHTML=e+n}}},"r");let b;const z=Symbol();let $;const V="marpitSVGPolyfill:setZoomFactor,",C=Symbol(),j=Symbol(),G=o(()=>{const a=navigator.vendor==="Apple Computer, Inc.",u=a?[D]:[],s={then:o(t=>(a?(async()=>{if($===void 0){const e=document.createElement("canvas");e.width=10,e.height=10;const n=e.getContext("2d"),r=new Image(10,10),l=new Promise(d=>{r.addEventListener("load",()=>d())});r.crossOrigin="anonymous",r.src="data:image/svg+xml;charset=utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2210%22%20height%3D%2210%22%20viewBox%3D%220%200%201%201%22%3E%3CforeignObject%20width%3D%221%22%20height%3D%221%22%20requiredExtensions%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxhtml%22%3E%3Cdiv%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxhtml%22%20style%3D%22width%3A%201px%3B%20height%3A%201px%3B%20background%3A%20red%3B%20position%3A%20relative%22%3E%3C%2Fdiv%3E%3C%2FforeignObject%3E%3C%2Fsvg%3E",await l,n.drawImage(r,0,0),$=n.getImageData(5,5,1,1).data[3]<128}return $})().then(e=>{t?.(e?[D]:[])}):t?.([]),s),"then")};return Object.assign(u,s)},"g");let H,O;function D(a){const u=typeof a=="object"&&a.target||document,s=typeof a=="object"?a.zoom:a;window[j]||(Object.defineProperty(window,j,{configurable:!0,value:!0}),document.body.style.zoom=1.0001,document.body.offsetHeight,document.body.style.zoom=1,window.addEventListener("message",({data:e,origin:n})=>{if(n===window.origin)try{if(e&&typeof e=="string"&&e.startsWith(V)){const[,r]=e.split(","),l=Number.parseFloat(r);Number.isNaN(l)||(O=l)}}catch(r){console.error(r)}}));let t=!1;Array.from(u.querySelectorAll("svg[data-marpit-svg]"),e=>{var n,r,l,d;e.style.transform||(e.style.transform="translateZ(0)");const f=s||O||e.currentScale||1;H!==f&&(H=f,t=f);const P=e.getBoundingClientRect(),{length:Z}=e.children;for(let F=0;F<Z;F+=1){const k=e.children[F];if(k.getScreenCTM){const _=k.getScreenCTM();if(_){const Y=(r=(n=k.x)===null||n===void 0?void 0:n.baseVal.value)!==null&&r!==void 0?r:0,U=(d=(l=k.y)===null||l===void 0?void 0:l.baseVal.value)!==null&&d!==void 0?d:0,J=k.children.length;for(let R=0;R<J;R+=1){const N=k.children[R];if(N.tagName==="SECTION"){const{style:q}=N;q.transformOrigin||(q.transformOrigin=`${-Y}px ${-U}px`),q.transform=`scale(${f}) matrix(${_.a}, ${_.b}, ${_.c}, ${_.d}, ${_.e-P.left}, ${_.f-P.top}) translateZ(0.0001px)`;break}}}}}}),t!==!1&&Array.from(u.querySelectorAll("iframe"),({contentWindow:e})=>{e?.postMessage(`${V}${t}`,window.origin==="null"?"*":window.origin)})}o(D,"u");function B({once:a=!1,target:u=document}={}){const s=function(t=document){if(t[C])return t[C];let e=!0;const n=o(()=>{e=!1,delete t[C]},"i");Object.defineProperty(t,C,{configurable:!0,value:n});let r=[],l=!1;(async()=>{try{r=await G()}finally{l=!0}})();const d=o(()=>{for(const f of r)f({target:t});l&&r.length===0||e&&window.requestAnimationFrame(d)},"r");return d(),n}(u);return a?(s(),()=>{}):s}o(B,"v"),H=1,O=void 0;const I=B,M=Symbol(),L=o((a=document)=>{if(typeof window>"u")throw new Error("Marp Core's browser script is valid only in browser context.");if(((e=document)=>{const n=window[z];n||customElements.define("marp-auto-scaling",i);for(const r of Object.keys(E)){const l=`marp-${r}`,d=E[r].proto();(b??(b=!!document.createElement("div",{is:"marp-auto-scaling"}).outerHTML.startsWith("<div is"),b))&&d!==HTMLElement?n||customElements.define(l,m(d,{style:E[r].style}),{extends:r}):(n||customElements.define(l,m(HTMLElement,E[r])),e.querySelectorAll(`${r}[is="${l}"]`).forEach(f=>{f.outerHTML=f.outerHTML.replace(new RegExp(`^<${r}`,"i"),`<${l}`).replace(new RegExp(`</${r}>$`,"i"),`</${l}>`)}))}window[z]=!0})(a),a[M])return a[M];const u=B({target:a}),s=o(()=>{u(),delete a[M]},"n"),t=Object.assign(s,{cleanup:s,update:o(()=>L(a),"update")});return Object.defineProperty(a,M,{configurable:!0,value:t}),t},"y");S.browser=L,g=L,g=I}},h={};function x(y){var S=h[y];if(S!==void 0)return S.exports;var g=h[y]={exports:{}};return w[y](g,g.exports,x),g.exports}o(x,"__webpack_require__");var Q={};(()=>{"use strict";var y=x(32);function S(){let p,c;const i=o(()=>{const m=document.getElementById("__marp-vscode"),b=!!m;p!==b?(document.body.classList.toggle("marp-vscode",b),b?c=(0,y.browser)():(c?.cleanup(),c=void 0),p=b):b&&c?.update(),p?(m&&g(m),E()):A()},"updateCallback");window.addEventListener("load",()=>window.setTimeout(i,100)),window.addEventListener("vscode.markdown.updateContent",i),i()}o(S,"preview");const g=o(p=>{p.querySelectorAll("[is]").forEach(c=>{if(c.nodeName.includes("-")||document.createElement(c.nodeName).constructor!==c.constructor)return;const{outerHTML:m}=c;c.outerHTML=m,console.debug("[marp-vscode] Custom element has been upgraded forcibly:",m.slice(0,m.indexOf(">")+1||void 0))})},"forceUpgradeCustomElements"),E=o(()=>{const p=document.querySelectorAll("style:not(#__marp-vscode-style,#_defaultStyles,[data-marp-vscode-body])"),c=document.querySelectorAll('link[rel="stylesheet"][href]:not([href*="marp-vscode"])');p.forEach(i=>{i.closest("#__marp-vscode")||(i.dataset.marpVscodeBody=i.textContent??"",i.textContent="")}),c.forEach(i=>{if(i.closest("#__marp-vscode"))return;const{href:m}=i;i.dataset.marpVscodeHref=m,i.removeAttribute("href")})},"removeStyles"),A=o(()=>{const p=document.querySelectorAll("style[data-marp-vscode-body]"),c=document.querySelectorAll("link[data-marp-vscode-href]");p.forEach(i=>{i.textContent=i.dataset.marpVscodeBody||"",delete i.dataset.marpVscodeBody}),c.forEach(i=>{i.href=i.dataset.marpVscodeHref||"",delete i.dataset.marpVscodeHref})},"restoreStyles");S()})()})();})();