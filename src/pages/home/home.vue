<template>
  <div class="home">
    <!-- banner -->
    <el-carousel height="360" :interval="3000" trigger="hover">
      <el-carousel-item v-for="item in 4" :key="item">
        <h3>{{ item }}</h3>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>

</style>
