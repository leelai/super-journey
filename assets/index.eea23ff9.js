import{n as o,S as _,K as le,v as M,cH as ae,cI as oe,cJ as re,_ as f,F as ce,G as N,a as Z,J as ie,bo as se,aJ as Y,Y as ee,M as ue,a4 as de,bC as q,f as ve,Q as fe,aK as W,cj as ye,O as be}from"./index.84f51bc6.js";function L(l){return l!=null}var pe=function(e){var n=e.itemPrefixCls,t=e.component,r=e.span,a=e.labelStyle,u=e.contentStyle,p=e.bordered,i=e.label,s=e.content,c=e.colon,S=t;if(p){var d;return o(S,{class:[(d={},_(d,"".concat(n,"-item-label"),L(i)),_(d,"".concat(n,"-item-content"),L(s)),d)],colSpan:r},{default:function(){return[L(i)&&o("span",{style:a},[i]),L(s)&&o("span",{style:u},[s])]}})}return o(S,{class:["".concat(n,"-item")],colSpan:r},{default:function(){return[o("div",{class:"".concat(n,"-item-container")},[i&&o("span",{class:["".concat(n,"-item-label"),_({},"".concat(n,"-item-no-colon"),!c)],style:a},[i]),s&&o("span",{class:"".concat(n,"-item-content"),style:u},[s])])]}})},F=pe,me=function(e){var n=function(d,y,b){var P=y.colon,D=y.prefixCls,C=y.bordered,x=b.component,O=b.type,R=b.showLabel,k=b.showContent,h=b.labelStyle,j=b.contentStyle;return d.map(function(v,I){var g,$,m=v.props||{},J=m.prefixCls,A=J===void 0?D:J,U=m.span,K=U===void 0?1:U,T=m.labelStyle,G=m.contentStyle,H=m.label,Q=H===void 0?($=(g=v.children)===null||g===void 0?void 0:g.label)===null||$===void 0?void 0:$.call(g):H,V=ae(v),z=oe(v),B=re(v),E=v.key;return typeof x=="string"?o(F,{key:"".concat(O,"-").concat(String(E)||I),class:z,style:B,labelStyle:f(f({},h.value),T),contentStyle:f(f({},j.value),G),span:K,colon:P,component:x,itemPrefixCls:A,bordered:C,label:R?Q:null,content:k?V:null},null):[o(F,{key:"label-".concat(String(E)||I),class:z,style:f(f(f({},h.value),B),T),span:1,colon:P,component:x[0],itemPrefixCls:A,bordered:C,label:Q},null),o(F,{key:"content-".concat(String(E)||I),class:z,style:f(f(f({},j.value),B),G),span:K*2-1,component:x[1],itemPrefixCls:A,bordered:C,content:V},null)]})},t=e.prefixCls,r=e.vertical,a=e.row,u=e.index,p=e.bordered,i=le(ne,{labelStyle:M({}),contentStyle:M({})}),s=i.labelStyle,c=i.contentStyle;return r?o(ce,null,[o("tr",{key:"label-".concat(u),class:"".concat(t,"-row")},[n(a,e,{component:"th",type:"label",showLabel:!0,labelStyle:s,contentStyle:c})]),o("tr",{key:"content-".concat(u),class:"".concat(t,"-row")},[n(a,e,{component:"td",type:"content",showContent:!0,labelStyle:s,contentStyle:c})])]):o("tr",{key:u,class:"".concat(t,"-row")},[n(a,e,{component:p?["th","td"]:"td",type:"item",showLabel:!0,showContent:!0,labelStyle:s,contentStyle:c})])},Se=me;N.any;var Ce=function(){return{prefixCls:String,label:N.any,labelStyle:{type:Object,default:void 0},contentStyle:{type:Object,default:void 0},span:{type:Number,default:1}}},xe=Z({name:"ADescriptionsItem",props:Ce(),slots:["label"],setup:function(e,n){var t=n.slots;return function(){var r;return(r=t.default)===null||r===void 0?void 0:r.call(t)}}}),te={xxxl:3,xxl:3,xl:3,lg:3,md:3,sm:2,xs:1};function he(l,e){if(typeof l=="number")return l;if(ee(l)==="object")for(var n=0;n<W.length;n++){var t=W[n];if(e[t]&&l[t]!==void 0)return l[t]||te[t]}return 3}function X(l,e,n){var t=l;return(e===void 0||e>n)&&(t=ye(l,{span:n}),be(e===void 0,"Descriptions","Sum of column `span` in a line not match `column` of Descriptions.")),t}function ge(l,e){var n=fe(l),t=[],r=[],a=e;return n.forEach(function(u,p){var i,s=(i=u.props)===null||i===void 0?void 0:i.span,c=s||1;if(p===n.length-1){r.push(X(u,s,a)),t.push(r);return}c<a?(a-=c,r.push(u)):(r.push(X(u,c,a)),t.push(r),a=e,r=[])}),t}var we=function(){return{prefixCls:String,bordered:{type:Boolean,default:void 0},size:{type:String,default:"default"},title:N.any,extra:N.any,column:{type:[Number,Object],default:function(){return te}},layout:String,colon:{type:Boolean,default:void 0},labelStyle:{type:Object,default:void 0},contentStyle:{type:Object,default:void 0}}},ne=Symbol("descriptionsContext"),w=Z({name:"ADescriptions",props:we(),slots:["title","extra"],Item:xe,setup:function(e,n){var t=n.slots,r=ie("descriptions",e),a=r.prefixCls,u=r.direction,p,i=M({});se(function(){p=Y.subscribe(function(c){ee(e.column)==="object"&&(i.value=c)})}),ue(function(){Y.unsubscribe(p)}),de(ne,{labelStyle:q(e,"labelStyle"),contentStyle:q(e,"contentStyle")});var s=ve(function(){return he(e.column,i.value)});return function(){var c,S,d,y,b=e.size,P=e.bordered,D=P===void 0?!1:P,C=e.layout,x=C===void 0?"horizontal":C,O=e.colon,R=O===void 0?!0:O,k=e.title,h=k===void 0?(S=t.title)===null||S===void 0?void 0:S.call(t):k,j=e.extra,v=j===void 0?(d=t.extra)===null||d===void 0?void 0:d.call(t):j,I=(y=t.default)===null||y===void 0?void 0:y.call(t),g=ge(I,s.value);return o("div",{class:[a.value,(c={},_(c,"".concat(a.value,"-").concat(b),b!=="default"),_(c,"".concat(a.value,"-bordered"),!!D),_(c,"".concat(a.value,"-rtl"),u.value==="rtl"),c)]},[(h||v)&&o("div",{class:"".concat(a.value,"-header")},[h&&o("div",{class:"".concat(a.value,"-title")},[h]),v&&o("div",{class:"".concat(a.value,"-extra")},[v])]),o("div",{class:"".concat(a.value,"-view")},[o("table",null,[o("tbody",null,[g.map(function($,m){return o(Se,{key:m,index:m,colon:R,prefixCls:a.value,vertical:x==="vertical",bordered:D,row:$},null)})])])])])}}});w.install=function(l){return l.component(w.name,w),l.component(w.Item.name,w.Item),l};var Pe=w;export{Pe as D};
