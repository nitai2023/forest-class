<template>
  <el-card
    style="width: 480px; margin: 0 auto; margin-top: 20vh"
    shadow="always"
    ><el-form :model="form" label-width="auto">
      <el-form-item label="Activity nickname">
        <el-input v-model="form.nickname" :disabled="update" />
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
      <el-form-item label="Activity subject">
        <el-input
          v-model="form.subject"
          placeholder="请输入学科"
          :disabled="update"
        />
      </el-form-item>
      <el-form-item label="Activity department">
        <el-input
          v-model="form.department"
          placeholder="请输入部门"
          :disabled="update"
        />
      </el-form-item>
      <slot name="Info"></slot>
    </el-form>
    <el-button>Default</el-button>
    <el-button type="primary">Primary</el-button></el-card
  >
</template>
<script lang="ts" setup>
import { ref } from "vue";

const update = ref(true);

const form = ref({
  id: 9,
  email: "3096567831@qq.com",
  nickname: "lzq",
  avatarUrl: "http://dummyimage.com/100x100",
  gender: "男",
  phoneNum: "17380333759",
  subject: null,
  department: null,
});
</script>

<style lang="scss" scoped></style>
