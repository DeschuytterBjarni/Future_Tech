import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/doctor',
      name: 'doctor',
      component: () => import('../views/doctorDashboard.vue')
    },
    {
      path: '/patient',
      name: 'patient',
      component: () => import('../views/patientDashboard.vue')
    },
    {
      path: '/patient/exercises',
      name: 'exercises',
      component: () => import('../views/patientExercises.vue')
    },
    {
      path: '/patient/exercises/:id',
      name: 'exercise',
      component: () => import('../views/patientPractise.vue')
    }
  ]
})

export default router
