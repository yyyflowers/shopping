import {request} from "./request";

export function getDetail(iid) {
  return request({
    url: '/detail',
    params: {
      iid
    }
  })
}
export class Goods {
  constructor(itemInfo,columns,services) {
    this.title = itemInfo.title
    this.discountDesc = itemInfo.discountDesc
    this.price = itemInfo.price
    this.oldPrice = itemInfo.oldPrice
    this.services = services
    this.columns = columns
    this.lowNowPrice = itemInfo.lowNowPrice
    this.desc = itemInfo.desc

  }
}
export class Params {
  constructor(info,rule) {
    this.tables = rule.tables
    this.set = info.set
  }
}

export function getRcommend() {
  return request({
    url: '/recommend'
  })
}