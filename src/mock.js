// 引入mockjs
const Mock = require('mockjs')
// 使用mockjs模拟数据
Mock.mock('data', 'get', function() {
  return {
    name: 'andy'
  }
})
// 用户信息
Mock.mock('userinfo', 'post', {
  name: '@cname',
  img: '@dataImage(40x40,帅)',
  id: '@integer(1,9999)',
  address: '@region',
  phone: /^1(3|4|5|6|7|8|9)\d{9}/
})
// 客户线索
Mock.mock('customerClue', 'post', function() {
  return [
    {
      value: 'zhinan',
      label: '全部来源',
      children: [
        {
          value: 'shejiyuanze',
          label: '全部分类',
          children: [
            {
              value: 'yizhi',
              label: '全部明细'
            },
            {
              value: 'fankui',
              label: '反馈'
            },
            {
              value: 'xiaolv',
              label: '效率'
            },
            {
              value: 'kekong',
              label: '可控'
            }
          ]
        },
        {
          value: 'daohang',
          label: '导航',
          children: [
            {
              value: 'cexiangdaohang',
              label: '侧向导航'
            },
            {
              value: 'dingbudaohang',
              label: '顶部导航'
            }
          ]
        }
      ]
    },
    {
      value: 'zujian',
      label: '全部部门',
      children: [
        {
          value: 'basic',
          label: '全部岗位',
          children: [
            {
              value: 'layout',
              label: '全部成员'
            },
            {
              value: 'color',
              label: 'Color 色彩'
            },
            {
              value: 'typography',
              label: 'Typography 字体'
            },
            {
              value: 'icon',
              label: 'Icon 图标'
            },
            {
              value: 'button',
              label: 'Button 按钮'
            }
          ]
        },
        {
          value: 'form',
          label: 'Form',
          children: [
            {
              value: 'radio',
              label: 'Radio 单选框'
            },
            {
              value: 'checkbox',
              label: 'Checkbox 多选框'
            },
            {
              value: 'input',
              label: 'Input 输入框'
            },
            {
              value: 'input-number',
              label: 'InputNumber 计数器'
            },
            {
              value: 'select',
              label: 'Select 选择器'
            },
            {
              value: 'cascader',
              label: 'Cascader 级联选择器'
            },
            {
              value: 'switch',
              label: 'Switch 开关'
            },
            {
              value: 'slider',
              label: 'Slider 滑块'
            },
            {
              value: 'time-picker',
              label: 'TimePicker 时间选择器'
            },
            {
              value: 'date-picker',
              label: 'DatePicker 日期选择器'
            },
            {
              value: 'datetime-picker',
              label: 'DateTimePicker 日期时间选择器'
            },
            {
              value: 'upload',
              label: 'Upload 上传'
            },
            {
              value: 'rate',
              label: 'Rate 评分'
            },
            {
              value: 'form',
              label: 'Form 表单'
            }
          ]
        },
        {
          value: 'data',
          label: 'Data',
          children: [
            {
              value: 'table',
              label: 'Table 表格'
            },
            {
              value: 'tag',
              label: 'Tag 标签'
            },
            {
              value: 'progress',
              label: 'Progress 进度条'
            },
            {
              value: 'tree',
              label: 'Tree 树形控件'
            },
            {
              value: 'pagination',
              label: 'Pagination 分页'
            },
            {
              value: 'badge',
              label: 'Badge 标记'
            }
          ]
        },
        {
          value: 'notice',
          label: 'Notice',
          children: [
            {
              value: 'alert',
              label: 'Alert 警告'
            },
            {
              value: 'loading',
              label: 'Loading 加载'
            },
            {
              value: 'message',
              label: 'Message 消息提示'
            },
            {
              value: 'message-box',
              label: 'MessageBox 弹框'
            },
            {
              value: 'notification',
              label: 'Notification 通知'
            }
          ]
        },
        {
          value: 'navigation',
          label: 'Navigation',
          children: [
            {
              value: 'menu',
              label: 'NavMenu 导航菜单'
            },
            {
              value: 'tabs',
              label: 'Tabs 标签页'
            },
            {
              value: 'breadcrumb',
              label: 'Breadcrumb 面包屑'
            },
            {
              value: 'dropdown',
              label: 'Dropdown 下拉菜单'
            },
            {
              value: 'steps',
              label: 'Steps 步骤条'
            }
          ]
        },
        {
          value: 'others',
          label: 'Others',
          children: [
            {
              value: 'dialog',
              label: 'Dialog 对话框'
            },
            {
              value: 'tooltip',
              label: 'Tooltip 文字提示'
            },
            {
              value: 'popover',
              label: 'Popover 弹出框'
            },
            {
              value: 'card',
              label: 'Card 卡片'
            },
            {
              value: 'carousel',
              label: 'Carousel 走马灯'
            },
            {
              value: 'collapse',
              label: 'Collapse 折叠面板'
            }
          ]
        }
      ]
    },
    {
      value: 'ziyuan',
      label: '资源',
      children: [
        {
          value: 'axure',
          label: 'Axure Components'
        },
        {
          value: 'sketch',
          label: 'Sketch Templates'
        },
        {
          value: 'jiaohu',
          label: '组件交互文档'
        }
      ]
    }
  ]
})
Mock.mock('customerTable', 'post', function() {
  return [
    {
      date: '2016-05-02',
      name: Mock.Random.cname(),
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
    },
    {
      date: '2016-05-02',
      name: Mock.Random.cname(),
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
    }
  ]
})
// 线索类别
Mock.mock('clueType', 'post', function() {
  return [
    {
      value: '全部类别',
      id: 0,
      label: '全部类别'
    },
    {
      value: 'A',
      id: 1,
      label: 'A'
    },
    {
      value: 'B',
      id: 2,
      label: 'B'
    },
    {
      value: 'C',
      id: 3,
      label: 'C'
    },
    {
      value: 'D',
      id: 4,
      label: 'D'
    }
  ]
})
// 线索类型
Mock.mock('clueForm', 'post', function() {
  return [
    {
      value: '全部类型',
      id: 0
    },
    {
      value: '新线索',
      id: 1
    },
    {
      value: '意向用户',
      id: 2
    },
    {
      value: '潜在客户',
      id: 3
    },
    {
      value: '成交客户',
      id: 4
    },
    {
      value: '放弃线索',
      id: 5
    },
    {
      value: '无效线索',
      id: 6
    }
  ]
})
// 线索库
Mock.mock('clueLibrary', 'post', function() {
  return [
    {
      value: '全部线索库',
      id: 0
    },
    {
      value: '新单库',
      id: 1
    },
    {
      value: '跟进库',
      id: 2
    },
    {
      value: '公共库',
      id: 3
    },
    {
      value: '成交库',
      id: 4
    },
    {
      value: '无效库',
      id: 5
    }
  ]
})
// 责任人
Mock.mock('cluePeincipal', 'post', [
  {
    id: 1,
    name: '总裁办',
    parentId: 0,
    type: 2,
    isDelete: 0,
    children: []
  },
  {
    id: 2,
    name: '市场部',
    parentId: 1,
    type: 2,
    isDelete: 0,
    children: [
      {
        id: 6,
        name: '市场推广',
        parentId: 2,
        type: 1,
        isDelete: 0,
        children: [
          {
            id: 1,
            name: '@cname'
          },
          {
            id: 2,
            name: '@cname'
          }
        ]
      },
      {
        id: 7,
        name: '客服部',
        parentId: 2,
        type: 1,
        isDelete: 0,
        children: [
          {
            id: 1,
            name: '@cname'
          },
          {
            id: 2,
            name: '@cname'
          }
        ]
      },
      {
        id: 8,
        name: '数据部',
        parentId: 2,
        type: 1,
        isDelete: 0,
        children: [
          {
            id: 1,
            name: '@cname'
          },
          {
            id: 2,
            name: '@cname'
          }
        ]
      }
    ]
  },
  {
    id: 3,
    name: '运营部',
    parentId: 1,
    type: 2,
    isDelete: 0,
    children: [
      {
        id: 9,
        name: '社群运营',
        parentId: 3,
        type: 1,
        isDelete: 0,
        children: [
          {
            id: 1,
            name: '@cname'
          },
          {
            id: 2,
            name: '@cname'
          }
        ]
      }
    ]
  },
  {
    id: 4,
    name: '线下事业部',
    parentId: 1,
    type: 2,
    isDelete: 0,
    children: [
      {
        id: 10,
        name: '浦西一部',
        parentId: 4,
        type: 1,
        isDelete: 0,
        children: [
          {
            id: 1,
            name: '@cname'
          },
          {
            id: 2,
            name: '@cname'
          }
        ]
      },
      {id: 11, name: '浦西二部', parentId: 4, type: 1, isDelete: 0},
      {id: 12, name: '浦东一部', parentId: 4, type: 1, isDelete: 0},
      {id: 13, name: '浦东二部', parentId: 4, type: 1, isDelete: 0}
    ]
  },
  {
    id: 5,
    name: '线上事业部',
    parentId: 1,
    type: 2,
    isDelete: 0,
    children: [
      {
        id: 15,
        name: '销售一部',
        parentId: 5,
        type: 1,
        isDelete: 0,
        children: [
          {
            id: 1,
            name: '@cname'
          },
          {
            id: 2,
            name: '@cname'
          }
        ]
      },
      {id: 16, name: '销售二部', parentId: 5, type: 1, isDelete: 0},
      {id: 17, name: '教务部', parentId: 5, type: 1, isDelete: 0},
      {id: 20, name: '销售一部一组', parentId: 5, type: 1, isDelete: 0},
      {id: 21, name: '销售一部二组', parentId: 5, type: 1, isDelete: 0},
      {id: 22, name: '销售一部三组', parentId: 5, type: 1, isDelete: 0},
      {id: 37, name: '高校渠道部', parentId: 5, type: 1, isDelete: 0}
    ]
  },
  {
    id: 14,
    name: 'TMK',
    parentId: 1,
    type: 1,
    isDelete: 0,
    children: [
      {
        id: 18,
        name: 'TMK一部',
        parentId: 14,
        type: 1,
        isDelete: 0,
        children: [
          {
            id: 1,
            name: '@cname'
          },
          {
            id: 2,
            name: '@cname'
          }
        ]
      },
      {id: 19, name: 'TMK二部', parentId: 14, type: 1, isDelete: 0}
    ]
  }
])
// 渠道来源
Mock.mock('clurSource', 'post', function () {
  return []
})
// 省市地区
Mock.mock('regions', 'post', function() {
  return [
    {
      id: 110000,
      name: '北京',
      regions: [
        {
          id: 110100,
          name: '北京市',
          regions: [
            {
              id: 110101,
              name: '东城区'
            },
            {
              id: 110102,
              name: '西城区'
            },
            {
              id: 110103,
              name: '崇文区'
            },
            {
              id: 110104,
              name: '宣武区'
            },
            {
              id: 110105,
              name: '朝阳区'
            },
            {
              id: 110106,
              name: '丰台区'
            },
            {
              id: 110107,
              name: '石景山区'
            },
            {
              id: 110108,
              name: '海淀区'
            },
            {
              id: 110109,
              name: '门头沟区'
            },
            {
              id: 110111,
              name: '房山区'
            },
            {
              id: 110112,
              name: '通州区'
            },
            {
              id: 110113,
              name: '顺义区'
            },
            {
              id: 110114,
              name: '昌平区'
            },
            {
              id: 110115,
              name: '大兴区'
            },
            {
              id: 110116,
              name: '怀柔区'
            },
            {
              id: 110117,
              name: '平谷区'
            },
            {
              id: 110228,
              name: '密云县'
            },
            {
              id: 110229,
              name: '延庆县'
            }
          ]
        }
      ],
      pinyin: 'BeiJing',
      hot: true,
      municipality: true
    },
    {
      id: 120000,
      name: '天津',
      regions: [
        {
          id: 120100,
          name: '天津市',
          regions: [
            {
              id: 120101,
              name: '和平区'
            },
            {
              id: 120102,
              name: '河东区'
            },
            {
              id: 120103,
              name: '河西区'
            },
            {
              id: 120104,
              name: '南开区'
            },
            {
              id: 120105,
              name: '河北区'
            },
            {
              id: 120106,
              name: '红桥区'
            },
            {
              id: 120107,
              name: '塘沽区'
            },
            {
              id: 120108,
              name: '汉沽区'
            },
            {
              id: 120109,
              name: '大港区'
            },
            {
              id: 120110,
              name: '东丽区'
            },
            {
              id: 120111,
              name: '西青区'
            },
            {
              id: 120112,
              name: '津南区'
            },
            {
              id: 120113,
              name: '北辰区'
            },
            {
              id: 120114,
              name: '武清区'
            },
            {
              id: 120115,
              name: '宝坻区'
            },
            {
              id: 120221,
              name: '宁河县'
            },
            {
              id: 120223,
              name: '静海县'
            },
            {
              id: 120225,
              name: '蓟县'
            }
          ]
        }
      ],
      pinyin: 'TianJin',
      hot: true,
      municipality: true
    }
  ]
})
