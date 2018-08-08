<template>
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose">
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>puppy</span>
        </template>
          <el-menu-item index="1-1">puppy1</el-menu-item>
          <el-menu-item index="1-2">puppy2</el-menu-item>
          <el-menu-item index="1-3">puppy3</el-menu-item>
      </el-submenu>
    </el-menu>
</template>

<script>
export default {
    name:'ChooseTree',
    props:{

    },
    data(){
        return{

        }
    },
    methods:{
        handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
}
</script>

<style>

</style>
