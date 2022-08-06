import { createEffect, createStore, forward } from 'effector'

export const fetchContactsFx = createEffect()
export const addContactFx = createEffect()
export const $contactsMap = createStore({})
export const $contacts = $contactsMap.map(Object.values)

// init

fetchContactsFx.use()
addContactFx.use()

$contactsMap.on(fetchContactsFx.doneData, (_, contacts) => contacts)

forward({
  from: addContactFx.doneData,
  to: fetchContactsFx,
})
