<template>
  <v-app>
    <app-navbar />
    <router-view></router-view>
  </v-app>
</template>

<script>
import AppNavbar from './components/app-navbar';

export default {
  name: 'App',

  components: {
    AppNavbar
  }
};
</script>

<style>
html,
body {
  font-family: Poppins, sans-serif !important;
}
.text-danger {
  color: #b71c1c;
}
.text-grey {
  color: #c7c7c7;
}
</style>
