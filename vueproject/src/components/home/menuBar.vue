<template>
  <div id="menu">
    <el-menu
      default-active="1"
      class="el-menu-vertical-demo"
      background-color="#232242"
      text-color="#fff"
      active-text-color="#fac926"
    >
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>小游戏</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="1-1" @click="changeView('retroSnake')">贪吃蛇</el-menu-item>
          <el-menu-item index="1-2" @click="changeView('sokoban')">推箱子</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: "MenuBar",
  data() {
    return {

    };
  },
  methods: {
    changeView(path) {
      this.$router.push({path: '/home/littleGame/' + path})
    },
  },
  components: {}
};
</script>

<style lang="scss" scoped>
  #menu {
    height: 100%;
    .el-menu {
      border: 1px solid #232242;
    }
  }
</style>