<template>
  <input type="checkbox" name="" id="menu-check" />
  <header :class="{ '--close': shouldheaderclose }">
    <div class="header">
      <div class="line"></div>
      <router-link to="/">
        <img src="../public/img/logo.png" alt="" />
      </router-link>
      <div class="line"></div>
      <div class="hb">
        <label for="menu-check">
          <span></span>
          <span></span>
          <span></span>
        </label>
      </div>
    </div>
    <nav class="navbar">
      <router-link to="/mrt" class="mrt">捷運推薦</router-link>
      <router-link to="/game" class="game">捷運冒險</router-link>
      <router-link to="/contribute" class="contribute">投稿專欄</router-link>
      <router-link to="/Login" class="login">會員中心</router-link>
      <router-link to="/store" class="store">精選購物</router-link>
      <router-link to="/newView" class="new">最新消息</router-link>
      <router-link to="/about" class="about">關於我們</router-link>
      <router-link to="/cart" class="about">購物車</router-link>
    </nav>
  </header>

  <main>
    <router-view />
    <!-- Main -->
  </main>
  <footer :class="{ '--closeFooter': shouldheaderclose }">
    <div class="footerLogo">
      <router-link to="/">
        <img src="../public/img/logo.png" alt="" />
      </router-link>
    </div>
    <div class="footerTxt">
      <p>E-mail : daibason@gmail.com</p>
      <p>本網站為緯育CHD103期展示作品，非商業用途。</p>
    </div>
  </footer>
  <!-- <router-view v-if="shouldUseAppLayout" /> 根據條件來顯示 App.vue 或自定義佈局 -->
</template>

<script>
export default {
  computed: {
    shouldheaderclose() {
      // 根據路由的 meta.useAppLayout 屬性來決定是否使用 App.vue 佈局
      return this.$route.path === "/";
    },
  },
};
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

.--closeFooter {
  display: none;
}
</style>
