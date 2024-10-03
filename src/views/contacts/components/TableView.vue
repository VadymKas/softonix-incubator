<template>
  <el-table
    :data="contacts"
    style="width: 99.9%"
    header-row-class-name="header"
    row-class-name="row"
    @row-click="handleRowClick"
  >
    <el-table-column label="Image" width="100">
      <template #default="scope">
        <div
          class="flex items-center justify-center w-[40px] h-[40px] rounded-full shrink-0 overflow-hidden
        border border-gray-medium bg-gray-ultra-light mx-auto"
        >
          <span
            v-if="imageHasError || !scope.row.image"
            class="font-medium uppercase"
          >{{ getNameAbbrv(scope.row.name) }}
          </span>

          <img
            v-else
            class="object-cover"
            :src="scope.row.image"
            alt="contact-logo"
            @error="imageHasError = true"
            @load="imageHasError = false"
          >
        </div>
      </template>
    </el-table-column>
    <el-table-column prop="name" label="Name">
      <template #default="scope">
        <template v-if="editMode[scope.row.id]">
          <input
            ref="inputRef"
            v-model="localContact[scope.row.id].name"
            type="text"
            class="block font-medium w-full"
            @click.stop
          >
        </template>
        <template v-else>
          <p class="font-medium cursor-text truncate" @click.stop>{{ scope.row.name }}</p>
        </template>
      </template>
    </el-table-column>
    <el-table-column prop="description" label="Description">
      <template #default="scope">
        <template v-if="editMode[scope.row.id]">
          <input
            v-model="localContact[scope.row.id].description"
            type="text"
            class="block font-medium w-full"
            @click.stop
          >
        </template>
        <template v-else>
          <p class="font-medium cursor-text truncate" @click.stop>{{ scope.row.description }}</p>
        </template>
      </template>
    </el-table-column>
    <el-table-column label="Actions" width="200">
      <template #default="scope">
        <template v-if="editMode[scope.row.id]">
          <AppButton
            size="small"
            :type="$elComponentType.warning"
            @click.stop="editMode[scope.row.id] = false"
          >
            Cancel
          </AppButton>
          <AppButton
            size="small"
            :type="$elComponentType.primary"
            @click.stop="updateContactHandler(scope.row.id)"
          >
            Save
          </AppButton>
        </template>

        <template v-else>
          <AppButton
            size="small"
            @click.stop="triggerEditMode(scope.row.id)"
          >
            Edit
          </AppButton>
          <AppButton
            size="small"
            :type="$elComponentType.danger"
            @click.stop="deleteContactHandler(scope.row)"
          >
            Delete
          </AppButton>
        </template>
      </template>
    </el-table-column>
  </el-table>
</template>

<script lang="ts" setup>
const imageHasError = ref(false)

const props = defineProps<{
  contacts: IContact[]
}>()

const router = useRouter()
const { $routeNames } = useGlobalProperties()
const contactsStore = useContactsStore()
const { updateContact, deleteContact } = contactsStore

const inputRef = ref<HTMLInputElement>()

const localContact = ref<{[key: number]: IContact}>({})

const editMode = ref<{[key: string]: boolean}>({})

async function triggerEditMode (id: number) {
  editMode.value[id] = true
  localContact.value[id] = { ...props.contacts?.find(contact => contact.id === id) as IContact }
  await nextTick()
  inputRef.value?.focus()
}

function deleteContactHandler (contact: IContact) {
  deleteContact(contact)
}

function updateContactHandler (id: number) {
  updateContact(localContact.value[id])
  editMode.value[id] = false
}

function handleRowClick (row: IContact) {
  const contactId = row.id
  router.push({ name: $routeNames.upsertContact, params: { contactId } })
}

function getNameAbbrv (name: string): string {
  return name.split(' ').reduce((acc, cur) => {
    if (acc.length < 2) {
      acc = acc.concat(cur[0])
    }
    return acc
  }, '')
}
</script>

<style>
  .row  {
    @apply border border-slate-500 cursor-pointer
  }

  .el-table td {
    @apply px-2.5 py-4
  }

  .hidden-columns {
    @apply hidden
  }
</style>
