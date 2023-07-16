import { ComponentProps, ElementType } from 'react'
import { styled } from '../styles'

export const Box = styled('div', {
  border: '1px solid $gray600',
  borderRadius: '$md',
  padding: '$6',
  backgroundColor: '$gray800',
})

export interface BoxProps extends ComponentProps<typeof Box> {
  as?: ElementType
}

Box.displayName = 'Box'
