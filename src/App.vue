<template>
  <v-app id="app">
   <header-component />

<main role="main" class="inner cover mt-5">
    <h1 class="cover-heading">Coooooking University</h1>
    <p class="lead">They say that food passes through the stomach, we say that food passes through CookUni.
    </p>
</main>


    <v-main>
      <router-view/>
    </v-main>
    <footer-component />
  </v-app>
</template>

<script>
import HeaderComponent from './components/HeaderComponent.vue'
import FooterComponent from './components/FooterComponent.vue'


export default {
    name: "App",
    data: () => ({
    //
    }),
    components: { HeaderComponent, FooterComponent }
}
</script>


<style>

#app{
  padding: 0;
  margin: 0;
  background: url("@/assets/homePage-background.jpg") center no-repeat ;
  background-size: cover;
  background-repeat: no-repeat; 
}

</style>