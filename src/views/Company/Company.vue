<template>
<div id="employee">
<div id="wrapper">
    <SideBar/>
    <div id="content-wrapper" class="d-flex flex-column">
      <div id="content">
        <TopBar/>
        <div class="container-fluid">
          <div class="bg-white p-2 border rounded">
              <span class="m-0 font-weight-bold t-lg t-dimgray">Company</span>
          </div>
          <div id="company_body" class="row p-3">

            <div class="col-md-4 px-1">
              <div id="addcompany" class="card mb-2 w-100 ">
                <div class="card-body py-5" @click="create()">
                  <center><i class="fas fa-fw fa-plus my-3"></i></center>
                </div>
              </div>
            </div>

            <div class="col-md-4 px-1" v-for="item in items" v-bind:key="item">
              <div id="company_card">
                <div class="card mb-2 w-100">
                  <div class="card-body" @click="sendInfo(item)">
                    <h5 class="t-primary bold pointer u-hover name"><i class="fas fa-fw fa-building t-primary"></i> {{item.name}}</h5>
                    <label class="label-s t-md"><i class="fas fa-fw fa-qrcode text-dimgray code"></i> {{item.code}}</label>
                    <label class="label-s t-md"><i class="fas fa-fw fa-address-book text-dimgray contact"></i> {{item.contact}}</label>
                    <label class="label-s t-md"><i class="fas fa-fw fa-map-marker-alt text-dimgray address"></i> {{item.address}}</label>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="modal fade" id="create">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-body">
          <div class="p-1" v-if="!isShow">
          <div>
            <h5 class="inline t-dark bold">Create Company</h5>
            <button type="button" class="inline close float-right" data-dismiss="modal">&times;</button>
          </div>
            <form id="demo" autocomplete="off">
              <div class="row m-0 p-0 mt-5">
                <div class="col-md-6">
                  <div class="form-s">
                    <label class="label-s t-md">Company Code</label>
                    <input id="code" type="text" class="input-edit-s w-100" placeholder="">
                  </div>
                </div>
              </div>
              <div class="row m-0 p-0 mt-2">
                <div class="col-md-12">
                  <div class="form-s">
                    <label class="label-s t-md">Company Name</label>
                    <input id="name" type="text" class="input-edit-s w-100" placeholder="">
                  </div>
                </div>
              </div>
              <div class="row m-0 p-0 mt-2">
                <div class="col-md-12">
                  <div class="form-s">
                    <label class="label-s t-md">Contact</label>
                    <input id="contact" type="text" class="input-edit-s w-100" placeholder="">
                  </div>
                </div>
              </div>
              <div class="row m-0 p-0 mt-2">
                <div class="col-md-12">
                  <div class="form-s">
                    <label class="label-s t-md">Address</label>
                    <textarea id="address" rows="4" class="input-area-s w-100" placeholder=""></textarea>
                  </div>
                </div>
              </div>
              <button type="button" class="btn btn-success px-4 py-1 t-md float-right mt-2" @click="save()">Save</button>
            </form>
          </div>
          <div class="p-1" v-if="isShow && isEdit">
          <div>
            <h5 class="inline t-dark bold">View Company</h5>
            <button type="button" class="inline close float-right" data-dismiss="modal">&times;</button>
          </div>
            <form id="demo" autocomplete="off">
              <div class="row m-0 p-0 mt-5">
                <div class="col-md-6">
                  <div class="form-s">
                    <label class="label-s t-md">Company Code</label>
                    <input type="text" class="input-view-s w-100 bold" placeholder="" :value="code">
                  </div>
                </div>
              </div>
              <div class="row m-0 p-0 mt-2">
                <div class="col-md-12">
                  <div class="form-s">
                    <label class="label-s t-md">Company Name</label>
                    <input type="text" class="input-view-s w-100 bold" placeholder="" :value="name">
                  </div>
                </div>
              </div>
              <div class="row m-0 p-0 mt-2">
                <div class="col-md-12">
                  <div class="form-s">
                    <label class="label-s t-md">Contact</label>
                    <input type="text" class="input-view-s w-100 bold" placeholder="" :value="contact">
                  </div>
                </div>
              </div>
              <div class="row m-0 p-0 mt-2">
                <div class="col-md-12">
                  <div class="form-s">
                    <label class="label-s t-md">Address</label>
                    <input type="text" class="input-view-s w-100 bold" placeholder="" :value="address">
                  </div>
                </div>
              </div>
              <button type="button" class="btn btn-success px-4 py-1 t-md float-right mt-2" @click="edit()">Edit</button>
            </form>
          </div>
          <div class="p-1" v-if="!isEdit && isShow">
            <div>
              <h5 class="inline t-dark bold">View Company</h5>
              <button type="button" class="inline close float-right" data-dismiss="modal">&times;</button>
            </div>
            <form id="demo" autocomplete="off">
              <div class="row m-0 p-0 mt-5">
                <div class="col-md-6">
                  <div class="form-s">
                    <label class="label-s t-md">Company Code</label>
                    <input :value="code" type="text" class="input-edit-s w-100" placeholder="">
                  </div>
                </div>
              </div>
              <div class="row m-0 p-0 mt-2">
                <div class="col-md-12">
                  <div class="form-s">
                    <label class="label-s t-md">Company Name</label>
                    <input :value="name" type="text" class="input-edit-s w-100" placeholder="">
                  </div>
                </div>
              </div>
              <div class="row m-0 p-0 mt-2">
                <div class="col-md-12">
                  <div class="form-s">
                    <label class="label-s t-md">Contact</label>
                    <input :value="contact" type="text" class="input-edit-s w-100" placeholder="">
                  </div>
                </div>
              </div>
              <div class="row m-0 p-0 mt-2">
                <div class="col-md-12">
                  <div class="form-s">
                    <label class="label-s t-md">Address</label>
                    <textarea :value="address" rows="4" class="input-area-s w-100" placeholder=""></textarea>
                  </div>
                </div>
              </div>
              <button type="button" class="btn btn-success px-4 py-1 t-md float-right mt-2" @click="update()">update</button>
            </form>
          </div>
        </div>
      </div>
    </div></div>

</div>
</template>
<script src="../assets/vendor/jquery/jquery.min.js"></script>

<script>
import SideBar from '@/components/SideBar.vue';
import TopBar from '@/components/TopBar.vue';

export default {
  name: 'Department',
  data() {
    return{
      code: '',
      name: '',
      contact: '',
      address: '',
      isShow: false,
      isEdit: false,
      items :
      [],
      selectedUser: '',
    }
  },
  components: {
    SideBar,
    TopBar
  },
  mounted() {
    $(document).ready(function() {
      $('#dataTable').DataTable();

      $('#create').on('hidden.bs.modal', function (e) {
        $(this)
          .find("input,textarea")
          .val('');
      });

    });
  },
  methods: {
    sendInfo(item) {
        this.code = item.code;
        this.name = item.name;
        this.contact = item.contact;
        this.address = item.address;
        this.isShow = true;
        this.isEdit = true;
        $('#create').modal('show');
    },
    create(){
        this.isShow = false;
        this.isEdit = true;
        $('#create').modal('show');
    },
    edit(){
        this.isEdit = false;
    },
    update(){
        this.isEdit = true;
        $("#create .close").click();
    },
    save(){
      const item = {
        name: $('#name').val(),
        code: $('#code').val(),
        contact: $('#contact').val(),
        address: $('#address').val()
      }
      this.items.push(item)
      $("#create").modal('hide');
    }
  }
};
</script>

<style type="text/css">

#addcompany:hover {
  background-color: #EDEEF1 !important;
}

#addcompany i{
  font-size: 30px;
}

</style>