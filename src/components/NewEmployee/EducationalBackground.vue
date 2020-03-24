<template>
<div class="card shadow mb-4">
	<div class="card-header py-2 d-flex flex-row align-items-center justify-content-between"></div>
	<div class="card-body">
		<form>
			<table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
			<tr>
			<th><input class='check_all' type='checkbox' @click="select_all()" id="check_all" /><label class="pl-3" for="check_all">Educational Background</label></th>
			</tr>
			</table>

			<button type="button" class='delete btn btn-danger btn-sm mr-2'>Delete</button>
			<button type="button" class='addmore btn btn-success btn-sm'>Add More</button>
		</form>
	</div>

	<div id="educational_background" hidden="true">
		<div class="row m-0 p-0 mt-2">
			<div class="col-md-6 pr-1">
				<div class="form-s">
					<label class="label-s t-primary bold">Institute/University Name</label>
					<input type="text" name="institute_name[]" class="input-edit-s w-100" placeholder="Enter Institute Name">
				</div>
			</div>
			<div class="col-md-6 px-1">
				<div class="form-s">
					<label class="label-s t-primary bold">Institute/University Location</label>
					<input type="text" name="institute_location[]" class="input-edit-s w-100" placeholder="Enter Institute Location">
				</div>
			</div>
		</div>
		
		<div class="row m-0 p-0 mt-2">
			<div class="col-md-4 pr-1">
				<div class="form-s">
					<label class="label-s t-primary bold">Graduation Date</label>
					<input type="text" name="graduation_date[]" class="input-edit-s w-100">
				</div>
			</div>
		</div>

		<div class="row m-0 p-0 mt-2">
			<div class="col-md-4 pr-1">
				<div class="form-s">
					<label class="label-s t-primary bold">Qualification</label>
					<select class="input-select-s w-100" name="qualification[]">
						<option value="" disabled selected>Select Qualification</option>
						<option value="Sr.">Sr.</option>
						<option value="Jr.">Jr.</option>
						<option value="III">III</option>
						<option value="IV">IV</option>
						<option value="V">V</option>
					</select>
				</div>
			</div>
		</div>

		<div class="row m-0 p-0 mt-2">
			<div class="col-md-4 pr-1">
				<div class="form-s">
					<label class="label-s t-primary bold">Major</label>
					<input type="text" name="major[]" class="input-edit-s w-100" placeholder="Enter Major">
				</div>
			</div>
		</div>

		<div class="row m-0 p-0 mt-2">
			<div class="col-md-12 pr-1">
				<div class="form-s">
					<label class="label-s t-primary bold">Other Information</label>
					<textarea rows="3" name="other_information[]" class="input-area-s w-100"></textarea>
				</div>
			</div>
		</div>
	</div>
</div>
</template>

<script src="../assets/vendor/jquery/jquery.min.js"></script>

<script>
export default{
	name: 'EducaitonalBackground',
	data() {
		return {
			i: 0
		}
	},
	mounted() {	
		$(document).ready(function() {
			var i=2;
			var j=0;

			$(".addmore").on('click',function(){
				var data = $('#educational_background').html();
				var input = '<input type="checkbox" class="case" id="index' + j + '"/><label class="pl-3" for="index'+j+'"> Educaitonal Background '+j+'</label>'

				
				
				var append_item = "<tr><td>" + input + "<br>" + data + "</td></tr>";
				$('table').append(append_item);

				i++;
				j++;
			});

			$(".delete").on('click', function() {
				$('.case:checkbox:checked').parents("tr").remove();
			});

			$('#dataTable').DataTable();
		});
	},
	methods: {
		select_all() {
			$('input[class=case]:checkbox').each(function(){ 
				if($('input[class=check_all]:checkbox:checked').length == 0){ 
					$(this).prop("checked", false); 
				} else {
					$(this).prop("checked", true); 
				} 
			});
		}
	}
};
</script>