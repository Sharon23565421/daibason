<template>
  <div class="storeWrap">
   <div class="storeSearch">捷運線
    <select class="storeSearchMrt" name="" id="">
      <option value=""></option>
      <option value=""></option>
      <option value=""></option>
    </select>
    捷運站
    <select class="storeSearchSta" name="" id="">
      <option value=""></option>
      <option value=""></option>
      <option value=""></option>
    </select>
    特色分類
    <select class="storeSearchSp" name="" id="">
      <option value=""></option>
      <option value=""></option>
      <option value=""></option>
    </select>
    <button class="storeSearchBt">搜尋</button>
   </div>
   <div class="storecardbox">
      <!-- <div v-for="(item) in testitem" :key="item.id" class="storeCard"> -->
      <div v-for="(item) in 30"  class="storeCard">
        <img class="storeCardimg" src="https://s.yimg.com/ny/api/res/1.2/47Kriq370oo5npvk5nr.6Q--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTY0MA--/https://media.zenfs.com/en/ftvn.com.tw/5ada7e3c01073aac8a607bfa5aaecd3b" alt="">
        <div class="storeCardText">
          <p class="CardDes">{{ testitem.pord_bdes }}敘述</p>
          <p class="CardPri">{{ testitem.sta_name }}價格</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      testitem:[
        {
          pord_id:"商品編號",
          pord_name:"商品名稱",
          pord_bdes:"商品簡述",
          pord_price:"商品價格",
          mrt_name:"捷運線名稱",
          sta_name:"捷運站名稱",
          prod_img1:"https://s.yimg.com/ny/api/res/1.2/47Kriq370oo5npvk5nr.6Q--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTY0MA--/https://media.zenfs.com/en/ftvn.com.tw/5ada7e3c01073aac8a607bfa5aaecd3b",
          prod_img2:"",
          prod_img3:"",
          prod_img4:"",

        }
      ]
    };
  },
  methods: {
  },
};
</script>

<style lang="scss">
.storeWrap{
  max-width: 1200px;
  width: 60%;
  margin: auto;
  .storeSearch{
    width: 100%;
    background-color: rgb(30, 186, 210);
    height: 20vh;
    border-radius: $border-radius;
    display: flex;
    margin: auto;
    justify-content: center;
    align-items: center;
    font-size: map-get($map: $fontsizes, $key: h2);
    .storeSearchMrt{
      height: 5vh;
      width: 10%;
      padding: 15px;
      border-radius: $border-radius;
      margin-right: 20px;
    }
    .storeSearchSta{
      height: 5vh;
      width: 10%;
      padding: 15px;
      border-radius: $border-radius;
      margin-right: 20px;
    }
    .storeSearchSp{
      height: 5vh;
      width: 10%;
      padding: 15px;
      border-radius: $border-radius;
      margin-right: 20px;
    }
    .storeSearchBt{
      font-size: map-get($map: $fontsizes, $key: h3);
      border-radius: $border-radius;
    }
  }
  .storecardbox{
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    .storeCard{
      width: 24%;
      box-sizing: border-box;
      // border-radius: $border-radius;
      overflow: hidden;
      padding: 10px 5px;
      margin: auto;
      .storeCardimg{
        width: 100%;
      }
      .storeCardText{
        width: 100%;
        .CardDes{
          text-align: right;
          margin: 10px ;
        }
        .CardPri{
          margin: 10px ;
        }
      }
    }
  }
}

@media screen and (max-width: 414px) {
}
</style>