import{B as d}from"./TableImg.d86ccd39.js";import"./BasicForm.a337e69a.js";import{E as f}from"./index.1c4231c7.js";import{c as _,d as s,j as E}from"./data.44bf6939.js";import{b as B}from"./index.3f0076f0.js";import{P as C}from"./index.122169c5.js";import{av as F,a as x,ax as t,o as b,j as g,z as r,n as p,B as M}from"./index.ba3b24b5.js";import"./index.c8f9caab.js";import"./Checkbox.0a927e66.js";import"./index.1e08f3b0.js";import"./index.ca8eef09.js";import"./eagerComputed.c7b4118f.js";import"./useForm.7b12087c.js";import"./index.13fcd19d.js";import"./index.2252f0e8.js";import"./index.1ce12471.js";import"./uuid.9bdf29ec.js";import"./index.c1378dd4.js";import"./_baseIteratee.59e381a2.js";import"./get.9b79196e.js";import"./DeleteOutlined.17965553.js";import"./index.6e703ded.js";import"./useRefs.1a30c69a.js";import"./Form.5719daad.js";import"./Col.07a98f77.js";import"./useFlexGapSupport.2814e35a.js";import"./useSize.ef0d9e5e.js";import"./useWindowSizeFn.e706818d.js";import"./index.db6619f8.js";import"./sortable.esm.2632adaa.js";import"./RedoOutlined.5fbae6ce.js";import"./FullscreenOutlined.85275856.js";import"./index.811c44d7.js";import"./fromPairs.84aabb58.js";import"./scrollTo.8b760a04.js";import"./index.15fd00c8.js";/* empty css              *//* empty css               */import"./index.4cc19566.js";import"./index.f657386e.js";import"./index.8303bd01.js";import"./download.fba38a9c.js";import"./base64Conver.08b9f4ec.js";import"./index.7e18b2d6.js";import"./index.9e76bc71.js";import"./uniqBy.2019406b.js";import"./index.da51d99b.js";import"./index.ae0b5d6f.js";import"./useContentViewHeight.e95be732.js";import"./ArrowLeftOutlined.103c8414.js";import"./index.40f803a3.js";import"./transButton.cc95c8c5.js";const A=x({components:{BasicTable:d,ExpExcelModal:f,PageWrapper:C},setup(){function o({filename:m,bookType:a}){E({data:s,filename:m,write2excelOpts:{bookType:a}})}const[e,{openModal:i}]=B();return{defaultHeader:o,columns:_,data:s,register:e,openModal:i}}}),S=M(" \u5BFC\u51FA ");function T(o,e,i,m,a,h){const n=t("a-button"),u=t("BasicTable"),c=t("ExpExcelModal"),l=t("PageWrapper");return b(),g(l,{title:"\u5BFC\u51FA\u793A\u4F8B",content:"\u53EF\u4EE5\u9009\u62E9\u5BFC\u51FA\u683C\u5F0F"},{default:r(()=>[p(u,{title:"\u57FA\u7840\u8868\u683C",columns:o.columns,dataSource:o.data},{toolbar:r(()=>[p(n,{onClick:o.openModal},{default:r(()=>[S]),_:1},8,["onClick"])]),_:1},8,["columns","dataSource"]),p(c,{onRegister:o.register,onSuccess:o.defaultHeader},null,8,["onRegister","onSuccess"])]),_:1})}var ho=F(A,[["render",T]]);export{ho as default};
