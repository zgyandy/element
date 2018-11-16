<template>
<div class="pageResult">
  <el-pagination
    :background="true"
    :page-size="20"
    :total="totalPage"
    layout="prev, pager, next, jumper"
    @current-change="page"
  ></el-pagination>
</div>
</template>

<script>
export default {
  props: {
    totalPage: {
      default: 0,
      type: Number
    }
  },
  methods: {
    page() {
      var n = arguments[0]
      this.$emit('pageFn', n)
    }
  }

}
</script>

<style>
</style>
