<template>
    <div id="login">
        <!--头部-->
        <div class="header">
            <span class="header_text">
               <i class="iconfont icon-zhuye" @click="$router.replace('/home')"></i>
            </span>
            <div class="header_mid">
                网易严选
            </div>
            <div class="header_right">
                <i class="iconfont icon-search" @click="$router.push('/search')"></i>
                <i class="iconfont icon-gouwuche" @click="$router.replace('/shopCar')"></i>
            </div>
        </div>
        <div class="phoneImg">
            <img src="./images/cat/c06.png" alt="">
        </div>
        <router-view></router-view>
        <form v-if="isClick" class="phoneForm" action="">
            <div class="fromInput fromDiv">
                <input type="text" placeholder="请输入手机号">

            </div>
            <div class="fromInput fromDiv message">
                <input type="text" placeholder="请输入短信验证码">
                <span class="huoqu">获取验证码</span>
            </div>
            <div class="from03 fromDiv">
                <span class="yuwen">遇到问题?</span>
                <span class="psddeng">使用密码验证登录</span>
            </div>
            <div class="from04 fromDiv">
                登录
            </div>
            <div class="from05 fromDiv">
                <span>
                    <input type="checkbox">
                </span>
                <p>同意<span>《服务条款》</span>和<span>《网易隐私政策》</span></p>
            </div>
            <div class="from06 fromDiv">
                <span>其他登录方式</span>
                <i class="iconfont icon-youjiantou"></i>
            </div>
        </form>

        <form v-else class="eamilForm" action="">
            <div class="fromInput fromDiv">
                <input type="text" placeholder="邮箱账号">
            </div>
            <div class="fromInput fromDiv message">
                <input type="text" placeholder="密码">
            </div>
            <div class="from03 fromDiv">
                <span class="yuwen" @click="$router.replace('/register')">注册账号</span>
                <span class="psddeng">忘记密码</span>
            </div>
            <div class="from04 fromDiv">
                登录
            </div>
            <div class="from06 fromDiv">
                <span>其他登录方式</span>
                <i class="iconfont icon-youjiantou"></i>
            </div>
        </form>
    </div>
</template>

<script type="text/ecmascript-6">
  import {mapState} from 'vuex'
  export default {
    data(){
      return{
        isClick: this.$route.query.isClick
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
body
    background-color #ffffff !important
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

    .phoneImg
      width 100%
      height 110px
      background-color #ffffff
      position relative
      img
        width 95px
        position absolute
        top 40px
        left 140px
    .phoneForm
      width 100%
      padding 15px
      box-sizing border-box
      background-color #ffffff
      .fromDiv
        height 40px
        margin-top 10px
      .fromInput
        border-bottom 2px solid #f4f4f4
        margin-top 20px
        input
          width 100%
          height 100%
      .message
        position relative
        .huoqu
          border 1px solid black
          border-radius 5px
          padding 4px
          box-sizing border-box
          position absolute
          right 5px
          bottom 6px
      .from03
        width 100%
        height 40px
        font-size 14px
        line-height 40px
        .yuwen
          float left
        .psddeng
          float right
      .from04
        background-color #DD1A21
        width 100%
        color #ffffff
        text-align center
        line-height 40px
        font-size 18px
        border-radius 5px
      .from05
        display flex
        align-items center
        width 100%
        p
          display flex
          span
            color #2C8DFB
      .from06
        width 100%
        display flex
        justify-content center
    .eamilForm
      width 100%
      padding 15px
      box-sizing border-box
      background-color #ffffff
      .fromDiv
        height 40px
        margin-top 10px
      .fromInput
        border-bottom 2px solid #f4f4f4
        margin-top 20px
        input
          width 100%
          height 100%
      .from03
        width 100%
        height 40px
        font-size 14px
        line-height 40px
        .yuwen
          float left
        .psddeng
          float right
      .from04
        background-color #DD1A21
        width 100%
        color #ffffff
        text-align center
        line-height 40px
        font-size 18px
        border-radius 5px
      .from05
        display flex
        align-items center
        width 100%
        p
          display flex
          span
            color #2C8DFB
      .from06
        width 100%
        display flex
        justify-content center</style>
