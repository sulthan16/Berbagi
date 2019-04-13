<template>
  <div id="app">
    <Header :onClickMenu="expandMenu" :state="state"/>
    <div
      v-if="!state.isMobile"
      style="position: relative; width: 100%; height: 71.8125px; display: block; vertical-align: baseline; float: none;"
    ></div>
    <navbar/>
    <div class="page-wrapper" style="min-height: 586px;">
      <router-view/>
    </div>
    <footer class="footer">© 2018 Berbagi.com</footer>
  </div>
</template>
<script>
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
export default {
  components: {
    Header,
    Navbar
  },
  data() {
    return {
      window: {
        width: 0,
        height: 0
      },
      state: {
        isExpand: false,
        isMobile: false
      }
    };
  },
  created() {
    window.addEventListener("resize", this.handleResize);
    this.handleResize();
  },
  destroyed() {
    window.removeEventListener("resize", this.handleResize);
  },
  mounted() {
    this.mobileCondition();
  },
  methods: {
    handleResize() {
      this.window.width = window.innerWidth;
      this.window.height = window.innerHeight;
    },
    mobileCondition() {
      if (this.window.width <= 768) {
        this.state.isExpand = true;
        this.state.isMobile = true;
        this.$store.commit("mobileLoaded");
        document.body.className = "fix-header card-no-border mini-sidebar";
      }
    },
    expandMenu() {
      this.state.isExpand = !this.state.isExpand;
      if (this.state.isExpand) {
        document.body.className = "fix-header mini-sidebar card-no-border";
      } else {
        document.body.className =
          "fix-header card-no-border mini-sidebar show-sidebar";
      }
    }
  }
};
</script>

<style lang="scss">
@import "./assets/bootstrap/css/bootstrap.min.css";
@import "./assets/css/style.css";
@import "./assets/css/colors/default.css";
@import "~placeholder-loading/src/scss/placeholder-loading";
</style>
