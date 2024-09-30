<template>
  <div class="overflow-auto">
    <ul v-for="(jobs, dep) in deps" :key="dep" class="list-disc list-inside mb-2">
      <span class="font-semibold">
        {{ `${dep} (${jobs.length})` }}
      </span>
      <li
        v-for="job in organizeJobsList(jobs, dep as string)"
        :key="job.id"
        class="text-blue-500 hover:underline truncate cursor-pointer"
      >
        {{ job.title }}
      </li>
      <button
        v-if="jobs.length > 5"
        class="text-sm font-semibold text-blue-600 hover:text-blue-700 cursor-pointer"
        @click="toogleJobsList(dep as string)"
      >
        {{ checkJobsList(dep as string) ? 'See less' : 'See more' }}
      </button>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import type { IJobOpening } from '@/_homework/job-openings'

const showFullList = ref<{ [key: string]: boolean }>({})

type TProps = {
  deps: {
    [key: string ]: IJobOpening[]
  }
}

const { deps } = defineProps<TProps>()

function organizeJobsList (jobs: IJobOpening[], dep: string) {
  return showFullList.value[dep] ? jobs : jobs.slice(0, 5)
}

function toogleJobsList (dep: string) {
  showFullList.value[dep] = !showFullList.value[dep]
}

function checkJobsList (dep: string) {
  return showFullList.value[dep]
}
</script>
