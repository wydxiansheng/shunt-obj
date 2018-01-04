import Vue from 'vue'
import Router from 'vue-router'
import homePage from '@/views/front/homePage'
import register from '@/views/front/register/register'
import login from '@/views/front/login/login'
import consolePage from '@/views/console/consolePage/consolePage'
import resourceGroup from '@/views/console/app/resourceGroup/resourceGroup'
import createAnalysis from '@/views/console/app/createAnalysis/createAnalysis'
import planQuestion from '@/views/console/plan/planQuestion/planQuestion'
import compareQuestion from '@/views/console/compare/compareQuestion/compareQuestion'
import planList from '@/views/console/plan/planList/planList'
import overviewList from '@/views/console/overview/overviewList/overviewList'




Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'homePage',
      component: homePage
    },
    {
      path:'/register',
      name:'register',
      component:register
    },
    {
      path:'/login',
      name:'login',
      component:login
    },
    {
      path:'/resourceGroup',
      name:'resourceGroup',
      component:resourceGroup
    },
     
    {
      path:'/consolePage',
      name:'consolePage',
      component:consolePage,
      children:[
        {
          path:'/',
          name:'overviewList',
          component:overviewList
        },
        {
          path:'/planList',
          name:'planList',
          component:planList
        },
        {
            path:'/createAnalysis',
            name:'createAnalysis',
            component:createAnalysis
        },
        {
          path:'/planQuestion',
          name:'planQuestion',
          component:planQuestion
        },
        {
          path:'/compareQuestion',
          name:'compareQuestion',
          component:compareQuestion
        },
      ]
    }
  ]
})
