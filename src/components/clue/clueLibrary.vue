<template>
<div>
  <span>线索位置：</span>
  <el-select v-model="clueLibrary" name="clueLibrary" filterable placeholder="线索位置">
    <el-option
      v-for="item in clueLibraryArr"
      :key="item.id"
      :value="item.value">
    </el-option>
  </el-select>
  <!-- 责任人 -->
  <cluePrincipal></cluePrincipal>
</div>
</template>

<script>
import cluePrincipal from './cluePrincipal'
export default {
  data () {
    return {
      clueLibrary: '',
      clueLibraryArr: []
    }
  },
  beforeCreate () {
    // 线索库
    this.postData({
      url: 'clueLibrary',
      success: (res) => {
        this.clueLibraryArr = res
      },
      fail: (res) => {
        throw res
      }
    })
  },
  components: {
    cluePrincipal
  }
}
</script>

<style>
</style>
