<template>
    <div class="DesenoTime">
        <div class="DesenoTime_top">
            <h1 class="DesenoTime_top_h1">
                新品首发
            </h1>
            <div class="DesenoTime_top_right">
                <span>更多</span>
                <i class="iconfont icon-youjiantou"></i>
            </div>
        </div>
        <div class="DesenoTime_bot" v-if="newItemList">
            <div class="DesenoTime_bot_item" v-for="(item, index) in newItemList" :key="index" v-if="index<6">
                <img class="itemImg" :src="item.primaryPicUrl" alt="">
                <p class="DesenoTime_bot_price">
                    <span class="span_p1">{{item.name}}...<span class="span_p2">¥{{item.counterPrice}}</span></span>
                    
                </p>
            </div>  
        </div>
    </div>
            
</template>

<script type="text/ecmascript-6">
  import {mapState} from 'vuex'
  export default {
    props:{
      newItemList:Array
    },
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.DesenoTime
      width 100%
      margin-top 10px
      background #fff
      .DesenoTime_top
        width 100%
        height 40px
        padding 12px
        box-sizing border-box
        .DesenoTime_top_h1
          float left
          font-size 20px
        .DesenoTime_top_time
           float left
           display flex
           span
             font-size 18px
           .time
             margin-left 10px
             color #fff
             width 20px
             height 20px
             background-color black
             border-radius 3px
           .maohao
             margin-left 10px
        .DesenoTime_top_right
          float: right
          display flex
          span
            font-size 14px
          .iconfont
            font-size 18px
      .DesenoTime_bot
        width 100%
        display flex
        flex-wrap wrap
        .DesenoTime_bot_item
          width 27%
          margin 10px
          .itemImg
            width 110px
            height 110px
            background #F5F5F5
            margin-bottom: 10px
          .DesenoTime_bot_price
            display flex
            flex-wrap wrap
            font-size 12px 
            .span_p2
              margin-left 5px
              color #B4282D


    
 
</style>
