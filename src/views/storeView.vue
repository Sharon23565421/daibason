<template>
  <div class="storeWrap">
    <div class="storeTitle">精選購物</div>
    <div class="storeSearch">
      <div class="storeSearchMrt" >
        <span>捷運線選擇</span>
        <i class="fa-solid fa-play fa-rotate-90"></i>
        <ul class="SearchMrtBox"  >
          <li v-for="(i) in 5">選項1</li>
        </ul>
      </div>
      捷運站:
    <select class="storeSearchSta" name="" id="">
      <option value=""></option>
      <option value=""></option>
      <option value=""></option>
    </select>
    特色分類:
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
          <p class="CardPri">{{ testitem.sta_name }}NT.12345</p>
        </div>
        <div class="storeButton">
          <i class="fa-solid fa-heart"></i>
          <button class="getStoreBt">加入購物車</button>
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
  .storeTitle{
    font-size: map-get($map: $fontsizes, $key: h1);
    border-bottom: 5px black solid;
    padding-bottom: 15px;
  }
  .storeSearch{
    width: 100%;
    height: 10vh;
    display: flex;
    align-items: center;
    font-size: map-get($map: $fontsizes, $key: h2);
    .storeSearchMrt{
      margin-right: 50px;
      span{
        font-size: map-get($map: $fontsizes, $key: h2);
        margin-right: 20px;
      }
      &:hover .SearchMrtBox{
        display: block;
      }
      .SearchMrtBox{
        display: none;   
        position: absolute;
        background-color: white;
        border: 1px solid #ccc;
        min-width: 200px;
        box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
        li{
          padding: 12px 16px;
          text-decoration: none;
          cursor: pointer;
          &:hover{
            background-color:rgb(108, 108, 108);
            color: #fffcfc;
          }
        }
      }
    }
    .storeSearchSta{
      height: 5vh;
      width: 10%;
      margin-right: 30px;
    }
    .storeSearchSp{
      height: 5vh;
      width: 10%;
      margin-right: 30px;
    }
    .storeSearchBt{
      width: 100px;
      font-size: map-get($map: $fontsizes, $key: h2);
      border-radius: $border-radius;
    }
  }
  .storecardbox{
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    .storeCard{
      display: flex;
      flex-wrap: wrap;
      width: 400px;
      box-sizing: border-box;
      overflow: hidden;
      padding: 10px 30px;
      .storeCardimg{
        width: 100%;
      }
      .storeCardText{
        width: 50%;
        .CardDes{
          font-weight: map-get($fontweight, fw_stitle); 
          font-weight: map-get($fontweight, fw_bold);  
          font-size: map-get($map: $fontsizes, $key: h3);
          margin: 10px ;
        }
        .CardPri{
          font-size: map-get($map: $fontsizes, $key: h4);
          margin: 10px ;
        }
      }
      .storeButton{
        display: flex;
        align-items: end;
        width: 50%;
        font-size: map-get($map: $fontsizes, $key: h3);
        .getStoreBt{
          margin-left: 30px;
          font-size: map-get($map: $fontsizes, $key: h4);
          border-radius: $border-radius;
          width: 100px;
        }
      }
    }
  }
}

@media screen and (max-width: 414px) {
}
</style>