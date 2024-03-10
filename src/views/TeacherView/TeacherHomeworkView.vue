<script lang="ts" setup>
import { Edit } from "@element-plus/icons-vue";
import { ref } from "vue";
const data = [
  {
    homeworkId: 10,
    assignmentDate: 1709906581292,
    dueDate: 1709663899000,
    description: "刘哈哈刘哈哈刘哈哈",
    title: "刘哈哈作业",
    fileUrl: "http://evcdbwho.mil/flrtdddv",
  },
  {
    homeworkId: 11,
    assignmentDate: 1709906761118,
    dueDate: 1709663899000,
    description: "刘哈哈刘哈哈刘哈哈",
    title: "刘哈哈作业",
    fileUrl: "http://evcdbwho.mil/flrtdddv",
  },
  {
    homeworkId: 12,
    assignmentDate: 1709906787540,
    dueDate: 1709663899000,
    description: "刘哈哈刘哈哈刘哈哈未完成",
    title: "刘哈哈作业",
    fileUrl: "http://evcdbwho.mil/flrtdddv",
  },
  {
    homeworkId: 13,
    assignmentDate: 1709906811475,
    dueDate: 1709663899000,
    description: "刘哈哈刘哈哈刘哈哈已经批改",
    title: "刘哈哈作业",
    fileUrl: "http://evcdbwho.mil/flrtdddv",
  },
];
const editVisible = ref(false);
const homeWorkForm = ref({
  courseId: 0,
  title: "",
  description: "",
  dueDate: "",
  fileUrl: "",
});
</script>

<template>
  <div>
    <h1>学生作业：</h1>
    <el-row :gutter="12">
      <el-col :span="8" :key="form.homeworkId" v-for="form in data">
        <el-card shadow="hover" class="homework-card"
          ><h4>{{ form.title }}</h4>
          <div>
            <div class="bottom">
              <span class="type">作业序列号：{{ form.homeworkId }}</span>
              <span class="type">作业描述：{{ form.description }}</span>
              <span class="type">发布时间：{{ form.dueDate }}</span>
              <span class="type">截止时间：{{ form.assignmentDate }}</span>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
  <el-button
    @click="editVisible = true"
    style="position: fixed; margin-left: 95vw"
    type="primary"
    :icon="Edit"
    circle
  />
  <el-dialog v-model="editVisible" title="发布作业" width="600">
    <el-form label-width="auto" :model="homeWorkForm" style="max-width: 600px">
      <el-form-item label="课程id">
        <el-input v-model="homeWorkForm.courseId" />
      </el-form-item>
      <el-form-item label="Activity title">
        <el-input v-model="homeWorkForm.title" />
      </el-form-item>
      <el-form-item label="Activity dueDate">
        <el-input v-model="homeWorkForm.dueDate" />
      </el-form-item>
      <el-form-item label="Activity description">
        <el-input v-model="homeWorkForm.description" />
      </el-form-item>
      <el-form-item label="Activity fileUrl">
        <el-input v-model="homeWorkForm.fileUrl" />
      </el-form-item>
    </el-form>
    <el-button>Default</el-button>
    <el-button type="primary">Primary</el-button>
  </el-dialog>
</template>

<style lang="scss" scoped>
.homework-card {
  .type {
    font-size: 12px;
    color: #999;
  }

  .bottom {
    margin-top: 13px;
    line-height: 12px;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    gap: 10px;
  }

  .desc {
    height: 80px;
    width: 100%;
    overflow: hidden;
  }
  .link {
    float: right;
    margin-top: 8px;
    padding: 0;
    min-height: auto;
  }
}
</style>
