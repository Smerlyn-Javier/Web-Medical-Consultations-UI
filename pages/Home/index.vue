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
          <!-- <Search/> -->
          <Symtom/>

          <img class="corazon" src="~/assets/corazon.png" alt="">
          <img class="pulso" src="~/assets/pulso.png" alt="">

            <el-button type="warning" @click="consultar" round>Iniciar Consulta</el-button>

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
import Swal from 'sweetalert2'
export default {
  components:{
     NavMenu,
     Logo,
     User,
     Search,
     Symtom,
     Chat
  },
  methods:{
    consultar(){
        Swal.fire({
  title: 'Selecciones el nombre de su medico',
  input: 'text',
  inputAttributes: {
    autocapitalize: 'off'
  },
  showCancelButton: true,
  confirmButtonText: 'Buscar',
  showLoaderOnConfirm: true,
  preConfirm: (login) => {
    return fetch(`//api.github.com/users/${login}`)
      .then(response => {
        if (!response.ok) {
          throw new Error(response.statusText)
        }
        return response.json()
      })
      .catch(error => {
        Swal.showValidationMessage(
          `Fallo la perticion su medico no fue encontrado: ${error}`
        )
      })
  },
  allowOutsideClick: () => !Swal.isLoading()
}).then((result) => {
  if (result.isConfirmed) {
    Swal.fire({
      title: `${result.value.login} le atendera en unos minutos ...`,
      imageUrl: result.value.avatar_url
    })
  }
})
    }
  }


}
</script>

<style scoped>
body{
  background-color: #FAFDFE;
}
.home-container {
  display: grid;
  grid-template-columns: 20% 80%;
}
.lef-container {
  border-right: 2px solid #F0F4F9;

}

.center-container{
  display: grid;
  grid-template-columns: 100% ;
}
.top-container {
  display: flex;
  justify-content: flex-end;
  padding: 20px;

  height: 112px;
  border-bottom: 2px solid #F0F4F9;
}

.content-container {
  display: grid;
  grid-template-columns: 50% 50%;

  height: 100vh;
}

.searche-container{
  display: grid;
  justify-content: center;
  align-items: center;
  padding: 100px;

  border-right: 2px solid #F0F4F9;
  text-align: center;
}

.chat-container{
  padding: 20px;

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
