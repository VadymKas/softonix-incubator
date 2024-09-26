<template>
  <div class="flex items-center flex-wrap gap-4">
    <h3 class="font-medium m-0">Contact list</h3>

    <AppButton @click="createNewContact">
      <template #icon>
        <IconPlus class="w-5 h-5" />
      </template>
      Add Contact
    </AppButton>
    <SearchInput v-model="selectionParams.byText" class="ml-auto" />
    <SearchSelect v-model="selectionParams.byRoles" :roles="contactsRoles" />
    <SortContacts v-model="selectionParams.byName" />
  </div>

  <div class="grid-cols-[repeat(auto-fill,_minmax(320px,_1fr))] grid gap-5 my-5">
    <ContactItem
      v-for="contact in filteredContacts"
      :key="contact.id"
      class="cursor-pointer"
      :contact="contact"
      @click="editContact(contact.id)"
      @delete="deleteContact"
      @save="updateContact"
    />
  </div>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router'
import { storeToRefs } from 'pinia'
import { useContactsStore } from '@/store'

import ContactItem from '@/components/ContactItem.vue'
import AppButton from '@/components/AppButton.vue'
import IconPlus from '@/components/icons/IconPlus.vue'
import SearchInput from '@/components/SearchInput.vue'
import { computed, ref } from 'vue'
import SearchSelect from '@/components/SearchSelect.vue'
import SortContacts from '@/components/SortContacts.vue'

type TSelectionParams = {
  byText: string
  byRoles: string[]
  byName: string
}

const router = useRouter()

const contactsStore = useContactsStore()
const { contacts } = storeToRefs(contactsStore)
const { contactsRoles, updateContact, deleteContact } = contactsStore

const selectionParams = ref<TSelectionParams>({
  byText: '',
  byRoles: [],
  byName: ''
})

const filteredContacts = computed(() => {
  return contacts.value
    .filter((contact) => {
      return (contact.name.toLowerCase().includes(selectionParams.value.byText) ||
        contact.description.toLowerCase().includes(selectionParams.value.byText)) &&
        selectionParams.value.byRoles.every((role) => contact.roles.includes(role))
    })
    .sort((a, b) => {
      if (selectionParams.value.byName === 'ascending') {
        return a.name.localeCompare(b.name)
      }
      if (selectionParams.value.byName === 'descending') {
        return b.name.localeCompare(a.name)
      }
      return 0
    })
})

function createNewContact () {
  router.push({ name: 'upsertContact', params: { contactId: 'new' } })
}

function editContact (contactId: number) {
  router.push({ name: 'upsertContact', params: { contactId } })
}
</script>
