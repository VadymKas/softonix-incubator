<template>
  <select
    v-model="selected"
    multiple
    class="select"
  >
    <option v-for="role of roles" :key="role" :value="role">{{ role }}</option>
  </select>
</template>

<script lang="ts" setup>
const selected = defineModel<string[]>()
defineProps<{
  roles: string[]
}>()
</script>

<style>
  .select {
    @apply
      block w-full max-h-[75px] font-medium text-sm border rounded-md border-gray-medium focus:border-gray-dark p-2 my-2
  }
</style>
