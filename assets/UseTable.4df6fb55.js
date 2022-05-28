import{B as P}from"./TableImg.59701ff6.js";import"./BasicForm.71ea5698.js";import{u as $}from"./useTable.37703b69.js";import{getBasicColumns as p,getBasicShortColumns as M}from"./tableData.0a246808.js";import{av as N,a as V,ax as d,o as z,h as I,m as g,n as t,z as u,B as i,E as H}from"./index.fc3faea8.js";import{d as U}from"./table.f8626c82.js";import"./index.8ac702ef.js";import"./Checkbox.53f1a47d.js";import"./index.8b03d6dc.js";import"./index.68fb9a6c.js";import"./eagerComputed.10ebfcb8.js";import"./useForm.1a75448f.js";import"./index.97639897.js";import"./index.cdcfbae0.js";import"./index.e4a7772a.js";import"./useSize.4121dc7e.js";import"./useWindowSizeFn.f89b1927.js";import"./useContentViewHeight.34f2568f.js";import"./ArrowLeftOutlined.98c4fdfd.js";import"./index.e8af661d.js";import"./transButton.caf3278e.js";import"./index.fbe9f60e.js";import"./index.6c9a7918.js";import"./index.ce0ccac6.js";import"./uuid.9bdf29ec.js";import"./index.0b2a03dd.js";import"./_baseIteratee.c8657dae.js";import"./get.ba96f884.js";import"./DeleteOutlined.a26e9ab9.js";import"./index.cf002398.js";import"./useRefs.a8532142.js";import"./Form.cad30f1f.js";import"./Col.a69e5a89.js";import"./useFlexGapSupport.178e7204.js";import"./index.cfc9bad6.js";import"./FullscreenOutlined.66288ba9.js";import"./index.d77daf00.js";import"./sortable.esm.2632adaa.js";import"./RedoOutlined.16b688f2.js";import"./index.87bd2c1a.js";import"./fromPairs.84aabb58.js";import"./scrollTo.921dc261.js";import"./index.d3eb2dec.js";/* empty css              *//* empty css               */import"./index.858bd649.js";import"./index.17b6973f.js";import"./index.6d18baa2.js";import"./download.9eb40c45.js";import"./base64Conver.08b9f4ec.js";import"./index.e72e760c.js";import"./index.f716c6d2.js";import"./uniqBy.ccecbfcd.js";const j=V({components:{BasicTable:P},setup(){const{createMessage:o}=H();function n(){}const[c,{setLoading:s,setColumns:a,getColumns:r,getDataSource:e,getRawDataSource:l,reload:m,getPaginationRef:C,setPagination:f,getSelectRows:_,getSelectRowKeys:F,setSelectedRowKeys:B,clearSelectedRowKeys:h}]=$({canResize:!0,title:"useTable\u793A\u4F8B",titleHelpMessage:"\u4F7F\u7528useTable\u8C03\u7528\u8868\u683C\u5185\u65B9\u6CD5",api:U,columns:p(),defSort:{field:"name",order:"ascend"},rowKey:"id",showTableSetting:!0,onChange:n,rowSelection:{type:"checkbox"},onColumnsChange:v=>{}});function k(){s(!0),setTimeout(()=>{s(!1)},1e3)}function b(){a(M())}function D(){a(p()),m({page:1})}function E(){o.info("\u8BF7\u5728\u63A7\u5236\u53F0\u67E5\u770B\uFF01"),r()}function S(){o.info("\u8BF7\u5728\u63A7\u5236\u53F0\u67E5\u770B\uFF01"),e()}function T(){o.info("\u8BF7\u5728\u63A7\u5236\u53F0\u67E5\u770B\uFF01"),l()}function w(){o.info("\u8BF7\u5728\u63A7\u5236\u53F0\u67E5\u770B\uFF01"),C()}function R(){f({current:2}),m()}function A(){o.info("\u8BF7\u5728\u63A7\u5236\u53F0\u67E5\u770B\uFF01"),_()}function y(){o.info("\u8BF7\u5728\u63A7\u5236\u53F0\u67E5\u770B\uFF01"),F()}function L(){B(["0","1","2"])}function K(){h()}return{registerTable:c,changeLoading:k,changeColumns:b,reloadTable:D,getColumn:E,getTableData:S,getTableRawData:T,getPagination:w,setPaginationInfo:R,getSelectRowList:A,getSelectRowKeyList:y,setSelectedRowKeyList:L,clearSelect:K,onChange:n}}}),q={class:"p-4"},G={class:"mb-4"},J=i(" \u8FD8\u539F "),O=i(" \u5F00\u542Floading "),Q=i(" \u66F4\u6539Columns "),W=i(" \u83B7\u53D6Columns "),X=i(" \u83B7\u53D6\u8868\u683C\u6570\u636E "),Y=i(" \u83B7\u53D6\u63A5\u53E3\u539F\u59CB\u6570\u636E "),Z=i(" \u8DF3\u8F6C\u5230\u7B2C2\u9875 "),x={class:"mb-4"},oo=i(" \u83B7\u53D6\u9009\u4E2D\u884C "),eo=i(" \u83B7\u53D6\u9009\u4E2D\u884CKey "),to=i(" \u8BBE\u7F6E\u9009\u4E2D\u884C "),uo=i(" \u6E05\u7A7A\u9009\u4E2D\u884C "),io=i(" \u83B7\u53D6\u5206\u9875\u4FE1\u606F ");function no(o,n,c,s,a,r){const e=d("a-button"),l=d("BasicTable");return z(),I("div",q,[g("div",G,[t(e,{class:"mr-2",onClick:o.reloadTable},{default:u(()=>[J]),_:1},8,["onClick"]),t(e,{class:"mr-2",onClick:o.changeLoading},{default:u(()=>[O]),_:1},8,["onClick"]),t(e,{class:"mr-2",onClick:o.changeColumns},{default:u(()=>[Q]),_:1},8,["onClick"]),t(e,{class:"mr-2",onClick:o.getColumn},{default:u(()=>[W]),_:1},8,["onClick"]),t(e,{class:"mr-2",onClick:o.getTableData},{default:u(()=>[X]),_:1},8,["onClick"]),t(e,{class:"mr-2",onClick:o.getTableRawData},{default:u(()=>[Y]),_:1},8,["onClick"]),t(e,{class:"mr-2",onClick:o.setPaginationInfo},{default:u(()=>[Z]),_:1},8,["onClick"])]),g("div",x,[t(e,{class:"mr-2",onClick:o.getSelectRowList},{default:u(()=>[oo]),_:1},8,["onClick"]),t(e,{class:"mr-2",onClick:o.getSelectRowKeyList},{default:u(()=>[eo]),_:1},8,["onClick"]),t(e,{class:"mr-2",onClick:o.setSelectedRowKeyList},{default:u(()=>[to]),_:1},8,["onClick"]),t(e,{class:"mr-2",onClick:o.clearSelect},{default:u(()=>[uo]),_:1},8,["onClick"]),t(e,{class:"mr-2",onClick:o.getPagination},{default:u(()=>[io]),_:1},8,["onClick"])]),t(l,{onRegister:o.registerTable},null,8,["onRegister"])])}var se=N(j,[["render",no]]);export{se as default};