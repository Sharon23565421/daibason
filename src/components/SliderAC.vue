<template>
    <div class="SliderAC">
        <div class="pic">
            <img src="https://steam.oxxostudio.tw/webp/gimp/example/simple-keyer-mask-16.webp" />
        </div>
        <h3>NAME</h3>
        <button>登出</button>
        <nav>
            <ul>
                <li @click="Toacc"><router-link to="">會員資料</router-link></li>
                <li @click="Toart"><router-link to="">投稿文章</router-link></li>
                <li><router-link to="">文章收藏</router-link></li>
                <li><router-link to="">商品收藏</router-link></li>
                <li><router-link to="">訂單查詢</router-link></li>
            </ul>
        </nav>
        <!-- RWD用鍵 -->
        <div class="userback" @click="backAC">
            <span>返回</span>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {

        }
    },
    methods: {
        backAC() {
            // console.log(111)
            document.querySelector('.SliderAC').style.left = '-100%'
        },
        Toacc() {
            document.getElementById('userInfo').style.display = 'block'
            document.getElementById('ArticleInfo').style.display = 'none'
        },
        Toart() {
            // console.log(111)
            document.getElementById('userInfo').style.display = 'none'
            document.getElementById('ArticleInfo').style.display = 'block'
        }
    }
}
</script>
<style></style>