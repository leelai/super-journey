import{av as m,a as l,dU as c,b as d,ax as u,o as r,h as o,F as C,aA as _,q as a,bl as f,n as k}from"./index.b2c8267b.js";import{b as h}from"./index.7b228eb7.js";import"./index.b2013fed.js";import"./index.907da613.js";import"./ArrowLeftOutlined.adb1bdea.js";import"./index.a400d60a.js";import"./index.dc0dee99.js";import"./FullscreenOutlined.f58a66ff.js";import"./index.1aa0d2c2.js";import"./useWindowSizeFn.e63f4fea.js";import"./useContentViewHeight.dee9462e.js";import"./uniqBy.b8dc3978.js";import"./_baseIteratee.7354d7ba.js";import"./get.1d45560b.js";import"./index.c3364e23.js";import"./useRefs.ea975f28.js";import"./PlusOutlined.d285a238.js";import"./RedoOutlined.93b7aba9.js";import"./index.8e794847.js";import"./lock.3e3416bb.js";const v=l({name:"ThemeColorPicker",components:{CheckOutlined:c},props:{colorList:{type:Array,defualt:[]},event:{type:Number},def:{type:String}},setup(e){const{prefixCls:i}=d("setting-theme-picker");function n(s){e.event&&h(e.event,s)}return{prefixCls:i,handleClick:n}}}),y=["onClick"];function $(e,i,n,s,b,g){const p=u("CheckOutlined");return r(),o("div",{class:a(e.prefixCls)},[(r(!0),o(C,null,_(e.colorList||[],t=>(r(),o("span",{key:t,onClick:x=>e.handleClick(t),class:a([`${e.prefixCls}__item`,{[`${e.prefixCls}__item--active`]:e.def===t}]),style:f({background:t})},[k(p)],14,y))),128))],2)}var J=m(v,[["render",$]]);export{J as default};
