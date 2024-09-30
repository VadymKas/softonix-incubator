<template>
  <h3>Departments:</h3>
  <div
    class="relative h-9 flex items-center border border-gray-medium rounded bg-white shadow cursor-pointer py-4 mb-1"
    @click="visibilityHandler"
  >
    <p v-if="!!selected?.length" class="truncate pl-2 pr-10">
      {{ showDepartmentNames() }}
    </p>
    <p v-if="!selected?.length" class="text-gray truncate pl-2 pr-10 ">
      Select departments
    </p>
    <select
      v-if="isVisible"
      v-model="selected"
      multiple
      class="absolute top-[38px] z-10 h-[200px] w-full
        font-medium text-sm rounded-md border border-gray-medium shadow-xl p-2"
    >
      <option
        v-for="department of departments"
        :key="department.value"
        :value="department"
        @click.stop
      >
        {{ department.name }}
      </option>
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
import type { IDepartment } from '@/_homework/departments'
import { ref } from 'vue'

const isVisible = ref(false)

const selected = defineModel<IDepartment[]>()

defineProps<{
  departments: IDepartment[]
}>()

function eraseField () {
  selected.value = []
  isVisible.value = false
}

function showDepartmentNames () {
  return selected.value?.map((department) => department.name).join(', ')
}

function visibilityHandler () {
  isVisible.value = !isVisible.value
}
</script>
