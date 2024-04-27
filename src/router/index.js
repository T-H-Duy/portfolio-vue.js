import { createRouter, createWebHistory } from 'vue-router'
import HomeWiew from '../views/HomeView.vue'
import bio from '../components/bio.vue'
import PageNotFound from '../views/PageNotFound.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),

  routes: [
    {
      path: '/',
      name:'home',
      component: HomeWiew
    },
    {
      path: '/bio',
      name:'bio',
      component: bio
    },
    {
      path:'/PageNotFound',
      name: '/PageNotFound',
      component: PageNotFound
    },
    {
      path:'/:pathMatch(.*)*',
      redirect:'/PageNotFound'
    }
  ]
});
export default router
