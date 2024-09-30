<template>
  <section class="lg:w-1/3 md:w-2/4 sm:w-full flex flex-col flex-auto bg-white rounded-lg shadow overflow-hidden p-4">
    <h2 class="text-lg font-semibold mb-4">Job Openengs</h2>
    <SelectInput v-model="filterParams" :departments="filteredDepartments" />
    <p class="text-medium pb-3">
      {{ jobsNumberMessage }}
    </p>
    <CustomDevider />
    <JobsGrouping :deps="filteredGroupedJobs" />
  </section>
</template>

<script setup>
import { departments } from '@/_homework/departments'
import { jobOpenings } from '@/_homework/job-openings'

const filterParams = ref([])
const jobsNumberMessage = ref()

const groupedJobs = departments.reduce((acc, dep) => {
  const filtedJobs = jobOpenings.filter((job) => job.departments.includes(dep.value))
  if (filtedJobs.length) acc[dep.name] = filtedJobs
  return acc
}, {})

groupedJobs.Other = jobOpenings.filter((job) => !job.departments.length)

const sortedGroupedJobs = Object.fromEntries(
  Object.entries(groupedJobs)
    .sort(([keyA], [keyB]) => keyA.localeCompare(keyB))
)

const filteredGroupedJobs = computed(() => filterParams.value.length
  ? filterParams.value
    .map((department) => department.name)
    .reduce((acc, key) => {
      acc[key] = sortedGroupedJobs[key]
      return acc
    }, {})
  : sortedGroupedJobs
)

const filteredDepartments = departments.filter((dep) => Object.keys(groupedJobs).includes(dep.name))
filteredDepartments.push({ name: 'Other', value: 'other' })
filteredDepartments.sort((keyA, keyB) => keyA.name.localeCompare(keyB.name))

function getJobsNumber () {
  const filteredJobsNum = new Set(
    Object
      .values(filteredGroupedJobs.value)
      .flat()
      .map((job) => job.id)
  ).size

  jobsNumberMessage.value = filterParams.value.length > 0
    ? `Showing ${filteredJobsNum} out of ${groupedJobs.length} job openings`
    : `Showing ${jobOpenings.length} job openings`
}

onMounted(() => getJobsNumber())

watch(filterParams, getJobsNumber)
</script>
