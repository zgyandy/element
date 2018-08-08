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
          <el-select placeholder="请选择线索类别" v-model="cluesCategory" @change="fn">
            <el-option
            v-for="(item, key) in category"
            :key="key"
            :label="item.label"
            :value="item.value"></el-option>
          </el-select>
        </p>
        <p>
          <span>线索类型：</span>
          <el-select placeholder="请选择" v-model="clueType">
            <el-option
            v-for="(item, key) in options"
            :key="key"
            :label="item.label"
            :value="item.value"></el-option>
          </el-select>
        </p>
      </li>
      <li>
        <dl>
          <dt>线索位置：</dt>
          <dd>
            <el-select placeholder="请选择线索库" v-model="clueLibrary" @change="dateFn">
              <el-option
                v-for="(item, key) in clueObj" :key="key"
                :value="item.value"
                :label="item.label"
                filterable
              ></el-option>
            </el-select>
            <el-select placeholder="请选择线索库" v-model="clueDep">
              <el-option
                v-for="(item, key) in clueObj" :key="key"
                :value="item.value"
                :label="item.label"
                filterable
              ></el-option>
            </el-select>
            <el-select placeholder="请选择线索库" v-model="clueLibrary">
              <el-option
                v-for="(item, key) in clueLibraryArr" :key="key"
                :value="item.value"
                :label="item.label"
                filterable
              ></el-option>
            </el-select>
            <el-select placeholder="请选择线索库" v-model="clueLibrary">
              <el-option
                v-for="(item, key) in clueLibraryArr" :key="key"
                :value="item.value"
                :label="item.label"
                filterable
              ></el-option>
            </el-select>
          </dd>
        </dl>
        <dl>
          <dt>客户地区：</dt>
          <dd>
            <el-select placeholder="请选择线索库" v-model="clueLibrary" @change="dateFn">
              <el-option
                v-for="(item, key) in clueLibraryArr" :key="key"
                :value="item.value"
                :label="item.label"
                filterable
              ></el-option>
            </el-select>
          </dd>
        </dl>
      </li>
      <li>
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
  props: ['page'],
  data () {
    return {
      clumb: [{path: '/clues', name: '线索管理'}, {name: '线索分配'}], // 面包屑
      date: [], // 选择日期
      cluesCategory: '全部类别', // 线索类别
      clueType: '全部类型', // 线索类型
      clueLibrary: 1, // 线索库
      clueDep: '1',
      category: [{value: '全部类别', label: '全部类别'}, {value: '1', label: '黄金糕'}],
      options: [{value: '全部类型', label: '全部类型'}, {value: '1', label: '黄金糕'}],
      clueLibraryArr: [{value: 1, label: '全部线索库'}, {value: '1', label: '黄金糕'}],
      clueObj: [
        {value: 1, label: '全部线索', children: [{value: 12, label: '部门', children: [{value: 13, label: '销售部', children: [{value: 14, label: '销售顾问'}]}]}]},
        {value: 2, label: '线索1', children: [{value: 22, label: '部门1', children: [{value: 23, label: '销售1', children: [{value: 24, label: '顾问1'}]}]}]}
      ],
      arr: []
    }
  },
  methods: {
    dateFn () {
      console.log(this.clueLibrary)
    },
    fn () {
      console.log(this.cluesCategory)
    }
  },
  mounted () {
    this.$emit('changeClumb', this.clumb)
  }
}
</script>

<style lang="less">
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
          .el-input__inner {
            height: 36px;
          }
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
      li:nth-child(2) {
        .el-input__inner {
          height: 36px;
          width: 120px;
        }
      }
      li:last-child {
        margin-bottom: 0;
      }
    }
  }
</style>
