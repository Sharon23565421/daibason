"use strict";(self["webpackChunkdaibason"]=self["webpackChunkdaibason"]||[]).push([[438],{5120:function(s,e,n){n.r(e),n.d(e,{default:function(){return P}});var a=n(6252),i=n(9963),o=n.p+"img/login.adfcb56f.png";const l={class:"loginWrap"},r=(0,a._)("div",{class:"loginPic"},[(0,a._)("img",{src:o})],-1),t={class:"loginText"},d=(0,a.uE)('<h1>會員登入</h1><div class="loginOther"><button class="btn_l"><i class="fa-brands fa-google"></i><span> Google登入 </span></button><button class="btn_l"><i class="fa-brands fa-facebook"></i><span> Facebook登入 </span></button></div><div class="loginOr">OR</div>',3),u=["action"],c={class:"loginEmail"},g=(0,a._)("label",{for:"email"},"信箱",-1),f={class:"loginPwd"},b=(0,a._)("label",{for:"pwd"},"密碼",-1),p=(0,a._)("a",{href:"forgetPwd"},"忘記密碼 ?",-1),w=(0,a._)("a",{href:"RegisterView"},"還沒有會員 ? 會員註冊",-1);function _(s,e,n,o,_,h){return(0,a.wg)(),(0,a.iD)("div",l,[r,(0,a._)("div",t,[d,(0,a._)("form",{action:_.formAction,class:"loginForm"},[(0,a._)("div",c,[g,(0,a.wy)((0,a._)("input",{type:"text",id:"email","onUpdate:modelValue":e[0]||(e[0]=s=>_.userId=s)},null,512),[[i.nr,_.userId]])]),(0,a._)("div",f,[b,(0,a.wy)((0,a._)("input",{type:"password",id:"pwd","onUpdate:modelValue":e[1]||(e[1]=s=>_.userPwd=s)},null,512),[[i.nr,_.userPwd]])]),p,(0,a._)("button",{class:"btn_l",onClick:e[2]||(e[2]=(...s)=>h.login&&h.login(...s))},"登入")],8,u),w])])}var h={data(){return{userId:"",userPwd:"",userIdTrue:"111",userPwdTrue:111,toggle:!0,formAction:""}},methods:{login(){this.userId==this.userIdTrue&&this.userPwd==this.userPwdTrue?(alert("登入成功"),this.formAction="/User"):alert("登入失敗")}}},m=n(3744);const v=(0,m.Z)(h,[["render",_]]);var P=v}}]);
//# sourceMappingURL=Login.8b82d6a4.js.map