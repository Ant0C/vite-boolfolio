<script>
// import Projects from './components/Projects.vue'
export default {
  components: {
    // Projects
  }
}
</script>

<template>
  <header>
    <ul>
      <li>
        <router-link :to="{ name: 'home' }">HOME</router-link>
      </li>
      <li>
        <router-link :to="{ name: 'about' }">CHI SONO</router-link>
      </li>
      <li>
        <router-link :to="{ name: 'progetti' }">IL MIO PORTFOLIO</router-link>
      </li>
    </ul>
  </header>

  <main>
    <Router-View></Router-View>
  </main>

  <footer>
    Qui sarà presente il footer
  </footer>
</template>

<style scoped></style>
