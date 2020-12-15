<template>
  <el-container>
    <!-- 1.侧边栏 -->
    <el-aside width="200px">
      <el-row class="side">
        <el-col>
          <!-- 头像 -->
          <div class="avator-box">
            <div class="avator">
              <img src="https://pic1.zhimg.com/80/v2-28855d15dddb626d8b1337849fadf3a7_qhd.jpg" alt="">
            </div>
            <p>羊羊羊</p>
          </div>

          <!-- 导航栏 -->
          <el-menu :default-active="activeIndex" background-color="#3c3c3c" text-color="#e7e7e7" :router="true">
            <el-menu-item index="/back/home" @click="handActive('/back/home')">
              <i class="el-icon-menu"></i>
              <span slot="title">首页数据</span>
            </el-menu-item>
            <el-menu-item index="/back/s_list" @click="handActive('/back/s_list')">
              <i class="el-icon-s-platform"></i>
              <span slot="title">轮播图管理</span>
            </el-menu-item>
            <el-menu-item index="/back/source_list" @click="handActive('/back/source_list')">
              <i class="el-icon-setting"></i>
              <span slot="title">幼教资源管理</span>
            </el-menu-item>
            <el-submenu index="4">
              <template slot="title">
                <i class="el-icon-user-solid"></i>
                <span>用户管理</span>
              </template>
              <el-menu-item index="/back/u_center" @click="handActive('/back/u_center')">用户中心</el-menu-item>
              <el-menu-item index="/back/u_set" @click="handActive('/back/u_set')">用户信息</el-menu-item>
            </el-submenu>
          </el-menu>
        </el-col>
      </el-row>
    </el-aside>
    <el-container>
      <!-- 2.头部 -->
      <el-header>
        <div class="header_left">Zeke数据分发管理系统</div>
        <div class="header_right">
          <i class="iconfont icon-tuichudenglu"></i>
          <span>退出</span>
        </div>
      </el-header>
      <!-- 3.内容主体 -->
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      activeIndex: '/back/home'
    }
  },
  created () {
    // 获取本地的activeIndex
    const activeIndex = sessionStorage.getItem('activeIndex')
    if (activeIndex) {
      this.activeIndex = activeIndex
    }
  },
  methods: {
    // 将选中激活的index保存到本地
    handActive (path) {
      this.activeIndex = path
      sessionStorage.setItem('activeIndex', this.activeIndex)
    }
  }
}
</script>

<style scoped lang='stylus'>
.el-container
  height 100vh
  width 100vw
  background #e0e0e0
  .el-aside
    height 100vh
    background #3c3c3c
    .el-menu
      height 100%
      border none
    .avator-box
      margin 60px 0 20px 0
      text-align center
      .avator
        height 80px
        width 80px
        border-radius 50%
        background #fff
        overflow hidden
        border 3px solid #fff
        margin 0 auto
        img
          width 100%
      p
        color #fff
        font-size 14px
  .el-header
    width 100%
    height 120px
    background #fff
    display flex
    justify-content space-between
    align-items center
    .header_left
      font-size 20px
      font-weight 700
      cursor pointer
    .header_right
      cursor pointer
</style>
