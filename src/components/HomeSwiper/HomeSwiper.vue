<template>
  <div class="swiper-container" id="homeSwiper">
    <div class="swiper-wrapper">
      <div class="swiper-slide">  <img src="./images/nav/banner_01.png"/></div>
      <div class="swiper-slide">  <img src="./images/nav/banner_02.jpg"/></div>
      <div class="swiper-slide">  <img src="./images/nav/banner_03.jpg"/></div>
      <div class="swiper-slide">  <img src="./images/nav/banner004.jpg"/></div>
      <div class="swiper-slide">  <img src="./images/nav/banner005.jpg"/></div>
      <div class="swiper-slide">  <img src="./images/nav/banner006.jpg"/></div>
    </div>
    <div class="swiper-pagination" id="homeSwiper_pagination"></div>
  </div>
            
</template>

<script type="text/ecmascript-6">
  import Swiper from 'swiper'
  import '../../../static/css/swiper.min.css'
  export default {
    mounted(){
      new Swiper('#homeSwiper', {
          loop:true,
          spaceBetween: 30,
          centeredSlides: true,
          autoplay: {
              delay: 2500,
              disableOnInteraction: false,
          },
          pagination: {
              el: '#homeSwiper_pagination',
              clickable: true,
          },
      });
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .swiper-container
    width 100%
    height 200px
    margin-top 85px
    .swiper-wrapper
      .swiper-slide
        img
          width 100%
          height 100%
    .swiper-pagination
      .swiper-pagination-bullet
        width 30px
        height 3px
      /deep/ .swiper-pagination-bullet
        width 30px
        height 3px
        background #fff
  

    
 
</style>
