<template>
  <div class="menu-create">
    <create-or-edit is-edit="true" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import createOrEdit from './components/create-or-edit.vue'
export default Vue.extend({
  components: {
    createOrEdit
  },
  data() {
    return {}
  },
  methods: {}
})
</script>
<style lang='scss' scoped>
</style>
