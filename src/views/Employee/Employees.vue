<template>
<div id="employee">
<div id="wrapper">
    <SideBar/>
    <div id="content-wrapper" class="d-flex flex-column">
      <div id="content">
        <TopBar/>
        <div class="container-fluid">
          <div class="card shadow-sm mb-4">
            <div class="card-header py-1">
              <div class="row">
                <div class="col-md-6 my-auto">
                  <h6 class="m-0 font-weight-bold text-primary">Employees</h6>
                </div>
                <div class="col-md-6">
                  <button class="btn b-primary btn-sm float-right m-1" @click="createEmployee()"><i class="fas fa-fw fa-user-plus text-white"></i></button>
                </div>
              </div>
            </div>
            <div class="card-body">
              <div class="table-responsive">
                <table class="table table-hover" id="dataTable" width="100%" cellspacing="0">
                  <thead class="">
                    <tr>
                      <th>Photo</th>
                      <th>Information</th>
                      <th>Department</th>
                      <th>Company</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="item in items" v-bind:key="item" @click="view()">
                      <td><center><img src="../../assets/background2.jpg" class="img-profile rounded-circle" width="50" height="50"></center></td>
                      <td class="align-middle">
                        <span class="name p-0 m-0 t-md"><i class="fas fa-fw fa-id-badge t-light-gray"></i> {{item.id}}</span>
                        <br>
                        <span class="name p-0 m-0 t-md"><i class="fas fa-fw fa-user t-light-gray"></i> {{item.name}}</span>
                      </td>
                      <td class="align-middle">
                        <span class="name p-0 m-0 t-md"><i class="fas fa-fw fa-building t-light-gray"></i> {{item.department}}</span>
                        <br>
                        <span class="contact p-0 m-0 t-md"><i class="fas fa-fw fa-user-tie t-light-gray"></i> {{item.position}}</span>
                      </td>
                      <td class="align-middle">
                        <span class="name p-0 m-0 t-md"><i class="fas fa-fw fa-id-badge t-light-gray"></i> {{item.company}}</span>
                        <br>
                        <span class="contact p-0 m-0 t-md"><i class="fas fa-fw fa-user-tie t-light-gray"></i> {{item.founder}}</span>
                      </td>
                      <td class="align-middle"><label class="bg-success text-white py-1 px-3 rounded mt-3">{{item.status}}</label></td>
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
  name: 'Employees',
  data(){
    return{
      items:[
        { name: 'Charlie Ching Olivera', contact: '0939*******', email: 'ccolivera@caimitoapp.com', id: 'ZGH0003', department: 'IT Software', position: 'Front-End Developer', company: 'Zolvere Group Holdings Inc.', type: 'IT Solution', founder: 'Erville D Magtubo', status: 'Active' },
        { name: 'Charlie Ching Olivera', contact: '0939*******', email: 'ccolivera@caimitoapp.com', id: 'ZGH0003', department: 'IT Software', position: 'Front-End Developer', company: 'Zolvere Group Holdings Inc.', type: 'IT Solution', founder: 'Erville D Magtubo', status: 'Active' },
        { name: 'Charlie Ching Olivera', contact: '0939*******', email: 'ccolivera@caimitoapp.com', id: 'ZGH0003', department: 'IT Software', position: 'Front-End Developer', company: 'Zolvere Group Holdings Inc.', type: 'IT Solution', founder: 'Erville D Magtubo', status: 'Active' },
        { name: 'Charlie Ching Olivera', contact: '0939*******', email: 'ccolivera@caimitoapp.com', id: 'ZGH0003', department: 'IT Software', position: 'Front-End Developer', company: 'Zolvere Group Holdings Inc.', type: 'IT Solution', founder: 'Erville D Magtubo', status: 'Active' },
        { name: 'Charlie Ching Olivera', contact: '0939*******', email: 'ccolivera@caimitoapp.com', id: 'ZGH0003', department: 'IT Software', position: 'Front-End Developer', company: 'Zolvere Group Holdings Inc.', type: 'IT Solution', founder: 'Erville D Magtubo', status: 'Active' },
        { name: 'Charlie Ching Olivera', contact: '0939*******', email: 'ccolivera@caimitoapp.com', id: 'ZGH0003', department: 'IT Software', position: 'Front-End Developer', company: 'Zolvere Group Holdings Inc.', type: 'IT Solution', founder: 'Erville D Magtubo', status: 'Active' },
        { name: 'Charlie Ching Olivera', contact: '0939*******', email: 'ccolivera@caimitoapp.com', id: 'ZGH0003', department: 'IT Software', position: 'Front-End Developer', company: 'Zolvere Group Holdings Inc.', type: 'IT Solution', founder: 'Erville D Magtubo', status: 'Active' },
        { name: 'Charlie Ching Olivera', contact: '0939*******', email: 'ccolivera@caimitoapp.com', id: 'ZGH0003', department: 'IT Software', position: 'Front-End Developer', company: 'Zolvere Group Holdings Inc.', type: 'IT Solution', founder: 'Erville D Magtubo', status: 'Active' },
        { name: 'Charlie Ching Olivera', contact: '0939*******', email: 'ccolivera@caimitoapp.com', id: 'ZGH0003', department: 'IT Software', position: 'Front-End Developer', company: 'Zolvere Group Holdings Inc.', type: 'IT Solution', founder: 'Erville D Magtubo', status: 'Active' },
        { name: 'Charlie Ching Olivera', contact: '0939*******', email: 'ccolivera@caimitoapp.com', id: 'ZGH0003', department: 'IT Software', position: 'Front-End Developer', company: 'Zolvere Group Holdings Inc.', type: 'IT Solution', founder: 'Erville D Magtubo', status: 'Active' },
        { name: 'Charlie Ching Olivera', contact: '0939*******', email: 'ccolivera@caimitoapp.com', id: 'ZGH0003', department: 'IT Software', position: 'Front-End Developer', company: 'Zolvere Group Holdings Inc.', type: 'IT Solution', founder: 'Erville D Magtubo', status: 'Active' },
        { name: 'Charlie Ching Olivera', contact: '0939*******', email: 'ccolivera@caimitoapp.com', id: 'ZGH0003', department: 'IT Software', position: 'Front-End Developer', company: 'Zolvere Group Holdings Inc.', type: 'IT Solution', founder: 'Erville D Magtubo', status: 'Active' },
        { name: 'Charlie Ching Olivera', contact: '0939*******', email: 'ccolivera@caimitoapp.com', id: 'ZGH0003', department: 'IT Software', position: 'Front-End Developer', company: 'Zolvere Group Holdings Inc.', type: 'IT Solution', founder: 'Erville D Magtubo', status: 'Active' },
        { name: 'Charlie Ching Olivera', contact: '0939*******', email: 'ccolivera@caimitoapp.com', id: 'ZGH0003', department: 'IT Software', position: 'Front-End Developer', company: 'Zolvere Group Holdings Inc.', type: 'IT Solution', founder: 'Erville D Magtubo', status: 'Active' },
        { name: 'Charlie Ching Olivera', contact: '0939*******', email: 'ccolivera@caimitoapp.com', id: 'ZGH0003', department: 'IT Software', position: 'Front-End Developer', company: 'Zolvere Group Holdings Inc.', type: 'IT Solution', founder: 'Erville D Magtubo', status: 'Active' },
        { name: 'Charlie Ching Olivera', contact: '0939*******', email: 'ccolivera@caimitoapp.com', id: 'ZGH0003', department: 'IT Software', position: 'Front-End Developer', company: 'Zolvere Group Holdings Inc.', type: 'IT Solution', founder: 'Erville D Magtubo', status: 'Active' },
        { name: 'Charlie Ching Olivera', contact: '0939*******', email: 'ccolivera@caimitoapp.com', id: 'ZGH0003', department: 'IT Software', position: 'Front-End Developer', company: 'Zolvere Group Holdings Inc.', type: 'IT Solution', founder: 'Erville D Magtubo', status: 'Active' },
        { name: 'Charlie Ching Olivera', contact: '0939*******', email: 'ccolivera@caimitoapp.com', id: 'ZGH0003', department: 'IT Software', position: 'Front-End Developer', company: 'Zolvere Group Holdings Inc.', type: 'IT Solution', founder: 'Erville D Magtubo', status: 'Active' },
        { name: 'Charlie Ching Olivera', contact: '0939*******', email: 'ccolivera@caimitoapp.com', id: 'ZGH0003', department: 'IT Software', position: 'Front-End Developer', company: 'Zolvere Group Holdings Inc.', type: 'IT Solution', founder: 'Erville D Magtubo', status: 'Active' },
        { name: 'Charlie Ching Olivera', contact: '0939*******', email: 'ccolivera@caimitoapp.com', id: 'ZGH0003', department: 'IT Software', position: 'Front-End Developer', company: 'Zolvere Group Holdings Inc.', type: 'IT Solution', founder: 'Erville D Magtubo', status: 'Active' },
        { name: 'Charlie Ching Olivera', contact: '0939*******', email: 'ccolivera@caimitoapp.com', id: 'ZGH0003', department: 'IT Software', position: 'Front-End Developer', company: 'Zolvere Group Holdings Inc.', type: 'IT Solution', founder: 'Erville D Magtubo', status: 'Active' },
        { name: 'Charlie Ching Olivera', contact: '0939*******', email: 'ccolivera@caimitoapp.com', id: 'ZGH0003', department: 'IT Software', position: 'Front-End Developer', company: 'Zolvere Group Holdings Inc.', type: 'IT Solution', founder: 'Erville D Magtubo', status: 'Active' },
        { name: 'Charlie Ching Olivera', contact: '0939*******', email: 'ccolivera@caimitoapp.com', id: 'ZGH0003', department: 'IT Software', position: 'Front-End Developer', company: 'Zolvere Group Holdings Inc.', type: 'IT Solution', founder: 'Erville D Magtubo', status: 'Active' },
        { name: 'Charlie Ching Olivera', contact: '0939*******', email: 'ccolivera@caimitoapp.com', id: 'ZGH0003', department: 'IT Software', position: 'Front-End Developer', company: 'Zolvere Group Holdings Inc.', type: 'IT Solution', founder: 'Erville D Magtubo', status: 'Active' },
        { name: 'Charlie Ching Olivera', contact: '0939*******', email: 'ccolivera@caimitoapp.com', id: 'ZGH0003', department: 'IT Software', position: 'Front-End Developer', company: 'Zolvere Group Holdings Inc.', type: 'IT Solution', founder: 'Erville D Magtubo', status: 'Active' },
        { name: 'Charlie Ching Olivera', contact: '0939*******', email: 'ccolivera@caimitoapp.com', id: 'ZGH0003', department: 'IT Software', position: 'Front-End Developer', company: 'Zolvere Group Holdings Inc.', type: 'IT Solution', founder: 'Erville D Magtubo', status: 'Active' },
        { name: 'Charlie Ching Olivera', contact: '0939*******', email: 'ccolivera@caimitoapp.com', id: 'ZGH0003', department: 'IT Software', position: 'Front-End Developer', company: 'Zolvere Group Holdings Inc.', type: 'IT Solution', founder: 'Erville D Magtubo', status: 'Active' },
        { name: 'Charlie Ching Olivera', contact: '0939*******', email: 'ccolivera@caimitoapp.com', id: 'ZGH0003', department: 'IT Software', position: 'Front-End Developer', company: 'Zolvere Group Holdings Inc.', type: 'IT Solution', founder: 'Erville D Magtubo', status: 'Active' },
        { name: 'Charlie Ching Olivera', contact: '0939*******', email: 'ccolivera@caimitoapp.com', id: 'ZGH0003', department: 'IT Software', position: 'Front-End Developer', company: 'Zolvere Group Holdings Inc.', type: 'IT Solution', founder: 'Erville D Magtubo', status: 'Active' },
        { name: 'Charlie Ching Olivera', contact: '0939*******', email: 'ccolivera@caimitoapp.com', id: 'ZGH0003', department: 'IT Software', position: 'Front-End Developer', company: 'Zolvere Group Holdings Inc.', type: 'IT Solution', founder: 'Erville D Magtubo', status: 'Active' },
        { name: 'Charlie Ching Olivera', contact: '0939*******', email: 'ccolivera@caimitoapp.com', id: 'ZGH0003', department: 'IT Software', position: 'Front-End Developer', company: 'Zolvere Group Holdings Inc.', type: 'IT Solution', founder: 'Erville D Magtubo', status: 'Active' },
        { name: 'Charlie Ching Olivera', contact: '0939*******', email: 'ccolivera@caimitoapp.com', id: 'ZGH0003', department: 'IT Software', position: 'Front-End Developer', company: 'Zolvere Group Holdings Inc.', type: 'IT Solution', founder: 'Erville D Magtubo', status: 'Active' },
        { name: 'Charlie Ching Olivera', contact: '0939*******', email: 'ccolivera@caimitoapp.com', id: 'ZGH0003', department: 'IT Software', position: 'Front-End Developer', company: 'Zolvere Group Holdings Inc.', type: 'IT Solution', founder: 'Erville D Magtubo', status: 'Active' },
        { name: 'Charlie Ching Olivera', contact: '0939*******', email: 'ccolivera@caimitoapp.com', id: 'ZGH0003', department: 'IT Software', position: 'Front-End Developer', company: 'Zolvere Group Holdings Inc.', type: 'IT Solution', founder: 'Erville D Magtubo', status: 'Active' },
        { name: 'Charlie Ching Olivera', contact: '0939*******', email: 'ccolivera@caimitoapp.com', id: 'ZGH0003', department: 'IT Software', position: 'Front-End Developer', company: 'Zolvere Group Holdings Inc.', type: 'IT Solution', founder: 'Erville D Magtubo', status: 'Active' },
        { name: 'Charlie Ching Olivera', contact: '0939*******', email: 'ccolivera@caimitoapp.com', id: 'ZGH0003', department: 'IT Software', position: 'Front-End Developer', company: 'Zolvere Group Holdings Inc.', type: 'IT Solution', founder: 'Erville D Magtubo', status: 'Active' },
        { name: 'Charlie Ching Olivera', contact: '0939*******', email: 'ccolivera@caimitoapp.com', id: 'ZGH0003', department: 'IT Software', position: 'Front-End Developer', company: 'Zolvere Group Holdings Inc.', type: 'IT Solution', founder: 'Erville D Magtubo', status: 'Active' },
        { name: 'Charlie Ching Olivera', contact: '0939*******', email: 'ccolivera@caimitoapp.com', id: 'ZGH0003', department: 'IT Software', position: 'Front-End Developer', company: 'Zolvere Group Holdings Inc.', type: 'IT Solution', founder: 'Erville D Magtubo', status: 'Active' },
        { name: 'Charlie Ching Olivera', contact: '0939*******', email: 'ccolivera@caimitoapp.com', id: 'ZGH0003', department: 'IT Software', position: 'Front-End Developer', company: 'Zolvere Group Holdings Inc.', type: 'IT Solution', founder: 'Erville D Magtubo', status: 'Active' },
        { name: 'Charlie Ching Olivera', contact: '0939*******', email: 'ccolivera@caimitoapp.com', id: 'ZGH0003', department: 'IT Software', position: 'Front-End Developer', company: 'Zolvere Group Holdings Inc.', type: 'IT Solution', founder: 'Erville D Magtubo', status: 'Active' },
        { name: 'Charlie Ching Olivera', contact: '0939*******', email: 'ccolivera@caimitoapp.com', id: 'ZGH0003', department: 'IT Software', position: 'Front-End Developer', company: 'Zolvere Group Holdings Inc.', type: 'IT Solution', founder: 'Erville D Magtubo', status: 'Active' },
        { name: 'Charlie Ching Olivera', contact: '0939*******', email: 'ccolivera@caimitoapp.com', id: 'ZGH0003', department: 'IT Software', position: 'Front-End Developer', company: 'Zolvere Group Holdings Inc.', type: 'IT Solution', founder: 'Erville D Magtubo', status: 'Active' },
        { name: 'Charlie Ching Olivera', contact: '0939*******', email: 'ccolivera@caimitoapp.com', id: 'ZGH0003', department: 'IT Software', position: 'Front-End Developer', company: 'Zolvere Group Holdings Inc.', type: 'IT Solution', founder: 'Erville D Magtubo', status: 'Active' },
        { name: 'Charlie Ching Olivera', contact: '0939*******', email: 'ccolivera@caimitoapp.com', id: 'ZGH0003', department: 'IT Software', position: 'Front-End Developer', company: 'Zolvere Group Holdings Inc.', type: 'IT Solution', founder: 'Erville D Magtubo', status: 'Active' },
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
    createEmployee() {
      this.$router.push({name: 'CreateEmployee'});
    },
    view() {
      this.$router.push({name: 'ViewEmployee'});
    }
  }
};
</script>