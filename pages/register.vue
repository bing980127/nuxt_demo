<template>
  <div class="auth-page">
    <div class="container page">
      <div class="row">
        <div class="col-md-6 offset-md-3 col-xs-12">
          <h1 class="text-xs-center">Sign up</h1>
          <p class="text-xs-center">
            <NuxtLink :to="{ name: 'login' }">Have an account</NuxtLink>
          </p>

          <ul class="error-messages">
            <li v-for="(item, key, index) in errorMsg" :key="index">
              {{ key }}:
              <span v-for="text in item" :key="text">{{ text }}</span>
            </li>
          </ul>

          <form @submit.prevent="onRegister({ username, password, email })">
            <fieldset class="form-group">
              <input
                class="form-control form-control-lg"
                type="text"
                placeholder="Your Name"
                v-model="username"
              />
            </fieldset>
            <fieldset class="form-group">
              <input
                class="form-control form-control-lg"
                type="email"
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
              Sign up
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState, mapMutations } from "vuex";
export default {
  name: "register",
  data() {
    return {
      username: "",
      password: "",
      email: "",
    };
  },
  created() {
    this.setError(null);
  },
  methods: {
    ...mapActions(["Register"]),
    ...mapMutations(["setError"]),
    onRegister(params) {
      this.Register(params);
    },
  },
  computed: {
    ...mapState(["errorMsg"]),
  },
};
</script>

<style>
</style>
