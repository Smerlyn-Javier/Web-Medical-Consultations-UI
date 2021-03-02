
<template>
  <div class="container">
    <el-row class="tac">
      <el-col :span="24">
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
        >

          <el-menu-item index="1">
            <i class="el-icon-notebook-2"></i>
            <span>Doctores</span>
          </el-menu-item>

          <el-menu-item index="2">
            <i class="el-icon-collection"></i>
            <span>Citas</span>
          </el-menu-item>

          <el-menu-item index="3">
            <i class="el-icon-chat-dot-round"></i>
            <span>Consulta</span>
          </el-menu-item>

          <el-menu-item index="4">
            <i class="el-icon-setting"></i>
            <span>Registros</span>
          </el-menu-item>


        </el-menu>
      </el-col>
      <el-col :span="12"> </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'NavMenu',
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath)
    },
  },
}
</script>
