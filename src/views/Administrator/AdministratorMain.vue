<template>
  <NavMenu>
    <template #Menu
      ><el-menu-item index="2" route="/administrator/userinfo"
        >管理员信息</el-menu-item
      >
      <el-menu-item index="3">班级管理</el-menu-item>
      <el-menu-item index="4">课程管理</el-menu-item>
    </template>
  </NavMenu>
  <RouterView></RouterView>
</template>
<script lang="ts" setup>
import NavMenu from "@/components/NavMenu.vue";
</script>

<style lang="scss" scoped></style>
