<template>
    <div class="hoeSell">
        <div class="hoeSell_title">
            <h1 class="hoeSell_top_h1">
                类目热销榜
            </h1>

        </div>
        <div class="hoeSell_top">
            <div class="hoeSell_top_l">
                <p>热销榜</p>
                <img src="./images/demo/yifu02.png"/>
            </div>
            <div class="hoeSell_top_l hoeSell_bg ">
                <p>好评榜</p>
                <img src="./images/demo/yifu02.png"/>
            </div>
        </div>
        <div class="hoeSell_bot">
            <div class="hoeSell_bot_item">
                <p class="hoeSell_bot_text">居家生活榜 </p>
                <img class="itemImg" src="./images/demo/yifu02.png" alt="">
            </div>
            <div class="hoeSell_bot_item">
                <p class="hoeSell_bot_text">居家生活榜 </p>
                <img class="itemImg" src="./images/demo/yifu02.png" alt="">
            </div>
            <div class="hoeSell_bot_item">
                <p class="hoeSell_bot_text">居家生活榜 </p>
                <img class="itemImg" src="./images/demo/yifu02.png" alt="">
            </div>
            <div class="hoeSell_bot_item">
                <p class="hoeSell_bot_text">居家生活榜 </p>
                <img class="itemImg" src="./images/demo/yifu02.png" alt="">
            </div>
            <div class="hoeSell_bot_item">
                <p class="hoeSell_bot_text">居家生活榜 </p>
                <img class="itemImg" src="./images/demo/yifu02.png" alt="">
            </div>
            <div class="hoeSell_bot_item">
                <p class="hoeSell_bot_text">居家生活榜 </p>
                <img class="itemImg" src="./images/demo/yifu02.png" alt="">
            </div>
            <div class="hoeSell_bot_item">
                <p class="hoeSell_bot_text">居家生活榜 </p>
                <img class="itemImg" src="./images/demo/yifu02.png" alt="">
            </div>
            <div class="hoeSell_bot_item">
                <p class="hoeSell_bot_text">居家生活榜 </p>
                <img class="itemImg" src="./images/demo/yifu02.png" alt="">
            </div>

        </div>
    </div>
            
</template>

<script type="text/ecmascript-6">
  export default {
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.hoeSell
      width 100%
      padding 10px
      box-sizing border-box
      background-color #ffffff
      margin-top 10px
      .hoeSell_title
        width 100%
        height 40px
        padding 10px
        box-sizing border-box
        .hoeSell_top_h1
          float left
          font-size 20px
      .hoeSell_top
        width 100%
        display flex
        .hoeSell_top_l
          margin 4px
          width 47%
          display flex
          background-color #F9F3E4
          p
            font-size 16px
            padding  27px 13px
            box-sizing border-box
            width 50%
          img
            width 90px
            height 90px
        .hoeSell_bg
           background-color #EBEFF6

      .hoeSell_bot
        width 100%
        display flex
        flex-wrap wrap
        .hoeSell_bot_item
          width 22%
          height: 94px;
          margin 5px
          background-color #F5F5F5
          .hoeSell_bot_text
            font-size 12px
            text-align center
            padding-top 10px
          .itemImg
            width 100%
            height 70px




    
 
</style>
