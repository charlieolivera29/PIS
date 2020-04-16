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
                <div class="col-md-6 my-auto p-1">
                <span class="m-0 font-weight-bold"><span class="pointer hover text-primary" @click="Deductions()">Deductions</span> <span>/</span> <span>Add</span> </span>
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
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="item in items" v-bind:key="item">
                      <td class="align-middle"><span class="t-md">{{item.code}}</span></td>
                      <td class="align-middle"><span class="t-md">{{item.name}}</span></td>
                      <td class="align-middle"><span class="t-md">{{item.type}}</span></td>
                      <td class="align-middle"><span class="t-md">{{item.deduction_type}}</span></td>
                      <td class="align-middle"><span class="t-md">{{item.amount}}</span></td>
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
  name: 'Archived',
  data() {
    return {
      items: [
        {code: 'DT0000', name: 'JG Summit', type: 'Fixed', deduction_type: 'Goverment Deduction', amount: '525.00'},
        {code: 'DT0000', name: 'JG Summit', type: 'Fixed', deduction_type: 'Goverment Deduction', amount: '525.00'},
        {code: 'DT0000', name: 'JG Summit', type: 'Fixed', deduction_type: 'Goverment Deduction', amount: '525.00'},
        {code: 'DT0000', name: 'JG Summit', type: 'Fixed', deduction_type: 'Goverment Deduction', amount: '525.00'},
        {code: 'DT0000', name: 'JG Summit', type: 'Fixed', deduction_type: 'Goverment Deduction', amount: '525.00'},
        {code: 'DT0000', name: 'JG Summit', type: 'Fixed', deduction_type: 'Goverment Deduction', amount: '525.00'},
        {code: 'DT0000', name: 'JG Summit', type: 'Fixed', deduction_type: 'Goverment Deduction', amount: '525.00'},
        {code: 'DT0000', name: 'JG Summit', type: 'Fixed', deduction_type: 'Goverment Deduction', amount: '525.00'},
        {code: 'DT0000', name: 'JG Summit', type: 'Fixed', deduction_type: 'Goverment Deduction', amount: '525.00'},
        {code: 'DT0000', name: 'JG Summit', type: 'Fixed', deduction_type: 'Goverment Deduction', amount: '525.00'},
        {code: 'DT0000', name: 'JG Summit', type: 'Fixed', deduction_type: 'Goverment Deduction', amount: '525.00'},
        {code: 'DT0000', name: 'JG Summit', type: 'Fixed', deduction_type: 'Goverment Deduction', amount: '525.00'},
        {code: 'DT0000', name: 'JG Summit', type: 'Fixed', deduction_type: 'Goverment Deduction', amount: '525.00'},
        {code: 'DT0000', name: 'JG Summit', type: 'Fixed', deduction_type: 'Goverment Deduction', amount: '525.00'},
        {code: 'DT0000', name: 'JG Summit', type: 'Fixed', deduction_type: 'Goverment Deduction', amount: '525.00'},
        {code: 'DT0000', name: 'JG Summit', type: 'Fixed', deduction_type: 'Goverment Deduction', amount: '525.00'},
        {code: 'DT0000', name: 'JG Summit', type: 'Fixed', deduction_type: 'Goverment Deduction', amount: '525.00'},
        {code: 'DT0000', name: 'JG Summit', type: 'Fixed', deduction_type: 'Goverment Deduction', amount: '525.00'},
        {code: 'DT0000', name: 'JG Summit', type: 'Fixed', deduction_type: 'Goverment Deduction', amount: '525.00'},
        {code: 'DT0000', name: 'JG Summit', type: 'Fixed', deduction_type: 'Goverment Deduction', amount: '525.00'},
        {code: 'DT0000', name: 'JG Summit', type: 'Fixed', deduction_type: 'Goverment Deduction', amount: '525.00'},
        {code: 'DT0000', name: 'JG Summit', type: 'Fixed', deduction_type: 'Goverment Deduction', amount: '525.00'},
        {code: 'DT0000', name: 'JG Summit', type: 'Fixed', deduction_type: 'Goverment Deduction', amount: '525.00'},
        {code: 'DT0000', name: 'JG Summit', type: 'Fixed', deduction_type: 'Goverment Deduction', amount: '525.00'},
        {code: 'DT0000', name: 'JG Summit', type: 'Fixed', deduction_type: 'Goverment Deduction', amount: '525.00'},
        {code: 'DT0000', name: 'JG Summit', type: 'Fixed', deduction_type: 'Goverment Deduction', amount: '525.00'},
        {code: 'DT0000', name: 'JG Summit', type: 'Fixed', deduction_type: 'Goverment Deduction', amount: '525.00'},
        {code: 'DT0000', name: 'JG Summit', type: 'Fixed', deduction_type: 'Goverment Deduction', amount: '525.00'},
        {code: 'DT0000', name: 'JG Summit', type: 'Fixed', deduction_type: 'Goverment Deduction', amount: '525.00'},
        {code: 'DT0000', name: 'JG Summit', type: 'Fixed', deduction_type: 'Goverment Deduction', amount: '525.00'},
        {code: 'DT0000', name: 'JG Summit', type: 'Fixed', deduction_type: 'Goverment Deduction', amount: '525.00'},
        {code: 'DT0000', name: 'JG Summit', type: 'Fixed', deduction_type: 'Goverment Deduction', amount: '525.00'},
        {code: 'DT0000', name: 'JG Summit', type: 'Fixed', deduction_type: 'Goverment Deduction', amount: '525.00'},
        {code: 'DT0000', name: 'JG Summit', type: 'Fixed', deduction_type: 'Goverment Deduction', amount: '525.00'},
        {code: 'DT0000', name: 'JG Summit', type: 'Fixed', deduction_type: 'Goverment Deduction', amount: '525.00'},
        {code: 'DT0000', name: 'JG Summit', type: 'Fixed', deduction_type: 'Goverment Deduction', amount: '525.00'},
        {code: 'DT0000', name: 'JG Summit', type: 'Fixed', deduction_type: 'Goverment Deduction', amount: '525.00'},
        {code: 'DT0000', name: 'JG Summit', type: 'Fixed', deduction_type: 'Goverment Deduction', amount: '525.00'},
        {code: 'DT0000', name: 'JG Summit', type: 'Fixed', deduction_type: 'Goverment Deduction', amount: '525.00'},
        {code: 'DT0000', name: 'JG Summit', type: 'Fixed', deduction_type: 'Goverment Deduction', amount: '525.00'},
        {code: 'DT0000', name: 'JG Summit', type: 'Fixed', deduction_type: 'Goverment Deduction', amount: '525.00'},
        {code: 'DT0000', name: 'JG Summit', type: 'Fixed', deduction_type: 'Goverment Deduction', amount: '525.00'},
        {code: 'DT0000', name: 'JG Summit', type: 'Fixed', deduction_type: 'Goverment Deduction', amount: '525.00'},
        {code: 'DT0000', name: 'JG Summit', type: 'Fixed', deduction_type: 'Goverment Deduction', amount: '525.00'},
        {code: 'DT0000', name: 'JG Summit', type: 'Fixed', deduction_type: 'Goverment Deduction', amount: '525.00'},
        {code: 'DT0000', name: 'JG Summit', type: 'Fixed', deduction_type: 'Goverment Deduction', amount: '525.00'},
        {code: 'DT0000', name: 'JG Summit', type: 'Fixed', deduction_type: 'Goverment Deduction', amount: '525.00'},
        {code: 'DT0000', name: 'JG Summit', type: 'Fixed', deduction_type: 'Goverment Deduction', amount: '525.00'},
        {code: 'DT0000', name: 'JG Summit', type: 'Fixed', deduction_type: 'Goverment Deduction', amount: '525.00'},
        {code: 'DT0000', name: 'JG Summit', type: 'Fixed', deduction_type: 'Goverment Deduction', amount: '525.00'},
        {code: 'DT0000', name: 'JG Summit', type: 'Fixed', deduction_type: 'Goverment Deduction', amount: '525.00'},
        {code: 'DT0000', name: 'JG Summit', type: 'Fixed', deduction_type: 'Goverment Deduction', amount: '525.00'},
        {code: 'DT0000', name: 'JG Summit', type: 'Fixed', deduction_type: 'Goverment Deduction', amount: '525.00'},
        {code: 'DT0000', name: 'JG Summit', type: 'Fixed', deduction_type: 'Goverment Deduction', amount: '525.00'},
        {code: 'DT0000', name: 'JG Summit', type: 'Fixed', deduction_type: 'Goverment Deduction', amount: '525.00'},
        {code: 'DT0000', name: 'JG Summit', type: 'Fixed', deduction_type: 'Goverment Deduction', amount: '525.00'},
        {code: 'DT0000', name: 'JG Summit', type: 'Fixed', deduction_type: 'Goverment Deduction', amount: '525.00'},
        {code: 'DT0000', name: 'JG Summit', type: 'Fixed', deduction_type: 'Goverment Deduction', amount: '525.00'},
        {code: 'DT0000', name: 'JG Summit', type: 'Fixed', deduction_type: 'Goverment Deduction', amount: '525.00'},
        {code: 'DT0000', name: 'JG Summit', type: 'Fixed', deduction_type: 'Goverment Deduction', amount: '525.00'},
        {code: 'DT0000', name: 'JG Summit', type: 'Fixed', deduction_type: 'Goverment Deduction', amount: '525.00'},
        {code: 'DT0000', name: 'JG Summit', type: 'Fixed', deduction_type: 'Goverment Deduction', amount: '525.00'},
        {code: 'DT0000', name: 'JG Summit', type: 'Fixed', deduction_type: 'Goverment Deduction', amount: '525.00'},
        {code: 'DT0000', name: 'JG Summit', type: 'Fixed', deduction_type: 'Goverment Deduction', amount: '525.00'},
        {code: 'DT0000', name: 'JG Summit', type: 'Fixed', deduction_type: 'Goverment Deduction', amount: '525.00'},
        {code: 'DT0000', name: 'JG Summit', type: 'Fixed', deduction_type: 'Goverment Deduction', amount: '525.00'},
        {code: 'DT0000', name: 'JG Summit', type: 'Fixed', deduction_type: 'Goverment Deduction', amount: '525.00'},
        {code: 'DT0000', name: 'JG Summit', type: 'Fixed', deduction_type: 'Goverment Deduction', amount: '525.00'},
        {code: 'DT0000', name: 'JG Summit', type: 'Fixed', deduction_type: 'Goverment Deduction', amount: '525.00'},
        {code: 'DT0000', name: 'JG Summit', type: 'Fixed', deduction_type: 'Goverment Deduction', amount: '525.00'},
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
    Deductions() {
      this.$router.push({name: 'Deductions'});
    }
  }
};
</script>