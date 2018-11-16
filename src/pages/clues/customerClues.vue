<template>
  <div class="customer content">
    <ul class="search">
      <li>
        <!-- 日期 -->
        <datePicker ref="datePicker" :format="format"></datePicker>
        <!-- 线索类别 -->
        <clueType refs="clueType"></clueType>
        <!-- 线索类型 -->
        <clurForm></clurForm>
        <!-- 线索位置 -->
        <clueLibrary></clueLibrary>
        <!-- 客户地区 -->
        <regions></regions>
        <!-- 渠道来源 -->
        
        <!-- 确认按钮 -->
        <div>
          <el-button
          size="medium"
          type="primary"
          @click= 'search'
          >确认</el-button>
        </div>
      </li>
    </ul>
    <resultMsg :date="date" :resultNum="resultNum" :resultArr="resultArr"></resultMsg>
    <div class="tableBox">
      <el-table :data="tableData" style="width: 1180px" border>
        <el-table-column prop="date" label="日期" sortable align="center" width="94"></el-table-column>
        <el-table-column label="新线索" align="center">
          <el-table-column prop="newClue" label="总量" width="32"></el-table-column>
          <el-table-column prop="newClueA" label="A" width="32"></el-table-column>
          <el-table-column prop="newClueB" label="B" width="32"></el-table-column>
          <el-table-column prop="newClueC" label="C" width="32"></el-table-column>
          <el-table-column prop="newClueD" label="D" width="32"></el-table-column>
        </el-table-column>
        <el-table-column label="A类" align="center">
          <el-table-column prop="Aclue" width="32" label="总量"></el-table-column>
          <el-table-column prop="Aeffective" width="32" label="有效"></el-table-column>
          <el-table-column prop="Adetermined" width="32" label="待定"></el-table-column>
          <el-table-column prop="Ainvalid" width="32" label="无效"></el-table-column>
          <el-table-column prop="AgiveUp" width="32" label="放弃"></el-table-column>
        </el-table-column>
        <el-table-column label="B类" align="center">
          <el-table-column prop="Aclue" width="32" label="总量"></el-table-column>
          <el-table-column prop="Aeffective" width="32" label="有效"></el-table-column>
          <el-table-column prop="Adetermined" width="32" label="待定"></el-table-column>
          <el-table-column prop="Ainvalid" width="32" label="无效"></el-table-column>
          <el-table-column prop="AgiveUp" width="32" label="放弃"></el-table-column>
        </el-table-column>
        <el-table-column label="C类" align="center">
          <el-table-column prop="Aclue" width="32" label="总量"></el-table-column>
          <el-table-column prop="Aeffective" width="32" label="有效"></el-table-column>
          <el-table-column prop="Adetermined" width="32" label="待定"></el-table-column>
          <el-table-column prop="Ainvalid" width="32" label="无效"></el-table-column>
          <el-table-column prop="AgiveUp" width="32" label="放弃"></el-table-column>
        </el-table-column>
        <el-table-column label="D类" align="center">
          <el-table-column prop="Aclue" width="32" label="总量"></el-table-column>
          <el-table-column prop="Aeffective" width="32" label="有效"></el-table-column>
          <el-table-column prop="Adetermined" width="32" label="待定"></el-table-column>
          <el-table-column prop="Ainvalid" width="32" label="无效"></el-table-column>
          <el-table-column prop="AgiveUp" width="32" label="放弃"></el-table-column>
        </el-table-column>
        <el-table-column align="center" label="责任人" prop="name" width="70"></el-table-column>
        <el-table-column align="center" label="所在部门" prop="department" width="90">
          <template slot-scope="scope">
            <el-popover trigger="hover" placement="top" width="100" :content="scope.row.department">
              <div slot="reference" class="name-wrapper">{{ scope.row.department }}</div>
            </el-popover>
          </template>
        </el-table-column>
        <el-table-column align="center" label="渠道来源" prop="source">
          <template slot-scope="scope">
            <el-popover trigger="hover" placement="top" width="160">
              <p>{{ scope.row.source }}</p>
              <div slot="reference" class="name-wrapper">{{ scope.row.source }}</div>
            </el-popover>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <!-- 分页 -->
    <pageInation :totalPage="tableData.length" @pageFn="pageFn"></pageInation>
  </div>
</template>

<script>
// 日期选择器
import datePicker from '../../components/common/datePicker'
// 线索类别
import clueType from '../../components/clue/clueType'
// 线索类型
import clurForm from '../../components/clue/clueForm'
// 线索位置
import clueLibrary from '../../components/clue/clueLibrary'
// 搜索结果
import resultMsg from '../../components/common/resultMsg'
// 地区
import regions from '../../components/common/regions'
// 分页
import pageInation from '../../components/paging/pageination'
export default {
  data () {
    return {
      clumb: [{path: '/clues', name: '线索管理'}, {name: '客户线索'}],
      format: 'yyyy-MM-dd',
      date: [],
      resultArr: [],
      options: [],
      resultNum: 12,
      tableData: [],
      province: '',
      city: ''
    }
  },
  methods: {
    pageFn (n) {
      n = n || 1
      // this.tabData = this.tableData.slice((n - 1) * 20, ((n - 1) * 20 + 20) > this.tableData.length ? this.tableData.length : (n - 1) * 20 + 20)
    },
    search () {
      this.date = this.$refs.datePicker.date
      console.log(this.$refs.datePicker.date)
    },
    fn(item) {
      console.log(item)
    },
    fnnn (n) {
      console.log(n)
    }
  },
  beforeCreate () {
    this.postData({
      url: 'customerClue',
      success: (res) => {
        this.options = res
      },
      fail: (error) => {
        throw (error)
      }
    })
    this.postData({
      url: 'customerTable',
      success: (res) => {
        this.tableData = res
        // 调用分页方法
        this.pageFn()
      },
      fail: (error) => {
        throw error
      }
    })
  },
  mounted () {
    this.$emit('changeClumb', this.clumb)
  },
  components: {
    datePicker, resultMsg, regions, pageInation, clueType, clurForm, clueLibrary
  }
}
</script>

<style lang="less">
  .customer {
    .search {
      padding-bottom: 10px;
      border-bottom: 1px solid  #dddddd;
      font-size: 16px;
      li {
        line-height: 36px;
        width: 1180px;
        font-size: 16px;
        display: flex;
        display: -webkit-flex;
        justify-content: space-between;
        flex-wrap: wrap;
        -ms-flex-wrap: wrap;
        &>div {
          padding-bottom: 10px;
        }
      }
    }
    .tableBox {
      box-sizing: border-box;
    }
    .pageResult {
      height: 36px;
      padding-top: 20px;
      display: flex;
      display: -webkit-flex;
      justify-content: flex-end;
    }
  }
  .test {
    height: 20px;
    width: 50px;
    word-wrap: wrap;
    line-height: 20px;
    word-break: break-all;
    img {
      vertical-align: bottom;
      // opacity: 0;
    }
  }
</style>
