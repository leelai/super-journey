import{B as n}from"./TableImg.d86ccd39.js";import"./BasicForm.a337e69a.js";import{u as l}from"./useTable.0ffa4838.js";import{getBasicColumns as c,getTreeTableData as d}from"./tableData.0a246808.js";import{av as _,a as b,ax as a,o as f,h as C,n as t,z as r,B as s}from"./index.ba3b24b5.js";import"./index.c8f9caab.js";import"./Checkbox.0a927e66.js";import"./index.1e08f3b0.js";import"./index.ca8eef09.js";import"./eagerComputed.c7b4118f.js";import"./useForm.7b12087c.js";import"./index.122169c5.js";import"./index.da51d99b.js";import"./index.ae0b5d6f.js";import"./useSize.ef0d9e5e.js";import"./useWindowSizeFn.e706818d.js";import"./useContentViewHeight.e95be732.js";import"./ArrowLeftOutlined.103c8414.js";import"./index.40f803a3.js";import"./transButton.cc95c8c5.js";import"./index.13fcd19d.js";import"./index.2252f0e8.js";import"./index.1ce12471.js";import"./uuid.9bdf29ec.js";import"./index.c1378dd4.js";import"./_baseIteratee.59e381a2.js";import"./get.9b79196e.js";import"./DeleteOutlined.17965553.js";import"./index.6e703ded.js";import"./useRefs.1a30c69a.js";import"./Form.5719daad.js";import"./Col.07a98f77.js";import"./useFlexGapSupport.2814e35a.js";import"./index.3f0076f0.js";import"./FullscreenOutlined.85275856.js";import"./index.db6619f8.js";import"./sortable.esm.2632adaa.js";import"./RedoOutlined.5fbae6ce.js";import"./index.811c44d7.js";import"./fromPairs.84aabb58.js";import"./scrollTo.8b760a04.js";import"./index.15fd00c8.js";/* empty css              *//* empty css               */import"./index.4cc19566.js";import"./index.f657386e.js";import"./index.8303bd01.js";import"./download.fba38a9c.js";import"./base64Conver.08b9f4ec.js";import"./index.7e18b2d6.js";import"./index.9e76bc71.js";import"./uniqBy.2019406b.js";const T=b({components:{BasicTable:n},setup(){const[o,{expandAll:e,collapseAll:i}]=l({title:"\u6811\u5F62\u8868\u683C",isTreeTable:!0,rowSelection:{type:"checkbox",getCheckboxProps(p){return p.id==="0"?{disabled:!0}:{disabled:!1}}},titleHelpMessage:"\u6811\u5F62\u7EC4\u4EF6\u4E0D\u80FD\u548C\u5E8F\u5217\u53F7\u5217\u540C\u65F6\u5B58\u5728",columns:c(),dataSource:d(),rowKey:"id"});return{register:o,expandAll:e,collapseAll:i}}}),B={class:"p-4"},g=s("\u5C55\u5F00\u5168\u90E8"),h=s("\u6298\u53E0\u5168\u90E8");function k(o,e,i,p,E,F){const m=a("a-button"),u=a("BasicTable");return f(),C("div",B,[t(u,{onRegister:o.register},{toolbar:r(()=>[t(m,{type:"primary",onClick:o.expandAll},{default:r(()=>[g]),_:1},8,["onClick"]),t(m,{type:"primary",onClick:o.collapseAll},{default:r(()=>[h]),_:1},8,["onClick"])]),_:1},8,["onRegister"])])}var Fo=_(T,[["render",k]]);export{Fo as default};