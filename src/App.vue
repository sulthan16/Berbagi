<template>
  <div id="app">
    <Header/>
    <div
      style="position: relative; width: 100%; height: 71.8125px; display: block; vertical-align: baseline; float: none;"
    ></div>
    <navbar/>
    <div class="page-wrapper" style="min-height: 586px;">
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
