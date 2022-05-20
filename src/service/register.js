import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

// Create new Sing  with (email and pass)  
const registrationNewUser = (email, password) => createUserWithEmailAndPassword(getAuth(), email, password)
    .then((userCredential) => {
      // Signed in 

      const { uid, email }  = userCredential.user
      // console.log('You full data', getAuth().currentUser)
      console.log('You register was successful', uid, email)
      localStorage.setItem('auth', JSON.stringify(userCredential.user)) //save user data )
      this.$router.push('/movies') //redirect to page   

    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log('Error register: ', errorCode, ' - ', errorMessage)
    })


export { registrationNewUser }