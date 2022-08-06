import { Layout } from '@/shared/ui'
import { Header } from '@/widgets/header'
import { Typography } from '@mui/joy'

export default function Page() {
  return (
    <Layout>
      <Header />
      <Layout.Content>
        <Typography>Contacts</Typography>
      </Layout.Content>
    </Layout>
  )
}
