var m=(a,r,e)=>new Promise((n,o)=>{var s=t=>{try{i(e.next(t))}catch(p){o(p)}},c=t=>{try{i(e.throw(t))}catch(p){o(p)}},i=t=>t.done?n(t.value):Promise.resolve(t.value).then(s,c);i((e=e.apply(a,r)).next())});import{_ as l}from"./index.d864d336.js";import{a as d}from"./system.a2f5c77c.js";import{a as f,v as u,N as _,av as h,ax as v,o as D,h as T,n as B}from"./index.fc3faea8.js";import"./fromPairs.84aabb58.js";import"./index.68fb9a6c.js";import"./eagerComputed.10ebfcb8.js";import"./useContextMenu.4fcd5ff4.js";import"./index.d77daf00.js";import"./get.ba96f884.js";const $=f({name:"DeptTree",components:{BasicTree:l},emits:["select"],setup(a,{emit:r}){const e=u([]);function n(){return m(this,null,function*(){e.value=yield d()})}function o(s){r("select",s[0])}return _(()=>{n()}),{treeData:e,handleSelect:o}}}),k={class:"m-4 mr-0 overflow-hidden bg-white"};function w(a,r,e,n,o,s){const c=v("BasicTree");return D(),T("div",k,[B(c,{title:"\u90E8\u95E8\u5217\u8868",toolbar:"",search:"",clickRowToExpand:!1,treeData:a.treeData,fieldNames:{key:"id",title:"deptName"},onSelect:a.handleSelect},null,8,["treeData","onSelect"])])}var R=h($,[["render",w]]);export{R as default};