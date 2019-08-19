<template>
  <div class="header">
    <slot class="header_text" name="left">
        {{title}}
    </slot>
    <slot class="header_mid" name="center">
        <i class="iconfont icon-sousuo"></i>
        <input class="header_input" type="text" :placeholder="searchTitle"/>
    </slot>
    <slot class="header_right" name="right">
        <a class="header_button" href="###">{{btnTitle}}</a>
    </slot>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
      props:{
          title: String,
          searchTitle: String,
          btnTitle: String
          
      }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.header
  width 100%
  height 45px
  background-color #fff
  padding 10px
  box-sizing border-box
  .header_text
    height 30px
    float left
    font-size 20px
    font-family '楷体'
    font-weight bold
    line-height 30px
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
    .header_button
      height 15px
      float right
      color #b4282d
      border 1px solid #b4282d
      background-color #fff
      padding: 2px 5px
      line-height: 15px
      border-radius 3px

 
</style>
