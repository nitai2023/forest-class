import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import RegisterView from '@/views/RegisterView.vue'
import AdministratorMain from '@/views/Administrator/AdministratorMain.vue'
import StudentMain from '@/views/StudentView/StudentMain.vue'
import TeacherMain from '@/views/TeacherView/TeacherMain.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path:'/login',
      component:LoginView
    },
    {
      path: '/register',
      component:RegisterView
    },
    {
      path:'/administrator',
      component:AdministratorMain
    },
    {
      path:'/student',
      component:StudentMain
    },
    {
      path:'/teacher',
      component:TeacherMain
    }
  ]
})

export default router
