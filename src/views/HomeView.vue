<template>
  <div class="container">
    <nav class="homeNav">
      <ul>
        <li>
          <div class="pic">
            <img src="https://picsum.photos/300/700/?random=1" alt="" />
          </div>
          <router-link to="/mrt" class="mrt">
            <p>捷運推薦</p>
          </router-link>
        </li>
        <li>
          <div class="pic">
            <img src="https://picsum.photos/300/700/?random=1" alt="" />
          </div>
          <router-link to="/game" class="game">
            <p>捷運冒險</p>
          </router-link>
        </li>
        <li>
          <div class="pic">
            <img src="https://picsum.photos/300/700/?random=1" alt="" />
          </div>
          <router-link to="/contribute" class="contribute">
            <p>投稿專欄</p>
          </router-link>
        </li>
        <li>
          <div class="pic">
            <img src="https://picsum.photos/300/700/?random=1" alt="" />
          </div>
          <router-link to="/Login" class="login">
            <p>會員中心</p>
          </router-link>
        </li>
        <li>
          <div class="pic">
            <img src="https://picsum.photos/300/700/?random=1" alt="" />
          </div>
          <router-link to="/store" class="store">
            <p>精選購物</p>
          </router-link>
        </li>
        <li>
          <div class="pic">
            <img src="https://picsum.photos/300/700/?random=1" alt="" />
          </div>
          <router-link to="/newView" class="new">
            <p>最新消息</p>
          </router-link>
        </li>
        <li>
          <div class="pic">
            <img src="https://picsum.photos/300/700/?random=1" alt="" />
          </div>
          <router-link to="/about" class="about">
            <p>關於我們</p>
          </router-link>
        </li>
      </ul>
    </nav>

    <div class="homeBanner">
      <div class="swiper">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <img src="https://picsum.photos/200/300/?random=1" alt="" />
          </div>
          <div class="swiper-slide">
            <img src="https://picsum.photos/200/300/?random=1" alt="" />
          </div>
          <div class="swiper-slide">
            <img src="https://picsum.photos/200/300/?random=1" alt="" />
          </div>
          <div class="swiper-slide">
            <img src="https://picsum.photos/200/300/?random=2" alt="" />
          </div>
          <div class="swiper-slide">
            <img src="https://picsum.photos/200/300/?random=2" alt="" />
          </div>
          <div class="swiper-slide">
            <img src="https://picsum.photos/200/300/?random=2" alt="" />
          </div>
        </div>
      </div>
      <div class="logo">
        <img src="@/img/logo.png" alt="logo" />
      </div>
      <div class="swiper">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <img src="https://picsum.photos/200/300/?random=1" alt="" />
          </div>
          <div class="swiper-slide">
            <img src="https://picsum.photos/200/300/?random=1" alt="" />
          </div>
          <div class="swiper-slide">
            <img src="https://picsum.photos/200/300/?random=1" alt="" />
          </div>
          <div class="swiper-slide">
            <img src="https://picsum.photos/200/300/?random=2" alt="" />
          </div>
          <div class="swiper-slide">
            <img src="https://picsum.photos/200/300/?random=2" alt="" />
          </div>
          <div class="swiper-slide">
            <img src="https://picsum.photos/200/300/?random=2" alt="" />
          </div>
        </div>
      </div>
    </div>

    <!-- 元件展示 -->

    <div class="ChangAC">
      <i class="fa-solid fa-lock"></i>
      <p>更改帳號/密碼</p>
    </div>

    <div class="SliderAC">
      <div class="pic">
        <img src="https://steam.oxxostudio.tw/webp/gimp/example/simple-keyer-mask-16.webp" />
      </div>
      <h3>NAME</h3>
      <button>登出</button>
      <nav>
        <ul>
          <li><a href="">會員資料</a></li>
          <li><a href="">投稿文章</a></li>
          <li><a href="">文章收藏</a></li>
          <li><a href="">商品收藏</a></li>
          <li><a href="">訂單查詢</a></li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container {
  height: 100vh;
  overflow: hidden;
}
</style>

<script>
import Swiper from "swiper/bundle";
export default {
  mounted() {
    const swiper = new Swiper(".swiper", {
      // Optional parameters
      direction: "horizontal",
      speed: 2000,
      loop: true,
      slidesPerView: 3,
      spaceBetween: 30,
      autoplay: {
        delay: 0,
        pauseOnMouseEnter: true,
        disableOnInteraction: false,
      },
    });

  },
};







</script>
