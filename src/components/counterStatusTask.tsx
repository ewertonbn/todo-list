interface CounterStatusTaskProps {
  totalTasksCreated: number
  totalTasksCompleted: number
}

export function CounterStatusTask({
  totalTasksCreated,
  totalTasksCompleted,
}: CounterStatusTaskProps) {
  return (
    <div className="mt-16 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <p className="text-sm font-bold leading-[100%] text-blue-dark dark:text-blue">
          Tarefas criadas
        </p>
        <span className="rounded-full bg-gray-200 px-2 py-[2px] text-xs font-bold leading-[100%] text-gray-600 dark:bg-gray-400 dark:text-gray-200">
          {totalTasksCreated}
        </span>
      </div>
      <div className="flex items-center gap-2">
        <p className="text-sm font-bold leading-[100%] text-purple">
          Conluídas
        </p>
        <span className="rounded-full bg-gray-200 px-2 py-[2px] text-xs font-bold leading-[100%] text-gray-600 dark:bg-gray-400 dark:text-gray-200">
          {totalTasksCompleted} de {totalTasksCreated}
        </span>
      </div>
    </div>
  )
}
