<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
  html,body {
    height: 100%;
    width: 100%
  }
  #app {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
  .login {
    .el-form-item__label {
      color: #c84147;
    }
  }
  
</style>
