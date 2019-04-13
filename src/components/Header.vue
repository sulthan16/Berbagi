<template>
  <header class="topbar is_stuck" style="position: fixed; top: 0px; width: 100%;">
    <nav class="navbar top-navbar navbar-expand-md navbar-light">
      <!-- ============================================================== -->
      <!-- Logo -->
      <!-- ============================================================== -->
      <div class="navbar-header">
        <router-link class="navbar-brand" to="/">
          <!--End Logo icon -->
          <!-- Logo text -->
          <span>
            <!-- dark Logo text -->
            <img
              v-if="!isMobile"
              src="@/assets/images/logo-text.png"
              alt="homepage"
              class="dark-logo"
            >
            <img v-else src="@/assets/images/logo-icon.png" alt="homepage" class="dark-logo">
          </span>
        </router-link>
      </div>
      <!-- ============================================================== -->
      <!-- End Logo -->
      <!-- ============================================================== -->
      <div class="navbar-collapse">
        <!-- ============================================================== -->
        <!-- toggle and nav items -->
        <!-- ============================================================== -->
        <ul class="navbar-nav mr-auto mt-md-0">
          <!-- This is  -->
          <li class="nav-item">
            <a
              @click="onClickMenu"
              class="nav-link nav-toggler hidden-md-up text-muted waves-effect waves-dark"
            >
              <i :class="state.isExpand ? 'ti-menu': 'ti-close'"></i>
            </a>
          </li>
          <li class="nav-item">
            <a
              class="nav-link sidebartoggler hidden-sm-down text-muted waves-effect waves-dark"
              href="javascript:void(0)"
            >
              <i class="icon-arrow-left-circle"></i>
            </a>
          </li>
          <!-- ============================================================== -->
          <!-- Comment -->
          <!-- ============================================================== -->
        </ul>
        <!-- ============================================================== -->
        <!-- User profile and search -->
        <!-- ============================================================== -->
        <ul class="navbar-nav my-lg-0">
          <!-- <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle text-muted waves-effect waves-dark"
              href
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <img src="@/assets/images/users/1.jpg" alt="user" class="profile-pic">
            </a>
            <div class="dropdown-menu dropdown-menu-right animated flipInY">
              <ul class="dropdown-user">
                <li>
                  <div class="dw-user-box">
                    <div class="u-img">
                      <img src="@/assets/images/users/1.jpg" alt="user">
                    </div>
                    <div class="u-text">
                      <h4>Steave Jobs</h4>
                      <p class="text-muted">varun@gmail.com</p>
                      <a href="profile.html" class="btn btn-rounded btn-danger btn-sm">View Profile</a>
                    </div>
                  </div>
                </li>
                <li role="separator" class="divider"></li>
                <li>
                  <a href="#">
                    <i class="ti-user"></i> My Profile
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="ti-wallet"></i> My Balance
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="ti-email"></i> Inbox
                  </a>
                </li>
                <li role="separator" class="divider"></li>
                <li>
                  <a href="#">
                    <i class="ti-settings"></i> Account Setting
                  </a>
                </li>
                <li role="separator" class="divider"></li>
                <li>
                  <a href="#">
                    <i class="fa fa-power-off"></i> Logout
                  </a>
                </li>
              </ul>
            </div>
          </li>-->
          <li class="nav-item m-t-10">
            <img alt="ojk logo" src="@/assets/LogoOJK.png" width="120">
          </li>
          <li class="nav-item m-t-15 m-r-10">
            <img alt="ojk logo" src="@/assets/pse-certified.png" width="50">
          </li>
          <li class="nav-item">
            <button class="btn btn-sm btn-primary m-t-20">Login</button>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle text-muted waves-effect waves-dark"
              href
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <i class="flag-icon flag-icon-id"></i>
            </a>
            <div class="dropdown-menu dropdown-menu-right animated bounceInDown">
              <a class="dropdown-item" href="#">
                <i class="flag-icon flag-icon-id"></i> Indonesia
              </a>
              <a class="dropdown-item" href="#">
                <i class="flag-icon flag-icon-fr"></i> English
              </a>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: "Header-menu",
  props: {
    onClickMenu: {
      required: true,
      type: Function
    },
    state: {
      required: false,
      type: Object
    }
  },
  computed: {
    isMobile() {
      return this.$store.state.isMobile;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
