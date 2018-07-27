<template>
  <div class="register">
    <div class="infoBox">
      <dl class="title">
        <dt>注册</dt>
        <dd class="iconfont icon-close" @click.self="close"></dd>
      </dl>
      <ul class="infoList">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
      <p class="agreement"><span>登录即表示你同意网站的<a href="">《服务条款》</a></span></p>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    close () {
      this.$emit('sign')
    }
  }
}
</script>

<style lang="less" scoped>
  .register {
    height: 100%;
    width: 100%;
    position: fixed;
    left: 0;
    top: 0;
    background: rgba(0,0,0, .6);
    .infoBox {
      height: 500px;
      width: 450px;
      background: #fff;
      margin: 0 auto;
      position: relative;
      top: 50%;
      margin-top: -300px;
      .title {
        height: 50px;
        line-height: 50px;
        padding:0 12px;
        display: flex;
        display: -webkit-flex;
        justify-content: space-between;
        align-items: center;
        font-size: 24px;
        background-color: #f3f3f3;
      }
      .agreement {
        height: 30px;
        line-height: 30px;
        text-align: center;
        a {
          color: black;
        }
      }
    }
  }
</style>
