<template>
<div id="adddeduction">
<div id="wrapper">
    <SideBar/>
    <div id="content-wrapper" class="d-flex flex-column">
      <div id="content">
        <TopBar/>
        <div class="container-fluid">
          <div class="card shadow-sm mb-4">
            <div class="card-header py-2">
              <span class="m-0 font-weight-bold"><span class="pointer hover text-primary" @click="Deductions()">Deductions</span> <span>/</span> <span>Add</span> </span>
            </div>
          </div>
          <div class="row px-4">
            <div class="col-md-12">
              <div class="card shadow-sm mb-4">
                <div class="card-body p-3">
                  <div class="d-flex flex-row">
                    <div class="p-0">
                      <h4>Add Deduction</h4>
                    </div>
                  </div>
                  <div class="row m-0 p-0 mt-4">
                    <div class="col-md-3 pr-1">
                        <label class="label-s t-md mt-2">Code</label>
                    </div>
                    <div class="col-md-9 px-1">
                        <input type="text" name="text" class="input-edit-s w-50">
                    </div>
                  </div>
                  <div class="row m-0 p-0 mt-2">
                    <div class="col-md-3 pr-1">
                        <label class="label-s t-md mt-2">Name</label>
                    </div>
                    <div class="col-md-9 px-1">
                        <input type="text" name="text" class="input-edit-s w-50">
                    </div>
                  </div>
                  <div class="row m-0 p-0 mt-2">
                    <div class="col-md-3 pr-1">
                        <label class="label-s t-md mt-2">Type</label>
                    </div>
                    <div class="col-md-9 px-1">
                      <select class="input-select-s w-100" name="qualification[]">
                        <option value="" selected disabled>Select Type</option>
                        <option>Fixed</option>
                        <option>Fixed</option>
                      </select>
                    </div>
                  </div>
                  <div class="row m-0 p-0 mt-2">
                    <div class="col-md-3 pr-1">
                        <label class="label-s t-md mt-2">Deduction Type</label>
                    </div>
                    <div class="col-md-9 px-1">
                      <select class="input-select-s w-100" name="qualification[]">
                        <option value="" selected disabled>Select Deduction Type</option>
                        <option >Fixed</option>
                        <option>Fixed</option>
                      </select>
                    </div>
                  </div>
                  <div class="row m-0 p-0 mt-2">
                    <div class="col-md-3 pr-1">
                        <label class="label-s t-md mt-2">Payperiod</label>
                    </div>
                    <div class="col-md-9 px-1">
                      <select class="input-select-s w-100" name="qualification[]">
                        <option value="" selected disabled>Select Payperiod</option>
                        <option >Fixed</option>
                        <option>Fixed</option>
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
  name: 'AddDeduction',
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
    Deductions() {
      this.$router.push({name: 'Deductions'});
    },
    Save() {
      this.$router.push({name: 'Deductions'});
    },
    Cancel() {
      this.$router.push({name: 'Deductions'});
    }
  }
};
</script>