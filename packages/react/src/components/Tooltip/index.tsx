import { ComponentProps, ReactNode } from 'react'
import { TooltipTrigger } from '@radix-ui/react-tooltip'
import {
  TooltipArrow,
  TooltipContainer,
  TooltipContent,
  TooltipPortal,
  TooltipRoot,
} from './styles'

export interface TooltipProps extends ComponentProps<typeof TooltipTrigger> {
  content: string | ReactNode
}

export function Tooltip({ content, children }: TooltipProps) {
  return (
    <TooltipContainer>
      <TooltipRoot>
        <TooltipTrigger asChild>{children}</TooltipTrigger>
        <TooltipPortal>
          <TooltipContent sideOffset={6}>
            <TooltipArrow />
            {content}
          </TooltipContent>
        </TooltipPortal>
      </TooltipRoot>
    </TooltipContainer>
  )
}

Tooltip.displayName = 'Tooltip'
