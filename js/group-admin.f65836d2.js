(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["group-admin"],{1276:function(e,t,n){"use strict";var i=n("d784"),a=n("44e7"),r=n("825a"),o=n("1d80"),l=n("4840"),u=n("8aa5"),c=n("50c4"),d=n("14c3"),m=n("9263"),s=n("d039"),b=[].push,f=Math.min,p=4294967295,v=!s((function(){return!RegExp(p,"y")}));i("split",2,(function(e,t,n){var i;return i="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(e,n){var i=String(o(this)),r=void 0===n?p:n>>>0;if(0===r)return[];if(void 0===e)return[i];if(!a(e))return t.call(i,e,r);var l,u,c,d=[],s=(e.ignoreCase?"i":"")+(e.multiline?"m":"")+(e.unicode?"u":"")+(e.sticky?"y":""),f=0,v=new RegExp(e.source,s+"g");while(l=m.call(v,i)){if(u=v.lastIndex,u>f&&(d.push(i.slice(f,l.index)),l.length>1&&l.index<i.length&&b.apply(d,l.slice(1)),c=l[0].length,f=u,d.length>=r))break;v.lastIndex===l.index&&v.lastIndex++}return f===i.length?!c&&v.test("")||d.push(""):d.push(i.slice(f)),d.length>r?d.slice(0,r):d}:"0".split(void 0,0).length?function(e,n){return void 0===e&&0===n?[]:t.call(this,e,n)}:t,[function(t,n){var a=o(this),r=void 0==t?void 0:t[e];return void 0!==r?r.call(t,a,n):i.call(String(a),t,n)},function(e,a){var o=n(i,e,this,a,i!==t);if(o.done)return o.value;var m=r(e),s=String(this),b=l(m,RegExp),j=m.unicode,O=(m.ignoreCase?"i":"")+(m.multiline?"m":"")+(m.unicode?"u":"")+(v?"y":"g"),h=new b(v?m:"^(?:"+m.source+")",O),g=void 0===a?p:a>>>0;if(0===g)return[];if(0===s.length)return null===d(h,s)?[s]:[];var y=0,V=0,k=[];while(V<s.length){h.lastIndex=v?V:0;var I,A=d(h,v?s:s.slice(V));if(null===A||(I=f(c(h.lastIndex+(v?0:V)),s.length))===y)V=u(s,V,j);else{if(k.push(s.slice(y,V)),k.length===g)return k;for(var C=1;C<=A.length-1;C++)if(k.push(A[C]),k.length===g)return k;V=y=I}}return k.push(s.slice(y)),k}]}),!v)},"1ed9":function(e,t,n){"use strict";n.r(t);var i=n("7a23"),a=Object(i["H"])("data-v-4543ddc4");Object(i["v"])("data-v-4543ddc4");var r={key:0,class:"report__holder"};Object(i["t"])();var o=a((function(e,t,n,o,l,u){var c=Object(i["A"])("report"),d=Object(i["A"])("empty-view"),m=Object(i["A"])("modal-details"),s=Object(i["A"])("modal");return Object(i["s"])(),Object(i["e"])(i["a"],null,[e.cartState.reports.length?(Object(i["s"])(),Object(i["e"])("div",r,[(Object(i["s"])(!0),Object(i["e"])(i["a"],null,Object(i["y"])(e.cartState.reports,(function(t,n){return Object(i["s"])(),Object(i["e"])(c,{key:t.id,report:t,index:n+1,onClick:function(n){return e.openModal(t)}},null,8,["report","index","onClick"])})),128))])):(Object(i["s"])(),Object(i["e"])(d,{key:1})),(Object(i["s"])(),Object(i["e"])(i["b"],{to:"body"},[e.reportForModal?(Object(i["s"])(),Object(i["e"])(s,{key:0,title:"Report",close:function(){return e.openModal(void 0)}},{default:a((function(){return[Object(i["h"])(m,{report:e.reportForModal},null,8,["report"])]})),_:1},8,["close"])):Object(i["f"])("",!0)]))],64)})),l=(n("d3b7"),n("08ba")),u=Object(i["i"])({loader:function(){return n.e("group-admin").then(n.bind(null,"9d5b"))}}),c=Object(i["i"])({loader:function(){return n.e("group-modal").then(n.bind(null,"622d"))}}),d=Object(i["j"])({name:"PurchaseReports",components:{Report:u,ModalDetails:c},setup:function(){l["a"].getAllPurchases();var e=Object(i["x"])(),t=function(t){return e.value=t};return{cartState:l["a"].state,openModal:t,reportForModal:e}}}),m=d;n("9159");m.render=o,m.__scopeId="data-v-4543ddc4";t["default"]=m},"1f13":function(e,t,n){},"1f31":function(e,t,n){"use strict";n.r(t);n("b0c0");var i=n("7a23"),a=Object(i["H"])("data-v-207b0815");Object(i["v"])("data-v-207b0815");var r={key:1,class:"admin-shop"};Object(i["t"])();var o=a((function(e,t,n,a,o,l){var u=Object(i["A"])("admin-item-form"),c=Object(i["A"])("item-view"),d=Object(i["A"])("empty-view");return e.route.params.id?(Object(i["s"])(),Object(i["e"])(u,{key:0,"item-id":e.route.params.id},null,8,["item-id"])):e.itemsState.nonFilteredItems.length?(Object(i["s"])(),Object(i["e"])("div",r,[(Object(i["s"])(!0),Object(i["e"])(i["a"],null,Object(i["y"])(e.itemsState.nonFilteredItems,(function(t){return Object(i["s"])(),Object(i["e"])(c,{key:t.id,id:t.id,type:"admin",name:t.name,"img-name":t.uriImg,amount:t.currentAmount,price:t.price,discount:t.discount,onActionExecuted:function(n){return e.goToEditPage(t.id)},onDeleteItem:function(n){return e.deleteItem(t.id)}},null,8,["id","name","img-name","amount","price","discount","onActionExecuted","onDeleteItem"])})),128))])):(Object(i["s"])(),Object(i["e"])(d,{key:2}))})),l=(n("d3b7"),n("6c02")),u=n("08ba"),c=Object(i["i"])({loader:function(){return n.e("group-admin").then(n.bind(null,"5e7b"))}}),d=Object(i["j"])({name:"AdminItemView",components:{AdminItemForm:c},setup:function(){var e=Object(l["d"])(),t=Object(l["c"])();u["b"].getAll();var n=function(t){return e.push({name:"AdminItemView",params:{id:t}})};return{itemsState:u["b"].state,deleteItem:u["b"].deleteItem,goToEditPage:n,route:t}}}),m=d;n("e101");m.render=o,m.__scopeId="data-v-207b0815";t["default"]=m},3530:function(e,t,n){"use strict";n.r(t);var i=n("7a23");function a(e,t,n,a,r,o){var l=Object(i["A"])("admin-menu"),u=Object(i["A"])("router-view"),c=Object(i["A"])("side-nav-view");return Object(i["s"])(),Object(i["e"])(c,null,{menu:Object(i["G"])((function(){return[Object(i["h"])(l)]})),content:Object(i["G"])((function(){return[Object(i["h"])(u)]})),_:1})}n("d3b7");var r=Object(i["i"])({loader:function(){return n.e("group-admin").then(n.bind(null,"ddc0"))}}),o=Object(i["j"])({name:"Admin",components:{AdminMenu:r}}),l=o;l.render=a;t["default"]=l},"513f":function(e,t,n){},"5e7b":function(e,t,n){"use strict";n.r(t);n("b0c0");var i=n("7a23"),a=Object(i["H"])("data-v-8187f5f0");Object(i["v"])("data-v-8187f5f0");var r={class:"form"},o=Object(i["g"])(" Save ");Object(i["t"])();var l=a((function(e,t,n,l,u,c){var d,m=Object(i["A"])("form-field"),s=Object(i["A"])("app-button");return Object(i["s"])(),Object(i["e"])("div",r,[Object(i["h"])("h2",null,Object(i["C"])("create"===e.mode?"Create new item":"Edit ".concat(e.item.name))+". ",1),Object(i["h"])(m,{label:"Item type",type:e.kinds,modelValue:e.ItemKind[e.item.kind],"onUpdate:modelValue":t[1]||(t[1]=function(t){return e.setEnumValue(e.ItemKind,"kind",t)})},null,8,["type","modelValue"]),Object(i["h"])(m,{label:"Name",type:"text",modelValue:e.item.name,"onUpdate:modelValue":t[2]||(t[2]=function(t){return e.item.name=t}),modelModifiers:{trim:!0},validator:e.validators.isValidName,onValidityChange:t[3]||(t[3]=function(t){return e.validationState.name=t})},null,8,["modelValue","validator"]),Object(i["h"])(m,{label:"Discount",type:"number",modelValue:e.item.discount,"onUpdate:modelValue":t[4]||(t[4]=function(t){return e.item.discount=t}),modelModifiers:{number:!0},validator:e.validators.isNonNegativeNumber,onValidityChange:t[5]||(t[5]=function(t){return e.validationState.discount=t})},null,8,["modelValue","validator"]),Object(i["h"])(m,{label:"Price",type:"number",modelValue:e.item.price,"onUpdate:modelValue":t[6]||(t[6]=function(t){return e.item.price=t}),modelModifiers:{number:!0},validator:e.validators.isGreaterThanZero,onValidityChange:t[7]||(t[7]=function(t){return e.validationState.price=t})},null,8,["modelValue","validator"]),Object(i["h"])(m,{label:"Amount in stock",type:"number",modelValue:e.item.currentAmount,"onUpdate:modelValue":t[8]||(t[8]=function(t){return e.item.currentAmount=t}),modelModifiers:{number:!0},validator:e.validators.isNonNegativeNumber,onValidityChange:t[9]||(t[9]=function(t){return e.validationState.amount=t})},null,8,["modelValue","validator"]),Object(i["h"])(m,{label:"Image",type:"file",modelValue:e.item.image,"onUpdate:modelValue":t[10]||(t[10]=function(t){return e.item.image=t}),validator:e.validators.isValidFile,onValidityChange:t[11]||(t[11]=function(t){return e.validationState.image=t})},null,8,["modelValue","validator"]),e.item.kind===e.ItemKind.BackItem?(Object(i["s"])(),Object(i["e"])(m,{key:0,label:"Is wings?",type:"checkbox",modelValue:e.item.isWings,"onUpdate:modelValue":t[12]||(t[12]=function(t){return e.item.isWings=t})},null,8,["modelValue"])):Object(i["f"])("",!0),e.item.kind===e.ItemKind.PrimaryWeapon||e.item.kind===e.ItemKind.SecondaryWeapon?(Object(i["s"])(),Object(i["e"])(i["a"],{key:1},[Object(i["h"])(m,{label:"Creator",type:"text",modelValue:e.item.creator,"onUpdate:modelValue":t[13]||(t[13]=function(t){return e.item.creator=t}),modelModifiers:{trim:!0},validator:function(t){return e.validators.isNotEmptyString(t)&&e.validators.isFirstCharLetter(t)},onValidityChange:t[14]||(t[14]=function(t){return e.validationState.creator=t})},null,8,["modelValue","validator"]),Object(i["h"])(m,{label:"Year",validator:e.validators.is4DigitYear,type:"number",modelValue:e.item.year,"onUpdate:modelValue":t[15]||(t[15]=function(t){return e.item.year=t}),modelModifiers:{number:!0},onValidityChange:t[16]||(t[16]=function(t){return e.validationState.year=t})},null,8,["validator","modelValue"]),Object(i["h"])(m,{label:"Fire power",type:"number",modelValue:e.item.firePower,"onUpdate:modelValue":t[17]||(t[17]=function(t){return e.item.firePower=t}),modelModifiers:{number:!0},validator:e.validators.isGreaterThanZero,onValidityChange:t[18]||(t[18]=function(t){return e.validationState.firePower=t})},null,8,["modelValue","validator"]),Object(i["h"])(m,{label:"Automatic",type:"checkbox",modelValue:e.item.automatic,"onUpdate:modelValue":t[19]||(t[19]=function(t){return e.item.automatic=t})},null,8,["modelValue"]),e.item.kind===e.ItemKind.PrimaryWeapon?(Object(i["s"])(),Object(i["e"])(i["a"],{key:0},[Object(i["h"])(m,{label:"Amount of bullets",type:"number",modelValue:e.item.amountBalls,"onUpdate:modelValue":t[20]||(t[20]=function(t){return e.item.amountBalls=t}),modelModifiers:{number:!0},validator:e.validators.isGreaterThanZero,onValidityChange:t[21]||(t[21]=function(t){return e.validationState.bullets=t})},null,8,["modelValue","validator"]),Object(i["h"])(m,{label:"Shooting range",type:"number",modelValue:e.item.shootingRange,"onUpdate:modelValue":t[22]||(t[22]=function(t){return e.item.shootingRange=t}),modelModifiers:{number:!0},validator:e.validators.isGreaterThanZero,onValidityChange:t[23]||(t[23]=function(t){return e.validationState.range=t})},null,8,["modelValue","validator"])],64)):Object(i["f"])("",!0),e.item.kind===e.ItemKind.SecondaryWeapon?(Object(i["s"])(),Object(i["e"])(i["a"],{key:1},[Object(i["h"])(m,{label:"Knife length",type:"number",modelValue:e.item.knifeLength,"onUpdate:modelValue":t[24]||(t[24]=function(t){return e.item.knifeLength=t}),modelModifiers:{number:!0},validator:e.validators.isGreaterThanZero,onValidityChange:t[25]||(t[25]=function(t){return e.validationState.knifeLength=t})},null,8,["modelValue","validator"]),Object(i["h"])(m,{label:"Type of knife",type:e.knifes,modelValue:e.KnifeType[null!==(d=e.item.typeKnife)&&void 0!==d?d:0],"onUpdate:modelValue":t[26]||(t[26]=function(t){return e.setEnumValue(e.KnifeType,"typeKnife",t)})},null,8,["type","modelValue"])],64)):Object(i["f"])("",!0)],64)):Object(i["f"])("",!0),Object(i["h"])(s,{disabled:!e.isValid,onClick:e.editOrCreateItem},{default:a((function(){return[o]})),_:1},8,["disabled","onClick"])])})),u=n("5530"),c=n("0d59"),d=n("08ba"),m=n("d257"),s=Object(i["j"])({name:"ItemForm",props:{itemId:{type:String}},setup:function(e){var t=Object(i["w"])({name:!1,discount:!0,price:!1,amount:!0,image:!1,creator:!1,year:!1,firePower:!1,bullets:!1,range:!1,knifeLength:!1}),n=Object(i["c"])((function(){return e.itemId?"edit":"create"})),a=Object(m["a"])(c["b"]),r=Object(m["a"])(c["c"]),o=Object(i["x"])({kind:c["b"].BackItem,name:"",discount:0,price:0,id:c["a"].empty,currentAmount:0,creator:""}),l=Object(i["c"])((function(){var e=t.name&&t.discount&&t.price&&t.amount,i="edit"===n.value||Boolean(o.value.image)&&t.image,a=t.creator&&t.year&&t.firePower,r=o.value.kind!==c["b"].PrimaryWeapon||a&&t.bullets&&t.range,l=o.value.kind!==c["b"].SecondaryWeapon||a&&t.knifeLength;return e&&i&&r&&l})),s=function(e,t,n){return o.value[t]=e[n]},b=function(){l.value&&d["b"].editOrCreateItem(o.value)};return e.itemId&&d["b"].getById(e.itemId).then((function(e){return o.value=Object(u["a"])({},e)})).catch((function(){return d["c"].showToast("Error getting requested file!")})),{mode:n,item:o,kinds:a,knifes:r,isValid:l,ItemKind:c["b"],KnifeType:c["c"],validators:m["d"],setEnumValue:s,validationState:t,editOrCreateItem:b}}}),b=s;n("7347");b.render=l,b.__scopeId="data-v-8187f5f0";t["default"]=b},6604:function(e,t,n){"use strict";n("6c55")},"6c55":function(e,t,n){},7347:function(e,t,n){"use strict";n("513f")},9159:function(e,t,n){"use strict";n("b86b")},"9d5b":function(e,t,n){"use strict";n.r(t);n("ac1f"),n("1276");var i=n("7a23"),a=Object(i["H"])("data-v-437b6fc9");Object(i["v"])("data-v-437b6fc9");var r={class:"report-wrapper"},o={class:"report"},l={class:"report__number"},u={class:"report__name"},c={class:"report__time"},d={class:"report__price"};Object(i["t"])();var m=a((function(e,t,n,a,m,s){return Object(i["s"])(),Object(i["e"])("div",r,[Object(i["h"])("div",o,[Object(i["h"])("div",l,Object(i["C"])(e.index)+".",1),Object(i["h"])("div",u," Purchase - "+Object(i["C"])(e.report.id.split("-")[0]),1),Object(i["h"])("div",c,Object(i["C"])(e.prettyDate(e.report.purchaseTime)),1),Object(i["h"])("div",d," Total - "+Object(i["C"])(e.prettyNumber(e.report.totalPrice))+"$ ",1)])])})),s=(n("a9e3"),n("d257")),b=Object(i["j"])({name:"Report",props:{index:{type:Number,required:!0},report:{type:Object,required:!0}},setup:function(){return{prettyNumber:s["c"],prettyDate:s["b"]}}}),f=b;n("6604");f.render=m,f.__scopeId="data-v-437b6fc9";t["default"]=f},"9f21":function(e,t,n){},b86b:function(e,t,n){},cc9d:function(e,t,n){"use strict";n("1f13")},ddc0:function(e,t,n){"use strict";n.r(t);var i=n("7a23"),a=Object(i["H"])("data-v-6203febd");Object(i["v"])("data-v-6203febd");var r={class:"admin__menu"};Object(i["t"])();var o=a((function(e,t,n,o,l,u){var c=Object(i["A"])("router-link");return Object(i["s"])(),Object(i["e"])("ul",r,[Object(i["h"])(c,{to:{name:"AdminItemView"},custom:""},{default:a((function(e){var t=e.navigate,n=e.isActive;return[Object(i["h"])("li",{class:["admin__menu-item",{active:n}],onClick:t}," Edit items ",10,["onClick"])]})),_:1}),Object(i["h"])(c,{to:{name:"AdminNewItem"},custom:""},{default:a((function(e){var t=e.navigate,n=e.isActive;return[Object(i["h"])("li",{class:["admin__menu-item",{active:n}],onClick:t}," Create new item ",10,["onClick"])]})),_:1}),Object(i["h"])(c,{to:"/admin/reports",custom:""},{default:a((function(e){var t=e.navigate,n=e.isExactActive;return[Object(i["h"])("li",{class:["admin__menu-item",{active:n}],onClick:t}," Reports ",10,["onClick"])]})),_:1})])})),l=n("6c02"),u=n("0d59"),c=Object(i["j"])({name:"AdminMenu",setup:function(){var e=Object(l["d"])(),t=e.currentRoute,n=function(t){return e.push({name:t})};return{route:t,navigateTo:n,Guid:u["a"]}}}),d=c;n("cc9d");d.render=o,d.__scopeId="data-v-6203febd";t["default"]=d},e101:function(e,t,n){"use strict";n("9f21")}}]);
//# sourceMappingURL=group-admin.f65836d2.js.map