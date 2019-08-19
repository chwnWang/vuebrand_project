<template>
    <div class="DesenoTime">
        <div class="DesenoTime_top">
            <h1 class="DesenoTime_top_h1">
                限时购
            </h1>
            <div class="DesenoTime_top_time">
                <span class="hours time">时</span>
                <span class="maohao">:</span>
                <span class="minute time">分</span>
                <span class="maohao">:</span>
                <span class="second time">秒</span>

            </div>
            <div class="DesenoTime_top_right">
                <span>更多</span>
                <i class="iconfont icon-youjiantou"></i>
            </div>
        </div>
        <div class="DesenoTime_bot">
            <div class="DesenoTime_bot_item">
                <img class="itemImg" src="./images/demo/yifu02.png" alt="">
                <p class="DesenoTime_bot_price">
                    <span class="span_p1">¥99.9</span>
                    <span class="span_p2"><s>¥199.9</s></span>
                </p>
            </div>
            <div class="DesenoTime_bot_item">
                <img class="itemImg" src="./images/demo/yifu02.png" alt="">
                <p class="DesenoTime_bot_price">
                    <span class="span_p1">¥99.9</span>
                    <span class="span_p2"><s>¥199.9</s></span>
                </p>
            </div>
            <div class="DesenoTime_bot_item">
                <img class="itemImg" src="./images/demo/yifu02.png" alt="">
                <p class="DesenoTime_bot_price">
                    <span class="span_p1">¥99.9</span>
                    <span class="span_p2"><s>¥199.9</s></span>
                </p>
            </div>
            <div class="DesenoTime_bot_item">
                <img class="itemImg" src="./images/demo/yifu02.png" alt="">
                <p class="DesenoTime_bot_price">
                    <span class="span_p1">¥99.9</span>
                    <span class="span_p2"><s>¥199.9</s></span>
                </p>
            </div>
            <div class="DesenoTime_bot_item">
                <img class="itemImg" src="./images/demo/yifu02.png" alt="">
                <p class="DesenoTime_bot_price">
                    <span class="span_p1">¥99.9</span>
                    <span class="span_p2"><s>¥199.9</s></span>
                </p>
            </div>
            <div class="DesenoTime_bot_item">
                <img class="itemImg" src="./images/demo/yifu02.png" alt="">
                <p class="DesenoTime_bot_price">
                    <span class="span_p1">¥99.9</span>
                    <span class="span_p2"><s>¥199.9</s></span>
                </p>
            </div>
        </div>
    </div>
            
</template>

<script type="text/ecmascript-6">
  export default {
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.DesenoTime
      width 100%
      margin-top 10px
      background #fff
      padding 10px
      box-sizing border-box
      .DesenoTime_top
        width 100%
        padding 10px
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
            font-size 12px
            align-items center
            justify-content center
            .span_p1
              color #B4282D
              text-align center
            .span_p2
              margin-left 5px
              color #989898


    
 
</style>
