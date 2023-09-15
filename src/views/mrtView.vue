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

  <!-- 虛線 -->
  <div class="dottedLineBox">
    <div class="dottedLine"></div>
  </div>

  <div class="mrtWrap" v-for="item in mrt">
    <div class="mrtSta">
      <div class="mrtStaTxt">
        <h2>{{ item.title }}</h2>
        <p>
          {{ item.txt }}
        </p>
      </div>
      <div class="mrtStaBox">
        <div class="mrtStaMaruBox" @click="item.isShow = !item.isShow">
          <img
            class="mrtStaMaru"
            src="../../public/img/mrt_maru.png"
            alt="mrt_maru"
          />
        </div>
        <div class="mrtStaPicBox">
          <img class="mrtStaPic" :src="item.url" alt="mrt_101" />
        </div>
      </div>
    </div>
    <transition name="cardSliFade">
      <div class="mrtCardWrap" v-show="item.isShow">
        <img src="../../public/img/news2.png" alt="" />
      </div>
    </transition>
  </div>
</template>

<script>
import Swiper from "swiper/bundle";
export default {
  data() {
    return {
      selectColor: ["red", "blue", "green", "orange", "brown", "yellow"],
      showAll: true,
      src: "../../public/img/mrtArrow.jpg",
      mrt: [
        {
          title: "信義安和站",
          txt: "有世界最高建築物的美名長達五年的台北101大樓南山廣場、威秀影城、信義微風、誠品百貨、新光三越高檔餐廳、時尚酒吧與夜店等等，大量的建築群拔地而起疊構出最具未來感、新穎的「都心」風貌。",
          url: require("../../public/img/mrt_101.jpg"),
          isShow: false,
        },
        {
          title: "中山站",
          txt: "曾經是美國人聚集的美式生活圈，後來又成為日本人匯聚的熱鬧街區，裡面散布著一些風格別具的創意小店，內斂卻多元兼蓄，非常適合徒步於巷弄之中，感受難得的悠閒，探索新舊趣味。",
          url: require("../../public/img/mrt_zhongshan.jpg"),
          isShow: false,
        },
        {
          title: "劍潭站",
          txt: "有台北最大的士林夜市來逛夜市的人大都以美食與購物為主，這裡有各式各樣新奇好玩的商品與美食，吸引大批的人潮。這樣特殊的夜市文化，是臺北夜生活不可缺少的一部份。",
          url: require("../../public/img/mrt_Jiantan.jpg"),
          isShow: false,
        },
      ],
    };
  },

  mounted() {
    const swiper = new Swiper(".swiper", {
      direction: "vertical",
      speed: 1000,
      loop: true,
      autoHeight: true,
      loopedSlides: 4,
      slidesPerView: "auto",
      spaceBetween: 0,
      updateOnWindowResize: true,
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
<style>
.dottedLineBox {
  margin-top: 5%;
  .dottedLine {
    background: #e8e7ee;
    /* width: 1200px; */
    height: 6px;
    margin: auto;
  }
}
.mrtWrap {
  .mrtSta {
    background-image: url(../../public/img/mrt_smallarr.png);
    background-repeat: no-repeat;
    background-position: center;
    background-size: 2% 100%;
    max-width: 1200px;
    margin: auto;
    padding: 2% 2% 0 2%;
    display: flex;
    justify-content: center;
    align-items: center;

    .mrtStaTxt {
      width: 34.5%;
    }
    .mrtStaBox {
      width: 48.5%;
      display: flex;
      justify-content: end;
      align-items: center;
      .mrtStaMaruBox {
        width: 20%;
        cursor: pointer;
        .mrtStaMaru {
          width: 100%;
        }
      }
      .mrtStaPicBox {
        width: 70%;
        .mrtStaPic {
          width: 100%;
          border-radius: 50%;
          border: 5px solid #999999;
        }
      }
    }
  }
}

.mrtWrap:nth-of-type(even) {
  .mrtSta {
    flex-direction: row-reverse;

    .mrtStaBox {
      flex-direction: row-reverse;
      justify-content: start;

      .mrtStaMaruBox {
        transform: scaleX(-1);
      }
    }
  }
}
.mrtCardWrap {
  display: flex;
  justify-content: center;
}
.cardSliFade-enter-active,
.cardSliFade-leave-active {
  transition: 0.8s ease;
}

.cardSliFade-enter-from,
.cardSliFade-leave-to {
  transform: translateY(-20%);
  opacity: 0;
}
.cardSliFade-leave-from .cardSliFade-enter-to {
  opacity: 1;
}
</style>
