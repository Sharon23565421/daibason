"use strict";(self["webpackChunkdaibason"]=self["webpackChunkdaibason"]||[]).push([[438],{5120:function(e,t,o){o.r(t),o.d(t,{default:function(){return w}});var a=o(9199),l=o.p+"img/login.adfcb56f.png";const n={class:"loginWrap"},r=(0,a.createElementVNode)("div",{class:"loginPic"},[(0,a.createElementVNode)("img",{src:l})],-1),s={class:"loginText"},i=(0,a.createStaticVNode)('<h1>會員登入</h1><div class="loginOther"><button class="btn_l"><i class="fa-brands fa-google"></i><span> Google登入 </span></button><button class="btn_l"><i class="fa-brands fa-facebook"></i><span> Facebook登入 </span></button></div><div class="loginOr">OR</div>',3),d=["action"],c={class:"loginEmail"},u=(0,a.createElementVNode)("label",{for:"email"},"信箱",-1),m={class:"loginPwd"},f=(0,a.createElementVNode)("label",{for:"pwd"},"密碼",-1),g=(0,a.createElementVNode)("a",{href:"forgetPwd"},"忘記密碼 ?",-1),p=(0,a.createElementVNode)("a",{href:"RegisterView"},"還沒有會員 ? 會員註冊",-1);function b(e,t,o,l,b,V){return(0,a.openBlock)(),(0,a.createElementBlock)("div",n,[r,(0,a.createElementVNode)("div",s,[i,(0,a.createElementVNode)("form",{action:b.formAction,class:"loginForm"},[(0,a.createElementVNode)("div",c,[u,(0,a.withDirectives)((0,a.createElementVNode)("input",{type:"text",id:"email","onUpdate:modelValue":t[0]||(t[0]=e=>b.userId=e)},null,512),[[a.vModelText,b.userId]])]),(0,a.createElementVNode)("div",m,[f,(0,a.withDirectives)((0,a.createElementVNode)("input",{type:"password",id:"pwd","onUpdate:modelValue":t[1]||(t[1]=e=>b.userPwd=e)},null,512),[[a.vModelText,b.userPwd]])]),g,(0,a.createElementVNode)("button",{class:"btn_l",onClick:t[2]||(t[2]=(...e)=>V.login&&V.login(...e))},"登入")],8,d),p])])}var V={data(){return{userId:"",userPwd:"",userIdTrue:"111",userPwdTrue:111,toggle:!0,formAction:""}},methods:{login(){this.userId==this.userIdTrue&&this.userPwd==this.userPwdTrue?(alert("登入成功"),this.formAction="/User"):alert("登入失敗")}}},h=o(89);const v=(0,h.Z)(V,[["render",b]]);var w=v}}]);
//# sourceMappingURL=Login.dd04ebc2.js.map