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
			<!-- Personal Information -->
			<div class="card shadow-sm mb-2">
				<div class="card-body">
					<form class="user">
						<div class="d-flex flex-row">
							<div class="p-0">
								<h4>Basic Information</h4>
							</div>
							<div class="p-0 ml-auto">
								<i class="fas fa-fw fa-edit text-primary"></i>
							</div>
						</div>
						<div class="body">
							<div class="row mx-0 p-0 mt-3">
								<div class="col-md-3 pt-1">
									<label class="label-s t-md">Employee Code</label>
								</div>
								<div class="col-md-9">
									<input type="text" name="text" class="input-view-s w-100 bold" placeholder="ZGH0003">
								</div>
							</div>
							<div class="row mx-0 p-0">
								<div class="col-md-3 pt-1">
									<label class="label-s t-md">Suffix Name</label>
								</div>
								<div class="col-md-9">
									<input type="text" name="text" class="input-view-s w-100 bold" placeholder="N/A">
								</div>
							</div>
							<div class="row mx-0 p-0">
								<div class="col-md-3 pt-1">
										<label class="label-s t-md">First Name</label>
								</div>
								<div class="col-md-9">
										<input type="text" name="text" class="input-view-s w-100 bold" placeholder="Charlie">
								</div>
							</div>
							<div class="row mx-0 p-0">
								<div class="col-md-3 pt-1">
										<label class="label-s t-md">Middle Name</label>
								</div>
								<div class="col-md-9">
										<input type="text" name="text" class="input-view-s w-100 bold" placeholder="Ching">
								</div>
							</div>
							<div class="row mx-0 p-0">
								<div class="col-md-3 pt-1">
										<label class="label-s t-md">Last Name</label>
								</div>
								<div class="col-md-9">
										<input type="text" name="text" class="input-view-s w-100 bold" placeholder="Olivera">
								</div>
							</div>
							<div class="row mx-0 p-0">
								<div class="col-md-3 pt-1">
										<label class="label-s t-md">Company Email</label>
								</div>
								<div class="col-md-9">
										<input type="email" name="text" class="input-view-s w-100 bold" placeholder="ccolivera@caimitoapps.com">
								</div>
							</div>
							<div class="row mx-0 p-0">
								<div class="col-md-3 pt-1">
										<label class="label-s t-md">Personal Email</label>
								</div>
								<div class="col-md-9">
										<input type="email" name="text" class="input-view-s w-100 bold" placeholder="jhachie029@gmail.com">
								</div>
							</div>
						</div>
					</form>
				</div>
			</div>
			<!-- End of Personal Information -->

			<!-- Educational Background -->
			<div class="card shadow-sm mb-2">
				<div class="card-body">
					<form class="user">
						<div class="d-flex flex-row">
							<div class="p-0">
								<h4>Educational Background</h4>
							</div>
							<div class="p-0 ml-auto">
								<i class="fas fa-fw fa-edit text-primary"></i>
							</div>
						</div>
						<div class="body">
							<ul class="list-group">
								<li class="list-group-item">
									<div class="form-s">
										<label class="label-s t-md m-0">Institute/Univerity Name</label>
										<input type="text" name="text" class="input-view-s w-100 bold">
									</div>
									<div class="form-s">
										<label class="label-s t-md m-0">Institute/Univerity Location</label>
										<input type="text" name="text" class="input-view-s w-100 bold">
									</div>
									<div class="form-s">
										<label class="label-s t-md m-0">Graduation Date</label>
										<input type="text" name="text" class="input-view-s w-100 bold">
									</div>
								</li>
							</ul>
						</div>
					</form>
				</div>
			</div>
			<!-- End of Educational Background -->

			<!-- Additional Information -->
			<div class="card shadow-sm mb-4">
				<div class="card-body">
					<form class="user">
						<div class="d-flex flex-row">
							<div class="p-0">
								<h4>Additional Information</h4>
							</div>
							<div class="p-0 ml-auto">
								<i class="fas fa-fw fa-edit text-primary"></i>
							</div>
						</div>
						<div class="body">
							<div class="row mx-0 p-0 mt-3">
								<div class="col-md-3 pr-1">
									<label class="label-s t-md">Religion</label>
								</div>
								<div class="col-md-9">
									<input type="text" name="text" class="input-view-s w-100 bold">
								</div>
							</div>
							<div class="row mx-0 p-0">
								<div class="col-md-3 pr-1">
									<label class="label-s t-md">Marital Status</label>
								</div>
								<div class="col-md-9">
									<input type="text" name="text" class="input-view-s w-100 bold">
								</div>
							</div>
							<div class="row mx-0 p-0">
								<div class="col-md-3 pr-1">
										<label class="label-s t-md">Gender</label>
								</div>
								<div class="col-md-9">
										<input type="text" name="text" class="input-view-s w-100 bold">
								</div>
							</div>
							<div class="row mx-0 p-0">
								<div class="col-md-3 pr-1">
										<label class="label-s t-md">Height</label>
								</div>
								<div class="col-md-9">
										<input type="text" name="text" class="input-view-s w-100 bold">
								</div>
							</div>
							<div class="row mx-0 p-0">
								<div class="col-md-3 pr-1">
										<label class="label-s t-md">Weight</label>
								</div>
								<div class="col-md-9">
										<input type="text" name="text" class="input-view-s w-100 bold">
								</div>
							</div>
							<div class="row mx-0 p-0">
								<div class="col-md-3 pr-1">
										<label class="label-s t-md">Birth Date</label>
								</div>
								<div class="col-md-9">
										<input type="text" name="text" class="input-view-s w-100 bold">
								</div>
							</div>
							<div class="row mx-0 p-0">
								<div class="col-md-3 pr-1">
										<label class="label-s t-md">Birth Place</label>
								</div>
								<div class="col-md-9">
										<input type="text" name="text" class="input-view-s w-100 bold">
								</div>
							</div>
							<div class="row mx-0 p-0">
								<div class="col-md-3 pr-1">
										<label class="label-s t-md">Present Address</label>
								</div>
								<div class="col-md-9">
										<input type="text" name="text" class="input-view-s w-100 bold">
								</div>
							</div>
							<div class="row mx-0 p-0">
								<div class="col-md-3 pr-1">
										<label class="label-s t-md">Province Address</label>
								</div>
								<div class="col-md-9">
										<input type="text" name="text" class="input-view-s w-100 bold">
								</div>
							</div>
						</div>
					</form>
				</div>
			</div>
			<!-- End of Additional Information -->

		</div>
	</div>
</div>
</template>