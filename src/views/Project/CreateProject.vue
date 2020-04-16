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
              <span class="m-0 font-weight-bold"><span class="pointer hover text-primary" @click="Project()">Projects</span> <span>/</span> <span>Create</span></span>
            </div>
          </div>
          <div class="row pr-3">
            <div class="col-md-6">
              <div class="card shadow-sm mb-4">
                <div class="card-body p-3">
                  <h4>Create Projec</h4>
                  <div class="row m-0 p-0 mt-5">
                    <div class="col-md-4 pr-1">
                        <label class="label-s t-md my-1">Project Name</label>
                    </div>
                    <div class="col-md-8 px-1">
                        <input type="text" name="text" class="input-edit-s w-100">
                    </div>
                  </div>
                  <div class="row m-0 p-0 mt-2">
                    <div class="col-md-4 pr-1">
                        <label class="label-s t-md my-1">Project Lead</label>
                    </div>
                    <div class="col-md-8 px-1">
                      <select class="input-select-s w-100" name="qualification[]">
                        <option value="" disabled selected>Select Qualification</option>
                        <option value="Sr.">Admin Admin Admin (0000000)</option>
                      </select>
                    </div>
                  </div>
                  <div class="row m-0 p-0 mt-2">
                    <div class="col-md-4 pr-1">
                        <label class="label-s t-md my-1">Description</label>
                    </div>
                    <div class="col-md-8 px-1">
                      <textarea rows="5" name="other_information[]" class="input-area-s w-100"></textarea>
                    </div>
                  </div>

                  <div class="mt-4">
                    <button class="btn b-success text-white t-md py-1 float-right" @click="Create()">Save</button>
                  </div>

                </div>
              </div>
            </div>
            <div class="col-md-6 p-0">
              <div class="card shadow-sm mb-4">
                <div class="card-body">
                  <h5>Additional Information</h5>
                  <div class="row m-0 p-0 mt-5">
                    <div class="col-md-3 pr-1">
                        <label class="label-s t-md my-1">Created by</label>
                    </div>
                    <div class="col-md-9 px-1">
                        <input type="text" name="text" class="input-view-s w-100" placeholder="Admin Admin Admin (00000000)">
                    </div>
                  </div>
                  <div class="row m-0 p-0">
                    <div class="col-md-3 pr-1">
                        <label class="label-s t-md my-1">Created at</label>
                    </div>
                    <div class="col-md-9 px-1">
                        <input type="text" name="text" class="input-view-s w-100" placeholder="Mar 27, 2020">
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
  name: 'Department',
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
    Project() {
      this.$router.push({name: 'Projects'});
    },
    Create() {
      this.$router.push({name: 'Department'});
    }
  }
};
</script>