import { Slot } from '@radix-ui/react-slot';
import React, { PropsWithChildren } from 'react'
import { twMerge } from 'tailwind-merge';

type ContainerProps = {
  asChild?: boolean;
  className?: string
}

export const Container = ({ asChild, className, ...props }: PropsWithChildren<ContainerProps>) => {
  const Comp = asChild ? Slot : "div"

  return <Comp className={twMerge("max-w-3xl px-8 mx-auto", className)}  {...props} />
}

