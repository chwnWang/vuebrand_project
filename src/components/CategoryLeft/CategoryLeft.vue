<template>
    <div class="category_left" ref="leftList">
        <ul class="left_list">
            <li class="listItem"><a class="active" href="###">推荐</a></li>
            <li class="listItem"><a href="###">居家生活</a></li>
            <li class="listItem"><a href="###">生活用品</a></li>
            <li class="listItem"><a href="###">美食酒水</a></li>
            <li class="listItem"><a href="###">推荐</a></li>
            <li class="listItem"><a href="###">居家生活</a></li>
            <li class="listItem"><a href="###">生活用品</a></li>
            <li class="listItem"><a href="###">美食酒水</a></li>
            <li class="listItem"><a href="###">推荐</a></li>
            <li class="listItem"><a href="###">居家生活</a></li>
            <li class="listItem"><a href="###">生活用品</a></li>
            <li class="listItem"><a href="###">美食酒水</a></li>
        </ul>
    </div>
</template>

<script type="text/ecmascript-6">
  import BScroll from 'better-scroll'
  export default {
    mounted(){
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
        height 500px
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
