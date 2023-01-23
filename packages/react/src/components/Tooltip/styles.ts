import * as Tooltip from '@radix-ui/react-tooltip'
import { styled } from '../../styles'

export const TooltipContainer = styled(Tooltip.Provider, {})

export const TooltipRoot = styled(Tooltip.Root, {})

export const TooltipTrigger = styled(Tooltip.Trigger, {})

export const TooltipPortal = styled(Tooltip.Portal, {})

export const TooltipContent = styled(Tooltip.Content, {
  fontFamily: '$default',
  fontSize: '$sm',
  fontWeight: '$medium',
  padding: '$3 $4',
  userSelect: 'none',
  borderRadius: '$sm',
  filter: 'drop-shadow(4px 16px 24px rgba(0,0,0,0.25))',
  color: '$gray100',
  backgroundColor: '$gray900',
})

export const TooltipArrow = styled(Tooltip.Arrow, {
  fill: '$gray900',
})
