<template>
  <div class="tab-control">
      <div v-for="(item,index) in titles"
           class="tab-control-item"
           @click="itemClick(index)"
           :class="{Active: currentIndex === index}">
        <span>{{item}}</span>
      </div>
  </div>
</template>

<script>
  export default {
    name: "tabControl",
    data() {
      return {
        currentIndex: 0
      }
    },
    props: {
      titles: Array
    },
    methods: {
      itemClick(index) {
        this.currentIndex = index
        this.$emit('tabClick',index)
      }
    }
  }
</script>

<style scoped>
  .tab-control {
    display: flex;
    text-align: center;
    font-size: 15px;
    height: 40px;
    line-height: 40px;
    background-color: #fff;
  }
  .tab-control-item {
    flex: 1;
  }
  .tab-control-item span {
    padding: 3px 5px;
  }

  .Active span {
    border-bottom: 3px solid var(--color-high-text);
  }
  .Active {
    color: var(--color-high-text);
  }
</style>