<template>
  <div id="app">
    <el-container>
      <el-header style=" background-color: #C5292B ">公文处理系统</el-header>
      <el-container style="height: 1014px; border: 1px solid #eee ; background-color: #FAFAFA ">
        <el-aside width="240px" style="background-color: #FFFFFF ">
          <left></left>
        </el-aside>

        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>

    <div id="nav"></div>
  </div>
</template>
<script>
import left from "./components/left.vue";

export default {
  components: {
    left: left
  }
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
