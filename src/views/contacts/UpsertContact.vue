<template>
  <el-card :body-style="{padding: 0}" class="w-fit flex justify-center m-auto">
    <Card :title="cardTitle" class="w-[350px] p-0">
      <div class="space-y-4">
        <AppInput v-model="contactForm.name" placeholder="Name" />

        <AppInput v-model="contactForm.description" placeholder="Description" />

        <AppInput v-model="contactForm.image" placeholder="Image Link" />
      </div>

      <template #footer>
        <div class="px-6 pb-6 mt-2 flex gap-3">
          <AppButton :type="$elComponentType.warning" class="flex-auto" @click="$router.go(-1)">
            Cancel
          </AppButton>

          <AppButton v-if="currentContact" :type="$elComponentType.danger" class="flex-auto" @click="onDelete">
            Delete
          </AppButton>

          <AppButton :type="$elComponentType.primary" class="flex-auto" :disabled="!isFormValid" @click="onSave">
            <template #icon>
              <IconPlus class="w-5 h-5" />
            </template>
            Save
          </AppButton>
        </div>
      </template>
    </Card>
  </el-card>
</template>

<script lang="ts" setup>
const router = useRouter()
const route = useRoute()

const { $routeNames } = useGlobalProperties()

const contactsStore = useContactsStore()
const { contacts } = storeToRefs(contactsStore)
const { addContact, updateContact, deleteContact } = contactsStore

const currentContact = computed(() => contacts.value.find(c => c.id === +route.params.contactId))

const cardTitle = computed(() => {
  return currentContact.value ? 'Edit Contact' : 'New Contact'
})

const contactForm = reactive<IContact>(currentContact.value
  ? { ...currentContact.value }
  : {
    id: contacts.value.length + 1,
    name: '',
    description: '',
    image: ''
  })

const isFormValid = computed(() => {
  const { image, ...contact } = contactForm
  return Object.values(contact).every(c => !!c)
})

function onDelete () {
  deleteContact(currentContact.value as IContact)
  router.replace({ name: $routeNames.contacts })
}

function onSave () {
  if (currentContact.value) {
    updateContact(contactForm)
  } else {
    addContact(contactForm)
  }
  router.push({ name: $routeNames.contacts })
}
</script>
