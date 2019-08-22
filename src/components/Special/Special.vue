<template>
    <div class="special">
        <div class="special_title">
            <h1 class="special_top_h1">
                专题精选
            </h1>
            <div class="special_top_right">
                <span>更多</span>
                <i class="iconfont icon-youjiantou"></i>
            </div>
        </div>
        <div class="bs" ref="bs">
          <div class="special_swiper">
          <div class="swiperItem" v-for="(item, index) in topicList" :key="index">
              <img class="swiperItem_img" :src="item.itemPicUrl" alt="">
              <p class="swiperItem_p1">{{item.title}}</p>
              <p class="swiperItem_p2">{{item.subtitle}}</p>
          </div>
        </div>
        </div>  
       
    </div>
            
</template>

<script type="text/ecmascript-6">
  import BScroll from 'better-scroll'
  import { mapState } from 'vuex'
  export default {
    computed:{
      ...mapState({
        topicList:state=>state.home.homeData.topicList
      })
    },
    mounted(){
      new BScroll(this.$refs.bs,{
        scrollX: true,
        scrollY: false,
        click: true
})
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
 .special
      width 100%
      padding 10px
      box-sizing border-box
      background: #fff
      margin-top 10px
      .special_title
        width 100%
        height 40px
        padding 10px
        box-sizing border-box
        .special_top_h1
          float left
          font-size 20px
        .special_top_right
          float: right
          display flex
          span
            font-size 14px
          .iconfont
            font-size 18px


      .bs
        width 100%
        display flex
        overflow hidden
        .special_swiper
          display flex
          .swiperItem
            width 260px
            float left
            margin-right 20px
            background-color #F5F5F5
            border-radius 5px
            .swiperItem_img
              width 100%
              height 140px
              border-radius 5px
            .swiperItem_p1
              font-size 16px
              margin 8px 0px 8px 10px
            .swiperItem_p2
              font-size 12px
              color #7F7F7F
              margin 0px 0px 10px 10px







 
</style>

