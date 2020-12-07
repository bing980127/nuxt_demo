<template>
  <div class="auth-page">
    <div class="container page">
      <div class="row">
        <div class="col-md-6 offset-md-3 col-xs-12">
          <h1 class="text-xs-center">Sign in</h1>
          <p class="text-xs-center">
            <NuxtLink :to="{ name: 'register' }">Need an account?</NuxtLink>
          </p>

          <ul class="error-messages">
            <li v-for="(item, key, index) in errorMsg" :key="index">
              {{ key }}:
              <span v-for="text in item" :key="text">{{ text }}</span>
            </li>
          </ul>

          <form @submit.prevent="onSubmit(email, password)">
            <fieldset class="form-group">
              <input
                class="form-control form-control-lg"
                type="text"
                placeholder="Email"
                required
                v-model="email"
              />
            </fieldset>
            <fieldset class="form-group">
              <input
                class="form-control form-control-lg"
                type="password"
                placeholder="Password"
                required
                v-model="password"
              />
            </fieldset>
            <button class="btn btn-lg btn-primary pull-xs-right">
              Sign in
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions, mapMutations } from "vuex";
import { login } from "../static/api";
export default {
  name: "login",
  data() {
    return {
      email: null,
      password: null,
    };
  },
  created() {
    this.setError(null);
  },
  methods: {
    ...mapActions(["Login"]),
    ...mapMutations(["setError"]),
    onSubmit(email, password) {
      this.Login({ email, password });
    },
  },
  computed: {
    ...mapState(["errorMsg", "userInfo"]),
  },
};
</script>

<style>
</style>
