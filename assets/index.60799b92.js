import{B as f}from"./TableImg.1832050e.js";import{j as h}from"./BasicForm.6b4a9385.js";import{u as b}from"./useTable.5aa1bc15.js";import{d as C}from"./system.fdb757f5.js";import{u as g}from"./index.3e8505e1.js";import{M as T,c as _,s as D}from"./MenuDrawer.c2a659ac.js";import{av as w,a as S,ax as t,o as B,h as F,n as r,z as p,al as M,B as k}from"./index.1f2f64cc.js";import"./index.d264169d.js";import"./Checkbox.ef64d3e6.js";import"./index.55bd6380.js";import"./index.5a7917e3.js";import"./eagerComputed.265fcbbd.js";import"./useForm.4c6a476e.js";import"./index.b45ead2e.js";import"./index.b7e23e5a.js";import"./index.d68860b8.js";import"./useSize.a2dac83c.js";import"./useWindowSizeFn.50e314e7.js";import"./useContentViewHeight.490ce0c5.js";import"./ArrowLeftOutlined.f91dc397.js";import"./index.5fc65200.js";import"./transButton.e3875fe3.js";import"./index.ec6bc0e2.js";import"./index.0b950b2c.js";import"./index.7e7a9d30.js";import"./uuid.9bdf29ec.js";import"./index.24351a94.js";import"./_baseIteratee.6ed626fd.js";import"./get.2e04779a.js";import"./DeleteOutlined.a24e248d.js";import"./index.84b0a4b6.js";import"./useRefs.64459683.js";import"./Form.723281e3.js";import"./Col.57beb858.js";import"./useFlexGapSupport.5941dfc5.js";import"./index.0f68943d.js";import"./FullscreenOutlined.2f1874a9.js";import"./index.73178210.js";import"./sortable.esm.2632adaa.js";import"./RedoOutlined.fc6e3696.js";import"./index.983477aa.js";import"./fromPairs.84aabb58.js";import"./scrollTo.223dfe99.js";import"./index.14f2b050.js";/* empty css              *//* empty css               */import"./index.bf9b1321.js";import"./index.a0f90bca.js";import"./index.8a25b293.js";import"./download.69b10efa.js";import"./base64Conver.08b9f4ec.js";import"./index.f2835988.js";import"./index.56ed6268.js";import"./uniqBy.6441c30c.js";import"./index.beeddf16.js";const R=S({name:"MenuManagement",components:{BasicTable:f,MenuDrawer:T,TableAction:h},setup(){const[e,{openDrawer:i}]=g(),[c,{reload:l,expandAll:u}]=b({title:"\u83DC\u5355\u5217\u8868",api:C,columns:_,formConfig:{labelWidth:120,schemas:D},isTreeTable:!0,pagination:!1,striped:!1,useSearchForm:!0,showTableSetting:!0,bordered:!0,showIndexColumn:!1,canResize:!1,actionColumn:{width:80,title:"\u64CD\u4F5C",dataIndex:"action",slots:{customRender:"action"},fixed:void 0}});function d(){i(!0,{isUpdate:!1})}function n(o){i(!0,{record:o,isUpdate:!0})}function a(o){}function s(){l()}function m(){M(u)}return{registerTable:c,registerDrawer:e,handleCreate:d,handleEdit:n,handleDelete:a,handleSuccess:s,onFetchSuccess:m}}}),v=k(" \u65B0\u589E\u83DC\u5355 ");function x(e,i,c,l,u,d){const n=t("a-button"),a=t("TableAction"),s=t("BasicTable"),m=t("MenuDrawer");return B(),F("div",null,[r(s,{onRegister:e.registerTable,onFetchSuccess:e.onFetchSuccess},{toolbar:p(()=>[r(n,{type:"primary",onClick:e.handleCreate},{default:p(()=>[v]),_:1},8,["onClick"])]),action:p(({record:o})=>[r(a,{actions:[{icon:"clarity:note-edit-line",onClick:e.handleEdit.bind(null,o)},{icon:"ant-design:delete-outlined",color:"error",popConfirm:{title:"\u662F\u5426\u786E\u8BA4\u5220\u9664",confirm:e.handleDelete.bind(null,o)}}]},null,8,["actions"])]),_:1},8,["onRegister","onFetchSuccess"]),r(m,{onRegister:e.registerDrawer,onSuccess:e.handleSuccess},null,8,["onRegister","onSuccess"])])}var Ee=w(R,[["render",x]]);export{Ee as default};
