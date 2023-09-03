
<template>
  <div class="loginWrap">
    <div class="loginPic">
      <img src="https://picsum.photos/500/800/?random=1">
    </div>
    <div class="loginText">
      <h1>會員註冊</h1>
      <form action="">
        <div class="loginName">
          <label for="name">姓名</label>
          <input type="text" id="name">
        </div>
        <div class="loginGender">
          <label for="gender">性別</label>
          <select>
            <option value="">男</option>
            <option value="">女</option>
          </select>
        </div>
        <div class="loginBir">
          <label for="bir">生日</label>
          <input type="date" id="bir">
        </div>
        <div class="loginTel">
          <label for="tel">電話</label>
          <input type="text" id="tel">
        </div>
        <div class="loginEmail">
          <label for="email">信箱</label>
          <input type="text" id="email">
        </div>
        <div class="loginPwd">
          <label for="pwd">密碼</label>
          <input type="password" id="pwd" v-model="userPwd">
        </div>
        <div class="loginCheck">
          <label for="check">再次輸入</label>
          <input type="text" id="check">
        </div>
        <button>註冊</button>
      </form>

    </div>
  </div>
</template>


<script>

export default {
  data() {
    return {
      userId: '',
      userPwd: '',
      userIdTrue: 'qaq@gmail.com',
      userPwdTrue: 111
    }
  },
  methods: {
    login() {
      if (this.userId == this.userIdTrue && this.userPwd == this.userPwdTrue) {
        alert('登入成功')
      }
      else {
        alert('登入失敗')
      }
    }
  },
}
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

    form {
      // border: 1px solid red;
      // width: 80%;
      // margin: auto;
      margin-top: 100px;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: repeat(6, 50px);
      align-items: center;
      justify-items: left;
      gap: 30px;
      padding: 0 50px;
      

      label {
        display: block;
        text-align: left;
        margin-bottom: 10px;
      }

      input {
        // border-radius: 20px;
        border: transparent;
        border-bottom: 1px solid #000;
        width: 100%;
      }

      .loginBir{
        width: 100%;
      }
 

      .loginEmail {
        // border: 1px solid red;
        width: 100%;
        grid-area: 3/1/4/3;
      }

      .loginPwd {
        width: 100%;
        grid-area: 4/1/5/3;
      }

      .loginCheck {
        width: 100%;
        grid-area: 5/1/6/3;
      }

      button {
        width: 100%;
        grid-area: 6/1/7/3;
        border-radius: 20px;
        padding: 5px 20px;
        border: transparent;

      }
    }
  }

  // @media screen and (max-width:414px) {
  //   .loginWrap {
  //     // display: block;
  //     flex-direction: column;

  //     .loginPic {
  //       left: 0;
  //       top: 20px;

  //       // height: 200px;
  //       img {
  //         height: 200px;
  //         width: 100%;
  //       }
  //     }

  //     .loginText {
  //       right: 0;
  //       bottom: 20px;

  //       .loginOther {
  //         margin-top: 50px;

  //         button {
  //           margin: 0 20px;
  //           background-color: transparent;
  //           border: transparent;

  //           span {
  //             display: none;
  //           }
  //         }
  //       }
  //     }
  //   }
}
</style>

