import { ComponentProps } from 'react'
import { styled } from '../styles'

export const Box = styled('div', {
  border: '1px solid $gray600',
  borderRadius: '$md',
  padding: '$4',
  backgroundColor: '$gray800',
})

export interface BoxProps extends ComponentProps<typeof Box> {}
