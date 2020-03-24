<template>
<div id="usermanagement">
<div id="wrapper">
    <SideBar/>
    <div id="content-wrapper" class="d-flex flex-column">
      <div id="content">
        <TopBar/>
        <div class="container-fluid">
          <div class="card shadow mb-4">
            <div class="card-header py-3">
              <h6 class="m-0 font-weight-bold text-primary">User Management</h6>
            </div>
            <div class="card-body">
              <div class="table-responsive">
                <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                  <thead>
                    <tr>
                      <th>Photo</th>
                      <th>Full Name</th>
                      <th>Mobile</th>
                      <th>Email</th>
                      <th>Status</th>
                      <th>Operation</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><center><img src="../../assets/background2.jpg" class="img-profile rounded-circle" width="40" height="40"></center></td>
                      <td>Charlie Ching Olivera</td>
                      <td>0939*******</td>
                      <td>ccolivera@caimitoapps.com</td>
                      <td><label class="bg-warning text-white py-1 px-3 rounded">Inactive</label></td>
                      <td>
                        <a href="#" class="btn btn-primary btn-icon-split text-white border-0 btn-block justify-content-between" @click="view()">
                          <span class="text">View</span>
                          <span class="icon text-white-50">
                            <i class="fas fa-arrow-right"></i>
                          </span>
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
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
  name: 'UserManagement',
  components: {
    SideBar,
    TopBar
  },
  mounted() {
    $(document).ready(function() {
      $('#dataTable').DataTable();
    });
  },
  methods: {
    view() {
      this.$router.push({name: 'viewUserManagement'});
    }
  }
};
</script>