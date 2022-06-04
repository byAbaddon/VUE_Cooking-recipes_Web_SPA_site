<template>
  <div class="row form-layout p-5">
    <div class="col-md-12">
        <div class="recepieInfo">
            <div class="detailsFoodImage">
                <img src="{{currentRecipe.image}}" alt="foodImageURL">
            </div>

            <div class="infoPack">
                <h3 class="my-3">{{}}meal</h3>
                <p class="prep-method">{{}}prepMethod</p>
                <p class="description">{{}}description</p>
            </div>
            <div class="actions">
              <div v-if="isOwner">
                <a class="btn btn-danger" href="#/delete/{{'objectId'}}">    Archive</a>
                <a class="btn btn-info" href="#/edit/{{'objectId'}}">Edit</a>
              </div>  
              <div v-else>
                <a class="btn btn-success" href="#/like/{{'objectId'}}">Likes: {{'likes'}}</a>
            </div>
        </div>

        <div class="detailsIngredients">
            <h3 class="my-3 ingredient">Ingredients</h3>
            <ul>    
                <li>{{'ingredients'}}</li>
            </ul>
        </div>
    </div>
    </div>
</div>
</template>

<script>


import { ref} from "vue";

export default {


setup(){
  let isOwner =ref(false)
  // let recipeId = useRoute().params.id

    

    let currentRecipe = ''

   
         
 
  return{ isOwner, currentRecipe} 
}
}
</script>

<style scoped>
.form-layout{
  width: 60%;
  margin: 10em auto;
}
</style>