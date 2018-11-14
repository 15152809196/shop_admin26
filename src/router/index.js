import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login.vue'
// 导入Home组件
import Home from '@/components/Home.vue'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      redirect: '/Login'
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/home',
      component: Home
    }
  ]
})
// 给路由对象设置守卫

router.beforeEach((to, from, next) => {
  // 判断是否有token
  const token = localStorage.getItem('token')
  // console.log(to, from, next)
  if (to.path === '/login' || token) {
    // 有token放行
    next()
  } else {
    // 没有token去登陆
    next('/login')
  }
})

// 导出路由对象
export default router
