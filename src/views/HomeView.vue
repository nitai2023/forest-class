<script setup lang="ts">
import { ElButton } from 'element-plus';
</script>

<template>
  <main>
    <h1>林森课堂</h1>
    <p>欢迎来到林森课堂</p>
    <div>
      <RouterLink to="/login" ><el-button type="success">登录</el-button></RouterLink><RouterLink to="/register"><el-button type="primary">注册</el-button></RouterLink>
    </div>
    <RouterLink to="/administrator">管理员界面</RouterLink>
    <RouterLink to="/student">学生界面</RouterLink>
    <RouterLink to="/teacher">教师界面</RouterLink>
  </main>
</template>
<style scoped>
main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: auto;
}
</style>