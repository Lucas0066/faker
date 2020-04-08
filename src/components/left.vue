<template>
  <el-menu
    default-active="2"
    class="el-menu-vertical-demo"
    @open="handleOpen"
    @close="handleClose"
    router="true"
  >
    <el-menu-item index="/">
      <i class="el-icon-edit-outline"></i>
      <span slot="title">发文办理</span>
    </el-menu-item>
    <el-menu-item index="/about">
      <i class="el-icon-document-add"></i>
      <span slot="title">收文办理</span>
    </el-menu-item>
    <el-menu-item index="/tran">
      <i class="el-icon-sort"></i>
      <span slot="title">公文流转</span>
    </el-menu-item>
    <el-menu-item index="/save">
      <i class="el-icon-folder-opened"></i>
      <span slot="title">存档文库</span>
    </el-menu-item>
  </el-menu>
</template>
<script>
export default {
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>