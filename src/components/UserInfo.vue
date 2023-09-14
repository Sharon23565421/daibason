<template>
     <div class="userInfo" id="userInfo">

        <h1>會員資料</h1>
            <div class="userBtn">
            <button class="ChangAC" @click="Toacc">
                <i class="fa-solid fa-face-laugh"></i>
                更改基本資料
            </button>
            <button class="ChangAC" @click="Topwd">
                <i class="fa-solid fa-lock"></i>
                更改帳號/密碼
            </button>
            <button class="ChangAC" @click="Tophone">
                <i class="fa-solid fa-phone"></i>
                更改手機號碼
            </button>
            <button class="ChangAC" @click="Tomail">
                <i class="fa-solid fa-envelope"></i>
                更改信箱
            </button>
        </div>
        <!-- <div class="userChange">
            <div class="userPic">
                <img src="https://steam.oxxostudio.tw/webp/gimp/example/simple-keyer-mask-16.webp" />
            </div>
            <div class="userTxt">
                <h2>更改基本資料</h2>
                <div class="userName">
                    <label for="name">名稱：</label>
                    <input type="text" v-model="username" id="name">
                </div>
                <div class="userBir">
                    <label for="Bir">生日：</label>
                    <input type="date" v-model="userbir" id="Bir">
                </div>
                <div class="userSex">
                    <label for="sex">性別：</label>
                    <select name="" id="sex" v-model="usersex">
                        <option value="男">男</option>
                        <option value="女">女</option>
                    </select>
                </div>
            </div>
        </div> -->
        <!-- <button class="userSubmit btn_s">送出</button> -->
    </div>
    <!-- 更改基本資料 -->
    <AccChange id="AccChange"/>
    <!-- 更改帳號密碼 -->
    <PwdChange id="PwdChange" />
    <!-- 更改手機 -->
    <PhoneChange id="PhoneChange" />
    <!-- 更改信箱 -->
    <MailChange id="MailChange" />
</template>

<script>
import AccChange from '@/components/AccChange.vue'
import PwdChange from '@/components/PwdChange.vue'
import PhoneChange from '@/components/PhoneChange.vue'
import MailChange from '@/components/MailChange.vue'
export default {
    components: {
        AccChange,
        PwdChange,
        PhoneChange,
        MailChange
    },
    data() {
        return {
            username: '',
            userbir: '',
            usersex: '男',
            toggle: '會員資料'
        }
    },
    methods: {
        handleToggleChange(newToggleValue) {
            // 在這裡處理新的 toggle 值
            console.log('新的 toggle 值:', newToggleValue);
            console.log(111)
        },
        Toacc(e) {
            // console.log(e.target.innerText)
            // this.toggle = e.target.innerText
            document.querySelector('.userInfo').style.display = 'none'
            document.getElementById('AccChange').style.display = 'block'
        },
        Topwd() {
            // console.log(11)
            document.querySelector('.userInfo').style.display = 'none'
            document.getElementById('PwdChange').style.display = 'block'
        },
        Tophone() {
            document.querySelector('.userInfo').style.display = 'none'
            document.getElementById('PhoneChange').style.display = 'block'

        },
        Tomail() {
            document.querySelector('.userInfo').style.display = 'none'
            document.getElementById('MailChange').style.display = 'block'
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
    // margin-left: 10px;
    // display: none;

    h1 {
        text-align: center;
        margin-top: 100px;
    }

    .userBtn {
        // border: 1px solid red;
        margin-top: 100px;
        // width: 500px;
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        padding: 0 100px;

        // text-align: center;
        button {
            height: 100px;
            margin: 50px;
            // background-color: #fff;
        }
    }

    // .userChange {
    //     // border: 1px solid red;
    //     background-color: #eee;
    //     height: 400px;
    //     border-radius: $border-radius;
    //     display: flex;
    //     // align-items: center;
    //     margin: 0 50px;
    //     margin-top: 50px;

    //     .userPic {

    //         width: 180px;
    //         height: 180px;
    //         margin: auto;
    //         // margin-top: 10px;

    //         img {
    //             width: 100%;
    //             height: 100%;
    //             border-radius: 100px;
    //             vertical-align: top;
    //             border: 8px solid black;

    //         }
    //     }

    //     .userTxt {
    //         width: 60%;

    //         // border: 1px solid red;
    //         h2 {
    //             // border: 1px solid red;
    //             width: 80%;
    //             margin: auto;
    //             margin-top: 50px;
    //             // text-align: center;
    //         }

    //         .userName {
    //             width: 80%;
    //             margin: auto;
    //             margin-top: 50px;
    //             display: flex;
    //             align-items: center;

    //             input {
    //                 width: 80%;
    //             }
    //         }

    //         .userBir {
    //             width: 80%;
    //             margin: auto;
    //             margin-top: 30px;

    //             input {
    //                 width: 80%;
    //             }
    //         }

    //         .userSex {
    //             width: 80%;
    //             margin: auto;
    //             margin-top: 30px;
    //         }
    //     }
    // }

    // .userSubmit {
    //     border: solid #333;
    //     display: block;
    //     margin: auto;
    //     margin-top: -50px;
    // }
}

#AccChange {
    display: none;
}

#PwdChange {
    display: none;
}

#PhoneChange {
    display: none;
}

#MailChange {
    display: none;
}

@media screen and (max-width:414px) {
    .userInfo {
        border: none;
        margin: 0;

        h1 {
            margin: 25px 0;
        }

        .userBtn {
            // display: block;
            flex-direction: column;
            align-items: center;
            margin: 0;
            padding: 0;
            // text-align: center;

            button {
                margin: 10px 0;
            }


        }

        // .userChange {
        //     display: none;
        // }

        // .userSubmit {
        //     display: none;
        // }
    }

}
</style>