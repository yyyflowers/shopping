<template>
  <div class="tab-bar-item" @click="tabClick">
    <div v-if="!isActive"><slot name="image"></slot></div>
    <div v-else><slot name="image_active"></slot></div>
    <div :style="activeStyle"><slot name="text"></slot></div>
  </div>
</template>

<script>
  export default {
    name: "TabBarItem",
    data() {
      return {
      }
    },
    props: {
      path: String,
      activeColor: {
        type: String,
        default: '#ff5777'
      }
    },
    methods: {
      tabClick() {
        this.$router.replace(this.path)
      }
    },
    computed: {
     isActive() {
       return this.$route.path.indexOf(this.path) !== -1
     },
      activeStyle() {
       return this.isActive ? {color: this.activeColor} : {}
      }
    }
  }
</script>

<style scoped>
  .tab-bar-item {
    flex: 1;
  }
 .tab-bar-item img {
   height: 24px;
   width: 24px;
  }
</style>