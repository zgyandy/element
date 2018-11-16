<template>
  <div>
    <span>{{labelMsg}}：</span>
    <el-date-picker
      v-model="date"
      type="daterange"
      align="right"
      unlink-panels
      range-separator="至"
      start-placeholder="开始日期"
      end-placeholder="结束日期"
      :value-format="format"
      :picker-options="pickerTime">
    </el-date-picker>
  </div>
</template>

<script>
export default {
  props: {
    format: {
      default: 'yyyy-MM-dd'
    },
    labelMsg: {
      default: '创建日期'
    },
    pickerTime: {
      type: Object,
      default: () => {
        return {
          shortcuts: [{
            text: '最近一周',
            onClick (picker) {
              const end = new Date()
              const start = new Date()
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7)
              picker.$emit('pick', [start, end])
            }
          }, {
            text: '最近一个月',
            onClick (picker) {
              const end = new Date()
              const start = new Date()
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30)
              picker.$emit('pick', [start, end])
            }
          }, {
            text: '最近三个月',
            onClick (picker) {
              const end = new Date()
              const start = new Date()
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90)
              picker.$emit('pick', [start, end])
            }
          }]
        }
      }
    }
  },
  data () {
    return {
      date: []
    }
  }
}
</script>

<style>
</style>
