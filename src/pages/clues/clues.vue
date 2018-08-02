<template>
  <div class="clues layout">
    <!-- 面包屑 -->
    <clumbs :clumbArr="clumbArr"></clumbs>
    <router-view :clumbArr="clumbArr"></router-view>
  </div>
</template>

<script>
import clumbs from '@/components/common/crumbs.vue'
export default {
  data () {
    return {
      clumbArr: [{path: '/clues', name: '线索管理'}, {name: '客户线索'}]
    }
  },
  mounted () {
    // 子导航
    this.$store.dispatch('SANNAV', [{path: '/clues/customer', name: '客户线索'}, {path: '/clues/assignClues', name: '线索分配'}, {path: '/clues/createClues', name: '创建线索'}, {path: '/clues/batchAdd', name: '批量添加'}, {path: '/clues/commitLog', name: '递交日志'}])
  },
  components: {
    clumbs
  }
}
</script>

<style lang="less" scoped>

</style>
