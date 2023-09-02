<template>
  <header>
    logo

    <nav>
      <router-link to="/">Home123</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/Login">Login</router-link> |
      <router-link to="/store">store</router-link>
    </nav>
    <!-- <button>漢堡</button> -->
  </header>

  <router-view />

  <footer>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, eos!
  </footer>
</template>

<style lang="scss">
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
