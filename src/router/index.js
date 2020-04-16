import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import Dashboard from '../views/Dashboard.vue'

// Company Module
import Company from '../views/Company/Company.vue'
// import ViewCompany from '../views/CompanyManagement/ViewCompany.vue'
// import EditCompany from '../views/CompanyManagement/EditCompany.vue'

//Departments Module
import Department from '../views/Department/Department.vue'
import CreateDepartment from '../views/Department/CreateDepartment.vue'
import ViewDepartment from '../views/Department/ViewDepartment.vue'

//Employee Module
import Employees from '../views/Employee/Employees.vue'
import CreateEmployee from '../views/Employee/CreateEmployee.vue'
import ViewEmployee from '../views/Employee/ViewEmployee.vue'

//User Module
import UserManagement from '../views/UserManagement/UserManagement.vue'
import ViewUser from '../views/UserManagement/ViewUser.vue'

//Project Module
import Projects from '../views/Project/Projects.vue'
import CreateProject from '../views/Project/CreateProject.vue'
import ViewProject from '../views/Project/ViewProject.vue'

//Leave Module
import Leave from '../views/Leave/Leave.vue'

//Leave Credits Module
import LeaveCredits from '../views/LeaveCredits/LeaveCredits.vue'
import Auditrails from '../views/LeaveCredits/Auditrails.vue'

//Compensations Module
import Compensation from '../views/Compensation/Compensation.vue'
import AddCompensation from '../views/Compensation/AddCompensation.vue'
import MassAssign from '../views/Compensation/MassAssign.vue'

//Deductions Module
import Deductions from '../views/Deduction/Deductions.vue'
import AddDeduction from '../views/Deduction/AddDeduction.vue'
import Archived from '../views/Deduction/Archived.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/Dashboard',
    name: 'Dashboard',
    component: Dashboard
  },
  {
    path: '/Company',
    name: 'Company',
    component: Company
  },
  {
    path: '/Department',
    name: 'Department',
    component: Department
  },
  {
    path: '/CreateDepartment',
    name: 'CreateDepartment',
    component: CreateDepartment
  },
  {
    path: '/ViewDepartment',
    name: 'ViewDepartment',
    component: ViewDepartment
  },
  {
    path: '/Employees',
    name: 'Employees',
    component: Employees
  },
  {
    path: '/CreateEmployee',
    name: 'CreateEmployee',
    component: CreateEmployee
  },
  {
    path: '/ViewEmployee',
    name: 'ViewEmployee',
    component: ViewEmployee
  },
  {
    path: '/UserManagement',
    name: 'UserManagement',
    component: UserManagement
  },
  {
    path: '/ViewUser',
    name: 'ViewUser',
    component: ViewUser
  },
  {
    path: '/Projects',
    name: 'Projects',
    component: Projects
  },
  {
    path: '/CreateProject',
    name: 'CreateProject',
    component: CreateProject
  },
  {
    path: '/ViewProject',
    name: 'ViewProject',
    component: ViewProject
  },
  {
    path: '/Compensation',
    name: 'Compensation',
    component: Compensation
  },
  {
    path: '/AddCompensation',
    name: 'AddCompensation',
    component: AddCompensation
  },
  {
    path: '/MassAssign',
    name: 'MassAssign',
    component: MassAssign
  },
  {
    path: '/Deductions',
    name: 'Deductions',
    component: Deductions
  },
  {
    path: '/AddDeduction',
    name: 'AddDeduction',
    component: AddDeduction
  },
  {
    path: '/Archived',
    name: 'Archived',
    component: Archived
  },
  {
    path: '/Leave',
    name: 'Leave',
    component: Leave
  },
  {
    path: '/LeaveCredits',
    name: 'LeaveCredits',
    component: LeaveCredits
  },
  {
    path: '/Auditrails',
    name: 'Auditrails',
    component: Auditrails
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
