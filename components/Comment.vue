<template>
  <div>
    <div
      class="article-actions"
      v-for="(item, index) in commentArr"
      :key="index"
    >
      <div class="article-meta">
        <a href="profile.html"><img src="http://i.imgur.com/Qr71crq.jpg" /></a>
        <div class="info">
          <a href="" class="author">Eric Simons</a>
          <span class="date">January 20th</span>
        </div>

        <button class="btn btn-sm btn-outline-secondary">
          <i class="ion-plus-round"></i>
          &nbsp; Follow Eric Simons <span class="counter">(10)</span>
        </button>
        &nbsp;
        <button class="btn btn-sm btn-outline-primary">
          <i class="ion-heart"></i>
          &nbsp; Favorite Post <span class="counter">(29)</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "comment-component",
  props: {
    commentArr: {
      type: Array,
      default: () => {
        return []
      },
      required: true,
    },
  },
  methods: {},
};
</script>

<style>
</style>