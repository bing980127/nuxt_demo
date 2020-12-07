<template>
  <nav class="navbar navbar-light">
    <div class="container">
      <NuxtLink class="navbar-brand" :to="{ name: 'home' }">conduit</NuxtLink>
      <ul class="nav navbar-nav pull-xs-right">
        <li class="nav-item">
          <NuxtLink
            :class="`nav-link ${isActive === '/' ? 'active' : ''}`"
            :to="{ name: 'home' }"
            >Home</NuxtLink
          >
        </li>
        <li class="nav-item" v-if="currentUser">
          <NuxtLink
            :class="`nav-link ${isActive === '/edit' ? 'active' : ''}`"
            :to="{ name: 'operate', params: { action: 'edit' } }"
          >
            <i class="ion-compose"></i>&nbsp;New Post
          </NuxtLink>
        </li>
        <li class="nav-item" v-if="currentUser">
          <NuxtLink
            :class="`nav-link ${isActive === '/setting' ? 'active' : ''}`"
            :to="{ name: 'setting' }"
          >
            <i class="ion-gear-a"></i>&nbsp;Settings
          </NuxtLink>
        </li>
        <li class="nav-item" v-if="!currentUser">
          <NuxtLink
            :class="`nav-link ${isActive === '/login' ? 'active' : ''}`"
            :to="{ name: 'login' }"
            >Sign in</NuxtLink
          >
        </li>
        <li class="nav-item" v-if="!currentUser">
          <NuxtLink
            :class="`nav-link ${isActive === '/register' ? 'active' : ''}`"
            :to="{ name: 'register' }"
            >Sign up</NuxtLink
          >
        </li>
        <li class="nav-item" v-if="currentUser">
          <NuxtLink
            :class="`nav-link ${isActive === '/profile' ? 'active' : ''}`"
            :to="{ path: `/profile/${currentUser.username}` }"
            >{{ currentUser.username }}</NuxtLink
          >
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "RwvHeader",
  created() {},
  data() {
    return {
      isActive: '/',
    };
  },
  watch: {
    $route: "onChangeAct",
  },
  computed: {
    ...mapGetters(["currentUser"]),
  },
  methods: {
    onChangeAct(route) {
      this.isActive = route.path;
    },
  },
};
</script>
