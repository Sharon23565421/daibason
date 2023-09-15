<template>
  <div class="mrtTitle">
    <h1>捷運推薦</h1>
  </div>

  <section class="mrtLineCheck">
    <div class="mrtPic">
      <div class="pic">
        <img
          src="../../public/img/brown.jpeg"
          alt="brownline"
          class="mrtGrayStyle border-brownline"
        />
      </div>
      <div class="pic">
        <img
          src="../../public/img/yellow.jpeg"
          alt="yellowline"
          class="mrtGrayStyle border-yellowline"
        />
      </div>

      <div class="mrtMainLine">
        <a class="pic border-redline" @click="showTag('red')">
          <img src="../../public/img/red.jpeg" alt="redline" />
        </a>
        <a class="pic border-blueline" @click="showTag('blue')">
          <img src="../../public/img/blue.jpeg" alt="blueline" />
        </a>
        <a class="pic border-greenline" @click="showTag('green')">
          <img src="../../public/img/green.jpeg" alt="greenline" />
        </a>
        <a class="pic border-orangeline" @click="showTag('orange')">
          <img src="../../public/img/orange.jpeg" alt="orangeline" />
        </a>
        <a class="pic border-brownline" @click="showTag('brown')">
          <img src="../../public/img/brown.jpeg" alt="brownline" />
        </a>
        <a class="pic border-yellowline" @click="showTag('yellow')">
          <img src="../../public/img/yellow.jpeg" alt="yellowline" />
        </a>
      </div>
      <div class="pic">
        <img
          src="../../public/img/red.jpeg"
          alt="redline"
          class="mrtGrayStyle border-redline"
        />
      </div>
      <div class="pic">
        <img
          src="../../public/img/blue.jpeg"
          alt="blueline"
          class="mrtGrayStyle border-blueline"
        />
      </div>
    </div>

    <div class="mrtTag">
      <a
        class="title-tag red"
        :class="{ active: selectColor === 'red' }"
        v-show="showAll || selectColor == 'red'"
        >RED</a
      >
      <a
        class="title-tag blue info"
        :class="{ active: selectColor === 'blue' }"
        v-show="showAll || selectColor == 'blue'"
        >BLUE</a
      >
      <a
        class="title-tag green"
        :class="{ active: selectColor === 'green' }"
        v-show="showAll || selectColor == 'green'"
        >GREEN</a
      >
      <a
        class="title-tag orange"
        :class="{ active: selectColor === 'orange' }"
        v-show="showAll || selectColor == 'orange'"
        >ORANGE</a
      >
      <a
        class="title-tag brown"
        :class="{ active: selectColor === 'brown' }"
        v-show="showAll || selectColor == 'brown'"
        >BROWN</a
      >
      <a
        class="title-tag yellow"
        :class="{ active: selectColor === 'yellow' }"
        v-show="showAll || selectColor == 'yellow'"
        >YELLOW</a
      >
    </div>
  </section>

  <div class="mrtBanner">
    <div class="swiper" id="mySwiper">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <img src="../../public/img/greenArrow.jpg" alt="" />
        </div>
        <div class="swiper-slide">
          <img src="../../public/img/purpleArrow.jpg" alt="" />
        </div>
        <div class="swiper-slide">
          <img src="../../public/img/orangeArrow.jpg" alt="" />
        </div>
        <div class="swiper-slide">
          <img src="../../public/img/greenArrow.jpg" alt="" />
        </div>
        <div class="swiper-slide">
          <img src="../../public/img/purpleArrow.jpg" alt="" />
        </div>
        <div class="swiper-slide">
          <img src="../../public/img/orangeArrow.jpg" alt="" />
        </div>
        <div class="swiper-slide">
          <img src="../../public/img/greenArrow.jpg" alt="" />
        </div>
        <div class="swiper-slide">
          <img src="../../public/img/purpleArrow.jpg" alt="" />
        </div>
        <div class="swiper-slide">
          <img src="../../public/img/orangeArrow.jpg" alt="" />
        </div>
        <div class="swiper-slide">
          <img src="../../public/img/greenArrow.jpg" alt="" />
        </div>
        <div class="swiper-slide">
          <img src="../../public/img/purpleArrow.jpg" alt="" />
        </div>
        <div class="swiper-slide">
          <img src="../../public/img/orangeArrow.jpg" alt="" />
        </div>
        <div class="swiper-slide">
          <img src="../../public/img/greenArrow.jpg" alt="" />
        </div>
        <div class="swiper-slide">
          <img src="../../public/img/purpleArrow.jpg" alt="" />
        </div>
        <div class="swiper-slide">
          <img src="../../public/img/orangeArrow.jpg" alt="" />
        </div>
      </div>
    </div>
  </div>

  <div class="mrtBanner">
    <div class="swiper" id="mySwiper">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <img src="../../public/img/greenArrow.jpg" alt="" />
        </div>
        <div class="swiper-slide">
          <img src="../../public/img/purpleArrow.jpg" alt="" />
        </div>
        <div class="swiper-slide">
          <img src="../../public/img/orangeArrow.jpg" alt="" />
        </div>
        <div class="swiper-slide">
          <img src="../../public/img/greenArrow.jpg" alt="" />
        </div>
        <div class="swiper-slide">
          <img src="../../public/img/purpleArrow.jpg" alt="" />
        </div>
        <div class="swiper-slide">
          <img src="../../public/img/orangeArrow.jpg" alt="" />
        </div>
        <div class="swiper-slide">
          <img src="../../public/img/greenArrow.jpg" alt="" />
        </div>
        <div class="swiper-slide">
          <img src="../../public/img/purpleArrow.jpg" alt="" />
        </div>
        <div class="swiper-slide">
          <img src="../../public/img/orangeArrow.jpg" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import { faL } from "@fortawesome/free-solid-svg-icons";
import Swiper from "swiper/bundle";
export default {
  data() {
    return {
      selectColor: ["red", "blue", "green", "orange", "brown", "yellow"],

      showAll: true,

      src: "../../public/img/mrtArrow.jpg",
    };
  },
  mounted() {
    const swiper = new Swiper(".swiper", {
      // Optional parameters
      direction: "vertical",
      speed: 1000,
      loop: true,
      autoHeight: true,
      loopedSlides: 4,
      slidesPerView: "auto",
      spaceBetween: 0,
      updateOnWindowResize: false,
      autoplay: {
        delay: 0,
        pauseOnMouseEnter: false,
        disableOnInteraction: false,
      },
    });
  },
  methods: {
    showTag(color) {
      if (window.innerWidth <= 768) {
        this.selectColor = color;
        this.showAll = false;
      } else {
        this.selectColor = [
          "red",
          "blue",
          "green",
          "orange",
          "brown",
          "yellow",
        ];
        this.showAll = true;
      }
    },
  },
};
</script>
