import{a as V,P as n,Q as q,R as p,ai as L,n as r,_ as O,ci as Q,S as j,dh as G,aq as J,H as K,cF as X,f as M,dT as Y,c5 as Z,b$ as ee}from"./index.00ded5ec.js";import{P as te}from"./index.39991b12.js";var ne=globalThis&&globalThis.__rest||function(v,e){var g={};for(var t in v)Object.prototype.hasOwnProperty.call(v,t)&&e.indexOf(t)<0&&(g[t]=v[t]);if(v!=null&&typeof Object.getOwnPropertySymbols=="function")for(var C=0,t=Object.getOwnPropertySymbols(v);C<t.length;C++)e.indexOf(t[C])<0&&Object.prototype.propertyIsEnumerable.call(v,t[C])&&(g[t[C]]=v[t[C]]);return g},ie=V({name:"Steps",props:{type:n.string.def("default"),prefixCls:n.string.def("vc-steps"),iconPrefix:n.string.def("vc"),direction:n.string.def("horizontal"),labelPlacement:n.string.def("horizontal"),status:n.string.def("process"),size:n.string.def(""),progressDot:n.oneOfType([n.looseBool,n.func]).def(void 0),initial:n.number.def(0),current:n.number.def(0),icons:n.shape({finish:n.any,error:n.any}).loose,stepIcon:Function},slots:["stepIcon","progressDot"],emits:["change"],setup:function(e,g){var t=g.slots,C=g.emit,$=function(i){var o=e.current;o!==i&&C("change",i)};return function(){var b,i,o=e.prefixCls,f=e.direction,l=e.type,S=e.labelPlacement,a=e.iconPrefix,u=e.status,x=e.size,s=e.current,d=e.progressDot,c=d===void 0?t.progressDot:d,k=e.initial,y=e.icons,P=e.stepIcon,_=P===void 0?t.stepIcon:P,m=l==="navigation",N=c?"vertical":S,D=q(o,"".concat(o,"-").concat(f),(b={},p(b,"".concat(o,"-").concat(x),x),p(b,"".concat(o,"-label-").concat(N),f==="horizontal"),p(b,"".concat(o,"-dot"),!!c),p(b,"".concat(o,"-navigation"),m),b)),T=L((i=t.default)===null||i===void 0?void 0:i.call(t));return r("div",{class:D},[T.map(function(w,z){var F=w.props||{},B=F.prefixCls,W=B===void 0?o:B,R=ne(F,["prefixCls"]),I=k+z,h=O(O({},R),{stepNumber:I+1,stepIndex:I,key:I,prefixCls:W,iconPrefix:a,progressDot:c,icons:y,stepIcon:_,onStepClick:$});return u==="error"&&z===s-1&&(h.class="".concat(o,"-next-error")),R.status||(I===s?h.status=u:I<s?h.status="finish":h.status="wait"),h.active=I===s,Q(w,h)})])}}});function U(v){return typeof v=="string"}function se(){}var H=function(){return{prefixCls:String,wrapperStyle:{type:Object,default:void 0},itemWidth:String,active:{type:Boolean,default:void 0},disabled:{type:Boolean,default:void 0},status:String,iconPrefix:String,icon:n.any,adjustMarginRight:String,stepNumber:Number,stepIndex:Number,description:n.any,title:n.any,subTitle:n.any,progressDot:G(n.oneOfType([n.looseBool,n.func])),tailContent:n.any,icons:n.shape({finish:n.any,error:n.any}).loose,onClick:Function,onStepClick:Function,stepIcon:Function}},oe=V({name:"Step",props:H(),slots:["title","subTitle","description","tailContent","stepIcon","progressDot"],emits:["click","stepClick"],setup:function(e,g){var t=g.slots,C=g.emit,$=function(o){C("click",o),C("stepClick",e.stepIndex)},b=function(o){var f,l=o.icon,S=o.title,a=o.description,u=e.prefixCls,x=e.stepNumber,s=e.status,d=e.iconPrefix,c=e.icons,k=e.progressDot,y=k===void 0?t.progressDot:k,P=e.stepIcon,_=P===void 0?t.stepIcon:P,m,N=(f={},p(f,"".concat(u,"-icon"),!0),p(f,"".concat(d,"icon"),!0),p(f,"".concat(d,"icon-").concat(l),l&&U(l)),p(f,"".concat(d,"icon-check"),!l&&s==="finish"&&c&&!c.finish),p(f,"".concat(d,"icon-close"),!l&&s==="error"&&c&&!c.error),f),D=r("span",{class:"".concat(u,"-icon-dot")},null);return y?typeof y=="function"?m=r("span",{class:"".concat(u,"-icon")},[y({iconDot:D,index:x-1,status:s,title:S,description:a,prefixCls:u})]):m=r("span",{class:"".concat(u,"-icon")},[D]):l&&!U(l)?m=r("span",{class:"".concat(u,"-icon")},[l]):c&&c.finish&&s==="finish"?m=r("span",{class:"".concat(u,"-icon")},[c.finish]):c&&c.error&&s==="error"?m=r("span",{class:"".concat(u,"-icon")},[c.error]):l||s==="finish"||s==="error"?m=r("span",{class:N},null):m=r("span",{class:"".concat(u,"-icon")},[x]),_&&(m=_({index:x-1,status:s,title:S,description:a,node:m})),m};return function(){var i,o,f,l,S,a=e.prefixCls,u=e.itemWidth,x=e.active,s=e.status,d=s===void 0?"wait":s,c=e.tailContent,k=e.adjustMarginRight,y=e.disabled,P=e.title,_=P===void 0?(o=t.title)===null||o===void 0?void 0:o.call(t):P,m=e.description,N=m===void 0?(f=t.description)===null||f===void 0?void 0:f.call(t):m,D=e.subTitle,T=D===void 0?(l=t.subTitle)===null||l===void 0?void 0:l.call(t):D,w=e.icon,z=w===void 0?(S=t.icon)===null||S===void 0?void 0:S.call(t):w,F=e.onClick,B=e.onStepClick,W=(i={},p(i,"".concat(a,"-item"),!0),p(i,"".concat(a,"-item-").concat(d),!0),p(i,"".concat(a,"-item-custom"),z),p(i,"".concat(a,"-item-active"),x),p(i,"".concat(a,"-item-disabled"),y===!0),i),R={class:W},I={};u&&(I.width=u),k&&(I.marginRight=k);var h={onClick:F||se};return B&&!y&&(h.role="button",h.tabindex=0,h.onClick=$),r("div",j(j({},R),{},{style:I}),[r("div",j(j({},h),{},{class:"".concat(a,"-item-container")}),[r("div",{class:"".concat(a,"-item-tail")},[c]),r("div",{class:"".concat(a,"-item-icon")},[b({icon:z,title:_,description:N})]),r("div",{class:"".concat(a,"-item-content")},[r("div",{class:"".concat(a,"-item-title")},[_,T&&r("div",{title:T,class:"".concat(a,"-item-subtitle")},[T])]),N&&r("div",{class:"".concat(a,"-item-description")},[N])])])])}}}),re=function(){return{prefixCls:String,iconPrefix:String,current:Number,initial:Number,percent:Number,responsive:{type:Boolean,default:void 0},labelPlacement:String,status:String,size:String,direction:String,progressDot:{type:[Boolean,Function],default:void 0},type:String,onChange:Function,"onUpdate:current":Function}},A=V({name:"ASteps",inheritAttrs:!1,props:J(re(),{current:0,responsive:!0,labelPlacement:"horizontal"}),slots:["progressDot"],setup:function(e,g){var t=g.attrs,C=g.slots,$=g.emit,b=K("steps",e),i=b.prefixCls,o=b.direction,f=b.configProvider,l=X(),S=M(function(){return e.responsive&&l.value.xs?"vertical":e.direction}),a=M(function(){return f.getPrefixCls("",e.iconPrefix)}),u=function(d){$("update:current",d),$("change",d)},x=function(d){var c=d.node,k=d.status;if(k==="process"&&e.percent!==void 0){var y=e.size==="small"?32:40,P=r("div",{class:"".concat(i,"-progress-icon")},[r(te,{type:"circle",percent:e.percent,width:y,strokeWidth:4,format:function(){return null}},null),c]);return P}return c};return function(){var s,d=q((s={},p(s,"".concat(i.value,"-rtl"),o.value==="rtl"),p(s,"".concat(i.value,"-with-progress"),e.percent!==void 0),s),t.class),c={finish:r(Y,{class:"".concat(i,"-finish-icon")},null),error:r(Z,{class:"".concat(i,"-error-icon")},null)};return r(ie,j(j({icons:c},ee(e,["percent","responsive"])),{},{direction:S.value,prefixCls:i.value,iconPrefix:a.value,class:d,onChange:u}),O(O({},C),{stepIcon:x}))}}}),E=V(O(O({},oe),{name:"AStep",props:H()})),le=O(A,{Step:E,install:function(e){return e.component(A.name,A),e.component(E.name,E),e}});export{le as S};