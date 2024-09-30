<template>
  <header class="rounded-lg bg-white shadow py-4 mb-5">
    <nav>
      <ul class="flex divide-x divide-solid">
        <li
          class="nav__element"
          @click="router.push({name: $routeNames.contacts})"
        >
          Contacts
        </li>
        <li
          class="nav__element"
          @click="router.push({name: $routeNames.jobs})"
        >
          Job openings
        </li>
      </ul>
    </nav>
  </header>
</template>

<script lang="ts" setup>
const router = useRouter()
const { $routeNames } = useGlobalProperties()
</script>

<style>
  .nav__element {
    @apply text-sm font-medium cursor-pointer hover:text-blue-500 active:text-blue-700 px-5
  }
</style>
