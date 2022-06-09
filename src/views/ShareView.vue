<template>
  <form
    class="text-center p-5 form-layout"
    id="share"
    ref="form"
    @submit.prevent="submit"
  >
    <p class="h4 mb-4">Share Recipe</p>

    <input
      type="text"
      name="meal"
      class="form-control mb-4"
      placeholder="Meal"
      required
      minlength="2"
      maxlength="50"
      value="Green Beans and Potatoes"
    />

    <input
      type="text"
      name="ingredients"
      class="form-control mb-4"
      placeholder="Ingredients. Attention! Put DOT, in every row end!"
      rows="13"
      minlength="10"
      maxlength="1000"
      required
      value=" 1 pound fresh green beans, trimmed.
                1 pound small new potatoes, halved.
                water to cover.
                2 (1 inch) cubes salt pork, or more to taste "
    />

    <textarea
      type="text"
      name="preparation"
      class="form-control mb-4"
      placeholder="Method of preparation"
      rows="13"
      minlength="10"
      maxlength="1000"
      required
      v-bind:value="`Layer green beans and potatoes in the bottom of a slow cooker. Add just enough water to barely cover. Top with salt pork.
                    Step 2 Cover and cook on Low until tender, 6 to 8 hours.`"
    ></textarea>

    <textarea
      type="text"
      name="description"
      class="form-control mb-4"
      placeholder="Description"
      rows="13"
      minlength="10"
      maxlength="1000"
      required
      :value ="'This easy dish is one of our favorite summertime meals, fresh green beans and potatoes thrown in a slow cooker!'"
    ></textarea>

    <input
      type="text"
      name="image"
      class="form-control mb-4"
      placeholder="Food Image URL..."
      minlength="10"
      maxlength="200"
      required
      value="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F7016624.jpg&w=596&h=399&c=sc&poi=face&q=60"
    />
    <p>{{ value }}</p>
    <select name="category" required>
      <option selected>Select category...</option>
      <option>Vegetables and legumes/beans</option>
      <option>Fruits</option>
      <option>Grain Food</option>
      <option>Milk, cheese, eggs and alternatives</option>
      <option>Lean meats and poultry, fish and alternatives</option>
      <option>Desserts</option>
      <option>Cocktails</option>
    </select>

    <button class="btn btn-danger w-25 m-auto my-4 btn-block">Share it</button>
  </form>
</template> 

<script>

import {} from "vue";
import addRecipe  from "@/service/createRecipe";
import router from "@/router"
export default {
  setup() {
    const submit = () => {
      const form = new FormData(document.getElementById("share"));
      const meal = form.get("meal").trim();
      const ingredients = form.get("ingredients").trim();
      const preparation = form.get("preparation").trim();
      const description = form.get("description").trim();
      const image = form.get("image").trim();
      const category = form.get("category");
      // console.log(meal, ingredients, preparation, description, image, category)
      if (
        category !== "Select category..." &&
        /[http://|https://]/.test(image)
      ) {
          addRecipe({
              meal, ingredients, preparation, description, image, category, likes: 0, voters: [],
              creatorId: JSON.parse(localStorage.getItem('auth')).uid
              })
            .then(() => {
              console.log("Success add new recipe")
              router.push({ name: 'message', query: { 'from': 'share' }})
            })
          .catch((e) => console.log(e.error));
      }
    };
    return { submit };
  },
};
</script>

<style scoped >
form {
  width: 38%;
  height: 40em;
  margin: 0 auto;
  margin-top: 2em;
}

textarea {
  height: 6em;
}
</style>