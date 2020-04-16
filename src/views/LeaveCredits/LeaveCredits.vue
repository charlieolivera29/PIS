<template>
<div id="leavecredits">
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
                  <h6 class="m-1 font-weight-bold text-dimgray"><i class="fas fa-fw fa-mail-bulk t-dimgray"></i> Leave Credits</h6>
                </div>
              </div>
            </div>
            <div class="card-body">
              <div class="row">
                <div :class="{'col-md-7': isAdd, 'col-md-12': !isAdd }">
                  <div class="table-responsive">
                    <table class="table" id="dataTable" width="100%" cellspacing="0">
                      <thead class="">
                        <tr>
                          <th>ID</th>
                          <th>Name</th>
                          <th>Credits</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr v-for="item in items" v-bind:key="item">
                          <td class="align-middle">
                            <span>{{item.id}}</span>
                          </td>
                          <td>
                            <span class="name p-0 m-0 t-md u-hover" @click="auditrails()"><i class="fas fa-fw fa-tachometer-alt t-dimgray"></i> {{item.name}}</span>
                          </td>
                          <td>
                            <span class="name p-0 m-0 t-md">{{item.credit}}</span> <button class="btn btn-sm btn-success" @click="add(item)"><i class="fas fa-fw fa-plus text-white"></i></button>
                          </td>
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
        {id: 'EP0000', name: 'Admin Admin Admin', credit: '8.00'},
        {id: 'EP0001', name: 'Admin Admin', credit: '4.00'},
        {id: 'EP0002', name: 'Admin', credit: '2.00'},
        {id: 'EP0000', name: 'Admin Admin Admin', credit: '8.00'},
        {id: 'EP0001', name: 'Admin Admin', credit: '4.00'},
        {id: 'EP0002', name: 'Admin', credit: '2.00'},
        {id: 'EP0000', name: 'Admin Admin Admin', credit: '8.00'},
        {id: 'EP0001', name: 'Admin Admin', credit: '4.00'},
        {id: 'EP0002', name: 'Admin', credit: '2.00'},
        {id: 'EP0000', name: 'Admin Admin Admin', credit: '8.00'},
        {id: 'EP0001', name: 'Admin Admin', credit: '4.00'},
        {id: 'EP0002', name: 'Admin', credit: '2.00'},
        {id: 'EP0000', name: 'Admin Admin Admin', credit: '8.00'},
        {id: 'EP0001', name: 'Admin Admin', credit: '4.00'},
        {id: 'EP0002', name: 'Admin', credit: '2.00'},
        {id: 'EP0000', name: 'Admin Admin Admin', credit: '8.00'},
        {id: 'EP0001', name: 'Admin Admin', credit: '4.00'},
        {id: 'EP0002', name: 'Admin', credit: '2.00'},
        {id: 'EP0000', name: 'Admin Admin Admin', credit: '8.00'},
        {id: 'EP0001', name: 'Admin Admin', credit: '4.00'},
        {id: 'EP0002', name: 'Admin', credit: '2.00'},
        {id: 'EP0000', name: 'Admin Admin Admin', credit: '8.00'},
        {id: 'EP0001', name: 'Admin Admin', credit: '4.00'},
        {id: 'EP0002', name: 'Admin', credit: '2.00'},
        {id: 'EP0000', name: 'Admin Admin Admin', credit: '8.00'},
        {id: 'EP0001', name: 'Admin Admin', credit: '4.00'},
        {id: 'EP0002', name: 'Admin', credit: '2.00'},
        {id: 'EP0000', name: 'Admin Admin Admin', credit: '8.00'},
        {id: 'EP0001', name: 'Admin Admin', credit: '4.00'},
        {id: 'EP0002', name: 'Admin', credit: '2.00'},
        {id: 'EP0000', name: 'Admin Admin Admin', credit: '8.00'},
        {id: 'EP0001', name: 'Admin Admin', credit: '4.00'},
        {id: 'EP0002', name: 'Admin', credit: '2.00'},
        {id: 'EP0000', name: 'Admin Admin Admin', credit: '8.00'},
        {id: 'EP0001', name: 'Admin Admin', credit: '4.00'},
        {id: 'EP0002', name: 'Admin', credit: '2.00'},
        {id: 'EP0000', name: 'Admin Admin Admin', credit: '8.00'},
        {id: 'EP0001', name: 'Admin Admin', credit: '4.00'},
        {id: 'EP0002', name: 'Admin', credit: '2.00'},
        {id: 'EP0000', name: 'Admin Admin Admin', credit: '8.00'},
        {id: 'EP0001', name: 'Admin Admin', credit: '4.00'},
        {id: 'EP0002', name: 'Admin', credit: '2.00'},
        {id: 'EP0000', name: 'Admin Admin Admin', credit: '8.00'},
        {id: 'EP0001', name: 'Admin Admin', credit: '4.00'},
        {id: 'EP0002', name: 'Admin', credit: '2.00'},
        {id: 'EP0000', name: 'Admin Admin Admin', credit: '8.00'},
        {id: 'EP0001', name: 'Admin Admin', credit: '4.00'},
        {id: 'EP0002', name: 'Admin', credit: '2.00'},
        {id: 'EP0000', name: 'Admin Admin Admin', credit: '8.00'},
        {id: 'EP0001', name: 'Admin Admin', credit: '4.00'},
        {id: 'EP0002', name: 'Admin', credit: '2.00'},
        {id: 'EP0000', name: 'Admin Admin Admin', credit: '8.00'},
        {id: 'EP0001', name: 'Admin Admin', credit: '4.00'},
        {id: 'EP0002', name: 'Admin', credit: '2.00'},
        {id: 'EP0000', name: 'Admin Admin Admin', credit: '8.00'},
        {id: 'EP0001', name: 'Admin Admin', credit: '4.00'},
        {id: 'EP0002', name: 'Admin', credit: '2.00'},
        {id: 'EP0000', name: 'Admin Admin Admin', credit: '8.00'},
        {id: 'EP0001', name: 'Admin Admin', credit: '4.00'},
        {id: 'EP0002', name: 'Admin', credit: '2.00'},
        {id: 'EP0000', name: 'Admin Admin Admin', credit: '8.00'},
        {id: 'EP0001', name: 'Admin Admin', credit: '4.00'},
        {id: 'EP0002', name: 'Admin', credit: '2.00'},
        {id: 'EP0000', name: 'Admin Admin Admin', credit: '8.00'},
        {id: 'EP0001', name: 'Admin Admin', credit: '4.00'},
        {id: 'EP0002', name: 'Admin', credit: '2.00'},
        {id: 'EP0000', name: 'Admin Admin Admin', credit: '8.00'},
        {id: 'EP0001', name: 'Admin Admin', credit: '4.00'},
        {id: 'EP0002', name: 'Admin', credit: '2.00'},
        {id: 'EP0000', name: 'Admin Admin Admin', credit: '8.00'},
        {id: 'EP0001', name: 'Admin Admin', credit: '4.00'},
        {id: 'EP0002', name: 'Admin', credit: '2.00'},
        {id: 'EP0000', name: 'Admin Admin Admin', credit: '8.00'},
        {id: 'EP0001', name: 'Admin Admin', credit: '4.00'},
        {id: 'EP0002', name: 'Admin', credit: '2.00'},
        {id: 'EP0000', name: 'Admin Admin Admin', credit: '8.00'},
        {id: 'EP0001', name: 'Admin Admin', credit: '4.00'},
        {id: 'EP0002', name: 'Admin', credit: '2.00'},
        {id: 'EP0000', name: 'Admin Admin Admin', credit: '8.00'},
        {id: 'EP0001', name: 'Admin Admin', credit: '4.00'},
        {id: 'EP0002', name: 'Admin', credit: '2.00'},
        {id: 'EP0000', name: 'Admin Admin Admin', credit: '8.00'},
        {id: 'EP0001', name: 'Admin Admin', credit: '4.00'},
        {id: 'EP0002', name: 'Admin', credit: '2.00'},
        {id: 'EP0000', name: 'Admin Admin Admin', credit: '8.00'},
        {id: 'EP0001', name: 'Admin Admin', credit: '4.00'},
        {id: 'EP0002', name: 'Admin', credit: '2.00'},
        {id: 'EP0000', name: 'Admin Admin Admin', credit: '8.00'},
        {id: 'EP0001', name: 'Admin Admin', credit: '4.00'},
        {id: 'EP0002', name: 'Admin', credit: '2.00'},
        {id: 'EP0000', name: 'Admin Admin Admin', credit: '8.00'},
        {id: 'EP0001', name: 'Admin Admin', credit: '4.00'},
        {id: 'EP0002', name: 'Admin', credit: '2.00'},
        {id: 'EP0000', name: 'Admin Admin Admin', credit: '8.00'},
        {id: 'EP0001', name: 'Admin Admin', credit: '4.00'},
        {id: 'EP0002', name: 'Admin', credit: '2.00'},
        {id: 'EP0000', name: 'Admin Admin Admin', credit: '8.00'},
        {id: 'EP0001', name: 'Admin Admin', credit: '4.00'},
        {id: 'EP0002', name: 'Admin', credit: '2.00'},
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
    auditrails(){
      this.$router.push({name: 'Auditrails'})
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