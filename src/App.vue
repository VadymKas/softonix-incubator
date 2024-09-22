<template>
  <div class="max-w-[1440px] mx-auto p-6">
    <h3 class="text-3xl font-medium mb-4">Contact list</h3>
    <button class="button" @click="showFormHandler">Add contact</button>
    <div class="contact-list grid-cols-[repeat(auto-fill,_minmax(320px,_1fr))] grid gap-5 my-5">
      <ContactItem
        v-for="(contact, index) in contacts"
        :key="contact.id"
        :contact="contact"
        @delete="confirmDeleteContact(index)"
        @save="onContactSave($event, index)"
      />
    </div>
    <ContactForm v-if="activeForm" @trigger="showFormHandler()" @add="addContact" />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import type { IContact } from '@/types'
import ContactItem from '@/components/ContactItem.vue'
import ContactForm from './components/ContactForm.vue'

const activeForm = ref(false)

const contacts = ref<IContact[]>([
  {
    id: 1,
    name: 'Esther Howard',
    description: 'Forward Response Developer',
    image: 'https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60'
  },
  {
    id: 2,
    name: 'Jane Cooper',
    description: 'Regional Paradigm Technician Regional Paradigm Technician Regional Paradigm Technician',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60'
  },
  {
    id: 3,
    name: 'Cody Fisher',
    description: 'Product Directives Officer',
    image: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60'
  }
])

function deleteContact (index: number) {
  contacts.value.splice(index, 1)
}

function onContactSave (contact: IContact, index: number) {
  contacts.value[index] = { ...contact }
}

const showFormHandler = () => (activeForm.value = !activeForm.value)

const addContact = (newContact: IContact) => contacts.value.unshift(newContact)

const confirmDeleteContact = (index: number) => window.confirm('Are you sure you want to delete this contact?')
  ? deleteContact(index)
  : []
</script>
