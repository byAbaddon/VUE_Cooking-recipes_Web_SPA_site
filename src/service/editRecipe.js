import { db } from '@/service/sdk'                
import { doc, setDoc } from "firebase/firestore"; 

 const editRecipe = async (key, objectData) => {
   await setDoc(doc(db, "recipes", key), objectData)
 }


 export default editRecipe