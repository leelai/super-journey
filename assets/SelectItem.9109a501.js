import{av as i,a as r,cU as l,b as p,f as m,ax as d,o as c,h as u,m as f,t as g,n as _,ay as v,q as b}from"./index.ba3b24b5.js";import{b as y}from"./index.5b29dbb0.js";import"./index.ebe7a951.js";import"./index.965d172e.js";import"./ArrowLeftOutlined.103c8414.js";import"./index.db6619f8.js";import"./index.b251c430.js";import"./FullscreenOutlined.85275856.js";import"./index.d209119c.js";import"./useWindowSizeFn.e706818d.js";import"./useContentViewHeight.e95be732.js";import"./uniqBy.2019406b.js";import"./_baseIteratee.59e381a2.js";import"./get.9b79196e.js";import"./index.5e773f80.js";import"./useRefs.1a30c69a.js";import"./PlusOutlined.848a5dc6.js";import"./RedoOutlined.5fbae6ce.js";import"./index.f6a95e83.js";import"./lock.dbb19512.js";const C=r({name:"SelectItem",components:{Select:l},props:{event:{type:Number},disabled:{type:Boolean},title:{type:String},def:{type:[String,Number]},initValue:{type:[String,Number]},options:{type:Array,default:()=>[]}},setup(e){const{prefixCls:t}=p("setting-select-item"),a=m(()=>e.def?{value:e.def,defaultValue:e.initValue||e.def}:{});function o(n){e.event&&y(e.event,n)}return{prefixCls:t,handleChange:o,getBindValue:a}}});function S(e,t,a,o,n,h){const s=d("Select");return c(),u("div",{class:b(e.prefixCls)},[f("span",null,g(e.title),1),_(s,v(e.getBindValue,{class:`${e.prefixCls}-select`,onChange:e.handleChange,disabled:e.disabled,size:"small",options:e.options}),null,16,["class","onChange","disabled","options"])],2)}var K=i(C,[["render",S],["__scopeId","data-v-6707e46b"]]);export{K as default};