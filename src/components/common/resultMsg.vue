<template>
  <p class="resultShow">
    <span>找到相关结果<em class="red">{{resultNum}}个，</em></span>
    <span v-for="(val, key) in date" :key="key"><em class="blue">{{val}}</em><span v-show="key === 0">&nbsp;至&nbsp;</span></span>
    <span v-for="(item, key) in resultArr" :key="key">{{item.name}}<em class="red">{{item.num}}</em>个，</span>
    <!-- <span>新线索<em class="red">12</em>个，</span>
    <span>有效单<em class="red">12</em>个，</span>
    <span>待定单<em class="red">12</em>个，</span>
    <span>无效单<em class="red">12</em>个，</span>
    <span>放弃单<em class="red">12</em>个。</span> -->
  </p>
</template>

<script>
export default {
  props: {
    date: {
      default: []
    },
    resultNum: {
      default: 0
    },
    resultArr: {
      default: []
    }
  }
}
</script>

<style>
  .resultShow {
    height: 45px;
    padding-top: 14px;
    line-height: 28px;
    font-size: 14px;
  }
</style>
