<template>
  <div class="category-sub">
    <category-sub-item v-for="(item,index) in sub" :key="index" :item="item"></category-sub-item>
  </div>
</template>

<script>
  import categorySubItem from "./categorySubItem";
  export default {
    name: "categorySub",
    data() {
      return {
        currentIndex: 0
      }
    },
    props: {
      sub: {
        type: Array,
        default: []
      }
    },
    components: {
      categorySubItem
    }
  }
</script>

<style scoped>
  .category-sub {
    display: flex;
    flex-wrap: wrap;
  }
</style>