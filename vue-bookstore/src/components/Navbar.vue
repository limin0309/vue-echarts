<template>
    <div>
      <div class="navbar navbar-inverse">
        <div class="container-fluid"><!--包含标题和导航-->
          <div class="navbar-header">
            <a class="navbar-brand">bookStore</a>
          </div>
          <ul class="navbar-nav nav"><!--导航部分-->
          <li><router-link to="/list" >图书列表</router-link></li>
          <li><router-link to="/add" >添加图书</router-link></li>
          </ul>
        </div>
      </div>
    </div>
</template>

<script type="text/ecmascript-6">
    export default{
        data(){
            return {}
        },
        components: {},
        methods: {}
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>
