<template>
<div id="createemployee">
	<div id="wrapper">
		<SideBar/>
		<div id="content-wrapper" class="d-flex flex-column">
			<div id="content">
			<TopBar/>
				<div class="container-fluid">
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
import Wizard from '@/components/ViewEmployee.vue';

export default{
	name: 'ViewEmployee',
	components: {
		SideBar,
		TopBar,
		Wizard
	}
};
</script>