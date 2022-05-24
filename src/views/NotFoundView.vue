<template>
  <div class="not-found">
    <div class="image">
      <img src="@/assets/angryChef.png" width="1000" alt="chef-pic" />
    </div>
    <h1 >The Page Not Found !</h1>

    <div class="navigate">
      <router-link to="/">
        <input type="button" value="Home page"  class="font-effect-fire-animation" />
      </router-link>
    </div>
  </div>
</template>

<script>
export default {};
</script>


<style scoped>
.image {
  display: flex;
  justify-content: center;
  margin-top: 2em;
  margin-left: 24em;
}

h1 {
  color: white;
  text-align: center;
  font-weight: bold;
}
.navigate {
  display: flex;
  justify-content: center;
}

.navigate span {
  color: white;
}

input {
padding: 6px;
color: crimson;
background: black;
border: 1px solid azure;
border-radius: 6px;
border-style: ridge;
font-weight: bold;
font-size: larger;

}

input:hover {
  color: rgb(252, 252, 252);
  cursor: pointer;
}


@import url(https://fonts.googleapis.com/css?family=Anton&effect=fire-animation);
html {
  background: #ddd;
}

h1 {
  font-family: 'Anton', sans-serif;
  /* font-size: 60px; */
}


</style>