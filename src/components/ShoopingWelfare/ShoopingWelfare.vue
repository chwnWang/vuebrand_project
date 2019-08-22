<template>
    <div class="shoopingWelfare">
        <div class="WelfareItem" v-for="(item, index) in ShoppingData" :key="index">
            <div class="WelfareItem_top" >
                <p class="WelfareItem_top_p1">{{item.styleItem.title}}</p>
                <p class="WelfareItem_top_p2">{{item.styleItem.desc}}</p>
            </div>
            <div class="WelfareItem_bot" >
                <div class="WelfareItem_bot_Img" v-for="(itemPicBean, index) in item.styleItem.itemPicBeanList" :key="index">
                    <img :src="itemPicBean.picUrl">
                </div>
            </div>
        </div>
        </div>
    

</template>

<script type="text/ecmascript-6"> 
  import { mapState } from 'vuex';
  export default {
      props:{
        ShoppingData:Array
      },
    //   computed:{
    //       ...mapState({
    //           ShoppingData:state=>state.home.homeData.sceneLightShoppingGuideModule
    //       })
    //   }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .shoopingWelfare
      width 100%
      display flex
      flex-wrap wrap
      padding 10px
      box-sizing border-box
      background #ffffff
      .WelfareItem
        width 49%
        height 140px
        background #F5F5F5
        margin 1px
        padding 5px 0px 0px 5px
        box-sizing border-box
        .WelfareItem_top
          width 100%
          padding: 10px 10px 0px 10px;
          box-sizing border-box
          .WelfareItem_top_p1
            font-size 17px
            height 20px
            line-height 20px
          .WelfareItem_top_p2
            font-size 12px
            height 20px
            line-height 20px
            color #7f7f7f
        .WelfareItem_bot
          width 100%
          display flex
          .WelfareItem_bot_Img
            width 50%
            img
              width 80px
              height 80px

    
 
</style>
