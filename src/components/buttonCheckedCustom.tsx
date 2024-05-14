import { ButtonHTMLAttributes } from 'react'
import { twMerge } from 'tailwind-merge'

interface ButtonCheckedCustomProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  isChecked?: boolean
}

export function ButtonCheckedCustom({
  isChecked,
  ...props
}: ButtonCheckedCustomProps) {
  return (
    <button
      type="button"
      {...props}
      aria-label="Marcar ou desmarcar tarefa como feita"
      title="Marcar ou desmarcar tarefa como feita"
      className={twMerge(
        'relative h-5 w-5 rounded-full border-2 transition-colors',
        isChecked
          ? 'border-purple-dark bg-purple-dark before:absolute before:inset-0 before:m-auto before:w-3 before:bg-[url("../icon-checked.svg")] before:bg-contain before:bg-center before:bg-no-repeat before:content-[""] hover:border-purple hover:bg-purple'
          : 'border-blue bg-gray-500 hover:border-blue-dark hover:bg-blue-dark/20',
      )}
    />
  )
}
