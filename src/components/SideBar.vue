<template>
	<div id="sidebar-component">
    <ul class="navbar-nav bg-nav sidebar sidebar-dark accordion" id="accordionSidebar" style="height: 100%;">

      <a class="sidebar-brand d-flex align-items-center text-white justify-content-center" @click="logout()">
        <div class="sidebar-brand-icon rotate-n-15">
          <h1 class="bold">P</h1>
        </div>
        <div class="sidebar-brand-text mx-3">Personal Information System</div>
      </a>

      <hr class="sidebar-divider my-0">

      <li class="nav-item">
        <a class="nav-link" href="" @click="dashboard()">
          <i class="fas fa-fw fa-tachometer-alt text-white"></i>
          <span>Dashboard</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="" @click="employees()">
          <i class="fas fa-fw fa-user-friends text-white"></i>
          <span>Employees</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">
          <i class="fas fa-fw fa-building text-white"></i>
          <span>Departments</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">
          <i class="fas fa-fw fa-tasks text-white"></i>
          <span>Projects</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">
          <i class="fas fa-fw fa-hand-holding-usd text-white"></i>
          <span>Compensations</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">
          <i class="fas fa-fw fa-funnel-dollar text-white"></i>
          <span>Deductions</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">
          <i class="fas fa-fw fa-calendar-minus text-white"></i>
          <span>Leaves</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="" @click="usermanagement()">
          <i class="fas fa-fw fa-cogs text-white"></i>
          <span>User Management</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">
          <i class="fas fa-fw fa-cogs text-white"></i>
          <span>System Settings</span></a>
      </li>


    </ul>
  </div>
</template>
<script>
export default {
  name: 'SideBar',
  methods : {
    dashboard(){
      this.$router.push({name: 'Dashboard'})
    },
    employees(){
      this.$router.push({name: 'Employees'})
    },
    usermanagement(){
      this.$router.push({name: 'UserManagement'})
    },
    logout(){
      this.$router.push({name: 'Login'})
    }
  }
};
</script>

<style type="text/css">
.nav-link {
  padding-bottom: 12px !important;
  padding-top: 12px !important;
  color: white;
}

.nav-link span {
  margin-left: 10px;
  color: white;
}

.bg-nav {
  background-color: #17A673;
}

.nav-link:hover {
  background-color: white; 
  color: #1CC88A !important;
  font-weight: bold;
  border-left: 5px solid #1CC88A;
  border-top: 1px solid #1CC88A;
  border-bottom: 1px solid #1CC88A;
}

.nav-link:hover i, .nav-link:hover span {
  background-color: white; 
  color: #17A673 !important;
}
</style>
