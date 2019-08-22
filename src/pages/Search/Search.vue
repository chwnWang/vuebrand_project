<template>
    <div id="search">
        <!--头部-->
        <div class="header">
            <div class="header_mid">
                <i class="iconfont icon-sousuo"></i>
                <input @keyup="searchResult" class="header_input" type="text" placeholder="搜索商品,共2015款好物" v-model="keyWord"/>
            </div>
            <div class="header_back" @click="$router.back(-1)">取消</div>
        </div>
        <ul class="searchReasult" v-if="searchResultArr.length>0">
            <li class="ReasultItem" v-for="(item, index) in searchResultArr" :key="index">
                {{item}}
            </li >
        
        </ul>

        <div class="hotKey" v-else>
            <h1>热门搜索</h1>
            <ul class="searchList" v-if="searchData">
                <li class="listItem" :class="{active:item.highlight}" v-for="(item, index) in searchData.hotKeywordVOList" :key="index">
                    {{item.keyword}}
                
                </li>
    
            </ul>
        </div>

       
        
        

    </div>

</template>

<script type="text/ecmascript-6">
  import { mapState } from 'vuex';
import { async } from 'q';
 
  export default {
    data(){
        return{
            isShow:true,
            keyWord : ''
        }
    },
    computed:{
        ...mapState({
            searchData:state=>state.searchGood.searchData,
            searchResultArr: state=>state.searchGood.searchResult
        }),
    },
    methods:{
       
        async searchResult(){
            clearTimeout(this.timerId)
            this.timerId = setTimeout(async() => {
                await this.$store.dispatch('getSearchResult',this.keyWord);
            }, 300);
            
        }
    },
    mounted(){
        this.$store.dispatch('getSearchData')
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
#search
    .header
        width 100%
        height 45px
        background-color #ffffff
        padding 10px
        box-sizing border-box
        display flex
        .header_mid
            float left
            width: 85%;
            height 30px
            display flex
            background-color #EDEDED
            border-radius 3px
            box-sizing border-box
            padding-left: 17px
            .iconfont
                font-size: 24px
                margin-top: 5px
            .header_input
                width: 240px
                font-size 14px
                height 100%
                background-color #EDEDED
        .header_back
            width 15%
            height 45px
            line-height 30px
            font-size 14px
            padding-left 20px
            box-sizing border-box
    .searchReasult
      width 100%
      background-color #ffffff
      padding 12px
      box-sizing border-box
      .ReasultItem
        width 80%
        height 30px
        line-height 30px
        font-size 16px
        
        border-bottom 1px solid #eeeeee

    .hotKey   
        width 100%
        background-color #ffffff
        h1
          padding 12px
          width 100%
          height 40px
          font-size 16px 
          box-sizing border-box
        .searchList
            width 100%
            display flex
            flex-wrap wrap
            padding 10px
            box-sizing border-box
            .listItem
                margin 6px
                padding 6px
                font-size 12px
                box-sizing border-box
                border 1px solid #999
                &.active
                    color #b4282d
                    border-color #b4282d
    
</style>
