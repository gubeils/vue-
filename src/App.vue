<template>
  <div>
   <MyHeader/>
   <router-view/>
    <MyFooter/>
  </div>
</template>

<script>
import './assets/css/base.css'
import './assets/css/animate.css'
import MyHeader from './components/MyHeader.vue';
import MyFooter from './components/MyFooter.vue'
  export default {
    components: { MyHeader, MyFooter }
}
</script>

<style lang="scss" scoped>
.box{
  width: 100%;
  height: 100%;
  background-color: #f5f5f5;
}
</style>