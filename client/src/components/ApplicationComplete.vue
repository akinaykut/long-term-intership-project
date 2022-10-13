<template>
  <div>
    <h1>Application Complete</h1>
    <router-link to="/application/my-applications">
      <button class="btn btn-success" @click="setActiveComponent">
        Başvuruyu Tamamla
      </button>
    </router-link>
  </div>
</template>

<script>
export default {
  methods: {
    setActiveComponent() {},
  },
};
</script>

<style scoped></style>
