<template>
  <nav class="homeNav">
    <ul>
      <li>
        <div class="pic">
          <img src="https://picsum.photos/300/700/?random=1" alt="">
        </div>
        <router-link to="/mrt" class="mrt">
          <p>捷運推薦</p>
        </router-link>
      </li>
      <li>
        <div class="pic">
          <img src="https://picsum.photos/300/700/?random=1" alt="">
        </div>
        <router-link to="/game" class="game">
          <p>捷運冒險</p>
        </router-link>
      </li>
      <li>
        <div class="pic">
          <img src="https://picsum.photos/300/700/?random=1" alt="">
        </div>
        <router-link to="/contribute" class="contribute">
          <p>投稿專欄</p>
        </router-link>
      </li>
      <li>
        <div class="pic">
          <img src="https://picsum.photos/300/700/?random=1" alt="">
        </div>
        <router-link to="/Login" class="login">
          <p>會員中心</p>
        </router-link>
      </li>
      <li>
        <div class="pic">
          <img src="https://picsum.photos/300/700/?random=1" alt="">
        </div>
        <router-link to="/store" class="store">
          <p>精選購物</p>
        </router-link>
      </li>
      <li>
        <div class="pic">
          <img src="https://picsum.photos/300/700/?random=1" alt="">
        </div>
        <router-link to="/newView" class="new">
          <p>最新消息</p>
        </router-link>
      </li>
      <li>
        <div class="pic">
          <img src="https://picsum.photos/300/700/?random=1" alt="">
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
          <img src="https://picsum.photos/200/300/?random=1" alt="">
        </div>
        <div class="swiper-slide">
          <img src="https://picsum.photos/200/300/?random=1" alt="">
        </div>
        <div class="swiper-slide">
          <img src="https://picsum.photos/200/300/?random=1" alt="">
        </div>
        <div class="swiper-slide">
          <img src="https://picsum.photos/200/300/?random=2" alt="">
        </div>
        <div class="swiper-slide">
          <img src="https://picsum.photos/200/300/?random=2" alt="">
        </div>
        <div class="swiper-slide">
          <img src="https://picsum.photos/200/300/?random=2" alt="">
        </div>
      </div>
    </div>
    <div class="logo">
      <img src="@/img/logo.png" alt="logo">
    </div>
    <div class="swiper">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <img src="https://picsum.photos/200/300/?random=1" alt="">
        </div>
        <div class="swiper-slide">
          <img src="https://picsum.photos/200/300/?random=1" alt="">
        </div>
        <div class="swiper-slide">
          <img src="https://picsum.photos/200/300/?random=1" alt="">
        </div>
        <div class="swiper-slide">
          <img src="https://picsum.photos/200/300/?random=2" alt="">
        </div>
        <div class="swiper-slide">
          <img src="https://picsum.photos/200/300/?random=2" alt="">
        </div>
        <div class="swiper-slide">
          <img src="https://picsum.photos/200/300/?random=2" alt="">
        </div>
      </div>
    </div>
  </div>



  <!-- 元件展示 -->
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
  <div class="card-w">
    <div class="img">
      <img src="https://picsum.photos/200/280/?random=10" />
    </div>
    <div class="text">
      <div class="title">
        <h3>五分埔商圈購物</h3>
        <p>台北成衣街｜衣服、飾品、配件、包包、帽子批發</p>
        <div class="tag">
          <span class="title-tag gray">#景點推薦</span>
          <span class="title-tag blue">#板南線</span>
        </div>
        <span class="s_text time">2020-06-15</span>
      </div>
      <div class="txt">
        　　那天逛完華山KAKAO敗家後，就心血來潮到五分埔去逛逛，真的是久違了好多年，以前學生時期過年領完紅包，一定都是最期待來到五分埔買衣服！如今後來才知道原來這裡除了一般民眾、觀光客買購物衣服的地方以外，原來也有成衣批發商圈，那天去晃晃除了衣服之外，還有包包、飾品、鞋子等等。
      </div>
      <img src="https://picsum.photos/80/80/?random=10" class="head" />
    </div>
  </div>

  <div class="test">
    <div class="card-h border-r">
      <div class="img">
        <img src="https://picsum.photos/280/200/?random=10" />
        <img src="https://picsum.photos/80/80/?random=10" class="head" />
      </div>
      <div class="text">
        <div class="title">
          <h3>原來京站樓上長這樣？</h3>
          <p>開箱五星級行政豪華客房一泊二食</p>
          <div class="tag">
            <span class="title-tag blue">#板南線</span>
            <span class="title-tag red">#淡水信義線</span>
            <span class="title-tag gray">#住宿推薦</span>
          </div>
        </div>
        <div class="txt">
          　　那天逛完華山KAKAO敗家後，就心血來潮到五分埔去逛逛，真的是久違了好多年，以前學生時期過年領完紅包，一定都是最期待來到五分埔買衣服！如今後來才知道原來這裡除了一般民眾、觀光客買購物衣服的地方以外，原來也有成衣批發商圈，那天去晃晃除了衣服之外，還有包包、飾品、鞋子等等。
        </div>
        <span class="s_text time">2020-06-15</span>

      </div>
    </div>

    <div class="card-h border-r">
      <div class="img">
        <img src="https://picsum.photos/280/200/?random=10" />
        <img src="https://picsum.photos/80/80/?random=10" class="head" />
      </div>
      <div class="text">
        <div class="title">
          <h3>原來京站樓上長這樣？</h3>
          <p>開箱五星級行政豪華客房一泊二食</p>
          <div class="tag">
            <span class="title-tag blue">#板南線</span>
            <span class="title-tag red">#淡水信義線</span>
          </div>
        </div>
        <div class="txt">
          　　那天逛完華山KAKAO敗家後，就心血來潮到五分埔去逛逛，真的是久違了好多年，以前學生時期過年領完紅包，一定都是最期待來到五分埔買衣服！如今後來才知道原來這裡除了一般民眾、觀光客買購物衣服的地方以外，原來也有成衣批發商圈，那天去晃晃除了衣服之外，還有包包、飾品、鞋子等等。
        </div>
        <span class="s_text time">2020-06-15</span>

      </div>
    </div>
  </div>


  <div class="s-card-h">
    <div class="img">
      <img src="https://picsum.photos/280/200/?random=10" />
      <img src="https://picsum.photos/50/50/?random=10" class="head" />
    </div>
    <div class="text">
      <div class="title">
        <h4>五分埔商圈購物</h4>
        <p class="s_text">台北成衣街｜衣服、飾品、配件、包包、帽子批發</p>
        <div class="tag">
          <span class="title-tag gray">#景點推薦</span>
          <span class="title-tag blue">#板南線</span>
        </div>
        <span class="time ss_text">2020-06-15</span>
      </div>
    </div>
  </div>

  <div class="ChangAC">
    <i class="fa-solid fa-lock" style="color: #000000"></i>
    <p>更改帳號/密碼</p>
  </div>

  <div class="ChangAC ChangACHover">
    <i class="fa-solid fa-lock" style="color: #000000"></i>
    <p>更改帳號/密碼</p>
  </div>

  <div class="ChangAC ChangACActive">
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
</template>

<style>
.test {
  display: flex;
}
</style>


<script>
import Swiper from "swiper/bundle";
export default {
  mounted() {
    const swiper = new Swiper('.swiper', {
      // Optional parameters
      direction: 'horizontal',
      speed: 2000,
      loop: true,
      slidesPerView: 3,
      spaceBetween: 30,
      autoplay: {
        delay: 0,
        pauseOnMouseEnter: true,
        disableOnInteraction: false,
      }

    });
  },
}


</script>