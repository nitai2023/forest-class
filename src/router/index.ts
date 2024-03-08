import AdministratorMain from "@/views/Administrator/AdministratorMain.vue";
import RegisterView from "@/views/RegisterView.vue";
import StudentMain from "@/views/StudentView/StudentMain.vue";
import TeacherMain from "@/views/TeacherView/TeacherMain.vue";
import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import LoginView from "../views/LoginView.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/login",
      component: LoginView,
    },
    {
      path: "/register",
      component: RegisterView,
    },
    {
      path: "/administrator",
      component: AdministratorMain,
      children: [
        {
          path: "/administrator/userinfo",
          component: () => import("@/views/Administrator/AdminInfoView.vue"),
        },
      ],
    },
    {
      path: "/student",
      component: StudentMain,
      children: [
        {
          path: "/student/userinfo",
          component: () => import("@/views/StudentView/StudentInfoView.vue"),
        },
      ],
    },
    {
      path: "/teacher",
      component: TeacherMain,
      children: [
        {
          path: "/teacher/userinfo",
          component: () => import("@/views/TeacherView/TeacherInfoView.vue"),
        },
      ],
    },
  ],
});

export default router;
