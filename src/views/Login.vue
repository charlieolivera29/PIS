<template>
<div id="login" class="d-flex" style="height: 100vh; background-color: #2A3F54">
  <div class="container align-self-center">
    <div class="row justify-content-center">
      <div class="col-xl-7 col-lg-12 col-md-9">
          <div class="p-0" style="background-color: rgba(42, 63, 84, 0.8);">
            <!-- Nested Row within Card Body -->
            <div class="row justify-content-center">
              <div class="col-xl-6 b-right-warning d-flex justify-content-center">
                <img class="align-self-center" src="../assets/img/pis_caimito_apps_logo.jpg" width="220" height="120">
              </div>
              <div class="col-lg-6 pl-5 py-2">
                <form class="user">
                  <div class="form-s">
                    <input type="text" class="input-edit-s w-100" id="exampleInputUsername" placeholder="Enter Username">
                  </div>
                  <div class="form-s">
                    <input type="password" class="input-edit-s w-100" placeholder="Password">
                  </div>
                  <div class="form-group">
                    <div class="custom-control custom-checkbox small">
                      <input type="checkbox" class="custom-control-input" id="customCheck">
                      <label class="custom-control-label text-white" for="customCheck">Remember Me</label>
                    </div>
                  </div>
                  <a @click="login()" class="btn btn-warning text-white border-0 btn-block">
                    Login
                  </a>
                <div class="float-right">
                  <a class="small text-white" href="forgot-password.html">Forgot Password?</a>
                </div>
                </form>
              </div>
            </div>
          </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      msg: 'Login to your PASAHOD account!'
    }
  },
  methods : {
    login(){
      this.$router.push({name: 'Dashboard'})
    }
  }
};
</script>