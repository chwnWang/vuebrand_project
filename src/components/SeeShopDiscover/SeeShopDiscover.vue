<template>
    <div class="discover">
        <!--横向导航-->
        <div class="home_top" ref="homtopList">
            <ul class="home_top_list">
                <li class="listItem"><a  href="###">盛夏特别版</a></li>
                <li class="listItem"><a class="active" href="###">推荐</a></li>
                <li class="listItem"><a href="###">好货内部价</a></li>
                <li class="listItem"><a href="###">回购榜</a></li>
                <li class="listItem"><a href="###">晒单</a></li>
                <li class="listItem"><a href="###">开发者日记</a></li>
                <li class="listItem"><a href="###">达人</a></li>
                <li class="listItem"><a href="###">HOME</a></li>
            </ul>
        </div>
        <!--内容-->
        <div class="seeShop_content">
            <div class="content_top">
                <img src="./images/see/s01.jpg"/>
            </div>
            <div class="content_list">
                <div class="listItem itemMou1">
                    <div class="itemTitle">
                        <img src="./images/see/s04.png"/>
                        <span>我是前端设计师</span>
                    </div>
                    <div class="itemText">
                        <span>给男生挑礼物太太太难了！正在头疼的女生们，进来找找灵感吧~</span>
                    </div>
                    <div class="itemImg">
                        <img src="./images/see/s02.jpg">
                    </div>
                    <div class="itembot">
                        <i class="iconfont icon-ai-eye"></i>
                        <span>9312人看过</span>
                    </div>
                </div>

                <div class="listItem itemMou2">
                    <div class="itemTitle">
                        <div class="itemTitle_s1">
                            <img src="./images/see/s04.png"/>
                            <span>我是前端设计师</span>
                        </div>
                        <div class="itemTitle_s2">防晒霜成分全分享，科学防晒让你亮白一夏</div>
                        <div class="itemTitle_s3">安全无刺激，防晒力强又补水</div>
                        <div class="itemTitle_s4"> <i class="iconfont icon-ai-eye"></i>
                            <span>9312人看过</span></div>
                    </div>
                    <div class="itemImg">
                        <img src="./images/see/s03.jpg"/>
                    </div>

                </div>

                <div class="listItem itemMou1">
                    <div class="itemTitle">
                        <img src="./images/see/s04.png"/>
                        <span>我是前端设计师</span>
                    </div>
                    <div class="itemText">
                        <span>给男生挑礼物太太太难了！正在头疼的女生们，进来找找灵感吧~</span>
                    </div>
                    <div class="itemImg">
                        <img src="./images/see/s02.jpg">
                    </div>
                    <div class="itembot">
                        <i class="iconfont icon-ai-eye"></i>
                        <span>9312人看过</span>
                    </div>
                </div>

                <div class="listItem itemMou2">
                    <div class="itemTitle">
                        <div class="itemTitle_s1">
                            <img src="./images/see/s04.png"/>
                            <span>我是前端设计师</span>
                        </div>
                        <div class="itemTitle_s2">防晒霜成分全分享，科学防晒让你亮白一夏</div>
                        <div class="itemTitle_s3">安全无刺激，防晒力强又补水</div>
                        <div class="itemTitle_s4"> <i class="iconfont icon-ai-eye"></i>
                            <span>9312人看过</span></div>
                    </div>
                    <div class="itemImg">
                        <img src="./images/see/s03.jpg"/>
                    </div>

                </div>


            </div>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
  import BScroll from 'better-scroll'
  export default {
      mounted(){
          this.$nextTick(()=>{
              new BScroll(this.$refs.homtopList,{
                scrollX: true,
                scrollY: false,
                click: true
              })
              
          })
      }
      
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.discover
      .home_top
        width 100%
        display flex
        background-color #fafafa
        border-bottom 1px solid #d9d9d9
        border-top 2px solid #d9d9d9
        overflow hidden
        .home_top_list
          height 40px
          display flex
          .listItem
            width 75px
            height 100%
            text-align  center
            line-height 45px
            a
              font-size 14px
              padding-bottom 5px
              &.active
                color: #b4282d
                border-bottom 2px solid #b4282d

      .seeShop_content
        width 100%
        .content_top
          width 100%
          padding 15px
          background-color #ffffff
          box-sizing border-box
          margin-top 10px
          img
            width 100%
        .content_list
          width 100%
          .listItem
            width 100%
            padding 15px
            box-sizing border-box
            background-color #ffffff
            margin-top 10px
          .itemMou1
            .itemTitle
              width 100%
              height 30px
              display flex
              align-items center
              img
                width 30px
                height 30px
                border-radius 50%
              span
                margin-left 5px

            .itemText
              width 100%
              padding 10px 0px
              box-sizing border-box
              span
                font-size 18px
            .itemImg
              width 100%
              padding 10px 0px
              box-sizing border-box
              img
                width 100%
            .itembot
              display flex
              align-items center
              width 100%
              color #999
              font-size 12px
              span
                margin-left 5px
          .itemMou2
            width 100%
            display flex
            .itemTitle
              width 60%
              .itemTitle_s1
                display flex
                align-items center
                img
                  width 30px
                  height 30px
                  border-radius 50%
                span
                  margin-left 5px
              .itemTitle_s2
                width 100%
                font-size 18px
                padding 15px 0px
                box-sizing border-box
              .itemTitle_s3
                width 100%
                font-size 14px
                color #999
              .itemTitle_s4
                width 100%
                display flex
                align-items center
                color #999
                font-size 12px
                padding 15px 0px
                box-sizing border-box
                span
                  margin-left 5px
            .itemImg
              width 40%
              img
                width 100%





</style>
