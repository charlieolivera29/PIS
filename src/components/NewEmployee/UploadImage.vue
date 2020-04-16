<template>
<div id="upload">
  <div class="card shadow-sm mb-4">
    <div class="card-body">
      <div v-if="!image">
        <h2>Select an image</h2>
        <img src="../../assets/img/default.jpg" class="rounded-circle img-upload" />
        <span class="btn btn-success btn-sm btn-file">
        <i class="fas fa-fw fa-image text-white"></i> Choose Photo<input type="file" @change="onFileChange">
        </span>
        <br>
        <br>
        <center>
          <p class="text-success">Almost done! Upload a photo of the employee!</p>
        </center>
      </div>
      <div v-else>
        <h2>Select an image</h2>
        <img :src="image" class="rounded-circle img-upload" />
        <span class="btn btn-success btn-sm btn-file">
        <i class="fas fa-fw fa-image text-white"></i> Change Photo<input type="file" @change="onFileChange">
        </span>
        <br>
        <br>
        <center>
          <p class="text-success">Almost done! Please review all the details before saving!</p>
        </center>
      </div>
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