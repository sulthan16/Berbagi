<template>
  <div id="app">
    <Header :onClickMenu="expandMenu" :state="state"/>
    <div
      v-if="!state.isMobile"
      style="position: relative; width: 100%; height: 71.8125px; display: block; vertical-align: baseline; float: none;"
    ></div>
    <navbar :onClickMenu="exitMenu"/>
    <div class="page-wrapper" style="min-height: 586px;">
      <router-view/>
    </div>
    <div id="wh-widget-send-button-wrapper" class="wh-widget-send-button-wrapper wh-widget-right">
      <div
        class="wh-widget-hello-popup-wrapper wh-popup-right wh-hide popup-slide popup-slide-in"
        id="wh-popup-hello"
      >
        <div class="wh-widget-hello-popup">
          <div class="wh-widget-hello-popup-close" wh-click="closeHelloPopup">
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
              ></path>
              <path d="M0 0h24v24H0z" fill="none"></path>
            </svg>
          </div>
          <div class="wh-widget-hello-popup-content">
            <div class="wh-widget-hello-popup-content-logo">
              <img wh-src="logoUrl" alt>
            </div>
            <div class="wh-widget-hello-popup-content-text" wh-click="showMessengers">
              <a wh-href="href" wh-target="target">
                <div wh-html-br="text"></div>
              </a>
            </div>
            <div class="wh-clear"></div>
          </div>

          <div class="wh-messengers wh-hide" wh-multi-class="{'wh-hide': '!showMessengersIcons'}">
            <ul wh-html-element="buttons"></ul>
          </div>
        </div>
      </div>

      <div id="popup-placement" class="popup-slide"></div>
      <div
        id="wh-call-to-action"
        :class="onHover ?'wh-animation-out wh-hide':'wh-animation-in'"
        wh-click="clickOnCallToAction"
        style="top: 22px;"
      >
        <a wh-href="href" wh-target="target" href="javascript:void(0);">
          <div class="wh-call-to-action-content" wh-html-unsafe="text">Ada pertanyaan? Hubungi Kami</div>
        </a>
      </div>
      <div id="wh-widget-send-button-wrapper-list" class="wh-widget-send-button-wrapper-list">
        <a @mouseover="changeAnimation" @mouseleave="hideAnimation" class="wh-widget-button wh-widget-button-activator" href="javascript:void(0);">
          <div class="wh-widget-button-icon wh-messenger-bg-whatsapp">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                viewBox="-9 -10 41 44"
                class="wh-messenger-svg-close wh-svg-close"
              >
                <path
                  d=" M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
                  fill-rule="evenodd"
                ></path>
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 32 32"
                class="wh-messenger-svg-whatsapp wh-svg-icon"
              >
                <path
                  d=" M19.11 17.205c-.372 0-1.088 1.39-1.518 1.39a.63.63 0 0 1-.315-.1c-.802-.402-1.504-.817-2.163-1.447-.545-.516-1.146-1.29-1.46-1.963a.426.426 0 0 1-.073-.215c0-.33.99-.945.99-1.49 0-.143-.73-2.09-.832-2.335-.143-.372-.214-.487-.6-.487-.187 0-.36-.043-.53-.043-.302 0-.53.115-.746.315-.688.645-1.032 1.318-1.06 2.264v.114c-.015.99.472 1.977 1.017 2.78 1.23 1.82 2.506 3.41 4.554 4.34.616.287 2.035.888 2.722.888.817 0 2.15-.515 2.478-1.318.13-.33.244-.73.244-1.088 0-.058 0-.144-.03-.215-.1-.172-2.434-1.39-2.678-1.39zm-2.908 7.593c-1.747 0-3.48-.53-4.942-1.49L7.793 24.41l1.132-3.337a8.955 8.955 0 0 1-1.72-5.272c0-4.955 4.04-8.995 8.997-8.995S25.2 10.845 25.2 15.8c0 4.958-4.04 8.998-8.998 8.998zm0-19.798c-5.96 0-10.8 4.842-10.8 10.8 0 1.964.53 3.898 1.546 5.574L5 27.176l5.974-1.92a10.807 10.807 0 0 0 16.03-9.455c0-5.958-4.842-10.8-10.802-10.8z"
                  fill-rule="evenodd"
                ></path>
              </svg>
            </div>
          </div>
          <div class="mes-us">WhatsApp</div>
          <div class="clear"></div>
        </a>
        <a
          class="wh-widget-send-button-get-button"
          href="http://whatshelp.io/widget/?utm_campaign=multy_widget&amp;utm_medium=widget&amp;utm_source=invesproperti.id"
          target="_blank"
        >Get Button</a>
        <div class="clear"></div>
      </div>
      <div class="clear"></div>
    </div>
    <footer class="footer">© 2019 Berbagi.com</footer>
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
      },
      onHover: false
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
    changeAnimation(){
      this.onHover = true
    },
    hideAnimation(){
      this.onHover = false
    },
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
    },
    exitMenu(){
      this.state.isExpand = true;
      document.body.className = "fix-header mini-sidebar card-no-border";
    }
  }
};
</script>
<style scoped>
@import "./assets/css/iconWhatsapp.css";
</style>

<style lang="scss">
@import "./assets/bootstrap/css/bootstrap.min.css";
@import "./assets/css/style.css";
@import "./assets/css/colors/default.css";
@import "~placeholder-loading/src/scss/placeholder-loading";
</style>
