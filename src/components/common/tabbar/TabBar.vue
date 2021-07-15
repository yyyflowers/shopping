<template>
  <div class="tab-bar">
   <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "TabBar",
    components: {
    }
  }
</script>

<style scoped>
 .tab-bar {
   height: 49px;
   position: fixed;
   bottom: 0;
   right: 0;
   left: 0;
   background-color: #f6f6f6;
   box-shadow: 0 -1px 1px rgba(150,150,150,.08);
   display: flex;
   text-align: center;
 }
</style>