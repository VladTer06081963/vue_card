<script>
import Header from '~/components/Header.vue'
import Footer from '~/components/Footer.vue'

export default {
  components: {
    Header,
    Footer,
  },
}
</script>

<template>
  <div class="wrapper">
    <!-- Компонент Header -->
    <Header />
    <main>
      <slot />
    </main>
    <!-- Компонент Footer -->
    <Footer />
  </div>
</template>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
main {
  flex: 1;
}
</style>
