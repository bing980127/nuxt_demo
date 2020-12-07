<template>
  <div class="home-page">
    <div class="banner">
      <div class="container">
        <h1 class="logo-font">conduit</h1>
        <p>A place to share your knowledge.</p>
      </div>
    </div>

    <div class="container page">
      <div class="row">
        <div class="col-md-9">
          <div class="feed-toggle">
            <ul class="nav nav-pills outline-active">
              <li class="nav-item">
                <NuxtLink
                  :class="`nav-link ${isActive === 'my' ? 'active' : ''}`"
                  :to="{ path: '/' }"
                  @click.native="onReplaceArt('my')"
                  >Your Feed</NuxtLink
                >
              </li>
              <li class="nav-item">
                <NuxtLink
                  :class="`nav-link ${isActive === 'all' ? 'active' : ''}`"
                  :to="{ path: '/' }"
                  @click.native="onReplaceArt('all')"
                  >Global Feed</NuxtLink
                >
              </li>
              <li class="nav-item" v-show="tag">
                <NuxtLink
                  :class="`nav-link ${isActive === 'tag' ? 'active' : ''}`"
                  :to="{ path: '/' }"
                  >{{ tag }}</NuxtLink
                >
              </li>
            </ul>
          </div>
          <Article :article="articles" />
          <Pagination :currentPage="current" :pages="pages" />
        </div>

        <div class="col-md-3">
          <div class="sidebar">
            <p>Popular Tags</p>

            <div class="tag-list">
              <NuxtLink
                :to="{ path: '/' }"
                class="tag-pill tag-default"
                v-for="(item, index) in tags"
                :key="index"
                @click.native="onAddTag(item)"
                >{{ item }}</NuxtLink
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Bus } from "../static/util";
import Pagination from "../components/Pagination";
import Article from "../components/article";
import { getTagsRequest, getArticlesRequest } from "../static/api";
import { mapState } from "vuex";
export default {
  name: "home",
  async asyncData(context) {
    const [article, tags] = await Promise.all([
      getArticlesRequest(),
      getTagsRequest(),
    ]);
    const { articles, articlesCount } = article.data;
    let size = Math.floor(articlesCount / 20);
    let paginationArr = [];
    for (let i = 0; i < size; i++) {
      paginationArr.push(i + 1);
    }
    return {
      tags: tags.data.tags,
      articles: articles,
      pages: paginationArr,
    };
  },
  components: {
    Pagination,
    Article,
  },
  data() {
    return {
      tag: "",
      isActive: "all",
      current: 1,
    };
  },
  computed: {
    ...mapState(["userInfo"]),
  },
  created() {
    Bus.$on("updateArticle", (page) => {
      this.onReplaceArt(this.type, this.tag, page);
      this.current = page;
    });
  },
  methods: {
    async onReplaceArt(type, tag, page) {
      this.tag = "";
      this.current = 1;
      let params = {};
      if (type === "my") {
        params.author = this.userInfo.username;
        this.isActive = "my";
      } else if (type === "tag") {
        params.tag = tag;
        this.isActive = "tag";
      } else {
        this.isActive = "all";
      }
      if (page) {
        params.limit = 20;
        params.offset = page * 20;
      }
      const { data } = await getArticlesRequest(params);
      this.articles = data.articles;
      this.pages = this.onCreateArr(data.articlesCount);
    },
    onAddTag(tag) {
      this.onReplaceArt("tag", tag);
      this.tag = tag;
    },
    onCreateArr(articlesCount) {
      let size = Math.floor(articlesCount / 20);
      let paginationArr = [];
      for (let i = 0; i < size; i++) {
        paginationArr.push(i + 1);
      }
      return paginationArr;
    },
  },
};
</script>

<style>
</style>
