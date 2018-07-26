<template>
  <div class="navbar">
    <div class="navBox layout">
      <p class="logo">
        <router-link to="/home" tag="span" class="iconfont icon-move"></router-link>
      </p>
      <ul class="navList">
        <li>
          <router-link to="/home">首页</router-link>
        </li>
        <li>
          <router-link to="/">页面1</router-link>
        </li>
        <li>
          <router-link to="/">页面2</router-link>
        </li>
        <li>
          <router-link to="/">页面3</router-link>
        </li>
      </ul>
      <ul class="userIcon">
        <li v-if="$store.state.isLogin === 1">
          <router-link to="/user">
            <img class="uerPhone" src="../../assets/logo.png" alt="">
          </router-link>
        </li>
        <li v-if="$store.state.isLogin === 0" class="register">
          <router-link to="/register" tag="span">注册</router-link>
        </li>
        <li v-if="$store.state.isLogin === 0" class="login">
          <router-link to="/login" tag="span">登录</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
  .navbar {
    height: 60px;
    min-width: 1200px;
    background-color: #2b313a;
    color: #fff;
    .navBox {
      height: 60px;
      display: flex;
      display: -webkit-flex;
      justify-content: space-between;
      align-items: center;
      .logo {
        height: 60px;
        width: 60px;
        line-height: 60px;
      }
      .navList {
        height: 60px;
        display: flex;
        display:-webkit-flex;
        align-items: center;
        flex: 1;
        li {
          height: 40px;
          line-height: 40px;
          font-size: 20px;
          padding: 0 20px;
        }
      }
      .userIcon {
        height: 40px;
        display: flex;
        display: -webkit-flex;
        align-items: center;
        li {
          height: 30px;
          line-height: 30px;
          text-align: center;
          border-radius: 5px;
          cursor: pointer;
        }
        .uerPhone {
          height: 30px;
          width: 30px;
          border-radius: 50%;
          background: #fff;
          vertical-align: bottom;
        }
        .register {
          width: 50px;
          margin-right: 10px;
          background: yellow;
          color: green;
        }
        .login {
          width: 50px;
          background: green;
          // color: yellow;
        }
      }
    }
  }
</style>
