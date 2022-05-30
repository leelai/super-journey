import{B as f}from"./TableImg.8506b84f.js";import{j as h}from"./BasicForm.e2136524.js";import{u as b}from"./useTable.ca84b7c3.js";import{d as C}from"./system.3c52260a.js";import{u as g}from"./index.a33db88a.js";import{M as T,c as _,s as w}from"./MenuDrawer.9801805a.js";import{au as D,a as S,aw as t,o as B,h as F,n as r,z as p,ak as k,B as M}from"./index.00ded5ec.js";import"./index.603fa52d.js";import"./Checkbox.e1e6f642.js";import"./index.00c8deee.js";import"./index.ca68839c.js";import"./eagerComputed.5fd5be55.js";import"./useForm.949127c8.js";import"./index.9927dec8.js";import"./index.3f27b734.js";import"./index.c32d3109.js";import"./useSize.ddff592e.js";import"./useWindowSizeFn.8613736c.js";import"./useContentViewHeight.e5cdac7c.js";import"./ArrowLeftOutlined.d0c01883.js";import"./index.9f86c066.js";import"./transButton.c964a4e6.js";import"./index.b378a6aa.js";import"./index.bc3beb44.js";import"./index.22208324.js";import"./uuid.9bdf29ec.js";import"./index.a439fbd0.js";import"./_baseIteratee.5a800ee0.js";import"./get.e98c9102.js";import"./DeleteOutlined.d374c42e.js";import"./index.39991b12.js";import"./useRefs.35df9853.js";import"./Form.8bff5e4e.js";import"./Col.8d574553.js";import"./useFlexGapSupport.641c96d8.js";import"./index.fd3f14ec.js";import"./FullscreenOutlined.9fa31b99.js";import"./index.b5127d68.js";import"./sortable.esm.2632adaa.js";import"./RedoOutlined.aad7a5d9.js";import"./index.fa69315c.js";import"./fromPairs.84aabb58.js";import"./scrollTo.3cb546a7.js";import"./index.9c816ade.js";/* empty css              *//* empty css               */import"./index.6f890765.js";import"./index.47034b24.js";import"./index.3ae0d52e.js";import"./download.1c38bf09.js";import"./base64Conver.08b9f4ec.js";import"./index.9306f112.js";import"./index.080dba7a.js";import"./uniqBy.f5f9fa77.js";import"./index.e81d0b20.js";const R=S({name:"MenuManagement",components:{BasicTable:f,MenuDrawer:T,TableAction:h},setup(){const[e,{openDrawer:i}]=g(),[c,{reload:u,expandAll:l}]=b({title:"\u83DC\u5355\u5217\u8868",api:C,columns:_,formConfig:{labelWidth:120,schemas:w},isTreeTable:!0,pagination:!1,striped:!1,useSearchForm:!0,showTableSetting:!0,bordered:!0,showIndexColumn:!1,canResize:!1,actionColumn:{width:80,title:"\u64CD\u4F5C",dataIndex:"action",slots:{customRender:"action"},fixed:void 0}});function d(){i(!0,{isUpdate:!1})}function n(o){i(!0,{record:o,isUpdate:!0})}function a(o){}function s(){u()}function m(){k(l)}return{registerTable:c,registerDrawer:e,handleCreate:d,handleEdit:n,handleDelete:a,handleSuccess:s,onFetchSuccess:m}}}),A=M(" \u65B0\u589E\u83DC\u5355 ");function E(e,i,c,u,l,d){const n=t("a-button"),a=t("TableAction"),s=t("BasicTable"),m=t("MenuDrawer");return B(),F("div",null,[r(s,{onRegister:e.registerTable,onFetchSuccess:e.onFetchSuccess},{toolbar:p(()=>[r(n,{type:"primary",onClick:e.handleCreate},{default:p(()=>[A]),_:1},8,["onClick"])]),action:p(({record:o})=>[r(a,{actions:[{icon:"clarity:note-edit-line",onClick:e.handleEdit.bind(null,o)},{icon:"ant-design:delete-outlined",color:"error",popConfirm:{title:"\u662F\u5426\u786E\u8BA4\u5220\u9664",confirm:e.handleDelete.bind(null,o)}}]},null,8,["actions"])]),_:1},8,["onRegister","onFetchSuccess"]),r(m,{onRegister:e.registerDrawer,onSuccess:e.handleSuccess},null,8,["onRegister","onSuccess"])])}var xe=D(R,[["render",E]]);export{xe as default};