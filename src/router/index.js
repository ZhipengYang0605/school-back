import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home.vue'
import HomeData from '@/components/HomeData.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/back',
      name: 'Home',
      component: Home,
      children: [
        { path: '/back/home', name: 'HomeData', component: HomeData }
      ]
    }
  ]
})
