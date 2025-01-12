import { createElement, PropsWithChildren } from 'react'
import { twMerge } from 'tailwind-merge'

const headingStyles = {
  h1: 'text-4xl md:text-5xl',
  h2: 'text-3xl md:text-4xl',
  h3: 'text-2xl md:text-3xl',
  h4: 'text-xl md:text-2xl',
  h5: 'text-lg md:text-xl',
}

type HeadingProps = {
  level?: keyof typeof headingStyles
  className?: string
  unstyled?: boolean
}

export const Heading = ({
  level = 'h1',
  className = '',
  unstyled = false,
  children,
}: PropsWithChildren<HeadingProps>) =>
  createElement(
    level,
    {
      className: unstyled
        ? className
        : twMerge('font-bold dark:text-white', headingStyles[level], className),
    },
    children
  )

