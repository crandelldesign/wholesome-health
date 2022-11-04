import { createRouter, createWebHistory } from 'vue-router'
import StyleGuideView from '../views/StyleGuideView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: StyleGuideView
    }
  ]
})

export default router
