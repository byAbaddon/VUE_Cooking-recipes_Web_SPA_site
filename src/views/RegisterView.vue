<template>
  <form class="text-center p-5 form-layout" action="#/register" method="POST">
    <p class="h4 mb-4">Sign up</p>

    <div class="form-row mb-4 user-names">
      <div class="col">
        <input
          type="text"
          id="defaultRegisterFormFirstName"
          class="form-control"
          name="firstName"
          placeholder="First name"
          minlength="2"
          required
        />
      </div>
      <div class="col">
        <input
          type="text"
          id="defaultRegisterFormLastName"
          class="form-control"
          name="lastName"
          placeholder="Last name"
          minlength="2"
          required
        />
      </div>
    </div>

    <input
      type="email"
      id="defaultRegisterFormUsername"
      class="form-control mb-4"
      name="email"
      placeholder="email"
      required
    />
    <input
      type="password"
      id="defaultRegisterFormPassword"
      class="form-control"
      name="password"
      placeholder="Password"
      minlength="6"
      required
    />
    <hr />
    <input
      type="password"
      id="defaultRegisterRepeatPassword"
      class="form-control"
      name="repeatPassword"
      placeholder="Repeat Password"
      minlength="6"
      required
    />
    <button class="btn btn-danger my-4 btn-block w-25 m-auto" type="submit">
      Sign up
    </button>
  </form>
</template>

<script>
import { registrationNewUser } from '@/service/register'
export default {
  setup(){

registrationNewUser()
  }

};
</script>




<style scoped>
form {
  width: 30%;
  margin: 10em auto;
}
/* .user-names {
  
 width: 22em;
  display: flex;
  flex-wrap: wrap-reverse; 
}

#defaultRegisterFormFirstName {
  margin-right: 0em;
}
*/

#defaultRegisterFormLastName {
  margin-top: 1.3em;
}
</style>