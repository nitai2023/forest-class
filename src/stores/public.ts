import {
  backPasswordAPI,
  getAnnouncementAPI,
  getEmailCodeAPI,
  loginAPI,
  registerAPI,
} from "@/api/type";
import { defineStore } from "pinia";

export const usePublicStore = defineStore("public", () => {
  async function userRegister(form: any) {
    registerAPI(form);
  }
  async function userLogin(form: any) {
    const res = await loginAPI(form);
    localStorage.setItem("token", res.data.data);
  }
  async function getAnnouncements(type: number) {
    const res = await getAnnouncementAPI(type);
    console.log("111", res.data);
    // return res.data;
  }
  async function getEmailCode(email: string) {
    await getEmailCodeAPI(email);
  }
  async function backPassword(form: any) {
    await backPasswordAPI(form);
  }
  return {
    userRegister,
    userLogin,
    getAnnouncements,
    getEmailCode,
    backPassword,
  };
});
