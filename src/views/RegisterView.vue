
<template>
  <div class="registerWrap">
    <div class="registerPic">
      <img src="https://picsum.photos/500/800/?random=1">
    </div>
    <div class="registerText">
      <h1>會員註冊</h1>
      <form action="RegSuccess" class="regForm">
        <div class="registerName">
          <label for="name">姓名</label>
          <input type="text" id="name">
        </div>
        <div class="registerGender">
          <label for="gender">性別</label>
          <select>
            <option value="">男</option>
            <option value="">女</option>
          </select>
        </div>
        <div class="registerBir">
          <label for="bir">生日</label>
          <input type="date" id="bir">
        </div>
        <div class="registerTel">
          <label for="tel">電話</label>
          <input type="text" id="tel">
        </div>
        <div class="registerEmail">
          <label for="email">信箱</label>
          <input type="text" id="email">
        </div>
        <div class="registerPwd">
          <label for="pwd">密碼</label>
          <input type="password" id="pwd" v-model="userPwd">
        </div>
        <div class="registerCheck">
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
    register() {
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
.registerWrap {
  // border: 1px solid red;
  width: 1200px;
  margin: auto;
  display: flex;
  justify-content: center;

  .registerPic {
    border: 1px solid #aaa;
    position: relative;
    left: 50px;
    border-radius: 20px;

    img {
      border-radius: 20px;
      width: 100%;
      vertical-align: bottom;
    }
  }

  .registerText {
    border: 1px solid #aaa;
    border-radius: 20px;
    position: relative;
    right: 50px;
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

    .regForm {
      // border: 1px solid red;
      // width: 80%;
      // margin: auto;
      margin-top: 100px;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: repeat(6, 50px);
      align-items: center;
      justify-items: left;
      gap: 50px;
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

      .registerBir {
        width: 100%;
      }


      .registerEmail {
        // border: 1px solid red;
        width: 100%;
        grid-area: 3/1/4/3;
      }

      .registerPwd {
        width: 100%;
        grid-area: 4/1/5/3;
      }

      .registerCheck {
        width: 100%;
        grid-area: 5/1/6/3;
      }

      button {
        width: 100%;
        grid-area: 6/1/7/3;
        border-radius: 20px;
        padding: 5px 20px;
        border: transparent;
        // background-color: #ddd;

      }
    }
  }
}

@media screen and (max-width:414px) {
  .registerWrap {
    width: 100%;

    .registerPic {
      // border: 1px solid red;
      display: none;
    }

    .registerText {
      right: 0;

      h1 {
        text-align: center;
      }
    }
  }
}
</style>

