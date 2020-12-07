<template>
  <div class="article-page">
    <div class="banner">
      <div class="container">
        <h1>{{ articles.title }}</h1>

        <UserInfo :article="articles" />
      </div>
    </div>

    <div class="container page">
      <div class="row article-content">
        <div class="col-md-12">
          <p>
            {{ articles.body }}
          </p>
        </div>
      </div>

      <hr />

      <div class="article-actions">
        <UserInfo :article="articles" />
      </div>

      <div class="row" v-if="userInfo">
        <div class="col-xs-12 col-md-8 offset-md-2">
          <form class="card comment-form" @submit.prevent="onSubCom({ body })">
            <div class="card-block">
              <textarea
                class="form-control"
                placeholder="Write a comment..."
                rows="3"
                v-model="body"
              ></textarea>
            </div>
            <div class="card-footer">
              <img :src="userInfo.image" class="comment-author-img" />
              <button class="btn btn-sm btn-primary">Post Comment</button>
            </div>
          </form>

          <div class="card" v-for="(item, index) in comments" :key="index">
            <div class="card-block">
              <p class="card-text">
                {{ item.body }}
              </p>
            </div>
            <div class="card-footer">
              <NuxtLink
                :to="{ path: `/profile/${item.author.username}` }"
                class="comment-author"
              >
                <img :src="item.author.image" class="comment-author-img" />
              </NuxtLink>
              &nbsp;
              <NuxtLink
                :to="{ path: `/profile/${item.author.username}` }"
                class="comment-author"
                >{{ item.author.username }}</NuxtLink
              >
              <span class="date-posted">{{ item.createdAt }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  getArticleRequest,
  getArticleComRequest,
  addArticleComRequest,
} from "../static/api";
import Comment from "../components/Comment";
import UserInfo from "../components/UserInfo.vue";
import { mapState } from "vuex";
export default {
  name: "articles",
  components: {
    Comment,
    UserInfo,
  },
  async asyncData(context) {
    const { slug } = context.route.params;
    const [articleRes, commentRes] = await Promise.all([
      getArticleRequest(slug),
      getArticleComRequest(slug),
    ]);
    const articles = articleRes.data.article;
    const comments = commentRes.data.comments;
    return {
      articles,
      comments,
    };
  },
  data() {
    return {
      body: "",
    };
  },
  computed: {
    ...mapState(["userInfo"]),
  },
  methods: {
    async onSubCom(params) {
      if(!this.body) {
        alert("请输入评论内容再次发送")
        return
      }
      const { data } = await addArticleComRequest(
        { comment: params },
        this.$route.params.slug
      );
      this.comments.push(data.comment);
      this.body = "";
    },
  },
};
</script>

<style>
</style>