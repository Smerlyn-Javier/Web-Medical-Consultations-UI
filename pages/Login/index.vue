<template>
  <div class="container">
    <div class="login">

      <form action class="form">
      <h6 class="error" v-if="error" style="color:red">DATOS INCORRECTOS</h6>
        <input type="text" placeholder="Usuario" class="user-name" v-model="user" required />
        <input type="password" placeholder="Contraseña" class="password" required v-model="pass" />

        <a :href="NEXT">
          <input type="button" class="send-button" value="INICIAR SESION" @click="IniciarSesion" />
        </a>
      </form>

    </div>
  </div>
</template>
<script>
import {LoginUser} from '../../services/login.service'
export  default {
  name: "login",
  data() {
    return {
      pass: "",
      user: "",
      NEXT: "/home",
      error: false
    };
  },
  methods: {
   async IniciarSesion () {

      const user = await new LoginUser().login(this.user,this.pass);
      console.log(user)
      if (user.userName === "SM-ADMIN" && user.userPassword === "admin") {
        this.NEXT = "/home";
        this.error = false;
      } else {
        this.NEXT = "/home";
        this.error = false;
      }


    }
  }
};
</script>
<style>
.form{
  max-width: 300px;
  margin: 100px auto;
  padding: 10px;
  display: grid;
  grid-template-columns: 100%;
  justify-content: center;
  background-color: bisque;
}
</style>
