import{B as f}from"./TableImg.e1138ba5.js";import{j as h}from"./BasicForm.bc0f8fbd.js";import{u as b}from"./useTable.8eef876e.js";import{d as C}from"./system.b3a28b50.js";import{u as g}from"./index.b2013fed.js";import{M as T,c as _,s as D}from"./MenuDrawer.2f26d838.js";import{av as w,a as S,ax as t,o as B,h as F,n as r,z as p,al as M,B as k}from"./index.b2c8267b.js";import"./index.e8238668.js";import"./Checkbox.d390f37b.js";import"./index.d7bcac17.js";import"./index.11ebb1a6.js";import"./eagerComputed.c0ebbc1b.js";import"./useForm.7372232c.js";import"./index.81a31c0e.js";import"./index.9be49184.js";import"./index.e4d59aad.js";import"./useSize.1e7f957b.js";import"./useWindowSizeFn.e63f4fea.js";import"./useContentViewHeight.dee9462e.js";import"./ArrowLeftOutlined.adb1bdea.js";import"./index.161ccdd8.js";import"./transButton.c6a24c5f.js";import"./index.211c7c9b.js";import"./index.57aac341.js";import"./index.b09eff01.js";import"./uuid.9bdf29ec.js";import"./index.f4a2f498.js";import"./_baseIteratee.7354d7ba.js";import"./get.1d45560b.js";import"./DeleteOutlined.c79b4ea5.js";import"./index.346f1070.js";import"./useRefs.ea975f28.js";import"./Form.b96a02a1.js";import"./Col.b384eb90.js";import"./useFlexGapSupport.727191ee.js";import"./index.3272a407.js";import"./FullscreenOutlined.f58a66ff.js";import"./index.a400d60a.js";import"./sortable.esm.2632adaa.js";import"./RedoOutlined.93b7aba9.js";import"./index.78e4de31.js";import"./fromPairs.84aabb58.js";import"./scrollTo.e57392fa.js";import"./index.70c413eb.js";/* empty css              *//* empty css               */import"./index.5fb436a4.js";import"./index.a3f63598.js";import"./index.45745d3c.js";import"./download.59b447fa.js";import"./base64Conver.08b9f4ec.js";import"./index.c45668aa.js";import"./index.c86c9338.js";import"./uniqBy.b8dc3978.js";import"./index.907da613.js";const R=S({name:"MenuManagement",components:{BasicTable:f,MenuDrawer:T,TableAction:h},setup(){const[e,{openDrawer:i}]=g(),[c,{reload:l,expandAll:u}]=b({title:"\u83DC\u5355\u5217\u8868",api:C,columns:_,formConfig:{labelWidth:120,schemas:D},isTreeTable:!0,pagination:!1,striped:!1,useSearchForm:!0,showTableSetting:!0,bordered:!0,showIndexColumn:!1,canResize:!1,actionColumn:{width:80,title:"\u64CD\u4F5C",dataIndex:"action",slots:{customRender:"action"},fixed:void 0}});function d(){i(!0,{isUpdate:!1})}function n(o){i(!0,{record:o,isUpdate:!0})}function a(o){}function s(){l()}function m(){M(u)}return{registerTable:c,registerDrawer:e,handleCreate:d,handleEdit:n,handleDelete:a,handleSuccess:s,onFetchSuccess:m}}}),v=k(" \u65B0\u589E\u83DC\u5355 ");function x(e,i,c,l,u,d){const n=t("a-button"),a=t("TableAction"),s=t("BasicTable"),m=t("MenuDrawer");return B(),F("div",null,[r(s,{onRegister:e.registerTable,onFetchSuccess:e.onFetchSuccess},{toolbar:p(()=>[r(n,{type:"primary",onClick:e.handleCreate},{default:p(()=>[v]),_:1},8,["onClick"])]),action:p(({record:o})=>[r(a,{actions:[{icon:"clarity:note-edit-line",onClick:e.handleEdit.bind(null,o)},{icon:"ant-design:delete-outlined",color:"error",popConfirm:{title:"\u662F\u5426\u786E\u8BA4\u5220\u9664",confirm:e.handleDelete.bind(null,o)}}]},null,8,["actions"])]),_:1},8,["onRegister","onFetchSuccess"]),r(m,{onRegister:e.registerDrawer,onSuccess:e.handleSuccess},null,8,["onRegister","onSuccess"])])}var Ee=w(R,[["render",x]]);export{Ee as default};
