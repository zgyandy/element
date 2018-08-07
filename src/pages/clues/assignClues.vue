<template>
  <div class="assignClues content">
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
            value-format="yyyy-MM-dd">
          </el-date-picker>
        </p>
        <p>
          <span>线索类别：</span>
          <el-select placeholder="请选择" v-model="cluesState">
            <el-option
            v-for="(item, key) in options"
            :key="key"
            :label="item.label"
            :value="item.value"></el-option>
          </el-select>
        </p>
        <p>
          <span>线索类型：</span>
          <el-select placeholder="请选择" v-model="cluesState">
            <el-option
            v-for="(item, key) in options"
            :key="key"
            :label="item.label"
            :value="item.value"></el-option>
          </el-select>
        </p>
      </li>
      <li>
        <p>
          <span>线索位置：</span>
            <el-cascader
              @change="dateFn"
              placeholder="请选择渠道来源"
              :options="options2"
              filterable
              size="medium"
              v-model="source"
              pops = "{
                value: 'label',
                lavel: 'value'
              }">
            </el-cascader>
        </p>
        <p>
          <span>客户地区：</span>
            <el-cascader
              @change="dateFn"
              placeholder="请选择渠道来源"
              :options="options2"
              filterable
              size="medium"
              v-model="source"
              pops = "{
                value: 'label',
                lavel: 'value'
              }">
            </el-cascader>
        </p>
      </li>
      <li>
        <dl>
          <dt>渠道来源：</dt>
          <dd>
            <el-cascader
              @change="dateFn"
              placeholder="请选择渠道来源"
              :options="options2"
              filterable
              size="medium"
              v-model="source"
              pops = "{
                value: 'label',
                lavel: 'value'
              }">
            </el-cascader>
          </dd>
        </dl>
        <dl>
          <dt>手机号/需求备注：</dt>
          <dd>
            <el-input placeholder="请输入手机号后备注"></el-input>
          </dd>
        </dl>
        <p>
          <el-button
          size="medium"
          type="primary"
          >确认</el-button>
        </p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      date: [],
      cluesState: '',
      options: [{
        value: '选项1',
        label: '黄金糕'
      }, {
        value: '选项2',
        label: '双皮奶'
      }, {
        value: '选项3',
        label: '蚵仔煎'
      }, {
        value: '选项4',
        label: '龙须面'
      }, {
        value: '选项5',
        label: '北京烤鸭'
      }],
      source: [],
      options2: [{
        value: 'zhinan',
        label: '全部来源',
        children: [{
          value: 'shejiyuanze',
          label: '全部分类',
          children: [{
            value: 'yizhi',
            label: '全部明细',
            children: [{
              value: 'ceshi',
              label: '全部销售顾问'
            }]
          }]
        }]
      }],
      area: []
    }
  },
  methods: {
    dateFn () {

    }
  }
}
</script>

<style lang="less" scoped>
  .assignClues {
    .search {
      min-height: 36px;
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
        margin-bottom: 20px;
        dl {
          display: flex;
          display: -webkit-flex;
        }
        p.time {
          height: 36px;
          .el-icon-date {
            font-size: 16px;
          }
          .el-date-editor {
            height: 36px;
          }
        }
        .el-cascader-menu{
          height: auto;
        }
      }
      li:last-child {
        margin-bottom: 0;
      }
    }
  }
</style>
