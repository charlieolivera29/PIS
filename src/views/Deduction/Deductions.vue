<template>
<div id="deductions">
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
                  <h6 class="m-0 font-weight-bold t-dimgray">Deductions</h6>
                </div>
                <div class="col-md-6">
                  <button class="btn btn-success btn-sm float-right rounded m-1" @click="Create()"><i class="fas fa-fw fa-plus text-white"></i></button>
                  <button class="btn btn-success btn-sm float-right rounded m-1" @click="Archive()">Archived <i class="fas fa-fw fa-archive text-white"></i></button>
                </div>
              </div>
            </div>
            <div class="card-body">
              <div class="table-responsive">
                <table class="table table-hover" id="dataTable" width="100%" cellspacing="0">
                  <thead class="">
                    <tr>
                      <th>Code</th>
                      <th>Name</th> 
                      <th>Type</th>
                      <th>Deduction Type</th>
                      <th>Amount</th>
                      <th>Payperiod</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="item in items" v-bind:key="item">
                      <td class="align-middle"><span class="t-md">{{item.code}}</span></td>
                      <td class="align-middle"><span class="t-md">{{item.name}}</span></td>
                      <td class="align-middle"><span class="t-md">{{item.type}}</span></td>
                      <td class="align-middle"><span class="t-md">{{item.deduction_type}}</span></td>
                      <td class="align-middle"><span class="t-md">{{item.amount}}</span></td>
                      <td class="align-middle"><span class="t-md">{{item.payperiod}}</span></td>
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
  name: 'Deductions',
  data() {
    return {
      items: [
        {code: 'DT0000', name: 'JG Summit', type: 'Fixed', deduction_type: 'Goverment Deduction', amount: '525.00', payperiod: 'First Cutoff'},
        {code: 'DT0000', name: 'JG Summit', type: 'Fixed', deduction_type: 'Goverment Deduction', amount: '525.00', payperiod: 'First Cutoff'},
        {code: 'DT0000', name: 'JG Summit', type: 'Fixed', deduction_type: 'Goverment Deduction', amount: '525.00', payperiod: 'First Cutoff'},
        {code: 'DT0000', name: 'JG Summit', type: 'Fixed', deduction_type: 'Goverment Deduction', amount: '525.00', payperiod: 'First Cutoff'},
        {code: 'DT0000', name: 'JG Summit', type: 'Fixed', deduction_type: 'Goverment Deduction', amount: '525.00', payperiod: 'First Cutoff'},
        {code: 'DT0000', name: 'JG Summit', type: 'Fixed', deduction_type: 'Goverment Deduction', amount: '525.00', payperiod: 'First Cutoff'},
        {code: 'DT0000', name: 'JG Summit', type: 'Fixed', deduction_type: 'Goverment Deduction', amount: '525.00', payperiod: 'First Cutoff'},
        {code: 'DT0000', name: 'JG Summit', type: 'Fixed', deduction_type: 'Goverment Deduction', amount: '525.00', payperiod: 'First Cutoff'},
        {code: 'DT0000', name: 'JG Summit', type: 'Fixed', deduction_type: 'Goverment Deduction', amount: '525.00', payperiod: 'First Cutoff'},
        {code: 'DT0000', name: 'JG Summit', type: 'Fixed', deduction_type: 'Goverment Deduction', amount: '525.00', payperiod: 'First Cutoff'},
        {code: 'DT0000', name: 'JG Summit', type: 'Fixed', deduction_type: 'Goverment Deduction', amount: '525.00', payperiod: 'First Cutoff'},
        {code: 'DT0000', name: 'JG Summit', type: 'Fixed', deduction_type: 'Goverment Deduction', amount: '525.00', payperiod: 'First Cutoff'},
        {code: 'DT0000', name: 'JG Summit', type: 'Fixed', deduction_type: 'Goverment Deduction', amount: '525.00', payperiod: 'First Cutoff'},
        {code: 'DT0000', name: 'JG Summit', type: 'Fixed', deduction_type: 'Goverment Deduction', amount: '525.00', payperiod: 'First Cutoff'},
        {code: 'DT0000', name: 'JG Summit', type: 'Fixed', deduction_type: 'Goverment Deduction', amount: '525.00', payperiod: 'First Cutoff'},
        {code: 'DT0000', name: 'JG Summit', type: 'Fixed', deduction_type: 'Goverment Deduction', amount: '525.00', payperiod: 'First Cutoff'},
        {code: 'DT0000', name: 'JG Summit', type: 'Fixed', deduction_type: 'Goverment Deduction', amount: '525.00', payperiod: 'First Cutoff'},
        {code: 'DT0000', name: 'JG Summit', type: 'Fixed', deduction_type: 'Goverment Deduction', amount: '525.00', payperiod: 'First Cutoff'},
        {code: 'DT0000', name: 'JG Summit', type: 'Fixed', deduction_type: 'Goverment Deduction', amount: '525.00', payperiod: 'First Cutoff'},
        {code: 'DT0000', name: 'JG Summit', type: 'Fixed', deduction_type: 'Goverment Deduction', amount: '525.00', payperiod: 'First Cutoff'},
        {code: 'DT0000', name: 'JG Summit', type: 'Fixed', deduction_type: 'Goverment Deduction', amount: '525.00', payperiod: 'First Cutoff'},
        {code: 'DT0000', name: 'JG Summit', type: 'Fixed', deduction_type: 'Goverment Deduction', amount: '525.00', payperiod: 'First Cutoff'},
        {code: 'DT0000', name: 'JG Summit', type: 'Fixed', deduction_type: 'Goverment Deduction', amount: '525.00', payperiod: 'First Cutoff'},
        {code: 'DT0000', name: 'JG Summit', type: 'Fixed', deduction_type: 'Goverment Deduction', amount: '525.00', payperiod: 'First Cutoff'},
        {code: 'DT0000', name: 'JG Summit', type: 'Fixed', deduction_type: 'Goverment Deduction', amount: '525.00', payperiod: 'First Cutoff'},
        {code: 'DT0000', name: 'JG Summit', type: 'Fixed', deduction_type: 'Goverment Deduction', amount: '525.00', payperiod: 'First Cutoff'},
        {code: 'DT0000', name: 'JG Summit', type: 'Fixed', deduction_type: 'Goverment Deduction', amount: '525.00', payperiod: 'First Cutoff'},
        {code: 'DT0000', name: 'JG Summit', type: 'Fixed', deduction_type: 'Goverment Deduction', amount: '525.00', payperiod: 'First Cutoff'},
        {code: 'DT0000', name: 'JG Summit', type: 'Fixed', deduction_type: 'Goverment Deduction', amount: '525.00', payperiod: 'First Cutoff'},
        {code: 'DT0000', name: 'JG Summit', type: 'Fixed', deduction_type: 'Goverment Deduction', amount: '525.00', payperiod: 'First Cutoff'},
        {code: 'DT0000', name: 'JG Summit', type: 'Fixed', deduction_type: 'Goverment Deduction', amount: '525.00', payperiod: 'First Cutoff'},
        {code: 'DT0000', name: 'JG Summit', type: 'Fixed', deduction_type: 'Goverment Deduction', amount: '525.00', payperiod: 'First Cutoff'},
        {code: 'DT0000', name: 'JG Summit', type: 'Fixed', deduction_type: 'Goverment Deduction', amount: '525.00', payperiod: 'First Cutoff'},
        {code: 'DT0000', name: 'JG Summit', type: 'Fixed', deduction_type: 'Goverment Deduction', amount: '525.00', payperiod: 'First Cutoff'},
        {code: 'DT0000', name: 'JG Summit', type: 'Fixed', deduction_type: 'Goverment Deduction', amount: '525.00', payperiod: 'First Cutoff'},
        {code: 'DT0000', name: 'JG Summit', type: 'Fixed', deduction_type: 'Goverment Deduction', amount: '525.00', payperiod: 'First Cutoff'},
        {code: 'DT0000', name: 'JG Summit', type: 'Fixed', deduction_type: 'Goverment Deduction', amount: '525.00', payperiod: 'First Cutoff'},
        {code: 'DT0000', name: 'JG Summit', type: 'Fixed', deduction_type: 'Goverment Deduction', amount: '525.00', payperiod: 'First Cutoff'},
        {code: 'DT0000', name: 'JG Summit', type: 'Fixed', deduction_type: 'Goverment Deduction', amount: '525.00', payperiod: 'First Cutoff'},
        {code: 'DT0000', name: 'JG Summit', type: 'Fixed', deduction_type: 'Goverment Deduction', amount: '525.00', payperiod: 'First Cutoff'},
        {code: 'DT0000', name: 'JG Summit', type: 'Fixed', deduction_type: 'Goverment Deduction', amount: '525.00', payperiod: 'First Cutoff'},
        {code: 'DT0000', name: 'JG Summit', type: 'Fixed', deduction_type: 'Goverment Deduction', amount: '525.00', payperiod: 'First Cutoff'},
        {code: 'DT0000', name: 'JG Summit', type: 'Fixed', deduction_type: 'Goverment Deduction', amount: '525.00', payperiod: 'First Cutoff'},
        {code: 'DT0000', name: 'JG Summit', type: 'Fixed', deduction_type: 'Goverment Deduction', amount: '525.00', payperiod: 'First Cutoff'},
        {code: 'DT0000', name: 'JG Summit', type: 'Fixed', deduction_type: 'Goverment Deduction', amount: '525.00', payperiod: 'First Cutoff'},
        {code: 'DT0000', name: 'JG Summit', type: 'Fixed', deduction_type: 'Goverment Deduction', amount: '525.00', payperiod: 'First Cutoff'},
        {code: 'DT0000', name: 'JG Summit', type: 'Fixed', deduction_type: 'Goverment Deduction', amount: '525.00', payperiod: 'First Cutoff'},
        {code: 'DT0000', name: 'JG Summit', type: 'Fixed', deduction_type: 'Goverment Deduction', amount: '525.00', payperiod: 'First Cutoff'},
        {code: 'DT0000', name: 'JG Summit', type: 'Fixed', deduction_type: 'Goverment Deduction', amount: '525.00', payperiod: 'First Cutoff'},
        {code: 'DT0000', name: 'JG Summit', type: 'Fixed', deduction_type: 'Goverment Deduction', amount: '525.00', payperiod: 'First Cutoff'},
        {code: 'DT0000', name: 'JG Summit', type: 'Fixed', deduction_type: 'Goverment Deduction', amount: '525.00', payperiod: 'First Cutoff'},
        {code: 'DT0000', name: 'JG Summit', type: 'Fixed', deduction_type: 'Goverment Deduction', amount: '525.00', payperiod: 'First Cutoff'},
        {code: 'DT0000', name: 'JG Summit', type: 'Fixed', deduction_type: 'Goverment Deduction', amount: '525.00', payperiod: 'First Cutoff'},
        {code: 'DT0000', name: 'JG Summit', type: 'Fixed', deduction_type: 'Goverment Deduction', amount: '525.00', payperiod: 'First Cutoff'},
        {code: 'DT0000', name: 'JG Summit', type: 'Fixed', deduction_type: 'Goverment Deduction', amount: '525.00', payperiod: 'First Cutoff'},
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
      this.$router.push({name: 'AddDeduction'});
    },
    Archive(){
      this.$router.push({name: 'Archived'});
    }
  }
};
</script>