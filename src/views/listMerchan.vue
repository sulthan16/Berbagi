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
      <template v-if="!state.isDetail">
        <div class="col-md-4" v-for="(value, index) in umkm" :key="index">
          <div class="card">
            <img
              class="card-img-top img-responsive"
              :src="value.image+'?w=530&h=300'"
              alt="Card image cap"
            >
            <div class="card-body">
              <h4 class="card-title">{{value.nama_umkm}}</h4>
              <p class="card-text">{{value.deskripsi}}</p>
              <a
                href="javascript:void(0)"
                class="btn btn-primary"
                @click="goToDetail(value)"
              >Lihat Detail</a>
            </div>
          </div>
        </div>
      </template>
      <div class="card mb-4" v-else>
        <img class="card-img-top" :src="detail.image+'?w=730&h=300'" alt="Card image cap">
        <div class="card-body">
          <h4 class="card-title">{{detail.nama_umkm}}</h4>
          <gtTabs>
            <gtTab title="Overview">
              Investasi pada proyek Properti ini investor bisa berinvestasi ke proyek dari developer dan investor mendapat bagi hasil melalui platform InvesProperti.
              <br>Nama proyek adalah Serenity Residence di Bandung.
              <br>Proyeksi omset sekitar 8 Miliar, dan keuntungan sekitar 1.3 Miliar. Investor akan mendapat bagi hasil sebesar 25% dari Net Profit. Jadi dalam 12 bulan, investasi Anda akan berkembang sekitar 26%. Akan dibuka slot pendanaan untuk investor melalui InvesProperti sebesar 200 juta, dengan 1 slot sebesar 10 juta rupiah. Sisa pendanaan akan diisi oleh investor instansi. Investor di InvesProperti.id bisa membeli sebanyak slot yang diiinginkan, dan akan mendapatkan bagi hasil sesuai dengan jumlah slot yang dia beli.
              <br>Tim developer proyek ini memiliki track record yang bagus, memiliki portofolio 10 proyek di Bandung Raya dengan success rate 100%.
              <br>Untuk info detil proposal/prospectus nya bisa di download di tab dokumen
              <br>
              <b>Kontak InvesProperti</b>
              <br>Jika ada pertanyaan terkait properti dan skema Investasi
              <br>silahkan hubungi kontak kami
              <br>Phone/Whatsapp: 085722159221
              <br>Apabila kesulitas berinvestasi melalui website, bisa juga bertemu kami secara langsung
            </gtTab>
            <gtTab title="Lokasi">b</gtTab>
            <gtTab title="Proyeksi Profit">b</gtTab>
          </gtTabs>
        </div>
        <a href="javascript:void(0)" class="btn btn-primary" @click="goToDetail()">Kembali</a>
      </div>
    </div>
    <div v-if="!state.isLoading" class="pagination justify-content-center mb-4">
      <Paginate :page="currentPage" :totalPage="total" @onChangePage="updatePagination"/>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import { gtTab, gtTabs } from "@/components/gtTabs";
import Paginate from "@/components/paginate/index";
export default {
  name: "home",
  components: {
    Paginate,
    gtTab,
    gtTabs
  },
  mounted() {
    this.allPost();
  },
  data() {
    return {
      state: {
        isLoading: false,
        isDetail: false
      },
      umkm: [],
      detail: {},
      currentPage: 1,
      total: 1,
      selected: "Belum Terpenuhi"
    };
  },
  methods: {
    async allPost() {
      try {
        this.state = {
          isLoading: true,
          isDetail: false
        };
        const findAll = {
          name: "posts",
          options: [
            {
              limit: [0, 5],
              where: [{ condition: ["draft", "=", false] }],
              sortBy: ["_id", "desc"]
            }
          ]
        };
        const response = await axios.post("page/home/showDataUmkm", findAll);
        this.umkm = response.data.data;
        this.total = Math.ceil(response.data.data.length / 5);
        this.state = {
          isLoading: false,
          isDetail: false
        };
      } catch (e) {
        console.log(e);
      }
    },
    updatePagination() {
      console.log("hallo");
    },
    onSelected(name) {
      this.selected = name;
    },
    goToDetail(value) {
      this.state.isDetail = !this.state.isDetail;
      this.detail = value;
    }
  }
};
</script>

