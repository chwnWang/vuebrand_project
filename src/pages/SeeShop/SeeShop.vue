<template>
  <div id="seeShop">
  <!--头部-->
    <div class="header">
        <span class="header_text">
            <i class="iconfont icon-zhuye" @click="$router.replace('/home')"></i>
        </span>

        <div class="header_mid">
            <span class="span01" :class="{active:isShow}" @click="conversion">发现</span>
            <span class="span02" :class="{active:!isShow}" @click="conversion">甄选家</span>
        </div>
        <div class="header_right">
            <i class="iconfont icon-search" @click="$router.push('/search')"></i>
            <i class="iconfont icon-gouwuche" @click="$router.replace('/shopCar')"></i>
        </div>
    </div>
  <!--发现-->
    <SeeShopDiscover v-if="isShow"/>
  <!--甄选家-->  
    <SessShopChooseHome v-else/>

  </div>
</template>

<script type="text/ecmascript-6">
  import SeeShopDiscover from '../../components/SeeShopDiscover/SeeShopDiscover'
  import SessShopChooseHome from '../../components/SessShopChooseHome/SessShopChooseHome'
  export default {
    data(){
      return{
          isShow:true //true  发现模块  false 甄选家
      }
    },
    components:{
      SeeShopDiscover,
      SessShopChooseHome
    },
    methods:{
      conversion(){
        this.isShow =!this.isShow
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  #seeShop
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
        display flex
        float left
        width: 60%;
        height 30px
        font-size 18px
        font-family '楷体'
        padding-left 60px
        box-sizing border-box
        line-height 27px
        span
          text-align center
          &.active
            font-size 24px
            color #b4282d
            font-weight bold
      .header_right
        width 20%
        display flex
        padding-top 5px
        .iconfont
          font-size 24px
          margin-left 10px



</style>
