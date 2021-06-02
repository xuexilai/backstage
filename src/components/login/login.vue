<template>
  <div id="login">
    <h1>Login</h1>
    <el-form
      :model="userLogin"
      :rules="userLoginRules"
      ref="ruleForm"
      label-width="100px"
      class="demo-ruleForm"
    >
      <el-form-item label="用户名" prop="userName">
        <el-input
          v-model="userLogin.userName"
          placeholder="请输入账号"
        ></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="userPassword">
        <el-input
          type="password"
          v-model="userLogin.userPassword"
          placeholder="请输入密码"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button class="btn" type="primary" @click="submitForm('ruleForm')"
          >立即创建</el-button
        >
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import {formatDate} from '../../util/util'
import { loginToken } from "../../http/api/login";

export default {
  data() {
    return {
      userLogin: {
        userName: "",
        userPassword: "",
      },
      userLoginRules: {
        userName: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          {
            validator: (rule, value, callback) => {
              if (/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,10}$/.test(value)) {
                callback();
              } else {
                callback(new Error("密码位6-10字母和数字的组合"));
              }
            },
            trigger: "blur",
          },
        ],
        userPassword: [
          { required: true, message: "请输入密码", trigger: "blur" },
        ],
      },
    };
  },
  methods: {
     submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        //验证通过，获取发送请求返回后台给的token,保存在sessage里
        if (valid) {
          loginToken({
            date: formatDate(new Date()),
            password: 12345678,
            username: "coscoboao",
          }).then(resp=>{
            sessionStorage.setItem("token", resp.data);
            this.router.push({
              path: "/",
            });
          });
        } else {
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
  },
};
</script>
<style>
html {
  width: 100%;

  height: 100%;

  overflow: hidden;

  font-style: sans-serif;
}

body {
  width: 100%;

  height: 100%;

  font-family: "Open Sans", sans-serif;

  margin: 0;

  background-color: #4a374a;
}

#login {
  position: absolute;

  top: 50%;

  left: 50%;

  margin: -150px 0 0 -150px;

  width: 300px;

  height: 300px;
}

#login h1 {
  color: #fff;

  text-shadow: 0 0 10px;

  letter-spacing: 1px;

  text-align: center;
}

h1 {
  font-size: 2em;

  margin: 0.67em 0;
}

.el-input__inner {
  width: 278px;

  height: 18px;

  margin-bottom: 10px;

  outline: none;

  padding: 10px;

  font-size: 13px;

  color: #fff;

  text-shadow: 1px 1px 1px;

  border-top: 1px solid #312e3d;

  border-left: 1px solid #312e3d;

  border-right: 1px solid #312e3d;

  border-bottom: 1px solid #56536a;

  border-radius: 4px;

  background-color: #2d2d3f;
}

.btn {
  width: 300px;

  min-height: 20px;

  display: block;

  background-color: #4a77d4;

  border: 1px solid #3762bc;

  color: #fff;

  padding: 9px 14px;

  font-size: 15px;

  line-height: normal;

  border-radius: 5px;

  margin: 0;
}
</style>
