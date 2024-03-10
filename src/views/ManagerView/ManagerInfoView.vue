<script lang="ts" setup>
import { useManagerStore } from "@/stores/manager";
import { onMounted, ref } from "vue";

onMounted(async () => {
  const managerStore = useManagerStore();
  await managerStore.getManagerInfo();
});
const update = ref(true);

const form = ref({
  id: 2,
  username: "root",
  avatarUrl: "http://example.com/avatar2.jpg",
  nickname: "刘哈哈",
  email: "23524486250@qq.com",
  accountTypeId: 1,
});

const onSubmit = () => {
  console.log("submit!");
};
</script>
<template>
  <el-card
    style="width: 480px; margin: 0 auto; margin-top: 20vh"
    shadow="always"
  >
    <el-form :model="form" label-width="auto" style="max-width: 600px">
      <el-form-item label="Activity username">
        <el-input v-model="form.username" :disabled="update" />
      </el-form-item>
      <el-form-item label="Activity nickname">
        <el-input v-model="form.nickname" :disabled="update" />
      </el-form-item>
      <el-form-item label="Activity email">
        <el-input v-model="form.email" :disabled="update" />
      </el-form-item>
      <slot name="Info"></slot>
    </el-form>
    <el-button>Default</el-button>
    <el-button type="primary">Primary</el-button>
  </el-card>
</template>

<style lang="scss" scoped></style>
