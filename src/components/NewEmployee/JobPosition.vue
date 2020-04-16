<template>
<div class="card shadow-sm mb-4">
	<div class="card-body">
		<form class="user">
			<h3>Job Position</h3>
			<hr>
			<div class="row m-0 p-0 mt-3">
				<div class="col-md-12 pr-0">
					<div class="form-s">
						<label class="label-s t-md">Projects</label>
						<multiselect 
							v-model="value" 
							tag-placeholder="Add this as new tag" 
							placeholder="Select Projects" 
							label="name" 
							track-by="code" 
							open-direction="bottom"
							:options="options"
							:multiple="true" 
							:taggable="true" 
							@tag="addTag">
						</multiselect>
						<!-- <pre class="language-json"><code>{{ value  }}</code></pre> -->
					</div>
				</div>
			</div>
			<div class="row m-0 p-0 mt-2">

				<div class="col-md-6 pr-0">
					<div class="form-s">
						<label class="label-s t-md">Company Name</label>
						<select class="input-select-s w-100">
							<option value="" disabled selected>Select Company</option>
							<option value="Sr.">Sr.</option>
						</select>
					</div>
				</div>

				<div class="col-md-6 pr-0">
					<div class="form-s">
						<label class="label-s t-md">Department</label>
						<select class="input-select-s w-100">
							<option value="" disabled selected>Select Department</option>
							<option value="Sr.">Sr.</option>
						</select>
					</div>
				</div>

			</div>
			
			<div class="row m-0 p-0 mt-2">

				<div class="col-md-6 pr-0">	
					<div class="form-s">
						<label class="label-s t-md">Position Name</label>
						<input type="text" name="text" class="input-edit-s w-100">
					</div>
				</div>

				<div class="col-md-6 pr-0">
					<div class="form-s">
						<label class="label-s t-md">Report to</label>
						<select class="input-select-s w-100">
							<option value="" disabled selected>Select User</option>
							<option value="Sr.">Sr.</option>
						</select>
					</div>
				</div>
				
			</div>
		</form>
	</div>
</div>
</template>

<script src="../assets/vendor/jquery/jquery.min.js"></script>

<script>
import Vue from 'vue'
Vue.component('multiselect', Multiselect)
import Multiselect from 'vue-multiselect'
export default {
  components: {
    Multiselect
  },
  data () {
    return {
      value: [],
      options: [
        { name: 'Vue.js', code: 'vu' },
        { name: 'Javascript', code: 'js' },
        { name: '1.js', code: '1' },
        { name: '2', code: '2' },
        { name: '3.js', code: '3' },
        { name: '4', code: '4' },
        { name: '5.js', code: '5' },
        { name: 'Open 6', code: '6' }
      ]
    }
  },
  methods: {
    addTag (newTag) {
      const tag = {
        name: newTag,
        code: newTag.substring(0, 2) + Math.floor((Math.random() * 10000000))
      }
      this.options.push(tag)
      this.value.push(tag)
    }
  }
}
</script>