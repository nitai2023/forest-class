<script lang="ts" setup>
import { Edit } from "@element-plus/icons-vue";
import { ref } from "vue";
const data = [
  {
    id: 11,
    major: "计算机科学专业",
    className: "计科221",
  },
  {
    id: 12,
    major: "计算机科学专业",
    className: "计科222",
  },
  {
    id: 13,
    major: "软件工程专业",
    className: "软工221",
  },
  {
    id: 14,
    major: "软件工程专业",
    className: "软工222",
  },
  {
    id: 15,
    major: "医学专业",
    className: "医学221",
  },
  {
    id: 16,
    major: "医学专业",
    className: "医学222",
  },
  {
    id: 17,
    major: "护理学专业",
    className: "护理221",
  },
  {
    id: 18,
    major: "护理学专业",
    className: "护理222",
  },
  {
    id: 19,
    major: "社会工作专业",
    className: "社工221",
  },
  {
    id: 20,
    major: "社会工作专业",
    className: "社工222",
  },
];

const updateVisible = ref(false);
const classInfo = ref({});
const editVisible = ref(false);
const className = ref("");

const updateClass = (form: any) => {
  updateVisible.value = true;
  classInfo.value = form;
};

const value = ref("");
const _value = ref("");
const options = [
  {
    value: "Option1",
    label: "Option1",
  },
  {
    value: "Option2",
    label: "Option2",
  },
  {
    value: "Option3",
    label: "Option3",
  },
  {
    value: "Option4",
    label: "Option4",
  },
  {
    value: "Option5",
    label: "Option5",
  },
];
const _options = [
  {
    value: "Option1",
    label: "Option1",
  },
  {
    value: "Option2",
    label: "Option2",
  },
  {
    value: "Option3",
    label: "Option3",
  },
  {
    value: "Option4",
    label: "Option4",
  },
  {
    value: "Option5",
    label: "Option5",
  },
];
</script>

<template>
  <div>
    <el-row :gutter="12">
      <el-col :span="8" :key="form.id" v-for="form in data">
        <el-card shadow="hover" class="competion-card"
          ><h4>班级：{{ form.className }}</h4>
          <div>
            <div class="bottom">
              <span class="type">专业：{{ form.major }}</span>
              <span class="type">序列号：{{ form.id }}</span>
            </div>
          </div>
          <el-button text @click="updateClass(form)">修改班级</el-button>
          <el-button text type="danger">删除班级 </el-button>
        </el-card>
      </el-col>
    </el-row>
  </div>
  <el-dialog v-model="updateVisible" title="修改班级" width="600">
    <label for="">新班级名：</label>
    <el-input
      v-model="classInfo.className"
      style="width: 240px"
      placeholder="Please input"
    />
    <el-select v-model="value" placeholder="Select" style="width: 240px">
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      />
    </el-select>
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

  <el-dialog v-model="editVisible" title="新增班级" width="600">
    <label for="">班级名：</label>
    <el-input
      v-model="className"
      style="width: 240px"
      placeholder="Please input"
    />
    <el-select v-model="_value" placeholder="Select" style="width: 240px">
      <el-option
        v-for="item in _options"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      />
    </el-select>
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
