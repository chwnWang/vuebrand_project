<template>
    <div id="search">
        <!--头部-->
        <div class="header">
            <div class="header_mid">
                <i class="iconfont icon-sousuo"></i>
                <input class="header_input" type="text" placeholder="搜索商品,共2015款好物"/>
            </div>
            <div class="header_back" @click="$router.back(-1)">取消</div>
        </div>
        <ul class="searchList">
            <li class="listItem active">爆款 行李箱</li>
            <li class="listItem">行李箱</li>
            <li class="listItem"> 爆款 行李箱</li>
            <li class="listItem">爆款</li>
            <li class="listItem">爆款 行李箱</li>
            <li class="listItem">行李箱</li>
            <li class="listItem">爆款</li>
            <li class="listItem">行李箱</li>
            <li class="listItem">爆款 行李箱</li>
            <li class="listItem">爆款</li>
            <li class="listItem">行李箱</li>
            <li class="listItem">爆款 行李箱</li>
        </ul>

    </div>

</template>

<script type="text/ecmascript-6">
  export default {
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
    .searchList
        width 100%
        background-color #ffffff
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
