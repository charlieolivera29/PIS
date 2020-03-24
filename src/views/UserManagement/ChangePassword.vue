<template>

<div id="wrapper">
<!-- Sidebar -->
<SideBar/>
<!-- End of Sidebar -->
<!-- Content Wrapper -->
<div id="content-wrapper" class="d-flex flex-column">
<!-- Main Content -->
<div id="content">
<!-- Topbar -->
<TopBar/>

<div class="container">
    <div class="row bg-white">
        <!-- Pie Chart -->
        <div class="col-xl-4 col-lg-5 mx-auto">
          <div class="card shadow mb-4">
            <!-- Card Header - Dropdown -->
            <div class="card-header py-2 d-flex flex-row align-items-center justify-content-between">
              <i class="fas fa-fw fa-arrow-left text-dark" @click="back()"></i>
              <h6 class="m-0 mt-2 font-weight-bold text-primary">Change Password</h6>
            </div>
            <!-- Card Body -->
            <div class="card-body">
        <form class="user">
        <div class="form-group">

        <label class="text-xs font-weight-bold text-primary text-uppercase mb-1">Old Password</label>
        <input type="text" class="form-control bg-white border-1 small">

        <label class="text-xs font-weight-bold text-primary text-uppercase mb-1 mt-2">New Password</label>
        <input type="text" class="form-control bg-white border-1 small">

        <label class="text-xs font-weight-bold text-primary text-uppercase mb-1 mt-2">Confirm Password</label>
        <input type="text" class="form-control bg-white border-1 small">
        </div>
        <a href="login.html" class="btn btn-primary text-white border-0 btn-block">
        Change Password
        </a>
        </form>
            </div>
          </div>
        </div>
      </div>
  </div>
</div>
</div>
</div>
</template>
<script src="../assets/vendor/jquery/jquery.min.js"></script>
<script>
import SideBar from '@/components/SideBar.vue';
import TopBar from '@/components/TopBar.vue';

export default {
  name: 'editPasswordUserManagement',
  components: {
    SideBar,
    TopBar
  },
  methods: {
    back() {
      this.$router.push({name: 'viewUserManagement'});
    }
  }
};
</script> 