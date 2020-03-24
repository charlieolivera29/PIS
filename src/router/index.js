import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/',
    name: 'Login',
    component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue')
  },
  {
    path: '/Dashboard',
    name: 'Dashboard',
    component: () => import(/* webpackChunkName: "about" */ '../views/Dashboard.vue')
  },
  {
    path: '/Employees',
    name: 'Employees',
    component: () => import(/* webpackChunkName: "about" */ '../views/Employee/Employees.vue')
  },
  {
    path: '/CreateEmployee',
    name: 'CreateEmployee',
    component: () => import(/* webpackChunkName: "about" */ '../views/Employee/CreateEmployee.vue')
  },
  {
    path: '/ViewEmployee',
    name: 'ViewEmployee',
    component: () => import(/* webpackChunkName: "about" */ '../views/Employee/ViewEmployee.vue')
  },
  {
    path: '/UserManagement',
    name: 'UserManagement',
    component: () => import(/* webpackChunkName: "about" */ '../views/UserManagement/UserManagement.vue')
  },
  {
    path: '/viewUserManagement',
    name: 'viewUserManagement',
    component: () => import(/* webpackChunkName: "about" */ '../views/UserManagement/ViewUser.vue')
  },
  {
    path: '/editUserManagement',
    name: 'editUserManagement',
    component: () => import(/* webpackChunkName: "about" */ '../views/UserManagement/EditUser.vue')
  },
  {
    path: '/editPassword',
    name: 'editPasswordUserManagement',
    component: () => import(/* webpackChunkName: "about" */ '../views/UserManagement/ChangePassword.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
