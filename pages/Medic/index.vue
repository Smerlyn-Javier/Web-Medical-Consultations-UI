<template>
  <div class="home-container">
    <!-- LEF -->
    <div class="lef-container">
      <Logo />
      <NavMenu />
    </div>
    <!-- LEF -->

    <div class="center-container">
      <!-- TOP -->
      <div class="top-container">
        <User />
      </div>
      <!-- TOP -->
      <!-- CONTENT -->
      <div class="content-container">
        <el-table
          :data="
            tableData.filter(
              (data) =>
                !search ||
                data.name.toLowerCase().includes(search.toLowerCase())
            )
          "
          style="width: 100%"
        >
          <el-table-column label="Date" prop="date"> </el-table-column>
          <el-table-column label="Name" prop="name"> </el-table-column>
          <el-table-column align="right">
            <template slot="header" slot-scope="scope">
              <el-input
                v-model="search"
                size="mini"
                placeholder="Type to search"
              />
            </template>
            <template slot-scope="scope">
              <el-button
                size="mini"
                @click="handleEdit(scope.$index, scope.row)"
                >Edit</el-button
              >
              <el-button
                size="mini"
                type="danger"
                @click="handleDelete(scope.$index, scope.row)"
                >Delete</el-button
              >
            </template>
          </el-table-column>
        </el-table>
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
  components: {
    NavMenu,
    Logo,
    User,
    Search,
    Symtom,
    Chat,
  },

      data() {
      return {
        tableData: [{
          date: '2016-05-02',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles',
        }, {
          date: '2016-05-04',
          name: 'John',
          address: 'No. 189, Grove St, Los Angeles',
        }, {
          date: '2016-05-01',
          name: 'Morgan',
          address: 'No. 189, Grove St, Los Angeles',
        }, {
          date: '2016-05-03',
          name: 'Jose',
          address: 'No. 189, Grove St, Los Angeles',
        }],
        search: ''
      }
    },
    methods: {
      handleEdit(index, row) {
        console.log(index, row);
      },
      handleDelete(index, row) {
        console.log(index, row);
      }
    },
}
</script>

<style scoped>
.home-container {
  display: grid;
  grid-template-columns: 20% 80%;
}
.lef-container {
  border-right: 2px solid #f0f4f9;
}

.center-container {
  display: grid;
  grid-template-columns: 100%;
}
.top-container {
  display: flex;
  justify-content: flex-end;
  padding: 20px;

  height: 112px;
  border-bottom: 2px solid #f0f4f9;
}

.content-container {
  display: grid;
  grid-template-columns: 100%;
  padding: 50px;
  height: 100vh;
}

.searche-container {
  display: grid;
  justify-content: center;
  align-items: center;
  padding: 100px;

  border-right: 2px solid #f0f4f9;
  text-align: center;
}

.chat-container {
  padding: 20px;
}

.corazon {
  margin: 20px auto;
  width: 50%;
}
.pulso {
  margin-bottom: 20px;
  margin: 0px auto;
  width: 50%;
}
</style>
