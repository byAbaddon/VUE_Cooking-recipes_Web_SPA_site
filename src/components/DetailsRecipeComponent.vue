<template>
  <div class="row form-layout p-5">
    <div class="col-md-12">
      <div class="recepieInfo">
        <div class="detailsFoodImage">
          <img :src="currentRecipe.image" alt="foodImageURL" width="300" />
        </div>

        <div class="infoPack">
          <h3 class="my-3">{{ currentRecipe.meal }}</h3>
          <p class="prep-method">{{ currentRecipe.preparation }}</p>
          <p class="description">{{ currentRecipe.description }}</p>
        </div>

        <div class="detailsIngredients">
          <h3 class="my-3 ingredient">Ingredients</h3>
          <ul
            v-for="(ingredient, index) of currentRecipe.ingredients
              ? currentRecipe.ingredients.split('.')
              : null"
            :key="index"
          >
            <li>{{ ingredient }}</li>
          </ul>
        </div>

        <div class="actions">
          <div v-if="isOwner">
            <a class="btn btn-danger" href="#/delete/{{'objectId'}}">Archive</a>
            <a class="btn btn-info" href="#/edit/{{'objectId'}}">Edit</a>
          </div>
          <div v-else>
            <a class="btn btn-success" href="#/like/{{'objectId'}}"
              >Likes: {{ "likes" }}</a
            >
          </div>
        </div>


      </div>
    </div>
  </div>
</template>

<script>
import { loadDetails } from "@/service/detailsRecipe";
import { useRoute } from "vue-router";
import { ref, onUnmounted} from "vue";

export default {
  setup() {
    let isOwner = ref(false);
    let recipeId = useRoute().params.id;
    let currentRecipe = ref("");

    loadDetails(recipeId).then((e) => (currentRecipe.value = e));
 
    document.querySelector('#footer').style.display = 'none'
    onUnmounted(() => document.querySelector('#footer').style.display = 'block')
 
    return { isOwner, currentRecipe, };
  },
};
</script>



<style scoped>
.form-layout {
  width: 60%;
  margin: 1em auto;
}

.detailsIngredients > ul {
  margin:0;
}

.actions{
  margin-top: 1.5em;
}

img {
 max-width: 300px;
float: inline-end;
margin: 1em;
max-height: 14em;
}

ul {
  display:flex;
}

li {
  flex-direction: row;
}


</style>