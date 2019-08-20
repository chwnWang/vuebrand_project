<template>
    <div id="register">
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
                <i class="iconfont icon-gouwuche1" @click="$router.replace('/shopCar')"></i>
            </div>
        </div>
        <div class="phoneImg">
            <img src="./images/cat/c06.png" alt="">
        </div>
        <form class="phoneForm" action="">
            <div class="fromInput1 fromDiv">
                <input type="text" placeholder="6-8位数字字母组合">
                <select>
                    <option>163.com</option>
                    <option>126.com</option>
                </select>
            </div>
            <div class="fromInput2 fromDiv">
                <input type="text" placeholder="6-16位字母数字字符组合密码">
            </div>
            <div class="from03 fromDiv">
                点此进行验证
            </div>
            <div class="from04 fromDiv">
                下一步
            </div>
            <div class="from05 fromDiv">
                <span>
                    <input type="checkbox">
                </span>
                <div class="from05_msg">用户注册即代表同意<span>《服务条款》</span>和<span>《网易隐私政策》</span></div>

            </div>
        </form>
    </div>
</template>

<script type="text/ecmascript-6">
  export default {
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>

 #register
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
            margin 30px 0px
        .fromInput1
            width 100%
            display flex
            input
                width 63%
                border 1px solid #d0d0d0
                border-radius 5px
            select
                width 30%
                margin-left 20px
                border 1px solid #d0d0d0
                border-radius 5px
        .fromInput2
            border-radius 5px
            border 1px solid #d0d0d0
            margin-top 20px
            input
                width 100%
                height 100%
        .from03
            width 100%
            height 100%
            font-size 14px
            line-height 40px
            background-color #f5f5f5
            display flex
            justify-content center
        .from04
            background-color #b7272d
            width 100%
            color #ffffff
            text-align center
            line-height 40px
            font-size 18px
            border-radius 5px
        .from05
            display flex
            width 100%
            .from05_msg
                display flex
                flex-wrap wrap
                overflow-wrap wrap
                span
                    color #2C8DFB
</style>
