(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[19],{"+/Wb":function(e,a,t){"use strict";t.r(a);var M=t("jehZ"),c=t.n(M),n=t("p0pE"),i=t.n(n),N=t("d6i3"),I=t.n(N),j=t("1l/V"),o=t.n(j),l=t("q1tI"),r=t.n(l),m=t("/MKj"),y=t("pf/J"),D=t("lsKZ"),z=t("sEfC"),p=t.n(z),u=t("3WF5"),T=t.n(u),s=t("UfWW"),L=t.n(s),d=t("E+oP"),g=t.n(d),E=t("NGjL"),h=t.n(E),x=t("TSYQ"),w=t.n(x),S=t("uJMD");t("xPf6");function O(e){var a=e.column,M=void 0===a?2:a,c=e.index,n=e.onChange,i=e.active,N=()=>{n&&n(c)},I=M-1,j=c%M===I,o={width:"".concat((100-2*I)/M,"%")};return j&&(o.marginRight=0),r.a.createElement("div",{className:w()("spec-item",{active:i}),onClick:N,style:o},r.a.createElement("div",null,r.a.createElement("div",{className:"spec-item-price",dangerouslySetInnerHTML:{__html:Object(S["e"])(e.price,"tag")}}),e.price&&r.a.createElement("div",{className:"spec-item-original-phone"},"\u539f\u4ef7 ",e.name),e.active&&r.a.createElement("img",{className:"spec-item-check-ico",src:t("WoFp"),alt:""})))}var A=t("BGS6"),v=t.n(A),Q=function(e){var a=e.data,M=e.index,c=e.active,n=e.onChange,i=()=>{n&&n(M)};return r.a.createElement("div",{className:w()(v.a.attachItem,c?v.a.active:""),onClick:i},r.a.createElement("div",{className:v.a.priceBox},r.a.createElement("h2",null,"+",a.payPrice,"\u5143"),r.a.createElement("div",{className:v.a.originPrice,dangerouslySetInnerHTML:{__html:"\u539f\u4ef7"+Object(S["e"])(a.price,"tag")}})),r.a.createElement("div",{className:v.a.infoBox},r.a.createElement("h2",null,a.title),r.a.createElement("div",{className:v.a.productItemName},a.subTitle)),c&&r.a.createElement("img",{className:v.a.checkIcon,src:t("B2dH"),alt:""}))},b=t("/LDh"),Y=t("4smB"),k=t("qlp5"),_=t("tOtk");a["default"]=Object(m["c"])(e=>({phone:e.phone,phoneForm:e.phoneForm}))(function(e){var a=e.phone,t=a.product,M=void 0===t?{}:t,n=a.productItems,N=void 0===n?[]:n,j=a.attachList,m=void 0===j?[]:j,z=e.phoneForm,u=z.main,s=z.attach,d=void 0===s?{}:s,E=z.rechargeAccount,x=e.dispatch;Object(l["useEffect"])(()=>{o()(I.a.mark(function e(){return I.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,x({type:"phone/getAttachList",payload:{productId:19}});case 2:return e.next=4,x({type:"phone/getProductItems",payload:19});case 4:case"end":return e.stop()}},e)}))()},[x]);var w=e=>{x({type:"phoneForm/setState",payload:{main:N[e]}})},S=e=>{if(g()(d))x({type:"phoneForm/setState",payload:{attach:m[e]}});else{var a=L()(m,e=>e.id===d.id);x(a===e?{type:"phoneForm/setState",payload:{attach:{}}}:{type:"phoneForm/setState",payload:{attach:m[e]}})}},A=e=>{x({type:"phoneForm/setState",payload:{rechargeAccount:e}})},v=Object(l["useCallback"])(p()((e,a,t)=>{x({type:"prePay/setState",payload:{type:"phone",main:i()({},e,{rechargeAccount:t}),attach:a}})},200,{leading:!1,trailing:!0}),[]),Z=Object(l["useCallback"])(()=>{return/^1\d{10}$/.test(E)?!g()(u)||(y["a"].show("\u8bf7\u9009\u62e9\u8bdd\u8d39\u89c4\u683c\uff01"),!1):(y["a"].show("\u624b\u673a\u53f7\u7801\u683c\u5f0f\u9519\u8bef\uff01"),!1)},[E,u]);return Object(l["useEffect"])(()=>{v(u,d,E)},[v,u,d,E]),r.a.createElement("div",{className:h.a.phonePage},r.a.createElement(b["a"],{imgUrl:M.image,corner:M.topCornerMark,description:M.description}),r.a.createElement("div",{className:h.a.group},r.a.createElement("h2",null,"\u624b\u673a\u8bdd\u8d39"),r.a.createElement(D["a"],{placeholder:"\u8bf7\u8f93\u5165\u624b\u673a\u53f7",className:h.a.phoneInput,value:E,onChange:A}),r.a.createElement("div",{className:h.a.phoneItemList},T()(N,(e,a)=>r.a.createElement(O,c()({active:u.id===e.id,key:a},e,{column:3,index:a,onChange:w})))),!g()(m)&&r.a.createElement("h2",null,"\u8d85\u503c\u6362\u8d2d",r.a.createElement("span",null,"\u7ec4\u5408\u8d2d\u4e70\u66f4\u4f18\u60e0")),T()(m,(e,a)=>r.a.createElement(Q,{key:a,data:e,index:a,active:d.id===e.id,onChange:S}))),r.a.createElement("div",{className:h.a.detailBox},r.a.createElement(Y["a"],{nodes:M.detail||""})),r.a.createElement(k["a"],null),r.a.createElement(_["a"],{onValidate:Z,isShowDetail:!g()(u)||!g()(d)}))})},B2dH:function(e,a){e.exports="data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjE0IiB2aWV3Qm94PSIwIDAgMjMgMTQiIHdpZHRoPSIyMyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+PHJhZGlhbEdyYWRpZW50IGlkPSJhIiBjeD0iODAuNTA2MjQyJSIgY3k9IjgwLjM4ODg3MSUiIGdyYWRpZW50VHJhbnNmb3JtPSJtYXRyaXgoLS42NzE2ODEyNSAtLjU0MzIwMjc1IC40MzQ1NjIyIC0uODM5NjAxNTYgLjk5NjQ2NyAxLjkxNjE0NykiIHI9IjEzOC41NzI1ODIlIj48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiNhNjdjMzgiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNlYWQxOTUiLz48L3JhZGlhbEdyYWRpZW50PjxnIGZpbGw9Im5vbmUiPjxwYXRoIGQ9Im0xNCAwaDl2MTBjMCAyLjIwOTEzOS0xLjc5MDg2MSA0LTQgNGgtMTljMC03LjczMTk4NjUgNi4yNjgwMTM1LTE0IDE0LTE0eiIgZmlsbD0iIzEyMTgyYiIvPjxwYXRoIGQ9Im0xMS43NTAxMzIyIDExYy0uMjYxNzI2MyAwLS41MTMwMzczLS4wOTM3NDg5LS43MDAwNDgyLS4yNjExNjU2bC0yLjc1MDE3NDM1LTIuNDY0ODU0MDZjLS4zOTQyNzExOC0uMzUzMjQzMy0uNDAwNjc3MTMtLjkzMjQ4MjI4LS4wMTQwMzExNC0xLjI5Mjk4MDY4LjM4NzI1NTYtLjM2MDQ4OTI4IDEuMDIwMTc2MTctLjM2NjYyOTYyIDEuNDE0MTQ3NTQtLjAxMjgzODA3bDEuOTQ5NDA5NzUgMS43NDcyMTk4MyA0LjU2MTAyMTYtNS4zNjIyMDAyN2MuMzM4NzM2Mi0uMzk4NDM2OTUuOTY3Mzc5NS0uNDcwOTg4MDIgMS40MDM0NjQyLS4xNjAxNjA2LjQzNTc3NS4zMDk3MTI2Ni41MTQ1MTUzLjg4NDQ5MjU4LjE3NTQ2OTMgMS4yODI5Mjk1M2wtNS4yNDk3ODY5IDYuMTcxMzU0ODJjLS4xNzUxNjk0LjIwNTkyMDgtLjQzNzkxMzYuMzMzMTUwMi0uNzIyMzM0MS4zNTEwMDQ3LS4wMjI1ODU4LjAwMTEzMy0uMDQ0ODYxNy4wMDE2OTA0LS4wNjcxMzc3LjAwMTY5MDR6IiBmaWxsPSJ1cmwoI2EpIi8+PC9nPjwvc3ZnPg=="},BGS6:function(e,a,t){e.exports={attachItem:"attachItem___3JJEw",priceBox:"priceBox___3y1bI",originPrice:"originPrice___3KFoe",infoBox:"infoBox___1Ja4x",productItemName:"productItemName___1S2kF",active:"active___lDb3o",checkIcon:"checkIcon___1hzca"}},NGjL:function(e,a,t){e.exports={phonePage:"phonePage___2bh2p",header:"header___6_eOw",group:"group___3qYw-",phoneInput:"phoneInput___3zfGM",detailBox:"detailBox___33lgP"}},WoFp:function(e,a){e.exports="data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjE0IiB2aWV3Qm94PSIwIDAgMjMgMTQiIHdpZHRoPSIyMyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+PHJhZGlhbEdyYWRpZW50IGlkPSJhIiBjeD0iODAuNTA2MjQyJSIgY3k9IjgwLjM4ODg3MSUiIGdyYWRpZW50VHJhbnNmb3JtPSJtYXRyaXgoLS42NzE2ODEyNSAtLjU0MzIwMjc1IC40MzQ1NjIyIC0uODM5NjAxNTYgLjk5NjQ2NyAxLjkxNjE0NykiIHI9IjEzOC41NzI1ODIlIj48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiNhNjdjMzgiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNlYWQxOTUiLz48L3JhZGlhbEdyYWRpZW50PjxnIGZpbGw9Im5vbmUiPjxwYXRoIGQ9Im0xNCAwaDl2MTBjMCAyLjIwOTEzOS0xLjc5MDg2MSA0LTQgNGgtMTljMC03LjczMTk4NjUgNi4yNjgwMTM1LTE0IDE0LTE0eiIgZmlsbD0iIzEyMTgyYiIvPjxwYXRoIGQ9Im0xMS43NTAxMzIyIDExYy0uMjYxNzI2MyAwLS41MTMwMzczLS4wOTM3NDg5LS43MDAwNDgyLS4yNjExNjU2bC0yLjc1MDE3NDM1LTIuNDY0ODU0MDZjLS4zOTQyNzExOC0uMzUzMjQzMy0uNDAwNjc3MTMtLjkzMjQ4MjI4LS4wMTQwMzExNC0xLjI5Mjk4MDY4LjM4NzI1NTYtLjM2MDQ4OTI4IDEuMDIwMTc2MTctLjM2NjYyOTYyIDEuNDE0MTQ3NTQtLjAxMjgzODA3bDEuOTQ5NDA5NzUgMS43NDcyMTk4MyA0LjU2MTAyMTYtNS4zNjIyMDAyN2MuMzM4NzM2Mi0uMzk4NDM2OTUuOTY3Mzc5NS0uNDcwOTg4MDIgMS40MDM0NjQyLS4xNjAxNjA2LjQzNTc3NS4zMDk3MTI2Ni41MTQ1MTUzLjg4NDQ5MjU4LjE3NTQ2OTMgMS4yODI5Mjk1M2wtNS4yNDk3ODY5IDYuMTcxMzU0ODJjLS4xNzUxNjk0LjIwNTkyMDgtLjQzNzkxMzYuMzMzMTUwMi0uNzIyMzM0MS4zNTEwMDQ3LS4wMjI1ODU4LjAwMTEzMy0uMDQ0ODYxNy4wMDE2OTA0LS4wNjcxMzc3LjAwMTY5MDR6IiBmaWxsPSJ1cmwoI2EpIi8+PC9nPjwvc3ZnPg=="},xPf6:function(e,a,t){}}]);