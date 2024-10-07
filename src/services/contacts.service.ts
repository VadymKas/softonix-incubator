class ContactsService {
  // rest/v1/contacts
  getContacts () {
    return useHttp.get<IContact[]>('rest/v1/contacts')
  }

  createContact (newContact: Pick<IContact, 'name' | 'description'>) {
    return useHttp.post('rest/v1/contacts', newContact)
  }

  updateContact (contact: IContact) {
    return useHttp.patch(`rest/v1/contacts?id=eq.${contact.id}`, contact)
  }

  deleteContact (contact: Omit<IContact, 'image'>) {
    return useHttp.delete(`rest/v1/contacts?id=eq.${contact.id}`)
  }
}

export const contactsService = new ContactsService()
