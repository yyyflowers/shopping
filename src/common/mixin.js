import {debounce} from "./utils/utils";
import BackTop from "components/content/backTop/BackTop";
export const itemListenrMixin = {
  data() {
    return {
      itemListener: null
    }
  },
  mounted() {
    const refresh = debounce(this.$refs.scroll.refresh,500)
    this.itemListener = () => {
      refresh()
    }
    this.$bus.$on('imageLoad', this.itemListener)
  }
}

export const backTopMixin = {
  data() {
    return {
      isshow:false,
    }
  },
  components: {
    BackTop
  },
  methods: {
    //点击backTop，则立即返回到顶部
    backTop() {
      this.$refs.scroll.ScrollTo(0,0)
    },
  }
}



