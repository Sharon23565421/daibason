<template>
  <header>
    <button class="logo">
      <img src="./assets/logo.png" alt="" />
    </button>

    <nav>
      <router-link to="/">Home123</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/Login">Login</router-link> |
      <router-link to="/store">store</router-link>
    </nav>
    <!-- <button>漢堡</button> -->
  </header>
  <main>
    <router-view />
  </main>

  <footer>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, eos!
  </footer>
</template>

<style lang="scss">
header {
  display: flex;
  position: fixed;
  top: 0;
  left: 0;

  .logo {
    background: none;
    border: none;
    width: 50px;

    img {
      width: 100%;
    }
  }
  nav {
    margin: auto;
  }
}

main {
  margin-top: 20%;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #4ade80;
    }
  }
}
</style>
