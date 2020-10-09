import React, { ElementType, ReactNode } from 'react'
import clsx from 'clsx'

type Props = {
  children: ReactNode
  as?: ElementType | keyof JSX.IntrinsicElements
  className?: string
}

const Container = ({ children, as = 'div', className }: Props) =>
  React.createElement(
    as,
    {
      className: clsx('max-w-3xl px-8 mx-auto', className),
    },
    children
  )

export default Container
