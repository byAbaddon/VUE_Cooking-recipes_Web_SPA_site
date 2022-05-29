<template>
  <div>
    <all-recipes-component     :allRecipes="allRecipes" v-if="path == 'recipe'" />
    <edit-recipe-component     :allRecipes="allRecipes" v-if="path == 'edit'" />
    <details-recipe-component  :allRecipes="allRecipes" v-if="path == 'details'" />
  </div>
</template>


<script>
import {} from "vue";
import AllRecipesComponent from "@/components/AllRecipesComponent.vue";
import EditRecipeComponent from "@/components/EditRecipeComponent.vue";
import DetailsRecipeComponent from "@/components/DetailsRecipeComponent.vue";
import router from "@/router";
import { db} from '@/service/sdk'      
import { collection, onSnapshot } from "firebase/firestore";

import {ref, computed } from "vue";

export default {
  components: {
    AllRecipesComponent,
    EditRecipeComponent,
    DetailsRecipeComponent,
  },
  setup() {
    let allRecipes = ref([])
    onSnapshot(collection(db, "recipes"), (doc) => doc.docs.forEach(x => allRecipes.value.push( Object.assign({}, {id: x.id} , x.data()))))


    let path = computed(() => {
      return router.currentRoute.value.name;
    });

    return {allRecipes, path };
  },
};
</script>




