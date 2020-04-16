<template>
<div class="card shadow-sm mb-4">
	<div class="card-body">
		<form class="user">
			<h3>Additional Information</h3>
			<hr>
			<div class="row m-0 p-0 mt-3">
				<div class="col-md-4 pr-1">
					<div class="form-s">
						<label class="label-s t-md">Gender</label>	
						<div class="p-1 pt-2">		
							<div class="custom-control custom-radio inline">
								<input type="radio" class="custom-control-input" id="Female" name="Gender">
								<label class="custom-control-label t-dimgray-14" for="Female">Female</label>
							</div>    
							<div class="custom-control custom-radio inline ml-3">
								<input type="radio" class="custom-control-input" id="Male" name="Gender">
								<label class="custom-control-label t-dimgray-14" for="Male">Male</label>
							</div>
						</div>    
					</div>
				</div>
			</div>

			<div class="row m-0 p-0 mt-2">
				<div class="col-md-3 pr-1">
					<div class="form-s">
						<label class="label-s t-md">Height</label>
						<input type="text" name="text" class="input-edit-s t-dimgray-16 w-100">
					</div>
				</div>

				<div class="col-md-3 px-1">
					<div class="form-s">
						<label class="label-s t-md">Weight</label>
						<input type="text" name="text" class="input-edit-s t-dimgray-16 w-100">
					</div>
				</div>
			</div>

			<div class="row m-0 p-0">
				<div class="col-md-3 pr-1">
					<div class="form-s">
						<label class="label-s t-md">Religion</label>
						<input type="text" name="text" class="input-edit-s w-100">
					</div>
				</div>

				<div class="col-md-3 px-1">
					<div class="form-s">
						<label class="label-s t-md">Marital Status</label>
						<input type="text" name="text" class="input-edit-s w-100">
					</div>
				</div>
			</div>

			<div class="row m-0 p-0 mt-2">
				<div class="col-md-3 pr-1">
					<div class="form-s">
						<label class="label-s t-md">Birth Date</label>
						<input id="datepicker" type="date" name="text" class="input-edit-s w-100">
					</div>
				</div>
				<div class="col-md-9 px-1">
					<div class="form-s">
						<label class="label-s t-md">Birth Place</label>
						<input type="text" name="text" class="input-edit-s w-100">
					</div>
				</div>
			</div>

			<div class="row m-0 p-0 mt-2">
				<div class="col-md-12 pr-1">
					<div class="form-s">
						<label class="label-s t-md">Present Address</label>
						<input type="text" name="text" class="input-edit-s w-100">
					</div>
				</div>
			</div>
			
			<div class="row m-0 p-0 mt-2">
				<div class="col-md-12 pr-1">
					<div class="form-s">
						<label class="label-s t-md">Province Address</label>
						<input type="text" name="text" class="input-edit-s w-100">
					</div>
				</div>
			</div>

		</form>
	</div>
</div>
</template>