import{B as g}from"./TableImg.1832050e.js";import"./BasicForm.6b4a9385.js";import{u as h}from"./useTable.5aa1bc15.js";import{getBasicColumns as _,getFormConfig as F}from"./tableData.0a246808.js";import{av as k,a as y,v as B,ax as i,o as m,j as C,z as t,n as s,h as c,m as b,t as E,F as T,B as p}from"./index.1f2f64cc.js";import{A}from"./index.8a25b293.js";import{d as S}from"./table.92d393fe.js";import"./index.d264169d.js";import"./Checkbox.ef64d3e6.js";import"./index.55bd6380.js";import"./index.5a7917e3.js";import"./eagerComputed.265fcbbd.js";import"./useForm.4c6a476e.js";import"./index.b45ead2e.js";import"./index.b7e23e5a.js";import"./index.d68860b8.js";import"./useSize.a2dac83c.js";import"./useWindowSizeFn.50e314e7.js";import"./useContentViewHeight.490ce0c5.js";import"./ArrowLeftOutlined.f91dc397.js";import"./index.5fc65200.js";import"./transButton.e3875fe3.js";import"./index.ec6bc0e2.js";import"./index.0b950b2c.js";import"./index.7e7a9d30.js";import"./uuid.9bdf29ec.js";import"./index.24351a94.js";import"./_baseIteratee.6ed626fd.js";import"./get.2e04779a.js";import"./DeleteOutlined.a24e248d.js";import"./index.84b0a4b6.js";import"./useRefs.64459683.js";import"./Form.723281e3.js";import"./Col.57beb858.js";import"./useFlexGapSupport.5941dfc5.js";import"./index.0f68943d.js";import"./FullscreenOutlined.2f1874a9.js";import"./index.73178210.js";import"./sortable.esm.2632adaa.js";import"./RedoOutlined.fc6e3696.js";import"./index.983477aa.js";import"./fromPairs.84aabb58.js";import"./scrollTo.223dfe99.js";import"./index.14f2b050.js";/* empty css              *//* empty css               */import"./index.bf9b1321.js";import"./index.a0f90bca.js";import"./download.69b10efa.js";import"./base64Conver.08b9f4ec.js";import"./index.f2835988.js";import"./index.56ed6268.js";import"./uniqBy.6441c30c.js";const D=y({components:{BasicTable:g,AAlert:A},setup(){const o=B([]),[e,{getForm:n}]=h({title:"\u5F00\u542F\u641C\u7D22\u533A\u57DF",api:S,columns:_(),useSearchForm:!0,formConfig:F(),showTableSetting:!0,tableSetting:{fullScreen:!0},showIndexColumn:!1,rowKey:"id"});function a(){n().getFieldsValue()}function u(r){o.value=r}return{registerTable:e,getFormValues:a,checkedKeys:o,onSelectChange:u}}}),w=p(" custom-slot "),v=p("\u6E05\u7A7A"),K={key:1},V=p("\u83B7\u53D6\u8868\u5355\u6570\u636E");function $(o,e,n,a,u,r){const l=i("a-button"),d=i("a-alert"),f=i("BasicTable");return m(),C(f,{onRegister:o.registerTable,rowSelection:{type:"checkbox",selectedRowKeys:o.checkedKeys,onChange:o.onSelectChange}},{"form-custom":t(()=>[w]),headerTop:t(()=>[s(d,{type:"info","show-icon":""},{message:t(()=>[o.checkedKeys.length>0?(m(),c(T,{key:0},[b("span",null,"\u5DF2\u9009\u4E2D"+E(o.checkedKeys.length)+"\u6761\u8BB0\u5F55(\u53EF\u8DE8\u9875)",1),s(l,{type:"link",onClick:e[0]||(e[0]=N=>o.checkedKeys=[]),size:"small"},{default:t(()=>[v]),_:1})],64)):(m(),c("span",K,"\u672A\u9009\u4E2D\u4EFB\u4F55\u9879\u76EE"))]),_:1})]),toolbar:t(()=>[s(l,{type:"primary",onClick:o.getFormValues},{default:t(()=>[V]),_:1},8,["onClick"])]),_:1},8,["onRegister","rowSelection"])}var zo=k(D,[["render",$]]);export{zo as default};
