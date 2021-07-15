<template>
  <div class="cart-bottom-bar">
   <div>
     <check-button class="check-button" :ischecked="setectAll" @click.native="checkClick"></check-button>
     <span>全选</span>
   </div>
    <div>
      <span>合计:￥{{totalprice}}</span>
    </div>
    <div>
      去结算:({{totalCount}})
    </div>
  </div>
</template>

<script>
  import CheckButton from "components/content/checkButton/CheckButton";

  export default {
    name: "cartBottonBar",
    components: {
      CheckButton
    },
    computed: {
      //计算总价格
      totalprice() {
        return this.$store.state.cartList
            .filter(item => { return item.checked})
            .reduce((preValue, item) => {
              return preValue + item.lowPrice * item.count
            },0)
            .toFixed(2)
      },
      // 计算总数量
      totalCount() {
        return this.$store.state.cartList.filter(item => { return item.checked}).length
      },
      //全选状态判断
      setectAll() {
        if (this.$store.state.cartList.length === 0  ) {
          return false
        }
        return !(this.$store.state.cartList.filter(item => !item.checked).length)
      }
    },
    methods: {
      checkClick() {
        console.log(1);
      }
    }
  }
</script>

<style scoped>
  .cart-bottom-bar {
    position: relative;
    bottom: 89px;
    height: 40px;
    line-height: 40px;
    display: flex;
    background-color: #eeeeee;
  }
  .cart-bottom-bar div:nth-of-type(1) {
    display: flex;
    margin-left: 10px;
    align-items: center;
  }
  .cart-bottom-bar .check-button {
    width: 20px;
    height: 20px;
    line-height: 20px;
    margin-right: 10px;
  }
  .cart-bottom-bar div:nth-of-type(2) {
    flex: 1;
    margin-left: 15px;
  }
  .cart-bottom-bar div:nth-of-type(3) {
    width: 90px;
    background-color: red;
    color: #ffffff;
    text-align: center;
  }
</style>