<template> 
<article>
  <section v-if="isNoRecipes">
    <div class="home-after-login">
      <h1 class="">Our Recipes:</h1>
      <div>
        <img class="WTF" style="display:none">  <!-- WTF-->
        <img  src="@/assets/images/chef.jpeg" alt="" width="500px"> 
      </div>
      <h4 style="" >Food Not Found...</h4>
    </div>
      <h6>Press <router-link to="/share"><span>ShareRecipe</span></router-link> to add new recipe </h6>
  </section>

 <section class="recipes-section"   v-else>
      <div class="home-after-login">
        <h1 class="">Our Recipes:</h1>
     </div>
<div class="container" v-for="(recipe, index) in allRecipesByCategory" :key="index" >
    <div class="row">
        <div class="col-lg-12">
            <div class="our-team-main">
                <div class="team-front">
                    <img :src="recipe.image" />
                    <h3>{{recipe.meal}}</h3>
                    <p>{{recipe.category}}</p>
                </div>

         <!-- back side -->
                <div class="team-back">
                    <div class="back-side-info">
                        <h4>Ingredients</h4>
                        <ul>
                            <li  v-for="(ingredient, index ) in recipe.ingredients.split('.').splice(0, 15)" :key="index"
                           
                            >{{ingredient}}</li>
                        </ul>
                      <p class="link">
                     <router-link :to="{ name: 'edit' , params:{id : recipe.id}}">
                           <a>View the recipe</a>
                     </router-link>
                   </p>
                 </div>
                     <img class="WTF"  style="display:none" >
                    <!-- <img class="foodImage"   src="{{foodImageURL}}" />    -->
                    <img  class="foodImage" :src="recipe.imageTwo">  
                </div>

            </div>
        </div>
    </div>
</div>

   </section>

 </article>
</template>


<script>
import useSnapshotRecipes from "@/composables/useSnapshotRecipes";
import {useRoute} from "vue-router";
import { ref,  } from "vue";

export default {
  setup() {
    let allRecipes = ref(useSnapshotRecipes()) 
    const currentCategory = useRoute().query.type
    let isNoRecipes = ref('')
    let allRecipesByCategory = ''

 setTimeout(() => {  
    allRecipesByCategory = allRecipes.value.filter(x => x.category.split(' ')[0].toLowerCase() == currentCategory) 
    isNoRecipes = allRecipesByCategory.length == 0
      console.log( isNoRecipes,   ...allRecipesByCategory );
    }, 1000);
     
 

        console.log('All recipes page',);

allRecipesByCategory =
{
  "id": "yzTebOQn6F0PJj1BBR9l",
  "category": "Grain Food",
  "preparation": " Step 1  Preheat oven to 350 degrees F (175 degrees C). Place the squash halves into a large baking dish with the cut-sides facing down. Step 2  Bake in the preheated oven until easily pierced with a knife, about 40 minutes. Cool squash for 10 minutes. Step 3  Shred the inside of the squash with a fork and transfer to a bowl. Add olive oil, salt, and pepper to shredded squash and toss to coat. Serve with Parmesan cheese.",
  "meal": "Spaghetti Squash",
  "ingredients": " 1 spaghetti squash, halved and seeded 1 tablespoon extra-virgin olive oil salt and freshly ground black pepper to taste 1 tablespoon freshly grated Parmesan cheese, or to taste ",
  "description": "This is a super easy recipe for spaghetti squash that I often eat for lunch when I am looking for something healthy and quick. ",
  "image": "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fpublic-assets-ucg.meredithcorp.io%2F150932045c8bc6e89b9c613469e5d2a6%2F4589476.jpg&w=596&h=399&c=sc&poi=face&q=60"
}
       
    

    return  { isNoRecipes, ...allRecipesByCategory}
   },

}

</script>



<style scoped>

/* .link {
  position: relative;
left: 55em;
bottom: 2em;
} */

li {
font-size: smaller;
 }

.home-after-login h1 {
 margin-top:1em;

}
.back-side-info > h4:nth-child(2){
  font-size: 0;
}



h1 {
  color: #fff;
  margin: 40px 0 60px 0;
  font-weight: 300;
}

.our-team-main {
  width: 100%;
  height: auto;
  border-bottom: 5px #323233 solid;
  background: transparent;
  text-align: center;
  border-radius: 10px;
  overflow: hidden;
  position: relative;
  transition: 0.5s;
  margin-bottom: 28px;
  color: black;
}

.our-team-main img {
  border-radius: 10px;
  margin-bottom: 5px;
  width: 40%;
  height: 18em;
  box-shadow: 0 0 0.2rem 0 rgba(68, 68, 68, 0.2);
}

.our-team-main h3 {
  font-size: 26px;
  font-weight: 700;
}

.our-team-main p {
  margin-bottom: -1em;
  padding-bottom: 10px;
}

.team-back {
  width: 100%;
  height: auto;
  position: absolute;
  top: 0;
  left: 0;
  padding: 5px 15px 0 15px;
  text-align: left;
  background: white;
  color: black;
}

.team-front {
  width: 100%;
  height: auto;
  position: relative;
  z-index: 10;
  background: rgba(255, 255, 255, 1);
  padding: 15px;
  bottom: 0px;
  transition: all 0.5s ease;
}



.our-team-main:hover .team-front {
  bottom: -400px;
  transition: all 0.5s ease;
}

.our-team-main:hover {
  border-color: #777;
  transition: 0.5s;
   background: white;
}

.back-side-info {
  display: inline-block;
  width: 50%;
}

.back-side-info a {
  color: black;
  font-weight: bold;
}

.back-side-info a:hover {
  text-decoration: underline;
}

nav a:hover {
  color: white;
}


.foodImage{
float: inline-end;
padding-top: -46em;
position: relative;
bottom: 1em;
right: 4em;
}




#foodNotFound {
  margin: 0 auto;
  text-align: center;
  font-style: italic;
}

#foodNotFound img {
  height: auto;
  border-radius: 15px;
}

form textarea {
  height: 100vh;
  resize: none;
}

.detailsIngredients {
  display: inline-block;
  vertical-align: top;
  width: 29%;
  word-wrap: break-word;
}

.detailsFoodImage {
  display: inline-block;
  width: 69%;
  margin-right: 1%;
}

.detailsFoodImage img {
  width: 350px;
  height: auto;
  border: 1px solid white;
}

.actions {
  width: 100%;
}

.prep-method,
.description {
  width: 100%;
  word-wrap: break-word;
}

.infoPack {
  vertical-align: top;
  display: inline-block;
  width: 100%;
}

.recepieInfo {
  display: inline-block;
  width: 70%;
}

.ingredient {
  text-align: center;
}

#successBox,
#loadingBox,
#errorBox {
  display: none;
  text-align: center;
}


/*our-team-main*/


  /* no recipe */
.home-after-login {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 3em;
}

h1 {
  color: lavender;
  text-decoration: underline;
  margin-bottom:1em;
}
.home-after-login h1{
  position: relative;
  bottom: 2em;
  margin-bottom: 0;
}




h4 {
  color: lavender;
}

h6 {
  color: cornflowerblue;
  text-align: center;
}

h6 span {
  color: antiquewhite;
  text-decoration: underline;
}
h6 span:hover {
  color: grey;
}
img {
  border-radius: 10px;
  margin: 3em auto;
}


</style>