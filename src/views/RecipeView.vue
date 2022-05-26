<template> 
<section>
    <div class="home-after-login">
      <h1 class="cover-heading">Our Recipes :</h1>
      <p>
        <img src="">  <!--  WTF -->
        <img  src="@/assets/images/chef.jpeg" alt="" width="500px"> 
      </p>
      <h3 style="" >Food Not Found...</h3>
      <!-- <h5>Press <router-link to="/share"><span>ShareRecipe</span></router-link> to add new recipe </h5> -->
    </div>
</section>

</template>


<script>
import { } from "vue";

export default {
  setup() {
  
  },
};
</script>


<style scoped>

.home-after-login {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 3em;
}

h1,
p {
color: lavender;
text-decoration: underline;
}

h3{
 color: cornflowerblue;
}

h5{
  color: rgb(181, 194, 63);
}

h5 >span {
  color: white;
  text-decoration: underline;
  
}
.home-after-login img{
  border-radius: 10px;
  margin: 3em auto;
}

</style>