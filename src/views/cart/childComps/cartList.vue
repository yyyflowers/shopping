<template>
  <div class="cart-list">
    <scroll class="scroll" ref="scroll">
      <cart-list-item v-for="(item,index) in cartList" :item-info="item" :key="index"></cart-list-item>
    </scroll>
  </div>
</template>

<script>
  import cartListItem from "./cartListItem";
  import Scroll from "components/common/scroll/Scroll";

  import { mapGetters } from 'vuex'

  export default {
    name: "cartList",
    components: {
      cartListItem,
      Scroll
    },
    computed: {
      ...mapGetters(['cartList'])
    },
    activated() {
      this.$refs.scroll.refresh()
    }
  }
</script>

<style scoped>
  .cart-list {
    height: calc(100% - 44px);
  }
  .scroll {
    height: calc(100% - 44px);
    overflow: hidden;
  }
</style>