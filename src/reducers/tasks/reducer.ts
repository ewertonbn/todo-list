import { ActionTypes, ActionTypesProps } from './actions'

export interface Task {
  id: string
  content: string
  isChecked: boolean
  createdAt: Date
}

interface TasksState {
  tasks: Task[]
}

export function tasksReducer(state: TasksState, action: ActionTypesProps) {
  switch (action.type) {
    case ActionTypes.ADD_NEW_TASK:
      return {
        ...state,
        tasks: [...state.tasks, action.payload.newTask],
      }
    case ActionTypes.DELETE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter((task) => {
          return task.id !== action.payload.id
        }),
      }
    case ActionTypes.TOGGLE_TASK_AS_FINISHED:
      return {
        ...state,
        tasks: state.tasks.map((task) => {
          if (task.id === action.payload.id) {
            return { ...task, isChecked: action.payload.value }
          } else {
            return task
          }
        }),
      }
    default:
      return state
  }
}
