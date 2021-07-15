<template>
  <div class="cart-list-item">
    <div class="cart-left">
      <check-button class="check-button" @click.native="checkClick" :ischecked="ItemInfo.checked"></check-button>
      <img :src="ItemInfo.topImages" alt="">
    </div>
    <div class="cart-right">
      <p>{{ItemInfo.title}}</p>
      <p>{{ItemInfo.desc}}</p>
      <div class="cart-price">
        <span>￥:{{ItemInfo.lowPrice}}</span>
        <span>x{{ItemInfo.count}}</span>
      </div>
    </div>

  </div>
</template>

<script>
  import CheckButton from "components/content/checkButton/CheckButton";
  export default {
    name: "cartListItem",
    props: {
      ItemInfo: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    components: {
      CheckButton
    },
    methods: {
      checkClick() {
        this.ItemInfo.checked = !this.ItemInfo.checked
      }
    }
  }
</script>

<style scoped>
  .cart-list-item {
    width: 100%;
    padding: 8px 8px;
    display: flex;
    border-bottom: 1px solid #ccc;
  }
  .cart-left {
    display: flex;
  }
  .cart-left .check-button {
    position: relative;
    top: 45px;
  }
  .cart-left img {
   width: 90px;
   height: 110px;
   border-radius: 4px;
    margin-left: 5px;
  }
  .cart-right {
    margin: 0 10px;
    overflow: hidden;
  }
  .cart-right p {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    padding-bottom: 20px;
    font-size: 12px;
  }
  .cart-right p:nth-of-type(1) {
    font-size: 17px;
    color: #333333;
  }
  .cart-price {
    display: flex;
    justify-content: space-between;
    margin-top: 15px;
    font-size: 17px;
  }
  .cart-price span:nth-of-type(1) {
    color: orangered;
  }
</style>