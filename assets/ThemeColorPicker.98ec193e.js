import{au as m,a as l,dT as c,b as d,aw as u,o as r,h as o,F as C,az as _,q as a,bk as f,n as k}from"./index.00ded5ec.js";import{b as h}from"./index.db2cd981.js";import"./index.a33db88a.js";import"./index.e81d0b20.js";import"./ArrowLeftOutlined.d0c01883.js";import"./index.b5127d68.js";import"./index.8359767e.js";import"./FullscreenOutlined.9fa31b99.js";import"./index.fcb6d0c8.js";import"./useWindowSizeFn.8613736c.js";import"./useContentViewHeight.e5cdac7c.js";import"./uniqBy.f5f9fa77.js";import"./_baseIteratee.5a800ee0.js";import"./get.e98c9102.js";import"./index.1950974c.js";import"./useRefs.35df9853.js";import"./PlusOutlined.caad6c7d.js";import"./RedoOutlined.aad7a5d9.js";import"./index.96c7a7d2.js";import"./lock.543ec502.js";const v=l({name:"ThemeColorPicker",components:{CheckOutlined:c},props:{colorList:{type:Array,defualt:[]},event:{type:Number},def:{type:String}},setup(e){const{prefixCls:i}=d("setting-theme-picker");function n(s){e.event&&h(e.event,s)}return{prefixCls:i,handleClick:n}}}),y=["onClick"];function $(e,i,n,s,b,g){const p=u("CheckOutlined");return r(),o("div",{class:a(e.prefixCls)},[(r(!0),o(C,null,_(e.colorList||[],t=>(r(),o("span",{key:t,onClick:T=>e.handleClick(t),class:a([`${e.prefixCls}__item`,{[`${e.prefixCls}__item--active`]:e.def===t}]),style:f({background:t})},[k(p)],14,y))),128))],2)}var K=m(v,[["render",$]]);export{K as default};