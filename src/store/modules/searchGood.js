import {GET_SEARCHDATA,GET_SEARCHRESULT} from '../mutation-type';

import {reqInitSearch,reqSearchResult} from '../../api'

const state={
    searchData: {} , //热门搜索的数据
    searchResult:[]  //按条件搜索的值
}

const mutations={
   [GET_SEARCHDATA](state,{searchData}){
       state.searchData = searchData
   },
   [GET_SEARCHRESULT](state, searchResult){
       state.searchResult = searchResult
   }
}

const actions={
    //获取热门的数据
    async getSearchData({commit}){
        const result = await reqInitSearch();
        if(result.code==="200"){
            const searchData = result.data
            commit(GET_SEARCHDATA,{searchData})
        }
    },
    //根据按钮查询
    async getSearchResult({commit},keyWord){
        const result = await reqSearchResult(keyWord);
        if(result.code==="200"){
            const searchResult = result.data
            commit(GET_SEARCHRESULT,searchResult)
        }
    }
    
}



const getters={

}

export default {
    state,
    mutations,
    actions,
    getters
}