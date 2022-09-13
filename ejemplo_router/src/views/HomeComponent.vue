<template>
  <router-view></router-view>

  <div class="home">

    <h1>Home</h1>
    <p v-if="userLogged">Token: {{userLogged}}</p>
  </div>
</template>


<script>

import auth from "@/logic/auth";
export default {
  computed: {
    userLogged() {
      return auth.getUserLogged();
    }
  }
};
</script>

<style>
</style>