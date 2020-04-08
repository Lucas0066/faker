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
          name: "张三",
          sex: "男"
        },
        {
          name: "李四",
          sex: "女"
        }
      ],
      option: {
        columnBtn: false,
        refreshBtn: false,
        saveBtn: false,
        updateBtn: false,
        cancelBtn: false,
        addBtn: false,
        delBtn: false,
        editBtn: false,
        index: true,
        page: false,

        align: "center",
        menuAlign: "center",
        column: [
          {
            label: "姓名",
            prop: "name"
          },
          {
            label: "性别",
            prop: "sex"
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
