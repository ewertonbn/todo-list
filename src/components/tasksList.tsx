import { FormEvent } from 'react'
import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { Trash } from 'phosphor-react'
import { twMerge } from 'tailwind-merge'

import { ButtonCheckedCustom } from './buttonCheckedCustom'

interface TasksProps {
  id: string
  content: string
  isChecked: boolean
  createdAt: Date
}

interface TasksListProps {
  data: TasksProps
  onDeleteTask: (id: string) => void
  onToggleTask: ({ id, value }: { id: string; value: boolean }) => void
}

export function TasksList({
  data,
  onDeleteTask,
  onToggleTask,
}: TasksListProps) {
  const publishedDateRelativeToNow = formatDistanceToNow(data.createdAt, {
    locale: ptBR,
    addSuffix: true,
  })

  function handleDeleteTask(event: FormEvent) {
    onDeleteTask(event.currentTarget.id)
  }

  function handleToggleTask() {
    onToggleTask({ id: data.id, value: !data.isChecked })
  }

  return (
    <div className="mt-6">
      <div
        className={twMerge(
          'bg-gray-150 mt-3 flex items-center justify-between gap-3 rounded-lg border border-gray-400 p-4 first:mt-0 dark:bg-gray-500',
          data.isChecked ? 'border-gray-500' : 'border-gray-400',
        )}
      >
        <ButtonCheckedCustom
          isChecked={data.isChecked}
          id={data.id}
          onClick={handleToggleTask}
        />
        {data.isChecked ? (
          <p className="flex-1 text-sm text-gray-300">
            <del>{data.content}</del>
          </p>
        ) : (
          <p className="flex-1 text-sm">{data.content}</p>
        )}
        <p className="text-xs dark:text-gray-200">
          {publishedDateRelativeToNow}
        </p>
        <button
          type="button"
          className="flex h-6 w-6 items-center justify-center rounded-[4px] text-gray-300 transition-colors hover:bg-gray-200 hover:text-danger dark:hover:bg-gray-400"
          aria-label="Remover tarefa"
          title="Remover tarefa"
          onClick={handleDeleteTask}
          id={data.id}
        >
          <Trash />
        </button>
      </div>
    </div>
  )
}
