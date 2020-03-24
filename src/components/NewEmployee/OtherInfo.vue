<template>
<div class="card shadow mb-4">
	<div class="card-header py-2 d-flex flex-row align-items-center justify-content-between"></div>
	<div class="card-body">
		<form class="user">
			
			<div class="row m-0 p-0 mt-2">
				<div class="col-md-3 pr-1">
					<div class="form-s">
						<label class="label-s t-primary bold">Religion</label>
						<input type="text" name="text" class="input-edit-s w-100" placeholder="Enter Religion">
					</div>
				</div>
			</div>
			
			<div class="row m-0 p-0 mt-2">
				<div class="col-md-3 pr-1">
					<div class="form-s">
						<label class="label-s t-primary bold">Marital Status</label>
						<input type="text" name="text" class="input-edit-s w-100" placeholder="Enter Marital Status">
					</div>
				</div>
			</div>
			
			<div class="row m-0 p-0 mt-2">
				<div class="col-md-4 pr-1">
					<div class="form-s">
						<label class="label-s t-primary bold">Gender</label>	
						<div class="pl-1">		
							<div class="custom-control custom-radio">
							<input type="radio" class="custom-control-input" id="Female" name="Gender">
							<label class="custom-control-label t-dimgray-14" for="Female">Female</label>
							</div>    
							<div class="custom-control custom-radio">
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
						<label class="label-s t-primary bold">Height</label>
						<input type="text" name="text" class="input-edit-s w-100" placeholder="Enter Height">
					</div>
				</div>
				<div class="col-md-3 px-1">
					<div class="form-s">
						<label class="label-s t-primary bold">Weight</label>
						<input type="text" name="text" class="input-edit-s w-100" placeholder="Enter Weight">
					</div>
				</div>
			</div>

			<div class="row m-0 p-0 mt-2">
				<div class="col-md-3 pr-1">
					<div class="form-s">
						<label class="label-s t-primary bold">Birth Date</label>
						<input id="datepicker" type="date" name="text" class="input-edit-s w-100" placeholder="Select Suffix">
					</div>
				</div>
				<div class="col-md-9 px-1">
					<div class="form-s">
						<label class="label-s t-primary bold">Birth Place</label>
						<input type="text" name="text" class="input-edit-s w-100" placeholder="Enter First Name">
					</div>
				</div>
			</div>
			
			<div class="row m-0 p-0 mt-2">
				<div class="col-md-12 pr-1">
					<div class="form-s">
						<label class="label-s t-primary bold">Present Address</label>
						<input type="text" name="text" class="input-edit-s w-100" placeholder="Enter Present Address">
					</div>
				</div>
			</div>
			
			<div class="row m-0 p-0 mt-2">
				<div class="col-md-12 pr-1">
					<div class="form-s">
						<label class="label-s t-primary bold">Province Address</label>
						<input type="text" name="text" class="input-edit-s w-100" placeholder="Enter Province Address">
					</div>
				</div>
			</div>

		</form>
	</div>
</div>
</template>