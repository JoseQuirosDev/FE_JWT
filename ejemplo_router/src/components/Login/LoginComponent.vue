<template>
  <div class="login">
    <h1 class="title">Login in the page</h1>
    <form action class="form" @submit.prevent="login">
      <label class="form-label" for="#email">Email:</label>
      <input v-model="email" class="form-input" type="text" id="email" required placeholder="Email">
      <label class="form-label" for="#password">Password:</label>
      <input v-model="pass" class="form-input" type="password" id="password" placeholder="Password">
      <p v-if="error" class="error">Has introducido mal el email o la contraseña.</p>
      <input class="form-submit" type="submit" value="Login">
    </form>

  </div>
</template>
  
<script>
import auth from "@/logic/auth";
export default {
  data: () => ({
    email: "",
    pass: "",
    error: false
  }),
  methods: {
    async login() {
      try {
        await auth.login(this.email, this.pass).then((response) => {// in auth consume the endpoint with axos 
          if (response.status == 200) {  //if the login is successful 
            localStorage.setItem('token', JSON.stringify(response.data.token)) //save the token in local storage
            localStorage.setItem('refresh_token', JSON.stringify(response.data.refreshToken)) //save the token in local storage
            this.$store.dispatch('mockLogin'); // change the variables global LoggedIn, enable the navegation in other routes
            this.$router.push("/"); //push the home component
          }


        });


      } catch (error) {
        console.log(error);
        this.error = true;
      }
    }
  }
};
</script>
  
<style >

</style>
  