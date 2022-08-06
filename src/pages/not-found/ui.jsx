import { Layout } from '@/shared/ui'
import { Header } from '@/widgets/header'
import { Typography } from '@mui/joy'

export function NotFoundPage() {
  return (
    <Layout>
      <Header />
      <Layout.Content>
        <Typography>Not found</Typography>
      </Layout.Content>
    </Layout>
  )
}
