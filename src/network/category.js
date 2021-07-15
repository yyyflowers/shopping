import {request} from "./request";

//获取侧边栏菜单数据，并有mainKey数据获取菜单内容数据
export function getCategory() {
  return request({
    url: '/category'
  })
}
//获取菜单内容数据
export function getSub(maitKey) {
  return request({
    url: '/subcategory',
    params: {
      maitKey
    }
  })
}

//获取推荐数据
export function getGoods(miniWallkey,type) {
  return request({
    url: '/subcategory/detail',
    params: {
      miniWallkey,
      type
    }
  })
}