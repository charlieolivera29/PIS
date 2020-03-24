<template>
<div id="login" class="bg-gradient-success" style="height: 100vh">
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-xl-4 col-lg-12 col-md-9" style="margin-top: 5%">
        <div class="card o-hidden border-0 shadow-lg my-5">
          <div class="card-body p-0" style="background-color: rgba(23, 166, 115, 0.8);">
            <!-- Nested Row within Card Body -->
            <div class="row justify-content-center">
              <div class="col-lg-12">
                <div class="p-5">
                  <div class="text-center">
                    <h1 class="h1 text-white mb-4">PASAHOD</h1>
                  </div>
                  <form class="user">
                    <div class="form-group">
                      <input type="email" class="form-control bg-white border-0 small" id="exampleInputUsername" aria-describedby="emailHelp" placeholder="Enter Username">
                    </div>
                    <div class="form-group">
                      <input type="password" class="form-control bg-white border-0 small" id="exampleInputPassword" placeholder="Password">
                    </div>
                    <!-- <div class="form-group">
                      <div class="custom-control custom-checkbox small">
                        <input type="checkbox" class="custom-control-input" id="customCheck">
                        <label class="custom-control-label" for="customCheck">Remember Me</label>
                      </div>
                    </div> -->
                    <a @click="login()" class="btn btn-primary text-white border-0 btn-block">
                      Login
                    </a>
                  </form>
                  <hr>
                  <div class="text-center">
                    <a class="small text-white" href="forgot-password.html">Forgot Password?</a>
                  </div>
                </div>
              </div>
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