<template>
<div>
  <span>线索类型：</span>
    <el-select v-model="clueForm" name="clueForm" filterable placeholder="线索类别">
    <el-option
      v-for="item in clueFormArr"
      :key="item.id"
      :value="item.value">
    </el-option>
  </el-select>
</div>
</template>

<script>
export default {
  data () {
    return {
      clueForm: '',
      clueFormArr: []
    }
  },
  beforeCreate () {
    // 线索类别
    this.postData({
      url: 'clueForm',
      success: (res) => {
        this.clueFormArr = res
      },
      fail: (res) => {
        throw res
      }
    })
  }
}
</script>

<style>

</style>
