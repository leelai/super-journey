var N=Object.defineProperty,A=Object.defineProperties;var y=Object.getOwnPropertyDescriptors;var B=Object.getOwnPropertySymbols;var I=Object.prototype.hasOwnProperty,M=Object.prototype.propertyIsEnumerable;var C=(e,n,a)=>n in e?N(e,n,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[n]=a,D=(e,n)=>{for(var a in n||(n={}))I.call(n,a)&&C(e,a,n[a]);if(B)for(var a of B(n))M.call(n,a)&&C(e,a,n[a]);return e},F=(e,n)=>A(e,y(n));import{P as S}from"./index.a11cdd95.js";import{a as E,aF as u,v as Y,c as P,eI as R,a7 as j,eJ as k,eq as q,dA as h,av as O,cy as H,aG as U,bq as W,o as $,h as V,t as z,aE as G,cC as J,w as K,bb as L,ax as w,j as Q,z as f,n as i,m as _}from"./index.84f51bc6.js";import"./index.1a6563d3.js";import"./index.3580ad56.js";import"./useSize.57eaf44d.js";import"./eagerComputed.fe6422a6.js";import"./useWindowSizeFn.25af7ad9.js";import"./useContentViewHeight.b08eeddc.js";import"./ArrowLeftOutlined.bf033c89.js";import"./index.b8a6e61f.js";import"./transButton.4e91e859.js";const p=1e3,d=p*60,v=d*60,b=v*24,X=E({name:"Time",props:{value:u.oneOfType([u.number,u.instanceOf(Date),u.string]).isRequired,step:u.number.def(60),mode:u.oneOf(["date","datetime","relative"]).def("relative")},setup(e){const n=Y(""),{t:a}=P();R(m,e.step*p),j(()=>e.value,()=>{m()},{immediate:!0});function T(){const{value:t}=e;let s=0;if(H(t)){const l=t.toString().length>10?t:t*1e3;s=new Date(l).getTime()}else U(t)?s=new Date(t).getTime():W(t)&&(s=t.getTime());return s}function m(){const{mode:t,value:s}=e,l=T();t==="relative"?n.value=g(l):t==="datetime"?n.value=k(s):t==="date"&&(n.value=q(s))}function g(t){const s=new Date().getTime(),l=h(t).isBefore(s);let o=s-t;l||(o=-o);let r="",c=a(l?"component.time.before":"component.time.after");return o<p?r=a("component.time.just"):o<d?r=parseInt(o/p)+a("component.time.seconds")+c:o>=d&&o<v?r=Math.floor(o/d)+a("component.time.minutes")+c:o>=v&&o<b?r=Math.floor(o/v)+a("component.time.hours")+c:o>=b&&o<262386e4?r=Math.floor(o/b)+a("component.time.days")+c:o>=262386e4&&o<=3156786e4&&l?r=h(t).format("MM-DD-HH-mm"):r=h(t).format("YYYY"),r}return{date:n}}});function Z(e,n,a,T,m,g){return $(),V("span",null,z(e.date),1)}var x=O(X,[["render",Z]]);const ee=G(x),te=E({components:{PageWrapper:S,Time:ee,CollapseContainer:J},setup(){const e=new Date().getTime(),n=K({time1:e-60*3*1e3,time2:e-86400*3*1e3});return F(D({},L(n)),{now:e})}}),ne=_("br",null,null,-1),ae=_("br",null,null,-1),oe=_("br",null,null,-1),se=_("br",null,null,-1);function ie(e,n,a,T,m,g){const t=w("Time"),s=w("CollapseContainer"),l=w("PageWrapper");return $(),Q(l,{title:"\u65F6\u95F4\u7EC4\u4EF6\u793A\u4F8B"},{default:f(()=>[i(s,{title:"\u57FA\u7840\u793A\u4F8B"},{default:f(()=>[i(t,{value:e.time1},null,8,["value"]),ne,i(t,{value:e.time2},null,8,["value"])]),_:1}),i(s,{title:"\u5B9A\u65F6\u66F4\u65B0",class:"my-4"},{default:f(()=>[i(t,{value:e.now,step:1},null,8,["value"]),ae,i(t,{value:e.now,step:5},null,8,["value"])]),_:1}),i(s,{title:"\u5B9A\u65F6\u66F4\u65B0"},{default:f(()=>[i(t,{value:e.now,mode:"date"},null,8,["value"]),oe,i(t,{value:e.now,mode:"datetime"},null,8,["value"]),se,i(t,{value:e.now},null,8,["value"])]),_:1})]),_:1})}var he=O(te,[["render",ie]]);export{he as default};
