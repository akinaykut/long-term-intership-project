<template>
  <div class="application-main">
    <component :is="activeSection"></component>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeSection: "personal-details",
    };
  },
};
</script>

<style scoped>
.application-main {
  height: 100%;
  border: 1px solid darkgrey;
  margin: 10px 0;
}
</style>
