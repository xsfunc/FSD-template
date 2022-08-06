import { Layout, ThemeSwitch } from '@/shared/ui'
import { Header } from '@/widgets/header'

export function HomePage() {
  return (
    <Layout>
      <Header />

      <Layout.Content>
        <ThemeSwitch />
      </Layout.Content>
    </Layout>
  )
}
