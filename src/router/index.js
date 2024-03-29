import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/Login'
import NotFound from '@/views/Error/404'
import Home from '@/views/Home'
import Front from '@/views/Front/Monitor'
import DeviceReal from '@/views/Front/DeviceReal'
import DeviceList from '@/views/Front/DeviceList'
import Chart from '@/views/Front/Chart'


Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/home',
      name: '监控平台',
      component: Home,
      children: [
        { path: '', component: Front, name: '首页' },
        { path: '/monitor',component: DeviceList, name: '设备列表'},
        { path: '/history',component: DeviceList, name: '历史记录'},
        { path: '/userInfo',component: DeviceList, name: '个人管理'},
        { path: '/chart',component: Chart, name:'数据图表'},
        { path: '/deviceReal',component: DeviceReal, name:'设备监控'},
      ]
    },
    {
      path: '/login',
      name: '登录',
      component: Login
    }
    ,{
      path: '/404',
      name: 'notFound',
      component: NotFound
    }
  ]
})

router.beforeEach((to, from, next) => {
  // 登录界面登录成功之后，会把用户信息保存在会话
  // 存在时间为会话生命周期，页面关闭即失效。
  let user = sessionStorage.getItem('user');
/*   let user = "admin" */
  if (to.path == '/login') {
    // 如果是访问登录界面，如果用户会话信息存在，代表已登录过，跳转到主页
    if(user) {
      next({ path: '/control' })
    } else {
      next()
    }
  } else {
    // 如果访问非登录界面，且户会话信息不存在，代表未登录，则跳转到登录界面
    if (!user) {
      next({ path: '/login' })
    } else {
      next()
    }
  }
})

export default router
