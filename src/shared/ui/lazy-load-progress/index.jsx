import { useEffect } from 'react'
import nprogress from 'nprogress'
import 'nprogress/nprogress.css'

export const LazyLoading = () => {
  useEffect(() => {
    nprogress.start()
    return () => {
      nprogress.done()
    }
  }, [])

  return null
}
