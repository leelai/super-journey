import{av as m,a as l,dU as c,b as d,ax as u,o as r,h as o,F as C,aA as _,q as a,bl as f,n as k}from"./index.fc3faea8.js";import{b as h}from"./index.d505df54.js";import"./index.0f98a01d.js";import"./index.254aeec1.js";import"./ArrowLeftOutlined.98c4fdfd.js";import"./index.d77daf00.js";import"./index.909f489b.js";import"./FullscreenOutlined.66288ba9.js";import"./index.d24df1b0.js";import"./useWindowSizeFn.f89b1927.js";import"./useContentViewHeight.34f2568f.js";import"./uniqBy.ccecbfcd.js";import"./_baseIteratee.c8657dae.js";import"./get.ba96f884.js";import"./index.b5465106.js";import"./useRefs.a8532142.js";import"./PlusOutlined.b5bea6b7.js";import"./RedoOutlined.16b688f2.js";import"./index.c044cf10.js";import"./lock.a885ab44.js";const v=l({name:"ThemeColorPicker",components:{CheckOutlined:c},props:{colorList:{type:Array,defualt:[]},event:{type:Number},def:{type:String}},setup(e){const{prefixCls:i}=d("setting-theme-picker");function n(s){e.event&&h(e.event,s)}return{prefixCls:i,handleClick:n}}}),y=["onClick"];function $(e,i,n,s,b,g){const p=u("CheckOutlined");return r(),o("div",{class:a(e.prefixCls)},[(r(!0),o(C,null,_(e.colorList||[],t=>(r(),o("span",{key:t,onClick:x=>e.handleClick(t),class:a([`${e.prefixCls}__item`,{[`${e.prefixCls}__item--active`]:e.def===t}]),style:f({background:t})},[k(p)],14,y))),128))],2)}var J=m(v,[["render",$]]);export{J as default};