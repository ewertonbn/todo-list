import { AddNewTask } from '../components/addNewTask'
import { CounterStatusTask } from '../components/counterStatusTask'
import { NotFoundTasks } from '../components/notFoundTasks'
import { TasksList } from '../components/tasksList'
import { useTasks } from '../hooks/useTasks'

export function Home() {
  const { tasks } = useTasks()

  return (
    <main className="mx-auto mt-[calc(0px_-_1.5rem_-_6px)] max-w-[736px] px-5 md:px-0">
      <AddNewTask />
      <CounterStatusTask />
      <div className="mt-6">
        {tasks.length > 0 ? (
          <>
            {tasks.map((task) => {
              return <TasksList key={task.id} data={task} />
            })}
          </>
        ) : (
          <NotFoundTasks />
        )}
      </div>
    </main>
  )
}
