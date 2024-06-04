import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useReducer,
} from 'react'
import toast from 'react-hot-toast'
import { v4 as uuidv4 } from 'uuid'

import {
  addNewTaskAction,
  deleteTaskAction,
  toggleTaskAsFinishedAction,
} from '../reducers/tasks/actions'
import { Task, tasksReducer } from '../reducers/tasks/reducer'

interface TasksContextType {
  tasks: Task[]
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
  const [tasksState, dispatch] = useReducer(
    tasksReducer,
    {
      tasks: [],
    },
    (initialState) => {
      const storedStateAsJSON = localStorage.getItem('@todolist:tasks-1.0.0')

      if (storedStateAsJSON) {
        return JSON.parse(storedStateAsJSON)
      }

      return initialState
    },
  )

  const { tasks } = tasksState

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

    dispatch(addNewTaskAction(newTask))
    toast.success('Tarefa adicionada!')
  }

  function deleteTask(id: string) {
    if (!confirm('Deseja mesmo apagar essa tarefa?')) {
      return
    }

    dispatch(deleteTaskAction(id))
    toast.success('Tarefa removida!')
  }

  function toggleTask({ id, value }: { id: string; value: boolean }) {
    dispatch(toggleTaskAsFinishedAction(id, value))
  }

  useEffect(() => {
    const stateJSON = JSON.stringify(tasksState)

    localStorage.setItem('@todolist:tasks-1.0.0', stateJSON)
  }, [tasksState])

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
