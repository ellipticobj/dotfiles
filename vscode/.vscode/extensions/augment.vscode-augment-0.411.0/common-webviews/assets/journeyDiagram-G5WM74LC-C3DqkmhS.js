import{d as ut,f as pt,g as st,b as yt}from"./chunk-ASOPGD6M-D6OriWU6.js";import{_ as s,d as I,q as dt,r as ft,s as gt,g as mt,c as xt,b as kt,x as bt,j as J,k as _t}from"./AugmentMessage-CUvtO3ab.js";import{d as K}from"./arc-CowIGEGo.js";import"./preload-helper-8y40NF14.js";import"./BadgeRoot-Bxvga7vW.js";import"./SpinnerAugment-ChwE5SRh.js";import"./augment-logo-tV95NmVy.js";import"./Content-_q7Il3ii.js";import"./IconButtonAugment-KUm-Bxhn.js";import"./monaco-theme-Cx4T9Rrk.js";import"./globals-D0QH3NT1.js";import"./pencil-2-Du8hqF6O.js";import"./folder-opened-BCGvC3z_.js";import"./TextTooltipAugment-zwhKFpim.js";import"./index-ezr1Tc1S.js";import"./caret-sort-CGHWvXwI.js";import"./Markdown-4x72PPSF.js";import"./toggleHighContrast-Bi2T14tZ.js";import"./SimpleMonaco-n6dxKFKK.js";import"./keypress-DD1aQVr0.js";import"./await_block-B_oVoKTG.js";import"./reload-Cpz24P1L.js";import"./MaterialIcon--GPW7Gtv.js";import"./supabase-BWy_jAj1.js";import"./play-BqwD5PN3.js";import"./LanguageIcon-C7MJ6pn7.js";var Y=function(){var n=s(function(e,p,a,u){for(a=a||{},u=e.length;u--;a[e[u]]=p);return a},"o"),t=[6,8,10,11,12,14,16,17,18],r=[1,9],l=[1,10],i=[1,11],o=[1,12],h=[1,13],d=[1,14],y={trace:s(function(){},"trace"),yy:{},symbols_:{error:2,start:3,journey:4,document:5,EOF:6,line:7,SPACE:8,statement:9,NEWLINE:10,title:11,acc_title:12,acc_title_value:13,acc_descr:14,acc_descr_value:15,acc_descr_multiline_value:16,section:17,taskName:18,taskData:19,$accept:0,$end:1},terminals_:{2:"error",4:"journey",6:"EOF",8:"SPACE",10:"NEWLINE",11:"title",12:"acc_title",13:"acc_title_value",14:"acc_descr",15:"acc_descr_value",16:"acc_descr_multiline_value",17:"section",18:"taskName",19:"taskData"},productions_:[0,[3,3],[5,0],[5,2],[7,2],[7,1],[7,1],[7,1],[9,1],[9,2],[9,2],[9,1],[9,1],[9,2]],performAction:s(function(e,p,a,u,f,c,$){var x=c.length-1;switch(f){case 1:return c[x-1];case 2:case 6:case 7:this.$=[];break;case 3:c[x-1].push(c[x]),this.$=c[x-1];break;case 4:case 5:this.$=c[x];break;case 8:u.setDiagramTitle(c[x].substr(6)),this.$=c[x].substr(6);break;case 9:this.$=c[x].trim(),u.setAccTitle(this.$);break;case 10:case 11:this.$=c[x].trim(),u.setAccDescription(this.$);break;case 12:u.addSection(c[x].substr(8)),this.$=c[x].substr(8);break;case 13:u.addTask(c[x-1],c[x]),this.$="task"}},"anonymous"),table:[{3:1,4:[1,2]},{1:[3]},n(t,[2,2],{5:3}),{6:[1,4],7:5,8:[1,6],9:7,10:[1,8],11:r,12:l,14:i,16:o,17:h,18:d},n(t,[2,7],{1:[2,1]}),n(t,[2,3]),{9:15,11:r,12:l,14:i,16:o,17:h,18:d},n(t,[2,5]),n(t,[2,6]),n(t,[2,8]),{13:[1,16]},{15:[1,17]},n(t,[2,11]),n(t,[2,12]),{19:[1,18]},n(t,[2,4]),n(t,[2,9]),n(t,[2,10]),n(t,[2,13])],defaultActions:{},parseError:s(function(e,p){if(!p.recoverable){var a=new Error(e);throw a.hash=p,a}this.trace(e)},"parseError"),parse:s(function(e){var p=this,a=[0],u=[],f=[null],c=[],$=this.table,x="",O=0,X=0,lt=c.slice.call(arguments,1),k=Object.create(this.lexer),S={yy:{}};for(var N in this.yy)Object.prototype.hasOwnProperty.call(this.yy,N)&&(S.yy[N]=this.yy[N]);k.setInput(e,S.yy),S.yy.lexer=k,S.yy.parser=this,k.yylloc===void 0&&(k.yylloc={});var R=k.yylloc;c.push(R);var ht=k.options&&k.options.ranges;function G(){var v;return typeof(v=u.pop()||k.lex()||1)!="number"&&(v instanceof Array&&(v=(u=v).pop()),v=p.symbols_[v]||v),v}typeof S.yy.parseError=="function"?this.parseError=S.yy.parseError:this.parseError=Object.getPrototypeOf(this).parseError,s(function(v){a.length=a.length-2*v,f.length=f.length-v,c.length=c.length-v},"popStack"),s(G,"lex");for(var b,E,_,U,F,T,H,B,P={};;){if(E=a[a.length-1],this.defaultActions[E]?_=this.defaultActions[E]:(b==null&&(b=G()),_=$[E]&&$[E][b]),_===void 0||!_.length||!_[0]){var Z="";for(F in B=[],$[E])this.terminals_[F]&&F>2&&B.push("'"+this.terminals_[F]+"'");Z=k.showPosition?"Parse error on line "+(O+1)+`:
`+k.showPosition()+`
Expecting `+B.join(", ")+", got '"+(this.terminals_[b]||b)+"'":"Parse error on line "+(O+1)+": Unexpected "+(b==1?"end of input":"'"+(this.terminals_[b]||b)+"'"),this.parseError(Z,{text:k.match,token:this.terminals_[b]||b,line:k.yylineno,loc:R,expected:B})}if(_[0]instanceof Array&&_.length>1)throw new Error("Parse Error: multiple actions possible at state: "+E+", token: "+b);switch(_[0]){case 1:a.push(b),f.push(k.yytext),c.push(k.yylloc),a.push(_[1]),b=null,X=k.yyleng,x=k.yytext,O=k.yylineno,R=k.yylloc;break;case 2:if(T=this.productions_[_[1]][1],P.$=f[f.length-T],P._$={first_line:c[c.length-(T||1)].first_line,last_line:c[c.length-1].last_line,first_column:c[c.length-(T||1)].first_column,last_column:c[c.length-1].last_column},ht&&(P._$.range=[c[c.length-(T||1)].range[0],c[c.length-1].range[1]]),(U=this.performAction.apply(P,[x,X,O,S.yy,_[1],f,c].concat(lt)))!==void 0)return U;T&&(a=a.slice(0,-1*T*2),f=f.slice(0,-1*T),c=c.slice(0,-1*T)),a.push(this.productions_[_[1]][0]),f.push(P.$),c.push(P._$),H=$[a[a.length-2]][a[a.length-1]],a.push(H);break;case 3:return!0}}return!0},"parse")},m=function(){return{EOF:1,parseError:s(function(e,p){if(!this.yy.parser)throw new Error(e);this.yy.parser.parseError(e,p)},"parseError"),setInput:s(function(e,p){return this.yy=p||this.yy||{},this._input=e,this._more=this._backtrack=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this},"setInput"),input:s(function(){var e=this._input[0];return this.yytext+=e,this.yyleng++,this.offset++,this.match+=e,this.matched+=e,e.match(/(?:\r\n?|\n).*/g)?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),e},"input"),unput:s(function(e){var p=e.length,a=e.split(/(?:\r\n?|\n)/g);this._input=e+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-p),this.offset-=p;var u=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),a.length-1&&(this.yylineno-=a.length-1);var f=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:a?(a.length===u.length?this.yylloc.first_column:0)+u[u.length-a.length].length-a[0].length:this.yylloc.first_column-p},this.options.ranges&&(this.yylloc.range=[f[0],f[0]+this.yyleng-p]),this.yyleng=this.yytext.length,this},"unput"),more:s(function(){return this._more=!0,this},"more"),reject:s(function(){return this.options.backtrack_lexer?(this._backtrack=!0,this):this.parseError("Lexical error on line "+(this.yylineno+1)+`. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).
`+this.showPosition(),{text:"",token:null,line:this.yylineno})},"reject"),less:s(function(e){this.unput(this.match.slice(e))},"less"),pastInput:s(function(){var e=this.matched.substr(0,this.matched.length-this.match.length);return(e.length>20?"...":"")+e.substr(-20).replace(/\n/g,"")},"pastInput"),upcomingInput:s(function(){var e=this.match;return e.length<20&&(e+=this._input.substr(0,20-e.length)),(e.substr(0,20)+(e.length>20?"...":"")).replace(/\n/g,"")},"upcomingInput"),showPosition:s(function(){var e=this.pastInput(),p=new Array(e.length+1).join("-");return e+this.upcomingInput()+`
`+p+"^"},"showPosition"),test_match:s(function(e,p){var a,u,f;if(this.options.backtrack_lexer&&(f={yylineno:this.yylineno,yylloc:{first_line:this.yylloc.first_line,last_line:this.last_line,first_column:this.yylloc.first_column,last_column:this.yylloc.last_column},yytext:this.yytext,match:this.match,matches:this.matches,matched:this.matched,yyleng:this.yyleng,offset:this.offset,_more:this._more,_input:this._input,yy:this.yy,conditionStack:this.conditionStack.slice(0),done:this.done},this.options.ranges&&(f.yylloc.range=this.yylloc.range.slice(0))),(u=e[0].match(/(?:\r\n?|\n).*/g))&&(this.yylineno+=u.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:u?u[u.length-1].length-u[u.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+e[0].length},this.yytext+=e[0],this.match+=e[0],this.matches=e,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._backtrack=!1,this._input=this._input.slice(e[0].length),this.matched+=e[0],a=this.performAction.call(this,this.yy,this,p,this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),a)return a;if(this._backtrack){for(var c in f)this[c]=f[c];return!1}return!1},"test_match"),next:s(function(){if(this.done)return this.EOF;var e,p,a,u;this._input||(this.done=!0),this._more||(this.yytext="",this.match="");for(var f=this._currentRules(),c=0;c<f.length;c++)if((a=this._input.match(this.rules[f[c]]))&&(!p||a[0].length>p[0].length)){if(p=a,u=c,this.options.backtrack_lexer){if((e=this.test_match(a,f[c]))!==!1)return e;if(this._backtrack){p=!1;continue}return!1}if(!this.options.flex)break}return p?(e=this.test_match(p,f[u]))!==!1&&e:this._input===""?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+`. Unrecognized text.
`+this.showPosition(),{text:"",token:null,line:this.yylineno})},"next"),lex:s(function(){var e=this.next();return e||this.lex()},"lex"),begin:s(function(e){this.conditionStack.push(e)},"begin"),popState:s(function(){return this.conditionStack.length-1>0?this.conditionStack.pop():this.conditionStack[0]},"popState"),_currentRules:s(function(){return this.conditionStack.length&&this.conditionStack[this.conditionStack.length-1]?this.conditions[this.conditionStack[this.conditionStack.length-1]].rules:this.conditions.INITIAL.rules},"_currentRules"),topState:s(function(e){return(e=this.conditionStack.length-1-Math.abs(e||0))>=0?this.conditionStack[e]:"INITIAL"},"topState"),pushState:s(function(e){this.begin(e)},"pushState"),stateStackSize:s(function(){return this.conditionStack.length},"stateStackSize"),options:{"case-insensitive":!0},performAction:s(function(e,p,a,u){switch(a){case 0:case 1:case 3:case 4:break;case 2:return 10;case 5:return 4;case 6:return 11;case 7:return this.begin("acc_title"),12;case 8:return this.popState(),"acc_title_value";case 9:return this.begin("acc_descr"),14;case 10:return this.popState(),"acc_descr_value";case 11:this.begin("acc_descr_multiline");break;case 12:this.popState();break;case 13:return"acc_descr_multiline_value";case 14:return 17;case 15:return 18;case 16:return 19;case 17:return":";case 18:return 6;case 19:return"INVALID"}},"anonymous"),rules:[/^(?:%(?!\{)[^\n]*)/i,/^(?:[^\}]%%[^\n]*)/i,/^(?:[\n]+)/i,/^(?:\s+)/i,/^(?:#[^\n]*)/i,/^(?:journey\b)/i,/^(?:title\s[^#\n;]+)/i,/^(?:accTitle\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*\{\s*)/i,/^(?:[\}])/i,/^(?:[^\}]*)/i,/^(?:section\s[^#:\n;]+)/i,/^(?:[^#:\n;]+)/i,/^(?::[^#\n;]+)/i,/^(?::)/i,/^(?:$)/i,/^(?:.)/i],conditions:{acc_descr_multiline:{rules:[12,13],inclusive:!1},acc_descr:{rules:[10],inclusive:!1},acc_title:{rules:[8],inclusive:!1},INITIAL:{rules:[0,1,2,3,4,5,6,7,9,11,14,15,16,17,18,19],inclusive:!0}}}}();function g(){this.yy={}}return y.lexer=m,s(g,"Parser"),g.prototype=y,y.Parser=g,new g}();Y.parser=Y;var vt=Y,C="",q=[],j=[],V=[],wt=s(function(){q.length=0,j.length=0,C="",V.length=0,bt()},"clear"),$t=s(function(n){C=n,q.push(n)},"addSection"),Tt=s(function(){return q},"getSections"),Mt=s(function(){let n=Q(),t=0;for(;!n&&t<100;)n=Q(),t++;return j.push(...V),j},"getTasks"),St=s(function(){const n=[];return j.forEach(t=>{t.people&&n.push(...t.people)}),[...new Set(n)].sort()},"updateActors"),Et=s(function(n,t){const r=t.substr(1).split(":");let l=0,i=[];r.length===1?(l=Number(r[0]),i=[]):(l=Number(r[0]),i=r[1].split(","));const o=i.map(d=>d.trim()),h={section:C,type:C,people:o,task:n,score:l};V.push(h)},"addTask"),At=s(function(n){const t={section:C,type:C,description:n,task:n,classes:[]};j.push(t)},"addTaskOrg"),Q=s(function(){const n=s(function(r){return V[r].processed},"compileTask");let t=!0;for(const[r,l]of V.entries())n(r),t=t&&l.processed;return t},"compileTasks"),It=s(function(){return St()},"getActors"),tt={getConfig:s(()=>I().journey,"getConfig"),clear:wt,setDiagramTitle:dt,getDiagramTitle:ft,setAccTitle:gt,getAccTitle:mt,setAccDescription:xt,getAccDescription:kt,addSection:$t,getSections:Tt,getTasks:Mt,addTask:Et,addTaskOrg:At,getActors:It},Pt=s(n=>`.label {
    font-family: 'trebuchet ms', verdana, arial, sans-serif;
    font-family: var(--mermaid-font-family);
    color: ${n.textColor};
  }
  .mouth {
    stroke: #666;
  }

  line {
    stroke: ${n.textColor}
  }

  .legend {
    fill: ${n.textColor};
  }

  .label text {
    fill: #333;
  }
  .label {
    color: ${n.textColor}
  }

  .face {
    ${n.faceColor?`fill: ${n.faceColor}`:"fill: #FFF8DC"};
    stroke: #999;
  }

  .node rect,
  .node circle,
  .node ellipse,
  .node polygon,
  .node path {
    fill: ${n.mainBkg};
    stroke: ${n.nodeBorder};
    stroke-width: 1px;
  }

  .node .label {
    text-align: center;
  }
  .node.clickable {
    cursor: pointer;
  }

  .arrowheadPath {
    fill: ${n.arrowheadColor};
  }

  .edgePath .path {
    stroke: ${n.lineColor};
    stroke-width: 1.5px;
  }

  .flowchart-link {
    stroke: ${n.lineColor};
    fill: none;
  }

  .edgeLabel {
    background-color: ${n.edgeLabelBackground};
    rect {
      opacity: 0.5;
    }
    text-align: center;
  }

  .cluster rect {
  }

  .cluster text {
    fill: ${n.titleColor};
  }

  div.mermaidTooltip {
    position: absolute;
    text-align: center;
    max-width: 200px;
    padding: 2px;
    font-family: 'trebuchet ms', verdana, arial, sans-serif;
    font-family: var(--mermaid-font-family);
    font-size: 12px;
    background: ${n.tertiaryColor};
    border: 1px solid ${n.border2};
    border-radius: 2px;
    pointer-events: none;
    z-index: 100;
  }

  .task-type-0, .section-type-0  {
    ${n.fillType0?`fill: ${n.fillType0}`:""};
  }
  .task-type-1, .section-type-1  {
    ${n.fillType0?`fill: ${n.fillType1}`:""};
  }
  .task-type-2, .section-type-2  {
    ${n.fillType0?`fill: ${n.fillType2}`:""};
  }
  .task-type-3, .section-type-3  {
    ${n.fillType0?`fill: ${n.fillType3}`:""};
  }
  .task-type-4, .section-type-4  {
    ${n.fillType0?`fill: ${n.fillType4}`:""};
  }
  .task-type-5, .section-type-5  {
    ${n.fillType0?`fill: ${n.fillType5}`:""};
  }
  .task-type-6, .section-type-6  {
    ${n.fillType0?`fill: ${n.fillType6}`:""};
  }
  .task-type-7, .section-type-7  {
    ${n.fillType0?`fill: ${n.fillType7}`:""};
  }

  .actor-0 {
    ${n.actor0?`fill: ${n.actor0}`:""};
  }
  .actor-1 {
    ${n.actor1?`fill: ${n.actor1}`:""};
  }
  .actor-2 {
    ${n.actor2?`fill: ${n.actor2}`:""};
  }
  .actor-3 {
    ${n.actor3?`fill: ${n.actor3}`:""};
  }
  .actor-4 {
    ${n.actor4?`fill: ${n.actor4}`:""};
  }
  .actor-5 {
    ${n.actor5?`fill: ${n.actor5}`:""};
  }
`,"getStyles"),W=s(function(n,t){return ut(n,t)},"drawRect"),Ct=s(function(n,t){const l=n.append("circle").attr("cx",t.cx).attr("cy",t.cy).attr("class","face").attr("r",15).attr("stroke-width",2).attr("overflow","visible"),i=n.append("g");function o(y){const m=K().startAngle(Math.PI/2).endAngle(Math.PI/2*3).innerRadius(7.5).outerRadius(6.8181818181818175);y.append("path").attr("class","mouth").attr("d",m).attr("transform","translate("+t.cx+","+(t.cy+2)+")")}function h(y){const m=K().startAngle(3*Math.PI/2).endAngle(Math.PI/2*5).innerRadius(7.5).outerRadius(6.8181818181818175);y.append("path").attr("class","mouth").attr("d",m).attr("transform","translate("+t.cx+","+(t.cy+7)+")")}function d(y){y.append("line").attr("class","mouth").attr("stroke",2).attr("x1",t.cx-5).attr("y1",t.cy+7).attr("x2",t.cx+5).attr("y2",t.cy+7).attr("class","mouth").attr("stroke-width","1px").attr("stroke","#666")}return i.append("circle").attr("cx",t.cx-5).attr("cy",t.cy-5).attr("r",1.5).attr("stroke-width",2).attr("fill","#666").attr("stroke","#666"),i.append("circle").attr("cx",t.cx+5).attr("cy",t.cy-5).attr("r",1.5).attr("stroke-width",2).attr("fill","#666").attr("stroke","#666"),s(o,"smile"),s(h,"sad"),s(d,"ambivalent"),t.score>3?o(i):t.score<3?h(i):d(i),l},"drawFace"),at=s(function(n,t){const r=n.append("circle");return r.attr("cx",t.cx),r.attr("cy",t.cy),r.attr("class","actor-"+t.pos),r.attr("fill",t.fill),r.attr("stroke",t.stroke),r.attr("r",t.r),r.class!==void 0&&r.attr("class",r.class),t.title!==void 0&&r.append("title").text(t.title),r},"drawCircle"),rt=s(function(n,t){return pt(n,t)},"drawText"),jt=s(function(n,t){function r(i,o,h,d,y){return i+","+o+" "+(i+h)+","+o+" "+(i+h)+","+(o+d-y)+" "+(i+h-1.2*y)+","+(o+d)+" "+i+","+(o+d)}s(r,"genPoints");const l=n.append("polygon");l.attr("points",r(t.x,t.y,50,20,7)),l.attr("class","labelBox"),t.y=t.y+t.labelMargin,t.x=t.x+.5*t.labelMargin,rt(n,t)},"drawLabel"),Vt=s(function(n,t,r){const l=n.append("g"),i=st();i.x=t.x,i.y=t.y,i.fill=t.fill,i.width=r.width*t.taskCount+r.diagramMarginX*(t.taskCount-1),i.height=r.height,i.class="journey-section section-type-"+t.num,i.rx=3,i.ry=3,W(l,i),ot(r)(t.text,l,i.x,i.y,i.width,i.height,{class:"journey-section section-type-"+t.num},r,t.colour)},"drawSection"),nt=-1,Lt=s(function(n,t,r){const l=t.x+r.width/2,i=n.append("g");nt++,i.append("line").attr("id","task"+nt).attr("x1",l).attr("y1",t.y).attr("x2",l).attr("y2",450).attr("class","task-line").attr("stroke-width","1px").attr("stroke-dasharray","4 2").attr("stroke","#666"),Ct(i,{cx:l,cy:300+30*(5-t.score),score:t.score});const o=st();o.x=t.x,o.y=t.y,o.fill=t.fill,o.width=r.width,o.height=r.height,o.class="task task-type-"+t.num,o.rx=3,o.ry=3,W(i,o);let h=t.x+14;t.people.forEach(d=>{const y=t.actors[d].color,m={cx:h,cy:t.y,r:7,fill:y,stroke:"#000",title:d,pos:t.actors[d].position};at(i,m),h+=10}),ot(r)(t.task,i,o.x,o.y,o.width,o.height,{class:"task"},r,t.colour)},"drawTask"),Ot=s(function(n,t){yt(n,t)},"drawBackgroundRect"),ot=function(){function n(i,o,h,d,y,m,g,e){l(o.append("text").attr("x",h+y/2).attr("y",d+m/2+5).style("font-color",e).style("text-anchor","middle").text(i),g)}function t(i,o,h,d,y,m,g,e,p){const{taskFontSize:a,taskFontFamily:u}=e,f=i.split(/<br\s*\/?>/gi);for(let c=0;c<f.length;c++){const $=c*a-a*(f.length-1)/2,x=o.append("text").attr("x",h+y/2).attr("y",d).attr("fill",p).style("text-anchor","middle").style("font-size",a).style("font-family",u);x.append("tspan").attr("x",h+y/2).attr("dy",$).text(f[c]),x.attr("y",d+m/2).attr("dominant-baseline","central").attr("alignment-baseline","central"),l(x,g)}}function r(i,o,h,d,y,m,g,e){const p=o.append("switch"),a=p.append("foreignObject").attr("x",h).attr("y",d).attr("width",y).attr("height",m).attr("position","fixed").append("xhtml:div").style("display","table").style("height","100%").style("width","100%");a.append("div").attr("class","label").style("display","table-cell").style("text-align","center").style("vertical-align","middle").text(i),t(i,p,h,d,y,m,g,e),l(a,g)}function l(i,o){for(const h in o)h in o&&i.attr(h,o[h])}return s(n,"byText"),s(t,"byTspan"),s(r,"byFo"),s(l,"_setTextAttrs"),function(i){return i.textPlacement==="fo"?r:i.textPlacement==="old"?n:t}}(),L={drawRect:W,drawCircle:at,drawSection:Vt,drawText:rt,drawLabel:jt,drawTask:Lt,drawBackgroundRect:Ot,initGraphics:s(function(n){n.append("defs").append("marker").attr("id","arrowhead").attr("refX",5).attr("refY",2).attr("markerWidth",6).attr("markerHeight",4).attr("orient","auto").append("path").attr("d","M 0,0 V 4 L6,2 Z")},"initGraphics")},Ft=s(function(n){Object.keys(n).forEach(function(t){D[t]=n[t]})},"setConf"),M={};function ct(n){const t=I().journey;let r=60;Object.keys(M).forEach(l=>{const i=M[l].color,o={cx:20,cy:r,r:7,fill:i,stroke:"#000",pos:M[l].position};L.drawCircle(n,o);const h={x:40,y:r+7,fill:"#666",text:l,textMargin:5|t.boxTextMargin};L.drawText(n,h),r+=20})}s(ct,"drawActorLegend");var D=I().journey,A=D.leftMargin,Bt=s(function(n,t,r,l){const i=I().journey,o=I().securityLevel;let h;o==="sandbox"&&(h=J("#i"+t));const d=J(o==="sandbox"?h.nodes()[0].contentDocument.body:"body");w.init();const y=d.select("#"+t);L.initGraphics(y);const m=l.db.getTasks(),g=l.db.getDiagramTitle(),e=l.db.getActors();for(const $ in M)delete M[$];let p=0;e.forEach($=>{M[$]={color:i.actorColours[p%i.actorColours.length],position:p},p++}),ct(y),w.insert(0,0,A,50*Object.keys(M).length),Dt(y,m,0);const a=w.getBounds();g&&y.append("text").text(g).attr("x",A).attr("font-size","4ex").attr("font-weight","bold").attr("y",25);const u=a.stopy-a.starty+2*i.diagramMarginY,f=A+a.stopx+2*i.diagramMarginX;_t(y,u,f,i.useMaxWidth),y.append("line").attr("x1",A).attr("y1",4*i.height).attr("x2",f-A-4).attr("y2",4*i.height).attr("stroke-width",4).attr("stroke","black").attr("marker-end","url(#arrowhead)");const c=g?70:0;y.attr("viewBox",`${a.startx} -25 ${f} ${u+c}`),y.attr("preserveAspectRatio","xMinYMin meet"),y.attr("height",u+c+25)},"draw"),w={data:{startx:void 0,stopx:void 0,starty:void 0,stopy:void 0},verticalPos:0,sequenceItems:[],init:s(function(){this.sequenceItems=[],this.data={startx:void 0,stopx:void 0,starty:void 0,stopy:void 0},this.verticalPos=0},"init"),updateVal:s(function(n,t,r,l){n[t]===void 0?n[t]=r:n[t]=l(r,n[t])},"updateVal"),updateBounds:s(function(n,t,r,l){const i=I().journey,o=this;let h=0;function d(y){return s(function(m){h++;const g=o.sequenceItems.length-h+1;o.updateVal(m,"starty",t-g*i.boxMargin,Math.min),o.updateVal(m,"stopy",l+g*i.boxMargin,Math.max),o.updateVal(w.data,"startx",n-g*i.boxMargin,Math.min),o.updateVal(w.data,"stopx",r+g*i.boxMargin,Math.max),y!=="activation"&&(o.updateVal(m,"startx",n-g*i.boxMargin,Math.min),o.updateVal(m,"stopx",r+g*i.boxMargin,Math.max),o.updateVal(w.data,"starty",t-g*i.boxMargin,Math.min),o.updateVal(w.data,"stopy",l+g*i.boxMargin,Math.max))},"updateItemBounds")}s(d,"updateFn"),this.sequenceItems.forEach(d())},"updateBounds"),insert:s(function(n,t,r,l){const i=Math.min(n,r),o=Math.max(n,r),h=Math.min(t,l),d=Math.max(t,l);this.updateVal(w.data,"startx",i,Math.min),this.updateVal(w.data,"starty",h,Math.min),this.updateVal(w.data,"stopx",o,Math.max),this.updateVal(w.data,"stopy",d,Math.max),this.updateBounds(i,h,o,d)},"insert"),bumpVerticalPos:s(function(n){this.verticalPos=this.verticalPos+n,this.data.stopy=this.verticalPos},"bumpVerticalPos"),getVerticalPos:s(function(){return this.verticalPos},"getVerticalPos"),getBounds:s(function(){return this.data},"getBounds")},z=D.sectionFills,et=D.sectionColours,Dt=s(function(n,t,r){const l=I().journey;let i="";const o=r+(2*l.height+l.diagramMarginY);let h=0,d="#CCC",y="black",m=0;for(const[g,e]of t.entries()){if(i!==e.section){d=z[h%z.length],m=h%z.length,y=et[h%et.length];let a=0;const u=e.section;for(let c=g;c<t.length&&t[c].section==u;c++)a+=1;const f={x:g*l.taskMargin+g*l.width+A,y:50,text:e.section,fill:d,num:m,colour:y,taskCount:a};L.drawSection(n,f,l),i=e.section,h++}const p=e.people.reduce((a,u)=>(M[u]&&(a[u]=M[u]),a),{});e.x=g*l.taskMargin+g*l.width+A,e.y=o,e.width=l.diagramMarginX,e.height=l.diagramMarginY,e.colour=y,e.fill=d,e.num=m,e.actors=p,L.drawTask(n,e,l),w.insert(e.x,e.y,e.x+e.width+l.taskMargin,450)}},"drawTasks"),it={setConf:Ft,draw:Bt},yn={parser:vt,db:tt,renderer:it,styles:Pt,init:s(n=>{it.setConf(n.journey),tt.clear()},"init")};export{yn as diagram};
