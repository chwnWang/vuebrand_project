/* 
vuex最核心的管理对象store
*/
import Vue from 'vue'
import Vuex from 'vuex'

import mutations from './mutations'
import actions from './actions'
import getters from './getters'
import category from './modules/category'
import home from './modules/home'
import searchGood from './modules/searchGood'
import seeShop from './modules/seeShop'

Vue.use(Vuex)

export default new Vuex.Store({
  mutations,
  actions,
  getters,
  modules: { 
    category:category,
    home:home,
    searchGood:searchGood,
    seeShop : seeShop
  }
})