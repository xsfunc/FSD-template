import { Route, RouterProvider } from 'atomic-router-react'
import { HomePage } from '@/pages/home'
import { ContactsPage } from '@/pages/contacts'
import { SettingsPage } from '@/pages/settings'
import { NotFoundPage } from '@/pages/not-found'
import { CssVarsProvider } from '@mui/joy'
import {
  theme,
  homeRoute,
  settingsRoute,
  notFoundRoute,
  router,
  contactsRoute,
} from '@/shared/config'

export function App() {
  return (
    <CssVarsProvider theme={theme}>
      <RouterProvider router={router}>
        <Route route={homeRoute} view={HomePage} />
        <Route route={contactsRoute} view={ContactsPage} />
        <Route route={settingsRoute} view={SettingsPage} />
        <Route route={notFoundRoute} view={NotFoundPage} />
      </RouterProvider>
    </CssVarsProvider>
  )
}
