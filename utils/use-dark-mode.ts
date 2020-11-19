import { useEffect, useState } from 'react'

const updateDarkModeClass = (enabled: boolean) => {
  if (enabled) {
    document.querySelector('html')?.classList.add('dark')
  } else {
    document.querySelector('html')?.classList.remove('dark')
  }
}

const updateLocalStorage = (enabled: boolean) => {
  localStorage.setItem('theme', enabled ? 'dark' : 'light')
}

const getInitialDarkModeState = () => {
  if (typeof window === 'undefined') return false
  if ('theme' in localStorage) {
    return localStorage.getItem('theme') === 'dark'
  } else {
    return window.matchMedia('(prefers-color-scheme: dark)').matches
  }
}

const useDarkMode: () => [
  isDarkMode: boolean,
  toggleDarkMode: () => void
] = () => {
  const [enabled, setEnabled] = useState<boolean | null>(null)

  useEffect(() => {
    if (enabled !== null) {
      updateDarkModeClass(enabled)
      updateLocalStorage(enabled)
    }
  }, [enabled])

  // Only load dark mode state on the client when mounting
  useEffect(() => {
    setEnabled(getInitialDarkModeState())
  }, [])

  const toggleDarkMode = () => setEnabled(!enabled)

  return [!!enabled, toggleDarkMode]
}

export default useDarkMode
