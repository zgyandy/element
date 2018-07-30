<template>
  <div class="navbar">
    <ul class="layout header">
      <li class="logo">
        <p><img src="../../assets/img/logo.png" alt=""></p>
        <h3>海同科技CRM管理系统</h3>
      </li>
      <li class="search">
        <el-input
          placeholder="请输入客户名/手机号查询"
          v-model="search"
          suffix-icon="el-icon-search"
          size="medium"
        >
        <el-button slot="append">搜索</el-button>
        </el-input>
      </li>
      <li class="userMsg">
        <p>
          <span>您好：<em class="userName">{{userName}}</em><span>，欢迎登陆！上次登录时间：<em class="time">{{loginTime}}</em></span></span>
          <span class="loginOut">退出</span>
        </p>
        <dl>
          <dd><span>今日通话时长：<em class="callTime">{{callTime}}</em></span></dd>
          <dd><span>通话次数：<em class="callNum">{{callNum}}</em></span></dd>
          <dd><span><em class="el-icon-message"></em><em class="msgNum">{{msgNum}}</em>条未处理</span></dd>
        </dl>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      search: '',
      userName: '小明',
      loginTime: '2018-06-12 16:04:03',
      callTime: '00:00:00',
      callNum: 12,
      msgNum: 3
    }
  }
}
</script>

<style lang="less">
  .navbar {
    height: 110 - 50px;
    padding: 25px 0;
    min-width: 1200px;
    background-color: #428adf;
    .header {
      height: 60px;
      display: flex;
      display: -webkit-flex;
      justify-content: space-between;
      align-items: center;
      li {
        height: 60px;
        color: #fff;
        h3 {
          font-size: 20px;
        }
        h4 {
          font-size: 16px;
        }
      }
      .search {
        height: 40px;
        .el-input__inner {
          width: 320px;
          height: 40px;
        }
        .el-icon-search {
          font-size: 20px;
        }
      }
      .userMsg {
        min-width: 380px;
        display: flex;
        display: -webkit-flex;
        justify-content: space-between;
        flex-direction: column;
        p {
          height: 16px;
          line-height: 16px;
          .loginOut::before {
            content: '|';
            padding: 0 10px;
          }
        }
        dl {
          height: 30px;
          line-height: 30px;
          font-size: 15px;
          display: flex;
          display: -webkit-flex;
          justify-content: space-between;
          align-items: center;
          .el-icon-message {
            font-size: 18px;
            cursor: pointer;
          }
        }
      }
    }
  }
</style>
