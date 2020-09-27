import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Seeker from '../components/register/Seeker.vue'
import Employer from '../components/register/Employer.vue'
import Company from '../components/company/Company.vue'
import Login from '../components/Login.vue'
import Contact from '../views/Contact.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },

  {
    path: '/seeker/register',
    name: 'seeker',
    component: Seeker
  },
  {
    path: '/employer/register',
    name: 'employer',
    component: Employer
  }
  ,
  {
    path: '/companies',
    name: 'company',
    component: Company
  }

  ,
  {
    path: '/contact',
    name: 'contact',
    component: Contact
  }
  ,
  {
    path: '/login',
    name: 'login',
    component: Login
  }

  
]

const router = new VueRouter({
  routes
})

export default router
