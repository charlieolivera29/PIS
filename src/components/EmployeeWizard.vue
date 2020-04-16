<template>
	<div id="employee">
		<form-wizard @on-complete="onComplete()" shape="tab" color="#2ACB91" ref="wizard">
			<h5 slot="title" hidden></h5>
			<tab-content title="Basic Information" icon="fa fa-id-card-alt" :before-change="beforeTabSwitch">
				<BasicInfo/>
			</tab-content>
			<tab-content title="Educational Background" icon="fa fa-user-graduate" :before-change="beforeTabSwitch">
				<EducationalBackground/>
			</tab-content>
			<tab-content title="Additional Information" icon="fa fa-portrait" :before-change="beforeTabSwitch">
				<OtherInfo/>
			</tab-content>
			<tab-content title="Job Position" icon="fa fa-user-tie" :before-change="beforeTabSwitch">
				<JobPosition/>
			</tab-content>
			<tab-content title="Payroll Details" icon="fa fa-wallet" :before-change="beforeTabSwitch">
				<PayrollDetails/>
			</tab-content>
			<tab-content title="Upload Image" icon="fa fa-image" :before-change="beforeTabSwitch">
				<UploadImage/>
			</tab-content>
            <button class="btn btn-success btn-sm py-1 px-5" slot="finish"> Save</button>
            <button class="btn btn-success btn-sm py-1 px-5" slot="next"> Next</button>
            <button class="btn btn-success btn-sm py-1 px-5" slot="prev"> Back</button>
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
import UploadImage from '@/components/NewEmployee/UploadImage.vue';

export default{
	name: 'CreateEmployee',
	components: {  
		FormWizard,
		TabContent,
		BasicInfo,
		EducationalBackground,
		OtherInfo,
		JobPosition,
		PayrollDetails,
		UploadImage
	},
	methods: {
		onComplete: function(){
			alert('Yay. Done!');
			this.$router.push({name: 'Employees'})
		},
		beforeTabSwitch: function(){
			$(window).scrollTop(0);
			return true;
		}
	},
	mounted() {
		var counted = 0;

		$('#viewAll').on('show.bs.modal', function() {
			$('#view').append($('#basicinfo').html());
		});

		var wizard = this.$refs.wizard
		wizard.maxStep = wizard.tabs.length - 1
		wizard.tabs.forEach((tab)=>{
			tab.checked = true
		});
	}
};
</script>
