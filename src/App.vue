<template>
  <Header />
  <hr />
  <SignUp />
  <!-- <Navbar /> -->
  <!-- <Login />  -->
  <Footer />
</template>

<script>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
// import Login from './components/Login.vue';
// import Navbar from './components/Navbar.vue';
import SignUp from './components/SignUp.vue';

export default {
  name: 'App',
  components: {
    Header,
    SignUp,
    // Login,
    // Navbar,
    Footer
}
}

</script>

<style>
body{
  background-color: azure;
}
hr{
  color: azure;
}
</style>