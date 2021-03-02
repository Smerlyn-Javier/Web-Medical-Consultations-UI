<template>
  <div class="container">
    <div class="login">
      <div class="logo">
        <a class="img-logo" href="#inicio">
          <img
            class="img"
            src=""
            alt = " real city logo "
          />
        </a>
        <a class="name-logo" href="/">Ciudad Real II</a>
      </div>
      <h6 class="error" v-if="error">DATOS INCORRECTOS</h6>
      <form action class="form">
        <input type="text" placeholder="Usuario" class="user-name" v-model="user" required />
        <input type="password" placeholder="Contraseña" class="password" required v-model="pass" />

        <a :href="NEXT">
          <input type="button" class="send-button" value="INICIAR SESION" @click="IniciarSesion" />
        </a>
      </form>
      <div class="contact">

        <a href="mailto:smerlyn88@gmail.com" class="contact-email">Contáctanos</a>
      </div>
    </div>
  </div>
</template>
<script>
export  default {
  name: "login",
  data() {
    return {
      pass: "",
      user: "",
      NEXT: "#",
      error: false
    };
  },
  methods: {
    StartSession () {
      if (this.pass === "JVCRII-Admin" && this.user === "12345678") {
        this.NEXT = "/admin/consult";
        this.error = false;
      } else {
        this.error = true;
      }
    }
  }
};
</script>
<style lang="css">

</style>
