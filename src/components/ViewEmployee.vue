<template>
	<div id="employee">
		<form-wizard shape="tab" color="#1BBE83" :start-index="5" step-size="md" ref="wizard">
			<h5 slot="title">View Employee</h5>
			<tab-content title="Personal Information"
			icon="fa fa-id-card-alt" :before-change="beforeTabSwitch">
				<BasicInfo/>
			</tab-content>
			<tab-content title="Job Information"
			icon="fa fa-briefcase" :before-change="beforeTabSwitch">
				<JobPosition/>
			</tab-content>

            <button slot="finish" hidden="true"></button>
            <button slot="next" hidden="true"></button>
            <button slot="prev" hidden="true"></button>
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
import BasicInfo from '@/components/ViewEmployee/BasicInfo.vue';
// import EducationalBackground from '@/components/ViewEmployee/EducationalBackground.vue';
// import OtherInfo from '@/components/ViewEmployee/OtherInfo.vue';
import JobPosition from '@/components/ViewEmployee/JobPosition.vue';
// import PayrollDetails from '@/components/ViewEmployee/PayrollDetails.vue';

export default{
	name: 'ViewEmployee',
	components: {  
		FormWizard,
		TabContent,
		BasicInfo,
		JobPosition
	},
	methods: {
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
