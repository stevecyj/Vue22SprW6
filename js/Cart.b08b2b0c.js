(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["Cart"],{cc55:function(e,t,a){"use strict";a.r(t);a("99af"),a("b0c0"),a("b64b");var c=a("7a23"),o=Object(c["createElementVNode"])("h3",null,"購物車",-1),n={class:"container"},l={class:"text-end"},r={class:"vld-parent"},s={class:"table align-middle"},i=Object(c["createElementVNode"])("thead",null,[Object(c["createElementVNode"])("tr",null,[Object(c["createElementVNode"])("th"),Object(c["createElementVNode"])("th",null,"品名"),Object(c["createElementVNode"])("th",{style:{width:"150px"}},"數量/單位"),Object(c["createElementVNode"])("th",null,"單價")])],-1),d=["onClick"],m={key:0,class:"text-success"},u={class:"input-group input-group-sm"},b={class:"input-group mb-3"},p=["onUpdate:modelValue","disabled","onChange"],O=["value"],j={id:"basic-addon2",class:"input-group-text"},f={class:"text-end"},h={key:0,class:"text-success"},v=Object(c["createElementVNode"])("td",{class:"text-end",colspan:"3"},"總計",-1),V={class:"text-end"},g={key:0,class:"text-end text-success",colspan:"3"},N={key:1,class:"text-end text-success"},E={class:"my-5 row justify-content-center"},C={class:"mb-3"},k=Object(c["createElementVNode"])("label",{class:"form-label",for:"email"},"Email",-1),y={class:"mb-3"},x=Object(c["createElementVNode"])("label",{class:"form-label",for:"name"},"收件人姓名",-1),L={class:"mb-3"},D=Object(c["createElementVNode"])("label",{class:"form-label",for:"tel"},"收件人電話",-1),B={class:"mb-3"},S=Object(c["createElementVNode"])("label",{class:"form-label",for:"address"},"收件人地址",-1),w={class:"mb-3"},I=Object(c["createElementVNode"])("label",{class:"form-label",for:"message"},"留言",-1),_={class:"text-end"};function q(e,t,a,q,U,X){var $,z=this,F=Object(c["resolveComponent"])("Spinner"),P=Object(c["resolveComponent"])("Loading"),T=Object(c["resolveComponent"])("v-field"),J=Object(c["resolveComponent"])("error-message"),M=Object(c["resolveComponent"])("v-form");return Object(c["openBlock"])(),Object(c["createElementBlock"])(c["Fragment"],null,[o,Object(c["createElementVNode"])("div",n,[Object(c["createElementVNode"])("div",l,[Object(c["createElementVNode"])("button",{class:Object(c["normalizeClass"])([{disabled:0===(null===($=this.cartData.carts)||void 0===$?void 0:$.length)},"btn btn-outline-danger"]),type:"button",onClick:t[0]||(t[0]=function(){return X.clearCarts&&X.clearCarts.apply(X,arguments)})}," 清空購物車 ",2)]),Object(c["createElementVNode"])("div",r,[Object(c["createVNode"])(P,{active:U.isLoading,"onUpdate:active":t[1]||(t[1]=function(e){return U.isLoading=e}),"can-cancel":!0,"is-full-page":U.fullPage},{default:Object(c["withCtx"])((function(){return[Object(c["createVNode"])(F)]})),_:1},8,["active","is-full-page"])]),Object(c["createElementVNode"])("table",s,[i,Object(c["createElementVNode"])("tbody",null,[U.cartData.carts?(Object(c["openBlock"])(!0),Object(c["createElementBlock"])(c["Fragment"],{key:0},Object(c["renderList"])(U.cartData.carts,(function(e){return Object(c["openBlock"])(),Object(c["createElementBlock"])("tr",{key:e.id},[Object(c["createElementVNode"])("td",null,[Object(c["createElementVNode"])("button",{type:"button",class:"btn btn-outline-danger btn-sm",onClick:function(t){return X.removeCartItem(e.id)}}," x ",8,d)]),Object(c["createElementVNode"])("td",null,[Object(c["createTextVNode"])(Object(c["toDisplayString"])(e.product.title)+" ",1),e.coupon?(Object(c["openBlock"])(),Object(c["createElementBlock"])("div",m,"已套用優惠券")):Object(c["createCommentVNode"])("",!0)]),Object(c["createElementVNode"])("td",null,[Object(c["createElementVNode"])("div",u,[Object(c["createElementVNode"])("div",b,[Object(c["withDirectives"])(Object(c["createElementVNode"])("select",{id:"","onUpdate:modelValue":function(t){return e.qty=t},disabled:U.isLoadingItem===e.id,class:"form-select",onChange:function(t){return X.updateCartItem(e)}},[(Object(c["openBlock"])(),Object(c["createElementBlock"])(c["Fragment"],null,Object(c["renderList"])(20,(function(t){return Object(c["createElementVNode"])("option",{key:"".concat(t).concat(e.id),value:t},Object(c["toDisplayString"])(t),9,O)})),64))],40,p),[[c["vModelSelect"],e.qty]]),Object(c["createElementVNode"])("span",j,Object(c["toDisplayString"])(e.product.unit),1)])])]),Object(c["createElementVNode"])("td",f,[U.cartData.final_total!==U.cartData.total?(Object(c["openBlock"])(),Object(c["createElementBlock"])("small",h,"折扣價：")):Object(c["createCommentVNode"])("",!0),Object(c["createTextVNode"])(" "+Object(c["toDisplayString"])(e.product.price*e.qty)+" 元 ",1)])])})),128)):Object(c["createCommentVNode"])("",!0)]),Object(c["createElementVNode"])("tfoot",null,[Object(c["createElementVNode"])("tr",null,[v,Object(c["createElementVNode"])("td",V,Object(c["toDisplayString"])(U.cartData.final_total)+" 元",1)]),Object(c["createElementVNode"])("tr",null,[U.cartData.final_total!==U.cartData.total?(Object(c["openBlock"])(),Object(c["createElementBlock"])("td",g," 折扣價 ")):Object(c["createCommentVNode"])("",!0),U.cartData.final_total!==U.cartData.total?(Object(c["openBlock"])(),Object(c["createElementBlock"])("td",N,Object(c["toDisplayString"])(U.cartData.final_total),1)):Object(c["createCommentVNode"])("",!0)])])]),Object(c["createElementVNode"])("div",E,[Object(c["createVNode"])(M,{ref:"form",class:"col-md-6",onSubmit:X.submitOrder},{default:Object(c["withCtx"])((function(e){var a,o=e.errors;return[Object(c["createElementVNode"])("div",C,[k,Object(c["createVNode"])(T,{id:"email",modelValue:U.form.user.email,"onUpdate:modelValue":t[2]||(t[2]=function(e){return U.form.user.email=e}),class:Object(c["normalizeClass"])([{"is-invalid":o["email"]},"form-control"]),name:"email",placeholder:"請輸入 Email",rules:"email|required",type:"email"},null,8,["modelValue","class"]),Object(c["createVNode"])(J,{class:"invalid-feedback",name:"email"})]),Object(c["createElementVNode"])("div",y,[x,Object(c["createVNode"])(T,{id:"name",modelValue:U.form.user.name,"onUpdate:modelValue":t[3]||(t[3]=function(e){return U.form.user.name=e}),class:Object(c["normalizeClass"])([{"is-invalid":o["姓名"]},"form-control"]),name:"姓名",placeholder:"請輸入姓名",rules:"required",type:"text"},null,8,["modelValue","class"]),Object(c["createVNode"])(J,{class:"invalid-feedback",name:"姓名"})]),Object(c["createElementVNode"])("div",L,[D,Object(c["createVNode"])(T,{id:"tel",modelValue:U.form.user.tel,"onUpdate:modelValue":t[4]||(t[4]=function(e){return U.form.user.tel=e}),class:Object(c["normalizeClass"])([{"is-invalid":o["phone"]},"form-control"]),rules:X.isPhone,name:"phone",placeholder:"請輸入手機(手機09XXXXXXXX，10位數字)",type:"tel"},null,8,["modelValue","class","rules"]),Object(c["createVNode"])(J,{class:"invalid-feedback",name:"phone"})]),Object(c["createElementVNode"])("div",B,[S,Object(c["createVNode"])(T,{id:"address",modelValue:U.form.user.address,"onUpdate:modelValue":t[5]||(t[5]=function(e){return U.form.user.address=e}),class:Object(c["normalizeClass"])([{"is-invalid":o["地址"]},"form-control"]),name:"地址",placeholder:"請輸入地址",rules:"required",type:"text"},null,8,["modelValue","class"]),Object(c["createVNode"])(J,{class:"invalid-feedback",name:"地址"})]),Object(c["createElementVNode"])("div",w,[I,Object(c["createVNode"])(T,{id:"message",modelValue:U.form.message,"onUpdate:modelValue":t[6]||(t[6]=function(e){return U.form.message=e}),as:"textarea",class:"form-control",cols:"30",name:"留言",rows:"10"},null,8,["modelValue"])]),Object(c["createElementVNode"])("div",_,[Object(c["createElementVNode"])("button",{class:Object(c["normalizeClass"])([{disabled:0===(null===(a=z.cartData.carts)||void 0===a?void 0:a.length)||0!==Object.keys(o).length},"btn btn-danger"]),type:"submit"}," 送出訂單 ",2)])]})),_:1},8,["onSubmit"])])])],64)}a("ac1f"),a("00b4");var U=a("6805"),X=a("6be2"),$=a("9062"),z=a.n($),F=(a("e40d"),a("a420")),P={name:"CartView",components:{Loading:z.a,Spinner:F["a"]},data:function(){return{cartData:{carts:[]},products:[],isLoadingItem:"",isLoading:!1,fullPage:!0,productId:"",form:{user:{name:"",email:"",tel:"",address:""},message:""}}},mixins:[U["a"]],methods:{getCart:function(){var e=this;this.$http.get("".concat("https://vue3-course-api.hexschool.io/v2","/api/").concat("steve-vue","/cart")).then((function(t){e.cartData=t.data.data})).catch((function(e){console.error(e.data.message)}))},addToCart:function(e){var t=this,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,c={product_id:e,qty:a};this.isLoadingItem=e,this.$http.post("".concat("https://vue3-course-api.hexschool.io/v2","/api/").concat("steve-vue","/cart"),{data:c}).then((function(){t.getCart()})).catch((function(e){t.alertError(e)}))},removeCartItem:function(e){var t=this;this.isLoading=!0,this.$http.delete("".concat("https://vue3-course-api.hexschool.io/v2","/api/").concat("steve-vue","/cart/").concat(e)).then((function(e){X["a"].emit("get-cart"),t.alertSuccess(e.data.message),t.getCart(),t.isLoading=!1})).catch((function(e){t.isLoading=!1,t.alertError(e.data.message)}))},updateCartItem:function(e){var t=this,a={product_id:e.product_id,qty:e.qty};this.isLoadingItem=e.id,this.$http.put("".concat("https://vue3-course-api.hexschool.io/v2","/api/").concat("steve-vue","/cart/").concat(e.id),{data:a}).then((function(e){t.alertSuccess(e.data.message),t.getCart(),t.isLoadingItem=""})).catch((function(e){t.isLoadingItem="",t.alertError(e.data.message)}))},clearCarts:function(){var e=this;this.isLoading=!0,this.$http.delete("".concat("https://vue3-course-api.hexschool.io/v2","/api/").concat("steve-vue","/carts")).then((function(t){e.alertSuccess(t.data.message),X["a"].emit("get-cart"),e.getCart(),e.isLoading=!1})).catch((function(t){e.isLoading=!1,console.error(t),e.alertError(t.data.message)}))},submitOrder:function(){var e=this,t=this.form;this.isLoading=!0,this.$http.post("".concat("https://vue3-course-api.hexschool.io/v2","/api/").concat("steve-vue","/order"),{data:t}).then((function(t){e.$refs.form.resetForm(),e.alertSuccess(t.data.message),X["a"].emit("get-cart"),e.getCart(),e.isLoading=!1})).catch((function(t){e.isLoading=!1,e.alertError(t.data.message)}))},isPhone:function(e){var t=/^(09)[0-9]{8}$/;return!!t.test(e)||"請填寫正確的手機號碼"}},mounted:function(){this.getCart()}},T=a("6b0d"),J=a.n(T);const M=J()(P,[["render",q]]);t["default"]=M}}]);
//# sourceMappingURL=Cart.b08b2b0c.js.map