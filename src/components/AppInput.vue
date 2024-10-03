<template>
  <el-form-item :label="label">
    <el-input v-model="vModel" :type="type" :placeholder="placeholder" />
  </el-form-item>
</template>

<script lang="ts" setup>
defineProps<{
  label?: string
  type?: string
  placeholder?: string
  prop?: string
}>()

const vModel = defineModel<string>()
</script>
