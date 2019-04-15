<template>
  <div class="login-register">
    <div class="login-box card m-b-20">
      <div class="card-body">
        <form class="form-horizontal" v-if="isForgotPassword">
          <div class="form-group">
            <div class="col-xs-12">
              <h3>Lupa Password</h3>
              <p class="text-muted">Enter your Email and instructions will be sent to you!</p>
            </div>
          </div>
          <div class="form-group">
            <div class="col-xs-12">
              <input class="form-control" type="text" required placeholder="Email">
            </div>
          </div>
          <div class="form-group p-b-10">
            <div class="col-md-12">
              <a
                href="javascript:void(0)"
                id="to-recover"
                @click="forgotPwd"
                class="text-dark pull-right"
              >
                <i class="fa fa-arrow-left m-r-5"></i> Kembali
              </a>
            </div>
          </div>
          <div class="form-group text-center m-t-20">
            <div class="col-xs-12">
              <button
                class="btn btn-primary btn-lg btn-block text-uppercase waves-effect waves-light"
                type="submit"
              >Reset</button>
            </div>
          </div>
        </form>
        <form class="form-horizontal form-material" id="loginform" @submit.prevent="login" v-else>
          <h3 class="box-title m-b-20">{{isSignIn ? 'Masuk': 'Daftar'}}</h3>
          <div class="form-group" v-if="!isSignIn">
            <div class="col-xs-12">
              <input
                class="form-control"
                type="text"
                v-model="namaLengkap"
                required
                placeholder="Nama Lengkap"
              >
            </div>
          </div>
          <div class="form-group">
            <div class="col-xs-12">
              <input
                class="form-control"
                type="text"
                v-model="username"
                required
                placeholder="Username"
              >
            </div>
          </div>
          <div class="form-group p-b-20">
            <div class="col-xs-12">
              <input
                class="form-control"
                type="password"
                v-model="password"
                required
                placeholder="Password"
              >
            </div>
          </div>
          <div class="form-group">
            <div class="col-md-12">
              <a
                href="javascript:void(0)"
                id="to-recover"
                @click="forgotPwd"
                class="text-dark pull-right"
              >
                <i class="fa fa-lock m-r-5"></i> Forgot pwd?
              </a>
            </div>
          </div>
          <div class="form-group text-center m-t-20">
            <div class="col-xs-12">
              <button
                class="btn btn-info btn-lg btn-block text-uppercase waves-effect waves-light"
                type="submit"
              >{{isSignIn ? 'Masuk': 'Daftar'}}</button>
            </div>
          </div>
          <div class="form-group m-b-0">
            <div class="col-sm-12 text-center">
              <p>
                Belum Pernah Mendaftar Sebelumnya?
                <a
                  @click="onSignUp"
                  id="to-recover"
                  href="javascript:void(0)"
                >
                  <b>{{isSignIn ? 'Daftar' : 'Login'}}</b>
                </a>
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      isSignIn: true,
      username: "",
      password: "",
      namaLengkap: "",
      isForgotPassword: false
    };
  },
  methods: {
    onSignUp() {
      this.isSignIn = !this.isSignIn;
      this.isForgotPassword = false;
    },
    forgotPwd() {
      this.isForgotPassword = !this.isForgotPassword;
    },
    login() {
      if (!this.isSignIn) {
        this.daftar();
      } else {
        const credentials = {
          username: this.username,
          password: this.password
        };
        this.$store.dispatch("auth/login", credentials);
      }
    },
    async daftar() {
      try {
        const credentials = {
          idRole: "3",
          password: this.password,
          userName: this.username
        };
        const response = await await axios.post("page/home/daftar", credentials);
      } catch (e) {
        console.log(e);
      }
    }
  }
};
</script>

<style scoped>
@media only screen and (min-width: 1024px) {
  .login-register {
    padding: 2% !important;
    position: relative !important;
  }
}
</style>


