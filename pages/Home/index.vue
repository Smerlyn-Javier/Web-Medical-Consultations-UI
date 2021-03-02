<template>
  <div class="home-container">
    <!-- LEF -->
    <div class="lef-container">
      <Logo/>
      <NavMenu/>
    </div>
    <!-- LEF -->

    <div class="center-container">
      <!-- TOP -->
      <div class="top-container">
        <User/>
      </div>
      <!-- TOP -->
      <!-- CONTENT -->
      <div class="content-container">
        <div class="searche-container">
          <h1>SELECCIONE SU SINTOMA 🩺</h1>
          <Search/>
          <Symtom/>

          <img class="corazon" src="~/assets/corazon.png" alt="">
          <img class="pulso" src="~/assets/pulso.png" alt="">

            <el-button type="warning" round>Iniciar Consulta</el-button>

        </div>
        <div class="chat-container">
            <Chat/>
        </div>
      </div>
      <!-- CONTENT -->
    </div>

  </div>
</template>

<script>
import NavMenu from '~/components/NavMenu'
import Logo from '~/components/Logo'
import User from '~/components/User'
import Search from '~/components/Search'
import Symtom from '~/components/Symtom'
import Chat from '~/components/Chat'

export default {
  components:{
     NavMenu,
     Logo,
     User,
     Search,
     Symtom,
     Chat
  }


}
</script>

<style scoped>
.home-container {
  display: grid;
  grid-template-columns: 20% 80%;
}
.lef-container {
  background-color: azure;
}

.center-container{
  display: grid;
  grid-template-columns: 100% ;
}
.top-container {
  display: flex;
  justify-content: flex-end;
  padding: 20px;
  background-color: grey;
  height: 112px;
}

.content-container {
  display: grid;
  grid-template-columns: 50% 50%;
  background-color: bisque;
  height: 100vh;
}

.searche-container{
  display: grid;
  justify-content: center;
  align-items: center;
  padding: 100px;
  background-color: red;
  text-align: center;
}

.chat-container{
  padding: 20px;
  background-color: blue;
}

.corazon{
  margin: 20px auto;
  width: 50%;
}
.pulso{
  margin-bottom: 20px;
  margin: 0px auto;
  width: 50%;
}

</style>
