<template>
  <aside class="left-sidebar">
    <!-- Sidebar scroll-->
    <div class="scroll-sidebar">
      <!-- Sidebar navigation-->
      <nav class="sidebar-nav">
        <ul id="sidebarnav">
          <li class="nav-small-cap">PERSONAL</li>
          <li>
            <router-link class="has-arrow" to="/">
              <i class="mdi mdi-gauge"></i>
              <span class="hide-menu">Dashboard</span>
            </router-link>
          </li>
          <li>
            <router-link class="has-arrow" to="/daftar-umkm" aria-expanded="false">
              <i class="mdi mdi-view-list"></i>
              <span class="hide-menu">Daftar UMKM</span>
            </router-link>
          </li>
          <li>
            <router-link class="has-arrow" to="/FAQ" aria-expanded="false">
              <i class="mdi mdi-help-circle"></i>
              <span class="hide-menu">FAQ</span>
            </router-link>
          </li>
          <li>
            <router-link class="has-arrow" to="/About" aria-expanded="false">
              <i class="mdi mdi-account-multiple"></i>
              <span class="hide-menu">About</span>
            </router-link>
          </li>
          <li>
            <router-link class="has-arrow" to="/Blog" aria-expanded="false">
              <i class="mdi mdi-blogger"></i>
              <span class="hide-menu">Blog</span>
            </router-link>
          </li>
        </ul>
      </nav>
      <!-- End Sidebar navigation -->
    </div>
    <!-- End Sidebar scroll-->
  </aside>
</template>
<script>
export default {
  props: {
    state: {
      required: false,
      type: Object
    }
  }
};
</script>
