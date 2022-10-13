<template>
  <div>
    <h1>Application Details</h1>
    <button class="btn btn-success" @click="setActiveComponent">İleri</button>
  </div>
</template>

<script>
export default {
  methods: {
    setActiveComponent() {
      this.$emit("setActiveComponent", "application-complete");
    },
  },
};
</script>

<style scoped></style>
