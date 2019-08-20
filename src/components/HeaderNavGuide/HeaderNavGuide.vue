<template>
    <div class="home_top">
        <div v-show="isShow" class="homeList"  ref="homeList">
          <ul class="home_top_list">
            <li class="listItem"><a class="active" href="###">推荐</a></li>
            <li class="listItem"><a href="###">居家生活</a></li>
            <li class="listItem"><a href="###">生活用品</a></li>
            <li class="listItem"><a href="###">美食酒水</a></li>
            <li class="listItem"><a href="###">居家生活</a></li>
            <li class="listItem"><a href="###">生活用品</a></li>
            <li class="listItem"><a href="###">美食酒水</a></li>
            <li class="listItem"><a href="###">居家生活</a></li>
            <li class="listItem"><a href="###">生活用品</a></li>
            <li class="listItem"><a href="###">美食酒水</a></li>
          </ul>
        </div>
        <div class="home_top_right" :class="{on:!isShow}" @click="updateShow"  >
            <i class="iconfont icon-xiangxiajiantou"></i>
        </div>
        <div v-show="!isShow" class="topBigList">
          <h1>全部频道</h1>
          <ul class="topList">
              <li class="listItem">生活用</li>
              <li class="listItem">美食酒</li>
              <li class="listItem">生活生活用用</li>
              <li class="listItem">美食酒</li>
              <li class="listItem">生活生活用用</li>
              <li class="listItem">美食酒</li>
              <li class="listItem">生用</li>
              <li class="listItem">美食生活用酒</li>
              <li class="listItem">生活用</li>
              <li class="listItem">美生活用食酒</li>
              <li class="listItem">生活用</li>
              <li class="listItem">美食酒</li>
          </ul>
          <div class="top_wrap"></div>
      </div>
    </div>
</template>

<script type="text/ecmascript-6">
  import BScroll from 'better-scroll'
  export default {
    data(){
      return{
        isShow : true
      }
    },
    methods:{
      updateShow(){
        this.isShow=!this.isShow
      } 
    },
    mounted(){
      this.$nextTick(()=>{
         new BScroll(this.$refs.homeList,{
            scrollX: true,
            scrollY: false,
            click: true
         })
      })
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.home_top
  position fixed
  top 45px
  left 0
  z-index 200
  width 100%
  height 40px
  display flex
  background-color: #ffffff;
  .homeList
    width 90%
    overflow hidden
    display flex
    background-color #fff
    .home_top_list
      height 40px
      display flex
      background #fff
      .listItem
        width 85px
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
    position absolute
    transition 0.5s
    right 0
    top 0
    z-index 200
    .iconfont
      font-size 20px
  .on
    transform rotate(180deg)
    transition 0.5s
  .topBigList
    position fixed
    top 45px
    left 0
    z-index 100
    transition 0.5s
    h1
      height 40px
      padding 10px
      box-sizing border-box
      font-size 14px
      background #ffffff
    .topList
      z-index 1
      display flex
      flex-wrap wrap
      padding 10px
      box-sizing border-box
      width 100%
      background #ffffff
      .listItem
        font-size 12px
        padding 8px
        box-sizing border-box
        border 1px solid #ededed
        margin 8px
        background-color #FAFAFA
    .top_wrap
      position fixed
      z-index -1
      background rgba(0,0,0,.5)
      top 0
      left 0
      right 0
      bottom 0
    



 
</style>
