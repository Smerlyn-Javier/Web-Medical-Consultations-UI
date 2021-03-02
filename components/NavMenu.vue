
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
            <a href="/medic" style="text-decoration:none">
            <i class="el-icon-notebook-2"></i>
            <span>Doctores</span>
            </a>
          </el-menu-item>

          <el-menu-item index="2">
            <a href="/home" style="text-decoration:none">
            <i class="el-icon-collection"></i>
            <span>Citas</span>
            </a>
          </el-menu-item>

          <el-menu-item index="3">
            <a href="/home" style="text-decoration:none">
            <i class="el-icon-chat-dot-round"></i>
            <span>Consulta</span>
            </a>
          </el-menu-item>

          <el-menu-item index="4">
            <a href="/registro" style="text-decoration:none">
            <i class="el-icon-chat-dot-round"></i>
            <span>Registros</span>
            </a>
          </el-menu-item>

             <el-menu-item index="5">
            <a href="/login" style="text-decoration:none">
            <i class="el-icon-setting"></i>
            <span>Salir</span>
            </a>
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
