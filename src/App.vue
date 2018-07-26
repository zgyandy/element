<template>
  <div id="app">
    <navbar v-if="$store.state.blNav"></navbar>
    <router-view/>
    <footbar v-if="$store.state.blFoo"></footbar>
  </div>
</template>

<script>
import navbar from '@/components/common/navbar.vue'
import footbar from '@/components/common/footbar.vue'
export default {
  name: 'App',
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
    navbar, footbar
  }
}
</script>

<style>

</style>
