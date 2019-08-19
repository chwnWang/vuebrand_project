<template>
  <div id="login">
    <!--头部-->
    <div class="header">
        <span class="header_text">
            <i class="iconfont icon-zhuye"></i>
        </span>
        <div class="header_mid">
            网易严选
        </div>
        <div class="header_right">
            <i class="iconfont icon-sousuo"></i>
            <i class="iconfont icon-gouwuche"></i>
        </div>
    </div>
    <div class="login_content">
      <div class="login_top">
          <img src="./images/cat/c06.png"/>
          <div class="btn01 login_btn active">
              <i class="iconfont icon-shouji"></i>
              <span>手机号快速登录</span>
          </div>
          <div class="btn02 login_btn">
              <i class="iconfont icon-youxiang"></i>
              <span>邮箱账号登录</span>
          </div>
      </div>
      <ul class="login_bot">
          <li class="login_bot_item">
              <a href="###">
                  <i class="iconfont icon-weixin1"></i>
                  <span>微信</span>
              </a>
          </li>
          <li>|</li>
          <li class="login_bot_item">
              <a href="###">
                  <i class="iconfont icon-qq"></i>
                  <span>QQ</span>
              </a>
          </li>
          <li>|</li>
          <li class="login_bot_item">
              <a href="###">
                  <i class="iconfont icon-weibo"></i>
                  <span>微博</span>
              </a>
          </li>
      </ul>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  #login
    .header
      width 100%
      height 45px
      background-color #fafafa
      padding 10px
      box-sizing border-box
      display flex
      .header_text
        width 20%
        height 30px
        .iconfont
          font-size 24px
          line-height 30px
      .header_mid
        float left
        width: 60%;
        height 30px
        text-align center
        font-size 24px
        font-family '楷体'
        font-weight bold
      .header_right
        width 20%
        display flex
        padding-top 5px
        .iconfont
          font-size 24px
          margin-left 10px



    .login_content
      width 100%
      height 550px
      background-color #F2F5F4
      position relative
      .login_top
        position: absolute
        top 100px
        left 130px
        img
          width 130px
          height 45px
          margin-bottom  110px
        .login_btn
          display flex
          width 300px
          height 44px
          padding 15px
          box-sizing border-box
          border 1px solid #b4282d
          margin-left: -95px
          margin-top: 15px
          text-align center
          color #DD1A21
          border-radius 4px
          .iconfont
            font-size 25px
            width 72px
            text-align: right
            line-height: 18px
          span
            text-align center
            width 50%
          &.active
            background-color #DD1A21
            color: #ffffff


      .login_bot
        position absolute
        bottom 0px
        left 28px
        display flex
        .login_bot_item
          margin 0px 25px
          a
            display flex
            .iconfont
              font-size 18px
            span
              fon-size 14px
              margin-left 5px
 
</style>
