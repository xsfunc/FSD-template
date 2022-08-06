import { Box, Container, Sheet } from '@mui/joy'

function Layout({ children }) {
  return <>{children}</>
}
function Content({ children }) {
  return (
    <Container maxWidth='lg'>
      <Sheet sx={{ p: 2 }} variant='outlined'>
        {children}
      </Sheet>
    </Container>
  )
}

function Header({ children }) {
  return (
    <Box sx={{ height: 60, p: 2, display: 'flex', flexDirection: 'row', columnGap: 1 }} height={60}>
      {children}
    </Box>
  )
}

Layout.Header = Header
Layout.Content = Content
export default Layout
