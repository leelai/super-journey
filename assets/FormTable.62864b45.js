import{B as g}from"./TableImg.ba179e0d.js";import"./BasicForm.1b5bd687.js";import{u as h}from"./useTable.9e06c63e.js";import{getBasicColumns as _,getFormConfig as F}from"./tableData.0a246808.js";import{av as k,a as y,v as B,ax as i,o as m,j as C,z as t,n as s,h as c,m as b,t as E,F as T,B as p}from"./index.289ed826.js";import{A}from"./index.d4f5b12d.js";import{d as S}from"./table.9711131d.js";import"./index.7e7727b9.js";import"./Checkbox.295927d0.js";import"./index.44f0d70d.js";import"./index.87462514.js";import"./eagerComputed.2f2760f5.js";import"./useForm.eb39f133.js";import"./index.9fc4bcb7.js";import"./index.7d70bc02.js";import"./index.2dadd087.js";import"./useSize.72933dfd.js";import"./useWindowSizeFn.37dbb8b5.js";import"./useContentViewHeight.2b83e970.js";import"./ArrowLeftOutlined.99118cfd.js";import"./index.2404f168.js";import"./transButton.ffe99d7d.js";import"./index.796aa85d.js";import"./index.8edf49fa.js";import"./index.38f4e319.js";import"./uuid.9bdf29ec.js";import"./index.43ae326d.js";import"./_baseIteratee.9673302e.js";import"./get.28189faa.js";import"./DeleteOutlined.3eec6ee6.js";import"./index.3880b804.js";import"./useRefs.520a466b.js";import"./Form.65843a95.js";import"./Col.5a3fd34a.js";import"./useFlexGapSupport.afd86d94.js";import"./index.8b8fe816.js";import"./FullscreenOutlined.6f41f7b1.js";import"./index.49a3f569.js";import"./sortable.esm.2632adaa.js";import"./RedoOutlined.1ce5f7dc.js";import"./index.7e312ce1.js";import"./fromPairs.84aabb58.js";import"./scrollTo.3481862e.js";import"./index.2741238c.js";/* empty css              *//* empty css               */import"./index.423c8e2c.js";import"./index.c6314a19.js";import"./download.db9928da.js";import"./base64Conver.08b9f4ec.js";import"./index.cbb37fc2.js";import"./index.3aeb7fcd.js";import"./uniqBy.ea16bc04.js";const D=y({components:{BasicTable:g,AAlert:A},setup(){const o=B([]),[e,{getForm:n}]=h({title:"\u5F00\u542F\u641C\u7D22\u533A\u57DF",api:S,columns:_(),useSearchForm:!0,formConfig:F(),showTableSetting:!0,tableSetting:{fullScreen:!0},showIndexColumn:!1,rowKey:"id"});function a(){n().getFieldsValue()}function u(r){o.value=r}return{registerTable:e,getFormValues:a,checkedKeys:o,onSelectChange:u}}}),w=p(" custom-slot "),v=p("\u6E05\u7A7A"),K={key:1},V=p("\u83B7\u53D6\u8868\u5355\u6570\u636E");function $(o,e,n,a,u,r){const l=i("a-button"),d=i("a-alert"),f=i("BasicTable");return m(),C(f,{onRegister:o.registerTable,rowSelection:{type:"checkbox",selectedRowKeys:o.checkedKeys,onChange:o.onSelectChange}},{"form-custom":t(()=>[w]),headerTop:t(()=>[s(d,{type:"info","show-icon":""},{message:t(()=>[o.checkedKeys.length>0?(m(),c(T,{key:0},[b("span",null,"\u5DF2\u9009\u4E2D"+E(o.checkedKeys.length)+"\u6761\u8BB0\u5F55(\u53EF\u8DE8\u9875)",1),s(l,{type:"link",onClick:e[0]||(e[0]=N=>o.checkedKeys=[]),size:"small"},{default:t(()=>[v]),_:1})],64)):(m(),c("span",K,"\u672A\u9009\u4E2D\u4EFB\u4F55\u9879\u76EE"))]),_:1})]),toolbar:t(()=>[s(l,{type:"primary",onClick:o.getFormValues},{default:t(()=>[V]),_:1},8,["onClick"])]),_:1},8,["onRegister","rowSelection"])}var zo=k(D,[["render",$]]);export{zo as default};
