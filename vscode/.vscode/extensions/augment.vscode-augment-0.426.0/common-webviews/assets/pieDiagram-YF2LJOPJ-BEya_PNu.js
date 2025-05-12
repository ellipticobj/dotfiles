import{p as L}from"./chunk-TMUBEWPD-B4vZXjge.js";import{X as y,O,aF as N,D as P,q as V,r as q,s as I,g as X,c as _,b as G,_ as c,l as F,x as H,d as J,E as K,I as Q,a5 as U,k as Y}from"./AugmentMessage-DPQ5COF7.js";import{p as Z}from"./gitGraph-YCYPL57B-rWCzDP-q.js";import{d as B}from"./arc-BuK-wvxU.js";import{o as tt}from"./ordinal-_rw2EY4v.js";import"./index-Bg5k1fBH.js";import"./github-DJRJsxRC.js";import"./augment-logo-rit98iY0.js";import"./TextTooltipAugment-BspEVawc.js";import"./IconButtonAugment-CMGBc7C3.js";import"./ButtonAugment-CSwi-JVg.js";import"./Content-DlSDhH-b.js";import"./globals-D0QH3NT1.js";import"./circle-backslash-DcaYy8Cz.js";import"./folder-opened-Bm8IVIHF.js";import"./file-paths-BcSg4gks.js";import"./pen-to-square-DVpukHrw.js";import"./CollapseButtonAugment-BGvJcqaG.js";import"./toggleHighContrast-CwIv4U26.js";import"./preload-helper-Dv6uf1Os.js";import"./keypress-DD1aQVr0.js";import"./await_block-mV9LhbR_.js";import"./expand-DPRXx-qB.js";import"./index-CqmTMtlA.js";import"./ellipsis-D4o8IzPJ.js";import"./IconFilePath-Db9jFTUr.js";import"./LanguageIcon-elXUw7jw.js";import"./next-edit-types-904A5ehg.js";import"./MaterialIcon-BhPUHxOM.js";import"./mcp-logo-BTaOefqG.js";import"./play-B7RwZVmm.js";import"./terminal-BosCzoBy.js";import"./_baseUniq-DK14j0vV.js";import"./_basePickBy-CTcDp8vz.js";import"./clone-SaRvqQLB.js";import"./init-g68aIKmP.js";function et(t,a){return a<t?-1:a>t?1:a>=t?0:NaN}function at(t){return t}var W=P.pie,R={sections:new Map,showData:!1,config:W},M=R.sections,z=R.showData,nt=structuredClone(W),j={getConfig:c(()=>structuredClone(nt),"getConfig"),clear:c(()=>{M=new Map,z=R.showData,H()},"clear"),setDiagramTitle:V,getDiagramTitle:q,setAccTitle:I,getAccTitle:X,setAccDescription:_,getAccDescription:G,addSection:c(({label:t,value:a})=>{M.has(t)||(M.set(t,a),F.debug(`added new section: ${t}, with value: ${a}`))},"addSection"),getSections:c(()=>M,"getSections"),setShowData:c(t=>{z=t},"setShowData"),getShowData:c(()=>z,"getShowData")},rt=c((t,a)=>{L(t,a),a.setShowData(t.showData),t.sections.map(a.addSection)},"populateDb"),it={parse:c(async t=>{const a=await Z("pie",t);F.debug(a),rt(a,j)},"parse")},ot=c(t=>`
  .pieCircle{
    stroke: ${t.pieStrokeColor};
    stroke-width : ${t.pieStrokeWidth};
    opacity : ${t.pieOpacity};
  }
  .pieOuterCircle{
    stroke: ${t.pieOuterStrokeColor};
    stroke-width: ${t.pieOuterStrokeWidth};
    fill: none;
  }
  .pieTitleText {
    text-anchor: middle;
    font-size: ${t.pieTitleTextSize};
    fill: ${t.pieTitleTextColor};
    font-family: ${t.fontFamily};
  }
  .slice {
    font-family: ${t.fontFamily};
    fill: ${t.pieSectionTextColor};
    font-size:${t.pieSectionTextSize};
    // fill: white;
  }
  .legend text {
    fill: ${t.pieLegendTextColor};
    font-family: ${t.fontFamily};
    font-size: ${t.pieLegendTextSize};
  }
`,"getStyles"),lt=c(t=>{const a=[...t.entries()].map(l=>({label:l[0],value:l[1]})).sort((l,u)=>u.value-l.value);return function(){var l=at,u=et,m=null,w=y(0),S=y(O),$=y(0);function n(e){var r,s,i,A,g,p=(e=N(e)).length,v=0,D=new Array(p),d=new Array(p),f=+w.apply(this,arguments),C=Math.min(O,Math.max(-O,S.apply(this,arguments)-f)),h=Math.min(Math.abs(C)/p,$.apply(this,arguments)),b=h*(C<0?-1:1);for(r=0;r<p;++r)(g=d[D[r]=r]=+l(e[r],r,e))>0&&(v+=g);for(u!=null?D.sort(function(x,T){return u(d[x],d[T])}):m!=null&&D.sort(function(x,T){return m(e[x],e[T])}),r=0,i=v?(C-p*b)/v:0;r<p;++r,f=A)s=D[r],A=f+((g=d[s])>0?g*i:0)+b,d[s]={data:e[s],index:r,value:g,startAngle:f,endAngle:A,padAngle:h};return d}return n.value=function(e){return arguments.length?(l=typeof e=="function"?e:y(+e),n):l},n.sortValues=function(e){return arguments.length?(u=e,m=null,n):u},n.sort=function(e){return arguments.length?(m=e,u=null,n):m},n.startAngle=function(e){return arguments.length?(w=typeof e=="function"?e:y(+e),n):w},n.endAngle=function(e){return arguments.length?(S=typeof e=="function"?e:y(+e),n):S},n.padAngle=function(e){return arguments.length?($=typeof e=="function"?e:y(+e),n):$},n}().value(l=>l.value)(a)},"createPieArcs"),Xt={parser:it,db:j,renderer:{draw:c((t,a,l,u)=>{F.debug(`rendering pie chart
`+t);const m=u.db,w=J(),S=K(m.getConfig(),w.pie),$=18,n=450,e=n,r=Q(a),s=r.append("g");s.attr("transform","translate(225,225)");const{themeVariables:i}=w;let[A]=U(i.pieOuterStrokeWidth);A??(A=2);const g=S.textPosition,p=Math.min(e,n)/2-40,v=B().innerRadius(0).outerRadius(p),D=B().innerRadius(p*g).outerRadius(p*g);s.append("circle").attr("cx",0).attr("cy",0).attr("r",p+A/2).attr("class","pieOuterCircle");const d=m.getSections(),f=lt(d),C=[i.pie1,i.pie2,i.pie3,i.pie4,i.pie5,i.pie6,i.pie7,i.pie8,i.pie9,i.pie10,i.pie11,i.pie12],h=tt(C);s.selectAll("mySlices").data(f).enter().append("path").attr("d",v).attr("fill",o=>h(o.data.label)).attr("class","pieCircle");let b=0;d.forEach(o=>{b+=o}),s.selectAll("mySlices").data(f).enter().append("text").text(o=>(o.data.value/b*100).toFixed(0)+"%").attr("transform",o=>"translate("+D.centroid(o)+")").style("text-anchor","middle").attr("class","slice"),s.append("text").text(m.getDiagramTitle()).attr("x",0).attr("y",-200).attr("class","pieTitleText");const x=s.selectAll(".legend").data(h.domain()).enter().append("g").attr("class","legend").attr("transform",(o,k)=>"translate(216,"+(22*k-22*h.domain().length/2)+")");x.append("rect").attr("width",$).attr("height",$).style("fill",h).style("stroke",h),x.data(f).append("text").attr("x",22).attr("y",14).text(o=>{const{label:k,value:E}=o.data;return m.getShowData()?`${k} [${E}]`:k});const T=512+Math.max(...x.selectAll("text").nodes().map(o=>(o==null?void 0:o.getBoundingClientRect().width)??0));r.attr("viewBox",`0 0 ${T} 450`),Y(r,n,T,S.useMaxWidth)},"draw")},styles:ot};export{Xt as diagram};
