<template>
  <div>
    <the-header></the-header>
    <div class="content container">
      <application-header></application-header>

      <!-- Personal details componenti active olduğunda panel de aktif olmalı -->
      <application-type-panel v-if="isActive"></application-type-panel>
      <application-main @activeComponent="setIsActive"></application-main>
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
  data() {
    return {
      isActive: true,
    };
  },
  methods: {
    setIsActive(data) {
      if (data === "personal-details") {
        this.isActive = true;
      } else {
        this.isActive = false;
      }
      console.log(this.isActive);
    },
  },
};
</script>

<style scoped>
.content {
  padding: 10% 0;
  height: 100vh;
}
</style>
