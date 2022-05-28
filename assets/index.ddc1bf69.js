import{av as I,a as $,cF as b,b6 as C,br as D,aF as U,b as N,s as O,f as S,ax as t,o as n,h as x,n as r,z as d,j as f,k as _,m as a,q as s,t as A,F as E,c as P,aM as R}from"./index.fc3faea8.js";import{D as V}from"./siteSetting.c485f07c.js";import{c as y,u as B}from"./index.909f489b.js";import{b as F}from"./index.cfc9bad6.js";import{h as T}from"./header.d801b988.js";import"./FullscreenOutlined.66288ba9.js";import"./index.d24df1b0.js";import"./useWindowSizeFn.f89b1927.js";import"./useContentViewHeight.34f2568f.js";import"./uniqBy.ccecbfcd.js";import"./_baseIteratee.c8657dae.js";import"./get.ba96f884.js";import"./index.254aeec1.js";import"./index.b5465106.js";import"./useRefs.a8532142.js";import"./PlusOutlined.b5bea6b7.js";import"./RedoOutlined.16b688f2.js";import"./index.c044cf10.js";import"./lock.a885ab44.js";const z=$({name:"UserDropdown",components:{Dropdown:b,Menu:C,MenuItem:y(()=>D(()=>import("./DropMenuItem.f179829c.js"),["assets/DropMenuItem.f179829c.js","assets/index.fc3faea8.js","assets/index.5d37beeb.css"])),MenuDivider:C.Divider,LockAction:y(()=>D(()=>import("./LockModal.d0c37d60.js"),["assets/LockModal.d0c37d60.js","assets/LockModal.0068f88c.css","assets/index.86d55544.css","assets/index.a18cc309.css","assets/index.fc3faea8.js","assets/index.5d37beeb.css","assets/index.cfc9bad6.js","assets/index.4815a7e8.css","assets/useWindowSizeFn.f89b1927.js","assets/FullscreenOutlined.66288ba9.js","assets/BasicForm.71ea5698.js","assets/BasicForm.913136bc.css","assets/index.d77daf00.js","assets/index.3a3c1369.css","assets/index.8ac702ef.js","assets/index.cb0992d5.css","assets/Checkbox.53f1a47d.js","assets/index.8b03d6dc.js","assets/index.695a0c50.css","assets/index.ce0ccac6.js","assets/index.49ada229.css","assets/index.fbe9f60e.js","assets/index.47f7c782.css","assets/index.6c9a7918.js","assets/index.579bd49e.css","assets/index.858bd649.js","assets/index.7b8b5e30.css","assets/get.ba96f884.js","assets/index.68fb9a6c.js","assets/index.560eb672.css","assets/eagerComputed.10ebfcb8.js","assets/index.0b2a03dd.js","assets/index.aeeee80c.css","assets/_baseIteratee.c8657dae.js","assets/DeleteOutlined.a26e9ab9.js","assets/index.cf002398.js","assets/index.8f5fe29a.css","assets/useRefs.a8532142.js","assets/Form.cad30f1f.js","assets/Col.a69e5a89.js","assets/useFlexGapSupport.178e7204.js","assets/useSize.4121dc7e.js","assets/index.17b6973f.js","assets/index.cd256673.css","assets/index.6d18baa2.js","assets/index.9d09be4d.css","assets/index.87bd2c1a.js","assets/index.b1363280.css","assets/uuid.9bdf29ec.js","assets/download.9eb40c45.js","assets/base64Conver.08b9f4ec.js","assets/index.e72e760c.js","assets/index.cb030764.css","assets/index.f716c6d2.js","assets/uniqBy.ccecbfcd.js","assets/useForm.1a75448f.js","assets/lock.a885ab44.js","assets/header.d801b988.js"]))},props:{theme:U.oneOf(["dark","light"])},setup(){const{prefixCls:e}=N("header-user-dropdown"),{t:g}=P(),{getShowDoc:k,getUseLockPage:h}=B(),i=O(),v=S(()=>{const{realName:u="",avatar:L,desc:M}=i.getUserInfo||{};return{realName:u,avatar:L||T,desc:M}}),[o,{openModal:c}]=F();function l(){c(!0)}function p(){i.confirmLoginOut()}function m(){R(V)}function w(u){switch(u.key){case"logout":p();break;case"doc":m();break;case"lock":l();break}}return{prefixCls:e,t:g,getUserInfo:v,handleMenuClick:w,getShowDoc:k,register:o,getUseLockPage:h}}}),j=["src"];function q(e,g,k,h,i,v){const o=t("MenuItem"),c=t("MenuDivider"),l=t("Menu"),p=t("Dropdown"),m=t("LockAction");return n(),x(E,null,[r(p,{placement:"bottomLeft",overlayClassName:`${e.prefixCls}-dropdown-overlay`},{overlay:d(()=>[r(l,{onClick:e.handleMenuClick},{default:d(()=>[e.getShowDoc?(n(),f(o,{key:"doc",text:e.t("layout.header.dropdownItemDoc"),icon:"ion:document-text-outline"},null,8,["text"])):_("",!0),e.getShowDoc?(n(),f(c,{key:1})):_("",!0),e.getUseLockPage?(n(),f(o,{key:"lock",text:e.t("layout.header.tooltipLock"),icon:"ion:lock-closed-outline"},null,8,["text"])):_("",!0),r(o,{key:"logout",text:e.t("layout.header.dropdownItemLoginOut"),icon:"ion:power-outline"},null,8,["text"])]),_:1},8,["onClick"])]),default:d(()=>[a("span",{class:s([[e.prefixCls,`${e.prefixCls}--${e.theme}`],"flex"])},[a("img",{class:s(`${e.prefixCls}__header`),src:e.getUserInfo.avatar},null,10,j),a("span",{class:s(`${e.prefixCls}__info hidden md:block`)},[a("span",{class:s([`${e.prefixCls}__name  `,"truncate"])},A(e.getUserInfo.realName),3)],2)],2)]),_:1},8,["overlayClassName"]),r(m,{onRegister:e.register},null,8,["onRegister"])],64)}var pe=I(z,[["render",q]]);export{pe as default};