<template>
  <div class="sowing_list">
    <el-card class="box-card">
      <!-- 面包屑导航栏 -->
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/back/s_list' }">轮播图管理</el-breadcrumb-item>
        <el-breadcrumb-item>轮播图列表</el-breadcrumb-item>
      </el-breadcrumb>
      <!-- 添加轮播图按钮 -->
      <el-button type="primary" @click="$router.push('/back/s_add')">添加轮播图</el-button>
      <!-- 表格部分 -->
      <el-table :data="tableData" border style="width: 100%">
        <el-table-column type="index" label="#">
        </el-table-column>
        <el-table-column prop="date" label="图片名称">
        </el-table-column>
        <el-table-column prop="name" label="图片缩略图">
        </el-table-column>
        <el-table-column prop="address" label="跳转链接">
        </el-table-column>
        <el-table-column prop="address" label="上架时间">
        </el-table-column>
        <el-table-column prop="name" label="下架时间">
        </el-table-column>
        <el-table-column prop="address" label="操作">
        </el-table-column>
      </el-table>
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'SowingList',
  data () {
    return {
    }
  },
  methods: {}
}
</script>

<style scoped lang='stylus'>
@import '../../style/common.styl'
.box-card
  clearFix()
  .el-button
    margin 20px 0
    float right
</style>
