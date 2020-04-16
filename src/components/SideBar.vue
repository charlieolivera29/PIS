<template>
	<div id="sidebar-component">
    <ul class="navbar-nav bg-nav sidebar sidebar-dark accordion" id="accordionSidebar" style="height: 100%;">

      <a class="sidebar-brand d-flex align-items-center text-white justify-content-center" @click="logout()">
        <div class="sidebar-brand-icon border-bottom-white p-2 w-100">
          <img src="../assets/img/pis_caimito_apps_logo.jpg" width="150" height="50">
        </div>
        <!-- <div class="sidebar-brand-text mx-3">PIS</div> -->
      </a>

      <li class="nav-item mt-3">
        <a class="nav-link" href="" @click="dashboard()">
          <i class="fas fa-fw fa-tachometer-alt text-white"></i>
          <span>Dashboard</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="" @click="company()">
          <i class="fas fa-fw fa-building text-white"></i>
          <span>Company Management</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href=""  @click="department()">
          <i class="fas fa-fw fa-landmark text-white"></i>
          <span>Departments</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="" @click="employees()">
          <i class="fas fa-fw fa-user-friends text-white"></i>
          <span>Employees</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="" @click="usermanagement()">
          <i class="fas fa-fw fa-user text-white"></i>
          <span>User Management</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="" @click="project()">
          <i class="fas fa-fw fa-suitcase text-white"></i>
          <span>Projects</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="" @click="compensation()">
          <i class="fas fa-fw fa-hand-holding-usd text-white"></i>
          <span>Compensations</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="" @click="deduction()">
          <i class="fas fa-fw fa-funnel-dollar text-white"></i>
          <span>Deductions</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="" @click="leave()">
          <i class="fas fa-fw fa-calendar-minus text-white"></i>
          <span>Leaves</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="" @click="leavecredits()">
          <i class="fas fa-fw fa-mail-bulk text-white"></i>
          <span>Leave Credits</span></a>
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
    company(){
      this.$router.push({name: 'Company'})
    },
    department(){
      this.$router.push({name: 'Department'})
    },
    employees(){
      this.$router.push({name: 'Employees'})
    },
    usermanagement(){
      this.$router.push({name: 'UserManagement'})
    },
    project(){
      this.$router.push({name: 'Projects'})
    },
    compensation(){
      this.$router.push({name: 'Compensation'})
    },
    deduction(){
      this.$router.push({name: 'Deductions'})
    },
    leave(){
      this.$router.push({name: 'Leave'})
    },
    leavecredits(){
      this.$router.push({name: 'LeaveCredits'})
    },
    logout(){
      this.$router.push({name: 'Login'})
    }
  }
};
</script>

<style type="text/css">


/* Green Background */

.nav-link {
  padding-bottom: 12px !important;
  padding-top: 12px !important;
  color: white;
}

.nav-link span {
  margin-left: 10px;
  color: white;
  font-weight: bold;
}

.bg-nav {
  background-color: #2A3F54;
  /*background-color: #17A673;*/
}

/* Green Hover */

/*.nav-link:hover {
	background-color: #149466;
	border-left: 5px solid white;
}*/

/* White hover */

.nav-link:hover {
  /*background-color: #C1C3CD;*/
  background-color: #F8F9FC; 
  color: #2A3F54 !important;
  border-left: 5px solid #C8923B;
  /*border-left: 5px solid #1CC88A;*/
}

.nav-link:hover i, .nav-link:hover span {
  /*background-color: #C1C3CD; */
  background-color: #F8F9FC; 
  color: #2A3F54 !important;
}



/* White Background */

/*.bg-nav {
  background-color: white;
}

.sidebar-brand-icon h1 {
	color: #17A673;
}

.nav-link {
  padding-bottom: 12px !important;
  padding-top: 12px !important;
  color: sidebar-brand-icon;
}

.nav-link span {
  margin-left: 10px;
  color: #17A673 !important;
}

.nav-link i {
  color: #17A673 !important;
}

.nav-link:hover {
  background-color: #17A673; 
  color: white !important;
  border-left: 5px solid lightgray;
}

.nav-link:hover i, .nav-link:hover span {
  background-color: #17A673; 
  color: white !important;
}*/

</style>
