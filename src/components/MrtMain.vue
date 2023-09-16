<template>
  <!-- 虛線 -->
  <div class="dottedLineBox">
    <div class="dottedLine"></div>
  </div>
  <!-- 站點板塊 -->
  <div class="mrtWrap" v-for="item in mrt">
    <div class="mrtSta">
      <!-- 站點文字介紹 -->
      <div class="mrtStaTxt">
        <h2>{{ item.title }}</h2>
        <p>
          {{ item.txt }}
        </p>
      </div>
      <!-- 站點圖跟捷運圖 -->
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
    <!-- 美食住宿景點卡片 -->
    <transition name="cardSliFade">
      <div class="mrtCardWrap" v-show="item.isShow">
        <img src="../../public/img/news2.png" alt="" />
        <div class="mrtCard">
          <div class="mrtCardPic">
            <img src="" alt="" />
          </div>
          <div class="mrtCardTxt">
            <h3></h3>
            <div></div>
            <p></p>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 站點迴圈
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
};
</script>
