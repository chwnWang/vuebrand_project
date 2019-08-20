<template>
    <div id="app">
      <router-view></router-view>
      <FooterGuide v-show="$route.meta.FooterGuide"/>
    </div>
    
</template>

<script>
import FooterGuide from './pages/FooterGuide/FooterGuide'
export default {
  components:{
    FooterGuide
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "/assets/fonts/iconfont.css"
  #app
    position relative
    width 100%
    padding-bottom 50px
    background: #f5f5f5;


</style>
