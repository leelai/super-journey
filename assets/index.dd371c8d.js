import{a as z,f as C,w as et,v as k,a7 as q,b_ as at,_ as c,n as f,R as D,J as H,aj as nt,cj as F,G as A,cp as rt,T as j,S as m,c5 as lt,Q as ot,eu as ut,Y as st,dS as ct,dR as it,x as vt,y as ft}from"./index.84f51bc6.js";function Q(n){var t=n.prefixCls,l=n.value,e=n.current,a=n.offset,g=a===void 0?0:a,r;return g&&(r={position:"absolute",top:"".concat(g,"00%"),left:0}),f("p",{style:r,class:D("".concat(t,"-only-unit"),{current:e})},[l])}function dt(n,t,l){for(var e=n,a=0;(e+10)%10!==t;)e+=l,a+=l;return a}var yt=z({name:"SingleNumber",props:{prefixCls:String,value:String,count:Number},setup:function(t){var l=C(function(){return Number(t.value)}),e=C(function(){return Math.abs(t.count)}),a=et({prevValue:l.value,prevCount:e.value}),g=function(){a.prevValue=l.value,a.prevCount=e.value},r=k();return q(l,function(){clearTimeout(r.value),r.value=setTimeout(function(){g()},1e3)},{flush:"post"}),at(function(){clearTimeout(r.value)}),function(){var d,u={},s=l.value;if(a.prevValue===s||Number.isNaN(s)||Number.isNaN(a.prevValue))d=[Q(c(c({},t),{current:!0}))],u={transition:"none"};else{d=[];for(var v=s+10,i=[],y=s;y<=v;y+=1)i.push(y);var S=i.findIndex(function(b){return b%10===a.prevValue});d=i.map(function(b,p){var _=b%10;return Q(c(c({},t),{value:_,offset:p-S,current:p===S}))});var x=a.prevCount<e.value?1:-1;u={transform:"translateY(".concat(-dt(a.prevValue,s,x),"00%)")}}return f("span",{class:"".concat(t.prefixCls,"-only"),style:u,onTransitionend:function(){return g()}},[d])}}}),bt=globalThis&&globalThis.__rest||function(n,t){var l={};for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&t.indexOf(e)<0&&(l[e]=n[e]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,e=Object.getOwnPropertySymbols(n);a<e.length;a++)t.indexOf(e[a])<0&&Object.prototype.propertyIsEnumerable.call(n,e[a])&&(l[e[a]]=n[e[a]]);return l},mt={prefixCls:String,count:A.any,component:String,title:A.any,show:Boolean},gt=z({name:"ScrollNumber",inheritAttrs:!1,props:mt,setup:function(t,l){var e=l.attrs,a=l.slots,g=H("scroll-number",t),r=g.prefixCls;return function(){var d,u=c(c({},t),e);u.prefixCls;var s=u.count,v=u.title;u.show;var i=u.component,y=i===void 0?"sup":i,S=u.class,x=u.style,b=bt(u,["prefixCls","count","title","show","component","class","style"]),p=c(c({},b),{style:x,"data-show":t.show,class:D(r.value,S),title:v}),_=s;if(s&&Number(s)%1===0){var V=String(s).split("");_=V.map(function(o,T){return f(yt,{prefixCls:r.value,count:Number(s),value:o,key:V.length-T},null)})}x&&x.borderColor&&(p.style=c(c({},x),{boxShadow:"0 0 0 1px ".concat(x.borderColor," inset")}));var O=nt((d=a.default)===null||d===void 0?void 0:d.call(a));return O&&O.length?F(O,{class:D("".concat(r.value,"-custom-component"))},!1):f(y,p,{default:function(){return[_]}})}}});function I(n){return rt.indexOf(n)!==-1}var pt=globalThis&&globalThis.__rest||function(n,t){var l={};for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&t.indexOf(e)<0&&(l[e]=n[e]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,e=Object.getOwnPropertySymbols(n);a<e.length;a++)t.indexOf(e[a])<0&&Object.prototype.propertyIsEnumerable.call(n,e[a])&&(l[e[a]]=n[e[a]]);return l},Ct=function(){return{prefix:String,color:{type:String},text:A.any,placement:{type:String,default:"end"}}},xt=z({name:"ABadgeRibbon",inheritAttrs:!1,props:Ct(),slots:["text"],setup:function(t,l){var e=l.attrs,a=l.slots,g=H("ribbon",t),r=g.prefixCls,d=g.direction,u=C(function(){return I(t.color)}),s=C(function(){var v;return[r.value,"".concat(r.value,"-placement-").concat(t.placement),(v={},m(v,"".concat(r.value,"-rtl"),d.value==="rtl"),m(v,"".concat(r.value,"-color-").concat(t.color),u.value),v)]});return function(){var v,i,y=e.class,S=e.style,x=pt(e,["class","style"]),b={},p={};return t.color&&!u.value&&(b.background=t.color,p.color=t.color),f("div",j({class:"".concat(r.value,"-wrapper")},x),[(v=a.default)===null||v===void 0?void 0:v.call(a),f("div",{class:[s.value,y],style:c(c({},b),S)},[f("span",{class:"".concat(r.value,"-text")},[t.text||((i=a.text)===null||i===void 0?void 0:i.call(a))]),f("div",{class:"".concat(r.value,"-corner"),style:p},null)])])}}}),St=function(){return{count:A.any,showZero:{type:Boolean,default:void 0},overflowCount:{type:Number,default:99},dot:{type:Boolean,default:void 0},prefixCls:String,scrollNumberPrefixCls:String,status:{type:String},size:{type:String,default:"default"},color:String,text:A.any,offset:Array,numberStyle:{type:Object,default:void 0},title:String}},wt=z({name:"ABadge",Ribbon:xt,inheritAttrs:!1,props:St(),slots:["text","count"],setup:function(t,l){var e=l.slots,a=l.attrs,g=H("badge",t),r=g.prefixCls,d=g.direction,u=C(function(){return t.count>t.overflowCount?"".concat(t.overflowCount,"+"):t.count}),s=C(function(){return t.status!==null&&t.status!==void 0||t.color!==null&&t.color!==void 0}),v=C(function(){return u.value==="0"||u.value===0}),i=C(function(){return t.dot&&!v.value}),y=C(function(){return i.value?"":u.value}),S=C(function(){var o=y.value===null||y.value===void 0||y.value==="";return(o||v.value&&!t.showZero)&&!i.value}),x=k(t.count),b=k(y.value),p=k(i.value);q([function(){return t.count},y,i],function(){S.value||(x.value=t.count,b.value=y.value,p.value=i.value)},{immediate:!0});var _=C(function(){var o;return o={},m(o,"".concat(r.value,"-status-dot"),s.value),m(o,"".concat(r.value,"-status-").concat(t.status),!!t.status),m(o,"".concat(r.value,"-status-").concat(t.color),I(t.color)),o}),V=C(function(){return t.color&&!I(t.color)?{background:t.color}:{}}),O=C(function(){var o;return o={},m(o,"".concat(r.value,"-dot"),p.value),m(o,"".concat(r.value,"-count"),!p.value),m(o,"".concat(r.value,"-count-sm"),t.size==="small"),m(o,"".concat(r.value,"-multiple-words"),!p.value&&b.value&&b.value.toString().length>1),m(o,"".concat(r.value,"-status-").concat(t.status),!!t.status),m(o,"".concat(r.value,"-status-").concat(t.color),I(t.color)),o});return function(){var o,T,U,P=t.offset,Z=t.title,$=t.color,J=a.style,Y=lt(e,t,"text"),N=r.value,h=x.value,w=ot((T=e.default)===null||T===void 0?void 0:T.call(e));w=w.length?w:null;var G=!!(!S.value||e.count),B=function(){if(!P)return c({},J);var R={marginTop:ut(P[1])?"".concat(P[1],"px"):P[1]};return d.value==="rtl"?R.left="".concat(parseInt(P[0],10),"px"):R.right="".concat(-parseInt(P[0],10),"px"),c(c({},R),J)}(),K=Z!=null?Z:typeof h=="string"||typeof h=="number"?h:void 0,W=G||!Y?null:f("span",{class:"".concat(N,"-status-text")},[Y]),X=st(h)==="object"||h===void 0&&e.count?F(h!=null?h:(U=e.count)===null||U===void 0?void 0:U.call(e),{style:B},!1):null,M=D(N,(o={},m(o,"".concat(N,"-status"),s.value),m(o,"".concat(N,"-not-a-wrapper"),!w),m(o,"".concat(N,"-rtl"),d.value==="rtl"),o),a.class);if(!w&&s.value){var L=B.color;return f("span",j(j({},a),{},{class:M,style:B}),[f("span",{class:_.value,style:V.value},null),f("span",{style:{color:L},class:"".concat(N,"-status-text")},[Y])])}var tt=ct(w?"".concat(N,"-zoom"):"",{appear:!1}),E=c(c({},B),t.numberStyle);return $&&!I($)&&(E=E||{},E.background=$),f("span",j(j({},a),{},{class:M}),[w,f(it,tt,{default:function(){return[vt(f(gt,{prefixCls:t.scrollNumberPrefixCls,show:G,class:O.value,count:b.value,title:K,style:E,key:"scrollNumber"},{default:function(){return[X]}}),[[ft,G]])]}}),W])}}});export{wt as B,xt as R};
