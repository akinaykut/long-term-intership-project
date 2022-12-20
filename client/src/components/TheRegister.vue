<template>
  <form class="register">
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
      <label for="name" class="form-label">Name</label>
      <input type="text" class="form-control" id="name" v-model="name" />
    </div>
    <div class="mb-3">
      <label for="surname" class="form-label">surname</label>
      <input type="text" class="form-control" id="surname" v-model="surname" />
    </div>
    <div class="mb-3">
      <label for="email" class="form-label">email</label>
      <input type="email" class="form-control" id="email" v-model="email" />
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
    <div class="mb-3">
      <label for="tc_kimlik" class="form-label">tc kimlik</label>
      <input
        type="number"
        class="form-control"
        id="tc_kimlik"
        v-model="tc_kimlik"
      />
    </div>
    <div class="mb-3">
      <label for="user_type" class="form-label">Kullanıcı tipi</label>
      <select v-model="user_type">
        <option value="student">Öğrenci</option>
        <option value="academical_personel">Akedemik Personel</option>
        <option value="management_personel">İdari Personel</option>
        <option value="citizen">Vatandaş</option>
      </select>
    </div>
    <button
      type="button"
      class="btn btn-primary"
      @click.prevent="handleRegister"
    >
      Register
    </button>
  </form>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      name: "",
      surname: "",
      email: "",
      password: "",
      tc_kimlik: 0,
      user_type: "",
    };
  },
  methods: {
    setLoginOrRegister(data) {
      this.$emit("getLoginOrRegister", data);
    },

    handleRegister() {
      console.log("handleRegister");

      axios.post("http://localhost:5000/users", {
        name: this.name,
        surname: this.surname,
        email: this.email,
        password: this.password,
        tc_kimlik: this.tc_kimlik,
        user_type: this.user_type,
      });
    },
  },
};
</script>

<style scoped>
.register {
  width: 40%;
  border: 1px rgb(2, 2, 47) solid;
  padding: 2%;
}
</style>
