var E=Object.defineProperty,i=Object.defineProperties;var B=Object.getOwnPropertyDescriptors;var r=Object.getOwnPropertySymbols;var c=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable;var o=(a,e,t)=>e in a?E(a,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[e]=t,l=(a,e)=>{for(var t in e||(e={}))c.call(e,t)&&o(a,t,e[t]);if(r)for(var t of r(e))s.call(e,t)&&o(a,t,e[t]);return a},A=(a,e)=>i(a,B(e));import{_ as F,g as d}from"./index.b2c8267b.js";var m={okText:"\u78BA\u8A8D",closeText:"\u95DC\u9589",cancelText:"\u53D6\u6D88",loadingText:"\u52A0\u8F09\u4E2D...",saveText:"\u4FDD\u5B58",delText:"\u522A\u9664",resetText:"\u91CD\u7F6E",searchText:"\u641C\u7D22",queryText:"\u67E5\u8A62",inputText:"\u8ACB\u8F38\u5165",chooseText:"\u8ACB\u9078\u64C7",redo:"\u5237\u65B0",back:"\u8FD4\u56DE",light:"\u4EAE\u8272\u4E3B\u984C",dark:"\u9ED1\u6697\u4E3B\u984C"},p=Object.freeze(Object.defineProperty({__proto__:null,default:m},Symbol.toStringTag,{value:"Module"})),g={app:{searchNotData:"\u66AB\u7121\u641C\u7D22\u7D50\u679C",toSearch:"\u78BA\u8A8D",toNavigate:"\u5207\u63DB"},countdown:{normalText:"\u7372\u53D6\u9A57\u8B49\u78BC",sendText:"{0}\u79D2\u5F8C\u91CD\u65B0\u7372\u53D6"},cropper:{selectImage:"\u9078\u64C7\u5716\u7247",uploadSuccess:"\u4E0A\u50B3\u6210\u529F",modalTitle:"\u982D\u50CF\u4E0A\u50B3",okText:"\u78BA\u8A8D\u4E26\u4E0A\u50B3",btn_reset:"\u91CD\u7F6E",btn_rotate_left:"\u9006\u6642\u91DD\u65CB\u8F49",btn_rotate_right:"\u9806\u6642\u91DD\u65CB\u8F49",btn_scale_x:"\u6C34\u5E73\u7FFB\u8F49",btn_scale_y:"\u5782\u76F4\u7FFB\u8F49",btn_zoom_in:"\u653E\u5927",btn_zoom_out:"\u7E2E\u5C0F",preview:"\u9810\u89BD"},drawer:{loadingText:"\u52A0\u8F09\u4E2D...",cancelText:"\u95DC\u9589",okText:"\u78BA\u8A8D"},excel:{exportModalTitle:"\u5C0E\u51FA\u6578\u64DA",fileType:"\u6587\u4EF6\u985E\u578B",fileName:"\u6587\u4EF6\u540D"},form:{putAway:"\u6536\u8D77",unfold:"\u5C55\u958B",maxTip:"\u5B57\u7B26\u6578\u61C9\u5C0F\u65BC{0}\u4F4D",apiSelectNotFound:"\u8ACB\u7B49\u5F85\u6578\u64DA\u52A0\u8F09\u5B8C\u6210..."},icon:{placeholder:"\u9EDE\u64CA\u9078\u64C7\u5716\u6A19",search:"\u641C\u7D22\u5716\u6A19",copy:"\u8907\u88FD\u5716\u6A19\u6210\u529F!"},menu:{search:"\u83DC\u55AE\u641C\u7D22"},modal:{cancelText:"\u95DC\u9589",okText:"\u78BA\u8A8D",close:"\u95DC\u9589",maximize:"\u6700\u5927\u5316",restore:"\u9084\u539F"},table:{settingDens:"\u5BC6\u5EA6",settingDensDefault:"\u9ED8\u8A8D",settingDensMiddle:"\u4E2D\u7B49",settingDensSmall:"\u7DCA\u6E4A",settingColumn:"\u5217\u8A2D\u7F6E",settingColumnShow:"\u5217\u5C55\u793A",settingIndexColumnShow:"\u5E8F\u865F\u5217",settingSelectColumnShow:"\u52FE\u9078\u5217",settingFixedLeft:"\u56FA\u5B9A\u5230\u5DE6\u5074",settingFixedRight:"\u56FA\u5B9A\u5230\u53F3\u5074",settingFullScreen:"\u5168\u5C4F",index:"\u5E8F\u865F",total:"\u5171 {total} \u689D\u6578\u64DA"},time:{before:"\u524D",after:"\u5F8C",just:"\u525B\u525B",seconds:"\u79D2",minutes:"\u5206\u9418",hours:"\u5C0F\u6642",days:"\u5929"},tree:{selectAll:"\u9078\u64C7\u5168\u90E8",unSelectAll:"\u53D6\u6D88\u9078\u64C7",expandAll:"\u5C55\u958B\u5168\u90E8",unExpandAll:"\u647A\u758A\u5168\u90E8",checkStrictly:"\u5C64\u7D1A\u95DC\u806F",checkUnStrictly:"\u5C64\u7D1A\u7368\u7ACB"},upload:{save:"\u4FDD\u5B58",upload:"\u4E0A\u50B3",imgUpload:"\u5716\u7247\u4E0A\u50B3",uploaded:"\u5DF2\u4E0A\u50B3",operating:"\u64CD\u4F5C",del:"\u522A\u9664",download:"\u4E0B\u8F09",saveWarn:"\u8ACB\u7B49\u5F85\u6587\u4EF6\u4E0A\u50B3\u5F8C\uFF0C\u4FDD\u5B58!",saveError:"\u6C92\u6709\u4E0A\u50B3\u6210\u529F\u7684\u6587\u4EF6\uFF0C\u7121\u6CD5\u4FDD\u5B58!",preview:"\u9810\u89BD",choose:"\u9078\u64C7\u6587\u4EF6",accept:"\u652F\u6301{0}\u683C\u5F0F",acceptUpload:"\u53EA\u80FD\u4E0A\u50B3{0}\u683C\u5F0F\u6587\u4EF6",maxSize:"\u55AE\u500B\u6587\u4EF6\u4E0D\u8D85\u904E{0}MB",maxSizeMultiple:"\u53EA\u80FD\u4E0A\u50B3\u4E0D\u8D85\u904E{0}MB\u7684\u6587\u4EF6!",maxNumber:"\u6700\u591A\u96BB\u80FD\u4E0A\u50B3{0}\u500B\u6587\u4EF6",legend:"\u7565\u7E2E\u5716",fileName:"\u6587\u4EF6\u540D",fileSize:"\u6587\u4EF6\u5927\u5C0F",fileStatue:"\u72C0\u614B",startUpload:"\u958B\u59CB\u4E0A\u50B3",uploadSuccess:"\u4E0A\u50B3\u6210\u529F",uploadError:"\u4E0A\u50B3\u5931\u6557",uploading:"\u4E0A\u50B3\u4E2D",uploadWait:"\u8ACB\u7B49\u5F85\u6587\u4EF6\u4E0A\u50B3\u7D50\u675F\u5F8C\u64CD\u4F5C",reUploadFailed:"\u91CD\u65B0\u4E0A\u50B3\u5931\u6557\u6587\u4EF6"},verify:{error:"\u9A57\u8B49\u5931\u6557\uFF01",time:"\u9A57\u8B49\u6821\u9A57\u6210\u529F,\u8017\u6642{time}\u79D2\uFF01",redoTip:"\u9EDE\u64CA\u5716\u7247\u53EF\u5237\u65B0",dragText:"\u8ACB\u6309\u4F4F\u6ED1\u584A\u62D6\u52D5",successText:"\u9A57\u8B49\u901A\u904E"}},b=Object.freeze(Object.defineProperty({__proto__:null,default:g},Symbol.toStringTag,{value:"Module"})),T={footer:{onlinePreview:"\u5728\u7DDA\u9810\u89BD",onlineDocument:"\u5728\u7DDA\u6587\u6A94"},header:{dropdownItemDoc:"\u6587\u6A94",dropdownItemLoginOut:"\u9000\u51FA\u7CFB\u7D71",tooltipErrorLog:"\u932F\u8AA4\u65E5\u8A8C",tooltipLock:"\u9396\u5B9A\u5C4F\u5E55",tooltipNotify:"\u6D88\u606F\u901A\u77E5",tooltipEntryFull:"\u5168\u5C4F",tooltipExitFull:"\u9000\u51FA\u5168\u5C4F",lockScreenPassword:"\u9396\u5C4F\u5BC6\u78BC",lockScreen:"\u9396\u5B9A\u5C4F\u5E55",lockScreenBtn:"\u9396\u5B9A",home:"\u9996\u9801"},multipleTab:{reload:"\u91CD\u65B0\u52A0\u8F09",close:"\u95DC\u9589\u6A19\u7C64\u9801",closeLeft:"\u95DC\u9589\u5DE6\u5074\u6A19\u7C64\u9801",closeRight:"\u95DC\u9589\u53F3\u5074\u6A19\u7C64\u9801",closeOther:"\u95DC\u9589\u5176\u5B83\u6A19\u7C64\u9801",closeAll:"\u95DC\u9589\u5168\u90E8\u6A19\u7C64\u9801"},setting:{contentModeFull:"\u6D41\u5F0F",contentModeFixed:"\u5B9A\u5BEC",topMenuAlignLeft:"\u5C45\u5DE6",topMenuAlignRight:"\u5C45\u4E2D",topMenuAlignCenter:"\u5C45\u53F3",menuTriggerNone:"\u4E0D\u986F\u793A",menuTriggerBottom:"\u5E95\u90E8",menuTriggerTop:"\u9802\u90E8",menuTypeSidebar:"\u5DE6\u5074\u83DC\u55AE\u6A21\u5F0F",menuTypeMixSidebar:"\u5DE6\u5074\u83DC\u55AE\u6DF7\u5408\u6A21\u5F0F",menuTypeMix:"\u9802\u90E8\u83DC\u55AE\u6DF7\u5408\u6A21\u5F0F",menuTypeTopMenu:"\u9802\u90E8\u83DC\u55AE\u6A21\u5F0F",on:"\u958B",off:"\u95DC",minute:"\u5206\u9418",operatingTitle:"\u64CD\u4F5C\u6210\u529F",operatingContent:"\u8907\u88FD\u6210\u529F,\u8ACB\u5230 src/settings/projectSetting.ts \u4E2D\u4FEE\u6539\u914D\u7F6E\uFF01",resetSuccess:"\u91CD\u7F6E\u6210\u529F\uFF01",copyBtn:"\u62F7\u8C9D",clearBtn:"\u6E05\u7A7A\u7DE9\u5B58\u4E26\u8FD4\u56DE\u767B\u9304\u9801",drawerTitle:"\u9805\u76EE\u914D\u7F6E",darkMode:"\u4E3B\u984C",navMode:"\u5C0E\u822A\u6B04\u6A21\u5F0F",interfaceFunction:"\u754C\u9762\u529F\u80FD",interfaceDisplay:"\u754C\u9762\u986F\u793A",animation:"\u52D5\u756B",splitMenu:"\u5206\u5272\u83DC\u55AE",closeMixSidebarOnChange:"\u5207\u63DB\u9801\u9762\u95DC\u9589\u83DC\u55AE",sysTheme:"\u7CFB\u7D71\u4E3B\u984C",headerTheme:"\u9802\u6B04\u4E3B\u984C",sidebarTheme:"\u83DC\u55AE\u4E3B\u984C",menuDrag:"\u5074\u908A\u83DC\u55AE\u62D6\u62FD",menuSearch:"\u83DC\u55AE\u641C\u7D22",menuAccordion:"\u5074\u908A\u83DC\u55AE\u624B\u98A8\u7434\u6A21\u5F0F",menuCollapse:"\u647A\u758A\u83DC\u55AE",collapseMenuDisplayName:"\u647A\u758A\u83DC\u55AE\u986F\u793A\u540D\u7A31",topMenuLayout:"\u9802\u90E8\u83DC\u55AE\u4F48\u5C40",menuCollapseButton:"\u83DC\u55AE\u647A\u758A\u6309\u9215",contentMode:"\u5167\u5BB9\u5340\u57DF\u5BEC\u5EA6",expandedMenuWidth:"\u83DC\u55AE\u5C55\u958B\u5BEC\u5EA6",breadcrumb:"\u9EB5\u5305\u5C51",breadcrumbIcon:"\u9EB5\u5305\u5C51\u5716\u6A19",tabs:"\u6A19\u7C64\u9801",tabDetail:"\u6A19\u7C64\u8A73\u60C5\u9801",tabsQuickBtn:"\u6A19\u7C64\u9801\u5FEB\u6377\u6309\u9215",tabsRedoBtn:"\u6A19\u7C64\u9801\u5237\u65B0\u6309\u9215",tabsFoldBtn:"\u6A19\u7C64\u9801\u647A\u758A\u6309\u9215",sidebar:"\u5DE6\u5074\u83DC\u55AE",header:"\u9802\u6B04",footer:"\u9801\u8173",fullContent:"\u5168\u5C4F\u5167\u5BB9",grayMode:"\u7070\u8272\u6A21\u5F0F",colorWeak:"\u8272\u5F31\u6A21\u5F0F",progress:"\u9802\u90E8\u9032\u5EA6\u689D",switchLoading:"\u5207\u63DBloading",switchAnimation:"\u5207\u63DB\u52D5\u756B",animationType:"\u52D5\u756B\u985E\u578B",autoScreenLock:"\u81EA\u52D5\u9396\u5C4F",notAutoScreenLock:"\u4E0D\u81EA\u52D5\u9396\u5C4F",fixedHeader:"\u56FA\u5B9Aheader",fixedSideBar:"\u56FA\u5B9ASidebar",mixSidebarTrigger:"\u6DF7\u5408\u83DC\u55AE\u89F8\u767C\u65B9\u5F0F",triggerHover:"\u61F8\u505C",triggerClick:"\u9EDE\u64CA",mixSidebarFixed:"\u56FA\u5B9A\u5C55\u958B\u83DC\u55AE"}},f=Object.freeze(Object.defineProperty({__proto__:null,default:T},Symbol.toStringTag,{value:"Module"})),x={api:{operationFailed:"\u64CD\u4F5C\u5931\u6557",errorTip:"\u932F\u8AA4\u63D0\u793A",errorMessage:"\u64CD\u4F5C\u5931\u6557,\u7CFB\u7D71\u7570\u5E38!",timeoutMessage:"\u767B\u9304\u8D85\u6642,\u8ACB\u91CD\u65B0\u767B\u9304!",apiTimeoutMessage:"\u63A5\u53E3\u8ACB\u6C42\u8D85\u6642,\u8ACB\u5237\u65B0\u9801\u9762\u91CD\u8A66!",apiRequestFailed:"\u8ACB\u6C42\u51FA\u932F\uFF0C\u8ACB\u7A0D\u5019\u91CD\u8A66",networkException:"\u7DB2\u7D61\u7570\u5E38",networkExceptionMsg:"\u7DB2\u7D61\u7570\u5E38\uFF0C\u8ACB\u6AA2\u67E5\u60A8\u7684\u7DB2\u7D61\u9023\u63A5\u662F\u5426\u6B63\u5E38!",errMsg401:"\u7528\u6236\u6C92\u6709\u6B0A\u9650\uFF08\u4EE4\u724C\u3001\u7528\u6236\u540D\u3001\u5BC6\u78BC\u932F\u8AA4\uFF09!",errMsg403:"\u7528\u6236\u5F97\u5230\u6388\u6B0A\uFF0C\u4F46\u662F\u8A2A\u554F\u662F\u88AB\u7981\u6B62\u7684\u3002!",errMsg404:"\u7DB2\u7D61\u8ACB\u6C42\u932F\u8AA4,\u672A\u627E\u5230\u8A72\u8CC7\u6E90!",errMsg405:"\u7DB2\u7D61\u8ACB\u6C42\u932F\u8AA4,\u8ACB\u6C42\u65B9\u6CD5\u672A\u5141\u8A31!",errMsg408:"\u7DB2\u7D61\u8ACB\u6C42\u8D85\u6642!",errMsg500:"\u670D\u52D9\u5668\u932F\u8AA4,\u8ACB\u806F\u7E6B\u7BA1\u7406\u54E1!",errMsg501:"\u7DB2\u7D61\u672A\u5BE6\u73FE!",errMsg502:"\u7DB2\u7D61\u932F\u8AA4!",errMsg503:"\u670D\u52D9\u4E0D\u53EF\u7528\uFF0C\u670D\u52D9\u5668\u66AB\u6642\u904E\u8F09\u6216\u7DAD\u8B77!",errMsg504:"\u7DB2\u7D61\u8D85\u6642!",errMsg505:"http\u7248\u672C\u4E0D\u652F\u6301\u8A72\u8ACB\u6C42!"},app:{logoutTip:"\u6EAB\u99A8\u63D0\u9192",logoutMessage:"\u662F\u5426\u78BA\u8A8D\u9000\u51FA\u7CFB\u7D71?",menuLoading:"\u83DC\u55AE\u52A0\u8F09\u4E2D..."},errorLog:{tableTitle:"\u932F\u8AA4\u65E5\u8A8C\u5217\u8868",tableColumnType:"\u985E\u578B",tableColumnDate:"\u6642\u9593",tableColumnFile:"\u6587\u4EF6",tableColumnMsg:"\u932F\u8AA4\u4FE1\u606F",tableColumnStackMsg:"stack\u4FE1\u606F",tableActionDesc:"\u8A73\u60C5",modalTitle:"\u932F\u8AA4\u8A73\u60C5",fireVueError:"\u9EDE\u64CA\u89F8\u767Cvue\u932F\u8AA4",fireResourceError:"\u9EDE\u64CA\u89F8\u767C\u8CC7\u6E90\u52A0\u8F09\u932F\u8AA4",fireAjaxError:"\u9EDE\u64CA\u89F8\u767Cajax\u932F\u8AA4",enableMessage:"\u53EA\u5728`/src/settings/projectSetting.ts` \u5167\u7684useErrorHandle=true\u6642\u751F\u6548."},exception:{backLogin:"\u8FD4\u56DE\u767B\u9304",backHome:"\u8FD4\u56DE\u9996\u9801",subTitle403:"\u62B1\u6B49\uFF0C\u60A8\u7121\u6B0A\u8A2A\u554F\u6B64\u9801\u9762\u3002",subTitle404:"\u62B1\u6B49\uFF0C\u60A8\u8A2A\u554F\u7684\u9801\u9762\u4E0D\u5B58\u5728\u3002",subTitle500:"\u62B1\u6B49\uFF0C\u670D\u52D9\u5668\u5831\u544A\u932F\u8AA4\u3002",noDataTitle:"\u7576\u524D\u9801\u7121\u6578\u64DA",networkErrorTitle:"\u7DB2\u7D61\u932F\u8AA4",networkErrorSubTitle:"\u62B1\u6B49\uFF0C\u60A8\u7684\u7DB2\u7D61\u9023\u63A5\u5DF2\u65B7\u958B\uFF0C\u8ACB\u6AA2\u67E5\u60A8\u7684\u7DB2\u7D61\uFF01"},lock:{unlock:"\u9EDE\u64CA\u89E3\u9396",alert:"\u9396\u5C4F\u5BC6\u78BC\u932F\u8AA4",backToLogin:"\u8FD4\u56DE\u767B\u9304",entry:"\u9032\u5165\u7CFB\u7D71",placeholder:"\u8ACB\u8F38\u5165\u9396\u5C4F\u5BC6\u78BC\u6216\u8005\u7528\u6236\u5BC6\u78BC"},login:{backSignIn:"\u8FD4\u56DE",signInFormTitle:"\u767B\u9304",mobileSignInFormTitle:"\u624B\u6A5F\u767B\u9304",qrSignInFormTitle:"\u4E8C\u7DAD\u78BC\u767B\u9304",signUpFormTitle:"\u8A3B\u518A",forgetFormTitle:"\u91CD\u7F6E\u5BC6\u78BC",signInTitle:"\u958B\u7BB1\u5373\u7528\u7684\u4E2D\u5F8C\u81FA\u7BA1\u7406\u7CFB\u7D71",signInDesc:"\u8F38\u5165\u60A8\u7684\u500B\u4EBA\u8A73\u7D30\u4FE1\u606F\u958B\u59CB\u4F7F\u7528\uFF01",policy:"\u6211\u540C\u610Fxxx\u96B1\u79C1\u653F\u7B56",scanSign:'\u6383\u78BC\u5F8C\u9EDE\u64CA"\u78BA\u8A8D"\uFF0C\u5373\u53EF\u5B8C\u6210\u767B\u9304',loginButton:"\u767B\u9304",registerButton:"\u8A3B\u518A",rememberMe:"\u8A18\u4F4F\u6211",forgetPassword:"\u5FD8\u8A18\u5BC6\u78BC?",otherSignIn:"\u5176\u4ED6\u767B\u9304\u65B9\u5F0F",loginSuccessTitle:"\u767B\u9304\u6210\u529F",loginSuccessDesc:"\u6B61\u8FCE\u56DE\u4F86",accountPlaceholder:"\u8ACB\u8F38\u5165\u8CEC\u865F",passwordPlaceholder:"\u8ACB\u8F38\u5165\u5BC6\u78BC",smsPlaceholder:"\u8ACB\u8F38\u5165\u9A57\u8B49\u78BC",mobilePlaceholder:"\u8ACB\u8F38\u5165\u624B\u6A5F\u865F\u78BC",policyPlaceholder:"\u52FE\u9078\u5F8C\u624D\u80FD\u8A3B\u518A",diffPwd:"\u5169\u6B21\u8F38\u5165\u5BC6\u78BC\u4E0D\u4E00\u81F4",userName:"\u8CEC\u865F",password:"\u5BC6\u78BC",confirmPassword:"\u78BA\u8A8D\u5BC6\u78BC",email:"\u90F5\u7BB1",smsCode:"\u77ED\u4FE1\u9A57\u8B49\u78BC",mobile:"\u624B\u6A5F\u865F\u78BC"}},h=Object.freeze(Object.defineProperty({__proto__:null,default:x},Symbol.toStringTag,{value:"Module"})),_={login:"\u767B\u9304",errorLogList:"\u932F\u8AA4\u65E5\u8A8C\u5217\u8868"},y=Object.freeze(Object.defineProperty({__proto__:null,default:_},Symbol.toStringTag,{value:"Module"})),S={dashboard:"Dashboard",about:"\u95DC\u65BC",workbench:"\u5DE5\u4F5C\u81FA",analysis:"\u5206\u6790\u9801"},v=Object.freeze(Object.defineProperty({__proto__:null,default:S},Symbol.toStringTag,{value:"Module"})),M={charts:{baiduMap:"\u767E\u5EA6\u5730\u5716",aMap:"\u9AD8\u5FB7\u5730\u5716",googleMap:"\u8C37\u6B4C\u5730\u5716",charts:"\u5716\u8868",map:"\u5730\u5716",line:"\u6298\u7DDA\u5716",pie:"\u9905\u5716"},comp:{comp:"\u7D44\u4EF6",basic:"\u57FA\u790E\u7D44\u4EF6",transition:"\u52D5\u756B\u7D44\u4EF6",countTo:"\u6578\u5B57\u52D5\u756B",scroll:"\u6EFE\u52D5\u7D44\u4EF6",scrollBasic:"\u57FA\u790E\u6EFE\u52D5",scrollAction:"\u6EFE\u52D5\u51FD\u6578",virtualScroll:"\u865B\u64EC\u6EFE\u52D5",tree:"Tree",treeBasic:"\u57FA\u790E\u6A39",editTree:"\u53EF\u641C\u7D22/\u5DE5\u5177\u6B04",actionTree:"\u51FD\u6578\u64CD\u4F5C\u793A\u4F8B",modal:"\u5F48\u7A97\u64F4\u5C55",drawer:"\u62BD\u5C5C\u64F4\u5C55",desc:"\u8A73\u60C5\u7D44\u4EF6",lazy:"\u61F6\u52A0\u8F09\u7D44\u4EF6",lazyBasic:"\u57FA\u790E\u793A\u4F8B",lazyTransition:"\u52D5\u756B\u6548\u679C",verify:"\u9A57\u8B49\u7D44\u4EF6",verifyDrag:"\u62D6\u62FD\u6821\u9A57",verifyRotate:"\u5716\u7247\u9084\u539F",qrcode:"\u4E8C\u7DAD\u78BC\u7D44\u4EF6",strength:"\u5BC6\u78BC\u5F37\u5EA6\u7D44\u4EF6",upload:"\u4E0A\u50B3\u7D44\u4EF6",loading:"Loading",time:"\u76F8\u5C0D\u6642\u9593",cropperImage:"\u5716\u7247\u88C1\u526A",cardList:"\u5361\u7247\u5217\u8868"},editor:{editor:"\u7DE8\u8F2F\u5668",jsonEditor:"Json\u7DE8\u8F2F\u5668",markdown:"markdown\u7DE8\u8F2F\u5668",tinymce:"\u5BCC\u6587\u672C",tinymceBasic:"\u57FA\u790E\u4F7F\u7528",tinymceForm:"\u5D4C\u5165form"},excel:{excel:"Excel",customExport:"\u9078\u64C7\u5C0E\u51FA\u683C\u5F0F",jsonExport:"JSON\u6578\u64DA\u5C0E\u51FA",arrayExport:"Array\u6578\u64DA\u5C0E\u51FA",importExcel:"\u5C0E\u5165"},feat:{feat:"\u529F\u80FD",icon:"\u5716\u6A19",sessionTimeout:"\u767B\u9304\u904E\u671F",tabs:"\u6A19\u7C64\u9801\u64CD\u4F5C",tabDetail:"\u6A19\u7C64\u8A73\u60C5\u9801",print:"\u6253\u5370",contextMenu:"\u53F3\u9375\u83DC\u55AE",download:"\u6587\u4EF6\u4E0B\u8F09",clickOutSide:"ClickOutSide\u7D44\u4EF6",imgPreview:"\u5716\u7247\u9810\u89BD",copy:"\u526A\u5207\u677F",msg:"\u6D88\u606F\u63D0\u793A",watermark:"\u6C34\u5370",ripple:"\u6C34\u6CE2\u7D0B",fullScreen:"\u5168\u5C4F",errorLog:"\u932F\u8AA4\u65E5\u8A8C",tab:"Tab\u5E36\u53C3",tab1:"Tab\u5E36\u53C31",tab2:"Tab\u5E36\u53C32",menu:"Menu\u5E36\u53C3",menu1:"Menu\u5E36\u53C31",menu2:"Menu\u5E36\u53C32",ws:"websocket\u6E2C\u8A66",breadcrumb:"\u9EB5\u5305\u5C51\u5C0E\u822A",breadcrumbFlat:"\u5E73\u7D1A\u6A21\u5F0F",requestDemo:"\u6E2C\u8A66\u8ACB\u6C42\u91CD\u8A66",breadcrumbFlatDetail:"\u5E73\u7D1A\u8A73\u60C5",breadcrumbChildren:"\u5C64\u7D1A\u6A21\u5F0F",breadcrumbChildrenDetail:"\u5C64\u7D1A\u8A73\u60C5"},flow:{name:"\u5716\u5F62\u7DE8\u8F2F\u5668",flowChart:"\u6D41\u7A0B\u5716"},form:{form:"Form",basic:"\u57FA\u790E\u8868\u55AE",useForm:"useForm",refForm:"RefForm",advancedForm:"\u53EF\u6536\u7E2E\u8868\u55AE",ruleForm:"\u8868\u55AE\u9A57\u8B49",dynamicForm:"\u52D5\u614B\u8868\u55AE",customerForm:"\u81EA\u5B9A\u7FA9\u7D44\u4EF6",appendForm:"\u8868\u55AE\u589E\u522A\u793A\u4F8B",tabsForm:"\u6A19\u7C64\u9801+\u591A\u7D1Afield"},iframe:{frame:"\u5916\u90E8\u9801\u9762",antv:"antVue\u6587\u6A94(\u5167\u5D4C)",doc:"\u9805\u76EE\u6587\u6A94(\u5167\u5D4C)",docExternal:"\u9805\u76EE\u6587\u6A94(\u5916\u93C8)"},level:{level:"\u591A\u7D1A\u83DC\u55AE"},page:{page:"\u9801\u9762",form:"\u8868\u55AE\u9801",formBasic:"\u57FA\u790E\u8868\u55AE",formStep:"\u5206\u6B65\u8868\u55AE",formHigh:"\u9AD8\u7D1A\u8868\u55AE",desc:"\u8A73\u60C5\u9801",descBasic:"\u57FA\u790E\u8A73\u60C5\u9801",descHigh:"\u9AD8\u7D1A\u8A73\u60C5\u9801",result:"\u7D50\u679C\u9801",resultSuccess:"\u6210\u529F\u9801",resultFail:"\u5931\u6557\u9801",account:"\u500B\u4EBA\u9801",accountCenter:"\u500B\u4EBA\u4E2D\u5FC3",accountSetting:"\u500B\u4EBA\u8A2D\u7F6E",exception:"\u7570\u5E38\u9801",netWorkError:"\u7DB2\u7D61\u932F\u8AA4",notData:"\u7121\u6578\u64DA",list:"\u5217\u8868\u9801",listCard:"\u5361\u7247\u5217\u8868",listBasic:"\u6A19\u6E96\u5217\u8868",listSearch:"\u641C\u7D22\u5217\u8868"},permission:{permission:"\u6B0A\u9650\u7BA1\u7406",front:"\u57FA\u65BC\u524D\u7AEF\u6B0A\u9650",frontPage:"\u9801\u9762\u6B0A\u9650",frontBtn:"\u6309\u9215\u6B0A\u9650",frontTestA:"\u6B0A\u9650\u6E2C\u8A66\u9801A",frontTestB:"\u6B0A\u9650\u6E2C\u8A66\u9801B",back:"\u57FA\u65BC\u5F8C\u81FA\u6B0A\u9650",backPage:"\u9801\u9762\u6B0A\u9650",backBtn:"\u6309\u9215\u6B0A\u9650"},setup:{page:"\u5F15\u5C0E\u9801"},system:{moduleName:"\u7CFB\u7D71\u7BA1\u7406",account:"\u8CEC\u865F\u7BA1\u7406",account_detail:"\u8CEC\u865F\u8A73\u60C5",password:"\u4FEE\u6539\u5BC6\u78BC",dept:"\u90E8\u9580\u7BA1\u7406",menu:"\u83DC\u55AE\u7BA1\u7406",role:"\u89D2\u8272\u7BA1\u7406"},table:{table:"Table",basic:"\u57FA\u790E\u8868\u683C",treeTable:"\u6A39\u5F62\u8868\u683C",fetchTable:"\u9060\u7A0B\u52A0\u8F09\u793A\u4F8B",fixedColumn:"\u56FA\u5B9A\u5217",customerCell:"\u81EA\u5B9A\u7FA9\u5217",formTable:"\u958B\u555F\u641C\u7D22\u5340\u57DF",useTable:"UseTable",refTable:"RefTable",multipleHeader:"\u591A\u7D1A\u8868\u982D",mergeHeader:"\u5408\u4F75\u55AE\u5143\u683C",expandTable:"\u53EF\u5C55\u958B\u8868\u683C",fixedHeight:"\u5B9A\u9AD8/\u982D\u90E8\u81EA\u5B9A\u7FA9",footerTable:"\u8868\u5C3E\u884C\u5408\u8A08",editCellTable:"\u53EF\u7DE8\u8F2F\u55AE\u5143\u683C",editRowTable:"\u53EF\u7DE8\u8F2F\u884C",authColumn:"\u6B0A\u9650\u5217",resizeParentHeightTable:"\u7E7C\u627F\u7236\u5143\u7D20\u9AD8\u5EA6"}},k=Object.freeze(Object.defineProperty({__proto__:null,default:M},Symbol.toStringTag,{value:"Module"})),w={items_per_page:"\u689D/\u9801",jump_to:"\u8DF3\u81F3",jump_to_confirm:"\u78BA\u5B9A",page:"\u9801",prev_page:"\u4E0A\u4E00\u9801",next_page:"\u4E0B\u4E00\u9801",prev_5:"\u5411\u524D 5 \u9801",next_5:"\u5411\u5F8C 5 \u9801",prev_3:"\u5411\u524D 3 \u9801",next_3:"\u5411\u5F8C 3 \u9801"},$={locale:"zh_TW",today:"\u4ECA\u5929",now:"\u6B64\u523B",backToToday:"\u8FD4\u56DE\u4ECA\u5929",ok:"\u78BA\u5B9A",timeSelect:"\u9078\u64C7\u6642\u9593",dateSelect:"\u9078\u64C7\u65E5\u671F",weekSelect:"\u9078\u64C7\u5468",clear:"\u6E05\u9664",month:"\u6708",year:"\u5E74",previousMonth:"\u4E0A\u500B\u6708 (\u7FFB\u9801\u4E0A\u9375)",nextMonth:"\u4E0B\u500B\u6708 (\u7FFB\u9801\u4E0B\u9375)",monthSelect:"\u9078\u64C7\u6708\u4EFD",yearSelect:"\u9078\u64C7\u5E74\u4EFD",decadeSelect:"\u9078\u64C7\u5E74\u4EE3",yearFormat:"YYYY\u5E74",dayFormat:"D\u65E5",dateFormat:"YYYY\u5E74M\u6708D\u65E5",dateTimeFormat:"YYYY\u5E74M\u6708D\u65E5 HH\u6642mm\u5206ss\u79D2",previousYear:"\u4E0A\u4E00\u5E74 (Control\u9375\u52A0\u5DE6\u65B9\u5411\u9375)",nextYear:"\u4E0B\u4E00\u5E74 (Control\u9375\u52A0\u53F3\u65B9\u5411\u9375)",previousDecade:"\u4E0A\u4E00\u5E74\u4EE3",nextDecade:"\u4E0B\u4E00\u5E74\u4EE3",previousCentury:"\u4E0A\u4E00\u4E16\u7D00",nextCentury:"\u4E0B\u4E00\u4E16\u7D00"},P=$,z={placeholder:"\u8ACB\u9078\u64C7\u6642\u9593"},n=z,D={lang:F({placeholder:"\u8ACB\u9078\u64C7\u65E5\u671F",yearPlaceholder:"\u8ACB\u9078\u64C7\u5E74\u4EFD",quarterPlaceholder:"\u8ACB\u9078\u64C7\u5B63\u5EA6",monthPlaceholder:"\u8ACB\u9078\u64C7\u6708\u4EFD",weekPlaceholder:"\u8ACB\u9078\u64C7\u5468",rangePlaceholder:["\u958B\u59CB\u65E5\u671F","\u7D50\u675F\u65E5\u671F"],rangeYearPlaceholder:["\u958B\u59CB\u5E74\u4EFD","\u7D50\u675F\u5E74\u4EFD"],rangeMonthPlaceholder:["\u958B\u59CB\u6708\u4EFD","\u7D50\u675F\u6708\u4EFD"],rangeQuarterPlaceholder:["\u958B\u59CB\u5B63\u5EA6","\u7D50\u675F\u5B63\u5EA6"],rangeWeekPlaceholder:["\u958B\u59CB\u5468","\u7D50\u675F\u5468"]},P),timePickerLocale:F({},n)};D.lang.ok="\u78BA \u5B9A";var C=D,u="${label}\u4E0D\u662F\u4E00\u500B\u6709\u6548\u7684${type}",j={locale:"zh-tw",Pagination:w,DatePicker:C,TimePicker:n,Calendar:C,global:{placeholder:"\u8ACB\u9078\u64C7"},Table:{filterTitle:"\u7BE9\u9078\u5668",filterConfirm:"\u78BA\u5B9A",filterReset:"\u91CD\u7F6E",filterEmptyText:"\u7121\u7BE9\u9078\u9805",selectAll:"\u5168\u90E8\u9078\u53D6",selectInvert:"\u53CD\u5411\u9078\u53D6",selectNone:"\u6E05\u7A7A\u6240\u6709",selectionAll:"\u5168\u9078\u6240\u6709",sortTitle:"\u6392\u5E8F",expand:"\u5C55\u958B\u884C",collapse:"\u95DC\u9589\u884C",triggerDesc:"\u9EDE\u64CA\u964D\u5E8F",triggerAsc:"\u9EDE\u64CA\u5347\u5E8F",cancelSort:"\u53D6\u6D88\u6392\u5E8F"},Modal:{okText:"\u78BA\u5B9A",cancelText:"\u53D6\u6D88",justOkText:"\u77E5\u9053\u4E86"},Popconfirm:{okText:"\u78BA\u5B9A",cancelText:"\u53D6\u6D88"},Transfer:{searchPlaceholder:"\u641C\u5C0B\u8CC7\u6599",itemUnit:"\u9805\u76EE",itemsUnit:"\u9805\u76EE",remove:"\u5220\u9664",selectCurrent:"\u5168\u9078\u7576\u9801",removeCurrent:"\u5220\u9664\u7576\u9801",selectAll:"\u5168\u9078\u6240\u6709",removeAll:"\u5220\u9664\u5168\u90E8",selectInvert:"\u53CD\u9078\u7576\u9801"},Upload:{uploading:"\u6B63\u5728\u4E0A\u50B3...",removeFile:"\u522A\u9664\u6A94\u6848",uploadError:"\u4E0A\u50B3\u5931\u6557",previewFile:"\u6A94\u6848\u9810\u89BD",downloadFile:"\u4E0B\u8F7D\u6587\u4EF6"},Empty:{description:"\u7121\u6B64\u8CC7\u6599"},Icon:{icon:"\u5716\u6A19"},Text:{edit:"\u7DE8\u8F2F",copy:"\u8907\u88FD",copied:"\u8907\u88FD\u6210\u529F",expand:"\u5C55\u958B"},PageHeader:{back:"\u8FD4\u56DE"},Form:{optional:"\uFF08\u53EF\u9078\uFF09",defaultValidateMessages:{default:"\u5B57\u6BB5\u9A57\u8B49\u932F\u8AA4${label}",required:"\u8ACB\u8F38\u5165${label}",enum:"${label}\u5FC5\u9808\u662F\u5176\u4E2D\u4E00\u500B[${enum}]",whitespace:"${label}\u4E0D\u80FD\u70BA\u7A7A\u5B57\u7B26",date:{format:"${label}\u65E5\u671F\u683C\u5F0F\u7121\u6548",parse:"${label}\u4E0D\u80FD\u8F49\u63DB\u70BA\u65E5\u671F",invalid:"${label}\u662F\u4E00\u500B\u7121\u6548\u65E5\u671F"},types:{string:u,method:u,array:u,object:u,number:u,date:u,boolean:u,integer:u,float:u,regexp:u,email:u,url:u,hex:u},string:{len:"${label}\u9808\u70BA${len}\u500B\u5B57\u7B26",min:"${label}\u6700\u5C11${min}\u500B\u5B57\u7B26",max:"${label}\u6700\u591A${max}\u500B\u5B57\u7B26",range:"${label}\u9808\u5728${min}-${max}\u5B57\u7B26\u4E4B\u9593"},number:{len:"${label}\u5FC5\u9808\u7B49\u65BC${len}",min:"${label}\u6700\u5C0F\u503C\u70BA${min}",max:"${label}\u6700\u5927\u503C\u70BA${max}",range:"${label}\u9808\u5728${min}-${max}\u4E4B\u9593"},array:{len:"\u9808\u70BA${len}\u500B${label}",min:"\u6700\u5C11${min}\u500B${label}",max:"\u6700\u591A${max}\u500B${label}",range:"${label}\u6578\u91CF\u9808\u5728${min}-${max}\u4E4B\u9593"},pattern:{mismatch:"${label}\u8207\u6A21\u5F0F\u4E0D\u5339\u914D${pattern}"}}},Image:{preview:"\u9810\u89BD"}},L=j;const O={"./zh-TW/common.ts":p,"./zh-TW/component.ts":b,"./zh-TW/layout.ts":f,"./zh-TW/sys.ts":h,"./zh-TW/routes/basic.ts":y,"./zh-TW/routes/dashboard.ts":v,"./zh-TW/routes/demo.ts":k};var Y={message:A(l({},d(O,"zh-TW")),{antdLocale:L}),dateLocale:null,dateLocaleName:"tw"};export{Y as default};
