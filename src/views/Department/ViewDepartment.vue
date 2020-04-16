<template>
<div id="employee">
<div id="wrapper">
    <SideBar/>
    <div id="content-wrapper" class="d-flex flex-column">
      <div id="content">
        <TopBar/>
        <div class="container-fluid">
          <div class="card shadow-sm mb-4">
            <div class="card-header py-2">
              <span class="m-0 font-weight-bold"><span class="pointer hover text-primary" @click="Department()">Department</span> <span>/</span> <span v-if="isView">View</span><span v-else>Edit</span> </span>
            </div>
          </div>
          <div class="row px-4">
            <div class="col-md-12">
              <div class="card shadow-sm mb-4">
                <div class="card-body p-3" v-if="isView">
                  <div class="d-flex flex-row">
                    <div class="p-0">
                      <h4>View Department</h4>
                    </div>
                    <div class="p-0 ml-auto">
                      <i class="fas fa-fw fa-edit text-primary" @click="Edit()"></i>
                    </div>
                  </div>
                  <div class="row m-0 p-0 mt-4">
                    <div class="col-md-3 pr-1">
                        <label class="label-s t-md mt-2">Department Name</label>
                    </div>
                    <div class="col-md-9 px-1">
                        <input type="text" name="text" class="input-view-s bold w-100" placeholder="I.T Software">
                    </div>
                  </div>
                  <div class="row m-0 p-0 mt-2">
                    <div class="col-md-3 pr-1">
                        <label class="label-s t-md mt-2">Department Lead</label>
                    </div>
                    <div class="col-md-9 px-1">
                        <input type="text" name="text" class="input-view-s bold w-100" placeholder="Admin Admin Admin (0000000)">
                    </div>
                  </div>
                  <div class="row m-0 p-0 mt-2">
                    <div class="col-md-3 pr-1">
                        <label class="label-s t-md mt-2">Description</label>
                    </div>
                    <div class="col-md-9 px-1">
                      <Label class="input-view-s bold w-100">Something to describe about the department. Something to describe about the department. Something to describe about the department.</Label>
                    </div>
                  </div>
                  <div class="row m-0 p-0 mt-2">
                    <div class="col-md-3 pr-1">
                        <label class="label-s t-md mt-2">Created By</label>
                    </div>
                    <div class="col-md-9 px-1">
                        <input type="text" name="text" class="input-view-s bold w-100" placeholder="Admin Admin Admin (0000000)">
                    </div>
                  </div>
                  <div class="row m-0 p-0 mt-2">
                    <div class="col-md-3 pr-1">
                        <label class="label-s t-md mt-2">Created At</label>
                    </div>
                    <div class="col-md-9 px-1">
                        <input type="text" name="text" class="input-view-s bold w-100" placeholder="March 27, 2020">
                    </div>
                  </div>
                </div>
                <div class="card-body p-3" v-else>
                  <div class="d-flex flex-row">
                    <div class="p-0">
                      <h4>Edit Department</h4>
                    </div>
                  </div>
                  <div class="row m-0 p-0 mt-4">
                    <div class="col-md-3 pr-1">
                        <label class="label-s t-md mt-2">Department Name</label>
                    </div>
                    <div class="col-md-9 px-1">
                        <input type="text" name="text" class="input-edit-s w-100" value="I.T Software">
                    </div>
                  </div>
                  <div class="row m-0 p-0 mt-2">
                    <div class="col-md-3 pr-1">
                        <label class="label-s t-md mt-2">Department Lead</label>
                    </div>
                    <div class="col-md-9 px-1">
                      <select class="input-select-s w-100" name="qualification[]">
                        <option value="" disabled>Select Qualification</option>
                        <option value="Sr." selected>Admin Admin Admin (0000000)</option>
                      </select>
                    </div>
                  </div>
                  <div class="row m-0 p-0 mt-2">
                    <div class="col-md-3 pr-1">
                        <label class="label-s t-md mt-2">Description</label>
                    </div>
                    <div class="col-md-9 px-1">
                      <TEXTAREA rows="3" class="input-area-s w-100">Something to describe about the department. Something to describe about the department. Something to describe about the department.</TEXTAREA>
                    </div>
                  </div>
                  <div class="row m-0 p-0 mt-2">
                    <div class="col-md-3 pr-1">
                        <label class="label-s t-md mt-2">Created By</label>
                    </div>
                    <div class="col-md-9 px-1">
                        <input type="text" name="text" class="input-view-s w-100" placeholder="Admin Admin Admin (0000000)">
                    </div>
                  </div>
                  <div class="row m-0 p-0 mt-2">
                    <div class="col-md-3 pr-1">
                        <label class="label-s t-md mt-2">Created At</label>
                    </div>
                    <div class="col-md-9 px-1">
                        <input type="text" name="text" class="input-view-s w-100" placeholder="March 27, 2020">
                    </div>
                  </div>

                  <div class="mt-4">
                    <button class="btn b-success text-white t-md py-1 float-right" @click="Save()">Save</button>
                    <button class="btn b-success text-white t-md py-1 float-right mr-2" @click="Cancel()">Cancel</button>
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
  name: 'ViewDepartment',
  data() {
    return {
      isView: true
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
    Department() {
      this.$router.push({name: 'Department'});
    },
    Edit() {
      this.isView = !this.isView
    },
    Save() {
      this.isView = !this.isView
    },
    Cancel() {
      this.isView = !this.isView
    }
  }
};
</script>