import { createRouter, createWebHistory } from 'vue-router'
 
const routes = [
  {
    path: "/",
    name: "Index",
    component: () => import('../views/Index.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/incomeexpenses',
    name: 'incomeExpenses',
    component: () => import('../views/IncomeExpenses.vue')
  },
  {
    path: '/planactual',
    name: 'planactual',
    component: () => import('../views/PlanActual.vue')
  },
  {
    path: '/graphs',
    name: 'graphs',
    component: () => import('../views/Graphs.vue')
  },
  {
    path: '/debts',
    name: 'debts',
    component: () => import('../views/Debts.vue')
  },
  {
    path: '/overall',
    name: 'overall',
    component: () => import('../views/Overall.vue')
  }
]
 
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
 
export default router