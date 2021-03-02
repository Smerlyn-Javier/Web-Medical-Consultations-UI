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
        <h1>content</h1>
      </div>
      <!-- CONTENT -->
    </div>

  </div>
</template>

<script>
import NavMenu from '~/components/NavMenu'
import Logo from '~/components/Logo'
import User from '~/components/User'
export default {
  components:{
     NavMenu,
     Logo,
     User
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
  background-color: bisque;
  height: 100vh;
}
</style>
