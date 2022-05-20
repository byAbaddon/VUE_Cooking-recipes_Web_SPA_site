<template>
  <header class="masthead mb-auto">
    <div class="inner">
      <h3 class="masthead-brand apple">
        <span> <i class="bi bi-apple"></i> </span> MasterChef
      </h3>

      <nav class="nav nav-masthead justify-content-center"  @click.prevent="onPath"    >
        <a class="nav-link" href="">Home</a>
        <a class="nav-link" href="">Welcome, {{ names }}!</a>
        <a class="nav-link" href="/create">Share recipe</a>
        <a class="nav-link" href="/logout">Logout</a>
        <a class="nav-link" href="/login">Login</a>
        <a class="nav-link" href="/register">Register</a>
      </nav>
    </div>
  </header>
</template>

<script>
import { ref } from "vue";
import { useRouter} from 'vue-router'  

export default {
 
  setup() {
    const names = ref("User");
    const router = useRouter()

    function onPath(e) {
        router.path(e.target.text)
      
    } 

    return { names, onPath};
  },
};
</script>

<style scoped>
/*
 * Header
 */
h3 {
  color: green;
  font-size: 1.5em;
  margin-left:1em ;
  padding: 0.5em;
  font-weight: bold;
  /* text-decoration-line: underline; */
}

.nav-masthead .nav-link[data-v-5c833af0] {
    padding: 1em;
}

.masthead {
  margin-bottom: 2rem;
}

.masthead-brand {
  margin-bottom: 0;
}

.nav-masthead .nav-link {
  padding: 0.25rem 0;
  font-weight: 700;
  color: rgba(255, 255, 255, 1);
  background-color: transparent;
  border-bottom: 0.25rem solid transparent;
}

.nav-masthead .nav-link:hover,
.nav-masthead .nav-link:focus {
  border-bottom-color: rgba(255, 255, 255, 0.25);
  color: rgba(255, 255, 255, 0.8);
}

.nav-masthead .nav-link + .nav-link {
  margin-left: 1rem;
}

.nav-masthead a:hover {
  color: #fff;
  border-bottom-color: white;
}

@media (min-width: 48em) {
  .masthead-brand {
    float: left;
  }
  .nav-masthead {
    float: right;
  }
}
</style>



