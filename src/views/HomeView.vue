<template>
  <div class="container">
    <nav class="homeNav">
      <ul>
        <li>
          <div class="pic">
            <img src="https://picsum.photos/300/700/?random=1" alt="" />
          </div>
          <router-link to="/mrt" class="mrt"> 捷運推薦 </router-link>
        </li>
        <li>
          <div class="pic">
            <img src="https://picsum.photos/300/700/?random=1" alt="" />
          </div>
          <router-link to="/game" class="game"> 捷運冒險 </router-link>
        </li>
        <li>
          <div class="pic">
            <img src="https://picsum.photos/300/700/?random=1" alt="" />
          </div>
          <router-link to="/contribute" class="contribute">
            投稿專欄
          </router-link>
        </li>
        <li>
          <div class="pic">
            <img src="https://picsum.photos/300/700/?random=1" alt="" />
          </div>
          <router-link to="/Login" class="login"> 會員中心 </router-link>
        </li>
        <li>
          <div class="pic">
            <img src="https://picsum.photos/300/700/?random=1" alt="" />
          </div>
          <router-link to="/store" class="store"> 精選購物 </router-link>
        </li>
        <li>
          <div class="pic">
            <img src="https://picsum.photos/300/700/?random=1" alt="" />
          </div>
          <router-link to="/newView" class="new"> 最新消息 </router-link>
        </li>
        <li>
          <div class="pic">
            <img src="https://picsum.photos/300/700/?random=1" alt="" />
          </div>
          <router-link to="/about" class="about"> 關於我們 </router-link>
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
        <img src="../../public/img/logo.png" alt="logo" />
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

window.addEventListener("load", function () {
  // 获取当前视口宽度和高度
  const viewportWidth = window.innerWidth;
  const viewportHeight = window.innerHeight;
  console.log(viewportWidth);

  // 根据需要进行调整页面元素的大小和布局
});
</script>
