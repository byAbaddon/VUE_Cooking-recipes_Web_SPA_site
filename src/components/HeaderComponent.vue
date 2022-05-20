<template>
<header class="masthead mb-auto">
    <div class="inner">
        <h3 class="masthead-brand">CookUni</h3>
        <nav class="nav nav-masthead justify-content-center">
          
            <a class="nav-link" href="#">Home</a>
            <a class="nav-link" href="#">Welcome, {{names}}!</a>
            <a class="nav-link" href="#/create">Share recipe</a>
            <a class="nav-link" href="#/logout">Logout</a>
          
            <a class="nav-link" href="#/login">Login</a>
            <a class="nav-link" href="#/register">Register</a>
           
        </nav>
    </div>
</header>
</template>

<script>
import { ref } from 'vue'

export default {
  setup(){
   const names = ref('User') 
   
   return{ names}
  }
}
</script>

<style>

</style>



