<template>
  <div id="app">
    <navbar></navbar>
    <router-view/>
    <footbar></footbar>
  </div>
</template>

<script>
import navbar from '@/components/common/navbar.vue'
import footbar from '@/components/common/footbar.vue'
export default {
  name: 'App',
  components: {
    navbar, footbar
  }
}
</script>

<style>

</style>
