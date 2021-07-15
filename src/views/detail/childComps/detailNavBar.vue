<template>
  <div class="detail-nav-bar">
    <nav-bar>
      <div slot="left" class="left" @click="backClick">
        <img src="~assets/img/common/back.svg" alt="">
      </div>
      <div slot="center" class="center">
        <div v-for="(item,index) in titles"
             class="title" :class="{isActive: index=== currentIndex}"
             @click="itemClick(index)">{{item}}</div>
      </div>
    </nav-bar>
  </div>
</template>

<script>
  import NavBar from "components/common/navbar/NavBar";
  export default {
    name: "detailNavBar",
    data() {
      return {
        titles: ['商品','参数','评论','推荐'],
        currentIndex: 0
      }
    },
    components: {
      NavBar
    },
    methods: {
      itemClick(index) {
        this.currentIndex = index
        //点击发出事件，让详情页自动跳转到对应标题的内容
        this.$emit('itemClick',index)
      },
      backClick() {
        this.$router.go(-1)
      }
    }
  }
</script>

<style scoped>
  .center {
    display: flex;
  }
  .title {
    flex: 1;
    font-size: 13px;
  }
  .left {
    margin-top: 12px;
  }
  .isActive {
    color: var(--color-high-text);
  }
</style>