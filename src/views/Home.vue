<template>
  <div class="home">
    <el-container style="height: 942px;  background-color : #FFFFFF; border: 1px solid #eee  ">
      <avue-crud :data="data" :option="option" ref="crud">
        <template slot="menuLeft">
          <div class="right-items" style="float: right;">
            <el-button type="warning" size="small" round @click.stop="handleAdd()">新增发文办理</el-button>
          </div>
        </template>
        <template slot="menuForm">
          <el-button
            type="primary"
            icon="el-icon-check"
            size="small"
            plain
            @click.stop="rowSave()"
          >自定义按钮</el-button>
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
    </el-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: [
        {
          id: "1",
          status: "已办",
          title: "三门峡市",
          name: "张三"
        },
        {
          id :"2",
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
       
        page: false,
        align: "center",
        menuAlign: "center",
        column: [
        {
            label: "序号",
            prop: "id"
          },
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
      this.$refs.crud.rowAdd();
    },
    handleEdit(row, index) {
      this.$refs.crud.rowEdit(row, index);
    }
  }
};
</script>
