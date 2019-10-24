import Vue from 'vue'
import Router from 'vue-router'
import MainPage from '@/components/MainPage'
import CateGoryPage from '@/components/CateGoryPage'
import MessagePage from '@/components/MessagePage'
import MyInfoPage from '@/components/MyInfoPage'
import indexPage from '@/components/indexPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'MainPage',
      component: MainPage,
      redirect: '/index',
      children:[
        {
          path: 'index',
          name: 'Index',
          component: indexPage
        },
        {
          path: 'category',
          name: 'CateGory',
          component: CateGoryPage
        },
        {
          path: 'message',
          name: 'Message',
          component: MessagePage
        },
        {
          path: 'myinfo',
          name: 'MyInfo',
          component: MyInfoPage
        }
      ]
    }
  ]
})
