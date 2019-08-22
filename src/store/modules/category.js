import {GET_CATEGORY,SET_UPDATEINDEX} from '../mutation-type'

import{reqMockCategory} from '../../api'

const state = {
    currIndex : 0,
    categorys: [], // 分类数组
}

const mutations = {
    [GET_CATEGORY](state, categorys) {
      state.categorys = categorys
    },
    [SET_UPDATEINDEX](state,currIndex){
      state.currIndex = currIndex
    }
}
const actions = {
    //发送请求获取数据
    async getCategoryData({commit}){
        const result = await reqMockCategory();  
        if(result.code===0){
            const categorys = result.data.categoryL1List
            commit(GET_CATEGORY, categorys)
        }
    },
    async updateIndex({commit},{currIndex}){
        commit(SET_UPDATEINDEX, currIndex)
    }

  }
  const getters = {
    
  }

export default {
    state,
    mutations,
    actions,
    getters
}