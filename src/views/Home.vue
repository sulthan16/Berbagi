<template>
  <div>
    <div class="jumbotron" v-if="isLogin">
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
    <div class="headers" v-else>
      <div class="overlay p-t-10">
        <img src="@/assets/images/logo-icon.png" alt="homepage" class="dark-logo">
        <h1>Lorem Ipsum</h1>
        <h3>Learn Amazing Lorem Ipsum</h3>
        <div class="container">
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
        </div>
        <router-link to="/daftar-umkm" class="btn btn-sm btn-primary m-b-20">Daftar UMKM</router-link>
      </div>
    </div>
    <gtTabs>
      <gtTab title="Detail Surat">a</gtTab>
      <gtTab title="Detail Surat">b</gtTab>
    </gtTabs>
  </div>
</template>

<script>
import { gtTab, gtTabs } from "@/components/gtTabs";
export default {
  name: "home",
  components: {
    gtTab,
    gtTabs
  },
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
.headers {
  width: 100%;
  background: #0178bc;
  background: -moz-linear-gradient(left, #318f94 0%, #5ec58c 100%);
  background: -webkit-linear-gradient(left, #318f94 0%, #5ec58c 100%);
  background: linear-gradient(to right, #318f94 0%, #5ec58c 100%);
  text-align: center;
  background-size: cover;
  background-attachment: fixed;
  position: relative;
  overflow: hidden;
  height: auto;
  border-radius: 0 0px 85% 85% / 15%;
}
</style>
