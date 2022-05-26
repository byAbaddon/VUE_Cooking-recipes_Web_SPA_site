<template> 
 
<article>
  <section v-if="isNoRecipes">
    <div class="home-after-login">
      <h1 class="">Our Recipes:</h1>
      <div>
        <img class="WTF">  <!-- WTF-->
        <img  src="@/assets/images/chef.jpeg" alt="" width="500px"> 
      </div>
      <h4 style="" >Food Not Found...</h4>
    </div>
      <h6>Press <router-link to="/share"><span>ShareRecipe</span></router-link> to add new recipe </h6>
  </section>



 <section v-else>
      <div class="home-after-login">
        <h1 class="">Our Recipes:</h1>
     </div>
<div class="container">
    <div class="row">
        <div class="col-lg-12">
            <div class="our-team-main">
                <div class="team-front">
                    <img src="https://cdn.pixabay.com/photo/2017/10/09/19/29/eat-2834549__340.jpg" />
                    <h3>{{meal}}Salat</h3>
                    <p>{{category}}Vegetables</p>
                </div>

         <!-- back side -->
                <div class="team-back">
                    <div class="back-side-info">

                        <h4>Ingredients</h4>
                        <ul>
                            <li> chesan</li>
                            <li> chesan</li>
                            <li> chesan</li>
                            <li> chesan</li>
                            <li> chesan</li>
                            <li> chesan</li>
                       
                        </ul>
                        <a href="#/details/{{objectId}}">View the recepie</a>
                    </div>
                    <img class="WTF">
                    <!-- <img class="foodImage"   src="{{foodImageURL}}" />    -->
                  
                    <img   class="foodImage"    src="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F7313072.jpg&w=596&h=399&c=sc&poi=face&q=60">  
                </div>

            </div>
        </div>
    </div>
</div>

  </section>



</article>
</template>


<script>
import { db} from '@/service/sdk'      
import { collection, onSnapshot } from "firebase/firestore";
import {ref} from "vue";


export default {
  setup() {
    let allRecipes = ref([])
    let isNoRecipes = ref(allRecipes.value.length)
    onSnapshot(collection(db, "recipes"), (doc) => doc.docs.forEach(x => allRecipes.value.push(x.data())))
    // console.log(allRecipes.value);


  // then(e => console.log(e)).catch(e => console.log(e.error))

    return  {isNoRecipes, allRecipes}
   },
};
</script>




<style scoped>

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
  height: 100%;
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
bottom: 14em;
right: 4em;
}



img.foodImage {
  max-width: 40%;
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