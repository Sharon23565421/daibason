"use strict";(self["webpackChunkdaibason"]=self["webpackChunkdaibason"]||[]).push([[72],{1776:function(e,t,a){a.r(t),a.d(t,{default:function(){return T}});var l=a(9199);const d={class:"CartWrap"},r=(0,l.createElementVNode)("div",{class:"CartSpeedBox"},[(0,l.createElementVNode)("div",{class:"SpeedNo"},[(0,l.createElementVNode)("span",{class:"SpeedNoF"},"1"),(0,l.createElementVNode)("span",null,"2"),(0,l.createElementVNode)("span",null,"3")]),(0,l.createElementVNode)("div",{class:"SpeedText"},[(0,l.createElementVNode)("div",null,"購物車"),(0,l.createElementVNode)("div",null,"付款運送"),(0,l.createElementVNode)("div",null,"訂單完成")])],-1),o={class:"CartProBOX"},n=(0,l.createElementVNode)("div",{class:"CartProTitle"},"購物車",-1),c={class:"CartProCardBox"},i=(0,l.createElementVNode)("div",{class:"CartProCardTitle"},[(0,l.createElementVNode)("div",null,"商品資料"),(0,l.createElementVNode)("div"),(0,l.createElementVNode)("div",null,"單價"),(0,l.createElementVNode)("div",null,"數量"),(0,l.createElementVNode)("div",null,"小計"),(0,l.createElementVNode)("div")],-1),s={class:"CartProCardDetail"},m=(0,l.createElementVNode)("div",{class:"CardDetailImg"},[(0,l.createElementVNode)("img",{src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlsDygW5l6-urgSirZ28w1yJgNOy7sF4VJqQ&usqp=CAU",alt:""})],-1),p=(0,l.createElementVNode)("div",{class:"CardDetailTitle"},"吃的蛋糕",-1),u=(0,l.createElementVNode)("div",{class:"CardDetailPrice"},"NT$320",-1),N={class:"CardDetailCount"},v=(0,l.createElementVNode)("div",{class:"CardDetailTotal"},"NT$320",-1),V=(0,l.createElementVNode)("div",{class:"CardDetailDelet"},"x",-1),C=(0,l.createElementVNode)("div",{class:"CartProTotalBox"},[(0,l.createElementVNode)("p",{class:"CartProTotalTitle"},"商品金額小記:"),(0,l.createElementVNode)("p",{class:"CartProTotalPrice"},"NT$320")],-1),E={class:"CartBtmBox"};function h(e,t,a,h,S,g){return(0,l.openBlock)(),(0,l.createElementBlock)("div",d,[r,(0,l.createElementVNode)("div",o,[n,(0,l.createElementVNode)("div",c,[i,((0,l.openBlock)(),(0,l.createElementBlock)(l.Fragment,null,(0,l.renderList)(3,(e=>(0,l.createElementVNode)("div",s,[m,p,u,(0,l.createElementVNode)("div",N,[(0,l.createElementVNode)("div",{onClick:t[0]||(t[0]=(...e)=>g.decrementCount&&g.decrementCount(...e))},"-"),(0,l.createElementVNode)("p",null,(0,l.toDisplayString)(S.count),1),(0,l.createElementVNode)("div",{onClick:t[1]||(t[1]=(...e)=>g.incrementCount&&g.incrementCount(...e))},"+")]),v,V]))),64))]),C]),(0,l.createElementVNode)("div",E,[(0,l.createElementVNode)("div",{class:"CartBtnBack",onClick:t[2]||(t[2]=(...e)=>g.goToStore&&g.goToStore(...e))},"返回購物"),(0,l.createElementVNode)("div",{class:"CartBtnBackNex",onClick:t[3]||(t[3]=(...e)=>g.gotoShopping&&g.gotoShopping(...e))},"前往結帳")])])}a(7658);var S={data(){return{count:1}},methods:{decrementCount(){this.count>1&&(this.count-=1)},incrementCount(){this.count+=1},goToStore(){this.$router.push("/Store")},gotoShopping(){this.$router.push("/Shopping")},cartTotal(){return this.$store.getters.cartTotal}}},g=a(89);const B=(0,g.Z)(S,[["render",h]]);var T=B},802:function(e,t,a){a.r(t),a.d(t,{default:function(){return M}});var l=a(9199);const d={class:"ShopWrap"},r=(0,l.createElementVNode)("div",{class:"ShopSpeedBox"},[(0,l.createElementVNode)("div",{class:"SpeedNo"},[(0,l.createElementVNode)("span",{class:"SpeedNoF"},"1"),(0,l.createElementVNode)("span",null,"2"),(0,l.createElementVNode)("span",null,"3")]),(0,l.createElementVNode)("div",{class:"SpeedText"},[(0,l.createElementVNode)("div",null,"購物車"),(0,l.createElementVNode)("div",null,"付款運送"),(0,l.createElementVNode)("div",null,"訂單完成")])],-1),o={class:"ShopProBOX"},n={class:"ShopProCardBox"},c=(0,l.createElementVNode)("div",{class:"ShopProCardTitle"},[(0,l.createElementVNode)("div",null,"商品資料"),(0,l.createElementVNode)("div",null,"單價"),(0,l.createElementVNode)("div",null,"數量"),(0,l.createElementVNode)("div",null,"小計")],-1),i={class:"ShopProCardDetail"},s=(0,l.createStaticVNode)('<div class="CardDetailImg"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlsDygW5l6-urgSirZ28w1yJgNOy7sF4VJqQ&amp;usqp=CAU" alt=""></div><div class="CardDetailTitle">吃的蛋糕</div><div class="CardDetailPrice">NT$320</div><div class="CardDetailCount"><p>1</p></div><div class="CardDetailTotal">NT$320</div><div class="CardDetailDelet"></div>',6),m=[s],p={class:"ShopPayBox"},u=(0,l.createElementVNode)("div",{class:"PayTItle"},"付款方式",-1),N={class:"PayCredit"},v={class:"PayCash"},V={key:0,class:"ShopCredCard"},C={class:"form-group"},E=(0,l.createElementVNode)("label",{for:"creditCardNumber"},"信用卡號碼",-1),h={class:"form-group"},S=(0,l.createElementVNode)("label",{for:"expirationDate"},"有效日期",-1),g={class:"form-group"},B=(0,l.createElementVNode)("label",{for:"securityCode"},"安全碼",-1),T=(0,l.createStaticVNode)('<div class="ShopDelBox"><div class="DelTitle">運送方式</div><div class="DelComent"><div> 收件人姓名:<input type="text" id="creditCardNumber" name="creditCardNumber" placeholder="請輸入收件人姓名"></div><div> 收件人電話:<input type="text" id="creditCardNumber" name="creditCardNumber" placeholder="09XXXXXXXX"></div><div> 收件人信箱:<input type="text" id="creditCardNumber" name="creditCardNumber" placeholder="請輸入信箱"></div><div> 收件人地址:<input type="text" id="creditCardNumber" name="creditCardNumber" placeholder="清輸入地址"></div></div></div>',1),x={class:"ShopSumBox"},y=(0,l.createElementVNode)("div",{class:"SumCac"},[(0,l.createElementVNode)("div",{class:"SumCacTex"},[(0,l.createElementVNode)("p",null,"折扣後小計"),(0,l.createElementVNode)("p",null,"運費")]),(0,l.createElementVNode)("div",{class:"SumCacPrice"},[(0,l.createElementVNode)("p",null,"NT$"+(0,l.toDisplayString)(250)),(0,l.createElementVNode)("p",null,"NT$"+(0,l.toDisplayString)(250))])],-1),D={class:"SumTol"},k=(0,l.createElementVNode)("div",{class:"SumCacTex"},[(0,l.createElementVNode)("p",null,"商品金額統計")],-1),P={class:"SumCacPrice"},b=(0,l.createElementVNode)("p",null,"(含運費)",-1),f={class:"ShopBtmBox"};function $(e,t,a,s,$,X){return(0,l.openBlock)(),(0,l.createElementBlock)("div",d,[r,(0,l.createElementVNode)("div",o,[(0,l.createElementVNode)("div",{class:"ShopProTitle",onClick:t[0]||(t[0]=()=>{})},"合計:NT:2300"),(0,l.createElementVNode)("div",n,[c,((0,l.openBlock)(),(0,l.createElementBlock)(l.Fragment,null,(0,l.renderList)(3,(e=>(0,l.createElementVNode)("div",i,m))),64))])]),(0,l.createElementVNode)("div",p,[u,(0,l.createElementVNode)("div",N,[(0,l.withDirectives)((0,l.createElementVNode)("input",{type:"radio",name:"Pay",value:"信用卡付款","onUpdate:modelValue":t[1]||(t[1]=e=>$.selectedPayment=e)},null,512),[[l.vModelRadio,$.selectedPayment]]),(0,l.createTextVNode)("信用卡付款")]),(0,l.createElementVNode)("div",v,[(0,l.withDirectives)((0,l.createElementVNode)("input",{type:"radio",name:"Pay",value:"貨到付款","onUpdate:modelValue":t[2]||(t[2]=e=>$.selectedPayment=e)},null,512),[[l.vModelRadio,$.selectedPayment]]),(0,l.createTextVNode)("貨到付款")]),(0,l.createVNode)(l.Transition,{name:"slide-fade"},{default:(0,l.withCtx)((()=>["信用卡付款"===$.selectedPayment?((0,l.openBlock)(),(0,l.createElementBlock)("form",V,[(0,l.createElementVNode)("div",C,[E,(0,l.withDirectives)((0,l.createElementVNode)("input",{type:"text",id:"creditCardNumber",name:"creditCardNumber",placeholder:"信用卡號碼","onUpdate:modelValue":t[3]||(t[3]=e=>$.creditCardNumber=e)},null,512),[[l.vModelText,$.creditCardNumber]])]),(0,l.createElementVNode)("div",h,[S,(0,l.withDirectives)((0,l.createElementVNode)("input",{type:"text",id:"expirationDate",name:"expirationDate",placeholder:"MM/YY","onUpdate:modelValue":t[4]||(t[4]=e=>$.expirationDate=e)},null,512),[[l.vModelText,$.expirationDate]])]),(0,l.createElementVNode)("div",g,[B,(0,l.withDirectives)((0,l.createElementVNode)("input",{type:"text",id:"securityCode",name:"securityCode",placeholder:"卡片安全碼","onUpdate:modelValue":t[5]||(t[5]=e=>$.securityCode=e)},null,512),[[l.vModelText,$.securityCode]])])])):(0,l.createCommentVNode)("",!0)])),_:1})]),T,(0,l.createElementVNode)("div",x,[y,(0,l.createElementVNode)("div",D,[k,(0,l.createElementVNode)("div",P,[(0,l.createElementVNode)("p",null,"NT$"+(0,l.toDisplayString)(),1),b])])]),(0,l.createElementVNode)("div",f,[(0,l.createElementVNode)("div",{class:"ShopBtnBack",onClick:t[6]||(t[6]=(...e)=>X.gotoCart&&X.gotoCart(...e))},"上一頁"),(0,l.createElementVNode)("div",{class:"ShopBtnBackNex",onClick:t[7]||(t[7]=(...e)=>X.gotoShoppingDone&&X.gotoShoppingDone(...e))},"訂單確認")])])}a(7658);var X={data(){return{selectedPayment:"",creditCardNumber:"",expirationDate:"",securityCode:""}},methods:{gotoCart(){this.$router.push("/Cart")},gotoShoppingDone(){this.$router.push("/ShoppingDone")},cartTotal(){return this.$store.getters.cartTotal}}},w=a(89);const F=(0,w.Z)(X,[["render",$]]);var M=F},3614:function(e,t,a){a.r(t),a.d(t,{default:function(){return m}});var l=a(9199);const d={class:"CartWrap"},r=(0,l.createStaticVNode)('<div class="CartSpeedBox"><div class="SpeedNo"><span class="SpeedNoF">1</span><span>2</span><span>3</span></div><div class="SpeedText"><div>購物車</div><div>付款運送</div><div>訂單完成</div></div></div><div class="CartProBOX"> 購物完成介面 </div>',2),o={class:"CartBtmBox"};function n(e,t,a,n,c,i){return(0,l.openBlock)(),(0,l.createElementBlock)("div",d,[r,(0,l.createElementVNode)("div",o,[(0,l.createElementVNode)("div",{class:"CartBtnBack",onClick:t[0]||(t[0]=(...e)=>i.gotoShopping&&i.gotoShopping(...e))},"上一頁"),(0,l.createElementVNode)("div",{class:"CartBtnBackNex",onClick:t[1]||(t[1]=()=>{})},"訂單確認")])])}a(7658);var c={data(){return{count:1}},methods:{decrementCount(){this.count>1&&(this.count-=1)},incrementCount(){this.count+=1},gotoShopping(){this.$router.push("/Shopping")}}},i=a(89);const s=(0,i.Z)(c,[["render",n]]);var m=s}}]);
//# sourceMappingURL=Cart.4d43f5f6.js.map