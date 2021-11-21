<template>
  <div>
    <SystemBar></SystemBar>
    <Header></Header>
    <Navbar></Navbar>
    <Footer></Footer>
    <BottomNavigation></BottomNavigation>
  </div>
</template>

<script>
  import BottomNavigation from '/src/components/BottomNavigation'
  import SystemBar from '/src/components/SystemBar'
  import Footer from '/src/components/Footer';
  import Navbar from '/src/components/Navbar';
  import Header from '/src/components/Header'

  export default {
    name: 'Main',

    components: {
      Header,
      Footer,
      Navbar,
      SystemBar,
      BottomNavigation
    },

    data: () => ({}),
  }
</script>
