(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[21],{"6l3h":function(e,a,t){e.exports={seckillContainer:"seckillContainer___2ZqMr",topupOther:"topupOther___1M3Mv"}},DdHb:function(e,a,t){e.exports={product:"product___33Vc_",main:"main___1cZco","main-inner":"main-inner___opE6m",price:"price___1uRDY","price-container":"price-container___3GUuK","price-inner":"price-inner___3t11K","price-content":"price-content___1Cx4o","price-discount":"price-discount___1rhXG","price-current":"price-current___2CZgJ","price-current-value":"price-current-value___3hbbA","price-original":"price-original___v-zvb",name:"name___2Vko7",gift:"gift___3YijO",stock:"stock___23Ryo","stock-value":"stock-value___3pmG3","stock-progress":"stock-progress___2FtB0"}},GmQi:function(e,a,t){e.exports={box:"box___2lcfy",desc:"desc___18evj"}},N1Q1:function(e,a,t){"use strict";t.r(a);var c=t("q1tI"),n=t.n(c),r=t("/MKj"),i=t("6l3h"),l=t.n(i),s=t("/LDh"),m=t("4smB"),o=t("qlp5"),u=t("bKel"),d=t.n(u),p=t("Wgwc"),_=t.n(p),E=t("6Moy"),v=t("lmeG"),N=t("qRYI"),b=t.n(N),k=e=>{var a=e.value;return n.a.createElement("span",{className:b.a["unit"]},Object(v["a"])(2,a.toString(),"0"))},f=()=>{return n.a.createElement("span",{className:b.a["separator"]},":")},y=e=>{var a=e.hours,t=e.minutes,c=e.seconds;return n.a.createElement("div",{className:b.a["countdown"]},n.a.createElement(k,{value:a}),n.a.createElement(f,null),n.a.createElement(k,{value:t}),n.a.createElement(f,null),n.a.createElement(k,{value:c}))},g=e=>{var a=e.date;return n.a.createElement(E["a"],{date:a,renderer:y})},h=t("gqNH"),x=t.n(h),C=e=>{var a=e.title,t=e.timeDesc,c=e.time,r=e.children;return n.a.createElement("div",{className:x.a["activity"]},n.a.createElement("div",{className:x.a["header"]},n.a.createElement("div",{className:x.a["title"]},a),n.a.createElement("div",{className:x.a["time"]},n.a.createElement("span",{className:x.a["label"]},t),c?n.a.createElement(g,{date:c}):null)),n.a.createElement("div",{className:x.a["body"]},r))},O=t("eJhp"),j=t("DdHb"),D=t.n(j),w=e=>{var a=e.info,t=Object(c["useMemo"])(()=>{var e=(a.quantity-a.stock)/a.quantity*100;return 60+.4*e},[a]);return n.a.createElement("div",{className:D.a["product"]},n.a.createElement("div",{className:D.a["price"]},n.a.createElement("div",{className:D.a["price-container"]},n.a.createElement("div",{className:D.a["price-inner"]},n.a.createElement("div",{className:D.a["price-content"]},n.a.createElement("div",{className:D.a["price-current"]},"\uffe5",n.a.createElement("span",{className:D.a["price-current-value"]},a.discountPrice)),n.a.createElement("div",{className:D.a["price-original"]},"\u539f\u4ef7\uffe5",n.a.createElement("span",null,a.originPrice))))),n.a.createElement("div",{className:D.a["price-discount"]},Object(O["g"])(a.discount),"\u6298")),n.a.createElement("div",{className:D.a["main"]},n.a.createElement("div",{className:D.a["main-inner"]},n.a.createElement("div",{className:D.a["name"]},a.productName,a.itemName),n.a.createElement("div",{className:D.a["gift"]},"\u6682\u65e0"),n.a.createElement("div",{className:D.a["stock"]},n.a.createElement("div",{className:D.a["stock-value"]},100===t?"\u5df2\u552e\u7f44":"".concat(parseInt(t),"%")),n.a.createElement("div",{className:D.a["stock-progress"],style:{width:"".concat(t,"%")}})))))},q=t("Nz2C"),I=t.n(q),M=e=>{var a=e.children,t=e.onClick;return n.a.createElement("div",{className:I.a["btn"],onClick:t},a)},S=t("GmQi"),T=t.n(S),V=d()(e=>{var a=e.info,t=e.mystock,r=e.isVIP,i=e.history,l=Object(c["useMemo"])(()=>{return a?Date.now()-a.currTimestamp:0},[a]),s=Object(c["useCallback"])(()=>{var e=a.productId;i.push({pathname:"/topup",query:{id:e}})},[a,i]);if(2===a.currStatus)return n.a.createElement(C,{title:a.productName,timeDesc:"\u8ddd\u6d3b\u52a8\u5f00\u59cb",time:a.beginTimestamp+l},n.a.createElement(w,{info:a}));if(4===a.currStatus)return a.nextBeginTimestamp?n.a.createElement(C,{title:a.productName,timeDesc:"\u8ddd\u6d3b\u52a8\u5f00\u59cb",time:a.nextBeginTimestamp+l},n.a.createElement(w,{info:a})):n.a.createElement("div",null,"\u6d3b\u52a8\u5df2\u4e0b\u7ebf");if(1===a.currStatus){if(0===t)return n.a.createElement(C,{title:a.productName},n.a.createElement(w,{info:a}),n.a.createElement("div",{className:T.a["box"]},n.a.createElement("div",{className:T.a["desc"]},"\u60a8\u5df2\u8fbe\u5230\u4eca\u65e5\u8d2d\u4e70\u4e0a\u9650"),n.a.createElement(M,{onClick:s},"\u67e5\u770b\u8be5\u5546\u54c1\u66f4\u591a\u6298\u6263")));if(0===a.stock){if(a.nextBeginTimestamp){var m=_()(a.nextBeginTimestamp).format("HH:mm");return n.a.createElement(C,{title:a.productName,timeDesc:"\u8ddd\u6d3b\u52a8\u5f00\u59cb",time:a.nextBeginTimestamp+l},n.a.createElement(w,{info:a}),n.a.createElement("div",{className:T.a["box"]},n.a.createElement("div",{className:T.a["desc"]},"\u79d2\u6740\u6d3b\u52a8\u5df2\u552e\u7f44\uff0c\u6bcf\u5929\u65e9\u4e0a",m,"\u5f00\u62a2"),n.a.createElement(M,{onClick:s},"\u67e5\u770b\u8be5\u5546\u54c1\u66f4\u591a\u6298\u6263")))}return n.a.createElement(C,{title:a.productName},n.a.createElement(w,{info:a}),n.a.createElement("div",{className:T.a["box"]},n.a.createElement("div",{className:T.a["desc"]},"\u79d2\u6740\u6d3b\u52a8\u5df2\u552e\u7f44"),n.a.createElement(M,{onClick:s},"\u67e5\u770b\u8be5\u5546\u54c1\u66f4\u591a\u6298\u6263")))}return r||"Y"!==a.onlyForVip?n.a.createElement(C,{title:a.productName,timeDesc:"\u8ddd\u6d3b\u52a8\u7ed3\u675f",time:a.endTimestamp+l},n.a.createElement(w,{info:a})):n.a.createElement(C,{title:a.productName},n.a.createElement(w,{info:a}),n.a.createElement("div",{className:T.a["box"]},n.a.createElement("div",{className:T.a["desc"]},"\u672c\u79d2\u6740\u6d3b\u52a8\u4ec5\u9650\u4f1a\u5458\u53c2\u4e0e"),n.a.createElement(M,{onClick:()=>{i.push("/vip")}},"\u9a6c\u4e0a\u53bb\u5f00\u901a\u4f1a\u5458")))}return null}),Y=t("tOtk");function B(e,a){var t=e.detail,c=void 0===t?{}:t,n=e.mystock,r=c.stock,i=c.onlyForVip,l=c.currStatus;return 2===l?{name:"\u5373\u5c06\u5f00\u59cb",active:!1}:r<=0?{name:"\u5df2\u552e\u7f44",active:!1}:"Y"!==i||a?1===l&&n<=0?{name:"\u8d2d\u4e70\u9650\u5236",active:!1}:{name:"\u7acb\u5373\u8d2d\u4e70",active:!0}:{name:"\u8d2d\u4e70\u9650\u5236",active:!1}}a["default"]=Object(r["c"])(e=>({seckill:e.seckill,user:e.user}))(e=>{var a=e.dispatch,t=e.location.query,r=e.seckill.info,i=e.user.isVIP,u=Object(c["useMemo"])(()=>r.detail,[r]),d=Object(c["useMemo"])(()=>r.mystock,[r]),p=B(r,i),_=Object(c["useCallback"])(()=>{a({type:"seckill/getSeckillDetail",payload:{id:t.id}})},[a,t.id]);return Object(c["useEffect"])(()=>{_()},[_]),Object(c["useEffect"])(()=>{a({type:"prePay/setState",payload:{main:u||{},type:"seckill"}})},[a,u]),n.a.createElement("div",{className:l.a.seckillContainer},u&&n.a.createElement(s["a"],{corner:u.cornerMark,description:u.productDescription,imgUrl:u.productImage}),u&&n.a.createElement(V,{info:u,mystock:d,isVIP:i}),u&&n.a.createElement("div",{className:l.a.topupOther},n.a.createElement(m["a"],{nodes:u.productDetail||""})),n.a.createElement(o["a"],null),n.a.createElement(Y["a"],{onValidate:()=>!0,isShowDetail:!0,info:p}))})},Nz2C:function(e,a,t){e.exports={btn:"btn___1KhR-"}},gqNH:function(e,a,t){e.exports={activity:"activity___1-cyI",header:"header___n3fej",body:"body___2dh8u",title:"title___2hkC-",time:"time___3saNN",label:"label____zWJg"}},qRYI:function(e,a,t){e.exports={countdown:"countdown___2TSDL",unit:"unit___2bYAb",separator:"separator___2CKYQ"}}}]);