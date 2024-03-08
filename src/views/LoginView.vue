<template>
  <div class="login">
  <el-radio-group v-model="userType" size="large">
    <el-radio-button  label="学生" value="student">学生</el-radio-button>
    <el-radio-button  label="老师" value="teacher">老师</el-radio-button>
    <el-radio-button  label="管理员" value="admin">管理员</el-radio-button>
  </el-radio-group>
  <div style="margin: 20px" />
  <el-form
    label-width="auto"
    :model="formLabelAlign"
    style="max-width: 600px"
    class="form"
  >
    <el-form-item label="名字">
      <el-input v-model="formLabelAlign.name" />
    </el-form-item>
    <el-form-item label="密码">
      <el-input v-model="formLabelAlign.region" />
    </el-form-item>
    <el-from-item>
      <el-button type="success">登录</el-button>
    </el-from-item>
    <el-from-item>
      <RouterLink to="/register"><el-button type="primary">注册</el-button></RouterLink>
    </el-from-item>
  </el-form>
  </div>

</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
import type { FormProps } from 'element-plus'

const userType = ref('student')

const formLabelAlign = reactive({
  name: '',
  region: '',
  type: '',
})
</script>
<style lang="scss" scoped>
.login {
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  flex-direction: column;
}
</style>