import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import About from '@/components/About'
import Contact from '@/components/Contact'
import FirstPage from '@/components/FirstPage'
import Provningar from '@/components/Provningar'
import Buteljeringar from '@/components/Buteljeringar'
import Resor from '@/components/Resor'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: Home 
    },
    {
      path: '/events',
      name: 'Events',
      component: FirstPage,
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    },
    {
      path:'/events/provningar',
      name:'Provningar',
      component: Provningar
    },
    {
      path:'/events/buteljeringar',
      name:'Buteljeringar',
      component: Buteljeringar
    },
    {
      path:'/events/resor',
      name:'Resor',
      component: Resor
    }

  ]
})
