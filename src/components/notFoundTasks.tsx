import iconClipboardImg from '../assets/icon-clipboard.svg'

export function NotFoundTasks() {
  return (
    <section className="mt-6 rounded-lg border-t border-[#333333] p-16">
      <div className="flex flex-col items-center text-gray-300">
        <img
          src={iconClipboardImg}
          alt="Ícone que ilustra um caderno com atividades listadas"
          className="mb-4"
        />
        <p>
          <strong>Você ainda não tem tarefas cadastradas!</strong>
        </p>
        <p>Crie tarefas e organize seus itens a fazer</p>
      </div>
    </section>
  )
}
