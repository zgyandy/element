<template>
  <p>
    <span>客户地区：</span>
    <el-select v-model="province" name="province" filterable placeholder="所在省" @change="chooseCity">
      <el-option
        v-for="item in provinceArr"
        :key="item.id"
        :value="item.id"
        :label="item.name">
      </el-option>
    </el-select>
    <el-select v-model="city" name="city" filterable placeholder="所在市">
      <el-option
        v-for="item in cityArr"
        :key="item.id"
        :value="item.id"
        :label="item.name">
      </el-option>
    </el-select>
  </p>
</template>

<script>
export default {
  data() {
    return {
      province: '',
      provinceArr: [],
      city: '',
      cityArr: []
    }
  },
  beforeCreate () {
    // 地区
    this.postData({
      url: 'regions',
      success: (res) => {
        this.provinceArr = res
      }
    })
  },
  methods: {
    chooseCity (res) {
      this.city = ''
      for (var item of this.provinceArr) {
        if (item.id === res) {
          this.cityArr = item.regions
          break
        }
      }
    }
  }
}
</script>

<style>

</style>
