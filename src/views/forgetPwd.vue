
<template>
    <div class="forgetPwdWrap">
        <div class="forgetPwdPic">
            <img src="https://picsum.photos/500/800/?random=1">
        </div>
        <div class="forgetPwdText">
            <h1>忘記密碼</h1>
            <form action="forgetPwdSuccess" class="forgetPwdForm">
                <div class="forgetPwd">
                    <label for="name">姓名</label>
                    <input type="text" id="name">
                </div>
                <button>註冊</button>
                <div class="forgetPwdGender">
                    <label for="gender">性別</label>
                    <select>
                        <option value="">男</option>
                        <option value="">女</option>
                    </select>
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
  
<style lang="scss"></style>
  
  