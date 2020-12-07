<template>
  <div>
    <div class="article-preview" v-for="(item, index) in article" :key="index">
      <div class="article-meta">
        <NuxtLink
          :to="{
            name: 'profile',
            params: { username: item.author.username },
          }"
          ><img :src="item.author.image"
        /></NuxtLink>
        <div class="info">
          <NuxtLink
            :to="{
              name: 'profile',
              params: { username: item.author.username },
            }"
            class="author"
            >{{ item.author.username }}</NuxtLink
          >
          <span class="date">{{ item.createdAt }}</span>
        </div>
        <button
          class="btn btn-outline-primary btn-sm pull-xs-right"
          @click="onAddFav(index)"
          :disabled="isFetching"
        >
          <i class="ion-heart"></i> {{ item.favoritesCount }}
        </button>
      </div>
      <NuxtLink
        :to="{ name: 'article', params: { slug: item.slug } }"
        class="preview-link"
      >
        <h1>{{ item.title }}</h1>
        <p>{{ item.body }}</p>
        <span>Read more...</span>
      </NuxtLink>
    </div>
  </div>
</template>

<script>
import { addFavRequest, delFavRequest } from "../static/api";
export default {
  name: "article-component",
  props: {
    article: {
      type: Array,
      default: () => {
        return [];
      },
      required: true,
    },
  },
  data() {
    return {
      isFetching: false,
    };
  },
  methods: {
    async onAddFav(index) {
      const { slug, favorited, favoritesCount } = this.article[index];
      this.article[index].favorited = !favorited;
      this.article[index].favoritesCount = favorited
        ? favoritesCount - 1
        : favoritesCount + 1;
      this.isFetching = true;
      favorited ? await delFavRequest(slug) : await addFavRequest(slug);
      this.isFetching = false;
    },
  },
};
</script>

<style>
</style>