import{a as c,bc as p,i,o as _,h as l}from"./index.84f51bc6.js";const h=c({name:"index",setup(u){const{currentRoute:o,replace:a}=p(),{params:e,query:n}=i(o),{path:r,_redirect_type:s="path"}=e;Reflect.deleteProperty(e,"_redirect_type"),Reflect.deleteProperty(e,"path");const t=Array.isArray(r)?r.join("/"):r;return a(s==="name"?{name:t,query:n,params:e}:{path:t.startsWith("/")?t:"/"+t,query:n}),(m,d)=>(_(),l("div"))}});export{h as default};
