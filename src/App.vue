<template>
  <input type="checkbox" name="" id="menu-check" />
  <header>
    <div class="header">
      <div class="line"></div>
      <router-link to="/">
        <img src="@/img/logo.png" alt="" />
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
    <div class="icon">
      <router-link to="" class="">
        <i class="fa-solid fa-cart-shopping"></i>
      </router-link>

      <router-link to="" class="">
        <i class="fa-solid fa-user"></i>
      </router-link>
    </div>
    <nav class="navbar">
      <!-- <router-link to="/">Home123</router-link> | -->
      <router-link to="/mrt" class="mrt">捷運推薦</router-link>
      <router-link to="/game" class="game">捷運冒險</router-link>
      <router-link to="/contribute" class="contribute">投稿專欄</router-link>
      <!-- <router-link to="/RegisterView">register</router-link> -->
      <router-link to="/Login" class="login">會員中心</router-link>
      <router-link to="/store" class="store">精選購物</router-link>
      <router-link to="/newView" class="new">最新消息</router-link>
      <router-link to="/about" class="about">關於我們</router-link>
    </nav>
  </header>

  <main>
    <router-view />
    <!-- Main -->
  </main>

  <footer>
    <div class="footerLogo">
      <router-link to="/">
        <img src="@/img/logo.png" alt="" />
      </router-link>
    </div>
    <div class="footerTxt">
      <p>E-mail : daibason@gmail.com</p>
      <p>本網站為緯育CHD103其展示作品，非商業用途。</p>
    </div>

  </footer>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  color: #2c3e50;
}

a {
  text-decoration: none;
  color: #333;
}

// nav {
//   padding: 30px;

//   a {
//     font-weight: bold;
//     color: #2c3e50;
//     text-decoration: none;

//     &.router-link-exact-active {
//       color: map-get($color, $key: success);
//     }
//   }
// }
</style>
