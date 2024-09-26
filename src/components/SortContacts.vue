<template>
  <select
    v-model="selected"
    class="max-w-[300px] w-full h-9 flex shrink-0 items-center rounded bg-white shadow cursor-pointer"
  >
    <option value="">Sort name by default</option>
    <option value="ascending">Sort name by ascending</option>
    <option value="descending">Sort name by descending</option>
  </select>
</template>

<script lang="ts" setup>
const selected = defineModel<string>()
</script>
