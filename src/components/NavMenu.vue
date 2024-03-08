<template>
  <div class="nav-menu">
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      router="true"
      style="min-width: 500px"
      @select="handleSelect"
    >
      <el-menu-item index="1" route="/administrator">公告</el-menu-item>
      <slot name="Menu"></slot>
    </el-menu>
    <el-avatar
      src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
    />
  </div>
</template>

<script lang="ts" setup>
const activeIndex = "1";
const activeIndex2 = "2";
const handleSelect = function (key, keyPath) {
  console.log(key, keyPath);
};
</script>

<style lang="scss" scoped>
.nav-menu {
  margin: 0 auto;
  width: 90%;
  display: flex;
  justify-content: space-between;
}
</style>
