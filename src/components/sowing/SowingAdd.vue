<template>
  <div class="sowingadd">
    <el-card>
      <!-- 面包屑导航栏 -->
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/back/s_list' }">轮播图管理</el-breadcrumb-item>
        <el-breadcrumb-item>添加轮播图</el-breadcrumb-item>
      </el-breadcrumb>
      <!-- form表单 -->
      <el-form :model="addSowingForm" :rules="addSowingRules" ref="addSowingFormRef" label-width="100px">
        <el-form-item label="图片名称" prop="name">
          <el-input v-model="addSowingForm.name"></el-input>
        </el-form-item>
        <el-form-item label="图片路径" prop="link">
          <el-input v-model="addSowingForm.name"></el-input>
        </el-form-item>
        <el-form-item label="跳转链接" prop="href">
          <el-input v-model="addSowingForm.name"></el-input>
        </el-form-item>
        <el-form-item label="上架时间" prop="add_time">
          <el-input type="date" v-model="addSowingForm.name"></el-input>
        </el-form-item>
        <el-form-item label="下架时间" prop="x_time">
          <el-input type="date" v-model="addSowingForm.name"></el-input>
        </el-form-item>
      </el-form>
      <!-- 添加轮播图按钮 -->
      <el-button type="primary">添加轮播</el-button>
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'SowingAdd',
  data () {
    return {
      addSowingForm: {
        name: ''
      },
      addSowingRules: {
        name: [
          { required: true, message: '请填写图片名称！', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {}
}
</script>

<style scoped lang='stylus'>
.el-card
  height calc(100vh - 120px)
</style>
