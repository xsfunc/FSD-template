import { LazyLoading } from '@/shared/ui/lazy-load-progress'
import { lazy, Suspense } from 'react'

const Page = lazy(() => import('./ui'))

export const ContactsPage = () => (
  <Suspense fallback={<LazyLoading />}>
    <Page />
  </Suspense>
)
