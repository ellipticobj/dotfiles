import{p as B}from"./chunk-TMUBEWPD-Ddy-OmTE.js";import{D as P,s as S,g as W,q as F,r as z,b as T,c as D,_ as n,l as u,E as $,F as v,x as E,I as A,k as R}from"./AugmentMessage-CUvtO3ab.js";import{p as Y}from"./gitGraph-YCYPL57B-B4qEvSZb.js";import"./preload-helper-8y40NF14.js";import"./BadgeRoot-Bxvga7vW.js";import"./SpinnerAugment-ChwE5SRh.js";import"./augment-logo-tV95NmVy.js";import"./Content-_q7Il3ii.js";import"./IconButtonAugment-KUm-Bxhn.js";import"./monaco-theme-Cx4T9Rrk.js";import"./globals-D0QH3NT1.js";import"./pencil-2-Du8hqF6O.js";import"./folder-opened-BCGvC3z_.js";import"./TextTooltipAugment-zwhKFpim.js";import"./index-ezr1Tc1S.js";import"./caret-sort-CGHWvXwI.js";import"./Markdown-4x72PPSF.js";import"./toggleHighContrast-Bi2T14tZ.js";import"./SimpleMonaco-n6dxKFKK.js";import"./keypress-DD1aQVr0.js";import"./await_block-B_oVoKTG.js";import"./reload-Cpz24P1L.js";import"./MaterialIcon--GPW7Gtv.js";import"./supabase-BWy_jAj1.js";import"./play-BqwD5PN3.js";import"./LanguageIcon-C7MJ6pn7.js";import"./_baseUniq-CXNxv0nu.js";import"./_basePickBy-DEzB-d8m.js";import"./clone-2aOAntWV.js";var w={packet:[]},x=structuredClone(w),H=P.packet,I=n(()=>{const t=$({...H,...v().packet});return t.showBits&&(t.paddingY+=10),t},"getConfig"),L=n(()=>x.packet,"getPacket"),f={pushWord:n(t=>{t.length>0&&x.packet.push(t)},"pushWord"),getPacket:L,getConfig:I,clear:n(()=>{E(),x=structuredClone(w)},"clear"),setAccTitle:S,getAccTitle:W,setDiagramTitle:F,getDiagramTitle:z,getAccDescription:T,setAccDescription:D},j=n(t=>{B(t,f);let e=-1,o=[],l=1;const{bitsPerRow:s}=f.getConfig();for(let{start:a,end:r,label:d}of t.blocks){if(r&&r<a)throw new Error(`Packet block ${a} - ${r} is invalid. End must be greater than start.`);if(a!==e+1)throw new Error(`Packet block ${a} - ${r??a} is not contiguous. It should start from ${e+1}.`);for(e=r??a,u.debug(`Packet block ${a} - ${e} with label ${d}`);o.length<=s+1&&f.getPacket().length<1e4;){const[g,c]=q({start:a,end:r,label:d},l,s);if(o.push(g),g.end+1===l*s&&(f.pushWord(o),o=[],l++),!c)break;({start:a,end:r,label:d}=c)}}f.pushWord(o)},"populate"),q=n((t,e,o)=>{if(t.end===void 0&&(t.end=t.start),t.start>t.end)throw new Error(`Block start ${t.start} is greater than block end ${t.end}.`);return t.end+1<=e*o?[t,void 0]:[{start:t.start,end:e*o-1,label:t.label},{start:e*o,end:t.end,label:t.label}]},"getNextFittingBlock"),M={parse:n(async t=>{const e=await Y("packet",t);u.debug(e),j(e)},"parse")},N=n((t,e,o,l)=>{const s=l.db,a=s.getConfig(),{rowHeight:r,paddingY:d,bitWidth:g,bitsPerRow:c}=a,h=s.getPacket(),i=s.getDiagramTitle(),k=r+d,p=k*(h.length+1)-(i?0:r),b=g*c+2,m=A(e);m.attr("viewbox",`0 0 ${b} ${p}`),R(m,p,b,a.useMaxWidth);for(const[y,C]of h.entries())X(m,C,y,a);m.append("text").text(i).attr("x",b/2).attr("y",p-k/2).attr("dominant-baseline","middle").attr("text-anchor","middle").attr("class","packetTitle")},"draw"),X=n((t,e,o,{rowHeight:l,paddingX:s,paddingY:a,bitWidth:r,bitsPerRow:d,showBits:g})=>{const c=t.append("g"),h=o*(l+a)+a;for(const i of e){const k=i.start%d*r+1,p=(i.end-i.start+1)*r-s;if(c.append("rect").attr("x",k).attr("y",h).attr("width",p).attr("height",l).attr("class","packetBlock"),c.append("text").attr("x",k+p/2).attr("y",h+l/2).attr("class","packetLabel").attr("dominant-baseline","middle").attr("text-anchor","middle").text(i.label),!g)continue;const b=i.end===i.start,m=h-2;c.append("text").attr("x",k+(b?p/2:0)).attr("y",m).attr("class","packetByte start").attr("dominant-baseline","auto").attr("text-anchor",b?"middle":"start").text(i.start),b||c.append("text").attr("x",k+p).attr("y",m).attr("class","packetByte end").attr("dominant-baseline","auto").attr("text-anchor","end").text(i.end)}},"drawWord"),_={byteFontSize:"10px",startByteColor:"black",endByteColor:"black",labelColor:"black",labelFontSize:"12px",titleColor:"black",titleFontSize:"14px",blockStrokeColor:"black",blockStrokeWidth:"1",blockFillColor:"#efefef"},wt={parser:M,db:f,renderer:{draw:N},styles:n(({packet:t}={})=>{const e=$(_,t);return`
	.packetByte {
		font-size: ${e.byteFontSize};
	}
	.packetByte.start {
		fill: ${e.startByteColor};
	}
	.packetByte.end {
		fill: ${e.endByteColor};
	}
	.packetLabel {
		fill: ${e.labelColor};
		font-size: ${e.labelFontSize};
	}
	.packetTitle {
		fill: ${e.titleColor};
		font-size: ${e.titleFontSize};
	}
	.packetBlock {
		stroke: ${e.blockStrokeColor};
		stroke-width: ${e.blockStrokeWidth};
		fill: ${e.blockFillColor};
	}
	`},"styles")};export{wt as diagram};
