<template>
  <div class="assignClues"><el-table :data="tableData" style="width: 100%" border>
    <el-table-column prop="date" rowspan="2" label="需要合并 " width="180" align='center'
    >
    </el-table-column>
    <el-table-column label="单体1" width="180 " align='center'>
      <el-table-column prop="zongliang" label="总量(m³)" width="120" align='center'>
      </el-table-column>
      <el-table-column prop="name" label="单方含量(m³/㎡)" width="120" align='center'>
      </el-table-column>
    </el-table-column>
  </el-table>
  </div>
</template>

<script>
export default {
  data () {
    return {
      tableData: [{
          date: '现浇砼',
          name1: '基础',
          zongliang: '1',
          name: '王小虎',
        }, {
        date: '现浇砼',
        name1: '墙',
        zongliang: '1',
        name: '王小虎',
      }, {
        date: '现浇砼',
        name1: '柱',
        zongliang: '1',
        name: '王小虎',
      }, {
        date: '现浇砼',
        name1: '梁板',
        zongliang: '1',
        name: '王小虎',
      }]
    }
  },
  methods: {

  }
}
</script>

<style>

</style>
