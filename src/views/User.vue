<template>
    <div id="col1"></div>
    <div id="col2"></div>
    <div id="col3"></div>
    <div id="row1"></div>
    <div id="row2"></div>
    <div id="row3"></div>
    <div id="circle"></div>
    <div class="userWrap">
        <SliderAC class="userSlider" />
        <UserInfo class="userInfo" />

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

<style></style>