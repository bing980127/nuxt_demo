<template>
  <footer>
    <div class="container">
      <NuxtLink class="logo-font" :to="{ name: 'home', params: {} }">
        conduit
      </NuxtLink>
      <span class="attribution">
        An interactive learning project from
        <a rel="noopener noreferrer" target="blank" href="https://thinkster.io"
          >Thinkster</a
        >. Code &amp; design licensed under MIT.
      </span>
    </div>
  </footer>
</template>

<script>
export default {
  name: "RwvFooter"
};
</script>
