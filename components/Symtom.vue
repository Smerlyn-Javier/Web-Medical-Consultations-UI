<template>
  <div class="symtom-container">
  <el-input
  class="demo-input-label"
    placeholder="Selecciona tus sintomas"
    prefix-icon="el-icon-search"
    v-model="input1">
  </el-input>
    <div class="buttons-container">
  <el-button @click="addSymptom('Dolor de cabeza')" round>Dolor de cabeza</el-button>
  <el-button @click="addSymptom('Fiebre')" type="info" round >Fiebre</el-button>
  <el-button @click="addSymptom('Dolor muscular')" type="primary" round>Dolor muscular</el-button>
  <el-button @click="addSymptom('Vision borrosa')" type="success" round>Vision borrosa</el-button>
  <el-button @click="addSymptom('Dolor de estomago')" type="info" round>Dolor de estomago</el-button>
  <el-button @click="addSymptom('Dolor de espalda')" type="danger" round>Dolor de espalda</el-button>
</div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      input1: '',

    }
  },
    methods: {
    addSymptom (symt) {

      this.input1 = symt

    }
  }
}

</script>
<style scoped>
.buttons-container{
  margin: 0px auto;
  width: 500px;
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
}

  .demo-input-label {
    margin-bottom: 50px;
    display: inline-block;
    width: 100%;
  }
</style>
