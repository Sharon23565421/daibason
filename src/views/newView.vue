<template>
  <div class="newsWrap">
    <h1>最新消息</h1>
    <div class="newsBanner">

      <div class="swiper">
        <!-- 輪播區塊 -->
        <div class="newsSlider swiper-wrapper">

          <div class="newsCtx swiper-slide" v-for="news in slider">

            <!-- 背景模糊 -->
            <div class="newsBackpic">
              <img :src="news.image" alt="">
            </div>
            <div class="newsBox">
              <div class="newsCtxTxt">
                <div class="newsTag">
                  <span>{{ news.tag }}</span>
                </div>
                <div class="newsDate">
                  {{ news.date }}
                </div>
                <h2>{{ news.title }}</h2>
                <h3>{{ news.title2 }}</h3>
                <button>更多</button>
              </div>

              <div class="newsCtxPic">
                <img :src="news.image" alt="">
              </div>

            </div>
          </div>

        </div>

      </div>

    </div>
  </div>
</template>

<script>
import Swiper from "swiper/bundle";

export default {
  data() {
    return {
      slider: [{
        tag: '活動消息',
        date: '2023-07-04~2024-01-07',
        title: '植感生活',
        title2: '－植物郵票與押花特展',
        image: '../img/newsbackimg.png'
      },
      {
        tag: '活動消息2',
        date: '2023-07-04~2024-01-07',
        title: '植感生活',
        title2: '－植物郵票與押花特展',
        image: '../img/newsbackimg2.png'
      }]
    }
  }, 
  mounted() {
    const swiper = new Swiper(".swiper", {
      // Optional parameters
      direction: "horizontal",
      speed: 3000,
      loop: true,
      slidesPerView: 1,
      spaceBetween: 0,
      // autoplay: {
      //   delay: 0,
      //   pauseOnMouseEnter: true,
      //   disableOnInteraction: false,
      // },
    });
  },
}
</script>
