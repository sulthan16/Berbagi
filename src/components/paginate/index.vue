<template>
  <nav aria-label="Page navigation example">
    <ul class="pagination">
      <li :class="['page-item',{disabled: historyPage === 1} ]">
        <a
          class="page-link"
          href="javascript:void(0)"
          v-on:click="previeusPage"
          aria-label="Previous"
        >
          <span aria-hidden="true">«</span>
          <span class="sr-only">Previous</span>
        </a>
      </li>
      <template v-for="(n, index) in pagination">
        <li :class="['page-item', {'active': n === page}]" :key="index" v-on:click="onChange(n)">
          <a class="page-link" href="javascript:void(0)">{{n}}</a>
        </li>
      </template>
      <li :class="['page-item',{disabled: historyPage === totalPage}]">
        <a class="page-link" href="javascript:void(0)" aria-label="Next" v-on:click="nextPage">
          <span aria-hidden="true">»</span>
          <span class="sr-only">Next</span>
        </a>
      </li>
    </ul>
  </nav>
</template>
<script>
export default {
  props: {
    page: {
      required: true
    },
    totalPage: {
      required: true
    }
  },
  data() {
    return {
      historyPage: 1
    };
  },
  methods: {
    previeusPage() {
      if (this.historyPage <= this.page) {
        this.historyPage = this.page - 1;
      }
      this.$emit("onChangePage", this.historyPage);
    },
    onChange(n) {
      if (n != "...") {
        this.historyPage = n;
        this.$emit("onChangePage", n);
      }
    },
    nextPage() {
      if (this.historyPage >= this.page) {
        this.historyPage = this.page + 1;
      }
      this.$emit("onChangePage", this.historyPage);
    }
  },
  computed: {
    pagination() {
      var current = this.page,
        last = this.totalPage,
        delta = 2,
        left = current - delta,
        right = current + delta + 1,
        range = [],
        rangeWithDots = [],
        l;

      for (let i = 1; i <= last; i++) {
        if (i == 1 || i == last || (i >= left && i < right)) {
          range.push(i);
        }
      }

      for (let i of range) {
        if (l) {
          if (i - l === 2) {
            rangeWithDots.push(l + 1);
          } else if (i - l !== 1) {
            rangeWithDots.push("...");
          }
        }
        rangeWithDots.push(i);
        l = i;
      }
      return rangeWithDots;
    }
  }
};
</script>