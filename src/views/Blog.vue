<template>
  <div class="container-fluid">
    <div v-for="(value, index) in blog.rows" :key="index">
      <img alt="Vue logo" v-bind:src="value.featuredImage+'?w=100'">
      <span>{{value.title}}</span>
      <span>{{value.description}}</span>
    </div>
    <br>
    <Paginate :page="currentPage" :totalPage="total" @onChangePage="updatePagination"/>
  </div>
</template>

<script>
import axios from "axios";
import Paginate from "@/components/paginate/index";
export default {
  name: "home",
  components: {
    Paginate
  },
  data() {
    return {
      findByCategory: {
        name: "posts",
        options: [
          {
            limit: [0, 10],
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
                      condition: ["name", "=", "categoryName"]
                    }
                  ]
                ]
              }
            ],
            sortBy: ["_id", "desc"]
          }
        ]
      },
      blog: [],
      previousPage:1,
      currentPage: 1,
      total: 1
    };
  },
  async mounted() {
    try {
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
    } catch (e) {
      console.error(e);
    }
  },
  methods: {
    updatePagination(value) {
      this.currentPage = value;
      this.previousPage = value -1;
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
      });
    }
  }
};
</script>
