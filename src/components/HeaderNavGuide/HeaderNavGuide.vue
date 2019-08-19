<template>
    <div class="home_top">
        <ul class="home_top_list">
            <li class="listItem"><a class="active" href="###">推荐</a></li>
            <li class="listItem"><a href="###">居家生活</a></li>
            <li class="listItem"><a href="###">生活用品</a></li>
            <li class="listItem"><a href="###">美食酒水</a></li>
        </ul>
        <div class="home_top_right">
            <i class="iconfont icon-xiangxiajiantou"></i>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
  export default {
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.home_top
  display flex
  .home_top_list
    width 90%
    height 40px
    display flex
    background #fff
    .listItem
      width 25%
      height 100%
      text-align  center
      line-height 40px
      a
        font-size 14px
        padding-bottom 5px
        &.active
          color: #b4282d
          border-bottom 2px solid #b4282d
  .home_top_right
    width 10%
    height 40px
    text-align center
    line-height 40px
    background #fff
    .iconfont
      font-size 20px



 
</style>
