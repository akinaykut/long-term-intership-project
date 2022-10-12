<template>
  <div>
    <div class="panel-body">
      <div class="application-radio">
        <input
          type="radio"
          id="applicationTypeRequest"
          :value="applicationType"
          name="applicationType"
        />
        <label for="applicationTypeRequest"> İstek </label>
      </div>
      <div class="application-radio">
        <input
          type="radio"
          id="applicationTypeThank"
          :value="applicationType"
          name="applicationType"
        />
        <label for="applicationTypeThank"> Teşekkür </label>
      </div>
      <div class="application-radio">
        <input
          type="radio"
          id="applicationTypeComplaint"
          :value="applicationType"
          name="applicationType"
        />
        <label for="applicationTypeComplaint"> Şikayet </label>
      </div>

      <div class="application-radio">
        <input
          type="radio"
          id="applicationTypeSuggestion"
          :value="applicationType"
          name="applicationType"
        />
        <label for="applicationTypeSuggestion"> Görüş Öneri </label>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      applicationType: "request",
    };
  },
};
</script>

<style scoped>
.panel-body {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border: darkgrey 1px solid;
}

.application-radio {
  padding: 1rem;
}

label {
  padding-left: 5px;
}
</style>
