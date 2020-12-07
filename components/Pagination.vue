<template>
  <nav>
    <ul class="pagination">
      <li
        v-for="page in pages"
        :data-test="`page-link-${page}`"
        :key="page"
        :class="paginationClass(page)"
        @click.prevent="changePage(page)"
      >
        <NuxtLink class="page-link" :to="{ path: '/' }">{{ page }}</NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<script>
import { Bus } from "../static/util";
export default {
  name: "Pagination",
  props: {
    pages: {
      type: Array,
      required: true,
    },
    currentPage: {
      type: Number,
      required: true,
    },
  },
  methods: {
    changePage(goToPage) {
      if (goToPage === this.currentPage) return;
      Bus.$emit("updateArticle", goToPage);
    },
    paginationClass(page) {
      return {
        "page-item": true,
        active: this.currentPage === page,
      };
    },
  },
};
</script>