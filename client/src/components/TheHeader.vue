<template>
  <!--  <nav>
    <div class="container">
      <div class="navbar-header container">
        <a class="navbar-brand" href="/"
          ><img src="" class="img-responsive margin-top10" alt="Cimer Logo"
        /></a>
        <a
          class="navbar-brand pull-right"
          href="http://www.iletisim.gov.tr"
          target="_blank"
          ><img
            src="/images/iletisim-baskanligi-logo.png?v=_id-guvBHUWtVQ43foldRqavdgQvBumAvLLVFVq8sZU"
            class="img-responsive"
            alt="İletişim Başkanlığı Logo"
        /></a>
      </div>
    </div>
  </nav> -->

  <nav class="navbar-fixed-top">
    <div class="container">
      <div class="navbar-header">
        <div class="navbar-item1">LOGO</div>
        <div class="navbar-item2">FIMER</div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style scoped>
.navbar-fixed-top {
  position: fixed;
  right: 0;
  left: 0;
  z-index: 1030;
}
nav {
  padding: 2%;
  background-color: rgb(88, 85, 85);
}
.navbar-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.navbar-item1 {
  background-color: rgb(179, 48, 48);
  width: 50%;
  height: 30px;
  padding: 3%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.navbar-item2 {
  background-color: palegreen;
  width: 50%;
  height: 30px;
  padding: 3%;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
