<template>
  <div class="cat_conent" ref="rightList">
        <!--右侧02-->
        <div class="category_right" v-if="categoryData[currIndex]" >
            <div class="right_top">
                <img :src="categoryData[currIndex].wapBannerUrl"/>
            </div>
            <div class="right_List" >
                <div class="right_List_item" v-for="(subCate, index) in categoryData[currIndex].subCateList" :key="index">
                  <img class="itemImg" :src="subCate.wapBannerUrl">
                    <p class="itemText">{{subCate.name}}</p>
                </div>
            </div>
        </div>
        <!--右侧02-->
        <div class="category_right" v-else>
            <div class="right_top">
                <img src="./images/cat/c03.jpg"/>
            </div>
            <div class="right_conent">
                <div class="list_title">
                    <h3>当季热销</h3>
                </div>
                <div class="right_List">
                    <div class="right_List_item">
                        <img class="itemImg" src="./images/cat/c04.png">
                        <p class="itemText">50元幸福好物</p>
                    </div>
                    <div class="right_List_item">
                        <img class="itemImg" src="./images/cat/c04.png">
                        <p class="itemText">50元幸福好物</p>
                    </div>
                    <div class="right_List_item">
                        <img class="itemImg" src="./images/cat/c04.png">
                        <p class="itemText">50元幸福好物</p>
                    </div>
                    <div class="right_List_item">
                        <img class="itemImg" src="./images/cat/c04.png">
                        <p class="itemText">50元幸福好物</p>
                    </div>
                </div>
            </div>

            <div class="right_conent">
                <div class="list_title">
                    <h3>当季热销</h3>
                </div>
                <div class="right_List">
                    <div class="right_List_item">
                        <img class="itemImg" src="./images/cat/c04.png">
                        <p class="itemText">50元幸福好物</p>
                    </div>
                    <div class="right_List_item">
                        <img class="itemImg" src="./images/cat/c04.png">
                        <p class="itemText">50元幸福好物</p>
                    </div>
                    <div class="right_List_item">
                        <img class="itemImg" src="./images/cat/c04.png">
                        <p class="itemText">50元幸福好物</p>
                    </div>
                    <div class="right_List_item">
                        <img class="itemImg" src="./images/cat/c04.png">
                        <p class="itemText">50元幸福好物</p>
                    </div>
                </div>
            </div>

            <div class="right_conent">
                <div class="list_title">
                    <h3>当季热销</h3>
                </div>
                <div class="right_List">
                    <div class="right_List_item">
                        <img class="itemImg" src="./images/cat/c04.png">
                        <p class="itemText">50元幸福好物</p>
                    </div>
                    <div class="right_List_item">
                        <img class="itemImg" src="./images/cat/c04.png">
                        <p class="itemText">50元幸福好物</p>
                    </div>
                    <div class="right_List_item">
                        <img class="itemImg" src="./images/cat/c04.png">
                        <p class="itemText">50元幸福好物</p>
                    </div>
                    <div class="right_List_item">
                        <img class="itemImg" src="./images/cat/c04.png">
                        <p class="itemText">50元幸福好物</p>
                    </div>
                </div>
            </div>

        </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import {mapState} from 'vuex'
  import BScroll from 'better-scroll'
  export default {
    props:{
        categoryData:Array
    },
    data () {
        return{
            isShow : true //初始化显示
        }
    },
    computed:{
        ...mapState({
            currIndex:state=>state.category.currIndex
        })
    },
    watch: {
      categoryData: {
        deep: true,
        handler () {
            console.log(this)
          this.$nextTick(()=>{
            if(this.cScroll){
              this.cScroll.refresh()
            }else{
              this.cScroll = new BScroll(this.$refs.rightList, {click: true,scrollY: true})
            }
          })
        }
      }
    },   
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .cat_conent
    width 75%
    height 540px
    overflow hidden
    .category_right
        width 100%
        .right_top
          img
            width 100%
            height 100px
        /*右侧01*/
        .right_List
          width 100%
          display flex
          flex-wrap wrap
          padding-top 6px
          box-sizing border-box
          .right_List_item
            width 33%
            display flex
            flex-direction column
            align-items center
            justify-content center
            padding 5px
            box-sizing border-box
            .itemImg
              width 80px
              height 80px
            .itemText
              font-size 12px
              text-align center



        /*右侧02*/
        .right_conent
          width 100%
          padding-top 20px
          box-sizing border-box
          .list_title
            width 100%
            padding-bottom 10px
            box-sizing border-box
            bottom-border-1px(#EDEDED)
            h3
              font-size 14px
              font-weight bold
          .right_List
            width 100%
            display flex
            flex-wrap wrap
            padding-top 6px
            box-sizing border-box
            .right_List_item
              width 33%
              display flex
              flex-direction column
              align-items center
              justify-content center
              padding 5px
              box-sizing border-box
              .itemImg
                width 80px
                height 80px
              .itemText
                font-size 12px
                text-align center








 
</style>
