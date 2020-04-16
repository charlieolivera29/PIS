<template>
<div id="auditrails">
<div id="wrapper">
    <SideBar/>
    <div id="content-wrapper" class="d-flex flex-column">
      <div id="content">
        <TopBar/>
        <div class="container-fluid">
          <div class="card shadow-sm mb-4">
            <div class="card-header py-1">
              <div class="row">
                <div class="col-md-12">
                  <h6 class="m-1 font-weight-bold"><span class="t-primary u-hover" @click="leavecredits()"><i class="fas fa-fw fa-mail-bulk t-primary"></i> Leave Credits</span> <span class="t-dimgray">/</span> <span class="t-dimgray">Auditrails</span></h6>
                </div>
              </div>
            </div>
            <div class="card-body">
              <div class="row">
                <div :class="{'col-md-7': isAdd, 'col-md-12': !isAdd }">
                  <div class="table-responsive">
                    <table class="table" id="dataTable" width="100%" cellspacing="0">
                      <thead class="text-white" style="background-color: #2A3F54">
                        <tr>
                          <th width="14%">Date</th>
                          <th width="14%">Leave Type</th>
                          <th width="22%">Credits Before (Hours)</th>
                          <th width="18%">Change (Hours)</th>
                          <th width="14%">Total (Hours)</th>
                          <th width="22%">Reason</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr v-for="item in items" v-bind:key="item">
                          <td class="align-middle"><span>{{item.date}}</span></td>
                          <td class="align-middle"><span>{{item.type}}</span></td>
                          <td class="align-middle"><span>{{item.before}}</span></td>
                          <td class="align-middle"><span>{{item.added}}</span></td>
                          <td class="align-middle"><span>{{item.total}}</span></td>
                          <td class="align-middle"><span>{{item.reason}}</span></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div class="col-md-5 border shadow-sm rounded" v-if="isAdd">
                  <div class="container my-5">
                    <h5 class="mt-2">Update Leave</h5>
                    <div class="container">
                      <form>
                        <div class="form-s">
                          <label class="label-s t-lg bold my-1">{{selected.name}} ({{selected.id}})</label>
                        </div>
                        <div class="form-s">
                          <label class="label-s t-md my-1">Credits</label>
                          <input type="text" class="input-edit-s w-100" placeholder="e.g 8.00">
                        </div>
                        <div class="form-s">
                          <label class="label-s t-md my-1">Reason</label>
                        <textarea rows="3" class="input-area-s w-100"></textarea>
                        </div>
                        <button class="btn b-success text-white t-md py-1 px-4 ml-1 float-right mt-2 mb-5" @click="save()">Add</button>
                        <button class="btn b-success text-white t-md py-1 px-4 float-right mt-2 mb-5" @click="cancel()">Cancel</button>
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
      isAdd: false,
      selected: {
        id: '',
        name: '',
        credit: '',
      },
      items: [
        {date: 'Mar 31, 2020', type: 'Sick Leave', before: '4.00', added: '4.00', total: '8.00', reason: 'before 4 added 4 and total is 8'},
        {date: 'Mar 30, 2020', type: 'Vacation Leave', before: '5.00', added: '3.00', total: '8.00', reason: 'before 5 added 3 and total is 8'},
        {date: 'Mar 31, 2020', type: 'Sick Leave', before: '4.00', added: '4.00', total: '8.00', reason: 'before 4 added 4 and total is 8'},
        {date: 'Mar 30, 2020', type: 'Vacation Leave', before: '5.00', added: '3.00', total: '8.00', reason: 'before 5 added 3 and total is 8'},
        {date: 'Mar 31, 2020', type: 'Sick Leave', before: '4.00', added: '4.00', total: '8.00', reason: 'before 4 added 4 and total is 8'},
        {date: 'Mar 30, 2020', type: 'Vacation Leave', before: '5.00', added: '3.00', total: '8.00', reason: 'before 5 added 3 and total is 8'},
        {date: 'Mar 31, 2020', type: 'Sick Leave', before: '4.00', added: '4.00', total: '8.00', reason: 'before 4 added 4 and total is 8'},
        {date: 'Mar 30, 2020', type: 'Vacation Leave', before: '5.00', added: '3.00', total: '8.00', reason: 'before 5 added 3 and total is 8'},
        {date: 'Mar 31, 2020', type: 'Sick Leave', before: '4.00', added: '4.00', total: '8.00', reason: 'before 4 added 4 and total is 8'},
        {date: 'Mar 30, 2020', type: 'Vacation Leave', before: '5.00', added: '3.00', total: '8.00', reason: 'before 5 added 3 and total is 8'},
        {date: 'Mar 31, 2020', type: 'Sick Leave', before: '4.00', added: '4.00', total: '8.00', reason: 'before 4 added 4 and total is 8'},
        {date: 'Mar 30, 2020', type: 'Vacation Leave', before: '5.00', added: '3.00', total: '8.00', reason: 'before 5 added 3 and total is 8'},
        {date: 'Mar 31, 2020', type: 'Sick Leave', before: '4.00', added: '4.00', total: '8.00', reason: 'before 4 added 4 and total is 8'},
        {date: 'Mar 30, 2020', type: 'Vacation Leave', before: '5.00', added: '3.00', total: '8.00', reason: 'before 5 added 3 and total is 8'},
        {date: 'Mar 31, 2020', type: 'Sick Leave', before: '4.00', added: '4.00', total: '8.00', reason: 'before 4 added 4 and total is 8'},
        {date: 'Mar 30, 2020', type: 'Vacation Leave', before: '5.00', added: '3.00', total: '8.00', reason: 'before 5 added 3 and total is 8'},
        {date: 'Mar 31, 2020', type: 'Sick Leave', before: '4.00', added: '4.00', total: '8.00', reason: 'before 4 added 4 and total is 8'},
        {date: 'Mar 30, 2020', type: 'Vacation Leave', before: '5.00', added: '3.00', total: '8.00', reason: 'before 5 added 3 and total is 8'},
        {date: 'Mar 31, 2020', type: 'Sick Leave', before: '4.00', added: '4.00', total: '8.00', reason: 'before 4 added 4 and total is 8'},
        {date: 'Mar 30, 2020', type: 'Vacation Leave', before: '5.00', added: '3.00', total: '8.00', reason: 'before 5 added 3 and total is 8'},
        {date: 'Mar 31, 2020', type: 'Sick Leave', before: '4.00', added: '4.00', total: '8.00', reason: 'before 4 added 4 and total is 8'},
        {date: 'Mar 30, 2020', type: 'Vacation Leave', before: '5.00', added: '3.00', total: '8.00', reason: 'before 5 added 3 and total is 8'},
        {date: 'Mar 31, 2020', type: 'Sick Leave', before: '4.00', added: '4.00', total: '8.00', reason: 'before 4 added 4 and total is 8'},
        {date: 'Mar 30, 2020', type: 'Vacation Leave', before: '5.00', added: '3.00', total: '8.00', reason: 'before 5 added 3 and total is 8'},
        {date: 'Mar 31, 2020', type: 'Sick Leave', before: '4.00', added: '4.00', total: '8.00', reason: 'before 4 added 4 and total is 8'},
        {date: 'Mar 30, 2020', type: 'Vacation Leave', before: '5.00', added: '3.00', total: '8.00', reason: 'before 5 added 3 and total is 8'},
        {date: 'Mar 31, 2020', type: 'Sick Leave', before: '4.00', added: '4.00', total: '8.00', reason: 'before 4 added 4 and total is 8'},
        {date: 'Mar 30, 2020', type: 'Vacation Leave', before: '5.00', added: '3.00', total: '8.00', reason: 'before 5 added 3 and total is 8'},
        {date: 'Mar 31, 2020', type: 'Sick Leave', before: '4.00', added: '4.00', total: '8.00', reason: 'before 4 added 4 and total is 8'},
        {date: 'Mar 30, 2020', type: 'Vacation Leave', before: '5.00', added: '3.00', total: '8.00', reason: 'before 5 added 3 and total is 8'},
        {date: 'Mar 31, 2020', type: 'Sick Leave', before: '4.00', added: '4.00', total: '8.00', reason: 'before 4 added 4 and total is 8'},
        {date: 'Mar 30, 2020', type: 'Vacation Leave', before: '5.00', added: '3.00', total: '8.00', reason: 'before 5 added 3 and total is 8'},
        {date: 'Mar 31, 2020', type: 'Sick Leave', before: '4.00', added: '4.00', total: '8.00', reason: 'before 4 added 4 and total is 8'},
        {date: 'Mar 30, 2020', type: 'Vacation Leave', before: '5.00', added: '3.00', total: '8.00', reason: 'before 5 added 3 and total is 8'},
        {date: 'Mar 31, 2020', type: 'Sick Leave', before: '4.00', added: '4.00', total: '8.00', reason: 'before 4 added 4 and total is 8'},
        {date: 'Mar 30, 2020', type: 'Vacation Leave', before: '5.00', added: '3.00', total: '8.00', reason: 'before 5 added 3 and total is 8'},
        {date: 'Mar 31, 2020', type: 'Sick Leave', before: '4.00', added: '4.00', total: '8.00', reason: 'before 4 added 4 and total is 8'},
        {date: 'Mar 30, 2020', type: 'Vacation Leave', before: '5.00', added: '3.00', total: '8.00', reason: 'before 5 added 3 and total is 8'},
        {date: 'Mar 31, 2020', type: 'Sick Leave', before: '4.00', added: '4.00', total: '8.00', reason: 'before 4 added 4 and total is 8'},
        {date: 'Mar 30, 2020', type: 'Vacation Leave', before: '5.00', added: '3.00', total: '8.00', reason: 'before 5 added 3 and total is 8'},
        {date: 'Mar 31, 2020', type: 'Sick Leave', before: '4.00', added: '4.00', total: '8.00', reason: 'before 4 added 4 and total is 8'},
        {date: 'Mar 30, 2020', type: 'Vacation Leave', before: '5.00', added: '3.00', total: '8.00', reason: 'before 5 added 3 and total is 8'},
        {date: 'Mar 31, 2020', type: 'Sick Leave', before: '4.00', added: '4.00', total: '8.00', reason: 'before 4 added 4 and total is 8'},
        {date: 'Mar 30, 2020', type: 'Vacation Leave', before: '5.00', added: '3.00', total: '8.00', reason: 'before 5 added 3 and total is 8'},
        {date: 'Mar 31, 2020', type: 'Sick Leave', before: '4.00', added: '4.00', total: '8.00', reason: 'before 4 added 4 and total is 8'},
        {date: 'Mar 30, 2020', type: 'Vacation Leave', before: '5.00', added: '3.00', total: '8.00', reason: 'before 5 added 3 and total is 8'},
        {date: 'Mar 31, 2020', type: 'Sick Leave', before: '4.00', added: '4.00', total: '8.00', reason: 'before 4 added 4 and total is 8'},
        {date: 'Mar 30, 2020', type: 'Vacation Leave', before: '5.00', added: '3.00', total: '8.00', reason: 'before 5 added 3 and total is 8'},
        {date: 'Mar 31, 2020', type: 'Sick Leave', before: '4.00', added: '4.00', total: '8.00', reason: 'before 4 added 4 and total is 8'},
        {date: 'Mar 30, 2020', type: 'Vacation Leave', before: '5.00', added: '3.00', total: '8.00', reason: 'before 5 added 3 and total is 8'},
        {date: 'Mar 31, 2020', type: 'Sick Leave', before: '4.00', added: '4.00', total: '8.00', reason: 'before 4 added 4 and total is 8'},
        {date: 'Mar 30, 2020', type: 'Vacation Leave', before: '5.00', added: '3.00', total: '8.00', reason: 'before 5 added 3 and total is 8'},
        {date: 'Mar 31, 2020', type: 'Sick Leave', before: '4.00', added: '4.00', total: '8.00', reason: 'before 4 added 4 and total is 8'},
        {date: 'Mar 30, 2020', type: 'Vacation Leave', before: '5.00', added: '3.00', total: '8.00', reason: 'before 5 added 3 and total is 8'},
        {date: 'Mar 31, 2020', type: 'Sick Leave', before: '4.00', added: '4.00', total: '8.00', reason: 'before 4 added 4 and total is 8'},
        {date: 'Mar 30, 2020', type: 'Vacation Leave', before: '5.00', added: '3.00', total: '8.00', reason: 'before 5 added 3 and total is 8'},
        {date: 'Mar 31, 2020', type: 'Sick Leave', before: '4.00', added: '4.00', total: '8.00', reason: 'before 4 added 4 and total is 8'},
        {date: 'Mar 30, 2020', type: 'Vacation Leave', before: '5.00', added: '3.00', total: '8.00', reason: 'before 5 added 3 and total is 8'},
        {date: 'Mar 31, 2020', type: 'Sick Leave', before: '4.00', added: '4.00', total: '8.00', reason: 'before 4 added 4 and total is 8'},
        {date: 'Mar 30, 2020', type: 'Vacation Leave', before: '5.00', added: '3.00', total: '8.00', reason: 'before 5 added 3 and total is 8'},
        {date: 'Mar 31, 2020', type: 'Sick Leave', before: '4.00', added: '4.00', total: '8.00', reason: 'before 4 added 4 and total is 8'},
        {date: 'Mar 30, 2020', type: 'Vacation Leave', before: '5.00', added: '3.00', total: '8.00', reason: 'before 5 added 3 and total is 8'},
        {date: 'Mar 31, 2020', type: 'Sick Leave', before: '4.00', added: '4.00', total: '8.00', reason: 'before 4 added 4 and total is 8'},
        {date: 'Mar 30, 2020', type: 'Vacation Leave', before: '5.00', added: '3.00', total: '8.00', reason: 'before 5 added 3 and total is 8'},
        {date: 'Mar 31, 2020', type: 'Sick Leave', before: '4.00', added: '4.00', total: '8.00', reason: 'before 4 added 4 and total is 8'},
        {date: 'Mar 30, 2020', type: 'Vacation Leave', before: '5.00', added: '3.00', total: '8.00', reason: 'before 5 added 3 and total is 8'},
        {date: 'Mar 31, 2020', type: 'Sick Leave', before: '4.00', added: '4.00', total: '8.00', reason: 'before 4 added 4 and total is 8'},
        {date: 'Mar 30, 2020', type: 'Vacation Leave', before: '5.00', added: '3.00', total: '8.00', reason: 'before 5 added 3 and total is 8'},
        {date: 'Mar 31, 2020', type: 'Sick Leave', before: '4.00', added: '4.00', total: '8.00', reason: 'before 4 added 4 and total is 8'},
        {date: 'Mar 30, 2020', type: 'Vacation Leave', before: '5.00', added: '3.00', total: '8.00', reason: 'before 5 added 3 and total is 8'},
        {date: 'Mar 31, 2020', type: 'Sick Leave', before: '4.00', added: '4.00', total: '8.00', reason: 'before 4 added 4 and total is 8'},
        {date: 'Mar 30, 2020', type: 'Vacation Leave', before: '5.00', added: '3.00', total: '8.00', reason: 'before 5 added 3 and total is 8'},
        {date: 'Mar 31, 2020', type: 'Sick Leave', before: '4.00', added: '4.00', total: '8.00', reason: 'before 4 added 4 and total is 8'},
        {date: 'Mar 30, 2020', type: 'Vacation Leave', before: '5.00', added: '3.00', total: '8.00', reason: 'before 5 added 3 and total is 8'},
        {date: 'Mar 31, 2020', type: 'Sick Leave', before: '4.00', added: '4.00', total: '8.00', reason: 'before 4 added 4 and total is 8'},
        {date: 'Mar 30, 2020', type: 'Vacation Leave', before: '5.00', added: '3.00', total: '8.00', reason: 'before 5 added 3 and total is 8'},
        {date: 'Mar 31, 2020', type: 'Sick Leave', before: '4.00', added: '4.00', total: '8.00', reason: 'before 4 added 4 and total is 8'},
        {date: 'Mar 30, 2020', type: 'Vacation Leave', before: '5.00', added: '3.00', total: '8.00', reason: 'before 5 added 3 and total is 8'},
        {date: 'Mar 31, 2020', type: 'Sick Leave', before: '4.00', added: '4.00', total: '8.00', reason: 'before 4 added 4 and total is 8'},
        {date: 'Mar 30, 2020', type: 'Vacation Leave', before: '5.00', added: '3.00', total: '8.00', reason: 'before 5 added 3 and total is 8'},
        {date: 'Mar 31, 2020', type: 'Sick Leave', before: '4.00', added: '4.00', total: '8.00', reason: 'before 4 added 4 and total is 8'},
        {date: 'Mar 30, 2020', type: 'Vacation Leave', before: '5.00', added: '3.00', total: '8.00', reason: 'before 5 added 3 and total is 8'},
        {date: 'Mar 31, 2020', type: 'Sick Leave', before: '4.00', added: '4.00', total: '8.00', reason: 'before 4 added 4 and total is 8'},
        {date: 'Mar 30, 2020', type: 'Vacation Leave', before: '5.00', added: '3.00', total: '8.00', reason: 'before 5 added 3 and total is 8'},
        {date: 'Mar 31, 2020', type: 'Sick Leave', before: '4.00', added: '4.00', total: '8.00', reason: 'before 4 added 4 and total is 8'},
        {date: 'Mar 30, 2020', type: 'Vacation Leave', before: '5.00', added: '3.00', total: '8.00', reason: 'before 5 added 3 and total is 8'},
        {date: 'Mar 31, 2020', type: 'Sick Leave', before: '4.00', added: '4.00', total: '8.00', reason: 'before 4 added 4 and total is 8'},
        {date: 'Mar 30, 2020', type: 'Vacation Leave', before: '5.00', added: '3.00', total: '8.00', reason: 'before 5 added 3 and total is 8'},
        {date: 'Mar 31, 2020', type: 'Sick Leave', before: '4.00', added: '4.00', total: '8.00', reason: 'before 4 added 4 and total is 8'},
        {date: 'Mar 30, 2020', type: 'Vacation Leave', before: '5.00', added: '3.00', total: '8.00', reason: 'before 5 added 3 and total is 8'},
        {date: 'Mar 31, 2020', type: 'Sick Leave', before: '4.00', added: '4.00', total: '8.00', reason: 'before 4 added 4 and total is 8'},
        {date: 'Mar 30, 2020', type: 'Vacation Leave', before: '5.00', added: '3.00', total: '8.00', reason: 'before 5 added 3 and total is 8'},
        {date: 'Mar 31, 2020', type: 'Sick Leave', before: '4.00', added: '4.00', total: '8.00', reason: 'before 4 added 4 and total is 8'},
        {date: 'Mar 30, 2020', type: 'Vacation Leave', before: '5.00', added: '3.00', total: '8.00', reason: 'before 5 added 3 and total is 8'},
        {date: 'Mar 31, 2020', type: 'Sick Leave', before: '4.00', added: '4.00', total: '8.00', reason: 'before 4 added 4 and total is 8'},
        {date: 'Mar 30, 2020', type: 'Vacation Leave', before: '5.00', added: '3.00', total: '8.00', reason: 'before 5 added 3 and total is 8'},
        {date: 'Mar 31, 2020', type: 'Sick Leave', before: '4.00', added: '4.00', total: '8.00', reason: 'before 4 added 4 and total is 8'},
        {date: 'Mar 30, 2020', type: 'Vacation Leave', before: '5.00', added: '3.00', total: '8.00', reason: 'before 5 added 3 and total is 8'},
        {date: 'Mar 31, 2020', type: 'Sick Leave', before: '4.00', added: '4.00', total: '8.00', reason: 'before 4 added 4 and total is 8'},
        {date: 'Mar 30, 2020', type: 'Vacation Leave', before: '5.00', added: '3.00', total: '8.00', reason: 'before 5 added 3 and total is 8'},
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
    leavecredits(){
      this.$router.push({name: 'LeaveCredits'})
    },
    add(item) {
      this.isAdd = true
      this.selected.id = item.id
      this.selected.name = item.name
      this.selected.credit = item.credit
    },
    history() {
      this.action = "View"
    },
    save(){
      this.isAdd = false
    },
    cancel(){
      this.isAdd = false
    }
  }
};
</script>