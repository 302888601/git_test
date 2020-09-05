<template>
  <div class="retro-snake">
    <div class="menu-page">
      <p class="title">贪吃蛇</p>
      <div class="menu-list">
        <el-button type="warning">新的游戏</el-button>
        <el-button type="warning">继续游戏</el-button>
        <el-button type="warning">排行榜</el-button>
      </div>
    </div>
    <div v-if="isShowMask">
      
    </div>
  </div>
</template>

<script>
export default {
  name: 'retro-snake',
  data() {
    return {
      isShowMask: true
    }
  },
  methods: {
    
  },
  components: {
  }
}
</script>

<style lang="scss" scoped>
  .retro-snake {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: #AB0A1A;
    .menu-page {
      display: flex;
      flex-direction: column;
      width: 100%;
      height: 100%;
      .title {
        flex: 1;
        color: antiquewhite;
        font-size: 100px;
        line-height: 300px;
        text-align: center
      }
      .menu-list {
        flex: 2;
      }
    }
  }
</style>