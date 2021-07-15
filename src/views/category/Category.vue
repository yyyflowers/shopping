<template>
  <div id="category">
    <nav-bar class="nav-bar"><div slot="center">商品分类</div></nav-bar>
    <category-menu :menu="menu" @menuClick="menuClick"></category-menu>
    <scroll class="scroll">
      <category-sub :sub="sub"></category-sub>
      <tab-control :titles="titles" @tabClick="tabClick"></tab-control>
      <goods-list :goods="goods"></goods-list>
    </scroll>
  </div>
</template>

<script>
  import categoryMenu from "./childComps/categoryMenu";
  import categorySub from "./childComps/categorySub";

  import NavBar from "components/common/navbar/NavBar";
  import Scroll from "components/common/scroll/Scroll";
  import TabControl from "components/content/tabControl/TabControl";
  import GoodsList from "components/content/goods/GoodsList";

  import {getCategory,getSub,getGoods} from "network/category";

  export default {
    name: "Category",
    data() {
      return {
        menu: [],
        sub: [],
        currentIndex: 0,
        titles: ['流行','新款','精选'],
        goods: [],
        currentType: 'pop',
      }
    },
    components: {
      categoryMenu,
      categorySub,
      NavBar,
      Scroll,
      TabControl,
      GoodsList
    },
    created() {
      this._getCategory();
    },
    methods: {
      //网络请求
      //获取侧边栏菜单，并保存数据
      _getCategory() {
        getCategory().then(res => {
          // console.log(res);
          //保存侧边栏菜单数据
          this.menu = res.data.category.list
          this.$nextTick(() => {
            //默认菜单内容的显示
            this._getSub(this.menu[0].maitKey);
            this._getGoods(this.menu[0].miniWallkey,this.currentType)
          });

        })
      },
      //获取菜单内容数据,并保存
      _getSub(key1) {
        getSub(key1).then(res => {
          // console.log(res);
          this.sub = [...res.data.list]
        })
      },
      //获取推荐数据
      _getGoods(key1,key2) {
        getGoods(key1,key2).then(res => {
          // console.log(res);
          this.goods = res
        })
      },
      //事件相关
      menuClick(obj) {
        // 点击修改菜单内容
        this._getSub(obj.maitKey)
        this._getGoods(this.menu[obj.index].miniWallkey,this.currentType)
        this.currentIndex = obj.index
      },
      // 点击小标题，推荐商品会改变
      tabClick(index) {
        switch (index) {
          case 0 :
            this.currentType = 'pop'
            break;
          case 1:
            this.currentType = 'new'
            break;
          case 2:
            this.currentType = 'sell'
        }
        this._getGoods(this.menu[this.currentIndex].miniWallkey,this.currentType)
      }
    },
  }
</script>

<style scoped>
  #category {
    height: 100vh;
  }
  .nav-bar {
    background-color: var(--color-tint);
    color: #ffffff;
  }
  .scroll {
    height: calc(100% - 44px - 49px);
    width: calc(100% - 90px);
    overflow: hidden;
    position: fixed;
    bottom: 49px;
    right: 0;
    left: 90px;
    top: 44px;
  }
</style>