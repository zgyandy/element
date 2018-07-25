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
      <p class="userIcon">
          <router-link to="/user" class="iconfont icon-account" tag="span"></router-link>
      </p>
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
    }
  }
</style>
