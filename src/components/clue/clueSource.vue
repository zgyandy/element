<template>
  <div>
    <span>渠道来源：</span>
    <el-select v-model="source" name="source" filterable placeholder="线索位置"
      @change="chooseOne">
      <el-option
        v-for="item in sourceArr"
        :key="item.id"
        v-if="item.id > 1"
        :value="item.id"
        :label="item.name"
        >
      </el-option>
    </el-select>
    <el-select v-model="kind" name="kind" filterable placeholder="线索位置"
      @change="chooseTwo"
    >
      <el-option
        v-for="item in kindArr"
        :key="item.id"
        :value="item.id"
        :label="item.name">
      </el-option>
    </el-select>
    <el-select v-model="type" name="type" filterable placeholder="线索位置">
      <el-option
        v-for="item in typeArr"
        :key="item.id"
        :value="item.id"
        :label="item.name">
      </el-option>
    <el-select v-model="channelId" name="channelId" filterable placeholder="线索位置">
      <el-option
        v-for="item in channelIdArr"
        :key="item.id"
        :value="item.id"
        :label="item.name">
      </el-option>
    </el-select>
  </div>
</template>

<script>
export default {
  data () {
    return {
      source: '',
      sourceArr: [],
      kind: '',
      kindArr: [],
      type: '',
      typeArr: [],
      channelId: '',
      channelIdArr: []
    }
  },
  beforeCreate () {
    
  }
}
</script>

<style>

</style>
