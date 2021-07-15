<template>
  <div id="cart">
    <nav-bar class="nav-bar"><div slot="center">购物车({{cartLength}})</div></nav-bar>
    <cart-list></cart-list>
    <cart-bottom-bar></cart-bottom-bar>
  </div>
</template>

<script>
  import cartList from "./childComps/cartList";
  import cartBottomBar from "./childComps/cartBottomBar";

  import NavBar from "components/common/navbar/NavBar";

  import {mapGetters} from 'vuex'
  export default {
    name: "Cart",
    components: {
      cartList,
      cartBottomBar,
      NavBar,
    },
    computed: {
      ... mapGetters(['cartLength'])
    }
  }
</script>

<style scoped>
  #cart {
    height: 100vh;
  }
  .nav-bar {
    background-color: var(--color-tint);
    color: #ffffff;
  }

</style>