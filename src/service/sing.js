import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const singUser = (email, password) => signInWithEmailAndPassword(getAuth(), email, password)
  .then((userCredential) => {
    const { uid, email }  = userCredential.user
    console.log(`Success login!\nYou id: ${uid}\nYou email: ${email}`)
    localStorage.setItem('auth', JSON.stringify(userCredential.user)) //save user data )
    // this.$router.push('/') //redirect to page   
  })
  .catch((error) => {
    // const errorCode = error.code;
    const errorMessage = error.message;
    console.log(error, ' - ', errorMessage);

  });


export {singUser}