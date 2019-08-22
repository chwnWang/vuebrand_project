<template>
  <div>
    <!--头部-->
    <Header>
      <span class="header_text" slot="left">
          网易严选
      </span>
      <div class="header_mid" slot="center" @click="$router.push('/search')">
          <i class="iconfont icon-sousuo"></i>
          <input class="header_input" type="text" placeholder="搜索商品,共2015款好物"/>
      </div>
      <div class="header_right" slot="right">
          <a class="header_button" href="###" @click="$router.replace('login')">登录</a>
      </div>
    </Header>
    <!--头部导航-->
    <HeaderNav :kingKongModule="homeData.kingKongModule"/>
    <!--轮播-->
    <HomeSwiper/>
    <!--商品分类01000-->
    <ul class="home_shop_explain ">
      <li class="shopTopItem" v-for="(policyDesc, index) in homeData.policyDescList" :key="index">
          <span class="ItemImg">
              <img :src="policyDesc.icon"/>
          </span>
          <span class="ItemText">{{policyDesc.desc}}</span>
      </li>
    </ul>
    <!--商品分类01-->
    <div class="home_shopcty">
      <ul class="home_shop_list" v-if="homeData.kingKongModule">
        <li class="categoryItem" v-for="(item, index) in homeData.kingKongModule.kingKongList" :key="index">
            <span class="categoryImg">
                <img :src="item.picUrl"/>
            </span>
            <span class="categoryText">{{item.text}}</span>
        </li>

      </ul>
    </div>
     <!--网易员工-->
    <div class="yuangong">
        <img src="./images/demo/wnagyiyuangong.gif"/>
    </div>
    <!--商品4格布局222-->
    <ShoopingWelfare :ShoppingData="homeData.sceneLightShoppingGuideModule"/>
    <!--私人订制222-->
    <ShopPersonal :personalShop="homeData.personalShop"/>
    <!--限时购222-->
    <DesenoTime :flashSaleModule="homeData.flashSaleModule"/>
    <!--新品首发222-->
    <ShopPublish :newItemList="homeData.newItemList"/>
    <!--人气推荐-->
    <Recommend/>
    <!--类目热销榜-->
    <HoeSell/>
    <!--专题精选222-->
    <Special/>
    <!--众筹22-->
    <Crowdfunding/>
    <!--底部-->
    <HomeFooter/>
  </div>
 





</template>

<script type="text/ecmascript-6">
  import Header from '../../components/HeaderGuide/HeaderGuide'
  import HeaderNav from '../../components/HeaderNavGuide/HeaderNavGuide'
  import HomeSwiper from '../../components/HomeSwiper/HomeSwiper'
  import ShoopingWelfare from '../../components/ShoopingWelfare/ShoopingWelfare'
  import ShopPersonal from '../../components/ShopPersonal/ShopPersonal'
  import DesenoTime from '../../components/DesenoTime/DesenoTime'
  import ShopPublish from '../../components/Publish/Publish'
  import Recommend from '../../components/Recommend/Recommend'
  import HoeSell from '../../components/HoeSell/HoeSell'
  import Special from '../../components/Special/Special'
  import Crowdfunding from '../../components/Crowdfunding/Crowdfunding'
  import HomeFooter from '../../components/HomeFooter/HomeFooter'

  import {mapState} from 'vuex'
  export default {

    computed:{
      ...mapState({
        homeData: state => state.home.homeData
      })
    },

    async mounted(){
      await this.$store.dispatch('getHomeData')
    },

    components:{
      Header,
      HeaderNav,
      HomeSwiper,
      ShoopingWelfare,
      ShopPersonal,
      DesenoTime,
      ShopPublish,
      Recommend,
      HoeSell,
      Special,
      Crowdfunding,
      HomeFooter
    },
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .home_shop_explain
    width 100%
    height 36px
    display flex
    padding 10px
    box-sizing border-box
    background #fff
    .shopTopItem
      width 33%
      display flex
      align-items center
      justify-content center
      .ItemImg
        img
          width 20px
          height 20px
      .ItemText
        font-size 13px

  .home_shopcty
    width 100%
    .home_shop_list
      width 100%
      height 100%
      display flex
      flex-wrap wrap
      padding 0px 10px
      box-sizing border-box
      padding-bottom 20px
      background #ffffff
      .categoryItem
        width 20%
        display flex
        flex-direction column
        align-items center
        justify-content center
        .categoryImg
          img
            width 60px
            height 60px
        .categoryText
          font-size 12px
          margin-top 5px
  .yuangong
    width 100%
    height 60px
    img
      width 100%
      height 100%
    



    


























</style>
