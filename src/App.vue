<template>
  <header>
    <nav>
      <router-link to="/">Home123</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/store">store</router-link> |
      <router-link to="/Login">Login</router-link> |
      <router-link to="/RegSuccess">RegSuccess</router-link>
    </nav>
  </header>

  <main>
    <router-view />
    <!-- Main -->
  </main>

  <footer>
    Footer
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
    text-decoration: none;

    &.router-link-exact-active {
      color: map-get($color, $key: success);
    }
  }
}
</style>
