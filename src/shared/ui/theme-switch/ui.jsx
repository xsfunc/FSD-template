import { useColorScheme } from '@mui/joy'
import { toggleTheme } from './lib'
import Switch from '@mui/joy/Switch'

export function ThemeSwitch() {
  const { mode, setMode } = useColorScheme()
  const handleChange = () => setMode(toggleTheme(mode))
  return <Switch checked={mode === 'dark'} onChange={handleChange} />
}
