<template>
  <div class="home">
    <el-row class="tab-list">
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="已办" name="first"></el-tab-pane>
        <el-tab-pane label="待办" name="second"></el-tab-pane>
      </el-tabs>
      <avue-crud :data="data" :option="option" ref="crud">
        <template slot="menuRight">
          <el-button type="warning" round @click="handleAdd()">新增发文</el-button>
        </template>
        <template slot="status" slot-scope="scope">
          <el-tag type="info">{{scope.row}}</el-tag>
        </template>

        <template slot-scope="scope" slot="menu">
          <el-button
            type="text"
            icon="el-icon-document"
            size="small"
            plain
            @click.stop="handleEdit(scope.row,scope.index)"
          >办理</el-button>
        </template>
      </avue-crud>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeName: "first",
      data: [
        {
          status: "已办",
          title: "三门峡市",
          name: "张三"
        },
        {
          status: "已办",
          title: "三门峡市",
          name: "赵四"
        }
      ],

      option: {
        columnBtn: false,
        refreshBtn: false,
        border: true,
        updateBtn: false,
        cancelBtn: false,
        addBtn: false,
        delBtn: false,
        editBtn: false,
        index: true,
        indexLabel: "序号",
        indexWidth: "80",
        page: false,
        align: "center",
        menuAlign: "center",
        column: [
          {
            label: "状态",
            prop: "status"
          },
          {
            label: "标题",
            prop: "title"
          },
          {
            label: "发起人",
            prop: "name"
          }
        ]
      }
    };
  },
  methods: {
    handleAdd() {
      this.$router.push({
       name: 'documentCategory'
      });
    },
    handleEdit(row, index) {
      this.$refs.crud.rowEdit(row, index);
    },
    handleClick(tab, event) {
      console.log(tab, event);
    }
  }
};
</script>
<style scoped>
.tab-list {
  min-height: calc(100vh - 118px);
  background: #ffffff;
  padding: 20px;
 
}
</style>