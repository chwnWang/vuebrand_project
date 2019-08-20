<template>
  <div id="category">
    <!--头部-->
    <div class="header">
        <span class="header_text">

        </span>
        <div class="header_mid" @click="$router.push('/search')">
            <i class="iconfont icon-sousuo"></i>
            <input class="header_input" type="text" placeholder="搜索商品,共2015款好物"/>
        </div>
        <div class="header_right">

        </div>


    </div>
    <div class="category_content">
        <!--左侧-->
        <CategoryLeft/>
        <!--右侧-->
        <CategoryRight/>

    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import CategoryLeft from '../../components/CategoryLeft/CategoryLeft'
  import CategoryRight from '../../components/CategoryRight/CategoryRight'
  export default {
    components:{
      CategoryLeft,
      CategoryRight
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import '../../../static/css/mixins.styl' 
  #category
    .header
      width 100%
      height 45px
      background-color #fff
      padding 10px
      box-sizing border-box
      .header_text
        height 30px
        float left
        background-color #EDEDED
      .header_mid
        float left
        width: 59%;
        height 30px
        display flex
        background-color #EDEDED
        border-radius 5px
        box-sizing border-box
        padding-left: 17px
        margin 0px 10px
        .iconfont
          font-size: 24px
          margin-top: 5px
        .header_input
          width: 160px
          font-size 14px
          height 100%
          background-color #EDEDED
      .header_right
        padding-top 5px
        background-color #EDEDED


    .category_content
      width 100%
      display flex
      padding 15px 10px 0px 0px
      top-border-1px(#EDEDED)
      box-sizing border-box
</style>
