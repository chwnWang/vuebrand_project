<template>
    <div class="crowdfunding">
        <div class="crowdfunding_title">
            <h1 class="crowdfunding_top_h1">
                众筹
            </h1>
            <div class="crowdfunding_top_right">
                <span>更多</span>
                <i class="iconfont icon-youjiantou"></i>
            </div>
        </div>
        <div class="crowdfunding_list">
            <div class="crowdfunding_list_item">
                <div class="crowdfunding_l">
                    <img src="./images/demo/007.png"/>
                </div>
                <div class="crowdfunding_r">

                    <p class="crowdfunding_r_p1">一把七亿岁的</p>

                    <p class="crowdfunding_r_p2">¥1999<span>起</span></p>
                    <p class="crowdfunding_r_p3"><span class="span01" ></span><span class="span02">53%</span></p>
                    <p class="crowdfunding_r_p4">1533人已支持</p>

                </div>
            </div>
            <div class="crowdfunding_list_item">
                <div class="crowdfunding_l">
                    <img src="./images/demo/007.png"/>
                </div>
                <div class="crowdfunding_r">

                    <p class="crowdfunding_r_p1">一把七亿岁的</p>

                    <p class="crowdfunding_r_p2">¥1999<span>起</span></p>
                    <p class="crowdfunding_r_p3"><span class="span01" ></span><span class="span02">53%</span></p>
                    <p class="crowdfunding_r_p4">1533人已支持</p>

                </div>
            </div>
        </div>


    </div>
            
</template>

<script type="text/ecmascript-6">
  export default {
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.crowdfunding
      width 100%
      padding 10px
      box-sizing border-box
      background-color #fff
      margin-top 10px
      .crowdfunding_title
        width 100%
        height 40px
        padding 10px
        box-sizing border-box
        .crowdfunding_top_h1
          float left
          font-size 20px
        .crowdfunding_top_right
          float: right
          display flex
          span
            font-size 14px
          .iconfont
            font-size 18px



      .crowdfunding_list
        width 100%
        .crowdfunding_list_item
          width 100%
          display flex
          margin-bottom 20px
          .crowdfunding_l
            width 30%
            background-color #f5f5f5
            img
             width 100%
          .crowdfunding_r
            padding 10px
            width 70%
            .crowdfunding_r_p1
              font-size 14px
            .crowdfunding_r_p2
              font-size 14px
              color #b4282d
              margin 10px 0px
            .crowdfunding_r_p3
              display flex
              position relative
              margin-bottom 10px
              .span01
                 width 80%
                 height 1px
                 background-color #ededed
                 vertical-align: middle;
              .span02
                 font-size 14px
                 vertical-align: middle;
                 position absolute
                 right 0px
                 bottom -5px
            .crowdfunding_r_p4
              font-size 14px





    
 
</style>
