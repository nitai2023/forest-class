<script lang="ts" setup>
import { Edit } from "@element-plus/icons-vue";
import { ref } from "vue";
const data = [
  {
    id: 14,
    department: "医学院医学院",
  },
  {
    id: 11,
    department: "商学院",
  },
  {
    id: 15,
    department: "工程学院",
  },
  {
    id: 17,
    department: "心理学院",
  },
  {
    id: 13,
    department: "文学与语言学院",
  },
  {
    id: 16,
    department: "法学院",
  },
  {
    id: 12,
    department: "生物学院",
  },
  {
    id: 19,
    department: "社会学学院",
  },
  {
    id: 18,
    department: "艺术与设计学院",
  },
  {
    id: 10,
    department: "计算机科学与工程学院",
  },
];

const updateVisible = ref(false);
const departmentInfo = ref({});
const editVisible = ref(false);
const departmentName = ref("");

const updateDeparment = (form: any) => {
  updateVisible.value = true;
  departmentInfo.value = form;
};
</script>

<template>
  <div>
    <el-row :gutter="12">
      <el-col :span="8" :key="form.id" v-for="form in data">
        <el-card shadow="hover" class="competion-card"
          ><h4>学院：{{ form.department }}</h4>
          <div>
            <div class="bottom">
              <span class="type">序列号：{{ form.id }}</span>
            </div>
          </div>
          <el-button text @click="updateDeparment(form)">修改院系</el-button>
          <el-button text type="danger">删除院系 </el-button>
        </el-card>
      </el-col>
    </el-row>
  </div>
  <el-dialog v-model="updateVisible" title="修改院系" width="600">
    <label for="">新院系名：</label>
    <el-input
      v-model="departmentInfo.department"
      style="width: 240px"
      placeholder="Please input"
    />
    <el-button>Default</el-button>
    <el-button type="primary">Primary</el-button>
  </el-dialog>

  <el-button
    @click="editVisible = true"
    style="position: fixed; margin-left: 95vw"
    type="primary"
    :icon="Edit"
    circle
  />

  <el-dialog v-model="editVisible" title="新增院系" width="600">
    <label for="">院系名：</label>
    <el-input
      v-model="departmentName"
      style="width: 240px"
      placeholder="Please input"
    />
    <el-button>Default</el-button>
    <el-button type="primary">Primary</el-button>
  </el-dialog>
</template>

<style lang="scss" scoped>
.competion-card {
  height: 150px;
  margin-top: 10px;
  .type {
    font-size: 12px;
    color: #999;
  }
}
</style>
