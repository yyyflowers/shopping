<template>
  <div class="category-menu">
    <scroll class="scroll">
      <ul>
        <li v-for="(item,index) in menu"
            :key="index" class="title"
            :class="{isActive: currentIndex === index}" @click="titleClick(index)">{{item.title}}</li>
      </ul>
    </scroll>
  </div>
</template>

<script>
  import Scroll from "components/common/scroll/Scroll";
  export default {
    name: "categoryMenu",
    data() {
      return {
        currentIndex: 0,
      }
    },
    props: {
      menu: {
        type: Array,
        default: []
      }
    },
    components: {
      Scroll
    },
    methods: {
      titleClick(index) {
        this.currentIndex = index
        const obj = {
          index,
          maitKey: this.menu[index].maitKey
        }
        this.$emit('menuClick',obj)
      }
    },
  }
</script>

<style scoped>
  .category-menu {
    height: calc(100% - 44px - 49px);
    width: 90px;
  }
 .scroll {
   width: 90px;
   height:100%;
   background-color: #f6f6f6;
   overflow: hidden;
 }
  .title {
    height: 45px;
    line-height: 45px;
    text-align: center;
    font-size: 13px;
  }
  .isActive {
    color: #ff5777;
    border-left: 3px solid #ff5777;
    background-color: #ffffff;
  }

</style>