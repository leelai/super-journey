import{B as C}from"./TableImg.0d16a1eb.js";import{j as T}from"./BasicForm.7389292c.js";import{u as S}from"./useTable.26defd71.js";import{g as B}from"./system.ac27d72c.js";import{P as F}from"./index.a11cdd95.js";import w from"./DeptTree.8d93485d.js";import{b as D}from"./index.245fc1fa.js";import{A,c as I,s as M}from"./AccountModal.325ab284.js";import{av as E,a as k,aY as y,w as R,ax as e,o as P,j as V,z as i,n as r,B as W}from"./index.84f51bc6.js";import"./index.e783d7a4.js";import"./Checkbox.29e5448e.js";import"./index.121070d7.js";import"./index.830e2b13.js";import"./eagerComputed.fe6422a6.js";import"./useForm.cd12ce3e.js";import"./index.213e5fdf.js";import"./index.1482bccc.js";import"./index.04f42628.js";import"./uuid.9bdf29ec.js";import"./index.7d48ba76.js";import"./_baseIteratee.b8f1e605.js";import"./get.43c7e1f7.js";import"./DeleteOutlined.b2d33d4b.js";import"./index.cb8f3fac.js";import"./useRefs.5f3f03ad.js";import"./Form.9abcaf03.js";import"./Col.f571ced5.js";import"./useFlexGapSupport.9e6734b3.js";import"./useSize.57eaf44d.js";import"./useWindowSizeFn.25af7ad9.js";import"./index.e6d997b7.js";import"./sortable.esm.2632adaa.js";import"./RedoOutlined.571ed1e7.js";import"./FullscreenOutlined.b81ac762.js";import"./index.1dff6863.js";import"./fromPairs.84aabb58.js";import"./scrollTo.94818188.js";import"./index.dd371c8d.js";/* empty css              *//* empty css               */import"./index.51387801.js";import"./index.fffc6c58.js";import"./index.08310ad3.js";import"./download.2e77e37e.js";import"./base64Conver.08b9f4ec.js";import"./index.1e0cde80.js";import"./index.dfd27e00.js";import"./uniqBy.3d46ba2f.js";import"./index.1a6563d3.js";import"./index.3580ad56.js";import"./useContentViewHeight.b08eeddc.js";import"./ArrowLeftOutlined.bf033c89.js";import"./index.b8a6e61f.js";import"./transButton.4e91e859.js";import"./index.9d31a81a.js";import"./useContextMenu.9631fe3e.js";const $=k({name:"AccountManagement",components:{BasicTable:C,PageWrapper:F,DeptTree:w,AccountModal:A,TableAction:T},setup(){const t=y(),[h,{openModal:a}]=D(),s=R({}),[g,{reload:l,updateTableDataRecord:c}]=S({title:"\u8D26\u53F7\u5217\u8868",api:B,rowKey:"id",columns:I,formConfig:{labelWidth:120,schemas:M,autoSubmitOnEnter:!0},useSearchForm:!0,showTableSetting:!0,bordered:!0,handleSearchInfoFn(o){return o},actionColumn:{width:120,title:"\u64CD\u4F5C",dataIndex:"action",slots:{customRender:"action"}}});function p(){a(!0,{isUpdate:!1})}function m(o){a(!0,{record:o,isUpdate:!0})}function u(o){}function d({isUpdate:o,values:b}){if(o){const _=c(b.id,b)}else l()}function f(o=""){s.deptId=o,l()}function n(o){t("/system/account_detail/"+o.id)}return{registerTable:g,registerModal:h,handleCreate:p,handleEdit:m,handleDelete:u,handleSuccess:d,handleSelect:f,handleView:n,searchInfo:s}}}),v=W("\u65B0\u589E\u8D26\u53F7");function x(t,h,a,s,g,l){const c=e("DeptTree"),p=e("a-button"),m=e("TableAction"),u=e("BasicTable"),d=e("AccountModal"),f=e("PageWrapper");return P(),V(f,{dense:"",contentFullHeight:"",fixedHeight:"",contentClass:"flex"},{default:i(()=>[r(c,{class:"w-1/4 xl:w-1/5",onSelect:t.handleSelect},null,8,["onSelect"]),r(u,{onRegister:t.registerTable,class:"w-3/4 xl:w-4/5",searchInfo:t.searchInfo},{toolbar:i(()=>[r(p,{type:"primary",onClick:t.handleCreate},{default:i(()=>[v]),_:1},8,["onClick"])]),action:i(({record:n})=>[r(m,{actions:[{icon:"clarity:info-standard-line",tooltip:"\u67E5\u770B\u7528\u6237\u8BE6\u60C5",onClick:t.handleView.bind(null,n)},{icon:"clarity:note-edit-line",tooltip:"\u7F16\u8F91\u7528\u6237\u8D44\u6599",onClick:t.handleEdit.bind(null,n)},{icon:"ant-design:delete-outlined",color:"error",tooltip:"\u5220\u9664\u6B64\u8D26\u53F7",popConfirm:{title:"\u662F\u5426\u786E\u8BA4\u5220\u9664",confirm:t.handleDelete.bind(null,n)}}]},null,8,["actions"])]),_:1},8,["onRegister","searchInfo"]),r(d,{onRegister:t.registerModal,onSuccess:t.handleSuccess},null,8,["onRegister","onSuccess"])]),_:1})}var Uo=E($,[["render",x]]);export{Uo as default};
