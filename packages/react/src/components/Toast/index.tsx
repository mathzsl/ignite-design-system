import { ToastProvider } from '@radix-ui/react-toast'
import {
  ToastClose,
  ToastDescription,
  ToastRoot,
  ToastTitle,
  ToastViewport,
} from './styles'
import { ComponentProps } from 'react'
import { X } from 'phosphor-react'

export interface ToastProps extends ComponentProps<typeof ToastRoot> {
  title: string
  description?: string
}

export function Toast({ title, description, ...props }: ToastProps) {
  return (
    <ToastProvider>
      <ToastRoot {...props}>
        <ToastTitle>{title}</ToastTitle>
        {description && <ToastDescription>{description}</ToastDescription>}
        <ToastClose asChild>
          <X weight="light" size={20} />
        </ToastClose>
      </ToastRoot>

      <ToastViewport />
    </ToastProvider>
  )
}

Toast.displayName = 'Toast'
