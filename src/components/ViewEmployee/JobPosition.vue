<template>
<div id="basic_info">
	<div class="row">
		<div class="col-md-3">
			<div class="card shadow-sm mb-4">
				<div class="card-body">
					<div class="m-0 p-0">
						<img src="../../assets/img/sample2.jpg" class="rounded-circle img-upload" width="100" />
					</div>
					<div class="w-100 text-center">
						<span class="t-sm t-dimgray bold">(ZGH0003)</span><br>
						<span class="t-xl t-dimgray bold">Charlie Ching Olivera</span><br>
						<span class="t-md t-dimgray bold">Front-End Developer</span>
					</div>
				</div>
			</div>
		</div>
		<div class="col-md-9">

			<!-- Position Details -->
			<div class="card shadow-sm mb-2">
				<div class="card-body">
					<form class="user">
						<div class="d-flex flex-row">
							<div class="p-0">
								<h4>Position Details</h4>
							</div>
							<div class="p-0 ml-auto">
								<i class="fas fa-fw fa-edit text-primary"></i>
							</div>
						</div>
						<div class="body">
							<div class="row mx-0 p-0 mt-3">
								<div class="col-md-3 pr-1">
									<label class="label-s t-md">Company</label>
								</div>
								<div class="col-md-9">
									<input type="text" name="text" class="input-view-s w-100 bold" placeholder="ZGH0003">
								</div>
							</div>
							<div class="row mx-0 p-0">
								<div class="col-md-3 pr-1">
									<label class="label-s t-md">Department</label>
								</div>
								<div class="col-md-9">
									<input type="text" name="text" class="input-view-s w-100 bold" placeholder="N/A">
								</div>
							</div>
							<div class="row mx-0 p-0">
								<div class="col-md-3 pr-1">
										<label class="label-s t-md">Supervisor</label>
								</div>
								<div class="col-md-9">
										<input type="text" name="text" class="input-view-s w-100 bold" placeholder="Charlie">
								</div>
							</div>
							<div class="row mx-0 p-0">
								<div class="col-md-3 pr-1">
										<label class="label-s t-md">Position</label>
								</div>
								<div class="col-md-9">
										<input type="text" name="text" class="input-view-s w-100 bold" placeholder="Ching">
								</div>
							</div>
							<div class="row mx-0 p-0">
								<div class="col-md-3 pr-1">
										<label class="label-s t-md">Projects</label>
								</div>
								<div class="col-md-9">
										<input type="text" name="text" class="input-view-s w-100 bold" placeholder="Olivera">
								</div>
							</div>
						</div>
					</form>
				</div>
			</div>
			<!-- End of Position Details -->

			<!-- Payroll Details -->
			<div class="card shadow-sm mb-2">
				<div class="card-body">
					<form class="user">
						<div class="d-flex flex-row">
							<div class="p-0">
								<h4>Payroll Details</h4>
							</div>
							<div class="p-0 ml-auto">
								<i class="fas fa-fw fa-edit text-primary"></i>
							</div>
						</div>
						<div class="body">
							<div class="row mx-0 p-0 mt-3">
								<div class="col-md-3 pr-1">
									<label class="label-s t-md">Payroll Group</label>
								</div>
								<div class="col-md-9">
									<input type="text" name="text" class="input-view-s w-100 bold" placeholder="ZGH0003">
								</div>
							</div>
							<div class="row mx-0 p-0">
								<div class="col-md-3 pr-1">
									<label class="label-s t-md">Working Days</label>
								</div>
								<div class="col-md-9">
									<input type="text" name="text" class="input-view-s w-100 bold" placeholder="N/A">
								</div>
							</div>
							<div class="row mx-0 p-0">
								<div class="col-md-3 pr-1">
										<label class="label-s t-md">Payroll Cycle</label>
								</div>
								<div class="col-md-9">
										<input type="text" name="text" class="input-view-s w-100 bold" placeholder="Charlie">
								</div>
							</div>
							<div class="row mx-0 p-0">
								<div class="col-md-3 pr-1">
										<label class="label-s t-md">Pay Period</label>
								</div>
								<div class="col-md-9">
										<input type="text" name="text" class="input-view-s w-100 bold" placeholder="Ching">
								</div>
							</div>
							<div class="row mx-0 p-0">
								<div class="col-md-4 pr-1">
									<div class="form-s">
										<label class="label-s t-md m-0">Employment Status</label>
										<input type="text" name="text" class="input-view-s w-100 bold" placeholder="Olivera">
									</div>
								</div>
								<div class="col-md-4 pr-1">
									<div class="form-s">
										<label class="label-s t-md m-0">Employment Type</label>
										<input type="text" name="text" class="input-view-s w-100 bold" placeholder="Olivera">
									</div>
								</div>
							</div>
							<div class="row mx-0 p-0">
								<div class="col-md-4 pr-1">
									<div class="form-s">
										<label class="label-s t-md m-0">Date Hired</label>
										<input type="text" name="text" class="input-view-s w-100 bold" placeholder="Olivera">
									</div>
								</div>
								<div class="col-md-4 pr-1">
									<div class="form-s">
										<label class="label-s t-md m-0">Effective Date</label>
										<input type="text" name="text" class="input-view-s w-100 bold" placeholder="Olivera">
									</div>
								</div>
								<div class="col-md-4 pr-1">
									<div class="form-s">
										<label class="label-s t-md m-0">Project/Contract End</label>
										<input type="text" name="text" class="input-view-s w-100 bold" placeholder="Olivera">
									</div>
								</div>
							</div>
							<div class="row mx-0 p-0">
								<div class="col-md-4 pr-1">
									<div class="form-s">
										<label class="label-s t-md m-0">Wage Type</label>
										<input type="text" name="text" class="input-view-s w-100 bold" placeholder="Olivera">
									</div>
								</div>
								<div class="col-md-4 pr-1">
									<div class="form-s">
										<label class="label-s t-md m-0">Tax Computation</label>
										<input type="text" name="text" class="input-view-s w-100 bold" placeholder="Olivera">
									</div>
								</div>
								<div class="col-md-4 pr-1">
									<div class="form-s">
										<label class="label-s t-md m-0">Payout Type</label>
										<input type="text" name="text" class="input-view-s w-100 bold" placeholder="Olivera">
									</div>
								</div>
							</div>
							<div class="row mx-0 p-0">
								<div class="col-md-4 pr-1">
									<div class="form-s">
										<label class="label-s t-md m-0">Bank Name</label>
										<input type="text" name="text" class="input-view-s w-100 bold" placeholder="Olivera">
									</div>
								</div>
								<div class="col-md-4 pr-1">
									<div class="form-s">
										<label class="label-s t-md m-0">Bank Account No.</label>
										<input type="text" name="text" class="input-view-s w-100 bold" placeholder="Olivera">
									</div>
								</div>
							</div>
						</div>
					</form>
				</div>
			</div>
			<!-- End of Position Details -->
		</div>
	</div>
</div>
</template>