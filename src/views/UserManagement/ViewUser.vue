<template>
<div id="view">
<div id="wrapper">
<!-- Sidebar -->
<SideBar/>
<!-- End of Sidebar -->
<!-- Content Wrapper -->
<div id="content-wrapper" class="d-flex flex-column">
<!-- Main Content -->
<div id="content">
<!-- Topbar -->
<TopBar/>

<div class="container">
    <div class="row">
        <!-- Pie Chart -->
        <div class="col-xl-4 col-lg-5 my-auto">
          <div class="card shadow-sm mb-4">
            <!-- Card Header - Dropdown -->
            <div class="card-header py-2 d-flex flex-row align-items-center justify-content-between">
              <i class="fas fa-fw fa-arrow-left text-dark" @click="back()"></i>
              <h6 class="m-0 mt-2 font-weight-bold text-primary">User Account</h6>
            </div>
            <!-- Card Body -->
            <div class="card-body">
				<form class="user">
				<div class="form-group">
					<div class="row">
						<div class="col-xl-5 col-lg-12">
							<center><img class="rounded-circle" src="../../assets/background2.jpg" width="80" height="80"></center>
						</div>
						<div class="col-xl-7 col-lg-12 my-auto">
							<a href="#" class="btn btn-sm btn-info btn-icon-split text-gray btn-block justify-content-between" @click="showStatus()">
								<span class="text">Change Status</span>
								<span class="icon text-white-50">
									<i class="fas fa-arrow-right"></i>
								</span>
							</a>
							<a href="#" class="btn btn-sm btn-info btn-icon-split text-white border-0 btn-block justify-content-between" @click="showCP()">
								<span class="text">Change Password</span>
								<span class="icon text-white-50">
									<i class="fas fa-arrow-right"></i>
								</span>
							</a>
						</div>
					</div>
					<div class="form-s mt-5">
						<label class="label-s t-primary bold">Full Name</label>
						<input type="text" name="text" class="input-view-s w-100" value="Charlie Ching Olivera">
					</div>
					<div class="form-s">
						<label class="label-s t-primary bold">Email</label>
						<input type="text" name="text" class="input-view-s w-100" value="ccolivera@caimitoapps.com">
					</div>
					<div class="form-s">
						<label class="label-s t-primary bold">Mobile</label>
						<input type="text" name="text" class="input-view-s w-100" value="0939*******">
					</div>
					<div class="form-s">
						<label class="label-s t-primary bold">Status</label>
						<input id="stats" type="text" name="text" class="input-view-s w-100" :value="msg">
					</div>
				</div>
				</form>
            </div>
          </div>
        </div>


		<div class="col-xl-4 col-lg-5 my-auto" v-if="!isStatusHidden">
			<div class="card shadow-sm mb-4">
				<div class="card-header py-2 d-flex flex-row align-items-center">
					<h6 class="m-0 mt-2 font-weight-bold text-primary mx-auto">Update Status</h6>
				</div>
				<!-- Card Body -->
				<div class="card-body">
					<form class="user">
						<div class="form-group">
							<label class="label-s t-primary t-label-uppercase bold">Status</label>
							<a type="button" class="form-control bg-gray-100 text-dark border-1 small btn-icon-split justify-content-between" @click="changeColor" :class="{'border-left-success border-success': isActive, 'border-left-warning border-warning': !isActive }">
								<b class="my-auto pl-5"><span id="status" class="text-dark">{{msg}}</span></b>
								<span id="status" class="icon text-white-50" :class="{'bg-success': isActive, 'bg-warning': !isActive }" >
								<i></i>
								</span>
							</a>
							<label class="text-xs font-weight-bold text-gray-600 mb-1">Click the status to change.</label>
						</div>
						<a href="" class="btn btn-info text-white border-0 btn-block">
						Update Status
						</a>
					</form>
				</div>
			</div>
		</div>


        <div id="changepassword" class="col-xl-4 col-lg-5 my-auto" v-if="!isCPHidden">
          <div class="card shadow-sm mb-4">
            <!-- Card Header - Dropdown -->
            <div class="card-header py-2 d-flex flex-row align-items-center">
              <h6 class="m-0 mt-2 font-weight-bold text-primary mx-auto">Change Password</h6>
            </div>
            <!-- Card Body -->
            <div class="card-body">
				<form class="user">
					<div class="form-s">
						<label class="label-s t-primary t-label-uppercase bold">Old Password</label>
						<input type="text" name="text" class="input-edit-s w-100">
					</div>
					<div class="form-s">
						<label class="label-s t-primary t-label-uppercase bold">New Password</label>
						<input type="text" name="text" class="input-edit-s w-100">
					</div>
					<div class="form-s">
						<label class="label-s t-primary t-label-uppercase bold">Confirm Password</label>
						<input type="text" name="text" class="input-edit-s w-100">
					</div>
					<a href="" class="btn btn-info text-white border-0 btn-block mt-2">
					Change Password
					</a>
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
</template>
<script src="../assets/vendor/jquery/jquery.min.js"></script>
<script>
import SideBar from '@/components/SideBar.vue';
import TopBar from '@/components/TopBar.vue';

export default {
	name: 'viewUserManagement',
	data() {
		return {
			isActive: false,
			isStatusHidden: true,
			isCPHidden: true,
			msg: "Inactive"
		}
	},
	components: {
		SideBar,
		TopBar
	},
	methods: {
		back() {
			this.$router.push({name: 'UserManagement'});
		},
		showStatus() {
			if (this.isCPHidden == false) {
				this.isCPHidden = !this.isCPHidden;
			}
			this.isStatusHidden = !this.isStatusHidden;
		},
		showCP() {
			if (this.isStatusHidden == false) {
				this.isStatusHidden = !this.isStatusHidden;
			}
			this.isCPHidden = !this.isCPHidden;
		},
		changeColor: function(){
			this.isActive = !this.isActive;
			if (this.isActive == false) {
				$('#status').text('Inactive');
				document.getElementById('stats').value = 'Inactive';
			} else {
				$('#status').text('Active');
				document.getElementById('stats').value = 'Active';
			}
		}
	},
	mounted() {

	}
};
</script>