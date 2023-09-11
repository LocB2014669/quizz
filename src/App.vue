<template>
  <Header />
  <!-- <Register /> -->
  <!-- <Login /> -->
  <!-- <InfoCustom /> -->
  <!-- <InfoEdit /> -->
  <!-- <InfoChangeName /> -->
  <InfoChangePass />
  <Footer />
  <!-- <Info /> -->
</template>

<script>
import Header from './components/HeaderLayout.vue';
// import Register from './pages/RegisterView.vue';
// import Login from './pages/LoginView.vue';
// import Info from './pages/InfoView.vue';
import Footer from './components/FooterView.vue'
// import InfoCustom from './pages/InfoCustomView.vue';
// import InfoEdit from'./pages/InfoEditView.vue';
// import InfoChangeName from './pages/InfoChangeName.vue'
import InfoChangePass from './pages/InfoChangePass.vue'
export default {
  name: 'App',
  components: {
    Header,
    Footer,
    // Register,
    // Login
    // Info
    // InfoCustom
    // InfoEdit
    // InfoChangeName
    InfoChangePass

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
