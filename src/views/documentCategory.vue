 <template>
  <el-row :gutter="20">
    <el-col :span="16">
      <el-row class="draft-title">发文办理</el-row>

      <avue-form :option="option" v-model="obj" @submit="submit" @error="error"></avue-form>
    </el-col>
    <el-col :span="8" class="right">
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="审批流程" name="first"></el-tab-pane>
      </el-tabs>
      <div class="block">
        <el-timeline>
          <el-timeline-item
            v-for="(activity, index) in activities"
            :key="index"
            :icon="activity.icon"
            :type="activity.type"
            :color="activity.color"
            :size="activity.size"
          >
            <p class="timeline-content">{{activity.content}}</p>
          </el-timeline-item>
        </el-timeline>
      </div>
    </el-col>
  </el-row>
</template>

  <script>
export default {
  data() {
    return {
      activeName: "first",
      obj: {},
      activities: [
        {
          content: "拟稿",

          size: "large",
          type: "primary",
          icon: "el-icon-s-goods",
          color: "#E45B57 "
        },

        {
          content: "核稿",

          size: "large",

          icon: "el-icon-s-goods",
          color: "#E45B57 "
        },

        {
          content: "审批",

          size: "large",

          icon: "el-icon-s-goods",
          color: "#E45B57 "
        },

        {
          content: "成文",

          size: "large",

          icon: "el-icon-s-goods",
          color: "#E45B57 "
        },

        {
          content: "核发",

          size: "large",

          icon: "el-icon-s-goods",
          color: "#E45B57 "
        }
      ],

      option: {
        enter: false,
        menuPostion: "right",
        emptyBtn: true,
        submitBtn: true,
        labelWidth: "120",
        submitText: "提交",
        emptyText: "取消",
        column: [
          {
            label: "标题",
            span: 32,
            prop: "documentTitle",
            maxlength: 100,

            rules: [
              {
                required: true,
                message: "请输入标题...",
                trigger: "blur"
              }
            ]
          },
          {
            label: "主送机关",
            prop: "mainReceiverDepartment",
            span: 24,
            maxlength: 100,
            rules: [
              {
                required: true,
                message: "请选择主送机关...",
                trigger: "change"
              }
            ]
          },
          {
            label: "发文种类",
            prop: "departmentType",
            span: 12,
            maxlength: 100,
            display: false,
            rules: [
              {
                required: false,
                message: "请选择发文种类...",
                trigger: "change"
              }
            ]
          },
          {
            label: "拟稿单位",
            span: 24,
            prop: "signatureOfDocumentIssuingAgency",
            maxlength: 50,
            rules: [
              {
                required: true,
                message: "请输入拟稿单位...",
                trigger: "change"
              }
            ]
          },
          {
            label: "拟稿人",
            span: 12,
            prop: "signatureOfDocumentPeople",
            maxlength: 20,
            rules: [
              {
                required: true,
                message: "请输入拟稿人...",
                trigger: "change"
              }
            ]
          },
          {
            label: "拟稿人联系电话",
            span: 12,
            prop: "signatureOfDocumentIssuingAgencyPhone",
            maxlength: 20,
            rules: [
              {
                required: true,
                message: "请输入拟稿人联系电话...",
                trigger: "blur"
              },
              {
                pattern: /^(\\+\\d{2}-)?0\\d{2,3}-\\d{7,8}|[0-9]\d{0,19}|\(?0\d{2,3}[)-]?\d{7,8}$/,
                trigger: "change",
                message: "联系电话不合法"
              }
            ]
          },
          {
            label: "主题词",
            span: 24,
            prop: "subjectHeadings",
            maxlength: 100,
            display: false,
            rules: [
              {
                message: "请输入拟稿人...",
                trigger: "change"
              }
            ]
          },
          {
            label: "抄送机关",
            span: 24,
            prop: "copyToDepartment",
            maxlength: 100,
            type: "select",
            dicUrl: "/api/blade-system/dict/dictionary?code=maindept_type",
            props: {
              label: "dictValue",
              value: "dictKey"
            }
          },
          {
            label: "印发机关",
            span: 24,
            prop: "printingAndSendingDepartment",
            maxlength: 50,
            type: "select",
            dicData: [],

            props: {
              label: "dictValue",
              value: "dictKey"
            }
          },
          {
            label: "文种",
            prop: "documentType",
            type: "select",
            dicUrl: "/api/blade-system/dict/dictionary?code=file_type",
            props: {
              label: "dictValue",
              value: "dictKey"
            },
            span: 12,
            rules: [
              {
                required: false,
                message: "请选择文种...",
                trigger: "change"
              }
            ]
          },
          {
            label: "发文字号",
            prop: "issuedNumberOfDocument",
            span: 12,
            maxlength: 20,
            rules: [
              {
                required: false,
                message: "请选择发文字号...",
                trigger: "change"
              }
            ]
          },
          {
            label: "正文草稿",
            prop: "wordFile",
            span: 24,
            formslot: true
          },
          {
            label: "附件",
            prop: "annexes",
            type: "upload",
            span: 24,
            formslot: true
          },
          {
            label: "其他资料",
            prop: "otherFile",
            type: "upload",
            span: 24,
            formslot: true
          }
        ]
      }
    };
  },
  methods: {
    submit(form, done) {
      this.$message.success(JSON.stringify(form));
      done();
      this.$router.push({
        name: "Home"
      });
    },
    error(err) {
      this.$message.success("请查看控制台");
      console.log(err);
      this.$router.push({
        name: "Home"
      });
    }
  }
};
</script>

<style  scoped>
.draft-main {
  padding: 20px;
}
.draft-title {
  padding-bottom: 40px;
  padding-right: 650px;
  padding-top: 20px;
  background-color: #ffffff;
}
.main {
  width: 720px;
  background-color: #ffffff;
}
.right {
  background-color: #ffffff;
  height: 650px;
}


</style>
