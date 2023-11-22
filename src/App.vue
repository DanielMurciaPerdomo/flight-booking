<template>
  <Header />
  <Login />
  <Footer />
</template>

<script>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import Login from './components/Login.vue';

export default {
  name: 'App',
  components: {
    Header,
    Login,
    Footer
}
}
</script>

<style>
body{
  background-color: azure;
}
</style>