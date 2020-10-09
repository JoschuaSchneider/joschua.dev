import { ReactNode } from 'react'
import clsx from 'clsx'

type Props = {
  className?: string
  unstyled?: boolean
  children: ReactNode
}

const Text = ({ children, unstyled = false, className }: Props) => (
  <p className={clsx(!unstyled && 'text-gray-800 mb-2', className)}>
    {children}
  </p>
)

export default Text
