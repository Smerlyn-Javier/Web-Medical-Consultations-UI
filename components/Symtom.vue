<template>
  <div class="symtom-container">
    <div class="buttons-container">
  <el-button round>Round</el-button>
  <el-button round>Round</el-button>
  <el-button type="primary" round>Primary</el-button>
  <el-button type="success" round>Success</el-button>
  <el-button type="info" round>Info</el-button>
  <el-button type="danger" round>Danger</el-button>
</div>
  </div>
</template>

<style scoped>
.buttons-container{
  margin: 0px auto;
  width: 500px;
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
}
</style>
