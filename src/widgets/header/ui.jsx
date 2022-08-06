import { contactsRoute, homeRoute, settingsRoute } from '@/shared/config'
import { Layout } from '@/shared/ui'
import { Link as RouteLink } from 'atomic-router-react'
import { Link as JoyLink } from '@mui/joy'
import { LinkForwarded } from '@/shared/ui/link'

export function Header() {
  return (
    <Layout.Header>
      <RouteLink to={homeRoute}>Home</RouteLink>
      <RouteLink to={contactsRoute}>Contacts</RouteLink>
      <RouteLink to={settingsRoute}>Settings</RouteLink>
    </Layout.Header>
  )
}
