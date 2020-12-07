<template>
  <div class="editor-page">
    <div class="container page">
      <div class="row">
        <div class="col-md-10 offset-md-1 col-xs-12">
          <form @submit.prevent="onUpdate({ title, description, body })">
            <fieldset>
              <fieldset class="form-group">
                <input
                  type="text"
                  class="form-control form-control-lg"
                  placeholder="Article Title"
                  v-model="title"
                />
              </fieldset>
              <fieldset class="form-group">
                <input
                  type="text"
                  class="form-control"
                  placeholder="What's this article about?"
                  v-model="description"
                />
              </fieldset>
              <fieldset class="form-group">
                <textarea
                  class="form-control"
                  rows="8"
                  placeholder="Write your article (in markdown)"
                  v-model="body"
                ></textarea>
              </fieldset>
              <fieldset class="form-group">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Enter tags"
                  v-model="tags"
                  @keypress.enter.prevent="addTag(tags)"
                />
                <div class="tag-list">
                  <span
                    class="tag-default tag-pill"
                    v-for="(tag, index) in tagList"
                    :key="tag + index"
                  >
                    <i class="ion-close-round" @click="removeTag(index)"> </i>
                    {{ tag }}
                  </span>
                </div>
              </fieldset>
              <button
                class="btn btn-lg pull-xs-right btn-primary"
                :disabled="iFetching"
              >
                Publish Article
              </button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { crateArticleRequest, getArticleRequest } from "../static/api";
export default {
  name: "operateArticle",
  middleware: 'router',
  data() {
    return {
      title: "",
      description: "",
      body: "",
      tags: "",
      tagList: [],
      iFetching: false,
    };
  },
  async created() {
    const { slug } = this.$route.query;
    if (slug) {
      const { data } = await getArticleRequest(slug);
      const { article } = data;
      this.title = article.title;
      this.description = article.description;
      this.body = article.body;
      this.tagList = article.tagList;
    }
  },
  methods: {
    onUpdate(params) {
      if (!this.title) {
        alert("请输入文章标题");
        return;
      }
      if (!this.description) {
        alert("请输入文章描述");
        return;
      }
      if (!this.body) {
        alert("请输入文章内容");
        return;
      }
      this.iFetching = true;
      params.tagList = this.tagList;
      crateArticleRequest({ article: params })
        .then((res) => {
          this.iFetching = false;
          this.$router.push({ name: "home" });
        })
        .catch((error) => {
          this.iFetching = false;
        });
    },
    addTag(tag) {
      this.tagList.push(tag);
    },
    removeTag(index) {
      this.tagList.splice(index, 1);
    },
  },
};
</script>

<style>
</style>