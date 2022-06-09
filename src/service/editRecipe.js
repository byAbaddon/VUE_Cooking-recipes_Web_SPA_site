// import { db } from '@/service/sdk'                
// import { doc, setDoc } from "firebase/firestore"; 

//  const editCurrentRecipe = async (key, objectData) => {
//    await setDoc(doc(db, "recipes", key), objectData)
//  }


//  export default editCurrentRecipe


import { db } from '@/service/sdk'     
import { doc, updateDoc } from "firebase/firestore";


const editCurrentRecipe = async (key, objectData) => {
  const editDone = doc(db, "recipes", key)
  await updateDoc(editDone, objectData)
}

export default editCurrentRecipe