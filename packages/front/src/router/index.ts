import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import DoctorDashboard from '../views/doctorDashboard.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: HomeView
    },
    {
      path: '/doctor',
      component: DoctorDashboard,
    },
    {
      path: '/doctor/patient',
      name: 'doctor',
      component: () => import('../views/PatientDetail.vue')
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
    // {
    //   path: '/:pathMatch(.*)*',
    //   component: () => import('../views/NotFound.vue'),
    // },
  ]
})

export default router