(function(e){function t(t){for(var r,c,i=t[0],u=t[1],s=t[2],l=0,d=[];l<i.length;l++)c=i[l],Object.prototype.hasOwnProperty.call(a,c)&&a[c]&&d.push(a[c][0]),a[c]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);p&&p(t);while(d.length)d.shift()();return o.push.apply(o,s||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,c=1;c<n.length;c++){var i=n[c];0!==a[i]&&(r=!1)}r&&(o.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},c={app:0},a={app:0},o=[];function i(e){return u.p+"js/"+({"group-admin":"group-admin","group-cart":"group-cart","group-empty":"group-empty","group-error":"group-error","group-modal":"group-modal"}[e]||e)+"."+{"group-admin":"f65836d2","group-cart":"2aeb39bb","group-empty":"b3fc3508","group-error":"46554f58","group-modal":"18574a36"}[e]+".js"}function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n={"group-admin":1,"group-cart":1,"group-empty":1,"group-error":1,"group-modal":1};c[e]?t.push(c[e]):0!==c[e]&&n[e]&&t.push(c[e]=new Promise((function(t,n){for(var r="css/"+({"group-admin":"group-admin","group-cart":"group-cart","group-empty":"group-empty","group-error":"group-error","group-modal":"group-modal"}[e]||e)+"."+{"group-admin":"54144133","group-cart":"12b9237b","group-empty":"72e0894b","group-error":"766a3f0c","group-modal":"2162f9aa"}[e]+".css",a=u.p+r,o=document.getElementsByTagName("link"),i=0;i<o.length;i++){var s=o[i],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===r||l===a))return t()}var d=document.getElementsByTagName("style");for(i=0;i<d.length;i++){s=d[i],l=s.getAttribute("data-href");if(l===r||l===a)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var r=t&&t.target&&t.target.src||a,o=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=r,delete c[e],p.parentNode.removeChild(p),n(o)},p.href=a;var f=document.getElementsByTagName("head")[0];f.appendChild(p)})).then((function(){c[e]=0})));var r=a[e];if(0!==r)if(r)t.push(r[2]);else{var o=new Promise((function(t,n){r=a[e]=[t,n]}));t.push(r[2]=o);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,u.nc&&l.setAttribute("nonce",u.nc),l.src=i(e);var d=new Error;s=function(t){l.onerror=l.onload=null,clearTimeout(p);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),c=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+r+": "+c+")",d.name="ChunkLoadError",d.type=r,d.request=c,n[1](d)}a[e]=void 0}};var p=setTimeout((function(){s({type:"timeout",target:l})}),12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(t)},u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/KrunkerProject/",u.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var d=0;d<s.length;d++)t(s[d]);var p=l;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},"08ba":function(e,t,n){"use strict";n.d(t,"b",(function(){return k})),n.d(t,"a",(function(){return U})),n.d(t,"c",(function(){return f}));n("99af"),n("4de4"),n("7db0"),n("c740"),n("4fad");var r=n("3835"),c=(n("96cf"),n("1da1")),a=n("0d59"),o=n("8f12"),i=n("bc3a"),u=n.n(i),s=n("7a23"),l=Object(s["w"])({toastMsg:""}),d=function(){l.toastMsg=""},p=function(e){d(),l.toastMsg=e},f={state:l,showToast:p,clearToast:d},m=o["a"].API_URL,b=o["a"].SHOPPING_ITEMS_ENDPOINT,v=function(e){return a["a"].isValid(e)&&!a["a"].isEmpty(e)},j=Object(s["w"])({filters:{discount:!1,stock:!1,type:"All",price:"AllItems"},items:[],nonFilteredItems:[]}),O=function(){j.items=j.nonFilteredItems.filter((function(e){var t=!j.filters.discount||e.discount,n=!j.filters.stock||e.currentAmount,r="All"===j.filters.type||e.kind===a["b"][j.filters.type],c=e.price-e.price*e.discount/100,o="AllItems"===j.filters.price||"UpTo150"===j.filters.price&&c<=150||"UpTo500"===j.filters.price&&c<=500||"UpTo1000"===j.filters.price&&c<=1e3||"UpTo1500"===j.filters.price&&c<=1500;return t&&n&&r&&o}))},h=function(){j.filters={discount:!1,price:"AllItems",stock:!1,type:"All"},O()},g=function(){var e=Object(c["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.a.get("".concat(m,"/").concat(b));case 3:t=e.sent,j.nonFilteredItems=t.data,O(),e.next=11;break;case 8:e.prev=8,e.t0=e["catch"](0),f.showToast("Can't load files from server!");case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),y=function(){var e=Object(c["a"])(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(j.items.length){e.next=3;break}return e.next=3,g();case 3:if(n=j.items.find((function(e){return e.id===t})),n){e.next=6;break}throw new Error("Key not found!");case 6:return e.abrupt("return",n);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),_=function(e,t,n){if(v(e)){var r=j.items.find((function(t){return t.id===e}));r&&"use"==t?r.currentAmount-=n:r&&"return"==t&&(r.currentAmount+=n)}},w=function(){var e=Object(c["a"])(regeneratorRuntime.mark((function e(t){var n,c,a,o,i,s,l,d,p;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:for(n=new FormData,c=0,a=Object.entries(t);c<a.length;c++)o=Object(r["a"])(a[c],2),i=o[0],s=o[1],n.append(i,s);return l={data:n},v(t.id)?(l.url="".concat(m,"/").concat(b,"/").concat(t.id),l.method="PUT"):(l.url="".concat(m,"/").concat(b),l.method="POST"),e.next=6,u.a.request(l);case 6:d=e.sent,p=j.items.findIndex((function(e){return e.id===d.data.id})),p<0?j.items.push(d.data):j.items[p]=d.data,f.showToast("Item saved successfully.");case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),A=function(){var e=Object(c["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!v(t)){e.next=10;break}return e.prev=1,e.next=4,u.a.delete("".concat(m,"/").concat(b,"/").concat(t));case 4:j.items=j.items.filter((function(e){return e.id!==t})),e.next=10;break;case 7:e.prev=7,e.t0=e["catch"](1),f.showToast("Couldn't delete the item.");case 10:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(t){return e.apply(this,arguments)}}(),k={state:j,resetFilters:h,filterItems:O,getAll:g,getById:y,useOrReturnItem:_,editOrCreateItem:w,deleteItem:A},I=o["a"].API_URL,C=o["a"].CART_ENDPOINT,x=o["a"].PURCHASE_ENDPOINT,S=Object(s["w"])({cart:null,reports:[]}),V=function(){var e=Object(c["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.a.get("".concat(I,"/").concat(x));case 3:t=e.sent,S.reports=t.data,e.next=10;break;case 7:e.prev=7,e.t0=e["catch"](0),f.showToast("Couldn't get purchase reports!");case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),T=function(e){if(!e)return 0;var t=e.priceAtPurchase-e.priceAtPurchase*e.discountRate/100;return t*e.amount},P=function(){var e=Object(c["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.a.get("".concat(I,"/").concat(C));case 3:t=e.sent,S.cart=t.data,e.next=10;break;case 7:e.prev=7,e.t0=e["catch"](0),f.showToast("Couldn't create shopping cart!");case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),N=function(){var e=Object(c["a"])(regeneratorRuntime.mark((function e(t,n){var r,c,a,o,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(e.prev=0,S.cart){e.next=4;break}return e.next=4,P();case 4:return e.next=6,u.a.put("".concat(I,"/").concat(C,"/").concat(null===(r=S.cart)||void 0===r?void 0:r.id),{itemId:t.id,amount:n});case 6:c=e.sent,a=c.data,k.useOrReturnItem(t.id,"use",n),S.cart&&(o=S.cart.purchases.findIndex((function(e){return e.id===a.id})),o<0?(S.cart.purchases.push(a),S.cart.totalPrice+=T(a)):(i=T(S.cart.purchases[o]),S.cart.purchases[o]=a,S.cart.totalPrice+=T(a)-i)),f.showToast("Added item to cart!"),e.next=16;break;case 13:e.prev=13,e.t0=e["catch"](0),f.showToast("Failed adding item to cart!");case 16:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(t,n){return e.apply(this,arguments)}}(),R=function(){var e=Object(c["a"])(regeneratorRuntime.mark((function e(t){var n,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(e.prev=0,S.cart){e.next=4;break}return e.next=4,P();case 4:return e.next=6,u.a.delete("".concat(I,"/").concat(C,"/").concat(null===(n=S.cart)||void 0===n?void 0:n.id,"/").concat(t.id));case 6:r=e.sent,k.useOrReturnItem(t.item.id,"return",r.data.amount),S.cart&&(S.cart.purchases=S.cart.purchases.filter((function(e){return e.id!==t.id})),S.cart.totalPrice-=T(t)),f.showToast("Removed from cart!"),e.next=15;break;case 12:e.prev=12,e.t0=e["catch"](0),f.showToast("Failed removing from cart!");case 15:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(t){return e.apply(this,arguments)}}(),E=function(){var e=Object(c["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(S.cart){e.next=2;break}return e.abrupt("return");case 2:return e.prev=2,e.next=5,u.a.post("".concat(I,"/").concat(x,"/").concat(S.cart.id));case 5:S.cart=null,P(),f.showToast("Purchase completed!"),e.next=13;break;case 10:e.prev=10,e.t0=e["catch"](2),f.showToast("Purchase failed!");case 13:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(){return e.apply(this,arguments)}}(),U={state:S,getAllPurchases:V,getNewCart:P,addItemToCart:N,removePurchaseFromCart:R,purchaseCart:E}},"0d59":function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return o})),n.d(t,"c",(function(){return i})),n.d(t,"d",(function(){return u}));n("7943"),n("a15b"),n("d3b7"),n("25f0");var r=n("d4ec"),c=n("bee2"),a=function(){function e(){Object(r["a"])(this,e)}return Object(c["a"])(e,null,[{key:"generateGuidSegment",value:function(e){for(var t="",n=0;n<e;n++)t+=(65536*(1+Math.random())|0).toString(16).substring(1);return t}}]),e}();a.empty="00000000-0000-0000-0000-000000000000",a.isEmpty=function(e){return e===a.empty},a.isValid=function(e){return a.validator.test(e)},a.newGuid=function(){return[a.generateGuidSegment(2),a.generateGuidSegment(1),a.generateGuidSegment(1),a.generateGuidSegment(1),a.generateGuidSegment(3)].join("-")},a.validator=/^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$/i;var o,i,u;(function(e){e[e["BackItem"]=0]="BackItem",e[e["HeadItem"]=1]="HeadItem",e[e["PrimaryWeapon"]=2]="PrimaryWeapon",e[e["SecondaryWeapon"]=3]="SecondaryWeapon"})(o||(o={})),function(e){e[e["Commando"]=0]="Commando",e[e["Leatherman"]=1]="Leatherman",e[e["Machete"]=2]="Machete",e[e["KitchenKnife"]=3]="KitchenKnife",e[e["Axe"]=4]="Axe"}(i||(i={})),function(e){e[e["AllItems"]=0]="AllItems",e[e["UpTo150"]=1]="UpTo150",e[e["UpTo500"]=2]="UpTo500",e[e["UpTo1000"]=3]="UpTo1000",e[e["UpTo1500"]=4]="UpTo1500"}(u||(u={}));n("a527"),n("3f23"),n("f317"),n("7196")},2579:function(e,t,n){},"286a":function(e,t,n){},"2b0d":function(e,t,n){},"3b50":function(e,t,n){"use strict";n("e00b")},"3dfb":function(e,t,n){"use strict";n("8676")},"3f23":function(e,t){},4381:function(e,t,n){},4616:function(e,t,n){},4741:function(e,t,n){},5264:function(e,t,n){"use strict";n("2579")},"6baa":function(e,t,n){},"6ecd":function(e,t,n){"use strict";n("f2b5")},"6ed7":function(e,t,n){"use strict";n("92e0")},7196:function(e,t){},"775f":function(e,t,n){"use strict";n("4616")},7943:function(e,t){},8676:function(e,t,n){},"89a9":function(e,t,n){"use strict";n("2b0d")},"8f12":function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var r="http://localhost:63641/",c="".concat(r,"api"),a="cart",o="purchase",i="shoppingItems",u={BASE_URL:r,API_URL:c,CART_ENDPOINT:a,PURCHASE_ENDPOINT:o,SHOPPING_ITEMS_ENDPOINT:i}},"92e0":function(e,t,n){},9549:function(e,t,n){},a527:function(e,t){},aa46:function(e,t,n){"use strict";n("9549")},b270:function(e,t,n){"use strict";n("6baa")},c159:function(e,t,n){"use strict";n("f83a")},cb6a:function(e,t,n){"use strict";n("4381")},cd49:function(e,t,n){"use strict";n.r(t);n("d3b7"),n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23"),c={class:"page"};function a(e,t,n,a,o,i){var u=Object(r["A"])("navigation"),s=Object(r["A"])("router-view"),l=Object(r["A"])("toast");return Object(r["s"])(),Object(r["e"])(r["a"],null,[Object(r["h"])(u),Object(r["h"])("div",c,[Object(r["h"])(s)]),e.msgState.toastMsg?(Object(r["s"])(),Object(r["e"])(l,{key:0,msg:e.msgState.toastMsg,onClose:e.clearToast},null,8,["msg","onClose"])):Object(r["f"])("",!0)],64)}var o=n("08ba"),i=Object(r["H"])("data-v-422f51c2");Object(r["v"])("data-v-422f51c2");var u={class:"main-header"},s=Object(r["h"])("h1",{class:"main-header__brand"},"Shop",-1),l={class:"main-header__items"},d=Object(r["g"])(" Home "),p=Object(r["g"])(" cart "),f=Object(r["g"])(" admin ");Object(r["t"])();var m=i((function(e,t,n,c,a,o){var m=Object(r["A"])("router-link");return Object(r["s"])(),Object(r["e"])("div",u,[s,Object(r["h"])("div",l,[Object(r["h"])(m,{class:"main-header__items-item",to:"/"},{default:i((function(){return[d]})),_:1}),Object(r["h"])(m,{class:"main-header__items-item",to:"/cart"},{default:i((function(){return[p]})),_:1}),Object(r["h"])(m,{class:"main-header__items-item",to:"/admin"},{default:i((function(){return[f]})),_:1})])])})),b=Object(r["j"])({name:"NavBar"}),v=b;n("ec7c");v.render=m,v.__scopeId="data-v-422f51c2";var j=v,O=Object(r["H"])("data-v-b29a1a14");Object(r["v"])("data-v-b29a1a14");var h={class:"toast"},g={class:"toast__info"},y={class:"toast__action"};Object(r["t"])();var _=O((function(e,t,n,c,a,o){return Object(r["s"])(),Object(r["e"])("div",h,[Object(r["h"])("div",g,[Object(r["h"])("p",null,Object(r["C"])(e.msg),1)]),Object(r["h"])("div",y,[Object(r["h"])("button",{onClick:t[1]||(t[1]=function(){return e.close&&e.close.apply(e,arguments)})},"OK")])])})),w=Object(r["j"])({name:"Toast",props:{msg:{type:String,required:!0}},emits:["close"],setup:function(e,t){var n=t.emit,c=function(){return n("close")},a=setTimeout(c,5e3);return Object(r["r"])((function(){clearTimeout(a)})),{close:c}}}),A=w;n("3b50");A.render=_,A.__scopeId="data-v-b29a1a14";var k=A,I=Object(r["j"])({name:"App",components:{Navigation:j,Toast:k},setup:function(){var e=function(){return o["c"].clearToast()};return{msgState:o["c"].state,clearToast:e}}}),C=I;n("ce68");C.render=a;var x=C,S=n("6c02"),V=(n("b0c0"),Object(r["H"])("data-v-66f6c0ee"));Object(r["v"])("data-v-66f6c0ee");var T={key:0,class:"shop"},P=Object(r["g"])(" Cancel "),N=Object(r["g"])(" Purchase ");Object(r["t"])();var R=V((function(e,t,n,c,a,o){var i=Object(r["A"])("item-filter"),u=Object(r["A"])("item-view"),s=Object(r["A"])("empty-view"),l=Object(r["A"])("side-nav-view"),d=Object(r["A"])("purchase-validation"),p=Object(r["A"])("app-button"),f=Object(r["A"])("modal");return Object(r["s"])(),Object(r["e"])(r["a"],null,[Object(r["h"])(l,null,{menu:V((function(){return[Object(r["h"])(i)]})),content:V((function(){return[e.itemsState.items.length?(Object(r["s"])(),Object(r["e"])("div",T,[(Object(r["s"])(!0),Object(r["e"])(r["a"],null,Object(r["y"])(e.itemsState.items,(function(t){return Object(r["s"])(),Object(r["e"])(u,{key:t.id,id:t.id,type:"product",name:t.name,"img-name":t.uriImg,amount:t.currentAmount,price:t.price,discount:t.discount,onActionExecuted:function(n){return e.setItemForCart(t)}},null,8,["id","name","img-name","amount","price","discount","onActionExecuted"])})),128))])):(Object(r["s"])(),Object(r["e"])(s,{key:1}))]})),_:1}),(Object(r["s"])(),Object(r["e"])(r["b"],{to:"body"},[e.itemForCart?(Object(r["s"])(),Object(r["e"])(f,{key:0,title:"Validate purchase",close:function(){return e.setItemForCart()}},{default:V((function(){return[Object(r["h"])(d,{item:e.itemForCart,modelValue:e.amount,"onUpdate:modelValue":t[1]||(t[1]=function(t){return e.amount=t}),modelModifiers:{number:!0},onValidityChange:t[2]||(t[2]=function(t){return e.isValid=t})},null,8,["item","modelValue"])]})),actions:V((function(){return[Object(r["h"])(p,{light:"",onClick:t[3]||(t[3]=function(){return e.setItemForCart()})},{default:V((function(){return[P]})),_:1}),Object(r["h"])(p,{primary:"",disabled:!e.isValid,onClick:e.attemptPurchase},{default:V((function(){return[N]})),_:1},8,["disabled","onClick"])]})),_:1},8,["close"])):Object(r["f"])("",!0)]))],64)})),E=(n("96cf"),n("1da1")),U=(n("99af"),n("2909")),F=Object(r["H"])("data-v-37afbb80");Object(r["v"])("data-v-37afbb80");var H={class:"filter__sections"},M={class:"filter__sections-filters"},q={class:"filter__sections-filters__in-stock"},B={class:"filter__sections-filters__discount"},L={class:"filter__sections-filters__type"},D={class:"filter__sections-filters__price-range"},$={class:"filter__sections-actions"},G=Object(r["g"])("Apply"),K=Object(r["g"])("Reset");Object(r["t"])();var z=F((function(e,t,n,c,a,o){var i=Object(r["A"])("app-filter"),u=Object(r["A"])("app-button");return Object(r["s"])(),Object(r["e"])("div",H,[Object(r["h"])("div",M,[Object(r["h"])("div",q,[Object(r["h"])(i,{type:"switch",title:"Hide items out of stock",modelValue:e.state.filters.stock,"onUpdate:modelValue":t[1]||(t[1]=function(t){return e.state.filters.stock=t})},null,8,["modelValue"])]),Object(r["h"])("div",B,[Object(r["h"])(i,{type:"switch",title:"Show only discount items",modelValue:e.state.filters.discount,"onUpdate:modelValue":t[2]||(t[2]=function(t){return e.state.filters.discount=t})},null,8,["modelValue"])]),Object(r["h"])("div",L,[Object(r["h"])(i,{type:"selection",title:"Item types to show",options:["All"].concat(Object(U["a"])(e.kinds)),modelValue:e.state.filters.type,"onUpdate:modelValue":t[3]||(t[3]=function(t){return e.state.filters.type=t})},null,8,["options","modelValue"])]),Object(r["h"])("div",D,[Object(r["h"])(i,{type:"selection",title:"Price range",options:e.prices,modelValue:e.state.filters.price,"onUpdate:modelValue":t[4]||(t[4]=function(t){return e.state.filters.price=t})},null,8,["options","modelValue"])])]),Object(r["h"])("div",$,[Object(r["h"])(u,{primary:"",onClick:e.apply},{default:F((function(){return[G]})),_:1},8,["onClick"]),Object(r["h"])(u,{light:"",onClick:e.reset},{default:F((function(){return[K]})),_:1},8,["onClick"])])])})),Z=n("0d59"),W=Object(r["H"])("data-v-5d41fee0");Object(r["v"])("data-v-5d41fee0");var J={class:"filter"};Object(r["t"])();var Y=W((function(e,t,n,c,a,o){var i=Object(r["A"])("toggle-switch"),u=Object(r["A"])("app-select");return Object(r["s"])(),Object(r["e"])("div",J,[Object(r["g"])(Object(r["C"])(e.title)+" ",1),"switch"===e.type?(Object(r["s"])(),Object(r["e"])(i,{key:0,mode:e.current,"onUpdate:mode":t[1]||(t[1]=function(t){return e.current=t})},null,8,["mode"])):(Object(r["s"])(),Object(r["e"])(u,{key:1,options:e.options,"onUpdate:modelValue":t[2]||(t[2]=function(t){return e.current=t}),modelValue:e.current},null,8,["options","modelValue"]))])})),Q=Object(r["j"])({name:"Filter",emits:["update:modelValue"],props:{title:{type:String,required:!0},options:{type:Array,default:function(){return[]}},type:{type:String,default:function(){return"selection"}},modelValue:{required:!0}},setup:function(e,t){var n=t.emit,c=Object(r["c"])({get:function(){return e.modelValue},set:function(e){n("update:modelValue",e)}});return{current:c}}}),X=Q;n("cb6a");X.render=Y,X.__scopeId="data-v-5d41fee0";var ee=X,te=n("d257"),ne=Object(te["a"])(Z["b"]),re=Object(te["a"])(Z["d"]),ce=Object(r["j"])({name:"ItemFilter",components:{AppFilter:ee},setup:function(){var e=function(){return o["b"].filterItems()},t=function(){return o["b"].resetFilters()};return{state:o["b"].state,kinds:ne,prices:re,apply:e,reset:t}}}),ae=ce;n("c159");ae.render=z,ae.__scopeId="data-v-37afbb80";var oe=ae,ie=Object(r["i"])({loader:function(){return n.e("group-modal").then(n.bind(null,"d759"))}}),ue=Object(r["j"])({name:"HomeView",components:{ItemFilter:oe,PurchaseValidation:ie},setup:function(){o["b"].getAll();var e=Object(r["x"])(1),t=Object(r["x"])(!1),n=Object(r["x"])(),c=function(t){n.value=t,e.value=1},a=function(){var r=Object(E["a"])(regeneratorRuntime.mark((function r(){var a,i;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(n.value&&t.value){r.next=2;break}return r.abrupt("return");case 2:return a=n.value,i=e.value,c(),r.next=7,o["a"].addItemToCart(a,i);case 7:case"end":return r.stop()}}),r)})));return function(){return r.apply(this,arguments)}}();return{amount:e,isValid:t,itemForCart:n,setItemForCart:c,attemptPurchase:a,itemsState:o["b"].state}}});n("3dfb");ue.render=R,ue.__scopeId="data-v-66f6c0ee";var se=ue,le=function(){return n.e("group-admin").then(n.bind(null,"3530"))},de=function(){return n.e("group-admin").then(n.bind(null,"5e7b"))},pe=function(){return n.e("group-admin").then(n.bind(null,"1f31"))},fe=function(){return n.e("group-admin").then(n.bind(null,"1ed9"))},me=function(){return n.e("group-error").then(n.bind(null,"dda8"))},be=function(){return n.e("group-cart").then(n.bind(null,"b789"))},ve=[{path:"/",name:"Home",component:se},{path:"/admin",name:"Admin",component:le,children:[{path:"new",name:"AdminNewItem",component:de},{path:"reports",name:"AdminReports",component:fe},{path:":id?",name:"AdminItemView",component:pe}]},{path:"/cart",name:"Cart",component:be},{path:"/:pathMatch(.*)*",name:"NotFound",component:me}],je=S["b"],Oe=Object(S["a"])({history:je("/KrunkerProject/"),routes:ve}),he=Oe,ge=Object(r["H"])("data-v-2a124fb1"),ye=ge((function(e,t,n,c,a,o){return Object(r["s"])(),Object(r["e"])("button",{class:{light:e.light,primary:e.primary}},[Object(r["z"])(e.$slots,"default")],2)})),_e=Object(r["j"])({name:"AppButton",props:{light:{type:Boolean},primary:{type:Boolean}}}),we=_e;n("6ecd");we.render=ye,we.__scopeId="data-v-2a124fb1";var Ae=we,ke=Object(r["H"])("data-v-5b285757");Object(r["v"])("data-v-5b285757");var Ie={class:"side-nav__view"},Ce={class:"side-nav__view-menu"},xe={class:"side-nav__view-content"};Object(r["t"])();var Se=ke((function(e,t,n,c,a,o){return Object(r["s"])(),Object(r["e"])("div",Ie,[Object(r["h"])("div",Ce,[Object(r["z"])(e.$slots,"menu")]),Object(r["h"])("div",xe,[Object(r["z"])(e.$slots,"content")])])})),Ve=Object(r["j"])({name:"SideNavView"}),Te=Ve;n("aa46");Te.render=Se,Te.__scopeId="data-v-5b285757";var Pe=Te,Ne=n("5530"),Re=Object(r["H"])("data-v-714008b8");Object(r["v"])("data-v-714008b8");var Ee={class:"item"},Ue={class:"item__name"},Fe={class:"item__image"},He={class:"item__stock"},Me={class:"item_actions"},qe=Object(r["g"])(" Delete ");Object(r["t"])();var Be=Re((function(e,t,n,c,a,o){var i=Object(r["A"])("badge"),u=Object(r["A"])("item-price"),s=Object(r["A"])("app-button");return Object(r["s"])(),Object(r["e"])("div",Ee,[e.badgeInfo?(Object(r["s"])(),Object(r["e"])(i,Object(r["n"])({key:0},Object(Ne["a"])({},e.badgeInfo)),null,16)):Object(r["f"])("",!0),Object(r["h"])("h2",Ue,Object(r["C"])(e.name),1),Object(r["h"])("div",Fe,[Object(r["h"])("img",{alt:e.name,src:e.BASE_URL+"images/"+e.imgName},null,8,["alt","src"])]),Object(r["h"])("div",He,[Object(r["h"])("p",null,"Items "+Object(r["C"])(e.stockText)+": "+Object(r["C"])(e.amount),1)]),Object(r["h"])(u,{price:e.price,discount:e.discount,amount:e.amount,type:e.type},null,16),Object(r["h"])("div",Me,[Object(r["h"])(s,{disabled:0===e.amount&&"admin"!==e.type,onClick:e.executeAction},{default:Re((function(){return[Object(r["g"])(Object(r["C"])("admin"===e.type?"Edit":("purchase"===e.type?"Remove from":"Add to")+" cart"),1)]})),_:1},8,["disabled","onClick"]),"admin"===e.type?(Object(r["s"])(),Object(r["e"])(s,{key:0,onClick:e.deleteItem},{default:Re((function(){return[qe]})),_:1},8,["onClick"])):Object(r["f"])("",!0)])])})),Le=(n("a9e3"),n("8f12")),De=Object(r["H"])("data-v-26a13019"),$e=De((function(e,t,n,c,a,o){return Object(r["s"])(),Object(r["e"])("div",{class:["badge","badge__".concat(e.type)]},Object(r["C"])(e.value),3)})),Ge=Object(r["j"])({name:"Badge",props:{value:{type:String,required:!0},type:{type:String,default:function(){return"info"}}}}),Ke=Ge;n("6ed7");Ke.render=$e,Ke.__scopeId="data-v-26a13019";var ze=Ke,Ze=Object(r["H"])("data-v-58787ba2");Object(r["v"])("data-v-58787ba2");var We={class:"price"},Je={key:0,class:"price__original"},Ye={class:"price__calculated"};Object(r["t"])();var Qe=Ze((function(e,t,n,c,a,o){return Object(r["s"])(),Object(r["e"])("div",We,[e.discount?(Object(r["s"])(),Object(r["e"])("span",Je,Object(r["C"])(e.prettyNumber(e.originalPrice))+"$",1)):Object(r["f"])("",!0),Object(r["h"])("span",Ye,Object(r["C"])(e.prettyNumber(e.calculatedPrice))+"$",1)])})),Xe=Object(r["j"])({name:"ItemPrice",props:{price:{type:Number,required:!0},discount:{type:Number,required:!0},amount:{type:Number,default:function(){return 1}},type:{type:String,default:function(){return"product"}}},setup:function(e){var t=Object(r["c"])((function(){return"purchase"===e.type?e.amount:1})),n=Object(r["c"])((function(){return"purchase"!==e.type?e.price*t.value:e.price*t.value+e.price*t.value*e.discount/100})),c=Object(r["c"])((function(){return"purchase"===e.type?e.price*t.value:e.price*t.value-e.price*t.value*e.discount/100}));return{priceAmount:t,originalPrice:n,calculatedPrice:c,prettyNumber:te["c"]}}}),et=Xe;n("89a9");et.render=Qe,et.__scopeId="data-v-58787ba2";var tt=et,nt=Object(r["j"])({name:"ItemView",components:{Badge:ze,ItemPrice:tt},props:{id:{type:String,required:!0},type:{type:String,default:function(){return"product"}},name:{required:!0,type:String},imgName:{required:!0,type:String},amount:{required:!0,type:Number},price:{required:!0,type:Number},discount:{type:Number,default:function(){return 0}}},emits:["actionExecuted","deleteItem"],setup:function(e,t){var n=t.emit,c=Object(r["c"])((function(){return"purchase"===e.type?"in cart":"in stock"})),a=Object(r["c"])((function(){return 0===e.amount?{type:"warn",value:"Sold out"}:e.discount>0?{type:"good",value:"".concat(e.discount,"% off")}:void 0})),o=function(){return n("actionExecuted")},i=function(){return n("deleteItem")},u=Le["a"].BASE_URL;return{stockText:c,badgeInfo:a,executeAction:o,deleteItem:i,BASE_URL:u}}});n("5264");nt.render=Be,nt.__scopeId="data-v-714008b8";var rt=nt,ct=Object(r["h"])("div",{class:"toggle__bubble"},null,-1);function at(e,t,n,c,a,o){return Object(r["s"])(),Object(r["e"])("div",{class:["toggle",{checked:e.mode}],onClick:t[1]||(t[1]=function(){return e.toggle&&e.toggle.apply(e,arguments)})},[ct],2)}var ot=Object(r["j"])({name:"Switch",emits:["update:mode"],props:{mode:{type:Boolean,default:!1}},setup:function(e,t){var n=t.emit,r=function(){var t=!e.mode;n("update:mode",t)};return{toggle:r}}}),it=ot;n("775f");it.render=at;var ut=it,st=Object(r["H"])("data-v-05048f2e");Object(r["v"])("data-v-05048f2e");var lt={class:"selected__value"},dt={key:0,class:"items"};Object(r["t"])();var pt=st((function(e,t,n,c,a,o){return Object(r["s"])(),Object(r["e"])("div",{class:"custom-select",tabindex:e.tabindex,onBlur:t[2]||(t[2]=function(t){return e.open=!1})},[Object(r["h"])("div",{class:["selected",{open:e.open}],title:e.englishify(e.modelValue),onClick:t[1]||(t[1]=function(){return e.toggle&&e.toggle.apply(e,arguments)})},[Object(r["h"])("p",lt,Object(r["C"])(e.englishify(e.modelValue)),1)],10,["title"]),e.open?(Object(r["s"])(),Object(r["e"])("div",dt,[(Object(r["s"])(!0),Object(r["e"])(r["a"],null,Object(r["y"])(e.options,(function(t,n){return Object(r["s"])(),Object(r["e"])("div",{key:n,title:e.englishify(t),onClick:function(n){return e.select(t)}},Object(r["C"])(e.englishify(t)),9,["title","onClick"])})),128))])):Object(r["f"])("",!0)],40,["tabindex"])})),ft=(n("ac1f"),n("5319"),n("498a"),Object(r["j"])({name:"AppSelect",emits:["update:modelValue"],props:{options:{type:Array,required:!0},modelValue:{type:String,required:!0},tabindex:{type:Number,required:!1,default:function(){return 0}}},setup:function(e,t){var n=t.emit,c=Object(r["x"])(!1),a=function(e){c.value=!1,n("update:modelValue",e)},o=function(e){return e.replace(/[0-9]{2,}/g,(function(e){return" ".concat(e," ")})).replace(/[^A-Z0-9][A-Z]/g,(function(e){return"".concat(e[0]," ").concat(e[1])})).replace(/[A-Z][A-Z][^A-Z0-9]/g,(function(e){return"".concat(e[0]," ").concat(e[1]).concat(e[2])})).replace(/[ ]{2,}/g,(function(){return" "})).replace(/\s./g,(function(e){return e.toUpperCase()})).replace(/^./,(function(e){return e.toUpperCase()})).trim()},i=function(){e.options.length&&(c.value=!c.value)};return{select:a,open:c,toggle:i,englishify:o}}})),mt=ft;n("fbfa");mt.render=pt,mt.__scopeId="data-v-05048f2e";var bt=mt,vt=Object(r["H"])("data-v-945a8712");Object(r["v"])("data-v-945a8712");var jt={class:"form-field"};Object(r["t"])();var Ot=vt((function(e,t,n,c,a,o){var i=Object(r["A"])("app-select"),u=Object(r["A"])("toggle-switch");return Object(r["s"])(),Object(r["e"])("div",jt,[Object(r["h"])("label",{class:["form-field__label",{invalid:!e.isValid}]},[Object(r["g"])(Object(r["C"])(e.label)+" ",1),Array.isArray(e.type)?(Object(r["s"])(),Object(r["e"])(i,{key:0,options:e.type,"onUpdate:modelValue":t[1]||(t[1]=function(t){return e.$emit("update:modelValue",t)}),modelValue:e.modelValue},null,8,["options","modelValue"])):"checkbox"===e.type?(Object(r["s"])(),Object(r["e"])(u,{key:1,mode:e.modelValue,"onUpdate:mode":t[2]||(t[2]=function(t){return e.$emit("update:modelValue",t)})},null,8,["mode"])):"file"===e.type?(Object(r["s"])(),Object(r["e"])("input",{key:2,type:"file",onInput:t[3]||(t[3]=function(t){var n;return e.fileChange(null===(n=t.target.files)||void 0===n?void 0:n[0])})},null,32)):(Object(r["s"])(),Object(r["e"])("input",{key:3,type:e.type,value:e.modelValue,onInput:t[4]||(t[4]=function(t){return e.$emit("update:modelValue",t.target.value)})},null,40,["type","value"]))],2)])})),ht=Object(r["j"])({name:"FormField",emits:["update:modelValue","validityChange"],props:{label:{type:String,required:!0},type:{required:!0},modelValue:{required:!0},validator:{type:Function,default:function(){return!0}}},setup:function(e,t){var n=t.emit,c=Object(r["x"])(),a=Object(r["c"])((function(){return!Array.isArray(e.type)&&"checkbox"!==e.type})),o=function(e){c.value=e,n("update:modelValue",e)},i=Object(r["c"])((function(){var t=!a.value||"file"===e.type&&e.validator(c.value)||"file"!==e.type&&e.validator(e.modelValue);return n("validityChange",t),t}));return{fileChange:o,isValid:i}}}),gt=ht;n("b270");gt.render=Ot,gt.__scopeId="data-v-945a8712";var yt=gt,_t=Object(r["i"])({loader:function(){return n.e("group-empty").then(n.bind(null,"424e"))}}),wt=Object(r["i"])({loader:function(){return n.e("group-modal").then(n.bind(null,"cb15"))}});Object(r["d"])(x).use(he).component("AppButton",Ae).component("AppSelect",bt).component("ToggleSwitch",ut).component("FormField",yt).component("SideNavView",Pe).component("EmptyView",_t).component("ItemView",rt).component("Modal",wt).mount("#app")},ce68:function(e,t,n){"use strict";n("286a")},d257:function(e,t,n){"use strict";n.d(t,"c",(function(){return c})),n.d(t,"b",(function(){return s})),n.d(t,"a",(function(){return d})),n.d(t,"d",(function(){return r}));var r={};n.r(r),n.d(r,"isNotEmptyString",(function(){return p})),n.d(r,"isAlphaNumericWithSpace",(function(){return f})),n.d(r,"isFirstCharLetter",(function(){return m})),n.d(r,"isInLengthLimits",(function(){return b})),n.d(r,"isValidName",(function(){return v})),n.d(r,"is4DigitYear",(function(){return j})),n.d(r,"isGreaterThanZero",(function(){return O})),n.d(r,"isNonNegativeNumber",(function(){return h})),n.d(r,"isFileLessThanOrEquals5MB",(function(){return g})),n.d(r,"isFileAnImage",(function(){return y})),n.d(r,"isValidFile",(function(){return _}));n("a9e3");var c=function(e){var t=Number(e);return(null===t||void 0===t?void 0:t.toLocaleString(void 0,{maximumFractionDigits:2}))||0},a=(n("99af"),n("d81d"),n("3835")),o=function(e){return(e=Math.abs(e))>9?"".concat(e):"0".concat(e)},i=function(e){return e>=12?"PM":"AM"},u=function(e){var t=new Date(e),n=[t.getHours(),t.getMinutes(),t.getSeconds()],r=i(n[0]);n[0]=n[0]%12,n[0]=n[0]?n[0]:12;var c=n.map(o),u=Object(a["a"])(c,3),s=u[0],l=u[1],d=u[2];return"".concat(s,":").concat(l,":").concat(d," ").concat(r)},s=function(e){var t=u(e),n=new Date(e);return"".concat(n.toLocaleDateString("iw-IL")," ").concat(t)},l=(n("4de4"),n("b64b"),function(e){return!isNaN(Number(e))}),d=function(e){return Object.keys(e).filter(l).map((function(t){return e[t]}))},p=(n("caad"),n("2532"),n("498a"),function(e){return Boolean(e.trim().length)}),f=function(e){return/^[a-z0-9 ]+$/i.test(e)},m=function(e){return/^[a-z]/i.test(e)},b=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:3,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:15;return e.length>=t&&e.length<=n},v=function(e){return p(e)&&f(e)&&m(e)&&b(e)},j=function(e){return/^[1-9][0-9]{3}$/.test(e)},O=function(e){return Number(e)>0},h=function(e){return Number(e)>=0},g=function(e){return(null===e||void 0===e?void 0:e.size)/1024/1024<=5},y=function(e){var t;return null===e||void 0===e||null===(t=e.type)||void 0===t?void 0:t.includes("image")},_=function(e){return g(e)&&y(e)}},d3ca:function(e,t,n){},e00b:function(e,t,n){},ec7c:function(e,t,n){"use strict";n("4741")},f2b5:function(e,t,n){},f317:function(e,t){},f83a:function(e,t,n){},fbfa:function(e,t,n){"use strict";n("d3ca")}});
//# sourceMappingURL=app.30b2b517.js.map