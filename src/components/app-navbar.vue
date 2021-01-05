<template>
  <header>
    <v-card color="primary" class="px-8 py-1 header d-flex" tile flat dark>
      <span>Currency: NGN</span>
      <span class="ml-4"> Language: English</span>
      <v-spacer></v-spacer>
      <span v-show="$vuetify.breakpoint.mdAndUp"
        >Free Shipping for orders above US$39.99</span
      >
    </v-card>
    <v-toolbar class="px-3" flat height="90px">
      <img src="@/assets/img/logo/logo.svg" alt="logo" width="40px" />
      <span class="ml-3 app-title" v-show="$vuetify.breakpoint.mdAndUp">
        Market Place
      </span>
      <v-spacer></v-spacer>
      <div class="routes d-flex">
        <div class="route px-6 text-center">
          <v-icon>mdi-account</v-icon>
          <br />
          Login
        </div>
        <div class="route px-6 text-center">
          <v-icon>mdi-heart-outline</v-icon>
          <br />
          Wishlist
        </div>
        <div class="route px-6 text-center">
          <v-icon>mdi-cart-variant</v-icon>
          <br />
          Cart
        </div>
      </div>
    </v-toolbar>
  </header>
</template>

<script>
export default {};
</script>

<style scoped>
.header {
  font-size: 13px !important;
}
.v-toolbar {
  border-bottom: 1px solid #ccc !important;
}
.v-toolbar .app-title {
  font-size: 23px;
  font-weight: 500;
}
.v-toolbar .routes .route {
  font-size: 14px;
  text-transform: capitalize !important;
  cursor: pointer;
}
</style>
