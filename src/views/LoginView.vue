<template>
  <div class="loginWrap">
    <div class="loginPic">
      <img src="https://picsum.photos/500/800/?random=1" />
    </div>
    <div class="loginText">
      <h1>會員登入</h1>
      <div class="loginOther">
        <button>
          <i class="fa-brands fa-google"></i>
          <!-- <i class="fa-solid fa-face-surprise"></i> -->
          <span> Google登入 </span>
        </button>
        <button>
          <i class="fa-brands fa-facebook"></i>
          <!-- <i class="fa-regular fa-face-smile"></i> -->
          <span> Facebook登入 </span>
          <!-- <i class="fa-brands fa-facebook"></i> -->
        </button>
      </div>
      <div class="loginOr">OR</div>
      <form action="">
        <div class="loginEmail">
          <label for="email">信箱</label>
          <input type="text" id="email" v-model="userId" />
          <!-- {{ userId }} -->
        </div>
        <div class="loginPwd">
          <label for="pwd">密碼</label>
          <input type="password" id="pwd" v-model="userPwd" />
          <!-- {{ userPwd }} -->
        </div>
        <a href="#">忘記密碼 ?</a>
        <button @click="login">登入</button>
      </form>
      <a href="#">還沒有會員 ? 會員註冊</a>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userId: "",
      userPwd: "",
      userIdTrue: "qaq@gmail.com",
      userPwdTrue: 111,
    };
  },
  methods: {
    login() {
      if (this.userId == this.userIdTrue && this.userPwd == this.userPwdTrue) {
        alert("登入成功");
      } else {
        alert("登入失敗");
      }
    },
  },
};
</script>

<style scoped lang="scss">
.loginWrap {
  // border: 1px solid red;
  // width: 1200px;
  // margin: auto;
  display: flex;
  justify-content: center;
  // background-image: url("https://picsum.photos/800/800/?random=50");
  // background-repeat: no-repeat;

  .loginPic {
    border: 1px solid #aaa;
    position: relative;
    left: 50px;
    border-radius: 20px;

    // z-index: -1;
    // width: 100%;
    img {
      border-radius: 20px;
      width: 100%;
      vertical-align: bottom;
    }
  }

  .loginText {
    border: 1px solid #aaa;
    border-radius: 20px;
    position: relative;
    right: 50px;
    // z-index: 5;
    background-color: #fff;

    button {
      cursor: pointer;
    }

    h1 {
      width: 80%;
      margin: auto;
      text-align: left;
      font-size: 40px;
      margin-top: 100px;
    }

    .loginOther {
      margin-top: 100px;

      button {
        margin: 0 50px;
        padding: 5px 20px;
        border-radius: 20px;
        border: 1px solid #aaa;
      }
    }

    .loginOr {
      // border: 1px solid red;
      position: relative;
      margin-top: 50px;
      // display: inline-block;

      &::before {
        content: "";
        position: absolute;
        top: 50%;
        left: 0;
        width: 40%;
        // height: 1px;
        border-bottom: 1px solid #aaa;
      }

      &::after {
        content: "";
        position: absolute;
        top: 50%;
        right: 0;
        width: 40%;
        // height: 1px;
        border-bottom: 1px solid #aaa;
      }
    }

    form {
      margin-top: 50px;

      // border: 1px solid red;
      div {
        margin-top: 50px;

        label {
          display: block;
          width: 80%;
          margin: auto;
          text-align: left;
          // border: 1px solid red;
        }

        input {
          display: block;
          width: 80%;
          margin: auto;
          border: transparent;
          border-bottom: 1px solid #000;
        }
      }

      // a {
      //   border: 1px solid red;

      // }

      button {
        // border: 1px solid red;
        display: block;
        width: 80%;
        margin: auto;
        margin-top: 20px;
        padding: 5px 20px;
        background-color: #ddd;
        border-radius: 20px;
        border: transparent;
      }
    }

    a {
      // border: 1px solid red;
      display: block;
      width: 80%;
      margin: 20px auto;
      text-align: left;
      text-decoration: none;
      // margin-top: 20px;
      color: #000;
    }
  }
}

@media screen and (max-width: 414px) {
  .loginWrap {
    // display: block;
    flex-direction: column;

    .loginPic {
      left: 0;
      top: 20px;

      // height: 200px;
      img {
        height: 200px;
        width: 100%;
      }
    }

    .loginText {
      right: 0;
      bottom: 20px;

      .loginOther {
        margin-top: 50px;

        button {
          margin: 0 20px;
          background-color: transparent;
          border: transparent;

          span {
            display: none;
          }
        }
      }
    }
  }
}
</style>
