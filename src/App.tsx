import { useEffect, useState } from 'react'
import { Toaster } from 'react-hot-toast'

import { Header } from './components/header'
import { TasksContextProvider } from './hooks/useTasks'
import { Home } from './pages/home'

export function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const storedTheme = localStorage.getItem('todolist:theme')

    if (storedTheme) {
      return JSON.parse(storedTheme)
    } else {
      return true
    }
  })

  function toggleDarkMode() {
    setDarkMode((state: boolean) => !state)
  }

  useEffect(() => {
    const isDarkMode = localStorage.getItem('todolist:theme') === 'true'
    setDarkMode(isDarkMode)
  }, [])

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode)
    localStorage.setItem('todolist:theme', darkMode)
  }, [darkMode])

  return (
    <TasksContextProvider>
      <Header darkMode={darkMode} onToggleDarkMode={toggleDarkMode} />
      <Home />
      <Toaster />
    </TasksContextProvider>
  )
}
