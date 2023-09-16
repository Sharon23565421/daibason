import { createStore } from 'vuex'


export default createStore({
  state: {
    cart:[],
    favorites:[],
    purchaseProcess: {},
  },
  getters: {
    cartTotal(state) {
      return state.cart.length;
    },
  },
  mutations: {
    addToCart(state, product) {
      state.cart.push(product);
    },
  },
  actions: {
    addToCart(context, product) {
      context.commit('addToCart', product);
    },
  },
  modules: {
  }
})
