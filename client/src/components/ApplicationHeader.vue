<template>
  <div class="container">
    <div class="row">
      <div class="col-lg-8 application-header-left">
        <ul>
          <li class="active">
            <span class="step">1</span>
            <span class="steptext">Kişisel Bilgiler</span>
          </li>
          <li class="middle-of-steps">
            <span class="step">2</span>
            <span class="steptext">Başvuru Detayı</span>
          </li>
          <li class="">
            <span class="step">3</span>
            <span class="steptext">Başvuruyu Tamamla</span>
          </li>
        </ul>
      </div>
      <div class="col-lg-4 application-header-right">
        <router-link to="/application/my-applications">
          <button class="btn btn-primary">Başvurularım</button>
        </router-link>
        <router-link to="/"
          ><button class="btn btn-danger">Çıkış Yap</button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script></script>

<style scoped>
ul {
  display: flex;
  align-items: center;
  height: 100%;
  list-style-type: none;
  padding-left: 0;
}

li {
  padding: 10px;
  border-radius: 5px;
  background-color: darkgrey;
}
.application-header-left {
  padding: 0;
}
.application-header-right {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0;
}
.step {
  background: #fff;
  color: grey;
  display: inline-block;
  font-weight: 700;
  line-height: 1.3em;
  margin-right: 5px;
  text-align: center;
  width: 1.3em;
  border-radius: 15px;
}
.middle-of-steps {
  margin: 0 5px;
}
.active {
  color: #fff;
  background-color: rgb(25, 181, 212) !important;
}
</style>
