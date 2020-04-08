<template>
   <el-container style="height: 942px;  background-color : #FFFFFF; border: 1px solid #eee  ">
    <avue-crud :option="option" :data="list"></avue-crud>
     </el-container>
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
