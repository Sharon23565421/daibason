<template>
  <header-area />

<!-- <div :class="{'body': poke }" > </div> -->

  <main >
    <router-view />
    <!-- Main -->
  </main>

  <footer-area />
</template>



<script>

import HeaderArea from '@/components/Header.vue'
import FooterArea from '@/components/Footer.vue'
export default {
  components: {
    HeaderArea,
    FooterArea,
  },

  computed: {
        // poke() {
        //     // 根據路由的 meta.useAppLayout 屬性來決定是否使用 App.vue 佈局
        //     return this.$route.path === "/MemberPagesBgc";
        // },
    },


}


</script>

<style lang="scss">
#app {
  font-family: Noto Sans TC, "Brown Medium", Avenir, Helvetica, Arial,
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  color: #333;
}
</style>
