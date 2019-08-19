<template>
  <div id="footer" class="" >
    <div class="footerItem" :class="{active: $route.path==='/home'}" @click="goTo('/home')">
        <i class="iconfont icon-icon-test"></i>
        
        <span>首页</span>
    </div>
    <div class="footerItem" :class="{active: $route.path==='/category'}" @click="goTo('/category')">
        <i class="iconfont icon-tubiaolunkuo-"></i>
        <span>分类</span>
    </div>
    <div class="footerItem" :class="{active: $route.path==='/seeShop'}" @click="goTo('/seeShop')">
        <i class="iconfont icon-shangpin"></i>
        <span>识物</span>
    </div>
    <div class="footerItem" :class="{active: $route.path==='/shopCar'}" @click="goTo('/shopCar')">
        <i class="iconfont icon-gouwuche"></i>
        <span>购物车</span>
    </div>
    <div class="footerItem" :class="{active: $route.path==='/personage'}" @click="goTo('/personage')">
        <i class="iconfont icon-geren"></i>
        <span>个人</span>
    </div>
  </div>
  
</template>

<script type="text/ecmascript-6">
  export default {
    methods:{
      goTo(path){
        this.$router.replace(path)
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../assets/fonts/iconfont.css"
  #footer
    width 100%
    height 50px
    position fixed
    z-index  1000
    left 0
    bottom 0
    display flex
    border-top 1px solid #f1f1f1
    background-color #fff
    .footerItem
      width 20%
      height 50px
      display flex
      flex-direction column
      justify-content center
      align-items center
      color #999999
      &.active
        color #b4282d
      .iconfont
        font-size 25px
        padding-bottom  2px





 
</style>
