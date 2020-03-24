<template>
<div id="upload">
  <div class="card shadow mb-4">
    <div class="card-header py-2 d-flex flex-row align-items-center justify-content-between"></div>
    <div class="card-body">
      <div v-if="!image">
        <h2>Select an image</h2>
        <span class="btn btn-primary btn-sm btn-file">
        Browse <input type="file" @change="onFileChange">
        </span>
      </div>
      <div v-else>
        <h5 class=""></h5>
        <img :src="image" class="rounded-circle img-upload" />
        <span class="btn btn-primary btn-sm btn-file">
        Change Image <input type="file" @change="onFileChange">
        </span>
      </div>
      <br>
      <center>
        <p class="text-success">Almost done! Please review all the details before saving!</p>
      </center>
    </div>
  </div>
</div>
</template>

<script src="../assets/vendor/jquery/jquery.min.js"></script>
<script type="text/javascript">
export default{
  data() {
    return {
      image: ''
    }
  },
  methods: {
    onFileChange(e) {
      var files = e.target.files || e.dataTransfer.files;
      if (!files.length)
        return;
      this.createImage(files[0]);
    },
    createImage(file) {
      // var image = new Image();
      var reader = new FileReader();
      var vm = this;

      reader.onload = (e) => {
        vm.image = e.target.result;
      };
      reader.readAsDataURL(file);
    },
    removeImage: function () {
      this.image = '';
    }
  }
};
</script>