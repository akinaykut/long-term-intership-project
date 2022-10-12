<template>
  <div class="container main">
    <component
      :is="loginOrRegister"
      @getLoginOrRegister="handleLoginOrRegister"
    ></component>
  </div>
</template>

<script>
import TheLogin from "./TheLogin.vue";
import TheRegister from "./TheRegister.vue";

export default {
  components: {
    TheLogin,
    TheRegister,
  },
  data() {
    return {
      loginOrRegister: "the-login",
    };
  },
  methods: {
    handleLoginOrRegister(data) {
      this.loginOrRegister = data;
      console.log(this.loginOrRegister);
    },
  },
};
</script>

<style scoped>
.main {
  height: 100vh;
  padding-top: 10%;
}
</style>
