import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const LAYOUT = (name) => () => import(`@/layouts/${name}.vue`);
const VIEW = (name) => () => import(`@/views/${name}.vue`);


const routes = [
  {
    path: '/',
    component: LAYOUT('Default'),
    children: [
      {
        path: '',
        name: 'Home',
        component: VIEW('Home')
      },
      {
        path: 'about',
        name: 'About',
        component: VIEW('About')
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
