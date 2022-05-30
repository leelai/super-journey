import{au as M,a as $,cE as b,b5 as v,bq as D,aE as U,b as E,s as N,f as O,aw as t,o as n,h as S,n as r,z as d,j as f,k as _,m as a,q as s,t as A,F as x,c as P,aL as R}from"./index.00ded5ec.js";import{D as V}from"./siteSetting.c485f07c.js";import{c as y,u as B}from"./index.8359767e.js";import{b as T}from"./index.fd3f14ec.js";import{h as q}from"./header.d801b988.js";import"./FullscreenOutlined.9fa31b99.js";import"./index.fcb6d0c8.js";import"./useWindowSizeFn.8613736c.js";import"./useContentViewHeight.e5cdac7c.js";import"./uniqBy.f5f9fa77.js";import"./_baseIteratee.5a800ee0.js";import"./get.e98c9102.js";import"./index.e81d0b20.js";import"./index.1950974c.js";import"./useRefs.35df9853.js";import"./PlusOutlined.caad6c7d.js";import"./RedoOutlined.aad7a5d9.js";import"./index.96c7a7d2.js";import"./lock.543ec502.js";const z=$({name:"UserDropdown",components:{Dropdown:b,Menu:v,MenuItem:y(()=>D(()=>import("./DropMenuItem.23ee373b.js"),["assets/DropMenuItem.23ee373b.js","assets/index.00ded5ec.js","assets/index.5d37beeb.css"])),MenuDivider:v.Divider,LockAction:y(()=>D(()=>import("./LockModal.eb790170.js"),["assets/LockModal.eb790170.js","assets/LockModal.0068f88c.css","assets/index.86d55544.css","assets/index.a18cc309.css","assets/index.00ded5ec.js","assets/index.5d37beeb.css","assets/index.fd3f14ec.js","assets/index.4815a7e8.css","assets/useWindowSizeFn.8613736c.js","assets/FullscreenOutlined.9fa31b99.js","assets/BasicForm.e2136524.js","assets/BasicForm.913136bc.css","assets/index.b5127d68.js","assets/index.3a3c1369.css","assets/index.603fa52d.js","assets/index.cb0992d5.css","assets/Checkbox.e1e6f642.js","assets/index.00c8deee.js","assets/index.695a0c50.css","assets/index.22208324.js","assets/index.49ada229.css","assets/index.b378a6aa.js","assets/index.47f7c782.css","assets/index.bc3beb44.js","assets/index.579bd49e.css","assets/index.6f890765.js","assets/index.7b8b5e30.css","assets/get.e98c9102.js","assets/index.ca68839c.js","assets/index.560eb672.css","assets/eagerComputed.5fd5be55.js","assets/index.a439fbd0.js","assets/index.aeeee80c.css","assets/_baseIteratee.5a800ee0.js","assets/DeleteOutlined.d374c42e.js","assets/index.39991b12.js","assets/index.8f5fe29a.css","assets/useRefs.35df9853.js","assets/Form.8bff5e4e.js","assets/Col.8d574553.js","assets/useFlexGapSupport.641c96d8.js","assets/useSize.ddff592e.js","assets/index.47034b24.js","assets/index.cd256673.css","assets/index.3ae0d52e.js","assets/index.9d09be4d.css","assets/index.fa69315c.js","assets/index.b1363280.css","assets/uuid.9bdf29ec.js","assets/download.1c38bf09.js","assets/base64Conver.08b9f4ec.js","assets/index.9306f112.js","assets/index.cb030764.css","assets/index.080dba7a.js","assets/uniqBy.f5f9fa77.js","assets/useForm.949127c8.js","assets/lock.543ec502.js","assets/header.d801b988.js"]))},props:{theme:U.oneOf(["dark","light"])},setup(){const{prefixCls:e}=E("header-user-dropdown"),{t:g}=P(),{getShowDoc:k,getUseLockPage:h}=B(),i=N(),C=O(()=>{const{realName:u="",avatar:L,desc:I}=i.getUserInfo||{};return{realName:u,avatar:L||q,desc:I}}),[o,{openModal:c}]=T();function l(){c(!0)}function p(){i.confirmLoginOut()}function m(){R(V)}function w(u){switch(u.key){case"logout":p();break;case"doc":m();break;case"lock":l();break}}return{prefixCls:e,t:g,getUserInfo:C,handleMenuClick:w,getShowDoc:k,register:o,getUseLockPage:h}}}),F=["src"];function j(e,g,k,h,i,C){const o=t("MenuItem"),c=t("MenuDivider"),l=t("Menu"),p=t("Dropdown"),m=t("LockAction");return n(),S(x,null,[r(p,{placement:"bottomLeft",overlayClassName:`${e.prefixCls}-dropdown-overlay`},{overlay:d(()=>[r(l,{onClick:e.handleMenuClick},{default:d(()=>[e.getShowDoc?(n(),f(o,{key:"doc",text:e.t("layout.header.dropdownItemDoc"),icon:"ion:document-text-outline"},null,8,["text"])):_("",!0),e.getShowDoc?(n(),f(c,{key:1})):_("",!0),e.getUseLockPage?(n(),f(o,{key:"lock",text:e.t("layout.header.tooltipLock"),icon:"ion:lock-closed-outline"},null,8,["text"])):_("",!0),r(o,{key:"logout",text:e.t("layout.header.dropdownItemLoginOut"),icon:"ion:power-outline"},null,8,["text"])]),_:1},8,["onClick"])]),default:d(()=>[a("span",{class:s([[e.prefixCls,`${e.prefixCls}--${e.theme}`],"flex"])},[a("img",{class:s(`${e.prefixCls}__header`),src:e.getUserInfo.avatar},null,10,F),a("span",{class:s(`${e.prefixCls}__info hidden md:block`)},[a("span",{class:s([`${e.prefixCls}__name  `,"truncate"])},A(e.getUserInfo.realName),3)],2)],2)]),_:1},8,["overlayClassName"]),r(m,{onRegister:e.register},null,8,["onRegister"])],64)}var pe=M(z,[["render",j]]);export{pe as default};
