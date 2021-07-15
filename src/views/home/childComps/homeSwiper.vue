<template>
  <div class="home-swiper">
    <swiper>
      <swiper-item v-for="item in banners">
        <a :href="item.link">
          <img :src="item.image" alt="" @load="SwiperImgLoad">
        </a>
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
  import {Swiper, SwiperItem} from 'components/common/swiper/index'
  export default {
    name: "homeSwiper",
    data() {
      return {
        isload: false
      }
    },
    props: {
      banners: {
        type: Array,
        default: []
      }
    },
    components: {
      Swiper,
      SwiperItem
    },
    methods: {
      SwiperImgLoad() {
        if (!this.isload) {
          this.$emit('SwiperImgLoad')
          this.isload = true
        }
      },
    }
  }
</script>

<style scoped>

</style>