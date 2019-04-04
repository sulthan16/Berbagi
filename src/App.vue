<template>
  <div id="app">
    <div id="nav">
      <Header/>
      <navbar/>
    </div>
    <div class="page-wrapper">
      <div class="container-fluid">
        <router-view/>
      </div>
    </div>
  </div>
</template>
<script>
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
export default {
  components: {
    Header,
    Navbar
  }
};
</script>

<style lang="scss">
@import "./assets/bootstrap/css/bootstrap.min.css";
@import "./assets/css/style.css";
@import "./assets/css/colors/default.css";
</style>
