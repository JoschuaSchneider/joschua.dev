import { ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

type TextProps = {
  className?: string
  unstyled?: boolean
  children: ReactNode
}

export const Text = ({ children, unstyled = false, className }: TextProps) => (
  <p
    className={twMerge(
      !unstyled && 'text-gray-800 dark:text-gray-300 mb-2',
      className
    )}
  >
    {children}
  </p>
)
