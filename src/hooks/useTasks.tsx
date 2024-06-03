import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react'
import toast from 'react-hot-toast'
import { v4 as uuidv4 } from 'uuid'

interface Tasks {
  id: string
  content: string
  isChecked: boolean
  createdAt: Date
}

interface TasksContextType {
  tasks: Tasks[]
  checkedTasksCounter: number
  createNewTask: (content: string) => void
  deleteTask: (id: string) => void
  toggleTask: ({ id, value }: { id: string; value: boolean }) => void
}

interface TasksContextProviderProps {
  children: ReactNode
}

export const TasksContext = createContext({} as TasksContextType)

export function TasksContextProvider({ children }: TasksContextProviderProps) {
  const [tasks, setTasks] = useState<Tasks[]>(() => {
    const storedTasks = localStorage.getItem('@todolist:tasks-1.0.0')

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

  function createNewTask(content: string) {
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

  useEffect(() => {
    localStorage.setItem('@todolist:tasks-1.0.0', JSON.stringify(tasks))
  }, [tasks])

  return (
    <TasksContext.Provider
      value={{
        tasks,
        createNewTask,
        deleteTask,
        toggleTask,
        checkedTasksCounter,
      }}
    >
      {children}
    </TasksContext.Provider>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export function useTasks() {
  const context = useContext(TasksContext)

  return context
}
