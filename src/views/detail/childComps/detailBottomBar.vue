<template>
  <div class="detail-bottom-bar">
     <div class="bottom-left">
       <div>
         <i class="icon service"></i>
         <p>客服</p>
       </div>
       <div>
         <i class="icon shop"></i>
         <p>店铺</p>
       </div>
       <div>
         <i class="icon select"></i>
         <p>收藏</p>
       </div>
     </div>
     <div class="bottom-right">
       <div @click="cartClick">加入购物车</div>
       <div>购买</div>
     </div>
  </div>
</template>

<script>
  export default {
    name: "detailBottomBar",
    methods: {
      cartClick() {
        this.$emit('cartClick')
      }
    }
  }
</script>

<style scoped>
  .detail-bottom-bar {
    /*z-index: 9;*/
    height: 58px;
    position: fixed;
    background-color: #fff;
    left: 0;
    right: 0;
    bottom: 0;
    text-align: center;
    display: flex;
    font-size: 13px;
  }
  .bottom-left,.bottom-right {
    flex: 1;
    display: flex;
  }
  .bottom-left div, .bottom-right div {
    flex: 1;
  }
  .bottom-left .icon {
    display: block;
    width: 22px;
    height: 22px;
    margin: 10px auto 3px;
    background: url("~assets/img/detail/detail_bottom.png") 0 0/100%;
  }
  .bottom-left .service {
    background-position:0 -54px;
  }

  .bottom-left .shop {
    background-position:0 -98px;
  }

  .bottom-right {
    line-height: 58px;
  }
  .bottom-right div:nth-of-type(1) {
    background-color: #ffe817;
    color: #333333;
  }
  .bottom-right div:nth-of-type(2) {
    background-color: var(--color-high-text);
    color: #ffffff;
  }
</style>