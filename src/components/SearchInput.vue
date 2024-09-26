<template>
  <input
    v-model="search"
    type="text"
    :placeholder="placeholder"
    class="max-w-[300px] w-full flex flex-col shrink-0 rounded bg-white shadow text-sm p-2 placeholder-gray-default"
  >
</template>

<script lang="ts" setup>
type TProps = {
  placeholder?: string
}

withDefaults(defineProps<TProps>(), {
  placeholder: 'Search contacts by name and description'
})

const search = defineModel<string>()
</script>
