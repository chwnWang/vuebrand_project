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
    <HeaderNav/>
    <!--轮播-->
    <HomeSwiper/>
    <!--商品分类01-->
    <ul class="home_shop_explain ">
      <li class="shopTopItem">
          <span class="ItemImg">
              <img src="./images/demo/003.png"/>
          </span>
          <span class="ItemText">网易自营品牌</span>
      </li>
      <li class="shopTopItem">
          <span class="ItemImg">
              <img src="./images/demo/002.png"/>
          </span>
          <span class="ItemText">30天无忧退货</span>
      </li>
      <li class="shopTopItem">
          <span class="ItemImg">
              <img src="./images/demo/001.png"/>
          </span>
          <span class="ItemText">48小时快速退款</span>
      </li>
    </ul>
    <!--商品分类01-->
    <div class="home_shopcty">
      <ul class="home_shop_list">
        <li class="categoryItem">
            <span class="categoryImg">
                <img src="./images/demo/01.gif"/>
            </span>
            <span class="categoryText">新品首发</span>
        </li>
        <li class="categoryItem">
              <span class="categoryImg">
                <img src="./images/demo/02.gif"/>
              </span>
              <span class="categoryText">居家生活</span>
        </li>
        <li class="categoryItem">
              <span class="categoryImg">
                <img src="./images/demo/01.gif"/>
            </span>
            <span class="categoryText">服饰鞋包</span>
        </li>
        <li class="categoryItem">
            <span class="categoryImg">
                <img src="./images/demo/02.gif"/>
            </span>
            <span class="categoryText">美食酒水</span>
        </li>
        <li class="categoryItem">
              <span class="categoryImg">
                <img src="./images/demo/01.gif"/>
            </span>
            <span class="categoryText">个护清洁</span>
        </li>
        <li class="categoryItem">
              <span class="categoryImg">
                <img src="./images/demo/02.gif"/>
            </span>
            <span class="categoryText">母婴亲子</span>
        </li>
        <li class="categoryItem">
              <span class="categoryImg">
                <img src="./images/demo/01.gif"/>
            </span>
            <span class="categoryText">运动旅行</span>
        </li>
        <li class="categoryItem">
              <span class="categoryImg">
                <img src="./images/demo/02.gif"/>
            </span>
            <span class="categoryText">数码家电脑</span>
        </li>
        <li class="categoryItem">
              <span class="categoryImg">
                <img src="./images/demo/01.gif"/>
            </span>
            <span class="categoryText">全球特色</span>
        </li>
        <li class="categoryItem">
            <span class="categoryImg">
                <img src="./images/demo/02.gif"/>
            </span>
            <span class="categoryText">超级会员</span>
        </li >


      </ul>
    </div>
     <!--网易员工-->
    <div class="yuangong">
        <img src="./images/demo/wnagyiyuangong.gif"/>
    </div>
    <!--商品4格布局-->
    <ShoopingWelfare/>
    <!--私人订制-->
    <ShopPersonal/>
    <!--限时购-->
    <DesenoTime/>
    <!--人气推荐-->
    <Recommend/>
    <!--类目热销榜-->
    <HoeSell/>
    <!--专题精选-->
    <Special/>
    <!--众筹-->
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
  import Recommend from '../../components/Recommend/Recommend'
  import HoeSell from '../../components/HoeSell/HoeSell'
  import Special from '../../components/Special/Special'
  import Crowdfunding from '../../components/Crowdfunding/Crowdfunding'
  import HomeFooter from '../../components/HomeFooter/HomeFooter'
  export default {
    components:{
      Header,
      HeaderNav,
      HomeSwiper,
      ShoopingWelfare,
      ShopPersonal,
      DesenoTime,
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
