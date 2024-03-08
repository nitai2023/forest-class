<template>
  <el-form :model="form" label-width="auto" style="max-width: 600px">
    <el-form-item label="Activity name">
      <el-input v-model="form.name" />
    </el-form-item>
    <el-form-item label="Activity gender">
      <el-input v-model="form.gender" />
    </el-form-item>
    <el-form-item label="Activity email">
      <el-input v-model="form.email" />
    </el-form-item>
    <el-form-item label="Activity adress">
      <el-input v-model="form.adress" />
    </el-form-item>
    <el-form-item label="Activity phoneNum">
      <el-input v-model="form.phoneNum" />
    </el-form-item>
    <slot name="Info"></slot>
  </el-form>
</template>

<script lang="ts" setup>
import { reactive } from "vue";

// do not use same name with ref
const form = reactive({
  name: "",
  gender: "",
  email: "",
  adress: "",
  phoneNum: "",
});

const onSubmit = () => {
  console.log("submit!");
};
</script>
