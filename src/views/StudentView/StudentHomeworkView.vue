<script lang="ts" setup>
import { ref } from "vue";
const data = [
  {
    id: 11,
    title: "刘哈哈作业",
    teacherName: "刘哈哈",
    courseName: "生物化学",
    studentName: "刘哈哈",
    status: "未完成",
    score: null,
    solution: null,
    fileSolutionUrl: null,
    question: null,
    homeWorkInfo: {
      homeworkId: 11,
      assignmentDate: 1709906761118,
      dueDate: 1709663899000,
      description: "刘哈哈刘哈哈刘哈哈",
      title: "刘哈哈作业",
      fileUrl: "http://evcdbwho.mil/flrtdddv",
    },
    answering: null,
  },
  {
    id: 12,
    title: "刘哈哈作业",
    teacherName: "刘哈哈",
    courseName: "生物化学",
    studentName: "刘哈哈",
    status: "已完成",
    score: null,
    solution: null,
    fileSolutionUrl: null,
    question: null,
    homeWorkInfo: {
      homeworkId: 12,
      assignmentDate: 1709906787540,
      dueDate: 1709663899000,
      description: "刘哈哈刘哈哈刘哈哈未完成",
      title: "刘哈哈作业",
      fileUrl: "http://evcdbwho.mil/flrtdddv",
    },
    answering: null,
  },
  {
    id: 13,
    title: "刘哈哈作业",
    teacherName: "刘哈哈",
    courseName: "生物化学",
    studentName: "刘哈哈",
    status: "已批改",
    score: null,
    solution: null,
    fileSolutionUrl: null,
    question: null,
    homeWorkInfo: {
      homeworkId: 13,
      assignmentDate: 1709906811475,
      dueDate: 1709663899000,
      description: "刘哈哈刘哈哈刘哈哈已经批改",
      title: "刘哈哈作业",
      fileUrl: "http://evcdbwho.mil/flrtdddv",
    },
    answering: null,
  },
];

const homeworkInfo = ref<any>(null);

const updateVisible = ref(false);
const updateHomework = (form: any) => {
  updateVisible.value = true;
};
</script>

<template>
  <div>
    <el-row :gutter="12">
      <el-col :span="8" :key="form.id" v-for="form in data">
        <el-card shadow="hover" class="homework-card"
          ><h4>{{ form.title }}</h4>
          <div>
            <div class="bottom">
              <span class="type">作业序列号：{{ form.id }}</span>
              <span class="type">课程名：{{ form.courseName }}</span>
              <span class="type">任课老师：{{ form.teacherName }}</span>
              <span class="type">学生：{{ form.studentName }}</span>
              <span class="type">作业状态：{{ form.status }}</span>
              <span class="type">作业分数：{{ form.score }}</span>
            </div>
          </div>
          <el-button text @click="updateHomework(form)">提交作业</el-button>
        </el-card>
      </el-col>
    </el-row>
    <el-dialog
      style="display: flex; flex-direction: column"
      v-model="updateVisible"
      title="提交作业"
      width="600"
    >
      <el-form
        label-width="auto"
        :model="homeworkInfo"
        style="max-width: 600px"
      >
        <el-form-item label="文本答案">
          <el-input
            style="width: 240px"
            :rows="2"
            type="textarea"
            placeholder="Please input"
          />
        </el-form-item>
        <el-form-item label="作业文件">
          <el-upload
            ref="upload"
            class="upload-demo"
            action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
            :limit="1"
            :on-exceed="handleExceed"
            :auto-upload="false"
          >
            <template #trigger>
              <el-button type="primary">select file</el-button>
            </template>
            <el-button class="ml-3" type="success" @click="submitUpload">
              upload to server
            </el-button>
            <template #tip>
              <div class="el-upload__tip text-red">
                limit 1 file, new file will cover the old file
              </div>
            </template>
          </el-upload>
        </el-form-item>
        <el-form-item label="疑问">
          <el-input
            style="width: 240px"
            :rows="2"
            type="textarea"
            placeholder="Please input"
          />
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
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
