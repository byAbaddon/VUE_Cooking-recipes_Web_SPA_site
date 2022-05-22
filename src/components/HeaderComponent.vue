<template>
  <header class="masthead mb-auto">
    <div class="inner">
      <h3 class="masthead-brand apple">
        <span> <i class="bi bi-apple"></i> </span> MasterChef
      </h3>

      <nav
        class="nav nav-masthead justify-content-center"
        @click.prevent="onPath"
      >
        <a class="nav-link">Home</a>
        <a class="nav-link">Welcome, {{ names }}!</a>
        <a class="nav-link">ShareRecipe</a>
        <a class="nav-link">Logout</a>
        <a class="nav-link">Login</a>
        <a class="nav-link">Register</a>
      </nav>
    </div>
  </header>
</template>

<script>
import { ref } from "vue";
import router from "@/router"

export default {
 
  setup() {
    const names = ref("User");
   
   
    const onPath = e => {
      let currentPath = e.target.text.toLowerCase()
      
      if (currentPath == 'logout') {
         console.log("Logout success. Storage was clear!")
         localStorage.clear()
         router.push('/')
         return
      }

      currentPath == 'sharerecipe' ? currentPath = 'share' : currentPath == 'home' ? currentPath = '/' : null
      if (currentPath.split(',')[0] != 'welcome') {
          router.push(currentPath)
      }
    
       
        
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
  margin-left: 1em;
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



