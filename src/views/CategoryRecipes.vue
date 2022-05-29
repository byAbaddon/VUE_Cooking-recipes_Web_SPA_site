<template>
  <section>
    <h1>Select category:</h1>
    <article>
      <div v-for="(category, index) of categoryObj" :key="index">
        <p>{{ category.type }}</p>
        <img
          :src="category.img"
          alt="image"
          @click="selectCategory(category.type)"
        />
      </div>
    </article>
  </section>
</template>

<script>
import router from "@/router"
import { reactive } from "vue";

export default {
  setup() {
    const categoryObj = reactive({
      1: {
        type: "Vegetables and legumes/beans",
        img: "https://www.startpage.com/av/proxy-image?piurl=https%3A%2F%2Fwallpaperaccess.com%2Ffull%2F6852839.jpg&sp=1653852603Td288a1a2daf4a76b2444e9e19412697294c5f161f66f887128246cea7ccdfe3e",
      },
      2: {
        type: "Lean meats and poultry, fish and alternatives",
        img: "https://www.startpage.com/av/proxy-image?piurl=http%3A%2F%2Fneu-skin.com%2Fwp-content%2Fuploads%2F2017%2F10%2FDiet20141114.jpg&sp=1653856150T4a7ac863aac1a3039e32a2d880955691ae6c61364cab5c98f28f4715b9b2e557",
      },

      3: {
        type: "Grain Food",
        img: "https://www.startpage.com/av/proxy-image?piurl=https%3A%2F%2Fpreviews.123rf.com%2Fimages%2Folegdudko%2Folegdudko1809%2Folegdudko180900461%2F107707662-grain-food-group.jpg&sp=1653855830T8340272af399c5fa8c671fd4b7109f45ebb5286c720adaaec448c0c6e174d914",
      },
      4: {
        type: "Milk & cheese, eggs and alternatives",
        img: "https://www.startpage.com/av/proxy-image?piurl=https%3A%2F%2Fvideohive.img.customer.envatousercontent.com%2Ffiles%2F5df5affb-7e8b-4caa-93f0-a6f2df6e0d42%2Finline_image_preview.jpg%3Fauto%3Dcompress%252Cformat%26fit%3Dcrop%26crop%3Dtop%26max-h%3D8000%26max-w%3D590%26s%3D711a5fc807d3764ea4df7b865476eb35&sp=1653856018Te59ad463e7652b3e9c59e3119678a1f7a5fd2c1876c07b10a62bad9b1e62cede",
      },
      5: {
        type: "Fruits",
        img: "https://www.startpage.com/av/proxy-image?piurl=https%3A%2F%2Fstore-images.s-microsoft.com%2Fimage%2Fapps.48526.13510798886601649.29155bfc-29e7-4cbc-8f3c-07cfce0201a2.9a85b5d2-68a0-426f-a9fe-36478f201bbe&sp=1653854915T6a42395595104988b2d66a2a74735f88693b1f7061f5b06355f4c925ab242835",
      },

      6: {
        type: "Desserts",
        img: "https://www.startpage.com/av/proxy-image?piurl=https%3A%2F%2Finsanelygoodrecipes.com%2Fwp-content%2Fuploads%2F2020%2F10%2FHomemade-Chocolate-Pasta-500x375.png&sp=1653856687T5bfaa0744cc9d349a044967cdeb3a9e9ed212e54488e50b639f5756446d20af3",
      },

      7: {
        type: "Cocktails",
        img: "https://www.startpage.com/av/proxy-image?piurl=https%3A%2F%2Fimg.freepik.com%2Ffree-photo%2Fselection-various-cocktails-table_140725-2909.jpg%3Fw%3D2000&sp=1653856883T526485f4c20d60c2c0806d8afb8862fd2aaa31ff1074bb1ad055d040dc0a24ef",
      },
    });

    const selectCategory = (e) => {
      const currentCategory = e.split(" ")[0].toLowerCase()
      
      router.push({ name : 'recipe', params : {id : currentCategory} })
    };

    return { categoryObj, selectCategory };
  },
};
</script>


<style scoped>
article {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-flow: wrap;
}

article div {
  margin-bottom: 4em;
}

h1 {
  color: wheat;
  text-align: center;
  margin-bottom: 1em;
}

article img {
  border-radius: 8px;
  width: 400px;
  min-height: 250px;
  max-height: 250px;
}
article p {
  color: mistyrose;
  text-align: center;
  font-style: italic;
  text-decoration: underline;
}

article img:hover {
  cursor: pointer;
  padding: 6px;
  background-image: linear-gradient(red, orange);
  opacity: 0.9;
}
</style>