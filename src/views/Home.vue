<template>
  <div id="home">
    <el-container>
      <el-header>
        <el-button type="danger" @click="signOut">退出登录</el-button>
      </el-header>
      <el-container>
        <el-aside width="250px">
          <MenuBar></MenuBar>
        </el-aside>
        <el-main>
          <router-view/>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import MenuBar from "../components/home/menuBar";
export default {
  name: "home",
  data() {
    return {};
  },
  methods: {
    signOut() {
      localStorage.clear("token");
      this.$router.push("/login");
    }
  },
  components: {
    MenuBar
  }
};
</script>

<style lang="scss" scoped>
  #home {
    height: 100%;
    .el-container {
      height: 100%;
      .el-header {
        display: flex;
        flex-direction: row-reverse;
        justify-content: space-between;
        align-items: center;
        background: #232242;
      }
      .el-aside {
        height: 100%;
        background: #232242;
      }
      .el-main {
        position: relative;
        background: url('../assets/iron-man.gif') no-repeat center;
        background-color: #AB0A1A;
        min-width: 1200px;
      }
    }
  }
</style>