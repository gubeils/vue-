<template>
  <div class="main">
    <h1>404</h1>
    <router-link to="/">回到首页</router-link>
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style lang="scss" scoped>
.main{
  width: 100%; 
  height: 100%;
  background-color: #f5f5f5;
  text-align: center;
  h1{
    font-size: 100px;
    color: #ccc;
    margin-top: 100px;
  }
  a{
    display: inline-block;
    width: 100px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    background-color: #e6a23c;
    color: #fff;
    border-radius: 5px;
    margin-top: 50px;
  }
}
</style>