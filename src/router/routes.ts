import type { RouteRecordRaw } from 'vue-router'

import {
  contactRouteNames,
  contactsRoutes
} from '@/views/contacts/contacts.routes'
import { jobsRoutes } from '@/views/jobs/jobs.routers'

export const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: { name: contactRouteNames.contacts }
  },

  ...contactsRoutes,
  ...jobsRoutes
]
