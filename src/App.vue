<template>
  <div id="app">
    <el-container >
      <el-container>
        <el-aside width="240px" height="1014px">
          <left></left>
        </el-aside>
      </el-container>
    </el-container>
    <div id="nav"></div>
    <router-view />
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
 .el-aside {
    background-color: #FFFFFF;
    color: #333333;
    text-align: center;
    line-height: 1014px;
  }
</style>
