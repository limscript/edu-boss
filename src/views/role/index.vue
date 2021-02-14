<template>
  <div class="role">
    <role-list></role-list>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import RoleList from './components/list.vue'
export default Vue.extend({
  components: {
    RoleList
  }
})
</script>
<style lang='scss' scoped>
</style>
