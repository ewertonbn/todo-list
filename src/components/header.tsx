import logoToDoList from '../assets/logo-todo-list.svg'

export function Header() {
  return (
    <header className="bg-gray-700 pb-20 pt-[4.5rem]">
      <div className="mx-auto flex max-w-[736px] items-center justify-center">
        <img src={logoToDoList} alt="Logotipo ToDo List" />
      </div>
    </header>
  )
}
