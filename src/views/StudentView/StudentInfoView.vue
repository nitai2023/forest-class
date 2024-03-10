<template>
  <el-card
    style="width: 480px; margin: 0 auto; margin-top: 20vh"
    shadow="always"
  >
    <el-form :model="form" label-width="auto" style="max-width: 600px">
      <el-form-item label="Activity name">
        <el-input v-model="form.name" :disabled="update" />
      </el-form-item>
      <el-form-item label="Activity gender">
        <el-input v-model="form.gender" :disabled="update" />
      </el-form-item>
      <el-form-item label="Activity email">
        <el-input v-model="form.email" :disabled="update" />
      </el-form-item>
      <el-form-item label="Activity phoneNum">
        <el-input v-model="form.phoneNum" :disabled="update" />
      </el-form-item>
      <el-form-item label="Activity adress">
        <el-input v-model="form.address" :disabled="update" />
      </el-form-item>
      <slot name="Info"></slot>
    </el-form>
    <el-button>Default</el-button>
    <el-button type="primary">Primary</el-button>
  </el-card>
</template>

<script lang="ts" setup>
import { ref } from "vue";

// do not use same name with ref
const update = ref(true);

const form = ref({
  id: 31,
  name: "陈森",
  gender: "男",
  birth: 19,
  phoneNum: "17380333759",
  email: "3096567831@qq.com",
  password: "ct0123456789",
  address: "云南省七台河市巴青县",
  classMajorId: null,
  departmentId: null,
  avatarUrl: "http://dummyimage.com/100x100",
  accountTypeId: 3,
});

const onSubmit = () => {
  console.log("submit!");
};
</script>

<style lang="scss" scoped></style>
