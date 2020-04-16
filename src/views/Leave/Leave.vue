<template>
<div id="leave">
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
                  <h6 class="m-0 font-weight-bold text-primary">Leave</h6>
                </div>
                <div class="col-md-6">
                  <button class="btn b-primary btn-sm m-1 float-right rounded-circle" @click="create()"><i class="fas fa-fw fa-plus text-white"></i></button>
                </div>
              </div>
            </div>
            <div class="card-body">
              <div class="row">
                <div class="col-md-7">
                  <div class="table-responsive">
                    <table class="table table-hover" id="dataTable" width="100%" cellspacing="0">
                      <thead class="">
                        <tr>
                          <th>Leave Code</th>
                          <th>Leave Name</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr v-for="item in items" v-bind:key="item" @click="view(item)">
                          <td class="align-middle">
                            <span><i class="fas fa-fw fa-calendar-minus t-light-gray"></i> {{item.code}}</span>
                          </td>
                          <td>
                            <span class="name p-0 m-0 t-md"><i class="fas fa-fw fa-calendar-minus t-light-gray"></i> {{item.name}}</span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div class="col-md-5 border shadow-sm rounded">
                  <div class="container mt-5" v-if="action == ''">
                    <h5 class="text-center">Leave Configuration Part</h5>
                  </div>
                  <div class="container mt-5" v-if="action == 'Create'">
                    <h5 class="mt-2">Create Leave</h5>
                    <div class="container">
                      <form>
                        <div class="form-s">
                          <label class="label-s t-md my-1">Leave Code</label>
                          <input type="text" class="input-edit-s w-50">
                        </div>
                        <div class="form-s">
                          <label class="label-s t-md my-1">Leave Name</label>
                          <input type="text" class="input-edit-s w-100">
                        </div>
                        <div class="form-s">
                          <label class="label-s t-md my-1">Description</label>
                        <textarea rows="5" class="input-area-s w-100"></textarea>
                        </div>
                        <button class="btn b-success text-white t-md py-1 px-5 float-right mt-2" @click="save()">Save</button>
                      </form>
                    </div>
                  </div>
                  <div class="container mt-5" v-if="action == 'View'">
                    <div class="d-flex flex-row mt-2">
                      <div class="p-0">
                        <h5>View Leave</h5>
                      </div>
                      <div class="p-0 ml-auto">
                        <i class="fas fa-fw fa-edit text-primary" @click="edit()"></i>
                      </div>
                    </div>
                    <div class="container">
                      <div class="form-s">
                        <label class="label-s t-md my-1">Leave Code</label>
                        <input type="text" class="input-view-s w-50 bold" :value="selected.code">
                      </div>
                      <div class="form-s">
                        <label class="label-s t-md my-1">Leave Name</label>
                        <input type="text" class="input-view-s w-100 bold" :value="selected.name">
                      </div>
                      <div class="form-s">
                        <label class="label-s t-md my-1">Description</label>
                        <input type="text" class="input-view-s w-100 bold" :value="selected.description">
                      </div>
                    </div>
                  </div>
                  <div class="container mt-5" v-if="action == 'Edit'">
                    <h5 class="mt-2">Edit Leave</h5>
                    <div class="container">
                      <form>
                        <div class="form-s">
                          <label class="label-s t-md my-1">Leave Code</label>
                          <input type="text" class="input-edit-s w-50" v-model="selected.code">
                        </div>
                        <div class="form-s">
                          <label class="label-s t-md my-1">Leave Name</label>
                          <input type="text" class="input-edit-s w-100" v-model="selected.name">
                        </div>
                        <div class="form-s">
                          <label class="label-s t-md my-1">Description</label>
                        <textarea rows="5" class="input-area-s w-100" v-model="selected.description"></textarea>
                        </div>
                        <button class="btn b-success text-white t-md py-1 px-5 float-right mt-2" @click="update()">Update</button>
                      </form>
                    </div>
                  </div>
                </div>
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
  name: 'Leave',
  data() {
    return {
      action: '',
      selected: {
        code: '',
        name: '',
        description: '',
      },
      items: [
        {code: 'VL', name: 'Vacation Leave', description: 'something aout vacation'},
        {code: 'SL', name: 'Sick Leave', description: 'something aout sick'},
        {code: 'PL', name: 'Paternity Leave', description: 'something aout paternity'},
        {code: 'VL', name: 'Vacation Leave', description: 'something aout leave'},
        {code: 'VL', name: 'Vacation Leave', description: 'something aout leave'},
        {code: 'VL', name: 'Vacation Leave', description: 'something aout leave'},
        {code: 'VL', name: 'Vacation Leave', description: 'something aout leave'},
        {code: 'VL', name: 'Vacation Leave', description: 'something aout leave'},
        {code: 'VL', name: 'Vacation Leave', description: 'something aout leave'},
        {code: 'VL', name: 'Vacation Leave', description: 'something aout leave'},
        {code: 'VL', name: 'Vacation Leave', description: 'something aout leave'},
        {code: 'VL', name: 'Vacation Leave', description: 'something aout leave'},
        {code: 'VL', name: 'Vacation Leave', description: 'something aout leave'},
        {code: 'VL', name: 'Vacation Leave', description: 'something aout leave'},
        {code: 'VL', name: 'Vacation Leave', description: 'something aout leave'},
        {code: 'VL', name: 'Vacation Leave', description: 'something aout leave'},
        {code: 'VL', name: 'Vacation Leave', description: 'something aout leave'},
        {code: 'VL', name: 'Vacation Leave', description: 'something aout leave'},
        {code: 'VL', name: 'Vacation Leave', description: 'something aout leave'},
        {code: 'VL', name: 'Vacation Leave', description: 'something aout leave'},
        {code: 'VL', name: 'Vacation Leave', description: 'something aout leave'},
        {code: 'VL', name: 'Vacation Leave', description: 'something aout leave'},
        {code: 'VL', name: 'Vacation Leave', description: 'something aout leave'},
        {code: 'VL', name: 'Vacation Leave', description: 'something aout leave'},
        {code: 'VL', name: 'Vacation Leave', description: 'something aout leave'},
        {code: 'VL', name: 'Vacation Leave', description: 'something aout leave'},
        {code: 'VL', name: 'Vacation Leave', description: 'something aout leave'},
        {code: 'VL', name: 'Vacation Leave', description: 'something aout leave'},
        {code: 'VL', name: 'Vacation Leave', description: 'something aout leave'},
        {code: 'VL', name: 'Vacation Leave', description: 'something aout leave'},
        {code: 'VL', name: 'Vacation Leave', description: 'something aout leave'},
        {code: 'VL', name: 'Vacation Leave', description: 'something aout leave'},
        {code: 'VL', name: 'Vacation Leave', description: 'something aout leave'},
        {code: 'VL', name: 'Vacation Leave', description: 'something aout leave'},
        {code: 'VL', name: 'Vacation Leave', description: 'something aout leave'},
        {code: 'VL', name: 'Vacation Leave', description: 'something aout leave'},
        {code: 'VL', name: 'Vacation Leave', description: 'something aout leave'},
        {code: 'VL', name: 'Vacation Leave', description: 'something aout leave'},
        {code: 'VL', name: 'Vacation Leave', description: 'something aout leave'},
        {code: 'VL', name: 'Vacation Leave', description: 'something aout leave'},
        {code: 'VL', name: 'Vacation Leave', description: 'something aout leave'},
        {code: 'VL', name: 'Vacation Leave', description: 'something aout leave'},
        {code: 'VL', name: 'Vacation Leave', description: 'something aout leave'},
        {code: 'VL', name: 'Vacation Leave', description: 'something aout leave'},
        {code: 'VL', name: 'Vacation Leave', description: 'something aout leave'},
        {code: 'VL', name: 'Vacation Leave', description: 'something aout leave'},
        {code: 'VL', name: 'Vacation Leave', description: 'something aout leave'},
        {code: 'VL', name: 'Vacation Leave', description: 'something aout leave'},
        {code: 'VL', name: 'Vacation Leave', description: 'something aout leave'},
        {code: 'VL', name: 'Vacation Leave', description: 'something aout leave'},
        {code: 'VL', name: 'Vacation Leave', description: 'something aout leave'},
        {code: 'VL', name: 'Vacation Leave', description: 'something aout leave'},
        {code: 'VL', name: 'Vacation Leave', description: 'something aout leave'},
        {code: 'VL', name: 'Vacation Leave', description: 'something aout leave'},
        {code: 'VL', name: 'Vacation Leave', description: 'something aout leave'},
        {code: 'VL', name: 'Vacation Leave', description: 'something aout leave'},
        {code: 'VL', name: 'Vacation Leave', description: 'something aout leave'},
        {code: 'VL', name: 'Vacation Leave', description: 'something aout leave'},
        {code: 'VL', name: 'Vacation Leave', description: 'something aout leave'},
        {code: 'VL', name: 'Vacation Leave', description: 'something aout leave'},
        {code: 'VL', name: 'Vacation Leave', description: 'something aout leave'},
        {code: 'VL', name: 'Vacation Leave', description: 'something aout leave'},
        {code: 'VL', name: 'Vacation Leave', description: 'something aout leave'},
        {code: 'VL', name: 'Vacation Leave', description: 'something aout leave'},
        {code: 'VL', name: 'Vacation Leave', description: 'something aout leave'},
        {code: 'VL', name: 'Vacation Leave', description: 'something aout leave'},
        {code: 'VL', name: 'Vacation Leave', description: 'something aout leave'},
        {code: 'VL', name: 'Vacation Leave', description: 'something aout leave'},
        {code: 'VL', name: 'Vacation Leave', description: 'something aout leave'},
        {code: 'VL', name: 'Vacation Leave', description: 'something aout leave'},
        {code: 'VL', name: 'Vacation Leave', description: 'something aout leave'},
        {code: 'VL', name: 'Vacation Leave', description: 'something aout leave'},
        {code: 'VL', name: 'Vacation Leave', description: 'something aout leave'},
        {code: 'VL', name: 'Vacation Leave', description: 'something aout leave'},
        {code: 'VL', name: 'Vacation Leave', description: 'something aout leave'},
        {code: 'VL', name: 'Vacation Leave', description: 'something aout leave'},
        {code: 'VL', name: 'Vacation Leave', description: 'something aout leave'},
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
    create() {
      this.action = "Create"
    },
    view(item) {
      this.action = "View"
      this.selected.code = item.code
      this.selected.name = item.name
      this.selected.description = item.description
    },
    edit() {
      this.action = "Edit"
    },
    save(){
      this.action = ""
    },
    update(){
      this.action = ""
    }
  }
};
</script>