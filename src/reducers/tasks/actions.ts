import { Task } from './reducer'

export enum ActionTypes {
  ADD_NEW_TASK = 'ADD_NEW_TASK',
  DELETE_TASK = 'DELETE_TASK',
  TOGGLE_TASK_AS_FINISHED = 'TOGGLE_TASK_AS_FINISHED',
}

export type ActionTypesProps =
  | { type: ActionTypes.ADD_NEW_TASK; payload: { newTask: Task } }
  | { type: ActionTypes.DELETE_TASK; payload: { id: string } }
  | {
      type: ActionTypes.TOGGLE_TASK_AS_FINISHED
      payload: { id: string; value: boolean }
    }

export function addNewTaskAction(newTask: Task): ActionTypesProps {
  return {
    type: ActionTypes.ADD_NEW_TASK,
    payload: {
      newTask,
    },
  }
}

export function deleteTaskAction(id: string): ActionTypesProps {
  return {
    type: ActionTypes.DELETE_TASK,
    payload: {
      id,
    },
  }
}

export function toggleTaskAsFinishedAction(
  id: string,
  value: boolean,
): ActionTypesProps {
  return {
    type: ActionTypes.TOGGLE_TASK_AS_FINISHED,
    payload: {
      id,
      value,
    },
  }
}
