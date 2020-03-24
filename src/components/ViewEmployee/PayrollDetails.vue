<template>
<div class="card shadow mb-4">
	<div class="card-header py-2 d-flex flex-row align-items-center justify-content-between"></div>
	<div class="card-body">
		<form class="user">
			
			<!-- <div class="row m-0 p-0 mt-2">
				<div class="col-md-4 pr-1">
					<div class="form-s">
						<label class="label-s t-primary bold">Date Hired</label>
						<input id="datepicker" type="date" name="text" class="input-edit-s w-100" placeholder="Select Suffix">
					</div>
				</div>
			</div> -->
			<div class="row m-0 p-0 mt-2">
				<div class="col-md-4 pr-1">
					<div class="form-s">
						<label class="label-s t-primary bold">Date Hired</label>
						<input type="text" name="text" class="input-view-s w-100" placeholder="September 02, 2019">
					</div>
				</div>
			</div>
			
			<!-- <div class="row m-0 p-0 mt-2">
				<div class="col-md-4 pr-1">
					<div class="form-s">
						<label class="label-s t-primary bold">Basic Salary</label>
						<input type="text" name="text" class="input-edit-s w-100" placeholder="Enter Basic Salary">
					</div>
				</div>
			</div> -->
			<div class="row m-0 p-0">
				<div class="col-md-4 pr-1">
					<div class="form-s">
						<label class="label-s t-primary bold">Basic Salary</label>
						<input type="text" name="text" class="input-view-s w-100" placeholder="00,000.00">
					</div>
				</div>
			</div>
			
			<!-- <div class="row m-0 p-0 mt-2">
				<div class="col-md-4 pr-1">
					<div class="form-s">
						<label class="label-s t-primary bold">Employment Status</label>
						<select class="input-select-s w-100">
							<option value="" disabled selected>Employment Status</option>
							<option value="Sr.">Sr.</option>
						</select>
					</div>
				</div>
			</div> -->
			<div class="row m-0 p-0">
				<div class="col-md-4 pr-1">
					<div class="form-s">
						<label class="label-s t-primary bold">Employment Status</label>
						<input type="text" name="text" class="input-view-s w-100" placeholder="Employed">
					</div>
				</div>
			</div>
			
			<!-- <div class="row m-0 p-0 mt-2">
				<div class="col-md-4 pr-1">
					<div class="form-s">
						<label class="label-s t-primary bold">Employment Type</label>
						<select class="input-select-s w-100">
							<option value="" disabled selected>Employment Type</option>
							<option value="Sr.">Sr.</option>
						</select>
					</div>
				</div>
			</div> -->
			<div class="row m-0 p-0">
				<div class="col-md-4 pr-1">
					<div class="form-s">
						<label class="label-s t-primary bold">Employment Type</label>
						<input type="text" name="text" class="input-view-s w-100" placeholder="Regular">
					</div>
				</div>
			</div>
			
			<!-- <div class="row m-0 p-0 mt-2">
				<div class="col-md-4 pr-1">
					<div class="form-s">
						<label class="label-s t-primary bold">Project/Contract Effective Date</label>
						<input id="datepicker" type="date" name="text" class="input-edit-s w-100" placeholder="Select Suffix">
					</div>
				</div>
			</div> -->
			<div class="row m-0 p-0">
				<div class="col-md-4 pr-1">
					<div class="form-s">
						<label class="label-s t-primary bold">Project/Contract Effective Date</label>
						<input type="text" name="text" class="input-view-s w-100" placeholder="September 02, 2019">
					</div>
				</div>
			</div>
			
			<!-- <div class="row m-0 p-0 mt-2">
				<div class="col-md-4 pr-1">
					<div class="form-s">
						<label class="label-s t-primary bold">Project/Contract End Date</label>
						<input id="datepicker" type="date" name="text" class="input-edit-s w-100" placeholder="Select Suffix">
					</div>
				</div>
			</div> -->
			<div class="row m-0 p-0">
				<div class="col-md-4 pr-1">
					<div class="form-s">
						<label class="label-s t-primary bold">Project/Contract End Date</label>
						<input type="text" name="text" class="input-view-s w-100" placeholder="September 02, 2020">
					</div>
				</div>
			</div>
			
			<!-- <div class="row m-0 p-0 mt-2">
				<div class="col-md-4 pr-1">
					<div class="form-s">
						<label class="label-s t-primary bold">Wage Type</label>
						<select class="input-select-s w-100">
							<option value="" disabled selected>Wage Type</option>
							<option value="Sr.">Sr.</option>
						</select>
					</div>
				</div>
			</div> -->
			<div class="row m-0 p-0">
				<div class="col-md-4 pr-1">
					<div class="form-s">
						<label class="label-s t-primary bold">Wage Type</label>
						<input type="text" name="text" class="input-view-s w-100" placeholder="Basic">
					</div>
				</div>
			</div>
			
			<!-- <div class="row m-0 p-0 mt-2">
				<div class="col-md-4 pr-1">
					<div class="form-s">
						<label class="label-s t-primary bold">Payout Type</label>
						<select class="input-select-s w-100">
							<option value="" disabled selected>Payout Type</option>
							<option value="Sr.">Sr.</option>
						</select>
					</div>
				</div>
			</div> -->
			<div class="row m-0 p-0">
				<div class="col-md-4 pr-1">
					<div class="form-s">
						<label class="label-s t-primary bold">Payout Type</label>
						<input type="text" name="text" class="input-view-s w-100" placeholder="Semi-Monthly">
					</div>
				</div>
			</div>
			
			<!-- <div class="row m-0 p-0 mt-2">
				<div class="col-md-4 pr-1">
					<div class="form-s">
						<label class="label-s t-primary bold">Tax Computation</label>
						<select class="input-select-s w-100">
							<option value="" disabled selected>Tax Computation</option>
							<option value="Sr.">Sr.</option>
						</select>
					</div>
				</div>
			</div> -->
			<div class="row m-0 p-0">
				<div class="col-md-4 pr-1">
					<div class="form-s">
						<label class="label-s t-primary bold">Tax Computation</label>
						<input type="text" name="text" class="input-view-s w-100" placeholder="September 02, 2020">
					</div>
				</div>
			</div>

			<!-- <div class="row m-0 p-0 mt-2">
				<div class="col-md-3 pr-1">
					<div class="form-s">
						<label class="label-s t-primary bold">TIN Number</label>
						<input type="text" name="text" class="input-edit-s w-100" placeholder="Enter TIN Number">
					</div>
				</div>
				<div class="col-md-3 px-1">
					<div class="form-s">
						<label class="label-s t-primary bold">SSS Number</label>
						<input type="text" name="text" class="input-edit-s w-100" placeholder="Enter SSS Number">
					</div>
				</div>
				<div class="col-md-3 px-1">
					<div class="form-s">
						<label class="label-s t-primary bold">Philhealth Number</label>
						<input type="text" name="text" class="input-edit-s w-100" placeholder="Enter Philhealth Number">
					</div>
				</div>
				<div class="col-md-3 px-1">
					<div class="form-s">
						<label class="label-s t-primary bold">HDMF Numbe</label>
						<input type="text" name="text" class="input-edit-s w-100" placeholder="Enter HDMF Number">
					</div>
				</div>
			</div> -->
			<div class="row m-0 p-0">
				<div class="col-md-3 pr-1">
					<div class="form-s">
						<label class="label-s t-primary bold">TIN Number</label>
						<input type="text" name="text" class="input-view-s w-100" placeholder="097375235">
					</div>
				</div>
				<div class="col-md-3 px-1">
					<div class="form-s">
						<label class="label-s t-primary bold">SSS Number</label>
						<input type="text" name="text" class="input-view-s w-100" placeholder="236365373">
					</div>
				</div>
				<div class="col-md-3 px-1">
					<div class="form-s">
						<label class="label-s t-primary bold">Philhealth Number</label>
						<input type="text" name="text" class="input-view-s w-100" placeholder="363673725352">
					</div>
				</div>
				<div class="col-md-3 px-1">
					<div class="form-s">
						<label class="label-s t-primary bold">HDMF Numbe</label>
						<input type="text" name="text" class="input-view-s w-100" placeholder="236357457">
					</div>
				</div>
			</div>
			
			<!-- <div class="row m-0 p-0 mt-2">
				<div class="col-md-12 pr-1">
					<div class="form-s">
						<label class="label-s t-primary bold">Payroll Group</label>
						<select class="input-select-s w-100">
							<option value="" disabled selected>Select Payroll Group</option>
							<option value="Sr.">Sr.</option>
						</select>
					</div>
				</div>
			</div> -->
			<div class="row m-0 p-0">
				<div class="col-md-4 pr-1">
					<div class="form-s">
						<label class="label-s t-primary bold">Payroll Group</label>
						<input type="text" name="text" class="input-view-s w-100" placeholder="Batch XFLN-2532">
					</div>
				</div>
			</div>

			<div class="container bg-gray-100 mt-1">
				<h5 class="t-primary">Payroll Group Information</h5>
				<div class="row">
					<div class="col-md-9 mx-auto">
						<div class="row">
							<div class="col-md-4">
								<div class="form-s w-100">
									<label class="label-s t-primary bold text-center">SSS</label>
									<input type="text" name="text" class="input-view-border-0 w-100 text-center" placeholder="Divided">
								</div>
							</div>
							<div class="col-md-4">
								<div class="form-s w-100">
									<label class="label-s t-primary bold text-center">Pagibig</label>
									<input type="text" name="text" class="input-view-border-0 w-100 text-center" placeholder="First Cutoff">
								</div>
							</div>
							<div class="col-md-4">
								<div class="form-s w-100">
									<label class="label-s t-primary bold text-center">Philhealth</label>
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