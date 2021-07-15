import {ADD_COUNTER, ADD_TO_CART} from "./mutations_type";

export default {
  addCart(context,payload) {
    let oldproduct = context.state.cartList.find(item => item.iid === payload.iid)
    if (oldproduct) {
      context.commit(ADD_COUNTER,oldproduct)
    }else {
      payload.count = 1
      context.commit(ADD_TO_CART,payload)
    }
  }
}
