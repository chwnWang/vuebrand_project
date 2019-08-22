import {GET_REQTABS,GET_RECOMMENDDATA} from '../mutation-type'

import {reqTabs,reqAutoRecommendData} from '../../api'

const state={
   tabData : [], //初始化tab的数据
   recommendData:[]
}

const mutations={
    [GET_REQTABS](state,tabData){
        state.tabData = tabData
    },
    [GET_RECOMMENDDATA](state,recommendData){
        state.recommendData = recommendData
    }

}
const actions={

    async getTabData({commit}){
        const result = await reqTabs();
        if(result.code==="200"){
            const tabData = result.data
            commit(GET_REQTABS,tabData)
        }
    },

    async  getAutoRecommendData({commit}){
       const result =  await reqAutoRecommendData();
       if(result.code==="200"){
           const recommendData = result.data
           commit(GET_RECOMMENDDATA,recommendData)
       }
    }


}

const getters={

}

export default{
    state,
    actions,
    getters,
    mutations
}