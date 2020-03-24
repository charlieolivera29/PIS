<template>
	<div id="employee">
		<form-wizard @on-complete="onComplete()" shape="tab" color="#1BBE83">
			<h5 slot="title">Create New Employee</h5>
			<tab-content title="Basic Info"
			icon="fa fa-id-card-alt">
				<BasicInfo id="basicinfo"/>
			</tab-content>
			<tab-content title="Educational Background"
			icon="fa fa-user-graduate">
				<EducationalBackground/>
			</tab-content>
			<tab-content title="Other Information"
			icon="fa fa-portrait">
				<OtherInfo id="otherinfo"/>
			</tab-content>
			<tab-content title="Job Position"
			icon="fa fa-user-tie">
				<JobPosition id="jobposition"/>
			</tab-content>
			<tab-content title="Payroll Details"
			icon="fa fa-wallet">
				<PayrollDetails id="payrolldetails"/>
			</tab-content>
		</form-wizard>

	<div class="modal" id="viewAll">
		<div class="modal-dialog modal-xl">
			<div class="modal-content">
				<div class="modal-header">
					<h5 class="modal-title label-md">Modal Heading</h5>
					<button type="button" class="close" data-dismiss="modal">&times;</button>
				</div>
				<div class="modal-body">
					<div id="view" class="container"></div>
				</div>
			</div>
		</div>
	</div>

	</div>
</template>

<script src="../assets/vendor/jquery/jquery.min.js"></script>

<script>
import {FormWizard, TabContent} from 'vue-form-wizard'
import 'vue-form-wizard/dist/vue-form-wizard.min.css'
import BasicInfo from '@/components/NewEmployee/BasicInfo.vue';
import EducationalBackground from '@/components/NewEmployee/EducationalBackground.vue';
import OtherInfo from '@/components/NewEmployee/OtherInfo.vue';
import JobPosition from '@/components/NewEmployee/JobPosition.vue';
import PayrollDetails from '@/components/NewEmployee/PayrollDetails.vue';

export default{
	name: 'CreateEmployee',
	components: {  
		FormWizard,
		TabContent,
		BasicInfo,
		EducationalBackground,
		OtherInfo,
		JobPosition,
		PayrollDetails
	},
	methods: {
		onComplete: function(){
			alert('Yay. Done!');
			this.$router.push({name: 'Employees'})
		}
	},
	mounted() {
		var counted = 0;

		$('#viewAll').on('show.bs.modal', function() {
			$('#view').append($('#basicinfo').html());
		});
	}
};
</script>
