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
      />
      <div id="emailHelp" class="form-text">
        We'll never share your email with anyone else.
      </div>
    </div>
    <div class="mb-3">
      <label for="exampleInputPassword1" class="form-label">Password</label>
      <input type="password" class="form-control" id="exampleInputPassword1" />
    </div>
    <div class="mb-3 form-check">
      <input type="checkbox" class="form-check-input" id="exampleCheck1" />
      <label class="form-check-label" for="exampleCheck1">Check me out</label>
    </div>
    <button type="submit" class="btn btn-primary">Login</button>
  </form>
</template>

<script>
export default {
  methods: {
    setLoginOrRegister(data) {
      this.$emit("getLoginOrRegister", data);
    },
  },
};
</script>

<style scoped>
.login {
  background-color: rgb(7, 86, 205);
  width: 40%;
  border: 1px rgb(2, 2, 47) solid;
  padding: 2%;
}
</style>
