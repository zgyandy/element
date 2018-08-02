import { postData } from '../config/base.js'
var test = (params) => postData({
  url: '/department/querySubDepartment',
  data: {
    departmentId: 1
  },
  success: params.success,
  error: params.error
})

export {
  test
}
