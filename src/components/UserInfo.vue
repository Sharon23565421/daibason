<template>
    <div class="userInfo">
        <h1>會員資料</h1>
        <div class="userBtn">
            <button class="ChangAC">
                <i class="fa-solid fa-face-laugh"></i>
                更改基本資料
            </button>
            <button class="ChangAC">
                <i class="fa-solid fa-lock"></i>
                更改帳號/密碼
            </button>
            <button class="ChangAC">
                <i class="fa-solid fa-phone"></i>
                更改手機號碼
            </button>
            <button class="ChangAC">
                <i class="fa-solid fa-envelope"></i>
                更改信箱
            </button>
        </div>
        <div class="userChange">
            <div class="userPic">
                <img src="https://steam.oxxostudio.tw/webp/gimp/example/simple-keyer-mask-16.webp" />
            </div>
            <div class="userTxt">
                <h2>更改基本資料</h2>
                <div class="userName">
                    <label for="">名稱：</label>
                    <input type="text" v-model="username">
                </div>
                <div class="userBir">
                    <label for="">生日：</label>
                    <input type="date" v-model="userbir">
                </div>
                <div class="userSex">
                    <label for="">性別：</label>
                    <select name="" id="" v-model="usersex">
                        <option value="男">男</option>
                        <option value="女">女</option>
                    </select>
                </div>
            </div>
        </div>
        <button class="userSubmit btn_s">送出</button>

    </div>
</template>

<script>
export default {
    data() {
        return {
            username: '',
            userbir: '',
            usersex: '男'
        }
    },
}
</script>

<style lang="scss">
.userInfo {
    border: 1px solid #aaa;
    background-color: #fff;
    border-radius: 20px;
    width: 900px;
    margin-left: 10px;

    h1 {
        text-align: center;
        margin-top: 50px;
    }

    .userBtn {
        // border: 1px solid red;
        margin-top: 50px;
        display: flex;
        padding: 0 50px;

        // text-align: center;
        button {
            height: 100px;
            margin: 0 10px;
            // background-color: #fff;
        }
    }

    .userChange {
        // border: 1px solid red;
        background-color: #eee;
        height: 400px;
        border-radius: $border-radius;
        display: flex;
        // align-items: center;
        margin: 0 50px;
        margin-top: 50px;

        .userPic {

            width: 180px;
            height: 180px;
            margin: auto;
            // margin-top: 10px;

            img {
                width: 100%;
                height: 100%;
                border-radius: 100px;
                vertical-align: top;
                border: 8px solid black;

            }
        }

        .userTxt {
            width: 60%;

            // border: 1px solid red;
            h2 {
                // border: 1px solid red;
                width: 80%;
                margin: auto;
                margin-top: 50px;
                // text-align: center;
            }

            .userName {
                width: 80%;
                margin: auto;
                margin-top: 50px;
                display: flex;
                align-items: center;

                input {
                    width: 80%;
                }
            }

            .userBir {
                width: 80%;
                margin: auto;
                margin-top: 30px;

                input {
                    width: 80%;
                }
            }

            .userSex {
                width: 80%;
                margin: auto;
                margin-top: 30px;
            }
        }
    }

    .userSubmit {
        border: solid #333;
        display: block;
        margin: auto;
        margin-top: -50px;
    }
}
</style>