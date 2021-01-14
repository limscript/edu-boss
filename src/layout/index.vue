<template>
  <el-container>
    <el-aside width="200px"><app-aside /></el-aside>
    <el-container>
      <el-header><app-header /></el-header>
      <el-main><router-view /></el-main>
    </el-container>
  </el-container>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'AdvertIndex',
  components: {
    AppAside: () => import('./components/app-aside.vue'),
    AppHeader: () => import('./components/app-header.vue')
  },
  data() {
    return {}
  }
})
</script>
<style lang='scss' scoped>
.el-container {
  min-height: 100vh;
  min-width: 980px;
}
.el-header,
.el-footer {
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}
</style>
