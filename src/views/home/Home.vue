<template>
 <div id="home">
   <nav-bar class="nav-bar"><div slot="center">购物街</div></nav-bar>
   <tab-control :titles="titles" class="tabControl"  @tabClick="tabClick" ref="tabControl1" v-show="isTabFixed"></tab-control>
   <scroll ref="scroll" class="scroll" :probeType="3" :pullUpLoad="true" @scroll="scroll"  @pullingUp="pullingUp" >
     <home-swiper :banners="banners" @SwiperImgLoad="SwiperImgLoad"></home-swiper>
     <home-recommend :recommends="recommends"></home-recommend>
     <home-feature></home-feature>
     <tab-control :titles="titles" @tabClick="tabClick" ref="tabControl2"></tab-control>
     <goods-list :goods="showGoods"></goods-list>
   </scroll>
   <back-top v-show="isshow" @click.native="backTop"></back-top>
 </div>
</template>

<script>
  import homeSwiper from "./childComps/homeSwiper";
  import homeRecommend from "./childComps/homeRecommend";
  import homeFeature from "./childComps/homeFeature";

  import NavBar from "components/common/navbar/NavBar";
  import Scroll from "components/common/scroll/Scroll";
  import TabControl from "components/content/tabControl/TabControl";
  import GoodsList from "components/content/goods/GoodsList";

  import {getHomeMultidata,getHomeGoods} from "network/home";
  import {itemListenrMixin,backTopMixin} from "common/mixin";

  export default {
    name: "Home",
    data() {
      return {
        banners: [],
        recommends: [],
        titles: ['流行','新款','精选'],
        goods: {
          'pop': {page: 0, list: []},
          'new': {page: 0, list: []},
          'sell': {page: 0, list: []}
        },
        currentType: 'pop',
        isTabFixed: false,
        saveY: 0,
      }
    },
    computed: {
      showGoods() {
        return this.goods[this.currentType].list
      }
    },
    components: {
      homeSwiper,
      homeRecommend,
      homeFeature,
      NavBar,
      Scroll,
      TabControl,
      GoodsList,
    },
    mixins: [itemListenrMixin,backTopMixin],
    created() {
      this._getHomeMultidata()
      this._getHomeGoods('pop')
      this._getHomeGoods('new')
      this._getHomeGoods('sell')
    },
    activated() {
      this.$refs.scroll.ScrollTo(0,this.saveY,0)
      this.$refs.scroll.refresh()
    },
    deactivated() {
      this.saveY = this.$refs.scroll.saveY()
      //取消事件总线的监听（goodsListItem 中图片的加载完成）
      this.$bus.$off('imageLoad',this.itemListener)

    },
    methods: {

      //网络请求
      _getHomeMultidata() {
        getHomeMultidata().then(res => {
          // console.log(res);
          this.banners = res.data.banner.list
          this.recommends = res.data.recommend.list
        })
      },
      _getHomeGoods(type) {
        const page = this.goods[type].page + 1
        getHomeGoods(type,page).then(res => {
          // console.log(res);
          this.goods[type].list.push(...res.data.list)
          // console.log(this.goods[type].list);
          this.goods[type].page += 1
          //每次发pullingUp时，都应该主动调用 finishPullUp()，告诉 BetterScroll 为下一次 pullUp做好准备。
          this.$refs.scroll.finishPullUp()
        })
      },
      //事件监听相关
      //点击tabControl,goods列表的展示改变
      tabClick(index) {
        switch (index) {
          case 0:
            this.currentType = 'pop'
            break
          case 1:
            this.currentType = 'new'
            break
          case 2:
            this.currentType = 'sell'
            break
        }

        this.$refs.tabControl1.currentIndex = index
        this.$refs.tabControl2.currentIndex = index
      },
      //监听内容滚动位置，在临界值1000时,backTop出现，否则为隐藏状态
      scroll(position) {
        //超过1000时，back-top显示
        this.isshow = (-position.y) > 1000
        // 超过this.$refs.tabControl2.$el.offsetTop时，第一个tabControl显示
        this.isTabFixed = (-position.y) > this.$refs.tabControl2.$el.offsetTop
      },
      //上拉加载更多
      pullingUp() {
        this._getHomeGoods(this.currentType)
      },
      //轮播图图片加载完成，获得了图片高度
      SwiperImgLoad() {
        // console.log(this.$refs.tabControl2.$el.offsetTop);

      }
    }
  }
</script>

<style scoped>
  #home {
    /*padding-top: 44px;*/
    height: 100vh;
    position: relative;
  }
  .nav-bar {
    background-color: var(--color-tint);
    color: #ffffff;
  }
  .tabControl {
    position: relative;
    z-index: 9
  }
  .scroll {
    overflow: hidden;
    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
  }
</style>