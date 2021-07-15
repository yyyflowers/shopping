<template>
  <div class="detail-swiper">
   <swiper class="Swiper">
     <swiper-item v-for="item in topImages">
       <img :src="item" alt="">
     </swiper-item>
   </swiper>
  </div>
</template>

<script>
  import {Swiper, SwiperItem} from 'components/common/swiper/index'
  export default {
    name: "detailSwiper",
    props: {
      topImages: Array
    },
    components: {
      Swiper,
      SwiperItem
    }
  }
</script>

<style scoped>
  .Swiper {
    height: 300px;
  }
</style>