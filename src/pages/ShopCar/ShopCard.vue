<template>
  <div id="shopcard">
    <!--头部-->
    <div class="header">
        <span class="header_left">
        购物车
        </span>
        <span class="header_right">
        领券
        </span>
    </div>
    <ul class="home_shop_explain ">
        <li class="shopTopItem">
                <span class="ItemImg">
                    <!-- <img src="./images/cat/003.png"/> -->
                </span>
            <span class="ItemText">网易自营品牌</span>
        </li>
        <li class="shopTopItem">
                <span class="ItemImg">
                    <!-- <img src="./images/cat/002.png"/> -->
                </span>
            <span class="ItemText">30天无忧退货</span>
        </li>
        <li class="shopTopItem">
                <span class="ItemImg">
                    <!-- <img src="./images/cat/001.png"/> -->
                </span>
            <span class="ItemText">48小时快速退款</span>
        </li>
    </ul>
    <div class="shopCard_conent">
        <img src="./images/cat/c05.png"/>
        <span>去添加点什么吧</span>
        <button>登录</button>
    </div>
  </div>
    
</template>

<script type="text/ecmascript-6">
  export default {
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  #shopcard
    .header
      width 100%
      height 45px
      padding 10px
      box-sizing border-box
      background-color #fff
      .header_left
        height 30px
        float left
        line-height 30px
        float left
      .header_right
        height 30px
        line-height 30px
        color #b4282d
        float: right


    .home_shop_explain
      width 100%
      height 36px
      display flex
      padding 10px
      box-sizing border-box
      background #eee
      .shopTopItem
        width 33%
        display flex
        align-items center
        justify-content center
        .ItemImg
          width 3px
          height 3px
          border-radius 50%
          border 1px solid #999 
          margin-right 4px
        .ItemText
          font-size 13px



    .shopCard_conent
      width 100%
      height 490px
      position relative
      img
        width 130px
        position absolute
        left 50%
        top 160px
        margin-left -65px
      span
        font-size 14px
        color #999
        position absolute
        top 290px
        left 140px
      button
        width 220px
        height 45px
        color #fff
        background-color #b4282d
        border none
        position absolute
        top 325px
        left 80px


 
</style>
