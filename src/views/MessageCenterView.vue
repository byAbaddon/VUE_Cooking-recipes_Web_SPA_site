<template>
  <section>
    <h1>MESSAGE CENTER</h1>
    <div class="image">
      <img src="@/assets/images/background/1.png" width="800" alt="pic" />
    </div>
    <div class="message">
      <h3>{{message}}</h3>
      <h5 v-show="showRedirect">Redirect...</h5>
    </div>
  </section>
</template>

<script>
// import router from '@/router'
import {useRoute} from "vue-router";
import { ref, onUnmounted, onMounted} from "vue";

export default {
  setup() {
  onMounted(() => {
      // document.getElementsByTagName('html').style.display = 'none' 
      // document.getElementsByTagName('header').style.display = 'none' 
      document.getElementsByTagName('footer').style.display = 'none' 
     })


    onUnmounted(() => {
      document.getElementsByTagName('html').style.display = 'flex' 
      document.getElementsByTagName('header').style.display = 'block' 
      document.getElementsByTagName('footer').style.display = 'block' 
    })

    let message = ref('')
    let showRedirect = ref(false)
    let pathFrom = useRoute().query.from
    console.log(pathFrom);
     
    switch (pathFrom) {
      case 'share': message.value = 'Success add new recipe!'; break
      case 'archive': message.value = 'This recipe was deleted success!'; break
      
     
    }

    setTimeout(() => { showRedirect.value = true }, 2000);
     
    // setTimeout(() => {
    //    router.push('/category')
    // }, 3000);
 
   return {message,showRedirect}
  }
}
</script>

<style scoped>
section {
  background: black;
}

h1 {
  font-weight: bold;
  text-align: center;
  color: white;
  margin: 1em 0 0.5em 0;
}

.image {
  text-align: center;
}

.image img {
  height: 30em;
  width: 80em;
}

.message{
  margin: 5em auto;
 
}

h3{
  color:aqua;
  text-align: center;
}

h5{
  text-align: center;
  color:yellow;
}

</style>