import { createEffect, createEvent, createStore } from 'effector'

export const contactAdded = createEvent()
export const $contactsMap = createStore({})

const contactsApi = {}

const getContactListFx = createEffect((params) => {
  return contactsApi.contacts.getContacts(params)
})
const getContactByIdFx = createEffect((params) => {
  return contactsApi.contacts.getContactById(params)
})

export const contactsInitialState = {}
export const $contacts = createStore(contactsInitialState)
  .on(getContactListFx.doneData, (_, payload) => payload.data)
  .on(getContactByIdFx.doneData, (_, payload) => payload.data)

export const $contactListLoading = getContactListFx.pending
