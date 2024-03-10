import {
  checkoutHomeworkAPI,
  createHomeworkAPI,
  getHomeworkFishConditionAPI,
  getTeacherHomeworkAPI,
  getTeacherInfoAPI,
  updateTeacherInfoAPI,
} from "@/api/type";
import { defineStore } from "pinia";

export const useTeacherStore = defineStore("teacher", () => {
  async function getTeacherInfo() {
    await getTeacherInfoAPI();
  }
  async function updateTeacherInfo(form: any) {
    await updateTeacherInfoAPI(form);
  }
  async function createHomework(form: any) {
    await createHomeworkAPI(form);
  }
  async function getTeacherHomework() {
    await getTeacherHomeworkAPI();
  }
  async function getHomeworkFishCondition(homeworkId: number) {
    await getHomeworkFishConditionAPI(homeworkId);
  }
  async function checkoutHomework(form: any) {
    await checkoutHomeworkAPI(form);
  }
  return {
    getTeacherInfo,
    updateTeacherInfo,
    createHomework,
    getTeacherHomework,
    getHomeworkFishCondition,
    checkoutHomework,
  };
});
