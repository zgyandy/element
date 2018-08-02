import axios from 'axios'
import Vue from 'vue'
var baseUrl = ''
var version = '1.0.1'
// 环境判断
if (process.env.NODE_ENV === 'development') {
  baseUrl = '192.168.8.33:9010'
} else if (process.env.NODE_ENV === 'test') {
  baseUrl = 'test'
} else if (process.env.NODE_ENV === 'production') {
  baseUrl = 'prodction'
}
// http://localhost:9010/department/querySubDepar
let axi = axios.create({
  baseUrl: baseUrl,
  timeOut: 8000,
  headers: {
    varsion: version
  }
})
let postData = (refs) => {
  // 判断是否有数据 转换为表单数据
  var formData = new FormData()
  if (refs.data) {
    for (var key in refs.data) {
      formData.append(key, refs.data[key])
    }
    refs.data = formData
  }
  return axi({
    method: 'post',
    url: refs.url,
    data: refs.data
  }).then(res => {
    refs.success && refs.success(res.data)
  }).catch(error => {
    refs.error && refs.error(error)
  })
}
Vue.prototype.postData = postData
