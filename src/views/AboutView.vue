<template>
  <div class="aboutWrapper">
    <h1>關於我們</h1>
    <div class="pageFeature">
      <img src="../../src/assets/images/page_feature.jpg" alt="pageFeature">
    </div>
    <div class="greetingArea" :style="{
      backgroundImage: `url(${background1})`
    }">
      <div class="pic">
        <img src="../../src/assets/images/greeting.jpg" alt="goodMorning">
      </div>
      <article>
        <h2>早安台北</h2>
        <p>

          台北是一個新舊交錯、時尚和復古相互碰撞的城市，<br>
          一早在大稻埕吃著古早味早餐，<br>
          走進百年街坊與新興文創的迪化街，<br>
          午後踏上陽明山享受大自然的美好，<br>
          當捷運由傍晚昏黃，駛進夜裡的霓虹光亮，<br>
          停留在士林夜市，美食的豐富性讓人垂涎三尺，<br>
          在深夜，信義區的酒吧開啟了台北的不夜城，<br>
          晚安，台北。
        </p>
      </article>
    </div>
    <div class="aboutUs" :style="{
      backgroundImage: `url(${background2})`
    }">
      <article>
        <h2>歹霸俗</h2>
        <p>
          是一群從出生、就學、出社會，從來沒有離開過台北的人，<br>
          我們熱愛台北，沒有人能比我們更了解台北，<br>
          而台北的美好不能只有我們知道，<br>
          現在網路上玲瓏滿目的旅遊介紹文章，<br>
          到底哪一個才是正確的資訊、有可靠性的呢?<br>
          不用想了!! 看這裡就對了!!<br>
          我們以台北捷運為出發點，蒐集了每個捷運站更詳細的旅遊資訊，<br>
          以及在地人才知道的景點美食，<br>
          不僅能瀏覽我們推薦的旅遊行程，<br>
          我們也希望各位歹霸俗也能投稿文章，<br>
          分享我們也不知道的台北。<br>
        </p>
      </article>
      <div class="pic">
        <img src="../../src/assets/images/101.jpg" alt="taipei101">
      </div>
    </div>
    <div class="noName greetingArea " :style="{
      backgroundImage: `url(${background3})`
    }">
      <div class="pic">
        <img src="../../src/assets/images/ab3.jpg" alt="goodVight">
      </div>
      <article>
        <h2>Title</h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.<br>
          Odio magni ipsam vel illo ipsum quisquam iste,<br>
          ratione corporis debitis accusantium,<br>x
          animi molestiae nulla quasi architecto culpa eum minus asperiores iusto?
        </p>
      </article>
    </div>
    <div class="swiper">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(path, index) in imagePaths" :key="index" alt="Image">
          <img :src="path" alt="Image" />
        </div>
        <div class="swiper-slide" v-for="(path, index) in imagePaths" :key="index" alt="Image">
          <img :src="path" alt="Image" />
        </div>
        <div class="swiper-slide" v-for="(path, index) in imagePaths" :key="index" alt="Image">
          <img :src="path" alt="Image" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import background1 from '@/assets/images/about_bgc1.svg';
import background2 from '@/assets/images/about_bgc2.svg';
import background3 from '@/assets/images/about_bgc3.svg';
import Swiper from "swiper/bundle";
export default {
  data() {
    return {
      background1,
      background2,
      background3,
      imagePaths: []
    }
  },
  created() {
    this.importImages();
  },
  methods: {
    importImages() {
      const imageContext = require.context('@/assets/images/aboutSlider', false, /\.(png|jpe?g|gif|svg)$/);

      this.imagePaths = imageContext.keys().map(key => imageContext(key));
    }
  },
  mounted() {
    const swiper = new Swiper(".swiper", {
      direction: "horizontal",
      speed: 1000,
      loop: true,
      loopedSlides: 10,
      slidesPerView: 'auto',
      spaceBetween: 10,
      freeMode: true,
      autoplay: {
        delay: 0,
        // disableOnInteraction:false;
        pauseOnMouseEnter: true,
        disableOnInteraction: false,
      },
    });
  },
}
</script>