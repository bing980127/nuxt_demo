<template>
  <div class="profile-page">
    <div class="user-info">
      <div class="container">
        <div class="row">
          <div class="col-xs-12 col-md-10 offset-md-1">
            <img :src="profile.image" class="user-img" />
            <h4>{{ profile.username }}</h4>
            <p>
              {{ profile.bio }}
            </p>
            <button
              class="btn btn-sm btn-outline-secondary action-btn"
              v-if="isMe"
              @click="onSetting"
            >
              <i class="ion-plus-round"></i>
              &nbsp; Edit Profile Settings
            </button>
            <button
              class="btn btn-sm btn-outline-secondary action-btn"
              v-else
              @click="onFollow"
              :disabled="isFetching"
            >
              <template v-if="!profile.following">
                <i class="ion-plus-round"></i>
                &nbsp; Follow {{ profile.username }}
              </template>
              <template v-else>
                <i class="ion-plus-round"></i>
                &nbsp; UnFollow {{ profile.username }}
              </template>
            </button>
          </div>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="row">
        <div class="col-xs-12 col-md-10 offset-md-1">
          <div class="articles-toggle">
            <ul class="nav nav-pills outline-active">
              <li class="nav-item">
                <NuxtLink
                  :class="`nav-link ${isActive ? '' : 'active'}`"
                  :to="{
                    path: `/profile/${profile.username}`,
                    query: { type: 'my' },
                  }"
                  >My Articles</NuxtLink
                >
              </li>
              <li class="nav-item">
                <NuxtLink
                  :class="`nav-link ${isActive ? 'active' : ''}`"
                  :to="{
                    path: `/profile/${profile.username}`,
                    query: { type: 'others' },
                  }"
                  >Favorited Articles</NuxtLink
                >
              </li>
            </ul>
          </div>
          <Article :article="articles" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import Article from "../components/article";
import {
  getProfileReqest,
  followUser,
  unFollowUser,
  getArticlesRequest,
} from "../static/api";
export default {
  name: "profile",
  middleware: "router",
  computed: {
    ...mapState(["userInfo"]),
  },
  components: { Article },
  data() {
    return {
      profile: {},
      isMe: true,
      isFetching: false,
      articles: [],
      myArticles: [],
      othersArticle: [],
      isActive: false,
    };
  },
  async created() {
    const { username } = this.$route.params;
    Promise.all([
      getArticlesRequest({
        author: username,
      }),
      getProfileReqest(username),
    ]).then((resArr) => {
      const [articleRes, profileRes] = resArr;
      const { profile } = profileRes.data;
      const { articles } = articleRes.data;
      this.profile = profile;
      this.articles = articles;
      this.myArticles = articles;
      if (this.userInfo.username !== profile.username) this.isMe = false;
    });
    if (this.$route.query.type === "others") {
      this.isActive = true;
      const { data } = await getArticlesRequest({
        favorited: this.profile.username,
      });
      this.othersArticle = data.articles;
      this.articles = data.articles;
    }
  },
  watch: {
    $route: "onWatchRouter",
  },
  methods: {
    onSetting() {
      this.$router.push({ name: "setting" });
    },
    async onWatchRouter(route, oldRoute) {
      if (!this.othersArticle.length) {
        const { data } = await getArticlesRequest({
          favorited: this.profile.username,
        });
        this.othersArticle = data.articles;
        this.articles = data.articles;
      }
      const { type } = route.query;
      if (type === "others" || type === "") {
        this.articles = this.othersArticle;
        this.isActive = true;
      } else {
        this.articles = this.myArticles;
        this.isActive = false;
      }
    },
    async onFollow() {
      const { username } = this.profile;
      this.isFetching = true;
      const { data } = this.profile.following
        ? await unFollowUser(username)
        : await followUser(username);
      this.isFetching = false;
      this.profile = data.profile;
    },
  },
};
</script>

<style>
</style>