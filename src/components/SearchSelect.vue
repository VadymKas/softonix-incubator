<template>
  <div
    class="relative max-w-[300px] w-full h-9 flex shrink-0 items-center rounded bg-white shadow cursor-pointer"
    @click="isVisible = !isVisible"
  >
    <p v-if="!!selected?.length" class="truncate pl-2 pr-10">
      {{ selected?.join(', ') }}
    </p>
    <p v-if="!selected?.length" class="text-gray-default text-sm truncate pl-2 pr-10 ">
      Filter contacts by roles
    </p>
    <select
      v-if="isVisible"
      v-model="selected"
      multiple
      class="absolute top-[37px] z-10 h-20 w-full max-h-[75px]
        font-medium text-sm rounded-md border border-gray-medium shadow-xl p-2"
    >
      <option v-for="role of roles" :key="role" :value="role" @click.stop>{{ role }}</option>
    </select>
    <button
      v-if="!!selected?.length"
      class="absolute right-2 w-4 h-4 rounded-full bg-slate-200 text-xs leading-none text-slate-700"
      @click.stop="eraseField"
    >
      x
    </button>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const isVisible = ref(false)

const selected = defineModel<string[]>()

defineProps<{
  roles: string[]
}>()

function eraseField () {
  selected.value = []
  isVisible.value = false
}
</script>
