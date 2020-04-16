<template>
<div id="createemployee">
	<div id="wrapper">
		<SideBar/>
		<div id="content-wrapper" class="d-flex flex-column">
			<div id="content">
			<TopBar/>
				<div class="container-fluid">
					<div class="card">
						<div class="card-header bg-white py-2">
							<span class="m-0 font-weight-bold t-lg t-primary">Employee</span><span class="t-lg t-dimgray font-weight-bold"> / Create</span>
						</div>
					</div>
					<Wizard/>
				</div>
			</div>
		</div>
	</div>
</div>
</template>

<script>
import SideBar from '@/components/SideBar.vue';
import TopBar from '@/components/TopBar.vue';
import Wizard from '@/components/EmployeeWizard.vue';

export default{
	name: 'CreateEmployee',
	components: {
		SideBar,
		TopBar,
		Wizard
	}
};
</script>