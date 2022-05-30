import{C as g,M as i,J as F}from"./index.a7adfb28.js";import{P as x}from"./index.3459e11c.js";import{au as R,a as B,v as c,aw as n,o as b,j as S,z as o,n as a,i as P,dG as h,bQ as j,B as r}from"./index.92107cb9.js";import{R as _}from"./index.ddb98860.js";import{S as k}from"./index.de4f59c4.js";import"./useWindowSizeFn.bf8a40f0.js";import"./index.482f421c.js";import"./index.bf07ecfb.js";import"./useSize.dbe69be2.js";import"./eagerComputed.03379843.js";import"./useContentViewHeight.dfe4b065.js";import"./ArrowLeftOutlined.54d94ecf.js";import"./index.c24fbde5.js";import"./transButton.ea02a1ac.js";import"./Checkbox.953f26bb.js";import"./useFlexGapSupport.3aa4df04.js";const f='{"name":"BeJson","url":"http://www.xxx.com","page":88,"isNonProfit":true,"address":{"street":"\u79D1\u6280\u56ED\u8DEF.","city":"\u6C5F\u82CF\u82CF\u5DDE","country":"\u4E2D\u56FD"},"links":[{"name":"Google","url":"http://www.xxx.com"},{"name":"Baidu","url":"http://www.xxx.com"},{"name":"SoSo","url":"http://www.xxx.com"}]}',y=`
      (() => {
        var htmlRoot = document.getElementById('htmlRoot');
        var theme = window.localStorage.getItem('__APP__DARK__MODE__');
        if (htmlRoot && theme) {
          htmlRoot.setAttribute('data-theme', theme);
          theme = htmlRoot = null;
        }
      })();
  `,J=`
     <!DOCTYPE html>
<html lang="en" id="htmlRoot">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
    <meta name="renderer" content="webkit" />
    <meta
      name="viewport"
      content="width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=0"
    />
    <title><%= title %></title>
    <link rel="icon" href="/favicon.ico" />
  </head>
  <body>
    <div id="app">
    </div>
  </body>
</html>
  `,M=B({components:{CodeEditor:g,PageWrapper:x,RadioButton:_.Button,RadioGroup:_.Group,ASpace:k},setup(){const e=c(i.JSON),t=c(f);function s(p){const u=p.target.value;if(u===i.JSON){t.value=f;return}if(u===i.HTML){t.value=J;return}if(u===i.JS){t.value=y;return}}function d(){P(e)==="application/json"?h.info({title:"\u7F16\u8F91\u5668\u5F53\u524D\u503C",content:j(F,{data:JSON.parse(t.value)})}):h.info({title:"\u7F16\u8F91\u5668\u5F53\u524D\u503C",content:t.value})}return{value:t,modeValue:e,handleModeChange:s,showData:d}}}),A=r("\u83B7\u53D6\u6570\u636E"),G=r(" json\u6570\u636E "),N=r(" html\u4EE3\u7801 "),O=r(" javascript\u4EE3\u7801 ");function V(e,t,s,d,p,u){const v=n("a-button"),l=n("RadioButton"),w=n("RadioGroup"),E=n("a-space"),C=n("CodeEditor"),D=n("PageWrapper");return b(),S(D,{title:"\u4EE3\u7801\u7F16\u8F91\u5668\u7EC4\u4EF6\u793A\u4F8B",contentFullHeight:"",fixedHeight:"",contentBackground:""},{extra:o(()=>[a(E,{size:"middle"},{default:o(()=>[a(v,{onClick:e.showData,type:"primary"},{default:o(()=>[A]),_:1},8,["onClick"]),a(w,{"button-style":"solid",value:e.modeValue,"onUpdate:value":t[0]||(t[0]=m=>e.modeValue=m),onChange:e.handleModeChange},{default:o(()=>[a(l,{value:"application/json"},{default:o(()=>[G]),_:1}),a(l,{value:"htmlmixed"},{default:o(()=>[N]),_:1}),a(l,{value:"javascript"},{default:o(()=>[O]),_:1})]),_:1},8,["value","onChange"])]),_:1})]),default:o(()=>[a(C,{value:e.value,"onUpdate:value":t[1]||(t[1]=m=>e.value=m),mode:e.modeValue},null,8,["value","mode"])]),_:1})}var ot=R(M,[["render",V]]);export{ot as default};
