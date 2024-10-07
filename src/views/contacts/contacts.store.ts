export const useContactsStore = defineStore('contactsStore', () => {
  const contacts = ref<IContact[]>([])

  const getContacts = () => {
    if (contacts.value.length) return

    return contactsService.getContacts()
      .then(res => {
        contacts.value = res
          .sort((a, b) => a.id - b.id)
      })
  }

  function addContact (contact: IContact) {
    const { image, id, ...rest } = contact
    return contactsService.createContact(rest)
      .then(() => contacts.value.push(contact))
  }

  function updateContact (contact: IContact) {
    // const currentIndex = contacts.value.findIndex(c => c.id === contact.id)
    // contacts.value[currentIndex] = { ...contact }
    contactsService.updateContact(contact)
      .then(() => {
        const currentIndex = contacts.value.findIndex(c => c.id === contact.id)
        contacts.value[currentIndex] = { ...contact }
      })
  }

  function deleteContact (contact: IContact) {
    return contactsService.deleteContact(contact)
      .then(() => {
        const currentIndex = contacts.value.findIndex(c => c.id === contact.id)
        contacts.value.splice(currentIndex, 1)
      })
  }

  return {
    contacts,
    getContacts,
    addContact,
    deleteContact,
    updateContact
  }
})
