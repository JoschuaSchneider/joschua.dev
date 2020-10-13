import clsx from 'clsx'
import React, { ReactNode } from 'react'

const headingStyles = {
  h1: 'text-4xl md:text-5xl',
  h2: 'text-3xl md:text-4xl',
  h3: 'text-2xl md:text-3xl',
  h4: 'text-xl md:text-2xl',
  h5: 'text-lg md:text-xl',
}

type Props = {
  level?: keyof typeof headingStyles
  className?: string
  unstyled?: boolean
  children: ReactNode
}

const Heading = ({
  level = 'h1',
  className = '',
  unstyled = false,
  children,
}: Props) =>
  React.createElement(
    level,
    {
      className: unstyled
        ? className
        : clsx('font-bold dark:text-white', headingStyles[level], className),
    },
    children
  )

export default Heading
