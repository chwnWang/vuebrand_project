<template>
    <div class="chooseHome">
        <div class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide">
                    <img src="./images/see/s05.jpg" alt="">
                </div>
                <div class="swiper-slide">
                    <img src="./images/see/s06.jpg" alt="">
                </div>
                <div class="swiper-slide">
                    <img src="./images/see/s05.jpg" alt="">
                </div>
            </div>
        </div>
        <div class="chooseHome_text">
            <div class="text_d1">
                <h1>建议征集</h1>
                <span>告诉我们，你的好物标准</span>
            </div>
            <div class="text_d2">
                <img src="./images/see/s07.jpg"/>
                <div class="d2_message">
                    <span class="message01">你会喜欢怎么样的一碗靓汤</span>
                    <p class="message02">
                        <span>748人看过</span>
                        <span>30条建议</span>
                    </p>
                </div>
            </div>
            <div class="text_d3">平时，你会喜欢喝什么口味的汤？会在什么生活场景下，想要拥有一碗靓汤？如果我们想要推出一碗靓汤，你会希望有哪些口味、具体规格和定价、简单加热，还是以料包形式进行烹饪。快来和我们聊聊吧～</div>
            <div class="text_d4">我要建议</div>
        </div>
        <div class="chooseHome_text">
            <div class="text_d1">
                <h1>建议征集</h1>
                <span>告诉我们，你的好物标准</span>
            </div>
            <div class="text_d2">
                <img src="./images/see/s07.jpg"/>
                <div class="d2_message">
                    <span class="message01">你会喜欢怎么样的一碗靓汤</span>
                    <p class="message02">
                        <span>748人看过</span>
                        <span>30条建议</span>
                    </p>
                </div>
            </div>
            <div class="text_d3">平时，你会喜欢喝什么口味的汤？会在什么生活场景下，想要拥有一碗靓汤？如果我们想要推出一碗靓汤，你会希望有哪些口味、具体规格和定价、简单加热，还是以料包形式进行烹饪。快来和我们聊聊吧～</div>
            <div class="text_d4">我要建议</div>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
  export default {
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.chooseHome
      width 100%
      .swiper-container
        width 100%
        background-color #ffffff
        .swiper-wrapper
          width 100%
          display flex
          padding 10px
          box-sizing border-box
          background-color #ffffff
          .swiper-slide
            margin-right 20px
            width 100%
            background-color #ffffff
            img
              width 350px
              border-radius 10px




      .chooseHome_text
        width 100%
        background-color #ffffff
        margin-top 10px
        padding 10px
        box-sizing border-box
        display flex
        flex-direction column
        align-items center
        justify-content center
        .text_d1
          display flex
          flex-direction column
          align-items center
          justify-content center
          h1
            font-size 18px
          span
            font-size 12px
            color #7F7F7F
            margin-top 10px
        .text_d2
          width 100%
          display flex
          background: #eeeeee
          padding 10px
          box-sizing border-box
          margin 10px 0px
          img
            width 150px
            height 100px
          .d2_message
            width 60%
            padding 10px
            box-sizing border-box
            .message01
              margin-top 20px
              font-size 18px
            .message02
              padding-top 20px
              box-sizing border-boxx
              display flex
              span
                font-size 12px
                color #7F7F7F
                margin-right 10px
        .text_d3
          width 100%
          font-size 12px
          padding 15px 0px
          color #7F7F7F
          box-sizing border-box
        .text_d4
          width 100%
          height 40px
          text-align center
          line-height 40px
          color #7F7F7F
          border 1px solid #7F7F7F




</style>
