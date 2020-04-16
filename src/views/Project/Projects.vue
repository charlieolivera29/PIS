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
                  <h6 class="m-0 font-weight-bold text-primary">Projects</h6>
                </div>
                <div class="col-md-6">
                  <button class="btn b-primary btn-sm float-right rounded-circle m-1" @click="Create()"><i class="fas fa-fw fa-plus text-white"></i></button>
                </div>
              </div>
            </div>
            <div class="card-body">
              <div class="table-responsive">
                <table class="table table-hover" id="dataTable" width="100%" cellspacing="0">
                  <thead class="">
                    <tr>
                      <th>Project</th>
                      <th>Lead</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="item in items" v-bind:key="item" @click="view()">
                      <td class="align-middle">
                        <span><i class="fas fa-fw fa-suitcase t-light-gray"></i> {{item.name}}</span>
                        <br>
                        <span><i class="fas fa-fw fa-user-tie t-light-gray"></i> {{item.count}}</span>
                      </td>
                      <td>
                        <span class="name p-0 m-0 t-md"><i class="fas fa-fw fa-user t-light-gray"></i> {{item.lead}}</span>
                        <br>
                        <span class="contact p-0 m-0 t-md"><i class="fas fa-fw fa-calendar t-light-gray"></i> {{item.position}}</span>
                      </td>
                      <td class="align-middle"><label class="bg-success text-white py-1 px-3 t-md rounded">{{item.status}}</label></td>
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
  name: 'Projects',
  data() {
    return {
      items: [
        {name: 'JG Summit', count: 50, lead: 'Admin Admin Admin', position: 'Front-End Developer', status: 'Active'},
        {name: 'JG Summit', count: 50, lead: 'Admin Admin Admin', position: 'Front-End Developer', status: 'Active'},
        {name: 'JG Summit', count: 50, lead: 'Admin Admin Admin', position: 'Front-End Developer', status: 'Active'},
        {name: 'JG Summit', count: 50, lead: 'Admin Admin Admin', position: 'Front-End Developer', status: 'Active'},
        {name: 'JG Summit', count: 50, lead: 'Admin Admin Admin', position: 'Front-End Developer', status: 'Active'},
        {name: 'JG Summit', count: 50, lead: 'Admin Admin Admin', position: 'Front-End Developer', status: 'Active'},
        {name: 'JG Summit', count: 50, lead: 'Admin Admin Admin', position: 'Front-End Developer', status: 'Active'},
        {name: 'JG Summit', count: 50, lead: 'Admin Admin Admin', position: 'Front-End Developer', status: 'Active'},
        {name: 'JG Summit', count: 50, lead: 'Admin Admin Admin', position: 'Front-End Developer', status: 'Active'},
        {name: 'JG Summit', count: 50, lead: 'Admin Admin Admin', position: 'Front-End Developer', status: 'Active'},
        {name: 'JG Summit', count: 50, lead: 'Admin Admin Admin', position: 'Front-End Developer', status: 'Active'},
        {name: 'JG Summit', count: 50, lead: 'Admin Admin Admin', position: 'Front-End Developer', status: 'Active'},
        {name: 'JG Summit', count: 50, lead: 'Admin Admin Admin', position: 'Front-End Developer', status: 'Active'},
        {name: 'JG Summit', count: 50, lead: 'Admin Admin Admin', position: 'Front-End Developer', status: 'Active'},
        {name: 'JG Summit', count: 50, lead: 'Admin Admin Admin', position: 'Front-End Developer', status: 'Active'},
        {name: 'JG Summit', count: 50, lead: 'Admin Admin Admin', position: 'Front-End Developer', status: 'Active'},
        {name: 'JG Summit', count: 50, lead: 'Admin Admin Admin', position: 'Front-End Developer', status: 'Active'},
        {name: 'JG Summit', count: 50, lead: 'Admin Admin Admin', position: 'Front-End Developer', status: 'Active'},
        {name: 'JG Summit', count: 50, lead: 'Admin Admin Admin', position: 'Front-End Developer', status: 'Active'},
        {name: 'JG Summit', count: 50, lead: 'Admin Admin Admin', position: 'Front-End Developer', status: 'Active'},
        {name: 'JG Summit', count: 50, lead: 'Admin Admin Admin', position: 'Front-End Developer', status: 'Active'},
        {name: 'JG Summit', count: 50, lead: 'Admin Admin Admin', position: 'Front-End Developer', status: 'Active'},
        {name: 'JG Summit', count: 50, lead: 'Admin Admin Admin', position: 'Front-End Developer', status: 'Active'},
        {name: 'JG Summit', count: 50, lead: 'Admin Admin Admin', position: 'Front-End Developer', status: 'Active'},
        {name: 'JG Summit', count: 50, lead: 'Admin Admin Admin', position: 'Front-End Developer', status: 'Active'},
        {name: 'JG Summit', count: 50, lead: 'Admin Admin Admin', position: 'Front-End Developer', status: 'Active'},
        {name: 'JG Summit', count: 50, lead: 'Admin Admin Admin', position: 'Front-End Developer', status: 'Active'},
        {name: 'JG Summit', count: 50, lead: 'Admin Admin Admin', position: 'Front-End Developer', status: 'Active'},
        {name: 'JG Summit', count: 50, lead: 'Admin Admin Admin', position: 'Front-End Developer', status: 'Active'},
        {name: 'JG Summit', count: 50, lead: 'Admin Admin Admin', position: 'Front-End Developer', status: 'Active'},
        {name: 'JG Summit', count: 50, lead: 'Admin Admin Admin', position: 'Front-End Developer', status: 'Active'},
        {name: 'JG Summit', count: 50, lead: 'Admin Admin Admin', position: 'Front-End Developer', status: 'Active'},
        {name: 'JG Summit', count: 50, lead: 'Admin Admin Admin', position: 'Front-End Developer', status: 'Active'},
        {name: 'JG Summit', count: 50, lead: 'Admin Admin Admin', position: 'Front-End Developer', status: 'Active'},
        {name: 'JG Summit', count: 50, lead: 'Admin Admin Admin', position: 'Front-End Developer', status: 'Active'},
        {name: 'JG Summit', count: 50, lead: 'Admin Admin Admin', position: 'Front-End Developer', status: 'Active'},
        {name: 'JG Summit', count: 50, lead: 'Admin Admin Admin', position: 'Front-End Developer', status: 'Active'},
        {name: 'JG Summit', count: 50, lead: 'Admin Admin Admin', position: 'Front-End Developer', status: 'Active'},
        {name: 'JG Summit', count: 50, lead: 'Admin Admin Admin', position: 'Front-End Developer', status: 'Active'},
        {name: 'JG Summit', count: 50, lead: 'Admin Admin Admin', position: 'Front-End Developer', status: 'Active'},
        {name: 'JG Summit', count: 50, lead: 'Admin Admin Admin', position: 'Front-End Developer', status: 'Active'},
        {name: 'JG Summit', count: 50, lead: 'Admin Admin Admin', position: 'Front-End Developer', status: 'Active'},
        {name: 'JG Summit', count: 50, lead: 'Admin Admin Admin', position: 'Front-End Developer', status: 'Active'},
        {name: 'JG Summit', count: 50, lead: 'Admin Admin Admin', position: 'Front-End Developer', status: 'Active'},
        {name: 'JG Summit', count: 50, lead: 'Admin Admin Admin', position: 'Front-End Developer', status: 'Active'},
        {name: 'JG Summit', count: 50, lead: 'Admin Admin Admin', position: 'Front-End Developer', status: 'Active'},
        {name: 'JG Summit', count: 50, lead: 'Admin Admin Admin', position: 'Front-End Developer', status: 'Active'},
        {name: 'JG Summit', count: 50, lead: 'Admin Admin Admin', position: 'Front-End Developer', status: 'Active'},
        {name: 'JG Summit', count: 50, lead: 'Admin Admin Admin', position: 'Front-End Developer', status: 'Active'},
        {name: 'JG Summit', count: 50, lead: 'Admin Admin Admin', position: 'Front-End Developer', status: 'Active'},
        {name: 'JG Summit', count: 50, lead: 'Admin Admin Admin', position: 'Front-End Developer', status: 'Active'},
        {name: 'JG Summit', count: 50, lead: 'Admin Admin Admin', position: 'Front-End Developer', status: 'Active'},
        {name: 'JG Summit', count: 50, lead: 'Admin Admin Admin', position: 'Front-End Developer', status: 'Active'},
        {name: 'JG Summit', count: 50, lead: 'Admin Admin Admin', position: 'Front-End Developer', status: 'Active'},
        {name: 'JG Summit', count: 50, lead: 'Admin Admin Admin', position: 'Front-End Developer', status: 'Active'},
        {name: 'JG Summit', count: 50, lead: 'Admin Admin Admin', position: 'Front-End Developer', status: 'Active'},
        {name: 'JG Summit', count: 50, lead: 'Admin Admin Admin', position: 'Front-End Developer', status: 'Active'},
        {name: 'JG Summit', count: 50, lead: 'Admin Admin Admin', position: 'Front-End Developer', status: 'Active'},
        {name: 'JG Summit', count: 50, lead: 'Admin Admin Admin', position: 'Front-End Developer', status: 'Active'},
        {name: 'JG Summit', count: 50, lead: 'Admin Admin Admin', position: 'Front-End Developer', status: 'Active'},
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
    Create() {
      this.$router.push({name: 'CreateProject'});
    },
    view() {
      this.$router.push({name: 'ViewProject'});
    }
  }
};
</script>