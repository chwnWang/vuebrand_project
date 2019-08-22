<template>
    <div class="category_left" ref="leftList">
        <ul class="left_list">
            <li class="listItem"  v-for="(category, index) in categoryData" :key="index" @click="choiceCategory(index)">
              <a class="" href="###" :class='{active: currIndex===index}'>{{category.name}}</a>
              </li>
        </ul>
    </div>
</template>

<script type="text/ecmascript-6">
  import BScroll from 'better-scroll'
  import { mapState, mapGetters } from 'vuex';
  export default {
    computed:{
      ...mapState({
         currIndex:state=>state.category.currIndex
      })
    },
    props:{
      categoryData:Array
    },
    methods:{
      choiceCategory(currIndex){
         this.$store.dispatch('updateIndex',{currIndex});
      }
    },
    mounted(){
      console.log(this.categoryData)
      this.$nextTick(()=>{
        new BScroll(this.$refs.leftList,{
            scrollX: false,
            scrollY: true,
            click: true
        })
      })
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
    .category_left
        width 25%
        height 550px
        overflow hidden
        .left_list
          width 100%
          .listItem
            width 100%
            height 45px
            line-height 25px
            a
              width 100%
              padding-left 8px
              box-sizing border-box
              display block
              color black
              font-size 14px
              &.active
                color #b4282d
                border-left 2px solid #b4282d
      
 
</style>
