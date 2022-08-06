import React from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './app'

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const reactRoot = createRoot(document.getElementById('root')!)

reactRoot.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
