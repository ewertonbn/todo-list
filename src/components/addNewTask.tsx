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
        className="flex-1 rounded-lg border border-gray-700 bg-gray-500 p-4 transition-colors placeholder:text-gray-300 focus:border-transparent"
      />
      <button
        type="submit"
        className="flex items-center justify-center gap-2 rounded-lg bg-blue-dark p-4 transition-colors hover:bg-blue"
      >
        Criar
        <PlusCircle />
      </button>
    </form>
  )
}
