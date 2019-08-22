<template>
    <div class="discover">
        <!--横向导航-->
        <div class="home_top" ref="homtopList">
            <ul class="home_top_list" v-if="tabData">
                <li class="listItem" v-for="(item, index) in tabData" :key="index">
                  <a  href="###" :class="{active: curTab === item.tabId}">{{item.tabName}}</a>
                </li>
            </ul>
        </div>
        <!--内容 style1大 style2 小-->
        <div class="seeShop_content" v-if="recommendData">
            <div class="content_top">
                <img src="./images/see/s01.jpg"/>
            </div>
            <div class="content_list"  v-for="(item, index) in recommendData.result" :key="index">
                <div class="listItem itemMou1" v-if="topic.style===1" v-for="(topic, index) in item.topics" :key="index">
                    <div class="itemTitle">
                        <img :src="topic.avatar"/>
                        <span>{{topic.nickname}}</span>
                    </div>
                    <div class="itemText">
                        <span>{{topic.title}}~</span>
                    </div>
                    <div class="itemImg">
                        <img :src="topic.picUrl">
                    </div>
                    <div class="itembot">
                        <i class="iconfont icon-ai-eye"></i>
                        <span>{{topic.readCount}}人看过</span>
                    </div>
                </div>

                <div class="listItem itemMou2" v-if="topic.style===2" v-for="(topic, index) in item.topics">
                    <div class="itemTitle">
                        <div class="itemTitle_s1">
                            <img :src="topic.avatar"/>
                            <span>{{topic.nickname}}</span>
                        </div>
                        <div class="itemTitle_s2">{{topic.title}}</div>
                        <div class="itemTitle_s3">{{topic.subTitle}}</div>
                        <div class="itemTitle_s4"> <i class="iconfont icon-ai-eye"></i>
                            <span>{{topic.readCount}}人看过</span></div>
                    </div>
                    <div class="itemImg">
                        <img :src="topic.picUrl"/>
                    </div>

                </div>

                <div class="listItem itemMou3 " v-if="item.look">
                   <div class="itemTitle">
                        <img :src="item.look.avatar"/>
                        <span>{{item.look.nickname}}</span>
                    </div>
                    <div class="itemText">
                        <span>{{item.look.content}}</span>
                    </div>
                    <div class="itemImg" >
                        <img :src="item.look.lookPics[0].picUrl">
                    </div>
                    <div class="itembot">
                        <i class="iconfont icon-ai-eye"></i>
                        <span>{{item.look.readCount}}人看过</span>
                    </div>
                </div>
                 
            </div>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
  import BScroll from 'better-scroll'
import { mapState } from 'vuex';
  export default {
      data(){
         return{
           curTab:9
         }
      },
      computed:{
        ...mapState({
          tabData : state=>state.seeShop.tabData,
          recommendData:state=>state.seeShop.recommendData
        })
      },
      mounted(){
          this.$store.dispatch('getTabData'),
          this.$store.dispatch('getAutoRecommendData'),
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
                width 140px
                height 140px


          .itemMou3 
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
                width 345px
                height 460px
            .itembot
              display flex
              align-items center
              width 100%
              color #999
              font-size 12px
              span
                margin-left 5px        





</style>
