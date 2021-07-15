<template>
  <div v-if="Object.keys(goods).length !== 0" class="detail-base-info">
    <p>{{goods.title}}</p>
    <div class="goods-info">
      <span>{{goods.price}}</span>
      <span>{{goods.oldPrice}}</span>
      <span>{{goods.discountDesc}}</span>
    </div>
    <div class="columns">
      <div v-for="item in goods.columns">{{item}}</div>
    </div>
    <div class="service">
      <span class="service-item" v-for="index in goods.services.length-1">
        <img :src="goods.services[index-1].icon" alt="">
        <span>{{goods.services[index-1].name}}</span>
      </span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "detailBaseInfo",
    props: {
      goods: {}
    }
  }
</script>

<style scoped>
  .detail-base-info {
    padding: 10px 8px;
    color:#333333;
  }
  .goods-info {
    padding: 10px 0;
  }
  .goods-info span:nth-of-type(1) {
    color: var(--color-high-text);
    font-size: 25px;
  }
  .goods-info span:nth-of-type(2) {
    font-size: 10px;
    margin-left: 5px;
    color: #999999;
    text-decoration: line-through;
  }
  .goods-info span:nth-of-type(3) {
    background-color: var(--color-high-text);
    font-size: 10px;
    color: #ffffff;
    padding: 2px 5px;
    border-radius: 8px;
    position: relative;
    top: -8px;
    margin-left: 5px;
  }
  .columns {
    font-size: 13px;
    color: #999999;
    display: flex;
    justify-content: space-between;
    line-height: 30px;
    border-bottom: 1px solid rgba(100,100,100,.1);
  }
  .service {
    display: flex;
    justify-content: space-between;
    font-size: 12px;
    padding: 25px 0;
  }
  .service-item img{
    width: 14px;
    height: 14px;
    position: relative;
    top: 2px;
  }
</style>