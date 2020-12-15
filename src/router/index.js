import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home.vue'
import HomeData from '@/components/HomeData.vue'
import SowingList from '@/components/sowing/SowingList.vue'
import SowingAdd from '@/components/sowing/SowingAdd.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/back',
      name: 'Home',
      component: Home,
      children: [
        { path: '/back/home', name: 'HomeData', component: HomeData },
        { path: '/back/s_list', name: 'SowingList', component: SowingList },
        { path: '/back/s_add', name: 'SowingAdd', component: SowingAdd }
      ]
    }
  ]
})
