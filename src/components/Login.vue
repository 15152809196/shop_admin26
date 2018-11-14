<template>
  <div class="login">
       <el-form :model="form" status-icon :rules="rules" ref="form" label-width="80px">
         <img src="../assets/avatar.jpg" alt="">
            <el-form-item label="用户名" prop="username">
                <el-input v-model="form.username" placeholder="请输入用户名"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="password">
                <el-input v-model="form.password" placeholder="请输入密码" @keyup.enter.native='login' type="password"></el-input>
            </el-form-item>
            <el-form-item>
            <el-button type="primary" @click="login">登陆</el-button>
                <el-button @click="resetForm('form')">重置</el-button>
            </el-form-item>
        </el-form>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      form: {
        username: '',
        password: ''
      },
      rules: {
        // 对username的效验
        username: [
          { required: true, message: '用户名不能为空', trigger: 'blur' },
          { min: 4, max: 6, message: '长度在 4 到 6 个字符', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '密码不能为空', trigger: 'blur' },
          { min: 6, max: 12, message: '长度在 6 到 12 个字符', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    // reset() {
    //   // 获取表单组件
    //   this.$refs.form.resetFields()
    // }
    // 重置表单
    resetForm(form) {
      this.$refs.form.resetFields()
    },
    // 登陆
    login() {
      this.$refs.form.validate(valid => {
        if (valid) {
          axios({
            url: 'http://localhost:8888/api/private/v1/login',
            method: 'post',
            data: this.form
          }).then(res => {
            // console.log(res)
            if (res.data.meta.status === 200) {
              // 登陆成功
              this.$message.success('登陆成功')
              // 存储token
              localStorage.setItem('token', res.data.data.token)
              // 跳转到Home组件
              this.$router.push('/home')
            } else {
              // 登陆失败
              this.$message.error(res.data.meta.msg)
            }
          })
        } else {
          // console.log('error submit!!')
          return false
        }
      })
    }
    // resetForm(formName) {
    //   this.$refs[formName].resetFields()
  }
}
</script>

<style lang="less">
.login {
  height: 100%;
  background-color: #2d434c;
  overflow: hidden;

  .el-form {
    width: 400px;
    margin: 200px auto;
    background-color: #fff;
    padding: 75px 40px 15px;
    border-radius: 20px;
    position: relative;
  }
  img {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: -70px;
    border-radius: 50%;
    border: 10px solid #fff;
  }
  .el-button + .el-button {
    margin-left: 80px;
  }
}
</style>
