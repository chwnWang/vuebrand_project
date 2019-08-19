<template>
  <div class="cat_conent" ref="rightList">
        <!--右侧02-->
        <div class="category_right" style="display: none;" v-if="!isShow" >
            <div class="right_top">
                <img src="./images/cat/c01.jpg"/>
            </div>
            <div class="right_List">
                <div class="right_List_item">
                  <img class="itemImg" src="./images/cat/c02.png">
                    <p class="itemText">50元幸福好物</p>
                </div>
                <div class="right_List_item">
                    <img class="itemImg" src="./images/cat/c02.png">
                    <p class="itemText">50元幸福好物福好物</p>
                </div>
                <div class="right_List_item">
                    <img class="itemImg" src="./images/cat/c02.png">
                    <p class="itemText">50元幸福好物</p>
                </div>
                <div class="right_List_item">
                    <img class="itemImg" src="./images/cat/c02.png">
                    <p class="itemText">50元幸福好物</p>
                </div>
                <div class="right_List_item">
                    <img class="itemImg" src="./images/cat/c02.png">
                    <p class="itemText">50元幸福好物</p>
                </div>
                <div class="right_List_item">
                    <img class="itemImg" src="./images/cat/c02.png">
                    <p class="itemText">50元幸福好物</p>
                </div>
                <div class="right_List_item">
                    <img class="itemImg" src="./images/cat/c02.png">
                    <p class="itemText">50元幸福好物</p>
                </div>
                <div class="right_List_item">
                    <img class="itemImg" src="./images/cat/c02.png">
                    <p class="itemText">50元幸福好物</p>
                </div>
                <div class="right_List_item">
                    <img class="itemImg" src="./images/cat/c02.png">
                    <p class="itemText">50元幸福好物</p>
                </div>
            </div>
        </div>
        <!--右侧02-->
        <div class="category_right"  style="display: block;">
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
  import BScroll from 'better-scroll'
  export default {
    data () {
        return{
            isShow : true //初始化显示
        }
    },
    mounted(){
        this.$nextTick(()=>{
            new BScroll(this.$refs.rightList,{
                scrollX: false,
                scrollY: true,
                click: true
            })
        })
          
        
        
    }    
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
