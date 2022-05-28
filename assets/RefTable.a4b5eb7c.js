import{B as b}from"./TableImg.0d16a1eb.js";import"./BasicForm.7389292c.js";import{getBasicColumns as p,getBasicShortColumns as E}from"./tableData.0a246808.js";import{av as R,a as D,v as w,ax as f,o as S,h as A,m as d,n as u,z as i,B as n,E as T,i as L}from"./index.84f51bc6.js";import{d as y}from"./table.25701bd2.js";import"./index.e783d7a4.js";import"./Checkbox.29e5448e.js";import"./index.121070d7.js";import"./index.830e2b13.js";import"./eagerComputed.fe6422a6.js";import"./useForm.cd12ce3e.js";import"./index.a11cdd95.js";import"./index.1a6563d3.js";import"./index.3580ad56.js";import"./useSize.57eaf44d.js";import"./useWindowSizeFn.25af7ad9.js";import"./useContentViewHeight.b08eeddc.js";import"./ArrowLeftOutlined.bf033c89.js";import"./index.b8a6e61f.js";import"./transButton.4e91e859.js";import"./index.213e5fdf.js";import"./index.1482bccc.js";import"./index.04f42628.js";import"./uuid.9bdf29ec.js";import"./index.7d48ba76.js";import"./_baseIteratee.b8f1e605.js";import"./get.43c7e1f7.js";import"./DeleteOutlined.b2d33d4b.js";import"./index.cb8f3fac.js";import"./useRefs.5f3f03ad.js";import"./Form.9abcaf03.js";import"./Col.f571ced5.js";import"./useFlexGapSupport.9e6734b3.js";import"./index.245fc1fa.js";import"./FullscreenOutlined.b81ac762.js";import"./index.e6d997b7.js";import"./sortable.esm.2632adaa.js";import"./RedoOutlined.571ed1e7.js";import"./index.1dff6863.js";import"./fromPairs.84aabb58.js";import"./scrollTo.94818188.js";import"./index.dd371c8d.js";/* empty css              *//* empty css               */import"./index.51387801.js";import"./index.fffc6c58.js";import"./index.08310ad3.js";import"./download.2e77e37e.js";import"./base64Conver.08b9f4ec.js";import"./index.1e0cde80.js";import"./index.dfd27e00.js";import"./uniqBy.3d46ba2f.js";const K=D({components:{BasicTable:b},setup(){const o=w(null),{createMessage:s}=T();function t(){const m=L(o);if(!m)throw new Error("tableAction is null");return m}function l(){t().setLoading(!0),setTimeout(()=>{t().setLoading(!1)},1e3)}function c(){t().setColumns(E())}function r(){t().setColumns(p()),t().reload({page:1})}function e(){s.info("\u8BF7\u5728\u63A7\u5236\u53F0\u67E5\u770B\uFF01"),t().getColumns()}function a(){s.info("\u8BF7\u5728\u63A7\u5236\u53F0\u67E5\u770B\uFF01"),t().getDataSource()}function C(){s.info("\u8BF7\u5728\u63A7\u5236\u53F0\u67E5\u770B\uFF01"),t().getRawDataSource()}function g(){s.info("\u8BF7\u5728\u63A7\u5236\u53F0\u67E5\u770B\uFF01"),t().getPaginationRef()}function _(){t().setPagination({current:2}),t().reload()}function F(){s.info("\u8BF7\u5728\u63A7\u5236\u53F0\u67E5\u770B\uFF01"),t().getSelectRows()}function B(){s.info("\u8BF7\u5728\u63A7\u5236\u53F0\u67E5\u770B\uFF01"),t().getSelectRowKeys()}function k(){t().setSelectedRowKeys(["0","1","2"])}function h(){t().clearSelectedRowKeys()}return{tableRef:o,api:y,columns:p(),changeLoading:l,changeColumns:c,reloadTable:r,getColumn:e,getTableData:a,getTableRawData:C,getPagination:g,setPaginationInfo:_,getSelectRowList:F,getSelectRowKeyList:B,setSelectedRowKeyList:k,clearSelect:h}}}),v={class:"p-4"},P={class:"mb-4"},$=n(" \u8FD8\u539F "),M=n(" \u5F00\u542Floading "),N=n(" \u66F4\u6539Columns "),V=n(" \u83B7\u53D6Columns "),z=n(" \u83B7\u53D6\u8868\u683C\u6570\u636E "),I=n(" \u83B7\u53D6\u63A5\u53E3\u539F\u59CB\u6570\u636E "),H=n(" \u8DF3\u8F6C\u5230\u7B2C2\u9875 "),j={class:"mb-4"},q=n(" \u83B7\u53D6\u9009\u4E2D\u884C "),G=n(" \u83B7\u53D6\u9009\u4E2D\u884CKey "),J=n(" \u8BBE\u7F6E\u9009\u4E2D\u884C "),O=n(" \u6E05\u7A7A\u9009\u4E2D\u884C "),Q=n(" \u83B7\u53D6\u5206\u9875\u4FE1\u606F ");function U(o,s,t,l,c,r){const e=f("a-button"),a=f("BasicTable");return S(),A("div",v,[d("div",P,[u(e,{class:"mr-2",onClick:o.reloadTable},{default:i(()=>[$]),_:1},8,["onClick"]),u(e,{class:"mr-2",onClick:o.changeLoading},{default:i(()=>[M]),_:1},8,["onClick"]),u(e,{class:"mr-2",onClick:o.changeColumns},{default:i(()=>[N]),_:1},8,["onClick"]),u(e,{class:"mr-2",onClick:o.getColumn},{default:i(()=>[V]),_:1},8,["onClick"]),u(e,{class:"mr-2",onClick:o.getTableData},{default:i(()=>[z]),_:1},8,["onClick"]),u(e,{class:"mr-2",onClick:o.getTableRawData},{default:i(()=>[I]),_:1},8,["onClick"]),u(e,{class:"mr-2",onClick:o.setPaginationInfo},{default:i(()=>[H]),_:1},8,["onClick"])]),d("div",j,[u(e,{class:"mr-2",onClick:o.getSelectRowList},{default:i(()=>[q]),_:1},8,["onClick"]),u(e,{class:"mr-2",onClick:o.getSelectRowKeyList},{default:i(()=>[G]),_:1},8,["onClick"]),u(e,{class:"mr-2",onClick:o.setSelectedRowKeyList},{default:i(()=>[J]),_:1},8,["onClick"]),u(e,{class:"mr-2",onClick:o.clearSelect},{default:i(()=>[O]),_:1},8,["onClick"]),u(e,{class:"mr-2",onClick:o.getPagination},{default:i(()=>[Q]),_:1},8,["onClick"])]),u(a,{canResize:!1,title:"RefTable\u793A\u4F8B",titleHelpMessage:"\u4F7F\u7528Ref\u8C03\u7528\u8868\u683C\u5185\u65B9\u6CD5",ref:"tableRef",api:o.api,columns:o.columns,rowKey:"id",rowSelection:{type:"checkbox"}},null,8,["api","columns"])])}var Uo=R(K,[["render",U]]);export{Uo as default};