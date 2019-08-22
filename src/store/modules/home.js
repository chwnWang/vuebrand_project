import {GET_HOMEDATA} from '../mutation-type'

import {reqMockHome} from '../../api'

const state = {
    homeData: [], //首页数据
}

const mutations = {
    [GET_HOMEDATA](state, homeData) {
      state.homeData = homeData
    }
}

const actions={
    async getHomeData({commit}){
        const result = await reqMockHome();  
        if(result.code===0){
            const homeData = result.data
            commit(GET_HOMEDATA, homeData)
        }
    },
}

const getters = {
}



export default {
    state,
    mutations,
    actions,
    getters
}