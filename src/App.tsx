import { useEffect, useState } from 'react'
import { toast, Toaster } from 'react-hot-toast'
import { v4 as uuidv4 } from 'uuid'

import { AddNewTask } from './components/addNewTask'
import { CounterStatusTask } from './components/counterStatusTask'
import { Header } from './components/header'
import { NotFoundTasks } from './components/notFoundTasks'
import { TasksList } from './components/tasksList'

interface TasksProps {
  id: string
  content: string
  isChecked: boolean
  createdAt: Date
}

export function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const storedTheme = localStorage.getItem('todolist:theme')

    if (storedTheme) {
      return JSON.parse(storedTheme)
    } else {
      return true
    }
  })

  const [tasks, setTasks] = useState<TasksProps[]>(() => {
    const storedTasks = localStorage.getItem('todolist:tasks')

    if (storedTasks) {
      return JSON.parse(storedTasks)
    } else {
      return []
    }
  })

  const checkedTasksCounter = tasks.reduce((acc, task) => {
    if (task.isChecked) {
      return acc + 1
    }

    return acc
  }, 0)

  function crateNewTask(content: string) {
    const newTask = {
      id: uuidv4(),
      content,
      isChecked: false,
      createdAt: new Date(),
    }

    setTasks((state) => [...state, newTask])
    toast.success('Tarefa adicionada!')
  }

  function deleteTask(id: string) {
    const newListTasks = tasks.filter((task) => {
      return task.id !== id
    })

    if (!confirm('Deseja mesmo apagar essa tarefa?')) {
      return
    }

    setTasks(newListTasks)
    toast.error('Tarefa removida!')
  }

  function toggleTask({ id, value }: { id: string; value: boolean }) {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, isChecked: value }
      }

      return { ...task }
    })

    setTasks(updatedTasks)
  }

  function toggleDarkMode() {
    setDarkMode((state: boolean) => !state)
  }

  useEffect(() => {
    localStorage.setItem('todolist:tasks', JSON.stringify(tasks))
  }, [tasks])

  useEffect(() => {
    const isDarkMode = localStorage.getItem('todolist:theme') === 'true'
    setDarkMode(isDarkMode)
  }, [])

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode)
    localStorage.setItem('todolist:theme', darkMode)
  }, [darkMode])

  return (
    <>
      <Header darkMode={darkMode} onToggleDarkMode={toggleDarkMode} />
      <main className="mx-auto mt-[calc(0px_-_1.5rem_-_6px)] max-w-[736px] px-5 md:px-0">
        <AddNewTask onCreateNewTask={crateNewTask} />
        <CounterStatusTask
          totalTasksCreated={tasks.length}
          totalTasksCompleted={checkedTasksCounter}
        />
        {tasks.length > 0 ? (
          <>
            {tasks.map((task) => {
              return (
                <TasksList
                  key={task.id}
                  data={task}
                  onDeleteTask={deleteTask}
                  onToggleTask={toggleTask}
                />
              )
            })}
          </>
        ) : (
          <NotFoundTasks />
        )}
      </main>
      <Toaster />
    </>
  )
}
