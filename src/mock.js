// 引入mockjs
const Mock = require('mockjs')
// 使用mockjs模拟数据
Mock.mock('data', 'get', function () {
  return {
    'name': 'andy'
  }
})
Mock.mock('postTest', 'post', function () {
  return {
    'post': 'test'
  }
})
// 用户信息
Mock.mock('userinfo', 'post', function () {
  return {
    name: 'xiaoming',
    'id': 12,
    age: 18,
    adress: '上海'
  }
})
var data = Mock.mock({
  'number|10': 202
})
console.log(JSON.stringify(data))
