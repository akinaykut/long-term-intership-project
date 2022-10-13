<template>
  <div class="application-main">
    <component
      :is="activeSection"
      @setActiveComponent="setActiveSection"
    ></component>
  </div>
</template>

<script>
import PersonalDetails from "./PersonalDetails.vue";
import ApplicationDetails from "./ApplicationDetails.vue";
import ApplicationComplete from "./ApplicationComplete.vue";

export default {
  components: {
    PersonalDetails,
    ApplicationDetails,
    ApplicationComplete,
  },
  data() {
    return {
      activeSection: "personal-details",
    };
  },
  methods: {
    setActiveSection(data) {
      this.activeSection = data;
      this.$emit("activeComponent", data);
    },
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
