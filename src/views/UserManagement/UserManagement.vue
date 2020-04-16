<template>
<div id="usermanagement">
<div id="wrapper">
    <SideBar/>
    <div id="content-wrapper" class="d-flex flex-column">
      <div id="content">
        <TopBar/>
        <div class="container-fluid">
          <div class="card shadow-sm mb-4">
            <div class="card-header py-3">
              <h6 class="m-0 font-weight-bold text-primary">User Management</h6>
            </div>
            <div class="card-body">

              <div class="row">
                <div></div>
              </div>
              <div class="table-responsive">
                <table class="table" id="dataTable" width="100%" cellspacing="0">
                  <thead>
                    <tr>
                      <th>Photo</th>
                      <th>Full Name</th>
                      <th>Email</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>

                    <tr v-for="item in items" v-bind:key="item">
                      <td><img src="../../assets/background2.jpg" v-bind:alt="pic" class="img-profile rounded-circle" width="40" height="40"></td>
                      <td class="align-middle"><label class="label-s t-lg"><i class="fas fa-fw fa-user t-light-gray"></i> {{item.name}}</label></td>
                      <td class="align-middle"><div class="label-s t-lg u-hover primary-hover"><i class="fas fa-fw fa-envelope t-light-gray primary-hover"></i> {{item.email}}</div></td>
                      <td class="align-middle">
                        <div id="switch-button" :class="{'active': item.status == 'Active', 'inactive': item.status == 'Inactive'}" @click="change(item)">
                          <div class="switch"></div>
                          <p class="status">{{item.status}}</p>
                        </div>
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
  data() {
    return{
      items: [
          { photo: 'background2.jpg', name: 'Charlie Ching Olivera', email: 'ccolivera@caimitoapps.com', status: 'Active' },
          { photo: 'background2.jpg', name: 'Charlie Ching Olivera', email: 'ccolivera@caimitoapps.com', status: 'Inactive' },
          { photo: 'background2.jpg', name: 'Charlie Ching Olivera', email: 'ccolivera@caimitoapps.com', status: 'Active' },
          { photo: 'background2.jpg', name: 'Charlie Ching Olivera', email: 'ccolivera@caimitoapps.com', status: 'Inactive' },
          { photo: 'background2.jpg', name: 'Charlie Ching Olivera', email: 'ccolivera@caimitoapps.com', status: 'Active' },
          { photo: 'background2.jpg', name: 'Charlie Ching Olivera', email: 'ccolivera@caimitoapps.com', status: 'Inactive' },
          { photo: 'background2.jpg', name: 'Charlie Ching Olivera', email: 'ccolivera@caimitoapps.com', status: 'Active' },
          { photo: 'background2.jpg', name: 'Charlie Ching Olivera', email: 'ccolivera@caimitoapps.com', status: 'Inactive' },
          { photo: 'background2.jpg', name: 'Charlie Ching Olivera', email: 'ccolivera@caimitoapps.com', status: 'Active' },
          { photo: 'background2.jpg', name: 'Charlie Ching Olivera', email: 'ccolivera@caimitoapps.com', status: 'Inactive' },
          { photo: 'background2.jpg', name: 'Charlie Ching Olivera', email: 'ccolivera@caimitoapps.com', status: 'Active' },
          { photo: 'background2.jpg', name: 'Charlie Ching Olivera', email: 'ccolivera@caimitoapps.com', status: 'Inactive' },
          { photo: 'background2.jpg', name: 'Charlie Ching Olivera', email: 'ccolivera@caimitoapps.com', status: 'Active' },
          { photo: 'background2.jpg', name: 'Charlie Ching Olivera', email: 'ccolivera@caimitoapps.com', status: 'Inactive' },
          { photo: 'background2.jpg', name: 'Charlie Ching Olivera', email: 'ccolivera@caimitoapps.com', status: 'Active' },
          { photo: 'background2.jpg', name: 'Charlie Ching Olivera', email: 'ccolivera@caimitoapps.com', status: 'Inactive' },
          { photo: 'background2.jpg', name: 'Charlie Ching Olivera', email: 'ccolivera@caimitoapps.com', status: 'Active' },
          { photo: 'background2.jpg', name: 'Charlie Ching Olivera', email: 'ccolivera@caimitoapps.com', status: 'Inactive' },
          { photo: 'background2.jpg', name: 'Charlie Ching Olivera', email: 'ccolivera@caimitoapps.com', status: 'Active' },
          { photo: 'background2.jpg', name: 'Charlie Ching Olivera', email: 'ccolivera@caimitoapps.com', status: 'Inactive' },
          { photo: 'background2.jpg', name: 'Charlie Ching Olivera', email: 'ccolivera@caimitoapps.com', status: 'Active' },
          { photo: 'background2.jpg', name: 'Charlie Ching Olivera', email: 'ccolivera@caimitoapps.com', status: 'Inactive' },
          { photo: 'background2.jpg', name: 'Charlie Ching Olivera', email: 'ccolivera@caimitoapps.com', status: 'Active' },
          { photo: 'background2.jpg', name: 'Charlie Ching Olivera', email: 'ccolivera@caimitoapps.com', status: 'Inactive' },
          { photo: 'background2.jpg', name: 'Charlie Ching Olivera', email: 'ccolivera@caimitoapps.com', status: 'Active' },
          { photo: 'background2.jpg', name: 'Charlie Ching Olivera', email: 'ccolivera@caimitoapps.com', status: 'Inactive' },
          { photo: 'background2.jpg', name: 'Charlie Ching Olivera', email: 'ccolivera@caimitoapps.com', status: 'Active' },
          { photo: 'background2.jpg', name: 'Charlie Ching Olivera', email: 'ccolivera@caimitoapps.com', status: 'Inactive' },
          { photo: 'background2.jpg', name: 'Charlie Ching Olivera', email: 'ccolivera@caimitoapps.com', status: 'Active' },
          { photo: 'background2.jpg', name: 'Charlie Ching Olivera', email: 'ccolivera@caimitoapps.com', status: 'Inactive' },
          { photo: 'background2.jpg', name: 'Charlie Ching Olivera', email: 'ccolivera@caimitoapps.com', status: 'Active' },
          { photo: 'background2.jpg', name: 'Charlie Ching Olivera', email: 'ccolivera@caimitoapps.com', status: 'Inactive' },
          { photo: 'background2.jpg', name: 'Charlie Ching Olivera', email: 'ccolivera@caimitoapps.com', status: 'Active' },
          { photo: 'background2.jpg', name: 'Charlie Ching Olivera', email: 'ccolivera@caimitoapps.com', status: 'Inactive' },
          { photo: 'background2.jpg', name: 'Charlie Ching Olivera', email: 'ccolivera@caimitoapps.com', status: 'Active' },
          { photo: 'background2.jpg', name: 'Charlie Ching Olivera', email: 'ccolivera@caimitoapps.com', status: 'Inactive' },
          { photo: 'background2.jpg', name: 'Charlie Ching Olivera', email: 'ccolivera@caimitoapps.com', status: 'Active' },
          { photo: 'background2.jpg', name: 'Charlie Ching Olivera', email: 'ccolivera@caimitoapps.com', status: 'Inactive' },
          { photo: 'background2.jpg', name: 'Charlie Ching Olivera', email: 'ccolivera@caimitoapps.com', status: 'Active' },
          { photo: 'background2.jpg', name: 'Charlie Ching Olivera', email: 'ccolivera@caimitoapps.com', status: 'Inactive' },
          { photo: 'background2.jpg', name: 'Charlie Ching Olivera', email: 'ccolivera@caimitoapps.com', status: 'Active' },
          { photo: 'background2.jpg', name: 'Charlie Ching Olivera', email: 'ccolivera@caimitoapps.com', status: 'Inactive' },
          { photo: 'background2.jpg', name: 'Charlie Ching Olivera', email: 'ccolivera@caimitoapps.com', status: 'Active' },
          { photo: 'background2.jpg', name: 'Charlie Ching Olivera', email: 'ccolivera@caimitoapps.com', status: 'Inactive' },
          { photo: 'background2.jpg', name: 'Charlie Ching Olivera', email: 'ccolivera@caimitoapps.com', status: 'Active' },
          { photo: 'background2.jpg', name: 'Charlie Ching Olivera', email: 'ccolivera@caimitoapps.com', status: 'Inactive' },
          { photo: 'background2.jpg', name: 'Charlie Ching Olivera', email: 'ccolivera@caimitoapps.com', status: 'Active' },
          { photo: 'background2.jpg', name: 'Charlie Ching Olivera', email: 'ccolivera@caimitoapps.com', status: 'Inactive' },
          { photo: 'background2.jpg', name: 'Charlie Ching Olivera', email: 'ccolivera@caimitoapps.com', status: 'Active' },
          { photo: 'background2.jpg', name: 'Charlie Ching Olivera', email: 'ccolivera@caimitoapps.com', status: 'Inactive' },
          { photo: 'background2.jpg', name: 'Charlie Ching Olivera', email: 'ccolivera@caimitoapps.com', status: 'Active' },
          { photo: 'background2.jpg', name: 'Charlie Ching Olivera', email: 'ccolivera@caimitoapps.com', status: 'Inactive' },
          { photo: 'background2.jpg', name: 'Charlie Ching Olivera', email: 'ccolivera@caimitoapps.com', status: 'Active' },
          { photo: 'background2.jpg', name: 'Charlie Ching Olivera', email: 'ccolivera@caimitoapps.com', status: 'Inactive' },
          { photo: 'background2.jpg', name: 'Charlie Ching Olivera', email: 'ccolivera@caimitoapps.com', status: 'Active' },
          { photo: 'background2.jpg', name: 'Charlie Ching Olivera', email: 'ccolivera@caimitoapps.com', status: 'Inactive' },
          { photo: 'background2.jpg', name: 'Charlie Ching Olivera', email: 'ccolivera@caimitoapps.com', status: 'Active' },
          { photo: 'background2.jpg', name: 'Charlie Ching Olivera', email: 'ccolivera@caimitoapps.com', status: 'Inactive' },
          { photo: 'background2.jpg', name: 'Charlie Ching Olivera', email: 'ccolivera@caimitoapps.com', status: 'Active' },
          { photo: 'background2.jpg', name: 'Charlie Ching Olivera', email: 'ccolivera@caimitoapps.com', status: 'Inactive' },
          { photo: 'background2.jpg', name: 'Charlie Ching Olivera', email: 'ccolivera@caimitoapps.com', status: 'Active' },
          { photo: 'background2.jpg', name: 'Charlie Ching Olivera', email: 'ccolivera@caimitoapps.com', status: 'Inactive' },
          { photo: 'background2.jpg', name: 'Charlie Ching Olivera', email: 'ccolivera@caimitoapps.com', status: 'Active' },
          { photo: 'background2.jpg', name: 'Charlie Ching Olivera', email: 'ccolivera@caimitoapps.com', status: 'Inactive' },
          { photo: 'background2.jpg', name: 'Charlie Ching Olivera', email: 'ccolivera@caimitoapps.com', status: 'Active' },
          { photo: 'background2.jpg', name: 'Charlie Ching Olivera', email: 'ccolivera@caimitoapps.com', status: 'Inactive' },
          { photo: 'background2.jpg', name: 'Charlie Ching Olivera', email: 'ccolivera@caimitoapps.com', status: 'Active' },
          { photo: 'background2.jpg', name: 'Charlie Ching Olivera', email: 'ccolivera@caimitoapps.com', status: 'Inactive' },
          { photo: 'background2.jpg', name: 'Charlie Ching Olivera', email: 'ccolivera@caimitoapps.com', status: 'Active' },
          { photo: 'background2.jpg', name: 'Charlie Ching Olivera', email: 'ccolivera@caimitoapps.com', status: 'Inactive' },
          { photo: 'background2.jpg', name: 'Charlie Ching Olivera', email: 'ccolivera@caimitoapps.com', status: 'Active' },
          { photo: 'background2.jpg', name: 'Charlie Ching Olivera', email: 'ccolivera@caimitoapps.com', status: 'Inactive' },
          { photo: 'background2.jpg', name: 'Charlie Ching Olivera', email: 'ccolivera@caimitoapps.com', status: 'Active' },
          { photo: 'background2.jpg', name: 'Charlie Ching Olivera', email: 'ccolivera@caimitoapps.com', status: 'Inactive' },
          { photo: 'background2.jpg', name: 'Charlie Ching Olivera', email: 'ccolivera@caimitoapps.com', status: 'Active' },
          { photo: 'background2.jpg', name: 'Charlie Ching Olivera', email: 'ccolivera@caimitoapps.com', status: 'Inactive' },
          { photo: 'background2.jpg', name: 'Charlie Ching Olivera', email: 'ccolivera@caimitoapps.com', status: 'Active' },
          { photo: 'background2.jpg', name: 'Charlie Ching Olivera', email: 'ccolivera@caimitoapps.com', status: 'Inactive' },
          { photo: 'background2.jpg', name: 'Charlie Ching Olivera', email: 'ccolivera@caimitoapps.com', status: 'Active' },
          { photo: 'background2.jpg', name: 'Charlie Ching Olivera', email: 'ccolivera@caimitoapps.com', status: 'Inactive' },
          { photo: 'background2.jpg', name: 'Charlie Ching Olivera', email: 'ccolivera@caimitoapps.com', status: 'Active' },
          { photo: 'background2.jpg', name: 'Charlie Ching Olivera', email: 'ccolivera@caimitoapps.com', status: 'Inactive' },
          { photo: 'background2.jpg', name: 'Charlie Ching Olivera', email: 'ccolivera@caimitoapps.com', status: 'Active' },
          { photo: 'background2.jpg', name: 'Charlie Ching Olivera', email: 'ccolivera@caimitoapps.com', status: 'Inactive' },
          { photo: 'background2.jpg', name: 'Charlie Ching Olivera', email: 'ccolivera@caimitoapps.com', status: 'Active' },
          { photo: 'background2.jpg', name: 'Charlie Ching Olivera', email: 'ccolivera@caimitoapps.com', status: 'Inactive' },
          { photo: 'background2.jpg', name: 'Charlie Ching Olivera', email: 'ccolivera@caimitoapps.com', status: 'Active' },
          { photo: 'background2.jpg', name: 'Charlie Ching Olivera', email: 'ccolivera@caimitoapps.com', status: 'Inactive' },
          { photo: 'background2.jpg', name: 'Charlie Ching Olivera', email: 'ccolivera@caimitoapps.com', status: 'Active' },
          { photo: 'background2.jpg', name: 'Charlie Ching Olivera', email: 'ccolivera@caimitoapps.com', status: 'Inactive' },
          { photo: 'background2.jpg', name: 'Charlie Ching Olivera', email: 'ccolivera@caimitoapps.com', status: 'Active' },
          { photo: 'background2.jpg', name: 'Charlie Ching Olivera', email: 'ccolivera@caimitoapps.com', status: 'Inactive' },
          { photo: 'background2.jpg', name: 'Charlie Ching Olivera', email: 'ccolivera@caimitoapps.com', status: 'Active' },
          { photo: 'background2.jpg', name: 'Charlie Ching Olivera', email: 'ccolivera@caimitoapps.com', status: 'Inactive' },
          { photo: 'background2.jpg', name: 'Charlie Ching Olivera', email: 'ccolivera@caimitoapps.com', status: 'Active' },
          { photo: 'background2.jpg', name: 'Charlie Ching Olivera', email: 'ccolivera@caimitoapps.com', status: 'Inactive' },
          { photo: 'background2.jpg', name: 'Charlie Ching Olivera', email: 'ccolivera@caimitoapps.com', status: 'Active' },
          { photo: 'background2.jpg', name: 'Charlie Ching Olivera', email: 'ccolivera@caimitoapps.com', status: 'Inactive' },
          { photo: 'background2.jpg', name: 'Charlie Ching Olivera', email: 'ccolivera@caimitoapps.com', status: 'Active' },
          { photo: 'background2.jpg', name: 'Charlie Ching Olivera', email: 'ccolivera@caimitoapps.com', status: 'Inactive' },
          { photo: 'background2.jpg', name: 'Charlie Ching Olivera', email: 'ccolivera@caimitoapps.com', status: 'Active' },
          { photo: 'background2.jpg', name: 'Charlie Ching Olivera', email: 'ccolivera@caimitoapps.com', status: 'Inactive' },
          { photo: 'background2.jpg', name: 'Charlie Ching Olivera', email: 'ccolivera@caimitoapps.com', status: 'Active' },
          { photo: 'background2.jpg', name: 'Charlie Ching Olivera', email: 'ccolivera@caimitoapps.com', status: 'Inactive' },
          { photo: 'background2.jpg', name: 'Charlie Ching Olivera', email: 'ccolivera@caimitoapps.com', status: 'Active' },
          { photo: 'background2.jpg', name: 'Charlie Ching Olivera', email: 'ccolivera@caimitoapps.com', status: 'Inactive' },
          { photo: 'background2.jpg', name: 'Charlie Ching Olivera', email: 'ccolivera@caimitoapps.com', status: 'Active' },
          { photo: 'background2.jpg', name: 'Charlie Ching Olivera', email: 'ccolivera@caimitoapps.com', status: 'Inactive' },
          { photo: 'background2.jpg', name: 'Charlie Ching Olivera', email: 'ccolivera@caimitoapps.com', status: 'Active' },
          { photo: 'background2.jpg', name: 'Charlie Ching Olivera', email: 'ccolivera@caimitoapps.com', status: 'Inactive' },
      ]
    }
  },
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
      this.$router.push({name: 'ViewUser'});
    },
    change(status){
      if (status.status == 'Inactive') {
        status.status = 'Active'
      } else {
        status.status = 'Inactive'
      }
    }
  }
};
</script>

<style type="text/css">

#switch-button {
  height: 25px;
  width: 90px;
  background-color: #F0F0F7;
  padding-left: 10px;
  padding-top: 5px;
  position: relative;
  border-radius: 15px;
  cursor: pointer;
}

#switch-button.inactive {
  background-color: rgba(255,0,0,0.1);
  border: 1px lightgray solid;
}

#switch-button.active {
  background-color: rgba(0,255,0,0.1);
  border: 1px lightgray solid;
}

#switch-button.inactive .switch {
  height: 23px;
  width: 23px;
  background-color: red;
  position: absolute;
  top: 0;
  border-radius: 100%;
  border: 1px lightgray solid;
  animation: toInactive 0.5s forwards;
}

#switch-button.active .switch {
  height: 23px;
  width: 23px;
  background-color: green;
  position: absolute;
  top: 0;
  border-radius: 100%;
  border: 1px lightgray solid;
  animation: toActive 0.5s forwards;
}

#switch-button.active .status {
  color: dimgray;
  font-size: 13px;
  top: 0;
  padding-top: 2px;
  font-weight: bold;
  position: absolute;
  animation: textActive 0.5s forwards;
}

#switch-button.inactive .status {
  color: dimgray;
  font-size: 13px;
  top: 0;
  padding-top: 2px;
  font-weight: bold;
  margin-right: 15px;
  position: absolute;
  animation: textInactive 0.5s forwards;
}

@keyframes textActive {
 from {right: 20px;}
 to {right: 30px;}
}
@keyframes textInactive {
 from {left: 20px;}
 to {left: 30px;} 
}
@keyframes toActive {
  from {left: 0px;}
  to {left: 65px;}
}
@keyframes toInactive {
  from {right: 0px;}
  to {right: 65px;}
}

</style>