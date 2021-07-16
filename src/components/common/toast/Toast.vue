<template>
  <div class="toast" v-show="isshow">
    <div>{{message}}</div>
  </div>
</template>

<script>
  export default {
    name: "Toast",
    data() {
      return {
        message: '',
        isshow: false
      }
    },
    methods: {
      show(message = '添加成功',duration = 2000) {
        this.isshow = true
        this.message = message

        setTimeout(() => {
          this.isshow = false
          this.message = ''
        },duration)
      }
    }
  }
</script>

<style scoped>
 .toast {
   position: fixed;
   left: 50%;
   top: 50%;
   background-color: rgba(0,0,0,.8);
   padding: 10px;
   border-radius: 5px;
   transform: translate(-50%,-50%);
   color:#fff;
   z-index: 99;
 }
</style>