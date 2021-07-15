<template>
  <div class="detail-shop-info">
    <div class="shop-top">
      <img :src="shopInfo.shopLogo" alt="">
      <span>{{shopInfo.name}}</span>
    </div>
    <div class="shop-middle">
      <div class="shop-middle-item middle-left">
        <div>
          <div class="count">{{shopInfo.cSells | sellCountFilter}}</div>
          <div class="text">总销量</div>
        </div>
        <div>
          <div class="count">{{shopInfo.cGoods}}</div>
          <div class="text">全部宝贝</div>
        </div>
      </div>
      <div class="shop-middle-item middle-right">
        <table>
          <tr v-for="(item, index) in shopInfo.score" :key="index">
            <td>{{item.name}}</td>
            <td class="score" :class="{'core-betters': item.isBetter}">{{item.score}}</td>
            <td class="better" :class="{'better-more': item.isBetter}"><span>{{item.isBetter ? '高':'低'}}</span></td>
          </tr>
        </table>
      </div>
    </div>
    <div class="shop-bottom">
      <div>进店逛逛</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "detailShopInfo",
    props: {
      shopInfo: Object
    },
    filters: {
      sellCountFilter: function (value) {
        if (value < 10000) return value;
        return (value/10000).toFixed(1) + '万'
      }
    }
  }
</script>

<style scoped>
  .detail-shop-info {
    border-top: 5px solid #f2f5f8;
    border-bottom: 5px solid #f2f5f8;
  }
  .shop-top {
   margin-top: 20px;
  }
  .shop-top  img {
    width: 45px;
    height: 45px;
    border-radius: 50%;
    border: 1px solid rgba(0,0,0,.1);
    margin-left: 5px;
  }
  .shop-top  span {
    position: relative;
    top: -15px;
    margin-left: 10px;
  }
  .shop-middle {
    margin-top: 15px;
    display: flex;
    align-items: center;
  }
  .shop-middle-item {
    flex: 1;
  }
  .middle-left {
    display: flex;
    justify-content: space-evenly;
    color: #333;
    text-align: center;
    border-right: 1px solid rgba(0,0,0,.1);
  }
  .middle-left .count {
    font-size: 18px;
    color: #333333;
  }
  .middle-left .text {
    font-size: 12px;
    margin-top: 10px;
  }
  .middle-right {
    font-size: 13px;
    color: #333;
  }

  .middle-right  table {
    width: 120px;
    margin-left: 30px;
  }

  .middle-right  table td {
    padding: 5px 0;
  }

  .shop-middle-right .score {
    color: #5ea732;
  }

  .middle-right .score-better {
    color: #f13e3a;
  }

  .middle-right .better span {
    background-color: #5ea732;
    color: #fff;
    text-align: center;
  }

  .middle-right .better-more span {
    background-color: #f13e3a;
  }
  .shop-bottom {
    text-align: center;
    margin-top: 10px;
    margin-bottom: 30px;
  }
  .shop-bottom div{
    display: inline-block;
    width: 150px;
    height: 30px;
    border-radius: 10px;

    line-height: 30px;
    font-size: 14px;
    text-align: center;
    background-color: #f2f5f8;
  }
</style>