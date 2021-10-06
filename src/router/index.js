import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/views/Layout'),
    children: [
      {
        path: '/',
        name: 'home',
        component: () => import('@/views/home')
      },
      {
        path: '/category/:id',
        name: 'topCategory',
        component: () => import('@/views/category')
      },
      {
        path: '/category/sub/:id',
        name: 'subCategory',
        component: () => import('@/views/category/sub')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
