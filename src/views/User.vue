<template>
    <!-- 背景色塊 -->
    <div id="col1"></div>
    <div id="col2"></div>
    <div id="col3"></div>
    <div id="row1"></div>
    <div id="row2"></div>
    <div id="row3"></div>
    <!-- <div id="circle"></div> -->
    <div class="userWrap">
        <!-- Rwd返回鍵 -->
        <div class="userHam" @click="sliderAC">
            <span>會員自訂</span>
        </div>
        <!-- 左邊選單 -->
        <SliderAC class="userSlider" />
        <!-- 右邊選單 -->
        <UserInfo />
    </div>
</template>

<script>
import SliderAC from '@/components/SliderAC.vue';
import UserInfo from '@/components/UserInfo.vue';

export default {
    components: {
        SliderAC,
        UserInfo
    },
    data() {
        return {

        }
    },
    computed: {

    },
    methods: {
        sliderAC() {
            // console.log(111)
            document.querySelector('.userSlider').style.left = '0'
        }
    },
    mounted() {
        let app = document.getElementById('app')
        // // alert(window.innerWidth)
        // // console.log(app.clientHeight)
        let col1 = document.getElementById('col1')
        let col2 = document.getElementById('col2')
        let col3 = document.getElementById('col3')
        let row1 = document.getElementById('row1')
        let row2 = document.getElementById('row2')
        let row3 = document.getElementById('row3')
        col1.style.height = `${app.clientHeight}px`
        col2.style.height = `${app.clientHeight}px`
        col3.style.height = `${app.clientHeight}px`
        row1.style.width = `${app.clientWidth}px`
        row2.style.width = `${app.clientWidth}px`
        row3.style.width = `${app.clientWidth}px`
        // window.addEventListener('resize', () => {
        // })

    },
}
</script>

<style>
@media screen and (max-width:414px) {

    #col1,
    #col2,
    #col3,
    #row1,
    #row2,
    #row3,
    #circle {
        display: none;
    }

    .userWrap {
        width: 100%;
        position: relative;

        .userHam {
            /* border: 1px solid red; */
            display: block;
            writing-mode: vertical-lr;
            position: absolute;
            top: 50px;
            left: 10px;
            height: 100px;
            text-align: center;

            &::before {
                content: '';
                position: absolute;
                top: -30px;
                left: -10px;
                width: 15px;
                height: 150%;
                background-image: linear-gradient(#A87B52 5%, #DD4D54 10%, #FFBB33 30%, #FFF04B 45%, #4BC887 70%, #32C8E1 85%, #9164CD);
                /* border: 1px solid red; */
            }
        }

        .userSlider {
            /* display: none; */
            width: 100%;
            position: absolute;
            top: 0;
            left: -100%;
            transition: 1s;
        }
    }
}
</style>