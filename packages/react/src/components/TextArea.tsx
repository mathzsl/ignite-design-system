import { ComponentProps } from 'react'
import { styled } from '../styles'

export const TextArea = styled('textarea', {
  minHeight: 80,
  fontFamily: '$default',
  fontWeight: '$regular',
  fontSize: '$sm',
  padding: '$3 $4',
  border: '2px solid $gray900',
  borderRadius: '$sm',
  resize: 'vertical',
  boxSizing: 'border-box',
  color: '$white',
  backgroundColor: '$gray900',

  '&:focus': {
    outline: 0,
    borderColor: '$ignite300',
  },

  '&:disabled': {
    opacity: 0.5,
    cursor: 'not-allowed',
  },

  '&:placeholder': {
    color: '$gray400',
  },
})

export interface TextAreaProps extends ComponentProps<typeof TextArea> {}

TextArea.displayName = 'TextArea'
