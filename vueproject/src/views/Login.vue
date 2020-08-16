<template>
  <div id="login">
    <div class="wrap">
      <div class="login">
        <h1 class="title">王启萌的网站</h1>
        <el-form
          :model="ruleForm"
          status-icon
          :rules="rules"
          ref="ruleForm"
          label-width="100px"
          class="demo-ruleForm"
        >
          <el-form-item label="用户名" prop="username">
            <el-input type="text" v-model="ruleForm.username" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="pass">
            <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="signIn('ruleForm')">登陆</el-button>
          </el-form-item>
        </el-form>
      </div>
      <div class="blankSpace"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        callback();
      }
    };
    var validateUsername = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入用户名"));
      } else {
        callback();
      }
    };
    return {
      ruleForm: {
        pass: "",
        username: ""
      },
      rules: {
        pass: [{ validator: validatePass, trigger: "blur" }],
        username: [{ validator: validateUsername, trigger: "blur" }]
      }
    };
  },
  created() {
    document.onkeydown = ev => {
      if (ev.keyCode === 13) {
        this.signIn('ruleForm')
      }
    };
  },
  methods: {
    signIn(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          if (
            this.ruleForm.username === "302888601" &&
            this.ruleForm.pass === "wqm13149591995."
          ) {
            this.$message({
              showClose: true,
              message: '登陆成功！',
              type: 'success'
            })
            this.$router.push({ path: "/home" });
            localStorage.setItem("token", JSON.stringify(this.ruleForm));
          } else if (
            this.ruleForm.username !== "302888601" ||
            this.ruleForm.pass !== "wqm13149591995."
          ) {
            this.$message({
              showClose: true,
              message: '用户名或密码错误！',
              type: 'warning'
            });
            return false;
          }
        } else {
          return false;
        }
      });
    }
  },
  components: {}
};
</script>
<style lang="scss">
  .el-message--warning,.el-message--success,.el-message--error,.el-message--info {
    min-width: 250px
  }
</style>
<style lang="scss" scoped>
  #login {
    display: flex;
    flex-direction: column;
    background: url("../assets/bg.jpg"), no-repeat;
    height: 100%;
    width: 100%;
    .wrap {
      background: rgba($color: #1a1f3d, $alpha: 0.3);
      height: 100%;
      width: 550px;
      box-sizing: border-box;
      border-radius: 10px;
      box-shadow: 10px 0 5px #1a1f3d;
      .login {
        height: 60%;
        width: 100%;
        display: flex;
        flex-direction: column;
        .title {
          flex: 2;
          font-size: 50px;
          color: #c84147;
          font-weight: bolder;
          text-shadow: -3px 3px 3px #fac926;
          height: 150px;
          text-align: center;
          line-height: 400px;
        }
        .el-form {
          flex: 1;
          .el-input {
            width: 350px;
            background-color: transparent;
          }
        }
      }
      .blankSpace {
        height: 40%;
        width: 100%;
      }
    }
  }
</style>