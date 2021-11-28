<template>
  <v-app>
    <SystemBar></SystemBar>
    <Header></Header>
    <v-main>
      <router-view to="/"></router-view>
    </v-main>
    <Footer></Footer>
  </v-app>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>

<script>

import SystemBar from '/src/components/SystemBar'
import Footer from '/src/components/Footer';
import Header from '/src/components/Header'

export default {
  name: 'Main',

  components: {
    Header,
    Footer,
    SystemBar,
  },

  data: () => ({}),
}
</script>
