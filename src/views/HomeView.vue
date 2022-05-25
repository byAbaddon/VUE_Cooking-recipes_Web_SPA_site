<template>
  <main role="main" class="inner cover mt-5">
    <div class="home-before-login">
      <h1 class="cover-heading">Cooking Masters</h1>
      <p class="lead">
        They say that food passes through the stomach, we say that food passes
        through CookUni.
      </p>
    </div>

     <div class="home-after-login">
        <h1 class="cover-heading">Our Recipes</h1> 
        <div>
            <v-img
            src=""
             ></v-img>
        </div>
        <h4 style="color:goldenrod">Food Not Found</h4> 
     </div>

  </main>
</template>


<script>
export default {};
</script>

<style scoped>
main {
  position: absolute;
  top: 25em;
  left: 5em;
}

h1,
p {
  color: beige;
}
</style>