import { createHistoryRouter, createRoute, redirect } from 'atomic-router'
import { createBrowserHistory } from 'history'
import { createEffect, sample } from 'effector'

export const homeRoute = createRoute()
export const contactsRoute = createRoute()
export const settingsRoute = createRoute()
export const notFoundRoute = createRoute()

homeRoute.$isOpened
homeRoute.$params
homeRoute.$query

export const routes = [
  { path: '/', route: homeRoute },
  { path: '/contacts', route: contactsRoute },
  { path: '/settings', route: settingsRoute },
  { path: '/404', route: notFoundRoute },
]

const history = createBrowserHistory()
export const router = createHistoryRouter({ routes })
router.setHistory(history)

sample({
  clock: router.routeNotFound,
  target: notFoundRoute.open,
})

const consoleLogFx = createEffect((params) => console.log(params))

sample({
  clock: contactsRoute.opened,
  fn: () => 'Contacts opened',
  target: consoleLogFx,
})
// sample({
//   clock: router.$activeRoutes,
//   target: consoleLogFx,
// })
