<template>
  <div>
    <all-recipes-component v-if="path == 'recipe'" />
    <edit-recipe-component v-if="path == 'edit'" />
    <details-recipe-component v-if="path == 'details'" />
  </div>
</template>


<script>
import {} from "vue";
import AllRecipesComponent from "@/components/AllRecipesComponent.vue";
import EditRecipeComponent from "@/components/EditRecipeComponent.vue";
import DetailsRecipeComponent from "@/components/DetailsRecipeComponent.vue";
import { computed } from "vue";
import router from "@/router";

export default {
  components: {
    AllRecipesComponent,
    EditRecipeComponent,
    DetailsRecipeComponent,
  },
  setup() {
    let path = computed(() => {
      return router.currentRoute.value.name;
    });

    return { path };
  },
};
</script>




