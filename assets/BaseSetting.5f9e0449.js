var d=(o,s,r)=>new Promise((c,i)=>{var l=e=>{try{a(r.next(e))}catch(m){i(m)}},t=e=>{try{a(r.throw(e))}catch(m){i(m)}},a=e=>e.done?c(e.value):Promise.resolve(e.value).then(l,t);a((r=r.apply(o,s)).next())});import{a as v,cC as h,C as B,s as F,N as g,f as A,av as b,E as I,ax as p,o as S,j as w,z as u,n,m as _,fa as y,fb as E,B as R}from"./index.84f51bc6.js";/* empty css               */import{B as k}from"./BasicForm.7389292c.js";import{u as x}from"./useForm.cd12ce3e.js";import{a as N}from"./index.18bb5f60.js";import{h as U}from"./header.d801b988.js";import{a as V}from"./account.038d8ad2.js";import{b as $}from"./data.08d7c751.js";import{u as M}from"./upload.84d0ab92.js";import{R as T,C as j}from"./index.dfd27e00.js";/* empty css              */import"./index.e6d997b7.js";import"./index.e783d7a4.js";import"./Checkbox.29e5448e.js";import"./index.121070d7.js";import"./index.04f42628.js";import"./index.213e5fdf.js";import"./index.1482bccc.js";import"./index.51387801.js";import"./get.43c7e1f7.js";import"./index.830e2b13.js";import"./eagerComputed.fe6422a6.js";import"./index.7d48ba76.js";import"./_baseIteratee.b8f1e605.js";import"./DeleteOutlined.b2d33d4b.js";import"./index.cb8f3fac.js";import"./useRefs.5f3f03ad.js";import"./Form.9abcaf03.js";import"./Col.f571ced5.js";import"./useFlexGapSupport.9e6734b3.js";import"./useSize.57eaf44d.js";import"./index.fffc6c58.js";import"./index.245fc1fa.js";import"./useWindowSizeFn.25af7ad9.js";import"./FullscreenOutlined.b81ac762.js";import"./index.08310ad3.js";import"./index.1dff6863.js";import"./uuid.9bdf29ec.js";import"./download.2e77e37e.js";import"./base64Conver.08b9f4ec.js";import"./index.1e0cde80.js";import"./uniqBy.3d46ba2f.js";import"./index.3580ad56.js";import"./index.b8a6e61f.js";const z=v({components:{BasicForm:k,CollapseContainer:h,Button:B,ARow:T,ACol:j,CropperAvatar:N},setup(){const{createMessage:o}=I(),s=F(),[r,{setFieldsValue:c}]=x({labelWidth:120,schemas:$,showActionButtonGroup:!1});g(()=>d(this,null,function*(){const t=yield V();c(t)}));const i=A(()=>{const{avatar:t}=s.getUserInfo;return t||U});function l(t){const a=s.getUserInfo;a.avatar=t,s.setUserInfo(a)}return{avatar:i,register:r,uploadApi:M,updateAvatar:l,handleSubmit:()=>{o.success("\u66F4\u65B0\u6210\u529F\uFF01")}}}}),G=o=>(y("data-v-249137cb"),o=o(),E(),o),P={class:"change-avatar"},W=G(()=>_("div",{class:"mb-2"},"\u5934\u50CF",-1)),q=R(" \u66F4\u65B0\u57FA\u672C\u4FE1\u606F ");function D(o,s,r,c,i,l){const t=p("BasicForm"),a=p("a-col"),e=p("CropperAvatar"),m=p("a-row"),f=p("Button"),C=p("CollapseContainer");return S(),w(C,{title:"\u57FA\u672C\u8BBE\u7F6E",canExpan:!1},{default:u(()=>[n(m,{gutter:24},{default:u(()=>[n(a,{span:14},{default:u(()=>[n(t,{onRegister:o.register},null,8,["onRegister"])]),_:1}),n(a,{span:10},{default:u(()=>[_("div",P,[W,n(e,{uploadApi:o.uploadApi,value:o.avatar,btnText:"\u66F4\u6362\u5934\u50CF",btnProps:{preIcon:"ant-design:cloud-upload-outlined"},onChange:o.updateAvatar,width:"150"},null,8,["uploadApi","value","onChange"])])]),_:1})]),_:1}),n(f,{type:"primary",onClick:o.handleSubmit},{default:u(()=>[q]),_:1},8,["onClick"])]),_:1})}var To=b(z,[["render",D],["__scopeId","data-v-249137cb"]]);export{To as default};
