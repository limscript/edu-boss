<template>
  <div class="resource-list">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <el-form :inline="true" :model="form" class="demo-form-inline" ref="forms">
          <el-form-item prop="name" label="资源名称">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item prop="url" label="资源路径">
            <el-input v-model="form.url"></el-input>
          </el-form-item>
          <el-form-item prop="categoryId" label="资源分类">
            <el-select v-model="form.categoryId" clearable>
              <el-option
                :label="item.name"
                :value="item.id"
                v-for="item in categories"
                :key="item.id"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit" :disabled="loading">查询</el-button>
            <el-button @click="onRest" :disabled="loading">重置</el-button>
          </el-form-item>
        </el-form>
      </div>
      <el-table :data="resources" style="width: 100%; margin:0 0 20px;" v-loading="loading">
        <el-table-column type="index" label="编号" width="100"> </el-table-column>
        <el-table-column prop="name" label="资源名称" width="180"> </el-table-column>
        <el-table-column prop="url" label="资源路径" min-width="180"> </el-table-column>
        <el-table-column prop="description" label="描述" min-width="180"> </el-table-column>
        <el-table-column prop="createdTime" label="添加时间" width="180"> </el-table-column>
        <el-table-column label="操作" width="180">
          <template slot-scope="scope">
            <el-button type="text" size="small" @click="handleEdit(scope.row)">编辑</el-button>
            <el-button type="text" size="small" @click="handleDelete(scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination
        background
        layout="total,sizes,prev, pager, next,jumper"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page.sync="form.current"
        :page-sizes="[5, 10, 20]"
        :page-size="form.size"
        :total="totalCount"
        :disabled="loading"
      >
      </el-pagination>
    </el-card>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Form } from 'element-ui'
import { getResourcePages, getResourceCategories } from '@/services/resource'

export default Vue.extend({
  data() {
    return {
      loading: false,
      form: {
        name: '',
        url: '',
        categoryId: null,
        current: 1,
        size: 20
      },
      resources: [],
      categories: [],
      totalCount: 0
    }
  },
  created() {
    this.loadCategories()
    this.loadResources()
  },
  methods: {
    async loadCategories() {
      const { data } = await getResourceCategories()
      this.categories = data.data
    },
    async loadResources() {
      this.loading = true
      try {
        const { data } = await getResourcePages(this.form)
        this.resources = data.data.records
        this.totalCount = data.data.total
      } catch (error) {
        console.error(error)
      } finally {
        this.loading = false
      }
    },
    onSubmit() {
      this.form.current = 1
      this.loadResources()
    },
    onRest() {
      ;(this.$refs.forms as Form).resetFields()
    },
    handleSizeChange(val: number) {
      console.log(`每页 ${val} 条`)
      this.form.size = val
      this.form.current = 1
      this.loadResources()
    },
    handleCurrentChange(val: number) {
      console.log(`当前页: ${val}`)
      this.form.current = val
      this.loadResources()
    }
  }
})
</script>
<style lang='scss' scoped>
</style>
