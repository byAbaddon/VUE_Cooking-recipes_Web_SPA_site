<template>
  <form class="text-center p-5 form-layout" action="#/create" method="POST" id="share-receipt-form">
    <p class="h4 mb-4">Share Recipe</p>

    <input type="text" id="defaultRecipesShareMeal" name="meal" class="form-control mb-4" placeholder="Meal">

    <input type="text" id="defaultRecipesShareIngredients" name="ingredients" class="form-control mb-4"
        placeholder="Ingredients">

    <textarea type="text" id="defaultRecipesShareMethodOfPreparation" name="prepMethod" class="form-control mb-4"
        placeholder="Method of preparation"></textarea>

    <textarea type="text" id="defaultRecipesShareDescription" name="description" class="form-control mb-4"
        placeholder="Description"></textarea>

    <input type="text" id="defaultRecipesShareFoodImageURL" name="foodImageURL" class="form-control mb-4"
        placeholder="Food Image URL...">

    <select name="category">
        <option selected>Select category...</option>
        <option >Vegetables and legumes/beans</option>
        <option >Fruits</option>
        <option >Grain Food</option>
        <option >Milk, cheese, eggs and alternatives</option>
        <option >Lean meats and poultry, fish and alternatives</option>
    </select>

    <button class="btn btn-danger w-25 m-auto my-4 btn-block" type="submit">Share it</button>
</form>
</template>

<script>
export default {

}
</script>

<style scoped >

form {
  width: 38%;
  height: 40em;
  margin: 0 auto;
  margin-top: 2em;
  
  }

textarea{
    height: 6em;
}


</style>