<template>
  <el-row class="tab-list">
    <avue-data-icons :option="option"></avue-data-icons>
  </el-row>
</template>
<script>
export default {
  data() {
    return {
      option: {
        span: 6,
        data: [
          {
            click: function(item) {
              alert(JSON.stringify(item));
            },
            title: "今日注册",
            count: 12678,
            icon: "el-icon-tickets",
            href: "https://avuejs.com",
            target: "_blank"
          },
          {
            click: function(item) {
              alert(JSON.stringify(item));
            },
            title: "今日登录",
            count: 22139,
            icon: "el-icon-success",
            href: "https://avuejs.com",
            target: "_blank"
          },
          {
            click: function(item) {
              alert(JSON.stringify(item));
            },
            title: "今日订阅",
            count: 35623,
            icon: "el-icon-info",
            href: "https://avuejs.com",
            target: "_blank"
          },
          {
            click: function(item) {
              alert(JSON.stringify(item));
            },
            title: "今日评论",
            count: 16826,
            icon: "el-icon-message",
            href: "https://avuejs.com",
            target: "_blank"
          },
          {
            click: function(item) {
              alert(JSON.stringify(item));
            },
            title: "今日评论",
            count: 16826,
            icon: "el-icon-message",
            href: "https://avuejs.com",
            target: "_blank"
          },
          {
            click: function(item) {
              alert(JSON.stringify(item));
            },
            title: "今日评论",
            count: 16826,
            icon: "el-icon-message",
            href: "https://avuejs.com",
            target: "_blank"
          }
        ]
      }
    };
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