<template>
  <el-button
    :disabled="disabled"
    class="inline-flex items-center justify-center"
  >
    <div v-if="$slots.icon" class="mr-1">
      <slot name="icon" />
    </div>

    <slot />
  </el-button>
</template>

<script lang="ts" setup>
defineProps<{
  disabled?: boolean
}>()
</script>
