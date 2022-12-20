<template>
  <form class="login">
    <button
      class="btn btn-primary"
      type="button"
      @click="setLoginOrRegister('the-login')"
    >
      Login
    </button>
    <button
      class="btn btn-success"
      type="button"
      @click="setLoginOrRegister('the-register')"
    >
      Register
    </button>
    <div class="mb-3">
      <label for="exampleInputEmail1" class="form-label">Email address</label>
      <input
        type="email"
        class="form-control"
        id="exampleInputEmail1"
        aria-describedby="emailHelp"
        v-model="email"
      />
      <div id="emailHelp" class="form-text">
        We'll never share your email with anyone else.
      </div>
    </div>
    <div class="mb-3">
      <label for="exampleInputPassword1" class="form-label">Password</label>
      <input
        type="password"
        class="form-control"
        id="exampleInputPassword1"
        v-model="password"
      />
    </div>
    <div class="mb-3 form-check">
      <input type="checkbox" class="form-check-input" id="exampleCheck1" />
      <label class="form-check-label" for="exampleCheck1">Check me out</label>
    </div>
    <!-- <router-link to="/application">
      <button type="submit" class="btn btn-primary">Login</button>
    </router-link> -->
    <button type="button" class="btn btn-primary" @click.prevent="handleLogin">
      login
    </button>
  </form>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    setLoginOrRegister(data) {
      this.$emit("getLoginOrRegister", data);
    },
    handleLogin() {
      axios.post("http://localhost:5000/login", {
        email: this.email,
        password: this.password,
      });
    },
  },
};
</script>

<style scoped>
.login {
  width: 40%;
  border: 1px rgb(2, 2, 47) solid;
  padding: 2%;
}
</style>
