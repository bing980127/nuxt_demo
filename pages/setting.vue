<template>
  <div class="settings-page">
    <div class="container page">
      <div class="row">
        <div class="col-md-6 offset-md-3 col-xs-12">
          <h1 class="text-xs-center">Your Settings</h1>

          <form
            @submit.prevent="
              onUpdate({ email, username, password, image, bio })
            "
          >
            <fieldset>
              <fieldset class="form-group">
                <input
                  class="form-control"
                  type="text"
                  placeholder="URL of profile picture"
                  v-model="image"
                />
              </fieldset>
              <fieldset class="form-group">
                <input
                  class="form-control form-control-lg"
                  type="text"
                  placeholder="Your Name"
                  v-model="username"
                />
              </fieldset>
              <fieldset class="form-group">
                <textarea
                  class="form-control form-control-lg"
                  rows="8"
                  placeholder="Short bio about you"
                  v-model="bio"
                ></textarea>
              </fieldset>
              <fieldset class="form-group">
                <input
                  class="form-control form-control-lg"
                  type="text"
                  placeholder="Email"
                  v-model="email"
                />
              </fieldset>
              <fieldset class="form-group">
                <input
                  class="form-control form-control-lg"
                  type="password"
                  placeholder="Password"
                  v-model="password"
                />
              </fieldset>
              <button
                class="btn btn-lg btn-primary pull-xs-right"
                :disabled="isFetching"
              >
                Update Settings
              </button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const Cookie = process.client ? require('js-cookie') : undefined;
import { mapState, mapMutations } from "vuex";
import { updateUserRequest } from "../static/api";
export default {
  name: "setting",
  middleware: "router",
  data() {
    return {
      email: "",
      username: "",
      password: "",
      image: "",
      bio: "",
      isFetching: false,
    };
  },
  created() {
    if (this.userInfo) {
      const { email, username, password, image, bio } = this.userInfo;
      this.email = email;
      this.username = username;
      this.password = password;
      this.image = image;
      this.bio = bio;
    }
  },
  methods: {
    ...mapMutations(["setUser"]),
    onUpdate(params) {
      this.isFetching = true;
      updateUserRequest({ user: params })
        .then((res) => {
          const { user } = res.data;
          this.setUser(user);
          Cookie.set('userInfo', JSON.stringify(user))
          this.$router.push({ path: `profile/${this.userInfo.username}` });
          this.isFetching = false;
        })
        .catch((error) => {
          this.isFetching = false;
        });
    },
  },
  computed: {
    ...mapState(["userInfo"]),
  },
};
</script>

<style>
</style>