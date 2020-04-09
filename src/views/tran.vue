<template>
    <el-row class="tab-list">
    <avue-crud :option="option" :data="list"></avue-crud>
    </el-row>
</template>
<script>
export default {
  data(){
    return {
      list:[],
      option:{
          addBtn: false,
          border: true,
        column:[{
          label:'序号',
          prop:'id'
        },{
          label:'标题',
          prop:'title'
        },{
          label:'文号',
          prop:'num'
        },
        {
          label:'来文机关',
          prop:'from'
        },
          {
          label:'状态',
          prop:'status'
        },
          {
          label:'收到时间',
          prop:'time'
        },
        ]
      }
    }
    },
  
  methods: {
    handleGet(){
      window.open('/cdn/demo.xlsx')
    },
 
  }
}
</script>

<style scoped>
.tab-list {
  min-height: calc(100vh - 118px);
  background: #ffffff;
  padding: 20px;
}
</style>