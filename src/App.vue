<template>
  <div id="app">
      <!-- <el-col :span="4" >
        <div class="padding"></div>
      </el-col> -->
        <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
          <el-menu-item index="1">数据管理</el-menu-item>
          <el-menu-item index="2">相似图片</el-menu-item>
          <el-menu-item index="3">图片识别</el-menu-item>
          <el-menu-item index="4">About</el-menu-item>
        </el-menu>
        <router-view/>
      <!-- <el-col :span="4" >
        <div class="padding"></div>
      </el-col> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: "1"
    };
  },
  methods: {
    handleSelect(index) {
      console.log(index);
      switch (index) {
        case "1":
          this.$router.push("/DataManage");
          break;
        case "2":
          this.$router.push("/SearchLike");
          break;
        case "3":
          this.$router.push("/Identify");
          break;
        case "4":
          this.$router.push("/About");
          break;
      }
    }
  }
};
</script>
>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
  width: 100%;
}

html,body {
  width: 100%;
  height: 100%;
}

.padding{
  background:#f6f6f6;
  display:inline-block;
}
</style>
