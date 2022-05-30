import{av as I,a as $,cF as b,b6 as C,br as D,aF as U,b as N,s as O,f as S,ax as t,o as n,h as x,n as r,z as d,j as f,k as _,m as a,q as s,t as A,F as E,c as P,aM as R}from"./index.ba3b24b5.js";import{D as V}from"./siteSetting.c485f07c.js";import{c as y,u as B}from"./index.b251c430.js";import{b as F}from"./index.3f0076f0.js";import{h as T}from"./header.d801b988.js";import"./FullscreenOutlined.85275856.js";import"./index.d209119c.js";import"./useWindowSizeFn.e706818d.js";import"./useContentViewHeight.e95be732.js";import"./uniqBy.2019406b.js";import"./_baseIteratee.59e381a2.js";import"./get.9b79196e.js";import"./index.965d172e.js";import"./index.5e773f80.js";import"./useRefs.1a30c69a.js";import"./PlusOutlined.848a5dc6.js";import"./RedoOutlined.5fbae6ce.js";import"./index.f6a95e83.js";import"./lock.dbb19512.js";const z=$({name:"UserDropdown",components:{Dropdown:b,Menu:C,MenuItem:y(()=>D(()=>import("./DropMenuItem.d30d0cc2.js"),["assets/DropMenuItem.d30d0cc2.js","assets/index.ba3b24b5.js","assets/index.5d37beeb.css"])),MenuDivider:C.Divider,LockAction:y(()=>D(()=>import("./LockModal.dc439089.js"),["assets/LockModal.dc439089.js","assets/LockModal.0068f88c.css","assets/index.86d55544.css","assets/index.a18cc309.css","assets/index.ba3b24b5.js","assets/index.5d37beeb.css","assets/index.3f0076f0.js","assets/index.4815a7e8.css","assets/useWindowSizeFn.e706818d.js","assets/FullscreenOutlined.85275856.js","assets/BasicForm.a337e69a.js","assets/BasicForm.913136bc.css","assets/index.db6619f8.js","assets/index.3a3c1369.css","assets/index.c8f9caab.js","assets/index.cb0992d5.css","assets/Checkbox.0a927e66.js","assets/index.1e08f3b0.js","assets/index.695a0c50.css","assets/index.1ce12471.js","assets/index.49ada229.css","assets/index.13fcd19d.js","assets/index.47f7c782.css","assets/index.2252f0e8.js","assets/index.579bd49e.css","assets/index.4cc19566.js","assets/index.7b8b5e30.css","assets/get.9b79196e.js","assets/index.ca8eef09.js","assets/index.560eb672.css","assets/eagerComputed.c7b4118f.js","assets/index.c1378dd4.js","assets/index.aeeee80c.css","assets/_baseIteratee.59e381a2.js","assets/DeleteOutlined.17965553.js","assets/index.6e703ded.js","assets/index.8f5fe29a.css","assets/useRefs.1a30c69a.js","assets/Form.5719daad.js","assets/Col.07a98f77.js","assets/useFlexGapSupport.2814e35a.js","assets/useSize.ef0d9e5e.js","assets/index.f657386e.js","assets/index.cd256673.css","assets/index.8303bd01.js","assets/index.9d09be4d.css","assets/index.811c44d7.js","assets/index.b1363280.css","assets/uuid.9bdf29ec.js","assets/download.fba38a9c.js","assets/base64Conver.08b9f4ec.js","assets/index.7e18b2d6.js","assets/index.cb030764.css","assets/index.9e76bc71.js","assets/uniqBy.2019406b.js","assets/useForm.7b12087c.js","assets/lock.dbb19512.js","assets/header.d801b988.js"]))},props:{theme:U.oneOf(["dark","light"])},setup(){const{prefixCls:e}=N("header-user-dropdown"),{t:g}=P(),{getShowDoc:k,getUseLockPage:h}=B(),i=O(),v=S(()=>{const{realName:u="",avatar:L,desc:M}=i.getUserInfo||{};return{realName:u,avatar:L||T,desc:M}}),[o,{openModal:c}]=F();function l(){c(!0)}function p(){i.confirmLoginOut()}function m(){R(V)}function w(u){switch(u.key){case"logout":p();break;case"doc":m();break;case"lock":l();break}}return{prefixCls:e,t:g,getUserInfo:v,handleMenuClick:w,getShowDoc:k,register:o,getUseLockPage:h}}}),j=["src"];function q(e,g,k,h,i,v){const o=t("MenuItem"),c=t("MenuDivider"),l=t("Menu"),p=t("Dropdown"),m=t("LockAction");return n(),x(E,null,[r(p,{placement:"bottomLeft",overlayClassName:`${e.prefixCls}-dropdown-overlay`},{overlay:d(()=>[r(l,{onClick:e.handleMenuClick},{default:d(()=>[e.getShowDoc?(n(),f(o,{key:"doc",text:e.t("layout.header.dropdownItemDoc"),icon:"ion:document-text-outline"},null,8,["text"])):_("",!0),e.getShowDoc?(n(),f(c,{key:1})):_("",!0),e.getUseLockPage?(n(),f(o,{key:"lock",text:e.t("layout.header.tooltipLock"),icon:"ion:lock-closed-outline"},null,8,["text"])):_("",!0),r(o,{key:"logout",text:e.t("layout.header.dropdownItemLoginOut"),icon:"ion:power-outline"},null,8,["text"])]),_:1},8,["onClick"])]),default:d(()=>[a("span",{class:s([[e.prefixCls,`${e.prefixCls}--${e.theme}`],"flex"])},[a("img",{class:s(`${e.prefixCls}__header`),src:e.getUserInfo.avatar},null,10,j),a("span",{class:s(`${e.prefixCls}__info hidden md:block`)},[a("span",{class:s([`${e.prefixCls}__name  `,"truncate"])},A(e.getUserInfo.realName),3)],2)],2)]),_:1},8,["overlayClassName"]),r(m,{onRegister:e.register},null,8,["onRegister"])],64)}var pe=I(z,[["render",q]]);export{pe as default};
