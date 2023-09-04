<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
  <button class="btn_l">text</button>
  <br />
  <button class="btn_m">text</button>
  <br />
  <button class="btn_s">text</button>
  <br />
  <button class="btn_br0_red">text</button>
  <br />
  <button class="btn_br0_yellow">text</button>
  <br />
  <button class="btn_br0_orange">text</button>
  <span class="title-tag">#所有文章</span>
  <br />
  <div class="card">
    <div class="img">
      <img src="https://picsum.photos/200/280/?random=10" />
    </div>
    <div class="text">
      <div class="title">
        <h4>五分埔商圈購物</h4>
        <p class="s_text">台北成衣街｜衣服、飾品、配件、包包、帽子批發</p>
        <p class="s_text time">2020-06-15</p>
      </div>
      <div class="txt"></div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "HomeView",
  components: {
    HelloWorld,
  },
};
</script>
