import type { RouteRecordRaw } from 'vue-router'

import JobsOpenings from '@/views/jobs/JobsOpenings.vue'

export const jobsRouteNames = {
  jobs: 'jobs'
}

export const jobsRoutes: RouteRecordRaw[] = [
  {
    path: '/job_openings',
    name: jobsRouteNames.jobs,
    component: JobsOpenings
  }
]
