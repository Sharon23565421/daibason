<template>
  <div class="ShopWrap">
    <div class="ShopSpeedBox">
      <div class="SpeedNo">
      <span class="SpeedNoF">1</span>
      <span>2</span>
      <span>3</span>
      </div>
      <div class="SpeedText">
      <div>購物車</div>
      <div>付款運送</div>
      <div>訂單完成</div>
    </div>
    </div>
    <div class="ShopProBOX">
      <div class="ShopProTitle" @click="toggleCardBox">合計:NT:2300</div>
      <transition name="fade">
      <div v-if="showCardBox"  class="ShopProCardBox">
        <div class="ShopProCardTitle">
          <div>商品資料</div>
          <div>單價</div>
          <div>數量</div>
          <div>小計</div>
        </div>
        <div v-for="card in 3" class="ShopProCardDetail">
          <div class="CardDetailImg">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlsDygW5l6-urgSirZ28w1yJgNOy7sF4VJqQ&usqp=CAU" alt="">
          </div>
          <div class="CardDetailTitle">吃的蛋糕</div>
          <div class="CardDetailPrice">NT$320</div>
          <div class="CardDetailCount">
            <p>{{ 1 }}</p>
          </div>
          <div class="CardDetailTotal">NT$320</div>
          <div class="CardDetailDelet"></div>
        </div>
      </div>
    </transition>
    </div>
    <div class="ShopBtmBox">
      <div class="ShopBtnBack" @click="gotoCart">上一頁</div>
      <div class="ShopBtnBackNex" @click="gotoShoppingDone">訂單確認</div>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      showCardBox: false, // 初始状态为隐藏
    };
  },
  methods: {
    toggleCardBox() {
      this.showCardBox = !this.showCardBox; // 切换状态
    },
    gotoCart(){
      this.$router.push("/Cart"); 
    },
    gotoShoppingDone(){
      this.$router.push("/ShoppingDone"); 
    },
  },
};
</script>



<style lang="scss">
.fade-enter-active, .fade-leave-active {
  transition: max-height 1s ease-in-out, opacity 1s ease-in-out;
}
.fade-enter, .fade-leave-to  {
  max-height: 0;
  opacity: 0;
  overflow-y: hidden;
}
.ShopWrap{
  position: relative;
  max-width: 1200px;
  padding: 2.5rem 1.5rem;
  margin: auto;
  width: 100%;
  .ShopSpeedBox{
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    .SpeedNo{
      position: relative;
      width: 100%;
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      span{
        display: flex;
        align-items: center;
        justify-content: center;
        font-size:map-get($map: $fontsizes, $key: h3);
        text-align: center;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background-color: gray;
      }
    }
    .SpeedText{
      position: relative;
      width: 100%;
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      margin: auto;
      div{
        padding: 30px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size:map-get($map: $fontsizes, $key: h3);
        text-align: center;
      }
    }
    

  }
  .ShopProBOX{
    position: relative;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    background-color: rgb(234, 233, 233);
    width: 100%;
    .ShopProTitle{
      position: relative;
      padding: 30px;
      font-size:map-get($map: $fontsizes, $key: h3);
      text-align: center;
      &::after{
        content: ">";
        width: 30px;
        height: 30px;
        position: absolute;
        transform: rotate(90deg);
        font-weight:bold;
        font-size:map-get($map: $fontsizes, $key: h2);
        cursor: pointer;
      }
    }
    .ShopProCardBox{
      display: flex;
      flex-wrap: wrap;
      width: 100%;
      font-size:map-get($map: $fontsizes, $key: h4);
      background-color: white;
      border-bottom: 1px solid gray;
      margin: auto;
      .ShopProCardTitle{
        width: 100%;
        display: flex;
        margin: auto;
        align-items: center;
        text-align: center;
        justify-content: center;
        padding: 10px 0;
        div{
          width: 16%;
        }
      }
      .ShopProCardDetail{
        box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
        width: 100%;
        display: flex;
        margin: auto;
        align-items: center;
        text-align: center;
        justify-content: center;
        padding: 10px 0;
        div{
          width: 16%;
        }
        .CardDetailImg{
          img{
            width: 100%;
            height:150px;
          }
        }
        .CardDetailTitle{}
        .CardDetailPrice{}
        .CardDetailCount{
          display: flex;
          margin: 0;
          align-items: center;
          justify-content: center;
        }
        .CardDetailTotal{}
      }
    }

  }
  .ShopBtmBox{
    width: 100%;
    display: flex;
    justify-content: right;
    align-items: end;
    padding: 20px;
    .ShopBtnBack{
      text-align: center;
      cursor: pointer;
      border: 1px solid red;
      border-radius: $border-radius;
      font-size:map-get($map: $fontsizes, $key: h3);
      padding: 10px 40px;
    }
    .ShopBtnBackNex{
      margin-left: 10px;
      text-align: center;
      cursor: pointer;
      background-color: rgb(236, 85, 112);
      border: 1px solid red;
      border-radius: $border-radius;
      font-size:map-get($map: $fontsizes, $key: h3);
      padding: 10px 40px;
    }
  }
}
</style>
