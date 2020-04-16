<template>
<div class="card shadow-sm mb-4">
	<div class="card-body">
		<form class="user">
			<h3>Basic Information</h3>
			<hr>
			<div class="row m-0 p-0 mt-3">
				<div class="col-md-3">
					<div class="form-s">
						<label class="label-s t-md">Employee Code</label>
						<input type="text" name="text" class="input-edit-s w-100" placeholder="">
					</div>
				</div>
			</div>

			<div class="row m-0 p-0 mt-2">
				<div class="col-md-2 pr-0">
					<div class="form-s">
						<label class="label-s t-md">Suffix Name</label>
						<select class="input-select-s w-100">
							<option value="" disabled selected>Select Suffix</option>
							<option value="Mrs.">Mrs.</option>
							<option value="Mr.">Mr.</option>
							<option value="Ms.">Ms.</option>
						</select>
					</div>
				</div>

				<div class="col-md-3 pr-0">
					<div class="form-s">
						<label class="label-s t-md">First Name</label>
						<input type="text" name="text" class="input-edit-s w-100" placeholder="">
					</div>
				</div>

				<div class="col-md-3 pr-0">
					<div class="form-s">
						<label class="label-s t-md m-0">Middle Name</label>
						<input type="text" name="text" class="input-edit-s w-100" placeholder="">
					</div>
				</div>

				<div class="col-md-3 pr-0">
					<div class="form-s">
						<label class="label-s t-md m-0">Last Name</label>
						<input type="text" name="text" class="input-edit-s w-100" placeholder="">
					</div>
				</div>
			</div>

			<!-- <div class="b-bottom-dark mt-3"><label class="label-s t-sm t-silver bold pl-2">Employee Email</label></div> -->
			<div class="row m-0 p-0 mt-2">
				<div class="col-md-4 pr-0">
					<div class="form-s">
						<label class="label-s t-md m-0">Company Email</label>
						<input type="email" name="text" class="input-edit-s w-100" placeholder="">
					</div>
				</div>

				<div class="col-md-4 pr-0">
					<div class="form-s">
						<label class="label-s t-md m-0">Personal Email</label>
						<input type="email" name="text" class="input-edit-s w-100" placeholder="">
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