<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  export default {
    name: "Scroll",
    data() {
      return {
        scroll: null,
      }
    },
    props: {
      probeType: {
        type: Number,
        default: 0
      },
      pullUpLoad: {
        type: Boolean,
        default: false
      },
    },
    mounted() {
      // 创建better-scroll实例
      this.scroll = new BScroll(this.$refs.wrapper,{
        probeType: this.probeType,
        pullUpLoad: this.pullUpLoad,
        click: true,
      })
          // 监听滚动
      this.scroll.on('scroll',position => {
        this.$emit('scroll',position)
      })
      // 上拉加载
      this.scroll.on('pullingUp',() => {
        this.$emit('pullingUp')
      })
    },
    methods: {
      ScrollTo(x,y,time = 500) {
        this.scroll && this.scroll.scrollTo(x,y,time)
      },
      finishPullUp() {
        this.scroll && this.scroll.finishPullUp()
      },
      refresh() {
       this.scroll && this.scroll.refresh()
      },
      saveY() {
        return this.scroll ? this.scroll.y : 0
      }
    }
  }
</script>

<style scoped>
</style>