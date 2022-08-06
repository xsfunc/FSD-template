import { Layout } from '@/shared/ui'
import { Header } from '@/widgets/header'
import { Typography } from '@mui/joy'

export function SettingsPage() {
  return (
    <Layout>
      <Header />
      <Layout.Content>
        <Typography>Settings</Typography>
      </Layout.Content>
    </Layout>
  )
}
