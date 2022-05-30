import{n as o,R as _,J as le,v as M,cG as ae,cH as oe,cI as re,_ as f,F as ce,P as R,a as Z,H as ie,bn as se,aI as K,X as ee,L as ue,a3 as de,bB as Q,f as ve,O as fe,aJ as W,ci as ye,N as be}from"./index.00ded5ec.js";function O(l){return l!=null}var pe=function(e){var n=e.itemPrefixCls,t=e.component,r=e.span,a=e.labelStyle,u=e.contentStyle,p=e.bordered,i=e.label,s=e.content,c=e.colon,S=t;if(p){var d;return o(S,{class:[(d={},_(d,"".concat(n,"-item-label"),O(i)),_(d,"".concat(n,"-item-content"),O(s)),d)],colSpan:r},{default:function(){return[O(i)&&o("span",{style:a},[i]),O(s)&&o("span",{style:u},[s])]}})}return o(S,{class:["".concat(n,"-item")],colSpan:r},{default:function(){return[o("div",{class:"".concat(n,"-item-container")},[i&&o("span",{class:["".concat(n,"-item-label"),_({},"".concat(n,"-item-no-colon"),!c)],style:a},[i]),s&&o("span",{class:"".concat(n,"-item-content"),style:u},[s])])]}})},F=pe,me=function(e){var n=function(d,y,b){var P=y.colon,D=y.prefixCls,C=y.bordered,x=b.component,L=b.type,k=b.showLabel,N=b.showContent,h=b.labelStyle,I=b.contentStyle;return d.map(function(v,j){var g,$,m=v.props||{},U=m.prefixCls,A=U===void 0?D:U,H=m.span,J=H===void 0?1:H,T=m.labelStyle,G=m.contentStyle,V=m.label,X=V===void 0?($=(g=v.children)===null||g===void 0?void 0:g.label)===null||$===void 0?void 0:$.call(g):V,q=ae(v),B=oe(v),z=re(v),E=v.key;return typeof x=="string"?o(F,{key:"".concat(L,"-").concat(String(E)||j),class:B,style:z,labelStyle:f(f({},h.value),T),contentStyle:f(f({},I.value),G),span:J,colon:P,component:x,itemPrefixCls:A,bordered:C,label:k?X:null,content:N?q:null},null):[o(F,{key:"label-".concat(String(E)||j),class:B,style:f(f(f({},h.value),z),T),span:1,colon:P,component:x[0],itemPrefixCls:A,bordered:C,label:X},null),o(F,{key:"content-".concat(String(E)||j),class:B,style:f(f(f({},I.value),z),G),span:J*2-1,component:x[1],itemPrefixCls:A,bordered:C,content:q},null)]})},t=e.prefixCls,r=e.vertical,a=e.row,u=e.index,p=e.bordered,i=le(ne,{labelStyle:M({}),contentStyle:M({})}),s=i.labelStyle,c=i.contentStyle;return r?o(ce,null,[o("tr",{key:"label-".concat(u),class:"".concat(t,"-row")},[n(a,e,{component:"th",type:"label",showLabel:!0,labelStyle:s,contentStyle:c})]),o("tr",{key:"content-".concat(u),class:"".concat(t,"-row")},[n(a,e,{component:"td",type:"content",showContent:!0,labelStyle:s,contentStyle:c})])]):o("tr",{key:u,class:"".concat(t,"-row")},[n(a,e,{component:p?["th","td"]:"td",type:"item",showLabel:!0,showContent:!0,labelStyle:s,contentStyle:c})])},Se=me;R.any;var Ce=function(){return{prefixCls:String,label:R.any,labelStyle:{type:Object,default:void 0},contentStyle:{type:Object,default:void 0},span:{type:Number,default:1}}},xe=Z({name:"ADescriptionsItem",props:Ce(),slots:["label"],setup:function(e,n){var t=n.slots;return function(){var r;return(r=t.default)===null||r===void 0?void 0:r.call(t)}}}),te={xxxl:3,xxl:3,xl:3,lg:3,md:3,sm:2,xs:1};function he(l,e){if(typeof l=="number")return l;if(ee(l)==="object")for(var n=0;n<W.length;n++){var t=W[n];if(e[t]&&l[t]!==void 0)return l[t]||te[t]}return 3}function Y(l,e,n){var t=l;return(e===void 0||e>n)&&(t=ye(l,{span:n}),be(e===void 0,"Descriptions","Sum of column `span` in a line not match `column` of Descriptions.")),t}function ge(l,e){var n=fe(l),t=[],r=[],a=e;return n.forEach(function(u,p){var i,s=(i=u.props)===null||i===void 0?void 0:i.span,c=s||1;if(p===n.length-1){r.push(Y(u,s,a)),t.push(r);return}c<a?(a-=c,r.push(u)):(r.push(Y(u,c,a)),t.push(r),a=e,r=[])}),t}var we=function(){return{prefixCls:String,bordered:{type:Boolean,default:void 0},size:{type:String,default:"default"},title:R.any,extra:R.any,column:{type:[Number,Object],default:function(){return te}},layout:String,colon:{type:Boolean,default:void 0},labelStyle:{type:Object,default:void 0},contentStyle:{type:Object,default:void 0}}},ne=Symbol("descriptionsContext"),w=Z({name:"ADescriptions",props:we(),slots:["title","extra"],Item:xe,setup:function(e,n){var t=n.slots,r=ie("descriptions",e),a=r.prefixCls,u=r.direction,p,i=M({});se(function(){p=K.subscribe(function(c){ee(e.column)==="object"&&(i.value=c)})}),ue(function(){K.unsubscribe(p)}),de(ne,{labelStyle:Q(e,"labelStyle"),contentStyle:Q(e,"contentStyle")});var s=ve(function(){return he(e.column,i.value)});return function(){var c,S,d,y,b=e.size,P=e.bordered,D=P===void 0?!1:P,C=e.layout,x=C===void 0?"horizontal":C,L=e.colon,k=L===void 0?!0:L,N=e.title,h=N===void 0?(S=t.title)===null||S===void 0?void 0:S.call(t):N,I=e.extra,v=I===void 0?(d=t.extra)===null||d===void 0?void 0:d.call(t):I,j=(y=t.default)===null||y===void 0?void 0:y.call(t),g=ge(j,s.value);return o("div",{class:[a.value,(c={},_(c,"".concat(a.value,"-").concat(b),b!=="default"),_(c,"".concat(a.value,"-bordered"),!!D),_(c,"".concat(a.value,"-rtl"),u.value==="rtl"),c)]},[(h||v)&&o("div",{class:"".concat(a.value,"-header")},[h&&o("div",{class:"".concat(a.value,"-title")},[h]),v&&o("div",{class:"".concat(a.value,"-extra")},[v])]),o("div",{class:"".concat(a.value,"-view")},[o("table",null,[o("tbody",null,[g.map(function($,m){return o(Se,{key:m,index:m,colon:k,prefixCls:a.value,vertical:x==="vertical",bordered:D,row:$},null)})])])])])}}});w.install=function(l){return l.component(w.name,w),l.component(w.Item.name,w.Item),l};var Pe=w;export{Pe as D};