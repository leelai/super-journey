import{B as c}from"./TableImg.d86ccd39.js";import"./BasicForm.a337e69a.js";import{u as l}from"./useTable.0ffa4838.js";import{getBasicColumns as d}from"./tableData.0a246808.js";import{P as _}from"./index.122169c5.js";import{d as f}from"./table.92322a78.js";import{av as g,a as B,ax as e,o as C,j as h,z as t,n as i,B as n}from"./index.ba3b24b5.js";import"./index.c8f9caab.js";import"./Checkbox.0a927e66.js";import"./index.1e08f3b0.js";import"./index.ca8eef09.js";import"./eagerComputed.c7b4118f.js";import"./useForm.7b12087c.js";import"./index.13fcd19d.js";import"./index.2252f0e8.js";import"./index.1ce12471.js";import"./uuid.9bdf29ec.js";import"./index.c1378dd4.js";import"./_baseIteratee.59e381a2.js";import"./get.9b79196e.js";import"./DeleteOutlined.17965553.js";import"./index.6e703ded.js";import"./useRefs.1a30c69a.js";import"./Form.5719daad.js";import"./Col.07a98f77.js";import"./useFlexGapSupport.2814e35a.js";import"./useSize.ef0d9e5e.js";import"./useWindowSizeFn.e706818d.js";import"./index.3f0076f0.js";import"./FullscreenOutlined.85275856.js";import"./index.db6619f8.js";import"./sortable.esm.2632adaa.js";import"./RedoOutlined.5fbae6ce.js";import"./index.811c44d7.js";import"./fromPairs.84aabb58.js";import"./scrollTo.8b760a04.js";import"./index.15fd00c8.js";/* empty css              *//* empty css               */import"./index.4cc19566.js";import"./index.f657386e.js";import"./index.8303bd01.js";import"./download.fba38a9c.js";import"./base64Conver.08b9f4ec.js";import"./index.7e18b2d6.js";import"./index.9e76bc71.js";import"./uniqBy.2019406b.js";import"./index.da51d99b.js";import"./index.ae0b5d6f.js";import"./useContentViewHeight.e95be732.js";import"./ArrowLeftOutlined.103c8414.js";import"./index.40f803a3.js";import"./transButton.cc95c8c5.js";const b=B({components:{BasicTable:c,PageWrapper:_},setup(){const[o,{reload:r}]=l({title:"\u8FDC\u7A0B\u52A0\u8F7D\u793A\u4F8B",api:f,columns:d(),pagination:{pageSize:10}});function p(){r()}function m(){r({page:1})}return{registerTable:o,handleReloadCurrent:p,handleReload:m}}}),T=n(" \u5237\u65B0\u5F53\u524D\u9875 "),k=n(" \u5237\u65B0\u5E76\u8FD4\u56DE\u7B2C\u4E00\u9875 ");function F(o,r,p,m,R,x){const a=e("a-button"),s=e("BasicTable"),u=e("PageWrapper");return C(),h(u,{contentBackground:"",contentClass:"flex",dense:"",contentFullHeight:"",fixedHeight:""},{default:t(()=>[i(s,{onRegister:o.registerTable},{toolbar:t(()=>[i(a,{type:"primary",onClick:o.handleReloadCurrent},{default:t(()=>[T]),_:1},8,["onClick"]),i(a,{type:"primary",onClick:o.handleReload},{default:t(()=>[k]),_:1},8,["onClick"])]),_:1},8,["onRegister"])]),_:1})}var Do=g(b,[["render",F]]);export{Do as default};