<template>
  <form class="text-center p-5 form-layout" @submit.prevent="onSubmit">
    <p class="h4 mb-4">Sign in</p>
    <p> {{emailRules}}</p>
    <input
      type="email"
      id="defaultRegisterFormUsername"
      name="email"
      class="form-control mb-4"
      placeholder="email"
      value="koko@avb.bg"
      required
    />

    <input
      type="password"
      id="defaultRegisterFormPassword"
      name="password"
      class="form-control"
      placeholder="Password"
      minlength="6"
      value="111111"
      required
    />
    <hr />

    <button class="btn btn-danger w-25 m-auto my-4 btn-block" type="submit"
    >
      Sign in
    </button>
  </form>
</template>

<script>
import {singUser} from '@/service/sing'

export default {
  setup() {


    const onSubmit = (e) => {
      const [email, password] = e.currentTarget.querySelectorAll("input");
      if (  /.+@.+\..+/.test(email.value) && password.value.length > 5) {
         singUser(email.value, password.value)
      }
     
    };

    return { onSubmit};
  },
};
</script>


<style scoped>
form {
  width: 30%;
  margin: 10em auto;
}
</style>