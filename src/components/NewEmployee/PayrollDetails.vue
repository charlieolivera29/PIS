<template>
<div class="card shadow-sm mb-4">
	<div class="card-body">
		<form class="user">
			<div class="b-bottom-dark mt-2"><label class="label-s t-xl">Employment Information</label></div>
			<div class="row m-0 p-0 mt-5">
				<div class="col-md-4 pr-1">
					<div class="form-s">
						<label class="label-s t-md">Date Hired</label>
						<input id="datepicker" type="date" name="text" class="input-edit-s w-100">
					</div>
				</div>
				<div class="col-md-4 pr-1">
					<div class="form-s">
						<label class="label-s t-md">Basic Salary</label>
						<input type="text" name="text" class="input-edit-s w-100">
					</div>
				</div>
			</div>
			
			<div class="row m-0 p-0 mt-2">
				<div class="col-md-4 pr-1">
					<div class="form-s">
						<label class="label-s t-md">Employment Status</label>
						<select class="input-select-s w-100">
							<option value="" disabled selected>Select Status</option>
							<option value="Sr.">Sr.</option>
						</select>
					</div>
				</div>
				<div class="col-md-4 pr-1">
					<div class="form-s">
						<label class="label-s t-md">Employment Type</label>
						<select class="input-select-s w-100">
							<option value="" disabled selected>Select Type</option>
							<option value="Sr.">Sr.</option>
						</select>
					</div>
				</div>
			</div>
			
			<div class="row m-0 p-0 mt-2">
				<div class="col-md-4 pr-1">
					<div class="form-s">
						<label class="label-s t-md">Project/Contract Effective Date</label>
						<input id="datepicker" type="date" name="text" class="input-edit-s w-100">
					</div>
				</div>
				<div class="col-md-4 pr-1">
					<div class="form-s">
						<label class="label-s t-md">Project/Contract End Date</label>
						<input id="datepicker" type="date" name="text" class="input-edit-s w-100">
					</div>
				</div>
			</div>

			<div class="b-bottom-dark mt-5"><label class="label-s t-xl">Employee's Government Agency Number</label></div>
			<div class="row m-0 p-0 mt-2">
				<div class="col-md-3 pr-1">
					<div class="form-s">
						<label class="label-s t-md">TIN Number</label>
						<input type="text" name="text" class="input-edit-s w-100">
					</div>
				</div>
				<div class="col-md-3 pr-1">
					<div class="form-s">
						<label class="label-s t-md">SSS Number</label>
						<input type="text" name="text" class="input-edit-s w-100">
					</div>
				</div>
				<div class="col-md-3 pr-1">
					<div class="form-s">
						<label class="label-s t-md">Philhealth Number</label>
						<input type="text" name="text" class="input-edit-s w-100">
					</div>
				</div>
				<div class="col-md-3 pr-1">
					<div class="form-s">
						<label class="label-s t-md">HDMF Numbe</label>
						<input type="text" name="text" class="input-edit-s w-100">
					</div>
				</div>
			</div>

			<div class="b-bottom-dark mt-5"><label class="label-s t-xl">Employee's 	Compensation Information</label></div>
			<div class="row m-0 p-0 mt-2">
				<div class="col-md-4 pr-1">
					<div class="form-s">
						<label class="label-s t-md">Wage Type</label>
						<select class="input-select-s w-100">
							<option value="" disabled selected>Select Type</option>
							<option value="Sr.">Sr.</option>
						</select>
					</div>
				</div>
				<div class="col-md-4 pr-1">
					<div class="form-s">
						<label class="label-s t-md">Payout Type</label>
						<select class="input-select-s w-100">
							<option value="" disabled selected>Select Type</option>
							<option value="Sr.">Sr.</option>
						</select>
					</div>
				</div>
				<div class="col-md-4 pr-1">
					<div class="form-s">
						<label class="label-s t-md">Tax Computation</label>
						<select class="input-select-s w-100">
							<option value="" disabled selected>Select Computation</option>
							<option value="Sr.">Sr.</option>
						</select>
					</div>
				</div>
			</div>
			
			<div class="row m-0 p-0 mt-2">
				<div class="col-md-12 pr-1">
					<div class="form-s">
						<label class="label-s t-md">Payroll Group</label>
						<select class="input-select-s w-100">
							<option value="" disabled selected>Select Payroll Group</option>
							<option value="Sr.">Sr.</option>
						</select>
					</div>
				</div>
			</div>

			<div class="container bg-gray-100 mt-1 p-3">
				<h5>Payroll Group Information</h5>
				<div class="row">
					<div class="col-md-9 mx-auto">
						<div class="row">
							<div class="col-md-4">
								<div class="form-s w-100">
									<label class="label-s t-md text-center">SSS</label>
									<input type="text" name="text" class="input-view-border-0 w-100 text-center" placeholder="Divided">
								</div>
							</div>
							<div class="col-md-4">
								<div class="form-s w-100">
									<label class="label-s t-md text-center">Pagibig</label>
									<input type="text" name="text" class="input-view-border-0 w-100 text-center" placeholder="First Cutoff">
								</div>
							</div>
							<div class="col-md-4">
								<div class="form-s w-100">
									<label class="label-s t-md text-center">Philhealth</label>
									<input type="text" name="text" class="input-view-border-0 w-100 text-center" placeholder="Second Cutoff">
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

		</form>
	</div>
</div>
</template>