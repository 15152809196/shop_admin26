<template>
 <el-container class="home">
  <el-header>
      <div class="logo"></div>
      <div class="logout">
          欢迎光临
          <a href="javascript:;" @click="logout">退出</a>
      </div>
      <h1 class="title">电商后台管理系统</h1>
  </el-header>
  <el-container>
    <el-aside width="200px">
        <!-- el-menu: 菜单组件 -->
        <!-- default-active：默认选中的菜单 -->
        <!-- el-submenu: 子菜单 -->
        <!-- template：表示子菜单的内容 -->
        <!-- el-menu-item-group： 子菜单的分组 -->
        <!-- el-menu-item：菜单项  -->
        <!-- unique-opened：最多只能打开一个子菜单 -->
        <!-- router:开启了路由模式， 当我们点击导航的时候，会发生路由的跳转, 跳转到index对应的路径 -->
        <el-menu
          default-active="1"
          class="el-menu-vertical-demo"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
          unique-opened
          router>
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>用户管理</span>
            </template>
            <!-- 放菜单项 -->
            <el-menu-item index="/users">
              <i class="el-icon-menu"></i>
              <span slot="title">用户列表</span>
            </el-menu-item>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>权限管理</span>
            </template>
            <el-menu-item index="roles">
              <i class="el-icon-menu"></i>
              <span slot="title">角色列表</span>
            </el-menu-item>
            <el-menu-item index="rights">
              <i class="el-icon-menu"></i>
              <span slot="title">权限列表</span>
            </el-menu-item>
          </el-submenu>
        </el-menu>
    </el-aside>

    <el-main>
    <!-- 配置路由的出口 -->
       <router-view/>
    </el-main>
  </el-container>
</el-container>
</template>

<script>
export default {
  methods: {
    async logout() {
      try {
        // 弹出模态框
        // 参数1:提示内容
        //  参数2:提示标题
        await this.$confirm('你又去吃饭', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'wayning'
        })
        // 删除token
        localStorage.removeItem('token')
        // 跳转到login页面
        this.$router.push('/login')
        this.$message.success('退出成功')
      } catch (e) {
        this.$message.error('取消删除')
      }
    }
  }
}
</script>

<style lang="less" scoped>
.home {
  height: 100%;
  .el-header {
    background-color: #b3c1cd;

    .logo {
      width: 180px;
      height: 60px;
      float: left;
      background-image: url('../assets/logo.png');
      background-size: contain;
      background-repeat: no-repeat;
      background-position: center center;
    }
    .logout {
      width: 180px;
      height: 60px;
      float: right;
      line-height: 60px;
      text-align: right;
      font-weight: 700;
      a {
        color: darkorange;
      }
    }

    .title {
      height: 60px;
      overflow: hidden;
      text-align: center;
      line-height: 60px;
      color: #fff;
      font-size: 28px;
    }
  }
  .el-aside {
    background-color: #545c64;

    .el-submenu {
      width: 200px;
    }
  }
  .el-main {
    background-color: #d4dfe4;
  }
}
</style>
