<template>
  <div class="normal-list-view">
    <div class="item" v-for="(item, index) in listData" :key="index">
      <span class="icon">
        <img :src="iconURL(item)" alt="">
      </span>
      <div class="info">{{item.info}}</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "NormalListView",
    props: {
      listData: {
        type: Array,
        default() {
          return []
        }
      }
    },
    methods: {
      iconURL(item) {
        return require('assets/img/profile/' + item.icon)
      }
    }
  }
</script>

<style scoped>
  .normal-list-view {
    background-color: #fff;
    color: #333333;
    font-size: 15px;
    margin-top: 15px;
  }
  .item {
    height: 44px;
    line-height: 44px;
    position: relative;
  }
  .icon img {
    width: 20px;
    height: 20px;
  }
  .icon {
    position: absolute;
    left: 16px;
    top: -7px;
    margin-top: 10px;
  }
  .info {
    margin-left: 40px;
    border-bottom: 1px solid rgba(100, 100, 100, .1);
    padding-left: 5px;
  }
  .item:last-of-type .info {
    border-bottom: none;
  }
</style>