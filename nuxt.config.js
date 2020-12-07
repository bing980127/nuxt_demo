export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'nuxt-demo-work',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', type: 'text/css', href: '/style/main.css' },
      { rel: 'stylesheet', type: 'text/css', href: '//fonts.googleapis.com/css?family=Titillium+Web:700|Source+Serif+Pro:400,700|Merriweather+Sans:400,700|Source+Sans+Pro:400,300,600,700,300italic,400italic,600italic,700italic' },
      { rel: 'stylesheet', type: 'text/css', href: '//code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css' },
    ]
  },

  router: {
    extendRoutes(routes, resolve) {
      routes.splice(0);
      routes.push(...[
        {
          path: "/",
          name: "home",
          component: resolve(__dirname, "pages/index.vue"),
        }, {
          path: "/login",
          name: "login",
          component: resolve(__dirname, "pages/login.vue")
        }, {
          path: "/register",
          name: "register",
          component: resolve(__dirname, "pages/register.vue")
        }, {
          path: "/article/:slug",
          name: "article",
          component: resolve(__dirname, "pages/article.vue")
        }, {
          path: "/profile/:username",
          name: "profile",
          component: resolve(__dirname, "pages/profile.vue")
        }, {
          path: "/operate",
          name: "operate",
          component: resolve(__dirname, "pages/operateArticle.vue")
        }, {
          path: "/setting",
          name: "setting",
          component: resolve(__dirname, "pages/setting.vue")
        }])
    }
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    "./plugins/axios.js",
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [

  ],

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  }
}
