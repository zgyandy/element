// 引入mockjs
const Mock = require('mockjs')
// 使用mockjs模拟数据
Mock.mock('data', 'get', function () {
  return {
    'age|1-6': 12
  }
})
