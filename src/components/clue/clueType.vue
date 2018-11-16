<template>
<div>
  <span>线索类别：</span>
    <el-select v-model="clueType" name="clueType" filterable placeholder="线索类别">
    <el-option
      v-for="item in clueTypeArr"
      :key="item.id"
      :value="item.value"
      :label="item.label">
    </el-option>
  </el-select>
</div>
</template>

<script>
export default {
  data () {
    return {
      clueType: '',
      clueTypeArr: []
    }
  },
  beforeCreate () {
    // 线索类别
    this.postData({
      url: 'clueType',
      success: (res) => {
        this.clueTypeArr = res
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
