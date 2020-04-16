<template>
<div id="employee">
<div id="wrapper">
    <SideBar/>
    <div id="content-wrapper" class="d-flex flex-column">
      <div id="content">
        <TopBar/>
        <div class="container-fluid">
          <div class="card shadow-sm mb-4">
            <div class="card-header bg-white py-1">
              <div class="row">
                <div class="col-md-6 my-auto">
                  <span class="m-0 font-weight-bold t-dimgray t-lg">Department</span>
                </div>
                <div class="col-md-6">
                  <button class="btn btn-brown-outline btn-sm float-right rounded m-1" @click="CreateDepartment()"><i class="fas fa-fw fa-plus"></i> Department</button>
                </div>
              </div>
            </div>
            <div class="card-body">
              <div class="table-responsive">
                <table class="table table-hover" id="dataTable" width="100%" cellspacing="0">
                  <thead>
                    <tr>
                      <th>Department Name</th>
                      <th>Department Lead</th>
                      <th>Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="item in items" v-bind:key="item" @click="view()">
                      <td class="align-middle">
                        <span class="p-0 m-0 t-md"><i class="fas fa-fw fa-landmark t-light-gray"></i> {{item.name}}</span>
                        <br>
                        <span class="p-0 m-0 t-md"><i class="fas fa-fw fa-user-tie t-light-gray"></i> {{item.count}}</span>
                      </td>
                      <td>
                        <span class="p-0 m-0 t-md"><i class="fas fa-fw fa-user t-light-gray"></i> {{item.head}}</span>
                        <br>
                        <span class="p-0 m-0 t-md"><i class="fas fa-fw fa-user-tie t-light-gray"></i> {{item.position}}</span>
                      </td>
                      <td>
                        <span class="p-0 m-0 t-md"><i class="fas fa-fw fa-file-alt t-light-gray"></i> {{item.description}}</span>
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
  name: 'Department',
  data() {
    return {
      items: [
        {name: 'I.T Software', count: 50, head: 'Admin Admin Admin', position: 'Front-End Developer', description: 'Something to describe about department'},
        {name: 'I.T Software', count: 50, head: 'Admin Admin Admin', position: 'Front-End Developer', description: 'Something to describe about department'},
        {name: 'I.T Software', count: 50, head: 'Admin Admin Admin', position: 'Front-End Developer', description: 'Something to describe about department'},
        {name: 'I.T Software', count: 50, head: 'Admin Admin Admin', position: 'Front-End Developer', description: 'Something to describe about department'},
        {name: 'I.T Software', count: 50, head: 'Admin Admin Admin', position: 'Front-End Developer', description: 'Something to describe about department'},
        {name: 'I.T Software', count: 50, head: 'Admin Admin Admin', position: 'Front-End Developer', description: 'Something to describe about department'},
        {name: 'I.T Software', count: 50, head: 'Admin Admin Admin', position: 'Front-End Developer', description: 'Something to describe about department'},
        {name: 'I.T Software', count: 50, head: 'Admin Admin Admin', position: 'Front-End Developer', description: 'Something to describe about department'},
        {name: 'I.T Software', count: 50, head: 'Admin Admin Admin', position: 'Front-End Developer', description: 'Something to describe about department'},
        {name: 'I.T Software', count: 50, head: 'Admin Admin Admin', position: 'Front-End Developer', description: 'Something to describe about department'},
        {name: 'I.T Software', count: 50, head: 'Admin Admin Admin', position: 'Front-End Developer', description: 'Something to describe about department'},
        {name: 'I.T Software', count: 50, head: 'Admin Admin Admin', position: 'Front-End Developer', description: 'Something to describe about department'},
        {name: 'I.T Software', count: 50, head: 'Admin Admin Admin', position: 'Front-End Developer', description: 'Something to describe about department'},
        {name: 'I.T Software', count: 50, head: 'Admin Admin Admin', position: 'Front-End Developer', description: 'Something to describe about department'},
        {name: 'I.T Software', count: 50, head: 'Admin Admin Admin', position: 'Front-End Developer', description: 'Something to describe about department'},
        {name: 'I.T Software', count: 50, head: 'Admin Admin Admin', position: 'Front-End Developer', description: 'Something to describe about department'},
        {name: 'I.T Software', count: 50, head: 'Admin Admin Admin', position: 'Front-End Developer', description: 'Something to describe about department'},
        {name: 'I.T Software', count: 50, head: 'Admin Admin Admin', position: 'Front-End Developer', description: 'Something to describe about department'},
        {name: 'I.T Software', count: 50, head: 'Admin Admin Admin', position: 'Front-End Developer', description: 'Something to describe about department'},
        {name: 'I.T Software', count: 50, head: 'Admin Admin Admin', position: 'Front-End Developer', description: 'Something to describe about department'},
        {name: 'I.T Software', count: 50, head: 'Admin Admin Admin', position: 'Front-End Developer', description: 'Something to describe about department'},
        {name: 'I.T Software', count: 50, head: 'Admin Admin Admin', position: 'Front-End Developer', description: 'Something to describe about department'},
        {name: 'I.T Software', count: 50, head: 'Admin Admin Admin', position: 'Front-End Developer', description: 'Something to describe about department'},
        {name: 'I.T Software', count: 50, head: 'Admin Admin Admin', position: 'Front-End Developer', description: 'Something to describe about department'},
        {name: 'I.T Software', count: 50, head: 'Admin Admin Admin', position: 'Front-End Developer', description: 'Something to describe about department'},
        {name: 'I.T Software', count: 50, head: 'Admin Admin Admin', position: 'Front-End Developer', description: 'Something to describe about department'},
        {name: 'I.T Software', count: 50, head: 'Admin Admin Admin', position: 'Front-End Developer', description: 'Something to describe about department'},
        {name: 'I.T Software', count: 50, head: 'Admin Admin Admin', position: 'Front-End Developer', description: 'Something to describe about department'},
        {name: 'I.T Software', count: 50, head: 'Admin Admin Admin', position: 'Front-End Developer', description: 'Something to describe about department'},
        {name: 'I.T Software', count: 50, head: 'Admin Admin Admin', position: 'Front-End Developer', description: 'Something to describe about department'},
        {name: 'I.T Software', count: 50, head: 'Admin Admin Admin', position: 'Front-End Developer', description: 'Something to describe about department'},
        {name: 'I.T Software', count: 50, head: 'Admin Admin Admin', position: 'Front-End Developer', description: 'Something to describe about department'},
        {name: 'I.T Software', count: 50, head: 'Admin Admin Admin', position: 'Front-End Developer', description: 'Something to describe about department'},
        {name: 'I.T Software', count: 50, head: 'Admin Admin Admin', position: 'Front-End Developer', description: 'Something to describe about department'},
        {name: 'I.T Software', count: 50, head: 'Admin Admin Admin', position: 'Front-End Developer', description: 'Something to describe about department'},
        {name: 'I.T Software', count: 50, head: 'Admin Admin Admin', position: 'Front-End Developer', description: 'Something to describe about department'},
        {name: 'I.T Software', count: 50, head: 'Admin Admin Admin', position: 'Front-End Developer', description: 'Something to describe about department'},
        {name: 'I.T Software', count: 50, head: 'Admin Admin Admin', position: 'Front-End Developer', description: 'Something to describe about department'},
        {name: 'I.T Software', count: 50, head: 'Admin Admin Admin', position: 'Front-End Developer', description: 'Something to describe about department'},
        {name: 'I.T Software', count: 50, head: 'Admin Admin Admin', position: 'Front-End Developer', description: 'Something to describe about department'},
        {name: 'I.T Software', count: 50, head: 'Admin Admin Admin', position: 'Front-End Developer', description: 'Something to describe about department'},
        {name: 'I.T Software', count: 50, head: 'Admin Admin Admin', position: 'Front-End Developer', description: 'Something to describe about department'},
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
    CreateDepartment() {
      this.$router.push({name: 'CreateDepartment'});
    },
    view() {
      this.$router.push({name: 'ViewDepartment'});
    }
  }
};
</script>