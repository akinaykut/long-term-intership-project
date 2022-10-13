<template>
  <div>
    <div class="row">
      <div class="info-cell">
        <label for="tc-number" class="info-label">TC Kimlik</label>
        <input type="text" value="23165497811" />
      </div>
      <div class="info-cell">
        <label for="name-surname" class="info-label">Ad Soyad</label>
        <input type="text" value="Akın Aykut" />
      </div>
    </div>
    <div class="row">
      <div class="info-cell">
        <label for="Adres" class="info-label">Adres</label>
        <textarea>write something </textarea>
      </div>

      <div class="info-cell">
        <div class="info-cell">
          <label for="IL" class="info-label">İl</label>
          <input type="text" value="" />
        </div>
        <div class="info-cell">
          <label for="Ilce" class="info-label">İlçe</label>
          <input type="text" value="" />
        </div>
      </div>
    </div>
    <div class="row">
      <div>
        <button class="btn btn-success" @click="setActiveComponent">
          İleri
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    setActiveComponent() {
      this.$emit("setActiveComponent", "application-details");
    },
  },
};
</script>

<style scoped>
.info-cell {
  width: 50%;
  display: grid;
}
.info-label {
  font-weight: bold;
}
</style>
