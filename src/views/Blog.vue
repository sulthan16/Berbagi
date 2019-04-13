<template>
  <div class="container-fluid">
    <div class="row">
      <!-- Blog Entries Column -->
      <div class="col-md-8 justify-content-center" v-if="state.isLoading">
        <div class="col-md-12" v-for="(value, index) in Array.from(Array(6).keys())" :key="index">
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
      <div :class="['col-md-8',isMobile ? 'order-last':'']" v-else>
        <h1 class="my-4">Berita Terkini</h1>

        <!-- Blog Post -->

        <div class="card mb-4" v-if="state.isDetail">
          <img
            class="card-img-top"
            v-bind:src="detail.featuredImage+'?w=730&h=300'"
            alt="Card image cap"
          >
          <div class="card-body">
            <h2 class="card-title">{{detail.title}}</h2>
            <p class="card-text" v-html="detail.content"></p>
          </div>
          <div class="card-footer text-muted">Posted on {{formatDate(detail.createdAt)}}</div>
        </div>
        <div class="card mb-4" v-else v-for="(value, index) in blog.rows" :key="index">
          <img
            class="card-img-top"
            v-bind:src="value.featuredImage+'?w=730&h=300'"
            alt="Card image cap"
          >
          <div class="card-body">
            <h2 class="card-title">{{value.title}}</h2>
            <p class="card-text">{{value.description}}</p>
            <a href="#" class="btn btn-primary" @click="toDetail(value)">Read More →</a>
          </div>
          <div class="card-footer text-muted">Posted on {{formatDate(value.createdAt)}}</div>
        </div>
        <div class="pagination justify-content-center mb-4">
          <Paginate :page="currentPage" :totalPage="total" @onChangePage="updatePagination"/>
        </div>
      </div>
      <!-- Sidebar Widgets Column -->
      <div class="col-md-4 justify-content-center" v-if="state.isLoading">
        <div class="col-md-12" v-for="(value, index) in Array.from(Array(1).keys())" :key="index">
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
      <div :class="['col-md-4',isMobile ? 'order-first':'']" v-else>
        <!-- Search Widget -->
        <div class="card my-4">
          <h5 class="card-header">Search</h5>
          <div class="card-body">
            <form @submit.prevent="searchPost(searchData)">
              <div class="input-group">
                <input
                  type="text"
                  v-model="searchData "
                  class="form-control"
                  placeholder="Search for..."
                >
                <span class="input-group-btn">
                  <button class="btn btn-secondary" type="submit">Go!</button>
                </span>
              </div>
            </form>
          </div>
        </div>

        <!-- Categories Widget -->
        <div class="card my-4">
          <h5 class="card-header">Categories</h5>
          <div class="card-body">
            <div class="row">
              <div class="col-lg-12">
                <ul class="list-unstyled mb-0">
                  <li>
                    <a href="javascript:void(0)" @click="allPost()">All</a>
                  </li>
                  <li v-for="(value, index) in category.rows" :key="index">
                    <a href="javascript:void(0)" @click="findByCategory(value.name)">{{value.name}}</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Paginate from "@/components/paginate/index";
import { debug, debuglog } from "util";
export default {
  name: "home",
  components: {
    Paginate
  },
  data() {
    return {
      state: {
        isLoading: false,
        isDetail: false
      },
      blog: [],
      category: [],
      searchData: this.$store.state.search,
      previousPage: 1,
      currentPage: 1,
      total: 1
    };
  },
  computed: {
    isMobile() {
      return this.$store.state.isMobile;
    }
  },
  mounted() {
    this.allPost();
    this.allCategory();
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
        const response = await axios.post("base/sleek/getData", findAll);
        this.blog = response.data.data[0];
        this.total = Math.ceil(response.data.data[0].total / 5);
        this.state = {
          isLoading: false,
          isDetail: false
        };
      } catch (e) {
        console.log(e);
      }
    },
    async allCategory() {
      try {
        const response = await axios.post("base/sleek/getData", {
          name: "categories"
        });
        this.category = response.data.data[0];
      } catch (e) {
        console.log(e);
      }
    },
    async searchPost(name) {
      this.state = {
        isLoading: true,
        isDetail: false
      };
      const condition = [
        { condition: ["title", "~", name], next: "or" },
        { condition: ["description", "~", name], next: "or" },
        { condition: ["content", "~", name], next: "or" }
      ];
      try {
        const params = {
          name: "posts",
          options: [
            {
              limit: [0, 5],
              sortBy: ["_id", "desc"],
              where: name === "" ? [] : condition
            }
          ]
        };
        const response = await axios.post("base/sleek/getData", params);
        this.blog = response.data.data[0];
        this.total = Math.ceil(response.data.data[0].total / 5);
        this.state = {
          isLoading: false,
          isDetail: false
        };
      } catch (e) {
        console.log(e);
      }
    },
    async findByCategory(name) {
      try {
        this.state = {
          isLoading: true,
          isDetail: false
        };
        const findByCategory = {
          name: "posts",
          options: [
            {
              limit: [0, 5],
              where: [
                {
                  condition: ["draft", "=", false]
                },
                {
                  condition: [
                    "categories",
                    "search",
                    [
                      {
                        condition: ["name", "=", name]
                      }
                    ]
                  ]
                }
              ],
              sortBy: ["_id", "desc"]
            }
          ]
        };
        const response = await axios.post("base/sleek/getData", findByCategory);
        this.blog = response.data.data[0];
        this.total = Math.ceil(response.data.data[0].total / 5);
        this.state = {
          isLoading: false,
          isDetail: false
        };
      } catch (e) {
        console.error(e);
      }
    },
    updatePagination(value) {
      this.state = {
        isLoading: true,
        isDetail: false
      };
      this.currentPage = value;
      this.previousPage = this.currentPage - 1;
      const findAll = {
        name: "posts",
        options: [
          {
            limit: [this.previousPage * 5, 5],
            where: [{ condition: ["draft", "=", false] }],
            sortBy: ["_id", "desc"]
          }
        ]
      };
      axios.post("base/sleek/getData", findAll).then(res => {
        this.blog = res.data.data[0];
        this.total = Math.ceil(res.data.data[0].total / 5);
        this.state = {
          isLoading: false,
          isDetail: false
        };
      });
    },
    formatDate(input) {
      var hari = [
        "Minggu",
        "Senin",
        "Selasa",
        "Rabu",
        "Kamis",
        "Jumat",
        "Sabtu"
      ];
      var bulan = [
        "Januari",
        "Februari",
        "Maret",
        "April",
        "Mei",
        "Juni",
        "Juli",
        "Agustus",
        "September",
        "Oktober",
        "November",
        "Desember"
      ];
      var tanggal = new Date(input).getDate();
      var xhari = new Date(input).getDay();
      var xbulan = new Date(input).getMonth();
      var xtahun = new Date(input).getYear();

      var hari = hari[xhari];
      var bulan = bulan[xbulan];
      var tahun = xtahun < 1000 ? xtahun + 1900 : xtahun;

      return hari + ", " + tanggal + " " + bulan + " " + tahun;
    },
    toDetail(value) {
      this.detail = value;
      this.state.isDetail = true;
    }
  }
};
</script>
