import { ChangeEvent, FormEvent, useState } from 'react'
import { PlusCircle } from 'phosphor-react'

interface AddNewTaskProps {
  onCreateNewTask: (content: string) => void
}

export function AddNewTask({ onCreateNewTask }: AddNewTaskProps) {
  const [newTask, setNewTask] = useState('')

  function handleAddNewTask(event: FormEvent) {
    event.preventDefault()

    onCreateNewTask(newTask)
    setNewTask('')
  }

  function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
    setNewTask(event.target.value)
  }

  return (
    <form
      onSubmit={handleAddNewTask}
      className="items-venter flex justify-center gap-2"
    >
      <input
        type="text"
        name="task"
        id="task"
        placeholder="Adicione uma nova tarefa"
        value={newTask}
        onChange={handleNewTaskChange}
        className="bg-gray-150 flex-1 rounded-lg border border-gray-700 p-4 transition-colors placeholder:text-gray-600 focus:border-transparent dark:bg-gray-500 dark:placeholder:text-gray-300"
      />
      <button
        type="submit"
        className="flex items-center justify-center gap-2 rounded-lg bg-blue-dark p-4 text-gray-100 transition-colors hover:brightness-90 dark:hover:bg-blue"
      >
        Criar
        <PlusCircle />
      </button>
    </form>
  )
}
