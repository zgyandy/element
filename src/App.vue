<template>
  <div id="app">
    <navbar ref='navbar' v-if="$store.state.blNav" @signIn="signIn" @ragister="ragister"></navbar>
    <router-view/>
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
      blReg: false,
      navArr: []
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
    this.$refs.navbar.activeFn()
    this.$axios.get('/api/data/').then((res) => {
      console.log(res)
    })
  },
  components: {
    navbar, footbar, register, login
  },
  methods: {
    signIn () {
      this.blLog = true
    },
    ragister () {
      this.blReg = true
    },
    closeHint () {
      this.blLog = false
      this.blReg = false
    }
  }
}
</script>

<style lang="less" scoped>
  #app {
    height: 100%;
    width: 100%;
    overflow: hidden;
  }
</style>
