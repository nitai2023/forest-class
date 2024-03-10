<template>
  <div class="announce-box">
    <div>
      <span>公告类型：</span>
      <el-select
        v-model="type"
        placeholder="Select"
        @change="typeChange"
        size="small"
        style="width: 120px"
      >
        <el-option
          v-for="item in typeOptions"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        />
      </el-select>
    </div>
    <el-card style="width: 100%">
      <template #header>
        <div class="card-header">
          <span>{{ form.title }}</span>
        </div>
      </template>
      <p class="text item">{{ form.content }}</p>
      <template #footer>发布者：{{ form.authorName }}</template>
    </el-card>
  </div>
</template>

<style lang="scss" scoped>
.announce-box {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
}
</style>
<script lang="ts" setup>
import { usePublicStore } from "@/stores/public";
import { onMounted, ref } from "vue";

onMounted(async () => {
  const usePubllic = usePublicStore();
  usePubllic.getAnnouncements(type.value);
});

const usePubllic = usePublicStore();
const type = ref(1);
const typeOptions = [
  {
    value: 1,
    label: "系统工告",
  },
  {
    value: 2,
    label: "教师公告",
  },
];

async function typeChange() {
  usePubllic.getAnnouncements(type.value);
}

const form = {
  announcementId: 46,
  title: "图书馆开放时间调整",
  content:
    "由于装修工程，图书馆开放时间将在未来两周内有所调整。请各位同学提前做好安排。",
  authorName: "刘哈哈",
  publishDate: 1677945600000,
  expiryDate: 1679904000000,
};
</script>
