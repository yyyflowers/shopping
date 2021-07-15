<template>
  <div class="goods-list-item" @click="itemClick">
    <img v-lazy="showImage" alt="" @load="goodsload" :key="showImage">
    <div class="item-info">
      <p>{{goodsItem.title}}</p>
      <span class="price">{{goodsItem.price}}</span>
      <span class="collect">{{goodsItem.cfav}}</span>
    </div>

  </div>
</template>

<script>
  export default {
    name: "GoodsListItem",
    props: {
      goodsItem: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    methods: {
      goodsload() {
        //发出事件总线
        this.$bus.$emit("imageLoad")
      },
      itemClick() {
        //点击时跳转到detail界面
        this.$router.push('/detail/' + this.goodsItem.iid)
      }
    },
    computed: {
      showImage() {
        return  this.goodsItem.image ||  this.goodsItem.img || this.goodsItem.show.img
      }
    }
  }
</script>

<style scoped>
  .goods-list-item {
    width: 48%;
    padding-bottom: 40px;
    position: relative;
  }
  .goods-list-item img{
    width: 100%;
    border-radius: 5px;
  }
  .item-info {
    height: 30px;
    font-size: 12px;
    text-align: center;
    position: absolute;
    bottom: 5px;
    left: 0;
    right: 0;
  }
  .item-info p {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .item-info .price {
    color: var(--color-high-text);
    margin-right: 20px;
  }
  .collect {
    position: relative;
  }
  .collect::before {
    content: '';
    position: absolute;
    left: -15px;
    top: -1px;
    width: 14px;
    height: 14px;
    background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
  }
</style>