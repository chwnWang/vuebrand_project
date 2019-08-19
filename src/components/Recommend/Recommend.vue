<template>
    <div class="recommend">
        <div class="recommend_title">
            <h1 class="recommend_top_h1">
                人气推荐
            </h1>
            <div class="recommend_top_right">
                <span>更多</span>
                <i class="iconfont icon-youjiantou"></i>
            </div>
        </div>
        <div class="recommend_top">
            <div class="recommend_top_l">
                <img src="./images/demo/007.png"/>
            </div>
            <div class="recommend_top_r">

                    <span class="recommend_top_r_p1">抄底特惠</span>

                <p class="recommend_top_r_p2">新色 奢华植鞣头层水牛皮席 凉席三件套</p>
                <p class="recommend_top_r_p3">三峡水牛头层皮，高端夏凉必备</p>
                <p class="recommend_top_r_p4">¥1999</p>

            </div>
        </div>
        <div class="recommend_bot">
            <div class="recommend_bot_item">
            <img class="itemImg" src="./images/demo/008.png" alt="">
            <p class="recommend_bot_text">无损风味 超即溶精品咖啡（...</p>
                <p class="recommend_bot_price">2件8.5折</p>
            </div>
            <div class="recommend_bot_item">
                <img class="itemImg" src="./images/demo/008.png" alt="">
                <p class="recommend_bot_text">无损风味 超即溶精品咖啡（...</p>
                <p class="recommend_bot_price">2件8.5折</p>
            </div>
            <div class="recommend_bot_item">
                <img class="itemImg" src="./images/demo/008.png" alt="">
                <p class="recommend_bot_text">无损风味 超即溶精品咖啡（...</p>
                <p class="recommend_bot_price">2件8.5折</p>
            </div>
        </div>
    </div>
            
</template>

<script type="text/ecmascript-6">
  export default {
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.recommend
      width 100%
      padding 10px
      box-sizing border-box
      background-color #fff
      margin-top 10px
      .recommend_title
        width 100%
        height 40px
        padding 10px
        box-sizing border-box
        .recommend_top_h1
          float left
          font-size 20px
        .recommend_top_right
          float: right
          display flex
          span
            font-size 14px
          .iconfont
            font-size 18px
      .recommend_top
        width 100%
        display flex
        background-color #FEF0DF
        .recommend_top_l
          width 40%
          img
            width 100%
            height 100%
        .recommend_top_r
          width 60%
          padding 30px 10px
          box-sizing border-box
          .recommend_top_r_p1
            width: 49px
            color: #b4282d
            border: 1px solid #b4282d
            height: 13px
            display: block
            font-size: 12px
            background: #fff
          .recommend_top_r_p2
            font-size 14px
            white-space nowrap
            overflow hidden
            text-overflow ellipsis
            margin 10px 0px
          .recommend_top_r_p3
            color #7F7F7F
            font-size 12px
          .recommend_top_r_p4
            color #b4282d
            margin-top 10px
      .recommend_bot
        width 100%
        display flex
        padding-top 10px
        box-sizing border-box
        .recommend_bot_item
          width 30%
          margin 5px
          .itemImg
            width 110px
            height 110px
            background-color #f5f5f5
          .recommend_bot_text
            font-size 14px
            margin: 12px 0px;
          .recommend_bot_price
            font-size 12px
            color #b4282d
            border 1px solid #b4282d
            width 50px
            border-radius 5px




    
 
</style>
