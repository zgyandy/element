<template>
  <div class="customer content">
    <ul class="search">
      <li>
        <p class="time">
          <span>创建日期：</span>
          <el-date-picker
            v-model="date"
            type="daterange"
            align="right"
            unlink-panels
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
            value-format="yyyy-MM-dd"
            :picker-options="pickerOptions2">
          </el-date-picker>
        </p>
        <p>
          <span>渠道来源：</span>
            <el-cascader
              @change="dateFn"
              placeholder="请选择渠道来源"
              :options="options"
              filterable
              size="medium"
              v-model="source"
              change-on-select>
            </el-cascader>
        </p>
        <p>
          <span>责任人：</span>
            <el-cascader
              placeholder="请选择责任人"
              :options="options"
              filterable
              size="medium">
            </el-cascader>
        </p>
        <p>
          <el-button
          size="medium"
          type="primary"
          >确认</el-button>
        </p>
      </li>
    </ul>
    <p class="resultShow">
      <span>找到相关结果<em class="red">{{resultNum}}个，</em></span>
      <span v-for="(item, key) in date" :key="key"><em class="blue">{{item}}</em><span v-show="key === 0">&nbsp;至&nbsp;</span></span>
      <span>新线索<em class="red">12</em>个，</span>
      <span>有效单<em class="red">12</em>个，</span>
      <span>待定单<em class="red">12</em>个，</span>
      <span>无效单<em class="red">12</em>个，</span>
      <span>放弃单<em class="red">12</em>个。</span>
    </p>
    <div class="tableBox">
      <el-table :data="tabData" style="width: 1180px" border>
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
    <div class="pageResult">
        <el-pagination
          :background="true"
          :page-size="20"
          :total="tableData.length"
          layout="prev, pager, next, jumper"
          @current-change="fn"
        ></el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      clumb: [{path: '/clues', name: '线索管理'}, {name: '客户线索'}],
      pickerOptions2: {
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
      },
      date: '',
      options: [{
        value: 'zhinan',
        label: '全部来源',
        children: [{
          value: 'shejiyuanze',
          label: '全部分类',
          children: [{
            value: 'yizhi',
            label: '全部明细'
          }, {
            value: 'fankui',
            label: '反馈'
          }, {
            value: 'xiaolv',
            label: '效率'
          }, {
            value: 'kekong',
            label: '可控'
          }]
        }, {
          value: 'daohang',
          label: '导航',
          children: [{
            value: 'cexiangdaohang',
            label: '侧向导航'
          }, {
            value: 'dingbudaohang',
            label: '顶部导航'
          }]
        }]
      }, {
        value: 'zujian',
        label: '全部部门',
        children: [{
          value: 'basic',
          label: '全部岗位',
          children: [{
            value: 'layout',
            label: '全部成员'
          }, {
            value: 'color',
            label: 'Color 色彩'
          }, {
            value: 'typography',
            label: 'Typography 字体'
          }, {
            value: 'icon',
            label: 'Icon 图标'
          }, {
            value: 'button',
            label: 'Button 按钮'
          }]
        }, {
          value: 'form',
          label: 'Form',
          children: [{
            value: 'radio',
            label: 'Radio 单选框'
          }, {
            value: 'checkbox',
            label: 'Checkbox 多选框'
          }, {
            value: 'input',
            label: 'Input 输入框'
          }, {
            value: 'input-number',
            label: 'InputNumber 计数器'
          }, {
            value: 'select',
            label: 'Select 选择器'
          }, {
            value: 'cascader',
            label: 'Cascader 级联选择器'
          }, {
            value: 'switch',
            label: 'Switch 开关'
          }, {
            value: 'slider',
            label: 'Slider 滑块'
          }, {
            value: 'time-picker',
            label: 'TimePicker 时间选择器'
          }, {
            value: 'date-picker',
            label: 'DatePicker 日期选择器'
          }, {
            value: 'datetime-picker',
            label: 'DateTimePicker 日期时间选择器'
          }, {
            value: 'upload',
            label: 'Upload 上传'
          }, {
            value: 'rate',
            label: 'Rate 评分'
          }, {
            value: 'form',
            label: 'Form 表单'
          }]
        }, {
          value: 'data',
          label: 'Data',
          children: [{
            value: 'table',
            label: 'Table 表格'
          }, {
            value: 'tag',
            label: 'Tag 标签'
          }, {
            value: 'progress',
            label: 'Progress 进度条'
          }, {
            value: 'tree',
            label: 'Tree 树形控件'
          }, {
            value: 'pagination',
            label: 'Pagination 分页'
          }, {
            value: 'badge',
            label: 'Badge 标记'
          }]
        }, {
          value: 'notice',
          label: 'Notice',
          children: [{
            value: 'alert',
            label: 'Alert 警告'
          }, {
            value: 'loading',
            label: 'Loading 加载'
          }, {
            value: 'message',
            label: 'Message 消息提示'
          }, {
            value: 'message-box',
            label: 'MessageBox 弹框'
          }, {
            value: 'notification',
            label: 'Notification 通知'
          }]
        }, {
          value: 'navigation',
          label: 'Navigation',
          children: [{
            value: 'menu',
            label: 'NavMenu 导航菜单'
          }, {
            value: 'tabs',
            label: 'Tabs 标签页'
          }, {
            value: 'breadcrumb',
            label: 'Breadcrumb 面包屑'
          }, {
            value: 'dropdown',
            label: 'Dropdown 下拉菜单'
          }, {
            value: 'steps',
            label: 'Steps 步骤条'
          }]
        }, {
          value: 'others',
          label: 'Others',
          children: [{
            value: 'dialog',
            label: 'Dialog 对话框'
          }, {
            value: 'tooltip',
            label: 'Tooltip 文字提示'
          }, {
            value: 'popover',
            label: 'Popover 弹出框'
          }, {
            value: 'card',
            label: 'Card 卡片'
          }, {
            value: 'carousel',
            label: 'Carousel 走马灯'
          }, {
            value: 'collapse',
            label: 'Collapse 折叠面板'
          }]
        }]
      }, {
        value: 'ziyuan',
        label: '资源',
        children: [{
          value: 'axure',
          label: 'Axure Components'
        }, {
          value: 'sketch',
          label: 'Sketch Templates'
        }, {
          value: 'jiaohu',
          label: '组件交互文档'
        }]
      }],
      resultNum: 12,
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        newClue: 480,
        newClueA: 12,
        newClueB: 12,
        newClueC: 12,
        newClueD: 12,
        Aclue: 48,
        Aeffective: 12,
        Adetermined: 12,
        Ainvalid: 12,
        AgiveUp: 12,
        Bclue: 48,
        Beffective: 12,
        Bdetermined: 12,
        Binvalid: 12,
        BgiveUp: 12,
        Cclue: 48,
        Ceffective: 12,
        Cdetermined: 12,
        Cinvalid: 12,
        CgiveUp: 12,
        Dclue: 48,
        Deffective: 12,
        Ddetermined: 12,
        Dinvalid: 12,
        DgiveUp: 12,
        department: '市场部/市场部主管',
        source: '网路流量/竞价/百度搜索',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        newClue: 48,
        newClueA: 12,
        newClueB: 12,
        newClueC: 12,
        newClueD: 12,
        Aclue: 48,
        Aeffective: 12,
        Adetermined: 12,
        Ainvalid: 12,
        AgiveUp: 12,
        Bclue: 48,
        Beffective: 12,
        Bdetermined: 12,
        Binvalid: 12,
        BgiveUp: 12,
        Cclue: 48,
        Ceffective: 12,
        Cdetermined: 12,
        Cinvalid: 12,
        CgiveUp: 12,
        Dclue: 48,
        Deffective: 12,
        Ddetermined: 12,
        Dinvalid: 12,
        DgiveUp: 12,
        department: '市场部/市场部主管',
        source: '网路流量/竞价/百度搜索',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        newClue: 48,
        newClueA: 12,
        newClueB: 12,
        newClueC: 12,
        newClueD: 12,
        Aclue: 48,
        Aeffective: 12,
        Adetermined: 12,
        Ainvalid: 12,
        AgiveUp: 12,
        Bclue: 48,
        Beffective: 12,
        Bdetermined: 12,
        Binvalid: 12,
        BgiveUp: 12,
        Cclue: 48,
        Ceffective: 12,
        Cdetermined: 12,
        Cinvalid: 12,
        CgiveUp: 12,
        Dclue: 48,
        Deffective: 12,
        Ddetermined: 12,
        Dinvalid: 12,
        DgiveUp: 12,
        department: '市场部/市场部主管',
        source: '网路流量/竞价/百度搜索',
        address: '上海市普陀区金沙江路 1519 弄'
      }],
      source: [],
      num: 0,
      tabData: []
    }
  },
  methods: {
    dateFn () {
      console.log(this.source)
    },
    fn (n) {
      console.log(n, 3)
      // this.num = n
      this.tabData = this.tableData.slice((n - 1) * 20, ((n - 1) * 20 + 20) > this.tableData.length ? this.tableData.length : (n - 1) * 20 + 20)
    }
  },
  beforeCreate () {
    // this.tabData = this.tableData.slice(n * 20,(n*20 + 20) > this.tableData.length ? this.tableData.length : n*20 + 20)
  },
  mounted () {
    this.$emit('changeClumb', this.clumb)
  }
}
</script>

<style lang="less">
  .customer {
    .search {
      height: 36px;
      padding-bottom: 20px;
      border-bottom: 1px solid  #dddddd;
      font-size: 16px;
      li {
        height: 36px;
        line-height: 36px;
        font-size: 16px;
        display: flex;
        display: -webkit-flex;
        justify-content: space-between;
        p.time {
          height: 36px;
          .el-icon-date {
            font-size: 16px;
          }
          .el-date-editor {
            height: 36px;
          }
        }
      }

    }
    .resultShow {
      height: 45px;
      padding-top: 14px;
      line-height: 28px;
      font-size: 14px;
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
</style>
