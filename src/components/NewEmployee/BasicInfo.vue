<template>
<div class="card shadow mb-4">
	<div class="card-header py-2 d-flex flex-row align-items-center justify-content-between"></div>
	<div class="card-body">
		<form class="user">
			
			<div class="row m-0 p-0 mt-2">
				<div class="col-md-4 pr-1">
					<div v-if="!image">
					<h5 class=""></h5>
					<img src="../../assets/logo.png" class="rounded-circle img-upload" />
					<span class="btn btn-primary btn-sm btn-file">
					Change Image <input type="file" @change="onFileChange">
					</span>
					</div>
					<div v-else>
					<h5 class=""></h5>
					<img :src="image" class="rounded-circle img-upload" />
					<span class="btn btn-primary btn-sm btn-file">
					Change Image <input type="file" @change="onFileChange">
					</span>
					</div>
				</div>
			</div>
			
			<div class="row m-0 p-0 mt-3">
				<div class="col-md-4 pr-1">
					<div class="form-s">
						<label class="label-s t-primary bold">Employee Code</label>
						<input type="email" name="text" class="input-edit-s w-100" placeholder="Enter Employee Code">
					</div>
				</div>
			</div>

			<div class="row m-0 p-0 mt-2">
				<div class="col-md-4 pr-1">
					<div class="form-s">
						<label class="label-s t-primary bold">Suffix Name</label>
						<select class="input-select-s w-100">
							<option value="" disabled selected>Suffix Name</option>
							<option value="Sr.">Sr.</option>
							<option value="Jr.">Jr.</option>
							<option value="III">III</option>
							<option value="IV">IV</option>
							<option value="V">V</option>
						</select>
					</div>
				</div>
			</div>

			<div class="row m-0 p-0 mt-2">
				<div class="col-md-4 pr-1">
					<div class="form-s">
						<label class="label-s t-primary bold">First Name</label>
						<input type="text" name="text" class="input-edit-s w-100" placeholder="Enter First Name">
					</div>
				</div>
			</div>

			<div class="row m-0 p-0 mt-2">
				<div class="col-md-4 pr-1">
					<div class="form-s">
						<label class="label-s t-primary bold">Middle Name</label>
						<input type="text" name="text" class="input-edit-s w-100" placeholder="Enter Middle Name">
					</div>
				</div>
			</div>

			<div class="row m-0 p-0 mt-2">
				<div class="col-md-4 pr-1">
					<div class="form-s">
						<label class="label-s t-primary bold">Last Name</label>
						<input type="text" name="text" class="input-edit-s w-100" placeholder="Enter Last Name">
					</div>
				</div>
			</div>
			
			<div class="row m-0 p-0 mt-2">
				<div class="col-md-4 pr-1">
					<div class="form-s">
						<label class="label-s t-primary bold">Company Email</label>
						<input type="email" name="text" class="input-edit-s w-100" placeholder="Enter Company Email">
					</div>
				</div>
			</div>
			
			<div class="row m-0 p-0 mt-2">
				<div class="col-md-4 pr-1">
					<div class="form-s">
						<label class="label-s t-primary bold">Personal Email</label>
						<input type="email" name="text" class="input-edit-s w-100" placeholder="Enter Personal Email">
					</div>
				</div>
			</div>

		</form>
	</div>
</div>
</template>

<script src="../assets/vendor/jquery/jquery.min.js"></script>
<script type="text/javascript">
export default{
  data() {
    return {
      image: ''
    }
  },
  methods: {
    onFileChange(e) {
      var files = e.target.files || e.dataTransfer.files;
      if (!files.length)
        return;
      this.createImage(files[0]);
    },
    createImage(file) {
      // var image = new Image();
      var reader = new FileReader();
      var vm = this;

      reader.onload = (e) => {
        vm.image = e.target.result;
      };
      reader.readAsDataURL(file);
    },
    removeImage: function () {
      this.image = '';
    }
  }
};
</script>