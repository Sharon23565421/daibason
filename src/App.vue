<template>
  <header-area />

  <main>
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
