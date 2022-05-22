import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

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


//TODO:

//updateProfileData
const auth = getAuth();
updateProfile(auth.currentUser, {
  displayName: "Jane Q. User", photoURL: "https://example.com/jane-q-user/profile.jpg"
}).then(() => {
  // Profile updated!
  // ...
}).catch((e) => {
  console.log(e.error);
  // An error occurred
  // ...
});





export { registrationNewUser }