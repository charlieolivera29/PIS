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
              <h6 class="m-0 mt-2 font-weight-bold text-primary">User Account</h6>
            </div>
            <!-- Card Body -->
            <div class="card-body">
        <form class="user">
        <div class="form-group">
        <center><img class="rounded-circle" src="../assets/background2.jpg" width="100" height="100"></center>

        <label class="text-xs font-weight-bold text-primary text-uppercase mb-1">Full Name</label>
        <input type="text" class="form-control bg-white border-1 small" value="Charlie Olivera" disabled="true">

        <label class="text-xs font-weight-bold text-primary text-uppercase mb-1 mt-2">Email</label>
        <input type="text" class="form-control bg-white border-1 small" value="ccolivera@caimitoapps.com" disabled="true">

        <label class="text-xs font-weight-bold text-primary text-uppercase mb-1 mt-2">Contact</label>
        <input type="text" class="form-control bg-white border-1 small" value="0939*******" disabled="true">

        <label class="text-xs font-weight-bold text-primary text-uppercase mb-1 mt-2">Status</label>
        <a type="button" class="form-control bg-gray-100 text-dark border-1 small btn-icon-split justify-content-between" @click="changeColor" :class="{'border-left-success': isActive, 'border-left-warning': !isActive }">
          <b class="my-auto pl-5"><span id="status_name" class="text-dark">{{msg}}</span></b>
          <span id="status" class="icon text-white-50" :class="{'bg-success': isActive, 'bg-warning': !isActive }" >
            <i></i>
          </span>
        </a>
        </div>
        <a href="login.html" class="btn btn-primary text-white border-0 btn-block">
        Update Status
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
  name: 'editUserManagement',
  data () {
    return {
      isActive: false,
      msg: "Inactive"
    }
  },
  components: {
    SideBar,
    TopBar
  },
  methods: {
    back() {
      this.$router.push({name: 'viewUserManagement'});
    },
    changeColor: function(){
      this.isActive = !this.isActive;
      if (this.isActive == false) {
        $('#status_name').text('Inactive');
      } else {
        $('#status_name').text('Active');
      }
    }
  }
};
</script> 