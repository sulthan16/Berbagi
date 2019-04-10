<template>
  <div class="container-fluid">
    <div v-for="(value, index) in blog.rows" :key="index">
      <img alt="Vue logo" v-bind:src="value.featuredImage+'?w=100'">
      <span>{{value.title}}</span>
      <span>{{value.description}}</span>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "home",
  data() {
    return {
      findAll: {
        name: "posts",
        options: [
          {
            limit: [0, 10],
            where: [{ condition: ["draft", "=", false] }],
            sortBy: ["_id", "desc"]
          }
        ]
      },
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
      blog: []
    };
  },
  async mounted() {
    try {
      const response = await axios.post("base/sleek/getData", this.findAll);
      this.blog = response.data.data[0];
    } catch (e) {
      console.error(e);
    }
  }
};
</script>
