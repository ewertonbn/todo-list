import { MoonStars, Sun } from 'phosphor-react'
import { twMerge } from 'tailwind-merge'

import logoToDoListDarkMode from '../assets/logo-todo-list.svg'
import logoToDoListLightMode from '../assets/logo-todo-list-white.svg'

interface HeaderProps {
  darkMode: boolean
  onToggleDarkMode: () => void
}

export function Header({ darkMode, onToggleDarkMode }: HeaderProps) {
  function handleToggleDarkMode() {
    onToggleDarkMode()
  }

  return (
    <header className="bg-blue px-5 pb-20 pt-[4.5rem] md:px-0 dark:bg-gray-700">
      <div className="relative mx-auto flex max-w-[736px] items-center justify-center">
        {darkMode ? (
          <img
            src={logoToDoListDarkMode}
            className="logo-primary"
            alt="Logotipo ToDo List"
          />
        ) : (
          <img
            src={logoToDoListLightMode}
            className="logo-primary"
            alt="Logotipo ToDo List"
          />
        )}
        <button
          type="button"
          onClick={handleToggleDarkMode}
          className={twMerge(
            'absolute bottom-0 right-0 top-0 m-auto flex h-10 w-10 items-center justify-center rounded-lg px-2 py-1 transition-colors duration-200',
            darkMode ? 'bg-gray-400' : 'bg-gray-200',
          )}
        >
          {darkMode ? <Sun size={28} /> : <MoonStars size={28} />}
        </button>
      </div>
    </header>
  )
}
