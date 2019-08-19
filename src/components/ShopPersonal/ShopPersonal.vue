<template>
   <div class="shopPersonal">
    <h1 class="shopPersonal_name">私人订制</h1>
    <div class="swiper-container" id="personalSwiper">
        <div class="swiper-wrapper">
            <div class="swiper-slide">
                <div class="slideItem">
                    <img src="./images/demo/yifu01.png"/>
                    <p>男士1服装<span class="shopPrice">¥99.9</span></p>
                </div>
                <div class="slideItem">
                    <img src="./images/demo/yifu01.png"/>
                    <p>男士1服装<span class="shopPrice">¥99.9</span></p>
                </div>
                <div class="slideItem">
                    <img src="./images/demo/yifu01.png"/>
                    <p>男士1服装<span class="shopPrice">¥99.9</span></p>
                </div>
            </div>
            <div class="swiper-slide">
                <div class="slideItem">
                    <img src="./images/demo/yifu01.png"/>
                    <p>男士2服装<span class="shopPrice">¥99.9</span></p>
                </div>
                <div class="slideItem">
                    <img src="./images/demo/yifu01.png"/>
                    <p>男士2服装<span class="shopPrice">¥99.9</span></p>
                </div>
                <div class="slideItem">
                    <img src="./images/demo/yifu01.png"/>
                    <p>男士2服装<span class="shopPrice">¥99.9</span></p>
                </div>
            </div>

        </div>
        <!-- Add Pagination -->
        <div class="swiper-pagination" id="personalSwiper_pagination" ></div>
    </div>
  </div>
            
            
</template>

<script type="text/ecmascript-6">
  import Swiper from 'swiper'
  import '../../../static/css/swiper.min.css'
  export default {
    mounted(){
      new Swiper('#personalSwiper', {
          loop:true,
          spaceBetween: 30,
          centeredSlides: true,
          autoplay: {
              delay: 2500,
              disableOnInteraction: false,
          },
          pagination: {
              el: '#personalSwiper_pagination',
              clickable: true,
          },
      });
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
    .shopPersonal
      width 100%
      margin-top 10px
      background #fff
      padding 10px
      box-sizing border-box
      .shopPersonal_name
        font-size 20px
        padding-bottom 15px
      .swiper-container
        width 100%
        height 180px
        .swiper-wrapper
          width 100%
          .swiper-slide
            width 100%
            display flex
            .slideItem
              width 30%
              display flex
              flex-direction column
              align-items center
              justify-content center
              margin-left 10px
              img
                width 100px
                height 110px
                background #F5F5F5
                margin-bottom 20px
                margin-top -40px
              p
                font-size 12px
                white-space wrap
                .shopPrice
                  color red

        .swiper-pagination
          height 5px
          .swiper-pagination-bullet
            width 5px
            height 5px
          /deep/ .swiper-pagination-bullet-active
            width 5px
            height 5px
            background red
    
 
</style>
