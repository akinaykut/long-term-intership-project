<template>
  <div>
    <the-header></the-header>
    <div class="content container">
      <application-header></application-header>
      <application-type-panel></application-type-panel>
      <application-main></application-main>
    </div>

    <the-footer></the-footer>
  </div>
</template>

<script>
import TheHeader from "../components/TheHeader.vue";
import TheFooter from "../components/TheFooter.vue";
import ApplicationHeader from "../components/ApplicationHeader.vue";
import ApplicationTypePanel from "../components/ApplicationTypePanel.vue";
import ApplicationMain from "../components/ApplicationMain.vue";

export default {
  components: {
    TheHeader,
    TheFooter,
    ApplicationHeader,
    ApplicationTypePanel,
    ApplicationMain,
  },
};
</script>

<style scoped>
.content {
  padding: 10% 0;
  height: 100vh;
}
</style>
