<template>
  <div class="article-meta">
    <NuxtLink
      :to="{ path: `/profile/${article.author && article.author.username}` }"
      ><img :src="article.author && article.author.image"
    /></NuxtLink>
    <div class="info">
      <NuxtLink
        :to="{ path: `/profile/${article.author && article.author.username}` }"
        class="author"
        >{{ article.author && article.author.username }}</NuxtLink
      >
      <span class="date">{{ article.createdAt }}</span>
    </div>
    <template v-if="!isMe">
      <button
        class="btn btn-sm btn-outline-secondary"
        v-if="!(article.author && article.author.following)"
        @click="onFollow"
      >
        <i class="ion-plus-round"></i>
        &nbsp; Follow {{ article.author && article.author.username }}
      </button>
      <button class="btn btn-sm btn-outline-secondary" v-else @click="onFollow">
        <i class="ion-plus-round"></i>
        &nbsp; UnFollow {{ article.author && article.author.username }}
      </button>
      &nbsp;&nbsp;
      <button class="btn btn-sm btn-outline-primary" @click="onAddFav()">
        <i class="ion-heart"></i>
        &nbsp; Favorite Article
        <span class="counter">({{ article.favoritesCount }})</span>
      </button>
    </template>
    <template v-else>
      <span>
        <NuxtLink
          class="btn btn-sm btn-outline-secondary"
          :to="{ path: '/operate', query: { slug: article.slug } }"
        >
          <i class="ion-edit"></i> <span>&nbsp;Edit Article</span>
        </NuxtLink>
        <span>&nbsp;&nbsp;</span>
        <button
          class="btn btn-outline-danger btn-sm"
          @click="deleteArticle"
          :disabled="isFetching"
        >
          <i class="ion-trash-a"></i> <span>&nbsp;Delete Article</span>
        </button>
      </span>
    </template>
  </div>
</template>

<script>
import {
  followUser,
  unFollowUser,
  delArticleRequest,
  addFavRequest,
  delFavRequest,
} from "../static/api";
import { mapState } from "vuex";
export default {
  name: "user-info",
  props: {
    article: {
      type: Object,
      required: true,
      default: () => {
        return {};
      },
    },
  },
  data() {
    return {
      isFetching: false,
      isMe: false,
    };
  },
  created() {
    if (
      (this.userInfo && this.userInfo.username) === this.article.author.username
    ) {
      this.isMe = true;
    }
  },
  computed: {
    ...mapState(["userInfo"]),
  },
  methods: {
    async onFollow() {
      if (!this.userInfo) {
        this.$router.push({ path: "/login" });
        return
      }
      const { username, following } = this.article.author;
      this.isFetching = true;
      const { data } = following
        ? await unFollowUser(username)
        : await followUser(username);
      this.isFetching = false;
      this.article.author = data.profile;
    },
    deleteArticle() {
      this.isFetching = true;
      delArticleRequest(this.article.slug)
        .then(() => {
          this.$router.push({ name: "home" });
          this.isFetching = false;
        })
        .catch(() => {
          this.isFetching = false;
        });
    },
    async onAddFav() {
      if (!this.userInfo) {
        this.$router.push({ path: "/login" });
        return
      }
      const { slug, favorited, favoritesCount } = this.article;
      this.article.favorited = !favorited;
      this.article.favoritesCount = favorited
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