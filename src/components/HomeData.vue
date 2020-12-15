<template>
  <div class="homedata">
    <ul class="wrapper-1">
      <li class="data-item" style="background: #bd2130;">
        <i class="iconfont icon-yonghu"></i>
        <p class="text">登录用户</p>
        <p>13,00</p>
      </li>
      <li class="data-item" style="background: #d39e00;">
        <i class="iconfont icon-zhuce"></i>
        <p class="text">新增用户</p>
        <p>13,00</p>
      </li>
      <li class="data-item" style="background: #17a2b8;">
        <i class="iconfont icon-zhaoxiangji"></i>
        <p class="text">课程新增学员</p>
        <p>13,00</p>
      </li>
    </ul>
    <ul class="wrapper-2">
      <li class="data-item" style="background: #007bff;">
        <i class="iconfont icon-safari"></i>
        <p class="text">班级新增学员</p>
        <p>13,00</p>
      </li>
      <li class="data-item" style="background: #17a2b8;">
        <i class="iconfont icon-redaifengbao"></i>
        <p class="text">新增会员</p>
        <p>13,00</p>
      </li>
      <li class="data-item" style="background: #545b62;">
        <i class="iconfont icon-question"></i>
        <p class="text">未回复问答</p>
        <p>13,00</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: '',
  data () {
    return {
    }
  },
  methods: {}
}
</script>

<style scoped lang='stylus'>
.homedata
  padding-top 10vh
  .wrapper-1, .wrapper-2
    display flex
    justify-content space-evenly
    padding 0px 20px 0 20px
    color #fff
  .data-item
    height 200px
    width 400px
    border-radius 5px
    flex 1
    margin 20px
    display flex
    flex-direction column
    align-items center
    justify-content center
    .iconfont
      font-size 80px
      font-weight 700
    .text
      font-size 20px
      margin-bottom 20px
</style>
