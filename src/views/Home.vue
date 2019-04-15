<template>
  <div>
    <div class="jumbotron" v-if="!isLogin">
      <div class="row">
        <div class="col-md-9 col-sm-12 pull-left">
          <h1>Assalamualaikum wr wb.</h1>
          <p>Semua orang bisa berinvestasi dan Beramal membantu UMKM muslim untuk merajai pasar Indonesia</p>
        </div>
        <div class="col-md-3 col-sm-12 pull-right">
          <div class="justify-content-center">
            <img alt="Vue logo" src="@/assets/logo.png">
          </div>
        </div>
      </div>
    </div>
    <div class="jumbotron" v-else>
      <div class="row">
        <div class="col-md-9 col-sm-12 pull-left">
          <h1>Assalamualaikum wr wb.</h1>
          <p>Hai Anda Sedang Login</p>
        </div>
        <div class="col-md-3 col-sm-12 pull-right">
          <div class="justify-content-center">
            <img alt="Vue logo" src="@/assets/logo.png">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "home",
  computed: {
    isLogin() {
      return this.$store.state.auth.isLogged;
    }
  }
};
</script>
<style scoped>
.background {
  background-image: url("../assets/images/background/error-bg.jpg");
  background-repeat: no-repeat;
  background-position: center bottom;
  background-size: 100% auto;
}
</style>
>

</style>
