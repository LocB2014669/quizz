<template>
  <Header />
  <!-- <Register /> -->
  <!-- <Login /> -->
  <InfoCustom />
  <Footer />
  <!-- <Info /> -->
</template>

<script>
import Header from './components/HeaderLayout.vue';
// import Register from './pages/RegisterView.vue';
// import Login from './pages/LoginView.vue';
// import Info from './pages/InfoView.vue';
import Footer from './components/FooterView.vue'
import InfoCustom from './pages/InfoCustomView.vue';
export default {
  name: 'App',
  components: {
    Header,
    Footer,
    // Register,
    // Login
    // Info
    InfoCustom

  }
}
</script>

<style>
*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

</style>
