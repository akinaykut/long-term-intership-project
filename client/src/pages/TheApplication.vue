<template>
  <div>
    <the-header></the-header>
    <div class="content container">
      <application-header></application-header>
    </div>

    <the-footer></the-footer>
  </div>
</template>

<script>
import ApplicationHeader from "../components/ApplicationHeader.vue";
import TheFooter from "../components/TheFooter.vue";
import TheHeader from "../components/TheHeader.vue";

export default {
  components: {
    ApplicationHeader,
    TheHeader,
    TheFooter,
  },
};
</script>

<style scoped>
.content {
  padding-top: 10%;
  height: 100vh;
}
</style>
