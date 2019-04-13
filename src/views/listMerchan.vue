<template>
  <div class="container-fluid">
    <div class="row page-titles">
      <div class="col-md-6 col-8 align-self-center">
        <h3 class="m-b-0 m-t-0">Daftar UMKM</h3>
      </div>
      <div class="col-md-6 col-4 align-self-center">
        <div class="dropdown pull-right m-r-10">
          <button
            class="btn btn-secondary dropdown-toggle"
            type="button"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >{{selected}}</button>
          <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <a
              class="dropdown-item"
              @click="onSelected('Belum Terpenuhi')"
              href="javascript:void(0)"
            >Belum Terpenuhi</a>
            <a
              class="dropdown-item"
              @click="onSelected('Sudah Terpenuhi')"
              href="javascript:void(0)"
            >Sudah Terpenuhi</a>
          </div>
        </div>
      </div>
    </div>
    <div class="row" v-if="state.isLoading">
      <div
        class="col-md-4 align-self-center"
        v-for="(value, index) in Array.from(Array(6).keys())"
        :key="index"
      >
        <div class="ph-item">
          <div class="ph-col-12">
            <div class="ph-picture"></div>
            <div class="ph-row">
              <div class="ph-col-4"></div>
              <div class="ph-col-8 empty"></div>
              <div class="ph-col-6"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row" v-else>
      <div class="col-md-4">
        <div class="card">
          <img
            class="card-img-top img-responsive"
            src="../assets/images/big/img1.jpg"
            alt="Card image cap"
          >
          <div class="card-body">
            <h4 class="card-title">Card title</h4>
            <p
              class="card-text"
            >Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="card">
          <img
            class="card-img-top img-responsive"
            src="../assets/images/big/img1.jpg"
            alt="Card image cap"
          >
          <div class="card-body">
            <h4 class="card-title">Card title</h4>
            <p
              class="card-text"
            >Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="card">
          <img
            class="card-img-top img-responsive"
            src="../assets/images/big/img1.jpg"
            alt="Card image cap"
          >
          <div class="card-body">
            <h4 class="card-title">Card title</h4>
            <p
              class="card-text"
            >Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      </div>
    </div>
    <div v-if="!state.isLoading" class="pagination justify-content-center mb-4">
      <Paginate :page="currentPage" :totalPage="total" @onChangePage="updatePagination"/>
    </div>
  </div>
</template>
<script>
import Paginate from "@/components/paginate/index";
export default {
  name: "home",
  components: {
    Paginate
  },
  data() {
    return {
      state: {
        isLoading: false
      },
      currentPage: 1,
      total: 1,
      selected: "Belum Terpenuhi"
    };
  },
  methods: {
    updatePagination() {
      console.log("hallo");
    },
    onSelected(name) {
      this.selected = name;
    }
  }
};
</script>

