var f=(p,r,s)=>new Promise((c,i)=>{var _=o=>{try{t(s.next(o))}catch(m){i(m)}},n=o=>{try{t(s.throw(o))}catch(m){i(m)}},t=o=>o.done?c(o.value):Promise.resolve(o.value).then(_,n);t((s=s.apply(p,r)).next())});import{B as v}from"./BasicForm.7389292c.js";import{u as h}from"./useForm.cd12ce3e.js";import{step2Schemas as E}from"./data.1866c55a.js";import{a as b,av as x,ax as u,o as C,h as g,n as e,z as a,B as d}from"./index.84f51bc6.js";import{A as B}from"./index.08310ad3.js";import{D}from"./index.e6d997b7.js";import{D as l}from"./index.eea23ff9.js";/* empty css              *//* empty css               */import"./index.e783d7a4.js";import"./Checkbox.29e5448e.js";import"./index.121070d7.js";import"./index.04f42628.js";import"./index.213e5fdf.js";import"./index.1482bccc.js";import"./index.51387801.js";import"./get.43c7e1f7.js";import"./index.830e2b13.js";import"./eagerComputed.fe6422a6.js";import"./index.7d48ba76.js";import"./_baseIteratee.b8f1e605.js";import"./DeleteOutlined.b2d33d4b.js";import"./index.cb8f3fac.js";import"./useRefs.5f3f03ad.js";import"./Form.9abcaf03.js";import"./Col.f571ced5.js";import"./useFlexGapSupport.9e6734b3.js";import"./useSize.57eaf44d.js";import"./index.fffc6c58.js";import"./index.245fc1fa.js";import"./useWindowSizeFn.25af7ad9.js";import"./FullscreenOutlined.b81ac762.js";import"./index.1dff6863.js";import"./uuid.9bdf29ec.js";import"./download.2e77e37e.js";import"./base64Conver.08b9f4ec.js";import"./index.1e0cde80.js";import"./index.dfd27e00.js";import"./uniqBy.3d46ba2f.js";const A=b({components:{BasicForm:v,[B.name]:B,[D.name]:D,[l.name]:l,[l.Item.name]:l.Item},emits:["next","prev"],setup(p,{emit:r}){const[s,{validate:c,setProps:i}]=h({labelWidth:80,schemas:E,actionColOptions:{span:14},resetButtonOptions:{text:"\u4E0A\u4E00\u6B65"},submitButtonOptions:{text:"\u63D0\u4EA4"},resetFunc:_,submitFunc:n});function _(){return f(this,null,function*(){r("prev")})}function n(){return f(this,null,function*(){try{const t=yield c();i({submitButtonOptions:{loading:!0}}),setTimeout(()=>{i({submitButtonOptions:{loading:!1}}),r("next",t)},1500)}catch(t){}})}return{register:s}}}),y={class:"step2"},O=d(" ant-design@alipay.com "),S=d(" test@example.com "),$=d(" Vben "),w=d(" 500\u5143 ");function I(p,r,s,c,i,_){const n=u("a-alert"),t=u("a-descriptions-item"),o=u("a-descriptions"),m=u("a-divider"),F=u("BasicForm");return C(),g("div",y,[e(n,{message:"\u786E\u8BA4\u8F6C\u8D26\u540E\uFF0C\u8D44\u91D1\u5C06\u76F4\u63A5\u6253\u5165\u5BF9\u65B9\u8D26\u6237\uFF0C\u65E0\u6CD5\u9000\u56DE\u3002","show-icon":""}),e(o,{column:1,class:"mt-5"},{default:a(()=>[e(t,{label:"\u4ED8\u6B3E\u8D26\u6237"},{default:a(()=>[O]),_:1}),e(t,{label:"\u6536\u6B3E\u8D26\u6237"},{default:a(()=>[S]),_:1}),e(t,{label:"\u6536\u6B3E\u4EBA\u59D3\u540D"},{default:a(()=>[$]),_:1}),e(t,{label:"\u8F6C\u8D26\u91D1\u989D"},{default:a(()=>[w]),_:1})]),_:1}),e(m),e(F,{onRegister:p.register},null,8,["onRegister"])])}var vt=x(A,[["render",I],["__scopeId","data-v-01481d2f"]]);export{vt as default};
