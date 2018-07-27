<template>
  <div id="app">
    <navbar v-if="$store.state.blNav" @sign="sign"></navbar>
    <router-view/>
    <!-- 注册 -->
    <register v-if="$store.state.blReg"  @sign="sign"></register>
    <!-- 登录 -->
    <login v-if="blLog" @sign="sign"></login>
    <footbar v-if="$store.state.blFoo"></footbar>
  </div>
</template>

<script>
import navbar from '@/components/common/navbar.vue'
import footbar from '@/components/common/footbar.vue'
import register from './components/common/register.vue'
import login from './components/common/login.vue'
export default {
  name: 'App',
  data () {
    return {
      blLog: false,
      blReg: false
    }
  },
  beforeCreate () {
    // 判断是否登录
    if (Number(localStorage.getItem('login')) === 1) {
      this.$store.commit('loginIn')
    } else {
      this.$store.commit('loginOut')
    }
  },
  mounted () {
    console.log(this.$route.path)
  },
  components: {
    navbar, footbar, register, login
  },
  updated () {

  },
  methods: {
    signIn (bl) {
      this.blLog = true
    }
  }
}
</script>

<style>

</style>
