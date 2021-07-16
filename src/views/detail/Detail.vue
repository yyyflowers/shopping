<template>
  <div id="detail">
    <detail-nav-bar @itemClick="itemClick" ref="detailnav"></detail-nav-bar>
    <scroll class="scroll" ref="scroll" :probeType="3" @scroll="contentScroll">
      <detail-swiper :top-images="topImages"></detail-swiper>
      <detail-base-info :goods="goods"></detail-base-info>
      <detail-shop-info :shop-info="shopInfo"></detail-shop-info>
      <detail-goods-info :goods-info="goodsInfo" @goodsLoad="goodsLoad"></detail-goods-info>
      <detail-param-info :param-info="paramInfo" ref="param"></detail-param-info>
      <detail-comment-info :comment-info="commentInfo" ref="comment"></detail-comment-info>
      <goods-list :goods="recommendInfo" ref="recommend"></goods-list>
    </scroll>
    <back-top v-show="isshow" @click.native="backTop"></back-top>
    <detail-bottom-bar @cartClick="cartClick"></detail-bottom-bar>
  </div>
</template>

<script>
  import detailNavBar from "./childComps/detailNavBar";
  import detailSwiper from "./childComps/detailSwiper";
  import detailBaseInfo from "./childComps/detailBaseInfo";
  import detailShopInfo from "./childComps/detailShopInfo";
  import detailGoodsInfo from "./childComps/detailGoodsInfo";
  import detailParamInfo from "./childComps/detailParamInfo";
  import detailCommentInfo from "./childComps/detailCommentInfo";
  import detailBottomBar from "./childComps/detailBottomBar";

  import GoodsList from "components/content/goods/GoodsList";
  import scroll from 'components/common/scroll/Scroll'

  import {getDetail,Goods,Params,getRcommend} from "network/detail";
  import {itemListenrMixin,backTopMixin} from "common/mixin";

  export default {
    name: "Detail",
    data() {
      return {
        iid: null,
        topImages: [],
        goods: {},
        shopInfo: {},
        goodsInfo: {},
        paramInfo: {},
        commentInfo: {},
        recommendInfo: [],
        titlesTopY: [],
        currentIndex: null
      }
    },
    components: {
      detailNavBar,
      detailSwiper,
      detailBaseInfo,
      detailShopInfo,
      detailGoodsInfo,
      detailParamInfo,
      detailCommentInfo,
      detailBottomBar,
      GoodsList,
      scroll
    },
    mixins: [itemListenrMixin, backTopMixin],
    created() {
      //保存商品的iid
      this.iid = this.$route.params.iid
      //通过iid获取详情页数据
      getDetail(this.iid).then(res => {
        const data = res.result
        // console.log(data);
        //保存轮播数据
        this.topImages = data.itemInfo.topImages
        //保存商品基本信息
        this.goods = new Goods(data.itemInfo,data.columns,data.shopInfo.services)
        //保存店铺信息
        this.shopInfo = data.shopInfo
        //保存详情页商品图片信息
        this.goodsInfo = data.detailInfo
        //保存尺码表,商品等参数信息
        this.paramInfo = new Params(data.itemParams.info,data.itemParams.rule)
        //保存评论信息 cRate= 0 时，就没有评论信息
        if (data.rate.cRate != 0 ){
          this.commentInfo = data.rate.list[0]
        }
      })
      //请求推荐商品数据
      getRcommend().then(res => {
        // console.log(res);
        this.recommendInfo = res.data.list
        console.log(this.recommendInfo[0].image);
      })
    },
    destroyed() {
      this.$bus.$off('imageLoad',this.itemListener)
    },
    methods: {
      //商品图片加载完成
      goodsLoad() {
        this.$refs.scroll.refresh()
        //此时图片加载完成，可以用offsetTop计算位置，并push到数组titlesTopY中
        this.titlesTopY = []
        this.titlesTopY.push(0)
        this.titlesTopY.push(this.$refs.param.$el.offsetTop)
        this.titlesTopY.push(this.$refs.comment.$el.offsetTop)
        this.titlesTopY.push(this.$refs.recommend.$el.offsetTop)
      },
      //接收detailNavBar发出的点击事件，实现对应标题的跳转
      itemClick(index) {
        this.$refs.scroll.ScrollTo(0,-this.titlesTopY[index],500)
      },
      //监听better-scroll的滚动事件scroll，与titlesTopY：[0,a,b,c]对比
      contentScroll(position) {
          const positionY = -position.y
          let length = this.titlesTopY.length
          for(let i = 0; i< length; i++) {
            if (this.currentIndex !== i && ((i< length-1 && positionY >= this.titlesTopY[i] && positionY < this.titlesTopY[i+1]) || (i === length-1 && positionY >= this.titlesTopY[i]))){
              this.currentIndex = i
              // console.log(this.currentIndex);
              this.$refs.detailnav.currentIndex = this.currentIndex
            }
          }
        //超过1000时，back-top显示
        this.isshow = (-position.y) > 1000
        },
      //点击加入购物车
      cartClick() {
        //1获取购物车要展示的信息
        const product = {}
        product.desc = this.goods.desc
        product.title = this.goods.title
        product.lowPrice = this.goods.lowNowPrice
        product.iid = this.iid
        product.topImages = this.topImages[0]
        // console.log(product);
        //2将商品发送到vuex中管理
        this.$store.dispatch('addCart',product).then(res => {
          // console.log(res);
          // console.log(this.$toast);
          this.$toast.show('添加购物车成功',2000)
        })
      }
      }
  }
</script>

<style scoped>
  #detail {
    position: relative;
    z-index: 50;
    background-color: #fff;
    height: 100vh;
  }
  .scroll {
    height: calc(100% - 44px);
    overflow: hidden;
    /*position: relative;*/
  }
</style>