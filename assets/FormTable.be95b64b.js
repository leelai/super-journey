import{B as g}from"./TableImg.a3aee9d6.js";import"./BasicForm.e83ba16e.js";import{u as h}from"./useTable.3ef1072b.js";import{getBasicColumns as _,getFormConfig as F}from"./tableData.0a246808.js";import{au as k,a as y,v as B,aw as i,o as m,j as C,z as t,n as s,h as c,m as b,t as E,F as T,B as p}from"./index.92107cb9.js";import{A}from"./index.448ecca2.js";import{d as S}from"./table.f6d04de2.js";import"./index.ddb98860.js";import"./Checkbox.953f26bb.js";import"./index.6bad0fdd.js";import"./index.7f60acd0.js";import"./eagerComputed.03379843.js";import"./useForm.26f23ee4.js";import"./index.3459e11c.js";import"./index.482f421c.js";import"./index.bf07ecfb.js";import"./useSize.dbe69be2.js";import"./useWindowSizeFn.bf8a40f0.js";import"./useContentViewHeight.dfe4b065.js";import"./ArrowLeftOutlined.54d94ecf.js";import"./index.c24fbde5.js";import"./transButton.ea02a1ac.js";import"./index.a50b6155.js";import"./index.ce265fd9.js";import"./index.de1f9621.js";import"./uuid.9bdf29ec.js";import"./index.96e364d1.js";import"./_baseIteratee.5e4ef3b2.js";import"./get.fc3c6b0a.js";import"./DeleteOutlined.b5258670.js";import"./index.55822c54.js";import"./useRefs.411c9bf5.js";import"./Form.dadf5038.js";import"./Col.44ed6be7.js";import"./useFlexGapSupport.3aa4df04.js";import"./index.4d9c8153.js";import"./FullscreenOutlined.89dc2d07.js";import"./index.1300a4fd.js";import"./sortable.esm.2632adaa.js";import"./RedoOutlined.7d164866.js";import"./index.73e34a35.js";import"./fromPairs.84aabb58.js";import"./scrollTo.5ed8e082.js";import"./index.4a69c664.js";/* empty css              *//* empty css               */import"./index.7a6dc684.js";import"./index.de4f59c4.js";import"./download.b3d81a2a.js";import"./base64Conver.08b9f4ec.js";import"./index.0ce0c2bf.js";import"./index.be334935.js";import"./uniqBy.6067f194.js";const w=y({components:{BasicTable:g,AAlert:A},setup(){const o=B([]),[e,{getForm:n}]=h({title:"\u5F00\u542F\u641C\u7D22\u533A\u57DF",api:S,columns:_(),useSearchForm:!0,formConfig:F(),showTableSetting:!0,tableSetting:{fullScreen:!0},showIndexColumn:!1,rowKey:"id"});function a(){n().getFieldsValue()}function u(r){o.value=r}return{registerTable:e,getFormValues:a,checkedKeys:o,onSelectChange:u}}}),D=p(" custom-slot "),K=p("\u6E05\u7A7A"),V={key:1},v=p("\u83B7\u53D6\u8868\u5355\u6570\u636E");function $(o,e,n,a,u,r){const l=i("a-button"),d=i("a-alert"),f=i("BasicTable");return m(),C(f,{onRegister:o.registerTable,rowSelection:{type:"checkbox",selectedRowKeys:o.checkedKeys,onChange:o.onSelectChange}},{"form-custom":t(()=>[D]),headerTop:t(()=>[s(d,{type:"info","show-icon":""},{message:t(()=>[o.checkedKeys.length>0?(m(),c(T,{key:0},[b("span",null,"\u5DF2\u9009\u4E2D"+E(o.checkedKeys.length)+"\u6761\u8BB0\u5F55(\u53EF\u8DE8\u9875)",1),s(l,{type:"link",onClick:e[0]||(e[0]=N=>o.checkedKeys=[]),size:"small"},{default:t(()=>[K]),_:1})],64)):(m(),c("span",V,"\u672A\u9009\u4E2D\u4EFB\u4F55\u9879\u76EE"))]),_:1})]),toolbar:t(()=>[s(l,{type:"primary",onClick:o.getFormValues},{default:t(()=>[v]),_:1},8,["onClick"])]),_:1},8,["onRegister","rowSelection"])}var zo=k(w,[["render",$]]);export{zo as default};
