<script lang="ts" setup>
import { ref } from "vue";
const data = [
  {
    courseId: 13,
    courseName: "数据结构与算法",
    departmentName: "计算机科学与工程学院",
    teacherName: "张老师",
    startDate: 1677772800000,
    endDate: 1677753600000,
    description: "本课程将深入研究数据结构和算法的基本原理和应用。",
    className: "计科221",
  },
  {
    courseId: 14,
    courseName: "人工智能导论",
    departmentName: "计算机科学与工程学院",
    teacherName: "王老师",
    startDate: 1677772800000,
    endDate: 1677753600000,
    description:
      "本课程将介绍人工智能的基本概念和应用，涵盖机器学习、深度学习等方面的内容。",
    className: "计科222",
  },
  {
    courseId: 15,
    courseName: "生物化学",
    departmentName: "生物学院",
    teacherName: "刘哈哈",
    startDate: 1677772800000,
    endDate: 1677753600000,
    description: "本课程将深入研究生物化学领域的基本原理和实验技术。",
    className: "医学221",
  },
];

const update = ref(false);
const classInfo = ref({});
const updateClass = (form: any) => {
  console.log(form);
  update.value = true;
  classInfo.value = form;
};
</script>

<template>
  <div>
    <el-row :gutter="12">
      <el-col :span="8" :key="form.courseId" v-for="form in data">
        <el-card shadow="hover" class="course-card"
          ><h4>{{ form.courseName }}</h4>
          <div>
            <div class="bottom">
              <span class="type">所属学院：{{ form.departmentName }}</span>
              <span class="type">任课老师: {{ form.teacherName }}</span>
              <span class="type">班级: {{ form.className }}</span>
              <p class="type">课程介绍：{{ form.description }}</p>
            </div>
          </div>
          <el-button text @click="updateClass(form)">修改课程</el-button>
          <el-button text type="danger">删除课程 </el-button>
        </el-card>
      </el-col>
    </el-row>
    <el-dialog v-if="update" v-model="update" title="课程管理" width="800">
      <el-form :model="form" label-width="auto" style="max-width: 600px">
        <el-form-item label="courseName">
          <el-input v-model="classInfo.courseName" />
        </el-form-item>
        <el-form-item label="description">
          <el-input v-model="classInfo.description" type="textarea" />
        </el-form-item>
        <slot name="Info"></slot>
      </el-form>
      <el-button>Default</el-button>
      <el-button type="primary">Primary</el-button>
    </el-dialog>
  </div>
</template>

<style lang="scss" scoped>
.course-card {
  height: 300px;
  margin-top: 10px;
  .type {
    font-size: 12px;
    color: #999;
  }

  .bottom {
    margin-top: 13px;
    line-height: 12px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
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
