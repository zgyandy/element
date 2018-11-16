<template>
  <span>
    <el-select v-model="departmentId" name="departmentId" filterable placeholder="线索位置"
      @change="chooseOne">
      <el-option
        v-for="item in departmentIdArr"
        :key="item.id"
        v-if="item.id > 1"
        :value="item.id"
        :label="item.name"
        >
      </el-option>
    </el-select>
    <el-select v-model="roleId" name="roleId" filterable placeholder="线索位置"
      @change="chooseTwo"
    >
      <el-option
        v-for="item in roleIdArr"
        :key="item.id"
        :value="item.id"
        :label="item.name">
      </el-option>
    </el-select>
    <el-select v-model="advisor" name="advisor" filterable placeholder="线索位置">
      <el-option
        v-for="item in advisorArr"
        :key="item.id"
        :value="item.id"
        :label="item.name">
      </el-option>
    </el-select>
  </span>
</template>

<script>
export default {
  data () {
    return {
      departmentId: '',
      departmentIdArr: [],
      roleId: '',
      roleIdArr: [],
      advisor: '',
      advisorArr: []
    }
  },
  beforeCreate () {
    this.postData({
      url: 'cluePeincipal',
      success: (res) => {
        this.departmentIdArr = res
      },
      fail: (res) => {
        throw res
      }
    })
  },
  methods: {
    chooseOne (n) {
      this.roleId = ''
      this.roleIdArr = []
      for (var item of this.departmentIdArr) {
        if (parseInt(item.id) === parseInt(n)) {
          this.roleIdArr = item.children
          break
        }
      }
    },
    chooseTwo (n) {
      this.advisor = ''
      this.advisorArr = []
      for (var item of this.roleIdArr) {
        if (parseInt(item.id) === parseInt(n)) {
          this.advisorArr = item.children
          break
        }
      }
    }
  }
}
</script>

<style>
</style>
