<template>
  <div class="menu">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <el-button @click="$router.push({ name: 'menu-create' })">添加菜单</el-button>
      </div>
      <el-table :data="menus" style="width: 100%">
        <el-table-column type="index" label="编号"> </el-table-column>
        <el-table-column prop="name" label="菜单名称"> </el-table-column>
        <el-table-column prop="level" label="菜单级数"> </el-table-column>
        <el-table-column prop="icon" label="前端图标"> </el-table-column>
        <el-table-column prop="orderNum" label="排序"> </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button type="text" size="small" @click="handleEdit">编辑</el-button>
            <el-button type="text" size="small" @click="handleDelete(scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-card>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { getAllMenus, deleteMenu } from '@/services/menu'
export default Vue.extend({
  data() {
    return {
      menus: []
    }
  },
  created() {
    this.loadAllMemus()
  },
  methods: {
    async loadAllMemus() {
      const { data } = await getAllMenus()
      this.menus = data.data
    },
    handleEdit() {
      console.log()
    },
    handleDelete(item: any) {
      this.$confirm('确认删除吗？', '删除提示', {})
        .then(async () => {
          await deleteMenu(item.id)
          this.$message.success('删除成功')
          this.loadAllMemus()
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
})
</script>
<style lang='scss' scoped>
</style>
