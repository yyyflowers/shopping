<template>
  <div class="category-sub-item">
    <a :href="item.link">
      <img :src="item.image" alt="">
    </a>
    <p>{{item.title}}</p>
  </div>
</template>

<script>
  export default {
    name: "categorySubItem",
    props: {
      item: {
        type: Object,
        default: {}
      }
    }
  }
</script>

<style scoped>
  .category-sub-item {
    width: 30%;
    padding: 15px 5px;
    margin-left: 8px;
  }
  .category-sub-item img {
    height: 70px;
    width: 70px;
  }
</style>