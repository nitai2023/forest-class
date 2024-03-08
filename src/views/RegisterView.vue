<template>
  <div class="register">
    <el-radio-group v-model="userType" size="large">
    <el-radio-button  label="学生" value="student">学生</el-radio-button>
    <el-radio-button  label="老师" value="teacher">老师</el-radio-button>
    <el-radio-button  label="管理员" value="admin">管理员</el-radio-button>
  </el-radio-group>
  <div style="margin: 20px" />
  <el-form
    :label-position="labelPosition"
    label-width="auto"
    :model="formLabelAlign"
    style="max-width: 600px"
    class="form"
  >
    <el-form-item label="名字">
      <el-input v-model="formLabelAlign.name" />
    </el-form-item>
    <el-form-item label="性别">
      <el-input v-model="formLabelAlign.gender" />
    </el-form-item>
    <!-- <el-form-item label="生日">
      <el-date-picker
      v-model="formLabelAlign.birth"
      type="date"
      placeholder="选择生日"
      format="YYYY-MM-DD"
      value-format="YYYY-MM-DD">
    </el-date-picker>
    </el-form-item> -->
    <el-form-item label="手机号">
      <el-input v-model="formLabelAlign.phoneNum" />
    </el-form-item>
    <el-form-item label="邮箱">
      <el-input v-model="formLabelAlign.email" />
    </el-form-item>
    <el-form-item label="密码" >
      <el-input v-model="formLabelAlign.password" show-password/>
    </el-form-item>
    <el-form-item label="地址">
      <el-input v-model="formLabelAlign.address" />
    </el-form-item>
    <el-from-item>
    <el-button type="primary" @click="handleRegister">注册</el-button>
        </el-from-item>
        <el-from-item>
          <RouterLink to="/login"><el-button type="success">登录</el-button></RouterLink>
        </el-from-item>
  </el-form>
  </div>

</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
import type { FormProps } from 'element-plus'
import {StudentRegister} from '../api/type'
import router from '@/router';
const userType=ref('')
const formLabelAlign = reactive({
  name: '',
  gender: '',
  birth:1093114928000,
  phoneNum: '',
  email: '',
  password: '',
  address: '',
  avatarUrl:'http://dummyimage.com/100x100',
})
const handleRegister = async() => {
  const res = await StudentRegister(formLabelAlign)
  console.log(res)
  router.push("/login");
}
</script>
<style lang="scss" scoped>
.register {
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  flex-direction: column;
}
</style>